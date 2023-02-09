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
      descricao: `Surgiu nos Estados Unidos nos anos 50. É uma mistura de rock and roll, blues e country e é considerado como um dos precursores do rock and roll moderno.
      <br/>
      <br/>
      O estilo é conhecido por suas guitarras elétricas com solos de gaita, baixo elétrico e bateria rápida e animada.
      <br/>
      <br/>
      Além da música, também se estendeu ao visual, incluindo cabelos penteados com gel, calças justas, camisas xadrez e sapatos bicolores.
      <br/>
      <br/>
      Até hoje, o rockabilly mantém uma base de fãs dedicados, e há vários festivais e eventos dedicados ao gênero em todo o mundo. 
      <br/>
      <br/>
      Recomendações: "Blue Suede Shoes" de Carl Perkins, "Great Balls of Fire" de Jerry Lee Lewis e "Hound Dog" de Elvis Presley.`,
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Rock Psicodélico',
      descricao: `Surgiu nos anos 60 como uma forma de expressão artística que buscava explorar as dimensões psicológicas e mentais da música e da performance. É conhecido por suas letras abstratas, instrumentação experimental e produção de efeitos sonoros.
      <br/>
      <br/>
      Foi influenciado por diversas culturas, incluindo a contracultura da década de 1960, o movimento hippie, o uso de drogas alucinógenas e a música indiana e oriental.
      <br/>
      <br/>
      Influenciou a moda, a arte e a sociedade em geral. O estilo é conhecido por suas letras filosóficas, experimentações sonoras e performances teatrais.
      <br/>
      <br/>
      Recomendações: "Purple Haze" de Jimi Hendrix, "Somebody to Love" de Jefferson Airplane e "Lucy in the Sky with Diamonds" dos Beatles.
      `,
      cor: '#ffa42b'
    },
    {
      id: uuidv4(),
      nome: 'Rock Progressivo',
      descricao: `Surgiu nos anos 60 e se caracteriza por sua abordagem experimental e progressiva da música rock. Esse estilo se diferencia do rock convencional pela sua abordagem mais complexa e elaborada, com letras introspectivas, arranjos musicais complexos e a utilização de instrumentos como órgãos, sintetizadores e percussão.
      <br/>
      <br/>
      O rock progressivo foi influenciado por diversas formas de música, incluindo jazz, blues, folk e música clássica.
      <br/>
      <br/>
      Se estendeu ao visual, incluindo roupas elaboradas e performances teatrais. O estilo também teve um impacto significativo na cultura popular, influenciando a arte, a literatura e a sociedade em geral.
      <br/>
      <br/>
      Recomendações: "Tom Sawayer" do Rush, "Owner of a lonely heart" do Yes e "Shine On You Crazy Diamond" dos Pink Floyd.
      `,
      cor: '#0d72ea'
    },
    {
      id: uuidv4(),
      nome: 'Glam Rock',
      descricao: `Surgiu na década de 70 e se caracteriza por sua abordagem flamboyante e exagerada. Esse estilo é conhecido por suas letras ousadas, performance teatral e visual extravagante, que incluía maquiagem exagerada, roupas brilhantes e cabelos elaborados.
      <br/>
      <br/>
      Foi influenciado pelo teatro e pelo cinema, e teve como objetivo romper com as convenções da época. 
      <br/>
      <br/>
      Embora o estilo tenha sido breve, deixou uma marca duradoura na história da música e continua sendo uma fonte de inspiração nos dias atuais.
      <br/>
      <br/>
      Recomendações: "Ziggy Stardust" de David Bowie, "Bang a Gong (Get It On)" de T. Rex e "Bohemian Rhapsody" dos Queen.
      `,
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Hard Rock',
      descricao: `Surgiu na década de 60 e se caracteriza por sua abordagem pesada e potente. Se diferencia do rock convencional pela utilização de guitarras distorcidas, baterias potentes e letras ousadas e diretas.
      <br/>
      <br/>
      Influenciado por diversas formas de música, incluindo blues rock e heavy metal.
      <br/>
      <br/>
      Embora o estilo tenha enfrentado críticas por suas letras controversas e abordagem pouco convencional, ele continua sendo uma das formas mais populares do rock até hoje.
      <br/>
      <br/>
      Recomendações: "Stairway to Heaven" dos Led Zeppelin, "Iron Man" do Black Sabbath e "Highway to Hell" dos AC/DC.
      `,
      cor: '#e91429'
    },
    {
      id: uuidv4(),
      nome: 'Heavy Metal',
      descricao: `Surgiu na década de 70 e se caracteriza por sua abordagem pesada e intensa. Se diferencia do rock convencional pela utilização de guitarras distorcidas, baterias potentes e letras ousadas e diretas, além de vocais guturais e uma atitude agressiva.
      <br/>
      <br/>
      Foi influenciado pelo hard rock, blues rock e outros gêneros.
      <br/>
      <br/>
      Embora o estilo tenha enfrentado críticas por suas letras controversas e abordagem pouco convencional, ele continua sendo uma das formas mais populares do rock, com uma base de fãs leal e apaixonada.
      <br/>
      <br/>
      Recomendações: "Paranoid" do Black Sabbath, "Breaking the Law" do Judas Priest e "Enter Sandman" dos Metallica.
      `,
      cor: '#f15e6c'
    },
    {
      id: uuidv4(),
      nome: 'Grunge',
      descricao: `Surgiu na década de 80 e se caracteriza por sua abordagem pesada e intensa, com elementos de punk rock, heavy metal e hard rock. É diferente do rock convencional pela utilização de guitarras distorcidas, baterias potentes e letras introspectivas e realistas, além de uma atitude descontraída e sem compromisso.
      <br/>
      <br/>
      Foi popularizado por bandas de Seattle, como Nirvana, Soundgarden, Pearl Jam e Alice in Chains, e teve um impacto significativo na cultura popular.
      <br/>
      <br/>
      Se caracteriza por sua abordagem honesta e direta das questões sociais e políticas da época, e por sua atitude descontraída e rebelde. O estilo enfrentou críticas por suas letras depressivas e abordagem sombria.
      <br/>
      <br/>
      Recomendações: "Smells Like Teen Spirit" do Nirvana, "Black Hole Sun" dos Soundgarden, "Alive" do Pearl Jam e "Rooster" dos Alice in Chains.
      `,
      cor: '#3d91f4'
    },
    {
      id: uuidv4(),
      nome: 'Pop punk',
      descricao: `Surgiu na década de 70 e se caracteriza por sua abordagem energética e acelerada, com elementos de pop e hard rock. Tem a utilização de letras mais acessíveis e melodias mais pegajosas, além de uma atitude jovial e descontraída.
      <br/>
      <br/>
      Se caracteriza por suas letras otimistas e positivas, que abordam questões do dia a dia, relacionamentos, e por sua atitude jovial e descontraída. Enfrentou críticas por ser considerado superficial e pouco comprometido.
      <br/>
      <br/>
      Recomendações: "Blitzkrieg Bop" dos Ramones, "Ever Fallen in Love (With Someone You Shouldn't've)" dos Buzzcocks, "Teenage Kicks" dos The Undertones e "Should I Stay or Should I Go" dos The Clash.
      `,
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
