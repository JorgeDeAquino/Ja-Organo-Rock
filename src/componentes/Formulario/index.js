import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({ aoCadastrar, times, aoCriarTime }) => {

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, imagem, time )
        aoCadastrar({
            nome,
            imagem,
            time
        })
        setNome('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha para criar o card da Banda.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome da Banda'
                    placeholder='Digite o nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo 
                    label='Imagem' 
                    placeholder='Informe o URL da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Estilo que se enquadra'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar card' />
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                aoCriarTime({ nome: nomeTime, cor: corTime })
                setNomeTime('')
                setCorTime('')
            }}>
                <h2>Preencha para adicionar um novo estilo.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome do Estilo'
                    placeholder='Digite o nome do estilo'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Cor'
                    type='color'
                    placeholder='Digite sua cor'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}/>
                <Botao texto='Criar Time' />
            </form>
        </section>
    )
}

export default Formulario