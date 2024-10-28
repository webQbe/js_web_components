/* Creating Custom <user-card> Element */


// Define Template Element for Shadow DOM
const template = document.createElement('template');

// Add Style & Tags to Template
template.innerHTML = `

    <style>

        h3 { color: coral;}

        .user-card {
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid; /* Create grids for img & div */
            grid-template-columns: 1fr 2fr; /* 2 Columns, div is biggger */
            grid-gap: 10px;
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
        }

        .user-card img { width: 100%;}

        .user-card button {
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>
    <div class="user-card">
        <img />
        <div>
             <h3></h3>
             <div class="info">
                <p><slot name="email" /></p>
                <p><slot name="phone" /></p>
             </div>
             <button id="toggle-info">Hide Info</button>
        </div>
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

        // Set image src to value(url) of avatar attribute 
        this.shadowRoot.querySelector('img').src = 
            this.getAttribute('avatar');
    }

    // Adding Event Listener to Button inside shadowRoot
    
    connectedCallback(){

        // Put Event Listener inside 
        // connectedCallback() Life Cycle method
        this.shadowRoot.querySelector('#toggle-info').
            addEventListener('click', () => this.toggleInfo());

    }

}

// Define Custom Element
// Pass Tag name and Class
window.customElements.define('user-card', UserCard);