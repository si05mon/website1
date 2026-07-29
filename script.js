// =========================
// TRANSLATIONS
// =========================

const translations = {
    de: {
        page: { title: 'Simon Digitals | Webdesign & Digitalisierung' },
        nav: { about: 'Über mich', services: 'Leistungen', process: 'Ablauf', projects: 'Projekte', contact: 'Kontakt' },
        hero: {
            badge: 'Freelance Developer · Südtirol',
            h1: 'Digitale Lösungen<br>für echte Erlebnisse.',
            p: 'Moderne Webseiten und digitale Systeme für Unternehmen, Vereine, Restaurants und Almhütten.',
            btnStart: 'Projekt starten',
            btnProjects: 'Projekte ansehen',
            available: 'Verfügbar für neue Projekte',
            availableSub: 'Antwort innerhalb 24h'
        },
        about: {
            h2: 'Über mich',
            lead: 'Ich bin Simon — Entwickler, Gestalter und digitaler Problemlöser aus Südtirol.',
            p1: 'Als 21-jähriger angehender Informatiker verbinde ich technisches Know-how mit kreativem Denken. Ich entwickle Webseiten, die nicht nur funktionieren, sondern Eindruck hinterlassen.',
            p2: 'Mein Fokus liegt auf lokalen Unternehmen in Südtirol — von Restaurants, Vereinen bis zum Familienbetrieb.',
            btn: 'Kennenlernen'
        },
        stat: { years: 'Jahre', projects: 'Projekte', studyVal: 'IT', study: 'Studium' },
        photo: { label: 'Foto folgt' },
        services: {
            h2: 'Meine Leistungen',
            s1: { h3: 'Webseiten',         p: 'Individuelle, moderne Webseiten — passend zu deiner Marke und deinen Kunden.' },
            s2: { h3: 'Redesigns',          p: 'Veraltete Webauftritte werden modernisiert — optisch und technisch auf dem neuesten Stand.' },
            s3: { h3: 'Automatisierungen',  p: 'Digitale Prozesse die Zeit sparen — von Workflows bis zu automatischen Benachrichtigungen.' },
            s4: { h3: 'Buchungssysteme',    p: 'Online-Reservierungen und individuelle Buchungslösungen für Gastro und Dienstleister.' },
            s5: { h3: 'Datenbanken',        p: 'Strukturierte Datenverwaltung für Anwendungen — sauber, sicher und skalierbar.' },
            s6: { h3: 'Software / Anwendungen', p: 'Software für tägliche Aufgaben und Geschäftsprozesse — Mobile Anwendungen für iOS und Android.' }
        },
        process: {
            h2: 'Wie ich arbeite',
            intro: 'Von der ersten Idee bis zum fertigen Produkt — ein klarer, transparenter Ablauf.',
            s1: { h3: 'Erstgespräch', p: 'Wir sprechen über dein Projekt, deine Ziele und Budget — unverbindlich und <b>kostenlos.</b>' },
            s2: { h3: 'Konzept',      p: 'Ich erstelle Struktur, Sitemap und erste Design-Ideen passend zu deinem Auftritt.' },
            s3: { h3: 'Entwicklung',  p: 'Deine Webseite wird gestaltet, programmiert und getestet — mit regelmäßigen Updates.' },
            s4: { h3: 'Feedback',     p: 'Ich präsentiere den aktuellen Stand und nehme dein Feedback entgegen.' },
            s5: { h3: 'Launch & Support', p: 'Nach finaler Freigabe geht alles live. Auch danach bin ich für Fragen erreichbar.' }
        },
        projects: {
            h2: 'Projekte',
            p1: { h3: 'Familienbetrieb Webseite', p: 'Moderne Webseite für eine Berghütte — mit Atmosphäre, Bilderwelt und Gästeerlebnis im Mittelpunkt.', tag: 'Webseite',       overlay: 'Webseite öffnen' },
            p2: { h3: 'Restaurant & Pizzeria', p: 'Digitale Präsentation eines Gastronomiebetriebs mit Menüansicht und Kontaktintegration.',             tag: 'Gastronomie',    overlay: 'Webseite öffnen' },
            p3: { h3: 'Aktuelles Projekt',     p: 'Eine weitere digitale Lösung befindet sich in Entwicklung — bald mehr dazu.',                         tag: 'In Entwicklung', overlay: 'Demnächst verfügbar' }
        },
        contact: {
            eyebrow: 'Kontakt',
            h2: 'Lass uns dein<br>Projekt starten.',
            p: 'Du hast eine Idee? Ich helfe dir, sie digital umzusetzen — schnell, modern und persönlich.',
            emailLabel: 'E-Mail', phoneLabel: 'Telefon',
            whatsappLabel: 'WhatsApp', whatsappValue: 'Nachricht senden',
            linkedinLabel: 'LinkedIn',   linkedinValue: 'Profil ansehen',
            locationLabel: 'Standort',   locationValue: 'Gargazon, Südtirol'
        },
        form: {
            nameLbl: 'Name',    namePh: 'Dein Name',
            emailLbl: 'E-Mail', emailPh: 'deine@email.com',
            msgLbl: 'Was planst du?', msgPh: 'Beschreib kurz dein Projekt...',
            btn: 'Nachricht senden',
            sending: 'Wird gesendet…', sent: '✓ Nachricht gesendet!',
            error: 'Fehler — bitte erneut versuchen', wait: 'Bitte warte einen Moment…'
        },
        footer: { imprint: 'Impressum', privacy: 'Datenschutz' },
        privacy: {
            title: 'Datenschutzerklärung',
            sub: 'Gemäß DSGVO (EU) 2016/679 und D.Lgs. 196/2003',
            s1: { h4: '1. Verantwortlicher', p: 'Simon Ohrwalder · 39010 Gargazon (BZ), Südtirol, Italien<br>E-Mail: simon05.freelancer@gmail.com · Tel.: +39 331 913 0098' },
            s2: { h4: '2. Erhobene Daten', p: 'Diese Website erhebt ausschließlich Daten, die Sie aktiv über das Kontaktformular übermitteln: Name, E-Mail-Adresse und Ihre Nachricht. Es werden keine weiteren personenbezogenen Daten erhoben.' },
            s3: { h4: '3. Zweck & Rechtsgrundlage', p: 'Die Daten dienen ausschließlich der Bearbeitung Ihrer Kontaktanfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO sowie lit. f DSGVO. Die Daten werden nicht an Dritte weitergegeben oder für Werbezwecke genutzt.' },
            s4: { h4: '4. Drittanbieter – EmailJS', p: 'Zur technischen Übermittlung von Kontaktnachrichten wird <b>EmailJS</b> (EmailJS Ltd., London, UK) eingesetzt. Ihre Daten (Name, E-Mail, Nachricht) werden dabei an EmailJS-Server übertragen. Weitere Informationen: <a href="https://www.emailjs.com/legal/privacy-policy" target="_blank" rel="noopener" style="color:#6d28d9">emailjs.com/legal/privacy-policy</a>' },
            s5: { h4: '5. Speicherdauer', p: 'Ihre Daten werden nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist, maximal 6 Monate nach Abschluss der Kommunikation.' },
            s6: { h4: '6. Keine Cookies – Kein Tracking', p: 'Diese Website verwendet keine Cookies, kein Google Analytics und keine sonstigen Tracking- oder Analyse-Technologien. Es werden keine Nutzerprofile erstellt.' },
            s7: { h4: '7. Ihre Rechte', p: 'Sie haben das Recht auf: Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Kontakt: simon05.freelancer@gmail.com' },
            s8: { h4: '8. Beschwerderecht', p: 'Sie können sich bei der zuständigen Datenschutzbehörde beschweren. In Italien: <b>Garante per la protezione dei dati personali</b> — <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener" style="color:#6d28d9">garanteprivacy.it</a>' }
        }
    },

    it: {
        page: { title: 'Simon Digitals | Web Design & Digitalizzazione' },
        nav: { about: 'Chi sono', services: 'Servizi', process: 'Processo', projects: 'Progetti', contact: 'Contatto' },
        hero: {
            badge: 'Sviluppatore Freelance · Alto Adige',
            h1: 'Soluzioni digitali<br>per esperienze reali.',
            p: 'Siti web moderni e sistemi digitali per ristoranti, rifugi, associazioni e aziende.',
            btnStart: 'Inizia un progetto',
            btnProjects: 'Guarda i progetti',
            available: 'Disponibile per nuovi progetti',
            availableSub: 'Risposta entro 24h'
        },
        about: {
            h2: 'Chi sono',
            lead: 'Sono Simon — sviluppatore, designer e problem solver digitale di Gargazzone.',
            p1: 'Come informatico di 21 anni, combino competenze tecniche con creatività. Sviluppo siti web che non solo funzionano, ma lasciano un\'impressione duratura.',
            p2: 'Il mio focus sono le aziende locali in Alto Adige — dal rifugio alpino all\'impresa familiare.',
            btn: 'Conosciamoci'
        },
        stat: { years: 'Anni', projects: 'Progetti', studyVal: 'IT', study: 'Studio' },
        photo: { label: 'Foto in arrivo' },
        services: {
            h2: 'I miei servizi',
            s1: { h3: 'Siti web',            p: 'Siti web individuali e moderni — adatti al tuo brand e ai tuoi clienti.' },
            s2: { h3: 'Redesign',             p: 'I vecchi siti vengono modernizzati — visivamente e tecnicamente aggiornati.' },
            s3: { h3: 'Automazioni',          p: 'Processi digitali che fanno risparmiare tempo — dai workflow alle notifiche automatiche.' },
            s4: { h3: 'Sistemi di prenotazione', p: 'Prenotazioni online e soluzioni personalizzate per ristorazione e servizi.' },
            s5: { h3: 'Database',             p: 'Gestione strutturata dei dati per applicazioni — pulita, sicura e scalabile.' },
            s6: { h3: 'Software / Applicazioni', p: 'Software per attività quotidiane e processi aziendali — App mobile per iOS e Android.' }
        },
        process: {
            h2: 'Come lavoro',
            intro: 'Dalla prima idea al prodotto finito — un processo chiaro e trasparente.',
            s1: { h3: 'Primo colloquio', p: 'Parliamo del tuo progetto, degli obiettivi e del budget — senza impegno e <b>gratuitamente.</b>' },
            s2: { h3: 'Concept',         p: 'Creo struttura, sitemap e prime idee di design adatte alla tua presenza online.' },
            s3: { h3: 'Sviluppo',        p: 'Il tuo sito viene progettato, programmato e testato — con aggiornamenti regolari.' },
            s4: { h3: 'Feedback',        p: 'Presento lo stato attuale e raccolgo il tuo feedback.' },
            s5: { h3: 'Launch & Supporto', p: 'Dopo l\'approvazione finale, tutto va online. Anche dopo sono disponibile per domande.' }
        },
        projects: {
            h2: 'Progetti',
            p1: { h3: 'Sito Rifugio Alpino',    p: 'Sito web moderno per un rifugio di montagna — con atmosfera, immagini e focus sull\'ospite.', tag: 'Sito web',      overlay: 'Apri il sito' },
            p2: { h3: 'Ristorante & Pizzeria',   p: 'Presentazione digitale di un\'attività gastronomica con menu e integrazione contatti.',          tag: 'Gastronomia',   overlay: 'Apri il sito' },
            p3: { h3: 'Progetto corrente',        p: 'Un\'altra soluzione digitale è in sviluppo — presto disponibile.',                              tag: 'In sviluppo',   overlay: 'Disponibile a breve' }
        },
        contact: {
            eyebrow: 'Contatto',
            h2: 'Iniziamo il tuo<br>progetto.',
            p: 'Hai un\'idea? Ti aiuto a realizzarla digitalmente — veloce, moderno e personale.',
            emailLabel: 'E-Mail', phoneLabel: 'Telefono',
            whatsappLabel: 'WhatsApp', whatsappValue: 'Invia un messaggio',
            linkedinLabel: 'LinkedIn',  linkedinValue: 'Vedi profilo',
            locationLabel: 'Posizione', locationValue: 'Gargazzone, Alto Adige'
        },
        form: {
            nameLbl: 'Nome',    namePh: 'Il tuo nome',
            emailLbl: 'E-Mail', emailPh: 'tua@email.com',
            msgLbl: 'Cosa hai in mente?', msgPh: 'Descrivi brevemente il tuo progetto...',
            btn: 'Invia messaggio',
            sending: 'Invio in corso…', sent: '✓ Messaggio inviato!',
            error: 'Errore — riprova', wait: 'Aspetta un momento…'
        },
        footer: { imprint: 'Impressum', privacy: 'Privacy' },
        privacy: {
            title: 'Informativa sulla Privacy',
            sub: 'Ai sensi del GDPR (UE) 2016/679 e del D.Lgs. 196/2003',
            s1: { h4: '1. Titolare del trattamento', p: 'Simon Ohrwalder · 39010 Gargazzone (BZ), Alto Adige, Italia<br>E-Mail: simon05.freelancer@gmail.com · Tel.: +39 331 913 0098' },
            s2: { h4: '2. Dati raccolti', p: 'Il sito raccoglie esclusivamente i dati che Lei invia tramite il modulo di contatto: nome, indirizzo e-mail e messaggio. Non vengono raccolti altri dati personali.' },
            s3: { h4: '3. Finalità e base giuridica', p: 'I dati sono utilizzati esclusivamente per rispondere alla Sua richiesta di contatto. Base giuridica: Art. 6 par. 1 lett. b e f GDPR. I dati non vengono ceduti a terzi né utilizzati per scopi commerciali.' },
            s4: { h4: '4. Terze parti – EmailJS', p: 'Per l\'invio tecnico dei messaggi viene utilizzato <b>EmailJS</b> (EmailJS Ltd., Londra, UK). I dati inseriti (nome, e-mail, messaggio) vengono trasmessi ai server di EmailJS. Maggiori informazioni: <a href="https://www.emailjs.com/legal/privacy-policy" target="_blank" rel="noopener" style="color:#6d28d9">emailjs.com/legal/privacy-policy</a>' },
            s5: { h4: '5. Conservazione dei dati', p: 'I dati vengono conservati solo per il tempo necessario a gestire la richiesta, al massimo 6 mesi dalla conclusione della comunicazione.' },
            s6: { h4: '6. Nessun cookie – Nessun tracking', p: 'Il sito non utilizza cookie, Google Analytics né altre tecnologie di tracciamento o analisi. Non vengono creati profili utente.' },
            s7: { h4: '7. I Suoi diritti', p: 'Lei ha diritto di accesso (Art. 15 GDPR), rettifica (Art. 16), cancellazione (Art. 17), limitazione (Art. 18), portabilità (Art. 20) e opposizione (Art. 21). Contatto: simon05.freelancer@gmail.com' },
            s8: { h4: '8. Diritto di reclamo', p: 'Può presentare reclamo all\'autorità di controllo competente. In Italia: <b>Garante per la protezione dei dati personali</b> — <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener" style="color:#6d28d9">garanteprivacy.it</a>' }
        }
    },

    en: {
        page: { title: 'Simon Digitals | Web Design & Digitalisation' },
        nav: { about: 'About me', services: 'Services', process: 'Process', projects: 'Projects', contact: 'Contact' },
        hero: {
            badge: 'Freelance Developer · South Tyrol',
            h1: 'Digital solutions<br>for real experiences.',
            p: 'Modern websites and digital systems for restaurants, mountain huts, clubs and businesses.',
            btnStart: 'Start a project',
            btnProjects: 'View projects',
            available: 'Available for new projects',
            availableSub: 'Reply within 24h'
        },
        about: {
            h2: 'About me',
            lead: 'I\'m Simon — developer, designer and digital problem solver from Gargazon.',
            p1: 'As a 21-year-old IT student, I combine technical know-how with creative thinking. I build websites that don\'t just work, but leave a lasting impression.',
            p2: 'My focus is on local businesses in South Tyrol — from mountain huts to family businesses.',
            btn: 'Get in touch'
        },
        stat: { years: 'Years', projects: 'Projects', studyVal: 'IT', study: 'Degree' },
        photo: { label: 'Photo coming soon' },
        services: {
            h2: 'My services',
            s1: { h3: 'Websites',          p: 'Individual, modern websites — tailored to your brand and your customers.' },
            s2: { h3: 'Redesigns',         p: 'Outdated web presences get modernized — visually and technically up to date.' },
            s3: { h3: 'Automations',       p: 'Digital processes that save time — from workflows to automated notifications.' },
            s4: { h3: 'Booking systems',   p: 'Online reservations and individual booking solutions for hospitality and service providers.' },
            s5: { h3: 'Databases',         p: 'Structured data management for applications — clean, secure and scalable.' },
            s6: { h3: 'Software / Apps',   p: 'Software for daily tasks and business processes — Mobile apps for iOS and Android.' }
        },
        process: {
            h2: 'How I work',
            intro: 'From the first idea to the finished product — a clear, transparent process.',
            s1: { h3: 'Initial call',  p: 'We talk about your project, goals and budget — no obligation and <b>free of charge.</b>' },
            s2: { h3: 'Concept',       p: 'I create structure, sitemap and first design ideas suited to your brand.' },
            s3: { h3: 'Development',   p: 'Your website gets designed, programmed and tested — with regular updates.' },
            s4: { h3: 'Feedback',      p: 'I present the current status and gather your feedback.' },
            s5: { h3: 'Launch & Support', p: 'After final approval, everything goes live. I\'m also available for questions afterwards.' }
        },
        projects: {
            h2: 'Projects',
            p1: { h3: 'Mountain Hut Website',  p: 'Modern website for a mountain hut — focused on atmosphere, imagery and guest experience.', tag: 'Website',       overlay: 'Open website' },
            p2: { h3: 'Restaurant & Pizzeria',  p: 'Digital presentation of a restaurant with menu view and contact integration.',             tag: 'Gastronomy',    overlay: 'Open website' },
            p3: { h3: 'Current project',         p: 'Another digital solution is currently in development — more coming soon.',                tag: 'In development', overlay: 'Coming soon' }
        },
        contact: {
            eyebrow: 'Contact',
            h2: 'Let\'s start your<br>project.',
            p: 'Have an idea? I\'ll help you bring it to life digitally — fast, modern and personal.',
            emailLabel: 'Email', phoneLabel: 'Phone',
            whatsappLabel: 'WhatsApp', whatsappValue: 'Send a message',
            linkedinLabel: 'LinkedIn',   linkedinValue: 'View profile',
            locationLabel: 'Location',   locationValue: 'Gargazon, South Tyrol'
        },
        form: {
            nameLbl: 'Name',   namePh: 'Your name',
            emailLbl: 'Email', emailPh: 'your@email.com',
            msgLbl: 'What are you planning?', msgPh: 'Briefly describe your project...',
            btn: 'Send message',
            sending: 'Sending…', sent: '✓ Message sent!',
            error: 'Error — please try again', wait: 'Please wait a moment…'
        },
        footer: { imprint: 'Imprint', privacy: 'Privacy Policy' },
        privacy: {
            title: 'Privacy Policy',
            sub: 'Pursuant to GDPR (EU) 2016/679 and D.Lgs. 196/2003',
            s1: { h4: '1. Data Controller', p: 'Simon Ohrwalder · 39010 Gargazon (BZ), South Tyrol, Italy<br>Email: simon05.freelancer@gmail.com · Phone: +39 331 913 0098' },
            s2: { h4: '2. Data Collected', p: 'This website only collects data that you actively submit via the contact form: your name, email address and message. No other personal data is collected.' },
            s3: { h4: '3. Purpose & Legal Basis', p: 'Your data is used solely to respond to your contact request. Legal basis: Art. 6(1)(b) and (f) GDPR. Data is not shared with third parties or used for marketing purposes.' },
            s4: { h4: '4. Third Party – EmailJS', p: 'Contact messages are transmitted using <b>EmailJS</b> (EmailJS Ltd., London, UK). Your submitted data (name, email, message) is sent to EmailJS servers. More information: <a href="https://www.emailjs.com/legal/privacy-policy" target="_blank" rel="noopener" style="color:#6d28d9">emailjs.com/legal/privacy-policy</a>' },
            s5: { h4: '5. Retention Period', p: 'Your data is retained only as long as necessary to handle your request, and for a maximum of 6 months after the communication ends.' },
            s6: { h4: '6. No Cookies – No Tracking', p: 'This website uses no cookies, no Google Analytics, and no other tracking or analytics technologies. No user profiles are created.' },
            s7: { h4: '7. Your Rights', p: 'You have the right to: access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), data portability (Art. 20) and objection (Art. 21). Contact: simon05.freelancer@gmail.com' },
            s8: { h4: '8. Right to Lodge a Complaint', p: 'You have the right to lodge a complaint with the relevant supervisory authority. In Italy: <b>Garante per la protezione dei dati personali</b> — <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener" style="color:#6d28d9">garanteprivacy.it</a>' }
        }
    }
};


