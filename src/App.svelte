<script lang="ts">
	import Header from './components/Header.svelte';
	
	// TypeScript variables and logic go here
	let title = "Welcome to AyanaDev";
	let description = "Building amazing experiences with modern web technologies";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
	<!-- Fixed Header -->
	<Header />
	
	<!-- Content with padding to account for fixed header -->
	<div class="pt-20 md:pt-24">
	
	<!-- Hero Section -->
	<section class="container mx-auto px-6 py-16 text-center">
		<h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
			{title}
		</h1>
		<p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
			{description}
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<button class="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
				Get Started
			</button>
			<button class="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
				Learn More
			</button>
		</div>
	</section>

	<!-- Features Section -->
	<section class="container mx-auto px-6 py-16">
		<div class="grid md:grid-cols-3 gap-8">
			<div class="bg-white p-8 rounded-xl shadow-lg">
				<div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">Fast Performance</h3>
				<p class="text-gray-600">Built with modern technologies for lightning-fast performance and optimal user experience.</p>
			</div>
			
			<div class="bg-white p-8 rounded-xl shadow-lg">
				<div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">Customizable</h3>
				<p class="text-gray-600">Highly customizable solutions tailored to meet your specific business needs and requirements.</p>
			</div>
			
			<div class="bg-white p-8 rounded-xl shadow-lg">
				<div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">Secure & Reliable</h3>
				<p class="text-gray-600">Enterprise-grade security and reliability you can trust for your most important projects.</p>
			</div>
		</div>
	</section>
	</div>
</div> 