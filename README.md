# CMusic - Website Nghe Nhạc Trực Tuyến

![CMusic Banner](assets/img/hit-songs-bg/hit1.png)

## 📋 Giới thiệu

CMusic là một nền tảng nghe nhạc trực tuyến hiện đại, được xây dựng với HTML, CSS và vanilla JavaScript. Dự án này là một Single Page Application (SPA) với giao diện đẹp mắt, responsive và dễ sử dụng.

## ✨ Tính năng

- 🎵 **Khám phá nhạc**: Xem top bài hát, nghệ sĩ và thể loại
- 📱 **Responsive Design**: Hoạt động mượt mà trên mọi thiết bị
- 🎨 **Modern UI**: Giao diện hiện đại, dark theme
- 🔍 **Tìm kiếm**: Tìm kiếm bài hát theo tên hoặc nghệ sĩ
- 📻 **Music Player**: Trình phát nhạc với controls đầy đủ
- 📚 **Thư viện**: Quản lý playlist, album, nghệ sĩ yêu thích
- ♿ **Accessibility**: Hỗ trợ đầy đủ ARIA labels và keyboard navigation
- 📲 **PWA Ready**: Có thể cài đặt như ứng dụng native

## 🚀 Cấu trúc dự án

```
CMusic Project/
├── index.html              # Trang chính
├── manifest.json           # PWA manifest
├── README.md              # Tài liệu dự án
├── assets/
│   ├── css/
│   │   └── style.css      # Stylesheet chính
│   └── img/               # Hình ảnh
│       ├── hit-songs-bg/
│       ├── rank/
│       └── top-artists/
└── js/
    ├── main.js            # Entry point
    ├── router.js          # SPA router
    ├── data.js            # Dữ liệu mẫu
    ├── components/        # UI Components
    │   ├── Sidebar.js
    │   ├── Header.js
    │   ├── Player.js
    │   └── Footer.js
    └── views/             # Các trang
        ├── Explore.js     # Trang khám phá
        ├── Album.js       # Trang album
        ├── Artist.js      # Trang nghệ sĩ
        ├── Genre.js       # Trang thể loại
        └── Playlist.js    # Trang playlist
```

## 🛠️ Công nghệ sử dụng

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Custom Properties, Responsive Design
- **JavaScript (ES6+)**: Modules, Arrow Functions, Template Literals
- **Font**: Google Fonts (Inter)
- **Icons**: Material Icons Round

## 📦 Cài đặt và Chạy

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari)
- Web server (Live Server, Python HTTP Server, hoặc tương tự)

### Cách 1: Sử dụng Live Server (VS Code)
1. Cài đặt extension "Live Server" trong VS Code
2. Click chuột phải vào `index.html`
3. Chọn "Open with Live Server"

### Cách 2: Sử dụng Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Truy cập: http://localhost:8000
```

### Cách 3: Sử dụng Node.js HTTP Server
```bash
# Cài đặt http-server global
npm install -g http-server

# Chạy server
http-server -p 8000

# Truy cập: http://localhost:8000
```

## 🎯 Hướng dẫn sử dụng

### Navigation
- Click vào các mục trong sidebar để điều hướng
- Sử dụng thanh search để tìm kiếm bài hát
- Click vào tab MUSIC/PODCAST/LIVE để lọc nội dung

### Player
- Click nút Play trên bất kỳ bài hát nào để phát
- Sử dụng controls ở player để điều khiển phát nhạc
- Click nút Add (+) để thêm vào playlist

### Responsive
- Desktop: Hiển thị đầy đủ sidebar và player
- Tablet: Sidebar thu gọn, ẩn một số element
- Mobile: Ẩn sidebar, tối ưu cho màn hình nhỏ

## 🌟 Tính năng nổi bật

### Single Page Application (SPA)
- Routing client-side mượt mà
- Không reload trang khi chuyển view
- History API integration

### Performance
- CSS Custom Properties cho theming
- Lazy loading cho images
- Optimized grid layouts

### Accessibility (A11y)
- ARIA labels đầy đủ
- Keyboard navigation support
- Screen reader friendly
- Focus indicators rõ ràng

### Progressive Web App (PWA)
- Manifest.json đầy đủ
- Có thể install như native app
- Offline-ready (cần thêm Service Worker)

## 🔧 Customization

### Thay đổi màu sắc
Chỉnh sửa CSS custom properties trong `style.css`:

```css
:root {
    --bg-color: #17161b;
    --accent-color: #5674ff;
    --text-primary: #ffffff;
    --text-secondary: #75737c;
}
```

### Thêm dữ liệu
Chỉnh sửa file `js/data.js` để thêm bài hát, nghệ sĩ, album mới:

```javascript
export const songs = [
    {
        id: 1,
        title: "Tên bài hát",
        artist: "Nghệ sĩ",
        duration: "3:45",
        image: "url-hình-ảnh",
        plays: "100M",
        genre: "Pop"
    }
];
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px - Full layout
- **Tablet**: 576px - 1024px - Collapsed sidebar
- **Mobile**: < 576px - Mobile optimized

## 🐛 Known Issues

- Audio playback chưa được implement (chỉ có UI)
- Search results chưa có UI hiển thị
- Cần thêm Service Worker cho offline support
- Cần thêm backend API thực tế

## 🚧 Roadmap

- [ ] Implement actual audio playback
- [ ] Add backend API integration
- [ ] Service Worker cho offline mode
- [ ] User authentication
- [ ] Create/Edit playlist functionality
- [ ] Like/Favorite system
- [ ] Social sharing
- [ ] Dark/Light theme toggle
- [ ] Lyrics display
- [ ] Queue management

## 📄 License

MIT License - Free to use for educational purposes

## 👨‍💻 Author

**ToiPhamOfficial**
- GitHub: [@ToiPhamOfficial](https://github.com/ToiPhamOfficial)

## 🤝 Contributing

Contributions, issues và feature requests đều được welcome!

---

**⭐ Nếu bạn thấy project hữu ích, hãy star repo nhé!**

