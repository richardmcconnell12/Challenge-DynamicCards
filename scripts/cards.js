const textInput = document.querySelector("#text_input");
const createCardButton = document.querySelector("#btn--create");
const container = document.querySelector("#container");
const deleteButtonCollection = document.getElementsByClassName("delete-btn");

let cardId = 2;



// Function that create a new card using innerHTML
const addCard = () => {
    cardId++

    let userInput = textInput.value;

    const cardDiv = document.createElement("div");
    cardDiv.classList.add(`card--${cardId}`);

    cardDiv.innerHTML =
        `<article class="card" id="card--${cardId}">
    <div>${userInput}</div>
    <div>
        <button id="delete--${cardId}" class="delete-btn">Delete This Card</button>
    </div>
    </article>`

    return cardDiv;
};

// eventListener that targets the create card button and appends to DOM
createCardButton.addEventListener("click", () => {
    const newCard = addCard();
    container.appendChild(newCard);
    listenerLoop();
});

// eventListener that targets the delete card button and removes target
let listenerLoop = () => {
    for (let i = 0; i < deleteButtonCollection.length; i++) {
        let deleteCard = deleteButtonCollection[i].id.slice(8);
        deleteButtonCollection[i].addEventListener("click", () => {
            console.log("click")
            document.getElementById(`card--${deleteCard}`).remove();
        })
    }
}

listenerLoop();