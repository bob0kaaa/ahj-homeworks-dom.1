class Game {
  constructor(cellSize) {
    this.cellSize = cellSize ** 2;
    this.prevIndex = 0;
    this.currentIndex = 0;
  }

  buildingField() {
    const playingField = document.getElementById('playingField');
    for (let i = 0; i < this.cellSize; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.id = `cell-${i}`;
      playingField.appendChild(cell);
    }

    this.randomAttack();
  }

  randomAttack() {
    setInterval(() => {
      do {
        this.currentIndex = Math.floor(Math.random() * this.cellSize);
      } while (this.currentIndex === this.prevIndex);

      if (this.prevIndex >= 0) {
        const prevItemField = document.getElementById(`cell-${this.prevIndex}`);
        prevItemField.classList.remove('cell-attack');
      }
      const itemField = document.getElementById(`cell-${this.currentIndex}`);
      itemField.classList.add('cell-attack');
      this.prevIndex = this.currentIndex;
    }, 1000);
  }
}
const quantity = new Game(4);
quantity.buildingField();
