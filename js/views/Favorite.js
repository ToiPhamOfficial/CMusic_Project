import { songs } from '../data.js';

export default function Favorite() {
    return `
        <div class="playlist-container">
        
            <div class="playlist-hero">
                <div class="hero-bg-glow"></div> 
                <div class="hero-cover">
                    <span class="material-icons-round">favorite</span>
                </div>
                
                <div class="hero-info">
                    <span class="playlist-subtitle">Playlist: ${songs.length} bài</span>
                    <h1 class="playlist-title">Yêu thích của Tamo Osaki</h1>
                    <button class="btn-play-all">
                        <span class="material-icons-round">play_arrow</span> Phát tất cả
                    </button>
                </div>
            </div>

            <section class="track-list-container">
                
                <div class="track-header">
                    <div class="col-index">#</div>
                    <div class="col-title">Tiêu đề</div>
                    <div class="col-artist">Nghệ sĩ</div>
                    <div class="col-album">Album</div>
                    <div class="col-time"><span class="material-icons-round">schedule</span></div>
                </div>

                ${songs.map((song, index) => {
                    // Nếu data không có thì fallback text
                    const albumName = song.album || "Unknown Album"; 

                    return `
                    <div class="track-item" data-song-id="${song.id}">
                        <div class="col-index">
                            <span class="number">#${index + 1}</span>
                            <span class="material-icons-round">play_arrow</span>
                        </div>
                        <div class="col-title">
                            <img src="${song.image}" alt="${song.title}" class="track-img">
                            <span class="song-name">${song.title}</span>
                        </div>
                        <div class="col-artist">${song.artist}</div>
                        <div class="col-album">${albumName}</div>
                        <div class="col-time">
                            ${song.duration} <span class="material-icons-round icon-more">more_horiz</span>
                        </div>
                    </div>
                    `;
                }).join('')}

                <div class="see-more">
                    Xem thêm <span class="material-icons-round">arrow_drop_down</span>
                </div>

            </section>
        </div>
    `;
}