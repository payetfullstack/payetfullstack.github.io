// English/Spanish switch for the TickTone page.
// English lives in the HTML (works without JS, and is what search engines read).
// Spanish lives here, keyed by each element's data-i18n attribute.
(() => {
  const es = {
    'meta.title': 'TickTone: Afinador y Metrónomo',
    'skip': 'Saltar al contenido',
    'nav.features': 'Funciones',
    'nav.privacy': 'Privacidad',
    'nav.contact': 'Contacto',

    'hero.eyebrow': 'Afinador de guitarra + metrónomo',
    'hero.title': 'Afina rápido.<br><em>Clava el tempo.</em>',
    'hero.lead': 'Un afinador de guitarra preciso y un metrónomo exacto en una sola app, pensada para usarse con una mano mientras sujetas la guitarra.',
    'cta.soon': 'Muy pronto en',
    'cta.features': 'Ver funciones',
    'hero.free': 'Gratis',
    'hero.account': 'Sin cuentas ni registros',

    'app.tuner': 'Afinador',
    'app.a4': 'La4 = 440 Hz',
    'app.tighten': 'Tensar',
    'app.intune': 'Afinada',
    'app.metronome': 'Metrónomo',
    'app.tap': 'Tap',

    'stat.lowE': 'Fiable incluso en la sexta cuerda (Mi grave)',
    'stat.bpm': 'Tempo exacto a la muestra, sin desvíos',
    'stat.zero': '0 grabaciones',
    'stat.private': 'El sonido se analiza en tu móvil y nunca se guarda',

    'features.kicker': 'Funciones',
    'features.title': 'Dos herramientas. Una mano.',
    'features.lead': 'Todo lo que necesitas antes y durante el ensayo, y nada que sobre.',
    'tuner.title': 'Afinador de guitarra',
    'tuner.1': 'Detección de tono precisa en tiempo real, fiable incluso en la sexta cuerda (Mi grave)',
    'tuner.2': 'Indicaciones claras: <strong>Tensar</strong>, <strong>Aflojar</strong> o <strong>Afinada</strong>',
    'tuner.3': 'Indicador de cents grande (−50 a +50) con colores rojo, amarillo y verde',
    'tuner.4': 'Modo automático que detecta la cuerda que tocas, o elige la cuerda tú',
    'tuner.5': 'Tono de referencia ajustable, La4 = 430–450 Hz',
    'tuner.6': 'La pantalla no se apaga mientras afinas',
    'metro.title': 'Metrónomo',
    'metro.1': 'De 30 a 300 BPM con deslizador, botones +/− o escribiendo el tempo exacto',
    'metro.2': 'Tap tempo',
    'metro.3': 'Compases 2/4, 3/4, 4/4, 5/4, 6/8, 7/8 y personalizados',
    'metro.4': 'Negras, corcheas, tresillos y semicorcheas',
    'metro.5': 'Acento en el primer tiempo, tres sonidos y control de volumen',
    'metro.6': 'Recuerda tus últimos ajustes',

    'why.kicker': 'Por dentro',
    'why.title': 'Hecha para ensayar',
    'why.timing.title': 'Un tempo que nunca se desvía',
    'why.timing.body': 'Los clics los coloca el motor de audio, muestra a muestra, no la pantalla. Cambia el tempo mientras suena y sigue desde el mismo tiempo.',
    'why.bg.title': 'Sigue sonando en tu bolsillo',
    'why.bg.body': 'Bloquea la pantalla o cambia de app y sigue marcando el tempo, con pausa y parada en la notificación. Se pausa con las llamadas y al desconectar los auriculares.',
    'why.privacy.title': 'Privada por diseño',
    'why.privacy.body': 'El micrófono solo lo usa el afinador, y solo mientras está abierto. El sonido se analiza en tu móvil y nunca se graba ni se sube. Sin cuentas ni registros.',
    'why.privacy.link': 'Leer la política de privacidad →',

    'end.title': 'Afina. Cuenta. Toca.',
    'end.body': 'TickTone es gratuita y se financia con un pequeño anuncio. Disponible en español e inglés, con tema oscuro y claro.',
  };

  const nodes = document.querySelectorAll('[data-i18n]');
  const en = new Map();
  nodes.forEach((node) => en.set(node, node.innerHTML));

  const toggle = document.getElementById('lang-toggle');

  const stored = () => {
    try { return localStorage.getItem('lang'); } catch { return null; }
  };
  const store = (lang) => {
    try { localStorage.setItem('lang', lang); } catch { /* private mode */ }
  };

  const apply = (lang) => {
    nodes.forEach((node) => {
      const text = lang === 'es' ? es[node.dataset.i18n] : undefined;
      node.innerHTML = text ?? en.get(node);
    });
    document.documentElement.lang = lang;
    toggle.textContent = lang === 'es' ? 'EN' : 'ES';
    toggle.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
  };

  const saved = stored();
  let lang = saved === 'es' || saved === 'en'
    ? saved
    : ((navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en');
  apply(lang);
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    store(lang);
    apply(lang);
  });
})();
