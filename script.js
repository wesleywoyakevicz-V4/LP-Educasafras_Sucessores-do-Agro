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

const HERO_SLIDE_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

function applyFAQOverrides() {
    const faqHeader = document.querySelector('.faq .section-header');
    const faqList = document.querySelector('.faq-list');

    if (faqHeader) {
        faqHeader.innerHTML = `
            <span class="eyebrow">Perguntas frequentes</span>
            <h2>Tire suas d&uacute;vidas antes de garantir sua vaga.</h2>
            <p>Tire suas d&uacute;vidas sobre a imers&atilde;o, formas de pagamento e como garantir sua vaga.</p>
        `;
    }

    if (faqList) {
        faqList.innerHTML = `
            <div class="faq-item">
                <button class="faq-question" type="button" aria-expanded="false">
                    <span>Preciso ter experi&ecirc;ncia em gest&atilde;o para participar?</span>
                    <strong>+</strong>
                </button>
                <div class="faq-answer">
                    <p>N&atilde;o. O programa foi desenhado para diferentes n&iacute;veis de maturidade. Temos alunos que est&atilde;o come&ccedil;ando a se envolver no neg&oacute;cio e outros que j&aacute; lideram opera&ccedil;&otilde;es. O conte&uacute;do &eacute; aplic&aacute;vel para todos.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question" type="button" aria-expanded="false">
                    <span>Qual &eacute; a dura&ccedil;&atilde;o e formato da imers&atilde;o?</span>
                    <strong>+</strong>
                </button>
                <div class="faq-answer">
                    <p>S&atilde;o 5 m&oacute;dulos presenciais realizados em Goi&acirc;nia/GO, com conte&uacute;do intensivo que combina aulas, cases pr&aacute;ticos, din&acirc;micas em grupo e networking com sucessores de todo o Brasil.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question" type="button" aria-expanded="false">
                    <span>O curso oferece certificado?</span>
                    <strong>+</strong>
                </button>
                <div class="faq-answer">
                    <p>Sim. Ao concluir a imers&atilde;o, voc&ecirc; recebe um certificado de conclus&atilde;o do programa Sucessores do Agro pela Educasafras.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question" type="button" aria-expanded="false">
                    <span>Quais s&atilde;o as formas de pagamento?</span>
                    <strong>+</strong>
                </button>
                <div class="faq-answer">
                    <p>Aceitamos pagamento &agrave; vista ou parcelado. Para conhecer as condi&ccedil;&otilde;es de parcelamento dispon&iacute;veis, entre em contato com nosso time atrav&eacute;s do formul&aacute;rio ou WhatsApp.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question" type="button" aria-expanded="false">
                    <span>Como funciona a pol&iacute;tica de cancelamento?</span>
                    <strong>+</strong>
                </button>
                <div class="faq-answer">
                    <p>Oferecemos condi&ccedil;&otilde;es flex&iacute;veis de cancelamento. Entre em contato com nosso time para conhecer os prazos e condi&ccedil;&otilde;es detalhadas.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question" type="button" aria-expanded="false">
                    <span>Onde ser&aacute; realizada a imers&atilde;o e onde posso me hospedar?</span>
                    <strong>+</strong>
                </button>
                <div class="faq-answer">
                    <p>A imers&atilde;o acontece na sede da Safras &amp; Cifras em Goi&acirc;nia/GO. Os participantes contam com parcerias exclusivas em hot&eacute;is pr&oacute;ximos ao local, com tarifas reduzidas. Ap&oacute;s a inscri&ccedil;&atilde;o, voc&ecirc; receber&aacute; os detalhes dos hot&eacute;is parceiros e orienta&ccedil;&otilde;es para reserva com desconto.</p>
                </div>
            </div>
        `;
    }
}

