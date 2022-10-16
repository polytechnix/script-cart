function render() {
	const productStore = localStorage.getProducts();

	headerPage.render(cartStorage.length);
	productsPage.render();
}

let CATALOG = [];

fetch('server/catalog.json')
	.then(result => result.json)
	.then(body => {
		CATALOG = body;
		render();
	})
	.catch(error => {
		console.log(error);
	});
