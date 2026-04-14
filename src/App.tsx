/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
  MessageCircle
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

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
              <Tv className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">LIST PRO <span className="text-brand-500">IPTV</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#caracteristicas" className="hover:text-white transition-colors">Características</a>
            <a href="#deportes" className="hover:text-white transition-colors">Deportes</a>
            <a href="#precios" className="hover:text-white transition-colors">Precios</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-500" /> WhatsApp
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95">
              Comprar Ahora
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-xl pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-lg font-medium">
            <a href="#caracteristicas" onClick={() => setMobileMenuOpen(false)}>Características</a>
            <a href="#deportes" onClick={() => setMobileMenuOpen(false)}>Deportes</a>
            <a href="#precios" onClick={() => setMobileMenuOpen(false)}>Precios</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <hr className="border-white/10" />
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-500">
              <MessageCircle className="w-5 h-5" /> Contactar por WhatsApp
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-500 text-white px-5 py-3 rounded-full font-semibold text-center">
              Comprar Ahora
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop" 
            alt="Fútbol y TV Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-wider text-gray-300">El Mejor IPTV de España 2024</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-6">
                Todo el Fútbol <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500">Sin Cortes.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                Disfruta de <strong>LaLiga, DAZN, Movistar+ y la Champions League</strong>. Más de 15,000 canales en vivo, 50,000+ películas y series en calidad 4K UHD.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Pedir Prueba Gratis
                </a>
                <a href="#precios" className="bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                  Ver Precios
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section id="deportes" className="py-24 bg-dark-800 relative border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn} className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-white text-center">Disfruta de LaLiga, DAZN y Movistar con el Mejor IPTV de España</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                  <PlayCircle className="text-brand-500 w-6 h-6" /> Fútbol y Deportes en Directo
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Si buscas la mejor forma de ver <strong>LaLiga EA Sports</strong>, la <strong>Champions League</strong>, y todos los deportes de <strong>DAZN</strong> y <strong>Movistar+</strong>, has llegado al lugar indicado. En <strong>LIST PRO IPTV</strong> ofrecemos la lista más estable y completa del mercado español.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Sabemos lo frustrante que es perderse un gol por culpa del buffering. Por eso, nuestros servidores premium garantizan una experiencia fluida para que puedas ver el fútbol online, la Fórmula 1, MotoGP y todos los canales de pago con calidad 4K y Full HD sin interrupciones.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                  <Tv className="text-brand-500 w-6 h-6" /> Cine y Series de Estreno
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  No solo somos la mejor opción para deportes. Nuestra suscripción incluye acceso a miles de películas de estreno, series de las plataformas más populares (Netflix, HBO Max, Disney+, Amazon Prime Video) y documentales.
                </p>
                <p className="text-gray-400 leading-relaxed">
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
      <section id="caracteristicas" className="py-24 bg-dark-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">¿Por qué elegir LIST PRO IPTV?</h2>
            <p className="text-gray-400 text-lg">Proporcionamos el servicio IPTV más estable y completo de España, diseñado para verdaderos entusiastas del entretenimiento.</p>
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
                className="bg-dark-800 border border-white/5 p-8 rounded-3xl hover:border-brand-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:text-brand-500 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Planes y Precios</h2>
            <p className="text-gray-400 text-lg">Elige el plan que mejor se adapte a ti. Todos los planes incluyen acceso completo a LaLiga, DAZN, Movistar y nuestro catálogo VOD.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { duration: "1 Mes", price: "10.00", period: "€", popular: false, total: "Pago único" },
              { duration: "6 Meses", price: "40.00", period: "€", popular: true, total: "Ahorras un 33%" },
              { duration: "12 Meses", price: "60.00", period: "€", popular: false, total: "Mejor valor - Ahorras un 50%" }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-dark-900 rounded-3xl p-8 border ${plan.popular ? 'border-brand-500 shadow-[0_0_30px_rgba(229,9,20,0.15)]' : 'border-white/5'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Más Popular
                  </div>
                )}
                <h3 className="text-xl font-medium text-gray-400 mb-4">{plan.duration}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-sm text-brand-500 font-medium mb-6">{plan.total}</p>
                
                <a 
                  href={WA_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-semibold transition-all mb-8 flex items-center justify-center gap-2 ${plan.popular ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
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
                    <div key={j} className="flex items-center gap-3 text-sm text-gray-300">
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

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-dark-900">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Preguntas Frecuentes</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "¿Qué dispositivos son compatibles?", a: "Soportamos casi todos los dispositivos, incluyendo Smart TVs (Samsung, LG, Android TV), Amazon Firestick, Apple TV, TV Box, smartphones (iOS/Android) y PC." },
              { q: "¿Puedo ver LaLiga y la Champions League?", a: "¡Sí! Nuestra lista incluye todos los canales de DAZN, Movistar LaLiga, Movistar Liga de Campeones y canales internacionales para que no te pierdas ningún partido." },
              { q: "¿Necesito usar una VPN?", a: "No es estrictamente necesario ya que nuestro servicio está encriptado. Sin embargo, si tu proveedor de internet (ISP) bloquea el tráfico IPTV en España durante los partidos, recomendamos usar una VPN." },
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=2070&auto=format&fit=crop')] mix-blend-overlay opacity-20 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">¿Listo para mejorar tu TV?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Únete a miles de clientes satisfechos en España y empieza a disfrutar del mejor contenido hoy mismo.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white hover:bg-green-400 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-xl">
            <MessageCircle className="w-6 h-6" /> Contactar por WhatsApp: 607 998 181
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
                  <Tv className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">LIST PRO <span className="text-brand-500">IPTV</span></span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                La experiencia IPTV definitiva en España. Fútbol, DAZN, Movistar, canales premium y librería VOD con estabilidad inmejorable.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Servicio</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#precios" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#deportes" className="hover:text-white transition-colors">Deportes en Directo</a></li>
                <li><a href="#caracteristicas" className="hover:text-white transition-colors">Características</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href={WA_LINK} className="hover:text-white transition-colors">Contacto WhatsApp</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
                <li><a href={WA_LINK} className="hover:text-white transition-colors">Guías de Instalación</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-green-500" /> +34 607 998 181
                </li>
                <li>Atención 24/7</li>
                <li>España</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} LIST PRO IPTV. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className="border border-white/10 rounded-2xl overflow-hidden bg-dark-800/50"
    >
      <button 
        className="w-full px-6 py-4 flex items-center justify-between text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};;
