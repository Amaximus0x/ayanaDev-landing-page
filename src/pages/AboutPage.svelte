<script lang="ts">
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
	<title>About - Ayana Dev Studio</title>
	<meta name="description" content="Learn about Ayana Dev Studio, our mission, and the team behind our portfolio of essential digital products." />
</svelte:head>

<div class="min-h-screen bg-light-bg-primary">
	<Header />
	
	<div class="relative pt-[100px] md:pt-[120px] pb-16">
		<div class="max-w-4xl mx-auto px-5 md:px-8">
			
			<div class="text-center mb-16">
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
					About Ayana Dev Studio
				</h1>
				<p class="text-lg md:text-xl text-black/80 leading-relaxed max-w-3xl mx-auto">
					We're a venture studio creating apps that solve real problems in health, learning, and productivity. With our first products in market and an ambitious roadmap ahead, we're systematically building mobile-first solutions for everyday needs.
				</p>
			</div>

			<!-- Mission Section -->
			<div class="mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
					Our Mission
				</h2>
				<div class="prose prose-lg max-w-none text-black/80">
					<p class="text-center text-xl leading-relaxed">
						To build a portfolio of essential digital products that millions rely on daily. We focus on solving real problems with thoughtful, user-centric design and robust technology.
					</p>
				</div>
			</div>

			<!-- Our Approach Section -->
			<div class="mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
					How We Build
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div class="text-center">
						<div class="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<div class="w-8 h-8 bg-black rounded-full"></div>
						</div>
						<h3 class="text-xl font-semibold text-black mb-3">Problem-First</h3>
						<p class="text-black/70">We start with real problems that affect people's daily lives, then build solutions that genuinely help.</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<div class="w-8 h-8 bg-black rounded-full"></div>
						</div>
						<h3 class="text-xl font-semibold text-black mb-3">Mobile-First</h3>
						<p class="text-black/70">Every product is designed with mobile users in mind, ensuring accessibility and usability on any device.</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<div class="w-8 h-8 bg-black rounded-full"></div>
						</div>
						<h3 class="text-xl font-semibold text-black mb-3">Systematic Growth</h3>
						<p class="text-black/70">We build systematically, learning from each product to improve our approach and expand our impact.</p>
					</div>
				</div>
			</div>

			<!-- Focus Areas Section -->
			<div class="mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
					Our Focus Areas
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div class="bg-white/50 rounded-2xl p-8 text-center">
						<h3 class="text-2xl font-bold text-black mb-4">Health & Wellness</h3>
						<p class="text-black/70">
							Building tools that help people understand and improve their physical and mental well-being through innovative approaches to health data and insights.
						</p>
					</div>
					
					<div class="bg-white/50 rounded-2xl p-8 text-center">
						<h3 class="text-2xl font-bold text-black mb-4">Education & Learning</h3>
						<p class="text-black/70">
							Creating platforms that make learning more accessible, structured, and engaging for educators and students worldwide.
						</p>
					</div>
					
					<div class="bg-white/50 rounded-2xl p-8 text-center">
						<h3 class="text-2xl font-bold text-black mb-4">Productivity & Tools</h3>
						<p class="text-black/70">
							Developing solutions that streamline complex processes and help professionals work more efficiently and effectively.
						</p>
					</div>
				</div>
			</div>

			<!-- Current Status Section -->
			<div class="text-center bg-black/5 rounded-2xl p-8 md:p-12">
				<h2 class="text-3xl md:text-4xl font-bold text-black mb-6">
					Where We Are Today
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					<div>
						<div class="text-3xl font-bold text-black mb-2">5</div>
						<div class="text-lg text-black/70">Products in Market</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-black mb-2">500+</div>
						<div class="text-lg text-black/70">Active Users</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-black mb-2">∞</div>
						<div class="text-lg text-black/70">Potential Ahead</div>
					</div>
				</div>
				<p class="text-lg text-black/80 max-w-2xl mx-auto">
					We're at the beginning of an ambitious journey. Our goal is to build a portfolio of apps that millions rely on daily, and we're just getting started.
				</p>
			</div>
		</div>
	</div>
</div>

<Footer />