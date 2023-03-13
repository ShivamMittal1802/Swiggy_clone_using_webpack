import { createDishCard } from "./element";
// console.log('till here');
export function createRestaurantDishesCart(parentId){
    const list = [
        {
            icon:'<img src="non-veg.png" alt="" class="non-veg-icon">',
            dishName:"Dhaniya Chicken Tikka",
            price:'<i class="fa-solid fa-indian-rupee-sign" id="rupee" ></i>299',
            description:"Needs no introduction- bite size steamed dumplings stuffed with <br> corn, spinach & other vegetables in Asian flavours and served with <br> auntie's in-house XO sauce",
            image:'<img alt="Dhaniya Chicken Tikka" class="imageoffooditem" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vgkmyncx7yxcug1hvf1u">',
            subElemenLefttId: "CardNo1Left",
            subElementRightId: "CardNo1Right",
            individualId:"cardNo1",
            parentId:parentId,
        },
        {
            icon:'<img src="non-veg.png" alt="" class="non-veg-icon">',
            dishName:"Dhaniya Chicken Tikka",
            price:'<i class="fa-solid fa-indian-rupee-sign" id="rupee" ></i>299',
            description:"Needs no introduction- bite size steamed dumplings stuffed with <br> corn, spinach & other vegetables in Asian flavours and served with <br> auntie's in-house XO sauce",
            image:'<img alt="Dhaniya Chicken Tikka" class="imageoffooditem" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vgkmyncx7yxcug1hvf1u">',
            subElemenLefttId: "CardNo2Left",
            subElementRightId: "CardNo2Right",
            individualId:"cardNo2",
            parentId:parentId,
        },
        {
            icon:'<img src="non-veg.png" alt="" class="non-veg-icon">',
            dishName:"Dhaniya Chicken Tikka",
            price:'<i class="fa-solid fa-indian-rupee-sign" id="rupee" ></i>299',
            description:"Needs no introduction- bite size steamed dumplings stuffed with <br> corn, spinach & other vegetables in Asian flavours and served with <br> auntie's in-house XO sauce",
            image:'<img alt="Dhaniya Chicken Tikka" class="imageoffooditem" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vgkmyncx7yxcug1hvf1u">',
            subElemenLefttId: "CardNo3Left",
            subElementRightId: "CardNo3Right",
            individualId:"cardNo3",
            parentId:parentId,
        },
        {
            icon:'<img src="non-veg.png" alt="" class="non-veg-icon">',
            dishName:"Dhaniya Chicken Tikka",
            price:'<i class="fa-solid fa-indian-rupee-sign" id="rupee" ></i>299',
            description:"Needs no introduction- bite size steamed dumplings stuffed with <br> corn, spinach & other vegetables in Asian flavours and served with <br> auntie's in-house XO sauce",
            image:'<img alt="Dhaniya Chicken Tikka" class="imageoffooditem" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vgkmyncx7yxcug1hvf1u">',
            subElemenLefttId: "CardNo4Left",
            subElementRightId: "CardNo4Right",
            individualId:"cardNo4",
            parentId:parentId,
        },
        {
            icon:'<img src="non-veg.png" alt="" class="non-veg-icon">',
            dishName:"Dhaniya Chicken Tikka",
            price:'<i class="fa-solid fa-indian-rupee-sign" id="rupee" ></i>299',
            description:"Needs no introduction- bite size steamed dumplings stuffed with <br> corn, spinach & other vegetables in Asian flavours and served with <br> auntie's in-house XO sauce",
            image:'<img alt="Dhaniya Chicken Tikka" class="imageoffooditem" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vgkmyncx7yxcug1hvf1u">',
            subElemenLefttId: "CardNo5Left",
            subElementRightId: "CardNo5Right",
            individualId:"cardNo5",
            parentId:parentId,
        },
        {
            icon:'<img src="non-veg.png" alt="" class="non-veg-icon">',
            dishName:"Dhaniya Chicken Tikka",
            price:'<i class="fa-solid fa-indian-rupee-sign" id="rupee" ></i>299',
            description:"Needs no introduction- bite size steamed dumplings stuffed with <br> corn, spinach & other vegetables in Asian flavours and served with <br> auntie's in-house XO sauce",
            image:'<img alt="Dhaniya Chicken Tikka" class="imageoffooditem" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vgkmyncx7yxcug1hvf1u">',
            subElemenLefttId: "CardNo6Left",
            subElementRightId: "CardNo6Right",
            individualId:"cardNo6",
            parentId:parentId,
        }
    ]
    // console.log('till heresdfs');
    list.map(createDishCard);
    // git status
    // git add .
    // git commit -m "add something"
    // git push
}