// @TODO: Refactoring prices with constants

const computeGildingPrice = (gilding) => {
    const gildingCharacters = gilding.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s/g, '').length;

    let price = 0;
    if (gildingCharacters >= 1 && gildingCharacters <= 3) {
        price = 2.80;
    } else if (gildingCharacters >= 4 && gildingCharacters <= 6) {
        price = 3.50;
    } else if (gildingCharacters >= 7 && gildingCharacters <= 10) {
        price = 5.40;
    } else if (gildingCharacters >= 10 && gildingCharacters <= 14) {
        price = 7.50;
    } else if (gildingCharacters >= 14 && gildingCharacters <= 20) {
        price = 9.50;
    } else if (gildingCharacters >= 21 && gildingCharacters <= 25) {
        price = 10;
    }

    return price;
};

const computeFormatPrice = (bookbinding, format) => {
    const pricing = {
        modern: {
            small: 5.30 + 6.27,
            medium: 10.43 + 7.84,
            large: 17.86 + 10.97,
        },
        conservation: {
            small: 8.93 + 9.41,
            medium: 12.30 + 10.98,
            large: 16.10 + 14.11,
        },
    };

    return pricing[bookbinding][format];
};

const computePagePrice = (bookbinding, format, pages) => {
    const pricing = {
        modern: {
            small: {
                paper: (((0.45 + 3.05 + 7.53) / 6) / 12),
                cover: 1.02 + 2.24,
            },
            medium: {
                paper: (((0.89 + 3.53 + 8.68) / 6) / 12),
                cover: 1.18 + 2.89,
            },
            large: {
                paper: (((1.78 + 4.18 + 11.29) / 6) / 12),
                cover: 1.39 + 3.76,
            },
        },
        conservation: {
            small: {
                paper: (((0.59 + 3.05 + 3.53) / 6) / 12),
                cover: 0,
            },
            medium: {
                paper: (((1.19 + 3.53 + 4.03) / 6) / 12),
                cover: 0,
            },
            large: {
                paper: (((1.78 + 4.18 + 5.64) / 6) / 12),
                cover: 0,
            },
        },
    };

    return (pricing[bookbinding][format].paper * pages) + pricing[bookbinding][format].cover;
};

const round = (value, decimals) => Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
export const computeTVA = price => round((price * 20) / 100, 2);

const computePrice = ({ bookbinding, format, pages, gilding }) => {
    return round(computeFormatPrice(bookbinding, format) +
           computePagePrice(bookbinding, format, pages) +
           computeGildingPrice(gilding), 2);
};
export default computePrice;
