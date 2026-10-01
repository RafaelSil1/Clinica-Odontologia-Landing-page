tailwind.config = {
    theme: {
        extend: {
            colors: {
                blush: {
                    50: '#FDFBFB',
                    100: '#F7EDED',
                    200: '#F0DCDC',
                    300: '#E5BFBF',
                    400: '#D69E9E',
                },
                gold: {
                    100: '#F9F5EB',
                    200: '#EFE2C6',
                    300: '#D4AF37',
                    400: '#C5A028',
                    500: '#AA820A',
                },
                roseTheme: {
                    light: '#FFF5F7',
                    DEFAULT: '#EFA9B8',
                    dark: '#D88A9B'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif']
            }
        }
    }
}

// Toggle Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.classList.add('shadow-md', 'bg-white/95');
    } else {
        header.classList.remove('shadow-md');
    }
});