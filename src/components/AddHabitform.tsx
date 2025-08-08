import React from 'react';
import SearchBar from './components/SearchBar';

// Define the shape of our User and Product data
interface User {
  id: number;
  name: string;
}

interface Product {
  id: string;
  title: string;
  price: number;
}

// 1. Define the props interface with a generic type 'T'
interface ListProps<T> {
  items: T[]; // An array of items of type T
  renderItem: (item: T) => React.ReactNode; // A function that receives an item of type T
}

// 2. Use the generic type 'T' in the component function signature
// We add `<T extends {}>` to tell TypeScript that T will be some kind of object.
// It's good practice and can help avoid certain errors.
export function List<T extends object>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        // Using index as a key here for simplicity. In a real app, use a unique ID from the item.
        <li key={index}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

// --- How to USE the generic component ---

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const products: Product[] = [
  { id: 'a1', title: 'Headphones', price: 99 },
  { id: 'b2', title: 'Keyboard', price: 120 },
];

function App() {
  return (
    <div>
      <h2>User List</h2>
      <List<User>
        items={users}
        renderItem={(user) => (
          // TypeScript knows 'user' is of type 'User' here!
          // You get full autocompletion for user.id and user.name
          <span>{user.name}</span>
        )}
      />

      <h2>Product List</h2>
      <List<Product>
        items={products}
        renderItem={(product) => (
          // TypeScript knows 'product' is of type 'Product'!
          // You get full autocompletion for product.title, product.price, etc.
          <span>{product.title} - ${product.price}</span>
        )}
      />
      <SearchBar/>
    </div>
  );
  
}

export default App;