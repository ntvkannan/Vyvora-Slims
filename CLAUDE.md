# VYVORA SLIMS --- Development Instructions

## Project Overview

This is the official VYVORA SLIMS website development project.

The website must reproduce the approved VYVORA SLIMS design provided in:

`docs/reference/Vyvora-Slims-Approved.pdf`

The approved PDF is the primary visual source of truth.

Do not redesign the website or introduce a different visual direction
unless explicitly instructed.

------------------------------------------------------------------------

## Technology

Use only:

-   HTML5
-   SCSS
-   Compiled CSS
-   Vanilla JavaScript

Do NOT use:

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   Bootstrap
-   Vue
-   Angular
-   Any frontend framework

The website must work on basic/shared hosting.

There must be no server-side JavaScript requirement.

The final deployable website consists of:

-   HTML
-   CSS
-   JavaScript
-   Images
-   Fonts
-   Other static assets

------------------------------------------------------------------------

## Project Structure

Use the existing project structure.

Do not replace it with another architecture.

``` text
vyvora-slims/
│
├── assets/
│   ├── images/
│   │   ├── home/
│   │   ├── treatments/
│   │   ├── about/
│   │   └── contact/
│   │
│   ├── icons/
│   └── fonts/
│
├── css/
├── js/
├── scss/
├── favicon/
│
└── docs/
    └── reference/
```

Do not create unnecessary folders or files.

------------------------------------------------------------------------

## Typography

The approved design system uses:

### Headings

Libre Caslon Text

### Body

Plus Jakarta Sans

### Labels / UI

Plus Jakarta Sans

Font files are stored locally in:

`assets/fonts/`

Available fonts:

``` text
LibreCaslonText-Regular.ttf
LibreCaslonText-Bold.ttf
LibreCaslonText-Italic.ttf

PlusJakartaSans-VariableFont_wght.ttf
PlusJakartaSans-Italic-VariableFont_wght.ttf
```

Use local `@font-face` declarations.

Do not load fonts from Google Fonts or another external CDN unless
explicitly instructed.

------------------------------------------------------------------------

## Core Design Tokens

Use these design-system values.

### Colors

Primary:

`#0D332B`

Secondary:

`#D19A5B`

Tertiary:

`#F9F6F0`

Neutral:

`#4A4A4A`

These are the primary design-system colors.

Do not randomly introduce additional brand colors.

Additional shades should only be introduced when necessary for
accessibility, borders, hover states, backgrounds, or visual hierarchy.

------------------------------------------------------------------------

## Design Direction

The approved visual language is:

-   Premium
-   Calm
-   Wellness-focused
-   Elegant
-   Editorial
-   Minimal
-   Spacious
-   Refined

Use:

-   Warm cream backgrounds
-   Deep green primary elements
-   Warm gold secondary accents
-   Restrained neutral tones
-   Serif display typography
-   Clean sans-serif supporting typography
-   Generous whitespace
-   Thin borders
-   Minimal visual clutter

Do not introduce:

-   Bright gradients
-   Neon colors
-   Heavy shadows
-   Excessive rounded cards
-   Generic SaaS styling
-   Generic medical website styling
-   Unapproved decorative elements

------------------------------------------------------------------------

## Approved Pages

The approved design contains these pages:

1.  Home
2.  Weight Loss
3.  Inch Loss
4.  Body Contouring
5.  Body Sculpting
6.  About
7.  FAQs
8.  Contact

Implement pages according to the approved PDF.

Do not invent new pages unless explicitly requested.

------------------------------------------------------------------------

## Development Method

Build the website incrementally.

Do NOT attempt to build the entire website in one operation.

Recommended order:

1.  Project foundation
2.  SCSS foundation
3.  Global typography
4.  Global layout
5.  Header
6.  Navigation
7.  Footer
8.  Buttons
9.  Home page
10. Home section-by-section visual refinement
11. Reusable patterns
12. Remaining pages
13. Responsive refinement
14. JavaScript interactions
15. SEO
16. Accessibility
17. Performance
18. Final QA

------------------------------------------------------------------------

## Critical Visual Development Rule

The approved PDF is the visual reference.

For each section:

1.  Study the corresponding PDF section.
2.  Implement the HTML structure.
3.  Implement SCSS.
4.  Render the page.
5.  Compare the result with the PDF.
6.  Identify visual differences.
7.  Refine.
8.  Only then continue.

Do not assume that technically valid code is visually correct.

------------------------------------------------------------------------

## HTML Requirements

All pages must use semantic HTML5.

Use appropriate:

-   `header`
-   `nav`
-   `main`
-   `section`
-   `article`
-   `footer`
-   headings
-   paragraphs
-   lists
-   buttons
-   links

Maintain correct heading hierarchy.

Each page must have one appropriate H1.

Do not use headings only for visual styling.

------------------------------------------------------------------------

## SEO Requirements

Every HTML page must have page-specific:

-   title
-   meta description
-   canonical URL
-   viewport
-   appropriate Open Graph metadata where useful

Use semantic HTML.

Images must have meaningful alt text where appropriate.

Do not duplicate titles or descriptions across pages.

Do not use JavaScript to generate the primary page content.

Important SEO content must exist directly in the HTML.

------------------------------------------------------------------------

## Responsive Requirements

The website must be fully responsive.

Design for:

-   Mobile
-   Tablet
-   Desktop
-   Large desktop

Use mobile-first SCSS.

Do not simply shrink the desktop layout.

Adapt:

-   navigation
-   hero sections
-   grids
-   cards
-   typography
-   spacing
-   images
-   CTAs
-   footer
-   FAQ

for smaller screens.

------------------------------------------------------------------------

## JavaScript Requirements

