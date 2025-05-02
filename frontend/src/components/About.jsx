import React from 'react';
import './About.css';
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div className='about-us'>
      <div className='restaurant-section'>
        <img src={assets.restaurant} alt='Our Restaurant' className="restaurant-photo" />
        <div className='restaurant-description'>
          <h3>About our Restaurant</h3>
          <p>Our restaurant, established in 2025, was built based on the aspiration to provide an 
            out-of-this-world dining experience that balances gastronomic art with a warm ambiance. 
            Engineered by global culinary masters, seasoned architects, and hospitality professionals, 
            our restaurant blends modern design with warmth and welcoming surroundings, appealing to food 
            lovers and casual eaters alike.
            <br /> <br />
            Our restaurant is well-known for our commitment to excellence, from the especially curated menu 
            to the high-quality ingredients that we acquire from our trusted local and international sources.
            We deal in several cuisines, offering a diverse range of dishes based on classic flavors, contemporary
            trends, and international culinary developments. Every meal is well-prepared by our experienced chefs,
            so every bite provides a perfect combination of taste, texture, and presentation.
            <br /><br />
            As part of our sustainability mission, we work hard to minimize our environmental footprint by 
            practicing environmentally conscious methods, such as reducing food waste, employing biodegradable 
            packaging, and working with local farmers and suppliers who share our vision.
           </p>
        </div>
      </div>

      <h2>Our Chef</h2>
      <div className='team-grid'>
        <div className='team-member'>
          <img src={assets.chef_1} alt='Chef Anna' className="photo" />
          <p><strong>Chef Anna</strong></p>
          <p> A master chef with over 10 years of experience, Chef Anna is known 
            for his ability to blend traditional techniques with modern culinary innovation, 
            creating unforgettable dishes.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.chef_2} alt='Chef John' className="photo" />
          <p><strong>Chef John</strong></p>
          <p>A specialist in Asian cuisine, Chef John crafts authentic and bold flavors, 
            using only the finest ingredients and time-honored techniques to bring out the 
            best in every dish.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.chef_3} alt='Chef Toby' className="photo" />
          <p><strong>Chef Toby</strong></p>
          <p>An expert in Italian cuisine, Chef Toby’s signature pasta dishes and handcrafted
             pizzas transport diners straight to the heart of Italy with every bite.
          </p>
        </div>
        <div className='team-member'>
          <img src= {assets.chef_4} alt='Chef Michael' className="photo" />
          <p><strong>Chef Michael</strong></p>
          <p>A renowned pastry chef, Michael has a passion for crafting exquisite desserts, 
            from delicate pastries to rich, decadent cakes, each made with precision and artistry.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.chef_5} alt='Chef Olivia' className="photo" />
          <p><strong>Chef Olivia</strong></p>
          <p>A grilling expert, Chef Olivia is celebrated for his mastery of steak, seafood,
             and barbecued delicacies, ensuring each dish is perfectly seasoned and cooked to perfection.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.chef_6} alt='Chef Emily' className="photo" />
          <p><strong>Chef Emily</strong></p>
          <p>An advocate for farm-to-table dining, Chef Emily carefully selects fresh, organic 
            ingredients to create wholesome and nutritious meals with a modern twist.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.chef_7} alt='Chef Daniel' className="photo" />
          <p><strong>Chef Juna</strong></p>
          <p>With expertise in fusion cuisine, Chef Daniel experiments with flavors from around
             the world, creating exciting, unexpected combinations that delight the senses.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.chef_8} alt='Chef Andre' className="photo" />
          <p><strong>Chef Andre</strong></p>
          <p>A bread and pastry specialist, Chef Andre artisanal loaves and gourmet baked goods
             fill the air with irresistible aromas, offering warmth and comfort in every bite.</p>
        </div>
      </div>


      <hr />  
      <h2>Our Staff</h2>
      <div className='team-grid'>
        <div className='team-member'>
          <img src= {assets.customer} alt='Ian - Customer Experience Specialist' className="photo" />
          <p><strong>Ian – Customer Experience Specialist</strong></p>
          <p>With a welcoming smile and a keen attention to detail,
             Ian ensures that every guest feels at home from the moment they walk in.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.kitchen} alt='David - Kitchen Hygiene Supervisor' className="photo" />
          <p><strong>David – Kitchen Hygiene Supervisor</strong></p>
          <p>David maintains the highest cleanliness and food safety standards,
             ensuring that every dish is prepared in a pristine environment.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.hospitality} alt='Samantha - Hospitality Manager' className="photo" />
          <p><strong>Samantha – Hospitality Manager</strong></p>
          <p>With years of experience in luxury dining, Samantha oversees
             the front-of-house operations, guaranteeing impeccable service for every guest.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.head} alt='Liam - Head Waiter' className="photo" />
          <p><strong>Liam – Head Waiter</strong></p>
          <p>Liam’s in-depth knowledge of our menu allows her to provide personalized 
            recommendations, ensuring that every customer finds the perfect dish.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.beverage} alt='Olivia - Beverage Expert' className="photo" />
          <p><strong>Olivia – Beverage Expert</strong></p>
          <p>From hand-crafted cocktails to carefully curated wine pairings, 
            Olivia enhances the dining experience with her expert knowledge of beverages.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.events} alt='Ethan - Events Coordinator' className="photo" />
          <p><strong>Ethin – Events Coordinator</strong></p>
          <p>Whether it’s a private gathering or a corporate event, Ethin ensures 
            that every occasion is seamlessly planned and executed with excellence.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.sustainability} alt='Ava - Sustainability' className="photo" />
          <p><strong>Ava – Sustainability Advocate</strong></p>
          <p>Passionate about eco-friendly practices, Ava leads our efforts in reducing
             waste and ensuring our restaurant operates with environmental responsibility.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.quality} alt='James - Quality Control Specialist' className="photo" />
          <p><strong>James – Quality Control Specialist</strong></p>
          <p>James is committed to maintaining the highest culinary standards,
             meticulously inspecting every dish before it reaches the table.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.reservation} alt='Sophia - Reservation Manager' className="photo" />
          <p><strong>Starla – Reservation Manager</strong></p>
          <p>With a talent for organization and customer service, Starla ensures
             that every booking is handled smoothly, making it easy for guests to secure
              the perfect dining experience.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.bartender} alt='Benjamin - Head Bartender' className="photo" />
          <p><strong>Benjamin – Head Bartender</strong></p>
          <p>A mixology expert, Benjamin creates signature cocktails and carefully 
            curated drinks that perfectly complement our dishes, providing a unique and refreshing experience.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.guest} alt='Charlotte - Guest Relations Coordinator' className="photo" />
          <p><strong>Charlotte – Guest Relations Coordinator</strong></p>
          <p>Charlotte goes above and beyond to make sure every guest feels valued, handling special 
            requests and feedback with warmth and professionalism.</p>
        </div>
        <div className='team-member'>
          <img src= {assets.inventory} alt='Henry – Inventory and Supply Manager' className="photo" />
          <p><strong>Henry – Inventory and Supply Manager</strong></p>
          <p>Behind the scenes, Henry ensures that our kitchen is always stocked with the freshest
             ingredients and high-quality products, keeping everything running smoothly.</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
