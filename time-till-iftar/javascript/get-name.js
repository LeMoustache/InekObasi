function translateName(){
    lang = document.querySelector('input[name="lang"]:checked').value; // get translated name

    $.getJSON("https://lemustache.net/time-till-iftar/database/names-sa.json",function(data){ // get arabic name
        dataInd = Math.floor(Math.random() * data.length)

        document.getElementById("nameTitleArb").innerHTML = data[dataInd].name
    })

    $.getJSON("https://lemustache.net/time-till-iftar/database/names-"+lang+".json",function(data){
        document.getElementById("nameTitle").innerHTML = data[dataInd].index+" "+data[dataInd].name
        document.getElementById("nameDef").innerHTML = data[dataInd].text
    })
}

translateName()




