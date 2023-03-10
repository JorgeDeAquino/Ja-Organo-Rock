import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './time.css'
import HTMLReactParser from "html-react-parser";

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input
                type='color'
                className='input-cor'
                value={time.cor}
                onChange={evento => {
                    mudarCor(evento.target.value, time.id);
                }} 
            />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <p className='descricao'>{HTMLReactParser(time.descricao)}</p>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} />)}
            </div>
        </section>

    )
}

export default Time