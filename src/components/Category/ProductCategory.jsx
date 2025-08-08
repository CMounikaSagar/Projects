import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useCart } from '../Cart/CartContext';
import Footer from '../Navbar/Footer';
import Navbar from '../Navbar/Navbar';

const ProductCategory = ({ isAuthenticated, onLogin, onLogout }) => {
  const [wishlist, setWishlist] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const pageSize = 8;
  const { addToCart, toast } = useCart();

  // --- FUNCTION 1: Fetch paginated list of ALL products ---
  const fetchPaginatedProducts = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:8000/products/', {
        params: {
          page,
          page_size: pageSize,
        }
      });

      setProducts(res.data.results);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      
      const count = res.data.count;
      setTotalPages(Math.ceil(count / pageSize)); // This will show pagination
      setCurrentPage(page);
      setError(null);

    } catch (err) {
      console.error("Failed to fetch paginated products:", err);
      setError("Could not load products. Please try again later.");
      setProducts([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  }, [pageSize]); // useCallback dependency

  // --- FUNCTION 2: Fetch products for a SPECIFIC category ---
  const fetchProductsByCategory = useCallback(async (categoryId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/categories/${categoryId}/`);
      // The API returns an object with a 'products' key
      setProducts(response.data.products);
      
      // Since this endpoint is not paginated, we hide the pagination controls
      setTotalPages(0);
      setCurrentPage(1);
      setNextPage(null);
      setPrevPage(null);
      setError(null);

    } catch (err) {
      console.error(`Failed to fetch products for category ${categoryId}:`, err);
      setError("Could not load products for this category.");
      setProducts([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  }, []);

  // --- Initial Data Fetching on Component Mount ---
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const catRes = await axios.get('http://localhost:8000/categories/');
        setCategories(catRes.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError("Could not load product categories.");
      }
      // Fetch the first page of all products when the component first loads
      await fetchPaginatedProducts(1);
    };

    fetchInitialData();
  }, [fetchPaginatedProducts]);


  // --- Event Handlers ---

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    // Use the correct fetching function based on the selection
    if (categoryId === 'All') {
      fetchPaginatedProducts(1); // Fetch page 1 of all products
    } else {
      fetchProductsByCategory(categoryId);
    }
  };
  
  // This handler now only works for the paginated "All" products view
  const handlePageClick = (page) => {
    if (activeCategory === 'All' && page >= 1 && page <= totalPages) {
      fetchPaginatedProducts(page);
    }
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  // --- Render Logic (No changes needed below this line) ---
  if (loading && !products.length) return <div className="flex justify-center items-center h-64"><div className="w-10 h-10 border-4 border-yellow-300 border-t-yellow-500 rounded-full animate-spin"></div></div>;
  if (error) return <div className="bg-red-100 text-red-700 p-4 rounded text-center">{error}</div>;


  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      <div className='bg-gradient-to-r from-yellow-50 to-yellow-100 '>
        <main className="p-6 md:px-50">
          <h1 className="text-4xl font-extrabold text-orange-600 mt-8">Welcome to MangoDelights 🥭</h1>
          <p className="mt-4 text-lg text-orange-500">
            Fresh, juicy, and handpicked ripe mangos delivered straight from the orchard to your doorstep.
          </p>
        </main>
        <section className="py-7 bg-white bg-gradient-to-r from-yellow-50 to-yellow-100" id="products">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white shadow rounded-lg p-5 mb-8">
              <h3 className="text-lg font-semibold mb-4">Filter Products</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  className={`px-4 py-2 rounded-full cursor-pointer text-sm ${activeCategory === 'All' ? 'bg-yellow-400 text-white' : 'bg-yellow-100 text-gray-700'}`}
                  onClick={() => handleCategoryClick('All')}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full cursor-pointer text-sm ${activeCategory === category.id ? 'bg-yellow-400 text-white' : 'bg-yellow-100 text-gray-700'}`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    {category.category_name}
                  </button>
                ))}
              </div>
            </div>

            {loading && <div className="flex justify-center items-center h-64"><div className="w-10 h-10 border-4 border-yellow-300 border-t-yellow-500 rounded-full animate-spin"></div></div>}
            
            {!loading && products.length === 0 && (
              <div className="text-center py-10">
                  <p className="text-gray-500 text-xl">No products found.</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 overflow-hidden">
                   {/* I used product.image, but your original code had product.image, make sure this matches your API response */}
                  <img src={product.image || 'https://via.placeholder.com/300'} alt={product.Product_name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    {/* The category endpoint might not return category_name on each product, so handle this gracefully */}
                    <div className="text-xs uppercase text-yellow-700 mb-1">{product.category_name || activeCategory}</div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2">{product.Product_name}</h3>
                    <div className="text-lg font-bold text-yellow-500 mb-3">${product.Price.toFixed(2)}</div>
                    <div className="flex items-center justify-between gap-2">
                      <button onClick={() => addToCart(product.id)} className="bg-yellow-400 text-white px-4 py-2 rounded font-semibold w-full hover:bg-yellow-500">
                        Add to Cart
                      </button>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`text-xl p-2 ${wishlist.includes(product.id) ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-400`}
                      >
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- PAGINATION (Now works correctly) --- */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-10 gap-2">
                <button
                  disabled={!prevPage}
                  onClick={() => handlePageClick(currentPage - 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-yellow-400 hover:text-white transition-colors ${
                    !prevPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageClick(page)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full font-medium shadow transition-colors ${
                        currentPage === page ? 'bg-yellow-400 text-white' : 'bg-white text-gray-800 hover:bg-yellow-100'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  disabled={!nextPage}
                  onClick={() => handlePageClick(currentPage + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-yellow-400 hover:text-white transition-colors ${
                    !nextPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            )}
            
          </div>
        </section>
      </div>

      {toast && (
        <div className="fixed bottom-5 right-5 bg-white shadow-lg px-4 py-3 rounded flex items-center gap-3 z-50 transition-opacity duration-300">
          <i className="fas fa-check-circle text-yellow-500 text-xl"></i>
          <span>{toast}</span>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductCategory;