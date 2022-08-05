class SearchBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchMenu").value;
    }

    render() {
        this.innerHTML = `
        <style>
        .form-group {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            z-index: 10;
            background-color: white;
        }
       
        .form-group > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid #96CEB4;
            font-weight: bold;
        }
       
        .form-group > input:focus {
            outline: 0;
            border-bottom: 2px solid #96CEB4;
        }
       
        .form-group > input:focus::placeholder {
            font-weight: bold;
        }
       
        .form-group >  input::placeholder {
            color: #D9534F;
            font-weight: normal;
        }
       
        .form-group > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #96CEB4;
            color: white;
            border: 0;
            text-transform: uppercase;
        }
       
        @media screen and (max-width: 550px){
            .form-group {
                flex-direction: column;
                position: static;
            }
       
            .form-group > input {
                width: 100%;
                margin-bottom: 12px;
            }
       
            .form-group > button {
                width: 100%;
            }
        }
        </style>
        <div class="form-group rounded-pill">
          <input placeholder="Find Menu" type="text" class="form-control rounded-pill" id="searchMenu">
          <button id="searchButtonElement" type="submit" class="rounded-pill">Submit</button>
        </div>
        `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);