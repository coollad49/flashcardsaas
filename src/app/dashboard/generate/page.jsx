import { CanvasReveal } from "@/components/CanvasReveal";
import VanishInput from "@/components/VanishInput";

const generate = () => {
  return (
    <div className="gap-3 overflow-auto no-scrollbar">

      <VanishInput/>
      <CanvasReveal/>
    </div>
  )
}

export default generate;