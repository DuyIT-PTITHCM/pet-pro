<script>
    import { Button, Input, Label, Select } from "flowbite-svelte";
    import { t } from "$lib/translations";


    export let parentValue;
    export let filter;
    let genders = [
        { value: "male", name: "Male" },
        { value: "female", name: "Female" },
        { value: "other", name: "Other" },
        { value: "", name: "All" },
    ];
    let paramFilter = {
        gender: null,
        email: null,
        phone: null,
        name: null,
    };
    function reset() {
        paramFilter.email = null;
        paramFilter.gender = null;
        paramFilter.name = null;
        paramFilter.phone = null;
    }

    $: {
        parentValue = paramFilter;
    }
    $: if (paramFilter.gender === "") {
        paramFilter.gender = null;
    } else if (paramFilter.email === "") {
        paramFilter.email = null;
    } else if (paramFilter.phone === "") {
        paramFilter.phone = null;
    } else if (paramFilter.name === "") {
        paramFilter.name = null;
    }
</script>

<div
    class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 py-3"
>
    <div class="w-full">
        <Label for="name" class="mb-2 capitalize">{$t("common.name")}</Label>
        <Input
            type="text"
            id="name"
            placeholder="john.doe@company.com"
            bind:value={paramFilter.name}
        />
    </div>
    <div class="w-full">
        <Label for="email" class="mb-2 capitalize">{$t("common.email")}</Label>
        <Input
            type="email"
            id="email"
            placeholder="john.doe@company.com"
            bind:value={paramFilter.email}
        />
    </div>
    <div class="w-full">
        <Label for="phone" class="mb-2 capitalize">{$t("common.phone")}</Label>
        <Input
            type="tel"
            id="phone"
            placeholder="0908070605"
            bind:value={paramFilter.phone}
        />
    </div>
    <div class="w-full">
        <Label>
            {$t("common.gender")}
            <Select
                class="gender-select mt-2"
                items={genders}
                bind:value={paramFilter.gender}
            />
        </Label>
    </div>
</div>
<div class="my-[10px] flex justify-end">
    <Button class="text-black bg-transparent hover:bg-transparent"  on:click={filter}>Search</Button>
    <Button class="ml-4 text-white bg-black hover:bg-bg-black" on:click={reset}>Reset</Button>
</div>

