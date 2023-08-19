// Make database "tokoplay"
use.tokoplay;

// Insert Data Videos to MongoDB
db.videos.insertMany([
  {
    videoId: 'jOTfBlKSQYY', //done
    thumbnailUrl: 'https://img.youtube.com/vi/jOTfBlKSQYY/maxresdefault.jpg',
    title: "NewJeans (뉴진스) 'ETA' Official MV",
    description: 'Music video by the South Korean hip-hop group NewJeans. It features a catchy beat and stylish visuals.',
    live: true,
    viewers: 23310687
  },
  {
    videoId: 'mz4cRJcJkpw', //done
    thumbnailUrl: 'https://img.youtube.com/vi/mz4cRJcJkpw/maxresdefault.jpg',
    title: "You won't BELIEVE his voice! Cakra Khan's soulful song captivates the judges | Auditions | AGT 2023",
    description: 'Watch as Cakra Khan delivers an unforgettable performance on the AGT stage, leaving the judges and audience in awe.',
    live: false,
    viewers: 9002554
  }, 
  {
    videoId: 'yB9_GWRjTg4', //done
    thumbnailUrl: 'https://img.youtube.com/vi/yB9_GWRjTg4/maxresdefault.jpg',
    title: 'I Surprised Aespa With A Custom iPad Mural!',
    description: 'Watch until I surprise aespa at the end!',
    live: true,
    viewers: 4359339
  }, 
  {
    videoId: 'FEcOIJbhGHI', //done
    thumbnailUrl: 'https://img.youtube.com/vi/FEcOIJbhGHI/maxresdefault.jpg',
    title: 'Bagaimana Serangan Jantung Terjadi?',
    description: 'Menurut data tahun 2000-2019 dari WHO, penyebab kematian nomor 1 di dunia adalah penyakit jantung, dan empat dari lima kematian terjadi akibat serangan jantung atau stroke.',
    live: false,
    viewers: 118685
  }, 
  {
    videoId: 'ig0S0vzxMBA', //done
    thumbnailUrl: 'https://img.youtube.com/vi/ig0S0vzxMBA/maxresdefault.jpg',
    title: '『NARUTO -ナルト-』波風ミナトPV【週刊少年ジャンプ55周年記念】',
    description: '★『NARUTO -ナルト-』関連動画はコチラから',
    live: false,
    viewers: 352028
  }, 
  {
    videoId: 'KiKUN4i1SeU', //done
    thumbnailUrl: 'https://img.youtube.com/vi/KiKUN4i1SeU/maxresdefault.jpg',
    title: 'Setting up new M2 Mac Mini for software development',
    description: 'Here I go through setting up a new M2 Mac Mini for software development, the way I usually set things up for my own tasks.',
    live: false,
    viewers: 212828
  },
  {
    videoId: 'sNgnwahAlzk', //done
    thumbnailUrl: 'https://img.youtube.com/vi/sNgnwahAlzk/maxresdefault.jpg',
    title: 'Self Taught Programmers... Listen Up.',
    description: 'Self Taught Programmers... Listen Up.',
    live: false,
    viewers: 474147
  }
]);

// 1 - Insert Data Products to MongoDB
db.products.insertMany([
  {
    productId: "product1",
    videoId: 'jOTfBlKSQYY', 
    link: 'https://www.tokopedia.com/logitech/logitech-h340-headset-stereo-usb-mikrofon-noise-cancelling?source=homepage.left_carousel.0.266926',
    title: 'Logitech H340 Headset Stereo USB Mikrofon Noise-Cancelling',
    price: 321000
  },
  {
    productId: "product2",
    videoId: 'jOTfBlKSQYY', 
    link: 'https://www.tokopedia.com/logitech/logitech-pebble-m350-mouse-wireless-bluetooth-slim-silent-hitam?extParam=ivf%3Dtrue',
    title: 'Logitech Pebble M350 Mouse Wireless Bluetooth Slim Silent - Hitam',
    price: 309000
  },
  {
    productId: "product3",
    videoId: 'jOTfBlKSQYY', 
    link: 'https://www.tokopedia.com/logitech/logitech-signature-m650-l-mouse-wireless-bluetooth-silent-full-size-graphite?extParam=whid%3D13056835',
    title: 'Logitech Signature M650 L Mouse Wireless Bluetooth Silent Full Size - Graphite',
    price: 419000
  },
  {
    productId: "product4",
    videoId: 'jOTfBlKSQYY', 
    link: 'https://www.tokopedia.com/logitech/fs-logitech-wireless-mouse-m191-mid-grey',
    title: '[FS] Logitech Wireless Mouse M191 - Mid Grey',
    price: 139000
  },
  {
    productId: "product5",
    videoId: 'jOTfBlKSQYY', 
    link: 'https://www.tokopedia.com/logitech/logitech-mx-anywhere-3-mouse-wireless-performance-compact-for-mac',
    title: 'Logitech MX Anywhere 3 Mouse Wireless Performance Compact for Mac',
    price: 1155000
  }
]);
  


