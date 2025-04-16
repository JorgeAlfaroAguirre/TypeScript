"use strict";
class Handmade {
    constructor(product, price) {
        this.product = product;
        this.price = price;
    }
    getInfo() {
        return `🖐️ Product: ${this.product} | 💵 Price: $${this.price} USD`;
    }
}
class FactoryMade {
    constructor(product, price) {
        this.product = product;
        this.price = price;
    }
    static create(product, price) {
        if (!product || price === undefined || price < 0) {
            throw new Error("Valid product name and non-negative price are required.");
        }
        const cleanProduct = product.trim();
        const formattedPrice = price.toFixed(2);
        return new FactoryMade(cleanProduct, formattedPrice);
    }
    getInfo() {
        return `🏭 Product: ${this.product} | 💵 Price: $${this.price} USD`;
    }
}
const handmadeSoap = new Handmade("Soap", 5);
console.log(handmadeSoap.getInfo());
const handmadeCandle = new Handmade("Candle", 3.49999);
console.log(handmadeCandle.getInfo());
const factorySoap = FactoryMade.create(" Soap ", 1);
console.log(factorySoap.getInfo());
const factoryOil = FactoryMade.create("Essential Oil", 4.2371);
console.log(factoryOil.getInfo());
const factoryLipBalm = FactoryMade.create("Lip Balm", 2.0);
console.log(factoryLipBalm.getInfo());
//# sourceMappingURL=factory.js.map