function applyCurriculumOverrides() {
    const curriculumHeader = document.querySelector('.curriculum-intro .section-header');
    const curriculumList = document.querySelector('.curriculum-list');

    if (curriculumHeader) {
        curriculumHeader.innerHTML = `
            <h2>O que voc&ecirc; vai dominar</h2>
            <p>De fam&iacute;lia a empresa. 5 m&oacute;dulos que cobrem sucess&atilde;o, patrim&ocirc;nio, tributos, finan&ccedil;as e governan&ccedil;a.</p>
        `;
    }

    if (curriculumList) {
        curriculumList.innerHTML = `
            <article class="curriculum-item">
                <button class="curriculum-trigger" type="button" aria-expanded="false">
                    <span class="curriculum-index">01</span>
                    <span class="curriculum-title">A Nova Gera&ccedil;&atilde;o do Agro e o Papel do Sucessor</span>
                    <span class="curriculum-icon" aria-hidden="true">+</span>
                </button>
                <div class="curriculum-content">
                    <ul class="curriculum-topics">
                        <li>Estrutura e evolu&ccedil;&atilde;o da fam&iacute;lia empres&aacute;ria</li>
                        <li>Ciclos geracionais e suas complexidades</li>
                        <li>Vantagens e desafios das empresas familiares</li>
                        <li>Desenvolvimento de herdeiros e sucessores</li>
                        <li>Gest&atilde;o da continuidade e sustentabilidade do legado familiar</li>
                    </ul>
                    <p class="curriculum-result"><strong>Resultado:</strong> Voc&ecirc; desenvolve leitura sist&ecirc;mica dos pap&eacute;is familiares e empresariais, autoconhecimento socioemocional e capacidade de liderar a transi&ccedil;&atilde;o entre gera&ccedil;&otilde;es.</p>
                </div>
            </article>
            <article class="curriculum-item">
                <button class="curriculum-trigger" type="button" aria-expanded="false">
                    <span class="curriculum-index">02</span>
                    <span class="curriculum-title">Holding Rural: Gest&atilde;o, Sociedade e Sucess&atilde;o</span>
                    <span class="curriculum-icon" aria-hidden="true">+</span>
                </button>
                <div class="curriculum-content">
                    <ul class="curriculum-topics">
                        <li>Empresa rural familiar: caracter&iacute;sticas, vantagens e desafios</li>
                        <li>Sistema dos 3 c&iacute;rculos: Fam&iacute;lia, Neg&oacute;cio e Patrim&ocirc;nio</li>
                        <li>Planejamento sucess&oacute;rio e riscos patrimoniais</li>
                        <li>Holding familiar e pilares do contrato social</li>
                        <li>Regimes de casamento e impacto sucess&oacute;rio</li>
                        <li>Transfer&ecirc;ncia e sucess&atilde;o de patrim&ocirc;nio</li>
                    </ul>
                    <p class="curriculum-result"><strong>Resultado:</strong> Voc&ecirc; sai com dom&iacute;nio sobre planejamento sucess&oacute;rio estrat&eacute;gico e jur&iacute;dico, an&aacute;lise de risco patrimonial, estrutura&ccedil;&atilde;o societ&aacute;ria e entendimento sobre regimes de bens, testamentos e heran&ccedil;a.</p>
                </div>
            </article>
            <article class="curriculum-item">
                <button class="curriculum-trigger" type="button" aria-expanded="false">
                    <span class="curriculum-index">03</span>
                    <span class="curriculum-title">Reforma Tribut&aacute;ria no Agro</span>
                    <span class="curriculum-icon" aria-hidden="true">+</span>
                </button>
                <div class="curriculum-content">
                    <ul class="curriculum-topics">
                        <li>O novo modelo tribut&aacute;rio: IBS, CBS e o fim do sistema atual</li>
                        <li>Impactos diretos da reforma para o produtor rural PF e PJ</li>
                        <li>Regime espec&iacute;fico do agro: o que muda e o que permanece</li>
                        <li>Cr&eacute;ditos tribut&aacute;rios na nova l&oacute;gica e a n&atilde;o cumulatividade plena</li>
                        <li>Per&iacute;odo de transi&ccedil;&atilde;o: cronograma, riscos e oportunidades</li>
                        <li>Planejamento tribut&aacute;rio rural no novo cen&aacute;rio</li>
                        <li>Estrat&eacute;gias de adequa&ccedil;&atilde;o para holdings e empresas familiares do agro</li>
                    </ul>
                    <p class="curriculum-result"><strong>Resultado:</strong> Voc&ecirc; sai com dom&iacute;nio sobre o novo sistema tribut&aacute;rio e seus impactos no agro, capacidade de planejar a transi&ccedil;&atilde;o com seguran&ccedil;a e vis&atilde;o estrat&eacute;gica para proteger o resultado do neg&oacute;cio familiar.</p>
                </div>
            </article>
            <article class="curriculum-item">
                <button class="curriculum-trigger" type="button" aria-expanded="false">
                    <span class="curriculum-index">04</span>
                    <span class="curriculum-title">Gest&atilde;o Financeira Estrat&eacute;gica na Atividade Rural</span>
                    <span class="curriculum-icon" aria-hidden="true">+</span>
                </button>
                <div class="curriculum-content">
                    <ul class="curriculum-topics">
                        <li>Diferen&ccedil;a entre resultado econ&ocirc;mico e financeiro</li>
                        <li>Classifica&ccedil;&atilde;o e an&aacute;lise de custos e despesas</li>
                        <li>Plano de contas e centros de custos</li>
                        <li>Ferramentas de gest&atilde;o: fluxo de caixa, DRE e indicadores</li>
                        <li>Planejamento de metas e balan&ccedil;o patrimonial</li>
                        <li>Etapas para gest&atilde;o financeira eficiente</li>
                    </ul>
                    <p class="curriculum-result"><strong>Resultado:</strong> Voc&ecirc; sai lendo demonstra&ccedil;&otilde;es financeiras e indicadores, com capacidade de planejamento or&ccedil;ament&aacute;rio e tomada de decis&atilde;o baseada em dados financeiros reais do seu neg&oacute;cio.</p>
                </div>
            </article>
            <article class="curriculum-item">
                <button class="curriculum-trigger" type="button" aria-expanded="false">
                    <span class="curriculum-index">05</span>
                    <span class="curriculum-title">Gest&atilde;o e Governan&ccedil;a em Empresas Rurais Familiares</span>
                    <span class="curriculum-icon" aria-hidden="true">+</span>
                </button>
                <div class="curriculum-content">
                    <ul class="curriculum-topics">
                        <li>Governan&ccedil;a: teoria, pr&aacute;tica e aplica&ccedil;&atilde;o no agro</li>
                        <li>Governan&ccedil;a Corporativa e Governan&ccedil;a Familiar</li>
                        <li>&Oacute;rg&atilde;os de governan&ccedil;a e protocolo familiar</li>
                        <li>Objetivos e planos da fam&iacute;lia empres&aacute;ria</li>
                        <li>Estrutura organizacional e remunera&ccedil;&atilde;o</li>
                        <li>C&oacute;digo de conduta, miss&atilde;o, vis&atilde;o e valores</li>
                    </ul>
                    <p class="curriculum-result"><strong>Resultado:</strong> Voc&ecirc; sai com capacidade de implantar mecanismos de governan&ccedil;a corporativa, estruturar conselhos, protocolos e regras familiares, e construir uma cultura organizacional alinhada ao legado.</p>
                </div>
            </article>
        `;
    }
}

