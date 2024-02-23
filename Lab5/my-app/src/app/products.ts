export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;

  address: string;
  rating: string;
  like: number;
}

export const products = [
  {
    id: 1,
    name: 'Книга Остин Дж.: Гордость и предубеждение',
    price: 1109,
    description: ' iSBN:  978-5-170-90332-0\n'+
    'язык издания: русский \n'+
    'переплет: мягкий переплет \n'+
    'жанр: всемирная классика',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h9b/63925229420574.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/ostin-dzh-gordost-i-predubezhdenie-100326806/?c=750000000',
    rating: 'https://www.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej.jpg',
    like:0
  },
  {
    id: 2,
    name: 'Книга Кристи А.: Десять негритят',
    price: 1198,
    description: ' iSBN: 978-5-041-03497-9\n'+
    'язык издания: русский\n'+
    'переплет: мягкий переплет\n'+
    'жанр: остросюжетная литература',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h8b/63926013886494.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/kristi-a-desjat-negritjat-100329448/?c=750000000',
    rating: 'https://www.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej.jpg',
    like:0
  },
  {
    id: 3,
    name: 'Книга Спаркс Н.: Спеши любить',
    price: 1246,
    description: ' iSBN: 9785171004262\n'+
    'язык издания: русский\n'+
    'переплет: мягкий переплет\n'+
    'жанр: сентиментальная проза',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h1b/63846893322270.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/sparks-n-speshi-ljubit--100259730/?c=750000000',
    rating: 'https://www.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej.jpg',
    like:0
  },
  {
    id: 3,
    name: 'Книга Кристи А.: Убийства по алфавиту',
    price: 1247,
    description: ' iSBN: 9785040996957\n'+
    'язык издания: русский\n'+
    'переплет: мягкий переплет\n'+
    'жанр: остросюжетная литература',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1a/hb4/64342870753310.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/kristi-a-ubiistva-po-alfavitu-101516844/?c=750000000',
    rating: 'https://www.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej.jpg',
    like:0
  },

  {
    id: 4,
    name: 'Книга Әуезов М.: Абай жолы 1-4 том',
    price: 7792,
    description: 'iSBN: 9965-666-58-X\n'+
    'возраст: 12+\n'+
    'язык издания: казахский, ,русский\n'+
    'переплет: твердый переплет\n'+
    'жанр: казахская классика',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hda/he6/63766500212766.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/-uezov-m-abai-zholy-1-4-tom-26016813/?c=750000000',
    rating: 'https://avatars.mds.yandex.net/i?id=c53819e431a4213a4610cea7ad7ea1e9cb8633ea-9068727-images-thumbs&n=13',
    like:0
  },
  {
    id: 5,
    name: 'Книга Браун Д.: Код да Винчи',
    price: 1374,
    description: ' iSBN: 978-5-17-086361-7\n'+
    'возвраст: 16+\n'+
    'язык издания: русский\n'+
    'переплет: мягкий переплет\n'+
    'жанр: остросюжетная литература',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/h85/63787960238110.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/braun-d-kod-da-vinchi-26007967/?c=750000000',
    rating: 'https://www.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej.jpg',
    like:0
  },
  {
    id: 6,
    name: 'Книга Браун Д.: Цифровая крепость',
    price: 4678,
    description: ' iSBN:  978-5-17-080853-3\n'+
    'возвраст: 16+\n'+
    'язык издания: русский\n'+
    'переплет: твердый переплет\n'+
    'жанр: остросюжетная литература',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hdd/63778031796254.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/braun-d-tsifrovaja-krepost--26002626/?c=750000000',
    rating: 'https://www.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej.jpg',
    like:0
  },
  {
    id: 7,
    name: 'Книга Киз Д.: Таинственная история Билли Миллигана',
    price: 2236,
    description:' iSBN: 9785040988389\n'+
    'язык издания: русский\n'+
    'переплет: мягкий переплет\n'+
    'жанр: современная мировая проза', 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h00/64215518937118.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/kiz-d-tainstvennaja-istorija-billi-milligana-101187476/?c=750000000',
    rating: 'https://avatars.mds.yandex.net/i?id=97cc1e747d7a51e9eb33cafade021f22a4e40a32-7451997-images-thumbs&n=13',
    like:0
  },
  {
    id: 8,
    name: 'Книга Кристи А.: Загадка Эндхауза',
    price: 1007,
    description: ' iSBN: 9785041045425\n'+
    'возвраст: 16+\n'+
    'язык издания: русский\n'+
    'переплет: мягкий переплет\n'+
    'жанр: остросюжетная литература',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/hff/64227878207518.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/kristi-a-zagadka-endhauza-101430368/?c=750000000',
    rating: 'https://www.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej.jpg',
    like:0
  },
  {
    id: 9,
    name: 'Книга Уайльд О.: Портрет Дориана Грея',
    price: 974,
    description:' iSBN:  978-5-17-099056-6\n'+
    'язык издания: русский \n'+
    'переплет: мягкий переплет \n'+
    'жанр: всемирная классика',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h00/h64/64096830750750.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/uail-d-o-portret-doriana-greja-100996924/?c=750000000',
    rating: 'https://avatars.mds.yandex.net/i?id=c53819e431a4213a4610cea7ad7ea1e9cb8633ea-9068727-images-thumbs&n=13',
    like:0
  },
  {
    id: 10,
    name: 'Книга Кинг С.: Зеленая миля',
    price: 1145,
    description: 'iSBN: 9785171373580\n'+
    'возраст: 16+\n'+
    'язык издания: русский\n'+
    'переплет: мягкий переплет\n'+
    'жанр: фантастика',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h18/63992063590430.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/king-s-zelenaja-milja-101800501/?c=750000000',
    rating: 'https://www.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej.jpg',
    like:0
  }

];


