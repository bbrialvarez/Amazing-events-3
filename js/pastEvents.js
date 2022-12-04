
const data={
    "fechaActual": "2022-01-01",
    "eventos": [
        {
            "image": "../assets/feria de comidas.jpg",
            "name":"Collectivities Party",
            "date":"2021-12-12",
            "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category":"Food Fair",
            "place":"Room A",
            "capacity":45000,
            "assistance":42756,
            "price":5
        },
        {
            "image":"../assets/korean style.jpg",
            "name":"Korean style",
            "date":"2021-08-12",
            "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category":"Food Fair",
            "place":"Room A",
            "capacity":45000,
            "assistance":42756,
            "price":10
        },
        {
            "image":"../assets/salida al museo.jpg",
            "name":"Jurassic Park",
            "date":"2021-11-02",
            "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category":"Museum",
            "place":"Field",
            "capacity":82000,
            "assistance":65892,
            "price":15
        },
        {
            "image":"../assets/museo.jpg",
            "name":"Parisian Museum",
            "date":"2022-11-02",
            "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
            "category":"Museum",
            "place":"Paris",
            "capacity":8200,
            "estimate":8200,
            "price":3500
        },
        {
            "image":"../assets/comicon1.jpg",
            "name":"Comicon",
            "date":"2021-02-12",
            "description":"For comic lovers, all your favourite characters gathered in one place.",
            "category":"Costume Party",
            "place":"Room C",
            "capacity":120000,
            "assistance":110000,
            "price":54
        },
        {
            "image":"../assets/Fiesta de disfraces1.jpg",
            "name":"Halloween Night",
            "date":"2022-02-12",
            "description":"Come with your scariest costume and win incredible prizes.",
            "category":"Costume Party",
            "place":"Room C",
            "capacity":12000,
            "estimate":9000,
            "price":12
        },
        {
            "image":"../assets/metallica.jpg",
            "name":"Metallica in concert",
            "date":"2022-01-22",
            "description":"The only concert of the most emblematic band in the world.",
            "category":"Music Concert",
            "place":"Room A"
            ,"capacity":138000,
            "estimate":138000,
            "price":150
        },
        {
            "image":"../assets/electronic.jpg",
            "name":"Electronic Fest",
            "date":"2021-01-22",
            "description":"The best national and international DJs gathered in one place.",
            "category":"Music Concert",
            "place":"Room A",
            "capacity":138000,
            "assistance":110300,
            "price":250
        },
        {
            "image":"../assets/Maraton3.jpg",
            "name":"10K for life",
            "date":"2021-03-01",
            "description":"Come and exercise, improve your health and lifestyle.",
            "category":"Race",
            "place":"Campo de FutbÃ³l",
            "capacity":30000,
            "assistance":25698,
            "price":3
        },
        {
            "image":"../assets/maraton2.jpg",
            "name":"15K NY",
            "date":"2021-03-01",
            "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            "category":"Race",
            "place":"New York",
            "capacity":3000000,
            "assistance":2569800,
            "price":3
        },
        {
            "image":"../assets/school.jpg",
            "name":"School's book fair",
            "date":"2022-10-15",
            "description":"Bring your unused school book and take the one you need.",
            "category":"Book Exchange",
            "place":"Room D1",
            "capacity":150000,
            "estimate":123286,
            "price":1
        },
        {
            "image":"../assets/kitchen.jpg",
            "name":"Just for your kitchen",
            "date":"2021-11-09",
            "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            "category":"Book Exchange",
            "place":"Room D6",
            "capacity":130000,
            "assistance":90000,
            "price":100
        },
        {
            "image":"../assets/batman.jpg",
            "name":"Batman",
            "date":"2021-3-11",
            "description":"Come see Batman fight crime in Gotham City.",
            "category":"Cinema",
            "place":"Room D1",
            "capacity":11000,
            "assistance":9300,
            "price":225
        },
        {
            "image":"../assets/cine.jpg",
            "name":"Avengers",
            "date":"2022-10-15",
            "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category":"Cinema",
            "place":"Room D1",
            "capacity":9000,
            "estimate":9000,
            "price":250
        }
    ]
}
const $cardsContainer = document.getElementById("cards-container");

