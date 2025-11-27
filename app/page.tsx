// app/page.tsx
'use client';

import React, { FC, useMemo, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';

declare global {
  interface Window {
    solana?: any;
  }
}

interface AirRightAsset {
  id: number;
  location: string;
  building: string;
  priceUSD: number;
  heightLevels: string;
  tokenSymbol: string;
  category: string;
  assetType: 'Air Rights' | 'Telecom Infrastructure';
}

const DUMMY_ASSETS: AirRightAsset[] = [
  { id: 1, location: "Los Angeles, CA", building: "Commercial Air Rights - LA Tower 1", priceUSD: 50000, heightLevels: "1st to 10th Floor", tokenSymbol: "LAAIR10", category: "High-Value Real Estate", assetType: 'Air Rights' },
  { id: 2, location: "Washington, D.C.", building: "5G Tower Lease Contract", priceUSD: 120000, heightLevels: "Quarterly Yield", tokenSymbol: "DC5GREV", category: "Income Infrastructure", assetType: 'Telecom Infrastructure' },
  { id: 3, location: "Miami, FL", building: "Coastal Condo Z Air Rights", priceUSD: 30000, heightLevels: "Above 2nd Floor", tokenSymbol: "MIAIR02", category: "Residential", assetType: 'Air Rights' },
  { id: 4, location: "New York, NY", building: "Manhattan Skyscraper Air Rights", priceUSD: 90000, heightLevels: "Top Section Airspace", tokenSymbol: "NYAIR99", category: "Prime Real Estate", assetType: 'Air Rights' },
  { id: 5, location: "Chicago, IL", building: "Midwest Telecom Hub Lease", priceUSD: 80000, heightLevels: "Revenue Yield", tokenSymbol: "CHI5G", category: "Telecom", assetType: 'Telecom Infrastructure' },
  { id: 6, location: "Dallas, TX", building: "Downtown Tower Air Rights", priceUSD: 55000, heightLevels: "5th to 12th Floor", tokenSymbol: "DAL12FL", category: "Urban Expansion", assetType: 'Air Rights' },
  { id: 7, location: "Houston, TX", building: "Energy District 5G Poles", priceUSD: 70000, heightLevels: "Lease Revenue", tokenSymbol: "HOU5G", category: "Infrastructure", assetType: 'Telecom Infrastructure' },
  { id: 8, location: "Boston, MA", building: "Historic Building Air Rights", priceUSD: 45000, heightLevels: "Rooftop Airspace", tokenSymbol: "BOSROOF", category: "Heritage", assetType: 'Air Rights' },
  { id: 9, location: "Atlanta, GA", building: "Smart City Tower Lease", priceUSD: 65000, heightLevels: "IoT Infra", tokenSymbol: "ATL-IOT", category: "Smart Infra", assetType: 'Telecom Infrastructure' },
  { id: 10, location: "Seattle, WA", building: "Waterfront Tower Expansion Rights", priceUSD: 95000, heightLevels: "View Airspace", tokenSymbol: "SEA-VIEW", category: "Premium", assetType: 'Air Rights' },
  { id: 11, location: "San Francisco, CA", building: "Tech District 5G Lease", priceUSD: 140000, heightLevels: "Network Hosting", tokenSymbol: "SF5G", category: "Infrastructure", assetType: 'Telecom Infrastructure' },
  { id: 12, location: "Denver, CO", building: "Mountain View Air Rights", priceUSD: 38000, heightLevels: "Panoramic Airspace", tokenSymbol: "DENVIEW", category: "Scenic", assetType: 'Air Rights' },
  { id: 13, location: "Phoenix, AZ", building: "Solar District Tower Lease", priceUSD: 60000, heightLevels: "Sustainable Infra", tokenSymbol: "AZSOLAR", category: "Green Infra", assetType: 'Telecom Infrastructure' },
  { id: 13, location: "Phoenix, AZ", building: "Solar District Tower Lease", priceUSD: 60000, heightLevels: "Sustainable Infra", tokenSymbol: "AZSOLAR", category: "Green Infra", assetType: 'Telecom Infrastructure' },
  { id: 14, location: "Las Vegas, NV", building: "Strip Hotel Air Rights", priceUSD: 160000, heightLevels: "Sky Showcase", tokenSymbol: "LVSKY", category: "Entertainment", assetType: 'Air Rights' },
  { id: 15, location: "Philadelphia, PA", building: "Historic Block Expansion", priceUSD: 50000, heightLevels: "Rooftop Rezone", tokenSymbol: "PHLZONE", category: "Urban Renewal", assetType: 'Air Rights' },
  { id: 16, location: "Detroit, MI", building: "Revival Telecom Poles", priceUSD: 30000, heightLevels: "Infra Leasing", tokenSymbol: "DETREV", category: "Industrial", assetType: 'Telecom Infrastructure' },
  { id: 17, location: "San Diego, CA", building: "Harbor District Air Rights", priceUSD: 88000, heightLevels: "Marina View", tokenSymbol: "SDVIEW", category: "Coastal", assetType: 'Air Rights' },
  { id: 18, location: "Minneapolis, MN", building: "Skyway Tower Infra", priceUSD: 46000, heightLevels: "Urban Mobility", tokenSymbol: "MINSKY", category: "Smart City", assetType: 'Telecom Infrastructure' },
  { id: 19, location: "Orlando, FL", building: "Entertainment Zone Air Rights", priceUSD: 52000, heightLevels: "Above 3rd Floor", tokenSymbol: "ORLAIR", category: "Theme District", assetType: 'Air Rights' },
  { id: 20, location: "Portland, OR", building: "Eco-Tower Air Rights", priceUSD: 41000, heightLevels: "Green Roof", tokenSymbol: "PORTAIR", category: "Eco Urban", assetType: 'Air Rights' }
];

const LandingPage: FC = () => {
  const { connected, publicKey } = useWallet();

  // --- Search + pagination state (TypeScript-safe) ---
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(3);

  // Filtered assets (memoized)
  const filteredAssets = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return DUMMY_ASSETS;
    return DUMMY_ASSETS.filter((asset) =>
      asset.location.toLowerCase().includes(q) ||
      asset.tokenSymbol.toLowerCase().includes(q) ||
      asset.building.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  const handlePurchase = async (asset: AirRightAsset) => {
    alert("Coming soon! I am joining SkyTrade to build this 🚀");
  };
  


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col">
      <header className="fixed top-0 left-0 w-full p-4 bg-white shadow-md z-50 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">Sky.Trade</h1>
        <WalletMultiButton />
      </header>

      {/* Hero */}
      <section className="pt-28 px-6 lg:px-20 text-center md:text-left flex flex-col md:flex-row gap-10 items-center">
        <div>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Trade The Future Of Urban Space
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-xl">
            Tokenizing Air Rights & Digital Infrastructure using Solana’s speed and security.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition">
            Explore Marketplace
          </button>
        </div>
        <div className="w-full h-64 flex justify-center items-center p-4 rounded-2xl">
            <img src="/images/earth.avif" alt="Hero" width={500} height={400} className="rounded-2xl" />    
        </div>
      </section>

      {/* Assets */}
      <section className="px-6 lg:px-20 py-16">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-3">Live Tokenized Assets</h3>
        <p className="text-center text-gray-600 mb-6">Fractional access to high-value RWAs.</p>

        {/* Search Bar (placed on top of heading's content as requested) */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by location, building or token symbol"
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              // reset visibleCount when query changes (nice UX)
              setVisibleCount(3);
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAssets.slice(0, visibleCount).map(asset => (
            <div key={asset.id} className="bg-white shadow-lg rounded-xl p-6 relative">
              <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full ${asset.assetType === 'Air Rights' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>
                {asset.assetType}
              </span>

              <h4 className="text-lg font-bold text-gray-800 mb-1">{asset.building}</h4>
              <p className="text-gray-500 text-sm mb-1">📍 {asset.location}</p>
              <p className="text-gray-500 text-sm mb-4">{asset.heightLevels}</p>

              <p className="text-2xl font-extrabold text-green-600 my-4">
                ${asset.priceUSD.toLocaleString('en-US')}
              </p>

              <button
                onClick={() => handlePurchase(asset)}
                disabled={!connected}
                className={`w-full py-3 rounded-lg font-semibold transition ${connected ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 cursor-not-allowed text-white'}`}
              >
                {connected ? `Buy ${asset.tokenSymbol}` : 'Connect Wallet'}
              </button>
            </div>
          ))}
        </div>

        {visibleCount < filteredAssets.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
            >
              Show More
            </button>
          </div>
        )}
      </section>

    
    </div>
  );
};

export default LandingPage;
