export type Language = 'en' | 'rw' | 'fr';

export const translations = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.news': 'News',
    'nav.help': 'Help',
    'nav.contact': 'Contact',
    'nav.getAccess': 'Get Access',
    'hero.title': 'Rwanda Government Services Portal',
    'hero.subtitle': 'Find and access all government services in one place. Get information about taxes, business registration, immigration, health services, and more.',
    'search.placeholder': 'Search for government services (e.g., passport, tax, business registration)',
    'search.accessService': 'Access Service',
    'categories.title': 'Service Categories',
    'quickLinks.title': 'Quick Links',
    'ministries.title': 'Government Ministries and Contacts',
    'ministries.subtitle': 'Find contact information for Rwanda\'s government ministries and departments.',
    'back.home': '← Back to Home'
  },
  rw: {
    'nav.home': 'Ahabanza',
    'nav.services': 'Serivisi',
    'nav.about': 'Ibyerekeye',
    'nav.news': 'Amakuru',
    'nav.help': 'Ubufasha',
    'nav.contact': 'Twandikire',
    'nav.getAccess': 'Kora Serivisi',
    'hero.title': 'Urubuga rwa Serivisi za Leta y\'u Rwanda',
    'hero.subtitle': 'Shakisha kandi ubone serivisi zose za Leta ahantu hamwe. Kubona amakuru yerekeye imisoro, kwandikisha ubucuruzi, abinjira n\'abasohoka mu gihugu, serivisi z\'ubuzima, n\'ibindi.',
    'search.placeholder': 'Shakisha serivisi za Leta (urugero: pasiporo, imisoro, kwandikisha ubucuruzi)',
    'search.accessService': 'Kora Serivisi',
    'categories.title': 'Ibyiciro bya Serivisi',
    'quickLinks.title': 'Aho Wakanda Vuba',
    'ministries.title': 'Minisiteri na Serivisi za Leta',
    'ministries.subtitle': 'Shakira hano amakuru yerekeye Minisiteri na serivisi za Leta y\'u Rwanda.',
    'back.home': '← Subira Ahabanza'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.news': 'Actualités',
    'nav.help': 'Aide',
    'nav.contact': 'Contact',
    'nav.getAccess': 'Accéder',
    'hero.title': 'Portail des Services Gouvernementaux du Rwanda',
    'hero.subtitle': 'Trouvez et accédez à tous les services gouvernementaux en un seul endroit. Obtenez des informations sur les impôts, l\'enregistrement des entreprises, l\'immigration, les services de santé, et plus encore.',
    'search.placeholder': 'Rechercher des services gouvernementaux (ex: passeport, impôts, enregistrement d\'entreprise)',
    'search.accessService': 'Accéder au Service',
    'categories.title': 'Catégories de Services',
    'quickLinks.title': 'Liens Rapides',
    'ministries.title': 'Ministères et Contacts Gouvernementaux',
    'ministries.subtitle': 'Trouvez les coordonnées des ministères et départements gouvernementaux du Rwanda.',
    'back.home': '← Retour à l\'Accueil'
  }
};

export function useTranslation(lang: Language = 'en') {
  return {
    t: (key: keyof typeof translations['en']) => translations[lang][key] || key
  };
}