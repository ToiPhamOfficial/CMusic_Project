import { artists } from '../data.js';

export default function Artist() {
    return `
        <section class="section-box all-artists">
            <div class="section-header">
                <h2>Tất cả nghệ sĩ</h2>
            </div>
            <div class="artist-grid">
                ${artists.map(artist => `
                    <div class="artist-card-large" data-artist-id="${artist.id}">
                        <div class="artist-avatar">
                            <img src="${artist.image}" alt="${artist.name}">
                            <button class="artist-follow-btn">
                                <span class="material-icons-round">person_add</span>
                            </button>
                        </div>
                        <div class="artist-details">
                            <h3 class="artist-name">${artist.name}</h3>
                            <p class="artist-genre">${artist.genre}</p>
                            <p class="artist-listeners">${artist.listeners} lượt nghe</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        <section class="section-box trending-artists">
            <div class="section-header">
                <h2>Nghệ sĩ thịnh hành</h2>
            </div>
            <div class="artist-grid">
                ${artists.slice(0, 3).map(artist => `
                    <div class="artist-card-large" data-artist-id="${artist.id}">
                        <div class="artist-avatar">
                            <img src="${artist.image}" alt="${artist.name}">
                            <button class="artist-follow-btn">
                                <span class="material-icons-round">person_add</span>
                            </button>
                        </div>
                        <div class="artist-details">
                            <h3 class="artist-name">${artist.name}</h3>
                            <p class="artist-genre">${artist.genre}</p>
                            <p class="artist-listeners">${artist.listeners} lượt nghe</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}
