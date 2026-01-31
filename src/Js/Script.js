// Judul makanan
// Deskripsi makanan
// Foto makanan
// flag

const foods = [
    {
        flag:"https://cdn.britannica.com/55/1455-050-CCDFFCF0/Flag-Hungary.jpg?w=400&h=300&c=crop",
        image:"https://www.simplyrecipes.com/thmb/1P8E9m3nTYPkvNu4ig3SqlSYcZ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/simply-recipes-hungarian-goulash-lead-1-9b243ad244134164aed863c874215ffa.jpg",
        country:"Hungary",
        title: "Goulash",
        description:"A soup made with a variety of meat and vegetables, seasoned with paprika and other spices. "
    }, 
    {
        flag:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/330px-Flag_of_Japan.svg.png",
        image:"https://thejapanstore.us/wp-content/uploads/2021/11/shutterstock_1184082958-scaled.jpg",
        country:"Japan",
        title:"Ochazuke",
        description:"A simple rice bowl that adds green tea over cooked rice with toppings like salmon, seaweed, etc."
    },
    {
        flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1280px-Flag_of_the_People%27s_Republic_of_China.svg.png",
        image:"https://redhousespice.com/wp-content/uploads/2022/05/mapo-tofu-in-a-plate-500x375.jpg",
        country:"China",
        title:"Mapo Tofu",
        description:"A popular dish consisting of tofu and spicy beans. Originating from Sichuan representing the Mala style."
    },
    {
        flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png",
        image:"https://www.recipetineats.com/tachyon/2019/04/Beef-Pho_6.jpg?resize=500%2C500",
        country:"Vietnam",
        title:"Pho",
        description:"A soup that has noodles that are made with rice flour. Made all over in street stalls and households."
    }
]
const foodGrid = document.getElementById('foodGrid');

foods.forEach(food => {
    const card = document.createElement('div');
    card.className = 'food-card';
    
    card.innerHTML = `
        <div class="food-flag-container">
            <img class="food-flag" src="${food.flag}" alt="${food.country} flag">
            <img class="food-img" src="${food.image}" alt="${food.title}">
        </div>
        <div class="food-content">
            <div class="food-header">
                <span class="food-country">${food.country}</span>
            </div>
            <h3 class="food-title">${food.title}</h3>
            <p class="food-desc">${food.description}</p>
        </div>
    `;
    
    foodGrid.appendChild(card);
});