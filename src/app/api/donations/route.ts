import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, donorAddress, fundraiserId } = body;

    if (!amount || !donorAddress || !fundraiserId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const parsedAmount = parseFloat(amount);

    // Get current fundraiser
    const fundraiser = await prisma.fundraiser.findUnique({
      where: { id: fundraiserId },
    });

    if (!fundraiser) {
      return NextResponse.json(
        { error: 'Fundraiser not found' },
        { status: 404 }
      );
    }

    // Create donation and update fundraiser in a transaction
    const [donation] = await prisma.$transaction([
      prisma.donation.create({
        data: {
          amount: parsedAmount,
          donorAddress,
          fundraiserId,
        },
      }),
      prisma.fundraiser.update({
        where: { id: fundraiserId },
        data: {
          raised: fundraiser.raised + parsedAmount,
        },
      }),
    ]);

    return NextResponse.json(donation);
  } catch (error) {
    console.error('Error creating donation:', error);
    return NextResponse.json(
      { error: 'Failed to create donation' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const donations = await prisma.donation.findMany({
      include: {
        fundraiser: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(donations);
  } catch (error) {
    console.error('Error fetching donations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch donations' },
      { status: 500 }
    );
  }
} 