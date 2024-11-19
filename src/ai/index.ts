import { getPrompt } from "./prompt";

import OpenAI from "openai";

interface Props {
  file: string;
  description: string;
}

export const generateDoc = async ({ file, description }: Props) => {
  const openai = new OpenAI({
    apiKey: process.env.CHAT_GPT_API_KEY,
  });

  try {
    const text = getPrompt({ code: file, description });

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: text,
            },
          ],
        },
      ],
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      response_format: {
        type: "text",
      },
    });

    return response.choices[0].message.content;
  } catch (e) {
    console.log("chat gpt generate error", e);
  }
};
