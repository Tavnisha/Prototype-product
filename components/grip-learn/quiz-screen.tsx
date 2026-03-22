"use client"

import type { QuizAnswer } from "@/app/page"
import { ChevronLeft, Users, Star, Check, X } from "lucide-react"

interface QuizScreenProps {
  currentQuestion: number
  answer: QuizAnswer
  onAnswer: (answer: "TRUE" | "FALSE", isCorrect: boolean) => void
  onNextQuestion: () => void
  onBack: () => void
}

const questions = [
  {
    id: 1,
    lessonTitle: "Lesson 1: What is a Bond?",
    question: "A bond is a loan you give to a company or government that pays you back with interest?",
    correctAnswer: "TRUE" as const,
    truePercentage: 86,
    falsePercentage: 14,
    explanation: "A bond is indeed a loan. When you buy a bond, you are lending money to the issuer (company or government) who promises to pay you back the principal plus interest over time.",
  },
  {
    id: 2,
    lessonTitle: "Lesson 2: Understanding YTM",
    question: "YTM (Yield to Maturity) represents the total return you'll receive if you hold the bond until it matures?",
    correctAnswer: "TRUE" as const,
    truePercentage: 78,
    falsePercentage: 22,
    explanation: "YTM is the total return anticipated on a bond if held until maturity. It includes all coupon payments and the difference between the purchase price and face value.",
  },
  {
    id: 3,
    lessonTitle: "Lesson 3: Monthly Payouts",
    question: "All bonds pay interest on a monthly basis?",
    correctAnswer: "FALSE" as const,
    truePercentage: 34,
    falsePercentage: 66,
    explanation: "Not all bonds pay monthly. Interest payment frequency varies - some pay monthly, quarterly, semi-annually, or annually. The payment schedule is specified in the bond terms.",
  },
]

