/* ==================================================
   JUKO LANDING — Scripts (i18n + theme + nav)
   ================================================== */

/* ========== TRANSLATIONS ========== */
const i18n = {
    /* ---------- FRANÇAIS ---------- */
    fr: {
        /* Nav */
        "nav.home": "Accueil",
        "nav.cgu": "CGU",
        "nav.privacy": "Confidentialité",
        "nav.contact": "Contact",
        "nav.download": "Télécharger",

        /* Footer */
        "footer.tag": "Moins de règles, plus de rires.",
        "footer.col.app": "App",
        "footer.col.legal": "Légal",
        "footer.col.studio": "Studio",
        "footer.app.download": "Télécharger",
        "footer.app.support": "Support",
        "footer.legal.cgu": "CGU",
        "footer.legal.privacy": "Confidentialité",
        "footer.studio.contact": "Contact",
        "footer.copyright": "© 2026 JUKO STUDIO · Tous droits réservés.",

        /* Index — Hero */
        "hero.headline.l1": "Moins de règles,",
        "hero.headline.l2": "plus de rires.",
        "hero.sub": "Le party game qui sauve tes soirées. 2 à 8 potes, sur place ou à distance, dizaines de mini-jeux.",
        "hero.meta": "100% gratuit · Sans pub · Sans inscription",

        /* Cards */
        "card1.title": "SCANNE LE QR",
        "card1.text": "Le premier joueur ouvre un salon. Les autres scannent ou tapent un code à 4 lettres. C'est tout, vraiment.",
        "card2.title": "CHOISIS LE CHAOS",
        "card2.text": "Une dizaine de mini-jeux : dessin, quiz absurdes, voix, défis. Tu ne sais jamais sur quoi tu vas tomber.",
        "card3.title": "LAISSE PARLER LES POTES",
        "card3.text": "Le téléphone disparaît. Tout se passe entre vous. JUKO sert juste de prétexte pour rire à en pleurer.",

        /* Stats */
        "stats.players": "joueurs",
        "stats.duration": "min / partie",
        "stats.price": "à vie",

        /* Why */
        "why.label": "POURQUOI JUKO",
        "why.title": "Tout ce que les autres apps font de travers.",
        "why.i1": "Pas de tuto interminable. Tu joues en 30 secondes.",
        "why.i2": "Sur place (QR) ou à distance (code). Les deux marchent.",
        "why.i3": "Pas de compte à créer. Un pseudo, c'est suffisant.",
        "why.i4": "Aucune pub, aucun paywall. Jamais.",

        /* Use cases */
        "uc.label": "PARFAIT POUR",
        "uc.title": "Quand tu sors JUKO ?",
        "uc.c1": "Apéro entre potes",
        "uc.c2": "Soirée étudiante",
        "uc.c3": "Vacances",
        "uc.c4": "Pause au taf",
        "uc.c5": "Retour de soirée",
        "uc.c6": "Diner de famille",
        "uc.c7": "Anniversaire",
        "uc.c8": "Soirée pyjama",

        /* Final CTA */
        "cta.title": "On lance la soirée ?",
        "cta.sub": "Télécharge JUKO. Gratuit, sans pub, sans pièges.",

        /* CGU — Page */
        "cgu.tag": "DOCUMENT LÉGAL",
        "cgu.title": "Conditions Générales d'Utilisation",
        "cgu.sub": "Dernière mise à jour : 26 mai 2026 · Version 1.0",
        "cgu.s1.t": "PRÉAMBULE",
        "cgu.s1.p": "Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de l'application mobile <strong>JUKO</strong>, développée par <strong>Clément V.</strong> En installant et en utilisant l'Application, l'Utilisateur accepte sans réserve les présentes conditions.",
        "cgu.s2.t": "ACCÈS ET INSCRIPTION",
        "cgu.s2.p": "L'accès aux fonctionnalités multijoueurs nécessite une connexion via <strong>Google Sign-In</strong>. L'Utilisateur certifie être âgé d'au moins <strong>17 ans</strong>. L'Utilisateur est seul responsable de la confidentialité de ses identifiants Google et de l'utilisation de son compte.",
        "cgu.s3.t": "COMPORTEMENT ET CONTENU",
        "cgu.s3.p1": "JUKO permet de générer du contenu (textes, dessins). Il est <strong>strictement interdit</strong> de diffuser du contenu illégal, haineux, discriminatoire, pornographique ou violent.",
        "cgu.s3.p2": "<strong>Modération :</strong> Clément V. applique une politique de \"Tolérance Zéro\". Nous nous réservons le droit de bannir immédiatement et sans préavis tout Utilisateur ne respectant pas ces règles.",
        "cgu.s4.t": "PROPRIÉTÉ INTELLECTUELLE",
        "cgu.s4.p": "Tous les éléments de l'Application (code, design, logo JUKO, animations) sont la propriété exclusive de Clément V. En créant du contenu sur l'app (ex: dessins de jeu), l'Utilisateur concède à l'éditeur un droit d'utilisation gratuit et mondial pour l'affichage de ce contenu au sein du jeu.",
        "cgu.s5.t": "RESPONSABILITÉ",
        "cgu.s5.p": "L'Application est fournie \"telle quelle\". Clément V. ne garantit pas l'absence de bugs, d'erreurs ou une disponibilité continue des serveurs. L'éditeur décline toute responsabilité en cas de dommages directs ou indirects liés à l'utilisation de l'application.",
        "cgu.s6.t": "DONNÉES PERSONNELLES",
        "cgu.s6.p1": "Conformément au RGPD, nous respectons votre vie privée. Les données collectées (ID Google, Email, Pseudo, Avatar) servent uniquement au fonctionnement du jeu via les services <strong>Firebase</strong> (Google) et <strong>Render</strong>. Aucune donnée n'est revendue à des tiers.",
        "cgu.s6.p2": "Pour exercer vos droits d'accès ou de suppression, contactez : <strong>juko.party@gmail.com</strong>.",
        "cgu.s7.t": "DROIT APPLICABLE",
        "cgu.s7.p": "Les présentes CGU sont soumises au droit français. En cas de litige non résolu à l'amiable, les tribunaux compétents seront ceux du ressort de la ville de <strong>Marseille</strong>.",

        /* Privacy — Page */
        "pr.tag": "DOCUMENT LÉGAL",
        "pr.title": "Politique de confidentialité",
        "pr.sub": "Dernière mise à jour : 26 mai 2026 · Version 1.0",
        "pr.s1.t": "INTRODUCTION",
        "pr.s1.p": "La présente Politique de confidentialité décrit la manière dont l'application mobile <strong>JUKO</strong>, éditée par <strong>Clément V.</strong>, collecte, traite et protège vos données personnelles. En utilisant JUKO, vous acceptez les termes de la présente politique, conforme au RGPD (UE 2016/679) et aux exigences d'Apple et Google.",
        "pr.s2.t": "RESPONSABLE DU TRAITEMENT",
        "pr.s2.p": "Le responsable du traitement est <strong>Clément V.</strong>, éditeur de l'Application JUKO. Contact : <strong>juko.party@gmail.com</strong>",
        "pr.s3.t": "DONNÉES COLLECTÉES",
        "pr.s3.p1": "Nous collectons uniquement les données strictement nécessaires au fonctionnement du jeu.",
        "pr.s3.p2": "<strong>Compte (via Google Sign-In) :</strong> identifiant Google, e-mail, pseudo, avatar.",
        "pr.s3.p3": "<strong>Jeu :</strong> historique des parties, interactions au sein des salons, contenu généré (textes, dessins).",
        "pr.s3.p4": "<strong>Technique :</strong> identifiant d'appareil, modèle, OS, version de l'app, logs (via Firebase).",
        "pr.s3.p5": "<strong>Permissions :</strong> caméra (QR), microphone (mini-jeux vocaux), notifications push.",
        "pr.s4.t": "FINALITÉS",
        "pr.s4.p": "Connexion au compte · synchronisation des parties en temps réel · sauvegarde de la progression · diagnostic de bugs · modération · notifications d'invitations.",
        "pr.s5.t": "BASES LÉGALES",
        "pr.s5.p": "<strong>Exécution du contrat</strong> pour le compte et le jeu. <strong>Consentement</strong> pour caméra, micro et notifications. <strong>Intérêt légitime</strong> pour les stats anonymisées et la prévention des abus.",
        "pr.s6.t": "SOUS-TRAITANTS",
        "pr.s6.p1": "Aucune donnée n'est vendue. Sous-traitants :",
        "pr.s6.p2": "<strong>Firebase (Google LLC)</strong> : authentification, base de données, analytics, crash reports.",
        "pr.s6.p3": "<strong>Render Inc.</strong> : hébergement serveur (USA). Transfert encadré par Clauses Contractuelles Types UE.",
        "pr.s7.t": "DURÉE DE CONSERVATION",
        "pr.s7.p": "Compte actif : tant que vous utilisez l'app · Compte inactif : 24 mois max · Logs : 12 mois · Parties : 30 jours · Suppression : sous 30 jours après demande.",
        "pr.s8.t": "VOS DROITS",
        "pr.s8.p1": "Accès, rectification, effacement, limitation, portabilité, opposition, retrait du consentement.",
        "pr.s8.p2": "Pour exercer ces droits : <strong>juko.party@gmail.com</strong>. Réponse sous 30 jours. Réclamation possible auprès de la CNIL (<strong>www.cnil.fr</strong>).",
        "pr.s9.t": "SÉCURITÉ",
        "pr.s9.p": "Chiffrement TLS, accès restreint, authentification renforcée, sauvegardes régulières. En cas d'incident, vous serez notifié sans délai.",
        "pr.s10.t": "MINEURS",
        "pr.s10.p": "JUKO est destinée aux <strong>17 ans et plus</strong>. Nous ne collectons pas sciemment de données de personnes de moins de 13 ans.",
        "pr.s11.t": "STOCKAGE LOCAL",
        "pr.s11.p": "L'app utilise AsyncStorage sur votre appareil pour mémoriser préférences et session. Ces données restent sur votre appareil.",
        "pr.s12.t": "MODIFICATIONS",
        "pr.s12.p": "Toute modification substantielle vous sera notifiée via l'app ou par e-mail. La date de mise à jour figure en haut de cette page.",
        "pr.s13.t": "CONTACT",
        "pr.s13.p": "Pour toute question : <strong>juko.party@gmail.com</strong>",

        /* Contact — Page */
        "ct.tag": "SUPPORT",
        "ct.title": "Une question ? Un bug ?",
        "ct.sub": "On répond vite. Sérieusement.",
        "ct.c1.t": "E-MAIL",
        "ct.c1.v": "juko.party@gmail.com",
        "ct.c1.h": "Réponse sous 48h",
        "ct.c2.t": "SIGNALER UN BUG",
        "ct.c2.v": "Décris-nous le problème",
        "ct.c2.h": "On corrige vite",
        "ct.c3.t": "SUGGÉRER UN JEU",
        "ct.c3.v": "Tu as une idée délirante ?",
        "ct.c3.h": "On adore les pitchs",
        "ct.faq.label": "FAQ",
        "ct.faq.title": "Questions fréquentes",
        "ct.q1": "Combien de joueurs peuvent participer ?",
        "ct.a1": "JUKO se joue de 2 à 8 joueurs simultanément, en local ou à distance.",
        "ct.q2": "Faut-il être tous au même endroit ?",
        "ct.a2": "Non. Tu peux jouer à côté de tes potes (en scannant un QR Code), ou à distance avec un code de salon.",
        "ct.q3": "JUKO est-il gratuit ?",
        "ct.a3": "Oui, JUKO est entièrement gratuit, sans pub intrusive.",
        "ct.q4": "Mes données sont-elles en sécurité ?",
        "ct.a4": "Oui. Nous collectons le minimum nécessaire, aucune donnée n'est revendue.",
        "ct.q5": "Comment supprimer mon compte ?",
        "ct.a5": "Envoie un e-mail à juko.party@gmail.com avec ton pseudo. Suppression sous 30 jours.",
        "ct.q6": "Sur quelles plateformes est JUKO ?",
        "ct.a6": "iOS (iPhone et iPad) et Android. Gratuit sur l'App Store et Google Play.",
        "ct.cta.t": "Pas trouvé ta réponse ?",
        "ct.cta.s": "Écris-nous directement, on te répond rapidement.",
        "ct.cta.b": "Nous contacter"
    },

    /* ---------- ENGLISH ---------- */
    en: {
        "nav.home": "Home",
        "nav.cgu": "Terms",
        "nav.privacy": "Privacy",
        "nav.contact": "Contact",
        "nav.download": "Download",

        "footer.tag": "Fewer rules, more laughs.",
        "footer.col.app": "App",
        "footer.col.legal": "Legal",
        "footer.col.studio": "Studio",
        "footer.app.download": "Download",
        "footer.app.support": "Support",
        "footer.legal.cgu": "Terms",
        "footer.legal.privacy": "Privacy",
        "footer.studio.contact": "Contact",
        "footer.copyright": "© 2026 JUKO STUDIO · All rights reserved.",

        "hero.headline.l1": "Fewer rules,",
        "hero.headline.l2": "more laughs.",
        "hero.sub": "The party game that saves your nights out. 2 to 8 friends, in person or remote, dozens of mini-games.",
        "hero.meta": "100% free · No ads · No sign-up",

        "card1.title": "SCAN THE QR",
        "card1.text": "The first player opens a room. Others scan or type a 4-letter code. That's it, really.",
        "card2.title": "PICK THE CHAOS",
        "card2.text": "A dozen mini-games: drawing, absurd quizzes, voice, dares. You never know what you're in for.",
        "card3.title": "LET YOUR FRIENDS TALK",
        "card3.text": "The phone fades into the background. It all happens between you. JUKO just gives you an excuse to laugh until you cry.",

        "stats.players": "players",
        "stats.duration": "min / round",
        "stats.price": "forever",

        "why.label": "WHY JUKO",
        "why.title": "Everything other party apps get wrong.",
        "why.i1": "No endless tutorial. You're playing in 30 seconds.",
        "why.i2": "In person (QR) or remote (code). Both work.",
        "why.i3": "No account to create. A nickname is enough.",
        "why.i4": "Zero ads, zero paywalls. Ever.",

        "uc.label": "PERFECT FOR",
        "uc.title": "When do you bust out JUKO?",
        "uc.c1": "Drinks with friends",
        "uc.c2": "Student parties",
        "uc.c3": "Holidays",
        "uc.c4": "Coffee breaks",
        "uc.c5": "After-parties",
        "uc.c6": "Family dinners",
        "uc.c7": "Birthdays",
        "uc.c8": "Sleepovers",

        "cta.title": "Ready to kick off the night?",
        "cta.sub": "Download JUKO. Free, no ads, no traps.",

        "cgu.tag": "LEGAL",
        "cgu.title": "Terms of Use",
        "cgu.sub": "Last updated: May 26, 2026 · Version 1.0",
        "cgu.s1.t": "PREAMBLE",
        "cgu.s1.p": "These Terms of Use govern your use of the <strong>JUKO</strong> mobile app, developed by <strong>Clément V.</strong> By installing and using the App, the User unconditionally accepts these terms.",
        "cgu.s2.t": "ACCESS AND SIGN-UP",
        "cgu.s2.p": "Access to multiplayer features requires sign-in via <strong>Google Sign-In</strong>. The User certifies being at least <strong>17 years old</strong> and is solely responsible for keeping their Google credentials confidential.",
        "cgu.s3.t": "BEHAVIOR AND CONTENT",
        "cgu.s3.p1": "JUKO allows generating content (text, drawings). It is <strong>strictly forbidden</strong> to share illegal, hateful, discriminatory, pornographic or violent content.",
        "cgu.s3.p2": "<strong>Moderation:</strong> Clément V. enforces a \"Zero Tolerance\" policy. We reserve the right to ban any User immediately and without notice if these rules are broken.",
        "cgu.s4.t": "INTELLECTUAL PROPERTY",
        "cgu.s4.p": "All elements of the App (code, design, JUKO logo, animations) are the exclusive property of Clément V. By creating content in the app (e.g. game drawings), the User grants the publisher a free, worldwide right to display this content within the game.",
        "cgu.s5.t": "LIABILITY",
        "cgu.s5.p": "The App is provided \"as is\". Clément V. makes no warranty regarding bugs, errors or continuous server availability. The publisher disclaims any liability for direct or indirect damages arising from use of the app.",
        "cgu.s6.t": "PERSONAL DATA",
        "cgu.s6.p1": "In accordance with GDPR, we respect your privacy. Collected data (Google ID, Email, Username, Avatar) is used solely for game functionality via <strong>Firebase</strong> (Google) and <strong>Render</strong>. No data is sold to third parties.",
        "cgu.s6.p2": "To exercise your rights of access or deletion, contact: <strong>juko.party@gmail.com</strong>.",
        "cgu.s7.t": "GOVERNING LAW",
        "cgu.s7.p": "These Terms are governed by French law. In case of dispute not amicably resolved, jurisdiction lies with the courts of <strong>Marseille</strong>, France.",

        "pr.tag": "LEGAL",
        "pr.title": "Privacy Policy",
        "pr.sub": "Last updated: May 26, 2026 · Version 1.0",
        "pr.s1.t": "INTRODUCTION",
        "pr.s1.p": "This Privacy Policy describes how the <strong>JUKO</strong> mobile app, published by <strong>Clément V.</strong>, collects, processes and protects your personal data. By using JUKO, you accept these terms, compliant with GDPR (EU 2016/679) and Apple and Google requirements.",
        "pr.s2.t": "DATA CONTROLLER",
        "pr.s2.p": "The data controller is <strong>Clément V.</strong>, publisher of the JUKO App. Contact: <strong>juko.party@gmail.com</strong>",
        "pr.s3.t": "DATA COLLECTED",
        "pr.s3.p1": "We collect only data strictly required for the game to work.",
        "pr.s3.p2": "<strong>Account (via Google Sign-In):</strong> Google ID, email, username, avatar.",
        "pr.s3.p3": "<strong>Gameplay:</strong> match history, in-room interactions, generated content (text, drawings).",
        "pr.s3.p4": "<strong>Technical:</strong> device ID, model, OS, app version, logs (via Firebase).",
        "pr.s3.p5": "<strong>Permissions:</strong> camera (QR), microphone (voice mini-games), push notifications.",
        "pr.s4.t": "PURPOSES",
        "pr.s4.p": "Account sign-in · real-time game sync · progress saving · bug diagnostics · moderation · invitation notifications.",
        "pr.s5.t": "LEGAL BASIS",
        "pr.s5.p": "<strong>Contract performance</strong> for account and gameplay. <strong>Consent</strong> for camera, mic and notifications. <strong>Legitimate interest</strong> for anonymized stats and abuse prevention.",
        "pr.s6.t": "PROCESSORS",
        "pr.s6.p1": "No data is sold. Sub-processors:",
        "pr.s6.p2": "<strong>Firebase (Google LLC):</strong> authentication, database, analytics, crash reports.",
        "pr.s6.p3": "<strong>Render Inc.:</strong> server hosting (USA). Transfer governed by EU Standard Contractual Clauses.",
        "pr.s7.t": "RETENTION",
        "pr.s7.p": "Active account: as long as you use the app · Inactive: 24 months max · Logs: 12 months · Games: 30 days · Deletion: within 30 days after request.",
        "pr.s8.t": "YOUR RIGHTS",
        "pr.s8.p1": "Access, rectification, erasure, restriction, portability, objection, consent withdrawal.",
        "pr.s8.p2": "To exercise: <strong>juko.party@gmail.com</strong>. Response within 30 days. Complaints can be filed with your local data protection authority.",
        "pr.s9.t": "SECURITY",
        "pr.s9.p": "TLS encryption, restricted access, strong authentication, regular backups. You will be notified without delay in case of incident.",
        "pr.s10.t": "MINORS",
        "pr.s10.p": "JUKO is intended for users aged <strong>17 and over</strong>. We do not knowingly collect data from individuals under 13.",
        "pr.s11.t": "LOCAL STORAGE",
        "pr.s11.p": "The app uses AsyncStorage on your device to remember preferences and session. This data stays on your device.",
        "pr.s12.t": "CHANGES",
        "pr.s12.p": "Any substantial change will be notified via the app or by email. The last update date is shown at the top of this page.",
        "pr.s13.t": "CONTACT",
        "pr.s13.p": "For any question: <strong>juko.party@gmail.com</strong>",

        "ct.tag": "SUPPORT",
        "ct.title": "Question? Bug?",
        "ct.sub": "We answer fast. Seriously.",
        "ct.c1.t": "E-MAIL",
        "ct.c1.v": "juko.party@gmail.com",
        "ct.c1.h": "Reply within 48h",
        "ct.c2.t": "REPORT A BUG",
        "ct.c2.v": "Describe the issue",
        "ct.c2.h": "We fix fast",
        "ct.c3.t": "SUGGEST A GAME",
        "ct.c3.v": "Got a wild idea?",
        "ct.c3.h": "We love pitches",
        "ct.faq.label": "FAQ",
        "ct.faq.title": "Frequently asked",
        "ct.q1": "How many players can join?",
        "ct.a1": "JUKO plays with 2 to 8 players at once, in person or remote.",
        "ct.q2": "Do we all need to be in the same place?",
        "ct.a2": "No. Play next to your friends (scan a QR Code), or remote with a room code.",
        "ct.q3": "Is JUKO free?",
        "ct.a3": "Yes, JUKO is fully free, with no intrusive ads.",
        "ct.q4": "Is my data safe?",
        "ct.a4": "Yes. We collect the strict minimum, no data is ever sold.",
        "ct.q5": "How do I delete my account?",
        "ct.a5": "Email juko.party@gmail.com with your username. Deleted within 30 days.",
        "ct.q6": "Which platforms is JUKO on?",
        "ct.a6": "iOS (iPhone and iPad) and Android. Free on the App Store and Google Play.",
        "ct.cta.t": "Didn't find your answer?",
        "ct.cta.s": "Write to us directly, we'll get back fast.",
        "ct.cta.b": "Contact us"
    },

    /* ---------- ESPAÑOL ---------- */
    es: {
        "nav.home": "Inicio",
        "nav.cgu": "Términos",
        "nav.privacy": "Privacidad",
        "nav.contact": "Contacto",
        "nav.download": "Descargar",

        "footer.tag": "Menos reglas, más risas.",
        "footer.col.app": "App",
        "footer.col.legal": "Legal",
        "footer.col.studio": "Estudio",
        "footer.app.download": "Descargar",
        "footer.app.support": "Soporte",
        "footer.legal.cgu": "Términos",
        "footer.legal.privacy": "Privacidad",
        "footer.studio.contact": "Contacto",
        "footer.copyright": "© 2026 JUKO STUDIO · Todos los derechos reservados.",

        "hero.headline.l1": "Menos reglas,",
        "hero.headline.l2": "más risas.",
        "hero.sub": "El party game que salva tus noches. De 2 a 8 amigos, en persona o a distancia, decenas de minijuegos.",
        "hero.meta": "100% gratis · Sin anuncios · Sin registro",

        "card1.title": "ESCANEA EL QR",
        "card1.text": "El primer jugador abre una sala. Los demás escanean o escriben un código de 4 letras. Eso es todo.",
        "card2.title": "ELIGE EL CAOS",
        "card2.text": "Una decena de minijuegos: dibujo, quizzes absurdos, voz, retos. Nunca sabes con qué te vas a encontrar.",
        "card3.title": "DEJA QUE HABLEN LOS AMIGOS",
        "card3.text": "El móvil desaparece. Todo pasa entre vosotros. JUKO es solo la excusa para reírte hasta llorar.",

        "stats.players": "jugadores",
        "stats.duration": "min / partida",
        "stats.price": "para siempre",

        "why.label": "POR QUÉ JUKO",
        "why.title": "Todo lo que las otras apps hacen mal.",
        "why.i1": "Sin tutorial eterno. Juegas en 30 segundos.",
        "why.i2": "En persona (QR) o a distancia (código). Las dos funcionan.",
        "why.i3": "Sin cuenta. Con un nick basta.",
        "why.i4": "Cero anuncios, cero paywall. Nunca.",

        "uc.label": "PERFECTO PARA",
        "uc.title": "¿Cuándo sacas JUKO?",
        "uc.c1": "Cañas con amigos",
        "uc.c2": "Fiestas universitarias",
        "uc.c3": "Vacaciones",
        "uc.c4": "Pausa del curro",
        "uc.c5": "After-party",
        "uc.c6": "Cenas familiares",
        "uc.c7": "Cumpleaños",
        "uc.c8": "Pijamadas",

        "cta.title": "¿Lanzamos la noche?",
        "cta.sub": "Descarga JUKO. Gratis, sin anuncios, sin trampas.",

        "cgu.tag": "DOCUMENTO LEGAL",
        "cgu.title": "Términos de uso",
        "cgu.sub": "Última actualización: 26 de mayo de 2026 · Versión 1.0",
        "cgu.s1.t": "PREÁMBULO",
        "cgu.s1.p": "Los presentes Términos de Uso rigen el uso de la aplicación móvil <strong>JUKO</strong>, desarrollada por <strong>Clément V.</strong> Al instalar y usar la Aplicación, el Usuario acepta sin reservas estos términos.",
        "cgu.s2.t": "ACCESO Y REGISTRO",
        "cgu.s2.p": "El acceso a las funciones multijugador requiere conexión vía <strong>Google Sign-In</strong>. El Usuario certifica tener al menos <strong>17 años</strong>. El Usuario es único responsable de la confidencialidad de sus credenciales Google.",
        "cgu.s3.t": "COMPORTAMIENTO Y CONTENIDO",
        "cgu.s3.p1": "JUKO permite generar contenido (textos, dibujos). Está <strong>estrictamente prohibido</strong> difundir contenido ilegal, de odio, discriminatorio, pornográfico o violento.",
        "cgu.s3.p2": "<strong>Moderación:</strong> Clément V. aplica una política de \"Tolerancia Cero\". Nos reservamos el derecho a banear inmediatamente y sin aviso a cualquier Usuario que no respete estas reglas.",
        "cgu.s4.t": "PROPIEDAD INTELECTUAL",
        "cgu.s4.p": "Todos los elementos de la Aplicación (código, diseño, logo JUKO, animaciones) son propiedad exclusiva de Clément V. Al crear contenido en la app (ej. dibujos), el Usuario concede al editor un derecho de uso gratuito y mundial para mostrar este contenido en el juego.",
        "cgu.s5.t": "RESPONSABILIDAD",
        "cgu.s5.p": "La Aplicación se proporciona \"tal cual\". Clément V. no garantiza la ausencia de bugs, errores o disponibilidad continua. El editor declina toda responsabilidad por daños directos o indirectos derivados del uso.",
        "cgu.s6.t": "DATOS PERSONALES",
        "cgu.s6.p1": "Conforme al RGPD, respetamos tu privacidad. Los datos recopilados (ID Google, Email, Nick, Avatar) sirven únicamente para el funcionamiento del juego vía <strong>Firebase</strong> (Google) y <strong>Render</strong>. Ningún dato se vende a terceros.",
        "cgu.s6.p2": "Para ejercer tus derechos de acceso o supresión, contacta: <strong>juko.party@gmail.com</strong>.",
        "cgu.s7.t": "LEY APLICABLE",
        "cgu.s7.p": "Estos Términos están sujetos al derecho francés. En caso de litigio no resuelto amistosamente, serán competentes los tribunales de <strong>Marsella</strong>, Francia.",

        "pr.tag": "DOCUMENTO LEGAL",
        "pr.title": "Política de privacidad",
        "pr.sub": "Última actualización: 26 de mayo de 2026 · Versión 1.0",
        "pr.s1.t": "INTRODUCCIÓN",
        "pr.s1.p": "Esta Política de privacidad describe cómo la aplicación móvil <strong>JUKO</strong>, editada por <strong>Clément V.</strong>, recopila, procesa y protege tus datos personales. Al usar JUKO, aceptas estos términos, conformes al RGPD (UE 2016/679) y a los requisitos de Apple y Google.",
        "pr.s2.t": "RESPONSABLE DEL TRATAMIENTO",
        "pr.s2.p": "El responsable es <strong>Clément V.</strong>, editor de la App JUKO. Contacto: <strong>juko.party@gmail.com</strong>",
        "pr.s3.t": "DATOS RECOPILADOS",
        "pr.s3.p1": "Solo recopilamos los datos estrictamente necesarios para el funcionamiento del juego.",
        "pr.s3.p2": "<strong>Cuenta (vía Google Sign-In):</strong> ID Google, e-mail, nick, avatar.",
        "pr.s3.p3": "<strong>Juego:</strong> historial de partidas, interacciones en sala, contenido generado.",
        "pr.s3.p4": "<strong>Técnico:</strong> ID del dispositivo, modelo, SO, versión de la app, logs (vía Firebase).",
        "pr.s3.p5": "<strong>Permisos:</strong> cámara (QR), micrófono (minijuegos de voz), notificaciones push.",
        "pr.s4.t": "FINALIDADES",
        "pr.s4.p": "Conexión a la cuenta · sincronización de partidas en tiempo real · guardado de progreso · diagnóstico de bugs · moderación · notificaciones de invitación.",
        "pr.s5.t": "BASES LEGALES",
        "pr.s5.p": "<strong>Ejecución del contrato</strong> para cuenta y juego. <strong>Consentimiento</strong> para cámara, micro y notificaciones. <strong>Interés legítimo</strong> para estadísticas anónimas y prevención de abusos.",
        "pr.s6.t": "ENCARGADOS",
        "pr.s6.p1": "Ningún dato se vende. Subencargados:",
        "pr.s6.p2": "<strong>Firebase (Google LLC):</strong> autenticación, base de datos, analytics, crash reports.",
        "pr.s6.p3": "<strong>Render Inc.:</strong> alojamiento de servidor (EE.UU.). Transferencia regulada por Cláusulas Contractuales Tipo UE.",
        "pr.s7.t": "CONSERVACIÓN",
        "pr.s7.p": "Cuenta activa: mientras uses la app · Inactiva: 24 meses máx · Logs: 12 meses · Partidas: 30 días · Supresión: en 30 días tras solicitud.",
        "pr.s8.t": "TUS DERECHOS",
        "pr.s8.p1": "Acceso, rectificación, supresión, limitación, portabilidad, oposición, retiro del consentimiento.",
        "pr.s8.p2": "Para ejercerlos: <strong>juko.party@gmail.com</strong>. Respuesta en 30 días. Reclamación posible ante tu autoridad de protección de datos.",
        "pr.s9.t": "SEGURIDAD",
        "pr.s9.p": "Cifrado TLS, acceso restringido, autenticación fuerte, copias de seguridad regulares. En caso de incidente, serás notificado sin demora.",
        "pr.s10.t": "MENORES",
        "pr.s10.p": "JUKO está destinada a usuarios de <strong>17 años o más</strong>. No recopilamos a sabiendas datos de menores de 13 años.",
        "pr.s11.t": "ALMACENAMIENTO LOCAL",
        "pr.s11.p": "La app usa AsyncStorage en tu dispositivo para recordar preferencias y sesión. Estos datos permanecen en tu dispositivo.",
        "pr.s12.t": "MODIFICACIONES",
        "pr.s12.p": "Cualquier cambio sustancial te será notificado vía la app o por e-mail. La fecha de actualización aparece en la parte superior.",
        "pr.s13.t": "CONTACTO",
        "pr.s13.p": "Para cualquier pregunta: <strong>juko.party@gmail.com</strong>",

        "ct.tag": "SOPORTE",
        "ct.title": "¿Pregunta? ¿Bug?",
        "ct.sub": "Respondemos rápido. En serio.",
        "ct.c1.t": "E-MAIL",
        "ct.c1.v": "juko.party@gmail.com",
        "ct.c1.h": "Respuesta en 48h",
        "ct.c2.t": "REPORTAR UN BUG",
        "ct.c2.v": "Cuéntanos el problema",
        "ct.c2.h": "Arreglamos rápido",
        "ct.c3.t": "SUGERIR UN JUEGO",
        "ct.c3.v": "¿Tienes una idea loca?",
        "ct.c3.h": "Amamos los pitches",
        "ct.faq.label": "FAQ",
        "ct.faq.title": "Preguntas frecuentes",
        "ct.q1": "¿Cuántos jugadores pueden participar?",
        "ct.a1": "JUKO se juega de 2 a 8 jugadores a la vez, en persona o a distancia.",
        "ct.q2": "¿Hay que estar todos en el mismo sitio?",
        "ct.a2": "No. Puedes jugar al lado de tus amigos (escaneando un QR) o a distancia con un código de sala.",
        "ct.q3": "¿JUKO es gratis?",
        "ct.a3": "Sí, JUKO es totalmente gratis, sin anuncios intrusivos.",
        "ct.q4": "¿Mis datos están seguros?",
        "ct.a4": "Sí. Recopilamos el mínimo necesario, ningún dato se vende.",
        "ct.q5": "¿Cómo elimino mi cuenta?",
        "ct.a5": "Envía un e-mail a juko.party@gmail.com con tu nick. Borrado en 30 días.",
        "ct.q6": "¿En qué plataformas está JUKO?",
        "ct.a6": "iOS (iPhone y iPad) y Android. Gratis en la App Store y Google Play.",
        "ct.cta.t": "¿No encontraste tu respuesta?",
        "ct.cta.s": "Escríbenos directamente, contestamos rápido.",
        "ct.cta.b": "Contáctanos"
    }
};

