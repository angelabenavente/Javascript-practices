'use strict';

class polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    console.log(this.base * this.numberOfSides);
  }

  area() {
     const totalArea = this.base * this.height;
     console.log(totalArea);
   }
};

class square extends polygon {
  constructor(side) {
    super(4, base, height);
    this.base = side;
  }
};


class triangle extends polygon {
  constructor(base, height) {
    super(3, base, height);
    this.base = base;
    this.height = height;
  }
  area() {
    //return squareArea = side * side;
     console.log(super.area() / 2);
  }
};

const firstSquare = new polygon(4, 4, 4);
firstSquare.perimeter();
firstSquare.area();

const firstTriangle = new triangle(3, 4, 3);
firstTriangle.perimeter();
firstTriangle.area();