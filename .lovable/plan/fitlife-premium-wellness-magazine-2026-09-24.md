# FitLife premium wellness magazine

## Overview
Build a polished, responsive one-page editorial wellness experience at `/` using the supplied FitLife brief and newly generated lifestyle photography. The page will prioritize useful, scannable wellness content without accounts, calculators, bookings, pricing, or other application features.

## Page structure
- Add a compact editorial header with the FitLife wordmark and links into the main reading sections.
- Create an immersive image-led hero with a single clear call to explore the guide.
- Build all requested sections in a paced magazine flow: Categories; Workouts & Benefits; Healthy Foods & Benefits; Balanced Day; Healthy Habits; Wellness; Myths vs Facts; Fitness Styles; Learn Before You Start; Wellness Journal; About; Contact; and a closing CTA.
- Include concise descriptions and concrete benefits for every featured workout and food.
- Use the four generated images for movement, nutrition, outdoor fitness, and calm wellness stories.

## Visual direction
- Nature-led editorial art direction using cream, sage, forest green, olive, terracotta, and soft blue-green.
- Elegant serif display typography paired with a rounded sans-serif body face.
- Organic image masks, botanical line details, watercolor-style color fields, subtle paper grain, restrained shadows, and generous whitespace.
- Rounded cards only where information is genuinely grouped; vary section compositions to avoid a repetitive card grid.
- Add gentle reveal and drift motion with reduced-motion support.

## Responsive behavior
- Preserve editorial hierarchy on small screens with simplified navigation, stacked feature stories, readable type, and touch-friendly controls.
- Keep images properly cropped and all text contained across phone, tablet, and desktop widths.

## Technical details
- Define the complete semantic design token system in `src/styles.css` using OKLCH colors and Tailwind v4 mappings.
- Implement the page in `src/routes/index.tsx` and update root font loading and generic metadata in `src/routes/__root.tsx`.
- Add unique FitLife metadata on the home route, including title, description, Open Graph fields, `og:type`, and Twitter card.
- Use accessible landmarks, heading order, descriptive image text, and keyboard-visible focus states.
- Validate the final page in the running preview at desktop and mobile sizes.
