/* eslint-disable no-undef */
/* eslint-disable sonarjs/no-duplicate-string */
const solution = (healthCareWorker = {}, percentage) => {
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
        expect(
          () =>
            // eslint-disable-next-line implicit-arrow-linebreak
            solution({ profession: 'doctor', experience: 20 }, 500),
          // eslint-disable-next-line function-paren-newline
        ).toThrowError();
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for nurses', () => {
    describe('When the premium is 500', () => {
      it('Should multiply by x1.7 when she has less than 10 year experience, if premium more then 500 throw error', () => {
        expect(
          () =>
            // eslint-disable-next-line implicit-arrow-linebreak
            solution({ profession: 'doctor', experience: 20 }, 500),
          // eslint-disable-next-line function-paren-newline
        ).toThrowError();
      });
    });
  });
});

describe(`${solution.name}: _`, () => {
  describe('premium for nurses', () => {
    describe('When the premium is 500', () => {
      it('Should multiply by x1.2 when she has less than 10 year experience, if premium more then 500 throw error', () => {
        expect(
          () =>
            // eslint-disable-next-line implicit-arrow-linebreak
            solution({ profession: 'nurse', experience: 8 }, 500),
          // eslint-disable-next-line function-paren-newline
        ).toThrowError();
      });
    });
  });
});
