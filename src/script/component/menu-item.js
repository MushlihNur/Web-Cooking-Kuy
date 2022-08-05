class MenuItem extends HTMLElement {
    constructor() {
        super();
    }
      
    set menu(menu) {
      this._menu = menu;
      this.render();
    }
    
    render() {
      this.setAttribute("class", "m-3");
      this.innerHTML = `
      <style>
        .bg-card {
          background: linear-gradient(180deg, rgba(227, 240, 176, 0) 0%, #FFAD60 100%);
        }
      </style>
      <div class="card m-3 p-3 shadow bg-card">
        <div class="card-body">
          <h3 class="card-title">${this._menu.strMeal}</h3>
        </div>
        <div class="row">
          <div class="col-m-6 col-sm-6 mt-3">
            <img src="${this._menu.strMealThumb}" class="card-img-top rounded-lg" alt="${this._menu.strMeal}">
          </div>
          <div class="col-m-6 col-sm-6 mt-3">
            <h5>Incredient:</h5>
            <p>1. ${this._menu.strIngredient1} (${this._menu.strMeasure1})</p>
            <p>2. ${this._menu.strIngredient2} (${this._menu.strMeasure2})</p>
            <p>3. ${this._menu.strIngredient3} (${this._menu.strMeasure3})</p>
            <p>4. ${this._menu.strIngredient4} (${this._menu.strMeasure4})</p>
            <p>5. ${this._menu.strIngredient5} (${this._menu.strMeasure5})</p>
            <p>6. ${this._menu.strIngredient6} (${this._menu.strMeasure6})</p>
            <p>7. ${this._menu.strIngredient7} (${this._menu.strMeasure7})</p>
            <p>8. ${this._menu.strIngredient8} (${this._menu.strMeasure8})</p>
          </div>
        </div>
        
        <button type="button" class="col-12 rounded-pill" data-toggle="modal" data-target="#exampleModal">
          How To Make
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Instructions</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>${this._menu.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    }
}

customElements.define("menu-item", MenuItem);