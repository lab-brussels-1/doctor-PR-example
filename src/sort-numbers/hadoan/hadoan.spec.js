/* eslint-disable jsdoc/check-indentation */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
// #todo

/* 0. Starter Code

*/

// =============== JSDoc description of the challenge ===============

// eslint-disable-next-line sonarjs/cognitive-complexity
/**
 *
 */

// =============== your solutions will go here ===============

// const alex = {
//     profession: 'doctor',
//     experience: 20,
// };
// bonus(alex, 200);

// eslint-disable-next-line sonarjs/cognitive-complexity, jsdoc/require-throws
/**
 * Calculate the premium for the healthcareworkers.
 *
 * @param {object} employee - The healthcareworker object that is passed to the function.
 * @param {number} premium - The base premium.
 * @returns {number} The premium rounded down to an integer.
 */
// eslint-disable-next-line sonarjs/cognitive-complexity
function bonus(employee = {}, premium = 0) {
  let payout = 0;
  if (employee.profession === 'doctor') {
    if (employee.experience >= 10 && employee.experience < 20) {
      payout = premium * 2;
    } else if (employee.experience >= 20) {
      payout = premium * 3;
    } else if (employee.experience < 10) {
      payout = premium * 1.5;
    }
    if (payout > 1000) {
      throw new Error('doctor bonus greater than 1000');
    }
  } else if (employee.profession === 'nurse') {
    if (employee.experience < 10) {
      payout = premium * 1.2;
    } else if (employee.experience >= 10 && employee.experience < 15) {
      payout = premium * 1.3;
    } else if (employee.experience >= 15 && employee.experience < 20) {
      payout = premium * 1.5;
    } else if (employee.experience >= 20) {
      payout = premium * 1.7;
    }
    if (payout > 500) {
      throw new Error('nurse bonus greater than 500');
    }
  }
  payout = Math.floor(payout);
  return payout;
}

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [bonus]) {
  // =============== test cases for this challenge ===============

  describe(`${solution.name}: returns the bonus amount`, () => {
    describe('gives correct bonus to all the doctors', () => {
      describe('gives correct bonus to doctors with less than 10 years of experience', () => {
        for (let i = 0; i < 10; i++) {
          it('return 200 * 1.5 = 300 for less than 10y exp', () => {
            expect(solution({ profession: 'doctor', experience: i }, 200)).toBe(
              300,
            );
          });
          it('return 400 * 1.5 = 600 for less than 10y exp', () => {
            expect(solution({ profession: 'doctor', experience: i }, 400)).toBe(
              600,
            );
          });
          it('return 600 * 1.5 = 900 for less than 10y exp', () => {
            expect(solution({ profession: 'doctor', experience: i }, 600)).toBe(
              900,
            );
          });
        }
      });
      describe('gives correct bonus to doctors 10 to 19 years of exp', () => {
        for (let i = 10; i < 20; i++) {
          it('200 * 2 = 400', () => {
            expect(solution({ profession: 'doctor', experience: i }, 200)).toBe(
              400,
            );
          });
          it('400 * 2 = 800', () => {
            expect(solution({ profession: 'doctor', experience: i }, 400)).toBe(
              800,
            );
          });
          it('600 * 2 = ERROR', () => {
            expect(() => solution({ profession: 'doctor', experience: i }, 600)).toThrowError(new Error('doctor bonus greater than 1000'));
          });
        }
      });
      describe('gives correct bonus to doctors with 20 and more years of experience upto 55y of exp', () => {
        for (let i = 20; i <= 55; i++) {
          it('200 * 3 = 600', () => {
            expect(solution({ profession: 'doctor', experience: i }, 200)).toBe(
              600,
            );
          });
          it('400 * 3 = ERROR', () => {
            expect(() => solution({ profession: 'doctor', experience: i }, 400)).toThrowError(new Error('doctor bonus greater than 1000'));
          });
          it('600 * 3 = ERROR', () => {
            expect(() => solution({ profession: 'doctor', experience: i }, 600)).toThrowError(new Error('doctor bonus greater than 1000'));
          });
        }
      });
    });
    describe('gives correct bonus to all the nurses', () => {
      describe('gives correct bonus to nurses with less than 10 years of experience', () => {
        for (let i = 0; i < 10; i++) {
          it('return 200 * 1.2 = 240 for less than 10y exp', () => {
            expect(solution({ profession: 'nurse', experience: i }, 200)).toBe(
              240,
            );
          });
          it('return 400 * 1.2 = 480 for less than 10y exp', () => {
            expect(solution({ profession: 'nurse', experience: i }, 400)).toBe(
              480,
            );
          });
          it('return 600 * 1.2 = ERROR for less than 10y exp', () => {
            expect(() => solution({ profession: 'nurse', experience: i }, 600)).toThrowError(new Error('nurse bonus greater than 500'));
          });
        }
      });
      describe('gives correct bonus to nurses 10 to 14 years of exp', () => {
        for (let i = 10; i < 15; i++) {
          it('200 * 1.3 = 260', () => {
            expect(solution({ profession: 'nurse', experience: i }, 200)).toBe(
              260,
            );
          });
          it('400 * 1.3 = ERROR', () => { expect(() => solution({ profession: 'nurse', experience: i }, 400)).toThrowError(new Error('nurse bonus greater than 500')); });
          it('600 * 1.3 = ERROR', () => { expect(() => solution({ profession: 'nurse', experience: i }, 600)).toThrowError(new Error('nurse bonus greater than 500')); });
        }
      });
      describe('gives correct bonus to nurses with 15 to 19 years of exp', () => {
        for (let i = 15; i < 20; i++) {
          it('200 * 1.5 = 300', () => { expect(solution({ profession: 'nurse', experience: i }, 200)).toBe(300); });
          it('400 * 1.5 = ERROR', () => {
            expect(() => solution({ profession: 'nurse', experience: i }, 400)).toThrowError(new Error('nurse bonus greater than 500'));
          });
          it('600 * 1.5 = ERROR', () => { expect(() => solution({ profession: 'nurse', experience: i }, 600)).toThrowError(new Error('nurse bonus greater than 500')); });
        }
      });
      describe('gives correct bonus to nurses with 20 or more years of exp upto 55y', () => {
        for (let i = 20; i <= 55; i++) {
          it('200 * 1.7 = 340', () => {
            expect(solution({ profession: 'nurse', experience: i }, 200)).toBe(
              340,
            );
          });
          it('400 * 1.7 = ERROR', () => { expect(() => solution({ profession: 'nurse', experience: i }, 400)).toThrowError(new Error('nurse bonus greater than 500')); });
          it('600 * 1.7 = ERROR', () => { expect(() => solution({ profession: 'nurse', experience: i }, 600)).toThrowError(new Error('nurse bonus greater than 500')); });
        }
      });
    });
    describe('gives 0 bonus to all other professions', () => {
      for (let i = 0; i <= 55; i++) {
        it('returns 0 at all experience levels for janitors with premium 200', () => {
          expect(solution({ profession: 'janitor', experience: i }, 200)).toBe(
            0,
          );
        });
        it('returns 0 at all experience levels for janitors with premium 400', () => {
          expect(solution({ profession: 'janitor', experience: i }, 400)).toBe(
            0,
          );
        });
        it('returns 0 at all experience levels for janitors with premium 600', () => {
          expect(solution({ profession: 'janitor', experience: i }, 600)).toBe(
            0,
          );
        });
      }
    });
    describe('gives 0 bonus if premium is not passed and is be default 0', () => {
      it('returns 0 for profession doctor if no premium is passed', () => {
        expect(solution({ profession: 'doctor' })).toBe(0);
      });
    });
  });
}
