import { getCollection, type CollectionEntry } from "astro:content";
import type { DataEntryMap } from "astro:content"; // Astro internal type

export async function generateStaticPaths<K extends keyof DataEntryMap>(
    collectionName: K
) {
    const entries = await getCollection(collectionName);
    return entries.map((entry: CollectionEntry<K>) => ({
        params: { slug: entry.slug },
        props: { entry },
    }));
}
