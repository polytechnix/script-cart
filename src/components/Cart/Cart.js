class Cart {

	close-modal() {
		CART.innerHTML = '';
	}

	render() {
		let htmlCatalog = '';
		let purchaseAmount = 0;

		const cartStore = LocalStorage.getProducts();

		CATALOG.forEach(({ id, name, imgSrc, price })  => {
			
			if(cartStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<tr>
						<td class="cart-item cart-item__img">${imgSrc}</td>
						<td class="cart-item cart-item__name">${name}</td>
						<td class="cart-item cart-item__price">${price.toLocaleString()} руб.</td>
					</tr>
				`;

				purchaseAmount += price;
			}
			
		});

		const html = `
			<div class="cart-container">
				
				<div class="close-btn" onclick="cartPage.close-modal();"></div>
				
				<table>
					${htmlCatalog}
				</table>

				<p class="amount">Сумма: ${purchaseAmount.toLocaleString()} руб.</p>
			</div>
		`;

		CART.innerHTML = html;	
	}
}

const cartPage = new Cart();