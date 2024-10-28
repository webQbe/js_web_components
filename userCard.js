/* Creating Custom <user-card> Element */

// Create UserCard class
class UserCard extends HTMLElement {

    constructor(){

        super(); // Calls constructor of HTMLElement class
        this.innerHTML = `John Doe`; // 'this' pertains to custom element

    }

}

// Define Custom Element
// Pass Tag name and Class
window.customElements.define('user-card', UserCard);