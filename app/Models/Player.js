


export class Player {

  constructor(img, name, score) {
    this.img = img
    this.name = name
    this.score = score
  }

  greeting() {
    console.log(`My name is ${this.name}, and my score is ${this.score}`);
  }

  get PlayerTemplate() {
    return `<div class="col-4 p-3">
        <div class="bg-warning lighten-15 p-2 text-center text-light rounded elevation-3">
          <h1 class="d-flex align-items-center justify-content-center"><img
              src="${this.img}" height="100" alt="">
            <span>${this.name}</span>
          </h1>
          <h4>${this.score}</h4>
          <button class="btn btn-outline-danger" onclick="app.playersController.decreaseScore('${this.name}')">⬇</button>
          <button class="btn btn-outline-success" onclick="app.playersController.increaseScore('${this.name}')">⬆</button>
        </div>
      </div>`
  }
}