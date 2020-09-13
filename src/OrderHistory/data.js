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
        name: 'Cage-Free, Large, Brown Eggs, 1 Dozen',
        price: 2.99,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/81y-CAH1wUL._SS110_.jpg'
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
  {
    date: new Date('July 19, 2020 9:21'),
    // the price is unit price 
    items: [
      {
        name: 'Barilla Pasta, Thin Spaghetti, 16 oz',
        price: 2.56,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/71IDCT4ZHDL._SS110_.jpg'
      },
      {
        name: 'SeaPak Jumbo Butterfly Shrimp with Oven Crispy Breading, Frozen 9 ounces',
        price: 6.56,
        number: 3.0,
        img: 'https://m.media-amazon.com/images/I/71mjzUmNCgL._SS110_.jpg'
      },
      
    ]
  },
  {
    date: new Date('March 25, 2020 5:05'),
    // the price is unit price 
    items: [
      {
        name: 'Pepperidge Farm Butter Chessmen Cookies, 7.25 Ounce Package',
        price: 3.27,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/81w-TvUZ3QL._SS110_.jpg'
      },
      {
        name: 'Wonderful Halos Mandarins, 3lb Bag',
        price: 5.00,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/81wIGirq-wL._SS110_.jpg'
      },
      {
        name: 'Tyson Fully Cooked Chicken Nuggets, 32 oz. (Frozen)',
        price: 4.97,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/81TRUZNB07L._SS110_.jpg'
      },
      {
        name: 'Aqua Star, Raw, Peeled, Deveined, Tail-off Shrimp, 41-50 Count , 2 lb (Frozen)',
        price: 16.99,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/71UYspAxesL._SS110_.jpg'
      },
    ]
  },
  {
    date: new Date('Dec 16, 2019 8:56'),
    // the price is unit price 
    items: [
      {
        name: 'Coca-Cola, Coke Soda, 12 oz (pack of 12)',
        price: 5.46,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/813UygtWF-L._SS110_.jpg'
      },
      {
        name: 'Organic Kiwifruit, One Medium',
        price: 1.15,
        number: 4.0,
        img: 'https://m.media-amazon.com/images/I/61w8nLio7cL._SS110_.jpg'
      },
    ]
  },
  {
    date: new Date('Sep 11, 2019 6:00'),
    // the price is unit price 
    items: [
      {
        name: 'Ball Park, Angus Beef Franks Bun Size, 14 oz',
        price: 3.78,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/81QRi2myqNL._SS110_.jpg'
      },
      {
        name: 'Butterball, All Natural Fully Cooked Breakfast Sausage Patties, 0.5 lb',
        price: 3.15,
        number: 2.0,
        img: 'https://m.media-amazon.com/images/I/71gL+5UjZRL._SS110_.jpg'
      },
      {
        name: 'SeaPak Jumbo Butterfly Shrimp with Oven Crispy Breading, Frozen 9 ounces',
        price: 6.56,
        number: 3.0,
        img: 'https://m.media-amazon.com/images/I/71mjzUmNCgL._SS110_.jpg'
      },
    ]
  },
  {
    date: new Date('Nov 11, 2018 22:00'),
    // the price is unit price 
    items: [
      {
        name: 'Coca-Cola, Coke Soda, 12 oz (pack of 12)',
        price: 5.46,
        number: 1.0,
        img: 'https://m.media-amazon.com/images/I/813UygtWF-L._SS110_.jpg'
      },
    ]
  },
];

function getAllOrders() {
  return orders;
}

function getOrdersByDateFilter(filter) {
  // if not a number -> word filter, e.g. last 30 days
  if (isNaN(filter)) {
    switch (filter) {
      case 'All':
        return orders;
      
      case 'Last week':
        return orders.filter((value) => {return value.date - new Date().setDate(new Date().getDay() - 7) > 0});
    
      case 'Last 30 days':
        return orders.filter((value) => {return value.date - new Date().setDate(new Date().getDay() - 30) > 0});

      case 'Past 3 months':
        return orders.filter((value) => {return value.date - new Date().setMonth(new Date().getMonth() - 3) > 0});

      default:
        return orders;
    }
  } else {
    // if is number -> year filter
    return orders.filter((value) => {return value.date.getFullYear()=== filter });
  }
}

function getOrdersByItemSearch(item) {
  return orders.filter((value) => {
    return value.items.find((item) => item.name.includes(item)) !== null ? true : false;
  });
}

export { getAllOrders, getOrdersByDateFilter, getOrdersByItemSearch }