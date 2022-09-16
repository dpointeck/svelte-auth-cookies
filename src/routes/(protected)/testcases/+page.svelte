<script>
	import Tiptap from "$lib/components/Tiptap.svelte";
	function handleSubmit() {
		console.log('submit')
	}
</script>

<form action="" on:submit|preventDefault={handleSubmit} method="post">
	<label for="title">Title</label>
	<input type="text" id="title" name="title" />
	<label for="description">Description</label>
	<Tiptap />
	<label for="expectedResult">Expected Result	</label>
    <textarea id="expectedResult" name="expectedResult" />


	<input type="submit" value="Submit" />
</form>

<style>

    form {
        display: flex;
        flex-wrap: wrap;
    }

    form > * {
        flex: 1 1 100%;
    }

    
	textarea {
		padding: 1rem;
		font: inherit;
		color: inherit;
		background-color: hsl(220 20% 20%);
		border: none;
		border-radius: 1rem;
		border: 1px solid hsl(220 20% 28%);
	}
</style>
