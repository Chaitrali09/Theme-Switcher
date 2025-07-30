# Multi-Theme Switcher App

A React-based web application with a dynamic theme switcher that allows users to select from three distinct themes. Each theme offers a completely different visual experience with unique colors, fonts, layouts, and spacing.

## 🎨 Features

### Theme System
- **Theme 1 - Minimalist**: Clean, light design with sans-serif fonts
- **Theme 2 - Dark Serif**: Elegant dark mode with sophisticated serif typography
- **Theme 3 - Colorful Playful**: Vibrant colors with playful fonts and dynamic layouts

### Core Features
- ✅ **Theme Persistence**: Themes are saved to localStorage and persist across page reloads
- ✅ **Context API**: Uses React Context for efficient theme management
- ✅ **Responsive Design**: Fully responsive layout for all devices
- ✅ **Smooth Animations**: Subtle transitions when switching themes
- ✅ **TypeScript**: Fully typed for better development experience
- ✅ **External API**: Fetches product data from FakeStore API
- ✅ **React Router**: Multi-page navigation (Home, About, Contact)
- ✅ **Styled Components**: Modern CSS-in-JS styling
- ✅ **Google Fonts**: Dynamic font loading for each theme

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd theme-switcher
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Fixed header with theme switcher
│   └── Card.tsx            # Product card component
├── context/
│   └── ThemeContext.tsx    # Theme management context
├── pages/
│   ├── Home.tsx            # Home page with product grid
│   ├── About.tsx           # About page
│   └── Contact.tsx         # Contact page with form
├── themes/
│   ├── theme1.ts           # Minimalist theme
│   ├── theme2.ts           # Dark serif theme
│   ├── theme3.ts           # Colorful playful theme
│   └── index.ts            # Theme exports
├── types/
│   └── theme.ts            # TypeScript theme interfaces
├── App.tsx                 # Main app component
├── globalStyles.ts         # Global styles with Google Fonts
└── index.tsx              # App entry point
```

## 🎯 Theme Details

### Theme 1 - Minimalist
- **Colors**: Light background with blue accents
- **Fonts**: Inter (sans-serif)
- **Layout**: Clean, simple grid
- **Spacing**: Compact and organized

### Theme 2 - Dark Serif
- **Colors**: Dark background with red accents
- **Fonts**: Playfair Display & Merriweather (serif)
- **Layout**: Elegant, sophisticated
- **Spacing**: Generous and luxurious

### Theme 3 - Colorful Playful
- **Colors**: Vibrant pinks, teals, and oranges
- **Fonts**: Pacifico & Comic Neue (playful)
- **Layout**: Dynamic card-based grid
- **Spacing**: Large and expressive

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS styling
- **React Router** - Client-side routing
- **FakeStore API** - Product data
- **Google Fonts** - Typography

## 📱 Responsive Design

The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔒 Security Features

- TypeScript for type safety
- Sanitized content rendering
- Secure API calls
- No direct user input vulnerabilities

## 🎨 Customization

To add a new theme:

1. Create a new theme file in `src/themes/`
2. Define the theme object following the Theme interface
3. Export it from `src/themes/index.ts`
4. Add it to the dropdown in `src/components/Header.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ using React, TypeScript, and Styled Components**
