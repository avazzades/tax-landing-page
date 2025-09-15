import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "services": "Services",
        "about": "About",
        "pricing": "Pricing",
        "resources": "Resources",
        "contact": "Contact"
      },
      "hero": {
        "title": "Your Trusted",
        "subtitle": "Tax & Accounting",
        "partner": "Partner",
        "description": "Professional tax preparation, strategic planning, and accounting services that save you time and money. From individuals to enterprises.",
        "cta": "Get Started",
        "trusted": "Trusted by 5,000+ clients"
      },
      "company": "TaxPro",
      "tagline": "Tax & Accounting"
    }
  },
  es: {
    translation: {
      "nav": {
        "services": "Servicios",
        "about": "Acerca de",
        "pricing": "Precios",
        "resources": "Recursos",
        "contact": "Contacto"
      },
      "hero": {
        "title": "Su Socio de Confianza en",
        "subtitle": "Impuestos y Contabilidad",
        "partner": "",
        "description": "Preparación profesional de impuestos, planificación estratégica y servicios contables que le ahorran tiempo y dinero. Desde individuos hasta empresas.",
        "cta": "Comenzar",
        "trusted": "Confiado por más de 5,000 clientes"
      },
      "company": "TaxPro",
      "tagline": "Impuestos y Contabilidad"
    }
  },
  tr: {
    translation: {
      "nav": {
        "services": "Hizmetler",
        "about": "Hakkımızda",
        "pricing": "Fiyatlar",
        "resources": "Kaynaklar",
        "contact": "İletişim"
      },
      "hero": {
        "title": "Güvenilir",
        "subtitle": "Vergi ve Muhasebe",
        "partner": "Ortağınız",
        "description": "Bireylerden kurumlara kadar zamanınızı ve paranızı tasarruf eden profesyonel vergi hazırlığı, stratejik planlama ve muhasebe hizmetleri.",
        "cta": "Başlayın",
        "trusted": "5,000+ müşteri tarafından güveniliyor"
      },
      "company": "TaxPro",
      "tagline": "Vergi ve Muhasebe"
    }
  },
  az: {
    translation: {
      "nav": {
        "services": "Xidmətlər",
        "about": "Haqqımızda",
        "pricing": "Qiymətlər",
        "resources": "Resurslar",
        "contact": "Əlaqə"
      },
      "hero": {
        "title": "Sizin Etibarlı",
        "subtitle": "Vergi və Mühasibat",
        "partner": "Tərəfdaşınız",
        "description": "Peşəkar vergi hazırlığı, strateji planlaşdırma və mühasibat xidmətləri ki, vaxtınıza və pulunuza qənaət edir. Fərdlərdən müəssisələrə qədər.",
        "cta": "Başla",
        "trusted": "5,000+ müştəri tərəfindən güvənilir"
      },
      "company": "TaxPro",
      "tagline": "Vergi və Mühasibat"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