function paintDom(dateDom){
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-210">
        <img src="${dateDom.image}" class="card-img-top" alt="">
        <div class="card-body d-flex flex-column align-items-center">
            <div>
                <h5 class="card-title">${dateDom.name}</h5>
                <p class="card-text">${dateDom.description}</p>
                <p class="card-category">${dateDom.category}</p>
            </div>
            <div class="price d-flex justify-content-between align-items-start">
                <p>Price $${dateDom.price}</p>
                <a id="seeMore" href="../pages/details.html"><button class="button">See more</button></a>
            </div>
        </div>
    </div>
    `
    $cardsContainer.appendChild(div);
};

function compareDate(dataAE){
    const dateToCompare = dataAE.fechaActual.split("-");
    const dateActualToCompareTimeStamp = new Date(dateToCompare[0], dateToCompare[1]-1, dateToCompare[2]).getTime();

    dataAE.eventos.forEach((_date) => {
        let dateCompare = _date.date.split("-");
        let dateCompareTimeStamp = new Date(dateCompare[0], dateCompare[1]-1, dateCompare[2]).getTime();
        if(dateActualToCompareTimeStamp > dateCompareTimeStamp){
            paintDom(_date);
        }
    });
}
compareDate(data);

const $categoryInputs = document.getElementById("category__inputs");
let category = data.eventos.map((event) => event.category);
let categorySinDuplicados = [...new Set(category)];

function paintCategories(categoryArray){
    const div = document.createElement("div");
    div.innerHTML = `
    <input type="checkbox" name="category${categoryArray}" id="${categoryArray}" class="categoryCheckbox categoryInput" value="${categoryArray}">
    <label class="category-tittle" for="${categoryArray}">${categoryArray}</label>
    `
    $categoryInputs.appendChild(div);
}
categorySinDuplicados.forEach((category)=>{
    paintCategories(category);
})

const $inputEvents = document.getElementById("inputEvents");
const $cards = document.querySelectorAll(".col");
console.log($cards);


$inputEvents.addEventListener("keyup", (event)=>{
    let containerClassHidden = [];
    $cards.forEach((card)=>{
        card.textContent.toLowerCase().includes(event.target.value.toLowerCase())
        ? card.classList.remove("hidden") 
        : card.classList.add("hidden");  
        
        if(card.classList.contains("hidden")){
            containerClassHidden.push(card);
        }
    })
    
    if(containerClassHidden.length===$cards.length){
        showError("Evento no encontrado, compruebe nuevamente que haya escrito correctamente!");
    }
});


const $categoryCheckbox = document.querySelectorAll(".categoryCheckbox");

Array.from($categoryCheckbox).forEach((categoryCheck)=>{
    categoryCheck.addEventListener("change", function (e){
        const inputs = document.querySelectorAll('input[type="checkbox"]');
        const checkedInputs = [];

        let containerClassHidden = [];
        
        inputs.forEach((input) => {
            if (input.checked) {
                checkedInputs.push(input.value);
            }
        });

        $cards.forEach((card)=>{
            const $cardCategory = card.querySelector(".card-category").textContent;

            if(checkedInputs.includes($cardCategory)){
                card.classList.remove("hidden");
            }else{
                card.classList.add("hidden");
            }

            if(checkedInputs.length===0){
                card.classList.remove("hidden");
            }

            if(card.classList.contains("hidden")){
                containerClassHidden.push(card);
            }
        })
        console.log(containerClassHidden);
        if(containerClassHidden.length===9){
            showError("Ningún evento encontrado en esa categoría!");
        }
        console.log("categoryCheck", categoryCheck);
        console.log(checkedInputs);
    })
})

const $mensaje = document.getElementById("mensaje")

function showError(error){
    let msgError = document.createElement("p");
    msgError.textContent = error;
    msgError.classList.add("error");
    $mensaje.appendChild(msgError);

    setTimeout(()=>{
        msgError.remove();
    }, 3000);
}