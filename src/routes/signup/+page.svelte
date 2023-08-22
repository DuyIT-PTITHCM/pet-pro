<script>
    import SignUp from "../../lib/components/sign/SignUp.svelte";
    import { title, description } from "$lib/store/meta";
    title.set("Sign Up");
    description.set("Sign up page");
</script>
<svelte:head>
    <title>
        Sing Up
    </title>
</svelte:head>
<SignUp />
