<script>
    import { Button, Checkbox, DarkMode, Label, Input, Helper } from "flowbite-svelte";
    import loginbg from "$lib/assest/images/loginbg.jpg"
</script>
<div class="darkmode fixed top-2 right-2 rounded-lg">
    <DarkMode/>
</div>
<div class="loginform flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
    <div class="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 z-10">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div class="w-full flex justify-center my-5">
                <a href="/" class="flex items-center text-3xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-10 h-10 mr-2  rounded-full" src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" alt="logo">
                    PetOne    
                </a>
            </div>
            <form class="space-y-4 md:space-y-6" action="/">
                <div class="mb-6">
                    <Label for="email" class="block mb-2">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                    <Helper class="mt-2"></Helper>
                  </div>
                  <div class="mb-6">
                    <Label for="password" class="block mb-2">Password</Label>
                    <Input id="password" type="password" placeholder="Enter your password"/>
                    <Helper class="mt-2"></Helper>
                  </div>
                <div class="flex justify-between">
                    <Checkbox>Remember me</Checkbox>
                    <a href="/" class="text-primary-600 dark+:text-primary-500 hover:underline font-semiboldd">Forgot password</a>
                </div>
                <Button type="submit" class="w-full">Login</Button>
            </form>
        </div>
    </div>
    <div class="bgloginform"><img src={loginbg} alt=""></div>
</div>
<style>
    .darkmode{
        background-color: rgb(0, 0, 0);
        z-index: 1000;
    }
    .loginform{
        position: relative;
    }
    .bgloginform{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .bgloginform img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>