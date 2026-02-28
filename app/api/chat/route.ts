import { NextRequest, NextResponse } from 'next/server';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';

const SYSTEM_PROMPT = `You are FlashFender's AI assistant. FlashFender is an AI-powered vehicle posting automation platform for auto dealerships.

Key information about FlashFender:
- Allows dealerships to post vehicles to 10+ platforms instantly
- Uses AI to generate unique, non-duplicate content for each platform
- Prevents shadow bans and duplicate content penalties
- Trusted by 500+ dealerships
- Pricing starts at $99/month for small dealerships
- Enterprise pricing available
- Free trial available
- Supports platforms like Facebook Marketplace, Instagram, Twitter/X, LinkedIn, Craigslist, AutoTrader, Cars.com, and more
- Key features: AI content generation, bulk posting, scheduling, analytics, inventory management
- Chrome extension available for easy posting
- Real-time analytics dashboard
- API available for developers

Always be helpful, friendly, and concise. Use markdown for formatting when appropriate.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const messages: Message[] = [
      { role: "assistant", content: SYSTEM_PROMPT },
      ...(history || []).slice(-10).map((h: Message) => h),
      { role: "user", content: message },
    ];

    if (!ANTHROPIC_API_KEY) {
      const fallbackResponses = [
        "I'd be happy to help you learn more about FlashFender! Our AI-powered platform makes it easy to post vehicles across 10+ platforms instantly. What specific aspect would you like to know more about?",
        "Great question! FlashFender uses advanced AI to generate unique content for each platform, so you never have to worry about shadow bans or duplicate content penalties. Would you like to learn about our pricing or see a demo?",
        "Thanks for your interest! We offer a free trial so you can experience the power of FlashFender firsthand. Would you like me to walk you through how it works?",
        "FlashFender supports all the major platforms including Facebook Marketplace, Instagram, Twitter, LinkedIn, Craigslist, AutoTrader, and Cars.com. Our AI ensures each post is optimized for the specific platform!",
      ];
      const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      return NextResponse.json({ response: randomResponse });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 500,
        messages: messages.slice(-6),
        system: SYSTEM_PROMPT,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Anthropic API error:', errorData);
      return NextResponse.json(
        { response: "I apologize, but I'm having trouble processing your request right now. Please try again." },
        { status: 200 }
      );
    }

    const data = await response.json();
    const aiResponse = data.content?.[0]?.text || "I couldn't generate a response. Please try again.";

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { response: "I apologize, but something went wrong. Please try again." },
      { status: 200 }
    );
  }
}
