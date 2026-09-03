// Wallpaper data - Replace these with actual wallpaper URLs
const wallpapers = [
    {
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop',
        resolution: '1920x1080',
        category: 'Gaming',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1538481143235-c8f86ee4ee27?w=1920&h=1080&fit=crop',
        resolution: '1920x1080',
        category: 'Abstract',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1557672172-298e090d0f80?w=1920&h=1080&fit=crop',
        resolution: '1920x1080',
        category: 'Technology',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1550745165-9bc82483261f?w=1920&h=1080&fit=crop',
        resolution: '1920x1080',
        category: 'Nature',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1611339555312-e607c04352fa?w=1920&h=1080&fit=crop',
        resolution: '1920x1080',
        category: 'Dark',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop',
        resolution: '1920x1080',
        category: 'Minimal',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1920&h=1080&fit=crop',
        resolution: '1920x1080',
        category: 'Space',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&h=1080&fit=crop',
        resolution: '1920x1080',
        category: 'Mountains',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1567359781514-3b963ff3f45d?w=1920&h=1080&fit=crop',
        resolution: '1920x1080',
        category: 'Cyberpunk',
        source: 'Unsplash'
    },
    {
        url: 'https://images.unsplash.com/photo-1552672614-30cc3f78b75a?w=1920&h=1080&fit=crop',
        resolution: '1920x1080',
        category: 'Urban',
        source: 'Unsplash'
    }
];

let currentWallpaper = null;
let favorites = [];

// DOM Elements
const wallpaperImg = document.getElementById('wallpaper');
const randomBtn = document.getElementById('randomBtn');
const downloadBtn = document.getElementById('downloadBtn');
const favBtn = document.getElementById('favBtn');
const loadingEl = document.getElementById('loading');
const resolutionEl = document.getElementById('resolution');
const categoryEl = document.getElementById('category');
const sourceEl = document.getElementById('source');
const favCountEl = document.getElementById('favCount');
const favoritesGridEl = document.getElementById('favoritesGrid');

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    loadFavorites();
    loadRandomWallpaper();
});

// Load random wallpaper
function loadRandomWallpaper() {
    showLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * wallpapers.length);
        currentWallpaper = wallpapers[randomIndex];
        
        wallpaperImg.src = currentWallpaper.url;
        resolutionEl.textContent = currentWallpaper.resolution;
        categoryEl.textContent = currentWallpaper.category;
        sourceEl.textContent = currentWallpaper.source;
        
        showLoading(false);
        updateFavButton();
    }, 500);
}

// Show/Hide loading indicator
function showLoading(show) {
    if (show) {
        loadingEl.classList.add('active');
    } else {
        loadingEl.classList.remove('active');
    }
}

// Download wallpaper
function downloadWallpaper() {
    if (!currentWallpaper) return;
    
    const link = document.createElement('a');
    link.href = currentWallpaper.url;
    link.download = `boys-wallpaper-${Date.now()}.jpg`;
    link.click();
}

// Add to favorites
function addToFavorites() {
    if (!currentWallpaper) return;
    
    const exists = favorites.some(fav => fav.url === currentWallpaper.url);
    
    if (exists) {
        favorites = favorites.filter(fav => fav.url !== currentWallpaper.url);
    } else {
        favorites.push(currentWallpaper);
    }
    
    saveFavorites();
    updateFavButton();
    renderFavorites();
}

// Remove from favorites
function removeFromFavorites(url) {
    favorites = favorites.filter(fav => fav.url !== url);
    saveFavorites();
    updateFavButton();
    renderFavorites();
}

// Update favorite button state
function updateFavButton() {
    if (!currentWallpaper) return;
    
    const isFav = favorites.some(fav => fav.url === currentWallpaper.url);
    favBtn.style.background = isFav ? '#ff6b6b' : 'white';
    favBtn.style.color = isFav ? 'white' : '#667eea';
}

// Save favorites to localStorage
function saveFavorites() {
    localStorage.setItem('wallpaperFavorites', JSON.stringify(favorites));
}

// Load favorites from localStorage
function loadFavorites() {
    const saved = localStorage.getItem('wallpaperFavorites');
    favorites = saved ? JSON.parse(saved) : [];
    renderFavorites();
}

// Render favorites grid
function renderFavorites() {
    favCountEl.textContent = favorites.length;
    favoritesGridEl.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesGridEl.innerHTML = '<p style="grid-column: 1/-1; color: #999; text-align: center;">No favorites yet. Add some wallpapers!</p>';
        return;
    }
    
    favorites.forEach(fav => {
        const div = document.createElement('div');
        div.className = 'favorite-item';
        div.innerHTML = `
            <img src="${fav.url}" alt="Favorite wallpaper">
            <button class="remove-btn" onclick="removeFromFavorites('${fav.url}')" title="Remove">×</button>
        `;
        div.addEventListener('click', () => {
            currentWallpaper = fav;
            wallpaperImg.src = currentWallpaper.url;
            resolutionEl.textContent = currentWallpaper.resolution;
            categoryEl.textContent = currentWallpaper.category;
            sourceEl.textContent = currentWallpaper.source;
            updateFavButton();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        favoritesGridEl.appendChild(div);
    });
}

// Event listeners
randomBtn.addEventListener('click', loadRandomWallpaper);
downloadBtn.addEventListener('click', downloadWallpaper);
favBtn.addEventListener('click', addToFavorites);
