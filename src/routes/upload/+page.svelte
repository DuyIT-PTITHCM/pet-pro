<script>
    import axios from "axios";

    let file;

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(file);

        const formData = new FormData();
        formData.append("file", file);

        try {
            axios
                .post("http://103.142.26.42/api/v1.0/upload", formData)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } catch (error) {
            console.error("Error:", error);
        }
    };
</script>

<main>
    <h1>Upload Form</h1>
    <form on:submit={handleSubmit}>
        <input
            type="file"
            on:change={(event) => (file = event.target.files[0])}
        />
        <button type="submit">Upload</button>
    </form>
</main>

<style>
    main {
        text-align: center;
        padding: 2rem;
    }

    input {
        margin-bottom: 1rem;
    }
</style>
