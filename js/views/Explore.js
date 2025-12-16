import { songs, artists, genres } from '../data.js';

export default function Explore() {
    return `
        <!-- Top Artists -->
        <section class="section-box top-artists">
            <div class="section-header">
                <h2>Top nghệ sĩ</h2>
                <a href="#artists" class="view-all">Tất cả</a>
            </div>
            <div class="artist-list">
                ${artists.map(artist => `
                    <div class="artist-card" data-artist-id="${artist.id}">
                        <img src="${artist.image}" alt="${artist.name}">
                        <div class="artist-info">
                            <p class="name">${artist.name}</p>
                            <p class="listeners">${artist.listeners} lượt nghe</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- Genres -->
        <section class="section-box genres">
            <div class="section-header">
                <h2>Thể loại</h2>
                <a href="#genres" class="view-all">Tất cả</a>
            </div>
            <div class="genre-grid">
                ${genres.map(genre => `
                    <div class="genre-item" style="background-color: ${genre.color};" data-genre-id="${genre.id}">
                        ${genre.name}
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- Charts -->
        <section class="section-box charts">
            <div class="section-header">
                <h2>Bảng xếp hạng</h2>
                <a href="#charts" class="view-all">Tất cả</a>
            </div>
            <div class="chart-list">
                ${songs.slice(0, 5).map((song, index) => `
                    <div class="chart-item" data-song-id="${song.id}">
                        <div class="chart-left">
                            <span class="rank">${String(index + 1).padStart(2, '0')}</span>
                            <img src="${song.image}" alt="${song.title}">
                            <div class="song-info">
                                <p class="song-title">${song.title}</p>
                                <p class="song-artist">${song.artist}</p>
                            </div>
                        </div>
                        <div class="chart-right">
                            <span class="duration">${song.duration}</span>
                            <button class="btn-icon btn-play-song" data-song-id="${song.id}">
                                <img src="https://www.figma.com/api/mcp/asset/44748275-c192-431d-bea9-a45db56c6053" alt="Play">
                            </button>
                            <button class="btn-icon btn-add-song" data-song-id="${song.id}">
                                <img src="https://www.figma.com/api/mcp/asset/1284d5b3-25ae-405e-95f1-6239562e50ad" alt="Add">
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}
