<script>
    import { time } from './stores.js';
    import CarouselCustom from '../carouselcus/CarouselCustom.svelte';
    import Button from '../common/Button.svelte';
    const favoriteproducts = [
        {
            id: 0,
            name: 'Cat Cat Food Kitten & Pregnant Cat 1.2kg',
            price: 123000,
            star: 4,
            image: 'https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg',
            description: '<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú.'
        },
        {
            id: 0,
            name: 'Cat Cat Food Kitten & Pregnant Cat 1.2kg',
            price: 123000,
            star: 5,
            image: 'https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg',
            description: '<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú.'
        },
        {
            id: 0,
            name: 'Cat Cat Food Kitten & Pregnant Cat 1.2kg',
            price: 123000,
            star: 5,
            image: 'https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg',
            description: '<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú.'
        },
        {
            id: 0,
            name: 'Cat Cat Food Kitten & Pregnant Cat 1.2kg',
            price: 123000,
            star: 4,
            image: 'https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg',
            description: '<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú.'
        },
        {
            id: 0,
            name: 'Cat Cat Food Kitten & Pregnant Cat 1.2kg',
            price: 123000,
            star: 4,
            image: 'https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg',
            description: '<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú.'
        },
        {
            id: 0,
            name: 'Cat Cat Food Kitten & Pregnant Cat 1.2kg',
            price: 123000,
            star: 4,
            image: 'https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg',
            description: '<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú.'
        },
        {
            id: 0,
            name: 'Cat Cat Food Kitten & Pregnant Cat 1.2kg',
            price: 123000,
            star: 5,
            image: 'https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg',
            description: '<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú.'
        },
        {
            id: 0,
            name: 'Cat Cat Food Kitten & Pregnant Cat 1.2kg',
            price: 123000,
            star: 4,
            image: 'https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg',
            description: '<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú.'
        },
    ]
    let controls = false
    let perPage = $time
    let multiple = 1
</script>
<div class="home-content w-full">
    <h1 class="content-heading dark:text-white">favorite products</h1>
    <div class="selling-content">
        <div class="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-4">
            
            <!-- <CarouselCustom autoplay="10000" {controls} multiple=1> -->
            {#each favoriteproducts as product, index (index)}
            <div class="best-product  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img src={product.image} alt={product.name}>
                <h3>{product.name}</h3>
                <p class="product-message">{@html product.description}</p>
                <div class="rank-price">
                    <div class="rank">
                        {#each Array(product.star) as _, i}
                        <div class="star">⭐</div>
                        {/each}
                    </div>
                    <div class="price">
                        <p>{product.price} $</p>
                    </div>
                </div>
                <div class="addccart">
                    <Button content='Add to cart' classOrther='' url='/' icon='mdi:cart'/>
                </div>
            </div>
            {/each}
        <!-- </CarouselCustom> -->
        </div>
    </div>
</div>

<style>
    .home-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50px;
        position: relative;
    }
    .content-heading {
        font-size: 34px;
        margin-bottom: 20px;
        font-weight: 600;
        text-transform: capitalize;
    }
    
    .best-product{
        width: 100%;
        padding: 20px 10px;
        line-height: 1.2;
    }
    .best-product *{
        margin: 4px;
    }
    .best-product img{
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    .best-product h3{
        text-align: center;
        margin: 10px;
        font-size: 18px;
        font-weight: 700;
    }
    .product-message{
        font-size: 14px;
        text-align: justify;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* Số dòng tối đa hiển thị */
        overflow: hidden;
    }
    .rank-price{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .rank{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .rank * {
        margin: 0 10px;
    }
    .addccart{
        width: 100%;
        display: flex;
        align-items: center;justify-content: center;
    }
    .price{
        font-size: 20px;
    }
</style>
