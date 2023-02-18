<template>
	<div class="backg">
		<h1>registers</h1>
		<form class="form-login">
			<input type="email" class="form-input" placeholder="Email" required />
			<br>
			<input type="password" class="form-input" placeholder="Palavra-passe" required />
			<br>
			<button class="btn">Iniciar sessão</button>
			<br>
			<router-link to="/register" style="color: blue">Não tem conta? Registe-se</router-link>
		</form>
	</div>
</template>

<script>
export default {
	name: 'Register'
}
</script>

<style scoped>
	.backg {
		background: blue;
	}
</style>