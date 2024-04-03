<script>
    let value = 'Default value';
    let numValue, rangeValue;
    let checked = true;
    let selected;
    let selectedOptions = [];
    let checkedOptions = [];
    let selectedRadioOption;
</script>

<div class='container'>
    <div class='item'>
        <!-- Binding between attributes and component properties -->
        <p>Text: {value}</p>
        <!-- "bind:value" is shorthand for "bind:value={value}" -->
        <input bind:value />
        <textarea bind:value></textarea>
    </div>

    <div class='item'>
        <!-- Svelte automatically handles the conversion of data types -->
        <p>
            {numValue || 0} + 
            {rangeValue || 'Drag Slider'} = 
            {(numValue + rangeValue) || '---'}
        </p>
        
        <input type='number' bind:value={numValue} />
        <input type='range' bind:value={rangeValue} />
    </div>

    <div class='item'>
        <label>
            <!-- bind:checked is shorthand for bind:checked={checked} -->
            <input type='checkbox' bind:checked />
            Toggle Button
        </label>
        <button disabled={!checked}>Button</button>
    </div>

    <div class='item'>
        <p>Selected: {selected}</p>
        <select bind:value={selected}>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
        </select>
    </div>

    <div class='item'>
        <p>Selected: {selectedOptions.join(', ')}</p>
        <select multiple bind:value={selectedOptions}>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
        </select>
    </div>

    <!-- Bind a group of checkbox inputs, allowing multiple selections -->
    <div class='item'>
        <p>Checked: {checkedOptions.join(', ')}</p>
        <label>
            <input type='checkbox' value='A' bind:group={checkedOptions} />
            A
        </label>
        <label>
            <input type='checkbox' value='B' bind:group={checkedOptions} />
            B
        </label>
        <label>
            <input type='checkbox' value='C' bind:group={checkedOptions} />
            C
        </label>
    </div>

    <!-- Bind a group of radio buttons, allowing only one selection at a time -->
    <div class='item'>
        <p>Checked: {selectedRadioOption || '---'}</p>
        <label>
            <input type='radio' value='A' bind:group={selectedRadioOption} />
            A
        </label>
        <label>
            <input type='radio' value='B' bind:group={selectedRadioOption} />
            B
        </label>
        <label>
            <input type='radio' value='C' bind:group={selectedRadioOption} />
            C
        </label>
    </div>
</div>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: center;
        align-items: center;
    }

    .container {
        flex-direction: row;
        width: 80%;
    }

    .item {
        flex-direction: column;
        padding: 1em;
        border: 2px solid green;
    }
</style>