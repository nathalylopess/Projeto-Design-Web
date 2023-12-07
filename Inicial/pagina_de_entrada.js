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