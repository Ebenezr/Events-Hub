
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

  


const addToEvents = (event) => {
    const addButton = event.target;
    const cardItem = addButton.parentElement.parentElement;
    const title = cardItem.getElementsByClassName("eventTitle")[0].textContent;
    const price = cardItem.getElementsByClassName("price")[0].textContent;
    const venue = cardItem.getElementsByClassName("venue")[0].textContent;
    const imageSrc = cardItem.getElementsByClassName("eventImg")[0].src;
    localStorage.setItem("TITLE", title)
    localStorage.setItem("PRICE", price)
    localStorage.setItem("VENUE", venue)
    localStorage.setItem("IMAGESRC", imageSrc)
    window.location.href = "./assets/pages/event.html"
}



const addToSingleEventButtons = document.getElementsByClassName("addButton");
for(let i = 0; i < addToSingleEventButtons.length; i++){
    const addButton = addToSingleEventButtons[i];
    addButton.addEventListener("click", addToEvents);
}

    
    