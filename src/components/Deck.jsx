import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Calendar } from "lucide-react";
const Deck = ({title, description, date, color}) => {
  return (
        <Card className="w-full max-w-sm rounded-lg shadow-lg border-none cursor-pointer">
            <CardHeader className={`${color} p-6 rounded-t-lg`}>
                <h2 className="text-2xl font-bold text-primary-foreground">{title}</h2>
            </CardHeader>
            <CardContent className="bg-black p-6 space-y-4">
                <p className="text-muted-foreground">
                    {description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{date}</span>
                </div>
            </CardContent>
        </Card>
  )
}

export default Deck