// 2 - Insert Data Products to MongoDB
db.products.insertMany([
  {
    productId: "product6",
    videoId: 'mz4cRJcJkpw', 
    link: 'https://www.tokopedia.com/radabab/ldcx-pokemon-ball-pokeball-toys-changing-swap-face-emoticons-pokemon-meowth?extParam=ivf%3Dfalse',
    title: 'LDCX Pokemon Ball Pokeball Toys Changing / Swap Face Emoticons Pokemon - MEOWTH',
    price: 57600
  },
  {
    productId: "product7",
    videoId: 'mz4cRJcJkpw', 
    link: 'https://www.tokopedia.com/radabab/takara-tomy-moncolle-pokemon-ml-05-rayquaza-action-figure',
    title: 'Takara Tomy Moncolle Pokemon ML-05 RAYQUAZA Action Figure',
    price: 265000
  },
  {
    productId: "product8",
    videoId: 'mz4cRJcJkpw', 
    link: 'https://www.tokopedia.com/radabab/zd-toys-original-iron-man-mark-vii-zdtoys-ironman-mk-7-led-lampu',
    title: 'ZD Toys Original Iron Man Mark VII - ZDToys Ironman MK 7 - LED / LAMPU',
    price: 385000
  },
  {
    productId: "product9",
    videoId: 'mz4cRJcJkpw', 
    link: 'https://www.tokopedia.com/anitechtoko/mouse-wireless-bluetooth-ultra-tipis-rechargeable-untuk-windows-wireless-hitam?src=topads',
    title: 'Mouse Wireless Bluetooth Ultra Tipis Rechargeable untuk Windows - WIRELESS, Hitam',
    price: 31000
  },
  {
    productId: "product10",
    videoId: 'mz4cRJcJkpw', 
    link: 'https://www.tokopedia.com/anitechtoko/mouse-wireless-wireless-mouse-hp-mouse-pad-baterai-s9000',
    title: 'MOUSE WIRELESS/WIRELESS MOUSE HP+Mouse PAD+BATERAI - s9000',
    price: 69000
  }
]);
  

// 3 - Insert Data Products to MongoDB
db.products.insertMany([
  {
    productId: "product11",
    videoId: 'yB9_GWRjTg4', 
    link: 'https://www.tokopedia.com/khnshop/jas-hujan-setelan-jas-hujan-anti-rembes-khn-new-design-hijau-tni-dewasa?source=homepage.left_carousel.0.280152',
    title: 'Jas Hujan Setelan, Jas hujan anti rembes KHN New Design - hijau tni, dewasa',
    price: 115197
  },
  {
    productId: "product12",
    videoId: 'yB9_GWRjTg4', 
    link: 'https://www.tokopedia.com/khnshop/jas-hujan-ares-stelan-baju-celana-premium-parasut-balon-all-size',
    title: 'Jas hujan ARES stelan baju celana premium - Parasut Balon, All Size',
    price: 70658
  },
  {
    productId: "product13",
    videoId: 'yB9_GWRjTg4', 
    link: 'https://www.tokopedia.com/vippremium/earphone-samsung-akg-usb-type-c-headset-samsung-ori-handsfree-hf-type-c-ab7d8?src=topads',
    title: 'Earphone Samsung AKG USB Type C Headset Samsung Ori Handsfree - HF Type C',
    price: 83500
  },
  {
    productId: "product14",
    videoId: 'yB9_GWRjTg4', 
    link: 'https://www.tokopedia.com/jbl-official-store/headset-type-c-samsung-original-stereo-noise-canceling-earphone-stereo?src=topads',
    title: 'Headset Type C Samsung Original Stereo Noise Canceling Earphone Stereo',
    price: 92500
  },
  {
    productId: "product15",
    videoId: 'yB9_GWRjTg4', 
    link: 'https://www.tokopedia.com/urbanrepublic/samsung-audio-earphones-type-c-black',
    title: 'Samsung Audio Earphones Type C - Black',
    price: 249000
  }
]);


