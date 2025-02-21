var obtained = false;
var stamps = JSON.parse(localStorage.getItem('stamps')) || [];
console.log(stamps);

//extracts the country name from the url at index 1
//important!! the url needs to contain the country name separated by 000 on both sides
var path = window.location.pathname;
var pathsplit = path.split('000');

var country = pathsplit[1];

for(var i = 0; i < stamps.length; i++) {
    if (stamps[i] == country) {
        console.log("oh noo");
        obtained = true;
    }
}

if(!obtained) {
    console.log(stamps);
    stamps.push(country);
    console.log(stamps);
    localStorage.setItem('stamps', JSON.stringify(stamps));
    console.log(localStorage.getItem('stamps'));
}


//get the country string with spaces
var countryText = country[0]; //will contain the properly formatted country name
var num = 0; //the last character that was cut from

//Get country name from URL
for(var i = 1; i < country.length; i++) {
    if(country[i] == country[i].toUpperCase()) {
        countryText = countryText.concat(" ");   
    }
    countryText = countryText.concat(country[i]);
}

var image = document.createElement('img');
image.src = "../assets/stamps/" + countryText + ".png";
console.log(image.src);
image.className = "stampAcquired";

var title = document.createElement('h1');
title.className = "title";
title.innerHTML = "Congratulations!!!";

var text = document.createElement('p');
text.innerHTML = "Congratulations! You got the " + countryText + " stamp!!!"; 
text.className = "stampAcquiredtxt";

var backButton = document.createElement('a');
backButton.className = 'backB';
backButton.innerHTML = 'Back to Passport';
backButton.href = "../stamps.html";

document.body.appendChild(title);
document.body.appendChild(image);
document.body.appendChild(text);
document.body.appendChild(backButton);