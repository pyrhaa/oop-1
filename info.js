const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['Javascript', 'Python', 'PHP']
};

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['Java', 'C++']
};

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['Go', 'Cobol', 'Kotlin', 'Java', 'Angular']
};

const printInfo = (person) => {
  // person is an object
  console.log(`first name: ${person.firstName}`);
  console.log(`last name: ${person.lastName}`);
  console.log(`age: ${person.age}`);
};

// printInfo(alice);
// printInfo(bob);
// printInfo(charlie);
const canVote = (adult) => {
  if (adult.age >= 18) {
    return true;
  } else {
    return false;
  }
};

// console.log(canVote(charlie));

const mostSkilledDev = (persUn, persDeux) => {
  const array1 = persUn.language.length;
  const array2 = persDeux.language.length;

  if (array1 > array2) {
    return persUn.firstName;
  } else if (array1 < array2) {
    return persDeux.firstName;
  } else {
    return 'draw';
  }
};

console.log(mostSkilledDev(alice, bob));
console.log(mostSkilledDev(bob, charlie));
console.log(mostSkilledDev(bob, bob));
