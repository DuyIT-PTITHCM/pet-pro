<script>
    import SignUp from "$lib/components/signin_signup/SignUp.svelte";
    import { title, description } from "$lib/store/meta";
    title.set("Sign Up - PetOne");
    description.set("PetOne Sign Up");
</script>

<SignUp />
