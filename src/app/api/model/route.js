import {NextResponse} from "next/server"
import OpenAI from "openai"

const OPENROUTER_API_KEY = process.env.OPENAI_API_KEY;
const TITLE = process.env.TITLE;
const SITE_URL = process.env.SITE_URL;
const systemPrompt = `
You are a flashcard creator. Your task is to generate flashcards based on the provided text. Each flashcard should have a question on one side and the answer on the other side. Ensure the questions are clear and concise, and the answers are concise, short, accurate and informative.
Return only the JSON structure in the following format, without any additional text:
{
    "flashcards": [
        {
            "id": int,
            "front": str,
            "back": str,
        }
    ]
}
`

const POST = async(req) =>{
    const openai = new OpenAI({ // Create a new instance of the OpenAI client
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: OPENROUTER_API_KEY,
        defaultHeaders: {
            "HTTP-Referer": SITE_URL, // Optional, for including your app on openrouter.ai rankings.
            "X-Title": TITLE, // Optional. Shows in rankings on openrouter.ai.
        }
    })
    const data = await req.text()

    const completion = await openai.chat.completions.create(
        {
            model: "meta-llama/llama-3.1-8b-instruct:free",
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