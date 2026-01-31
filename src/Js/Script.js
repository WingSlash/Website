// Judul makanan
// Deskripsi makanan
// Foto makanan
// flag

const foods = [
    {
        flag:"./Asset/Bulgaria",
        image:"./Asset/Goulash",
        Country:"Hungary",
        title: "Goulash",
        description:"A soup made with a variety of meat and vegetables, seasoned with paprika and other spices. "
    }, 
    {
        flag:"./Asset/Japan",
        image:"./Asset/Ochazuke",
        Country:"Japan",
        title:"Ochazuke",
        description:"A simple rice bowl that adds green tea over cooked rice with toppings like salmon, seaweed, etc."
    },
    {
        flag:"./Asset/China",
        image:"./Asset/Mapo_Tofu",
        Country:"China",
        title:"Mapo Tofu",
        description:"A popular dish consisting of tofu and spicy beans. Originating from Sichuan representing the Mala style."
    },
    {
        flag:"./Asset/Vietnam",
        image:"./Asset/Pho",
        Country:"Vietnam",
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