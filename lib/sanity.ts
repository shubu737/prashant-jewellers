import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.SANITY_API_VERSION || "2025-01-01";

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanityClient = createClient({
  projectId: projectId ?? "",
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource | null | undefined) {
  if (!source) {
    return "";
  }

  return builder.image(source).auto("format").fit("max").url();
}
