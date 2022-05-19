// UPDATE THE CART TOTAL

const cartButtons = document.getElementsByClassName("cartTotal");
for(let i =0; i < cartButtons.length; i++){
    const cartButton = cartButtons[i];
    cartButton.addEventListener("click", function(event){
        const buttonSelected = event.target;
        updateTotal()
        
    })
}

const updateTotal = () =>{
    const cartItems = document.getElementsByClassName("cartItem")[0];
    const cartRows = cartItems.getElementsByClassName("edmfest");
    const total = 0;
    for(let i =0; i < cartRows.length; i++){
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName("cartPrice")[0];
        const quantityElement =cartRow.getElementsByClassName("cartQuantity")[0];
        const price =parseFloat(priceElement.textContent.replace("Ksh", ""));
        const quantity =  quantityElement.value;
       total = total + (price * quantity)
    }
    document.getElementsByClassName("total")[0].textContent = "Ksh" + total
}


// QUANTITY CHANGE


const onQuantityChange = (event) =>{
    const input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    else{
        updateTotal();
    }
}
const quantityInput = document.getElementsByClassName("cartQuantity");
for(let i =0; i < quantityInput.length; i++){
    const input = quantityInput[i];
    input.addEventListener("change", onQuantityChange)
}