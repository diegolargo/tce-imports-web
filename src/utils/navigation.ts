const navBarLinks = [
  { name: "Inicio", url: "/", target: "" },
  { name: "¿Quiénes somos?", url: "/#about", target: "" },
  { name: "Servicios", url: "/services", target: "" },
  { name: "Blog", url: "/blog", target: "" },
  { name: "Contacto", url: "https://api.whatsapp.com/send?phone=573228553687&text=Hola%2Ctengo%20una%20consulta.", target: "_blank" },
];
const footerLinks = [
  {
    section: "Oficina",
    links: [
      { name: "Bogotá, Colombia", url: "#" },
    ]
  },
  {
    section: "Horario de Atención:",
    links: [
      { name: "Lunes a Viernes: 8am-7pm", url: "#" }
    ]
  },
  {
    section: "Contactenos",
    links: [
      { name: "tucargaexpress2020@outlook.com", url: "mailto:tucargaexpress2020@outlook.com" },
      { name: "+57 3228553687", url: "tel:+573228553687" }
    ]
  }
];
const socialLinks = {
  facebook: "https://www.facebook.com/people/Tucarga-Express/100063773003174/",
  instagram: "https://www.instagram.com/tceimports13/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};