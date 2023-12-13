<script lang="ts">
    import { formatDate } from "$lib/Utils/common";
    import Icon from "@iconify/svelte";
    import { Button, Modal, Label, Select, Input, Textarea } from "flowbite-svelte";
    export let image = "/images/common/cat-bg.jpg";
    export let title = "PET ONE";
    export let description = "WE LOVE YOUR PETS AS IF THEY WERE OURS";
    export let isShowTime = true;
    export let isBgOverlay = false;
    export let author = "Pet One";
    export let isDescription = false;
    export let date = "";
    export let isServicePicker = false;
    export let services: [];
    export let selected: any;
    let formModal = false;
    function getService() {
        return services.map((service) => ({
            name: service.title,
            value: service.slug,
        }));
    }
</script>

<div
    class="w-full h-[360px] bg-fixed bg-no-repeat bg-cover bg-center"
    style="background-image: url({image});"
>
    <div class="{isBgOverlay && 'bg-title'} w-full h-full">
        <div class="container m-auto h-full w-full">
            <div
                class="flex justify-center items-center flex-col w-full h-full text-white"
            >
                {#if isDescription}
                    <h1
                        class="uppercase 2xl:text-[48px] lg:text-[38px] text-[28px] text-center m-4"
                    >
                        {title}
                    </h1>
                    <p
                        class="font-bold text-white md:text-xl text-lg text-center m-4"
                    >
                        {@html description}
                    </p>
                {:else}
                    <h1
                        class="uppercase lg:text-[38px] text-[28px] text-center m-4"
                    >
                        {title}
                    </h1>
                {/if}
                {#if isShowTime}
                    <div class="font-bold flex">
                        <p class="flex items-center border-x px-2">
                            <Icon
                                icon="fa6-solid:user-pen"
                                class="mr-2 text-xl w-8"
                            />
                            {author}
                        </p>
                        <p class="flex items-center border-x px-2">
                            <Icon
                                icon="svg-spinners:clock"
                                class="mr-2 text-xl w-8"
                            />{formatDate(date)}
                        </p>
                    </div>
                {/if}
                {#if isServicePicker}
                    <Button
                        class="mt-4 font-bold"
                        color="light"
                        on:click={() => (formModal = true)}
                        >ĐẶT LỊCH NGAY</Button
                    >
                {/if}
            </div>
        </div>
    </div>
</div>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
    <h4 class="uppercase">dịch vụ thú cưng</h4>
    <form>
        {#await getService()}
            loga
        {:then res}
            <Label defaultClass="text-sm font-medium block mb-6">
                Chọn loại dịch vụ
                <Select class="mt-2" items={res} bind:value={selected} />
            </Label>
        {/await}
        <div class="mb-6">
            <Label for="first_name" class="mb-2">Full name</Label>
            <Input type="text" id="first_name" placeholder="John Smith" required />
        </div>
        <div class="mb-6">
            <Label for="phone" class="mb-2">Phone number</Label>
            <Input
                type="tel"
                id="phone"
                placeholder="123-45-678"
                pattern={"[0-9]{11}"}
                required
            />
        </div>
       
        <div class="mb-6">
            <Label for="email" class="mb-2">Email address</Label>
            <Input
                type="email"
                id="email"
                placeholder="john.doe@company.com"
                required
            />
        </div>
        <div class="mb-6">
            <Label for="address" class="mb-2">Address</Label>
            <Input
                type="text"
                id="address"
                placeholder="Your address"
                required
            />
        </div>
        <div class="mb-6">
            <Label for="notes" class="mb-2">Notes</Label>
            <Textarea
                type="text"
                id="notes"
                placeholder="my pet is very cute ..."
                required
            />
        </div>
        <Button type="submit">Submit</Button>
    </form>
</Modal>

<style>
    .bg-title {
        background: rgb(180, 58, 124);
        background: linear-gradient(
            190deg,
            rgba(88, 31, 61, 0.8) 0%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(114, 67, 0, 0.6) 100%
        );
        background: -webkit-linear-gradient(
            190deg,
            rgba(88, 31, 61, 0.8) 0%,
            rgba(255, 106, 106, 0.2) 50%,
            rgba(114, 67, 0, 0.6) 100%
        );
    }
</style>
