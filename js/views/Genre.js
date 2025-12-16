import { genres, songs } from '../data.js';

export default function Genre() {
    return `
        <section class="section-box all-genres">
            <div class="section-header">
                <h2>Tất cả thể loại</h2>
            </div>
            <div class="genre-grid-large">
                ${genres.map(genre => `
                    <div class="genre-card-large" style="background: linear-gradient(135deg, ${genre.color}, ${genre.color}dd);" data-genre-id="${genre.id}">
                        <h3>${genre.name}</h3>
                        <span class="material-icons-round">music_note</span>
                    </div>
                `).join('')}
            </div>
        </section>

        <section class="section-box genre-songs">
            <div class="section-header">
                <h2>Bài hát theo thể loại</h2>
            </div>
            <div class="genre-tabs">
                ${[...new Set(songs.map(s => s.genre))].map(genre => `
                    <button class="genre-tab" data-genre="${genre}">${genre}</button>
                `).join('')}
            </div>
            <div class="song-list">
                ${songs.map(song => `
                    <div class="song-item" data-song-id="${song.id}" data-genre="${song.genre}">
                        <img src="${song.image}" alt="${song.title}">
                        <div class="song-details">
                            <p class="song-title">${song.title}</p>
                            <p class="song-artist">${song.artist}</p>
                        </div>
                        <span class="song-duration">${song.duration}</span>
                        <button class="btn-icon">
                            <span class="material-icons-round">play_arrow</span>
                        </button>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}
