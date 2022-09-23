class Cart {

	render() {
		let htmlCatalog = '';
		const cartStore = LocalStorage.getProducts();

		CATALOG.forEach(({ id, name, imgSrc, price })  => {
			
			if(cartStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<tr>
						<td>${imgSrc}</td>
						<td>${name}</td>
						<td>${price.toLocaleString()} руб.</td>
					</tr>
				`;
			}
			
		});

		const html = `
			<div class="someClass">
				<table>
					${htmlCatalog}
				</table>
			</div>
		`;

		CART.innerHTML = html;	
	}
}

const cartPage = new Cart();