# Stripe Landing Page

A modern, production-ready landing page built with Next.js, TypeScript, and Tailwind CSS, inspired by Stripe's design system and customized for Sque.ai's research platform.

## 🚀 Features

- **Modern Design**: Clean, professional UI inspired by Stripe's design system
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **SEO Ready**: Complete SEO optimization with meta tags and structured data
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Component-Based**: Modular, reusable React components
- **Accessibility**: Proper semantic HTML

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (version 9.0 or higher) or **yarn** (version 1.22 or higher)
- **Git** (for cloning the repository)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mwafrika/stripe-design-clone.git
   cd stripe-design-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
test-goscad/
├── app/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Features.tsx    # Features showcase
│   │   ├── BusinessTypes.tsx # Business types section
│   │   ├── Enterprise.tsx  # Enterprise section
│   │   ├── Growth.tsx      # Growth section
│   │   ├── Developers.tsx  # Developers section
│   │   ├── NoCode.tsx      # No-code options section
│   │   ├── GetStarted.tsx  # Get started section
│   │   ├── Footer.tsx      # Footer component
│   │   └── ui/             # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Input.tsx
│   ├── constants/          # Constants and data
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design System

The project uses a custom design system inspired by Stripe:

- **Colors**: 
  - Primary: `#00d4ff` (Sque brand blue)
  - Secondary: `#0099cc` (Darker blue)
  - Accent: `#7c3aed` (Purple)
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Components**: Reusable Button, Card, and Input components

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📱 Sections

The landing page includes the following sections:

1. **Hero** - Main value proposition with CTA
2. **Features** - Key platform features with visuals
3. **Business Types** - Research workflows for different teams
4. **Enterprise** - Enterprise solutions and partnerships
5. **Growth** - Built for growth section with 2x2 card layout
6. **Developers** - Developer-focused section with code examples
7. **No-Code** - Low-code and no-code options
8. **Get Started** - Final CTA section
9. **Footer** - Comprehensive footer with links

## 🔧 Customization

### Adding New Sections

1. Create a new component in `app/components/`
2. Import and add it to `app/page.tsx`
3. Use the existing design system for consistency

### Modifying Content

- Update content in individual component files
- Modify constants in `app/constants/` for centralized data
- Update SEO metadata in `app/layout.tsx`

### Styling

- Use Tailwind CSS classes for styling
- Add custom styles in `app/globals.css` if needed
- Follow the established design system patterns
