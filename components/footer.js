const currentYear = new Date().getFullYear()


class Footer extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `<footer>
        <div>Social Menu</div>
        <p>Copyright © ${currentYear}</p>
    </footer>`
    
    }
}

window.customElements.define('footer-tag', Footer)