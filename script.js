/* ── Translations ───────────────────────────────────────── */
const translations = {
  en: {
    'nav-about': 'About', 'nav-skills': 'Skills', 'nav-projects': 'Projects',
    'nav-experience': 'Experience', 'nav-contact': 'Contact',

    'hero-eyebrow': 'Portfolio',
    'hero-title': 'Web &amp; Software Developer &nbsp;·&nbsp; Database Specialist &nbsp;·&nbsp; Digital Strategist',
    'hero-bio': 'A detail-driven developer with 5+ years of experience crafting full-stack applications, digital strategies, and data solutions. Analytical. Precise. Passionate about building things that work beautifully.',

    'about-tag': 'Who I am', 'about-title': 'About<br>Me',
    'about-quote': 'Building things that work beautifully — from database architectures to corporate websites.',
    'about-text-1': 'My background spans software development, database administration, web development, and digital marketing — giving me a rare full-picture perspective on how technology and communication intersect.',
    'about-text-2': "I bring analytical precision to every project, whether it's designing scalable schemas, crafting pixel-perfect interfaces, or growing a brand's digital presence from scratch.",

    'ac-edu-lbl': 'Education',
    'ac-edu-val': 'Adv. Diploma, Computer Science<br>National Diploma, Software Development<br><em style="font-size:14px;color:var(--ink3)">Tshwane University of Technology</em>',
    'ac-lang-lbl': 'Languages', 'ac-lang-val': 'English — Fluent<br>French — Fluent',
    'ac-loc-lbl': 'Based in',
    'ac-loc-val': 'Bryanston, Johannesburg<br>South Africa<br><em style="font-size:14px;color:var(--ink3)">Open to remote &amp; relocation</em>',
    'ac-str-lbl': 'Core strengths',
    'ac-str-val': 'Agile / SDLC &nbsp;·&nbsp; Problem solving<br>Team collaboration<br>Data security &amp; compliance',

    'skills-tag': 'What I know', 'skills-title': 'Skills',
    'sg-lang': 'Languages', 'sg-fw': 'Frameworks',
    'sg-db': 'Databases &amp; Cloud', 'sg-analytics': 'Analytics &amp; Digital',

    'projects-tag': 'What I have built', 'projects-title': 'Projects',
    'proj-gelux-desc': 'Corporate website built end-to-end — SEO optimisation, content strategy, and digital presence management.',
    'proj-cake-desc': 'Elegant e-commerce website for a bespoke cake brand — visual-first design with seamless customer enquiries.',
    'proj-tt-desc': 'Sports brand website with product listings and optimised performance for mobile and desktop.',
    'proj-split-desc': 'Shared living platform connecting people looking for rooms and housemates with smart listing features.',
    'proj-lave-desc': 'Home décor brand site with elegant visuals and a smooth shopping experience for design-conscious audiences.',
    'proj-izozo-desc': 'Comparison and marketplace platform enabling users to browse and connect with service providers.',
    'proj-visit': 'Visit site',

    'exp-tag': 'What I have done', 'exp-title': 'Experience',
    'job1-period': 'Sep 2025 – Present',
    'job1-role': 'Webmaster &amp; Digital Content Specialist',
    'job1-co': 'Gelux SARL &nbsp;·&nbsp; Lubumbashi, DRC',
    'job1-b1': 'Led end-to-end development and management of corporate website',
    'job1-b2': 'Built company digital presence across social platforms from scratch',
    'job1-b3': 'Executed content strategy — blog &amp; social — growing audience engagement',
    'job1-b4': 'Optimised for SEO and UX, improving rankings and site performance',
    'job1-b5': 'Produced strategic reports from web and social analytics',
    'job2-period': 'Jan 2024 – Dec 2024',
    'job2-role': 'Database Administrator',
    'job2-co': 'MG Optimal Systems &nbsp;·&nbsp; Pretoria, SA',
    'job2-b1': 'Administered production databases maintaining high availability',
    'job2-b2': 'Designed schemas and data models for evolving application requirements',
    'job2-b3': 'Improved query performance through index tuning and health monitoring',
    'job3-period': 'Jul 2022 – Jul 2023',
    'job3-role': 'Web Developer',
    'job3-co': 'BMB Studio &nbsp;·&nbsp; Pretoria, SA',
    'job3-b1': 'Built data-driven applications using PHP, MySQL, and JavaScript',
    'job3-b2': 'Integrated and maintained RESTful APIs',
    'job3-b3': 'Delivered Power BI dashboards for business decision support',
    'job4-period': 'Jan 2022 – Jun 2022',
    'job4-role': 'Software Developer',
    'job4-co': 'Junixia &nbsp;·&nbsp; Pretoria, SA',
    'job4-b1': 'Developed database structures using SQL, Java, and Python',
    'job4-b2': 'Contributed to data analytics and insights extraction',
    'job5-period': 'Feb 2021 – Dec 2021',
    'job5-role': 'Web &amp; Software Developer',
    'job5-co': 'Spiral8 Studio &nbsp;·&nbsp; Pretoria, SA',
    'job5-b1': 'Designed Power BI &amp; MySQL dashboards for real-time BI',
    'job5-b2': 'Built and optimised large-scale database solutions',
    'job5-b3': 'Collaborated cross-functionally on system efficiency improvements',

    'contact-tag': 'Get in touch', 'contact-title': 'Contact',
    'cc-email-lbl': 'Email', 'cc-phone-lbl': 'Phone',
    'cc-linkedin-lbl': 'LinkedIn', 'cc-github-lbl': 'GitHub',
    'ref-tag': 'References',
    'rc-rene-role': 'Chairman — GELUX SARL',
    'rc-lindikhaya-role': 'Managing Director — Spiral8 Studio',
    'rc-jean-role': 'Technical Director — Junixia',
    'rc-benny-role': 'Managing Director — BMBStudio',
    'rc-giovanni-role': 'Managing Director — MG Optimal Systems',
    'footer-sub': 'Web &amp; Software Developer &nbsp;<span>·</span>&nbsp; Bryanston, Johannesburg',
  },

  fr: {
    'nav-about': 'À propos', 'nav-skills': 'Compétences', 'nav-projects': 'Projets',
    'nav-experience': 'Expérience', 'nav-contact': 'Contact',

    'hero-eyebrow': 'Portfolio',
    'hero-title': 'Développeuse Web &amp; Logiciel &nbsp;·&nbsp; Spécialiste Bases de Données &nbsp;·&nbsp; Stratège Numérique',
    'hero-bio': "Développeuse méticuleuse avec plus de 5 ans d'expérience dans la création d'applications full-stack, de stratégies numériques et de solutions de données. Analytique. Précise. Passionnée par la création de solutions qui fonctionnent parfaitement.",

    'about-tag': 'Qui je suis', 'about-title': 'À propos<br>de moi',
    'about-quote': "Créer des solutions qui fonctionnent parfaitement — des architectures de bases de données aux sites web d'entreprise.",
    'about-text-1': "Mon parcours couvre le développement logiciel, l'administration de bases de données, le développement web et le marketing numérique — me conférant une perspective globale rare sur l'intersection entre technologie et communication.",
    'about-text-2': "J'apporte une précision analytique à chaque projet, qu'il s'agisse de concevoir des schémas évolutifs, de créer des interfaces parfaites au pixel près, ou de développer la présence numérique d'une marque de zéro.",

    'ac-edu-lbl': 'Formation',
    'ac-edu-val': 'Diplôme Avancé, Informatique<br>Diplôme National, Développement Logiciel<br><em style="font-size:14px;color:var(--ink3)">Université Technologique de Tshwane</em>',
    'ac-lang-lbl': 'Langues', 'ac-lang-val': 'Anglais — Courant<br>Français — Courant',
    'ac-loc-lbl': 'Basée à',
    'ac-loc-val': 'Bryanston, Johannesburg<br>Afrique du Sud<br><em style="font-size:14px;color:var(--ink3)">Disponible à distance &amp; relocalisation</em>',
    'ac-str-lbl': 'Points forts',
    'ac-str-val': 'Agile / SDLC &nbsp;·&nbsp; Résolution de problèmes<br>Collaboration en équipe<br>Sécurité des données &amp; conformité',

    'skills-tag': 'Ce que je maîtrise', 'skills-title': 'Compétences',
    'sg-lang': 'Langages', 'sg-fw': 'Frameworks',
    'sg-db': 'Bases de données &amp; Cloud', 'sg-analytics': 'Analytique &amp; Numérique',

    'projects-tag': "Ce que j'ai créé", 'projects-title': 'Projets',
    'proj-gelux-desc': "Site web d'entreprise développé de A à Z — optimisation SEO, stratégie de contenu et gestion de la présence numérique.",
    'proj-cake-desc': "Site e-commerce élégant pour une marque de gâteaux sur mesure — design visuel prioritaire avec une gestion fluide des demandes clients.",
    'proj-tt-desc': "Site web de marque sportive avec listings de produits et performances optimisées pour mobile et bureau.",
    'proj-split-desc': "Plateforme de colocation mettant en relation des personnes à la recherche de chambres et de colocataires avec des fonctionnalités de listing intelligentes.",
    'proj-lave-desc': "Site de marque de décoration intérieure avec des visuels élégants et une expérience d'achat fluide pour un public averti en design.",
    'proj-izozo-desc': "Plateforme de comparaison et marketplace permettant aux utilisateurs de parcourir et de se connecter avec des prestataires de services.",
    'proj-visit': 'Voir le site',

    'exp-tag': 'Mon parcours', 'exp-title': 'Expérience',
    'job1-period': 'Sep. 2025 – Présent',
    'job1-role': 'Webmaster &amp; Spécialiste en Contenu Numérique',
    'job1-co': 'Gelux SARL &nbsp;·&nbsp; Lubumbashi, RDC',
    'job1-b1': "Développement et gestion intégraux du site web d'entreprise",
    'job1-b2': "Construction de la présence numérique de l'entreprise sur les réseaux sociaux de zéro",
    'job1-b3': "Exécution de la stratégie de contenu — blog &amp; réseaux sociaux — augmentant l'engagement du public",
    'job1-b4': "Optimisation du SEO et de l'UX, améliorant le classement et la performance du site",
    'job1-b5': "Production de rapports stratégiques à partir des analyses web et des réseaux sociaux",
    'job2-period': 'Jan. 2024 – Déc. 2024',
    'job2-role': 'Administratrice de Bases de Données',
    'job2-co': 'MG Optimal Systems &nbsp;·&nbsp; Pretoria, Afrique du Sud',
    'job2-b1': "Administration des bases de données de production avec maintien d'une haute disponibilité",
    'job2-b2': "Conception de schémas et de modèles de données pour des besoins applicatifs évolutifs",
    'job2-b3': "Amélioration des performances des requêtes par optimisation des index et surveillance de l'état",
    'job3-period': 'Juil. 2022 – Juil. 2023',
    'job3-role': 'Développeuse Web',
    'job3-co': 'BMB Studio &nbsp;·&nbsp; Pretoria, Afrique du Sud',
    'job3-b1': "Développement d'applications orientées données avec PHP, MySQL et JavaScript",
    'job3-b2': "Intégration et maintenance d'API RESTful",
    'job3-b3': "Livraison de tableaux de bord Power BI pour l'aide à la décision business",
    'job4-period': 'Jan. 2022 – Juin 2022',
    'job4-role': 'Développeuse Logiciel',
    'job4-co': 'Junixia &nbsp;·&nbsp; Pretoria, Afrique du Sud',
    'job4-b1': "Développement de structures de bases de données avec SQL, Java et Python",
    'job4-b2': "Contribution à l'analyse de données et à l'extraction d'insights",
    'job5-period': 'Fév. 2021 – Déc. 2021',
    'job5-role': 'Développeuse Web &amp; Logiciel',
    'job5-co': 'Spiral8 Studio &nbsp;·&nbsp; Pretoria, Afrique du Sud',
    'job5-b1': "Conception de tableaux de bord Power BI &amp; MySQL pour la BI en temps réel",
    'job5-b2': "Développement et optimisation de solutions de bases de données à grande échelle",
    'job5-b3': "Collaboration transversale sur les améliorations de l'efficacité des systèmes",

    'contact-tag': 'Me contacter', 'contact-title': 'Contact',
    'cc-email-lbl': 'E-mail', 'cc-phone-lbl': 'Téléphone',
    'cc-linkedin-lbl': 'LinkedIn', 'cc-github-lbl': 'GitHub',
    'ref-tag': 'Références',
    'rc-rene-role': 'Président — GELUX SARL',
    'rc-lindikhaya-role': 'Directeur Général — Spiral8 Studio',
    'rc-jean-role': 'Directeur Technique — Junixia',
    'rc-benny-role': 'Directeur Général — BMBStudio',
    'rc-giovanni-role': 'Directeur Général — MG Optimal Systems',
    'footer-sub': 'Développeuse Web &amp; Logiciel &nbsp;<span>·</span>&nbsp; Bryanston, Johannesburg',
  }
};

