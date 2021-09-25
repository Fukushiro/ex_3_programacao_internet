/*
paleta{
    21295c
    00c49a
    ebe9e9
    006c67
    a57f60
}




    Estrutura do objeto
    categoria{
        int: id,
        string: nome
    }
    conteudo{
        int : id,
        string : titulo,
        string : url,
        string : urlDeImagem,
        int: categoria,

    }

 */

let categorias = [
  { id: 0, nome: 'comida' },
  { id: 1, nome: 'jogos' },
  { id: 2, nome: 'noticias' },
  { id: 3, nome: 'Sites divertidos' },
  { id: 4, nome: 'Esporte' },
];

let conteudo = [
  // comida
  {
    id: 0,
    titulo: 'Pao de queijo',
    url: 'https://www.tudogostoso.com.br/receita/1443-pao-de-queijo.html',
    urlDeImagem:
      'https://foodandroad.com/wp-content/uploads/2021/04/pao-de-queijo-cheese-bread-3.jpg',
    categoria: 0,
  },
  {
    id: 1,
    titulo: 'Macarrao',
    url: 'https://receitas.globo.com/macarrao-simples-4dfa24dbd7001a3f8d0021ce.ghtml',
    urlDeImagem:
      'https://s2.glbimg.com/6af6YVkADRZAC9sLVFOM6mH8Jt4=/0x0:1920x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/O/8/qNYHfAQhK8YIjBGViedA/pasta-1463930-1920.jpg',
    categoria: 0,
  },
  // jogos
  {
    id: 2,
    titulo: 'Fortnite',
    url: 'https://www.epicgames.com/fortnite/pt-BR/home',
    urlDeImagem:
      'https://s2.glbimg.com/d7ULQRQm3_jIU9PVDme21GSkt1c=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/N/A/rIazBsQmidq9gyS60DaQ/temporada-8-fortnite.jpg',
    categoria: 1,
  },
  {
    id: 3,
    titulo: 'Overwatch',
    url: 'https://playoverwatch.com/pt-br/',
    urlDeImagem:
      'https://s2.glbimg.com/8xRSTf0bYUxpol5NO41wp499QoQ=/0x0:1047x540/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/T/R/5IGsdGSmSHjrohA9CzHQ/overwatch-2.jpg',
    categoria: 1,
  },
  {
    id: 4,
    titulo: 'Just Dance 2021',
    url: 'https://www.ubisoft.com/pt-br/game/just-dance/2021',
    urlDeImagem:
      'https://image.api.playstation.com/vulcan/img/rnd/202011/1220/39pCDkkcgUBKSSQJILIIUPav.jpg',
    categoria: 1,
  },
  {
    id: 5,
    titulo: 'Assassins Creed Origins',
    url: 'https://www.ubisoft.com/pt-br/game/assassins-creed/origins',
    urlDeImagem:
      'https://tecnoblog.net/wp-content/uploads/2021/03/assassins-creed-origins-700x394.jpg',
    categoria: 1,
  },
  {
    id: 6,
    titulo: 'Tom Clancy s Ghost Recon Wildlands',
    url: 'https://www.ubisoft.com/pt-br/game/ghost-recon/breakpoint/wildlands',
    urlDeImagem:
      'https://tecnoblog.net/meiobit/wp-content/uploads/2017/03/20170317wildlands-2.jpg',
    categoria: 1,
  },
  // Noticias
  {
    id: 7,
    titulo: 'Globo',
    url: 'https://www.globo.com/',
    urlDeImagem:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Globo.com_logo_%28stacked%29.svg/1200px-Globo.com_logo_%28stacked%29.svg.png',
    categoria: 2,
  },
  {
    id: 8,
    titulo: 'Folha de São Paulo',
    url: 'https://www.folha.uol.com.br/',
    urlDeImagem:
      'https://apesp.org.br/wp-content/uploads/2019/08/folha_160819.png',
    categoria: 2,
  },

  {
    id: 9,
    titulo: 'Estadão',
    url: 'https://www.estadao.com.br/',
    urlDeImagem:
      'https://img.estadao.com.br/resources/jpg/3/4/1598984352643.jpg',
    categoria: 2,
  },

  {
    id: 10,
    titulo: 'CNN Brasil',
    url: 'https://www.cnnbrasil.com.br/',
    urlDeImagem:
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png',
    categoria: 2,
  },

  {
    id: 11,
    titulo: 'BBC News',
    url: 'https://www.bbc.com/portuguese',
    urlDeImagem:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1024px-BBC_News_2019.svg.png',
    categoria: 2,
  },
  // Sites divertidos categoria 4

  {
    id: 12,
    titulo: 'Haximionic',
    url: 'http://haxiomic.github.io/GPU-Fluid-Experiments/html5/?q=Medium',
    urlDeImagem:
      'https://external-preview.redd.it/luasbAZzI8wt-E9368ZQYaBkRtX9Wu_YFMDywjXuJc4.jpg?auto=webp&s=fb82eff708c671f9dc4cdbdda28bdb15de308b42',
    categoria: 3,
  },

  {
    id: 13,
    titulo: 'Neogeocity',
    url: 'http://www.neogeocity.com/',
    urlDeImagem: 'https://www.newrafael.com/img/sitethumbs/neogeocity-700.png',
    categoria: 3,
  },

  {
    id: 14,
    titulo: 'Super-Looper',
    url: 'http://superlooper.universlabs.co.uk/',
    urlDeImagem: 'https://superlooper.universlabs.co.uk/images/opengraph.png',
    categoria: 3,
  },

  {
    id: 15,
    titulo: 'Koalas to The Max',
    url: 'https://www.koalastothemax.com/',
    urlDeImagem:
      'https://i.pinimg.com/originals/3d/d3/2f/3dd32f80fd3cad17ba427c03a27546b7.png',
    categoria: 3,
  },

  {
    id: 16,
    titulo: 'Ducks Are The Best',
    url: 'http://ww16.ducksarethebest.com/?sub1=20210923-0855-51fe-af2d-987c33bd33c9',
    urlDeImagem:
      'https://arewefullyet.com/images/2013/04/ducks-are-the-best.jpg',
    categoria: 3,
  },
  // Esporte
  {
    id: 17,
    titulo: 'GE Globo',
    url: 'https://ge.globo.com/',
    urlDeImagem:
      'https://s3.glbimg.com/v1/AUTH_378ee63fe83141e69caddd838034e850/static/preview-share-min.png',
    categoria: 4,
  },

  {
    id: 18,
    titulo: 'Lance',
    url: 'https://www.lance.com.br/',
    urlDeImagem:
      'https://seeklogo.com/images/D/Di__rio_Esportivo_LANCE_-logo-71CA7640FE-seeklogo.com.png',
    categoria: 4,
  },

  {
    id: 19,
    titulo: 'Gazeta Esportiva',
    url: 'https://www.gazetaesportiva.com/',
    urlDeImagem:
      'https://earparade.com.br/wp-content/uploads/2019/07/gazeta.jpg',
    categoria: 4,
  },

  {
    id: 20,
    titulo: 'ESPN',
    url: 'https://www.espn.com.br/',
    urlDeImagem:
      'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/01/espn-logo_divulgacao.png',
    categoria: 4,
  },

  {
    id: 21,
    titulo: 'R7 esportes',
    url: 'https://esportes.r7.com/',
    urlDeImagem:
      'http://anuncie.r7.com/files/2015/01/Home-Esportes-2-301x169.png',
    categoria: 4,
  },
];

