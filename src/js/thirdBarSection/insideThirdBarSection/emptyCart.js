import cart from "../../../model/cart";
import { createDomElement, appendChildIntoParent } from "../../helper";

export function emptyCartDiv(parentId){
    const emptyCart = createDomElement({
        elementType:'div',
        elementClass:'emptycart',
        elementId:'emptyCartDiv'
    })
    appendChildIntoParent(parentId, [emptyCart]);

    // const emptyCartName = createDomElement({
    //     elementType:'div',
    //     elementClass:'emptycart-name',
    //     elementId:'emptyCartName',
    //     innerHtml:'Cart Emtpy'
    // })
    // appendChildIntoParent(emptyCart.getAttribute('id'), [emptyCartName]);


    // const emptyCartImageDiv = createDomElement({
    //     elementType:'div',
    //     elementClass:'emptycart-imgdiv',
    //     elementId:'emptyCartImageDiv',
    //     innerHtml:'<img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" class="emptycart-img">'
    // })
    // appendChildIntoParent(emptyCart.getAttribute('id'), [emptyCartImageDiv])


    // const emptyCartContent = createDomElement({
    //     elementType:'div',
    //     elementClass:'emptycart-content',
    //     elementId:'emptyCartContent',
    //     innerHtml:'Good food is always cooking! <br> Go ahead, order some yummy items from the menu.'
    // })
    // appendChildIntoParent(emptyCart.getAttribute('id'), [emptyCartContent])

}



export function showData(){
    // console.log('chal rha h')
    document.getElementById('emptyCartDiv').innerHTML="";
    for(const key in cart){
        const numbering= createDomElement({
            elementType:'div',
            innerHtml:key
        })
        
        const removeButton = createDomElement({
            elementType:'button',
            elementId:'removeButton',
            innerHtml:'-'
        })

        removeButton.addEventListener("click", removeInCartAndInFoodItems);

        function removeInCartAndInFoodItems(){
            if(document.getElementById(count.getAttribute('id')).innerHTML > 0){
                document.getElementById(count.getAttribute('id')).innerHTML--;
                const totalitems = document.getElementById(count.getAttribute('id')).innerHTML;
                cart[key]=totalitems;
                
                updateItems();
                console.log(cart)
            }
        }

        const count = createDomElement({
            elementType:'p',
            elementId: `counter${key}`,
            innerHtml:cart[key]
        })
        const addButton = createDomElement({
            elementType:'button',
            elementId:'addButton',
            innerHtml:`+`
        })
        addButton.addEventListener("click", addInCartAndInFoodItems);

        function addInCartAndInFoodItems(){
            document.getElementById(count.getAttribute('id')).innerHTML++;
            const totalitems = document.getElementById(count.getAttribute('id')).innerHTML;
            cart[key]=totalitems;
            updateItems()
            console.log(cart)
        }

        appendChildIntoParent('emptyCartDiv', [numbering ,addButton, count, removeButton]);

        // console.log(document.getElementById('countOfItems').innerHTML )
    }

    const totalAmountDiv = createDomElement({
        elementType:'div',
        elementId:'totalAmountDiv',
        innerHtml:''
    })
    // console.log(document.getElementById('emptyCartDiv'));
    appendChildIntoParent('emptyCartDiv', [totalAmountDiv]);
    totalAmountDiv();
}

const updateItems = () =>{
    for(const key in cart){
        const element = document.getElementById(key);
        element.getElementsByClassName("quatity")[0].textContent=cart[key]
    }
}

const totalAmount =()=>{
    let total = 0;
    for(const key in cart){
        const element = document.getElementById(key);
        // element.getElementsByClassName('food-price')[1]
        console.log(element.getElementsByClassName('food-price')[1]);
        let quantity = cart[key];
    }
}