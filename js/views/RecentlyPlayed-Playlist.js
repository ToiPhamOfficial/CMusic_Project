import { playlists, songs } from '../data.js';

export default function RecentlyPlayed_Playlist() {
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

        <section class="section-box my-playlists">
            
                </button>
            </div>
            <div class="playlist-grid">
                ${playlists.map(playlist => `
                    <div class="playlist-card" data-playlist-id="${playlist.id}">
                        <div class="playlist-cover">
                            <span class="material-icons-round">${playlist.icon}</span>
                        </div>
                        <div class="playlist-info">
                            <h3 class="playlist-name">${playlist.name}</h3>
                            <p class="playlist-count">${playlist.songCount} bài hát</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
        
        
    `;
}