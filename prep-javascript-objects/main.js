const person = {
  firstName: 'Jake',
  lastName: 'Peralta',
  hobby: 'Sarcasm'
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Detective';
console.log("The person's current job is:", person.job);
person.previousJob = 'Mafia Boss';
console.log("The person's previous job is:", person.previousJob);
console.log(person);
