<script>
    import { Input, Label, Select } from "flowbite-svelte";
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

    export let parentValue;
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

<div class="w-full">
    <Label for="name" class="mb-2 capitalize">Name</Label>
    <Input
        type="text"
        id="name"
        placeholder="john.doe@company.com"
        bind:value={paramFilter.name}
    />
</div>
<div class="w-full">
    <Label for="email" class="mb-2 capitalize">Email address</Label>
    <Input
        type="email"
        id="email"
        placeholder="john.doe@company.com"
        bind:value={paramFilter.email}
    />
</div>
<div class="w-full">
    <Label for="phone" class="mb-2 capitalize">Phone</Label>
    <Input
        type="tel"
        id="phone"
        placeholder="0908070605"
        bind:value={paramFilter.phone}
    />
</div>
<div class="w-full">
    <Label>
        Gender
        <Select class="mt-2" items={genders} bind:value={paramFilter.gender} />
    </Label>
</div>
