# Sanity Studio

This folder contains the Sanity Studio configuration for the Prashant Jewellers CMS.

## Folder layout

- `sanity/schema.ts` — Studio config entry point
- `sanity/schemas/index.ts` — schema registry
- `sanity/schemas/product.ts` — product document schema

## Setup

1. Install studio dependencies:
   ```bash
   cd sanity
   npm install
   ```
2. Update `projectId` in `sanity/schema.ts`.
3. Set Studio environment variables if needed:
   - `SANITY_STUDIO_API_PROJECT_ID`
   - `SANITY_STUDIO_DATASET`

## Run

- `npm run dev` — start Sanity Studio locally
- `npm run build` — build the Studio for production
- `npm run start` — serve the built Studio

## Notes

The Next.js app uses `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in the root project.
