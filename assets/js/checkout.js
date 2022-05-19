
window.addEventListener("load", () =>{
    const title = localStorage.getItem("TITLE")
    const price = localStorage.getItem("PRICE")
    const imageSrc = localStorage.getItem("IMAGESRC")
   
    addItemsToEvent(title, price,imageSrc)
   
    function updateTotal() {
        var cartItemContainer = document.getElementsByClassName('container')[0]
       var cartRows = cartItemContainer.querySelectorAll('.edmfest')
       var eventtotal = 0
       var total = 0
       for (var i = 0; i < cartRows.length; i++) {
           var catRow = cartRows[i]
           var priceElement = catRow.querySelectorAll('.price')[1]
           var quantityElement = catRow.querySelectorAll('.quantity')[0]
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
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

function paymentpop(){
    document.getElementById('payment-details').style.display="block";
   
} 
});

const addItemsToEvent = (title, price, imageSrc) => {
    const eventHolder = document.createElement("div");
    
    const eventContainer = document.getElementById("displayCart")
    const eventHolderContents = `
        <div class="edmfest">
        <div class="edmfestpic">
            <h2>${title}</h2>
            <img src="${imageSrc}" alt="edmfest.png">
        </div>
        <div class="festdetails">
            <div class="price">
                <p>Price</p>
                <p class="price">${price}</p>
            </div>
            <hr>
            <div class="tickets">
                <p>Tickets</p>
                <input type="number" class="quantity" value="1">
            </div>
            <hr>
            <div class="subtotal">
                <p class="subtototalprice">Ksh2500</p>
                <button class="remove">remove</button>
            </div>
        </div>
    </div>
    `
   
    eventHolder.innerHTML = eventHolderContents;
    eventContainer.append(eventHolder)

}


































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
