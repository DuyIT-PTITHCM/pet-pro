import { HOST } from "$lib/Const";
import { cart, cartItemQuantity } from "$lib/store/cart";
import { toastErr } from "$lib/store/toastError";
import { getCookie, removeCookie, setCookie } from "./cookieUtils";
interface Product {
    id: number,
    name: string;
    origin: string;
    image: string;
    url: string;
    price: number;
    quantityStock: number;
    quantity: number;
    isSelect: boolean;
}

export async function addCart(prod: any) {
    let currentCart: Product[] = [];
    let image = await JSON.parse(prod.images);
    let product = {
        id: prod.id,
        name: prod.productName,
        origin: prod.origin,
        image: HOST + image[0],
        url: prod.slug,
        price: prod.price,
        quantityStock: prod.stockQuantity,
        quantity: 1,
        isSelect: false,
    }
    cart.subscribe(value => {
        if(value) currentCart = JSON.parse(value);
    });
    var matchProduct = currentCart.find((item) => item.id == product.id);
    if (matchProduct) {
        if(matchProduct.quantity < 20){
            if(matchProduct.quantity + 1 <= product.quantityStock)
            {
                matchProduct.quantity += 1;
                currentCart.map((item) => (item.id === matchProduct?.id ? matchProduct : item));
                toastErr.set([
                    {
                        message: "Add to cart success",
                        type: "success",
                    },
                ]);
            }
            else{
                toastErr.set([
                    {
                        message: "Can not add more product",
                        type: "error",
                    },
                ]);
            }
        }
        else{
            toastErr.set([
                {
                    message: "Quantity can not over than 20",
                    type: "error",
                },
            ]);
        }
    }
    else {
        currentCart.push(product);
        toastErr.set([
            {
                message: "Add to cart success",
                type: "success",
            },
        ]);
    }
    let totalCartQuantity = currentCart.reduce(function (total, cartItem) {
        return total + cartItem.quantity;
    }, 0);

    const cartsJSON = JSON.stringify(currentCart);
    removeCookie('cart');
    setCookie('cart', cartsJSON);
    cart.set(getCookie('cart'));

    setCookie( 'cartQuantity' , totalCartQuantity)
    cartItemQuantity.set(getCookie('cartQuantity'))
    return;
}

export async function updateCart(prods: any) {
    const cartsJSON = JSON.stringify(prods);
    removeCookie('cart');
    setCookie('cart', cartsJSON);
    cart.set(getCookie('cart'));
    let totalCartQuantity = prods.reduce(function (total, cartItem) {
        return total + cartItem.quantity;
    }, 0);
    setCookie( 'cartQuantity' , totalCartQuantity)
    cartItemQuantity.set(getCookie('cartQuantity'))
}
