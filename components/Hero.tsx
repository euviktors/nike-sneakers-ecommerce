'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/sneakers-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-4 text-white"
        >
          Revolucione seu estilo
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 text-gray-200"
        >
          Descubra a nova coleção de sneakers 2023
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-pink-600 hover:to-yellow-600">
            Compre Agora
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

