<script lang="ts">
	import { HOST } from '$lib/Const.js';
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { toastErr } from "$lib/store/toastError";
    import Editor from "@tinymce/tinymce-svelte";

    export let text ="";
    export let id ="";

    const uploadFileService = RepositoryFactory.get("uploadRepository");

    const conf = {
        plugins: "image table",
        toolbar1:
            "newdocument fullpage | blocks fontfamily fontsize | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect | heading",
        toolbar2:
            "image | media | cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor code | insertdatetime preview | forecolor backcolor",
        toolbar3:
            "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",
        menubar: false,
        file_picker_types: "image",
        file_picker_callback: async function (callback, value, meta) {
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = async function () {
                var file = this.files[0];
                const formData = new FormData();
                formData.append("file", file);

                try {
                    const res = await uploadFileService.uploadFileEditor(formData);
                    console.log(res);
                    callback(HOST+res?.data?.location, {alt: ''});
                } catch (error) {
                    toastErr.set([
                        {
                            message: "File upload failed",
                            type: "error",
                        },
                    ]);
                }
            };

            input.click();
        },
    };
</script>

<Editor
    apiKey="4zwho6iauuup5m7zl61gs294kuht6k9pzbwz87v7hnpkhh10"
    {id}
    inline="false"
    disabled="false"
    {conf}
    modelEvents="input change undo redo"
    bind:value={text}
    text="readonly-text-output"
/>
