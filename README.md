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
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

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

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain if needed

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or support, please contact:
- Email: info@ieltsinstitute.com
- Website: www.ieltsinstitute.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Create React App for the development setup
- All contributors and testers

---

**Note**: This is a frontend-only application. For a complete IELTS institute platform, consider adding:
- User authentication
- Payment integration
- Backend API for user management
- Database for storing user progress
- Real-time chat for speaking practice
- File upload for writing tasks