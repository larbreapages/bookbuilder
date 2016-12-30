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
        traditional: {
            small: 11.57,
            medium: 18.27,
            large: 28.83,
        },
    };

    return pricing[bookbinding][format];
};

const computePagePrice = (bookbinding, format, pages) => {
    const pricing = {
        traditional: {
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
    };

    return (pricing[bookbinding][format].paper * pages) + pricing[bookbinding][format].cover;
};

const computePrice = (bookbinding, format, pages, gilding) => {
    return computeFormatPrice(bookbinding, format) +
           computePagePrice(bookbinding, format, pages) +
           computeGildingPrice(gilding);
};

export default computePrice;
