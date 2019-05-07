
//#region Shallow compare
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x: any, y: any): boolean {
  // SameValue algorithm
  if (x === y) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
export function shallowEqual(objA: any, objB: any): boolean {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}
//#endregion Shallow compare

const room = { number: 6 };
const education = {
    name: "SysKit Dev Unite",
    edition: 2,
    room: room,
    onEnd: () => alert('Drink beer :)')
}

const education2 = education;
console.log("Education 2", shallowEqual(education, education2));

const education3 = {...education};
console.log("Education 3", shallowEqual(education, education3));

const education4 = {...education, edition: 3};
console.log("Education 4", shallowEqual(education, education4));

const education5 = {
    name: "SysKit Dev Unite",
    edition: 2,
    room: {
        number: 6
    },
    onEnd: () => alert('Drink beer :)')
}
console.log("Education 5", shallowEqual(education, education5));

const education6 = {
    ...education5,
    isCool: true
}
console.log("Education 6", shallowEqual(education, education6));
