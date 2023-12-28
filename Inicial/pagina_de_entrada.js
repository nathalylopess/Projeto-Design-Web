// Obtém todos os elementos de input do carrossel
const carroselInputs = document.querySelectorAll('.carrosel input[type="radio"]');

// Define o índice inicial do slide
let currentIndex = 0;

// Função para avançar para o próximo slide
function proximoslide() {
    currentIndex = (currentIndex + 1) % carroselInputs.length;
    carroselInputs[currentIndex].checked = true;
  }

// Define o intervalo para mudar de slide automaticamente (a cada 3 segundos, ajustável conforme necessário)
const intervalo = setInterval(proximoslide, 3000);

// Pausa o intervalo quando o mouse entra no carrossel e o reinicia quando sai
const carrosel = document.querySelector('.carrosel');
carrosel.addEventListener('mouseenter', () => clearInterval(intervalo));
carrosel.addEventListener('mouseleave', () => intervalo = setInterval(proximoslide, 3000));

var carrinho = document.getElementById('carrinho_pag');
carrinho.addEventListener("click", function(){
    window.location.href =
})

var carrinho_responsivo = document.getElementById('carrinho_pag_responsivo');
carrinho_responsivo.addEventListener("click", function(){
    window.location.href =
})

var login = document.getElementById('login_pag');
login.addEventListener("click", function(){
  window.location.href =
})

var login_responsivo = document.getElementById('login_pag_responsivo');
login_responsivo.addEventListener("click", function(){
  window.location.href =
})

var whey = document.getElementById('whey');
whey.addEventListener("click", function(){
  window.location.href =
})

var creatina = document.getElementById('creatina');
creatina.addEventListener("click", function(){
  window.location.href =
})

var acessorios = document.getElementById('acessorios');
acessorios.addEventListener("click", function(){
  window.location.href =
})

var dashboard = document.getElementById('dashboard');
dashboard.addEventListener("click", function(){
  window.location.href =
})

