<script>
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";

    const productService = RepositoryFactory.get('productRepository');
    let product;
    async function productDetail(){
        product = await productService.show(12);
        console.log(product);
    }

    productDetail();
</script>
<h1>alo</h1>