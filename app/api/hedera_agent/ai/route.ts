import { NextRequest, NextResponse } from 'next/server'

const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_API_KEY

async function query(data: { inputs: string }) {
  const response = await fetch(
    'https://router.huggingface.co/hf-inference/models/EleutherAI/gpt-neo-1.3B',
    {
      headers: {
        Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    }
  )

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.error?.message || 'Failed to fetch Hugging Face response')
  }

  return result
}

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    if (!HUGGING_FACE_API_KEY) {
      return NextResponse.json({ error: 'Hugging Face API key is missing' }, { status: 500 })
    }

    const response = await query({ inputs: prompt })

    return NextResponse.json({ reply: response[0]?.generated_text || 'No response generated' })
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
