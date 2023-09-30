<script>
	import CreateProduct from "$lib/components/admin/products/CreateProduct.svelte"
    let mode = 'create';
    let title = 'products.createProduct';
    let products = {
        productName: null,
        description: null,
        price: null,
        originalPrice: null,
        stockQuantity: null,
        origin: null,
        notes: null,
        type: null,
        status: null,
        discount: null,
        slug: null,
        createdBy: 1,
        editedBy: 1,
        categoryId: null,
        images: "",
        expirationDate: null,
    };
</script>
<CreateProduct mode={mode} products={products} title={title}/>
