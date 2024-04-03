<script>
    import Card from './Card.svelte';
</script>

<Card>
    <span>
        A strong and valiant <strong>fighter</strong> 
        with lightning attacks, 
        defensive skills, and empowering abilities, 
        inspiring allies and intimidating foes.
    </span>

    <span slot='name'>Mighty Warrior</span>
    <span slot='power'>245</span>
</Card>