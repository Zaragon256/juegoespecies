
//mode
function resetmenu() {
    document.querySelector('#gamemaster').style.display = "none";
    document.querySelector('#player').style.display = "none";
    document.querySelector('#controls').style.display = "block";
}

function setplayer() {
    document.querySelector('#player').style.display = "block";
    document.querySelector('#controls').style.display = "none";

    //create randon bingo card
    createbingocard();
}

function checkCard(node,iucncategory){
    
    switch (iucncategory) {
        case "EX":
            node.classList.toggle("checked-ex");
            break;
        case "EW":
            node.classList.toggle("checked-ew");
            break;
        case "CR":
            node.classList.toggle("checked-cr");
            break;
        case "EN":
            node.classList.toggle("checked-en");
            break;
        case "VU":
            node.classList.toggle("checked-vu");
            break;
        case "NT":
            node.classList.toggle("checked-nt");
            break;
        case "LC":
            node.classList.toggle("checked-lc");
            break;
        case "DD":
            node.classList.toggle("checked-dd");
            break;
        default:
            node.classList.toggle("checked");
            break;
    }
}

function createbingocard() {
    var bingocard = document.querySelector('#bingocard');
    bingocard.innerHTML = "";
    var speciesaux = [...species];
    var selectedspecies = [];
    let cont = 0;
    while (selectedspecies.length < 24) {
        selectedspecies.push(speciesaux.splice(getRandomInt(speciesaux.length),1)[0]);
        cont++;
    }
    console.log(selectedspecies);
    //var selectedspecies = speciesaux
    cont = 0;
    for (let i = 0; i < 5; i++) {
        //const elemento = array[i];
        //create rows
        var divrow = document.createElement("div");
        divrow.classList.add("cardrow");
        //var divrowtext = document.createTextNode("row-"+i);
        //divrow.appendChild(divrowtext);
        //add row to base div
        for (let j = 0; j < 5; j++) {
            //const element = array[j];
            var divcol = document.createElement("div");
            divcol.classList.add("cardcol");
            var divname = document.createElement("div");
            if (i!=2 || j!=2) {
                divcol.classList.add("clickable");
                divname.classList.add("cardname");
                var divcoltext = document.createTextNode(selectedspecies[cont].cardname);
                divname.appendChild(divcoltext);
                //divcol.onclick = function () { this.classList.toggle("checked"); }
                divcol.setAttribute("onclick", "checkCard(this,'" + selectedspecies[cont].iucncategory +"');");
                divcol.setAttribute("id", "num-" + cont);
                cont++;
            }else{
                divname.classList.add("bingo");
                var divcoltext = document.createTextNode("BINGO")
                divname.appendChild(divcoltext);
            }
            
            divcol.appendChild(divname);
            //add row to base div
            divrow.appendChild(divcol);
            
        }
        bingocard.appendChild(divrow);
    }    
}

function setgamemaster() {
    document.querySelector('#gamemaster').style.display = "block";
    document.querySelector('#controls').style.display = "none";
    createBingoCage();
}

var speciescage;
var speciesTable;

function createBingoCage(){
    
    speciescage = [...species];
    speciesTable = [];

    renderBingoCage();
    
}

function renderBingoCage(){
    var bingocage = document.querySelector('#bingocage');
    bingocage.innerHTML = "";
    var bingotable = document.querySelector('#bingotable');
    bingotable.innerHTML = "";

    speciescage.forEach(el => {
        console.log("elem: " + el);
        var divball = document.createElement("div");
        divball.classList.add("bingoball");
        var divballtextbox = document.createElement("div");
        divballtextbox.classList.add("bingoballtext");
        var divballtext = document.createTextNode(el.cardname);
        divballtextbox.appendChild(divballtext);
        divball.appendChild(divballtextbox);
        bingocage.appendChild(divball);
    });

    speciesTable.forEach(el => {
        console.log("elem: " + el);
        var divball = document.createElement("div");
        divball.classList.add("bingoball");
        var divballtextbox = document.createElement("div");
        divballtextbox.classList.add("bingoballtext");
        var divballtext = document.createTextNode(el.cardname);
        divballtextbox.appendChild(divballtext);
        divball.appendChild(divballtextbox);
        bingotable.appendChild(divball);
    });

}

function takeball() {
    if (speciescage.length > 0) {
        let objaux = speciescage.splice(getRandomInt(speciescage.length),1);
        console.log("objaux: " + objaux);
        speciesTable.push(objaux[0]);
    }else{
        alert("Ya no quedan números!");
    }
    renderBingoCage();
}

//grid



// species.forEach(a => {
//     console.log(a.cardname);
// });