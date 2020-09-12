const orders = [
  {
    date: new Date('August 16, 2020 9:34'),
    // the price is unit price 
    items: [
      {
        name: 'Romaine Lettuce, 1 Head',
        price: 3.32,
        number: 2.0,
        img: 'https://m.media-amazon.com/images/I/81l3B5zz1NL._SS110_.jpg'
      },
      {
        name: 'Organic Bananas, One Banded Bunch (5 ct)',
        price: 1.39,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/71EeoyocPgL._SS110_.jpg'
      },
      {
        name: 'Mandarin Oranges, 3 lb Bag',
        price: 5.00,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/81BPouGvNIL._SS110_.jpg'
      },
      {
        name: 'Mandarin Oranges, 3 lb Bag',
        price: 5.00,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/81BPouGvNIL._SS110_.jpg'
      },
    ]
  },
  {
    date: new Date('July 30, 2020 11:39:00'),
    // the price is unit price 
    items: [
      {
        name: 'Mandarin Oranges, 3 lb Bag',
        price: 5.00,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/81BPouGvNIL._SS110_.jpg'
      },
      {
        name: 'Organic White Flesh Nectarine, One Medium',
        price: 1.40,
        number: 3.0,
        img: 'https://m.media-amazon.com/images/I/81dafgFFVZL._SS110_.jpg'
      },
      {
        name: 'Organic Whole Milk, 64 oz',
        price: 4.20,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/819P-RBj+CL._SS110_.jpg'
      },
    ]
  },
];

function getAllOrders() {
  return orders;
}

export { getAllOrders }