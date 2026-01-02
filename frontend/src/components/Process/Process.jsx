import React from 'react';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Visit the <br/> showroom',
    text: `Explore kitchens, bathrooms, materials and finishes in a real-life setting.`,
    image: 'https://ik.imagekit.io/ijsd2xvnc/Inhaus/IMG_1128.JPG',
    flip: false
  },
  {
    number: '02',
    title: 'Get guided <br/> support',
    text: `Receive light guidance from our team to help you navigate the showroom and explore relevant spaces.`,
    image: 'https://ik.imagekit.io/ijsd2xvnc/Inhaus/mohammad-lotfian-D6mlvnGbAVg-unsplash.jpg',
    flip: true
  },
  {
    number: '03',
    title: 'Plan your <br/>& next steps',
    text: `Leave with clearer ideas and a better understanding of what’s possible for your renovation.`,
    image: 'https://ik.imagekit.io/ijsd2xvnc/Inhaus/pickawood-ZRVSxFkbUss-unsplash.jpg',
    flip: false
  }
];

const OurProcess = () => {
  return (
    <section className="our-process">
      <div className="container">
        <h2>Our Process</h2>
        <div className="underline" />

        {steps.map(({ number, title, text, image, flip }, index) => (
          <div key={index} className={`process-step ${flip ? 'flip' : ''}`}>
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="text">
              <span className="step-number">{number}</span>
              <h3 dangerouslySetInnerHTML={{ __html: title.replace(/(.*?)(\s+)(\S+)$/, '$1$2<strong>$3</strong>') }}></h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;