/* ========== STATE ========== */
const LANGS = ['fr', 'en', 'es'];
let currentLang = localStorage.getItem('juko-lang') || (navigator.language || 'fr').slice(0, 2);
if (!LANGS.includes(currentLang)) currentLang = 'fr';

let currentTheme = localStorage.getItem('juko-theme') || 'light';

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {

    /* --- Disable right-click everywhere --- */
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    /* --- Disable image drag --- */
    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') e.preventDefault();
    });

    /* --- Apply theme + language --- */
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    /* --- Particles --- */
    initParticles();

    /* --- Progress bar --- */
    initProgressBar();

    /* --- Nav: hamburger + theme + lang --- */
    initNav();

    /* --- Scroll reveal --- */
    initReveal();

    /* --- Hide nav on scroll down (mobile) --- */
    initNavAutoHide();
});

/* ========== APPLY THEME ========== */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('juko-theme', theme);
    currentTheme = theme;
    // SVG sun/moon are swapped via CSS (no JS needed)
    // Update meta theme-color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#0E0E14' : '#FAFAFC');
}

/* ========== APPLY LANGUAGE ========== */
function applyLanguage(lang) {
    if (!i18n[lang]) lang = 'fr';
    currentLang = lang;
    localStorage.setItem('juko-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const dict = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // Update lang buttons
    document.querySelectorAll('.lang-btn span, .lang-btn').forEach(el => {
        if (el.tagName === 'SPAN') el.textContent = lang.toUpperCase();
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (!btn.querySelector('span')) btn.textContent = lang.toUpperCase();
    });
}

/* ========== PARTICLES ========== */
function initParticles() {
    const container = document.getElementById('particles-bg');
    if (!container) return;
    const colors = ['#7B61FF', '#FF4D80', '#4ECDC4', '#FFD166'];
    const count = window.innerWidth < 700 ? 14 : 24;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 40 + 8;
        p.style.cssText = `width:${size}px;height:${size}px;background-color:${colors[Math.floor(Math.random() * colors.length)]};left:${Math.random() * 100}%;top:${Math.random() * 100}%;`;
        frag.appendChild(p);
        if (!prefersReduced) animateParticle(p);
    }
    container.appendChild(frag);

    function animateParticle(el) {
        const duration = 5000 + Math.random() * 6000;
        const x = (Math.random() - 0.5) * 140;
        const y = (Math.random() - 0.5) * 140;
        el.animate([
            { transform: 'translate(0,0)' },
            { transform: `translate(${x}px,${y}px)` },
            { transform: 'translate(0,0)' }
        ], { duration, iterations: Infinity, easing: 'ease-in-out' });
    }
}

