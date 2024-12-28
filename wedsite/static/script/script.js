INPUT = document.getElementById("vvod")
RESULT = document.getElementById("res")
BUTTON = document.getElementById("butt")
SELECTOR = document.querySelector("#selector")

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


const viger = {
    'a': "1",
    'b': "2",
    'c': "3",
    'd': "4",
    "e": "5",
    "f": "6",
    "g": "7",
    "h": "8",
    "i": "9",
    "j": "10",
    "k": "11",
    "l": "12",
    "m": "13",
    "n": "14",
    "o": "15",
    "p": "16",
    "q": "17",
    "r": "18",
    "s": "19",
    "t": "20",
    "u": "21",
    "v": "22",
    "w": "23",
    "x": "24",
    "y": "25",
    "z": "26",
    " ": " ",
}

const caesar = {
    '1': "a",
    '2': "b",
    '3': "c",
    '4': "d",
    "5": "e",
    "6": "f",
    "7": "g",
    "8": "h",
    "9": "i",
    "10": "j",
    "11": "k",
    "12": "l",
    "13": "m",
    "14": "n",
    "15": "o",
    "16": "p",
    "17": "q",
    "18": "r",
    "19": "s",
    "20": "t",
    "21": "u",
    "22": "v",
    "23": "w",
    "24": "x",
    "25": "y",
    "26": "z",
    " ": " ",
}

const select = document.querySelector("#lang");
const wrapperForAppend = document.querySelector(".wrapper-for-append");

//можно также вместо строки создать любой элемент из js
    const nodeAsStringForAppend = `<div class="alternativePosition col-md-6">
  <label for="hand_input" class="form-label">Введите ключ</label>
  <input name="hand_input" type="number" min="1" max="26" class="form-control" id="hand_input" placeholder="Ключ">
</div>`;

//при изменении срабатывает 'слушатель change', ну а дальше уже смотря какое значение в 'value' делаем то или иное
    select.addEventListener("change", ({ target: { value } }) => {
      const alternatePositionInDom = document.querySelector('.alternativePosition')
      if(value === "сaesar" && !alternatePositionInDom) {
        //кроме insertAdjacentHTML есть и другие варианты
        wrapperForAppend.insertAdjacentHTML('beforeend', nodeAsStringForAppend)
      } else if(alternatePositionInDom) {
        alternatePositionInDom.remove()
      }
    });

function Caesar(){
    res = ""
    key_cr = document.getElementById("hand_input")
    if (SELECTOR.value == "shifr"){
        dff = (INPUT.value.toLowerCase()).split("")
        for (var i = 0; i < dff.length; i++){
        for (const key of Object.keys(viger)) {
            if (dff[i] == key && dff[i] != " "){
                if (((parseInt(viger[key]) + parseInt(key_cr.value)) % 26) == 0){
                    res += "z"
                }else{
                    res += caesar[((parseInt(viger[key]) + parseInt(key_cr.value)) % 26).toString()]
                }
            }else if (dff[i] == " "){
                res += " "
            }
        }
    }
    }else if (SELECTOR.value == "deshifr"){
        dff = (INPUT.value.toLowerCase()).split("")
        for (var i = 0; i < dff.length; i++){
        for (const key of Object.keys(viger)) {
            if (dff[i] == key && dff[i] != " "){
                if (((parseInt(viger[key]) - parseInt(key_cr.value)) % 26) == 0){
                    res += "z"
                }else{
                res += caesar[((parseInt(viger[key]) + 26 - parseInt(key_cr.value)) % 26).toString()]}
            }else if (dff[i] == " "){
                res += " "
            }
        }
    }
    }
    return res
}

function Morzyanka(){
    res = ""
    if (SELECTOR.value == "shifr"){
            dff = (INPUT.value.toLowerCase()).split("")
        for (var i = 0; i < dff.length; i++){
        for (const key of Object.keys(az_morz)) {
            if (dff[i] == key){
                res += az_morz[key]
            }
        }
    }
    }else if (SELECTOR.value == "deshifr"){
        dff = (INPUT.value).split(" ")
        for (var i = 0; i < dff.length; i++){
        for (const key of Object.keys(az_morz)) {
            if (dff[i] + " " == az_morz[key]){
                res += key
            }
        }
    }
    }
    return res
}

function A1Z26(){
    res = ""
    if (SELECTOR.value == "shifr"){
        dff = (INPUT.value.toLowerCase()).split("")
        for (var i = 0; i < dff.length; i++){
        for (const key of Object.keys(viger)) {
            if (dff[i] == key){
                if (dff[i + 1] == " " || dff[i] == " "){
                    res += viger[key]
                }else{
                    res += viger[key] + "-"
                }
            }
        }
    }
    res = res.slice(0, -1)
    }else if (SELECTOR.value == "deshifr"){
        dff = (INPUT.value).replace(/\s+/g, '-*-').split("-")
        for (var i = 0; i < dff.length; i++){
        for (const key of Object.keys(az_morz)) {
            if (dff[i] == viger[key]){
                res += key
            } else if (dff[i] == "*"){
                res += " "
            }
        }
    }
    }
    return res
}



BUTTON.onclick = function(){
    if (document.getElementById("lang").value == "morze"){
        RESULT.innerText = Morzyanka()
    } else if (document.getElementById("lang").value == "numb") {
        RESULT.innerText = A1Z26()
    } else if (document.getElementById("lang").value == "сaesar") {
        RESULT.innerText = Caesar()
    }
}