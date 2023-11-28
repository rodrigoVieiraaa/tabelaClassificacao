var listaJogadores = [];

function atualizarTela() {
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = "";

  for (var i = 0; i < listaJogadores.length; i++) {
    var colunaNome = document.createElement("td");
    colunaNome.textContent = listaJogadores[i].nome;

    var colunaVitorias = document.createElement("td");
    colunaVitorias.textContent = listaJogadores[i].vitorias;

    var colunaEmpates = document.createElement("td");
    colunaEmpates.textContent = listaJogadores[i].empates;

    var colunaDerrotas = document.createElement("td");
    colunaDerrotas.textContent = listaJogadores[i].derrotas;

    var colunaPontos = document.createElement("td");
    colunaPontos.textContent = listaJogadores[i].pontos;

    var botaoVitoria = document.createElement("button");
    botaoVitoria.onclick = (function (index) {
      return function () {
        adicionarVitoria(index);
      };
    })(i);
    botaoVitoria.textContent = "Vitória";

    var tdVitoria = document.createElement("td");
    tdVitoria.appendChild(botaoVitoria);

    var botaoEmpate = document.createElement("button");
    botaoEmpate.onclick = (function (index) {
      return function () {
        adicionarEmpate(index);
      };
    })(i);

    botaoEmpate.textContent = "Empate";

    var tdEmpate = document.createElement("td");
    tdEmpate.appendChild(botaoEmpate);

    var botaoDerrota = document.createElement("button");
    botaoDerrota.onclick = (function (index) {
      return function () {
        adicionarDerrota(index);
      };
    })(i);
    botaoDerrota.textContent = "Derrota";

    var tdDerrota = document.createElement("td");
    tdDerrota.appendChild(botaoDerrota);

    var linhaJogador = document.createElement("tr");
    linhaJogador.appendChild(colunaNome);
    linhaJogador.appendChild(colunaVitorias);
    linhaJogador.appendChild(colunaEmpates);
    linhaJogador.appendChild(colunaDerrotas);
    linhaJogador.appendChild(colunaPontos);
    linhaJogador.appendChild(tdVitoria);
    linhaJogador.appendChild(tdEmpate);
    linhaJogador.appendChild(tdDerrota);

    tabelaJogadores.appendChild(linhaJogador);
  }
}

function criarJogador(nomeJogador) {
  var jogador = {
    nome: nomeJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  };

  return jogador;
}

function alimentaLista(jogador) {
  listaJogadores.push(jogador);
}

function verificarRepetido(nomeJogador) {
  for (var i = 0; i < listaJogadores.length; i++) {
    if (nomeJogador == listaJogadores[i].nome) {
      alert("Jogador já adicionado!");

      return;
    }
  }

  var jogador = criarJogador(nomeJogador);
  alimentaLista(jogador);
}

function adicionarJogador() {
  var novoJogador = document.getElementById("nomeJogador").value;

  verificarRepetido(novoJogador);
  atualizarTela();
}

function adicionarVitoria(nomeJogador) {
  listaJogadores[nomeJogador].vitorias++;
  listaJogadores[nomeJogador].pontos += 3;
  atualizarTela();
}

function adicionarEmpate(nomeJogador) {
  listaJogadores[nomeJogador].empates++;
  listaJogadores[nomeJogador].pontos += 1;
  atualizarTela();
}

function adicionarDerrota(nomeJogador) {
  listaJogadores[nomeJogador].derrotas++;
  atualizarTela();
}

function zerarPontos() {
  for (var i = 0; i < listaJogadores.length; i++) {
    listaJogadores[i].vitorias = 0;
    listaJogadores[i].empates = 0;
    listaJogadores[i].derrotas = 0;
    listaJogadores[i].pontos = 0;
  }
  atualizarTela();
}
