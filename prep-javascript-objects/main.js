var person = {
  firstName: 'Jake',
  lastName: 'Peralta',
  hobby: 'Sarcasm'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Detective';
console.log("The person's current job is:", person.job);
person.previousJob = 'Comedian';
console.log("The person's previous job is:", person.previousJob);
console.log(person);
