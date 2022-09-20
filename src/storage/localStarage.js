class LocalStorage {
	constructor() {
		this.keyName = 'products';
	}

	getProducts() {
		const productsLocalStorage = localStorage.getItem(this.keyName);

		if(productsLocalStorage !== null) {
			return JSON.parse(productsLocalStorage);
		} else {
			return [];
		}
	}

	putProducts(id) {
		let products = this.getProducts();
		let pushProduct = false;

		const index = products.indexOf(id);

		if(index === -1) {
			products.push(id);
			pushProduct = true;		
		} else {
			products.splice(index, 1);
		}
		
		products.push(id);
		localStorage.setItem(this.keyName, JSON.stringify(products));

		return { pushProduct, products }
	}
}

const localStorage = new LocalStorage();

const a = localStorage.getProducts();
console.log(a);

localStorage.putProducts(1);
localStorage.putProducts(2);