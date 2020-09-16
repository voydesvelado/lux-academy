import React from "react";

export default function Inicio() {
  return (
    <div className="container">
      <main className="jumbo">
        <h3 className="j-sub1">Academia fotográfica lux</h3>
        <h1 className="j-titulo">Fundamentos de la Fotografía</h1>
        <h4 className="j-sub2">Guía para principiantes</h4>
      </main>
      <section className="section-a">
        <div className="faq1">
          <h2 className="titulo-a">¿Qué es la fotografía?</h2>
          <h4 className="subt-a">Breve historia</h4>
        </div>
        <div className="faq2">
          <p className="paraph-a">
            Las presentaciones son herramientas de comunicación que pueden
            usarse en demostraciones, conferencias, discursos, informes, etc. Se
            presenta principalmente ante un público y sirven para una gran
            variedad de propósitos, lo que convierte a las presentaciones en
            herramientas útiles para convencer y enseñar.
          </p>
          <p className="paraph-a">
            Las presentaciones son herramientas de comunicación que pueden
            usarse en demostraciones, conferencias, discursos, informes, etc. Se
            presenta principalmente ante un público y sirven para una gran
            variedad de propósitos, lo que convierte a las presentaciones en
            herramientas útiles para convencer y enseñar.Las presentaciones son
            herramientas de comunicación que pueden usarse en demostraciones,
            conferencias, discursos, informes, etc.
          </p>
        </div>
      </section>
      <figure className="quote">
        <h3 className="subt-q">Una toma de inspiración</h3>
        <h2 className="q-titulo">
          "La fotografía es la historia que no consigo expresar con las
          palabras."
        </h2>
        <h4 className="subt-q1">Destin Sparks</h4>
      </figure>
      <div className="section-b">
        <h2 className="titulo-a">Tipos de fotografía</h2>
        <div className="grid-b">
          <div className="tipo">
            <div className="desc-b">
              <h3 className="subt-q">1. Retrato</h3>
              <p className="paraph-a">
                Las presentaciones son herramientas de comunicación que pueden
                usarse en demostraciones, conferencias, discursos, informes,
                etc. Se suelen presentar ante un público
              </p>
            </div>
          </div>
          <div className="tipo">
            <div className="desc-b">
              <h3 className="subt-q">2. Comercial</h3>
              <p className="paraph-a">
                Las presentaciones son herramientas de comunicación que pueden
                usarse en demostraciones, conferencias, discursos, informes,
                etc. Se suelen presentar ante un público
              </p>
            </div>
          </div>
          <div className="tipo">
            <div className="desc-b">
              <h3 className="subt-q">3. Naturaleza</h3>
              <p className="paraph-a">
                Las presentaciones son herramientas de comunicación que pueden
                usarse en demostraciones, conferencias, discursos, informes,
                etc. Se suelen presentar ante un público
              </p>
            </div>
          </div>
          <div className="tipo">
            <div className="desc-b">
              <h3 className="subt-q">4. Paisaje</h3>
              <p className="paraph-a">
                Las presentaciones son herramientas de comunicación que pueden
                usarse en demostraciones, conferencias, discursos, informes,
                etc. Se suelen presentar ante un público
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <h4>
          Designed & coded by{" "}
          <a className="f-link" href="mailto:contactochka@gmail.com">
            contactochka@gmail.com
          </a>
        </h4>
      </footer>
    </div>
  );
}
