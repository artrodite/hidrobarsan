<template>
    <div class="px-24">
        <div class="flex flex-col">
            <h1 class="text-6xl mb-4">{{ product.name }}</h1>
            <span class="mb-8">{{ product.type ?? 'Tipi' }}</span>
            <div>
                <button class="bg-[#FBB901] text-white px-4 py-2 text-sm">İletişime Geç</button>
            </div>
        </div>
        <div class="h-96 flex items-center justify-center bg-amber-50 my-12">
            MODEL
        </div>
        <div class="h-96 w-2/3 mx-auto flex items-center justify-center bg-amber-50">
            VİDO
        </div>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import telliKesiciler from "@/datas/telliKesiciler.json";
import zincirliKesiciler from "@/datas/zincirliKesiciler.json";
import deliciler from "@/datas/deliciler.json";

export default {
    name: "ProductDetails",
    data() {
        return {
            product: {}
        }
    },
    mounted() {
        const productType = this.$route.name;
        console.log(productType);

        if (productType === 'delici-detay') {
            this.product = deliciler.deliciler.find(kesici => kesici.id === Number(this.$route.params.id));
            return
        }
        if (productType === 'telli-kesici-detay') {
            this.product = telliKesiciler.telliKesiciler.find(kesici => kesici.id === Number(this.$route.params.id));
            return
        }
        if (productType === 'zincirli-kesici-detay') {
            this.product = zincirliKesiciler.zincirliKesiciler.find(kesici => kesici.id === Number(this.$route.params.id));

        }
    }
}
</script>

<style scoped>

</style>
