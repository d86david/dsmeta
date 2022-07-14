import React from "react"
import BotaoNotificar from "./recursos/componentes/botaoNotificacao"
import Header from "./recursos/componentes/Header"
import CardVendas from "./recursos/componentes/cardsVendas"


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="vendas">
          <div className="dsmeta-container">
            <CardVendas />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
