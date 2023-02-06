import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Rockabilly',
      descricao: 'Com forte influência da música country e do R&B dos Estados Unidos, o rockabilly surgiu no início da década de 50 e deixou seu legado',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Garage Rock',
      descricao: 'O garage rock (ou rock de garagem) é uma vertente bem underground do rock, tanto que o punk se inspirou nesse estilo. O nome vem justamente referenciando as bandas amadoras que surgem das garagens das casas, com um som baseado em acordes básicos, distorções, pouca preocupação com as letras e, geralmente, baixo orçamento para gravações.',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Rock Psicodélico',
      descricao: 'Esse estilo, surgido nos anos 60, buscava reproduzir, através da música, os efeitos causados pelos alucinógenos. Como assim? Bom, o rock psicodélico usava muito de elementos como pedais de efeito, teclados, distorção e instrumentos exóticos utilizados na Índia (como o sitar e o tabla) para tentar causar esse tipo de sensação em suas canções. Até os Beatles incorporaram o psicodelismo em uma época, como fica perceptível no álbum Sgt. Pepper’s Lonely Hearts Club Band.',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Rock Progressivo',
      descricao: '',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Glam Rock',
      descricao: '',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Folk Rock',
      descricao: '',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Hard Rock',
      descricao: '',
      cor: '#FF8A19'
    },
    {
      id: uuidv4(),
      nome: 'Heavy Metal',
      descricao: '',
      cor: '#FF8A28'
    },
    {
      id: uuidv4(),
      nome: 'Punk Rock',
      descricao: '',
      cor: '#FF8A84'
    },
    {
      id: uuidv4(),
      nome: 'New Wave',
      descricao: '',
      cor: '#FF8A79'
    },
    {
      id: uuidv4(),
      nome: 'Rock Alternativo',
      descricao: '',
      cor: '#FF8A69'
    },
    {
      id: uuidv4(),
      nome: 'Grunge',
      descricao: '',
      cor: '#FF8A39'
    },
    {
      id: uuidv4(),
      nome: 'Pop punk',
      descricao: '',
      cor: '#FFffff'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Elvis Presley',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbb_QtO3U4e8l5z6uW6GZnln25ukT_mnr1HQ&usqp=CAU',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Johnny Cash',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvcmzYT1OuArUXzA081jdPtOLsb2N_VmmLA&usqp=CAU',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Carl Perkins',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvV_yt87nCfCMMn4PmV3r4ZWTuuyakZcgJsx0Gq7Pn-_t5HYTvIc_k9-47uWCEc2P19n0&usqp=CAU',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jimi Hendrix',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQj8ajGI13XxXVy9Vtw4SuEjh-MN8HvH_Mg&usqp=CAU',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'The Doors',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDM3kdEX1DZHaZfdNFhcFCrLM9KknL4rbtg&usqp=CAU',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Grateful Dead',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmXknMN6Me8gNbZ1R3W4vTERidnmyboYazwRUzd47fOLhKeh3kndVudwke_S0jx3-548&usqp=CAU',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Pink Floyd',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4La5sac5PBODOOfgoRcuhMHZZaoOEtj-DQ&usqp=CAU',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Yes',
      imagem: 'http://www.rocknaveia.com.br/wp-content/uploads/logo-yes-rock-na-veia-770x322.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rush',
      imagem: 'http://www.rocknaveia.com.br/wp-content/uploads/logo-rush-rock-na-veia-770x322.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'David Bowie',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqidt8VFnbVBKxEFqBGYPfYTLLZ5TJ9uC-sA&usqp=CAU',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[7].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[7].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[7].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[8].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[8].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[8].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[9].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[9].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[9].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[10].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[10].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[10].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[11].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[11].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[11].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[12].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[12].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[12].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }


  return (
    <div>
      <Banner />
      <section className="times">
        {times.map((time, indice) =>
          <Time
            mudarCor={mudarCor}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            aoFavoritar={resolverFavorito}
          />
        )}
      </section>
      <Formulario
        aoCriarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
      />
      <Rodape />
    </div>
  );
}

export default App;
