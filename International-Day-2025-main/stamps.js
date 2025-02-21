//1.- put the element to change into a variable
//2.- element.style.attribute = 'new value';

//STAMPS
//Create empty stamp array the first time you open the app
var stamps;
        if(!localStorage) {
            localStorage.setItem('stamps', '[]');
        } else {
            stamps = JSON.parse(localStorage.getItem('stamps')) || [];
        }
    console.log(stamps);

//Stamp asset URLs
// var stampImages = {
//     Algeria: 'assets/stamps/Algeria.png',
//     Australia: 'assets/stamps/Australia.png',
//     Bangladesh: 'assets/stamps/Bangladesh.png',
//     Brazil: 'assets/stamps/Brazil.png',
//     Canada: 'assets/stamps/Canada.png',
//     Croatia: 'assets/stamps/Croatia.png',
//     CyprusAndGreece: 'assets/stamps/CyprusGreece.png',
//     Denmark: 'assets/stamps/Denmark.png',
//     Egypt: 'assets/stamps/Egypt.png',
//     Finland: 'assets/stamps/Finland.png',
//     Germany: 'assets/stamps/Germany.png',
//     HongKong: 'assets/stamps/HongKong.png',
//     India: 'assets/stamps/India.png',
//     Indonesia: 'assets/stamps/Indonesia.png',
//     Italy: 'assets/stamps/Italy.png',
//     Jamaica: 'assets/stamps/Jamaica.png',
//     Japan: 'assets/stamps/Japan.png',
//     Jordan: 'assets/stamps/Jordan.png',
//     Maldives: 'assets/stamps/Maldives.png',
//     Mexico: 'assets/stamps/Mexico.png',
//     Morocco: 'assets/stamps/Morocco.png',
//     Netherlands: 'assets/stamps/Netherlands.png',
//     NewZealand: 'assets/stamps/NewZealand.png',
//     Pakistan: 'assets/stamps/Pakistan.png',
//     Palestine: 'assets/stamps/Palestine.png',
//     Panama: 'assets/stamps/Panama.png',
//     Philippines: 'assets/stamps/Philippines.png',
//     Poland: 'assets/stamps/Poland.png',
//     Portugal: 'assets/stamps/Portugal.png',
//     SaudiArabia: 'assets/stamps/SaudiArabia.png',
//     Scotland: 'assets/stamps/Scotland.png',
//     Serbia: 'assets/stamps/Serbia.png',
//     Singapore: 'assets/stamps/Singapore.png',
//     SlovakRepublic: 'assets/stamps/SlovakRepublic.png',
//     SouthAfrica: 'assets/stamps/SouthAfrica.png',
//     SouthKorea: 'assets/stamps/SouthKorea.png',
//     Spain: 'assets/stamps/Spain.png',
//     Switzerland: 'assets/stamps/Switzerland.png',
//     Thailand: 'assets/stamps/Thailand.png',
//     TrinidadAndTobago: 'assets/stamps/TrinidadAndTobago.png',
//     Tunisia: 'assets/stamps/Tunisia.png',
//     Turkiye: 'assets/stamps/Turkiye.png',
//     UAE: 'assets/stamps/UAE.png',
//     USA: 'assets/stamps/USA/png',
//     Venezuela: 'assets/stamps/Venezuela.png',
//     Wales: 'assets/stamps/Wales.png',
//     Yemen: 'assets/stamps/Yemen.png',
// };

for(s in stamps) {
    var img = document.createElement("img");
    img.className = "stamp";
    var txt = document.createElement("h3");
    txt.className = "country";

    img.src = "assets/stamps/" + stamps[s] + ".png";
    console.log(img.src);
    img.alt = stamps[s] + " Stamp";

    var newStr = stamps[s].split("-").join(" ");
    txt.innerHTML = newStr;

    document.body.appendChild(img);
    document.body.appendChild(txt);
}