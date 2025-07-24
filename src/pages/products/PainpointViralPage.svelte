<script lang="ts">
	import Header from "../../components/Header.svelte";
	import Footer from "../../components/Footer.svelte";
	
	const product = {
		title: "Painpoint Viral",
		category: "SaaS Community Growth",
		description: "Transform Your Twitter Presence Into Authentic SaaS Growth With Real-Time Conversation Discovery And AI-Driven Engagement Tools.",
		availability: "Coming Soon — Currently In Development",
		stats: "Join the waitlist for early access",
		buttonText: "Join Waitlist",
		imageUrl: "/products/painpointviral-web.svg",
		buttonUrl: "https://painpointviral.com"
	};
</script>

<svelte:head>
	<title>{product.title} - Ayana Dev Studio</title>
	<meta name="description" content={product.description} />
</svelte:head>

<div class="min-h-screen bg-light-bg-primary">
	<Header />
	
	<div class="relative pt-[100px] md:pt-[120px] pb-16">
		<div class="max-w-6xl mx-auto px-5 md:px-8">
			
			<!-- Product Hero Section -->
			<div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
				<div class="flex-1 text-center lg:text-left">
					<div class="inline-block px-4 py-2 bg-black/5 rounded-full text-sm font-medium text-black/70 mb-6">
						{product.category}
					</div>
					
					<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
						{product.title}
					</h1>
					
					<p class="text-lg md:text-xl text-black/80 mb-8 leading-relaxed">
						{product.description}
					</p>
					
					<div class="flex flex-col sm:flex-row gap-4 items-center lg:items-start lg:justify-start justify-center">
						<a 
							href={product.buttonUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-lg"
						>
							{product.buttonText}
						</a>
						
						<div class="text-center sm:text-left">
							<div class="text-sm text-black/60 mb-1">{product.availability}</div>
							<div class="text-sm font-medium text-black/80">{product.stats}</div>
						</div>
					</div>
				</div>
				
				<div class="flex-1 max-w-lg">
					<img 
						src={product.imageUrl} 
						alt={product.title}
						class="w-full h-auto rounded-2xl shadow-2xl"
					/>
				</div>
			</div>
			
			<!-- Product Details Section -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
				<div>
					<h2 class="text-2xl md:text-3xl font-bold text-black mb-6">
						About Painpoint Viral
					</h2>
					<div class="prose prose-lg max-w-none text-black/80">
						<p class="mb-4">
							Painpoint Viral is the next-generation tool for SaaS founders and marketers who want to build authentic communities on Twitter. By discovering real-time conversations about pain points in your industry, you can engage meaningfully and grow your presence organically.
						</p>
						<p class="mb-4">
							Our AI-driven approach helps you find the perfect moments to join conversations, share value, and build relationships that convert into genuine business growth.
						</p>
						<p>
							Currently in development, Painpoint Viral will launch with advanced features designed specifically for the modern SaaS community builder.
						</p>
					</div>
				</div>
				
				<div>
					<h2 class="text-2xl md:text-3xl font-bold text-black mb-6">
						Planned Features
					</h2>
					<ul class="space-y-4">
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Real-Time Discovery</h3>
								<p class="text-black/70">Find relevant conversations as they happen across Twitter</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">AI-Driven Insights</h3>
								<p class="text-black/70">Get intelligent suggestions for engagement and content creation</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Authentic Engagement</h3>
								<p class="text-black/70">Tools designed to help you provide genuine value, not just promote</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Growth Analytics</h3>
								<p class="text-black/70">Track your community growth and engagement metrics</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer />