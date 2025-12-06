# Obsidian Luxe Portfolio

A premium, dark-themed portfolio website built with Next.js 16, featuring stunning WebGL effects, smooth scrolling, and modern UI components.

## ✨ Features

- **Obsidian Dark Theme** - Deep, rich color palette with aurora accent colors
- **Custom Cursor** - Multi-layered cursor with spring physics (desktop only)
- **WebGL Hero Scene** - Floating orbs and particles with Three.js
- **Smooth Scrolling** - Buttery smooth scroll experience powered by Lenis
- **Glass Morphism** - Modern frosted glass effects throughout
- **Scroll Animations** - Framer Motion powered reveal animations
- **Responsive Design** - Fully responsive with mobile-first approach
- **Premium Typography** - Inter and Satoshi font families

## 🎨 Sections

1. **Hero/Banner** - Full-viewport hero with animated text and WebGL background
2. **About** - Feature cards and company introduction
3. **Services** - Interactive tabbed interface showcasing offerings
4. **Work/Portfolio** - Project showcase with stats and case studies
5. **Contact** - Glassmorphic contact form with social links
6. **Footer** - Comprehensive footer with links and branding

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Smooth Scroll**: Lenis
- **Language**: JavaScript (JSX)

## 📦 Dependencies

```json
{
  "next": "16.0.7",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "styled-components": "latest",
  "framer-motion": "latest",
  "lenis": "latest",
  "three": "latest",
  "@react-three/fiber": "latest",
  "@react-three/drei": "latest"
}
```

## 🎯 Color System

### Obsidian Backgrounds
- `void`: #030303 - Deepest black
- `deep`: #080808 - Primary background  
- `base`: #0C0C0C - Card backgrounds
- `elevated`: #121212 - Elevated surfaces

### Aurora Accents
- `violet`: #8B5CF6 - Primary accent
- `indigo`: #6366F1 - Secondary
- `cyan`: #06B6D4 - Tertiary
- `emerald`: #10B981 - Success

## 📁 Project Structure

```
nextjs-project/
├── app/
│   ├── layout.jsx          # Root layout with providers
│   ├── page.jsx            # Main page
│   └── registry.jsx        # Styled Components registry
├── components/
│   ├── Cursor/             # Custom cursor component
│   ├── Navigation/         # Header navigation
│   ├── SmoothScroll/       # Lenis wrapper
│   ├── WebGL/              # Three.js scenes
│   └── Home/               # Page sections
│       ├── Banner/
│       ├── About/
│       ├── Services/
│       ├── Work/
│       ├── Contact/
│       └── Footer/
├── context/
│   ├── theme.js            # Theme provider
│   ├── menu.js             # Menu state
│   └── cursor.js           # Cursor state
├── styles/
│   ├── colors.js           # Color system
│   ├── global.js           # Global styles
│   └── themes/
│       └── dark.js         # Dark theme config
└── next.config.mjs         # Next.js configuration
```

## 🎨 Customization

### Changing Colors

Edit `styles/colors.js` to customize the color palette.

### Modifying Content

- **Hero Text**: Edit `components/Home/Banner/Banner.jsx`
- **Services**: Update the `services` array in `components/Home/Services/Services.jsx`
- **Projects**: Modify the `projects` array in `components/Home/Work/Work.jsx`
- **Contact Info**: Edit contact details in `components/Home/Contact/Contact.jsx`

### Adjusting Animations

All animations use Framer Motion. Adjust timing and easing in individual components by modifying the `transition` props.

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Mobile: < 600px
- Tablet: 600px - 900px
- Desktop: > 900px

## ⚡ Performance

- WebGL effects are lazy-loaded
- Images and assets are optimized
- Smooth scroll is optimized with requestAnimationFrame
- Custom cursor is disabled on touch devices

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspired by Apple, Linear, Vercel, and Stripe
- Fonts: Inter (Google Fonts), Satoshi (fallback)
- Icons: Unicode emojis for simplicity

---

**Built with ❤️ using Next.js and modern web technologies**
