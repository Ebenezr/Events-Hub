var removeEvent = document.getElementsByClassName('remove')
console.log(removeEvent)
for (i = 0; i < removeEvent.length; i++) {
    var button = removeEvent[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateTotal()
    })
}
    function updateTotal() {
        var cartItemContainer = document.getElementsByClassName('container')[0]
       var cartRows = cartItemContainer.getElementsByClassName('festdetails')
       for (i = 0; i < cartRows.length; i++) {
           var catRow = cartRows[i]
           var priceElement = catRow.getElementsByClassName('price')[1]
           var quantityElement = catRow.getElementsByClassName('quantity')[0]
           console.log(priceElement, quantityElement)
           var price = parseFloat(priceElement.innerText.replace('Ksh.', ''))
           console.log(price)
       }

    }
