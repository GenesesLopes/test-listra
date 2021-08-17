import parsePrice from "../helpers/parsePrice";

const numberInstallments = [48, 12, 6];

const financingCalculation = (initialValue, prince) => {
    
    let totalSub = parseFloat(prince - initialValue).toFixed(2)

    return numberInstallments.map((dataInstallment) => {
        return {
            installment: dataInstallment,
            value: parsePrice(parseFloat(parseFloat(totalSub) / dataInstallment))
        }
    })
    
}

export default financingCalculation
