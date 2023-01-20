<script>
    import { onMount } from 'svelte';
    import Deck from './Deck.svelte';

    let showDeck = false;
    let data = "";
    let name = "";
    let deckName;
    let fileData;
    let fileUploadButton;

    let component = Deck;
    let props;

    function handleUploadFile() {
        let selectedFile = fileData.files[0];
        name = selectedFile.name;
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            data = reader.result;
            if (data !== "") {
                showDeck = true;
                fileUploadButton.remove();
                data = JSON.parse(data);
                name = name.replace(/\.json/, '')
                props = {
                    setDeckName: name,
                    cardsJSON: data,
                }
            }
        }, false);

        reader.readAsText(selectedFile);
    }
</script>

<svelte:head>
    {#if name == ""}
        <title>Edit</title>
    {:else}
        <title>Edit - {name}</title>
    {/if}
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
</svelte:head>

<div class="file-wrapper" bind:this={fileUploadButton}>
    <label class="custom-file-upload">
        <input type="file" on:change={handleUploadFile} bind:this={fileData} accept=".json"/>
        Upload Deck
    </label>
</div>

{#if showDeck === true && data !== ""}
    <svelte:component this={component} {...props}/>
{/if}

<style>
    :global(body) {
        margin: 0;
        font-family: Helvetica, sans-serif;
        background-color: #DDD;
        color: #222;
    }

    input[type="file"] {
        display: none;
    }

    .file-wrapper {
        display: grid;
        width: 100%;
        min-height: 100vh;
        place-items: center;
    }

    .custom-file-upload {
        border: 1px solid #AAA;
        border-radius: 10px;
        padding: 6px 12px;
        cursor: pointer;
        width: 300px;
        line-height: 2;
        font-size: 3em;
        text-align: center;
        transition: background-color 1s;
    }

    .custom-file-upload:hover {
        background-color: #AAA;
        color: #000;
    }
</style>
