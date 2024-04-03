<script>
    import { isLoggedIn, userDetails } from './user';

    let values = {};
	let errors = {};

    async function register(data) {
        // Send data to server

        return new Promise(resolve => {
            setTimeout(
                () => {
                    isLoggedIn.set(true);
                    userDetails.set(data);
                    resolve();
                }, 
                1000
            );
        });
    }

	async function submitHandler() {
        // Implement validation
        // Use a validation library like Yup or Zod

        const { email, password } = values;
        let submit = true;

        if (!email) {
            errors.email = 'Email is required';
            values.email = '';
            submit = false;
        }

        if (email && !email.includes('@')) {
            errors.email = 'Invalid email format';
            values.email = '';
            submit = false;
        }

        if (!password) {
            errors.password = 'Password is required';
            values.password = '';
            submit = false;
        }

        if (password && password.length < 8) {
            errors.password = 'Password must have at least 8 characters';
            values.password = '';
            submit = false;
        }
        
        if (!submit) return;

        errors = {};
        await register(values);
	}
</script>

<form on:submit|preventDefault={submitHandler}>
    <h2>Register</h2>

	<div>
		<input 
            type='text' 
            name='email' 
            bind:value={values.email} 
            placeholder='Email' 
        />

        {#if errors.email}
            <span>{errors.email}</span>
        {/if}
	</div>

	<div>
		<input 
            type='password' 
            name='password' 
            bind:value={values.password} 
            placeholder='Password' 
        />

		{#if errors.password}
            <span>{errors.password}</span>
        {/if}
	</div>

	<button type='submit'>Register</button>
</form>

<style>
    form {
        width: 50%;
        border: 2px dashed #000;
        display: flex;
        flex-direction: column;
        gap: 1em;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 20em;
        display: block;
        padding: 0.5em;
    }

    button {
        margin: 1em;
    }

    span {
        display: block;
        color: red;
        margin-top: 0.2em;
        margin-left: 0.2em;
    }
</style>