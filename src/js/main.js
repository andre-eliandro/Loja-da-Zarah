// Seleciona todos os botões de categoria
const botoes = document.querySelectorAll('.btn-categoria');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove a cor de "ativo" de todos
        botoes.forEach(b => b.classList.remove('active'));
        
        // Adiciona a cor de "ativo" no que foi clicado
        botao.classList.add('active');
        
        console.log("Você filtrou por: " + botao.innerText);
    });
});

// Lógica para o botão comprar direcionar ao WhatsApp
const botoesComprar = document.querySelectorAll('.btn-comprar');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', (event) => {
        // 1. Pegar o nome do produto que está no mesmo card do botão
        const card = event.target.closest('.card-produto');
        const nomeProduto = card.querySelector('.nome-produto').innerText;
        
        // 2. Definir o seu número de telefone (DDD + Número, tudo junto)
        const seuTelefone = "5551997948767"; // SUBSTITUA PELO SEU NÚMERO
        
        // 3. Criar a mensagem personalizada
        const mensagem = `Olá Zarah! Gostaria de encomendar o produto: ${nomeProduto}`;
        
        // 4. Codificar a mensagem para o link (transforma espaços em códigos que o link entende)
        const mensagemCodificada = encodeURIComponent(mensagem);
        
        // 5. Criar a URL final do WhatsApp
        const urlWhatsapp = `https://wa.me/${5551997948767}?text=${mensagemCodificada}`;
        
        // 6. Abrir o WhatsApp em uma nova aba
        window.open(urlWhatsapp, '_blank');
    });
});
// 1. Selecionar os elementos
const botoesCategoria = document.querySelectorAll('.btn-categoria');
const cardsProdutos = document.querySelectorAll('.card-produto');

// 2. Adicionar o evento de clique em cada botão
botoesCategoria.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remover a classe 'active' de todos e adicionar no clicado
        botoesCategoria.forEach(b => b.classList.remove('active'));
        botao.classList.add('active');

        // Pegar o nome da categoria (removendo o emoji e espaços extras)
        // O .slice(2) remove o emoji do início se houver um espaço (ex: "💎 Brincos")
        const categoriaEscolhida = botao.innerText.replace(/[^\w\sÀ-ú]/g, '').trim();

        // 3. Filtrar os cards
        cardsProdutos.forEach(card => {
            const categoriaCard = card.getAttribute('data-categoria');

            if (categoriaEscolhida === "Tudo" || categoriaEscolhida === categoriaCard) {
                card.style.display = "flex"; // Mostra o produto
            } else {
                card.style.display = "none"; // Esconde o produto
            }
        });
    });
});