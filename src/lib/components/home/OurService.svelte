<script lang="ts">
    import { BASE_API, HOST } from "$lib/Const";
    import { convertImageJsonToArray } from "$lib/Utils/common";
    import Button from "../common/Button.svelte";
    export let data: any;
    let services = data.slice(0, 8)
    let host = HOST;
</script>

{#each services as service}
<div class="ourservice-service h-72 rounded-lg overflow-hidden text-center flex items-center justify-center flex-col relative">
    <img class="w-full h-72 object-cover" src={host + convertImageJsonToArray(service.imageUrl)[0]} alt="">
    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white">
        <h3 class="text-2xl drop-shadow-lg shadow-black brightness-200 font-extrabold px-4 py-2 bg-opacity-50 dark:bg-opacity-40 text-white rounded-full">{service.title}</h3>
        <p class="service-desc my-2 mx-4 h-0 text-note drop-shadow-lg shadow-black brightness-200">{service.description}</p>
        <Button content='Read more' url="/dich-vu/{service.slug}" icon='icon-park-solid:right-two'/>
    </div>
</div>
{/each}
<style>
    .text-note {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* Số dòng tối đa hiển thị */
        overflow: hidden;
    }
    .ourservice-service:hover .service-desc{
        height: 70px;
        transition: height .4s;
    }
    .ourservice-service:hover img{
        filter: blur(8px);
        transition: filter ease .4s;
    }
</style>