// import heroes from './data/heroes';
import {getHeroById} from './08-exports';

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroById(4);
//     resolve(heroe)
//     // reject('hero not found')
//   }, 2000)
// });

// promise.then((message) => {
//   console.log('hero load done!', message)
// })
// .catch(err => console.warn(err));

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroes = getHeroById(id);
      (heroes)
        ? resolve(heroes)
        : reject(new Error('fail'))
    })
  })
}

getHeroByIdAsync(3)
  // .then(hero => console.log('hero loaded: ', hero))
  .then( console.log )
  // .catch(error => console.log('cant find hero', error))
  .catch( console.warn )