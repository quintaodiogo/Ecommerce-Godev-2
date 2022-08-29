import React from "react";
import Atendimento from "./Atendimento";
import Pagamento from "./Pagamento";
import Redes from "./Redes";
import Sobre from "./Sobre";
import Credit from "./Credit";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="containerFooterbody">
      <Atendimento />
      <Sobre />
      <Pagamento />
      <Redes />
      <Credit />
    </div>
  );
};

export default Footer;