/* ========== PROGRESS BAR ========== */
function initProgressBar() {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const top = document.documentElement.scrollTop || document.body.scrollTop;
                const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                bar.style.width = h > 0 ? (top / h) * 100 + '%' : '0%';
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ========== NAV ========== */
function initNav() {
    const burger = document.getElementById('navBurger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (burger && mobileMenu) {
        const closeMenu = () => {
            burger.classList.remove('open');
            mobileMenu.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        };
        const toggleMenu = () => {
            const isOpen = mobileMenu.classList.toggle('open');
            burger.classList.toggle('open', isOpen);
            burger.setAttribute('aria-expanded', String(isOpen));
        };
        burger.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
        mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
        });
        document.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('open') &&
                !mobileMenu.contains(e.target) &&
                !burger.contains(e.target)) {
                closeMenu();
            }
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth > 780 && mobileMenu.classList.contains('open')) closeMenu();
        });
    }

    /* Theme toggles */
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    });

    /* Lang toggles (cycle FR → EN → ES → FR) */
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = LANGS.indexOf(currentLang);
            const next = LANGS[(idx + 1) % LANGS.length];
            applyLanguage(next);
        });
    });
}

/* ========== NAV AUTO HIDE ========== */
function initNavAutoHide() {
    const nav = document.querySelector('.floating-nav');
    if (!nav) return;
    let lastY = 0;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (window.innerWidth <= 780) {
            nav.classList.toggle('nav-hidden', y > lastY && y > 200);
        } else {
            nav.classList.remove('nav-hidden');
        }
        lastY = y;
    }, { passive: true });
}

/* ========== REVEAL ========== */
function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    if (!('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), idx * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));
}
