import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import { useInView } from 'react-intersection-observer';

const ExploreMenu = ({ category, setCategory }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the element is visible
    triggerOnce: true, // Only trigger once
  });

  return (
    <div
      ref={ref}
      className={`explore-menu ${inView ? 'animate' : ''}`}
      id="explore-menu"
    >
      <h1>Explore Our Menu</h1>
      <p className={`explore-menu-text ${inView ? 'animate' : ''}`}>
        Choose from a diverse Menu Featuring a delectable array of dishes. Our
        Mission is to satisfy your creavings and delevate your dining experience.
      </p>
      <div className={`explore-menu-list ${inView ? 'animate' : ''}`}>
        {menu_list.map((item, index) => {
          return (
            <div
              className={`explore-menu-list-item ${inView ? 'animate' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }} // Add a delay for each item
              onClick={() => setCategory(item.menu_name)}
              key={index}
            >
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;