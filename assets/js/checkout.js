var removeEvent = document.getElementsByClassName('remove')
console.log(removeEvent)
for (i = 0; i < removeEvent.length; i++) {
    var button = removeEvent[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateTotal()
    }) 

    var quantityInputs = getElementsByClassName('quantity')
    for (i = 0; i < quantityInputs.length; i++)

}
    function updateTotal() {
        var cartItemContainer = document.getElementsByClassName('container')[0]
       var cartRows = cartItemContainer.getElementsByClassName('festdetails')
       var eventtotal = 0
       var total = 0
       for (i = 0; i < cartRows.length; i++) {
           var catRow = cartRows[i]
           var priceElement = catRow.getElementsByClassName('price')[1]
           var quantityElement = catRow.getElementsByClassName('quantity')[0]
           console.log(priceElement, quantityElement)
           var price = parseFloat(priceElement.innerText.replace('Ksh.', ''))
           var itemCount = quantityElement.value
           total = total + (itemCount * price)
           eventtotal = (itemCount * price)

           
       }
       document.getElementsByClassName('subtototalprice')[0].innerText = "Ksh" + eventtotal
       document.getElementsByClassName('cart-total-price')[0].innerText = "Ksh" + total

    }
