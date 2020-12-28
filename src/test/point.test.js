const { Point } = require('../class/Point');
const { expect } = require('chai');

describe('Point', () => {
  describe('Khai bao', () => {
    it('Khai báo trả về loại Point', () => {
      const p = new Point(0, 1);
      expect(p).to.be.an.instanceof(Point);
    });
    it('should be throw error', () => {
      expect(() => {
        const p = new Point('a', 1);
      }).to.throw('Invalid');
    });
    it('x>0 y=0', () => {
      const p = new Point(100, 0);
      expect(p).to.be.an.instanceof(Point);
    });
    it('x,y đều là số nguyên dương', () => {
      const p = new Point(100, 100);
      expect(p).to.be.an.instanceof(Point);
    });
    it('x,y đều là số âm', () => {
      const p = new Point(-999, -1);
      expect(p).to.be.an.instanceOf(Point);
    });
    it('x, y đều là số thập phân', () => {
      const p = new Point(1.34131313131, 1.2121212121);
      expect(p).to.be.an.instanceOf(Point);
    });
  });
  describe('Tinh do dai tu diem a -> b', () => {
    it('trả về bằng 1', () => {
      const a = new Point(0, 1);
      const b = new Point(0, 0);
      const result = a.calcDistance(b);
      expect(result).to.equal(1);
    });
    it('Quăng ra lỗi', () => {
      expect(() => {
        const a = new Point('a', 1);
        const b = new Point(0, 1);
        const result = a.calcDistance(b);
      }).to.throw('Invalid');
    });
    it('trả về bằng 2.828427125', () => {
      const a = new Point(-1, -2);
      const b = new Point(-3, -4);
      const result = a.calcDistance(b);
      expect(result).to.equals(2.828427125);
    });
    it('Hai điểm trùng nhau', () => {
      const a = new Point(-999, 999);
      const b = new Point(-999, 999);
      const result = a.calcDistance(b);
      expect(result).to.equal(0);
    });
  });
  // sad
});