/* ── Language switch ────────────────────────────────────── */
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  const btn = document.getElementById('lang-btn');
  btn.textContent = lang === 'en' ? 'FR' : 'EN';
  localStorage.setItem('lang', lang);
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'fr' : 'en');
}

function detectLanguage() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const browser = (navigator.language || 'en').toLowerCase();
  return browser.startsWith('fr') ? 'fr' : 'en';
}

/* ── Nav shadow on scroll ───────────────────────────────── */
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ── Scroll reveal ──────────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4 * 0.09) + 's';
  observer.observe(el);
});

/* ── Daisy petal spin ───────────────────────────────────── */
const DURS = [14, 9, 7, 16, 11];
document.querySelectorAll('.hero-deco g[transform^="translate"]').forEach((g, i) => {
  const anim = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
  anim.setAttribute('attributeName', 'transform');
  anim.setAttribute('attributeType', 'XML');
  anim.setAttribute('type', 'rotate');
  anim.setAttribute('from', '0');
  anim.setAttribute('to', i % 2 === 0 ? '360' : '-360');
  anim.setAttribute('dur', DURS[i % DURS.length] + 's');
  anim.setAttribute('repeatCount', 'indefinite');
  anim.setAttribute('additive', 'sum');
  g.appendChild(anim);
});

/* ── Init ───────────────────────────────────────────────── */
setLanguage(detectLanguage());
