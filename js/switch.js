function turnLights () {
    // salvos em variáveis
    const bulb = document.querySelector('.bulb');
    const button = document.querySelector('.switch');
    bulb.classList.toggle("on");
    button.classList.toggle("on");
}