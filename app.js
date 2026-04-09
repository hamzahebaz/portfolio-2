const currentYear = new Date().getFullYear();

// Translation Dictionary
const translations = {
    en: {
        dir: 'ltr',
        nav: {
            about: "About", expertise: "Expertise", projects: "Projects", contact: "Contact"
        },
        hero: {
            badge: "Available for Work",
            headline: "Digital Marketing & Social Media Manager | SEO Specialist",
            subheadline: "Transforming Travel Brands with Data-Driven Strategies & Engaging Content",
            cta1: "View My Work", cta2: "Get In Touch"
        },
        about: {
            title: "About Me",
            content: "Results-driven Digital Marketing professional with specialized expertise in social media management, SEO optimization, and content creation. Experienced in developing and executing integrated digital marketing strategies for travel and tourism brands. Proficient in Google Analytics 4, WordPress, and automation tools. Proven ability to build digital presence from scratch, manage multi-platform social media campaigns, and drive measurable business results through data-driven strategies.",
            diff1_title: "Data-Driven Strategist:", diff1_desc: "Leverage analytics to optimize every campaign",
            diff2_title: "Travel Industry Expert:", diff2_desc: "Deep knowledge of tourism marketing dynamics",
            diff3_title: "Full-Stack Marketer:", diff3_desc: "From SEO to social media to email marketing",
            stat1: "Years of Experience", stat2: "Projects Completed", stat3: "Brands Helped", stat4: "Skills Mastered",
            btn: "Download Resume"
        },
        expertise: { title: "My Expertise" },
        skills: { title: "Technical Skills & Proficiency Levels", tools: "Additional Tools" },
        projects: { title: "Featured Projects & Case Studies" },
        cta: {
            title: "Ready to Grow Your Digital Presence?",
            subtitle: "Let's work together to create impactful marketing strategies",
            btn1: "Start Your Project", btn2: "Download Resume", location: "Ouarzazate, Morocco"
        },
        footer: { about: "About", projects: "Projects", contact: "Contact", copyright: `© ${currentYear} Hamza Hebaz. All rights reserved.` }
    },
    fr: {
        dir: 'ltr',
        nav: {
            about: "À Propos", expertise: "Compétences", projects: "Projets", contact: "Contact"
        },
        hero: {
            badge: "Disponible pour travailler",
            headline: "Gestionnaire de Marketing Numérique et Réseaux Sociaux | Spécialiste SEO",
            subheadline: "Transformer les Marques de Voyage avec des Stratégies Basées sur les Données et du Contenu Engageant",
            cta1: "Voir Mon Travail", cta2: "Me Contacter"
        },
        about: {
            title: "À Propos de Moi",
            content: "Professionnel du marketing numérique orienté résultats avec expertise spécialisée en gestion des réseaux sociaux, optimisation SEO et création de contenu. Expérience dans le développement et l'exécution de stratégies de marketing numérique intégrées pour les marques touristiques et de voyage. Maîtrise de Google Analytics 4, WordPress et des outils d'automatisation. Capacité prouvée à développer une présence numérique à partir de zéro, gérer des campagnes multi-plateformes et générer des résultats commerciaux mesurables grâce à des stratégies basées sur les données.",
            diff1_title: "Stratégiste Basé sur les Données:", diff1_desc: "Exploiter les analyses pour optimiser chaque campagne",
            diff2_title: "Expert en Industrie du Tourisme:", diff2_desc: "Connaissance approfondie de la dynamique du marketing touristique",
            diff3_title: "Marketeur Polyvalent:", diff3_desc: "Du SEO aux réseaux sociaux au marketing par email",
            stat1: "Années d'Expérience", stat2: "Projets Complétés", stat3: "Marques Aidées", stat4: "Compétences Maîtrisées",
            btn: "Télécharger le CV"
        },
        expertise: { title: "Mes Compétences" },
        skills: { title: "Compétences Techniques et Maîtrise", tools: "Outils Supplémentaires" },
        projects: { title: "Projets en Vedette et Études de Cas" },
        cta: {
            title: "Prêt à Développer Votre Présence Numérique ?",
            subtitle: "Travaillons ensemble pour créer des stratégies marketing percutantes",
            btn1: "Commencer Votre Projet", btn2: "Télécharger le CV", location: "Ouarzazate, Maroc"
        },
        footer: { about: "À Propos", projects: "Projets", contact: "Contact", copyright: `© ${currentYear} Hamza Hebaz. Tous droits réservés.` }
    },
    ar: {
        dir: 'rtl',
        nav: {
            about: "حول", expertise: "خبراتي", projects: "مشاريع", contact: "اتصال"
        },
        hero: {
            badge: "متاح للعمل",
            headline: "مدير التسويق الرقمي ومدير وسائل التواصل الاجتماعي | متخصص في تحسين محركات البحث",
            subheadline: "تحويل علامات السفر والسياحة باستخدام استراتيجيات قائمة على البيانات ومحتوى جذاب",
            cta1: "عرض أعمالي", cta2: "الاتصال بي"
        },
        about: {
            title: "معلومات عني",
            content: "متخصص تسويق رقمي موجه نحو النتائج مع خبرة متخصصة في إدارة وسائل التواصل الاجتماعي وتحسين محركات البحث وإنشاء المحتوى. لديّ خبرة في تطوير وتنفيذ استراتيجيات تسويق رقمية متكاملة لعلامات السفر والسياحة. أتقن Google Analytics 4 و WordPress وأدوات الأتمتة. القدرة المثبتة على بناء حضور رقمي من الصفر وإدارة حملات وسائل التواصل الاجتماعي على منصات متعددة وتحقيق نتائج تجارية قابلة للقياس من خلال استراتيجيات قائمة على البيانات.",
            diff1_title: "استراتيجي قائم على البيانات:", diff1_desc: "الاستفادة من التحليلات لتحسين كل حملة",
            diff2_title: "خبير في صناعة السياحة:", diff2_desc: "معرفة عميقة بديناميكيات تسويق السياحة",
            diff3_title: "مسوق شامل:", diff3_desc: "من SEO إلى وسائل التواصل الاجتماعي إلى التسويق عبر البريد الإلكتروني",
            stat1: "سنوات الخبرة", stat2: "المشاريع المكتملة", stat3: "العلامات التجارية المساعدة", stat4: "المهارات المتقنة",
            btn: "تحميل السيرة الذاتية"
        },
        expertise: { title: "خبراتي" },
        skills: { title: "المهارات التقنية والإتقان", tools: "أدوات إضافية" },
        projects: { title: "المشاريع المميزة ودراسات الحالة" },
        cta: {
            title: "هل أنت مستعد لتنمية وجودك الرقمي؟",
            subtitle: "دعنا نعمل معاً لإنشاء استراتيجيات تسويق تأثيرية",
            btn1: "ابدأ مشروعك", btn2: "تحميل السيرة الذاتية", location: "ورزازات، المغرب"
        },
        footer: { about: "حول", projects: "مشاريع", contact: "اتصال", copyright: `© ${currentYear} حمزة هباز. جميع الحقوق محفوظة.` }
    }
};

