// import i18next from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

// i18next
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: {
//         translation: {
//           title: "YouTube Downloader",
//           subtitle:
//             "Download your favorite YouTube videos in high quality with just one click",
//           placeholder: "Paste your YouTube link here...",
//           downloadButton: "Download",
//           downloadButtonShort: "Go",
//           processing: "Processing...",
//           videoSection: "Video",
//           audioSection: "Audio",
//           download: "Download",
//           disclaimer:
//             "Disclaimer: This is an educational project. Do not use for unauthorized downloading.",
//           error: {
//             generic: "Failed to fetch media info",
//             invalidUrl: "Invalid YouTube URL",
//           },
//         },
//       },
//       fr: {
//         translation: {
//           title: "Téléchargeur YouTube",
//           subtitle:
//             "Téléchargez vos vidéos YouTube préférées en haute qualité en un seul clic",
//           placeholder: "Collez votre lien YouTube ici...",
//           downloadButton: "Télécharger",
//           downloadButtonShort: "Aller",
//           processing: "Traitement...",
//           videoSection: "Vidéo",
//           audioSection: "Audio",
//           download: "Télécharger",
//           disclaimer:
//             "Avertissement : Ceci est un projet éducatif. Ne pas utiliser pour des téléchargements non autorisés.",
//           error: {
//             generic: "Échec de la récupération des informations multimédias",
//             invalidUrl: "URL YouTube invalide",
//           },
//         },
//       },
//       hi: {
//         translation: {
//           title: "यूट्यूब डाउनलोडर",
//           subtitle:
//             "अपने पसंदीदा यूट्यूब वीडियो को उच्च गुणवत्ता में एक क्लिक में डाउनलोड करें",
//           placeholder: "अपना यूट्यूब लिंक यहाँ पेस्ट करें...",
//           downloadButton: "डाउनलोड करें",
//           downloadButtonShort: "जाओ",
//           processing: "प्रसंस्करण...",
//           videoSection: "वीडियो",
//           audioSection: "ऑडियो",
//           download: "डाउनलोड",
//           disclaimer:
//             "अस्वीकरण: यह एक शैक्षिक परियोजना है। अनधिकृत डाउनलोडिंग के लिए उपयोग न करें।",
//           error: {
//             generic: "मीडिया जानकारी प्राप्त करने में विफल",
//             invalidUrl: "अमान्य यूट्यूब URL",
//           },
//         },
//       },
//       de: {
//         translation: {
//           title: "YouTube-Downloader",
//           subtitle:
//             "Laden Sie Ihre Lieblings-YouTube-Videos in hoher Qualität mit nur einem Klick herunter",
//           placeholder: "Fügen Sie Ihren YouTube-Link hier ein...",
//           downloadButton: "Herunterladen",
//           downloadButtonShort: "Los",
//           processing: "Verarbeitung...",
//           videoSection: "Video",
//           audioSection: "Audio",
//           download: "Herunterladen",
//           disclaimer:
//             "Haftungsausschluss: Dies ist ein Bildungsprojekt. Nicht für unbefugtes Herunterladen verwenden.",
//           error: {
//             generic: "Fehler beim Abrufen der Medieninformationen",
//             invalidUrl: "Ungültige YouTube-URL",
//           },
//         },
//       },
//       es: {
//         translation: {
//           title: "Descargador de YouTube",
//           subtitle:
//             "Descarga tus videos favoritos de YouTube en alta calidad con un solo clic",
//           placeholder: "Pega tu enlace de YouTube aquí...",
//           downloadButton: "Descargar",
//           downloadButtonShort: "Ir",
//           processing: "Procesando...",
//           videoSection: "Video",
//           audioSection: "Audio",
//           download: "Descargar",
//           disclaimer:
//             "Descargo de responsabilidad: Este es un proyecto educativo. No lo utilice para descargas no autorizadas.",
//           error: {
//             generic: "Error al obtener la información del medio",
//             invalidUrl: "URL de YouTube inválida",
//           },
//         },
//       },
//       ta: {
//         translation: {
//           title: "யூடியூப் பதிவிறக்கி",
//           subtitle:
//             "ஒரே கிளிக்கில் உங்களுக்கு பிடித்த யூடியூப் வீடியோக்களை உயர் தரத்தில் பதிவிறக்கவும்",
//           placeholder: "உங்கள் யூடியூப் இணைப்பை இங்கே ஒட்டவும்...",
//           downloadButton: "பதிவிறக்கவும்",
//           downloadButtonShort: "செல்",
//           processing: "செயலாக்கப்படுகிறது...",
//           videoSection: "வீடியோ",
//           audioSection: "ஆடியோ",
//           download: "பதிவிறக்கவும்",
//           error: {
//             generic: "மீடியா தகவலைப் பெறுவதில் தோல்வி",
//             invalidUrl: "தவறான யூடியூப் URL",
//           },
//           disclaimer:
//             "மறுப்பு: இது ஒரு கல்வி திட்டமாகும். அங்கீகரிக்கப்படாத பதிவிறக்கங்களுக்கு பயன்படுத்த வேண்டாம்.",
//         },
//       },
//       ml: {
//         translation: {
//           title: "യൂട്യൂബ് ഡൗൺലോഡർ",
//           subtitle:
//             "പ്രിയപ്പെട്ട യൂട്യൂബ് വീഡിയോകൾ ഒറ്റ ക്ലിക്കിൽ ഉയർന്ന നിലവാരത്തിൽ ഡൗൺലോഡ് ചെയ്യാം ",
//           placeholder: "നിന്റെ യൂട്യൂബ് ലിങ്ക് ഇവിടെ പേസ്റ്റ് ചെയുക...",
//           downloadButton: "ഡൗൺലോഡ്",
//           downloadButtonShort: "ഗോ",
//           processing: "പ്രോസസ്സിംഗ്...",
//           videoSection: "വീഡിയോ",
//           audioSection: "ഓഡിയോ",
//           download: "ഡൗൺലോഡ്",
//           error: {
//             generic: "മീഡിയ വിവരങ്ങൾ ശേഖരിക്കുന്നതിൽ പരാജയപ്പെട്ടു",
//             invalidUrl: "അസാധുവായ യൂട്യൂബ് URL",
//           },
//           disclaimer:
//             "നിരാകരണം: ഇത് ഒരു വിദ്യാഭ്യാസ പദ്ധതിയാണ്. അനധികൃത ഡൗൺലോഡുകൾക്ക് ഉപയോഗിക്കരുത്.",
//         },
//       },
//       kn: {
//         translation: {
//           title: "ಯೂಟ್ಯೂಬ್ ಡೌನ್‌ಲೋಡರ್",
//           subtitle:
//             "ನಿಮ್ಮ ಮೆಚ್ಚಿನ ಯೂಟ್ಯೂಬ್ ವೀಡಿಯೊಗಳನ್ನು ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಉತ್ತಮ ಗುಣಮಟ್ಟದಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
//           placeholder: "ನಿಮ್ಮ ಯೂಟ್ಯೂಬ್ ಲಿಂಕ್ ಅನ್ನು ಇಲ್ಲಿ ಅಂಟಿಸಿ...",
//           downloadButton: "ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
//           downloadButtonShort: "ಹೋಗಿ",
//           processing: "ಸಂಸ್ಕರಣೆಯಾಗುತ್ತಿದೆ...",
//           videoSection: "ವೀಡಿಯೊ",
//           audioSection: "ಆಡಿಯೊ",
//           download: "ಡೌನ್‌ಲೋಡ್",
//           error: {
//             generic: "ಮಾಧ್ಯಮ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ",
//             invalidUrl: "ಅಮಾನ್ಯ ಯೂಟ್ಯೂಬ್ URL",
//           },
//           disclaimer:
//             "ಹಕ್ಕುತ್ಯಾಗ: ಇದು ಶೈಕ್ಷಣಿಕ ಯೋಜನೆಯಾಗಿದೆ. ಅನಧಿಕೃತ ಡೌನ್‌ಲೋಡ್‌ಗೆ ಬಳಸಬೇಡಿ.",
//         },
//       },
//       te: {
//         translation: {
//           title: "యూట్యూబ్ డౌన్‌లోడర్",
//           subtitle:
//             "మీకు ఇష్టమైన యూట్యూబ్ వీడియోలను ఒకే క్లిక్‌తో అధిక నాణ్యతలో డౌన్‌లోడ్ చేయండి",
//           placeholder: "మీ యూట్యూబ్ లింక్‌ను ఇక్కడ అతికించండి...",
//           downloadButton: "డౌన్‌లోడ్ చేయండి",
//           downloadButtonShort: "వెళ్ళు",
//           processing: "ప్రాసెస్ చేస్తోంది...",
//           videoSection: "వీడియో",
//           audioSection: "ఆడియో",
//           download: "డౌన్‌లోడ్",
//           error: {
//             generic: "మీడియా సమాచారాన్ని పొందడంలో విఫలమైంది",
//             invalidUrl: "చెల్లని యూట్యూబ్ URL",
//           },
//           disclaimer:
//             "నిరాకరణ: ఇది ఒక విద్యాపరమైన ప్రాజెక్ట్. అనధికార డౌన్‌లోడ్‌కు ఉపయోగించవద్దు.",
//         },
//       },
//     },
//     fallbackLng: "en",
//     detection: {
//       order: ["localStorage", "navigator"],
//       caches: ["localStorage"],
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18next;


import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: "YouTube Downloader",
          subtitle:
            "Download your favorite YouTube videos in high quality with just one click",
          placeholder: "Paste your YouTube link here...",
          downloadButton: "Download",
          downloadButtonShort: "Go",
          processing: "Processing...",
          videoSection: "Video",
          audioSection: "Audio",
          download: "Download",
          disclaimer:
            "Disclaimer: This is an educational project. Do not use for unauthorized downloading.",
          error: {
            generic: "Failed to fetch media info",
            invalidUrl: "Invalid YouTube URL",
          },
          description:
            "ClipFlow is your ultimate online video downloader, designed to effortlessly overcome YouTube's download limitations. We provide a swift and dependable solution for downloading YouTube videos. With our intuitive interface, enjoying your favorite content is simpler than ever.",
          supportedPlatforms: "Supported Platforms",
          featuresTitle:
            "Discover the easiest way to download YouTube videos with our highly rated, free tool.",
          features: {
            quality:
              "Choose your preferred quality: from MP4 to MP3, standard to Full HD.",
            compatibility:
              "Seamless compatibility across all devices—download videos on desktop, mobile, or tablet.",
            convert:
              "Convert and download YouTube videos in just a few clicks with our streamlined platform.",
            fastDownloads:
              "Enjoy blazing-fast downloads and unlimited video access at no cost.",
            tips:
              "Unlock expert tips and tricks with our comprehensive YouTube downloading guide.",
          },
          howItWorks: "How It Works",
          stepsSubtext: "Download your favorite videos in just 3 simple steps",
          steps: {
            findVideo: {
              title: "Find Your Video",
              description:
                "Easily download your favorite YouTube videos by following these simple steps:",
            },
            copyUrl: {
              title: "Copy the URL",
              description:
                "Locate the video you want on YouTube and copy its URL from the address bar.",
            },
            download: {
              title: "Download & Enjoy",
              description:
                "Paste the copied link into the download box provided above.",
            },
          },
        },
      },
      fr: {
        translation: {
          title: "Téléchargeur YouTube",
          subtitle:
            "Téléchargez vos vidéos YouTube préférées en haute qualité en un seul clic",
          placeholder: "Collez votre lien YouTube ici...",
          downloadButton: "Télécharger",
          downloadButtonShort: "Aller",
          processing: "Traitement...",
          videoSection: "Vidéo",
          audioSection: "Audio",
          download: "Télécharger",
          disclaimer:
            "Avertissement : Ceci est un projet éducatif. Ne pas utiliser pour des téléchargements non autorisés.",
          error: {
            generic: "Échec de la récupération des informations multimédias",
            invalidUrl: "URL YouTube invalide",
          },
          description:
            "ClipFlow est votre téléchargeur vidéo en ligne ultime, conçu pour surmonter facilement les limitations de téléchargement de YouTube. Nous offrons une solution rapide et fiable pour télécharger des vidéos YouTube. Avec notre interface intuitive, profiter de votre contenu préféré est plus simple que jamais.",
          supportedPlatforms: "Plateformes prises en charge",
          featuresTitle:
            "Découvrez la manière la plus simple de télécharger des vidéos YouTube avec notre outil gratuit hautement noté.",
          features: {
            quality:
              "Choisissez votre qualité préférée : de MP4 à MP3, standard à Full HD.",
            compatibility:
              "Compatibilité fluide sur tous les appareils—téléchargez des vidéos sur ordinateur, mobile ou tablette.",
            convert:
              "Convertissez et téléchargez des vidéos YouTube en quelques clics avec notre plateforme simplifiée.",
            fastDownloads:
              "Profitez de téléchargements ultra-rapides et d’un accès illimité aux vidéos sans frais.",
            tips:
              "Débloquez des astuces et conseils d’experts avec notre guide complet de téléchargement YouTube.",
          },
          howItWorks: "Comment ça fonctionne",
          stepsSubtext: "Téléchargez vos vidéos préférées en seulement 3 étapes simples",
          steps: {
            findVideo: {
              title: "Trouvez votre vidéo",
              description:
                "Téléchargez facilement vos vidéos YouTube préférées en suivant ces étapes simples :",
            },
            copyUrl: {
              title: "Copiez l’URL",
              description:
                "Localisez la vidéo souhaitée sur YouTube et copiez son URL depuis la barre d’adresse.",
            },
            download: {
              title: "Téléchargez et profitez",
              description:
                "Collez le lien copié dans la boîte de téléchargement fournie ci-dessus.",
            },
          },
        },
      },
      hi: {
        translation: {
          title: "यूट्यूब डाउनलोडर",
          subtitle:
            "अपने पसंदीदा यूट्यूब वीडियो को उच्च गुणवत्ता में एक क्लिक में डाउनलोड करें",
          placeholder: "अपना यूट्यूब लिंक यहाँ पेस्ट करें...",
          downloadButton: "डाउनलोड करें",
          downloadButtonShort: "जाओ",
          processing: "प्रसंस्करण...",
          videoSection: "वीडियो",
          audioSection: "ऑडियो",
          download: "डाउनलोड",
          disclaimer:
            "अस्वीकरण: यह एक शैक्षिक परियोजना है। अनधिकृत डाउनलोडिंग के लिए उपयोग न करें।",
          error: {
            generic: "मीडिया जानकारी प्राप्त करने में विफल",
            invalidUrl: "अमान्य यूट्यूब URL",
          },
          description:
            "क्लिपफ्लो आपका अंतिम ऑनलाइन वीडियो डाउनलोडर है, जिसे यूट्यूब की डाउनलोड सीमाओं को आसानी से पार करने के लिए डिज़ाइन किया गया है। हम यूट्यूब वीडियो डाउनलोड करने के लिए एक तेज़ और विश्वसनीय समाधान प्रदान करते हैं। हमारे सहज इंटरफ़ेस के साथ, अपने पसंदीदा कंटेंट का आनंद लेना पहले से कहीं अधिक आसान है।",
          supportedPlatforms: "समर्थित प्लेटफॉर्म",
          featuresTitle:
            "हमारे उच्च रेटेड, मुफ्त टूल के साथ यूट्यूब वीडियो डाउनलोड करने का सबसे आसान तरीका खोजें।",
          features: {
            quality:
              "अपनी पसंदीदा गुणवत्ता चुनें: MP4 से MP3, स्टैंडर्ड से फुल HD तक।",
            compatibility:
              "सभी डिवाइसों पर सहज संगतता—डेस्कटॉप, मोबाइल या टैबलेट पर वीडियो डाउनलोड करें।",
            convert:
              "हमारे सुव्यवस्थित प्लेटफॉर्म के साथ कुछ ही क्लिक में यूट्यूब वीडियो को कन्वर्ट और डाउनलोड करें।",
            fastDownloads:
              "तेज़ डाउनलोड और असीमित वीडियो एक्सेस का मुफ्त में आनंद लें।",
            tips:
              "हमारे व्यापक यूट्यूब डाउनलोडिंग गाइड के साथ विशेषज्ञ टिप्स और ट्रिक्स अनलॉक करें।",
          },
          howItWorks: "यह कैसे काम करता है",
          stepsSubtext: "अपने पसंदीदा वीडियो को केवल 3 सरल चरणों में डाउनलोड करें",
          steps: {
            findVideo: {
              title: "अपना वीडियो खोजें",
              description:
                "इन सरल चरणों का पालन करके अपने पसंदीदा यूट्यूब वीडियो को आसानी से डाउनलोड करें:",
            },
            copyUrl: {
              title: "URL कॉपी करें",
              description:
                "यूट्यूब पर अपनी इच्छित वीडियो ढूंढें और उसके URL को एड्रेस बार से कॉपी करें।",
            },
            download: {
              title: "डाउनलोड करें और आनंद लें",
              description:
                "कॉपी किए गए लिंक को ऊपर दिए गए डाउनलोड बॉक्स में पेस्ट करें।",
            },
          },
        },
      },
      de: {
        translation: {
          title: "YouTube-Downloader",
          subtitle:
            "Laden Sie Ihre Lieblings-YouTube-Videos in hoher Qualität mit nur einem Klick herunter",
          placeholder: "Fügen Sie Ihren YouTube-Link hier ein...",
          downloadButton: "Herunterladen",
          downloadButtonShort: "Los",
          processing: "Verarbeitung...",
          videoSection: "Video",
          audioSection: "Audio",
          download: "Herunterladen",
          disclaimer:
            "Haftungsausschluss: Dies ist ein Bildungsprojekt. Nicht für unbefugtes Herunterladen verwenden.",
          error: {
            generic: "Fehler beim Abrufen der Medieninformationen",
            invalidUrl: "Ungültige YouTube-URL",
          },
          description:
            "ClipFlow ist Ihr ultimativer Online-Video-Downloader, der entwickelt wurde, um die Download-Beschränkungen von YouTube mühelos zu überwinden. Wir bieten eine schnelle und zuverlässige Lösung zum Herunterladen von YouTube-Videos. Mit unserer intuitiven Benutzeroberfläche ist das Genießen Ihrer Lieblingsinhalte einfacher denn je.",
          supportedPlatforms: "Unterstützte Plattformen",
          featuresTitle:
            "Entdecken Sie die einfachste Möglichkeit, YouTube-Videos mit unserem hoch bewerteten, kostenlosen Tool herunterzuladen.",
          features: {
            quality:
              "Wählen Sie Ihre bevorzugte Qualität: von MP4 bis MP3, Standard bis Full HD.",
            compatibility:
              "Nahtlose Kompatibilität mit allen Geräten—laden Sie Videos auf Desktop, Mobilgerät oder Tablet herunter.",
            convert:
              "Konvertieren und laden Sie YouTube-Videos mit nur wenigen Klicks über unsere optimierte Plattform herunter.",
            fastDownloads:
              "Genießen Sie blitzschnelle Downloads und unbegrenzten Videozugriff kostenlos.",
            tips:
              "Entsperren Sie Expertentipps und -tricks mit unserem umfassenden YouTube-Download-Leitfaden.",
          },
          howItWorks: "So funktioniert’s",
          stepsSubtext: "Laden Sie Ihre Lieblingsvideos in nur 3 einfachen Schritten herunter",
          steps: {
            findVideo: {
              title: "Finden Sie Ihr Video",
              description:
                "Laden Sie Ihre Lieblings-YouTube-Videos einfach herunter, indem Sie diesen einfachen Schritten folgen:",
            },
            copyUrl: {
              title: "URL kopieren",
              description:
                "Finden Sie das gewünschte Video auf YouTube und kopieren Sie die URL aus der Adressleiste.",
            },
            download: {
              title: "Herunterladen & Genießen",
              description:
                "Fügen Sie den kopierten Link in das oben bereitgestellte Download-Feld ein.",
            },
          },
        },
      },
      es: {
        translation: {
          title: "Descargador de YouTube",
          subtitle:
            "Descarga tus videos favoritos de YouTube en alta calidad con un solo clic",
          placeholder: "Pega tu enlace de YouTube aquí...",
          downloadButton: "Descargar",
          downloadButtonShort: "Ir",
          processing: "Procesando...",
          videoSection: "Video",
          audioSection: "Audio",
          download: "Descargar",
          disclaimer:
            "Descargo de responsabilidad: Este es un proyecto educativo. No lo utilice para descargas no autorizadas.",
          error: {
            generic: "Error al obtener la información del medio",
            invalidUrl: "URL de YouTube inválida",
          },
          description:
            "ClipFlow es tu descargador de videos en línea definitivo, diseñado para superar fácilmente las limitaciones de descarga de YouTube. Ofrecemos una solución rápida y confiable para descargar videos de YouTube. Con nuestra interfaz intuitiva, disfrutar de tu contenido favorito es más fácil que nunca.",
          supportedPlatforms: "Plataformas compatibles",
          featuresTitle:
            "Descubre la forma más fácil de descargar videos de YouTube con nuestra herramienta gratuita altamente calificada.",
          features: {
            quality:
              "Elige tu calidad preferida: desde MP4 hasta MP3, estándar hasta Full HD.",
            compatibility:
              "Compatibilidad perfecta con todos los dispositivos—descarga videos en escritorio, móvil o tableta.",
            convert:
              "Convierte y descarga videos de YouTube en solo unos clics con nuestra plataforma optimizada.",
            fastDownloads:
              "Disfruta de descargas ultrarrápidas y acceso ilimitado a videos sin costo.",
            tips:
              "Desbloquea consejos y trucos de expertos con nuestra guía completa de descarga de YouTube.",
          },
          howItWorks: "Cómo funciona",
          stepsSubtext: "Descarga tus videos favoritos en solo 3 pasos simples",
          steps: {
            findVideo: {
              title: "Encuentra tu video",
              description:
                "Descarga fácilmente tus videos favoritos de YouTube siguiendo estos simples pasos:",
            },
            copyUrl: {
              title: "Copia la URL",
              description:
                "Localiza el video que deseas en YouTube y copia su URL desde la barra de direcciones.",
            },
            download: {
              title: "Descarga y disfruta",
              description:
                "Pega el enlace copiado en el cuadro de descarga proporcionado arriba.",
            },
          },
        },
      },
      ta: {
        translation: {
          title: "யூடியூப் பதிவிறக்கி",
          subtitle:
            "ஒரே கிளிக்கில் உங்களுக்கு பிடித்த யூடியூப் வீடியோக்களை உயர் தரத்தில் பதிவிறக்கவும்",
          placeholder: "உங்கள் யூடியூப் இணைப்பை இங்கே ஒட்டவும்...",
          downloadButton: "பதிவிறக்கவும்",
          downloadButtonShort: "செல்",
          processing: "செயலாக்கப்படுகிறது...",
          videoSection: "வீடியோ",
          audioSection: "ஆடியோ",
          download: "பதிவிறக்கவும்",
          disclaimer:
            "மறுப்பு: இது ஒரு கல்வி திட்டமாகும். அங்கீகரிக்கப்படாத பதிவிறக்கங்களுக்கு பயன்படுத்த வேண்டாம்.",
          error: {
            generic: "மீடியா தகவலைப் பெறுவதில் தோல்வி",
            invalidUrl: "தவறான யூடியூப் URL",
          },
          description:
            "கிளிப்ஃப்ளோ உங்கள் இறுதி ஆன்லைன் வீடியோ பதிவிறக்கி, யூடியூப்பின் பதிவிறக்க கட்டுப்பாடுகளை எளிதாக மீறுவதற்கு வடிவமைக்கப்பட்டது. நாங்கள் விரைவான மற்றும் நம்பகமான தீர்வை வழங்குகிறோம். எங்கள் எளிமையான இடைமுகத்துடன், உங்களுக்கு பிடித்த உள்ளடக்கத்தை அனுபவிப்பது இதுவரை இல்லாத அளவு எளிது.",
          supportedPlatforms: "ஆதரிக்கப்படும் தளங்கள்",
          featuresTitle:
            "எங்கள் உயர்ந்த மதிப்பீட்டு, இலவச கருவியுடன் யூடியூப் வீடியோக்களை பதிவிறக்குவதற்கு எளிதான வழியைக் கண்டறியவும்.",
          features: {
            quality:
              "உங்களுக்கு விருப்பமான தரத்தை தேர்வு செய்யவும்: MP4 முதல் MP3, நிலையானது முதல் முழு HD வரை.",
            compatibility:
              "எல்லா சாதனங்களுடனும் தடையற்ற இணக்கத்தன்மை—டெஸ்க்டாப், மொபைல் அல்லது டேப்லெட்டில் வீடியோக்களை பதிவிறக்கவும்.",
            convert:
              "எங்கள் ஒழுங்கமைக்கப்பட்ட தளத்துடன் சில கிளிக்குகளில் யூடியூப் வீடியோக்களை மாற்றி பதிவிறக்கவும்.",
            fastDownloads:
              "மின்னல் வேக பதிவிறக்கங்கள் மற்றும் வரம்பற்ற வீடியோ அணுகலை இலவசமாக அனுபவிக்கவும்.",
            tips:
              "எங்கள் விரிவான யூடியூப் பதிவிறக்க வழிகாட்டியுடன் நிபுணர் உதவிக்குறிப்புகள் மற்றும் தந்திரங்களை அனுபவிக்கவும்.",
          },
          howItWorks: "எப்படி இயங்குகிறது",
          stepsSubtext: "மூன்று எளிய படிகளில் உங்களுக்கு பிடித்த வீடியோக்களை பதிவிறக்கவும்",
          steps: {
            findVideo: {
              title: "உங்கள் வீடியோவை கண்டறியவும்",
              description:
                "இந்த எளிய படிகளைப் பின்பற்றி உங்களுக்கு பிடித்த யூடியூப் வீடியோக்களை எளிதாக பதிவிறக்கவும்:",
            },
            copyUrl: {
              title: "URL-ஐ நகலெடுக்கவும்",
              description:
                "நீங்கள் விரும்பும் வீடியோவை யூடியூப்பில் கண்டறிந்து, முகவரி பட்டியில் இருந்து அதன் URL-ஐ நகலெடுக்கவும்.",
            },
            download: {
              title: "பதிவிறக்கவும் & அனுபவிக்கவும்",
              description:
                "நகலெடுக்கப்பட்ட இணைப்பை மேலே வழங்கப்பட்ட பதிவிறக்க பெட்டியில் ஒட்டவும்.",
            },
          },
        },
      },
      ml: {
        translation: {
          title: "യൂട്യൂബ് ഡൗൺലോഡർ",
          subtitle:
            "പ്രിയപ്പെട്ട യൂട്യൂബ് വീഡിയോകൾ ഒറ്റ ക്ലിക്കിൽ ഉയർന്ന നിലവാരത്തിൽ ഡൗൺലോഡ് ചെയ്യാം",
          placeholder: "നിന്റെ യൂട്യൂബ് ലിങ്ക് ഇവിടെ പേസ്റ്റ് ചെയുക...",
          downloadButton: "ഡൗൺലോഡ്",
          downloadButtonShort: "ഗോ",
          processing: "പ്രോസസ്സിംഗ്...",
          videoSection: "വീഡിയോ",
          audioSection: "ഓഡിയോ",
          download: "ഡൗൺലോഡ്",
          disclaimer:
            "നിരാകരണം: ഇത് ഒരു വിദ്യാഭ്യാസ പദ്ധതിയാണ്. അനധികൃത ഡൗൺലോഡുകൾക്ക് ഉപയോഗിക്കരുത്.",
          error: {
            generic: "മീഡിയ വിവരങ്ങൾ ശേഖരിക്കുന്നതിൽ പരാജയപ്പെട്ടു",
            invalidUrl: "അസാധുവായ യൂട്യൂബ് URL",
          },
          description:
            "ക്ലിപ്ഫ്ലോ ഓൺലൈൻ വീഡിയോ ഡൗൺലോഡർ, യൂട്യൂബിന്റെ ഡൗൺലോഡ് നിയന്ത്രണങ്ങൾ എളുപ്പത്തിൽ മറികടക്കാൻ രൂപകൽപ്പന ചെയ്തിരിക്കുന്നു. ഞങ്ങൾ വേഗമേറിയതും വിശ്വസനീയവുമായ ഒരു പരിഹാരം നൽകുന്നു. ഞങ്ങളുടെ ലളിതമായ ഇന്റർഫേസ് ഉപയോഗിച്ച്, പ്രിയപ്പെട്ട ഉള്ളടക്കം ആസ്വദിക്കുന്നത് ഇതുവരെ ഇല്ലാത്തവിധം എളുപ്പമാണ്.",
          supportedPlatforms: "പിന്തുണയ്ക്കുന്ന പ്ലാറ്റ്‌ഫോമുകൾ",
          featuresTitle:
            "ഞങ്ങളുടെ ഉയർന്ന റേറ്റിംഗുള്ള, സൗജന്യ ടൂൾ ഉപയോഗിച്ച് യൂട്യൂബ് വീഡിയോകൾ ഡൗൺലോഡ് ചെയ്യാനുള്ള ഏറ്റവും എളുപ്പമായ വഴി കണ്ടെത്തുക.",
          features: {
            quality:
              "ഇഷ്ടപ്പെട്ട ഗുണനിലവാരം തിരഞ്ഞെടുക്കുക: MP4 മുതൽ MP3 വരെ, സ്റ്റാൻഡേർഡ് മുതൽ ഫുൾ HD വരെ.",
            compatibility:
              "എല്ലാ ഉപകരണങ്ങളുമായും തടസ്സമില്ലാതെ പൊരുത്തപ്പെടുന്നു—ഡെസ്ക്ടോപ്പ്, മൊബൈൽ, അല്ലെങ്കിൽ ടാബ്‌ലെറ്റിൽ വീഡിയോകൾ ഡൗൺലോഡ് ചെയ്യുക.",
            convert:
              "ഞങ്ങളുടെ ഒഴുക്കുള്ള പ്ലാറ്റ്‌ഫോമിൽ ഏതാനും ക്ലിക്കുകളിൽ യൂട്യൂബ് വീഡിയോകൾ മാറ്റി ഡൗൺലോഡ് ചെയ്യുക.",
            fastDownloads:
              "മിന്നൽവേഗത്തിലുള്ള ഡൗൺലോഡുകളും പരിധിയില്ലാത്ത വീഡിയോ ആക്സസും സൗജന്യമായി ആസ്വദിക്കുക.",
            tips:
              "ഞങ്ങളുടെ സമഗ്രമായ യൂട്യൂബ് ഡൗൺലോഡിംഗ് ഗൈഡ് ഉപയോഗിച്ച് വിദഗ്ദ്ധ ഉപദേശങ്ങളും തന്ത്രങ്ങളും അൺലോക്ക് ചെയ്യുക.",
          },
          howItWorks: "എങ്ങനെ പ്രവർത്തിക്കുന്നു",
          stepsSubtext: "മൂന്ന് ലളിതമായ ഘട്ടങ്ങളിൽ പ്രിയപ്പെട്ട വീഡിയോകൾ ഡൗൺലോഡ് ചെയ്യുക",
          steps: {
            findVideo: {
              title: "വീഡിയോ കണ്ടെത്തുക",
              description:
                "ഈ ലളിതമായ ഘട്ടങ്ങൾ പിന്തുടർന്ന് പ്രിയപ്പെട്ട യൂട്യൂബ് വീഡിയോകൾ എളുപ്പത്തിൽ ഡൗൺലോഡ് ചെയ്യുക:",
            },
            copyUrl: {
              title: "URL പകർത്തുക",
              description:
                "താങ്കൾക്  വേണ്ട വീഡിയോ യൂട്യൂബിൽ കണ്ടെത്തി അതിന്റെ URL അഡ്രസ് ബാറിൽ നിന്ന് പകർത്തുക.",
            },
            download: {
              title: "ഡൗൺലോഡ് ചെയ്യുക & ആസ്വദിക്കുക",
              description:
                "പകർത്തിയ ലിങ്ക് മുകളിൽ നൽകിയിട്ടുള്ള ഡൗൺലോഡ് ബോക്സിൽ പേസ്റ്റ് ചെയ്യുക.",
            },
          },
        },
      },
      kn: {
        translation: {
          title: "ಯೂಟ್ಯೂಬ್ ಡೌನ್‌ಲೋಡರ್",
          subtitle:
            "ನಿಮ್ಮ ಮೆಚ್ಚಿನ ಯೂಟ್ಯೂಬ್ ವೀಡಿಯೊಗಳನ್ನು ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಉತ್ತಮ ಗುಣಮಟ್ಟದಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
          placeholder: "ನಿಮ್ಮ ಯೂಟ್ಯೂಬ್ ಲಿಂಕ್ ಅನ್ನು ಇಲ್ಲಿ ಅಂಟಿಸಿ...",
          downloadButton: "ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
          downloadButtonShort: "ಹೋಗಿ",
          processing: "ಸಂಸ್ಕರಣೆಯಾಗುತ್ತಿದೆ...",
          videoSection: "ವೀಡಿಯೊ",
          audioSection: "ಆಡಿಯೊ",
          download: "ಡೌನ್‌ಲೋಡ್",
          disclaimer:
            "ಹಕ್ಕುತ್ಯಾಗ: ಇದು ಶೈಕ್ಷಣಿಕ ಯೋಜನೆಯಾಗಿದೆ. ಅನಧಿಕೃತ ಡೌನ್‌ಲೋಡ್‌ಗೆ ಬಳಸಬೇಡಿ.",
          error: {
            generic: "ಮಾಧ್ಯಮ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ",
            invalidUrl: "ಅಮಾನ್ಯ ಯೂಟ್ಯೂಬ್ URL",
          },
          description:
            "ಕ್ಲಿಪ್‌ಫ್ಲೋ ನಿಮ್ಮ ಅಂತಿಮ ಆನ್‌ಲೈನ್ ವೀಡಿಯೊ ಡೌನ್‌ಲೋಡರ್ ಆಗಿದೆ, ಇದು ಯೂಟ್ಯೂಬ್‌ನ ಡೌನ್‌ಲೋಡ್ ಮಿತಿಗಳನ್ನು ಸುಲಭವಾಗಿ ಮೀರಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ನಾವು ಯೂಟ್ಯೂಬ್ ವೀಡಿಯೊಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ವೇಗವಾದ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಪರಿಹಾರವನ್ನು ಒದಗಿಸುತ್ತೇವೆ. ನಮ್ಮ ಸಹಜವಾದ ಇಂಟರ್‌ಫೇಸ್‌ನೊಂದಿಗೆ, ನಿಮ್ಮ ಮೆಚ್ಚಿನ ವಿಷಯವನ್ನು ಆನಂದಿಸುವುದು ಈಗಿನ ಯಾವುದಕ್ಕಿಂತಲೂ ಸುಲಭವಾಗಿದೆ.",
          supportedPlatforms: "ಬೆಂಬಲಿತ ವೇದಿಕೆಗಳು",
          featuresTitle:
            "ನಮ್ಮ ಉನ್ನತ ರೇಟೆಡ್, ಉಚಿತ ಸಾಧನದೊಂದಿಗೆ ಯೂಟ್ಯೂಬ್ ವೀಡಿಯೊಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಸುಲಭವಾದ ಮಾರ್ಗವನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",
          features: {
            quality:
              "ನಿಮ್ಮ ಆದ್ಯತೆಯ ಗುಣಮಟ್ಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ: MP4 ರಿಂದ MP3, ಸ್ಟ್ಯಾಂಡರ್ಡ್‌ನಿಂದ ಫುಲ್ HD ವರೆಗೆ.",
            compatibility:
              "ಎಲ್ಲಾ ಸಾಧನಗಳೊಂದಿಗೆ ತಡೆರಹಿತ ಹೊಂದಾಣಿಕೆ—ಡೆಸ್ಕ್‌ಟಾಪ್, ಮೊಬೈಲ್ ಅಥವಾ ಟ್ಯಾಬ್ಲೆಟ್‌ನಲ್ಲಿ ವೀಡಿಯೊಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.",
            convert:
              "ನಮ್ಮ ಸುವ್ಯವಸ್ಥಿತ ವೇದಿಕೆಯೊಂದಿಗೆ ಕೆಲವೇ ಕ್ಲಿಕ್‌ಗಳಲ್ಲಿ ಯೂಟ್ಯೂಬ್ ವೀಡಿಯೊಗಳನ್ನು ಪರಿವರ್ತಿಸಿ ಮತ್ತು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.",
            fastDownloads:
              "ವೇಗದ ಡೌನ್‌ಲೋಡ್‌ಗಳನ್ನು ಮತ್ತು ಅನಿಯಮಿತ ವೀಡಿಯೊ ಪ್ರವೇಶವನ್ನು ಉಚಿತವಾಗಿ ಆನಂದಿಸಿ.",
            tips:
              "ನಮ್ಮ ಸಮಗ್ರ ಯೂಟ್ಯೂಬ್ ಡೌನ್‌ಲೋಡಿಂಗ್ ಮಾರ್ಗದರ್ಶಿಯೊಂದಿಗೆ ತಜ್ಞರ ಸಲಹೆಗಳು ಮತ್ತು ತಂತ್ರಗಳನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಿ.",
          },
          howItWorks: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
          stepsSubtext: "ಕೇವಲ 3 ಸರಳ ಹಂತಗಳಲ್ಲಿ ನಿಮ್ಮ ಮೆಚ್ಚಿನ ವೀಡಿಯೊಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
          steps: {
            findVideo: {
              title: "ನಿಮ್ಮ ವೀಡಿಯೊವನ್ನು ಕಂಡುಕೊಳ್ಳಿ",
              description:
                "ಈ ಸರಳ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ ನಿಮ್ಮ ಮೆಚ್ಚಿನ ಯೂಟ್ಯೂಬ್ ವೀಡಿಯೊಗಳನ್ನು ಸುಲಭವಾಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ:",
            },
            copyUrl: {
              title: "URL ಕಾಪಿ ಮಾಡಿ",
              description:
                "ಯೂಟ್ಯೂಬ್‌ನಲ್ಲಿ ನೀವು ಬಯಸುವ ವೀಡಿಯೊವನ್ನು ಕಂಡುಕೊಂಡು ಅದರ URL ಅನ್ನು ಅಡ್ರೆಸ್ ಬಾರ್‌ನಿಂದ ಕಾಪಿ ಮಾಡಿ.",
            },
            download: {
              title: "ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಆನಂದಿಸಿ",
              description:
                "ಕಾಪಿ ಮಾಡಿದ ಲಿಂಕ್ ಅನ್ನು ಮೇಲೆ ಒದಗಿಸಲಾದ ಡೌನ್‌ಲೋಡ್ ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಅಂಟಿಸಿ.",
            },
          },
        },
      },
      te: {
        translation: {
          title: "యూట్యూబ్ డౌన్‌లోడర్",
          subtitle:
            "మీకు ఇష్టమైన యూట్యూబ్ వీడియోలను ఒకే క్లిక్‌తో అధిక నాణ్యతలో డౌన్‌లోడ్ చేయండి",
          placeholder: "మీ యూట్యూబ్ లింక్‌ను ఇక్కడ అతికించండి...",
          downloadButton: "డౌన్‌లోడ్ చేయండి",
          downloadButtonShort: "వెళ్ళు",
          processing: "ప్రాసెస్ చేస్తోంది...",
          videoSection: "వీడియో",
          audioSection: "ఆడియో",
          download: "డౌన్‌లోడ్",
          disclaimer:
            "నిరాకరణ: ఇది ఒక విద్యాపరమైన ప్రాజెక్ట్. అనధికార డౌన్‌లోడ్‌కు ఉపయోగించవద్దు.",
          error: {
            generic: "మీడియా సమాచారాన్ని పొందడంలో విఫలమైంది",
            invalidUrl: "చెల్లని యూట్యూబ్ URL",
          },
          description:
            "క్లిప్‌ఫ్లో మీ అంతిమ ఆన్‌లైన్ వీడియో డౌన్‌లోడర్, యూట్యూబ్ డౌన్‌లోడ్ పరిమితులను సులభంగా అధిగమించడానికి రూపొందించబడింది. మేము యూట్యూబ్ వీడియోలను డౌన్‌లోడ్ చేయడానికి వేగవంతమైన మరియు నమ్మదగిన పరిష్కారాన్ని అందిస్తాము. మా సహజమైన ఇంటర్‌ఫేస్‌తో, మీకు ఇష్టమైన కంటెంట్‌ను ఆస్వాదించడం ఇంతకు ముందెన్నడూ లేనంత సులభం.",
          supportedPlatforms: "మద్దతు ఇచ్చే ప్లాట్‌ఫారమ్‌లు",
          featuresTitle:
            "మా అధిక రేటింగ్ పొందిన, ఉచిత సాధనంతో యూట్యూబ్ వీడియోలను డౌన్‌లోడ్ చేయడానికి సులభమైన మార్గాన్ని కనుగొనండి.",
          features: {
            quality:
              "మీకు ఇష్టమైన నాణ్యతను ఎంచుకోండి: MP4 నుండి MP3, స్టాండర్డ్ నుండి ఫుల్ HD వరకు.",
            compatibility:
              "అన్ని పరికరాలతో సజావుగా అనుకూలత—డెస్క్‌టాప్, మొబైల్ లేదా టాబ్లెట్‌లో వీడియోలను డౌన్‌లోడ్ చేయండి.",
            convert:
              "మా సునాయాసమైన ప్లాట్‌ఫారమ్‌తో కొన్ని క్లిక్‌లలో యూట్యూబ్ వీడియోలను మార్చండి మరియు డౌన్‌లోడ్ చేయండి.",
            fastDownloads:
              "వేగవంతమైన డౌన్‌లోడ్‌లు మరియు అపరిమిత వీడియో యాక్సెస్‌ను ఉచితంగా ఆస్వాదించండి.",
            tips:
              "మా సమగ్ర యూట్యూబ్ డౌన్‌లోడింగ్ గైడ్‌తో నిపుణుల చిట్కాలు మరియు ట్రిక్‌లను అన్‌లాక్ చేయండి.",
          },
          howItWorks: "ఇది ఎలా పనిచేస్తుంది",
          stepsSubtext: "కేవలం 3 సరళ దశల్లో మీకు ఇష్టమైన వీడియోలను డౌన్‌లోడ్ చేయండి",
          steps: {
            findVideo: {
              title: "మీ వీడియోను కనుగొనండి",
              description:
                "ఈ సరళ దశలను అనుసరించడం ద్వారా మీకు ఇష్టమైన యూట్యూబ్ వీడియోలను సులభంగా డౌన్‌లోడ్ చేయండి:",
            },
            copyUrl: {
              title: "URLని కాపీ చేయండి",
              description:
                "యూట్యూబ్‌లో మీకు కావలసిన వీడియోను కనుగొని, దాని URLని అడ్రస్ బార్ నుండి కాపీ చేయండి.",
            },
            download: {
              title: "డౌన్‌లోడ్ చేయండి & ఆస్వాదించండి",
              description:
                "కాపీ చేసిన లింక్‌ను పైన ఇచ్చిన డౌన్‌లోడ్ బాక్స్‌లో అతికించండి.",
            },
          },
        },
      },
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;