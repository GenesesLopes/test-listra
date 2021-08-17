const dataFaker = [
    { id: 'a', description: 'Onix Branco', price: 1000.35 },
    { id: 'b', description: 'Corsa Vermelho', price: 120.30 },
    { id: 'c', description: 'Corsa Branco', price: 140.98 },
    { id: 'd', description: 'Onix Vermelho', price: 140.98 },
    { id: 'e', description: 'Gol Vermelho', price: 140.98 },
    { id: 'f', description: 'Palio Branco', price: 140.98 },
    { id: 'g', description: 'Gol Vermelho', price: 140.98 },
    { id: 'h', description: 'Palio Vermelho', price: 140.98 },
];

const returnFake = (data, description, current_page, per_page) => {
    
    let last_page = Math.ceil(data.length / per_page);
    let dataFilter = []
    if(description !== '')
        data = data.filter(data => data.description.indexOf(description) !== -1);
    
    if (current_page <= last_page) {
        let limit = (current_page * per_page) - per_page
        dataFilter = data.slice(
            limit,
            limit + per_page
        )
    }

    return {
        data: {
            total: data.length,
            per_page,
            current_page,
            last_page,
            data: dataFilter
        }
    }
}

const getVehicles = async (description = '', current_page = 1, per_page = 2) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(returnFake(dataFaker, description, current_page, per_page))
        }, 2000)
    });
}

export {
    getVehicles
}