// Data Structures for dynamic content
const expertiseData = {
    en: [
        { icon: "fa-hashtag", title: "Social Media Management", desc: "Facebook, Instagram, Pinterest management & content strategy", tags: ["Facebook", "Instagram", "Pinterest", "Community"] },
        { icon: "fa-magnifying-glass-chart", title: "SEO Optimization", desc: "Technical & on-page SEO, keyword research, performance tracking", tags: ["Rank Math", "GA4", "Search Console"] },
        { icon: "fa-pen-nib", title: "Content Creation", desc: "High-converting copywriting, visual content, blog optimization", tags: ["Copywriting", "Blog Strategy", "Design"] },
        { icon: "fa-envelope-open-text", title: "Email Marketing", desc: "Newsletter strategy, automation, conversion optimization", tags: ["Campaigns", "Automation", "Newsletters"] },
        { icon: "fa-wordpress", title: "Website Management", desc: "WordPress optimization, site design, user experience", tags: ["WordPress", "Web Design", "UX"] },
        { icon: "fa-chart-pie", title: "Analytics & Reporting", desc: "GA4, data analysis, performance measurement, ROI tracking", tags: ["GA4", "Data Analysis", "KPIs"] }
    ],
    fr: [
        { icon: "fa-hashtag", title: "Gestion des Réseaux Sociaux", desc: "Gestion Facebook, Instagram, Pinterest et stratégie de contenu", tags: ["Facebook", "Instagram", "Pinterest", "Communauté"] },
        { icon: "fa-magnifying-glass-chart", title: "Optimisation SEO", desc: "SEO technique et on-page, recherche de mots-clés, suivi des perf.", tags: ["Rank Math", "GA4", "Search Console"] },
        { icon: "fa-pen-nib", title: "Création de Contenu", desc: "Rédaction haute conversion, contenu visuel, optimisation de blog", tags: ["Rédaction", "Blog", "Design Visuel"] },
        { icon: "fa-envelope-open-text", title: "Email Marketing", desc: "Stratégie de newsletter, automatisation, optimisation de conversion", tags: ["Campagnes Email", "Automatisation"] },
        { icon: "fa-wordpress", title: "Gestion de Site Web", desc: "Optimisation WordPress, design de site, expérience utilisateur", tags: ["WordPress", "Design Web", "UX"] },
        { icon: "fa-chart-pie", title: "Analyses et Rapports", desc: "GA4, analyse de données, mesure des performances, suivi du ROI", tags: ["GA4", "Analyse", "KPI"] }
    ],
    ar: [
        { icon: "fa-hashtag", title: "إدارة وسائل التواصل الاجتماعي", desc: "إدارة Facebook و Instagram و Pinterest واستراتيجية المحتوى", tags: ["Facebook", "Instagram", "Pinterest", "المجتمع"] },
        { icon: "fa-magnifying-glass-chart", title: "تحسين محركات البحث", desc: "SEO الفني والمحلي، بحث الكلمات الرئيسية، تتبع الأداء", tags: ["Rank Math", "GA4", "Search Console"] },
        { icon: "fa-pen-nib", title: "إنشاء المحتوى", desc: "كتابة عالية التحويل، محتوى مرئي، تحسين المدونة", tags: ["الكتابة", "استراتيجية المدونة", "التصميم"] },
        { icon: "fa-envelope-open-text", title: "التسويق عبر البريد الإلكتروني", desc: "استراتيجية النشرة الإخبارية، الأتمتة، تحسين التحويل", tags: ["حملات البريد", "الأتمتة"] },
        { icon: "fa-wordpress", title: "إدارة موقع الويب", desc: "تحسين WordPress، تصميم الموقع، تجربة المستخدم", tags: ["WordPress", "تصميم الويب", "UX"] },
        { icon: "fa-chart-pie", title: "التحليلات والتقارير", desc: "GA4، تحليل البيانات، قياس الأداء، تتبع العائد على الاستثمار", tags: ["GA4", "تحليل البيانات", "KPI"] }
    ]
};

