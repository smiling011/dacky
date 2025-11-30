import React, { useState, useEffect } from 'react';

const Dacky = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            style={{
              width: '200px',
              height: '200px',
              margin: '0 auto 2rem',
              objectFit: 'contain'
            }}
          />
          
          <h1 style={{
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
  backgroundRepeat: 'no-repeat'
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
    <div className="slide-up" style={{ padding: '2rem' }}>
      {/* Logo pequeño */}
      <img 
        src={process.env.PUBLIC_URL + '/images/Minilogo dacky.png'} 
        alt="Dacky"
        style={{ width: '80px', marginBottom: '2rem' }}
      />
      
      <h2 style={{
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        fontWeight: '100',
        marginBottom: '1.5rem',
        letterSpacing: '0.1em'
      }}>
        BIENVENIDO A DACKY
      </h2>
      
      <p style={{
        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
        fontWeight: '600',
        marginBottom: '2rem',
        lineHeight: '1.4'
      }}>
        MANTÉN A TU MASCOTA SIEMPRE SEGURA
      </p>
      
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <a href={process.env.PUBLIC_URL + '/images/dacky-app.apk'} download style={{ textDecoration: 'none' }}>
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
          <div className="slide-up" style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {[1].map((i) => (
              <img 
                key={i}
                src={process.env.PUBLIC_URL + `/images/App.png`}
                
                className="hover-lift"
                style={{
                  width: '600px',
                  height: 'auto',
                  borderRadius: '30px'
                }}
              />
            ))}
          </div>

          <div className="slide-up" style={{ padding: '2rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '100',
              marginBottom: '2rem',
              letterSpacing: '0.15em',
              textAlign: 'right'
            }}>
              SOBRE NOSOTROS
            </h2>
            
            <p style={{
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
          <h2 className="slide-up" style={{
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
              <div key={index} className="service-card hover-lift" style={{
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
        <h2 className="slide-up" style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '100',
          marginBottom: '3rem',
          letterSpacing: '0.15em',
          textAlign: 'center'
        }}>
          DESCARGA LA APP
        </h2>

        <div style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href={process.env.PUBLIC_URL + '/images/dacky-app.apk'} download style={{ textDecoration: 'none' }}>
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
