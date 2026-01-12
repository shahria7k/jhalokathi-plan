// Language Toggle System
let currentLanguage = 'bn'; // Default to Bangla

function toggleLanguage() {
    currentLanguage = currentLanguage === 'bn' ? 'en' : 'bn';
    updateLanguage();
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function updateLanguage() {
    // Update language toggle button text
    const langTexts = document.querySelectorAll('#lang-text, #lang-text-desktop');
    langTexts.forEach(el => {
        el.textContent = currentLanguage === 'bn' ? 'EN' : 'বাংলা';
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage === 'bn' ? 'bn' : 'en';
    
    // Update page title
    if (currentLanguage === 'bn') {
        document.title = "ঝালকাঠি মডেল পৌরসভা: জাতীয় উদাহরণ | Model Municipality Development";
    } else {
        document.title = "Jhalakathi Model Municipality: National Example | Model Municipality Development";
    }
    
    // Apply language-specific classes
    const allElements = document.querySelectorAll('[data-bn], [data-en]');
    allElements.forEach(el => {
        if (currentLanguage === 'bn') {
            if (el.hasAttribute('data-bn')) {
                el.textContent = el.getAttribute('data-bn');
            }
            if (el.hasAttribute('data-en')) {
                el.classList.add('hidden');
            }
        } else {
            if (el.hasAttribute('data-en')) {
                el.textContent = el.getAttribute('data-en');
                el.classList.remove('hidden');
            }
            if (el.hasAttribute('data-bn')) {
                el.classList.add('hidden');
            }
        }
    });
    
    // Update specific content areas
    updateTranslatableContent();
}

function updateTranslatableContent() {
    // This function will be expanded to update all translatable content
    // For now, we'll use data attributes for key elements
    
    const translations = {
        bn: {
            heroTitle: "বাংলাদেশের প্রথম প্রতিলিপিযোগ্য মডেল পৌরসভা",
            heroSubtitle: "ঝালকাঠি পৌরসভা একটি পরীক্ষামূলক প্রকল্প হিসেবে কাজ করবে - যেখানে আমরা নতুন ধারণা পরীক্ষা করব, শিখব, এবং সফল সমাধানগুলো জাতীয়ভাবে ছড়িয়ে দেওয়ার জন্য প্রস্তুত করব। এটি আমাদের ভিশন ২০২৬/২৭।",
            visionTitle: "ভিশন ২০২৬/২৭: বাংলাদেশের প্রথম প্রতিলিপিযোগ্য মডেল পৌরসভা"
        },
        en: {
            heroTitle: "Bangladesh's First Replicable Model Municipality",
            heroSubtitle: "Jhalakathi Municipality will work as an experimental project - where we will test new ideas, learn, and prepare successful solutions for national replication. This is our Vision 2026/27.",
            visionTitle: "Vision 2026/27: Bangladesh's First Replicable Model Municipality"
        }
    };
    
    const t = translations[currentLanguage];
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const visionTitle = document.querySelector('.vision-title');
    
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (visionTitle) visionTitle.textContent = t.visionTitle;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
    }
    updateLanguage();
});