const skillsData = {
    en: [ {name: "Website Manager / WordPress", percent: 95}, {name: "SEO Optimization (Rank Math, GA4)", percent: 95}, {name: "Social Media Management", percent: 85}, {name: "Content Creation & Copywriting", percent: 80}, {name: "Email Marketing & Automation", percent: 75} ],
    fr: [ {name: "Gestionnaire de Site Web / WordPress", percent: 95}, {name: "Optimisation SEO (Rank Math, GA4)", percent: 95}, {name: "Gestion des Réseaux Sociaux", percent: 85}, {name: "Création de Contenu et Rédaction", percent: 80}, {name: "Email Marketing et Automatisation", percent: 75} ],
    ar: [ {name: "مدير الموقع / WordPress", percent: 95}, {name: "تحسين محركات البحث (Rank Math, GA4)", percent: 95}, {name: "إدارة وسائل التواصل الاجتماعي", percent: 85}, {name: "إنشاء المحتوى والكتابة", percent: 80}, {name: "التسويق عبر البريد الإلكتروني والأتمتة", percent: 75} ]
};

const projectsData = {
    en: [
        { title: "Discoverocco", cat: "Digital Strategy | SEO", desc: "Comprehensive digital marketing strategy for travel marketplace platform including multi-channel content campaigns, SEO optimization, and performance tracking.", feats: ["Increased organic traffic", "Multi-channel content campaigns"] },
        { title: "Morocco Travel", cat: "Web Design | SEO", desc: "Built and optimized comprehensive travel guide website with complete booking functionality, integrated email marketing systems, and keyword-targeted content.", feats: ["High-intent travel keywords", "Automated booking workflows"] },
        { title: "Private Tours Marrakech", cat: "Web Design | Local SEO", desc: "Designed custom travel website with advanced local SEO optimization, automated email inquiry system, and conversion-focused design principles.", feats: ["Top local search rankings", "Automated email inquiries"] },
        { title: "Morocco Trips", cat: "SEO | Digital Marketing", desc: "Comprehensive SEO optimization project for established travel agency including keyword strategy, technical SEO, and local search optimization.", feats: ["Significant traffic increase", "Enhanced local search presence"] }
    ],
    fr: [
        { title: "Discoverocco", cat: "Stratégie Numérique | SEO", desc: "Stratégie marketing numérique complète pour une plateforme de voyage comprenant des campagnes de contenu multicanales, optimisation SEO et suivi des performances.", feats: ["Augmentation du trafic organique", "Campagnes de contenu multicanales"] },
        { title: "Morocco Travel", cat: "Design Web | SEO", desc: "Création et optimisation d'un site de guide de voyage avec fonctionnalité de réservation complète, systèmes d'email marketing intégrés et contenu ciblé par mots-clés.", feats: ["Mots-clés de voyage à forte intention", "Flux de réservation automatisés"] },
        { title: "Private Tours Marrakech", cat: "Design Web | SEO Local", desc: "Conception d'un site de voyage sur mesure avec optimisation SEO locale avancée, système de demande par email automatisé et principes de design axés sur la conversion.", feats: ["Meilleurs classements de recherche locale", "Demandes par email automatisées"] },
        { title: "Morocco Trips", cat: "SEO | Marketing Numérique", desc: "Projet d'optimisation SEO complet pour une agence de voyage établie incluant stratégie de mots-clés, SEO technique et optimisation de recherche locale.", feats: ["Augmentation significative du trafic", "Présence de recherche locale améliorée"] }
    ],
    ar: [
        { title: "Discoverocco", cat: "استراتيجية رقمية | SEO", desc: "استراتيجية تسويق رقمية شاملة لمنصة سوق السفر بما في ذلك حملات محتوى متعددة القنوات وتحسين محركات البحث وتتبع الأداء.", feats: ["زيادة حركة المرور العضوية", "حملات محتوى متعددة القنوات"] },
        { title: "Morocco Travel", cat: "تصميم الويب | SEO", desc: "إنشاء وتحسين موقع دليل سفر شامل مع وظائف حجز كاملة وأنظمة تسويق عبر البريد الإلكتروني مدمجة ومحتوى مستهدف بالكلمات الرئيسية.", feats: ["كلمات سفر ذات نية عالية", "سير عمل الحجز الآلي"] },
        { title: "Private Tours Marrakech", cat: "تصميم الويب | SEO محلي", desc: "تصميم موقع سفر مخصص مع تحسين متقدم لمحركات البحث المحلية، ونظام استفسار تلقائي عبر البريد الإلكتروني، ومبادئ تصميم تركز على التحويل.", feats: ["أعلى تصنيفات البحث المحلي", "استفسارات بريد إلكتروني آلية"] },
        { title: "Morocco Trips", cat: "SEO | تسويق رقمي", desc: "مشروع تحسين شامل لمحركات البحث لوكالة سفر مرموقة بما في ذلك استراتيجية الكلمات الرئيسية، وتحسين محركات البحث الفني، وتحسين البحث المحلي.", feats: ["زيادة كبيرة في حركة المرور", "تحسين حضور البحث المحلي"] }
    ]
};

