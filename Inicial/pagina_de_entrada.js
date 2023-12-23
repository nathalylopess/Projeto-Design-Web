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
carrinho.innerHTML = '<a href="file:///C:/Users/river/OneDrive/%C3%81rea%20de%20Trabalho/Infoweb/Design%20Web/projeto%20design/carrinho/carrinho.html"><i class="bx bx-cart-alt bx-md bx-tada"></i></a>'

var carrinho_responsivo = document.getElementById('carrinho_pag_responsivo');
carrinho_responsivo.innerHTML = '<a href="file:///C:/Users/river/OneDrive/%C3%81rea%20de%20Trabalho/Infoweb/Design%20Web/projeto%20design/carrinho/carrinho.html"><i class="bx bx-cart-alt bx-md bx-tada"></i></a>'

var login = document.getElementById('login_pag');
login.innerHTML = '<a href="file:///C:/Users/river/OneDrive/%C3%81rea%20de%20Trabalho/Infoweb/Design%20Web/projeto%20design/login/pagina_de_login.html"><i class="bx bx-user bx-md "></i></a>'

var login_responsivo = document.getElementById('login_pag_responsivo');
login_responsivo.innerHTML = '<a href="file:///C:/Users/river/OneDrive/%C3%81rea%20de%20Trabalho/Infoweb/Design%20Web/projeto%20design/login/pagina_de_login.html"> <i class="bx bx-user bx-md "></i></a>'

var whey = document.getElementById('whey');
whey.innerHTML = '<a href="file:///C:/Users/river/OneDrive/%C3%81rea%20de%20Trabalho/Infoweb/Design%20Web/projeto%20design/whey_protein/whey_protein.html"><button class="botoes_menu" id="whey"> Whey Protein </button></a>'

var creatina = document.getElementById('creatina');
creatina.innerHTML = '<a href="file:///C:/Users/river/OneDrive/%C3%81rea%20de%20Trabalho/Infoweb/Design%20Web/projeto%20design/creatinas/creatinas.html"><button class="botoes_menu" id="creatina"> Creatina </button></a>'

var roupas = document.getElementById('roupas');
roupas.innerHTML = '<a href="file:///C:/Users/river/OneDrive/%C3%81rea%20de%20Trabalho/Infoweb/Design%20Web/projeto%20design/roupas/roupas.html"><button class="botoes_menu" id="roupas"> Roupas </button> </a>'

var acessorios = document.getElementById('acessorios');
acessorios.innerHTML = '<a href="file:///C:/Users/river/OneDrive/%C3%81rea%20de%20Trabalho/Infoweb/Design%20Web/projeto%20design/acessorios/acessorios.html"><button class="botoes_menu" id="acessorios"> Acessórios </button></a>'

var dashboard = document.getElementById('dashboard');
dashboard.innerHTML = '<a href="file:///C:/Users/river/OneDrive/%C3%81rea%20de%20Trabalho/Infoweb/Design%20Web/projeto%20design/acessorios/acessorios.html"><button class="botoes_menu" id="dashboard"> Dashboard </button></a>'



