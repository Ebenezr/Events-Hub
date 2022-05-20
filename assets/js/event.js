window.addEventListener("load", () =>{
    const title = localStorage.getItem("TITLE")
    const price = localStorage.getItem("PRICE")
    const venue = localStorage.getItem("VENUE")
    const imageSrc = localStorage.getItem("IMAGESRC")
   
    addItemsToEvent(title, price, venue, imageSrc)
   
    const addToCartButton = document.querySelector(".checkout");
    addToCartButton.addEventListener("click", function(){
    window.location.href = "./signup.html"
})
    
});

const addItemsToEvent = (title, price, venue, imageSrc) => {
    const eventHolder = document.createElement("div");
    eventHolder.classList.add("event_holder")
    const eventContainer = document.getElementById("displayContainer")
    const eventHolderContents = `
        <div class="event_holder">
        <div class="event_image">
            <img src="${imageSrc}" alt="">
        </div>
        <div class="event_description">
            <div class="event_info">
                <div class="event_details">
                    <h4>${title}</h4>
                    <p class="venue">${venue}</p>
                    <p class="date">Date: June 6th 2022</p>
                    <p class="price">${price}</p>
                </div>
                <button class="checkout" ><a href="./signup.html">CheckOut</a></button>
            </div>
        </div>
    `
   
    eventHolder.innerHTML = eventHolderContents;
    eventContainer.append(eventHolder)

}



