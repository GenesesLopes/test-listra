import { BIcon } from 'bootstrap-vue'
import { VMoney } from 'v-money'
import _ from 'lodash';
import parsePrice from '../../helpers/parsePrice';
import financingCalculation from '../../utils/financingCalculation';
import { getVehicles } from '../../services/vehicles';
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
            current_page: 1,
            per_page: 2,
            last_page: 0, 
            total: 0,
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
        selected: async function (data) {
            if (data === null) {
                this.initialValue = 0.00;
                this.calculateFinancing = [];
                this.dataVehicles = [];
                this.dataVehicles = await this.getData();
            }
        }
    },
    methods: {
        async onSearch(search, loading) {
            if (search.length) {
                try {
                    loading(true)
                    await this.search(search, this)
                } catch (error) {
                    console.error(error)
                } finally {
                    loading(false);
                }
            }
        },
        search: _.debounce(async (search, vm) => {
            vm.dataVehicles = await vm.getData(search)
        }, 350),
        async getData(description = '') {
            try {
                let {data} =  await getVehicles(description)
                this.current_page = data.current_page, 
                this.last_page = data.last_page
                this.per_page = data.per_page, 
                this.total = data.total
                return data.data
            } catch (error) {
                console.error(error)
                throw error
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
            if (valueParse >= 0 && valueParse < this.selected.price) {
                this.calculateFinancing = financingCalculation(valueParse, this.selected.price)
            } else {
                this.$bvToast.toast('O valor inicial do financiamento deve ser maior ou igual a 0, e menor que o valor do veículo', {
                    title: 'Error',
                    variant: 'danger',
                    solid: true
                })
            }
        }
    },
    filters: {
        parsePriceValue(price) {
            return parsePrice(price)
        }
    },
    async mounted() {
        this.dataVehicles = [];
        this.dataVehicles = await this.getData();
    },
}