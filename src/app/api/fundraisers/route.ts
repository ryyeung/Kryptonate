import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

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

    const fundraiser = await prisma.fundraiser.create({
      data: {
        title,
        description,
        walletAddress,
        imageUrl,
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