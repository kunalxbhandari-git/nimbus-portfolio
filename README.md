# Kunal Bhandari - Portfolio Website

A modern, fully responsive personal portfolio website built with React and TailwindCSS. Features dark/light mode toggle, smooth animations, and a clean, professional design.

![Portfolio Preview](./public/portfolio-preview.png)

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for entrance animations
- **Modern UI**: Clean design with glassmorphism and neumorphism effects
- **Interactive Sections**:
  - Hero section with animated background elements
  - About section with tech stack icons
  - Projects showcase with hover effects
  - Contact form with validation
  - Social media integration
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: TailwindCSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons, Font Awesome, Simple Icons)
- **Build Tool**: Create React App
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunalbhandari/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update the following files with your information:

- `src/components/Hero.js` - Name, title, and social links
- `src/components/About.js` - Biography and tech stack
- `src/components/Projects.js` - Your projects data
- `src/components/Contact.js` - Contact information
- `src/components/Footer.js` - Social media links

### Colors & Styling
- Primary colors can be changed in `tailwind.config.js`
- Custom styles are in `src/index.css`
- Component-specific styles are inline with Tailwind classes

### Content Sections

#### Hero Section (`src/components/Hero.js`)
```javascript
// Update these links with your actual profiles
<motion.a href="https://github.com/yourusername" ...>
<motion.a href="https://linkedin.com/in/yourusername" ...>
<motion.a href="/your-resume.pdf" ...>
```

#### Projects Section (`src/components/Projects.js`)
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://your-project-demo.com',
    featured: true,
  },
  // Add more projects...
];
```

#### Tech Stack (`src/components/About.js`)
```javascript
const techStack = [
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  // Add/remove technologies as needed
];
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 SEO & Performance

- Meta tags configured in `public/index.html`
- Open Graph and Twitter Card support
- Semantic HTML structure
- Optimized images and assets
- Lazy loading for better performance

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📧 Contact Form Integration

The contact form is currently set up with a mock submission. To make it functional:

1. **Formspree** (Recommended)
   ```javascript
   // In Contact.js, update the form action
   <form action="https://formspree.io/f/your-form-id" method="POST">
   ```

2. **Netlify Forms**
   ```javascript
   // Add to form element
   <form name="contact" method="POST" data-netlify="true">
   ```

3. **EmailJS**
   - Install EmailJS SDK
   - Configure email service
   - Update form submission handler

## 📅 Calendly Integration

Replace the Calendly placeholder in `src/components/Contact.js`:

```javascript
// Replace the placeholder div with actual Calendly embed
<div className="calendly-embed" data-url="https://calendly.com/yourusername"></div>
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple, Pink gradients
- **Gray Scale**: Tailwind default grays
- **Accent**: Various colors for tech stack icons

### Typography
- **Headings**: Poppins font family
- **Body**: Inter font family
- **Sizes**: Responsive typography with Tailwind classes

### Animations
- **Entrance**: Fade in with slide up
- **Hover**: Scale and color transitions
- **Scroll**: Intersection Observer with Framer Motion

## 🔧 Development

### Project Structure
```
src/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Projects.js
│   ├── Contact.js
│   └── Footer.js
├── App.js
├── index.js
└── index.css
```

### Available Scripts
- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 💡 Support

If you find this portfolio template helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting improvements
- 📢 Sharing with others

## 📞 Contact

- **Email**: kunal@example.com
- **LinkedIn**: [linkedin.com/in/kunalbhandari](https://linkedin.com/in/kunalbhandari)
- **GitHub**: [github.com/kunalbhandari](https://github.com/kunalbhandari)
- **Portfolio**: [kunalbhandari.dev](https://kunalbhandari.dev)

---

**Built with ❤️ using React & TailwindCSS** 