# Emran Abdalla - DevOps Engineer Portfolio

## Overview

This is a professional portfolio website for Emran Abdalla, a DevOps Engineer specializing in containerization, observability, and infrastructure automation. The application is built as a single-page application (SPA) showcasing professional experience, skills, certifications, and education, with a contact form for visitor engagement.

The portfolio follows a modern, clean design approach inspired by professional developer portfolios, emphasizing technical precision with approachable aesthetics, generous whitespace, and purposeful motion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (single-page navigation)

**UI Component System**
- **shadcn/ui** component library using Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component architecture follows the "New York" style variant with extensive use of CSS variables for theming

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management and API interactions
- **React Hook Form** with Zod resolver for form validation and submission
- Local state management using React hooks (useState, useEffect, useContext)

**Theming System**
- Custom theme provider supporting light/dark modes
- Theme persistence via localStorage with SSR-safe initialization
- Theme state injected in HTML head to prevent flash of unstyled content (FOUC)

**Typography & Design System**
- Primary font: Inter (headings, UI elements)
- Secondary font: JetBrains Mono (code snippets, technical callouts)
- Responsive typography scaling from mobile to desktop
- Consistent spacing system using Tailwind's spacing primitives (4, 6, 8, 12, 16, 20, 24)

**Layout Patterns**
- Maximum content width: `max-w-6xl` for readability
- Grid-based layouts for skills (2-3 columns), certifications (2-4 columns)
- Single-column timeline for experience section
- Smooth scroll navigation between sections with offset for fixed header

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with ES modules
- Separate entry points for development (`index-dev.ts`) and production (`index-prod.ts`)
- Development mode integrates Vite middleware for seamless HMR
- Production mode serves pre-built static assets from `dist/public`

**API Design**
- RESTful API endpoint: `POST /api/contact` for contact form submissions
- JSON request/response format with proper error handling
- Zod schema validation on both client and server for type safety

**Data Storage Strategy**
- In-memory storage implementation (`MemStorage`) for contact messages
- Interface-based storage abstraction (`IStorage`) allowing future migration to persistent database
- Database schema defined using Drizzle ORM with PostgreSQL dialect
- Schema includes `contact_messages` table with fields: id, name, email, subject, message, createdAt

**Development vs Production**
- Development: Vite dev server middleware for live reloading and HMR
- Production: Static file serving with SPA fallback to `index.html`
- Environment-based configuration via `NODE_ENV`

**Request Logging**
- Custom logging middleware capturing request path, duration, and response status
- Conditional logging for API routes vs static assets
- Formatted timestamps in 12-hour format

### Data Storage Solutions

**Current Implementation**
- In-memory Map-based storage for contact messages
- Unique UUID generation for message IDs
- Automatic timestamp generation on message creation

**Prepared for Database Migration**
- Drizzle ORM configuration ready for PostgreSQL connection
- Schema migrations directory (`./migrations`)
- Database URL expected via `DATABASE_URL` environment variable
- Neon serverless PostgreSQL driver configured in dependencies

**Schema Design**
- `contact_messages` table with primary key (UUID), indexed timestamp
- Form validation schema using Zod ensuring data integrity
- Type inference from Drizzle schema for TypeScript safety

### External Dependencies

**UI & Styling**
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management for component styling
- **clsx** + **tailwind-merge**: Utility for merging Tailwind classes

**Forms & Validation**
- **react-hook-form**: Performant form state management
- **@hookform/resolvers**: Resolver for Zod schema validation
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Bridge between Drizzle ORM and Zod schemas

**Data Fetching & State**
- **@tanstack/react-query**: Async state management for server data
- **wouter**: Minimal routing library for SPAs

**Database & ORM**
- **drizzle-orm**: TypeScript ORM with SQL-like query builder
- **drizzle-kit**: CLI tools for migrations and schema management
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon

**Development Tools**
- **vite**: Next-generation frontend build tool
- **@vitejs/plugin-react**: React plugin for Vite with Fast Refresh
- **esbuild**: JavaScript bundler for production server build
- **tsx**: TypeScript execution engine for development server
- **@replit/vite-plugin-***: Replit-specific plugins for runtime errors, cartographer, and dev banner

**Fonts**
- **Google Fonts**: Inter (sans-serif) and JetBrains Mono (monospace)

**Utilities**
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: Compact URL-safe unique ID generator
- **lucide-react**: Icon library with React components

**Assets**
- Professional headshot image stored in `attached_assets/generated_images/`
- Favicon configuration in public directory