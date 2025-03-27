import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, donorAddress, fundraiserId } = body;

    const donation = await prisma.donation.create({
      data: {
        amount,
        donorAddress,
        fundraiserId,
      },
    });

    return NextResponse.json(donation);
  } catch (error) {
    console.error('Error creating donation:', error);
    return NextResponse.json(
      { error: 'Failed to create donation' },
      { status: 500 }
    );
  }
} 