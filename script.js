document.addEventListener('DOMContentLoaded', function () {
    try {
        if (document.getElementById('map')) {
            const map = L.map('map').setView([7.08, 125.6], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            const locations = [
                { name: 'SM Ecoland 2F Cyberzone', coords: [7.0515, 125.5895], mapLink: 'https://maps.app.goo.gl/Ppq6eJcHLnECnceL8' },
                { name: 'SM Lanang 3F Cyberzone', coords: [7.1005, 125.6310], mapLink: 'https://maps.app.goo.gl/PMKd3vbBBTDAwh1C6' },
                { name: 'Abreeza 2F Globe store', coords: [7.0872, 125.6105], mapLink: 'https://maps.app.goo.gl/GQz2QQ4aFZnVY7UNA' }
            ];

            const locationListElement = document.getElementById('location-list');
            locations.forEach(location => {
                const marker = L.marker(location.coords).addTo(map).bindPopup(`<b>${location.name}</b>`);
                const locationItem = document.createElement('div');
                locationItem.className = 'location-item';
                locationItem.innerHTML = `<h3>${location.name}</h3><p><a href="${location.mapLink}" target="_blank"><i class="fa-solid fa-map-pin"></i> View on Google Maps</a></p>`;
                
                locationItem.addEventListener('click', (e) => {
                    if (e.target.tagName !== 'A' && !e.target.closest('a')) {
                         map.flyTo(location.coords, 15);
                        marker.openPopup();
                        document.querySelectorAll('.location-item').forEach(item => item.classList.remove('active'));
                        locationItem.classList.add('active');
                    }
                });
                
                locationListElement.appendChild(locationItem);
            });
        }
    } catch (e) {
        console.error("An error occurred during map initialization:", e);
    }


    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a.nav-link');
    if (sections.length > 0 && navLinks.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: "-30% 0px -70% 0px" });

        sections.forEach(section => {
            observer.observe(section);
        });
    }
});
