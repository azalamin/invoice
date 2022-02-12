function addFunc(inputId) {
    return document.getElementById(inputId);
}

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

const itemName = addFunc('item-name-input');
const itemPrice = addFunc('item-price-input');
const itemQuantity = addFunc('item-quantity-input');
const subTotal = addFunc('sub-total');
const tax = addFunc('tax');
const grandTotal = addFunc('grand-total');
const grandTotal2 = addFunc('grand-total-2');

document.getElementById('detail-submit-btn').addEventListener('click', function() {
    const buyerDetailsInput = addFunc('buyer-details-input');
    const buyerInfo = addFunc('buyer-info');
    if (
        buyerDetailsInput.value == "") {
        alert("Input cannot be empty or number cannot be negative")
    }
    buyerInfo.innerText = buyerDetailsInput.value;

    // Clear input field after click submit button
    buyerDetailsInput.value = "";
});

document.getElementById('add-details-btn').addEventListener('click', function() {
    if (
        itemName.value == "" ||
        itemPrice.value < 0 ||
        itemQuantity.value < 0 ||
        itemPrice.value == "" ||
        itemQuantity.value == ""
    ) {
        alert("Input cannot be empty or number cannot be negative")
    }
    const tbody = addFunc('info-table');
    const totalQuantityPrice = multiply(itemPrice.value, itemQuantity.value);
    const tr = document.createElement('tr');
    tr.innerHTML = `<th >${itemName.value}</th>
    <td>${itemPrice.value}</td>
    <td>${itemQuantity.value}</td>
    <td>${totalQuantityPrice}</td>`
    tbody.appendChild(tr)
    subTotal.innerText = add(subTotal.innerText, totalQuantityPrice);
    tax.innerText = multiply(subTotal.innerText, .2).toFixed(2);
    grandTotal.innerText = add(tax.innerText, subTotal.innerText);
    grandTotal2.innerText = grandTotal.innerText;

    // Clear input field after click add button
    itemName.value = "";
    itemPrice.value = "";
    itemQuantity.value = "";
})