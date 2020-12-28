class Point {
  constructor(x, y) {
    if (isNaN(x) || isNaN(y)) throw new Error('Invalid');
    this.x = x;
    this.y = y;
  }
  calcDistance(point) {
    const r = Math.hypot(this.x - point.x, this.y - point.y);
    return Math.round(r * 1000000000) / 1000000000;
  }
}
module.exports.Point = Point;
