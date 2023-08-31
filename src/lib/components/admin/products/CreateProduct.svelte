<script lang="ts">
  import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
  import { BASE_API } from "$lib/Const";
  import { loadingState } from "$lib/store/loading";
  import { toastErr } from "$lib/store/toastError";
  import axios from "axios";
  import { Fileupload, Input } from "flowbite-svelte";

  export let products: any;
  export let title: string;
  export let mode: string;

  let categories: any[] = [],
    files: any[] = [],
    file;
  let queryParams = {
    type: 'product'
  };
  const categoryService = RepositoryFactory.get("categoryRepository");
  const productService = RepositoryFactory.get("productRepository");

  // upload images
  async function handleFileInputChange(event: any) {
    file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${BASE_API}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      files.push(res.data.data.path);
      files = files;
    } catch (error) {
      toastErr.set([
        {
          message: "File upload failed",
          type: "error",
        },
      ]);
    }
  }

  //create products
  async function handleSubmitCreateProduct() {
    products.images = JSON.stringify(files);
    try {
      return productService.post(products);
    } catch (error) {
      toastErr.set([
        {
          message: "Create Product Fail Please Input Field And Slug Is Unique",
          type: "error",
        },
      ]);
    }
  }
  async function getCategories() {
    loadingState.set(true);
    const res = await categoryService.get(queryParams);
    categories = res.data.data;
    loadingState.set(false);
  }

  async function handleSubmit() {
    if (mode == "create") {
      //call action create
      loadingState.set(true);
      await handleSubmitCreateProduct();
      toastErr.set([
        {
          message: "Create Product Success",
          type: "success",
        },
      ]);
      loadingState.set(false);
      window.location.href = "/admin/products";
    } else if (mode == "modify") {
      //call action update
    }
  }

  getCategories();
</script>

<div
  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 h-screen"
>
  <h1 class="py-[10px] text-[34px]">{title}</h1>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-first-name"
      >
        Product Name
      </label>
      <input
        bind:value={products.productName}
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id="grid-first-name"
        type="text"
        placeholder="Cat Indo"
      />
    </div>
    <div class="md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-last-name"
      >
        Product Description
      </label>
      <input
        bind:value={products.description}
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        id="grid-last-name"
        type="text"
        placeholder="Description for product"
      />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-first-name"
      >
        Original Price
      </label>
      <input
        bind:value={products.originalPrice}
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id="grid-first-name"
        type="number"
        placeholder="Input Original Price"
      />
    </div>
    <div class="md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-last-name"
      >
        Price
      </label>
      <input
        bind:value={products.price}
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        id="grid-last-name"
        type="number"
        placeholder="Input Price"
      />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-first-name"
      >
        Stock Quantity
      </label>
      <input
        bind:value={products.stockQuantity}
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id="grid-first-name"
        type="number"
        placeholder="Input Stock Quantity"
      />
    </div>
    <div class="md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-last-name"
      >
        Origin
      </label>
      <input
        bind:value={products.origin}
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        id="grid-last-name"
        type="text"
        placeholder="Input Origin"
      />
    </div>
  </div>

  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-first-name"
      >
        Stock Discount
      </label>
      <input
        bind:value={products.discount}
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id="grid-first-name"
        type="number"
        placeholder="Input Stock Discount"
      />
    </div>
    <div class="md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-last-name"
      >
        Slug
      </label>
      <input
        bind:value={products.slug}
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        id="grid-last-name"
        type="text"
        placeholder="Input Slug"
      />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-password"
      >
        Note
      </label>

      <textarea
        bind:value={products.notes}
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-2">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-state"
      >
        Status
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
          id="grid-state"
          bind:value={products.status}
        >
          <option value="featured">Featured</option>
          <option value="best_selling">Best Selling</option>
          <option value="normal">Normal</option>
        </select>
      </div>
    </div>
    <div class="md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-state"
      >
        Type
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
          id="grid-state"
          bind:value={products.type}
        >
          <option value="pet">Pet</option>
          <option value="accessory">Accessory</option>
          <option value="medical_equipment">Medical Equipment</option>
        </select>
      </div>
    </div>
    <div class="md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-zip"
      >
        Category Products
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
          id="grid-state"
          bind:value={products.categoryId}
        >
          {#each categories as item, index}
            <option value={item.id}>{item.categoryName}</option>
          {/each}
        </select>
      </div>
    </div>
    <div class="md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-zip"
      >
        Expiration Date
      </label>
      <div class="relative">
        <Input
          id="birthDate"
          type="date"
          class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
          max={new Date(Date.now()).toISOString().split("T")[0]}
          bind:value={products.expirationDate}
        />
      </div>
    </div>
  </div>
  <div>
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
      for="grid-zip"
    >
      Images Products
    </label>
    <Fileupload
      on:change={handleFileInputChange}
      class="w-24 py-[10px] bg-white"
    />
    <div class="grid grid-cols-4 gap-[10px]">
      {#each files as path}
        <img
          class="object-contain w-full h-[400px] rounded-sm"
          src={`http://103.142.26.42${path}`}
          alt="avatar"
        />
      {/each}
    </div>
  </div>
  <div class="flex justify-center items-center relative bottom-0">
    <div class="btn-signup w-fit">
      <button
        class=" bg-black font-semibold text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]"
        on:click={handleSubmit}>Submit</button
      >
    </div>
  </div>
</div>
