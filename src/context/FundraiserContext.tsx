'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Fundraiser {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  walletAddress: string;
  createdAt: string;
  updatedAt: string;
}

interface FundraiserContextType {
  fundraisers: Fundraiser[];
  addFundraiser: (fundraiser: Omit<Fundraiser, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const FundraiserContext = createContext<FundraiserContextType | undefined>(undefined);

export function FundraiserProvider({ children }: { children: React.ReactNode }) {
  const [fundraisers, setFundraisers] = useState<Fundraiser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFundraisers();
  }, []);

  const fetchFundraisers = async () => {
    try {
      const response = await fetch('/api/fundraisers');
      if (!response.ok) throw new Error('Failed to fetch fundraisers');
      const data = await response.json();
      setFundraisers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const addFundraiser = async (fundraiser: Omit<Fundraiser, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const response = await fetch('/api/fundraisers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fundraiser),
      });

      if (!response.ok) throw new Error('Failed to create fundraiser');

      const newFundraiser = await response.json();
      setFundraisers((prev) => [newFundraiser, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  return (
    <FundraiserContext.Provider value={{ fundraisers, addFundraiser, isLoading, error }}>
      {children}
    </FundraiserContext.Provider>
  );
}

export function useFundraisers() {
  const context = useContext(FundraiserContext);
  if (context === undefined) {
    throw new Error('useFundraisers must be used within a FundraiserProvider');
  }
  return context;
} 