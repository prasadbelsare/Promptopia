import { connectToDB } from "@utils/database";
import Prompt from "models/prompt";

export const GET = async (request, context) => {
  try {
    await connectToDB();
    const { id } = await context.params;
    const prompts = await Prompt.find({ creator: id }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
