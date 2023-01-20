<svelte:head>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
</svelte:head>

<div class="links-wrapper">
    <div class="link" onclick="location.href='/create';">
        Create Cards
    </div>
    <div class="link" onclick="location.href='/edit';">
        Edit Cards
    </div>
    <div class="link" onclick="location.href='/study';">
        Study Cards
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        font-family: Helvetica, sans-serif;
    }

    .links-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        min-height: 100vh;
        align-items: center;
        margin: 0;
    }

    .link {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        flex-basis: 100vh;
        height: 100vh;
        background-color: #DDD;
        color: #222;
        transition: color 1s ease;
        transition: background-color 1s ease;
        font-size: 2em;
    }

    .link:hover {
        background-color: #111;
        color: #888;
        cursor: pointer;
    }
</style>
