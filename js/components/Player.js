export default function Player() {
    return `
        <div class="player-header">
                            <h2>Player</h2>
                            <button class="btn-icon"><span class="material-icons-round" style="color: white;">
                                    playlist_play
                                </span></button>
                        </div>
                        <div class="player-body">
                            <div class="player-disc">
                                <img src="https://www.figma.com/api/mcp/asset/d9fc626b-3041-4898-bc9f-bde47efaa68a"
                                    alt="Sea Of Feelings">
                            </div>
                            <div class="player-info">
                                <h3>Sea Of Feelings</h3>
                                <p>Lowx</p>
                            </div>
                            <div class="player-progress">
                                <span class="time">1:54</span>
                                <div class="progress-bar">
                                    <img src="https://www.figma.com/api/mcp/asset/94929bee-acec-4ffb-9196-da407e62f849"
                                        alt="Progress">
                                </div>
                                <span class="time">02:53</span>
                            </div>
                        </div>
                        <div class="player-controls">
                            <button class="btn-control"><img
                                    src="https://www.figma.com/api/mcp/asset/2a3d08e9-cebc-466a-bf89-a7e82af07606"
                                    alt="Repeat"></button>
                            <button class="btn-control"><img
                                    src="https://www.figma.com/api/mcp/asset/c196d924-bb0b-4310-ab13-ffb75d33562e"
                                    alt="Prev"></button>
                            <button class="btn-control play"><img
                                    src="https://www.figma.com/api/mcp/asset/d88018fc-d39d-484d-930a-b00c9f6cfe70"
                                    alt="Play"></button>
                            <button class="btn-control"><img
                                    src="https://www.figma.com/api/mcp/asset/0e19e01f-332d-4f83-b5f7-d8485d400d14"
                                    alt="Next"></button>
                            <button class="btn-control"><img
                                    src="https://www.figma.com/api/mcp/asset/a56e9c2b-9ee8-4c1f-97d6-54601b8f81fd"
                                    alt="Shuffle"></button>
                        </div>
    `;
}