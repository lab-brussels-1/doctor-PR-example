// #todo

/* 0. Starter Code

*/

// =============== JSDoc description of the challenge ===============
/**
* The government is issuing corona money to healthcareworkers
* The actual premium has not been decided yet
* For doctors, the rules are as following:
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
* Any other profession should not get a premium (but no error should be thrown)
*
* {
    profession: "nurse" | "doctor" | "therapist" | "psychologist" ,
    experience: 11
}
*/

/**
 * Calculate the premium for healthcareworkers
 *
 * @param {object} - The healthcareworker object that is passed to the function
 * @param {number} - The base premium
 * @return {number} The premium rounded down to an integer~
 */

// =============== your solutions will go here ===============

// =============== a for-of loop to control which solution(s) are tested ===============

// eslint-disable-next-line sonarjs/cognitive-complexity
const solution = (employee = {}, premium) => {
  let result = 0;

  if (employee.profession === 'doctor') {
    if (employee.experience < 10) {
      result = premium * 1.5;
    } else if (employee.experience >= 10 && employee.experience < 20) {
      result = premium * 2;
    } else if (employee.experience >= 20) {
      result = premium * 3;
    }

    if (result > 1000) {
      throw new Error('Amount is more then 1000');
    }
  }

  if (employee.profession === 'nurse') {
    if (employee.experience < 10) {
      result = premium * 1.2;
    } else if (employee.experience >= 10 && employee.experience < 15) {
      result = premium * 1.3;
    } else if (employee.experience >= 15 && employee.experience < 20) {
      result = premium * 1.5;
    } else if (employee.experience >= 20) {
      result = premium * 1.7;
    }

    if (result > 500) {
      throw new Error('Amount is more then 500');
    }
  }
  return result;
};

// =============== test cases for this challenge ===============/

describe(`${solution.name}: _`, () => {
  describe('When the premium is 200 for doctors', () => {
    for (let i = 0; i < 10; i++) {
      it('Should multiply by x 1.5 when she has less than 10 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 8 }, 200)).toBe(
          300,
        );
      });
    }
    for (let i = 10; i < 20; i++) {
      it('Should multiply by x 2 when she has more than 10 year experience and less than 20 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 14 }, 200)).toBe(
          400,
        );
      });
    }
    for (let i = 20; i <= 55; i++) {
      it('Should multiply by x 3 when she has more than 20 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 20 }, 200)).toBe(
          600,
        );
      });
    }
  });
});

describe(`${solution.name}: _`, () => {
  describe('When the premium is 200 for nurses', () => {
    for (let i = 0; i < 10; i++) {
      it('Should multiply by x1.2 when she has less than 10 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 8 }, 200)).toBe(240);
      });
    }
    for (let i = 10; i < 15; i++) {
      it('Should multiply by x1.3 when she has more than 10 year experience and less than 15 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 11 }, 200)).toBe(
          260,
        );
      });
    }
    for (let i = 15; i < 20; i++) {
      it('Should multiply by x1.5 when she has more than 15 year experience and less than 20 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 16 }, 200)).toBe(
          300,
        );
      });
    }
    for (let i = 20; i <= 55; i++) {
      it('Should multiply by x1.7 when she has more than 20 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 20 }, 200)).toBe(
          340,
        );
      });
    }
  });
});

describe(`${solution.name}: _`, () => {
  describe('When the premium is 300 for doctors', () => {
    for (let i = 0; i < 10; i++) {
      it('Should multiply by x 1.5 when she has less than 10 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 8 }, 300)).toBe(
          450,
        );
      });
    }
    for (let i = 10; i < 20; i++) {
      it('Should multiply by x 2 when she has more than 10 year experience and less than 20 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 11 }, 300)).toBe(
          600,
        );
      });
    }
    for (let i = 20; i <= 55; i++) {
      it('Should multiply by x 3 when she has more than 20 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 20 }, 300)).toBe(
          900,
        );
      });
    }
  });
});

describe(`${solution.name}: _`, () => {
  describe('When the premium is 300 for nurses', () => {
    for (let i = 0; i < 10; i++) {
      it('Should multiply by x1.2 when she has less than 10 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 8 }, 300)).toBe(360);
      });
    }
    for (let i = 10; i < 15; i++) {
      it('Should multiply by x1.3 when she has more than 10 year experience and less than 15 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 11 }, 300)).toBe(
          390,
        );
      });
    }
    for (let i = 15; i < 20; i++) {
      it('Should multiply by x1.5 when she has more than 15 year experience and less than 20 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 15 }, 300)).toBe(
          450,
        );
      });
    }
    for (let i = 20; i <= 55; i++) {
      it('Should multiply by x1.7 when she has more than 20 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 19 }, 300)).toBe(
          450,
        );
      });
    }
  });
});

