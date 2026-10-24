# Adding projects

All project content lives in `src/data/projects.js`. The cards and dialogs are generated from that array. Add another object with a unique `id`; no JSX changes are needed. The grid keeps three columns on desktop, two on tablet, and one on mobile.

```js
{
  id: 4,
  name: 'Your project name',
  category: 'FULL-STACK',
  description: 'One sentence explaining what the application does.',
  details: 'A short overview displayed when someone opens the card.',
  tech: ['React', 'FastAPI'],
  github: 'https://github.com/your-account/your-repository',
  demo: '', // Leave empty if there is no public demo.
  summary: 'Who the project helps and what it does.',
  problem: 'The problem it addresses.',
  approach: 'How the main pieces work together.',
  highlights: ['One useful feature', 'Another useful feature'],
  outcome: 'A verified result, or an honest description of the working prototype.',
  role: 'Your actual personal contribution. Omit until confirmed.',
  // Optional fields:
  // demoNote: 'Explain login requirements.',
  // attribution: 'Credit collaborators or an upstream project.',
  // source: 'https://github.com/your-account/your-repository#readme',
},
```

Replace all example text before publishing. Keep IDs unique. Avoid unverified metrics or claims of sole authorship. Skills are edited in the `skills` array in `src/About.jsx`; contact details are in `src/Contact.jsx`.

## Content sources

Project summaries were based on these public README files, reviewed on October 24, 2026:

- https://github.com/BhargavPanchal09/BhargavPanchal09#readme
- https://github.com/BhargavPanchal09/TrendSense---Studio#readme
- https://github.com/BhargavPanchal09/NexusAttendance#readme
- https://github.com/BhargavPanchal09/Smart-Library-System#readme

TrendSense is a fork of TilakCSE/TrendSense---Studio. Smart Library's README credits Tilaksinh Chauhan. Personal roles cannot be inferred from repository ownership and are deliberately omitted until provided.

## Motion

Scroll reveals use a passive scroll listener, requestAnimationFrame, and CSS opacity/translate transitions. No animation package is added. Elements reset when fully outside the viewport, and reveal again from the appropriate direction when scrolling up or down. Reduced-motion users see all content without these animations. Content stays visible without JavaScript, and keyboard focus reveals its target immediately.
