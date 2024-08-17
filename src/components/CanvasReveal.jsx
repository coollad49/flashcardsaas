"use client";
import React, {useState} from "react";

import {Card} from "@/components/blocks/Card"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasReveal({json}) {
  const [openCardId, setOpenCardId] = useState(null);

  const handleCardClick = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };
  return (
    <>
      <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full bg-white dark:bg-black px-8 mx-auto">
        {json.map((flashcard, id)=>(
          <Card key={flashcard.id} answer={flashcard.back} question={flashcard.front} clicked={openCardId === flashcard.id} onclick={()=> handleCardClick(flashcard.id)} >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-green-500"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
        ))}
        
        {/* Add more cards as needed */}
      </div>

    </>
  );
}