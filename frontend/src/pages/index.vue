<template>
    <div>
        <Header />
        <FormFinanciamento />
    </div>
</template>
<script>
import Header from "../components/Header";
import FormFinanciamento from "../components/Financiamento/index.vue";
export default {
    name: "Index",
    components: {
        Header,
        FormFinanciamento
    }
};
</script>
