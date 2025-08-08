import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  // Here is our function declaration
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // We can check which key was pressed using the 'event' object
    if (event.key === 'Enter') {
      // Prevent the default form submission behavior if it's in a <form>
      event.preventDefault(); 
      
      // Because of our specific type, TypeScript knows `event.target.value` is valid!
      console.log(`Searching for: ${query}`);
      
      // You could also use the state variable here
      alert(`You pressed Enter! Submitting search for: "${query}"`);
    }

    if (event.key === 'Escape') {
      // Example: Clear the input when Escape is pressed
      setQuery('');
    }
  };

  return (
    <div>
      <label htmlFor="search">Press Enter to Search:</label>
      <input
        id="search"
        type="text"
        placeholder="Type something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // We attach our function to the onKeyDown event listener of the input
        onKeyDown={handleKeyDown} 
      />
    </div>
  );
};

export default SearchBar;