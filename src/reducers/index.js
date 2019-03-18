import updateBookList from './book-list';
import updateShoppingCart from './shoping-cart';


const reducer = (state, action) => {

  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    gitLink: `https://github.com/s1ntetik/todoApp-React.git`
  }

};

export default reducer;