class Products {

	constructor() {
		this.addedBtnCartText = 'Добавить в корзину';
		this.removeBtnCartText = 'Удалить из корзины';	
		this.basicBtnClassName = 'products-element__btn'';
		this.activeBtnClassName = 'products-element__btn_active'';
	}

	setLocalStorageStore(element, id) {
		const { pushProduct, products } = LocalStorage.putProducts(id);

		if(pushProduct) {
			element.classList.add(this.activeBtnClassName);
			element.innerHTML = this.removeBtnCartText;
		} else {
			element.classList.remove(this.activeBtnClassName);
			element.innerHTML = this.addedBtnCartText;			
		}
	}

	render() {
		let htmlCatalog = '';
		const cartStore = LocalStorage.getProducts();

		CATALOG.forEach(({ id, name, imgSrc, price })  => {

			let btnText = '';
			let btnClass = '';

			if(cartStore.indexOf(id) === -1) {
				btnText = this.addedBtnCartText;
				btnClass = this.basicBtnClassName;
			} else {
				btnText = this.removeBtnCartText;
				btnClass = this.activeBtnClassName;
			}

			htmlCatalog += `
				<li class="products-element">
					<span class="products-element__name">
						${name}
					</span>
					
					<img class="products-element__image" src="${imgSrc}" alt="${name}"
					
					<span class="products-element__price">
						${price.toLocaleString()} <span class="currency">руб.</span>
					</span>
					
					<button class="${btnClass}" onclick="productsPage.setLocalStorageStore(this, ${id});">
						${btnText}
					</button>
				</li>
			`;
		});

		html += `
			<ul class="products-container">
				${htmlCatalog}
			</ul>
		`;

		PRODUCTS.innerHTML = html;
	}
}

const productsPage = new Products();
productsPage.render();