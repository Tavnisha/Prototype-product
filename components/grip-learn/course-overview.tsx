"use client"

import type { Screen } from "@/app/page"
import { ChevronLeft, HelpCircle, Lock, Award, TrendingUp } from "lucide-react"

interface CourseOverviewProps {
  onNavigate: (screen: Screen) => void
}

export function CourseOverview({ onNavigate }: CourseOverviewProps) {
  const lessons = [
    { id: 1, title: "What is a Bond?", locked: false, active: true },
    { id: 2, title: "Understanding YTM", locked: true, active: false },
    { id: 3, title: "Monthly Payouts", locked: true, active: false },
  ]

  return (
    <div className="flex flex-col h-full min-h-[812px]">
      {/* Header */}
      <div className="pt-10 px-5 pb-4 flex items-center justify-between">
        <button 
          onClick={() => onNavigate("home")}
          className="w-10 h-10 flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6 text-[#1B2B6B]" />
        </button>
        <h1 className="text-[#1B2B6B] font-bold text-lg italic">Grip Learn</h1>
        <button className="w-10 h-10 flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Course Title */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-5 bg-[#2AB07C] rounded-full" />
          <h2 className="text-[#1B2B6B] font-bold text-sm tracking-wide">
            UNDERSTANDING BONDS & FIXED INCOME
          </h2>
        </div>
      </div>

      {/* Course Illustration */}
      <div className="mx-5 rounded-2xl bg-[#1B2B6B] p-6 h-40 relative overflow-hidden">
        {/* Decorative cards */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-20 bg-[#2AB07C] rounded-lg transform -rotate-12" />
        <div className="absolute right-4 bottom-4 w-16 h-20 bg-[#2AB07C] rounded-lg transform rotate-12" />
        
        {/* Chart bars */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end gap-1">
          <div className="w-4 h-8 bg-[#2AB07C] rounded-sm" />
          <div className="w-4 h-12 bg-[#F87171] rounded-sm" />
          <div className="w-4 h-10 bg-[#F87171] rounded-sm" />
          <div className="w-4 h-14 bg-[#2AB07C] rounded-sm" />
          <div className="w-4 h-11 bg-[#F87171] rounded-sm" />
          <div className="w-4 h-16 bg-[#2AB07C] rounded-sm" />
          <div className="w-4 h-9 bg-[#F87171] rounded-sm" />
        </div>
        
        {/* Arrow */}
        <div className="absolute right-8 top-6">
          <TrendingUp className="w-8 h-8 text-[#2AB07C]" />
        </div>
      </div>

      {/* Description */}
      <div className="px-5 mt-5">
        <p className="text-[#1B2B6B] text-base leading-relaxed">
          <span className="font-bold italic">Bonds</span> are fixed-income securities that pay regular interest. They let you <span className="font-bold italic">earn stable returns</span> with lower risk than equities.
        </p>
        <p className="text-gray-500 text-sm mt-3">
          Think through questions to learn faster
        </p>
      </div>

      {/* Lessons List */}
      <div className="mx-5 mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {lessons.map((lesson, index) => (
          <div 
            key={lesson.id}
            className={`flex items-center justify-between p-4 ${
              index !== lessons.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <span className={`text-base ${lesson.active ? "text-[#1B2B6B] font-semibold" : "text-gray-500"}`}>
              {lesson.id}. {lesson.title}
            </span>
            {lesson.locked ? (
              <Lock className="w-5 h-5 text-gray-300" />
            ) : (
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
            )}
          </div>
        ))}
        
        {/* Certificate */}
        <div className="flex items-center justify-between p-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-gray-400" />
            <span className="text-gray-500">My Certificate</span>
          </div>
          <Lock className="w-5 h-5 text-gray-300" />
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Take Lesson Button */}
      <div className="px-5 pb-8">
        <button 
          onClick={() => onNavigate("quiz")}
          className="w-full bg-[#2AB07C] text-white py-4 rounded-xl font-semibold text-lg"
        >
          Take lesson 1
        </button>
      </div>
    </div>
  )
}
