<script lang="ts">
  import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
  import { BASE_API } from "$lib/Const";
  import { formatCurrency } from "$lib/Utils/accounting";
  import { loadingState } from "$lib/store/loading";
  import { toastErr } from "$lib/store/toastError";
  import Icon from "@iconify/svelte";
  import axios from "axios";
  import { Fileupload, Input, TabItem, Tabs } from "flowbite-svelte";
  import moment from "moment";
  import CreateSeo from "../seo/CreateSeo.svelte";
  import Editor from "@tinymce/tinymce-svelte";

  export let products: any;
  export let title: string;
  export let mode: string;

  let categories: any[] = [],
    files: any[] = [],
    file;
  let queryParams = {
    type: "product",
  };
  let conf = {
    plugins: "image",
    toolbar1:
      "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
    toolbar2:
      "image | media | cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor code | insertdatetime preview | forecolor backcolor",
    toolbar3:
      "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",
    menubar: false,
    images_upload_url: "/api/v1.0/upload/editor",

  };
  let text = "";
  let seo = {
    id: null,
    metaTitle: null,
    metaDescription: null,
    keywords: null,
    canonicalUrl: null,
    robotMetaTags: null,
    openGraphTags: null,
    structuredData: null,
    sitemapPriority: null,
    sitemapFrequency: null,
    sitemapLastModified: null,
    referenceId: mode == "modify" ? products.id : null,
    reference: "product",
  };
  let dataSeo = products;
  const categoryService = RepositoryFactory.get("categoryRepository");
  const productService = RepositoryFactory.get("productRepository");

  if (mode == "modify") {
    files = JSON.parse(products.images);
    products.expirationDate = moment(new Date(products.expirationDate)).format(
      "yyyy-MM-DD"
    );
    products.seo = products.seo ? products.seo : seo;
  }

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
    return productService.post(products);
  }
  async function handleSubmitUpdateProduct() {
    products.images = JSON.stringify(files);
    return productService.put(products.id, products);
  }
  async function getCategories() {
    loadingState.set(true);
    const res = await categoryService.get(queryParams);
    categories = res.data.data;
    loadingState.set(false);
  }

  async function handleDeleteFile(path: String) {
    try {
      await axios.post(
        `${BASE_API}/upload/delete`,
        {
          path: path,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      files = files.filter((item) => item !== path);
      if (mode == "modify") {
        await handleSubmitUpdateProduct();
      }
    } catch (error) {
      toastErr.set([
        {
          message: "File deleting failed",
          type: "error",
        },
      ]);
    }
  }

  async function handleSubmit() {
    loadingState.set(true);
    if (mode == "create") {
      try {
        await handleSubmitCreateProduct();
        window.location.href = "/admin/products";
      } catch (error) {
        const errors = error?.response?.data?.errors;
        var toasts = errors?.map((element: any) => {
          return {
            message: element.path + "-" + element.msg,
            type: "error",
          };
        });
        toastErr.set(toasts);
      }
    } else if (mode == "modify") {
      try {
        const res = await handleSubmitUpdateProduct();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    loadingState.set(false);
  }

  getCategories();
</script>

<div
  class="bg-white dark:bg-slate-800 dark:text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 h-full"
>
  <h1 class="text-[34px] py-[10px] uppercase text-center font-bold">{title}</h1>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-first-name"
      >
        Product Name
      </label>
      <input
        bind:value={products.productName}
        class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id="grid-first-name"
        type="text"
        placeholder="Cat Indo"
      />
    </div>
    <div class="md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-last-name"
      >
        Product Description
      </label>
      <input
        bind:value={products.description}
        class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        id="grid-last-name"
        type="text"
        placeholder="Description for product"
      />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-first-name"
      >
        Original Price
      </label>
      <input
        bind:value={products.originalPrice}
        class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id="grid-first-name"
        type="number"
        min="10000"
        placeholder="Input Original Price"
      />
      <p class="text-[blue] dark:text-white text-xs italic">
        Original Price : {formatCurrency(products.originalPrice)}
      </p>
    </div>
    <div class="md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-last-name"
      >
        Price
      </label>
      <input
        bind:value={products.price}
        class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
        id="grid-last-name"
        type="number"
        min="10000"
        placeholder="Input Price"
      />
      <p class="text-[blue] dark:text-white text-xs italic">
        Price : {formatCurrency(products.price)}
      </p>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-first-name"
      >
        Quantity In Stock
      </label>
      <input
        bind:value={products.stockQuantity}
        class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id="grid-first-name"
        type="number"
        min="10000"
        placeholder="Input quantity in stock"
      />
    </div>
    <div class="md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-last-name"
      >
        The Origin
      </label>
      <input
        bind:value={products.origin}
        class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        id="grid-last-name"
        type="text"
        placeholder="Input The Origin"
      />
    </div>
  </div>

  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-first-name"
      >
        % Discount
      </label>
      <input
        bind:value={products.discount}
        class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id="grid-first-name"
        type="number"
        min="10000"
        placeholder="Input % Discount"
      />
      <p class="text-[blue] dark:text-white text-xs italic">
        Example : 10 = 10%
      </p>
    </div>
    <div class="md:w-1/2 px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-last-name"
      >
        URL Product
      </label>
      <input
        bind:value={products.slug}
        class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
        id="grid-last-name"
        type="text"
        placeholder="con-cho-co"
      />
      <p class="text-[blue] dark:text-white text-xs italic">
        Example : http://pet-pro/con-cho-co
      </p>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
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
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-state"
      >
        Status
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700"
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
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-state"
      >
        Type
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700"
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
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-zip"
      >
        Category Products
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700"
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
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-zip"
      >
        Expiration Date
      </label>
      <div class="relative">
        <Input
          type="date"
          class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700"
          min={new Date(Date.now()).toISOString().split("T")[0]}
          bind:value={products.expirationDate}
        />
      </div>
    </div>
  </div>
  <div>
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
      for="grid-zip"
    >
      Images Products
    </label>
    <Fileupload
      on:change={handleFileInputChange}
      class="w-24 py-[10px] bg-white"
    />
    <div class="grid grid-cols-1 xl:grid-cols-4 gap-[10px] py-[20px]">
      {#each files as path}
        <div class="relative">
          <img
            class="object-cover w-full h-[300px] rounded"
            src={`http://103.142.26.42${path}`}
            alt="avatar"
          />
          <div
            class="absolute top-0 right-0 cursor-pointer bg-white rounded text-red-500"
            on:click={handleDeleteFile(path)}
          >
            <Icon icon="iwwa:delete" width="30" />
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="flex justify-center items-center relative bottom-0">
    <div class="btn-signup w-fit">
      <button
        class=" bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]"
        on:click={handleSubmit}>Submit</button
      >
    </div>
  </div>
  {#if mode == "modify"}
    <Tabs
      contentClass="p-4 bg-gray-50 dark:bg-slate-900 rounded-b-lg"
      activeClasses="p-2 text-primary-500 bg-gray-100 rounded-t-lg dark:bg-slate-900 dark:text-primary-500"
      inactiveClasses="p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
    >
      <TabItem open title="Seo">
        <div class="grid grid-cols-1 gap-5">
          <CreateSeo bind:seoData={products} />
        </div>
      </TabItem>
      <TabItem title="Posts">
        <div
          class="grid 2xl:grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-5"
        >
          <Editor
            apiKey="4zwho6iauuup5m7zl61gs294kuht6k9pzbwz87v7hnpkhh10"
            id="uuid"
            inline="false"
            disabled="false"
            {conf}
            modelEvents="input change undo redo"
            bind:value={text}
            text="readonly-text-output"
          />
          <h1>{@html text}</h1>
        </div></TabItem
      >
    </Tabs>
  {/if}
</div>
