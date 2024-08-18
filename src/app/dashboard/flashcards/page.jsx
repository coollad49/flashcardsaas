"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Deck from '@/components/Deck'
const FlashCards = () => {
  return (
    <div className='h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative'>
        <HeroHighlight className={"space-y-8  "}>
            <motion.h1
                initial={{
                opacity: 0,
                y: 20,
                }}
                animate={{
                opacity: 1,
                y: [20, -5, 0],
                }}
                transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                Dive into your saved flashcards and <Highlight className="text-black dark:text-white">keep your memory sharp.</Highlight>
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-auto h-full no-scrollbar pb-52">
                {/* Decks */}
            </div>
        </HeroHighlight>
    </div>
  )
}

export default FlashCards