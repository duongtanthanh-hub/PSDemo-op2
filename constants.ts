const BASE_PROMPT = "A high-quality, realistic photo of this person celebrating Vietnamese Tet. It is crucial to maintain their core facial identity, features, and apparent age from the original photo. Dramatically alter the background, clothing, hairstyle, and overall image aesthetic to accurately represent the specified decade in Vietnam.";

export const DECADE_PROMPTS = [
  {
    decade: "The 80s",
    prompt: `${BASE_PROMPT} The era is the 1980s. 
    - Clothing & Hair: Fashion reflects post-war austerity. They are wearing a simple, possibly hand-made traditional áo dài with modest patterns. Hairstyles are simple and natural.
    - Background & Context: The setting is a very traditional, humble family home. Tet decorations are sparse and handmade, such as simple red paper banners.
    - Image Aesthetics: The photo has a distinct vintage look with faded colors, significant film grain, and a slight sepia or yellowish tone, as if it's a cherished old photograph that has aged over time.
    - Smile: Their expression is genuine but reserved, possibly a gentle, closed-mouth smile, reflecting the humble spirit of the time. Avoid showing teeth.`,
  },
  {
    decade: "The 90s",
    prompt: `${BASE_PROMPT} The era is the 1990s. 
    - Clothing & Hair: They wear a traditional áo dài with more vibrant colors and classic patterns. There's a hint of emerging western fashion influence. Hairstyles are neat and representative of the 90s.
    - Background & Context: The setting is a cozy family home, looking a bit more prosperous. Traditional Tet decorations are more abundant, including apricot blossoms and handwritten couplets (câu đối).
    - Image Aesthetics: The photo has the quality of 90s film photography, with richer, slightly saturated colors but still a soft, analog feel.
    - Smile: Their expression is happy but modest, perhaps a slight smile not showing teeth prominently. This forms the baseline for the smile transformation.`,
  },
  {
    decade: "The 00s",
    prompt: `${BASE_PROMPT} The era is the 2000s. 
    - Clothing & Hair: Fashion is a mix of modern and traditional. They might be wearing trendy 2000s items like jeans and a stylish top, or a more contemporary áo dài. Hairstyles show more styling, like highlights or layers.
    - Background & Context: The setting is a more contemporary suburban home, perhaps with a CRT television visible. Tet decorations are more colorful and commercially available.
    - Image Aesthetics: The image looks like it was taken with an early digital camera, featuring brighter colors and possibly a slightly harsh on-camera flash effect.
    - Smile: They have a more open, confident smile, showing teeth that are noticeably healthier and brighter than in the 90s. This is the first step in a significant smile enhancement.`,
  },
  {
    decade: "The 10s",
    prompt: `${BASE_PROMPT} The era is the 2010s. 
    - Clothing & Hair: They are wearing modern, stylish clothes (like skinny jeans or a fashionable dress) or a chic, tailored áo dài. An early-generation smartphone might be subtly visible. Hairstyles are modern and polished.
    - Background & Context: The scene is a vibrant, modern city, a stylish home, or a bustling Tet flower market.
    - Image Aesthetics: The photo quality is sharp and clear, resembling a photo from a DSLR or a high-end smartphone of the time. The lighting is good and the colors are clean.
    - Smile: Their smile is radiant and confident, with teeth that are significantly whiter and brighter, showcasing the impact of modern oral care.`,
  },
  {
    decade: "The 20s",
    prompt: `${BASE_PROMPT} The era is the 2020s. 
    - Clothing & Hair: They are dressed in the latest fashion trends or a designer-inspired, modern áo dài.
    - Background & Context: The setting is stylish and contemporary, reflecting a social-media-ready aesthetic, possibly in a minimalist home or a scenic travel location during Tet.
    - Image Aesthetics: The photo is flawless, with the quality of a professional-grade modern smartphone camera using portrait mode. Lighting is perfect, and colors are vibrant yet natural.
    - Smile: Their smile is flawless, exceptionally bright, and brilliantly white, exuding maximum confidence. This is the pinnacle of the oral health journey, a perfect "P/S smile".`,
  },
];

export const LOADING_MESSAGES = [
    "Warming up the time machine...",
    "Digging through the 80s photo albums...",
    "Traveling back to the 90s...",
    "Putting on your 2000s outfit...",
    "Perfecting your 2010s smile...",
    "Stepping into the present day...",
    "Finalizing your journey...",
];