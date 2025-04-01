import { NextRequest, NextResponse } from 'next/server'

const HUGGING_FACE_API_URL = process.env.HUGGING_FACE_API_URL
const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_API_KEY

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    if (!HUGGING_FACE_API_URL || !HUGGING_FACE_API_KEY) {
      return NextResponse.json(
        { error: 'Hugging Face API is not properly configured' },
        { status: 500 }
      )
    }

    const response = await fetch(HUGGING_FACE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
      },
      body: JSON.stringify({
        inputs: prompt, // The user input is sent to the AI
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch Hugging Face response')
    }

    // The AI-generated text will be inside `data[0]?.generated_text`
    return NextResponse.json({ reply: data[0]?.generated_text || 'No response generated' })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
