import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { generateToken } from '@/lib/jwt';

export async function POST(request) {
  try {
    await connectDB();
    
    const { email, username, password } = await request.json();

    // Validation - user can login with either email or username
    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    if (!email && !username) {
      return NextResponse.json(
        { error: 'Email or username is required' },
        { status: 400 }
      );
    }

    // Find user by email or username
    const user = await User.findOne({
      $or: [
        { email: email?.toLowerCase() },
        { username: username }
      ]
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Check if user has password (for users who signed up without password)
    if (!user.password) {
      return NextResponse.json(
        { error: 'This account was created without a password. Please sign up again.' },
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate token
    const token = generateToken(user);

    // Return user data (without password) and token
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      isGuest: user.isGuest,
      lastLogin: user.lastLogin
    };

    return NextResponse.json({
      message: 'Login successful',
      user: userResponse,
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 