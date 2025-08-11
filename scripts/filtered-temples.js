const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu")

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show")
    hambutton.classList.toggle("show")
    document.querySelector(".temple-album").classList.toggle("hide")
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = "Last Modification: " + document.lastModified;


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },  
    {   
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },  
    {   
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },  
    {   
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },  
    {   
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },  
    {   
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },  
    {   
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Columbus Ohio",
        location: "Columbus, Ohio",
        dedicated: "1999, September, 4",
        area: 11745,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbus-ohio/400x250/columbus-temple-lds-896997-wallpaper.jpg"
    },
    {   
        templeName: "Apia Samoa",
        location: "Pesega, Apia Samoa",
        dedicated: "1983, August, 5",
        area: 18691,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
    }
];

// Initially load all temples
createTempleCard(temples);

// Event listeners for navigation items
document.getElementById('home').addEventListener('click', () => {
    changeHeading("Home");
    createTempleCard(temples); // Display all temples
});

document.getElementById('old').addEventListener('click', () => {
    changeHeading("Old")
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
    });
    createTempleCard(oldTemples); // Display temples built before 1900
});

document.getElementById('new').addEventListener('click', () => {
    changeHeading("New")
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
    });
    createTempleCard(newTemples); // Display temples built after 2000
});

document.getElementById('large').addEventListener('click', () => {
    changeHeading("Large")
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples); // Display temples larger than 90,000 sq ft
});

document.getElementById('small').addEventListener('click', () => {
    changeHeading("Small")
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples); // Display temples smaller than 10,000 sq ft
});


// Function definations
function changeHeading(currentHead) {
    document.querySelector("h2").textContent = currentHead;
}

function createTempleCard(filteredTemples) {
    const templesContainer = document.getElementById("temples-container");
    templesContainer.innerHTML = "";

    filteredTemples.forEach(temple => {
        // Create card container
        const templeCard = document.createElement('section');
        templeCard.classList.add('temple-card');

        // Create temple name
        const templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;

        // Create temple location
        const location = document.createElement('p');
        location.innerHTML = `<span class="key">LOCATION</span>: ${temple.location}`;

        // Create temple dedicated date
        const dedicated = document.createElement('p');
        dedicated.innerHTML = `<span class="key">DEDICATED</span>: ${temple.dedicated}`;

        // Create temple area
        const area = document.createElement('p');
        area.innerHTML = `<span class="key">SIZE</span>: ${temple.area} sq ft`;

        // Create temple image with lazy loading
        const templeImage = document.createElement('img');
        templeImage.setAttribute('src', temple.imageUrl);
        templeImage.setAttribute('alt', `Image of ${temple.templeName}`);
        templeImage.setAttribute('loading', 'lazy');

        // Append elements to the card
        templeCard.appendChild(templeName);
        templeCard.appendChild(location);
        templeCard.appendChild(dedicated);
        templeCard.appendChild(area);
        templeCard.appendChild(templeImage);

        // Append card to the main container
        templesContainer.appendChild(templeCard);
    });
}