class Header {

	openCartModal() {
		cartPage.render();
	}

	render(count) {
		const html = `
			<div classs= "header-container">
				<div class="header-counter" onclick="headerPage.openCartModal();">
					${count}
				</div>			
			</div>
		`;
		
		HEADER.innerHTML = html;
	}

}

const headerPage = new Header();
const cartStorage = localStorage.putProducts();