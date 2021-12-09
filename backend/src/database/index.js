const database = (persistence = {
    'never-say-never': {
        title: 'Never say never',
        slug: 'never-say-never',
        isbn: '193-454-3454',
        author: 'Lisa Wingate',
        publisher: 'Simon & Schuster',
        synopsis: `Kai Miller floats through life like driftwood tossed by waves. She's never put down roots in any one place--and she doesn't plan to. But when a chaotic hurricane evacuation lands her in Daily, Texas, she begins to think twice about her wayfaring existence. And when she meets hometown-boy Kemp Eldridge, she can almost picture settling down in Daily--until she discovers he may be promised to someone else. Daily has always been a place of refuge for those the wind blows in, but for Kai, it looks like it will be just another place to leave behind. Then again, Daily always has a few surprises in store--especially when Aunt Donetta has cooked up a scheme.`
    },
    'una-vida-con-proposito': {
        title: 'Una vida con proposito',
        slug: 'una-vida-con-proposito',
        isbn: '234-343-3434',
        author: 'Rick Warrens',
        publisher: 'Zondervan'
    }
}) => {

    const getBook = async slug =>
        await new Promise(resolve => resolve(persistence[slug]));

    const getBooks = async () => new Promise(resolve => {
        resolve(Object.values(persistence))
    });

    const setBook = async (slug, bookData) =>
        new Promise(resolve => {
            persistence[slug] = bookData;
            resolve(bookData);
        });

    return {
        getBook,
        setBook,
        getBooks
    };
};

export default database;