export function QuizScreen({
  currentQuestion,
  answer,
  onAnswer,
  onNextQuestion,
  onBack,
}: QuizScreenProps) {
  const question = questions[currentQuestion]
  const hasAnswered = answer.selectedAnswer !== null

  const handleSelectAnswer = (selected: "TRUE" | "FALSE") => {
    if (hasAnswered) return
    const isCorrect = selected === question.correctAnswer
    onAnswer(selected, isCorrect)
  }

  return (
    <div className="flex flex-col h-full min-h-[812px]">
      {/* Header */}
      <div className="pt-10 px-5 pb-4 flex items-center justify-between">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center">
          <ChevronLeft className="w-6 h-6 text-[#1B2B6B]" />
        </button>
        <h1 className="text-[#1B2B6B] font-bold text-lg italic">Grip Learn</h1>
        <div className="w-10" />
      </div>

      {/* Course Banner */}
      <div className="mx-5 rounded-2xl bg-[#5B7FD3] p-4">
        <h2 className="text-white font-semibold text-lg">
          Understanding Bonds & Fixed Income
        </h2>
        <p className="text-white/80 text-sm mt-1">{question.lessonTitle}</p>
      </div>

      {/* Question Card */}
      <div className="mx-5 mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex-1 flex flex-col">
        {/* Progress & Participants */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center">
              <span className="text-[#1B2B6B] text-sm font-semibold">
                {currentQuestion + 1}/3
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Users className="w-4 h-4" />
            <span>74,157 people participated</span>
          </div>
        </div>

        {/* Question */}
        <h3 className="text-[#1B2B6B] text-lg font-semibold leading-relaxed mb-4">
          {question.question}
        </h3>

        {/* Diamond Badge Hint */}
        <div className="flex items-start gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Star className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-gray-500 text-sm">
            Get diamond badge in this lesson by answering all questions correct in 1st attempt
          </p>
        </div>

        {/* Answer Options */}
        <div className="space-y-3">
          {/* TRUE Button */}
          <button
            onClick={() => handleSelectAnswer("TRUE")}
            disabled={hasAnswered}
            className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
              !hasAnswered
                ? "border-gray-200 bg-gray-50 hover:border-gray-300"
                : answer.selectedAnswer === "TRUE"
                ? answer.isCorrect
                  ? "border-[#2AB07C] bg-[#E8F8F0]"
                  : "border-[#F87171] bg-[#FEF2F2]"
                : question.correctAnswer === "TRUE"
                ? "border-[#2AB07C] bg-[#E8F8F0]"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <span
              className={`font-semibold ${
                !hasAnswered
                  ? "text-[#1B2B6B]"
                  : answer.selectedAnswer === "TRUE"
                  ? answer.isCorrect
                    ? "text-[#2AB07C]"
                    : "text-[#F87171]"
                  : question.correctAnswer === "TRUE"
                  ? "text-[#2AB07C]"
                  : "text-gray-500"
              }`}
            >
              TRUE
            </span>
            {hasAnswered && (
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm ${
                    answer.selectedAnswer === "TRUE"
                      ? answer.isCorrect
                        ? "text-[#2AB07C]"
                        : "text-[#F87171]"
                      : question.correctAnswer === "TRUE"
                      ? "text-[#2AB07C]"
                      : "text-gray-500"
                  }`}
                >
                  {question.truePercentage}%
                </span>
                {answer.selectedAnswer === "TRUE" && (
                  answer.isCorrect ? (
                    <Check className="w-5 h-5 text-[#2AB07C]" />
                  ) : (
                    <X className="w-5 h-5 text-[#F87171]" />
                  )
                )}
                {answer.selectedAnswer !== "TRUE" && question.correctAnswer === "TRUE" && (
                  <Check className="w-5 h-5 text-[#2AB07C]" />
                )}
              </div>
            )}
          </button>

          {/* FALSE Button */}
          <button
            onClick={() => handleSelectAnswer("FALSE")}
            disabled={hasAnswered}
            className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
              !hasAnswered
                ? "border-gray-200 bg-gray-50 hover:border-gray-300"
                : answer.selectedAnswer === "FALSE"
                ? answer.isCorrect
                  ? "border-[#2AB07C] bg-[#E8F8F0]"
                  : "border-[#F87171] bg-[#FEF2F2]"
                : question.correctAnswer === "FALSE"
                ? "border-[#2AB07C] bg-[#E8F8F0]"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <span
              className={`font-semibold ${
                !hasAnswered
                  ? "text-[#1B2B6B]"
                  : answer.selectedAnswer === "FALSE"
                  ? answer.isCorrect
                    ? "text-[#2AB07C]"
                    : "text-[#F87171]"
                  : question.correctAnswer === "FALSE"
                  ? "text-[#2AB07C]"
                  : "text-gray-500"
              }`}
            >
              FALSE
            </span>
            {hasAnswered && (
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm ${
                    answer.selectedAnswer === "FALSE"
                      ? answer.isCorrect
                        ? "text-[#2AB07C]"
                        : "text-[#F87171]"
                      : question.correctAnswer === "FALSE"
                      ? "text-[#2AB07C]"
                      : "text-gray-500"
                  }`}
                >
                  {question.falsePercentage}%
                </span>
                {answer.selectedAnswer === "FALSE" && (
                  answer.isCorrect ? (
                    <Check className="w-5 h-5 text-[#2AB07C]" />
                  ) : (
                    <X className="w-5 h-5 text-[#F87171]" />
                  )
                )}
                {answer.selectedAnswer !== "FALSE" && question.correctAnswer === "FALSE" && (
                  <Check className="w-5 h-5 text-[#2AB07C]" />
                )}
              </div>
            )}
          </button>
        </div>

        {/* Feedback */}
        {hasAnswered && (
          <div
            className={`mt-4 p-4 rounded-xl ${
              answer.isCorrect ? "bg-[#E8F8F0]" : "bg-[#FEF2F2]"
            }`}
          >
            <p
              className={`font-semibold mb-2 ${
                answer.isCorrect ? "text-[#2AB07C]" : "text-[#F87171]"
              }`}
            >
              {answer.isCorrect ? "Correct!" : "Incorrect"}
            </p>
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Reason:</span> {question.explanation}
            </p>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />
      </div>

      {/* Next Question Button */}
      <div className="px-5 pb-8 pt-4">
        <button
          onClick={onNextQuestion}
          disabled={!hasAnswered}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
            hasAnswered
              ? "bg-[#5B7FD3] text-white hover:opacity-80 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Next Question
        </button>
      </div>
    </div>
  )
}
