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

    removeProduto(produto: ProdutoDTO): Cart {
        let cart: Cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            cart.items.splice(position, 1);
        }
        this.storage.setCart(cart);
        return cart;
    }
    
    increaseQuantity(produto: ProdutoDTO): Cart {
        let cart: Cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            cart.items[position].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;
    }
        
    decreaseQuantity(produto: ProdutoDTO): Cart {
        let cart: Cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            let item = cart.items[position];
            item.quantidade--;
            if(item.quantidade <= 0)
                cart = this.removeProduto(item.produto);
        }
        this.storage.setCart(cart);
        return cart;
    }

    total(): number {
        let cart: Cart = this.getCart();
        let total = 0;
        cart.items.map((item) => {
            total += (item.produto.preco * item.quantidade);
        })
        return total;
    }

}