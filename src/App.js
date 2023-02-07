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
      nome: 'Rock Psicodélico',
      descricao: 'Esse estilo, surgido nos anos 60, buscava reproduzir, através da música, os efeitos causados pelos alucinógenos. Como assim? Bom, o rock psicodélico usava muito de elementos como pedais de efeito, teclados, distorção e instrumentos exóticos utilizados na Índia (como o sitar e o tabla) para tentar causar esse tipo de sensação em suas canções. Até os Beatles incorporaram o psicodelismo em uma época, como fica perceptível no álbum Sgt. Pepper’s Lonely Hearts Club Band.',
      cor: '#ffa42b'
    },
    {
      id: uuidv4(),
      nome: 'Rock Progressivo',
      descricao: '',
      cor: '#0d72ea'
    },
    {
      id: uuidv4(),
      nome: 'Glam Rock',
      descricao: '',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Hard Rock',
      descricao: '',
      cor: '#e91429'
    },
    {
      id: uuidv4(),
      nome: 'Heavy Metal',
      descricao: '',
      cor: '#f15e6c'
    },
    {
      id: uuidv4(),
      nome: 'Grunge',
      descricao: '',
      cor: '#3d91f4'
    },
    {
      id: uuidv4(),
      nome: 'Pop punk',
      descricao: '',
      cor: '#727272'
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
      imagem: 'https://i.scdn.co/image/ab67616d00001e026f4f62da3d811b6501a69ffa',
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
      nome: 'Jimi Hendrix',
      imagem: 'https://i.scdn.co/image/ab67616d00001e02522088789d49e216d9818292',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'The Doors',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDM3kdEX1DZHaZfdNFhcFCrLM9KknL4rbtg&usqp=CAU',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Grateful Dead',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmXknMN6Me8gNbZ1R3W4vTERidnmyboYazwRUzd47fOLhKeh3kndVudwke_S0jx3-548&usqp=CAU',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Pink Floyd',
      imagem: 'https://i.scdn.co/image/ab67616d00001e025d48e2f56d691f9a4e4b0bdf',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Yes',
      imagem: 'https://i.scdn.co/image/ab67616d00001e02418e5dc6c0324f12a96e7aa7',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rush',
      imagem: 'https://i.scdn.co/image/ab67616d00001e0206c0d7ebcabad0c39b566983',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'David Bowie',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqidt8VFnbVBKxEFqBGYPfYTLLZ5TJ9uC-sA&usqp=CAU',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Heart',
      imagem: 'https://i.pinimg.com/474x/d4/e8/30/d4e830c4222c538bee58f83563cccf78--heart-html.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Secos e Molhados',
      imagem: 'https://i.scdn.co/image/ab67616d00001e0270f4d5f1690bbedab86fe5db',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'AC/DC',
      imagem: 'https://i.scdn.co/image/ab67616d00001e020a80b890ab011362fd7aa73b',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Led Zeppelin',
      favorito: false,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDSdqfIw26-tdvRMPtLusAX1GaK6VlBWXsQ&usqp=CAU',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Black Sabbath',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQs8tSy4bVUaeVbG4CZM3Fxu05VhQolg0KyhXqKl9xeNfw3XWSprhjtsnNZ1vq1vtwos&usqp=CAU',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Deep Purple',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jQrZcXTBcyVYXffZHJLG5b3m5NBSS6oR6Q&usqp=CAU',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Kiss',
      imagem: 'https://i.scdn.co/image/ab67616d00001e024384b6976cadaec272114022',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Iron Maiden',
      imagem: 'https://i.scdn.co/image/ab67616d00001e022277d1a849a63c7075ec38ff',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Metallica',
      imagem: 'https://i.scdn.co/image/ab67616d00001e02668e3aca3167e6e569a9aa20',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Motörhead',
      imagem: 'https://i.scdn.co/image/ab67616d00001e022051e219a4af7648223953c1',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Judas Priest',
      imagem: 'https://i.scdn.co/image/ab67616d00001e02be0e5ebab8c61469b1ff9f62',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Nirvana',
      imagem: 'https://i.scdn.co/image/ab67616d00001e02fbc71c99f9c1296c56dd51b6',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Pearl Jam',
      imagem: 'https://i.scdn.co/image/ab67616d00001e02d400d27cba05bb0545533864',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Soundgarden',
      imagem: 'https://i.scdn.co/image/ab67616d00001e020aeb443169c25c7b892e0521',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Alice In Chains',
      imagem: 'https://i.scdn.co/image/ab67616d00001e021f829ea9c2c7ffcec1a3c857',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'The Offspring',
      imagem: 'https://i.scdn.co/image/ab67616d00001e02cbd2ee7dff77bfb2b5f0af52',
      time: times[7].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Green Day',
      imagem: 'https://i.scdn.co/image/ab67616d00001e021d13a9948aab982fabdf5209',
      time: times[7].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Blink-182',
      imagem: 'https://i.scdn.co/image/ab67616d00001e026da502e35a7a3e48de2b0f74',
      time: times[7].nome
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

  function cadastrarTime({ nome, cor, descricao }) {
    setTimes([...times, { nome, cor, descricao, id: uuidv4() }])
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