describe(`${solution.name}: _`, () => {
  describe('When the premium is 500 for doctors', () => {
    for (let i = 0; i < 10; i++) {
      it('Should multiply by x 1.5 when she has less than 10 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 8 }, 500)).toBe(
          750,
        );
      });
    }
    for (let i = 10; i < 20; i++) {
      it('Should multiply by x 2 when she has more than 10 year experience and less than 20 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 11 }, 500)).toBe(
          1000,
        );
      });
    }
    for (let i = 20; i <= 55; i++) {
      it('Should multiply by x 3 when she has more than 20 year experience', () => {
        expect(() =>
          solution({ profession: 'doctor', experience: 20 }, 500),
        ).toThrowError();
      });
    }
  });
});

describe(`${solution.name}: _`, () => {
  describe('When the premium is 500 for nurses', () => {
    for (let i = 0; i < 10; i++) {
      it('Should multiply by x1.2 when she has less than 10 year experience', () => {
        expect(() =>
          solution({ profession: 'nurse', experience: 8 }, 500),
        ).toThrowError();
      });
    }
    for (let i = 10; i < 15; i++) {
      it('Should multiply by x1.3 when she has more than 10 year experience and less than 15 year experience', () => {
        expect(() =>
          solution({ profession: 'nurse', experience: 11 }, 500),
        ).toThrowError();
      });
    }
    for (let i = 15; i < 20; i++) {
      it('Should multiply by x1.5 when she has more than 15 year experience and less than 20 year experience', () => {
        expect(() =>
          solution({ profession: 'nurse', experience: 15 }, 500),
        ).toThrowError();
      });
    }
    for (let i = 20; i <= 55; i++) {
      it('Should multiply by x1.7 when she has more than 20 year experience', () => {
        expect(() =>
          solution({ profession: 'nurse', experience: 20 }, 500),
        ).toThrowError();
      });
    }
  });
});

describe(`${solution.name}: _`, () => {
  describe('When the premium is 200 for psychologist', () => {
    for (let i = 0; i <= 55; i++) {
      it('Should zero premium for psychologist profession', () => {
        expect(
          solution({ profession: 'psychologist', experience: 11 }, 200),
        ).toBe(0);
      });
      it('Should zero premium for psychologist profession', () => {
        expect(
          solution({ profession: 'psychologist', experience: 15 }, 200),
        ).toBe(0);
      });
      it('Should zero premium for psychologist profession', () => {
        expect(
          solution({ profession: 'psychologist', experience: 20 }, 200),
        ).toBe(0);
      });
    }
  });
});

describe(`${solution.name}: _`, () => {
  describe('When the premium is 300 for psychologist', () => {
    for (let i = 0; i <= 55; i++) {
      it('Should zero premium for psychologist profession', () => {
        expect(
          solution({ profession: 'psychologist', experience: 9 }, 300),
        ).toBe(0);
      });
      it('Should zero premium for psychologist profession', () => {
        expect(
          solution({ profession: 'psychologist', experience: 15 }, 300),
        ).toBe(0);
      });
      it('Should zero premium for psychologist profession', () => {
        expect(
          solution({ profession: 'psychologist', experience: 20 }, 300),
        ).toBe(0);
      });
    }
  });
});

describe(`${solution.name}: _`, () => {
  describe('When the premium is 500 for psychologist', () => {
    it('Should zero premium for psychologist profession', () => {
      expect(
        solution({ profession: 'psychologist', experience: 15 }, 500),
      ).toBe(0);
    });
    // eslint-disable-next-line sonarjs/no-identical-functions
    it('Should zero premium for psychologist profession', () => {
      expect(
        solution({ profession: 'psychologist', experience: 15 }, 500),
      ).toBe(0);
    });
    it('Should zero premium for psychologist profession', () => {
      expect(
        solution({ profession: 'psychologist', experience: 20 }, 500),
      ).toBe(0);
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('When the premium is 200 for therapist', () => {
    it('Should zero premium for therapist profession', () => {
      expect(solution({ profession: 'therapist', experience: 8 }, 200)).toBe(0);
    });
    it('Should zero premium for therapist profession', () => {
      expect(solution({ profession: 'therapist', experience: 11 }, 200)).toBe(
        0,
      );
    });
    it('Should zero premium for therapist profession', () => {
      expect(solution({ profession: 'therapist', experience: 20 }, 200)).toBe(
        0,
      );
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('When the premium is 300 for therapist', () => {
    it('Should zero premium for therapist profession', () => {
      expect(solution({ profession: 'therapist', experience: 8 }, 300)).toBe(0);
    });
    it('Should zero premium for therapist profession', () => {
      expect(solution({ profession: 'therapist', experience: 11 }, 300)).toBe(
        0,
      );
    });
    it('Should zero premium for therapist profession', () => {
      expect(solution({ profession: 'therapist', experience: 20 }, 300)).toBe(
        0,
      );
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('When the premium is 500 for therapist', () => {
    it('Should zero premium for therapist profession',
      () => {
        expect((solution({ profession: 'therapist', experience: 8 }, 500))).toBe(0);
      });
    it('Should zero premium for therapist profession',
      () => {
        expect((solution({ profession: 'therapist', experience: 11 }, 500))).toBe(0);
      });
    it('Should zero premium for therapist profession',
      () => {
        expect((solution({ profession: 'therapist', experience: 20 }, 500))).toBe(0);
      });
  });
});

// // =============== a minified solution you can use to test your test cases ===============

// prettier-ignore
