"use client";
import React from "react";

import {Card} from "@/components/blocks/Card"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasReveal() {
  return (
    <>
      <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full bg-white dark:bg-black px-8 mx-auto">
        <Card answer="Paris" question={"What is the capital of France?"}>
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
        {/* Add more cards as needed */}
      </div>

    </>
  );
}