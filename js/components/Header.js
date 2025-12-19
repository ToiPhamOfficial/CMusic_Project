export default function Header() {
    return `
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
                    <button class="btn btn-notification">
                        <span class="material-icons-round">
                            notifications
                        </span>
                        <div class="dot"></div>
                    </button>
                    <button class="btn btn-settings">
                        <span class="material-icons-round">
                            settings
                        </span>
                    </button>
                    <div class="user-profile">
                        <div class="avatar">
                            <img src="https://static-alter1.vidnoz.com/system/asset/202408/66beeabb5fa40.jpg"
                                alt="Avatar">
                        </div>
                        <span class="username">Hoàng Quân</span>
                    </div>
                </div>
    `;
}