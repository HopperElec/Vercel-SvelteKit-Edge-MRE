<script>
    import {onMount} from "svelte";

    onMount(() => {
        const events = new EventSource('sse');
        const listElm = document.getElementById("list");
        events.addEventListener("rand", event => {
            const listItem = listElm.appendChild(document.createElement("li"));
            listItem.innerText = event.data;
        });
    });
</script>

<p>
    This is a basic SvelteKit app which uses SSE to generate a random
    number every second on the server and display it on the client.
</p>
<p>
    This is being used as a minimum reproducible example for an error I am
    receiving when trying to deploy an SSE-based SvelteKit app on Vercel.
</p>
<p>
    GitHub discussion thread:
    <a href="https://github.com/orgs/vercel/discussions/5821">https://github.com/orgs/vercel/discussions/5821</a>
</p>
<ol id="list"></ol>