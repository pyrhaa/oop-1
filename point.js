class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    console.log(`(${this.x}, ${this.y})`);
  }
  isEqual(point) {
    return this.x === point.x && this.y === point.y ? true : false;
  }

  distance(point) {
    const A = Math.pow(point.x - this.x, 2);
    const B = Math.pow(point.y - this.y, 2);
    // const B = Math.pow(this.y - point.y, 2); je suis pas sûre ?
    return Math.sqrt(A + B);
  }
}

//je suis pas venue pour souffrir avec des Maths \(^o^")/

exports.Point = Point;
