import { BIcon } from 'bootstrap-vue'
import { VMoney } from 'v-money'
import parsePrice from '../../helpers/parsePrice';
import financingCalculation from '../../utils/financingCalculation';
export default {
    name: 'Form',
    components: {
        BIcon
    },
    data() {
        return {
            selected: null,
            dataVehicles: [],
            calculateFinancing: [],
            initialValue: 0.00,
            money: {
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                precision: 2
            }
        }
    },
    directives: { money: VMoney },
    watch: {
        selected: function (data) {
            if (data === null){
                this.initialValue = 0.00;
                this.calculateFinancing = [];
            }
        }
    },
    methods: {
        async getData() {
            try {
                const restData = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(
                            [
                                { id: 'a', description: 'Carro 01', price: 100000.35 },
                                { id: 'b', description: 'Carro 02', price: 120.30 },
                                { id: 'c', description: 'Carro 03', price: 140.98 },
                            ]
                        )
                    }, 2000)
                });
                this.dataVehicles = [...this.dataVehicles, ...restData];
            } catch (error) {
                console.error(error)
            }

        },
        parseInitalValue(initialValue) {
            return parseFloat(
                initialValue.replace("R$", "")
                    .replaceAll('.', '')
                    .replaceAll(',', '.')
            );
        },
        handleCalculate() {
            let valueParse = this.parseInitalValue(this.initialValue)
            
            this.calculateFinancing = [];
            this.calculateFinancing = financingCalculation(valueParse, this.selected.price)
            console.log(
                // this.selected,
                valueParse,
                this.selected.price,
                this.calculateFinancing
            )
            
        }
    },
    filters: {
        parsePriceValue(price){
            return parsePrice(price)
        }
    },
    async mounted() {
        this.dataVehicles = [];
        await this.getData();
    },
}