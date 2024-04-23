import LinkBarraNavegacao from "@/componentes/barra-navegacao";
import React from "react";

export default function Home() {
  return (
    <div>
        <nav className="bg-blue-500 p-4">
          <ul className="flex gap-4">
          <LinkBarraNavegacao href = "/">Inicio</LinkBarraNavegacao>
          <LinkBarraNavegacao href = "/cadastroIngressos/">Cadastro de Eventos</LinkBarraNavegacao>
          <LinkBarraNavegacao href = "/eventos">Eventos</LinkBarraNavegacao>
          </ul>
        </nav>
    </div>
  );
}
