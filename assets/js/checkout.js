var removeEvent = document.getElementsByClassName('remove')
console.log(removeEvent)
for (i = 0; i < removeEvent.length; i++) {
    var button = removeEvent[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()

    })
    function updateTotal
}