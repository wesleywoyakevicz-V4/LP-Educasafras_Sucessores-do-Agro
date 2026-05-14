document.addEventListener('DOMContentLoaded', () => {
    initContentOverrides();
    initFAQ();
    initCurriculumAccordion();
    initFacultyCards();
    initLeadForm();
    initMobileMenu();
    initSmoothScroll();
    initRevealAnimations();
    initNavbarState();
    initHeroSlideshow();
    initTestimonialsCarousel();
});

function initContentOverrides() {
    const heroCopy = document.querySelector('.hero-copy > p');
    if (heroCopy) {
        heroCopy.innerHTML = '<strong>70% das propriedades rurais não chegam à próxima geração.</strong> Formação que nasce para proteger décadas de trabalho, preservar o patrimônio e garantir continuidade ao legado familiar.';
    }

    const heroProofItems = document.querySelectorAll('.hero-proof-item');
    if (heroProofItems[1]) {
        heroProofItems[1].classList.add('hero-proof-item-edition');
        const proofLabel = heroProofItems[1].querySelector('span');
        if (proofLabel) {
            proofLabel.textContent = '9ª Edição Consecutiva';
        }
    }

    const pricingCards = document.querySelectorAll('.pricing-grid .price-card');
    if (pricingCards[0]) {
        const firstCard = pricingCards[0];
        const firstText = firstCard.querySelector('p');
        if (firstText) {
            firstText.textContent = 'parcelamento disponível';
        }
        if (!firstCard.querySelector('ul')) {
            const firstList = document.createElement('ul');
            firstList.innerHTML = `
                <li>5 módulos presenciais</li>
                <li>Material didático completo</li>
                <li>Certificado de conclusão</li>
                <li>Networking nacional</li>
            `;
            firstText?.insertAdjacentElement('afterend', firstList);
        }
    }

    if (pricingCards[1]) {
        const secondCard = pricingCards[1];
        const secondBadge = secondCard.querySelector('.badge');
        const secondText = secondCard.querySelector('p');
        if (secondBadge) {
            secondBadge.textContent = 'Últimas vagas';
        }
        if (secondText) {
            secondText.textContent = 'parcelamento disponível';
        }
        const secondList = secondCard.querySelector('ul');
        if (secondList) {
            secondList.innerHTML = `
                <li>5 módulos presenciais</li>
                <li>Material didático completo</li>
                <li>Certificado de conclusão</li>
                <li>Networking nacional</li>
            `;
        }
    }

    if (pricingCards[2]) {
        const thirdCard = pricingCards[2];
        const thirdText = thirdCard.querySelector('p');
        if (thirdText) {
            thirdText.textContent = 'parcelamento disponível';
        }
        if (!thirdCard.querySelector('ul')) {
            const thirdList = document.createElement('ul');
            thirdList.innerHTML = `
                <li>5 módulos presenciais</li>
                <li>Material didático completo</li>
                <li>Certificado de conclusão</li>
                <li>Networking nacional</li>
            `;
            thirdText?.insertAdjacentElement('afterend', thirdList);
        }
    }
}

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
        const bio = card.querySelector('.faculty-bio');

        if (!trigger || !bio) {
            return;
        }

        bio.hidden = !card.classList.contains('is-open');

        trigger.addEventListener('click', () => {
            const isOpen = card.classList.toggle('is-open');
            trigger.setAttribute('aria-expanded', String(isOpen));
            bio.hidden = !isOpen;
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
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

function initLeadForm() {
    const section = document.querySelector('.lead-section');
    if (!section) {
        return;
    }

    const form = section.querySelector('.lead-form');
    const successState = section.querySelector('.lead-modal-success');
    const firstInput = section.querySelector('input, select, textarea');
    const resetTrigger = section.querySelector('[data-reset-lead-form]');

    if (!form) {
        return;
    }

    const resetForm = ({ shouldFocus = false } = {}) => {
        form.hidden = false;
        form.reset();

        if (successState) {
            successState.hidden = true;
        }

        if (shouldFocus) {
            window.setTimeout(() => firstInput?.focus(), 80);
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.hidden = true;

        if (successState) {
            successState.hidden = false;
            successState.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });

    resetTrigger?.addEventListener('click', () => {
        resetForm({ shouldFocus: true });
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
        '.testimonials-proof',
        '.testimonials-track .testimonial-card',
        '.testimonials-pagination',
        '.testimonials-cta',
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

function initTestimonialsCarousel() {
    const carousel = document.querySelector('[data-testimonials-carousel]');
    if (!carousel) {
        return;
    }

    const track = carousel.querySelector('[data-testimonials-track]');
    const prevButton = carousel.querySelector('[data-testimonials-prev]');
    const nextButton = carousel.querySelector('[data-testimonials-next]');
    const pagination = document.querySelector('[data-testimonials-pagination]');
    const cards = track ? Array.from(track.querySelectorAll('.testimonial-card')) : [];

    if (!track || !prevButton || !nextButton || !pagination || cards.length < 2) {
        return;
    }

    const mobileQuery = window.matchMedia('(max-width: 900px)');
    let pageCount = 1;
    let activePage = 0;
    let dots = [];

    const getSlidesPerPage = () => (mobileQuery.matches ? 1 : 2);

    const getPageOffset = (page) => {
        const targetIndex = Math.min(page * getSlidesPerPage(), cards.length - 1);
        const targetCard = cards[targetIndex];
        if (!targetCard) {
            return 0;
        }

        return targetCard.offsetLeft - cards[0].offsetLeft;
    };

    const setActiveDot = (page) => {
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('is-active', dotIndex === page);
            dot.setAttribute('aria-current', dotIndex === page ? 'true' : 'false');
        });
    };

    const updateFromScroll = () => {
        const offset = track.scrollLeft;
        let closestPage = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        for (let page = 0; page < pageCount; page += 1) {
            const distance = Math.abs(offset - getPageOffset(page));
            if (distance < closestDistance) {
                closestDistance = distance;
                closestPage = page;
            }
        }

        activePage = closestPage;
        setActiveDot(activePage);
    };

    const scrollToPage = (page) => {
        activePage = (page + pageCount) % pageCount;
        track.scrollTo({
            left: getPageOffset(activePage),
            behavior: 'smooth'
        });
        setActiveDot(activePage);
    };

    const rebuildPagination = () => {
        pageCount = Math.max(1, Math.ceil(cards.length / getSlidesPerPage()));
        activePage = Math.min(activePage, pageCount - 1);
        pagination.innerHTML = '';
        dots = Array.from({ length: pageCount }, (_, page) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.setAttribute('aria-label', `Ir para a pagina ${page + 1} dos depoimentos`);
            dot.addEventListener('click', () => scrollToPage(page));
            pagination.appendChild(dot);
            return dot;
        });
        setActiveDot(activePage);
        track.scrollLeft = getPageOffset(activePage);
    };

    prevButton.addEventListener('click', () => scrollToPage(activePage - 1));
    nextButton.addEventListener('click', () => scrollToPage(activePage + 1));
    track.addEventListener('scroll', () => {
        window.requestAnimationFrame(updateFromScroll);
    }, { passive: true });

    const handleViewportChange = () => rebuildPagination();
    if (typeof mobileQuery.addEventListener === 'function') {
        mobileQuery.addEventListener('change', handleViewportChange);
    } else if (typeof mobileQuery.addListener === 'function') {
        mobileQuery.addListener(handleViewportChange);
    }

    window.addEventListener('resize', rebuildPagination, { passive: true });
    rebuildPagination();
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
