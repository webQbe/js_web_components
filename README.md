# Web Components Introduction

- Delivering high quality UIs with encapsulated components
- We can break everything up into components such as search bar, header, blog post, etc. even without a framework.
- So, we can avoid the risk of a frameworks getting obsolete by using Web Components.
- We'll  see how to create a Web Component from scratch


## What are Web Components?

- Set of web platform API's that allow us to create custom, reusable and encapsulated `html` tags to use in web pages and web apps. 

    - You can simply embed them on a page.
    - We don't need to any install 3rd-party frameworks or libraries.

- Web components do not require any 3rd party libraries or frameworks but can certainly be used with them

## 3 Main Building Blocks

1. Custom Elements
2. Shadow DOM
3. HTML Templates


## 1. Custom Elements

- Create custom HTML tags:
    - Just like `<header>`, `<footer>`, `<p>`


- Create custom class:
    - We can also extend `html` tags by creating a class:

        `class AppDrawer extends HTMLElement {...}`

    - Then binding it to a custom tag:
        `window.customElements.define('app-drawer', AppDrawer);`


- Lifecycle methods available:

    - `constructor()`: 
        Called when an instance of the element is created or upgraded.  

    - `connectedCallback()`: 
        Called every time when the element is inserted into the DOM.

    - `disconnectedCallback()`: 
        Called every time the element is removed from the DOM.

    - `attributeChangedCallback(attributeName, oldValue, newValue)`:
        Called when an attribute is added, removed, updated, or replaced.

      - When we have a custom tag (element), we can pass in custom attribute.


## 2. Shadow DOM

- Used for self-contained components
- Encapsulate styles and markup
    - Styling is separate from the global CSS of the webpage
- Create with `element.attachShadow({mode:open})`
- Creates a `shadowRoot` that we can reference and interact with


## 3. HTML Templates

- Define the encapsulated markup of our web component
- Template tag allows us to store markup on page
- Include both HTML and CSS in templates
- Use slots make template dynamic to add custom text to it

