/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-undef */
// #todo

/* 0. Starter Code
 */

// =============== JSDoc description of the challenge ===============
/** ..................
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
 * Any other profession should not get a premium (but no error should be thrown).
 *
 * {
    profession: "nurse" | "doctor" | "therapist" | "psychologist" ,
    experience: 11
}.

/**
 * Calculate the premium for healthcareworkers
 *
 * @param {object} - The healthcareworker object that is passed to the function
 * @param {number} - The base premium
 * @return {number} The premium rounded down to an integer~
 */

// =============== your solutions will go here ===============

const solution = (healthCareWorker = {}, percentage) => {
  // const employee = [{
  //       profession: 'doctor',
  //       experience: [10, 20, 55],
  //       premiumPer: [1.5, 2, 3]
  //     },
  //     {
  //       profession: 'nurse',
  //       experience: [10, 15, 20],
  //       premiumPer: [1.2, 1.3, 1.5, 1.7]

  //     },
  //     {
  //     profession: 'therapist',
  //     experience: [10, 15, 20],
  //     premiumPer: [0, 0, 0, 0]
  //   },
  //   {
  //     profession: 'psychologist',
  //     experience: [10, 15, 20],
  //     premiumPer: [0, 0, 0, 0]
  //   }
  //   ];

  let premium = 0;

  if (healthCareWorker.profession === 'doctor') {
    if (healthCareWorker.experience >= 20) {
      premium = percentage * 3;
    } else if (healthCareWorker.experience >= 10) {
      premium = percentage * 2;
    } else if (healthCareWorker.experience < 10) {
      premium = percentage * 1.5;
    }

    if (premium > 1000) {
      throw new Error('Premium is more then 1000');
    }
  }

  if (healthCareWorker.profession === 'nurse') {
    if (healthCareWorker.experience >= 20) {
      premium = percentage * 1.7;
    } else if (healthCareWorker.experience >= 15) {
      premium = percentage * 1.5;
    } else if (healthCareWorker.experience >= 10) {
      premium = percentage * 1.3;
    } else if (healthCareWorker.experience < 10) {
      premium = percentage * 1.2;
    }

    if (premium > 500) {
      throw new Error('Premium is more then 500');
    }
  }
  return premium;
};

// ==================== Testing ==============================

// ================= Base on 200 Euro ======================

describe(`${solution.name}: _`, () => {
  describe('premium for doctors', () => {
    describe('When the premium is 200', () => {
      it('Should multiply by x 1.5 when she has less than 10 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 8 }, 200)).toBe(
          300,
        );
      });
      it('Should multiply by x 2 when she has more than 10 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 11 }, 200)).toBe(
          400,
        );
      });
      it('Should multiply by x 3 when she has more than 20 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 20 }, 200)).toBe(
          600,
        );
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for nurses', () => {
    describe('When the premium is 200', () => {
      it('Should multiply by x1.2 when she has less than 10 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 8 }, 200)).toBe(240);
      });
      it('Should multiply by x1.3 when she has more than 10 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 11 }, 200)).toBe(
          260,
        );
      });
      it('Should multiply by x1.5 when she has more than 15 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 15 }, 200)).toBe(
          300,
        );
      });
      it('Should multiply by x1.7 when she has more than 20 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 20 }, 200)).toBe(
          340,
        );
      });
    });
  });
});

// ================== base on 300 Euro ========================

describe(`${solution.name}: _`, () => {
  describe('premium for doctors', () => {
    describe('When the premium is 300', () => {
      it('Should multiply by x 1.5 when she has less than 10 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 8 }, 300)).toBe(
          450,
        );
      });
      it('Should multiply by x 2 when she has more than 10 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 11 }, 300)).toBe(
          600,
        );
      });
      it('Should multiply by x 3 when she has more than 20 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 20 }, 300)).toBe(
          900,
        );
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for nurses', () => {
    describe('When the premium is 300', () => {
      it('Should multiply by x1.2 when she has less than 10 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 8 }, 300)).toBe(360);
      });
      it('Should multiply by x1.3 when she has more than 10 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 11 }, 300)).toBe(
          390,
        );
      });
      it('Should multiply by x1.5 when she has more than 15 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 15 }, 300)).toBe(
          450,
        );
      });
      it('Should multiply by x1.7 when she has more than 20 year experience', () => {
        expect(solution({ profession: 'nurse', experience: 19 }, 300)).toBe(
          450,
        );
      });
    });
  });
});

// ========================== Base on 500 Euro =================================

describe(`${solution.name}: _`, () => {
  describe('premium for doctors', () => {
    describe('When the premium is 500', () => {
      it('Should multiply by x 1.5 when she has less than 10 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 8 }, 500)).toBe(
          750,
        );
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for nurses', () => {
    describe('When the premium is 500', () => {
      it('Should multiply by x 2 when she has more than 10 year experience', () => {
        expect(solution({ profession: 'doctor', experience: 11 }, 500)).toBe(
          1000,
        );
      });
    });
  });
});

// ========== Other profession like psychologist and therapist =====================

describe(`${solution.name}: _`, () => {
  describe('premium for psychologist', () => {
    describe('When the premium is 200', () => {
      it('Should zero premium for psychologist profession', () => {
        expect(
          solution({ profession: 'psychologist', experience: 11 }, 200),
        ).toBe(0);
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for psychologist', () => {
    describe('When the premium is 300', () => {
      it('Should zero premium for psychologist profession', () => {
        expect(
          solution({ profession: 'psychologist', experience: 9 }, 300),
        ).toBe(0);
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for psychologist', () => {
    describe('When the premium is 500', () => {
      it('Should zero premium for psychologist profession', () => {
        expect(
          solution({ profession: 'psychologist', experience: 15 }, 500),
        ).toBe(0);
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for psychologist', () => {
    describe('When the premium is 500', () => {
      it('Should zero premium for psychologist profession', () => {
        expect(
          solution({ profession: 'psychologist', experience: 20 }, 500),
        ).toBe(0);
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for therapist', () => {
    describe('When the premium is 200', () => {
      it('Should zero premium for therapist profession', () => {
        expect(solution({ profession: 'therapist', experience: 8 }, 200)).toBe(
          0,
        );
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for therapist', () => {
    describe('When the premium is 300', () => {
      it('Should zero premium for therapist profession', () => {
        expect(solution({ profession: 'therapist', experience: 11 }, 300)).toBe(
          0,
        );
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for therapist', () => {
    describe('When the premium is 500', () => {
      it('Should zero premium for therapist profession', () => {
        expect(solution({ profession: 'therapist', experience: 11 }, 500)).toBe(
          0,
        );
      });
    });
  });
});

// ============================ Error testing =============================

describe(`${solution.name}: _`, () => {
  describe('premium for nurses', () => {
    describe('When the premium is 500', () => {
      it('Should multiply by x 3 when she has 20 year experience, if premium more then 500 throw error', () => {
        expect(() =>
          solution({ profession: 'doctor', experience: 20 }, 500),
        ).toThrowError();
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for nurses', () => {
    describe('When the premium is 500', () => {
      it('Should multiply by x1.7 when she has less than 10 year experience, if premium more then 500 throw error', () => {
        expect(() =>
          solution({ profession: 'doctor', experience: 20 }, 500),
        ).toThrowError();
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for nurses', () => {
    describe('When the premium is 500', () => {
      it('Should multiply by x1.2 when she has less than 10 year experience, if premium more then 500 throw error', () => {
        expect(() =>
          solution({ profession: 'nurse', experience: 8 }, 500),
        ).toThrowError();
      });
    });
  });
});
