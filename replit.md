# FishStocks Dashboard

## Overview

FishStocks is a financial control and investment management application integrated with Yahoo Finance. The platform provides an interactive dashboard and profile screening system to help users track and manage their investments with real-time data visualization.

This is a modern React-based single-page application built with TypeScript, featuring a multi-page routing system for authentication flows and a landing page showcasing the platform's capabilities. The application is designed to provide a stable, clear main dashboard where users can access key financial controls and investment tracking features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**
- **Framework**: React 18.3+ with TypeScript for type-safe component development
- **Build Tool**: Vite 5.4+ configured for fast development with HMR disabled and optimized production builds
- **Styling**: Tailwind CSS 3.4+ for utility-first styling with custom configuration
- **Routing**: React Router DOM v7 for client-side navigation and authentication flows
- **Development Server**: Configured to run on host 0.0.0.0, port 5000 with allowed hosts enabled

**Design System**
- Light color scheme as default (slate-50 background, slate-900 text)
- Gradient backgrounds using blue and emerald tones for visual appeal
- Glassmorphism effects with backdrop blur on key UI elements
- Rounded-3xl borders for modern, friendly appearance
- Emerald-500 as primary action color for CTAs and interactive elements
- Slate color palette for neutral UI elements

**Component Architecture**
The application follows a clear separation between pages and reusable components:

*Pages (route-level components):*
- `LandingPage` - Marketing homepage with hero, features, and CTAs
- `LoginPage` - User authentication with Google OAuth integration planned
- `SignupPage` - User registration with password validation
- `ForgotPasswordPage` - Password recovery flow

*Reusable Components:*
- `Header` - Sticky navigation with responsive mobile menu
- `Hero` - Main landing section with dual CTAs and security messaging
- `HowItWorks` - 4-step onboarding explanation
- `FeaturesCarousel` - Grid showcase of key platform features
- `Footer` - Multi-column footer with navigation and legal links

**Routing Structure**
- `/` - Landing page for unauthenticated users
- `/login` - User authentication entry point
- `/signup` - New user registration
- `/forgot-password` - Password recovery workflow

**TypeScript Configuration**
- Strict mode enabled for enhanced type safety
- ES2020 target with DOM libraries
- React JSX transformation
- Bundler module resolution for Vite compatibility
- No unused locals/parameters enforcement
- Isolated modules for better build performance

**State Management**
Currently using React local state (useState hooks) for form validation. No global state management library implemented yet, but will be needed for:
- User authentication state
- Investment portfolio data
- Real-time stock price updates
- User preferences and settings

### Backend Architecture

**Current State**
The repository contains only frontend code. Backend implementation is pending and will require:

**Required Backend Services:**
1. **Authentication Service**
   - User registration and login
   - Password reset functionality
   - Google OAuth 2.0 integration
   - JWT token generation and validation
   - Session management

2. **User Management Service**
   - User profile CRUD operations
   - Profile screening/questionnaire system
   - User preferences storage
   - Account settings management

3. **Investment Data Service**
   - Yahoo Finance API integration for real-time stock data
   - Portfolio tracking and calculations
   - Asset performance analysis
   - Historical data retrieval

4. **Alert Service**
   - Custom price alerts
   - Portfolio performance notifications
   - Email/push notification delivery

**Security Requirements:**
- AES-256 encryption for sensitive data (as advertised on landing page)
- LGPD compliance for Brazilian users
- Secure API endpoints with authentication middleware
- Rate limiting and CORS configuration

## External Dependencies

### Current Dependencies

**Production:**
- `react` (^18.3.1) - Core UI library
- `react-dom` (^18.3.1) - React rendering
- `react-router-dom` (^7.0.2) - Client-side routing

**Development:**
- `@vitejs/plugin-react` (^4.3.4) - Vite React plugin with Fast Refresh
- `tailwindcss` (^3.4.17) - Utility-first CSS framework
- `autoprefixer` (^10.4.20) - CSS vendor prefixing
- `postcss` (^8.4.49) - CSS transformation
- `typescript` (^5.6.3) - Type system
- `@types/react` (^18.3.12) - React type definitions
- `@types/react-dom` (^18.3.1) - React DOM type definitions

### Planned External Integrations

**Yahoo Finance API**
- Purpose: Real-time and historical stock market data
- Use cases: Stock prices, market indices, financial metrics
- Authentication method: API key (to be determined)

**Google OAuth 2.0**
- Purpose: Social authentication
- Implementation: Partial UI prepared, backend integration pending
- Scopes needed: Profile, email

**Email Service** (Provider TBD)
- Purpose: Password reset, notifications, alerts
- Options to consider: SendGrid, AWS SES, Mailgun

**Database** (Not yet selected)
- Required for: User accounts, portfolios, preferences, alert configurations
- Considerations: Will likely use Drizzle ORM (based on project patterns)
- Potential choices: PostgreSQL, MySQL, or other Drizzle-compatible databases

**Monitoring & Analytics** (Not yet implemented)
- 24/7 monitoring as advertised
- Error tracking and logging
- User analytics