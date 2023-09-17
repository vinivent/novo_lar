import { connectToDB } from "@utils/database";
import Prompt from "@models/posts";

export const POST = async (req) => {
  const { userId, prompt, tag, recipe, title } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
      recipe,
      title,
    });
    await newPrompt.save();
    console.log(newPrompt)
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Prompt", { status: 500 });
  }
};
