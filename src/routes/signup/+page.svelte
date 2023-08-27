<script>
    import SignUp from "../../lib/components/sign/SignUp.svelte";
    import "../../app.css";
    import ToastError from "$lib/components/common/ToastError.svelte";

</script>
<svelte:head>
    <title>
        Sing Up
    </title>
</svelte:head>
<SignUp />
<ToastError/>