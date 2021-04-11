import { Injectable } from "@angular/core";
import { Cart } from "../../models/cart";
import { CartItem } from "../../models/cart-item";
import { ProdutoDTO } from "../../models/produto.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class CartService {

    constructor(public storage: StorageService) {
    }

    createOrCleanCart(): Cart {
        let cart: Cart = {items: []};
        this.storage.setCart(cart);
        return cart;
    }

    getCart(): Cart {
        let cart: Cart = this.storage.getCart();
        if(cart == null)
            cart = this.createOrCleanCart();
        return cart;
    }

    addProduto(produto: ProdutoDTO): Cart {
        let cart: Cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position == -1) {
            let cartItem: CartItem = {quantidade: 1, produto: produto};
            cart.items.push(cartItem);
        }
        this.storage.setCart(cart);
        return cart;
    }

}