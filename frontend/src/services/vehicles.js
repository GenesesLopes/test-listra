import Api from "./api";

// const dataFaker = [
//     { description: 'Onix Branco', price: 1000.35 },
//     { description: 'Corsa Vermelho', price: 120.30 },
//     { description: 'Corsa Branco', price: 140.98 },
//     { description: 'Onix Vermelho', price: 140.98 },
//     { description: 'Gol Branco', price: 140.98 },
//     { description: 'Palio Branco', price: 140.98 },
//     { description: 'Gol Vermelho', price: 140.98 },
//     { description: 'Palio Vermelho', price: 140.98 },
// ];

// const returnFake = (data, description, current_page, per_page) => {

//     let dataFilter = []

//     if(description !== '')
//         data = data.filter(data => data.description.indexOf(description) !== -1);

//     let last_page = Math.ceil(data.length / per_page);

//     if (current_page <= last_page) {
//         let limit = (current_page * per_page) - per_page
//         dataFilter = data.slice(
//             limit,
//             limit + per_page
//         )
//     }

//     return {
//         data: {
//             total: data.length,
//             per_page,
//             current_page,
//             last_page,
//             data: dataFilter
//         }
//     }
// }

const getVehicles = async (description = '', current_page = 1, per_page = 20) => {

    let params = {
        current_page,
        per_page,
    }

    if (description !== '') {
        params = {...params, q: description}
    } 

    return await Api.get('/vehicles', {
        params
    });

    // return await new Promise((resolve) => {
    //     setTimeout(() => {
    //         let newDataFake = [];
    //         for(let i = 0; i < 100; i++){
    //             let random = Math.floor(Math.random() * dataFaker.length)
    //             newDataFake.push({
    //                 id: i,
    //                 ...dataFaker[random]
    //             })
    //         }
    //         resolve(returnFake(newDataFake, description, current_page, per_page))
    //     }, 2000)
    // });
}

export {
    getVehicles
}