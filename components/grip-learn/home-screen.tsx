"use client"

import type { Screen } from "@/app/page"
import { TrendingUp, Building2, Landmark, Target, Grid2X2, IndianRupee, Users, Wallet } from "lucide-react"

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="flex flex-col h-full min-h-[812px]">
      {/* Header */}
      <div className="pt-10 px-5 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-[#1B2B6B] font-bold text-xl">GR</span>
          <span className="text-[#2AB07C] font-bold text-xl">i</span>
          <span className="text-[#1B2B6B] font-bold text-xl">P</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#E8F4F8] flex items-center justify-center">
          <span className="text-[#1B2B6B] font-semibold text-sm">TK</span>
        </div>
      </div>

      {/* Featured Bond Card */}
      <div className="mx-5 rounded-2xl bg-gradient-to-br from-[#1B2B6B] to-[#0F1A4A] p-5 text-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full" />
        </div>
        
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-[#F87171]/20 text-[#F87171] text-xs rounded-full mb-3">
            Featured Bond
          </span>
          <div className="flex items-baseline justify-center gap-1 mb-1">
            <span className="text-[#2AB07C] text-4xl font-bold">13.50%</span>
            <span className="text-[#2AB07C] text-lg">YTM</span>
          </div>
          <p className="text-white text-sm mb-1">
            Starts from <span className="font-semibold">₹10,000</span>
          </p>
          <p className="text-white/70 text-sm mb-4">Monthly payout</p>
          <button className="bg-[#2AB07C] text-white px-8 py-3 rounded-lg font-semibold">
            Explore Now
          </button>
        </div>
      </div>

      {/* New to bonds CTA */}
      <div 
        className="mx-5 mt-4 rounded-2xl bg-[#2AB07C] p-4 flex items-center justify-between cursor-pointer"
        onClick={() => onNavigate("course")}
      >
        <div>
          <p className="text-white font-semibold">New to bonds?</p>
          <p className="text-white/80 text-sm">Explained in 2 minutes</p>
        </div>
        <button className="bg-white text-[#2AB07C] px-5 py-2 rounded-lg font-semibold">
          Start
        </button>
      </div>

      {/* Investment Options */}
      <div className="px-5 mt-6">
        <h2 className="text-[#1B2B6B] font-semibold text-lg mb-4">Investment Options on Grip</h2>
        <div className="flex gap-3">
          <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 bg-[#E8F4F8] rounded-full flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-[#2AB07C]" />
            </div>
            <span className="text-[#1B2B6B] text-sm font-medium">Bonds</span>
          </div>
          <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 bg-[#E8F4F8] rounded-full flex items-center justify-center mb-2">
              <Building2 className="w-6 h-6 text-[#2AB07C]" />
            </div>
            <span className="text-[#1B2B6B] text-sm font-medium">Baskets</span>
          </div>
          <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 bg-[#E8F4F8] rounded-full flex items-center justify-center mb-2">
              <Landmark className="w-6 h-6 text-[#D4A853]" />
            </div>
            <span className="text-[#1B2B6B] text-sm font-medium">Sovereign</span>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Navigation */}
      <div className="px-5 pb-6 pt-3">
        <div className="flex items-center justify-around bg-white rounded-2xl py-3 shadow-sm border border-gray-100">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#E8F4F8] rounded-full flex items-center justify-center">
              <Target className="w-5 h-5 text-[#1B2B6B]" />
            </div>
            <span className="text-[#1B2B6B] text-xs mt-1 font-medium">Discover</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Grid2X2 className="w-5 h-5 text-gray-400" />
            </div>
            <span className="text-gray-400 text-xs mt-1">Invest</span>
          </div>
          <div className="flex flex-col items-center -mt-4">
            <div className="w-14 h-14 bg-[#2AB07C] rounded-full flex items-center justify-center shadow-lg">
              <IndianRupee className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-500 text-xs mt-1">QuickStart</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-gray-400" />
            </div>
            <span className="text-gray-400 text-xs mt-1">Referral</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Wallet className="w-5 h-5 text-gray-400" />
            </div>
            <span className="text-gray-400 text-xs mt-1">Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  )
}
