<template>
	<section class="home">
		<router-link to="/login">Перейти к Login</router-link>
		<router-link to="/register">Перейти к Register</router-link>
		<router-view></router-view>
	</section>
</template>

<script>
export default {
	name: 'Home'
}
</script>

<style scoped lang="sass">

</style>
