
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



const onSelect = () =>{
   const cards = document.querySelector(".eventCard");

   cards.forEach(card => {
    card.addEventListener("click", function(){
        console.log("yes")
    })
   });
}
onSelect();