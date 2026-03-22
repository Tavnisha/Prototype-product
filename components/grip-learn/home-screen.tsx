"use client"

import type { Screen } from "@/app/page"

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="flex flex-col h-full min-h-[812px] bg-white relative">
      {/* Header */}
      <div className="pt-12 px-5 pb-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-[#1B2B6B] font-bold text-2xl tracking-tight">GR</span>
          <span className="text-[#2AB07C] font-bold text-2xl tracking-tight">i</span>
          <span className="text-[#1B2B6B] font-bold text-2xl tracking-tight">P</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#E3EEF2] flex items-center justify-center">
          <span className="text-[#1B2B6B] font-semibold text-sm">TK</span>
        </div>
      </div>

      {/* Featured Bond Card */}
      <div className="mx-5 rounded-2xl bg-[#1B2B6B] p-6 text-center relative overflow-hidden">
        {/* Radial background pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="radialBg" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            <circle cx="160" cy="100" r="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none" />
            <circle cx="160" cy="100" r="60" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" fill="none" />
            <circle cx="160" cy="100" r="100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none" />
            <circle cx="160" cy="100" r="120" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" fill="none" />
            {/* Radial lines */}
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="160"
                y1="100"
                x2={160 + 120 * Math.cos((i * 30 * Math.PI) / 180)}
                y2={100 + 120 * Math.sin((i * 30 * Math.PI) / 180)}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>
        
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#F97B7B] text-white text-xs font-medium rounded-full mb-3">
            Featured Bond
          </span>
          <div className="flex items-baseline justify-center gap-2 mb-1">
            <span className="text-[#2AB07C] text-5xl font-bold">13.50%</span>
            <span className="text-[#2AB07C] text-xl font-medium">YTM</span>
          </div>
          <p className="text-white text-sm mb-0.5">
            Starts from <span className="font-semibold">₹10,000</span>
          </p>
          <p className="text-white/70 text-sm mb-5">Monthly payout</p>
          <button className="bg-[#2AB07C] text-white px-10 py-3.5 rounded-xl font-semibold text-base">
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
          <p className="text-white font-semibold text-base">New to bonds?</p>
          <p className="text-white/80 text-sm">Explained in 2 minutes</p>
        </div>
        <button className="bg-white text-[#2AB07C] px-6 py-2.5 rounded-lg font-semibold text-base">
          Start
        </button>
      </div>

      {/* Investment Options */}
      <div className="px-5 mt-6">
        <h2 className="text-[#1B2B6B] font-bold text-lg mb-4">Investment Options on Grip</h2>
        <div className="flex gap-3">
          {/* Bonds */}
          <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center">
            <div className="w-14 h-14 bg-[#E8F4F2] rounded-full flex items-center justify-center mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2AB07C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <span className="text-[#1B2B6B] text-sm font-medium">Bonds</span>
          </div>
          {/* Baskets */}
          <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center">
            <div className="w-14 h-14 bg-[#E8F4F2] rounded-full flex items-center justify-center mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2AB07C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="9" rx="1" />
                <rect x="14" y="3" width="7" height="5" rx="1" />
                <rect x="14" y="12" width="7" height="9" rx="1" />
                <rect x="3" y="16" width="7" height="5" rx="1" />
              </svg>
            </div>
            <span className="text-[#1B2B6B] text-sm font-medium">Baskets</span>
          </div>
          {/* Sovereign */}
          <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center">
            <div className="w-14 h-14 bg-[#FDF6E3] rounded-full flex items-center justify-center mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="10" />
                <line x1="9" y1="21" x2="9" y2="10" />
                <line x1="15" y1="21" x2="15" y2="10" />
                <line x1="20" y1="21" x2="20" y2="10" />
                <path d="M2 21h20" />
                <path d="M12 7l-9 3h18l-9-3z" />
                <path d="M12 3v4" />
              </svg>
            </div>
            <span className="text-[#1B2B6B] text-sm font-medium">Sovereign</span>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Fade gradient at bottom */}
      <div className="absolute bottom-20 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Bottom Navigation */}
      <div className="px-4 pb-4 pt-2 bg-white">
        <div className="flex items-end justify-around">
          {/* Discover - Active */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#E3EEF2] rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B2B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#1B2B6B" stroke="#1B2B6B" />
              </svg>
            </div>
            <span className="text-[#1B2B6B] text-xs mt-1 font-medium">Discover</span>
          </div>
          
          {/* Invest */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <span className="text-gray-400 text-xs mt-1">Invest</span>
          </div>
          
          {/* QuickStart - Center */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#2AB07C] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">₹</span>
            </div>
            <span className="text-gray-500 text-xs mt-1">QuickStart</span>
          </div>
          
          {/* Referral */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <circle cx="17" cy="11" r="3" />
                <path d="M21 21v-1.5a2.5 2.5 0 0 0-2.5-2.5" />
              </svg>
            </div>
            <span className="text-gray-400 text-xs mt-1">Referral</span>
          </div>
          
          {/* Portfolio */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
                <path d="M2 9v1c0 1.1.9 2 2 2h1" />
              </svg>
            </div>
            <span className="text-gray-400 text-xs mt-1">Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  )
}
