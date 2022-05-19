
//     fetch("data.json")
//        .then((response) => response.json())
//        .then((data) => appendData(data))
//        .catch((err) => console.log(err))



// function appendData(data) {
//     const eventContainer = document.getElementsByClassName("eventsWrapper");
//     for(let i = 0; i < data.length; i++){
//         const eventCard = document.createElement("div");
//         eventCard.classList.add("eventCard");
//         const eventCardContent = `
//                 <div class="imgContainer">
//                 <img
//                 class="eventImg"
//                 src="./assets/images/grid2.jpg"
//                 alt="gridImg"
//                 />
//             </div>
//             <div class="infoContainer">
//                 <h4 class="eventTitle">Fest Event</h4>
//                 <p class="venue">Venue: Signature Club</p>
//                 <p class="price">Ksh2000</p>
//                 <button class="addButton">Buy Ticket</button>
//             </div>
//             <div class="dateContainer">
//                 <h3>May</h3>
//                 <h3 class="price">
//                 21
//                 <span>st</span>
//                 </h3>
//             </div>
//         `
//     }
    
  
// }

  

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
    eventConfirm(title, price,venue)
}

const addItemsToEvent = (title, price, venue, imageSrc) => {
    const eventHolder = document.createElement("div");
    eventHolder.classList.add("event_holder")
    const eventContainer = document.getElementById("event_container");
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
//    alert(eventHolderContents)
    // eventHolder.innerHTML = eventHolderContents;
    // eventContainer.append(eventHolder)
}

const addToSingleEventButtons = document.getElementsByClassName("addButton");
for(let i = 0; i < addToSingleEventButtons.length; i++){
    const addButton = addToSingleEventButtons[i];
    addButton.addEventListener("click", addToEvents);
}


const eventConfirm = (title, price,venue) =>{
    confirm(
        "Title: " + title + "\n" +
        "Venue: " + venue + "\n" +
        "Price: " + price + "\n"
         

    )
}