function repositionPointsRescueCard() {
    const pointsCard = document.querySelector('.points-rescue-card');
    const pricingGrid = document.querySelector('.pricing-grid');

    if (!pointsCard || !pricingGrid) {
        return;
    }

    if (pricingGrid.nextElementSibling !== pointsCard) {
        pricingGrid.insertAdjacentElement('afterend', pointsCard);
    }

    const pointsCopy = pointsCard.querySelector('.points-rescue-copy');
    const pointsButton = pointsCard.querySelector('.points-rescue-btn');

    if (pointsCopy) {
        pointsCopy.innerHTML = `
            <h2>Dispon&iacute;vel para Resgate de Pontos</h2>
            <p>Voc&ecirc; pode utilizar seus pontos para participar da imers&atilde;o. Fale com um consultor para saber as condi&ccedil;&otilde;es e plataformas aceitas.</p>
        `;
    }

    if (pointsButton) {
        pointsButton.href = 'https://api.whatsapp.com/send/?phone=556296771552&text=Ol%C3%A1%2C+gostaria+de+saber+sobre+o+resgate+de+pontos+para+o+Sucessores+do+Agro+-+9%C2%AA+Edi%C3%A7%C3%A3o%21&type=phone_number&app_absent=0';
        pointsButton.innerHTML = 'Falar com consultor <span>&rarr;</span>';
    }
}

