<script lang="ts">
	import Header from "../../components/Header.svelte";
	import Footer from "../../components/Footer.svelte";
	
	const product = {
		title: "Youversity",
		category: "Education & Learning",
		description: "Turn Any YouTube Playlist Into A Structured, Trackable Course In Seconds.",
		availability: "Live Web App",
		stats: "Over 500 Courses Created By Early Educators",
		buttonText: "Start Building Your Course",
		imageUrl: "/products/youversity-web.svg",
		buttonUrl: "https://youversity.io"
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
						About Youversity
					</h2>
					<div class="prose prose-lg max-w-none text-black/80">
						<p class="mb-4">
							Youversity transforms YouTube playlists into structured, trackable learning experiences. Educators and content creators can now offer professional course experiences using their existing YouTube content.
						</p>
						<p class="mb-4">
							With features like progress tracking, assessments, and structured learning paths, Youversity bridges the gap between informal video content and formal education.
						</p>
						<p>
							Join hundreds of educators who have already created over 500 courses, reaching learners worldwide with engaging, video-based education.
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
								<h3 class="font-semibold text-black mb-1">Instant Course Creation</h3>
								<p class="text-black/70">Transform any YouTube playlist into a structured course in seconds</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Progress Tracking</h3>
								<p class="text-black/70">Monitor student progress and engagement across your courses</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Learning Paths</h3>
								<p class="text-black/70">Create structured learning experiences with prerequisites and milestones</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<div class="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
							<div>
								<h3 class="font-semibold text-black mb-1">Educator Dashboard</h3>
								<p class="text-black/70">Comprehensive analytics and course management tools</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer />