var valtoSzam = 1000;

function szamol(){
    let kapacitas = parseInt(document.getElementById("kap").value);
    let kapacitasAtszamolt = document.getElementById("kb").selected ? kapacitas : document.getElementById("mb").selected ? kapacitas * valtoSzam : document.getElementById("gb").selected ? kapacitas * Math.pow(valtoSzam, 2) : kapacitas * Math.pow(valtoSzam, 3);
    let sebesseg = parseInt(document.getElementById("seb").value);
    let sebessegAtszamolt = document.getElementById("kbps").selected ? sebesseg : document.getElementById("mbps").selected ? sebesseg * valtoSzam : document.getElementById("gbps").selected ? sebesseg * Math.pow(valtoSzam, 2) : sebesseg * Math.pow(valtoSzam, 3);
    let eredmeny = kapacitasAtszamolt / sebessegAtszamolt;
    document.getElementById("eredmeny").innerHTML = document.getElementById("kap").value == "" ? "Nincs adat megadva!" : kapacitas > 9999999999 ? "Túl nagy kapacitás!" : eredmeny < 0.5 ? "Kevesebb, mint egy másodperc!" : idotValt(eredmeny);
}

function idotValt(bemeno){
    let bejottAdat = bemeno
    let ora = Math.floor(bejottAdat / 3600) 
    bejottAdat = bejottAdat - ora * 3600
    let perc = Math.floor(bejottAdat / 60)
    bejottAdat = bejottAdat - perc * 60
    let masodperc = Math.round(bejottAdat, 2);

    return `${ora} óra ${perc} perc ${masodperc} másodperc`;
}

function rangeJelzo(){
    document.getElementById("sebJelzo").innerHTML = document.getElementById("seb").value
}

function valtoszamValto(){
    document.getElementById("valtoszamJelzo").innerHTML = document.getElementById("valtoszam").value;
    valtoSzam = document.getElementById("valtoszam").value
}