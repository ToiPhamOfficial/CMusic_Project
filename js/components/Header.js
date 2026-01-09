export default function Header() {
    // Đọc dữ liệu mỗi khi render để cập nhật trạng thái mới nhất
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    let currentUser = null;
    if (isLoggedIn) {
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    
    return `
        <button class="btn btn-menu">
            <span class="material-icons-round">
                menu
            </span>
        </button>
                <div class="search-bar-wrapper">
                    <button class="btn" id="btn-close-search-bar">
                    <span class="material-icons-round">
                        arrow_back
                    </span>
                </button>
                    <div class="search-bar">
                        <span class="material-icons-round">
                            search
                        </span>
                        <input type="text" placeholder="Tìm kiếm bài hát">
                    </div>
                    <ul class="search-bar-suggestions"></ul>
                </div>

                <div class="user-actions">
                    <button class="btn btn-notification">
                        <span class="material-icons-round">
                            notifications
                        </span>
                        <div class="dot"></div>
                    </button>
                    
                    <!-- Notifications Dropdown -->
                    <div class="notifications-dropdown">
                        <div class="notifications-header">
                            <h3>Thông báo</h3>
                            <button class="btn-mark-read">Đánh dấu đã đọc</button>
                        </div>
                        <div class="notifications-list">
                            <!-- Sample notifications -->
                            <div class="notification-item unread">
                                <div class="notification-icon">
                                    <span class="material-icons-round">album</span>
                                </div>
                                <div class="notification-content">
                                    <p class="notification-text">Album mới <strong>"Khắc Việt 2025"</strong> đã được phát hành</p>
                                    <span class="notification-time">2 giờ trước</span>
                                </div>
                            </div>
                            <div class="notification-item">
                                <div class="notification-icon">
                                    <span class="material-icons-round">person_add</span>
                                </div>
                                <div class="notification-content">
                                    <p class="notification-text"><strong>Sơn Tùng M-TP</strong> vừa phát hành bài hát mới</p>
                                    <span class="notification-time">1 ngày trước</span>
                                </div>
                            </div>
                            <div class="notification-item">
                                <div class="notification-icon">
                                    <span class="material-icons-round">favorite</span>
                                </div>
                                <div class="notification-content">
                                    <p class="notification-text">Playlist <strong>"Nhạc Việt Hot"</strong> đã được cập nhật</p>
                                    <span class="notification-time">3 ngày trước</span>
                                </div>
                            </div>
                        </div>
                        <div class="notifications-footer">
                            <a href="#" class="view-all">Xem tất cả thông báo</a>
                        </div>
                    </div>
                    
                    <button class="btn btn-settings">
                        <span class="material-icons-round">
                            settings
                        </span>
                    </button>
                    
                    <!-- Settings Panel -->
                    <div class="settings-panel">
                        <div class="settings-header">
                            <h3>Cài đặt</h3>
                            <button class="btn-close-settings">
                                <span class="material-icons-round">close</span>
                            </button>
                        </div>
                        <div class="settings-content">
                            <div class="settings-section">
                                <h4>Giao diện</h4>
                                <div class="setting-item">
                                    <div class="setting-info">
                                        <span class="setting-label">Chế độ tối</span>
                                        <span class="setting-desc">Giao diện tối để bảo vệ mắt</span>
                                    </div>
                                    <label class="toggle-switch">
                                        <input type="checkbox" checked>
                                        <span class="toggle-slider"></span>
                                    </label>
                                </div>
                            </div>
                            
                            <div class="settings-section">
                                <h4>Phát nhạc</h4>
                                <div class="setting-item">
                                    <div class="setting-info">
                                        <span class="setting-label">Tự động phát</span>
                                        <span class="setting-desc">Tự động phát bài tiếp theo</span>
                                    </div>
                                    <label class="toggle-switch">
                                        <input type="checkbox" checked>
                                        <span class="toggle-slider"></span>
                                    </label>
                                </div>
                                <div class="setting-item">
                                    <div class="setting-info">
                                        <span class="setting-label">Chất lượng nhạc</span>
                                        <span class="setting-desc">Chọn chất lượng phát nhạc</span>
                                    </div>
                                    <select class="setting-select">
                                        <option value="low">Thấp (128kbps)</option>
                                        <option value="medium">Trung bình (256kbps)</option>
                                        <option value="high" selected>Cao (320kbps)</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="settings-section">
                                <h4>Thông báo</h4>
                                <div class="setting-item">
                                    <div class="setting-info">
                                        <span class="setting-label">Thông báo bài hát mới</span>
                                        <span class="setting-desc">Nhận thông báo khi có bài hát mới</span>
                                    </div>
                                    <label class="toggle-switch">
                                        <input type="checkbox" checked>
                                        <span class="toggle-slider"></span>
                                    </label>
                                </div>
                                <div class="setting-item">
                                    <div class="setting-info">
                                        <span class="setting-label">Thông báo album mới</span>
                                        <span class="setting-desc">Nhận thông báo khi có album mới</span>
                                    </div>
                                    <label class="toggle-switch">
                                        <input type="checkbox">
                                        <span class="toggle-slider"></span>
                                    </label>
                                </div>
                            </div>
                            
                            <div class="settings-section">
                                <h4>Tài khoản</h4>
                                <div class="setting-item clickable">
                                    <span class="setting-label">Thông tin cá nhân</span>
                                    <span class="material-icons-round">chevron_right</span>
                                </div>
                                <div class="setting-item clickable">
                                    <span class="setting-label">Đổi mật khẩu</span>
                                    <span class="material-icons-round">chevron_right</span>
                                </div>
                                <div class="setting-item clickable logout-btn">
                                    <span class="setting-label" style="color: #ff4757;">Đăng xuất</span>
                                    <span class="material-icons-round" style="color: #ff4757;">logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="settings-overlay"></div>
                    
                    <div class="mini-user-profile${!isLoggedIn ? ' is-guest' : '" data-route="/profile"'}">
                        <div class="avatar">
                            <img src="${currentUser ? currentUser.avatar : '/assets/img/guest-avatar.png'}"
                                alt="User Avatar">
                        </div>
                        ${currentUser ? '<span class="name">' + currentUser.name + '</span>' : ''}
                    </div>
                </div>
    `;
}