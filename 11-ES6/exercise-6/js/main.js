'use strict';

class polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    const totalPerimeter = this.base * this.numberOfSides;
  }

  area() {
     const totalArea = this.base * this.height;
     return totalArea;
   }

};

class square extends polygon {
  constructor(side) {
    super(4, side);
    this._side = side;
  }

  get side() {
    return this._side;
  }
  set side(newSide){
    this._side = newSide;
    super.area();
  }
};


const firstSquare = new square(4);
console.log(firstSquare.perimeter());
console.log(firstSquare.area());
