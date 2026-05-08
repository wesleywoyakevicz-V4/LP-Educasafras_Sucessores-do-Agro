document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
    initLeadModal();
    initSmoothScroll();
    initRevealAnimations();
    initNavbarState();
});

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

function initLeadModal() {
    const modal = document.querySelector('[data-lead-modal]');
    if (!modal) {
        return;
    }

    const form = modal.querySelector('.lead-form');
    const successState = modal.querySelector('.lead-modal-success');
    const firstInput = modal.querySelector('input, select, textarea');
    const openTriggers = document.querySelectorAll('[data-open-lead-modal]');
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

    if (window.location.hash === '#lead-popup') {
        openModal();
    }

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
        '.hero-meta-item',
        '.metric',
        '.logo-pill',
        '.copy-stack > *',
        '.feature-card',
        '.step-card',
        '.price-card',
        '.faq-item',
        '.visual-card',
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
    const topbar = document.querySelector('.topbar');
    const topbarShell = document.querySelector('.topbar-shell');
    const hero = document.querySelector('.hero');
    if (!topbarShell) {
        return;
    }

    const updateSafeSpace = () => {
        const measuredHeight = topbar
            ? Math.ceil(topbar.getBoundingClientRect().height)
            : Math.ceil(topbarShell.getBoundingClientRect().height);

        document.documentElement.style.setProperty('--topbar-safe-space', `${measuredHeight}px`);
    };

    const updateState = () => {
        const shouldCompact = window.scrollY > 16;
        topbarShell.classList.toggle('is-scrolled', shouldCompact);
    };

    updateState();
    updateSafeSpace();
    window.addEventListener('resize', updateSafeSpace, { passive: true });
    window.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('load', updateSafeSpace, { once: true });

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateSafeSpace).catch(() => {});
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
