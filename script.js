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
];

let conteudo = [
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
  //   conteudo.forEach((element) => {
  //     adicionarCaixa(element);
  //   });
  mostrarCaixas(null);
};