function applyFacultyOverrides() {
    const facultyData = [
        {
            name: 'Sandro Elias',
            module: 'A Nova Geração do Agro e o Papel do Sucessor',
            bio: 'Sócio e Diretor da Safras & Cifras e Educasafras. Especialista em Gestão de Empresas pela Harvard (USA). Consultor em Planejamento Sucessório, Tributação e Governança há mais de 20 anos.'
        },
        {
            name: 'Alessandra Braga',
            module: 'Holding Rural: Gestão, Sociedade e Sucessão',
            bio: 'Advogada, formada pela PUC Goiás, especialista em Direito Empresarial pelo Instituto Damasio e Gestão Patrimonial pelo Insper. Coordenadora Regional da Safras & Cifras.'
        },
        {
            name: 'Augusto Moura',
            module: 'Reforma Tributária no Agro',
            bio: 'Sócio Consultor da Safras & Cifras. Advogado Tributarista com experiência em implantação de estruturas de organização e planejamento tributário com ênfase no agronegócio.'
        },
        {
            name: 'Vinícius Kaefer',
            module: 'Gestão Financeira Estratégica na Atividade Rural',
            bio: 'Engenheiro de Produção pela UFPEL, com especialização em Finanças. Consultor da Safras & Cifras, responsável pelo setor de Gestão Econômica e Financeira.'
        },
        {
            name: 'Tais Leivas',
            module: 'Gestão e Governança em Empresas Rurais Familiares',
            bio: 'Psicóloga, sócia e consultora de Governança e Sucessão na Safras & Cifras. Especialista Educasafras.'
        }
    ];

    document.querySelectorAll('.faculty-card').forEach((card) => {
        const nameEl = card.querySelector('h3');
        const topicEl = card.querySelector('.faculty-topic');
        const bioEl = card.querySelector('.faculty-bio p');

        if (!nameEl || !topicEl || !bioEl) {
            return;
        }

        const match = facultyData.find((item) => item.name === nameEl.textContent.trim());
        if (!match) {
            return;
        }

        topicEl.textContent = match.module;
        bioEl.textContent = match.bio;
    });
}

