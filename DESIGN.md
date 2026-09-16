# Design

## Scene

A friend reads a contemplative illustrated notebook on a phone in daylight, pausing whenever a sentence invites thought. Pale blue paper, graphite drawing and small moments of amber light make the story approachable.

## Visual direction

An open sketchbook of possible futures. Asymmetric full-page drawings share space with clear, substantial text. No panels around paragraphs, no decorative cards.

## Color strategy

Restrained pale-blue and graphite neutrals, cobalt for navigation and constructions, amber warmth inside drawings. OKLCH tokens, high text contrast. The human ending becomes brighter without losing legibility.

## Typography

Literata for the story, Manrope for controls. Literata is chosen for sustained Polish reading; Manrope feels like practical pencil annotations. Main text at least 1.1rem mobile, fluid larger type on desktop. Headings plain, not italic. Lines stay under 62ch.

## Layout

Desktop: reading column alongside an open illustration. Mobile: title and text lead, drawing follows without blocking navigation. Compact persistent reader controls. Full-reading mode is a natural continuous document.

## Motion

Reveal complete paragraphs by opacity and a small translation, no letter-by-letter effect, no automatic chapter changes. First paragraph is immediately readable. Wait based on word count before revealing the next, never hide already-read text. Controls allow reveal now, pause, speed and immediate full reading. Honor prefers-reduced-motion.
