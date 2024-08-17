"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { CanvasReveal } from "@/components/CanvasReveal";
import {useState} from "react"
const Generate = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  const [text, setText] = useState('')
  const [flashcards, setFlashcards] = useState([])

  const handleSubmit = async () => {
    // We'll implement the API call here
    try {
      const response = await fetch('/api/model', {
        method: 'POST',
        body: text,
      })
  
      if (!response.ok) {
        throw new Error('Failed to generate flashcards')
      }
  
      const data = await response.json()
      setFlashcards(data)
    } catch (error) {
      console.error('Error generating flashcards:', error)
      alert('An error occurred while generating flashcards. Please try again.')
    }

    console.log(flashcards)
  }
  return (
    <div className="gap-3 overflow-auto no-scrollbar w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
      
      <div>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={(e) => setText(e.target.value)}
          onSubmit={handleSubmit}
        />
      </div>
      
      <CanvasReveal json={flashcards}/>
    </div>
  )
}

export default Generate;