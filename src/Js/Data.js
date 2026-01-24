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

const grid = document.getElementById("foodsGrid");
const template = document.getElementById("foodCardTemplate");

foods.forEach((food) => {
const card = template.content.cloneNode(true);

const img = card.querySelector("img");
img.src = food.image;
img.alt = food.dish;

card.querySelector("h3").textContent = `${food.flag} ${food.dish}`;
card.querySelector("span").textContent = food.country;
card.querySelector("p").textContent = food.description;

grid.appendChild(card);});