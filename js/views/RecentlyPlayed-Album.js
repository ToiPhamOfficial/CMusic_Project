import { albums, playlists, songs } from '../data.js';

export default function RecentlyPlayed_Album() {
    return `
        <div class="section-header">
                <h1>Recently played</h1>
            </div>

        <div class="genre-tabs">
                
                    <button class="genre-tab" data-route="/recent">Bài hát</button>
                
                    <button class="genre-tab" data-route="/recent/playlist">Playlist</button>
                
                    <button class="genre-tab" data-route="/recent/album">Album</button>
                
                    <button class="genre-tab" data-route="/recent/artist">Nghệ sĩ</button>
                
            </div>

        <section class="section-box albums">
            
            <div class="album-grid">
                ${albums.map(album => `
                    <div class="album-card" data-album-id="${album.id}">
                        <div class="album-cover">
                            <img src="${album.image}" alt="${album.title}">
                            <button class="album-play-btn">
                                <span class="material-icons-round">play_arrow</span>
                            </button>
                        </div>
                        <div class="album-info">
                            <h3 class="album-title">${album.title}</h3>
                            <p class="album-artist">${album.artist}</p>
                            <p class="album-meta">${album.year} • ${album.songs} bài hát</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
        
        
    `;
}