// State
let currentLang = localStorage.getItem('lang') || 'en';

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initLangSelector();
    setLanguage(currentLang);
    initScrollEffects();
    initCounters();
    initMobileMenu();
});

// Switcher UI
function initLangSelector() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
    });
    
    langOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const desktopNav = document.querySelector('.desktop-nav');
    
    if(mobileBtn && desktopNav) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopNav.classList.toggle('active');
            
            // Toggle icon
            const icon = mobileBtn.querySelector('i');
            if(desktopNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if(!desktopNav.contains(e.target) && desktopNav.classList.contains('active')) {
                desktopNav.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        desktopNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                desktopNav.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }
}

function setLanguage(lang) {
    if(!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Set Direction
    document.documentElement.setAttribute('dir', translations[lang].dir);
    document.documentElement.setAttribute('lang', lang);
    
    // Update active label
    const displayLang = lang === 'en' ? 'EN' : lang === 'fr' ? 'FR' : 'العربية';
    document.getElementById('currentLang').innerText = displayLang;
    
    // Update Static UI Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const path = el.getAttribute('data-i18n').split('.');
        let val = translations[lang];
        path.forEach(p => val = val[p]);
        if (val) el.innerHTML = val;
    });
    
    // Re-render dynamic sections
    renderExpertise(lang);
    renderSkills(lang);
    renderProjects(lang);
}

