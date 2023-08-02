<script>
import feather from 'feather-icons';

export default {
	components: {  },
	data() {
		return {
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<!--  classic Footer in tailwindcss-->
	<footer class="container mx-auto px-4 ">
		<p>

			<a href="https://www.dif.vc/" target="_blank" class="text-white hover:text-gray-10">DIF</a>
			&copy; 2021



		</p>

	</footer>

	
</template>

<style scoped> 
/* footer css it matchs the max screen */
footer {
	margin-top: 60px;
	background: #2b2b2b;
	color: #fff;
	padding: 40px 0 40px;
	max-width: 100%; 
	/* attach to bottom */
	position: absolute;
	bottom: 0;
	width: 100%;


    background-attachment: scroll;
    background-position: 0% 0%;
    position: fixed;
 



	
}

</style>
