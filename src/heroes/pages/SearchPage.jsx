import { useLocation, useNavigate } from 'react-router-dom';

import queryString from 'query-string';

import { HeroCard } from '../components';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q: query = '' } = queryString.parse(location.search);
    const heroes = getHeroesByName(query);

    const showSearch = query.length === 0;
    const showError = query.length > 0 && heroes.length === 0;

    const { searchText, handleInputChange, handleFormReset } = useForm({
        searchText: query,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <h1>SearchPage</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form className="form-control" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {/* {query === '' ? (
                        <div className="alert alert-primary">Search a hero</div>
                    ) : (
                        heroes.length === 0 && (
                            <div className="alert alert-danger">
                                There are no results with <b> {query} </b>
                            </div>
                        )
                    )} */}

                    <div
                        className="alert alert-primary animate__animated animate__fadeIn"
                        style={{
                            display: showSearch ? '' : 'none',
                        }}
                    >
                        Search a hero
                    </div>

                    <div
                        className="alert alert-danger animate__animated animate__fadeIn"
                        style={{
                            display: showError ? '' : 'none',
                        }}
                    >
                        There are no results with <b> {query} </b>
                    </div>

                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    );
};
