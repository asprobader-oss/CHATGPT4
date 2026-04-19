/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import CookieBanner from './CookieBanner';
import { 
  Tv, 
  Smartphone, 
  Monitor, 
  Wifi, 
  PlayCircle, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ChevronDown,
  Menu,
  X,
  Globe2,
  MessageCircle,
  Sun,
  Moon
} from 'lucide-react';

const WA_LINK = "https://wa.me/34607998181?text=Hola,%20estoy%20interesado%20en%20los%20servicios%20de%20LIST%20PRO%20IPTV.";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 }
};

const pageMetadata: Record<string, { title: string, description: string, keywords: string }> = {
  '': {
    title: 'LIST PRO IPTV - Mejor IPTV España 2026 | LaLiga, DAZN y Cine 4K',
    description: 'Descubre el mejor servicio IPTV en España. Disfruta de todo el fútbol del momento (LaLiga, Champions), DAZN y Movistar en calidad 4K sin cortes. Activación inmediata y prueba gratuita.',
    keywords: 'Mejor IPTV España, comprar IPTV España, IPTV LaLiga sin cortes, IPTV DAZN 4K, listas M3U premium 2026, IPTV España'
  },
  'caracteristicas': {
    title: 'Características de nuestro IPTV - LIST PRO IPTV',
    description: 'Descubre por qué LIST PRO IPTV es la mejor opción. Tecnología anti-cortes, calidad 4K, más de 15.000 canales, VOD masivo y compatibilidad multidispositivo.',
    keywords: 'características IPTV, IPTV 4K, IPTV sin cortes, compatibilidad IPTV, Smart TV IPTV, canales en vivo, VOD películas'
  },
  'deportes': {
    title: 'Fútbol y Deportes en Directo - LIST PRO IPTV España',
    description: 'No te pierdas ni un partido. Todo el fútbol: LaLiga EA Sports, Champions League, DAZN, Movistar+ y más deportes en 4K UHD sin interrupciones.',
    keywords: 'fútbol IPTV, ver LaLiga online, DAZN gratis, Movistar Plus IPTV, ver Champions League, deportes gratis, IPTV fútbol España'
  },
  'precios': {
    title: 'Planes y Precios de Suscripción - LIST PRO IPTV',
    description: 'Planes IPTV accesibles y premium. Elige tu suscripción de 1, 6 o 12 meses. Disfruta de todo nuestro contenido sin límites. Pago seguro y activación inmediata.',
    keywords: 'precios IPTV, comprar IPTV, suscripción IPTV, suscripción fútbol, IPTV barato, lista M3U premium, ofertas IPTV'
  },
  'faq': {
    title: 'Preguntas Frecuentes sobre IPTV - LIST PRO IPTV',
    description: 'Resuelve tus dudas sobre nuestro servicio IPTV. Aprende qué dispositivos son compatibles, si necesitas VPN y cómo obtener tu prueba gratuita hoy.',
    keywords: 'FAQ IPTV, dudas IPTV, usar VPN IPTV, prueba gratis IPTV, dispositivos IPTV compatibles, ayuda IPTV'
  },
  'articulos': {
    title: 'Blog y Guías sobre IPTV - LIST PRO IPTV',
    description: 'Lee nuestros artículos sobre el mejor IPTV en España, qué aparatos usar para ver IPTV (Fire TV Stick) y noticias de entretenimiento 4K.',
    keywords: 'blog IPTV, guías IPTV, mejores aparatos IPTV, Fire TV Stick 4K, NVIDIA Shield, ver El Clásico, IPTV 4K'
  }
};

