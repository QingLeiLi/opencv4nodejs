import { expect } from 'chai';
import { TestContext } from '../model';

export default (args: TestContext) => {
  const { cv, utils } = args;

  const {
    assertPropsWithValue,
    expectFloat
  } = utils;

  describe('constructor', () => {
    const pt = new cv.Point2(50, 50);
    const size = 2.5;
    const angle = Math.PI / 2;
    const response = 0.8;
    const octave = 21;
    const class_id = 2;

    it('has default constructor', () => {
      //@ts-ignore:next-line
      expect(() => new cv.KeyPoint()).to.not.throw();
    });

    it('should throw if insufficient args passed', () => {
      //@ts-ignore:next-line
      expect(() => new cv.KeyPoint2(pt, undefined)).to.throw();
    });

    it('should be constructable with required args', () => {
      expect(() => new cv.KeyPoint(pt, size, angle, response, octave, class_id)).to.not.throw();
    });

    it('should initialize with correct values', () => {
      const kp = new cv.KeyPoint(pt, size, angle, response, octave, class_id);
      assertPropsWithValue(kp)({ size, octave, class_id });
      expect(kp).to.have.property('pt');
      assertPropsWithValue(kp.pt)(pt);
      expectFloat(kp.angle, angle);
      expectFloat(kp.response, response);
    });
  });

};
