import { GoogleGenAI, Modality, Part, GenerateContentResponse } from "@google/genai";
import { DECADE_PROMPTS } from '../constants';
import { GeneratedImage } from '../types';

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

async function generateImageForDecade(imagePart: Part, decadePrompt: { decade: string; prompt: string }): Promise<GeneratedImage> {
    const { decade, prompt } = decadePrompt;

    console.log(`Generating image for ${decade}...`);
    
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
            parts: [
                imagePart,
                { text: prompt },
            ],
        },
        config: {
            responseModalities: [Modality.IMAGE],
        },
    });

    const firstPart = response.candidates?.[0]?.content?.parts?.[0];

    if (firstPart && firstPart.inlineData) {
        const base64ImageBytes: string = firstPart.inlineData.data;
        const imageUrl = `data:${firstPart.inlineData.mimeType};base64,${base64ImageBytes}`;
        return { decade, imageUrl };
    } else {
        throw new Error(`Image generation failed for ${decade}. No image data received.`);
    }
}

export async function generateTetJourney(imagePart: Part): Promise<GeneratedImage[]> {
    try {
        const imagePromises = DECADE_PROMPTS.map(decadePrompt => 
            generateImageForDecade(imagePart, decadePrompt)
        );
        const results = await Promise.all(imagePromises);
        return results;
    } catch (error) {
        console.error("Error in generateTetJourney:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to generate images: ${error.message}`);
        }
        throw new Error("An unknown error occurred while generating images.");
    }
}
