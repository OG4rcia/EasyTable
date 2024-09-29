function openModal(modalId) {
    const modal = document.getElementById(modalId);
    
    // Obtém as informações do elemento clicado
    const element = document.querySelector(`[onclick="openModal('${modalId}')"]`);
    const massa = element.getAttribute('data-massa');
    const energia = element.getAttribute('data-energia');
    const symbol = element.getAttribute('data-symbol');
    const name = element.getAttribute('data-name');
    
    // Altera o conteúdo do modal
    modal.querySelector('.modal-content').innerHTML = `
        <span class="close" onclick="closeModal('${modalId}')">&times;</span>
        <h2>${name} (${symbol})</h2>
        <p>Massa Atômica: ${massa}</p>
        <p>Nível de Energia: ${energia}</p>
        <img src="https://via.placeholder.com/150" alt="Imagem do ${name}">
    `;
    
    // Exibe o modal
    modal.style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
