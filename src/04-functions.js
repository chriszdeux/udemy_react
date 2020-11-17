//functions

function getUserActive (name) {
  return {
    uid: '123',
    userName: name
  }
}

const getUserActive2 = name => ({ udi: 123, userName: name });

const newUSer = getUserActive('chris');
const newUser2 = getUserActive2('arce');

console.log(newUSer);
console.log(newUser2);
