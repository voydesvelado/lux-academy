(this["webpackJsonplux-landing"]=this["webpackJsonplux-landing"]||[]).push([[0],{21:function(e,a,n){e.exports=n(33)},26:function(e,a,n){},32:function(e,a,n){},33:function(e,a,n){"use strict";n.r(a);var t=n(0),s=n.n(t),c=n(18),r=n.n(c),o=(n(26),n(9)),i=n(1);var l=function(){return s.a.createElement("nav",{id:"navbar"},s.a.createElement("ul",{className:"nav-links"},s.a.createElement(o.b,{to:"/Galeria",activeClassName:"is-active"},s.a.createElement("li",null,"Checa la galer\xeda de nuestros alumnos egresados"))))};function m(){return s.a.createElement("div",{className:"container"},s.a.createElement("main",{className:"jumbo"},s.a.createElement("h3",{className:"j-sub1"},"Academia fotogr\xe1fica lux"),s.a.createElement("h1",{className:"j-titulo"},"Fundamentos de la Fotograf\xeda"),s.a.createElement("h4",{className:"j-sub2"},"Gu\xeda para principiantes")),s.a.createElement("section",{className:"section-a"},s.a.createElement("div",{className:"faq1"},s.a.createElement("h2",{className:"titulo-a"},"\xbfQu\xe9 es la fotograf\xeda?"),s.a.createElement("h4",{className:"subt-a"},"Breve historia")),s.a.createElement("div",{className:"faq2"},s.a.createElement("p",{className:"paraph-a"},"Las presentaciones son herramientas de comunicaci\xf3n que pueden usarse en demostraciones, conferencias, discursos, informes, etc. Se presenta principalmente ante un p\xfablico y sirven para una gran variedad de prop\xf3sitos, lo que convierte a las presentaciones en herramientas \xfatiles para convencer y ense\xf1ar."),s.a.createElement("p",{className:"paraph-a"},"Las presentaciones son herramientas de comunicaci\xf3n que pueden usarse en demostraciones, conferencias, discursos, informes, etc. Se presenta principalmente ante un p\xfablico y sirven para una gran variedad de prop\xf3sitos, lo que convierte a las presentaciones en herramientas \xfatiles para convencer y ense\xf1ar.Las presentaciones son herramientas de comunicaci\xf3n que pueden usarse en demostraciones, conferencias, discursos, informes, etc."))),s.a.createElement("figure",{className:"quote"},s.a.createElement("h3",{className:"subt-q"},"Una toma de inspiraci\xf3n"),s.a.createElement("h2",{className:"q-titulo"},'"La fotograf\xeda es la historia que no consigo expresar con las palabras."'),s.a.createElement("h4",{className:"subt-q1"},"Destin Sparks")),s.a.createElement("div",{className:"section-b"},s.a.createElement("h2",{className:"titulo-a"},"Tipos de fotograf\xeda"),s.a.createElement("div",{className:"grid-b"},s.a.createElement("div",{className:"tipo"},s.a.createElement("div",{className:"desc-b"},s.a.createElement("h3",{className:"subt-q"},"1. Retrato"),s.a.createElement("p",{className:"paraph-a"},"Las presentaciones son herramientas de comunicaci\xf3n que pueden usarse en demostraciones, conferencias, discursos, informes, etc. Se suelen presentar ante un p\xfablico"))),s.a.createElement("div",{className:"tipo"},s.a.createElement("div",{className:"desc-b"},s.a.createElement("h3",{className:"subt-q"},"2. Comercial"),s.a.createElement("p",{className:"paraph-a"},"Las presentaciones son herramientas de comunicaci\xf3n que pueden usarse en demostraciones, conferencias, discursos, informes, etc. Se suelen presentar ante un p\xfablico"))),s.a.createElement("div",{className:"tipo"},s.a.createElement("div",{className:"desc-b"},s.a.createElement("h3",{className:"subt-q"},"3. Naturaleza"),s.a.createElement("p",{className:"paraph-a"},"Las presentaciones son herramientas de comunicaci\xf3n que pueden usarse en demostraciones, conferencias, discursos, informes, etc. Se suelen presentar ante un p\xfablico"))),s.a.createElement("div",{className:"tipo"},s.a.createElement("div",{className:"desc-b"},s.a.createElement("h3",{className:"subt-q"},"4. Paisaje"),s.a.createElement("p",{className:"paraph-a"},"Las presentaciones son herramientas de comunicaci\xf3n que pueden usarse en demostraciones, conferencias, discursos, informes, etc. Se suelen presentar ante un p\xfablico"))))),s.a.createElement("footer",{className:"footer"},s.a.createElement("h4",null,"Designed & coded by"," ",s.a.createElement("a",{className:"f-link",href:"mailto:contactochka@gmail.com"},"contactochka@gmail.com"))))}var u=n(14),p=n(15),d=n(20);function h(){var e=Object(t.useState)([]),a=Object(p.a)(e,2),n=a[0],c=a[1],r=Object(t.useState)(1),o=Object(p.a)(r,2),i=o[0],l=o[1];return Object(t.useEffect)((function(){fetch("https://api.unsplash.com/photos?client_id=".concat("BjURGOQmWTCw8eSZmb3z9CeqoLo8a6jeT_xr_gElWVI","&page=").concat(i)).then((function(e){return e.json()})).then((function(e){c((function(a){return[].concat(Object(u.a)(a),Object(u.a)(e))}))}))}),[i]),s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{dataLength:n.length,next:function(){l((function(e){return e+1}))},hasMore:!0,loader:s.a.createElement("h4",null,"Cargando...")},s.a.createElement("div",{className:"image-grid"},n.map((function(e,a){return s.a.createElement("a",{className:"image",key:a,href:e.links.html,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:e.urls.regular,alt:e.alt_description}))})))))}n(32);var E=function(){return s.a.createElement(o.a,null,s.a.createElement(l,null),s.a.createElement(i.c,null,s.a.createElement(i.a,{path:"/",exact:!0,component:m}),s.a.createElement(i.a,{path:"/galeria",exact:!0,component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.31c3444a.chunk.js.map