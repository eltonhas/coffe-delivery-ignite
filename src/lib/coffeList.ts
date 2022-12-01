import Americano from '../assets/americano.svg'
import Arabe from '../assets/arabe.svg'
import ComLeite from '../assets/cafe-com-leite.svg'
import Gelado from '../assets/cafe-gelado.svg'
import Capuccino from '../assets/capuccino.svg'
import ChocQuente from '../assets/chocolate-quente.svg'
import Cubano from '../assets/cubano.svg'
import Cremoso from '../assets/expresso-cremoso.svg'
import Expresso from '../assets/expresso.svg'
import Havaiano from '../assets/havaiano.svg'
import Irlandes from '../assets/irlandes.svg'
import Latte from '../assets/latte.svg'
import Macchiato from '../assets/macchiato.svg'
import Mochaccino from '../assets/mochaccino.svg'

export const CoffeList = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    classification: ['Tradicional'],
    image: Expresso,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    classification: ['Tradicional'],
    image: Americano,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    classification: ['Tradicional'],
    image: Cremoso,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    classification: ['Tradicional', 'Gelado'],
    image: Gelado,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    classification: ['Tradicional', 'com leite'],
    image: ComLeite,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    classification: ['Tradicional', 'com leite'],
    image: Latte,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    classification: ['Tradicional', 'com leite'],
    image: Capuccino,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    classification: ['Tradicional', 'com leite'],
    image: Macchiato,
  },
  {
    id: 9,
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    classification: ['Tradicional', 'com leite'],
    image: Mochaccino,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    classification: ['Tradicional', 'com leite'],
    image: ChocQuente,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    classification: ['especial', 'alcoólico', 'gelado'],
    image: Cubano,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    classification: ['especial'],
    image: Havaiano,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    classification: ['especial'],
    image: Arabe,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    classification: ['especial', 'alcoólico'],
    image: Irlandes,
  },
]
