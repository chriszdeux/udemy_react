// import heroes from './data/heroes';
// import heroe from './data/heroes';
import heroe from './data/heroes';

// const getHeroById = (id) => {
//   return heroes.find( hero => {
//     if(hero.id === id) {
//       return true
//     }
//     else {
//       return false
//     }
//   } )
// }

// const getHeroById = (id) => {
//   return heroes.find(hero => hero.id === id)
// }

export const getHeroById = (id) => heroe.find(hero => hero.id === id) 
// console.log(getHeroById(1));


export const getHeroByOwner = (owner) => heroe.filter(hero => hero.owner === owner);
// console.log(getHeroByOwner('Marvel'));

// console.log(companys);
// console.log(games)