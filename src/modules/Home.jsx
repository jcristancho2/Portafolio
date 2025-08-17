/*import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <section id="home" className="p-8 text-center">
      <h1 className="text-3xl font-bold">{t("home.welcome")}</h1>
    </section>
  );
}
  */
// src/modules/Home.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ElectronicBackground from "../components/ElectronicBacground";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden">
      <ElectronicBackground />

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"
        style={{ zIndex: 2 }}
      />

      {/* Top navigation elements */}
      <div className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black text-sm font-bold">DEV</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button className="w-8 h-8 rounded-full bg-white text-black hover:bg-gray-200">
            <span className="text-xs">○</span>
          </Button>
          <Button className="w-8 h-8 rounded-full bg-white text-black hover:bg-gray-200">
            <span className="text-xs">●</span>
          </Button>
          <Button className="w-8 h-8 rounded-full bg-gray-600 text-white hover:bg-gray-500">
            <span className="text-xs">○</span>
          </Button>
        </div>
      </div>

      {/* Main hero section */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left panel */}
          <div className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-700 p-4">
              <div className="text-xs text-gray-400 mb-2">{t("home.welcome") || "WELCOME TO MY"}</div>
              <div className="text-sm text-white">PORTFOLIO</div>
            </Card>

            <div className="space-y-2">
              <div className="text-xs text-gray-400">EXPERIENCE</div>
              <div className="text-2xl font-bold">5+ YEARS</div>
            </div>
          </div>

          {/* Center - Main content */}
          <div className="text-center space-y-6">
            {/* Avatar/Character */}
            <div className="relative mx-auto w-64 h-64 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>

            {/* Main title */}
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                FUTURE
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  DEVELOPMENT.
                </span>
                <br />
                REDEFINED.
              </h1>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
              VIEW WORK
            </Button>
          </div>

          {/* Right panel */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-xs text-gray-400">EXPERTISE</div>
              <div className="text-sm">FULL-STACK</div>
              <div className="text-sm">DEVELOPER</div>
            </div>

            <Card className="bg-red-900/20 border-red-700 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400">PROJECTS</div>
                  <div className="text-lg font-bold">50+</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Animated dots */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ zIndex: 5 }} />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-red-500 rounded-full animate-pulse" style={{ zIndex: 5 }} />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ zIndex: 5 }} />
    </section>
  );
}
