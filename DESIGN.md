# Design

## Scene

A friend opens the link on a phone in daylight, or on a large screen at home. They read a quiet illustrated publication, with their own pace and room to linger over a drawing.

## Visual direction

One open sheet of a human sketchbook. Romie titles and substantial graphite scenes share the page. The two continuous lectures use large open spreads; Naskręcki’s presentation uses composed single screens. The drawings are part of the publication, rather than thumbnails placed next to text. Pale paper, cobalt construction lines and restrained amber warmth hold the three lectures together.

## Color

Light blue-grey paper and dark graphite ink. Cobalt guides navigation; amber stays inside the art. OKLCH neutrals remain slightly tinted. Daniel's uncertain chapters become a little cooler, and its human ending becomes warmer. Main text keeps full contrast.

## Typography

Licensed Romie Regular carries the large cover and chapter titles. Roobert Regular carries prose and navigation; Roobert Bold marks the active lecture and important actions. No synthetic weights, no text inside raster art. Reading columns remain under 62ch, with body text at least 1rem on the smallest presentation view and at least 1.1rem in continuous reading.

## Covers and chapters

Dragan and the panel retain the sequence title and author, full 4:3 scene, then complete text. On large screens their art reaches up to 1320px, while the reading column sits below with a generous left margin. The continuous version of Daniel also keeps this open, freely scrolling format.

Naskręcki’s slides use a separate stylesheet loaded only by the story. One viewport contains a large illustration, heading and all three short paragraphs. On laptops the scene occupies the left half, and the title and text sit together on the right. A CSS grid gives the masthead, scene and navigation their own rows within 100dvh. Never solve overflow by hiding or clipping prose.

On phones the whole composed slide fits between a compact lecturer navigation and the bottom actions. The picture has the remaining space between heading and text and always uses contain. Keep at least 16px body text. Do not turn slides into tall scrolling spreads.

The slides have a short editorial version (45–51 words each). “Czytaj całość” preserves every paragraph of the original longer adaptation. Without JavaScript, only that complete continuous version is shown. Each of the twelve illustrations remains unique; no cover cropping, raster editing or text inside an image.

A small part of the paper at image edges fades into the page. The scene itself retains full opacity. Paragraphs stay on clean paper with full contrast.

## Reading and navigation

The masthead names the lecturers: Naskręcki, Psyho i Bagiński, Dragan. Daniel is the name of the story/project, not its speaker. All six pages share the same real links. A neutral AI Summit label establishes the collection; local actions sit separately on small screens.

The two additional lectures are continuous essays. A large marginal section number guides desktop reading, moving above its heading on mobile. Space rather than repeated boxes or rules separates ideas. Transcripts continue as quiet readable pages, with time anchors and downloads.

Daniel retains Wstecz/Dalej, chapter selection, arrows, swipe and continuous reading. Its persistent control strip is a light typographic line, with the count and progress kept compact. All twelve illustrations are distinct.

## Motion and access

Every paragraph is present immediately. No timed reveal, speed controls, auto-advance or special space-bar action. Reduced motion disables smooth scrolling and the gentle paper-color transition. Keyboard focus remains visible. Without JavaScript, the whole story remains readable. Print removes navigation and artwork while retaining complete text.