// 4 - Insert Data Products to MongoDB
db.products.insertMany([
  {
    productId: "product16",
    videoId: 'FEcOIJbhGHI', 
    link: 'https://www.tokopedia.com/logitech/logitech-h340-headset-stereo-usb-mikrofon-noise-cancelling?source=homepage.left_carousel.0.266926',
    title: 'Logitech H340 Headset Stereo USB Mikrofon Noise-Cancelling',
    price: 321000
  },
  {
    productId: "product17",
    videoId: 'FEcOIJbhGHI', 
    link: 'https://www.tokopedia.com/logitech/logitech-pebble-m350-mouse-wireless-bluetooth-slim-silent-hitam?extParam=ivf%3Dtrue',
    title: 'Logitech Pebble M350 Mouse Wireless Bluetooth Slim Silent - Hitam',
    price: 309000
  },
  {
    productId: "product18",
    videoId: 'FEcOIJbhGHI', 
    link: 'https://www.tokopedia.com/logitech/logitech-signature-m650-l-mouse-wireless-bluetooth-silent-full-size-graphite?extParam=whid%3D13056835',
    title: 'Logitech Signature M650 L Mouse Wireless Bluetooth Silent Full Size - Graphite',
    price: 419000
  },
  {
    productId: "product19",
    videoId: 'FEcOIJbhGHI', 
    link: 'https://www.tokopedia.com/logitech/fs-logitech-wireless-mouse-m191-mid-grey',
    title: '[FS] Logitech Wireless Mouse M191 - Mid Grey',
    price: 139000
  },
  {
    productId: "product20",
    videoId: 'FEcOIJbhGHI', 
    link: 'https://www.tokopedia.com/logitech/logitech-mx-anywhere-3-mouse-wireless-performance-compact-for-mac',
    title: 'Logitech MX Anywhere 3 Mouse Wireless Performance Compact for Mac',
    price: 1155000
  }
]);
  


// 5 - Insert Data Products to MongoDB
db.products.insertMany([
  {
    productId: "product21",
    videoId: 'KiKUN4i1SeU', 
    link: 'https://www.tokopedia.com/radabab/ldcx-pokemon-ball-pokeball-toys-changing-swap-face-emoticons-pokemon-meowth?extParam=ivf%3Dfalse',
    title: 'LDCX Pokemon Ball Pokeball Toys Changing / Swap Face Emoticons Pokemon - MEOWTH',
    price: 57600
  },
  {
    productId: "product22",
    videoId: 'KiKUN4i1SeU', 
    link: 'https://www.tokopedia.com/radabab/takara-tomy-moncolle-pokemon-ml-05-rayquaza-action-figure',
    title: 'Takara Tomy Moncolle Pokemon ML-05 RAYQUAZA Action Figure',
    price: 265000
  },
  {
    productId: "product23",
    videoId: 'KiKUN4i1SeU', 
    link: 'https://www.tokopedia.com/radabab/zd-toys-original-iron-man-mark-vii-zdtoys-ironman-mk-7-led-lampu',
    title: 'ZD Toys Original Iron Man Mark VII - ZDToys Ironman MK 7 - LED / LAMPU',
    price: 385000
  },
  {
    productId: "product24",
    videoId: 'KiKUN4i1SeU', 
    link: 'https://www.tokopedia.com/anitechtoko/mouse-wireless-bluetooth-ultra-tipis-rechargeable-untuk-windows-wireless-hitam?src=topads',
    title: 'Mouse Wireless Bluetooth Ultra Tipis Rechargeable untuk Windows - WIRELESS, Hitam',
    price: 31000
  },
  {
    productId: "product25",
    videoId: 'KiKUN4i1SeU', 
    link: 'https://www.tokopedia.com/anitechtoko/mouse-wireless-wireless-mouse-hp-mouse-pad-baterai-s9000',
    title: 'MOUSE WIRELESS/WIRELESS MOUSE HP+Mouse PAD+BATERAI - s9000',
    price: 69000
  }
]);

