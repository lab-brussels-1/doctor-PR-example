/* eslint-disable jsdoc/check-indentation */
// #todo

// 'use strict';

/* 0. Starter Code

*/

// =============== JSDoc description of the challenge ===============
/**
 * The government is issuing corona money to healthcare workers
 * The actual premium has not been decided yet
 * For doctors, the rules are as following:
 * eslint-disable-next-line jsdoc/check-indentation
 *  Less than 10-year experience: x1,5
 *  More than 10 or equal: x2
 *  More than 20 or equal: x3
 *  Never more than: 1000 (throw an error)
 * For nurses:
 *  Less than 10-year experience: x1,2
 *  More than 10 or equal: x1,3
 *  More than 15 or equal: x1,5
 *  More than 20 or equal: x1,7
 *  Never more than: 500 (throw an error)
 * Any other profession should not get a premium (but no error should be thrown).
 *
 * {
    profession: "nurse" | "doctor" | "therapist" | "psychologist" ,
    experience: 11
}.
 */

// eslint-disable-next-line no-unused-vars
const dataBase = {
  profession: ['nurse', 'doctor', 'therapist', 'psychologist'],
};

// =============== your solutions will go here ===============
const calculatePremium = (employee = {}, premium = 0) => {
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
};

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [calculatePremium]) {
  // =============== test cases for this challenge ===============
  describe(`${solution.name}: Calculate the bonus amount`, () => {
    describe('Calculate the bonus for all doctors', () => {
      describe('Calculate the bonus amount for doctors with lees than 10 years experience', () => {
        for (let i = 0; i < 10; i++) {
          it('If experience less than 10 years its should multiply by x1,5, if bonus = 200 x 1,5 = 300', () => {
            expect(solution({ profession: 'doctor', experience: i }, 200)).toBe(
              300,
            );
          });
          it('If experience less than 10 years its should multiply by x1,5, if bonus = 400 x 1,5 = 600 ', () => {
            expect(solution({ profession: 'doctor', experience: i }, 400)).toBe(
              600,
            );
          });
          it('If experience less than 10 years its should multiply by x1,5, if bonus = 600 x 1,5 = 900', () => {
            expect(solution({ profession: 'doctor', experience: i }, 600)).toBe(
              900,
            );
          });
        }
      });
    });
    describe('Calculate correct bonus for a doctors with experience more than 10 years', () => {
      for (let i = 10; i < 20; i++) {
        it('If experience more than 10 years its should multiply by x 2, if bonus = 200 x 2 = 400', () => {
          expect(solution({ profession: 'doctor', experience: i }, 200)).toBe(
            400,
          );
        });
        it('If experience more than 10 years its should multiply by x 2, if bonus = 400 x 2 = 800', () => {
          expect(solution({ profession: 'doctor', experience: i }, 400)).toBe(
            800,
          );
        });
        it('If bonus 600 x 2 = 1200 --> Throw an error bonus never can be more than: 1000', () => {
          expect(() => solution({ profession: 'doctor', experience: i }, 600)).toThrowError(new Error('doctor bonus greater than 1000'));
        });
      }
    });
    describe('Calculate correct bonus for a doctors with experience more than 20 years till 55 years of experience', () => {
      for (let i = 20; i <= 55; i++) {
        it('If experience more than 10 years its should multiply by x 3, if bonus = 200x 3 = 600', () => {
          expect(solution({ profession: 'doctor', experience: i }, 200)).toBe(
            600,
          );
        });
        it('If bonus 400 x 3 = 1200 --> Throw an error bonus never can be more than: 1000', () => {
          expect(() => solution({ profession: 'doctor', experience: i }, 400)).toThrowError(new Error('doctor bonus greater than 1000'));
        });
        it('If bonus 600 x 3 = 1800 --> Throw an error bonus never can be more than: 1000', () => {
          expect(() => solution({ profession: 'doctor', experience: i }, 600)).toThrowError(new Error('doctor bonus greater than 1000'));
        });
      }
    });
    describe('Calculate correct bonus for all nurses with experience less than 10 years', () => {
      for (let i = 0; i < 10; i++) {
        it('If experience less than 10 years its should multiply by x 1,2, if bonus = 200 x 1,2 = 240', () => {
          expect(solution({ profession: 'nurse', experience: i }, 200)).toBe(
            240,
          );
        });
        it('If experience less than 10 years its should multiply by x 1,2, if bonus = 300x 1,2 = 480', () => {
          expect(solution({ profession: 'nurse', experience: i }, 400)).toBe(
            480,
          );
        });
        it('If bonus 600 x 1,2 = 720 --> Throw an error nurse bonus never can be more than: 500', () => {
          expect(() => solution({ profession: 'nurse', experience: i }, 600)).toThrowError(new Error('nurse bonus greater than 500'));
        });
      }
    });
    describe('Calculate correct bonus for all nurses with experience 10 to 14 years', () => {
      for (let i = 10; i < 15; i++) {
        it('If experience more than 10 years its should multiply by x 1,3, if bonus = 200 x 1,3 = 260', () => {
          expect(solution({ profession: 'nurse', experience: i }, 200)).toBe(260);
        });
        it('If bonus 400 x 1,3 = 520 --> Throw an error nurse bonus never can be more than: 500', () => {
          expect(() => solution({ profession: 'nurse', experience: i }, 400)).toThrowError(new Error('nurse bonus greater than 500'));
        });
        it('If bonus 600 x 1,3 = 780 --> Throw an error nurse bonus never can be more than: 500', () => {
          expect(() => solution({ profession: 'nurse', experience: i }, 600)).toThrowError(new Error('nurse bonus greater than 500'));
        });
      }
    });
    describe('Calculate correct bonus for all nurses with experience 15 to 19 years', () => {
      for (let i = 15; i < 20; i++) {
        it('If experience more than 15 years its should multiply by x 1.5, if bonus = 200 x 1.5 = 300', () => {
          expect(solution({ profession: 'nurse', experience: i }, 200)).toBe(300);
        });
        it('If bonus 400 x 1.5 = 600 --> Throw an error nurse bonus never can be more than: 500', () => {
          expect(() => solution({ profession: 'nurse', experience: i }, 400)).toThrowError(new Error('nurse bonus greater than 500'));
        });
        it('If bonus 600 x 1.5 = 900 --> Throw an error nurse bonus never can be more than: 500', () => {
          expect(() => solution({ profession: 'nurse', experience: i }, 600)).toThrowError(new Error('nurse bonus greater than 500'));
        });
      }
    });
    describe('Calculate correct bonus for all nurses with experience more than 20 till 55 years', () => {
      for (let i = 20; i <= 55; i++) {
        // eslint-disable-next-line sonarjs/no-identical-functions
        it('If experience more than 15 years its should multiply by x 1.7, if bonus = 200 x 1.7 = 340', () => {
          expect(solution({ profession: 'nurse', experience: i }, 200)).toBe(
            340,
          );
        });
        it('If bonus 400 x 1.7 = 680 --> Throw an error nurse bonus never can be more than: 500', () => {
          expect(() => solution({ profession: 'nurse', experience: i }, 400)).toThrowError(new Error('nurse bonus greater than 500'));
        });
        it('If bonus 600 x 1.7 = 1020 --> Throw an error nurse bonus never can be more than: 500', () => {
          expect(() => solution({ profession: 'nurse', experience: i }, 600)).toThrowError(new Error('nurse bonus greater than 500'));
        });
      }
    });
  });
}
