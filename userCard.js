/* Creating Custom <user-card> Element */

// Create UserCard class
class UserCard extends HTMLElement {

    constructor(){

        super(); 
        this.innerHTML = `<style> h3 { color: coral; }</style><h3>${this.getAttribute('name')}</h3>`; 

        // super() calls constructor of HTMLElement class
        // 'this' pertains to custom element
        // Set Tag's innerHTML text to value of name attribute
            // <user-card name="John Does">John Does</user-card>

    }

}

// Define Custom Element
// Pass Tag name and Class
window.customElements.define('user-card', UserCard);