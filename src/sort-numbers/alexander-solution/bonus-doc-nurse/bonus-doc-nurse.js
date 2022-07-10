// eslint-disable-next-line sonarjs/cognitive-complexity
export const bonus = (employee, premium) => {
  let bonuses = 0;
  const overPriced = 'Too much dough';
  if (employee.profession === 'doctor' && employee.experience < 10) {
    bonuses = premium * 1.5;
  } else if (employee.profession === 'doctor' && employee.experience >= 10) {
    bonuses = premium * 2;
    if (bonuses >= 1000) {
      throw new Error(overPriced);
    }
  } else if (employee.profession === 'doctor' && employee.experience >= 20) {
    bonuses = premium * 3;
    if (bonuses >= 1000) {
      throw new Error(overPriced);
    }
  } else if (employee.profession === 'nurse' && employee.experience < 10) {
    bonuses = premium * 1.2;

    if (bonuses >= 500) {
      throw new Error(overPriced);
    }
  } else if (employee.profession === 'nurse' && employee.experience >= 10) {
    bonuses = premium * 1.3;

    if (bonuses >= 500) {
      throw new Error(overPriced);
    }
  } else if (employee.profession === 'nurse' && employee.experience >= 15) {
    bonuses = premium * 1.5;

    if (bonuses >= 500) {
      throw new Error(overPriced);
    }
  } else if (employee.profession === 'nurse' && employee.experience >= 20) {
    bonuses = premium * 1.7;
    if (bonuses >= 500) {
      throw new Error(overPriced);
    }
  }
  return Math.floor(bonuses);
};
