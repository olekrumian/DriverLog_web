// Language Switcher Functionality
let currentLang = localStorage.getItem('dltracker-lang') || 'en';

// Language names map
const langNames = {
  en: 'EN',
  uk: 'UA',
  pl: 'PL',
  lt: 'LT',
  fr: 'FR',
  nl: 'NL',
  cs: 'CS',
};

// Function to translate the page
function translatePage(lang) {
  currentLang = lang;
  localStorage.setItem('dltracker-lang', lang);

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update special elements that need custom handling
  updateHeroTitle(lang);

  // Update dropdown display
  updateLanguageDropdown(lang);
}

// Update hero title with highlight
function updateHeroTitle(lang) {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && translations[lang]) {
    const part1 = translations[lang]['hero.title.part1'] || '';
    const highlight =
      translations[lang]['hero.title.highlight'] || 'Regulation 561';
    const part2 = translations[lang]['hero.title.part2'] || '';

    heroTitle.innerHTML =
      `${part1} <span class="highlight">${highlight}</span> ${part2}`.trim();
  }
}

// Update language dropdown display
function updateLanguageDropdown(lang) {
  const currentLangEl = document.querySelector('.lang-current');
  if (currentLangEl) {
    currentLangEl.textContent = langNames[lang] || lang.toUpperCase();
  }

  // Update active option
  document.querySelectorAll('.lang-option').forEach((option) => {
    option.classList.toggle('active', option.dataset.lang === lang);
  });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language or default
  translatePage(currentLang);

  // Dropdown functionality
  const dropdownBtn = document.getElementById('langDropdownBtn');
  const dropdownMenu = document.getElementById('langDropdownMenu');

  if (dropdownBtn && dropdownMenu) {
    // Toggle dropdown
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownBtn.classList.toggle('active');
      dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownBtn.classList.remove('active');
        dropdownMenu.classList.remove('show');
      }
    });

    // Language option selection
    document.querySelectorAll('.lang-option').forEach((option) => {
      option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        translatePage(lang);
        dropdownBtn.classList.remove('active');
        dropdownMenu.classList.remove('show');
      });
    });
  }

  // Install tabs functionality
  const installTabs = document.querySelectorAll('.install-tab');
  const installInstructions = document.querySelectorAll(
    '.install-instructions',
  );

  installTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;

      // Remove active class from all tabs and instructions
      installTabs.forEach((t) => t.classList.remove('active'));
      installInstructions.forEach((inst) => inst.classList.remove('active'));

      // Add active class to clicked tab
      tab.classList.add('active');

      // Show corresponding instructions
      const targetInstruction = document.querySelector(
        `.install-instructions[data-content="${targetTab}"]`,
      );
      if (targetInstruction) {
        targetInstruction.classList.add('active');
      }
    });
  });
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  });
});

// Add intersection observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all feature cards, advantage cards, and steps
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    '.feature-card, .advantage-card, .step, .showcase-item',
  );

  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.animationDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  // Handle lazy loaded images
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach((img) => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
    // If image is already loaded (cached)
    if (img.complete) {
      img.classList.add('loaded');
    }
  });
});

// Add active state to navbar on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    navbar.style.padding = '1rem 0';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'none';
    navbar.style.boxShadow = 'none';
    navbar.style.padding = '1.5rem 0';
  }

  lastScroll = currentScroll;
});

// Add parallax effect to hero section
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = hero.querySelector('.hero-content');
    if (parallax && scrolled < window.innerHeight) {
      parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
      parallax.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
  });
}

// Track CTA button clicks
document.querySelectorAll('.btn-primary').forEach((button) => {
  button.addEventListener('click', (e) => {
    // Add ripple effect
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    // Analytics tracking (if you add analytics later)
    console.log('CTA clicked:', button.textContent.trim());
  });
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .btn-primary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

// Console message for developers
console.log(
  '%c🚚 DLTracker Landing Page',
  'color: #00BCD4; font-size: 20px; font-weight: bold;',
);
console.log(
  '%cDeveloped for professional drivers',
  'color: #9AA0A6; font-size: 14px;',
);
console.log(
  '%cContact: olekrumian@gmail.com',
  'color: #9AA0A6; font-size: 12px;',
);
