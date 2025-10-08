# A-Frame Demo

A modern A-Frame VR demo project built with Vite and A-Frame 1.7.0.

## Features

- 🚀 **Vite** for fast development and building
- 🥽 **A-Frame 1.7.0** for WebXR and VR experiences
- 📱 **Responsive design** that works on desktop and mobile
- 🎨 **Modern CSS** with animations and styling
- 🎮 **Interactive elements** with click handlers
- 🌐 **WebXR support** for VR headsets

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd aframe-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
aframe-demo/
├── index.html          # Main HTML entry point
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
├── src/
│   ├── main.js         # Main JavaScript file
│   └── style.css       # Additional CSS styles
└── README.md           # This file
```

## A-Frame Scene

The demo includes:

- **3D Objects**: Box, sphere, and cylinder with different materials
- **Lighting**: Ambient and directional lighting with shadows
- **Camera Controls**: Mouse look and WASD movement
- **VR Support**: Enter VR mode button for compatible devices
- **Interactive Elements**: Click handlers for color changes and animations

## VR/WebXR Support

This project supports:
- **Desktop VR**: Oculus Rift, HTC Vive, etc.
- **Mobile VR**: Google Cardboard, Samsung Gear VR
- **WebXR**: Modern browsers with WebXR support

## Customization

### Adding New 3D Objects

Add new entities to the `<a-scene>` in `index.html`:

```html
<a-box position="0 1 -3" color="#FF6B6B"></a-box>
```

### Custom Components

Register custom A-Frame components in `src/main.js`:

```javascript
AFRAME.registerComponent('my-component', {
  init: function () {
    // Component logic here
  }
});
```

### Styling

Modify `src/style.css` for custom styling or add styles directly to `index.html`.

## Browser Support

- Chrome 80+
- Firefox 80+
- Safari 14+
- Edge 80+

## License

ISC

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Resources

- [A-Frame Documentation](https://aframe.io/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [WebXR Specification](https://immersive-web.github.io/webxr/)
