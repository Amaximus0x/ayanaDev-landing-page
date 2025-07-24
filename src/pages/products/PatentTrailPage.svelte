<script lang="ts">
	import Header from "../../components/Header.svelte";
	import Footer from "../../components/Footer.svelte";
	
	const product = {
		title: "Patent Trail",
		category: "Research & Productivity",
		description: "AI-Powered Patent Exploration And Tracking—Find Gaps, And Trends In Seconds.",
		availability: "MVP Live",
		stats: "Used By 40+ Indie Inventors & Startup CTOs",
		buttonText: "Track Patents",
		imageUrl: "/products/patenttrail-web.svg",
		buttonUrl: "https://patenttrail.com"
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
						About Patent Trail
					</h2>
					<div class="prose prose-lg max-w-none text-black/80">
						<p class="mb-4">
							Patent Trail revolutionizes patent research with AI-powered insights that help inventors, entrepreneurs, and CTOs navigate the complex world of intellectual property. Discover opportunities, track trends, and identify gaps in seconds, not hours.
						</p>
						<p class="mb-4">
							Our intelligent system analyzes millions of patents to provide actionable insights, helping you make informed decisions about your innovations and competitive landscape.
						</p>
						<p>
							Trusted by indie inventors and startup CTOs, Patent Trail has become an essential tool for anyone serious about innovation and intellectual property strategy.
						</p>
					</div>
				</div>
				
				<div>
					<h2 class="text-2xl md:text-3xl font-bold text-black mb-6">
						Key Features
					</h2>
					<ul class="space-y-4">
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">AI-Powered Search</h3>
								<p class="text-black/70">Find relevant patents and identify gaps using advanced AI algorithms</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Trend Analysis</h3>
								<p class="text-black/70">Track patent filing trends and emerging technologies in your field</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Competitive Intelligence</h3>
								<p class="text-black/70">Monitor competitor patent activities and strategic moves</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Opportunity Discovery</h3>
								<p class="text-black/70">Identify white spaces and opportunities for innovation</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer />