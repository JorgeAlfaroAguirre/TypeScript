// 🖐️ Simple class without control or validation
class Handmade {
  constructor(public product: string, public price: number) {}

  getInfo(): string {
    return `🖐️ Product: ${this.product} | 💵 Price: $${this.price} USD`;
  }
}

// 🏭 Factory Pattern class with validation and formatting
class FactoryMade {
  private constructor(public product: string, public price: string) {}

  // Factory method to create instances with validation
  static create(product: string, price: number): FactoryMade {
    // Basic validation
    if (!product || price === undefined || price < 0) {
      throw new Error(
        "Valid product name and non-negative price are required."
      );
    }

    // Clean up product name and format price to 2 decimals as a string
    const cleanProduct = product.trim();
    const formattedPrice = price.toFixed(2); // Always 2 decimals (e.g., 1 → "1.00")

    return new FactoryMade(cleanProduct, formattedPrice);
  }

  getInfo(): string {
    return `🏭 Product: ${this.product} | 💵 Price: $${this.price} USD`;
  }
}

// 🧪 Test & comparison

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
