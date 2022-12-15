import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const CharactersByHero = ({ alter_ego, characters }) => {
    return alter_ego === characters ? null : <p>{characters}</p>;
};

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const heroImgUrl = `/assets/heroes/${id}.jpg`;

    // const charactersByHero = <p>{characters}</p>;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img
                            src={heroImgUrl}
                            className="card-img"
                            alt={superhero}
                        />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            <CharactersByHero
                                alter_ego={alter_ego}
                                characters={characters}
                            />

                            <p className="card-text">
                                <small className="text-muted">
                                    {first_appearance}
                                </small>
                            </p>

                            <Link to={`/hero/${id}`}>More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroCard.propTypes = {
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
};
