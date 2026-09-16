# Design

## Scene

A friend reads a contemplative illustrated notebook on a phone in daylight, pausing whenever a sentence invites thought. Pale blue paper, graphite drawing and small moments of amber light make the story approachable.

## Visual direction

An open sketchbook of possible futures. Each of the twelve chapters has its own distinct illustration tied to that scene, with consistent graphite, cobalt construction lines and amber light. Asymmetric full-page drawings share space with clear, substantial text. No panels around paragraphs, no decorative cards or text inside illustrations.

## Color strategy

Restrained pale-blue and graphite neutrals, cobalt for navigation and constructions, amber warmth inside drawings. OKLCH tokens, high text contrast. The human ending becomes brighter without losing legibility.

## Typography

Romie Regular for chapter titles; Roobert Regular for narrative and controls, Roobert Bold for UI emphasis. The user selected this pair and supplied licensed local webfont files. Use real font weights, no synthetic bold. Main text at least 1.1rem mobile, fluid larger type on desktop. Headings plain, not italic. Lines stay under 62ch.

## Layout

Desktop: reading column alongside an open illustration. Mobile: chapter label, title, drawing and complete prose follow in one column. Text may scroll vertically. Compact persistent navigation contains only the chapter count, progress and Wstecz/Dalej. Full-reading mode is a natural continuous document.

All three lectures share a small header with real links: Daniel, Psyho i Bagiński and Dragan. The active lecture uses a dark bold label and a thin cobalt underline. On phones the lecture links and local reading actions occupy separate rows. Transcript pages use the same header and offer a return to their lecture.

The additional lectures are continuous essays: a spacious Romie title, Roobert lead, short summary and readable sections capped at 62ch. The panel has one substantial graphite illustration about human authorship and choosing among generated possibilities. It is shown at full opacity beside the opening text on desktop and in full composition between participants and lead on mobile. Its subject must be visible and connected to the discussion. Keep paragraphs on clean paper, with full contrast. Dragan has one distinct folded-geometry sketch, with a dark opening, a warm bright opening and a small human observer. It uses the same responsive layout and full opacity; the drawing is an editorial metaphor, not a scientific diagram.

## Motion

All chapter paragraphs appear immediately. No paragraph or chapter entrance animation, reveal timers, reading-speed settings or automatic chapter changes. Keep only a gentle background-color change between story moods and smooth navigation in the continuous document. Honor prefers-reduced-motion. The space bar remains a native browser action.
