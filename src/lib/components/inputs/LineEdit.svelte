<script lang="ts">
    export let placeholder: string = "";
    export let value: string = "";
</script>
<input type="text" {placeholder} bind:value class="p-2 rounded-lg  w-full border border-neutral-300 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-orange-300 transition-all"/>