// const personajes = ['goku', 'vegeta', 'trunks'];
// const [, , p3] = personajes;
// console.log(p3)

// const returArray = () => {
  //   return ['ABC', 123]
// }
// const [letras, numeros] = returArray();

// console.log(letras, numeros)
  const useState = (valor) => {
    return [valor, () => { console.log(`hello ${valor}`) }]
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState('vegeta');
  console.log(name)
  setName();