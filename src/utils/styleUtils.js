const getBadgeClasses = (number) => {
    if (number < 0) {
        return 'badge m-2 bg-danger';
    } else {
        if (number === 0) {
            return 'badge m-2 bg-warning';
        } else {
            return 'badge m-2 bg-success';
        }
    }
}


export {
    getBadgeClasses
};
