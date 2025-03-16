const BotaoAdicionarCard = document.getElementById("BotaoAdicionar");

BotaoAdicionarCard.addEventListener("click", () => {
  const itemCarro = prompt("Digite o nome da Peça: ");
  const divItens = document.getElementById("ItensDiv");

  if (itemCarro) {
    const cardItem = document.createElement("article");
    cardItem.className =
      "relative bg-[#D9D9D9] bg-opacity-3 flex items-center justify-between rounded-[1rem] w-full h-auto py-[1.5rem] px-4";

    cardItem.innerHTML = `
         <div class="bg-[#777070] bg-opacity-7 w-[2rem] h-[2rem] absolute top-0 right-0 overflow-hidden rounded-[10%] flex items-center justify-center font-bold text-[1.3rem] text-white cursor-pointer">X</div>
         <p class="font-bold text-[1.2rem]">${itemCarro}</p>
         <div class="bg-[#777070] bg-opacity-7 w-[7rem] rounded-[5.97px] h-[2rem] flex items-center justify-center text-white font-[600] mr-[3rem]">Item Avulso</div>
        `;

    // Adiciona o card à div
    divItens.appendChild(cardItem);

    // Remover card ao clicar no "X"
    const botaoRemover = cardItem.querySelector("div");
    botaoRemover.addEventListener("click", () => {
      cardItem.remove();
    });
  }
});
