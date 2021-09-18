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
  { id: 1, nome: 'esporte' },
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
    titulo: 'Macarrao',
    url: 'https://receitas.globo.com/macarrao-simples-4dfa24dbd7001a3f8d0021ce.ghtml',
    urlDeImagem:
      'https://s2.glbimg.com/6af6YVkADRZAC9sLVFOM6mH8Jt4=/0x0:1920x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/O/8/qNYHfAQhK8YIjBGViedA/pasta-1463930-1920.jpg',
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
