import ogImageSrc from "../../public/open-graph.jpg";

export const SITE = {
  title: "TCE IMPORTS",
  tagline: "importaciones, importamos desde Estados Unidos, importaciones Colombia, productos USA, compras internacionales",
  description: "Descubre cómo en TCE Imports convertimos tus deseos en realidad, importando los mejores productos desde Estados Unidos a Colombia.",
  description_short: "Descubre cómo en TCE Imports convertimos tus deseos en realidad, importando los mejores productos desde Estados Unidos a Colombia.",
  url: "https://www.tceimports.com",
  author: "D2",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-ES",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_ES",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Importando Sueños a Colombia`,
  description: "Descubre cómo en TCE Imports convertimos tus deseos en realidad, importando los mejores productos desde Estados Unidos a Colombia.",
  image: ogImageSrc,
};
