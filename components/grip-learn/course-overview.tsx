"use client"

import type { Screen } from "@/app/page"
import { ArrowRight } from "lucide-react"

interface CourseOverviewProps {
  onNavigate: (screen: Screen) => void
}

export function CourseOverview({ onNavigate }: CourseOverviewProps) {
  return (
    <div className="flex flex-col h-full min-h-[812px] bg-white px-6 pt-16 pb-8">
      {/* Did you know badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-block px-4 py-2 bg-[#2AB07C]/15 text-[#2AB07C] text-sm font-medium rounded-full">
          Did you know?
        </span>
      </div>

      {/* Main stat headline */}
      <h1 className="text-[#1B2B6B] text-3xl font-bold text-center leading-tight mb-5">
        Bonds can earn you 2x more than your FD.
      </h1>

      {/* Supporting text */}
      <p className="text-[#1B2B6B] text-base text-center leading-relaxed mb-8">
        While your FD gives you 6-7%, bonds on Grip offer up to 13.50% YTM, paid directly to your bank every month.
      </p>

      {/* Comparison card */}
      <div className="bg-[#E8F5F0] rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between">
          {/* FD Column */}
          <div className="flex-1 text-center">
            <p className="text-[#1B2B6B] text-lg font-semibold mb-1">FD</p>
            <p className="text-[#1B2B6B] text-2xl font-bold">6-7%</p>
          </div>

          {/* VS divider */}
          <div className="flex items-center justify-center w-12">
            <span className="text-gray-400 text-sm font-medium">vs</span>
          </div>

          {/* Bonds Column */}
          <div className="flex-1 text-center">
            <p className="text-[#2AB07C] text-lg font-semibold mb-1">Bonds</p>
            <p className="text-[#2AB07C] text-2xl font-bold">13.50%</p>
          </div>
        </div>
      </div>

      {/* Social proof */}
      <p className="text-gray-400 text-sm text-center mb-auto">
        74,000+ people are already earning smarter on Grip.
      </p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* CTA Button */}
      <button 
        onClick={() => onNavigate("quiz")}
        className="w-full bg-[#2AB07C] text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
      >
        Show me how it works
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
