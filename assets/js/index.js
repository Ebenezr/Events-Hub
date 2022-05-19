
//     fetch("data.json")
//        .then((response) => response.json())
//        .then((data) => appendData(data))
//        .catch((err) => console.log(err))



// function appendData(data) {
//     const eventCard = document.querySelector(".eventCard");
//     data.forEach(item => {
//     const title = document.querySelector("h4");
//     title.innerHTML = item.title
//     eventCard.appendChild(title)
//     });
// }

<<<<<<< HEAD
  

// const onSelect = () =>{
//    const cards = document.querySelector(".eventCard");

//    cards.forEach(card => {
//     card.addEventListener("click", function(){
//         console.log("yes")
//     })
//    });
// }
// onSelect();

// ADD AN EVENT TO A SINGLE PAGE WHEN IT IS SELECTED


const addToEvents = (event) => {
    const addButton = event.target;
    const cardItem = addButton.parentElement.parentElement;
    const title = cardItem.getElementsByClassName("eventTitle")[0].textContent;
    const price = cardItem.getElementsByClassName("price")[0].textContent;
    const venue = cardItem.getElementsByClassName("venue")[0].textContent;
    const imageSrc = cardItem.getElementsByClassName("eventImg")[0].src;
    addItemsToEvent(title, price,venue,imageSrc);
}

const addItemsToEvent = (title, price, venue, imageSrc) => {
    const eventHolder = document.createElement("div");
    eventHolder.classList.add("event_holder")
    const eventContainer = document.getElementsByClassName("event_container")[0];
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
                <button class="checkout" onclick="promptCheckout()">ADD TO CART</button>
            </div>
        </div>
    `
    console.log(eventHolderContents)
    // eventHolder.innerHTML = eventHolderContents;
    // eventContainer.append(eventHolder)
}

const addToSingleEventButtons = document.getElementsByClassName("eventCardButton");
for(let i = 0; i < addToSingleEventButtons.length; i++){
    const addButton = addToSingleEventButtons[i];
    addButton.addEventListener("click", addToEvents);
}

=======


const onSelect = () =>{
   const cards = document.querySelector(".eventCard");

   cards.forEach(card => {
    card.addEventListener("click", function(){
        console.log("yes")
    })
   });
}
onSelect();
>>>>>>> 9c61b8ed685abe2a69909f83ca2edcbf9927c079
