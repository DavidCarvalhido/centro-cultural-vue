<template>
	<div class="card">
		<h1>Login</h1>
		<form class="form-login">
			<input type="email" class="form-input" placeholder="Email" required />
			<br>
			<input type="password" class="form-input" placeholder="Palavra-passe" required />
			<br>
			<button class="form-btn">Iniciar sessão</button>
			<br>
			<router-link to="/register" style="color: blue">Não tem conta? Registe-se</router-link>
		</form>
	</div>
</template>

<script>
export default {
	name: 'Login'
}
</script>

<style>
	.card {
		/*background-color: #000;*/
		width: 500px;
	}
	.form-login {
		padding: 20px;
	}
	.form-input {
		padding: 10px 15px;
		font-size: 1em
	}
	.form-btn {
		background-color: #4CAF50; /* Green */
		border: 2px  green solid;
		border-radius: 3px;
		color: white;
		padding: 10px 50px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}
	.form-btn:hover {
		background-color: #246926;
	}
</style>