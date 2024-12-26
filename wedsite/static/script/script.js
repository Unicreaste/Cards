INPUT = document.getElementById("vvod")
RESULT = document.getElementById("res")
BUTTON = document.getElementById("butt")
SELECTOR = document.getElementById("selector")

const az_morz = {
    'a': ".- ",
    'b': "-... ",
    'c': "-.-. ",
    'd': "-.. ",
    "e": ". ",
    "f": "..-. ",
    "g": "--. ",
    "h": ".... ",
    "i": ".. ",
    "j": ".--- ",
    "k": "-.- ",
    "l": ".-.. ",
    "m": "-- ",
    "n": "-. ",
    "o": "--- ",
    "p": ".--. ",
    "q": "--.- ",
    "r": ".-. ",
    "s": "... ",
    "t": "- ",
    "u": "..- ",
    "v": "...- ",
    "w": ".-- ",
    "x": "-..- ",
    "y": "-.-- ",
    "z": "--.. "
}

BUTTON.onclick = function(){
    res = ""
    if (SELECTOR.value == "eng"){
            dff = (INPUT.value).split("")
        for (var i = 0; i < dff.length; i++){
        for (const key of Object.keys(az_morz)) {
            if (dff[i] == key){
                res += az_morz[key]
            }
        }
    }
    }else if (SELECTOR.value == "morze"){
        dff = (INPUT.value).split(" ")
        for (var i = 0; i < dff.length; i++){
        for (const key of Object.keys(az_morz)) {
            if (dff[i] + " " == az_morz[key]){
                res += key
            }
        }
    }
    }
    RESULT.innerText = res
}