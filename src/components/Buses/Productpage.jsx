import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Divide } from 'lucide-react';


const ProductPage = () => {
  const [cat, setCat] = useState([]);
  const [inViewIndices, setInViewIndices] = useState([]);

  const encryptedId = (id)=>{

    return window.btoa(id);

  }


  const addToRefs = (el, index) => {
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInViewIndices((prev) => [...new Set([...prev, index])]);
        } else {
          setInViewIndices((prev) => prev.filter((i) => i !== index));
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  };

  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/categories/');
        setCat(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      {/* Categories Section */}
      <section className="py-12 bg-white" id="categories">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Explore Categories</h2>
          <p className="text-gray-500 mb-8">
            Browse through our wide range of mango products organized by categories.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {cat.map((item) => (
              <div
                key={item.id}
                ref={(el) => addToRefs(el, item.id)}
                className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl  cursor-pointer transition-all duration-1000 ease-in-out 
                  ${inViewIndices.includes(item.id)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-10 scale-95'
                  }`}
                style={{
                  transitionDelay: `${item.id * 100}ms`,
                }}
                onClick={() => (window.location.href = `/categories/${encryptedId(item.id)}}`)}
              >
                <img
                  src={item.cat_image || '/placeholder.png'}
                  alt={item.category_name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {item.category_name}
                  </h3>
                  <p className="text-white text-sm">products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </>
  );
};

export default ProductPage;
