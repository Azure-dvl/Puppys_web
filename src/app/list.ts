import { Dogs, User, DogsAd } from './interfaces';

export const list_dogs:Dogs[] = [
  {id: 1, name: 'Coco', details: 'Soy Coco, un adorable Beagle de 3 años con una energía inagotable. Me encanta jugar a buscar la pelota, dar largos paseos olfateando cada rincón y recibir mimos a todas horas. Soy muy sociable y me llevo bien con niños y otros perros. Mi debilidad son las galletas de tocino, ¡no me puedo resistir! Si buscas un compañero fiel y juguetón, ¡aquí estoy!', raza: 'Beagle',estado: false, picture: 'https://i.pinimg.com/236x/f0/ed/70/f0ed70de034fe1d8b2ca3f22d490af8e.jpg'},
  {id: 2, name: 'Luna', details: '¡Guau! Mi nombre es Luna, una elegante Husky Siberiana de 5 años. Soy una perrita tranquila y observadora, aunque disfruto mucho de los paseos por la naturaleza y correr libremente en espacios abiertos. Mi pelaje plateado y mis ojos azules te cautivarán. Soy muy inteligente y aprendo rápido, pero a veces puedo ser un poco independiente. Busco un hogar donde me brinden amor y paciencia.',raza:'Husky Siberiana', estado: false, picture: 'https://i.pinimg.com/474x/67/56/b4/6756b44add5f4104b892ac0d405e8c38.jpg'},
  {id: 3, name: 'Bruno', details: '¡Woof! Me llamo Bruno, un dulce San Bernardo de 2 años con un corazón enorme. Soy un gigante gentil que adora las siestas a los pies de su humano favorito. Me encanta jugar con niños y soy muy paciente. Aunque parezca un poco torpe, soy muy cuidadoso y cariñoso.  Busco una familia que me adopte y me llene de mimos. Prometo ser el mejor amigo que puedas tener.', raza:'San Bernardo' , estado: false, picture:'https://i.pinimg.com/236x/92/dd/a8/92dda82c30ad9ddc26382214802a585f.jpg'}
  ];

export const list_User:User[]=[
  {id:0, name:'Admin',password:'123456'}
];

export const list_DogsAd:DogsAd[]=[
  {id: 1, name: 'Linda', details: 'Linda es un torbellino de energía y alegría con un pelaje dorado como el sol.  Este pequeño Schnauzer miniatura  te robará el corazón con su mirada traviesa y sus bigotes que parecen tener vida propia. Le encanta jugar a la pelota, dar largos paseos olfateando cada rincón y recibir mimos mientras toma una siesta en tu regazo. No te dejes engañar por su tamaño, Linda es un perro valiente y protector que siempre te hará sonreír con sus ocurrencias!', raza:'Schnauzer' , estado: true, picture:'https://i.pinimg.com/236x/1b/d4/75/1bd4755fcc53de70d6122634c923f30d.jpg', name_human:'Pedro Hernandez', numbre:'2064812'}
];