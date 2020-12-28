const Point = require('./Point');
class Triangle {
  constructor(a, b, c) {
    this.pa = a;
    this.pb = b;
    this.pc = c;
  }
  getType() {
    const a = this.pa.calcDistance(this.pb);
    const b = this.pb.calcDistance(this.pc);
    const c = this.pc.calcDistance(this.pa);
    const bc = Math.round(Math.hypot(b, c) * 1000000000) / 1000000000;
    const ac = Math.round(Math.hypot(a, c) * 1000000000) / 1000000000;
    const ba = Math.round(Math.hypot(b, a) * 1000000000) / 1000000000;
    if (a < b + c && b < a + c && c < b + a) {
      if (a === b && a === c && c === b) {
        return 'Tam giac deu';
      } else if (a === b || a === c || b === c) {
        if (a === bc || b === ac || c === ba) {
          return 'Tam giac vuong can';
        } else return 'Tam giac can';
      } else if (a === bc || b === ac || c === ba) {
        return 'Tam giac vuong';
      } else if (
        a * a > b * b + c * c ||
        b * b > a * a + c * c ||
        c * c > b * b + a * a
      ) {
        return 'Tam giac tu';
      } else return 'Tam giac nhon';
    } else return 'Khong phai tam giac';
  }
  calcPerimeter() {
    const a = this.pa.calcDistance(this.pb);
    const b = this.pb.calcDistance(this.pc);
    const c = this.pc.calcDistance(this.pa);
    if (a > b + c || c > b + a || b > a + c) {
      throw new Error('Day khong phai tam');
    }
    return a + b + c;
  }
}
module.exports = Triangle;
