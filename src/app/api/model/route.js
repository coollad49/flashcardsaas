import {NextResponse} from "next/server"
import OpenAI from "openai"

const systemPrompt = `
You are a flashcard creator. Your task is to generate flashcards based on the provided text. Each flashcard should have a question on one side and the answer on the other side. Ensure the questions are clear and concise, and the answers are accurate and informative.
Return in the following JSON format
{
    "flashcards": [
        {
            "front": str,
            "back": str,
        }
    ]
}
`

const POST = async(req) =>{
    const openai = OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create(
        {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: data
                }
            ],
            response_format: {type: 'json_object'},
        }
    )

    const flashcards = JSON.parse(completion.choices[0].message.content)
    return NextResponse.json(flashcards.flashcards)
}

export {POST}