function initContentOverrides() {
    applyCurriculumOverrides();
    applyFAQOverrides();
    applyFacultyOverrides();
    repositionPointsRescueCard();
    const heroCopy = document.querySelector('.hero-copy > p');
    if (heroCopy) {
        heroCopy.innerHTML = '<strong>70% das propriedades rurais não chegam à próxima geração.</strong> Formação que nasce para proteger décadas de trabalho, preservar o patrimônio e garantir continuidade ao legado familiar.';
    }

    const heroProofItems = document.querySelectorAll('.hero-proof-item');
    if (heroProofItems[1]) {
        heroProofItems[1].classList.add('hero-proof-item-edition');
        const proofValue = heroProofItems[1].querySelector('strong');
        const proofLabel = heroProofItems[1].querySelector('span');
        if (proofValue) {
            proofValue.textContent = '9ª';
        }
        if (proofLabel) {
            proofLabel.textContent = 'Edição Consecutiva';
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
    const facultyData = {
        'Sandro Elias': {
            module: 'A Nova Geração do Agro e o Papel do Sucessor',
            bio: 'Sócio e Diretor da Safras & Cifras e Educasafras. Especialista em Gestão de Empresas pela Harvard (USA). Consultor em Planejamento Sucessório, Tributação e Governança há mais de 20 anos.'
        },
        'Alessandra Braga': {
            module: 'Holding Rural: Gestão, Sociedade e Sucessão',
            bio: 'Advogada, formada pela PUC Goiás, especialista em Direito Empresarial pelo Instituto Damasio e Gestão Patrimonial pelo Insper. Coordenadora Regional da Safras & Cifras.'
        },
        'Augusto Moura': {
            module: 'Reforma Tributária no Agro',
            bio: 'Sócio Consultor da Safras & Cifras. Advogado Tributarista com experiência em implantação de estruturas de organização e planejamento tributário com ênfase no agronegócio.'
        },
        'Vinícius Kaefer': {
            module: 'Gestão Financeira Estratégica na Atividade Rural',
            bio: 'Engenheiro de Produção pela UFPEL, com especialização em Finanças. Consultor da Safras & Cifras, responsável pelo setor de Gestão Econômica e Financeira.'
        },
        'Tais Leivas': {
            module: 'Gestão e Governança em Empresas Rurais Familiares',
            bio: 'Psicóloga, sócia e consultora de Governança e Sucessão na Safras & Cifras. Especialista Educasafras.'
        }
    };

    document.querySelectorAll('.faculty-card').forEach((card) => {
        const trigger = card.querySelector('.faculty-toggle');
        const bio = card.querySelector('.faculty-bio');
        const nameEl = card.querySelector('h3');
        const topicEl = card.querySelector('.faculty-topic');
        const bioText = card.querySelector('.faculty-bio p');

        if (!trigger || !bio || !nameEl || !topicEl || !bioText) {
            return;
        }

        const content = facultyData[nameEl.textContent.trim()];
        if (content) {
            topicEl.textContent = content.module;
            bioText.textContent = content.bio;
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

    const isMobileViewport = window.matchMedia('(max-width: 767px)').matches;
    const allSlides = Array.from(slideshow.querySelectorAll('.hero-bg-slide'));
    const slides = allSlides.filter((slide) => !(isMobileViewport && slide.dataset.hideMobile === 'true'));
    const scheduleHydration = window.requestIdleCallback
        ? (callback, timeout = 1200) => window.requestIdleCallback(callback, { timeout })
        : (callback) => window.setTimeout(callback, 220);

    if (isMobileViewport) {
        allSlides.forEach((slide) => {
            if (slide.dataset.hideMobile === 'true') {
                slide.classList.remove('is-active');
                slide.hidden = true;
            }
        });
    }

    if (!slides.length) {
        return;
    }

    let activeIndex = 0;

    const hydrateSlide = (slide) => {
        if (!slide || slide.dataset.loaded === 'true') {
            return;
        }

        const picture = slide.querySelector('picture');
        const image = picture ? picture.querySelector('img') : null;
        if (!picture || !image) {
            return;
        }

        const [mobileWebpSource, desktopWebpSource, mobileJpgSource] = picture.querySelectorAll('source');
        if (mobileWebpSource) {
            mobileWebpSource.srcset = picture.dataset.mobileWebp || '';
        }
        if (desktopWebpSource) {
            desktopWebpSource.srcset = picture.dataset.desktopWebp || '';
        }
        if (mobileJpgSource) {
            mobileJpgSource.srcset = picture.dataset.mobileJpg || '';
        }

        image.src = picture.dataset.desktopJpg || HERO_SLIDE_PLACEHOLDER;
        image.loading = 'eager';
        slide.dataset.loaded = 'true';
        slide.classList.add('is-ready');
    };

    const queueHydration = (slide, timeout) => {
        if (!slide || slide.dataset.loaded === 'true') {
            return;
        }

        scheduleHydration(() => hydrateSlide(slide), timeout);
    };

    const setActiveSlide = (index) => {
        activeIndex = (index + slides.length) % slides.length;
        hydrateSlide(slides[activeIndex]);
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('is-active', slideIndex === activeIndex);
        });

        queueHydration(slides[(activeIndex + 1) % slides.length], 900);
    };

    slides.forEach((slide) => {
        if (slide.dataset.loaded === 'true') {
            slide.classList.add('is-ready');
            const image = slide.querySelector('img');
            if (image && image.src === HERO_SLIDE_PLACEHOLDER) {
                image.removeAttribute('src');
            }
        }
    });

    setActiveSlide(0);
    queueHydration(slides[1], 600);
    window.setInterval(() => {
        setActiveSlide(activeIndex + 1);
    }, 4200);
}
