// Router cho Single Page Application
import Explore from './views/Explore.js';
import Album from './views/Album.js';
import Artist from './views/Artist.js';
import Genre from './views/Genre.js';
import Playlist from './views/Playlist.js';

// Định nghĩa các route (sử dụng History API)
const routes = {
    '/': Explore,
    '/album': Album,
    '/artist': Artist,
    '/genre': Genre,
    '/playlist': Playlist,
    '/recent': Explore,
    '/favorites': Explore,
    '/archive': Explore,
};

// Render trang dựa trên route hiện tại
export function renderRoute(path) {
    const currentPath = path || window.location.pathname;
    const route = routes[currentPath] || routes['/'];
    
    // Lấy main content container
    const mainContent = document.querySelector('.main-content .container .left-section');
    
    if (mainContent && route) {
        mainContent.innerHTML = route();
    }
    
    // Update active state trong sidebar
    updateActiveNavItem(currentPath);
}

// Update active state trong navigation
function updateActiveNavItem(path) {
    // Remove active class từ tất cả nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class cho nav item tương ứng
    const activeLink = document.querySelector(`.nav-link[href="${path}"]`);
    if (activeLink) {
        activeLink.closest('.nav-item').classList.add('active');
    }
}

// Khởi tạo router
export function initRouter() {
    // Xử lý khi người dùng click vào nav-link
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        
        if (link && link.hasAttribute('href')) {
            const href = link.getAttribute('href');
            
            // Chỉ handle internal links (bắt đầu bằng /)
            if (href.startsWith('/')) {
                e.preventDefault();
                navigateTo(href);
            }
        }
    });

    // Xử lý khi người dùng dùng nút back/forward của trình duyệt
    window.addEventListener('popstate', () => {
        renderRoute(window.location.pathname);
    });

    // Render trang đầu tiên khi load
    renderRoute(window.location.pathname);
}

// Navigate đến trang mới (helper function)
export function navigateTo(path) {
    window.history.pushState({}, '', path);
    renderRoute(path);
}
