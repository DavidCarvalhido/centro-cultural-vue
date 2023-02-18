<template>
	<div class="hello">
		<nav>
			<h1>Centro</h1>
			<!--<router-link to="/login">Login</router-link>-->
			<!--<router-link to="/register">Register</router-link>-->
			<select class="custom-select" v-model="lang" @change="handleChange($event)">
				<option value="pt">Português</option>
				<option value="en">English</option>
				<option value="es">Español</option>
				<option value="fr">Français</option>
			</select>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data: function() {
			const lang = localStorage.getItem('lang') || 'en';
			return {
				lang: lang
			}
		},
		methods: {
			handleChange(event) {
				localStorage.setItem('lang', event.target.value);
				window.location.reload();
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	nav {
		background-color: lightblue;
	}
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
	.custom-select {
		background: #a8a8a8;
		radius-border: 5px;
	}
</style>