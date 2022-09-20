class Products {

	render() {
		let htmlCatalog = '';
		
		CATALOG.forEach(({ id, name, imgSrc, price })  => {

			htmlCatalog += `
				<li class="products-element">
					<span class="products-element__name">${name}</span>
					<img class="products-element__image" src="${imgSrc}" alt="${name}"
					<span class="products-element__price">${price}</span>
					<button class="products-element__btn">Добавить в корзину</button>
				</li>
			`;
		})

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