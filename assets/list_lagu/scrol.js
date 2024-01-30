let isScrolling = false;
let scrollInterval;

function scrollPage() {
    if (!isScrolling) {
        isScrolling = true;
        scrollInterval = setInterval(() => {
            window.scrollBy({
                top: window.innerHeight / 170, // Menggulir setengah ketinggian jendela untuk pengguliran yang lebih lambat
                behavior: 'smooth'
            });
        }, 500); // Ubah nilai interval berdasarkan preferensi pengguliran Anda
    } else {
        isScrolling = false;
        clearInterval(scrollInterval);
    }
}
