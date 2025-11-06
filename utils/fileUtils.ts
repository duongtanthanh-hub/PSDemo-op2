import { Part } from "@google/genai";

export function fileToGenerativePart(file: File): Promise<Part> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64Data = (reader.result as string).split(',')[1];
            if (base64Data) {
                resolve({
                    inlineData: {
                        mimeType: file.type,
                        data: base64Data,
                    },
                });
            } else {
                reject(new Error("Failed to read file data."));
            }
        };
        reader.onerror = (error) => reject(error);
    });
}
