<script lang="ts">
  import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
  import { formatCurrency } from "$lib/Utils/accounting";
  import { loadingState } from "$lib/store/loading";
  import { toastErr } from "$lib/store/toastError";
  import Icon from "@iconify/svelte";
  import { Fileupload, Input, TabItem, Tabs, Textarea } from "flowbite-svelte";
  import moment from "moment";
  import CreateSeo from "../seo/CreateSeo.svelte";
  import CreatePost from "../posts/CreatePost.svelte";
  import Editor from "$lib/components/common/Editor.svelte";
  import { HOST, MODE_MODIFY } from "$lib/Const";
  import { t } from "$lib/translations";

  export let products: any;
  export let title: string;
  export let mode: string;

  const PRODUCT_REFERENCE = "product";
  let categories: any[] = [],
    files: any[] = [],
    file;
  let queryParams = {
    type: PRODUCT_REFERENCE,
  };
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
    referenceId: mode == MODE_MODIFY ? products.id : null,
    reference: PRODUCT_REFERENCE,
  };
  let post = {
    id: null,
    title: "",
    content: "",
    author: "Admin Duy Dep Trai",
    referenceId: mode == MODE_MODIFY ? products.id : null,
    reference: PRODUCT_REFERENCE,
  };
  const categoryService = RepositoryFactory.get("categoryRepository");
  const productService = RepositoryFactory.get("productRepository");
  const uploadFileService = RepositoryFactory.get("uploadRepository");

  if (mode == MODE_MODIFY) {
    files = JSON.parse(products.images);
    products.expirationDate = moment(new Date(products.expirationDate)).format(
      "yyyy-MM-DD"
    );
    products.seo = products.seo ? products.seo : seo;
    products.post = products.post ? products.post : post;
  }

  // upload images
  async function handleFileInputChange(event: any) {
    file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await uploadFileService.uploadFile(formData);

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
      await uploadFileService.deleteFile({
        path: path,
      });
      files = files.filter((item) => item !== path);
      if (mode == MODE_MODIFY) {
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
    } else if (mode == MODE_MODIFY) {
      try {
        const res = await handleSubmitUpdateProduct();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    loadingState.set(false);
  }

  products.notes = products?.notes ?? "";
  getCategories();
</script>

<div
  class="bg-white dark:bg-slate-800 dark:text-white rounded h-full py-[10px] my-3"
>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4">
    <h1
      class="text-[34px] py-[10px] uppercase text-center font-bold col-span-full"
    >
      {$t(title)}
    </h1>
    <div class="px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-first-name"
      >
        {$t("products.name")}
      </label>
      <input
        bind:value={products.productName}
        class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 border-[#dcdde0]"
        id="grid-first-name"
        type="text"
        placeholder="Cat Indo"
      />
    </div>
    <div class="px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-last-name"
      >
        {$t("products.description")}
      </label>
      <Textarea
        bind:value={products.description}
        class="appearance-none border-[#dcdde0] dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border  rounded py-3 px-4"
        id="grid-last-name"
        type="text"
        placeholder="Description for product"
      />
    </div>
    <!-- </div>
  <div class="-mx-3 md:flex mb-6"> -->
    <div class="px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-first-name"
      >
        {$t("common.originalPrice")}
      </label>
      <input
        bind:value={products.originalPrice}
        class="appearance-none border-[#dcdde0] dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id="grid-first-name"
        type="number"
        min="10000"
        placeholder="Input Original Price"
      />
      <p class="text-[blue] dark:text-white text-xs italic">
        {$t("common.originalPrice")}: {formatCurrency(products.originalPrice)}
      </p>
    </div>
    <div class="px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-last-name"
      >
        {$t("common.price")}
      </label>
      <input
        bind:value={products.price}
        class="appearance-none border-[#dcdde0] dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
        id="grid-last-name"
        type="number"
        min="10000"
        placeholder="Input Price"
      />
      <p class="text-[blue] dark:text-white text-xs italic">
        {$t("common.price")} : {formatCurrency(products.price)}
      </p>
    </div>
    <!-- </div>
  <div class="-mx-3 md:flex mb-6"> -->
    <div class="px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-first-name"
      >
        {$t("products.quantityInStock")}
      </label>
      <input
        bind:value={products.stockQuantity}
        class="appearance-none border-[#dcdde0] dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id="grid-first-name"
        type="number"
        min="10000"
        placeholder="Input quantity in stock"
      />
    </div>
    <div class="px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-last-name"
      >
        {$t("products.origin")}
      </label>
      <input
        bind:value={products.origin}
        class="appearance-none border-[#dcdde0] dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4"
        id="grid-last-name"
        type="text"
        placeholder="Input The Origin"
      />
    </div>
    <!-- </div>

  <div class="-mx-3 md:flex mb-6"> -->
    <div class="px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-first-name"
      >
        % {$t("products.discount")}
      </label>
      <input
        bind:value={products.discount}
        class="appearance-none border-[#dcdde0] dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id="grid-first-name"
        type="number"
        min="10000"
        placeholder="Input % Discount"
      />
      <p class="text-[blue] dark:text-white text-xs italic">
        Example : 10 = 10%
      </p>
    </div>
    <div class="px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-last-name"
      >
        {$t("products.urlProduct")}
      </label>
      <input
        bind:value={products.slug}
        class="appearance-none border-[#dcdde0] dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3"
        id="grid-last-name"
        type="text"
        placeholder="con-cho-co"
      />
      <p class="text-[blue] dark:text-white text-xs italic">
        Example : http://pet-pro/con-cho-co
      </p>
    </div>
    <!-- </div>
  <div class="-mx-3 md:flex mb-6"> -->
    <div class="md:w-full px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-zip"
      >
        {$t("products.expirationDate")}
      </label>
      <div class="relative">
        <Input
          type="date"
          class="block appearance-none w-full bg-grey-lighter border  text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700"
          min={new Date(Date.now()).toISOString().split("T")[0]}
          bind:value={products.expirationDate}
        />
      </div>
    </div>

    <!-- </div>
  <div class="-mx-3 md:flex mb-2"> -->
    <div class="px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-state"
      >
        {$t("products.status")}
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-grey-lighter border text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700"
          id="grid-state"
          bind:value={products.status}
        >
          <option value="featured">Featured</option>
          <option value="best_selling">Best Selling</option>
          <option value="normal">Normal</option>
        </select>
      </div>
    </div>
    <div class="px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-state"
      >
        {$t("products.type")}
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-grey-lighter border text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700"
          id="grid-state"
          bind:value={products.type}
        >
          <option value="pet">Pet</option>
          <option value="accessory">Accessory</option>
          <option value="medical_equipment">Medical Equipment</option>
        </select>
      </div>
    </div>
    <div class="px-3">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
        for="grid-zip"
      >
        {$t("products.categoryProduct")}
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-grey-lighter border text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700"
          id="grid-state"
          bind:value={products.categoryId}
        >
          {#each categories as item, index}
            <option value={item.id}>{item.categoryName}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
  <div class="px-3">
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
      for="grid-password"
    >
      {$t("products.note")}
    </label>

    <div>
      <Editor bind:text={products.notes} />
    </div>
  </div>
  <div class="col-span-full p-3">
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
      for="grid-zip"
    >
      {$t("products.imagesProducts")}
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
            src={HOST + `${path}`}
            alt="avatar"
          />
          <button
            class="absolute top-0 right-0 cursor-pointer bg-white rounded text-red-500"
            on:click={() => handleDeleteFile(path)}
          >
            <Icon icon="iwwa:delete" width="30" />
          </button>
        </div>
      {/each}
    </div>
  </div>
  <div class="col-span-full flex justify-center">
    <div class="btn-signup w-fit">
      <button
        class=" bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]"
        on:click={handleSubmit}>Submit</button
      >
    </div>
  </div>
</div>

{#if mode == MODE_MODIFY}
  <div class="col-span-full">
    <Tabs
      style="none"
      contentClass="bg-gray-50 dark:bg-slate-900 rounded-b-lg"
      activeClasses="p-2 text-primary-500 bg-gray-100 rounded-t-lg dark:bg-slate-900 dark:text-primary-500"
      inactiveClasses="p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
    >
      <TabItem open title="{$t("seo.seoEdit")}">
        <CreateSeo
          divClass="grid md:grid-cols-3 grid-cols-2"
          bind:seoData={products}
        />
      </TabItem>
      <TabItem title="{$t("products.productPostEdit")}">
        <div class="grid grid-cols-1 gap-5">
          <CreatePost bind:postData={products} />
        </div>
      </TabItem>
    </Tabs>
  </div>
{/if}
