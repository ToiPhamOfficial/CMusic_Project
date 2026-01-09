/**
 * Reusable Card Components
 * Các component card có thể tái sử dụng cho Album, Artist, Playlist, Song
 */

/**
 * Album Card Component
 * @param {Object} album - Album data object
 * @param {string} album.id - Album ID
 * @param {string} album.image - Album cover image URL
 * @param {string} album.title - Album title
 * @param {string} album.artist - Artist name
 * @param {string} album.year - Release year
 * @param {number} album.songs - Number of songs
 * @returns {string} HTML string for album card
 */
export function AlbumCard(album) {
    return `
        <div class="card album-card" data-album-id="${album.id}">
            <div class="card-cover">
                <img src="${album.image}" alt="${album.title}" loading="lazy">
                <div class="card-overlay">
                    <button class="card-play-btn" title="Phát">
                        <span class="material-icons-round">play_arrow</span>
                    </button>
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">${album.title}</h3>
                <p class="card-subtitle">${album.artist}</p>
                ${album.year && album.songs ? `<p class="card-meta">${album.year} • ${album.songs} bài hát</p>` : ''}
            </div>
        </div>
    `;
}

/**
 * Artist Card Component
 * @param {Object} artist - Artist data object
 * @param {string} artist.id - Artist ID
 * @param {string} artist.image - Artist image URL
 * @param {string} artist.name - Artist name
 * @param {string} artist.listeners - Number of listeners
 * @returns {string} HTML string for artist card
 */
export function ArtistCard(artist) {
    return `
        <div class="card artist-card" data-artist-id="${artist.id}">
            <div class="card-cover artist-cover">
                <img src="${artist.image}" alt="${artist.name}" loading="lazy">
                <div class="card-overlay">
                    <button class="card-play-btn" title="Phát">
                        <span class="material-icons-round">play_arrow</span>
                    </button>
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">${artist.name}</h3>
                <p class="card-subtitle">${artist.listeners} lượt nghe</p>
            </div>
        </div>
    `;
}

/**
 * Playlist Card Component
 * @param {Object} playlist - Playlist data object
 * @param {string} playlist.id - Playlist ID
 * @param {string} playlist.name - Playlist name
 * @param {number} playlist.songCount - Number of songs
 * @param {string} playlist.icon - Material icon name
 * @param {string} playlist.image - Playlist cover image URL (optional)
 * @param {string} playlist.gradient - CSS gradient for cover (optional)
 * @returns {string} HTML string for playlist card
 */
export function PlaylistCard(playlist) {
    const coverStyle = playlist.image 
        ? `background-image: url('${playlist.image}');`
        : playlist.gradient 
            ? `background: ${playlist.gradient};`
            : '';
    
    const coverContent = playlist.image 
        ? `<img src="${playlist.image}" alt="${playlist.name}" loading="lazy">`
        : `<span class="material-icons-round">${playlist.icon || 'queue_music'}</span>`;
    
    return `
        <div class="card playlist-card" data-playlist-id="${playlist.id}">
            <div class="card-cover playlist-cover" style="${coverStyle}">
                ${coverContent}
                <div class="card-overlay">
                    <button class="card-play-btn" title="Phát">
                        <span class="material-icons-round">play_arrow</span>
                    </button>
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">${playlist.name}</h3>
                <p class="card-subtitle">${playlist.songCount} bài hát</p>
            </div>
        </div>
    `;
}

/**
 * Song Item Component (List view)
 * @param {Object} song - Song data object
 * @param {string} song.id - Song ID
 * @param {string} song.image - Song thumbnail URL
 * @param {string} song.title - Song title
 * @param {string} song.artist - Artist name
 * @param {string} song.duration - Song duration
 * @param {number} index - Song index in list (optional)
 * @returns {string} HTML string for song item
 */
export function SongItem(song, index = null) {
    return `
        <div class="song-item" data-song-id="${song.id}">
            ${index !== null ? `<span class="song-index">${index}</span>` : ''}
            <div class="song-thumbnail">
                <img src="${song.image}" alt="${song.title}" loading="lazy">
                <button class="song-play-btn">
                    <span class="material-icons-round">play_arrow</span>
                </button>
            </div>
            <div class="song-info">
                <h4 class="song-title">${song.title}</h4>
                <p class="song-artist">${song.artist}</p>
            </div>
            <span class="song-duration">${song.duration}</span>
            <div class="song-actions">
                <button class="btn-icon btn-favorite" title="Yêu thích">
                    <span class="material-icons-round">favorite_border</span>
                </button>
                <button class="btn-icon btn-more" title="Thêm">
                    <span class="material-icons-round">more_horiz</span>
                </button>
            </div>
        </div>
    `;
}

/**
 * Song Card Component (Grid view)
 * @param {Object} song - Song data object
 * @param {string} song.id - Song ID
 * @param {string} song.image - Song cover image URL
 * @param {string} song.title - Song title
 * @param {string} song.artist - Artist name
 * @returns {string} HTML string for song card
 */
export function SongCard(song) {
    return `
        <div class="card song-card" data-song-id="${song.id}">
            <div class="card-cover">
                <img src="${song.image}" alt="${song.title}" loading="lazy">
                <div class="card-overlay">
                    <button class="card-play-btn" title="Phát">
                        <span class="material-icons-round">play_arrow</span>
                    </button>
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">${song.title}</h3>
                <p class="card-subtitle">${song.artist}</p>
            </div>
        </div>
    `;
}

/**
 * Genre Card Component
 * @param {Object} genre - Genre data object
 * @param {string} genre.id - Genre ID
 * @param {string} genre.name - Genre name
 * @param {string} genre.color - Background color
 * @returns {string} HTML string for genre card
 */
export function GenreCard(genre) {
    return `
        <div class="card genre-card" data-genre-id="${genre.id}" style="background-color: ${genre.color};">
            <h3 class="genre-name">${genre.name}</h3>
        </div>
    `;
}

/**
 * Chart Item Component
 * @param {Object} song - Song data object
 * @param {number} rank - Chart ranking
 * @returns {string} HTML string for chart item
 */
export function ChartItem(song, rank) {
    const rankClass = rank <= 3 ? 'top-rank' : '';
    return `
        <div class="chart-item ${rankClass}" data-song-id="${song.id}">
            <span class="chart-rank">${rank}</span>
            <div class="chart-thumbnail">
                <img src="${song.image}" alt="${song.title}" loading="lazy">
                <button class="chart-play-btn">
                    <span class="material-icons-round">play_arrow</span>
                </button>
            </div>
            <div class="chart-info">
                <h4 class="chart-title">${song.title}</h4>
                <p class="chart-artist">${song.artist}</p>
            </div>
            <span class="chart-duration">${song.duration}</span>
            <div class="chart-actions">
                <button class="btn-icon btn-favorite" title="Yêu thích">
                    <span class="material-icons-round">favorite_border</span>
                </button>
                <button class="btn-icon btn-more" title="Thêm">
                    <span class="material-icons-round">more_horiz</span>
                </button>
            </div>
        </div>
    `;
}
