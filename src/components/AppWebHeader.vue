<template>
	<header class="inset-x-0 top-0 z-50 hidden bg-white shadow md:block">
		<div class="container mx-auto flex min-h-16 items-center justify-between px-4">
			<div class="flex items-center gap-16">
				<h1 class="text-lg font-bold">
					<router-link to="/">Template</router-link>
				</h1>

				<nav class="space-x-10">
					<router-link to="/" class="text-sm">Home</router-link>
					<router-link to="/about" class="text-sm">About</router-link>
				</nav>
			</div>

			<div>
				<router-link
					to="/login"
					class="rounded bg-gray-200 px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-300 hover:shadow"
				>
					Login
				</router-link>
			</div>
		</div>
	</header>
</template>
