import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

// Add debug logs to verify values are being loaded
console.log('Sanity Config:', {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN ? '***' : 'MISSING'
});

export const urlFor = (source) => imageUrlBuilder(client).image(source);

export async function fetchKdramas() {
    return await client.fetch('*[_type == "kdrama"]');
}

