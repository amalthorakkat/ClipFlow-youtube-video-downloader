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
          error: {
            generic: "மீடியா தகவலைப் பெறுவதில் தோல்வி",
            invalidUrl: "தவறான யூடியூப் URL",
          },
          disclaimer:
            "மறுப்பு: இது ஒரு கல்வி திட்டமாகும். அங்கீகரிக்கப்படாத பதிவிறக்கங்களுக்கு பயன்படுத்த வேண்டாம்.",
        },
      },
      ml: {
        translation: {
          title: "യൂട്യൂബ് ഡൗൺലോഡർ",
          subtitle:
            "പ്രിയപ്പെട്ട യൂട്യൂബ് വീഡിയോകൾ ഒറ്റ ക്ലിക്കിൽ ഉയർന്ന നിലവാരത്തിൽ ഡൗൺലോഡ് ചെയ്യാം ",
          placeholder: "നിന്റെ യൂട്യൂബ് ലിങ്ക് ഇവിടെ പേസ്റ്റ് ചെയുക...",
          downloadButton: "ഡൗൺലോഡ്",
          downloadButtonShort: "ഗോ",
          processing: "പ്രോസസ്സിംഗ്...",
          videoSection: "വീഡിയോ",
          audioSection: "ഓഡിയോ",
          download: "ഡൗൺലോഡ്",
          error: {
            generic: "മീഡിയ വിവരങ്ങൾ ശേഖരിക്കുന്നതിൽ പരാജയപ്പെട്ടു",
            invalidUrl: "അസാധുവായ യൂട്യൂബ് URL",
          },
          disclaimer:
            "നിരാകരണം: ഇത് ഒരു വിദ്യാഭ്യാസ പദ്ധതിയാണ്. അനധികൃത ഡൗൺലോഡുകൾക്ക് ഉപയോഗിക്കരുത്.",
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
          error: {
            generic: "ಮಾಧ್ಯಮ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ",
            invalidUrl: "ಅಮಾನ್ಯ ಯೂಟ್ಯೂಬ್ URL",
          },
          disclaimer:
            "ಹಕ್ಕುತ್ಯಾಗ: ಇದು ಶೈಕ್ಷಣಿಕ ಯೋಜನೆಯಾಗಿದೆ. ಅನಧಿಕೃತ ಡೌನ್‌ಲೋಡ್‌ಗೆ ಬಳಸಬೇಡಿ.",
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
          error: {
            generic: "మీడియా సమాచారాన్ని పొందడంలో విఫలమైంది",
            invalidUrl: "చెల్లని యూట్యూబ్ URL",
          },
          disclaimer:
            "నిరాకరణ: ఇది ఒక విద్యాపరమైన ప్రాజెక్ట్. అనధికార డౌన్‌లోడ్‌కు ఉపయోగించవద్దు.",
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
