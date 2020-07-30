"use strict";

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
addSubmission(submissions, "Aryka", 76, "2020-01-03");
console.log(submissions);

// class edit:
// aaray.splice(index,1);
// takes off first index by default

const deleteSubmissionByIndex = (array, index) => {
  let delSub = array.splice(index, 1);
  return delSub;
};
console.log(deleteSubmissionByIndex(submissions));

// splice by name variable = array.findIndex((singularName) =>{
//     return singularName.propterty ==== parameter;
// });
// array.splice(function2Value, 1);
// };
// call function(arguments);
// console.log(array) to update

const deleteSubmissionByName = (array, name) => {
  let findName = array.findIndex((subName) => {
    return subName.name === name;
  });
  array.splice(findName, 1);
};
deleteSubmissionByName(submissions, "Jane");
console.log(submissions);

// const editSubmission = (array, index, score) => {
//     if(array[index].score = score >= 60) { array[index].passed = true;
//     array[index].score === score}
// }
// console.log(editSubmission(submissions, 2, 100));

const editSubmission = (array, index, score) => {
  array[index].score = score;
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
};
editSubmission(submissions, 0, 88);
console.log(submissions);

const findSubmissionByName = (array, name) => {
  let found = array.find((findName) => {
    return findName.name === name;
  });
  return found;
};
console.log(findSubmissionByName(submissions, "Joe"));

// HERE ON WENT THROUGH IN LAB REVIEW
// --------------------------------------------
// const findLowestScore = (array) => {
//     let lowestScore = array[0];
//     array.forEach((person) => {
//         if (person.score < lowestScore.score){
//         lowestScore = person;
//     }
//     })
// }
const findLowestScore = (array) => {
  let lowestScore = array[0];
  array.forEach((currentLow) => {
    if (currentLow.score < lowestScore.score) {
      lowestScore = currentLow;
    }
  });
  return lowestScore;
};
console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item.score;
  }
  return sum / array.length;
};

const filterPassing = (array) => {
  let newArray = array.filter((item) => {
    return item.passed === true;
  });
  return newArray;
};
console.log(filterPassing(submissions));

const filterAbove90 = (array) => {
  let above90 = array.filter((obj) => {
    return obj.score >= 90;
  });
  return above90;
};
console.log(filterAbove90(submissions));

// Declare a function named addStringToBeginning
//  - Parameter(s): array, string (targeted)
//  - Functionality: add a string to the beginning of the provided array

// const addStringToBeginning = (array, string) => {
//   array.unshift(string);
// };
// addStringToBeginning(strings);
// const findLowestScore = (array) => {};
