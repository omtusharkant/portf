# File Explorer Portfolio - Design Guidelines

## Design Approach
**System**: Custom retro-terminal/code editor aesthetic inspired by Linux file explorers, macOS Finder dark mode, and VS Code interface patterns. This is a utility-focused, information-dense application where clarity and navigability are paramount.

## Core Design Principles
1. **Terminal Minimalism**: Pure black backgrounds with high-contrast white text for optimal readability
2. **Hierarchical Clarity**: Visual tree structure with clear parent-child relationships
3. **Developer Aesthetics**: Monospace typography and code editor-inspired visual language
4. **Subtle Interactivity**: Smooth, purposeful animations that enhance UX without distraction

## Color Palette

### Dark Mode (Primary)
- **Background**: #000000 (pure black)
- **Primary Text**: #FFFFFF (white)
- **Secondary Elements**: #404040 (dark grey for borders, dividers)
- **Accent/Interactive**: #007ACC (VS Code blue for links, active states)
- **Hover State**: #1E1E1E (subtle grey for interactive elements)
- **Folder Icons**: #FFD700 (golden yellow for visual hierarchy)
- **File Icons**: #FFFFFF or #007ACC (white or blue for differentiation)

## Typography

### Font Stack
```
Primary: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace
```

### Font Sizes
- **File/Folder Names**: 14px (base)
- **Modal Headers**: 20px (semi-bold)
- **Modal Content**: 14px (regular)
- **Breadcrumbs/Path**: 12px (secondary info)

## Layout System

### Spacing Units
Use consistent 12px base unit: `p-3, m-3, gap-3` (12px), `p-6` (24px), `p-12` (48px)

### Tree View Structure
- **Indentation**: 24px per nesting level
- **Row Height**: 32px minimum for touch targets
- **Icon-to-Text Gap**: 8px
- **Folder/File Spacing**: 4px vertical between items

### Grid Layout
- **Sidebar/Explorer**: Fixed 320px width (collapsible on mobile)
- **Content Area**: Flexible fill remaining space
- **Modal Windows**: Max-width 600px, centered overlay

## Component Library

### Navigation Tree
- **Folder Item**: Icon (16px) + Label + Chevron (collapsed/expanded state)
- **File Item**: Icon (16px) + Label (clickable)
- **Hover Effect**: Background #1E1E1E, transition 150ms
- **Active/Selected**: Background #007ACC with 20% opacity
- **Chevron Animation**: 90° rotation, 200ms ease-in-out

### Modal Windows
- **Backdrop**: rgba(0, 0, 0, 0.8) overlay
- **Window**: #1E1E1E background, 1px solid #404040 border
- **Header**: Fixed height 48px, #000000 background, includes close button
- **Content**: Padding 24px, scrollable, white text
- **Close Button**: Top-right, 32px × 32px, #FFFFFF icon, hover #007ACC

### Icons
- **Folder Closed**: 📁 or chevron-right + folder outline
- **Folder Open**: 📂 or chevron-down + folder outline  
- **File Types**: Use Font Awesome or Heroicons for document, code, image, link icons
- **Color**: Golden (#FFD700) for folders, white/blue for files

### Scrollbars
- **Track**: Transparent or #000000
- **Thumb**: #404040, 6px width
- **Thumb Hover**: #007ACC

## Animations

### Folder Expand/Collapse
- **Duration**: 250ms
- **Easing**: ease-in-out
- **Effect**: Height transition + chevron rotation + child fade-in

### Modal Open/Close
- **Duration**: 200ms
- **Easing**: ease-out (open), ease-in (close)
- **Effect**: Scale from 0.95 to 1.0 + opacity fade

### Hover States
- **Duration**: 150ms
- **Easing**: ease
- **Effect**: Background color transition only

## Content Structure

### Folder Categories
1. **📁 Projects** - Portfolio work, case studies
2. **📁 Experience** - Work history, roles
3. **📁 Skills** - Technical competencies, tools
4. **📁 Contact** - Social links, email, resume

### File Content Display
- Each file opens in a centered modal window
- Content formatted with proper markdown-style spacing
- Links styled with #007ACC, underline on hover
- Code blocks (if any) use same monospace font with #1E1E1E background

## Responsive Behavior
- **Desktop (>768px)**: Sidebar visible, modal 600px max-width
- **Tablet/Mobile (<768px)**: Collapsible sidebar (hamburger), modal full-width with 16px margins

## Images
**No hero images** - This is a terminal/file explorer interface where text and structure dominate. Any images should only appear within file content modals when relevant to portfolio projects (screenshots, project images, etc.)