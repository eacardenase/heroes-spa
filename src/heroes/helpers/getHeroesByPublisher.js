// @ts-check

import { heroes } from '../data/heroes';

/**
 *
 * @param {string} publisher
 * @returns {Array<Object>}
 */
export const getHeroesByPublisher = (publisher) => {
    // console.log('Fui llamado');

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher.`);
    }

    return heroes.filter((hero) => hero.publisher === publisher);
};
