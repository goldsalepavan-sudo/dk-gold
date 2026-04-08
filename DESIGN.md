# Design Brief

## Direction

Warm Night with Gold Accents — Premium gold-buying platform combining warm dark sophistication with rich amber highlights to convey trust, stability, and instant cash value.

## Tone

Refined luxury without ostentation. Deep charcoal base with warm undertones, elevated by strategic gold accents that signal value and trustworthiness.

## Differentiation

Gold-threaded accent elements on CTAs and key highlights — the gold "glimmers" through the interface, creating visual anchors for immediate cash offers and premium positioning.

## Color Palette

| Token      | OKLCH           | Role                                      |
|------------|-----------------|-------------------------------------------|
| background | 0.14 0.015 50   | Warm dark charcoal base                   |
| foreground | 0.92 0.01 60    | Light warm text, high contrast            |
| card       | 0.18 0.018 50   | Slightly elevated surface                 |
| primary    | 0.72 0.17 70    | Rich amber/gold — primary CTAs, highlights|
| accent     | 0.58 0.14 25    | Deep coral — secondary action, emphasis   |
| muted      | 0.22 0.02 50    | Neutral section backgrounds               |
| border     | 0.28 0.02 50    | Subtle borders, dividers                  |

## Typography

- Display: Space Grotesk — Tech-forward, premium headlines with geometric precision
- Body: DM Sans — Clean, approachable paragraphs and UI labels
- Mono: Geist Mono — Code blocks and monospace content
- Scale: Hero `text-6xl md:text-7xl font-bold`, h2 `text-3xl md:text-4xl font-bold`, label `text-sm font-semibold uppercase`, body `text-base leading-relaxed`

## Elevation & Depth

Soft elevated shadows on cards (`shadow-elevated`) create depth without harshness. Header features 2px gold bottom border accent. Footer stands distinct with muted background and top border.

## Structural Zones

| Zone    | Background    | Border                        | Notes                              |
|---------|---------------|-------------------------------|-------------------------------------|
| Header  | card (0.18)   | 2px gold bottom border        | Logo + nav, minimal elevation      |
| Hero    | background    | —                             | Full-width CTA hero section        |
| Content | alternating   | —                             | Muted bg sections alternate        |
| Cards   | card + shadow | none                          | Service/feature cards, subtle-shadow|
| Footer  | muted (0.22)  | 2px gold top border           | Company info, links, contact       |

## Spacing & Rhythm

6rem sections gaps (lg), 3rem card gaps (md), 1.5rem internal padding. Alternating muted/card backgrounds create visual rhythm. Generous whitespace conveys premium positioning.

## Component Patterns

- Buttons: Gold primary (`bg-primary text-primary-foreground`), raised shadow on hover, uppercase labels
- Cards: Rounded corners (6-8px), soft shadow, card background, 2px gold border accent optional
- CTAs: Prominent gold with rounded corners (8px), centered, large touch targets (min 48px height)
- Badges: Muted background with foreground text, small rounded (4px)

## Motion

- Entrance: Subtle fade-in on scroll (0.3s ease-out)
- Hover: Smooth color transition (0.2s) + slight scale lift on buttons
- Decorative: None — focus on clarity and CTAs

## Constraints

- No gradients on backgrounds; single-color surfaces only
- Gold accent reserved for CTAs and key highlights — never overuse
- Dark mode only — warm night aesthetic throughout
- Mobile-first responsive design (sm, md, lg breakpoints)
- Maximum 2 font families (display + body)

## Signature Detail

Gold 2px border accents on header and footer — thin, refined lines that frame the premium experience and direct visual flow toward CTAs.

