var removeEvent = document.getElementsByClassName('remove')

for (i = 0; i < removeEvent.length; i++) {
    var button = removeEvent[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
    
    }) 

    // var quantityInputs = getElementsByClassName('quantity')
    // for (i = 0; i < quantityInputs.length; i++)

}
    function updateTotal() {
        var cartItemContainer = document.getElementsByClassName('container')[0]
       var cartRows = cartItemContainer.getElementsByClassName('edmfest')
       var eventtotal = 0
       var total = 0
       for (var i = 0; i < cartRows.length; i++) {
           var catRow = cartRows[i]
           var priceElement = catRow.getElementsByClassName('price')[1]
           var quantityElement = catRow.getElementsByClassName('quantity')[0]
           console.log(priceElement, quantityElement)
           var price = parseFloat(priceElement.innerText.replace('Ksh', ''))
           var itemCount = quantityElement.value
           total = total + (itemCount * price)
           eventtotal = (itemCount * price)

           
       }
       document.getElementsByClassName('subtototalprice')[0].innerText = "Ksh" + total
       document.getElementsByClassName('cart-total-price')[0].innerText = "Ksh" + total

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
const quantityInput = document.getElementsByClassName("quantity");
for(let i =0; i < quantityInput.length; i++){
    const input = quantityInput[i];
    input.addEventListener("change", onQuantityChange)
}