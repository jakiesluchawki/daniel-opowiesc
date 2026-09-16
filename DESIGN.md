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

## Motion

All chapter paragraphs appear immediately. No paragraph or chapter entrance animation, reveal timers, reading-speed settings or automatic chapter changes. Keep only a gentle background-color change between story moods and smooth navigation in the continuous document. Honor prefers-reduced-motion. The space bar remains a native browser action.
