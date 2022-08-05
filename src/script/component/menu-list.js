import './menu-item.js'

class MenuList extends HTMLElement {
    constructor() {
        super();
    }

    set menus(menus) {
        this._menus = menus;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._menus.forEach(menu => {
            const menuItemElement = document.createElement("menu-item");
            menuItemElement.menu = menu;
            this.appendChild(menuItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `
        <h2 class="placeholder">${message}</h2>
        `
    }
}

customElements.define("menu-list", MenuList);