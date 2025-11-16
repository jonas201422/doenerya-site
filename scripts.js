/*
 * Clientseitige Skripte für Dönerya.
 * Hier werden einfache Animationen initialisiert und dynamische Inhalte erstellt.
 */

document.addEventListener('DOMContentLoaded', () => {
    // GSAP‑Animationen für das Hero‑Text
    gsap.from('.hero h1', { duration: 1, y: -50, opacity: 0 });
    gsap.from('.hero p', { duration: 1, delay: 0.3, y: -50, opacity: 0 });
    gsap.from('.hero button', { duration: 1, delay: 0.6, scale: 0, opacity: 0 });

    // Galerie‑Bilder dynamisch hinzufügen
    const gallery = document.querySelector('.gallery-grid');
    if (gallery) {
        // Liste der Bilddateien. Wenn Sie neue Bilder hinzufügen, erweitern Sie diese Liste entsprechend.
        const images = [
            'ChatOn image (1).jpg',
            'ChatOn image (2).jpg',
            'ChatOn image (3).jpg',
            'ChatOn image 44.jpg',
            'ChatOn image23.jpg',
            'ChatOn image9.jpg'
        ];
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = `assets/${src}`;
            img.alt = 'Dönerya Gericht';
            gallery.appendChild(img);
        });
    }

    // Einfaches Kontaktformular: sendet keine Nachricht, sondern zeigt einen Dankes‑Alert.
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Vielen Dank für Ihre Nachricht! Wir melden uns baldmöglichst.');
            form.reset();
        });
    }
});