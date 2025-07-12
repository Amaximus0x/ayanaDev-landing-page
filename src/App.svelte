<script lang="ts">
	import Header from './components/Header.svelte';
	import ProductCard from './components/ProductCard.svelte';
	
	// TypeScript variables and logic go here
	let title = "Ayana Dev Studio";
	let description = "We're a venture studio creating apps that solve real problems in health, learning, and productivity. With our first products in market and an ambitious roadmap ahead, we're systematically building mobile-first solutions for everyday needs.";

	// Sample product data
	const handleProductAction = (productName: string) => {
		console.log(`${productName} action clicked`);
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="min-h-screen bg-light-bg-primary">
		<!-- Fixed Header -->
		<Header />

	
	<!-- Content with padding to account for fixed header -->
	<div class="pt-[1px] md:pt-[1px]">
	
	<!-- Trusted By Section -->
	<div class="w-auto h-auto flex justify-center mt-[185px] md:mt-[225px] mb-6 md:mb-[15px]">
		<div class="trusted-by-container inline-flex justify-center items-center gap-[4px] pl-[4px] pr-[12px] py-[4px] rounded-[30000px]  relative">
			<div class="flex items-center -space-x-2">
				<img class="w-5 h-5 rounded-full object-cover bg-[#D9D9D9] border border-1 border-white relative z-7" src="/avaters/avater-1.jpg" />
				<img class="w-5 h-5 rounded-full object-cover bg-[#D9D9D9] border border-1 border-white relative z-8" src="/avaters/avater-2.jpg" />
				<img class="w-5 h-5 rounded-full object-cover bg-[#D9D9D9] border border-1 border-white relative z-9" src="/avaters/avater-3.jpg" />
				<img class="w-5 h-5 rounded-full object-cover bg-[#D9D9D9] border border-1 border-white relative z-10" src="/avaters/avater-4.jpg" />
			</div>
			<div class="text-center text-black text-small-xs font-sans">Trusted By Thousands</div>
		</div>
	</div>
	
	<!-- Hero Section -->
	<div class="flex flex-col justify-center items-center gap-10 md:gap-14 mx-5 md:ml-[143px] md:mr-[142px]">
		<div class="flex flex-col justify-center items-center gap-4 md:gap-6">
			<div class="text-center justify-start text-black text-h1-xs md:text-h1-lg font-sans capitalize">Building a Portfolio <br/>of Essential Digital Products</div>
			<div class="md:w-[657px] md:h-auto">
				<p class="text-black text-center text-small md:text-small-lg font-sans capitalize">
					We're a venture studio creating apps that solve real problems in health, learning, and productivity. With our first products in market and an ambitious roadmap ahead, we're systematically building mobile-first solutions for everyday needs.
				</p>
			</div>
					
		</div>
		<div class="px-4 py-2 md:px-6 md:py-4 bg-black rounded-lg inline-flex justify-center items-center gap-2.5">
			<div class="text-center justify-center text-white text-small-medium md:text-small-lg font-sans capitalize">Explore our Apps</div>
		</div>
	</div>

	<!-- Our Products Section -->
	 <div class="flex flex-col justify-center items-center gap-4 md:gap-8 mx-5 md:ml-[97px] md:mr-[96px] mt-[71px] md:mt-[119px]">
		<div class="text-center justify-center text-black text-h3-medium md:text-h2-medium font-sans capitalize">Products in Market</div>
		 <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-6 md:gap-y-8 w-full">
			<!-- RootCause.my -->
			<ProductCard
				title="RootCause.my"
				category="Health & Wellness"
				description="Discover the emotional root of symptoms with personalised German New Medicine reports."
				availability="Now available on App Store & Google Play"
				stats="400 symptom lookups logged"
				buttonText="Get Your Health Map"
				imageUrl="/products/rootcause.png"
				buttonAction={() => handleProductAction('RootCause.my')}
			/>
			
			<!-- ExpatPass -->
			<ProductCard
				title="ExpatPass"
				category="Travel & Compliance"
				description="Automate Visas, Residency Permits, And Document Reminders—Built For Remote Workers And Expat Families."
				availability="MVP Live"
				stats="400 Symptom Lookups Logged"
				buttonText="Join Waitlist"
				imageUrl="/products/expatpass.png"
				buttonAction={() => handleProductAction('ExpatPass')}
			/>
			
			<!-- Youversity -->
			<ProductCard
				title="Youversity"
				category="Education & Learning"
				description="Turn Any YouTube Playlist Into A Structured, Trackable Course In Seconds."
				availability="Live Web App"
				stats="Over 500 Courses Created By Early Educators"
				buttonText="Start Building Your Course"
				imageUrl="/products/youversity.png"
				buttonAction={() => handleProductAction('Youversity')}
			/>
			
			<!-- Patent Trail -->
			<ProductCard
				title="Patent Trail"
				category="Research & Productivity"
				description="AI-Powered Patent Exploration And Tracking—Find Gaps, And Trends In Seconds."
				availability="MVP Live"
				stats="Used By 40+ Indie Inventors & Startup CTOs"
				buttonText="Track Patents"
				imageUrl="/products/patenttrail.png"
				buttonAction={() => handleProductAction('Patent Trail')}
			/>
			
			<!-- Painpoint Viral -->
			<ProductCard
				title="Painpoint Viral"
				category="SaaS Community Growth"
				description="Transform Your Twitter Presence Into Authentic SaaS Growth With Real-Time Conversation Discovery And AI-Driven Engagement Tools."
				availability="Coming Soon — Currently In Development"
				stats=""
				buttonText="Join Waitlist"
				imageUrl="/products/painpointviral.png"
				buttonAction={() => handleProductAction('Painpoint Viral')}
			/>
		 </div>
	 </div>
	 </div>
</div> 

<style>
	.trusted-by-container {
		position: relative;
		background: rgba(0, 0, 0, 0.03);
		border-radius: 30000px;
		outline: 1px solid;
		outline-color: linear-gradient(45deg, rgba(0, 0, 0, 0.39), rgba(255, 255, 255, 0.1));
		outline-offset: -1px;
		backdrop-filter: blur(2px);
	}
</style> 