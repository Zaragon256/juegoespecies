function displayAllCards(){
    var bingocard = document.querySelector('#cardList');
    species.forEach(element => {
        var card = document.createElement("div");
        card.classList.add("simplecard");

        var divcardtitle = document.createElement("div");
        divcardtitle.classList.add("card-title");
        var cardtitle = document.createTextNode(element.cardname);
        divcardtitle.appendChild(cardtitle);

        var divimage = document.createElement("div");
        divimage.classList.add("card-image");
        divimage.style.backgroundImage = "url('../resources/img/species/" + element.image + "')";

        var divcardtext = document.createElement("div");
        divcardtext.classList.add("card-text");
        var cardtext = document.createTextNode(element.description);
        divcardtext.appendChild(cardtext);

        card.appendChild(divcardtitle);
        card.appendChild(divimage);
        card.appendChild(divcardtext);
        bingocard.appendChild(card);
    });
}

