import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { generateToken } from '@/lib/jwt';

export async function POST(request) {
  try {
    await connectDB();
    
    // Create a guest user
    const guestUser = await User.createGuest();
    
    // Generate token for guest user
    const token = generateToken(guestUser);

    // Return guest user data and token
    const userResponse = {
      _id: guestUser._id,
      name: guestUser.name,
      email: guestUser.email,
      username: guestUser.username,
      isGuest: guestUser.isGuest,
      createdAt: guestUser.createdAt
    };

    return NextResponse.json({
      message: 'Guest user created successfully',
      user: userResponse,
      token
    }, { status: 201 });

  } catch (error) {
    console.error('Guest user creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 