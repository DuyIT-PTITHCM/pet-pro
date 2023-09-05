<script lang="ts">
    import Editor from "@tinymce/tinymce-svelte";

    export let text ="";

    const conf = {
        plugins: "image",
        toolbar1:
            "newdocument fullpage | blocks fontfamily fontsize | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect | heading",
        toolbar2:
            "image | media | cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor code | insertdatetime preview | forecolor backcolor",
        toolbar3:
            "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",
        menubar: false,
        images_upload_url: "/api/v1.0/upload/editor",
    };
</script>

<Editor
    apiKey="4zwho6iauuup5m7zl61gs294kuht6k9pzbwz87v7hnpkhh10"
    id="uuid"
    inline="false"
    disabled="false"
    {conf}
    modelEvents="input change undo redo"
    bind:value={text}
    text="readonly-text-output"
/>
