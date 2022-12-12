const fetchCarsListData = async () => {
    try {
        const response = await fetch("/api/cars", {
            method: "GET",
        });
        return response.json();
    } catch (e) {
        console.error(e)
    }
};

export {fetchCarsListData}