Use vanilla JavaScript only.

JavaScript should enhance the website rather than generate the primary
page content.

Use JavaScript for functionality such as:

-   Mobile navigation
-   FAQ accordion
-   UI interactions
-   Small progressive enhancements

Avoid unnecessary JavaScript.

Do not introduce a JavaScript framework.

------------------------------------------------------------------------

## SCSS Requirements

Use SCSS partials and variables.

Keep reusable design tokens in:

`scss/_variables.scss`

Use:

`scss/main.scss`

as the main SCSS entry point.

Compile SCSS to:

`css/main.css`

Do not write large amounts of CSS directly into HTML.

Do not use inline styles unless there is a strong reason.

------------------------------------------------------------------------

## Existing Design System

Do not overwrite the existing design-system decisions without
discussion.

The current design tokens are based on the approved VYVORA SLIMS
design-system reference.

Before changing:

-   colors
-   typography
-   spacing
-   breakpoints
-   component structure

explain why the change is necessary.

------------------------------------------------------------------------

## Assets

Assets will be supplied by the project owner when required.

If an image or graphic is required but not available:

DO NOT invent a replacement asset without asking.

Instead report:

``` text
Asset required:
[describe asset]

Used in:
[page / section]

Recommended dimensions:
[dimensions]

Recommended format:
[format]
```

Wait for the asset when the asset is important to accurately reproduce
the approved design.

Do not use random stock images as permanent replacements.

------------------------------------------------------------------------

## Content

Use the approved VYVORA SLIMS content from the supplied reference
material.

Do not rewrite or invent marketing claims.

Do not introduce:

-   unsupported medical claims
-   guaranteed results
-   exaggerated treatment claims
-   unrelated services
-   salon/beauty services

The website positioning is focused on:

-   Weight Loss
-   Inch Loss
-   Body Contouring
-   Body Sculpting

------------------------------------------------------------------------

## Code Quality

Keep code:

-   Simple
-   Readable
-   Maintainable
-   Semantic
-   Reusable
-   Accessible

Avoid premature abstraction.

Do not create unnecessary components or utility systems.

Prefer straightforward HTML/CSS/JS over complex architecture.

------------------------------------------------------------------------

## Important Rule

Do not make major design or architecture decisions independently.

When a requirement is unclear:

STOP and ask.

Do not guess.

The project owner will provide assets and clarification when required.

------------------------------------------------------------------------

## Current Development Stage

We are currently establishing the project foundation and design system.

Do not start building all website pages yet.

The next development task will be explicitly provided by the project
owner.

## Code Comments & Documentation

All code must be written with clear, meaningful comments so that another developer can understand the purpose and behavior of the implementation.

Comments should explain:

- What a section of code does
- Why a non-obvious implementation decision was made
- The purpose of reusable classes, mixins, functions, and utilities
- Responsive behavior where it is not immediately obvious
- Accessibility-related implementation decisions
- Important browser compatibility considerations
- Any dependency or relationship between HTML, SCSS, and JavaScript

### HTML

Use comments for major page sections when helpful.

Do not add unnecessary comments to obvious HTML elements.

### SCSS

Use clear section comments for major groups.

For mixins, variables, or non-obvious rules, explain their purpose.

Do not comment every individual CSS property.

### JavaScript

Use comments to explain:

- What the script does
- What elements it controls
- Important event handling
- Accessibility behavior
- Non-obvious logic

Functions should have clear names and, where useful, a short comment describing their purpose.

### General Rule

Comments must be:

- Clear
- Concise
- Meaningful
- Professional
- Written for another developer

Do not use comments to describe obvious code.

Do not add temporary, conversational, or AI-generated comments.

Do not use comments such as:

- "This should work"
- "AI generated"
- "We are doing this because..."

Use TODO comments only for genuine unresolved development tasks.

## Maintainability

Write code as if another developer will maintain this project.

A developer should be able to understand:

1. What the code does
2. Where it belongs
3. What it depends on
4. Why important non-obvious decisions were made
5. How it behaves responsively

Prefer readable code and meaningful naming over clever or overly compact code.

Keep the implementation simple and predictable.

Avoid unnecessary abstraction, duplication, or complexity.

When creating reusable styles or JavaScript functionality, keep responsibilities clear and focused.

Do not sacrifice readability for fewer lines of code.

## Contact & Conversion Strategy

The website must NOT contain any contact, enquiry, appointment, or consultation form.

There must be no:

- Contact form
- Enquiry form
- Consultation form
- Appointment form
- Name/email/phone submission form
- Form-based lead capture

Visitors must contact VYVORA SLIMS directly.

### Book a Consultation

Where the approved design uses:

"Book a Consultation"

the CTA should link to:

`contact.html`

The Contact page will provide the direct contact options.

Do not create a separate booking form.

### WhatsApp

Where the approved design includes:

"WhatsApp Us"

use a direct WhatsApp link.

The actual WhatsApp number must be confirmed by the project owner before the production WhatsApp URL is created.

Do not invent or assume a WhatsApp number.

If the WhatsApp number has not yet been confirmed, use a clearly reported temporary implementation decision rather than publishing an incorrect number.

### Phone

Where appropriate, use a real telephone link:

`tel:[confirmed-number]`

The phone number must come from the approved/confirmed project information.

### Contact Page

The Contact page will provide:

- Phone
- WhatsApp
- Address
- Directions

It will NOT contain a contact or enquiry form.

### CTA Rule

Always follow the approved PDF for which CTAs appear in each section.

Do not add a WhatsApp CTA to a section simply because WhatsApp exists elsewhere on the website.

Do not add additional CTAs that are not present in the approved design.

The approved PDF is the visual source of truth for CTA presence and placement.
