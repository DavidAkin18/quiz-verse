import OpenAI from "openai";

const client = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_KEY });

export const generateQuiz = async (topic) => {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: `Generate 5 multiple choice questions about ${topic}. Return JSON.` },
    ],
  });
  return JSON.parse(res.choices[0].message.content);
};
