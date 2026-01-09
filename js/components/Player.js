export default function Player() {
    return `
        <button class="btn-collapse-player" title="Collapse">
            <span class="material-icons-round">expand_more</span>
        </button>
        
        <div class="player-left">
            <div class="player-album">
                <img src="/assets/img/default-player-thumb.png" alt="Album Cover">
            </div>
            <div class="player-info">
                <h3>Unknown</h3>
                <p>Unknown</p>
            </div>
        </div>
        
        <div class="player-center">
            <div class="player-controls">
                <button class="btn-control" title="Repeat">
                    <span class="material-icons-round">repeat</span>
                </button>
                <button class="btn-control" title="Previous">
                    <span class="material-icons-round">skip_previous</span>
                </button>
                <button class="btn-control btn-play" title="Play">
                    <span class="material-icons-round">play_circle</span>
                </button>
                <button class="btn-control" title="Next">
                    <span class="material-icons-round">skip_next</span>
                </button>
                <button class="btn-control" title="Shuffle">
                    <span class="material-icons-round">shuffle</span>
                </button>
            </div>
            <div class="player-progress">
                <span class="time">00:00</span>
                <input type="range" class="progress-slider" min="0" max="100" value="0">
                <span class="time">00:00</span>
            </div>
        </div>
        
        <div class="player-right">
            <button class="btn-control" title="Favorite">
                <span class="material-icons-round">favorite_border</span>
            </button>
            <button class="btn-control btn-queue" title="Queue">
                <span class="material-icons-round">queue_music</span>
            </button>
            <div class="player-more-container">
                <button class="btn-control btn-more" title="More">
                    <span class="material-icons-round">more_horiz</span>
                </button>
                
                <!-- More Dropdown Menu -->
                <div class="player-more-dropdown">
                    <div class="dropdown-item" data-action="download">
                        <span class="material-icons-round">download</span>
                        <span>Tải về</span>
                    </div>
                    <div class="dropdown-item" data-action="add-to-playlist">
                        <span class="material-icons-round">playlist_add</span>
                        <span>Thêm vào playlist</span>
                    </div>
                    <div class="dropdown-item" data-action="share">
                        <span class="material-icons-round">share</span>
                        <span>Chia sẻ</span>
                    </div>
                    <div class="dropdown-divider"></div>
                    <div class="dropdown-item" data-action="report">
                        <span class="material-icons-round">flag</span>
                        <span>Báo cáo</span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Queue Panel -->
        <div class="queue-panel">
            <div class="queue-header">
                <h3>Danh sách phát</h3>
                <button class="btn-close-queue" title="Đóng">
                    <span class="material-icons-round">close</span>
                </button>
            </div>
            <div class="queue-section">
                <div class="queue-section-header">
                    <h4>Tiếp theo</h4>
                    <span class="queue-subtitle">Từ For You</span>
                </div>
                <div class="queue-list">
                    <!-- Queue items will be rendered here -->
                </div>
            </div>
        </div>
        
        <!-- Queue Overlay -->
        <div class="queue-overlay"></div>
    `;
}