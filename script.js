function bukaUndangan() {
    // Geser Cover
    const cover = document.getElementById('cover');
    cover.style.transform = 'translateY(-100%)';
    
    // Munculkan Konten
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';

    // Putar Musik (Fix)
    const lagu = document.getElementById('lagu');
    lagu.play().catch(error => {
        console.log("Browser memblokir autoplay, mencoba lagi...");
        document.body.addEventListener('click', () => { lagu.play(); }, { once: true });
    });
}

// Countdown
const tanggalTujuan = new Date("Jan 25, 2026 09:00:00").getTime();
setInterval(() => {
    const selisih = tanggalTujuan - new Date().getTime();
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = `${hari}h ${jam}j ${menit}m ${detik}d`;
}, 1000);

// RSVP WhatsApp
function kirimWA() {
    const nama = document.getElementById('nama').value;
    const status = document.getElementById('status').value;
    const noHP = "628123456789"; // GANTI DENGAN NOMOR HP KAMU
    const teks = `Halo, saya ${nama}. Saya akan ${status}.`;
    window.open(`https://wa.me/${noHP}?text=${encodeURIComponent(teks)}`, '_blank');
}

// Salin Rekening
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening berhasil disalin!");
}

// Tambah Ucapan
function tambahUcapan() {
    const nama = document.getElementById('guest-name').value;
    const pesan = document.getElementById('guest-msg').value;
    if(nama && pesan) {
        const div = document.createElement('div');
        div.className = 'ucapan-item';
        div.innerHTML = `<strong>${nama}</strong><p>${pesan}</p>`;
        document.getElementById('display-ucapan').prepend(div);
        document.getElementById('guest-name').value = "";
        document.getElementById('guest-msg').value = "";
    }
}