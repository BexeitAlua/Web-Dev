export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  
    address: string;
    rating: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Телевизор Yasin LED-32E7000 81 см черный',
      price: 60000,
      description: 'тип: LED-телевизор ' +
        'диагональ: 32 дюйм ' +
        'разрешение: 1366x768 ' +
        'поддержка HD: 720p HD ' +
        'технология Smart TV: Нет' +
        'wi-Fi: Да' +
        'входы: AV,HDMI,USB,антенный,Bluetooth',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg',
      address: 'https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item',
      rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
    },
    {
      id: 2,
      name: 'Телевизор LG 43LM5772PLA 109 см черный',
      price: 183000,
      description: 'тип: LED-телевизор\n' +
        'диагональ: 42.5 дюйм\n' +
        'разрешение: 1920x1080\n' +
        'поддержка HD: 1080p Full HD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: AV, ,компонентный, ,HDMI, ,Ethernet (RJ-45), ,USB',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg',
      address: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item',
      rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
    },
    {
      id: 3,
      name: 'Телевизор Xiaomi TV P1 32 L32M6-6ARG 81 см черный',
      price: 119990,
      description: 'тип: LED-телевизор\n' +
        'диагональ: 32 дюйм\n' +
        'разрешение: 1366x768\n' +
        'поддержка HD: 720p HD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: композитный, ,HDMI, ,USB, ,Bluetooth',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hd2/49320434008094/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-1.jpg',
      address: 'https://kaspi.kz/shop/p/xiaomi-tv-p1-32-l32m6-6arg-81-sm-chernyi-103039169/?c=750000000#!/item',
      rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
    },
    {
      id: 3,
      name: 'Телевизор DAUSCHER LD55AU7100 140 см черный',
      price: 239990,
      description: 'тип: LED-телевизор\n' +
        'диагональ: 55 дюйм\n' +
        'разрешение: 3840x2160\n' +
        'поддержка HD: 4K UHD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: аудио, ,оптический, ,VGA',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/hfa/66314652581918/dauscher-ld55au7100-chernyi-107598351-1.jpg',
      address: 'https://kaspi.kz/shop/p/dauscher-ld55au7100-140-sm-chernyi-107598351/?c=750000000#!/item',
      rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
    },
    {
      id: 4,
      name: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
      price: 198000,
      description: 'тип: LED-телевизор\n' +
        'диагональ: 43 дюйм\n' +
        'разрешение: 1920x1080\n' +
        'поддержка HD: 1080p Full HD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: AV, ,компонентный, ,Ethernet (RJ-45), ,USB',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg',
      address: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item',
      rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
    },
    {
      id: 5,
      name: 'Телевизор Yasin 40G7 102 см черный',
      price: 114677,
      description: 'тип: LED-телевизор\n' +
        'диагональ: 40 дюйм\n' +
        'разрешение: 1920x1080\n' +
        'поддержка HD: 1080p Full HD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: оптический, ,AV, ,компонентный, ,HDMI, ,Ethernet (RJ-45), ,USB, ,RS-232, ,MHL',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h3f/49244137586718/yasin-40g7-cernyj-104045834-1.jpg',
      address: 'https://kaspi.kz/shop/p/yasin-40g7-102-sm-chernyi-104045834/?c=750000000#!/item',
      rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
    },
    {
      id: 6,
      name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
      price: 480000,
      description: 'диагональ экрана: 13.3 дюйм\n' +
        'процессор: Apple M1\n' +
        'видеокарта: Apple M1 7 core\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
      address: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
      rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
    },
    {
      id: 7,
      name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
      price: 389000,
      description: 'диагональ экрана: 15.6 дюйм\n' +
        'процессор: Intel Core i5 11400H\n' +
        'видеокарта: NVIDIA GeForce GTX 1650\n' +
        'размер оперативной памяти: 16 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 512 ГБ',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
      address: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
      rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
    },
    {
      id: 8,
      name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
      price: 349000,
      description: 'диагональ экрана: 15.6 дюйм\n' +
        'процессор: AMD Ryzen 5 4600H\n' +
        'видеокарта: nVidia GeForce GTX1650\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 512 ГБ',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
      address: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item',
      rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg\''
    },
    {
      id: 9,
      name: 'Ноутбук Apple MacBook Air 13 MLY33 черный',
      price: 628000,
      description: 'диагональ экрана: 13.6 дюйм\n' +
        'видеокарта: Apple M2 8-Core\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/h3d/52679174357022/apple-macbook-air-13-mly33-chernyi-105933768-1.jpg',
      address: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000#!/item',
      rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
    },
    {
      id: 10,
      name: 'Ноутбук Acer Nitro 5 AN515-45 NH.QB9ER.004 черный',
      price: 379000,
      description: 'диагональ экрана: 15.6 дюйм' +
        'процессор: AMD Ryzen 5 5600H\n' +
        'видеокарта: NVIDIA GeForce GTX 1650\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 512 ГБ',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h65/66626494398494/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784-1.jpg',
      address: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/?c=750000000#!/item',
      rating: 'http://danleicht.com/wp-content/uploads/2016/06/Five-Stars.jpg'
    }
  
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */