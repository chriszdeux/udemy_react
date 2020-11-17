//Desestructuracion

const person = {
  name: 'tony',
  age: 45,
  id: 'IronMan'
}

const userContainer = ({id, name, age}) => {
  return {
    codeName: name,
    years: age,
    latLeng: {
      lat: 14.521848,
      leng: 45.3255,
    }
  }
};

// const {codeName, years} = userContainer(person);
// const {codeName, years, latLeng: {lat, leng}} = userContainer(person);
const {codeName, years, latLeng} = userContainer(person);
const {lat, leng} = latLeng;
console.log(codeName, years, lat, leng)
console.log(lat, leng)
