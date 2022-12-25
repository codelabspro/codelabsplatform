<script lang="ts">
    let email = ''
    let password = ''

    $: handleSubmit = async () => {
        const response = await axios.post('/api/login', {
            email,
            password
        })
    }
</script>
<div class="card">
<form class="mt-6" on:submit|preventDefault={handleSubmit} autocomplete="off">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
            <div class="form-control">
                <label class="label" for="email">
                <span class="label-text">Email</span>
                </label>
                <input
                type="text"
                name="email"
                placeholder="email"
                class="input input-bordered"
                bind:value={email}
                />
            </div>
            <div class="form-control">
                <label class="label" for="password">
                <span class="label-text">Password</span>
                </label>
                <input
                type="password"
                name="password"
                placeholder="password"
                class="input input-bordered"
                bind:value={password}
                />
                <label class="label" for="forgotPassword">
                <a href="/forgotpassword" name="forgotPassword" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <label class="label" for="signupLink">
                <a href="/register" name="signupLink" class="label-text-alt link link-hover">Register here</a>
                </label>
                <label class="label" for="backLink">
                    <a href="/" name="signupLink" class="label-text-alt link link-hover">Back</a>
                </label>
            </div>
            <div class="form-control mt-6">
                <button class="btn btn-secondary">Login</button>
            </div>
            </div>
        </div>
    </div>
</form>
</div>
