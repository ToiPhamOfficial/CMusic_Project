import { recentlyData, getAlbumById, getPlaylistById, getArtistById, getSongById } from '../data.js';
import { AlbumCard, PlaylistCard, ArtistCard, SongItem } from '../components/Card.js';

function Albums() {
    const recentAlbums = recentlyData.albums.map(id => getAlbumById(id)).filter(album => album);
    // if (recentAlbums.length === 0) {
    //     return '';
    // }
    
    return `
        <section class="section-box albums">
            <div class="section-header">
                <h2>Album</h2>
            </div>
            <div class="album-grid">
                ${recentAlbums.map(album => AlbumCard(album)).join('')}
            </div>
        </section>
    `;
}

function Playlists() {
    const recentPlaylists = recentlyData.playlists.map(id => getPlaylistById(id)).filter(playlist => playlist);
    
        // if (recentPlaylists.length === 0) {
        //     return '';
        // }
    
    return `
        <section class="section-box playlists">
            <div class="section-header">
                <h2>Playlist</h2>
            </div>
            <div class="playlist-grid">
                ${recentPlaylists.map(playlist => PlaylistCard(playlist)).join('')}
            </div>
        </section>
    `;
}

function Artists() {
    const recentArtists = recentlyData.artists.map(id => getArtistById(id)).filter(artist => artist);
    
    // if (recentArtists.length === 0) {
    //     return '';
    // }
    
    return `
        <section class="section-box artists">
            <div class="section-header">
                <h2>Nghệ sĩ</h2>
            </div>
            <div class="artist-grid">
                ${recentArtists.map(artist => ArtistCard(artist)).join('')}
            </div>
        </section>
    `;
}

function Songs() {
    const recentSongs = recentlyData.songsIds.map(id => getSongById(id)).filter(song => song);
    
    // if (recentSongs.length === 0) {
    //     return '<p style="color: var(--text-secondary); padding: var(--space-lg); text-align: center;">Chưa có bài hát nào được nghe gần đây</p>';
    // }
    
    return `
        <section class="section-box page-recently__songs">
            <div class="page-recently__songs-header">
                <div class="page-recently__songs-header-col page-recently__songs-header-col--index">#</div>
                <div class="page-recently__songs-header-col page-recently__songs-header-col--title">Bài hát</div>
                <div class="page-recently__songs-header-col page-recently__songs-header-col--artist">Nghệ sĩ</div>
                <div class="page-recently__songs-header-col page-recently__songs-header-col--time">Thời gian</div>
            </div>
            <div class="divider"></div>
            <div class="song-list">
                ${recentSongs.map((song, index) => SongItem(song, index + 1)).join('')}
            </div>
        </section>
    `;
}

export default function Recently() {
    return `
        <section class="page__heading page-recently__heading">
            <h1 class="page__title page-recently__title">Nghe gần đây</h1>
            <p class="page__subtitle page-recently__subtitle">Tiếp tục thưởng thức những giai điệu bạn yêu thích.</p>
        </section>
        <section class="tabs">
            <button class="tabs__tab-item active" data-tab-id="0">Tất cả</button>
            <button class="tabs__tab-item" data-tab-id="1">Bài hát</button>
            <button class="tabs__tab-item" data-tab-id="2">Album</button>
            <button class="tabs__tab-item" data-tab-id="3">Playlist</button>
            <button class="tabs__tab-item" data-tab-id="4">Nghệ sĩ</button>
        </section>

        <section class="page-recently__wrapper" id="recently-content">
            ${Albums()}
            ${Playlists()}
            ${Artists()}
            ${Songs()}
        </section>
    `
}

export function initRecentlyPageEvents() {
    // Sử dụng event delegation để gắn sự kiện vào document
    // Điều này đảm bảo sự kiện vẫn hoạt động khi page được render lại
    $(document).on('click', '.tabs__tab-item', function() {
        // Chỉ xử lý nếu click vào tab trong recently page
        if (!$('#recently-content').length) return;
        
        $(this).addClass('active').siblings().removeClass('active');

        // --- Xử lý Logic ---
        const tabId = $(this).data('tab-id');
        let contentHTML = '';

        switch (tabId) {
            case 0:
                contentHTML = `                    
                    ${Albums()}
                    ${Playlists()}
                    ${Artists()}
                    ${Songs()}
                `;
                break;
            case 1:
                contentHTML = Songs();
                break;
            case 2:
                contentHTML = Albums();
                break;
            case 3:
                contentHTML = Playlists();
                break;
            case 4:
                contentHTML = Artists();
                break;
            default:
                contentHTML = `<p style="color:white; padding: 20px;">Đang cập nhật...</p>`;
        }

        // Render nội dung
        $('#recently-content').html(contentHTML);
    });
}