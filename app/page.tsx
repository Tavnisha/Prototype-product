"use client"

import { useState } from "react"
import { HomeScreen } from "@/components/grip-learn/home-screen"
import { CourseOverview } from "@/components/grip-learn/course-overview"
import { QuizScreen } from "@/components/grip-learn/quiz-screen"
import { CertificateScreen } from "@/components/grip-learn/certificate-screen"

export type Screen = "home" | "course" | "quiz" | "certificate"

export interface QuizAnswer {
  questionIndex: number
  selectedAnswer: "TRUE" | "FALSE" | null
  isCorrect: boolean | null
}

export default function GripLearnApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([
    { questionIndex: 0, selectedAnswer: null, isCorrect: null },
    { questionIndex: 1, selectedAnswer: null, isCorrect: null },
    { questionIndex: 2, selectedAnswer: null, isCorrect: null },
  ])

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen)
    if (screen === "quiz") {
      setCurrentQuestion(0)
      setAnswers([
        { questionIndex: 0, selectedAnswer: null, isCorrect: null },
        { questionIndex: 1, selectedAnswer: null, isCorrect: null },
        { questionIndex: 2, selectedAnswer: null, isCorrect: null },
      ])
    }
  }

  const handleAnswer = (answer: "TRUE" | "FALSE", isCorrect: boolean) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = {
      questionIndex: currentQuestion,
      selectedAnswer: answer,
      isCorrect,
    }
    setAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < 2) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCurrentScreen("certificate")
    }
  }

  const calculateScore = () => {
    const correct = answers.filter((a) => a.isCorrect === true).length
    return Math.round((correct / 3) * 100)
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] min-h-[812px] bg-white rounded-[40px] overflow-hidden shadow-xl relative">
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#1B2B6B] rounded-b-2xl z-50" />

        {currentScreen === "home" && (
          <HomeScreen onNavigate={handleNavigate} />
        )}
        {currentScreen === "course" && (
          <CourseOverview onNavigate={handleNavigate} />
        )}
        {currentScreen === "quiz" && (
          <QuizScreen
            currentQuestion={currentQuestion}
            answer={answers[currentQuestion]}
            onAnswer={handleAnswer}
            onNextQuestion={handleNextQuestion}
            onBack={() => handleNavigate("course")}
          />
        )}
        {currentScreen === "certificate" && (
          <CertificateScreen
            score={calculateScore()}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  )
}
