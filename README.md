# Jerome Bible Baptist Church Website

A modern, welcoming, and responsive website for Jerome Bible Baptist Church, built with React and Tailwind CSS.

## Features

- **Fully Responsive Design** - Mobile-first approach that works on all devices
- **7 Complete Pages:**
  - Home - Hero section, welcome message, upcoming events, and call-to-action
  - About - Church history, mission/vision, leadership team, and statement of faith
  - Services - Service times, location with map integration, and what to expect
  - Ministries - All church programs and ministry opportunities
  - Sermons - Sermon archive with video embeds and podcast links
  - Give - Online giving information and donation options
  - Contact - Contact form, staff directory, and location information
- **Modern UI Components** - Cards, buttons, forms with consistent styling
- **Warm & Welcoming Design** - Soft blues, corals, and cream color palette
- **Sample Content** - Realistic placeholder content ready to customize

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router v7** - Client-side routing
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd church-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Customization Guide

### 1. Update Church Information

Replace placeholder content in these files:
- Church name in `src/components/layout/Header.jsx` and `Footer.jsx`
- Contact information in `src/components/layout/Footer.jsx` and `src/pages/Contact.jsx`
- Service times in `src/pages/Services.jsx`
- Staff bios in `src/pages/About.jsx` and `src/pages/Contact.jsx`

### 2. Add Real Images

Replace placeholder image sections with actual photos:
- Hero background in `src/components/home/Hero.jsx`
- Leadership photos in `src/pages/About.jsx`
- Ministry and event images throughout pages

### 3. Customize Colors

Update colors in `src/index.css`:
```css
:root {
  --color-primary: #4a90a4;      /* Main brand color */
  --color-secondary: #e8956f;    /* Accent color */
  --color-accent: #f9f6f1;       /* Background highlight */
  --color-charcoal: #2d3436;     /* Text color */
}
```

### 4. Add Google Maps

In `src/pages/Services.jsx` and `src/pages/Contact.jsx`, replace the map placeholder with:
```jsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>
```

### 5. Connect Contact Form

Update `src/components/forms/ContactForm.jsx` to integrate with:
- EmailJS (https://www.emailjs.com/)
- Formspree (https://formspree.io/)
- Your own backend API

### 6. Add Analytics

Add Google Analytics or similar in `index.html` before closing `</head>` tag.

### 7. Update Social Media Links

Replace `#` with actual social media URLs in:
- `src/components/layout/Footer.jsx`
- `src/pages/Contact.jsx`

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

### Recommended Hosting Platforms

- **Netlify** - Drop the `dist` folder or connect GitHub repo
- **Vercel** - Import project and deploy automatically
- **GitHub Pages** - Free hosting for static sites
- **Firebase Hosting** - Google's hosting platform

### Deploy to Netlify (Easiest)

1. Sign up at https://netlify.com
2. Drag and drop the `dist` folder
3. Done! Your site is live

## Project Structure

```
church-website/
├── public/               # Static assets
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer
│   │   ├── home/        # Home page sections
│   │   ├── shared/      # Reusable components
│   │   └── forms/       # Form components
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app with routing
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG standards
- Form validation and error messages

## Next Steps

1. Replace all placeholder content with real church information
2. Add actual photos and images
3. Update social media and contact links
4. Configure form submission
5. Add Google Maps embed
6. Set up analytics
7. Test on multiple devices
8. Deploy to hosting platform

## Support

For questions or issues:
- Check the React documentation: https://react.dev
- Check Tailwind CSS docs: https://tailwindcss.com
- Check Vite docs: https://vitejs.dev

## License

This project is free to use and customize for your church or organization.
