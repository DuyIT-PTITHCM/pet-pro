<script>
    import SignUp from "../../lib/components/sign/SignUp.svelte";
    import "../../app.css";
    import ToastError from "$lib/components/common/ToastError.svelte";
    import Loading from "$lib/components/common/Loading.svelte";
</script>

<svelte:head>
    <title>Sing Up</title>
</svelte:head>
<SignUp />
<Loading />
<ToastError />
