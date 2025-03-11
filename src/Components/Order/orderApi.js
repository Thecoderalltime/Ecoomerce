export const creatOrder = (order) => {
    return new Promise(async (resolve, reject) => {
        const response = await fetch("http://localhost:5050/orders", {
            method: "POST",
            body: JSON.stringify(order),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        resolve({ data });
    });
};


export const fetchAllOrder = (pagination) => {

    let queryString = '';
    for (let key in pagination) {
        queryString += `${key}=${pagination[key]}&`
    }

    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:5050/orders?' + queryString);
        const totalOrder =  response.headers.get('X-Total-Count')
        const data = await response.json();
        resolve({data:{order: data, totalOrder: +totalOrder}});
    })
}