// Render dynamic sections
function renderExpertise(lang) {
    const container = document.querySelector('.expertise-grid');
    container.innerHTML = expertiseData[lang].map(item => `
        <div class="expertise-card">
            <div class="card-icon"><i class="fa-solid ${item.icon}"></i></div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <div class="tags">
                ${item.tags.map(t => `<span>${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderSkills(lang) {
    const container = document.getElementById('skills-bars-container');
    container.innerHTML = skillsData[lang].map((skill, index) => `
        <div class="skill-item">
            <div class="skill-info">
                <span>${skill.name}</span>
                <span>${skill.percent}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%" data-target="${skill.percent}"></div>
            </div>
        </div>
    `).join('');
    
    setTimeout(animateProgressBars, 100);
}

function renderProjects(lang) {
    const container = document.getElementById('projects-grid-container');
    const icons = ["fa-plane-departure", "fa-map-location-dot", "fa-mountain-sun", "fa-route"];
    container.innerHTML = projectsData[lang].map((item, i) => `
        <div class="project-card">
            <div class="project-img">
                <i class="fa-solid ${icons[i % icons.length]}"></i>
            </div>
            <div class="project-content">
                <span class="project-category">${item.cat}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <ul class="project-achievements">
                    ${item.feats.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Animations 
function animateProgressBars() {
    const bars = document.querySelectorAll('.skill-progress');
    bars.forEach(bar => {
        const target = bar.getAttribute('data-target');
        bar.style.width = target + '%';
    });
}

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animate = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(animate, 20);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Intersection observer to start animation when visible
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animate();
            observer.disconnect();
        }
    });
    
    if(counters.length > 0) {
        observer.observe(document.querySelector('.about-stats'));
    }
}

function initScrollEffects() {
    const header = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}
