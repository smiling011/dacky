import React, { useState, useEffect } from 'react';

const Dacky = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 300);
      
      // Animación de scroll para elementos
      const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
      animateElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
        
        if (isVisible) {
          el.classList.add('animate-visible');
        } else {
          el.classList.remove('animate-visible');
        }
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: '#11120D', color: '#FFFBF4' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600&family=Imprima&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .fade-in {
          animation: fadeIn 1s ease-in;
        }

        .slide-up {
          animation: slideUp 0.8s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 251, 244, 0.1);
        }

        .btn-download {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-download:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .service-card {
          transition: all 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 35px rgba(255, 251, 244, 0.15);
        }

        .scroll-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background-color: #FFFBF4;
          color: #11120D;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          opacity: 0;
          visibility: hidden;
        }

        .scroll-top-btn.visible {
          opacity: 1;
          visibility: visible;
        }

        .scroll-top-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(255, 251, 244, 0.4);
          background-color: #565449;
          color: #FFFBF4;
        }

        /* Animaciones de scroll */
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-animate.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-animate-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-animate-left.animate-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .scroll-animate-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-animate-right.animate-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .scroll-animate-scale {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-animate-scale.animate-visible {
          opacity: 1;
          transform: scale(1);
        }

        /* Responsive para imágenes */
        @media (max-width: 768px) {
          img[alt="Google Play"],
          img[alt="App Store"] {
            height: clamp(35px, 8vw, 50px) !important;
          }
          
          .scroll-top-btn {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 20px;
          }

          img[alt="Dacky App"] {
            width: 70% !important;
            max-width: 350px !important;
          }

          section[style*="1.jpg"] {
            background-size: cover !important;
            background-position: center center !important;
          }
        }

        @media (max-width: 480px) {
          img[alt="Google Play"],
          img[alt="App Store"] {
            height: clamp(30px, 7vw, 40px) !important;
          }

          img[alt="Dacky App"] {
            width: 85% !important;
            max-width: 280px !important;
          }

          section[style*="1.jpg"] {
            background-size: contain !important;
            background-position: top center !important;
            padding: 1rem !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, #11120D 0%, transparent 50%)',
          transform: `translateY(${scrollY * 0.5}px)`
        }} />
        
        <div className="fade-in" style={{
          textAlign: 'center',
          zIndex: 1
        }}>
          {/* Reemplaza esta imagen con tu logo */}
          <img 
            src={process.env.PUBLIC_URL + '/images/Minilogo dacky.png'} 
            alt="Dacky Logo"
            className="scroll-animate-scale"
            style={{
              width: '200px',
              height: '200px',
              margin: '0 auto 2rem',
              objectFit: 'contain'
            }}
          />
          
          <h1 className="scroll-animate" style={{
            fontSize: 'clamp(1.5rem, 8vw, 6rem)',
            fontWeight: '100',
            letterSpacing: '0.2em',
            marginBottom: '0rem',
          }}>
            DACKY
          </h1>
        </div>
      </section>

      {/* Welcome Section */}
<section style={{
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  position: 'relative',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/1.jpg'})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll'
}}>
  {/* Overlay para mejor legibilidad
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#11120D',
    zIndex: 1
  }} /> */}
  
  <div style={{
    maxWidth: '1400px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2
  }}>
    <div className="slide-up scroll-animate-left" style={{ padding: '2rem' }}>
      {/* Logo pequeño */}
      <img 
        src={process.env.PUBLIC_URL + '/images/Minilogo dacky.png'} 
        alt="Dacky"
        className="scroll-animate-scale"
        style={{ width: '80px', marginBottom: '2rem' }}
      />
      
      <h2 className="scroll-animate-left" style={{
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        fontWeight: '100',
        marginBottom: '1.5rem',
        letterSpacing: '0.1em'
      }}>
        BIENVENIDO A DACKY
      </h2>
      
      <p className="scroll-animate-left" style={{
        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
        fontWeight: '600',
        marginBottom: '2rem',
        lineHeight: '1.4'
      }}>
        MANTÉN A TU MASCOTA SIEMPRE SEGURA
      </p>
      
      <div className="scroll-animate" style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <a href={process.env.PUBLIC_URL + '/file/app-release.apk'} download style={{ textDecoration: 'none' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="btn-download"
            style={{ height: '50px' }}
          />
        </a>
        <a href="#" style={{ textDecoration: 'none' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            alt="App Store"
            className="btn-download"
            style={{ height: '50px' }}
          />
        </a>
      </div>
    </div>

    {/* Imagen de mascotas (esta parte se elimina ya que ahora es el fondo) */}
    <div className="slide-up" style={{ opacity: 0, pointerEvents: 'none' }}>
      {/* Este espacio mantiene el grid pero sin contenido visible */}
    </div>
  </div>
</section>

      {/* About Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        backgroundColor: '#11120D'
      }}>
        <div style={{
          maxWidth: '1400px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Phone mockups */}
          <div className="slide-up scroll-animate-left" style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {[1].map((i) => (
              <img 
                key={i}
                src={process.env.PUBLIC_URL + `/images/App.png`}
                alt="Dacky App"
                className="hover-lift scroll-animate-scale"
                style={{
                  width: 'clamp(250px, 70%, 600px)',
                  maxWidth: '600px',
                  height: 'auto',
                  borderRadius: '30px'
                }}
              />
            ))}
          </div>

          <div className="slide-up scroll-animate-right" style={{ padding: '2rem' }}>
            <h2 className="scroll-animate-right" style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '100',
              marginBottom: '2rem',
              letterSpacing: '0.15em',
              textAlign: 'right'
            }}>
              SOBRE NOSOTROS
            </h2>
            
            <p className="scroll-animate-right" style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: '1.8',
              fontWeight: '300',
              textAlign: 'right',
              color: '#FFFBF4'
            }}>
              En DACKY, somos amantes de las mascotas como tú. 
              Nuestro objetivo es brindar a los cuidadores de perros, 
              gatos y otras mascotas una solución integral para 
              proteger a sus compañeros peludos. Para nosotros, 
              lo importante es que sentir la tranquilidad de que tu 
              mascota está segura y de que su salud está bajo control.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        minHeight: '100vh',
        padding: '4rem 2rem',
        backgroundColor: '#1a1b16'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="slide-up scroll-animate" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '100',
            marginBottom: '4rem',
            letterSpacing: '0.15em',
            textAlign: 'center'
          }}>
            NUESTROS SERVICIOS
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              {
                icon: 'gps.png',
                title: 'GPS EN TIEMPO REAL',
                desc: 'Con nuestra tecnología GPS, podrás poder localizar a tu mascota en cualquier momento y lugar.'
              },
              {
                icon: 'inyeccion.png',
                title: 'GESTIÓN DE TARJETA DE VACUNAS',
                desc: 'Mantén al día el historial médico de tu mascota con nuestra tarjeta virtual de vacunas.'
              },
              {
                icon: 'pata.png',
                title: 'GESTIÓN DE PERFIL DE MASCOTAS',
                desc: 'Guarda y organiza toda la información esencial de tu mascota en un solo lugar.'
              }
            ].map((service, index) => (
              <div key={index} className="service-card hover-lift scroll-animate-scale" style={{
                backgroundColor: '#FFFBF4',
                color: '#11120D',
                padding: '3rem 2rem',
                borderRadius: '20px',
                textAlign: 'center'
              }}>
                <img 
                  src={process.env.PUBLIC_URL + `/images/${service.icon}`}
                  alt={service.title}
                  style={{ width: '80px', height: '80px', marginBottom: '1.5rem', objectFit: 'contain' }}
                />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontFamily: "'Montserrat', sans-serif"
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  fontWeight: '300',
                  color: '#565449'
                }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section style={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        backgroundColor: '#11120D'
      }}>
        <h2 className="slide-up scroll-animate" style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '100',
          marginBottom: '3rem',
          letterSpacing: '0.15em',
          textAlign: 'center'
        }}>
          DESCARGA LA APP
        </h2>

        <div className="scroll-animate-scale" style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href={process.env.PUBLIC_URL + '/file/app-release.apk'} download style={{ textDecoration: 'none' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="btn-download"
              style={{ height: '60px' }}
            />
          </a>
          <a href="#" style={{ textDecoration: 'none' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="btn-download"
              style={{ height: '60px' }}
            />
          </a>
        </div>
      </section>

      <button 
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        ↑
      </button>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#11120D',
        borderTop: '1px solid #565449'
      }}>
        <p style={{
          fontSize: '0.9rem',
          fontWeight: '300',
          color: '#FFFBF4'
        }}>
          Victoria Vielma 2025 © Copyrigth
        </p>
      </footer>
    </div>
  );
};

export default Dacky;