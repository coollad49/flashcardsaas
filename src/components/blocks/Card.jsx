'use client'
import { AnimatePresence, motion } from "framer-motion";
import {useState} from "react"
const Icon = ({ className, ...rest }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };
  

const Card = ({ answer, question, children}) => {
    const [clicked, setClicked] = useState(false);
    return (
      <div
        onClick={() => setClicked(!clicked)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[20rem]"
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
  
        <div className="relative z-20">
          <div className={`text-center ${clicked? "-translate-y-4 opacity-0" : ''} transition duration-200 w-full  mx-auto flex items-center justify-center`}>
            {question}
          </div>
          <h2 className={`dark:text-white text-xl opacity-0 ${clicked? 'opacity-100 text-white -translate-y-2' : ''}  relative z-10 text-black mt-4  font-bold transition duration-200`}>
            {answer}
          </h2>
        </div>
      </div>
    );
  };
  
export {Card}



