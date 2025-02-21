//all the countries in alphabetical order
var allCountries = [
    'Parent Team',
    'Algeria',
    'Australia',
    'Brazil',
    'Cameroon',
    'Canada',
    'Chile',
    'China',
    'Colombia',
    'Croatia',
    'Cyprus',
    'Denmark',
    'Egypt',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'India',
    'Indonesia',
    'Ireland',
    'Italy',
    'Japan',
    'Jordan',
    'Lebanon',
    'Malaysia',
    'Maldives',
    'Mexico',
    'Morocco',
    'NewZealand',
    'Norway',
    'Pakistan',
    'Palestine',
    'Philippines',
    'Poland',
    'Portugal',
    'RepublicOfFiji',
    'Romania',
    'Russia',
    'Samoa',
    'Scotland',
    'Serbia',
    'SierraLeone',
    'Singapore',
    'SlovakRepublic',
    'SouthAfrica',
    'SouthKorea',
    'Spain',
    'Sweden',
    'Switzerland',
    'Thailand',
    'Tonga',
    'Tunisia',
    'Türkiye',
    'UAE',
    'Ukraine',
    'USA',
    'Venezuela',
    'Yemen'
];

var stamps;
    if(!localStorage) {
        localStorage.setItem('stamps', '[]');
    } else {
        stamps = JSON.parse(localStorage.getItem('stamps')) || [];
    }

function checkObtained(txt) {
    for (s in stamps) {
        if(txt == stamps[s]) {
            return true;
        }
    }

    return false;
}

var countryList = document.createElement('ul');

for(c in allCountries) {
    var country = document.createElement('li');
    country.className = 'country-listing';

    if(checkObtained(allCountries[c])) {
        country.style.textDecoration = 'line-through';
    }

    country.innerHTML = allCountries[c];
    // console.log(country);

    countryList.appendChild(country);
}

document.body.appendChild(countryList);