// #todo

'use strict';

/* 0. Starter Code

*/

// =============== JSDoc description of the challenge ===============
/**

* The government is issuing corona money to healthcareworkers.
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
* Any other profession should not get a premium (but no error should be thrown)
*
* {
    profession: 'nurse' | 'doctor' | "therapist" | "psychologist" ,
    experience: 11
}
*/

/**

* Calculate the premium for healthcareworkers.
* -@param {object} - The healthcareworker object that is passed to the function
* -@param {number} - The base premium
* -@returns {number} The premium rounded down to an integer~
*
*/

// =============== your solutions will go here ===============

const solution = (healthCareWorker = {}, basePremium) => {
  let premium;
  const employees = [
    {
      profession: 'doctor',
      experience: [10, 20, 30],
    },
    {
      profession: 'nurse',
      experience: [10, 15, 20, 30],
    },
  ];

  if (healthCareWorker.profession === 'doctor') {
    // check years of experience and calculate premium
    if (healthCareWorker.experience < 10) {
      premium = basePremium * 1.5;
    } else if (healthCareWorker.experience < 20) {
      premium = basePremium * 2;
    } else {
      premium = basePremium * 3;
    }
    if (premium > 1000) {
      throw new Error('premium can not exceed 1000');
    }
  } else if (healthCareWorker.profession === 'nurse') {
    // check years of experience and calculate premium
    if (healthCareWorker.experience >= 20) {
      premium = basePremium * 1.7;
    } else if (healthCareWorker.experience >= 15) {
      premium = basePremium * 1.5;
    } else if (healthCareWorker.experience >= 10) {
      premium = basePremium * 1.3;
    } else if (healthCareWorker.experience < 10) {
      premium = basePremium * 1.2;
      if (premium > 500) {
        throw new Error('premium can not exceed 500');
      }
    }
    // for therapists and psychologists
  } else {
    premium = basePremium;
  }
  return premium;
};

// =============== a for-of loop to control which solution(s) are tested ===============

// =============== test cases for this challenge ===============

describe(solution.name + ': _', () => {
  describe('When the premium is 100', () => {
    it('Should multiply by x 1.5 when s/he has less than 10 year experience', () => {
      expect((solution({ profession: 'doctor', experience: 8 }, 100))).toBe(150)});
    it('Should multiply by x2 when s/he has greater or equal to 10 year experience', () => {
      expect((solution({ profession: 'doctor', experience: 11 }, 100))).toBe(200)});
    it('Should multiply by x3 when s/he has greater or equal to 20 year experience', () => {
      expect(solution({ profession: 'doctor', experience: 21 }, 100)).toBe(300)});
  });
  describe('When the premium is 300', () => {
    it('Should multiply by x1.2 when s/he has less than 10 year experience', () => {
      expect((solution({ profession: 'nurse', experience: 5 }, 300))).toBe(360)
    });
    it('Should multiply by x1.3 when s/he has greater or equal to 10 year experience', () => {
      expect((solution({ profession: 'nurse', experience: 13 }, 300))).toBe(390)
    });
    it('Should multiply by x1.5 when s/he has greater or equal to 15 year experience', ()=> {
      expect((solution({ profession: 'nurse', experience: 17 }, 300))).toBe(450)
    });
    it('Should multiply by x1.7 when s/he has greater or equal to 20 year experience', () => {
      expect((solution({ profession: 'nurse', experience: 31 }, 300))).toBe(510)
    });
  });
});

// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore
