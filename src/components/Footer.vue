<template>
    <div class="bg-[#F0F0F0] w-full mt-12">
        <div class="pt-24 pb-12 px-36 text-sm flex items-start justify-around">
            <ul>
                <li class="font-semibold"> Site</li>
                <li> Anasayfa</li>
                <li> Ürünlerimiz</li>
                <li> Hakkımızda</li>
                <li> İletişim</li>
            </ul>

            <ul>
                <li class="font-semibold"> Sosyal Medya</li>
                <li> Instagram</li>
                <li> Facebook</li>
                <li> LinkedIn</li>
            </ul>

            <ul>
                <li class="font-semibold">Adres</li>
                <li>Hacıeyüplü Mahallesi, 3182 Sokak, No. : 7/A</li>
                <li>Merkezefendi - DENIZLI</li>
                <li>TÜRKIYE</li>
            </ul>

            <ul>
                <li class="font-semibold"> İletişim</li>
                <li class="flex justify-between">
                    <span class="me-6"> GSM </span>
                    <span> +90 533 682 39 46 </span>
                </li>
                <li class="flex justify-between">
                    <span class="me-6"> Sabit </span>
                    <span> +90 258 268 78 90 </span>
                </li>
                <li class="flex justify-between">
                    <span class="me-6"> Servis </span>
                    <span> +90 532 131 43 45 </span>
                </li>
                <li class="flex justify-between">
                    <span class="me-6"> İhracat </span>
                    <span> +90 533 682 39 47 </span>
                </li>
                <li class="flex justify-between">
                    <span class="me-6"> Fax </span>
                    <span> +90 (258) 268 78 91 </span>
                </li>
            </ul>

            <ul>
                <li class="font-semibold">Mail</li>
                <li>info@hidrobarsan.com.tr</li>
            </ul>
        </div>
        <div class="px-12 flex items-center">
            <div class="w-20 me-16">
                <img alt="logo"  src="@/assets/logo.png">
            </div>
            <div class="w-full border-t border-black"></div>
        </div>
        <div class="px-12 py-12 flex items-center justify-between">
            <div class="text-xs">© 2023 Hidrobarsan - Tüm hakları saklıdır.</div>
            <a href="https://artrodite.com" target="_blank">
                <img src="@/assets/artrodite-logo.svg" alt="">
            </a>
        </div>

    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

li {
    margin-bottom: 12px;
}

</style>