function getCategoriaById(id) {
  return categorias.filter((value) => value.id == id);
}

function adicionarCaixa(paramConteudo) {
  document.getElementById('grid_id').innerHTML += `
    <div class="caixa">
    <a
      href="${paramConteudo.url}"
      target="blank"
      class="caixa_a"
    >
      <div class="caixa_img_container">
        <img
          src="${paramConteudo.urlDeImagem}"
          alt=""
          class="caixa_img"
        />
        <div class="caixa_classificacao">${
          getCategoriaById(paramConteudo.categoria)[0].nome
        }</div>
        <div class="caixa_titulo">${paramConteudo.titulo}</div>
      </div>
    </a>
  </div>
    `;
}

function mostrarCaixas(filtro) {
  document.getElementById('grid_id').innerHTML = '';
  if (filtro == null || filtro == -1) {
    conteudo.forEach((element) => {
      adicionarCaixa(element);
    });
  } else {
    const filtrado = conteudo.filter((val) => {
      return val.categoria == filtro;
    });
    filtrado.forEach((element) => {
      adicionarCaixa(element);
    });
  }
}
function populateCategoriaSelect(elemento) {
  document.getElementById(
    elemento
  ).innerHTML = `<option selected value="-1">vazio</option>`;
  categorias.forEach((element) => {
    document.getElementById(
      elemento
    ).innerHTML += `<option value="${element.id}">${element.nome}</option>`;
  });
}
function cadastrar() {
  const titulo = document.getElementById('titulo_id').value;
  const url = document.getElementById('url_id').value;
  const urlImage = document.getElementById('urlDeImagem_id').value;
  const selected = document.getElementById('categorias_cadastro_id').value;

  if (selected != -1) {
    const ultimoId = Math.max.apply(
      Math,
      conteudo.map((v) => v.id)
    );
    conteudo.push({
      id: ultimoId + 1,
      categoria: selected,
      titulo: titulo,
      url: url,
      urlDeImagem: urlImage,
    });
  }
  const val = document.getElementById('categorias_id').value;
  mostrarCaixas(val);
}
window.onload = () => {
  populateCategoriaSelect('categorias_cadastro_id');
  populateCategoriaSelect('categorias_id');
  document.getElementById('categorias_id').onchange = (a) => {
    const val = document.getElementById('categorias_id').value;
    mostrarCaixas(val);
  };

  mostrarCaixas(null);
};
