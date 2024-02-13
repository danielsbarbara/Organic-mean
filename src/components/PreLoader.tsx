import 'tailwindcss/tailwind.css';

export function showPreloader(): void {
    
    // Criando o elemento do preloader
    const preloader = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    preloader.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    preloader.setAttribute('viewBox', '0 0 200 200');
    preloader.classList.add('fixed', 'top-0', 'left-0', 'w-screen', 'h-screen', 'flex', 'items-center', 'justify-center', 'bg-white', 'z-50');

    // Adicionando os caminhos do preloader
    preloader.innerHTML = `
        <path fill="none" d="M0 0h200v200H0z"></path>
        <path fill="none" stroke-linecap="round" stroke="#FF4B0D" stroke-width="13" transform-origin="center" d="M70 95.5V112m0-84v16.5m0 0a25.5 25.5 0 1 0 0 51 25.5 25.5 0 0 0 0-51Zm36.4 4.5L92 57.3M33.6 91 48 82.7m0-25.5L33.6 49m58.5 33.8 14.3 8.2">
            <animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="0;-120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform>
        </path>
        <path fill="none" stroke-linecap="round" stroke="#FF4B0D" stroke-width="13" transform-origin="center" d="M130 155.5V172m0-84v16.5m0 0a25.5 25.5 0 1 0 0 51 25.5 25.5 0 0 0 0-51Zm36.4 4.5-14.3 8.3M93.6 151l14.3-8.3m0-25.4L93.6 109m58.5 33.8 14.3 8.2">
            <animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="0;120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform>
        </path>
    `;

    // Adicionando o preloader ao corpo do documento
    document.body.appendChild(preloader);
}

// Função para esconder o preloader
function hidePreloader(): void {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        preloader.remove();
    }
}

// Evento que é acionado quando a página é completamente carregada
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // Esconde o preloader quando a página estiver completamente carregada
        hidePreloader();
    }
};

// Exibindo o preloader quando a página é carregada
showPreloader();
