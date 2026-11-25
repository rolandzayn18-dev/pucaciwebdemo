/* ========================================================
   PUCACI OFFICIAL WEBSITE - SCRIPT (GAME STUDIO SUITE)
   Interactive Deck Cards, Lightbox Modal & Download Feedback
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Studio Header Scroll Transition
    const studioHeader = document.getElementById('studioHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            studioHeader.classList.add('scrolled');
        } else {
            studioHeader.classList.remove('scrolled');
        }
    });

    // 2. Mobile Drawer Navigation
    const menuToggle = document.getElementById('menuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', () => {
            mobileDrawer.classList.toggle('active');
        });

        // Close drawer on link click
        const drawerLinks = mobileDrawer.querySelectorAll('.mobile-link');
        drawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
            });
        });
    }

    // 3. Interactive Character Deck Cards (Hover & Click bring to front)
    const deckCards = document.querySelectorAll('.deck-card');
    deckCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            deckCards.forEach(c => c.classList.remove('active-deck-card'));
            card.classList.add('active-deck-card');
        });
        card.addEventListener('click', () => {
            deckCards.forEach(c => c.classList.remove('active-deck-card'));
            card.classList.add('active-deck-card');
        });
    });

    // 4. Download Feedback Toast
    const toast = document.getElementById('downloadToast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMsg = document.getElementById('toastMsg');
    const btnZip = document.getElementById('btnDownloadZip');
    const btnExe = document.getElementById('btnDownloadExe');

    function showDownloadToast(fileName, desc) {
        if (!toast) return;
        if (toastTitle) toastTitle.textContent = `Mengunduh ${fileName}`;
        if (toastMsg) toastMsg.textContent = desc || "Proses unduhan demo game telah dimulai.";
        
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4500);
    }

    if (btnZip) {
        btnZip.addEventListener('click', () => {
            showDownloadToast('Pucaci-v1.0-Windows.zip', 'Paket game lengkap (~76.8 MB) sedang diunduh ke komputermu.');
        });
    }

    if (btnExe) {
        btnExe.addEventListener('click', () => {
            showDownloadToast('Pucaci.exe', 'Berkas biner utama game sedang diunduh.');
        });
    }

    // 5. ESC Key Listener for Modal and Drawer
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            if (mobileDrawer) mobileDrawer.classList.remove('active');
        }
    });
});

// Lightbox Modal Functions (Global scope for HTML onclick)
function openLightbox(imageSrc, caption) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImg');
    const cap = document.getElementById('lightboxCaption');

    if (modal && img && cap) {
        img.src = imageSrc;
        cap.textContent = caption || '';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
