<script>
    import { onMount } from 'svelte';

    let inputs;
    let deckName;
    let firstInputRow;
    let firstInputRowClassList;

    onMount(() => {
        firstInputRowClassList = firstInputRow.classList;
    });

    function handleAddCard() {
        let newDiv = document.createElement("div");
        for (let cls of firstInputRowClassList) {
            newDiv.classList.add(cls);
        }
        let input1 = document.createElement("input");
        for (let cls of firstInputRow.children[0].classList) {
            input1.name = "flashcard-question";
            input1.placeholder = "Question";
            input1.classList.add(cls);
        }
        let input2 = document.createElement("input");
        for (let cls of firstInputRow.children[1].classList) {
            input2.name = "flashcard-question";
            input2.placeholder = "Question";
            input2.classList.add(cls);
        }
        let button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = handleDeleteCard;
        for (let cls of firstInputRow.children[2].classList) { button.classList.add(cls); }

        newDiv.appendChild(input1);
        newDiv.appendChild(input2);
        newDiv.appendChild(button);

        inputs.appendChild(newDiv);
    }

    function handleDeleteCard() {
        let parent = this.parentElement;
        parent.remove();
        console.log(inputs)
    }

    function downloadFile(text, name, type) {
        let a = document.createElement("a");
        let file = new Blob([text], {type: type});
        a.href = URL.createObjectURL(file);
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    function handleSave() {
        let inputsChildren = inputs.children;
        let cardsJSON = {"cards": {}};
        for (let child of inputsChildren) {
            let childChildren = child.children;
            if (cardsJSON["cards"][childChildren[0].value] !== undefined || (childChildren[0].value === "" || childChildren[1].value === "")) {
                continue;
            }
            cardsJSON["cards"][childChildren[0].value] = childChildren[1].value;
        }
        
        downloadFile(JSON.stringify(cardsJSON), `${deckName.value}.json`, "text/plain");
    }
</script>

<svelte:head>
    <title>Create</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
</svelte:head>

<div class="header">
    <h1>Create Deck</h1>
    <input class="header-input" name="deck-name" placeholder="Deck Name" bind:this={deckName}>
    <hr>
</div>

<div class="form">
    <div class="inputs" bind:this={inputs}>
        <div class="input-row" bind:this={firstInputRow}>
            <input name="flashcard-question" value="" placeholder="Question">
            <input name="flashcard-answer" value="" placeholder="Answer">
            <button on:click={handleDeleteCard}>Delete</button>
        </div>
    </div>

    <button on:click={handleAddCard}>Add Card</button>
    <button on:click={handleSave}>Save Deck</button>
</div>

<style>
    :global(body) {
        margin: 0;
        font-family: Helvetica, sans-serif;
        color: #222;
        background-color: #DDD;
    }

    .header {
        text-align: center;
        margin-bottom: 20px;
        height: 20vh;
    }

    .header .header-input {
        margin-bottom: 15px;
    }

    .header hr {
        color: #999;
        max-width: 200vh;
    }

    ::placeholder {
        color: #999;
    }

    .inputs .input-row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .inputs .input-row input, .header-input  {
        box-sizing: border-box;
        font-size: 16px;
        font-size: max(16px, 1em);
        padding: 0.25em 0.5em;
        margin: 0.25em;
        background-color: transparent;
        border: 2px solid #999;
        border-radius: 4px;
        line-height: 1;
        height: 2.25rem;
        width: 45vh;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form button {
        min-width: 25vh;
        min-height: 5vh;
        color: #DDD;
        background-color: #32A3DD;
        border-radius: 2em;
        border-color: transparent;
        box-sizing: border-box;
        font-weight: 300;
        transition: background-color 0.2s;
        margin-top: 15px;
        font-weight: 600;
    }

    .form button:hover {
        background-color: #627BBF;
        cursor: pointer;
    }
</style>
