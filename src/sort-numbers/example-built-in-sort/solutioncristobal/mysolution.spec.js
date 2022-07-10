// #todo

'use strict';

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
    
/**
 * Calculate the premium for healthcareworkers
 *
 * @param {object} - The healthcareworker object that is passed to the function
 * @param {number} - The base premium
 * @return {number} The premium rounded down to an integer~
 */

// =============== your solutions will go here ===============

const bonusCovid = (employee = {}, baseSalary) => {
  let premium = 0;
  const choicesSet = [
    {
      profession: 'doctor',
      tenure: [10, 20, 55],
      bonusMultiplier: [1.5, 2, 3],
    },
    {
      profession: 'nurse',
      tenure: [10, 15, 20],
      bonusMultiplier: [1.2, 1.3, 1.5, 1.7],
    },
  ];

  if (employee.profession === 'doctor') {
    if (employee.tenure >= 20) {
      premium = baseSalary * 3;
    } else if (employee.tenure >= 10) {
      premium = baseSalary * 2;
    } else if (employee.tenure < 10) {
      premium = baseSalary * 1.5;
    }

    if (premium > 1000) {
      throw new Error('Error! Chek with your supervisor');
    }
  }

  if (employee.profession === 'nurse') {
    if (employee.tenure >= 20) {
      premium = baseSalary * 1.7;
    } else if (employee.tenure >= 15) {
      premium = baseSalary * 1.5;
    } else if (employee.tenure >= 10) {
      premium = baseSalary * 1.3;
    } else if (employee.tenure < 10) {
      premium = baseSalary * 1.2;
    }

    if (premium > 500) {
      throw new Error('Error! Chek with your supervisor');
    }
  }
  return Math.round(premium);
};

// =============== test cases for this challenge ===============

describe(bonusCovid.name + ': _', () => {
  describe('bonus for doctors', () => {
    describe('When the baseSalary is 200', () => {
      it('The bonus should be multiplied by x 1.5 when the doctor has less than 10 years of experience', () => {
        expect(bonusCovid({ profession: 'doctor', tenure: 8 }, 200)).toBe(300);
      });
      it('The bonus should be multiplied by 2 when the doctor has  more than 10 years of experience', () => {
        expect(bonusCovid({ profession: 'doctor', tenure: 11 }, 200)).toBe(400);
      });
      it('The bonus should be multiplied by 3 when the doctor has more than 20 years of experience', () => {
        expect(bonusCovid({ profession: 'doctor', tenure: 20 }, 200)).toBe(600);
      });
    });
  });
});

describe(bonusCovid.name + ': _', () => {
  describe('bonus for nurses', () => {
    describe('When the baseSalary is 200', () => {
      it('The bonus should be multiplied by x 1.2 when the nurse has less than 10 years of experience', () => {
        expect(bonusCovid({ profession: 'nurse', tenure: 8 }, 200)).toBe(240);
      });
      it('The bonus should be multiplied by x 1.3 when the nurse has more than 10 year experience', () => {
        expect(bonusCovid({ profession: 'nurse', tenure: 11 }, 200)).toBe(260);
      });
      it('The bonus should be multiplied by x 1.5 when the nurse has more than 15 year experience', () => {
        expect(bonusCovid({ profession: 'nurse', tenure: 15 }, 200)).toBe(300);
      });
      it('The bonus should be multiplied by x 1.7 when the nurse has more than 20 year experience', () => {
        expect(bonusCovid({ profession: 'nurse', tenure: 20 }, 200)).toBe(340);
      });
    });
  });
});

describe(bonusCovid.name + ': _', () => {
  describe('bonus for doctors', () => {
    describe('When the baseSalary is 300', () => {
      it('The bonus should be multiplied by x 1.5 when the doctor has less than 10 years of experience', () => {
        expect(bonusCovid({ profession: 'doctor', tenure: 8 }, 300)).toBe(450);
      });
      it('The bonus should be multiplied by 2 when the doctor has  more than 10 years of experience', () => {
        expect(bonusCovid({ profession: 'doctor', tenure: 11 }, 300)).toBe(600);
      });
      it('The bonus should be multiplied by 3 when the doctor has more than 20 years of experience', () => {
        expect(bonusCovid({ profession: 'doctor', tenure: 20 }, 300)).toBe(900);
      });
    });
  });
});

describe(bonusCovid.name + ': _', () => {
  describe('bonus for nurses', () => {
    describe('When the baseSalary is 300', () => {
      it('The bonus should be multiplied by x 1.2 when the nurse has less than 10 years of experience', () => {
        expect(bonusCovid({ profession: 'nurse', tenure: 8 }, 300)).toBe(360);
      });
      it('The bonus should be multiplied by x 1.3 when the nurse has more than 10 year experience', () => {
        expect(bonusCovid({ profession: 'nurse', tenure: 11 }, 300)).toBe(390);
      });
      it('The bonus should be multiplied by x 1.5 when the nurse has more than 15 year experience', () => {
        expect(bonusCovid({ profession: 'nurse', tenure: 15 }, 300)).toBe(450);
      });
      it('The bonus should be multiplied by x 1.7 when the nurse has more than 20 year experience', () => {
        expect(bonusCovid({ profession: 'nurse', tenure: 19 }, 300)).toBe(450);
      });
    });
  });
});

describe(bonusCovid.name + ': _', () => {
  describe('bonus for doctor', () => {
    describe('', () => {
      it('Throw error when salary is above 1000', () => {
        expect(() =>
          bonusCovid({ profession: 'doctor', tenure: 20 }, 500),
        ).toThrowError();
      });
    });
  });
});

describe(bonusCovid.name + ': _', () => {
  describe('bonus for nurses', () => {
    describe('', () => {
      it('Throw error when salary is above 500', () => {
        expect(() =>
          bonusCovid({ profession: 'nurse', tenure: 20 }, 500),
        ).toThrowError();
      });
    });
  });
});
