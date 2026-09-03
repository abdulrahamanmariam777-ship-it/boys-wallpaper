# Boys Wallpaper 🎨

A beautiful and interactive wallpaper website featuring random high-quality wallpapers. Browse, download, and save your favorite wallpapers with ease.

## Features ✨

- **Random Wallpapers**: Get a new random wallpaper with a single click
- **Download**: Download wallpapers in high resolution
- **Favorites**: Save your favorite wallpapers locally
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Wallpaper Info**: View details about each wallpaper (resolution, category, source)
- **Smooth Animations**: Beautiful UI with smooth transitions and animations

## Technologies Used 🛠️

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (Vanilla)**: No dependencies, pure JS functionality
- **Local Storage**: Persist favorites across sessions
- **Unsplash API**: High-quality wallpaper sources

## How to Use 🚀

1. **View Wallpaper**: Open the website to see a random wallpaper
2. **Get Another**: Click the "🔄 Get Random Wallpaper" button
3. **Download**: Click "⬇️ Download" to save the current wallpaper
4. **Add to Favorites**: Click "❤️ Add to Favorites" to save for later
5. **View Favorites**: Scroll down to see your saved wallpapers
6. **Click Favorite**: Click on any favorite to set it as the current wallpaper
7. **Remove Favorite**: Hover over a favorite and click the × button to remove

## File Structure 📁

```
boys-wallpaper/
├── index.html      # Main HTML file
├── styles.css      # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization 🎯

To add your own wallpapers:

1. Open `script.js`
2. Locate the `wallpapers` array
3. Add new objects with the following structure:

```javascript
{
    url: 'https://your-image-url.jpg',
    resolution: '1920x1080',
    category: 'Your Category',
    source: 'Your Source'
}
```

## Features Breakdown 📋

### Random Loading
- Smooth loading indicator
- 500ms delay for better UX
- Prevents rapid clicking

### Favorites System
- Stores favorites in browser's LocalStorage
- Persists across sessions
- Visual indication of favorited wallpapers
- Quick removal option

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Touch-friendly buttons
- Flexible grid layout

## Browser Support 🌐

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## Performance Optimizations ⚡

- No external dependencies
- Optimized CSS animations
- Efficient event handling
- LocalStorage for offline access
- Lazy loading support

## Future Enhancements 🔮

- [ ] Search functionality
- [ ] Category filters
- [ ] User accounts
- [ ] Share wallpapers
- [ ] Night mode
- [ ] Resolution selection
- [ ] Backend integration
- [ ] Social media sharing

## License 📄

Free to use and modify for personal and commercial projects.

## Contributing 🤝

Feel free to fork this project and submit pull requests for improvements!

## Support 💬

If you have any questions or suggestions, please open an issue on GitHub.

---

**Enjoy beautiful wallpapers! 🎨✨**
