document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
    initCurriculumAccordion();
    initFacultyCards();
    initLeadModal();
    initMobileMenu();
    initSmoothScroll();
    initRevealAnimations();
    initNavbarState();
    initHeroSlideshow();
});

function updateTopbarSafeSpace() {
    const topbar = document.querySelector('.topbar');
    const topbarShell = document.querySelector('.topbar-shell');

    if (!topbar && !topbarShell) {
        return;
    }

    const measuredHeight = topbar
        ? Math.ceil(topbar.getBoundingClientRect().height)
        : Math.ceil(topbarShell.getBoundingClientRect().height);

    document.documentElement.style.setProperty('--topbar-safe-space', `${measuredHeight}px`);
}

function initFAQ() {
    document.querySelectorAll('.faq-item').forEach((item) => {
        const button = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const indicator = button ? button.querySelector('strong') : null;

        if (!button || !answer || !indicator) {
            return;
        }

        button.addEventListener('click', () => {
            const isActive = item.classList.toggle('active');
            button.setAttribute('aria-expanded', String(isActive));
            indicator.textContent = isActive ? '-' : '+';
        });
    });
}

function initCurriculumAccordion() {
    document.querySelectorAll('.curriculum-item').forEach((item) => {
        const trigger = item.querySelector('.curriculum-trigger');

        if (!trigger) {
            return;
        }

        trigger.addEventListener('click', () => {
            const isOpen = item.classList.toggle('is-open');
            trigger.setAttribute('aria-expanded', String(isOpen));
        });
    });
}

function initFacultyCards() {
    document.querySelectorAll('.faculty-card').forEach((card) => {
        const trigger = card.querySelector('.faculty-toggle');

        if (!trigger) {
            return;
        }

        trigger.addEventListener('click', () => {
            const isOpen = card.classList.toggle('is-open');
            trigger.setAttribute('aria-expanded', String(isOpen));
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            if (anchor.hasAttribute('data-open-lead-modal')) {
                return;
            }

            const targetId = anchor.getAttribute('href');

            if (!targetId || targetId === '#') {
                event.preventDefault();
                return;
            }

            const target = document.querySelector(targetId);
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const topbarShell = document.querySelector('.topbar-shell');
    const nav = document.querySelector('.nav');

    if (!toggle || !topbarShell || !nav) {
        return;
    }

    const mobileQuery = window.matchMedia('(max-width: 760px)');

    const setMenuState = (isOpen) => {
        topbarShell.classList.toggle('is-menu-open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Fechar menu principal' : 'Abrir menu principal');
        updateTopbarSafeSpace();
    };

    const closeMenu = () => setMenuState(false);

    toggle.addEventListener('click', () => {
        if (!mobileQuery.matches) {
            return;
        }

        setMenuState(!topbarShell.classList.contains('is-menu-open'));
    });

    nav.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', () => {
            if (mobileQuery.matches) {
                closeMenu();
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (!mobileQuery.matches || !topbarShell.classList.contains('is-menu-open')) {
            return;
        }

        if (topbarShell.contains(event.target)) {
            return;
        }

        closeMenu();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && topbarShell.classList.contains('is-menu-open')) {
            closeMenu();
        }
    });

    const handleViewportChange = () => {
        if (!mobileQuery.matches) {
            closeMenu();
            return;
        }

        updateTopbarSafeSpace();
    };

    if (typeof mobileQuery.addEventListener === 'function') {
        mobileQuery.addEventListener('change', handleViewportChange);
    } else if (typeof mobileQuery.addListener === 'function') {
        mobileQuery.addListener(handleViewportChange);
    }
}

function initLeadModal() {
    const modal = document.querySelector('[data-lead-modal]');
    if (!modal) {
        return;
    }

    const form = modal.querySelector('.lead-form');
    const successState = modal.querySelector('.lead-modal-success');
    const firstInput = modal.querySelector('input, select, textarea');
    const openTriggers = document.querySelectorAll('.pricing .price-card.active [data-open-lead-modal]');
    const closeTriggers = modal.querySelectorAll('[data-close-lead-modal]');

    const resetModal = () => {
        if (form) {
            form.hidden = false;
            form.reset();
        }

        if (successState) {
            successState.hidden = true;
        }
    };

    const openModal = () => {
        resetModal();
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        window.setTimeout(() => firstInput?.focus(), 80);
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    };

    openTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            openModal();
        });
    });

    closeTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            closeModal();
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    if (!form) {
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.hidden = true;

        if (successState) {
            successState.hidden = false;
        }
    });
}

function initRevealAnimations() {
    const selectors = [
        '.section-header',
        '.trust-shell',
        '.hero-info-item',
        '.hero-proof-item',
        '.logo-pill',
        '.curriculum-intro > *',
        '.curriculum-item',
        '.feature-card',
        '.step-card',
        '.faculty-card',
        '.price-card',
        '.faq-item',
        '.collage-stage',
        '.collage-card',
        '.collage-note'
    ];

    const revealTargets = document.querySelectorAll(selectors.join(', '));
    revealTargets.forEach((element) => element.classList.add('reveal'));

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
        });
    }, {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px'
    });

    revealTargets.forEach((element, index) => {
        element.style.transitionDelay = `${Math.min(index * 40, 320)}ms`;
        observer.observe(element);
    });
}

function initNavbarState() {
    const topbarShell = document.querySelector('.topbar-shell');
    const hero = document.querySelector('.hero');
    if (!topbarShell) {
        return;
    }

    const updateState = () => {
        const shouldCompact = window.scrollY > 16;
        topbarShell.classList.toggle('is-scrolled', shouldCompact);
    };

    updateState();
    updateTopbarSafeSpace();
    window.addEventListener('resize', updateTopbarSafeSpace, { passive: true });
    window.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('load', updateTopbarSafeSpace, { once: true });

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateTopbarSafeSpace).catch(() => {});
    }

    if (!hero) {
        return;
    }

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const isCompact = !entry.isIntersecting || entry.intersectionRatio < 0.78;
            topbarShell.classList.toggle('is-scrolled', isCompact);
        });
    }, {
        threshold: [0.18, 0.4, 0.78, 1]
    });

    heroObserver.observe(hero);
}

function initHeroSlideshow() {
    const slideshow = document.querySelector('[data-hero-slideshow]');
    if (!slideshow) {
        return;
    }

    const slides = Array.from(slideshow.querySelectorAll('.hero-bg-slide'));
    if (!slides.length) {
        return;
    }

    let activeIndex = 0;

    const setActiveSlide = (index) => {
        activeIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('is-active', slideIndex === activeIndex);
        });
    };

    setActiveSlide(0);
    window.setInterval(() => {
        setActiveSlide(activeIndex + 1);
    }, 4200);
}
