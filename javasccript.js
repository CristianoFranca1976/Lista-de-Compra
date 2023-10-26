// Seu código JavaScript

document.addEventListener("DOMContentLoaded", function () {
  const addItemButton = document.querySelector("button");

  const items = []; 

  addItemButton.addEventListener("click", function () {
    const itemInput = document.querySelector("input[type='text']");
    const quantityInput = document.querySelector(".field input[type='text']");
    const categorySelect = document.querySelector("select");

    const itemName = itemInput.value;
    const itemQuantity = quantityInput.value;
    const itemCategory = categorySelect.value;

    if (itemName && itemQuantity && itemCategory !== "Selecione") {
      const newItem = {
        name: itemName,
        quantity: itemQuantity,
        category: itemCategory,
      };

      items.push(newItem);

      displayItemList();

      itemInput.value = "";
      quantityInput.value = "";
      categorySelect.value = "Selecione";
    }
  });

  function displayItemList() {
    const listContainer = document.getElementById("list");
    listContainer.innerHTML = "";

    items.forEach((item, index) => {
      const listItem = document.createElement("div");
      listItem.classList.add("list-item");

      listItem.style.display = "flex";
      listItem.style.flexDirection = "row";
      listItem.style.marginBottom = "5px";

      listItem.innerHTML = `
          <p style="margin-right: 10px;"><strong>Item:</strong> ${item.name}</p>
          <p style="margin-right: 10px;"><strong>Quantidade:</strong> ${item.quantity}</p>
          <p><strong>Categoria:</strong> ${item.category}</p>
        `;

      listContainer.appendChild(listItem);
    });
  }
});
