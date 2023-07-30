// Make database "tokoplay"
use.tokoplay;

// Insert Data Videos to MongoDB
db.videos.insertMany([
  {
    videoId: 'jOTfBlKSQYY',
    thumbnailUrl: 'https://img.youtube.com/vi/jOTfBlKSQYY/maxresdefault.jpg'
  },
  {
    videoId: 'mz4cRJcJkpw',
    thumbnailUrl: 'https://img.youtube.com/vi/mz4cRJcJkpw/maxresdefault.jpg'
  }, 
  {
    videoId: 'yB9_GWRjTg4',
    thumbnailUrl: 'https://img.youtube.com/vi/yB9_GWRjTg4/maxresdefault.jpg'
  }, 
  {
    videoId: 'FEcOIJbhGHI',
    thumbnailUrl: 'https://img.youtube.com/vi/FEcOIJbhGHI/maxresdefault.jpg'
  }, 
  {
    videoId: 'ig0S0vzxMBA',
    thumbnailUrl: 'https://img.youtube.com/vi/ig0S0vzxMBA/maxresdefault.jpg'
  }, 
  {
    videoId: 'KiKUN4i1SeU',
    thumbnailUrl: 'https://img.youtube.com/vi/KiKUN4i1SeU/maxresdefault.jpg'
  },
  {
    videoId: 'sNgnwahAlzk',
    thumbnailUrl: 'https://img.youtube.com/vi/sNgnwahAlzk/maxresdefault.jpg'
  }
]);

// Insert Data Products to MongoDB
db.products.insertMany([
  {
    productId: "product1",
    videoId: 'jOTfBlKSQYY', 
    link: 'https://example.com/product1',
    title: 'Product 1',
    price: 19.99
  },
  {
    productId: "product2",
    videoId: 'jOTfBlKSQYY', 
    link: 'https://example.com/product2',
    title: 'Product 2',
    price: 25.99
  },
  {
    productId: "product3",
    videoId: 'jOTfBlKSQYY', 
    link: 'https://example.com/product3',
    title: 'Product 3',
    price: 9.99
  },
  {
    productId: "product4",
    videoId: 'jOTfBlKSQYY', 
    link: 'https://example.com/product4',
    title: 'Product 4',
    price: 14.50
  },
  {
    productId: "product5",
    videoId: 'jOTfBlKSQYY', 
    link: 'https://example.com/product5',
    title: 'Product 5',
    price: 29.99
  },
  {
    productId: "product6",
    videoId: 'mz4cRJcJkpw', 
    link: 'https://example.com/product6',
    title: 'Product 6',
    price: 8.75
  },
  {
    productId: "product7",
    videoId: 'mz4cRJcJkpw', 
    link: 'https://example.com/product7',
    title: 'Product 7',
    price: 12.99
  },
  {
    productId: "product8",
    videoId: 'mz4cRJcJkpw', 
    link: 'https://example.com/product8',
    title: 'Product 8',
    price: 21.50
  },
  {
    productId: "product9",
    videoId: 'yB9_GWRjTg4', 
    link: 'https://example.com/product9',
    title: 'Product 9',
    price: 16.25
  },
  {
    productId: "product10",
    videoId: 'yB9_GWRjTg4', 
    link: 'https://example.com/product10',
    title: 'Product 10',
    price: 24.99
  }
]);
  