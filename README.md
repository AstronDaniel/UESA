# UESA - Uganda Education Students Association

**Uniting and empowering education students in Uganda for a better future.**

A modern, responsive web platform for the Uganda Education Students Association, built to unite and empower education students across Uganda through professional development, networking, and advocacy.

## About UESA

The Uganda Education Students Association (UESA) is dedicated to empowering education students by providing opportunities for professional development, networking, and advocacy while promoting educational excellence and awareness.

### Vision
To be a leading platform for education students in Uganda, empowering them to achieve academic excellence, fostering innovation, and promoting educational development for national growth.

### Mission
To unite and empower education students in Uganda by providing opportunities for professional development, networking, and advocacy, while promoting education and awareness.

## 🚀 Features

- **Modern UI/UX**: Built with Next.js 16, React 19, and Tailwind CSS 4
- **Dark/Light Theme**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach ensuring great experience on all devices
- **Interactive Components**: Smooth animations with Framer Motion
- **Image Carousels**: Engaging photo galleries using Embla Carousel
- **Activities & Events**: Showcase of conferences, workshops, and networking events
- **Membership Portal**: Easy-to-use membership application system
- **Activity Modals**: Detailed pop-ups for exploring specific events
- **Accessibility**: Built with accessibility best practices

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **TypeScript**: Full type safety throughout the application

## 📦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AstronDaniel/UESA.git
cd uesa-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
uesa-web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── activities/        # Activities & events page
│   │   ├── contact/           # Contact page
│   │   ├── membership/        # Membership page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable React components
│   │   ├── ActivityModal.tsx  # Activity details modal
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Hero.tsx           # Hero section
│   │   ├── ImageCarousel.tsx  # Image carousel component
│   │   ├── JoinCTA.tsx        # Call-to-action component
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── PageHeader.tsx     # Page header component
│   │   ├── Section.tsx        # Section wrapper
│   │   ├── ThemeProvider.tsx  # Theme context provider
│   │   └── ThemeToggle.tsx    # Theme toggle button
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   └── assets/                # Static assets
└── ...config files
```

## Key Pages

- **Home** (`/`) - Landing page with vision, mission, and core objectives
- **About** (`/about`) - Detailed information about UESA
- **Activities** (`/activities`) - Events, conferences, and programs
- **Membership** (`/membership`) - Join UESA and membership benefits
- **Contact** (`/contact`) - Get in touch with UESA

## Customization

### Styling
The project uses Tailwind CSS with custom configuration. Modify `tailwind.config.ts` and `src/app/globals.css` to customize the design system.

### Theme
Theme colors and modes are managed through CSS variables in `globals.css`. The application supports both light and dark modes.

### Content
Page content can be modified in the respective files under `src/app/`. Component logic is separated in `src/components/`.

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Build the application with `npm run build` and deploy the `.next` folder.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or report bugs via the Issues tab.

## 📄 License

This project is licensed under the MIT License.

## Contact

For more information about UESA, visit our website or reach out through the contact page.

---

Built with ❤️ for education students in Uganda
