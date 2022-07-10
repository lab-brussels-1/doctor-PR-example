/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-undef */
// #todo

/* 0. Starter Code

*/

// =============== JSDoc description of the challenge ===============
/**
 * The government is issuing corona money to healthcareworkers
 * The actual premium has not been decided yet
 * For doctors, the rules are as following:
 * Less than 10-year experience: x1,5
 * More than 10 or equal: x2
 * More than 20 or equal: x3
 * Never more than: 1000 (throw an error)
 * For nurses:
 * Less than 10-year experience: x1,2
 * More than 10 or equal: x1,3
 * More than 15 or equal: x1,5
 * More than 20 or equal: x1,7
 * Never more than: 500 (throw an error)
 * Any other profession should not get a premium (but no error should be thrown).
 *
 * {
    profession: "nurse" | "doctor" | "therapist" | "psychologist" ,
    experience: 11
}.
 */

/** ..........
 * Calculate the premium for healthcareworkers.
 *
 * -@param {object} - The healthcareworker object that is passed to the function.
 *
 * -@param {number} - The base premium.
 *
 * -@returns {number} - The premium rounded down to an integer.
 */

// =============== your solutions will go here ===============
/**
 * @param premium
 * @param experience
 */

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [calculatePremium]) {
  // =============== test cases for this challenge ===============

  // eslint-disable-next-line no-loop-func
  describe(`${solution.name}: _`, () => {
    // Nurse when premium 20
    // eslint-disable-next-line sonarjs/no-duplicate-string
    describe('When the premium is 200', () => {
      it('Should multiply by x1,2 when she has less than 10 years experience', () => {
        expect(solution({ profession: 'nurse', experience: 8 }, 200)).toBe(240);
      });
    });
    describe('When the premium is 200', () => {
      it('Should multiply by x1,3 when she has more than 10 years or equal', () => {
        expect(solution({ profession: 'nurse', experience: 10 }, 200)).toBe(
          260,
        );
      });
    });
    describe('When the premium is 200', () => {
      it('Should multiply by x1,5 when she has more than 15 years or equal', () => {
        expect(solution({ profession: 'nurse', experience: 15 }, 200)).toBe(
          300,
        );
      });
    });
    describe('When the premium is 200', () => {
      it('Should multiply by x1,7 when she has more than 20 years or equal', () => {
        expect(solution({ profession: 'nurse', experience: 15 }, 200)).toBe(
          340,
        );
      });
    });
    describe('When the premium is 300', () => {
      it('Should multiply by x1,2 when she has less than 10 years', () => {
        expect(solution({ profession: 'nurse', experience: 8 }, 300)).toBe(360);
      });
    });
    // eslint-disable-next-line sonarjs/no-duplicate-string
    describe('when the premium is 300', () => {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      it('should multiply by x1,3 when she has more than 10 years or equal', () => {
        expect(solution({ profesion: 'nurse', experience: 10 }, 300)).toBe(390);
      });
    });
    describe('when the premium is 300', () => {
      it('should multiply by x1,5 when she has more than 15 years or equal', () => {
        expect(solution({ profesion: 'nurse', experience: 15 }, 300)).toBe(450);
      });
    });
    describe('when the premium is 300', () => {
      it('should multiply by x1,7 when she has more than 15 years or equal', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(solution({ profesion: 'nurse', experience: 20 }, 300))
          .toThrowError;
      });
    });
    // nurse, and premium 400
    describe('when the premium is 400', () => {
      it('should multiply by x1,2 when she has less than 10 years', () => {
        expect(solution({ profesion: 'nurse', experience: 8 }, 400)).toBe(480);
      });
    });
    describe('when the premium is 400', () => {
      it('should multiply by x1,3 when she has more than 10 years or equal', () => {
        expect(solution({ profesion: 'nurse', experience: 10 }, 400)).toThrow();
      });
    });
    describe('when the premium is 400', () => {
      it('should multiply by x1,5 when she has less than 15 years or equal', () => {
        expect(solution({ profesion: 'nurse', experience: 15 }, 400)).toThrow();
      });
    });
    describe('when the premium is 400', () => {
      it('should multiply by x1,7 when she has less than 20 years or equal', () => {
        expect(solution({ profesion: 'nurse', experience: 20 }, 400)).toThrow();
      });
    });
    // nurse when premium 500
    // eslint-disable-next-line sonarjs/no-duplicate-string
    describe('when the premium is 500', () => {
      it('should multiply by x1,2 when she has less than 10 years', () => {
        expect(solution({ profesion: 'nurse', experience: 8 }, 500)).toThrow();
      });
    });
    describe('when the premium is 500', () => {
      it('should multiply by x1,3 when she has more than 10 years or equal', () => {
        expect(solution({ profesion: 'nurse', experience: 10 }, 500)).toThrow();
      });
    });
    describe('when the premium is 500', () => {
      it('should multiply by x1,5 when she has more than 15 years or equal', () => {
        expect(solution({ profesion: 'nurse', experience: 15 }, 500)).toThrow();
      });
    });
    describe('when the premium is 500', () => {
      it('should multiply by x1,7 when she has more than 20 years or equal', () => {
        expect(solution({ profesion: 'nurse', experience: 20 }, 500)).toThrow();
      });
    });
    // doctor when premium 200
    describe('when the premium is 200', () => {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      it('should multiply by x1,5 when he has less than 10 years', () => {
        expect(solution({ profesion: 'doctor', experience: 8 }, 200)).toBe(300);
      });
    });
    describe('when the premium is 200', () => {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      it('should multiply by x2 when he has more than 10 years or equal', () => {
        expect(solution({ profesion: 'doctor', experience: 10 }, 200)).toBe(
          400,
        );
      });
    });
    describe('when the premium is 200', () => {
      it('should multiply by x3 when he has more than 20 years or equal', () => {
        expect(solution({ profesion: 'doctor', experience: 20 }, 200)).toBe(
          600,
        );
      });
    });
    // when doctor premium is 300
    describe('when the premium is 300', () => {
      it('should multiply by x1,5 when he has less than 10 years', () => {
        expect(solution({ profesion: 'doctor', experience: 8 }, 300)).toBe(450);
      });
    });
    describe('when the premium is 300', () => {
      it('should multiply by x2 when he has more than 10 years or equal', () => {
        expect(solution({ profesion: 'doctor', experience: 10 }, 300)).toBe(
          600,
        );
      });
    });
    describe('when the premium is 200', () => {
      it('should multiply by x3 when he has more than 20 years or equal', () => {
        expect(solution({ profesion: 'doctor', experience: 20 }, 300)).toBe(
          900,
        );
      });
    });
    // when doctor premium is 500
    describe('when the premium is 500', () => {
      it('should multiply by x1,5 when he has less than 10 years', () => {
        expect(solution({ profesion: 'doctor', experience: 8 }, 500)).toBe(750);
      });
    });
    describe('when the premium is 500', () => {
      it('should multiply by x2 when he has more than 10 years or equal', () => {
        expect(solution({ profesion: 'doctor', experience: 10 }, 500)).toBe(
          1000,
        );
      });
    });
    describe('when the premium is 500', () => {
      it('should multiply by x3 when he has more than 20 years or equal', () => {
        expect(
          solution({ profesion: 'doctor', experience: 20 }, 500),
        ).toThrow();
      });
    });
  });
}

// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore``
