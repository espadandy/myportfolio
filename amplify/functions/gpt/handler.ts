import type { Schema } from "../../data/resource"
import { env } from '$amplify/env/gpt';
import OpenAI from "openai";

export const handler: Schema["improveEnglish"]["functionHandler"] = async (event) => {
    // arguments typed from `.arguments()`
    const { description } = event.arguments

    const openai = new OpenAI({
        organization: 'org-PQ1n5NCXI8yDaVTAAxyADUFI',
        project: 'proj_OPYRl6DXIV5s1aaoGuNOUA3Q',
        apiKey: `${env.API_KEY}`,
        dangerouslyAllowBrowser: true
    });

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant for improving the English and organize the content of a diary. Don't include any other content or formatting in your response."
            },
            {
                role: "user",
                content: `${description}!`,
            },
        ],
    });
    return completion.choices[0].message.content;
}