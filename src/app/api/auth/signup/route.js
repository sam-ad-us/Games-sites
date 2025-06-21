import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { generateToken } from '@/lib/jwt';

export async function POST(request) {
  try {
    await connectDB();
    
    const { name, email, username, password } = await request.json();

    // Validation
    if (!name || !email || !username) {
      return NextResponse.json(
        { error: 'Name, email, and username are required' },
        { status: 400 }
      );
    }

    // Check if email ends with .com
    if (!email.endsWith('.com')) {
      return NextResponse.json(
        { error: 'Only .com email domains are allowed' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { username }]
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email or username already exists' },
        { status: 400 }
      );
    }

    // Create user
    const userData = {
      name,
      email: email.toLowerCase(),
      username,
      isGuest: false
    };

    // Add password only if provided
    if (password) {
      userData.password = password;
    }

    const user = await User.create(userData);

    // Generate token
    const token = generateToken(user);

    // Return user data (without password) and token
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      isGuest: user.isGuest,
      createdAt: user.createdAt
    };

    return NextResponse.json({
      message: 'User created successfully',
      user: userResponse,
      token
    }, { status: 201 });

  } catch (error) {
    console.error('Signup error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: errors.join(', ') },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 