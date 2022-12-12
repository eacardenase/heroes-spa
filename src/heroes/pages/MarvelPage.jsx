import { HeroList } from '../components';

export const MarvelPage = ({ publisher }) => {
    return (
        <>
            <h1>Marvel Comics</h1>
            <hr />

            <ul>
                <HeroList publisher="Marvel Comics" />
            </ul>
        </>
    );
};
