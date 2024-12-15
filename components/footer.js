const currentYear = new Date().getFullYear()


class Footer extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `<footer>
        <p>Copyright © ${currentYear}</p>
    </footer>`
    
    }
}

window.customElements.define('footer-tag', Footer)