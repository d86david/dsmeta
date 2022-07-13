import React from "react"
import iconeNotifica from '../../img/notificacaoIcone.svg'
import './styles.css'

function BotaoNotificar() {
  return (
    <>
      <div className="dsmeta-botao-Vermelho">
        <img src={iconeNotifica} alt="Notificar" />
      </div>
    </>
  )
}

export default BotaoNotificar