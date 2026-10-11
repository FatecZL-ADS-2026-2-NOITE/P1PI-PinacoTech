function filtrar() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const categoria = document.getElementById("filtro-categoria").value;
    const precoMinimo = parseFloat(document.getElementById("preco-minimo").value) || 0;
    const precoMaximo = parseFloat(document.getElementById("preco-maximo").value) || Infinity;
    const apenasVegetarianos = document.getElementById("filtro-vegetariano").checked;

    const cartoes = document.querySelectorAll(".cartao");
    let algumItemVisivel = false;

    for (const cartao of cartoes) {
        const id = parseInt(cartao.dataset.id);
        const item = ITENS.find(i => i.id === id);

        const correspondeBusca = item.item.toLowerCase().includes(busca);
        const correspondeCategoria = categoria === "" || item.categoria.toLowerCase() === categoria;
        const correspondePreco = item.preco >= precoMinimo && item.preco <= precoMaximo;
        const correspondeVegetariano = !apenasVegetarianos || item.vegetariano;

        if (correspondeBusca && correspondeCategoria && correspondePreco && correspondeVegetariano) {
            cartao.hidden = false;
            algumItemVisivel = true;
        } else {
            cartao.hidden = true;
        }
    }

    document.getElementById("mensagemVazia").hidden = algumItemVisivel;
    document.getElementById("contador").textContent = `Mostrando ${document.querySelectorAll(".cartao:not([hidden])").length} de ${ITENS.length} itens`;
}

function loadItems() {
    if (ITENS.length === 0) {
        document.getElementById("mensagemVazia").hidden = false;
        return;
    }

    for (const item of ITENS) {
        const card = document.createElement("article");
        card.classList.add("cartao");
        card.dataset.id = item.id;

        card.innerHTML = `<img class="cartao-foto" src="${item.imageUrl}" alt="Foto de ${item.item}">

                    <div class="cartao-corpo">
                        <p class="cartao-categoria">${item.categoria}</p>
                        <h3 class="cartao-nome">${item.item}</h3>
                        <p class="cartao-preco">R$ ${item.preco.toFixed(2)}</p>

                        <div class="cartao-selos">
                            ${item.vegetariano ? `<span class="selo selo-vegetariano">Vegetariano</span>` : ''}
                            ${!item.disponivel ? `<span class="selo selo-indisponivel">Indisponível</span>` : ''}
                        </div>

                        <button class="cartao-botao" type="button" onclick="openDetails(${item.id})">Ver detalhes</button>
                    </div>`;
        document.getElementById("cartoes").appendChild(card);
    }

    document.getElementById("contador").textContent = `Mostrando ${document.querySelectorAll(".cartao:not([hidden])").length} de ${ITENS.length} itens`;
}

function openDetails(itemId) {
    const item = ITENS.find(i => i.id === itemId);
    if (!item) return;

    document.getElementById("imagemItem").src = `${item.imageUrl}`;
    document.getElementById("imagemItem").alt = `Foto de ${item.item}`;
    document.getElementById("nomeItem").textContent = item.item;
    document.getElementById("categoriaItem").textContent = item.categoria;
    document.getElementById("precoItem").textContent = `${item.preco.toFixed(2)}`;
    document.getElementById("caloriasItem").textContent = `${item.calorias}`;
    document.getElementById("descricaoItem").textContent = item.descricao;
    document.getElementById("vegetarianoItem").textContent = item.vegetariano ? "Sim" : "Não";
    document.getElementById("disponivelItem").textContent = item.disponivel ? "Disponível" : "Indisponível";

    document.getElementById("detalhes").hidden = false;
}

function closeDetails() {
    document.getElementById("detalhes").hidden = true;
}

loadItems();