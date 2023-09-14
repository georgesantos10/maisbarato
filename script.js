// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Defina os preços iniciais
    let precoMercadoA = 10.00;
    let precoMercadoB = 15.00;

    // Atualize os preços na página
    document.querySelector('.precoMercadoA').textContent = `Mercado A: R$ ${precoMercadoA.toFixed(2)}`;
    document.querySelector('.precoMercadoB').textContent = `Mercado B: R$ ${precoMercadoB.toFixed(2)}`;
    
    // Se precisar alterar os preços posteriormente, você pode fazer isso assim:
    // precoMercadoA = novoPrecoMercadoA;
    // precoMercadoB = novoPrecoMercadoB;
    // document.querySelector('.precoMercadoA').textContent = `Mercado A: R$ ${precoMercadoA.toFixed(2)}`;
    // document.querySelector('.precoMercadoB').textContent = `Mercado B: R$ ${precoMercadoB.toFixed(2)}`;
});
