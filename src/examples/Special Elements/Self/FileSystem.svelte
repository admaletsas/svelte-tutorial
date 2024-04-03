<script>
    import Directory from './Directory.svelte';
    import { data } from './data';
</script>

<Directory name='root' files={data} expanded />