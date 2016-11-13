export const chooseBookBinding = (bookBinding) => {
    return {
        type: 'CHOOSE_BOOKBINDING',
        payload: bookBinding,
    };
};

export const chooseColor = (color) => {
    return {
        type: 'CHOOSE_COLOR',
        payload: color,
    };
};

export const choosePagesNumber = (pages) => {
    return {
        type: 'CHOOSE_PAGES_NUMBER',
        payload: pages,
    };
};

export const chooseGilding = (gilding) => {
    return {
        type: 'CHOOSE_GILDING',
        payload: gilding,
    };
};
