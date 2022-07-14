import React from "react"
import BotaoNotificar from "../botaoNotificacao"
import './styles.css'

function CardVendas() {
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-titulo-vendas">Vendas</h2>
                <div>
                    <div className="dsmeta-controle-formulario-container">
                        <input className="dsmeta-controle-formulario" type="text" />
                    </div>
                    <div className="dsmeta-controle-formulario-container">
                        <input className="dsmeta-controle-formulario" type="text" />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-tabela-vendas">
                        <thead>
                            <tr>
                                <th className="mostrar-992px">ID</th>
                                <th className="mostrar-576px">Data</th>
                                <th>Vendendor</th>
                                <th className="mostrar-992px">Visitas</th>
                                <th className="mostrar-992px">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="mostrar-992px">0001</td>
                                <td className="mostrar-576px">08/07/2022</td>
                                <td>Anakim</td>
                                <td className="mostrar-992px">30</td>
                                <td className="mostrar-992px">100</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-botao-vermelho-container">
                                        <BotaoNotificar />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="mostrar-992px">0002</td>
                                <td className="mostrar-576px">08/07/2022</td>
                                <td>Anakim</td>
                                <td className="mostrar-992px">20</td>
                                <td className="mostrar-992px">80</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-botao-vermelho-container">
                                        <BotaoNotificar />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mostrar-992px">0003</td>
                                <td className="mostrar-576px">08/07/2022</td>
                                <td>Anakim</td>
                                <td className="mostrar-992px">15</td>
                                <td className="mostrar-992px">70</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-botao-vermelho-container">
                                        <BotaoNotificar />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CardVendas