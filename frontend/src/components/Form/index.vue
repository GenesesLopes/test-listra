<template>
    <b-container class="mt-2">
        <b-card header-tag="header">
            <template #header>
                <h6 class="mb-0">Meus Veículos</h6>
            </template>
            <b-form @submit.prevent="handleCalculate">
                <b-form-group>
                    <v-select
                        v-model="selected"
                        :options="dataVehicles"
                        label="description"
                        placeholder="Selecione um veículo"
                    />
                </b-form-group>
                <b-container v-if="selected != null">
                    <b-form-row>
                        <b-col>
                            <p>
                                <b-icon icon="chevron-right" />
                                {{ selected.description }}
                            </p>
                            <p>
                                <b-icon icon="chevron-right" />
                                <strong
                                    >{{ selected.price | parsePriceValue }}
                                </strong>
                            </p>
                        </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col sm="10">
                            <b-form-group
                                label="Simulação de financiamento"
                                label-for="initialValue"
                            >
                                <b-form-input
                                    id="initialValue"
                                    v-model.lazy="initialValue"
                                    v-money="money"
                                    trim
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="2">
                            <b-form-group>
                                <b-button 
                                    variant="success" 
                                    class="align-button"
                                    type="submit"
                                >
                                    Simular
                                </b-button>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-row v-if="calculateFinancing.length">
                        <b-col>
                            <p class="h6">Valores simulados para você</p>
                            <div v-for="(dataFinancing, index ) in calculateFinancing" :key="index">
                                <span>{{dataFinancing.installment + 'x de ' + dataFinancing.value}}</span>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-form>
        </b-card>
    </b-container>
</template>
<style>
@media (min-width: 576px) {
    .align-button {
        margin-top: 32px;
    }
}
</style>
<script src="./index.js" />
