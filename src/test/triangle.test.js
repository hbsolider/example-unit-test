const { Point } = require('../class/Point');
const { expect } = require('chai');
const Triangle = require('../class/Triangle');
const testCaseForPerimeter = [
  [1, 1, 1, 2, 1, 3, 4],
  [0, 0, 0, 1, 1, 0, 3.414213562],
  [0, 0, 0, 3, 4, 0, 12],
  [-1, -2, -1, 2, -3, -4, 13.152982445],
  [1, 12312, 1.23, 12, 123123, 1, 259157.729717197],
  [1, 0, 0, 0, 0, 9999, 19999.000050005],
];
describe('Tam giac', () => {
  describe('Loai tam giac', () => {
    it('Tam giac vuong', () => {
      const a = new Point(0, 0);
      const b = new Point(0, 3);
      const c = new Point(4, 0);
      const t = new Triangle(a, b, c);
      const result = t.getType();
      expect(result).to.equals('Tam giac vuong');
    });
    it('Tam giac vuong can', () => {
      const a = new Point(0, 0);
      const b = new Point(3, 0);
      const c = new Point(0, 3);
      const t = new Triangle(a, b, c);
      const result = t.getType();
      expect(result).to.equals('Tam giac vuong can');
    });
    it('Tam giac can', () => {
      const a = new Point(3, 5);
      const b = new Point(1, 1);
      const c = new Point(5, 1);
      const t = new Triangle(a, b, c);
      const result = t.getType();
      expect(result).to.equals('Tam giac can');
    });
    it('Tam giac deu', () => {
      const a = new Point(0, 0);
      const b = new Point(2, 0);
      const c = new Point(1, 1.7320508075688772);
      const t = new Triangle(a, b, c);
      const result = t.getType();
      expect(result).to.equals('Tam giac deu');
    });
    it('Tam giac tu', () => {
      const a = new Point(0, 0);
      const b = new Point(100, 0);
      const c = new Point(-100, 100);
      const t = new Triangle(a, b, c);
      const result = t.getType();
      expect(result).to.equals('Tam giac tu');
    });
    it('Tam giac nhon', () => {
      const a = new Point(1.1, 0);
      const b = new Point(2, 2);
      const c = new Point(3, 0);
      const t = new Triangle(a, b, c);
      const result = t.getType();
      expect(result).to.equals('Tam giac nhon');
    });
    it('Khong phai tam giac', () => {
      const a = new Point(0, 0);
      const b = new Point(1, 0);
      const c = new Point(999, 0);
      const t = new Triangle(a, b, c);
      const result = t.getType();
      expect(result).to.equals('Khong phai tam giac');
    });
    it('Quăng lỗi invalid', () => {
      expect(() => {
        const a = new Point('a', 0);
        const b = new Point(1, 0);
        const c = new Point(999, 0);
        const t = new Triangle(a, b, c);
        const result = t.getType();
      }).to.throw('Invalid');
    });
    it('qqqq', () => {
      const a = new Point(0, 0);
      const b = new Point(5, 0);
      const c = new Point(10, 0);
      const t = new Triangle(a, b, c);
      const result = t.getType();
      expect(result).to.equals('Khong phai tam giac');
    });
  });
  describe('Tinh chu vi', () => {
    it.each(testCaseForPerimeter)(
      `A(%d,%d) B(%d,%d) C(%d,%d) expect %f`,
      (xa, ya, xb, yb, xc, yc, e) => {
        const pa = new Point(xa, ya);
        const pb = new Point(xb, yb);
        const pc = new Point(xc, yc);
        const t = new Triangle(pa, pb, pc);
        const r = t.calcPerimeter();
        expect(r).to.equal(e);
      }
    );
  });
});
