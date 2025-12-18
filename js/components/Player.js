export default function Player() {
    return `
        <div class="bottom-player-left">
            <div class="bottom-player-album">
                <img src="https://www.figma.com/api/mcp/asset/d9fc626b-3041-4898-bc9f-bde47efaa68a" alt="Album Cover">
            </div>
            <div class="bottom-player-info">
                <h3>Sea Of Feelings</h3>
                <p>Lowx</p>
            </div>
        </div>
        
        <div class="bottom-player-center">
            <div class="bottom-player-controls">
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
            <div class="bottom-player-progress">
                <span class="time">00:58</span>
                <input type="range" class="progress-slider" min="0" max="173" value="58">
                <span class="time">02:53</span>
            </div>
        </div>
        
        <div class="bottom-player-right">
            <button class="btn-control" title="Favorite">
                <span class="material-icons-round">favorite_border</span>
            </button>
            <button class="btn-control" title="More">
                <span class="material-icons-round">more_horiz</span>
            </button>
            <button class="btn-control" title="Queue">
                <span class="material-icons-round">queue_music</span>
            </button>
        </div>
    `;
}