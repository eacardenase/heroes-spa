import { HeroCard } from '../components';

export const SearchPage = () => {
    return (
        <>
            <h1>SearchPage</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form className="form-control">
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                        />

                        <div className="btn btn-outline-primary mt-1">
                            Search
                        </div>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-primary">Search a hero</div>
                    <div className="alert alert-danger">
                        There are no results
                    </div>

                    {/* <HeroCard /> */}
                </div>
            </div>
        </>
    );
};
