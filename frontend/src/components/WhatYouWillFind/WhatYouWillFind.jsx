import React from 'react';
import './TeamCarousel.css';

const team = [
  {
    id: 1,
    name: 'Bathrooms & fixtures',
    image: 'https://ik.imagekit.io/ijsd2xvnc/Inhaus/steven-ungermann-Aac7IlKnYX8-unsplash.jpg',
    description: 'Bathroom environments showcasing tapware, vanities, tiles and finishes.',
  },
  {
    id: 2,
    name: 'Materials, colours & finishes',
    image: 'https://ik.imagekit.io/ijsd2xvnc/Inhaus/mohammad-lotfian-D6mlvnGbAVg-unsplash.jpg',
    description: 'Explore a wide range of colours, finishes, stones and surface options you can see and touch.',
  },
  {
    id:3,
    name: 'Tiles, flooring & surfaces',
    image: 'https://ik.imagekit.io/ijsd2xvnc/Inhaus/maria-kovalets-SMHlc6u80-A-unsplash.jpg',
    description: 'Flooring, tiles and stone options to help you compare materials and make confident choices.',
  }
];

export default function TeamCarousel() {
  return (
    <section className="team-carousel">
      <h2 className="team-carousel__title">What you will find</h2>
      <div className="team_underline"></div>

      <div className="team-carousel__container">
        {team.map((member) => (
          <div className="team-card" key={member.id}>

            {/* CARD IMAGE */}
            <div
              className="team-card__image"
              style={{ backgroundImage: `url(${member.image})` }}
            >
              {/* TITLE */}
              <p className="team-card__name">
                {member.name.includes('&') ? (
                  <>
                    {member.name.split('&')[0].trim()} <br />
                    & {member.name.split('&')[1].trim()}
                  </>
                ) : (
                  member.name
                )}
              </p>

              {/* HOVER DESCRIPTION */}
              <div className="team-card__overlay">
                <p className="team-card__description">{member.description}</p>
              </div>
            </div>

            {/* MOBILE DESCRIPTION (visible only on mobile) */}
            <p className="team-card__mobile-text">{member.description}</p>

          </div>
        ))}
      </div>
    </section>
  );
}

