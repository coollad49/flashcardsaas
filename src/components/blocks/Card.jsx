'use client'
import { AnimatePresence, motion } from "framer-motion";
import {TextGenerateEffect} from '@/components/ui/text-generate-effect'  

const Card = ({ answer, question, children, clicked, onclick}) => {
    
    return (
      <div
        onClick={onclick}
        className="cursor-pointer border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[20rem]"
      >
        
        <AnimatePresence>
          {clicked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
  
        <div className="z-20">
          <div className={`text-center ${clicked? "-translate-y-4 opacity-0" : ''} transition duration-200 w-full  mx-auto flex items-center justify-center`}>
            {question}
          </div>
          <div className="absolute top-0 left-0 m-2">
            <h2 className={`dark:text-white text-xl opacity-0 ${clicked? 'opacity-100 text-white ' : ''}   z-10 text-black font-bold transition duration-200`}>
              {clicked ? <TextGenerateEffect duration={2} filter={false} words={answer} /> : ''}
            </h2>
          </div>
          
        </div>
      </div>
    );
  };
  
export {Card}