// =========================
// I18N ENGINE
// =========================

function getVal(obj, key) {
    return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function setLanguage(lang) {
    if (!translations[lang]) return;

    // active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const t = translations[lang];

    // textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = getVal(t, el.dataset.i18n);
        if (val !== undefined) el.textContent = val;
    });

    // innerHTML (for <br> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const val = getVal(t, el.dataset.i18nHtml);
        if (val !== undefined) el.innerHTML = val;
    });

    // placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const val = getVal(t, el.dataset.i18nPlaceholder);
        if (val !== undefined) el.placeholder = val;
    });

    document.documentElement.lang = lang;
    document.title = t.page.title;
    localStorage.setItem('sd_lang', lang);
}

function detectLanguage() {
    const saved = localStorage.getItem('sd_lang');
    if (saved && translations[saved]) return saved;
    const bl = (navigator.language || 'de').toLowerCase();
    if (bl.startsWith('it')) return 'it';
    if (bl.startsWith('en')) return 'en';
    return 'de';
}


// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 50
        ? "0 4px 20px rgba(0,0,0,0.07)"
        : "none";
});


// =========================
// SCROLL REVEAL + STAGGER
// =========================

const elements = document.querySelectorAll(
    "section h2, .service-item, .project, .about-grid, .process-step, .hero-available"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.1 });

