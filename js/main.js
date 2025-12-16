import Sidebar from './components/Sidebar.js';
import Player from './components/Player.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { initRouter } from './router.js';
import { songs, searchSongs } from './data.js';

// State quản lý player
let currentSong = null;
let isPlaying = false;

// Khởi tạo app
document.addEventListener('DOMContentLoaded', () => {
    // Render các components tĩnh
    renderComponents();
    
    // Khởi tạo router
    initRouter();
    
    // Thêm event listeners
    initEventListeners();
});

// Render các components tĩnh
function renderComponents() {
    // Render Sidebar
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = Sidebar();
    }
    
    // Render Header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = Header();
    }
    
    // Render Player
    const playerContainer = document.getElementById('player-container');
    if (playerContainer) {
        playerContainer.innerHTML = Player();
    }
}

// Khởi tạo các event listeners
function initEventListeners() {
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Navigation items
    document.addEventListener('click', (e) => {
        // Handle navigation
        if (e.target.closest('.nav-link')) {
            handleNavigation(e);
        }
        
        // Handle play button
        if (e.target.closest('.btn-play-song')) {
            const songId = parseInt(e.target.closest('.btn-play-song').dataset.songId);
            playSong(songId);
        }
        
        // Handle add to playlist
        if (e.target.closest('.btn-add-song')) {
            const songId = parseInt(e.target.closest('.btn-add-song').dataset.songId);
            addToPlaylist(songId);
        }
        
        // Handle player controls
        if (e.target.closest('.btn-control.play')) {
            togglePlay();
        }
    });

    // Tab navigation
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

// Handle search
function handleSearch(e) {
    const query = e.target.value.trim();
    
    if (query.length > 0) {
        const results = searchSongs(query);
        displaySearchResults(results);
    } else {
        // Clear search results or show default content
        console.log('Clear search');
    }
}

// Display search results
function displaySearchResults(results) {
    console.log('Search results:', results);
    // TODO: Implement UI for search results
}

// Handle navigation
function handleNavigation(e) {
    e.preventDefault();
    
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked nav item
    const navItem = e.target.closest('.nav-item');
    if (navItem) {
        navItem.classList.add('active');
    }
}

// Play song
function playSong(songId) {
    const song = songs.find(s => s.id === songId);
    
    if (song) {
        currentSong = song;
        isPlaying = true;
        updatePlayer(song);
        console.log('Playing:', song.title);
        
        // TODO: Implement actual audio playback
    }
}

// Update player UI
function updatePlayer(song) {
    const playerInfo = document.querySelector('.player-info');
    const playerDisc = document.querySelector('.player-disc img');
    
    if (playerInfo) {
        playerInfo.innerHTML = `
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
        `;
    }
    
    if (playerDisc) {
        playerDisc.src = song.image;
        playerDisc.alt = song.title;
    }
}

// Toggle play/pause
function togglePlay() {
    isPlaying = !isPlaying;
    
    const playBtn = document.querySelector('.btn-control.play img');
    if (playBtn) {
        if (isPlaying) {
            // Change to pause icon
            console.log('Playing');
        } else {
            // Change to play icon
            console.log('Paused');
        }
    }
}

// Add to playlist
function addToPlaylist(songId) {
    const song = songs.find(s => s.id === songId);
    
    if (song) {
        console.log('Added to playlist:', song.title);
        // TODO: Implement actual playlist functionality
        
        // Show notification
        showNotification(`Đã thêm "${song.title}" vào danh sách phát`);
    }
}

// Show notification
function showNotification(message) {
    // Simple notification (có thể cải thiện với toast UI)
    console.log('Notification:', message);
    
    // TODO: Implement better notification UI
}

// Export functions for use in other modules
export { playSong, addToPlaylist, currentSong, isPlaying };
