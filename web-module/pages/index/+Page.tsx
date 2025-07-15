import React from 'react'
import { Counter } from '../../components/Counter'
import { Card } from '../../components/Card'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to BankForge
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern web application built with Vike, React 19, TypeScript, and Tailwind CSS
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card
            title="Server-Side Rendering"
            description="Powered by Vike SSR for optimal performance and SEO"
            icon="🚀"
          />
          <Card
            title="React 19"
            description="Built with the latest React features and hooks"
            icon="⚛️"
          />
          <Card
            title="TypeScript"
            description="Type-safe development with full TypeScript support"
            icon="📘"
          />
          <Card
            title="Tailwind CSS"
            description="Utility-first CSS framework for rapid UI development"
            icon="🎨"
          />
          <Card
            title="Express 5"
            description="Modern Express server with the latest security updates"
            icon="🛡️"
          />
          <Card
            title="Vite"
            description="Lightning-fast build tool and development server"
            icon="⚡"
          />
        </div>
        
        <div className="max-w-md mx-auto">
          <Counter />
        </div>
      </div>
    </div>
  )
}