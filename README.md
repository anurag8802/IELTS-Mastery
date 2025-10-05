# IELTS Institute - Landing Page

A modern, responsive landing page for an IELTS preparation institute built with React. This project showcases the institute's services, features, and testimonials to attract potential students.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Hero Section**: Compelling call-to-action with engaging visuals
- **Feature Showcase**: Highlights key services including:
  - Speaking Practice with expert trainers
  - Mock Tests with instant feedback
  - AI-powered Band Score estimation
  - Personalized feedback system
- **Testimonials**: Student success stories and reviews
- **Navigation**: Smooth scrolling navigation between sections
- **Modern Styling**: Clean, professional design with CSS

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0
- **Styling**: CSS3 with modern features
- **Build Tool**: Create React App
- **Testing**: React Testing Library
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js & Navbar.css      # Navigation component
│   ├── Hero.js & Hero.css          # Hero section with CTA
│   ├── Features.js & Features.css  # Services showcase
│   ├── Testimonials.js & Testimonials.css # Student reviews
│   └── Footer.js & Footer.css      # Footer with contact info
├── assets/
│   └── hero-image.jpg              # Hero section image
├── App.js                          # Main app component
├── App.css                         # Global styles
├── index.js                        # App entry point
└── index.css                       # Base styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ielts-institute
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Available Scripts

- `npm start` - Runs the app in development mode

## 🎨 Customization

### Adding New Features
1. Create new components in the `src/components/` directory
2. Import and use them in `App.js`
3. Add corresponding CSS files for styling

### Modifying Content
- Update the `features` array in `Features.js` to change service offerings
- Modify hero content in `Hero.js`
- Update testimonials in `Testimonials.js`

### Styling
- Each component has its own CSS file for modular styling
- Global styles can be modified in `App.css` and `index.css`
- The design uses CSS Grid and Flexbox for responsive layouts

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)
