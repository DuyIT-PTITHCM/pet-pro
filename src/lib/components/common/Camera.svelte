<script lang="ts">
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { toastErr } from "$lib/store/toastError";
    import Icon from "@iconify/svelte";
    import { Button, Modal } from "flowbite-svelte";
    export let image = "";
    export let button = "", buttonRetake = "";
    export let isReTake = false;
    const uploadFileService = RepositoryFactory.get("uploadRepository");
    let openCamera = false;
    let capturedImageSrc: string;
    let videoStream: any;
    let videoRef: any;
    //camera
    async function startCamera() {
        try {
            capturedImageSrc = "";
            videoStream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            if (videoRef) {
                videoRef.srcObject = videoStream;
            } else {
                startCamera();
            }
        } catch (error) {
            toastErr.set([
                {
                    message: error.message,
                    type: "error",
                },
            ]);
        }
    }

    async function stopCamera() {
        if (videoStream) {
            const tracks = videoStream.getTracks();
            tracks.forEach((track: any) => track.stop());
        }
    }
    async function handleCapture() {
        const canvas = document.createElement("canvas");
        canvas.width = videoRef.videoWidth;
        canvas.height = videoRef.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoRef, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/png");
        capturedImageSrc = dataUrl;
        const blob = await fetch(dataUrl).then((response) => response.blob());
        const formData = new FormData();
        const fileName = `captured_image.png`;
        formData.append("file", blob, fileName);
        try {
            const res = await uploadFileService.uploadFile(formData);
            image = res.data.data.path;
        } catch (error) {
            toastErr.set([
                {
                    message: "File upload failed",
                    type: "error",
                },
            ]);
        }
        await stopCamera();
    }
    //end cammera
</script>

{#if isReTake}
    <button class={buttonRetake} on:click={() => (openCamera = true)}><Icon icon="ion:reload-outline" /></button>
{:else}
    <Button on:click={() => (openCamera = true)}
        >{button ? button : "Open cammera"}</Button
    >
{/if}
<Modal title="Camera" bind:open={openCamera} autoclose={false}>
    <div class="flex flex-col justify-center items-center">
        {#if videoStream}
            {#if capturedImageSrc}
                <img src={capturedImageSrc} style="max-width: 100%;" alt="s" />
            {:else}
                <video bind:this={videoRef} autoplay></video>
            {/if}
            <div class="flex justify-around items-center w-1/2">
                <button on:click={startCamera} class="text-[40px]"
                    ><Icon icon="ion:reload-circle-sharp" /></button
                >
                <button on:click={() => handleCapture()} class="text-[100px]"
                    ><Icon icon="solar:camera-bold" /></button
                >
                <button on:click={() => stopCamera()} class="text-[40px]"
                    ><Icon icon="mdi:camera-off" /></button
                >
            </div>
        {:else}
            <button class="text-center text-4xl" on:click={startCamera}
                ><Icon icon="solar:camera-bold" /></button
            >
        {/if}
    </div>
    <svelte:fragment slot="footer">
        <Button on:click={() => (openCamera = false)}>Ok</Button>
    </svelte:fragment>
</Modal>
