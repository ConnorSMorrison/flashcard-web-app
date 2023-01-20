<script>
    export let deck;
    let studyAmounts = getStudyAmounts(deck);
    // Shuffles deck questions
    let deckQuestions = Object.keys(deck["cards"])
                        .map(value => ({ value, sort: Math.random() }))
                        .sort((a, b) => a.sort - b.sort)
                        .map(({ value }) => value);
    let currentQuestion = 0;
    let isOnQuestion = true;
    let finishedStudying = false;

    function getStudyAmounts(deck) {
        let studyAmounts = {}; 
        for (let [key, value] of Object.entries(deck["cards"])) {
            studyAmounts[key] = 2;
        }
        return studyAmounts;
    }

    function handleRevealAnswer() {
        isOnQuestion = false;
    }

    function handleCorrect() {
        isOnQuestion = true;
        studyAmounts[deckQuestions[currentQuestion]] -= 1;
        if (studyAmounts[deckQuestions[currentQuestion]] === 0) {
            deckQuestions.splice(currentQuestion, 1);
        }

        if (deckQuestions.length === 0) {
            finishedStudying = true;
        }

        currentQuestion = (currentQuestion + 1) % deckQuestions.length;

        if (currentQuestion === 0) {
            let deckQuestions = Object.keys(deckQuestions)
                                .map(value => ({ value, sort: Math.random() }))
                                .sort((a, b) => a.sort - b.sort)
                                .map(({ value }) => value);
        }
    }

    function handleIncorrect() {
        isOnQuestion = true;
        if (studyAmounts[deckQuestions[currentQuestion]] < 2) {
            studyAmounts[deckQuestions[currentQuestion]] += 1;
        }
        currentQuestion = (currentQuestion + 1) % deckQuestions.length;
    }

    function handleStudyAgain() {
        studyAmounts = getStudyAmounts(deck);
        // Shuffles deck questions
        deckQuestions = Object.keys(deck["cards"])
                            .map(value => ({ value, sort: Math.random() }))
                            .sort((a, b) => a.sort - b.sort)
                            .map(({ value }) => value);
        currentQuestion = 0;
        isOnQuestion = true;
        finishedStudying = false;
    }
</script>

{#if finishedStudying == false}
    {#if isOnQuestion == true}
        <button class="reveal-answer" on:click={handleRevealAnswer}>{deckQuestions[currentQuestion]}<br><span class="click-notifier">Click to flip</span></button>
    {:else}
        <div class="answer-wrapper">
            <h1 class="answer">{deck["cards"][deckQuestions[currentQuestion]]}</h1>
            <div class="button-wrapper">
                <button class="correct answer-button" on:click={handleCorrect}>Correct?</button>
                <button class="incorrect answer-button" on:click={handleIncorrect}>Incorrect?</button>
            </div>
        </div>
    {/if}

{:else}
    <div class="study-again-wrapper">
        <button class="study-again" on:click={handleStudyAgain}>Study Again</button>
    </div>
{/if}

<style>
    :global(body) {
        margin: 0;
        font-family: Helvetica, sans-serif;
        background-color: #DDD;
        color: #222;
    }

    .reveal-answer {
        width: 100vw;
        height: 100vh;
        font-size: 5em;
        background-color: transparent;
        color: #222;
    }

    .reveal-answer:hover {
        cursor: pointer;
    }

    .click-notifier {
        font-size: 0.5em;
        color: #888;
    }

    .answer-wrapper {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100vw;
        height: 100vh;
    }

    .answer {
        font-size: 5em;
    }

    .button-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 20vw;
        position: absolute;
        bottom: 0;
    }

    .answer-button {
        width: 50%;
        height: 100%;
        border-radius: 10px;
        border-style: solid;
        border-color: #DDD;
        font-size: 2em;
        background-color: #EEE;
        transition: background-color 1s ease;
    }

    .answer-button:hover {
        background-color: #BBB;
        cursor: pointer;
    }

    .study-again-wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .study-again {
        border: 1px solid #AAA;
        border-radius: 10px;
        padding: 6px 12px;
        cursor: pointer;
        width: 300px;
        line-height: 2;
        font-size: 3em;
        text-align: center;
        transition: background-color 1s ease;
    }

    .study-again:hover {
        background-color: #AAA;
        color: #000;
    }
</style>
