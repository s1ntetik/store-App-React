export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Roadside Picnic',
      author: 'Strugatsky Brothers',
      price: 25,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51dpiZ3d5SL._SX322_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'A Wild Sheep Chase',
      author: 'Haruki Murakami',
      price: 30,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51EoDZUfTcL._SX322_BO1,204,203,200_.jpg'
    },
    {
      id: 3,
      title: 'The Great Dune Trilogy',
      author: ' Frank Herbert',
      price: 49,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51WgknwnyGL._SX327_BO1,204,203,200_.jpg'
    },
    {
      id: 4,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      price: 15,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41HlaiDp5UL._SX330_BO1,204,203,200_.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
          resolve(this.data);
      }, 1000);
    })
  }

}