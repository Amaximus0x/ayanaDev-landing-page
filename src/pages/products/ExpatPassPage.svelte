<script lang="ts">
	import Header from "../../components/Header.svelte";
	import Footer from "../../components/Footer.svelte";
	
	const product = {
		title: "ExpatPass",
		category: "Travel & Compliance",
		description: "Automate Visas, Residency Permits, And Document Reminders—Built For Remote Workers And Expat Families.",
		availability: "MVP Live",
		stats: "Helping expats worldwide",
		buttonText: "Join Waitlist",
		imageUrl: "/products/expatpass-web.svg",
		buttonUrl: "https://expatpass.io"
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
						About ExpatPass
					</h2>
					<div class="prose prose-lg max-w-none text-black/80">
						<p class="mb-4">
							ExpatPass simplifies the complex world of international compliance for remote workers and expat families. Never miss a visa renewal, permit application, or important document deadline again.
						</p>
						<p class="mb-4">
							Our intelligent system tracks your documents, sends timely reminders, and provides step-by-step guidance for visa applications and renewals across multiple countries.
						</p>
						<p>
							Built specifically for the growing remote work community, ExpatPass ensures you stay compliant wherever your journey takes you.
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
								<h3 class="font-semibold text-black mb-1">Automated Reminders</h3>
								<p class="text-black/70">Never miss visa renewals or document expiration dates</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Multi-Country Support</h3>
								<p class="text-black/70">Track compliance requirements across different countries</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Document Management</h3>
								<p class="text-black/70">Secure storage and organization of important documents</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Application Guidance</h3>
								<p class="text-black/70">Step-by-step instructions for visa and permit applications</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer />