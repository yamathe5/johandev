import Logo from "./../assets/Logo.svg";
import LogoEmpresa from "./../assets/empresaLogo.jpg";
import PensamientoIcon from "./../assets/pensamiento-icon.svg";
import person from "./../assets/person.jpg";

import Web from "./../assets/web.png";
import Wordpress from "./../assets/wordpress.png";
import Cellphone from "./../assets/cellphone.png";
import Digital from "./../assets/digital.png";
import Maintenance from "./../assets/maintenance.png";
import Design from "./../assets/design.png";
import Hero from "./../assets/hero.jpg"

import Encuentrometalurgia from "../assets/capturas/encuentrometalurgia-ss.png";
import Expocobre from "../assets/capturas/expocobre-ss.png";
import Flotacion from "../assets/capturas/flotacion.png";
import Intermetperu from "../assets/capturas/intermetperu.png";

import IntermetperuLogo from "../assets/logos/intermetperu_logo.png"
import EncuentrometalurgiaLogo from "../assets/logos/encuentrometalurgia_logo.png"
import ExpocobreLogo from "../assets/logos/expocobre_logo.png"
import SasaruLogo from "../assets/logos/sasaru_logo.avif"

// import asd from "./assets/"


export default function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <img className="header__logo" src={Logo} alt="" />
      </header>
      <main className="main">
        <section className="hero">
          <div className="hero__content">
            <span>HELLO 👋🏻</span>
            <h2 className="hero__title">Johan Segura Web Developer</h2>
            <p className="hero__description">
              Creacion de paginas web interactivas y receptivas
            </p>
            <div className="hero__buttons">
              <button className="hero__button button-red">Conversemos</button>
              <button className="hero__button button-transparent">
                Projects
              </button>
            </div>
          </div>
          <img className="hero__image" src={Hero} alt="" />
        </section>
        <section className="section--clients">
          <div className="clients">
            <h3 className="clients__title">CLIENTES</h3>
            <div className="clients__logos">
              <img className="clients__logo" src={IntermetperuLogo} alt="Logo empresa" />
              <img className="clients__logo" src={EncuentrometalurgiaLogo} alt="Logo empresa" />
              <img className="clients__logo" src={ExpocobreLogo} alt="Logo empresa" />
              <img className="clients__logo" src={SasaruLogo} alt="Logo empresa" />
              <img className="clients__logo" src={LogoEmpresa} alt="Logo empresa" />
            </div>
          </div>
        </section>
        <section className="servicios">
          <div className="servicios__header">
            <h3 className="servicios__header--title">Nuestros servicios</h3>
          </div>
          <div className="servicios__container">
            <div className="servicio servicio1">
              <img className="servicio__image" src={Web} alt="" />
              <h4 className="servicio__title">Desarrollo web</h4>
              <p className="servicio__description">
                Desarrollamos soluciones web personalizadas, integrando
                WordPress para gestión de contenido y código a medida para
                funcionalidades específicas
              </p>
            </div>
            <div className="servicio servicio2">
              <img className="servicio__image" src={Wordpress} alt="" />
              <h4 className="servicio__title">Wordpress y SEO</h4>
              <p className="servicio__description">
                Expertos en WordPress, diseñamos y construimos sitios web que no
                solo impresionan visualmente sino que también están optimizados
                para motores de búsqueda, asegurando que tu negocio destaque en
                Internet
              </p>
            </div>
            <div className="servicio servicio3">
              <img className="servicio__image" src={Digital} alt="" />
              <h4 className="servicio__title">Digitalizacion de negocios</h4>
              <p className="servicio__description">
                Transformamos tu empresa para el mundo digital. Ofrecemos
                creación de sitios web, configuración de hosting y correo
                empresarial
              </p>
            </div>
            <div className="servicio servicio4">
              <img className="servicio__image" src={Maintenance} alt="" />
              <h4 className="servicio__title">Mantenimiento web</h4>
              <p className="servicio__description">
                Brindamos un servicio integral de mantenimiento web que asegura
                el óptimo funcionamiento de tu sitio. Realizamos análisis
                detallados para optimizar tiempos de carga, SEO y mejorar la
                experiencia de usuario
              </p>
            </div>
            <div className="servicio servicio5">
              <img className="servicio__image" src={Cellphone} alt="" />
              <h4 className="servicio__title">Desarrollo de apps</h4>
              <p className="servicio__description">
                Creamos aplicaciones móviles multiplataforma, diseñadas para
                proporcionar una experiencia de usuario impecable en Android y
                iOS, ampliando el alcance de tu negocio en el mundo móvil
              </p>
            </div>
            <div className="servicio servicio6">
              <img className="servicio__image" src={Design} alt="" />
              <h4 className="servicio__title">Diseño de UI/UX</h4>
              <p className="servicio__description">
                Diseñamos interfaces de usuario e interacciones que crean
                experiencias memorables y satisfactorias, manteniendo a los
                usuarios comprometidos y leales a tu marca
              </p>
            </div>
          </div>
        </section>
        <section className="projects">
          <div className="projects__header">
            <h3 className="projects__header--title">Nuestros proyectos</h3>
          </div>
          <div className="projects__gallery">
            <div className="card__duplex">
              <div className="card card-large c1">
                <img className="card__image  card__image__encuentrometalurgia" src={Encuentrometalurgia} alt="" />
              </div>
              <div className="card card-short c2">
                <img className="card__image  card__image__intermetperu" src={Intermetperu} alt="" />
              </div>
            </div>
            <div className="card__duplex">
              <div className="card card-large c2">
                <img className="card__image  card__image__expocobre" src={Expocobre} alt="" />
              </div>
              <div className="card card-short c1">
                <img className="card__image  card__image__flotacion" src={Flotacion} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="testimonios">
          <div className="testimonios__container">
            <h3 className="testimonios__title">Testimonios</h3>
            <p className="testimonios__description">
              Respuestas de nuestros clientes
            </p>
          </div>
          <div className="testimonios__cards">
            <div className="testimonios__card">
              <img
                className="testimonios__icon"
                src={PensamientoIcon}
                alt="Icono de pensamiento"
              />
              <p className="testimonios__text">
                La digitalización de mi empresa fue un éxito rotundo. Ahora
                tenemos un sitio web moderno y todo configurado, desde el
                hosting hasta el correo empresarial
              </p>
              <div className="testimonios__author">
                <p className="testimonios__author-name">
                  Lorena Culqi <br /> Ceo - Arqp{" "}
                </p>
                <img
                  className="testimonios__author-avatar"
                  src={person}
                  alt="Avatar de Lorena Culqi"
                />
              </div>
            </div>
            <div className="testimonios__card">
              <img
                className="testimonios__icon"
                src={PensamientoIcon}
                alt="Icono de pensamiento"
              />
              <p className="testimonios__text">
                Increíble atención a los detalles! El sitio web que
                desarrollaron para mi negocio superó mis expectativas. Funciona
                a la perfección y es exactamente lo que necesitaba
              </p>
              <div className="testimonios__author">
                <p className="testimonios__author-name">
                  Lorena Culqi <br /> Ceo - Arqp{" "}
                </p>
                <img
                  className="testimonios__author-avatar"
                  src={person}
                  alt="Avatar de Lorena Culqi"
                />
              </div>
            </div>
            <div className="testimonios__card">
              <img
                className="testimonios__icon"
                src={PensamientoIcon}
                alt="Icono de pensamiento"
              />
              <p className="testimonios__text">
                Mi sitio en WordPress ha mejorado significativamente en ranking
                gracias a su optimización SEO. ¡Gracias por hacer mi negocio
                visible en la web!
              </p>
              <div className="testimonios__author">
                <p className="testimonios__author-name">
                  Lorena Culqi <br /> Ceo - Arqp{" "}
                </p>
                <img
                  className="testimonios__author-avatar"
                  src={person}
                  alt="Avatar de Lorena Culqi"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="promo">
          <div className="promo__content">
            <h3 className="promo__title">
              Desarrolla webs impresionantes con nosotros
            </h3>
            <p className="promo__description">
              Brindamos asesoría completa y soporte postventa garantizado
              durante todo tu proyecto para tu tranquilidad absoluta.
            </p>
            <button className="promo__button">Contacta con nosotros</button>
          </div>
        </section>
        <section className="contact">
          <div className="contact__form">
            <div className="contact__input-group">
              <input
                className="contact__input"
                type="text"
                placeholder="Nombre"
              />
              <input
                className="contact__input"
                type="text"
                placeholder="Correo"
              />
              <textarea
                className="contact__textarea"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Comparte tu idea"
              ></textarea>
              <button className="contact__button">Enviar</button>
            </div>
            <div className="contact__info">
              <h3 className="contact__title">Send me and email 🙋🏻‍♂️</h3>
              <p className="contact__description">
                Puedes contactarme a travez de mi correo:{" "}
                <strong> manuelsegmar@gmail.com </strong>o a travez de mis redes
                sociales:
              </p>
              <div className="contact__social">
                <img className="contact__social-icon" src="" alt="" />
                <img className="contact__social-icon" src="" alt="" />
                <img className="contact__social-icon" src="" alt="" />
              </div>
              <p className="contact__schedule">
                O agendar una cita de 30 minutos: Clientify
              </p>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer__content">
            <p className="footer__copyright">
              Todos los derechos reservado Copyright <br />
              JohanDev - yamathe5
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