elements.forEach(el => { el.classList.add("hidden"); observer.observe(el); });

document.querySelectorAll(".service-item").forEach((el, i)  => { el.style.transitionDelay = `${i * 0.07}s`; });
document.querySelectorAll(".project").forEach((el, i)        => { el.style.transitionDelay = `${i * 0.1}s`; });
document.querySelectorAll(".process-step").forEach((el, i)   => { el.style.transitionDelay = `${i * 0.1}s`; });


// =========================
// COUNTER ANIMATION
// =========================

function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || "";
    const dur = 1400;
    let t0 = null;
    const step = ts => {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); } });
}, { threshold: 0.6 });

document.querySelectorAll(".stat strong[data-target]").forEach(el => counterObs.observe(el));


// =========================
// SMOOTH NAVIGATION
// =========================

document.querySelectorAll("nav a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});


// =========================
// IMPRESSUM MODAL
// =========================

function openImpressum() {
    document.getElementById("impressum-modal").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeImpressum() {
    document.getElementById("impressum-modal").classList.remove("active");
    document.body.style.overflow = "";
}

function closeOnOverlay(e) {
    if (e.target === document.getElementById("impressum-modal")) closeImpressum();
}


// =========================
// DATENSCHUTZ MODAL
// =========================

function openPrivacy() {
    document.getElementById("privacy-modal").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closePrivacy() {
    document.getElementById("privacy-modal").classList.remove("active");
    document.body.style.overflow = "";
}

function closePrivacyOnOverlay(e) {
    if (e.target === document.getElementById("privacy-modal")) closePrivacy();
}

document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeImpressum(); closePrivacy(); closeMobileMenu(); }
});


// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

function openMobileMenu() {
    hamburger.classList.add("active");
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
    hamburger.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMobileMenu() {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
}

hamburger.addEventListener("click", () => {
    mobileMenu.classList.contains("active") ? closeMobileMenu() : openMobileMenu();
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        closeMobileMenu();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
    });
});


// =========================
// LOGO HOVER
// =========================

const logo = document.querySelector(".logo");
logo.addEventListener("mouseenter", () => { logo.style.transform = "scale(1.04)"; });
logo.addEventListener("mouseleave", () => { logo.style.transform = "scale(1)"; });


// =========================
// LANGUAGE BUTTONS
// =========================

document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});


// =========================
// CONTACT FORM (EmailJS)
// =========================

// ↓ Diese 3 Werte nach EmailJS-Setup eintragen:
const EMAILJS_PUBLIC_KEY  = "dSxku4zYID6JsIS5T";
const EMAILJS_SERVICE_ID  = "service_ml3x7rc";
const EMAILJS_TEMPLATE_ID = "template_x07lqif";

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// spam protection state
const FORM_LOAD_TIME = Date.now();
let lastSubmit = 0;

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const nameEl  = document.getElementById("form-name");
    const emailEl = document.getElementById("form-email");
    const msgEl   = document.getElementById("form-msg");
    const btn     = document.getElementById("form-submit");
    const span    = btn.querySelector("span");
    const honey   = this.querySelector('input[name="website"]');

    // honeypot: bots fill this field, humans don't
    if (honey && honey.value) return;

    // time check: form must be open for at least 2 seconds
    if (Date.now() - FORM_LOAD_TIME < 2000) return;

    // rate limit: max 1 submission per 60 seconds
    const now = Date.now();
    const lang = localStorage.getItem('sd_lang') || 'de';
    const ft = translations[lang].form;
    if (now - lastSubmit < 60000) {
        span.textContent = ft.wait;
        setTimeout(() => { span.textContent = ft.btn; }, 3000);
        return;
    }

    [nameEl, emailEl, msgEl].forEach(el => el.classList.remove("input-error"));

    const name  = nameEl.value.trim();
    const email = emailEl.value.trim();
    const msg   = msgEl.value.trim();

    let valid = true;
    if (!name)                          { nameEl.classList.add("input-error");  valid = false; }
    if (!email || !email.includes("@")) { emailEl.classList.add("input-error"); valid = false; }
    if (!msg)                           { msgEl.classList.add("input-error");   valid = false; }
    if (!valid) return;

    lastSubmit = now;
    btn.disabled = true;
    span.textContent = ft.sending;

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        reply_to:  email,
        message:   msg
    }).then(() => {
        span.textContent = ft.sent;
        nameEl.value = "";
        emailEl.value = "";
        msgEl.value = "";
        setTimeout(() => {
            span.textContent = ft.btn;
            btn.disabled = false;
        }, 3500);
    }).catch(() => {
        span.textContent = ft.error;
        btn.disabled = false;
        lastSubmit = 0;
        setTimeout(() => { span.textContent = ft.btn; }, 3000);
    });
});


// =========================
// SCROLL TO TOP
// =========================

const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("visible", window.scrollY > 300);
});


// =========================
// INIT
// =========================

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
    setLanguage(detectLanguage());
});