// 6 - Insert Data Products to MongoDB
db.products.insertMany([
  {
    productId: "product26",
    videoId: 'sNgnwahAlzk', 
    link: 'https://www.tokopedia.com/khnshop/jas-hujan-setelan-jas-hujan-anti-rembes-khn-new-design-hijau-tni-dewasa?source=homepage.left_carousel.0.280152',
    title: 'Jas Hujan Setelan, Jas hujan anti rembes KHN New Design - hijau tni, dewasa',
    price: 115197
  },
  {
    productId: "product27",
    videoId: 'sNgnwahAlzk', 
    link: 'https://www.tokopedia.com/khnshop/jas-hujan-ares-stelan-baju-celana-premium-parasut-balon-all-size',
    title: 'Jas hujan ARES stelan baju celana premium - Parasut Balon, All Size',
    price: 70658
  },
  {
    productId: "product28",
    videoId: 'sNgnwahAlzk', 
    link: 'https://www.tokopedia.com/vippremium/earphone-samsung-akg-usb-type-c-headset-samsung-ori-handsfree-hf-type-c-ab7d8?src=topads',
    title: 'Earphone Samsung AKG USB Type C Headset Samsung Ori Handsfree - HF Type C',
    price: 83500
  },
  {
    productId: "product29",
    videoId: 'sNgnwahAlzk', 
    link: 'https://www.tokopedia.com/jbl-official-store/headset-type-c-samsung-original-stereo-noise-canceling-earphone-stereo?src=topads',
    title: 'Headset Type C Samsung Original Stereo Noise Canceling Earphone Stereo',
    price: 92500
  },
  {
    productId: "product30",
    videoId: 'sNgnwahAlzk', 
    link: 'https://www.tokopedia.com/urbanrepublic/samsung-audio-earphones-type-c-black',
    title: 'Samsung Audio Earphones Type C - Black',
    price: 249000
  }
]);

// 7 - Insert Data Products to MongoDB
db.products.insertMany([
  {
    productId: "product31",
    videoId: 'ig0S0vzxMBA', 
    link: 'https://www.tokopedia.com/khnshop/jas-hujan-setelan-jas-hujan-anti-rembes-khn-new-design-hijau-tni-dewasa?source=homepage.left_carousel.0.280152',
    title: 'Jas Hujan Setelan, Jas hujan anti rembes KHN New Design - hijau tni, dewasa',
    price: 115197
  },
  {
    productId: "product31",
    videoId: 'ig0S0vzxMBA', 
    link: 'https://www.tokopedia.com/khnshop/jas-hujan-ares-stelan-baju-celana-premium-parasut-balon-all-size',
    title: 'Jas hujan ARES stelan baju celana premium - Parasut Balon, All Size',
    price: 70658
  },
  {
    productId: "product32",
    videoId: 'ig0S0vzxMBA', 
    link: 'https://www.tokopedia.com/vippremium/earphone-samsung-akg-usb-type-c-headset-samsung-ori-handsfree-hf-type-c-ab7d8?src=topads',
    title: 'Earphone Samsung AKG USB Type C Headset Samsung Ori Handsfree - HF Type C',
    price: 83500
  },
  {
    productId: "product33",
    videoId: 'ig0S0vzxMBA', 
    link: 'https://www.tokopedia.com/jbl-official-store/headset-type-c-samsung-original-stereo-noise-canceling-earphone-stereo?src=topads',
    title: 'Headset Type C Samsung Original Stereo Noise Canceling Earphone Stereo',
    price: 92500
  },
  {
    productId: "product34",
    videoId: 'ig0S0vzxMBA', 
    link: 'https://www.tokopedia.com/urbanrepublic/samsung-audio-earphones-type-c-black',
    title: 'Samsung Audio Earphones Type C - Black',
    price: 249000
  }
]);