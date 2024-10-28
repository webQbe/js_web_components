/* Creating Custom <user-card> Element */


// Define Template Element for Shadow DOM
const template = document.createElement('template');

// Add Content to Template
template.innerHTML = `

    <style>
        h3 {

             color: coral;
        
        }
    </style>
    <div class="user-card">
        <h3></h3>
    </div>
`;



// Create UserCard class
class UserCard extends HTMLElement {

    constructor(){

        super(); 

        // Creating Shadow DOM
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Select Element from ShadowRoot &
        // Set h3 text to name attribute value
        this.shadowRoot.querySelector('h3').innerText = 
            this.getAttribute('name');


        /*  this.innerHTML = `<style> h3 { color: coral; }</style><h3>${this.getAttribute('name')}</h3>`; 
        */
        // super() calls constructor of HTMLElement class
        // 'this' pertains to custom element
        // Set Tag's innerHTML text to value of name attribute
            // <user-card name="John Does">John Does</user-card>

    }

}

// Define Custom Element
// Pass Tag name and Class
window.customElements.define('user-card', UserCard);