const updateMetadata = (path: string) => {
  const cleanPath = path.replace(/^\/|\/$/g, '');
  const currentMeta = pageMetadata[cleanPath] || pageMetadata[''];
  
  document.title = currentMeta.title;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', currentMeta.description);
  
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) metaKeywords.setAttribute('content', currentMeta.keywords);

  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', `https://listproiptv.com/${cleanPath}`);
  }

  // Handle dynamic FAQ structured data
  let script = document.getElementById('faq-structured-data');
  if (!script) {
    script = document.createElement('script');
    script.id = 'faq-structured-data';
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
    
    // Inject the FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué dispositivos son compatibles con LIST PRO IPTV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Soportamos casi todos los dispositivos, incluyendo Smart TVs (Samsung, LG, Android TV), Amazon Firestick, Apple TV, TV Box, smartphones (iOS/Android) y PC."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo ver LaLiga, DAZN y la Champions League?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "¡Sí! Nuestra lista incluye todos los canales de DAZN, Movistar LaLiga, Movistar Liga de Campeones y canales internacionales para que no te pierdas ningún partido en España."
          }
        },
        {
          "@type": "Question",
          "name": "¿El servicio IPTV en España necesita usar una VPN?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No es estrictamente necesario ya que nuestro servicio está encriptado. Sin embargo, si tu proveedor de internet bloquea el tráfico IPTV durante los partidos de fútbol, recomendamos usar una VPN."
          }
        }
      ]
    };
    script.textContent = JSON.stringify(faqSchema);
  }
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('/', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.history.pushState({}, '', href);
      updateMetadata(href);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <a href={href} onClick={handleClick} className="hover:text-gray-900 dark:hover:text-white transition-colors">
      {children}
    </a>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial load: Handle direct URL paths for SEO links (e.g. /deportes)
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    
    if (pageMetadata[path]) {
      updateMetadata(path);
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else if (window.location.hash) {
      // Fallback for standard hash links
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white selection:bg-brand-500 selection:text-white dark:selection:text-white relative overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden hidden md:dark:block">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-blue-500/10 rounded-full blur-[100px] animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-purple-600/10 rounded-full blur-[130px] animate-blob [animation-delay:4s]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-dark-900/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState({}, '', '/');
              updateMetadata('/');
            }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
              <Tv className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">LIST PRO <span className="text-brand-500">IPTV</span></span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
            <NavLink href="/caracteristicas">Características</NavLink>
            <NavLink href="/deportes">Deportes</NavLink>
            <NavLink href="/precios">Precios</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-500" /> WhatsApp
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95">
              Comprar Ahora
            </a>
          </div>

          <button 
            className="md:hidden text-gray-900 dark:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-dark-900/95 backdrop-blur-xl pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-lg font-medium">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
              <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>
            </button>
            <hr className="border-gray-200 dark:border-white/10" />
            <div className="flex flex-col gap-1">
              <NavLink href="/caracteristicas"><span className="p-3 block" onClick={() => setMobileMenuOpen(false)}>Características</span></NavLink>
              <NavLink href="/deportes"><span className="p-3 block" onClick={() => setMobileMenuOpen(false)}>Deportes</span></NavLink>
              <NavLink href="/precios"><span className="p-3 block" onClick={() => setMobileMenuOpen(false)}>Precios</span></NavLink>
              <NavLink href="/faq"><span className="p-3 block" onClick={() => setMobileMenuOpen(false)}>FAQ</span></NavLink>
            </div>
            <hr className="border-gray-200 dark:border-white/10" />
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-500 p-3">
              <MessageCircle className="w-6 h-6" aria-hidden="true" /> Contactar por WhatsApp
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-500 text-white p-4 rounded-2xl font-bold text-center mt-2 shadow-lg shadow-brand-500/20">
              Comprar Ahora
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://phantom.estaticos-marca.com/a81901be3f5863936eb545dad0f94fa9/resize/828/f/webp/assets/multimedia/imagenes/2026/03/10/17731385629200.jpg" 
            alt="Fondo de deportes en vivo" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-white dark:bg-dark-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-900 via-white/40 dark:via-dark-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-dark-900 via-white/20 dark:via-dark-900/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex justify-center">
          <div className="max-w-4xl text-center flex flex-col items-center">
            <div className="flex flex-col items-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-wider text-gray-800 dark:text-gray-300">El Mejor IPTV de España 2026</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-6">
                Todo el Fútbol <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500">Sin Cortes.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Disfruta de <strong>LaLiga, DAZN, Movistar+ y la Champions League</strong>. Más de 15,000 canales en vivo, 50,000+ películas y series en calidad 4K UHD.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-gray-900 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5 font-bold" />
                  Pedir Prueba Gratis
                </a>
                <NavLink href="/precios">
                  <span className="bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/15 text-gray-900 dark:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                    Ver Precios
                  </span>
                </NavLink>
              </div>

              <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500" /> Activación Inmediata
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500" /> Soporte 24/7
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500" /> Servidores Premium
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section id="deportes" className="py-24 bg-gray-50 dark:bg-dark-800 relative border-y border-gray-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn} className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-gray-900 dark:text-white text-center">Disfruta de LaLiga, DAZN y Movistar con el Mejor IPTV de España</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <PlayCircle className="text-brand-500 w-6 h-6" /> Fútbol y Deportes en Directo
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
                  Si buscas la mejor forma de ver <strong>LaLiga EA Sports</strong>, la <strong>Champions League</strong>, y todos los deportes de <strong>DAZN</strong> y <strong>Movistar+</strong>, has llegado al lugar indicado. En <strong>LIST PRO IPTV</strong> ofrecemos la lista más estable y completa del mercado español.
                </p>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Sabemos lo frustrante que es perderse un gol por culpa del buffering. Por eso, nuestros servidores premium garantizan una experiencia fluida para que puedas ver el fútbol online, la Fórmula 1, MotoGP y todos los canales de pago con calidad 4K y Full HD sin interrupciones.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <Tv className="text-brand-500 w-6 h-6" /> Cine y Series de Estreno
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
                  No solo somos la mejor opción para deportes. Nuestra suscripción incluye acceso a miles de películas de estreno, series de las plataformas más populares (Netflix, HBO Max, Disney+, Amazon Prime Video) y documentales.
                </p>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Todo nuestro catálogo VOD (Video on Demand) se actualiza diariamente para que nunca te quedes sin contenido. Disfruta del mejor entretenimiento en tu Smart TV, móvil o PC.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105">
                <MessageCircle className="w-5 h-5" /> Escríbenos al +34 607 998 181
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-24 bg-white dark:bg-dark-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">¿Por qué elegir LIST PRO IPTV?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Proporcionamos el servicio IPTV más estable y completo de España, diseñado para verdaderos entusiastas del entretenimiento.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Zap, title: "Tecnología Anti-Cortes", desc: "Nuestros servidores avanzados aseguran una visualización sin buffering, incluso durante los partidos más importantes." },
              { icon: Tv, title: "Calidad 4K y FHD", desc: "Disfruta de tu contenido favorito en resoluciones cristalinas 4K, Full HD y HD." },
              { icon: Globe2, title: "15,000+ Canales en Vivo", desc: "Acceso a canales premium de España, Europa, USA, Latinoamérica y más de 50 países." },
              { icon: PlayCircle, title: "Librería VOD Masiva", desc: "Más de 50,000 películas y series actualizadas semanalmente con los últimos estrenos." },
              { icon: ShieldCheck, title: "Seguro y Privado", desc: "Tu conexión está totalmente encriptada. No se requiere VPN, pero es 100% compatible." },
              { icon: Monitor, title: "Soporte Multi-Dispositivo", desc: "Míralo en Smart TV, Firestick, Android, iOS, MAG, o Navegador Web." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-white/5 p-8 rounded-3xl hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:text-brand-500 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-24 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Planes y Precios</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">Elige el plan que mejor se adapte a ti. Todos los planes incluyen acceso completo a LaLiga, DAZN, Movistar y nuestro catálogo VOD.</p>
            <div className="inline-flex items-center gap-2 text-brand-500 font-semibold text-sm bg-brand-500/10 px-4 py-2 rounded-full border border-brand-500/20">
              <ShieldCheck className="w-4 h-4" /> Garantía de Reembolso de 24 Horas
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { duration: "1 Mes", price: "10.00", period: "€", popular: false, total: "Pago único" },
              { duration: "6 Meses", price: "45.00", period: "€", popular: true, total: "Ahorras un 25%" },
              { duration: "12 Meses", price: "70.00", period: "€", popular: false, total: "Mejor valor - Ahorras un 41%" }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white dark:bg-dark-900 rounded-3xl p-8 border ${plan.popular ? 'border-brand-500 shadow-[0_0_30px_rgba(229,9,20,0.15)]' : 'border-gray-200 dark:border-white/5'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Más Popular
                  </div>
                )}
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-400 mb-4">{plan.duration}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                </div>
                <p className="text-sm text-brand-500 font-medium mb-6">{plan.total}</p>
                
                <a 
                  href={WA_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold transition-all mb-8 flex items-center justify-center gap-2 ${plan.popular ? 'bg-[#25D366] hover:bg-[#20bd5a] text-gray-900' : 'bg-gray-200 dark:bg-white/10 hover:bg-white/20 text-gray-900 dark:text-white'}`}
                >
                  <MessageCircle className="w-5 h-5" /> Contratar por WhatsApp
                </a>

                <div className="space-y-3">
                  {[
                    "Fútbol: LaLiga, Champions, DAZN",
                    "Movistar+ y Canales Premium",
                    "15,000+ Canales en Vivo",
                    "50,000+ Películas y Series",
                    "Calidad 4K, FHD y HD",
                    "Tecnología Anti-Cortes",
                    "Soporte 24/7 por WhatsApp"
                  ].map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Articles Section */}
      <section id="articulos" className="py-24 bg-white dark:bg-dark-900 relative border-t border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Todo lo que necesitas saber sobre IPTV</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Guías, consejos y novedades para sacar el máximo partido a tu suscripción de LIST PRO IPTV.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <motion.article 
              variants={fadeIn}
              className="bg-gray-50 dark:bg-dark-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-colors group flex flex-col"
            >
              <div className="h-64 overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=70&w=800&fm=webp&auto=format&fit=crop" 
                  alt="Servicio IPTV en España con tecnología 4K" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">El Mejor IPTV en España 2026</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6 grow">
                  Si buscas el mejor IPTV en España, LIST PRO IPTV es la solución definitiva. Olvídate de los cortes en los momentos más importantes. Ofrecemos la lista más estable del mercado con más de 15,000 canales, incluyendo todo el contenido premium de España. Nuestra tecnología anti-buffering garantiza una experiencia fluida, convirtiéndonos en el proveedor número uno a nivel nacional. No te conformes con menos cuando puedes tener la máxima calidad.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-500 font-semibold hover:text-brand-700 dark:hover:text-brand-400 flex items-center gap-2 mt-auto">
                  Saber más <ChevronDown className="w-4 h-4 -rotate-90" />
                </a>
              </div>
            </motion.article>

            {/* Article 2 */}
            <motion.article 
              variants={fadeIn}
              className="bg-gray-50 dark:bg-dark-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-colors group flex flex-col"
            >
              <div className="h-64 overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=70&w=800&fm=webp&auto=format&fit=crop" 
                  alt="Mejor dispositivo Android TV Box para IPTV" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">El Mejor Aparato para usar para ver IPTV</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6 grow">
                  ¿Cuál es el mejor aparato para ver IPTV? Aunque nuestro servicio es compatible con Smart TVs, móviles y PCs, para la mejor experiencia recomendamos usar un <strong>Amazon Fire TV Stick 4K Max</strong>, un <strong>Apple TV 4K</strong>, o un TV Box Android de alto rendimiento como el <strong>NVIDIA Shield TV</strong>. Estos dispositivos ofrecen procesadores potentes que manejan la decodificación de video 4K sin esfuerzo, asegurando una navegación rápida por nuestra enorme librería VOD y una reproducción de canales en vivo impecable.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-500 font-semibold hover:text-brand-700 dark:hover:text-brand-400 flex items-center gap-2 mt-auto">
                  Saber más <ChevronDown className="w-4 h-4 -rotate-90" />
                </a>
              </div>
            </motion.article>

            {/* Article 3 */}
            <motion.article 
              variants={fadeIn}
              className="bg-gray-50 dark:bg-dark-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-colors group flex flex-col"
            >
              <div className="h-64 overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=70&w=800&fm=webp&auto=format&fit=crop" 
                  alt="Fútbol en vivo Real Madrid vs Barcelona" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Fútbol Total: LaLiga, Barça, Madrid y Atlético</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6 grow">
                  Vive la pasión de LaLiga EA Sports como si estuvieras en el estadio. Con LIST PRO IPTV, no te perderás ni un solo partido del <strong>Real Madrid, FC Barcelona, o Atlético de Madrid</strong>. Disfruta de El Clásico, los derbis y toda la Champions League en calidad 4K UHD. Siente cada gol, cada jugada y cada victoria con la mejor transmisión en directo, sin interrupciones y con comentarios en español.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-500 font-semibold hover:text-brand-700 dark:hover:text-brand-400 flex items-center gap-2 mt-auto">
                  Saber más <ChevronDown className="w-4 h-4 -rotate-90" />
                </a>
              </div>
            </motion.article>

            {/* Article 4 */}
            <motion.article 
              variants={fadeIn}
              className="bg-gray-50 dark:bg-dark-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-colors group flex flex-col"
            >
              <div className="h-64 overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=70&w=800&fm=webp&auto=format&fit=crop" 
                  alt="Streaming 4K sin cortes" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">IPTV 4K Sin Cortes: La Revolución</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6 grow">
                  El entretenimiento en casa ha evolucionado. Con nuestra tecnología de servidores premium, el IPTV 4K sin cortes es una realidad. Accede a más de 50,000 películas y series de estreno de plataformas como Netflix, HBO, Disney y Amazon Prime. Todo en un solo lugar, con una interfaz fácil de usar y actualización diaria de contenido. Di adiós a las múltiples suscripciones costosas y únete a la revolución del streaming inteligente.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-500 font-semibold hover:text-brand-700 dark:hover:text-brand-400 flex items-center gap-2 mt-auto">
                  Saber más <ChevronDown className="w-4 h-4 -rotate-90" />
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white dark:bg-dark-900">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Preguntas Frecuentes</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "¿Qué dispositivos son compatibles?", a: "Soportamos casi todos los dispositivos, incluyendo Smart TVs (Samsung, LG, Android TV), Amazon Firestick, Apple TV, TV Box, smartphones (iOS/Android) y PC." },
              { q: "¿Puedo ver LaLiga y la Champions League?", a: "¡Sí! Nuestra lista incluye todos los canales de DAZN, Movistar LaLiga, Movistar Liga de Campeones y canales internacionales para que no te pierdas ningún partido." },
              { q: "¿Necesito usar una VPN?", a: "No es estrictamente necesario ya que nuestro servicio está encriptado. Sin embargo, si tu proveedor de internet (ISP) bloquea el tráfico IPTV en España durante los partidos, recomendamos usar una VPN." },
              { q: "¿Ofrecen garantía de reembolso?", a: "Nuestra prioridad es tu satisfacción. Si experimentas problemas técnicos que no podemos resolver en las primeras 24 horas, ofrecemos garantía de devolución íntegra. Por ello, siempre invitamos a nuestros clientes a usar primero la prueba gratuita." },
              { q: "¿Puedo usar mi suscripción en varios dispositivos?", a: "Los planes estándar permiten 1 conexión simultánea. Puedes instalar la lista en varios dispositivos, pero solo ver en uno a la vez. Consúltanos por WhatsApp para planes multi-conexión." },
              { q: "¿Ofrecen prueba gratuita?", a: "¡Sí! Ofrecemos una prueba gratuita para que compruebes la calidad y estabilidad de nuestros canales antes de comprar. Pídela por WhatsApp." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-600">
          <img 
            src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=70&w=1200&fm=webp&auto=format&fit=crop" 
            alt="Mejorar TV con IPTV" 
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-900 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">¿Listo para mejorar tu TV?</h2>
          <p className="text-xl text-gray-900 dark:text-gray-800 dark:text-white/80 mb-10 max-w-2xl mx-auto">Únete a miles de clientes satisfechos en España y empieza a disfrutar del mejor contenido hoy mismo.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-gray-900 hover:bg-[#20bd5a] px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-xl">
            <MessageCircle className="w-6 h-6" /> Contactar por WhatsApp: 607 998 181
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <a 
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.history.pushState({}, '', '/');
                  updateMetadata('/');
                }} 
                className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity cursor-pointer inline-flex"
              >
                <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
                  <Tv className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">LIST PRO <span className="text-brand-500">IPTV</span></span>
              </a>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                La experiencia IPTV definitiva en España. Fútbol, DAZN, Movistar, canales premium y librería VOD con estabilidad inmejorable.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Servicio</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><NavLink href="/precios">Precios</NavLink></li>
                <li><NavLink href="/deportes">Deportes en Directo</NavLink></li>
                <li><NavLink href="/caracteristicas">Características</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Soporte</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href={WA_LINK} className="hover:text-gray-900 dark:hover:text-white transition-colors">Contacto WhatsApp</a></li>
                <li><NavLink href="/faq">Preguntas Frecuentes</NavLink></li>
                <li><a href={WA_LINK} className="hover:text-gray-900 dark:hover:text-white transition-colors">Guías de Instalación</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Contacto</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-green-500" /> +34 607 998 181
                </li>
                <li>Atención 24/7</li>
                <li>España</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} LIST PRO IPTV. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </div>
  );
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-50/50 dark:bg-dark-800/50"
    >
      <button 
        className="w-full px-6 py-4 flex items-center justify-between text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDown className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};;
