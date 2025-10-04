# Bliss SPA - CodeBuddy Reference

## Project Overview
A Next.js 15 SPA (Single Page Application) for Bliss Nail Spa & Lash - a nail salon and beauty services website in Norwalk, CT. The project focuses on providing an elegant, animation-rich user experience with integrated booking functionality.

## Development Commands

### Core Development
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Quality
- ESLint is configured via `eslint.config.mjs` using Next.js core web vitals and TypeScript rules
- No specific lint command in package.json - use `npx eslint .` for manual linting

## Technology Stack

### Framework & Core
- **Next.js 15** - React framework with App Router
- **TypeScript** - Full TypeScript support with strict mode
- **React 19** - Latest React version

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Fonts** - Playfair Display and Cormorant Garamond via Google Fonts
- **Responsive Design** - Mobile-first approach

### Animation & Interactivity
- **GSAP 3.12.5** - High-performance animations
- **Lucide React** - Icon library

### External Integrations
- **Mangomint API** - Booking system integration (Company ID: 207987)
- **Google Maps API** - Location display (configured but not yet implemented)

## Project Structure

### Key Directories
```
src/
├── app/           # Next.js App Router pages
│   ├── layout.tsx # Root layout with metadata, fonts, and global scripts
│   └── page.tsx   # Homepage
├── components/    # React components
│   ├── home/      # Homepage-specific components
│   ├── layout/    # Layout components (Header, Footer, FloatingButton)
│   └── SEO/       # SEO-related components (JSON-LD)
├── data/          # Static data (services, etc.)
└── types/         # TypeScript type definitions
```

### Architecture Notes

#### App Router Structure
- Uses Next.js 15 App Router with React Server Components
- Layout component (`src/app/layout.tsx`) includes:
  - Global metadata and SEO configuration
  - Google Fonts setup (Inter, Cormorant Garamond, Playfair Display)
  - Mangomint booking script integration
  - Header, Footer, and FloatingButton components

#### Styling Approach
- Tailwind CSS with custom color variables (`--background`, `--foreground`)
- Custom font families configured via CSS variables
- Component-based styling with utility classes

#### Animation Strategy
- GSAP used for sophisticated animations
- Implemented in key components for enhanced UX
- Focus on performance and smooth transitions

## Key Features & Implementation

### Booking System Integration
- Mangomint script loaded globally in layout
- Company ID: 207987
- Booking URL: https://booking.mangomint.com/blissnailspalash
- Floating booking button component available

### SEO & Metadata
- Comprehensive metadata in layout.tsx
- JSON-LD structured data implementation
- Open Graph tags for social sharing
- Search-optimized keywords and descriptions

### Business Information
- **Business Name**: Bliss Nail Spa & Lash
- **Address**: 408 Westport Ave, Norwalk, CT 06851
- **Phone**: 203-846-2777
- **Services**: Manicure, Pedicure, Eyelash Extensions, Waxing, Massage

## Development Guidelines

### Adding New Pages
- Create new directories in `src/app/` following App Router conventions
- Use TypeScript for all new components
- Implement proper metadata and SEO considerations

### Component Development
- Follow existing patterns in `src/components/`
- Use Tailwind CSS for styling
- Consider GSAP animations for interactive elements
- Ensure mobile responsiveness

### Data Management
- Static data should be placed in `src/data/`
- Type definitions in `src/types/`
- Keep external API integrations minimal and well-documented

## Important Notes

- Project is designed as a SPA with single-page navigation
- No backend API routes currently implemented
- All styling is done through Tailwind CSS - no separate CSS files
- Images and assets are served from `public/` directory
- Deployment target is Vercel (optimized for Next.js)