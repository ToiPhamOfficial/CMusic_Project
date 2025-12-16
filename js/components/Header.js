export default function Header() {
    return `
        <div class="header-bg">
                        <img src="assets/img/hit-songs-bg/hit1.png" alt="Header BG">
                    </div>

                    <div class="header-nav">
                        <div class="tabs">
                            <div class="tab-item active">MUSIC</div>
                            <div class="tab-item">PODCAST</div>
                            <div class="tab-item">LIVE</div>
                        </div>

                        <div class="search-bar">
                            <span class="material-icons-round">
                                search
                            </span>
                            <input type="text" placeholder="Tìm kiếm bài hát">
                        </div>

                        <div class="user-actions">
                            <div class="notification">
                                <span class="material-icons-round">
                                    notifications
                                </span>
                                <img class="dot"
                                    src="https://www.figma.com/api/mcp/asset/9fa4f572-edb5-4272-859a-cff504174b9d"
                                    alt="Dot">
                            </div>
                            <div class="settings">
                                <span class="material-icons-round">
                                    settings
                                </span>
                            </div>
                            <div class="user-profile">
                                <div class="avatar">
                                    <img src="https://www.figma.com/api/mcp/asset/7babab39-43cd-4f00-98c1-ac88adac20c1"
                                        alt="Avatar">
                                </div>
                                <span class="username">Hoàng Quân</span>
                            </div>
                        </div>
                    </div>

                    <div class="banner">
                        <h3 class="banner-subtitle">Bản Hit Mới Nhất</h3>
                        <div class="banner-content">
                            <h1 class="banner-title">In My Feelings</h1>
                            <div class="banner-info">
                                <span class="artist">Camila Cabello</span>
                                <span class="views">63Tr lượt nghe</span>
                            </div>
                        </div>
                        <div class="banner-actions">
                            <button class="btn-play">Phát ngay</button>
                            <button class="btn-fav">
                                <img src="https://www.figma.com/api/mcp/asset/d65cfc55-665e-4585-bee3-1424b1812761"
                                    alt="Fav">
                            </button>
                        </div>
                    </div>
    `;
}