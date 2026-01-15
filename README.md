# Portfolio Website

A modern, clean architecture portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🏗️ Architecture

This project follows a clean architecture pattern with the following structure:

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── ui/               # Basic UI components
│   │   ├── Button.tsx    # Button component
│   │   ├── Card.tsx      # Card components
│   │   └── index.ts      # UI exports
│   ├── layout/           # Layout components
│   │   ├── Navigation.tsx # Navigation bar
│   │   ├── Footer.tsx    # Footer component
│   │   └── index.ts      # Layout exports
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx      # Hero section
│   │   ├── About.tsx     # About section
│   │   ├── Projects.tsx  # Projects section
│   │   ├── Contact.tsx   # Contact section
│   │   └── index.ts      # Section exports
│   └── index.ts          # Main components export
├── types/                 # TypeScript type definitions
│   └── index.ts
├── constants/             # Application constants
│   └── index.ts
└── utils/                 # Utility functions
    └── index.ts
```

## 🚀 Features

- **Clean Architecture**: Well-organized code structure with separation of concerns
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with Tailwind CSS and DaisyUI
- **Component-Based**: Modular, reusable components
- **Smooth Scrolling**: Enhanced navigation experience

## 🛠️ Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Lucide React** - Icon library

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Personal Information
Edit `src/constants/index.ts` to update:
- Personal details
- Projects
- Social links
- Technologies

### Styling
- Global styles in `src/app/globals.css`
- Component-specific styles in individual component files
- Color scheme can be modified in Tailwind classes

### Content
- Update project data in `src/constants/index.ts`
- Modify section content in respective component files
- Add new sections by creating components in `src/components/sections/`

## 📁 Project Structure Benefits

- **Separation of Concerns**: UI, business logic, and data are separated
- **Reusability**: Components can be easily reused across the application
- **Maintainability**: Clean structure makes it easy to find and modify code
- **Scalability**: Easy to add new features and sections
- **Type Safety**: TypeScript ensures reliability and better developer experience
