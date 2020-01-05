'use strict';

class square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    console.log(this.side * 4);
  }
  area() {
   //return squareArea = side * side;
    console.log(this.side * this.side);
  }
}

const firstSquare = new square(1);
firstSquare.perimeter();
firstSquare.area();

const secondSquare = new square(3);
secondSquare.perimeter();
secondSquare.area();

const thirdSquare = new square(7);
thirdSquare.perimeter();
thirdSquare.area();
