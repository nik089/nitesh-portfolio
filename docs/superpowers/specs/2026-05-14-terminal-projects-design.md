# Terminal-Style Project Cards Design

## Overview
Transform the project section cards in `ProjectsSection.tsx` from glassmorphism with animated blobs to a classic CRT terminal aesthetic while maintaining the existing purple accent color scheme.

## Visual Direction
- **Theme**: Classic CRT terminal with purple phosphor accent
- **Effects**: Subtle — slight glow, minimal scan lines for readability
- **Header**: Simple bar with PROJECT_01, PROJECT_02 numbering

## Design Elements

### Color Palette
- Primary background: Dark terminal black (#0a0a0f to #0f0f14)
- Phosphor accent: Purple gradient (#7c3aed → #a855f7)
- Secondary text: Muted terminal gray (#71717a, #a1a1aa)
- Glow effects: Purple with reduced opacity for subtle CRT bloom

### Card Structure

**Terminal Header Bar**
- Position: Top of each card
- Content: `PROJECT_01`, `PROJECT_02`, etc. in monospace
- Style: Purple text, subtle border-bottom, terminal tab appearance

**Main Content Area**
- Title: Monospace font, terminal-style (JetBrains Mono already loaded)
- Description: Muted gray text, terminal output aesthetic
- Tech stack: Displayed as terminal flags or inline badges with terminal styling

**Demo Button**
- Transform from gradient button to terminal-style command: `> VIEW`
- Purple accent color maintained

### CRT Effects (Subtle)
- Subtle scan line overlay (CSS pseudo-element, low opacity)
- Slight text-shadow glow on key elements (purple phosphor bloom)
- Optional: Very subtle screen flicker animation (configurable)

### Animations
- Preserve entry animations (fade in, slide up)
- Replace blob animations with simpler terminal-style effects (cursor blink, typing effect)
- On hover: Subtle glow increase, maybe a "terminal active" state

## Technical Implementation

### CSS Approach
- Use existing CSS variables from globals.css
- Add terminal-specific utilities (scan-lines, phosphor-glow)
- Leverage JetBrains Mono font already loaded in layout.tsx

### Component Changes
- Modify ProjectCard component structure
- Remove: Animated blob backgrounds, glass overlay, gradient borders
- Add: Terminal header bar, scan line effect, monospace typography

## Acceptance Criteria
1. Cards display with terminal/CRT aesthetic
2. Purple accent color maintained from existing theme
3. JetBrains Mono font used for terminal text
4. Project numbering visible (PROJECT_01, etc.)
5. Subtle CRT effects present but not overwhelming
6. Hover states functional with terminal-style feedback
7. Responsive — works on mobile/tablet/desktop
8. No breaking changes to existing functionality