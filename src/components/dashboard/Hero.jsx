// Hero.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar'
import { Carousel } from './Carousel'; // Adjust the path if Carousel is in a different folder
import Mango1 from '../../assets/carousel_mango.jpg'
import Mango2 from '../../assets/carousel_mango_1.jpg'
import Mango3 from '../../assets/Mango_2.jpeg'


const slides = [
  {
    id: '1',
    title: 'Premium Alphonso',
    subtitle: 'King of Mangoes',
    description: 'Experience the royal taste of authentic Alphonso mangoes, handpicked from the finest orchards of Maharashtra. Sweet, creamy, and absolutely divine.',
    image: Mango1,
    cta: {
      text: 'Order Alphonso',
      action: () => console.log('Order clicked')
    }
  },
  {
    id: '2',
    title: 'Fresh Kesar Mangoes',
    subtitle: 'Golden Sweetness',
    description: 'Indulge in the golden sweetness of Kesar mangoes from Gujarat. Known for their rich flavor and vibrant color, perfect for desserts and smoothies.',
    image: Mango2,
    cta: {
      text: 'Buy Kesar',
      action: () => console.log('Order clicked')
    }
  },
  {
    id: '3',
    title: 'Organic Dasheri',
    subtitle: 'Pure & Natural',
    description: 'Savor the authentic taste of organic Dasheri mangoes, grown without chemicals. Juicy, fibrous, and bursting with natural sweetness.',
    image: Mango3,
    cta: {
      text: 'Order Now',
      action: () => console.log('Order clicked')
    }
  },
  // Add more slides as needed
];

function Hero({ isAuthenticated, onLogin, onLogout }) {
  return (
    <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      <Carousel
        slides={slides}
        autoplay={true}
        showDots={true}
        showArrows={true}
      />
      
    </div>
  );
}

export default Hero;
