"use client"

import type { Screen } from "@/app/page"
import { Trophy } from "lucide-react"

interface CertificateScreenProps {
  score: number
  onNavigate: (screen: Screen) => void
}

export function CertificateScreen({ score, onNavigate }: CertificateScreenProps) {
  return (
    <div className="flex flex-col h-full min-h-[812px] bg-white">
      {/* Header */}
      <div className="pt-12 px-5 pb-4">
        <p className="text-center text-gray-600 text-sm">
          Understanding Bonds & Fixed Income, Lesson 3: Monthly Payouts
        </p>
      </div>

      {/* Certificate Card */}
      <div className="mx-5 flex-1 flex flex-col">
        <div className="bg-[#1B2B6B] rounded-3xl p-6 relative overflow-hidden">
          {/* Decorative dots */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#D4A853]/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <div className="text-center mb-4 relative z-10">
            <div className="flex items-center justify-center gap-1">
              <span className="text-white font-bold text-lg">GR</span>
              <span className="text-[#2AB07C] font-bold text-lg">i</span>
              <span className="text-white font-bold text-lg">P</span>
            </div>
          </div>

          {/* Certificate Title */}
          <div className="text-center relative z-10">
            <h1 className="text-[#D4A853] text-4xl font-serif italic mb-1">Certificate</h1>
            <p className="text-gray-400 text-sm tracking-widest mb-1">OF</p>
            <h2 className="text-[#D4A853] text-3xl font-serif italic">Excellence</h2>
          </div>

          {/* Awarded To */}
          <div className="text-center mt-8 relative z-10">
            <p className="text-gray-400 text-sm">awarded to</p>
            <h3 className="text-white text-2xl font-bold tracking-wider mt-1">TAVNISHA</h3>
          </div>

          {/* Course Name */}
          <div className="text-center mt-6 relative z-10">
            <p className="text-gray-400 text-sm">for completing the course</p>
            <h4 className="text-[#2AB07C] text-xl font-semibold mt-2">
              Understanding Bonds &
            </h4>
            <h4 className="text-[#2AB07C] text-xl font-semibold">Fixed Income</h4>
          </div>

          {/* Score */}
          <div className="text-center mt-4 relative z-10">
            <p className="text-[#2AB07C] text-3xl font-bold">{score}/100</p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#D4A853]/30 mt-6 mb-6 relative z-10" />

          {/* Trophies */}
          <div className="flex justify-center gap-4 relative z-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-2 border-[#D4A853]/50 flex items-center justify-center"
              >
                <Trophy className="w-6 h-6 text-[#D4A853]" />
              </div>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-8" />

        {/* Action Buttons */}
        <div className="space-y-3 pb-8">
          <button
            onClick={() => onNavigate("home")}
            className="w-full bg-[#2AB07C] text-white py-4 rounded-xl font-semibold text-lg"
          >
            Explore Bonds on Grip
          </button>
          <button
            className="w-full border-2 border-[#5B7FD3] text-[#5B7FD3] py-4 rounded-xl font-semibold text-lg"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  )
}
