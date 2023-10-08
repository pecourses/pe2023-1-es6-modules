// default export--------------------------------------

// const sum = (a, b) => a + b;
// export default sum;

// або

// export default (a, b) => a + b;

// named export ---------------------------------------

// export const sum = (a, b) => a + b;
// export const PI = 3.14;
// export const dob = (a, b) => a * b;

// або

// const sum = (a, b) => a + b;
// const PI = 3.14;
// const dob = (a, b) => a * b;

// export { sum, PI, dob };

// ніби запаковується в об'єкт {sum: (a, b) => a + b, PI: 3.14}

// default + named export ---------------------------------------

export const sum = (a, b) => a + b;
export const PI = 3.14;

class Test {
  constructor(name) {
    this.name = name;
  }
}

export default Test;

// ніби запаковується в об'єкт
// {
//   sum: (a, b) => a + b,
//   PI: 3.14,
//   default: Test
// }
