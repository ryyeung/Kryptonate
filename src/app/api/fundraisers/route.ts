import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const fundraisers = await prisma.fundraiser.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(fundraisers);
  } catch (error) {
    console.error('Error fetching fundraisers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch fundraisers' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, walletAddress, imageUrl } = body;

    if (!title || !description || !walletAddress || !imageUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const fundraiser = await prisma.fundraiser.create({
      data: {
        title,
        description,
        walletAddress,
        imageUrl,
        goal: 0, // Default goal
        raised: 0, // Initial raised amount
        category: 'General', // Default category
        organizer: 'Anonymous', // Default organizer
        isActive: true,
      },
    });

    return NextResponse.json(fundraiser);
  } catch (error) {
    console.error('Error creating fundraiser:', error);
    return NextResponse.json(
      { error: 'Failed to create fundraiser' },
      { status: 500 }
    );
  }
} 