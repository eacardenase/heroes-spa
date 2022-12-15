import { useLocation, useNavigate } from 'react-router-dom';

import queryString from 'query-string';

import { HeroCard } from '../components';

import { useForm } from '../../hooks/useForm';

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q: query = '' } = queryString.parse(location.search);

    console.log(query);

    const { searchText, handleInputChange, handleFormReset } = useForm({
        searchText: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const searchInput = searchText.trim().toLowerCase();

        if (searchInput.length < 2) {
            return;
        }

        navigate(`?q=${searchInput}`);

        handleFormReset();
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
                            // autoComplete="off"
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

                    <div className="alert alert-primary">Search a hero</div>
                    <div className="alert alert-danger">
                        There are no results with <b> {query} </b>
                    </div>

                    {/* <HeroCard /> */}
                </div>
            </div>
        </>
    );
};
