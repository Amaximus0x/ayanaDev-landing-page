<script lang="ts">
	import Header from "../components/Header.svelte";
	import ProductCard from "../components/ProductCard.svelte";
	import Footer from "../components/Footer.svelte";
	import klaviyoService from "../services/klaviyo";

	// TypeScript variables and logic go here
	let title = "Ayana Dev Studio";
	let description =
		"We're a venture studio creating apps that solve real problems in health, learning, and productivity. With our first products in market and an ambitious roadmap ahead, we're systematically building mobile-first solutions for everyday needs.";

	const isMobile = window.innerWidth < 768;

	// Email subscription state
	let email = "";
	let isSubmitting = false;
	let submissionMessage = "";
	let submissionType: "success" | "error" | "" = "";


	const handleEmailSubmit = async () => {
		if (!email.trim()) {
			submissionMessage = "Please enter your email address.";
			submissionType = "error";
			return;
		}

		isSubmitting = true;
		submissionMessage = "";
		submissionType = "";

		try {
			const result = await klaviyoService.subscribeEmail(email.trim());
			
			if (result.success) {
				submissionMessage = result.message;
				submissionType = "success";
				email = ""; // Clear the input on success
			} else {
				submissionMessage = result.message;
				submissionType = "error";
			}
		} catch (error) {
			console.error("Email submission error:", error);
			submissionMessage = "Something went wrong. Please try again later.";
			submissionType = "error";
		} finally {
			isSubmitting = false;
			
			// Clear message after 5 seconds
			setTimeout(() => {
				submissionMessage = "";
				submissionType = "";
			}, 5000);
		}
	};

	function handleGetInTouchClick() {
		const email = 'info@ayanadevstudio.com';
		const mailtoLink = `mailto:${email}`;
		
		// For iOS Safari, use a different approach
		if (/iPad|iPhone|iPod/.test(navigator.userAgent) && /WebKit/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent)) {
			// Create a temporary anchor element for iOS
			const link = document.createElement('a');
			link.href = mailtoLink;
			link.style.display = 'none';
			document.body.appendChild(link);
			link.click();
			setTimeout(() => {
				document.body.removeChild(link);
			}, 100);
		} else {
			// For other browsers, use the standard approach
			window.open(mailtoLink, '_self');
		}
	}

</script>

<style>
	/* iOS-compatible gradient styles */
	.gradient-blob {
		will-change: transform;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		perspective: 1000px;
		-webkit-perspective: 1000px;
	}
	
	/* Fallback for older iOS versions */
	@supports not (filter: blur(125px)) {
		.gradient-blob > div {
			background: radial-gradient(circle at center, currentColor 0%, transparent 50%) !important;
			opacity: 0.2 !important;
		}
	}
</style>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="min-h-screen bg-light-bg-primary overflow-x-hidden">
	<!-- Fixed Header -->
	<Header />

	<!-- Content with padding to account for fixed header -->
	<div class="relative pt-[1px] md:pt-[1px] overflow-hidden">
		
		<!-- Pink Gradient Background for Hero/Products -->
		<div class="absolute w-[229px] h-[225px] top-[526px] left-[201px] rounded-full pointer-events-none z-0 gradient-blob md:hidden">
			<div class="w-full h-full rounded-full bg-[#EF3E724D] opacity-30" style="filter: blur(125px); -webkit-filter: blur(125px); transform: translate3d(0,0,0); -webkit-transform: translate3d(0,0,0);"></div>
		</div> 
		<div class="absolute w-[229px] h-[225px] top-[582px] left-0 rounded-full pointer-events-none z-0 gradient-blob md:hidden">
			<div class="w-full h-full rounded-full bg-[#7CCCCA] opacity-30" style="filter: blur(125px); -webkit-filter: blur(125px); transform: translate3d(0,0,0); -webkit-transform: translate3d(0,0,0);"></div>
		</div>

		
		<div class="absolute right-0 top-0 pointer-events-none z-0 hidden md:block">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676 1225" fill="none" class="w-[676px] h-[1225px] max-h-screen">
				<g filter="url(#filter0_f_7511_88442)">
				  <ellipse cx="614.5" cy="612.5" rx="114.5" ry="112.5" fill="#EF3E72" fill-opacity="0.6"/>
				</g>
				<defs>
				  <filter id="filter0_f_7511_88442" x="0" y="0" width="1229" height="1225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix"/>
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
					<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_7511_88442"/>
				  </filter>
				</defs>
			  </svg>
		</div>

		<!-- Clay Gradient Background fot Hero -->
		<div class="absolute left-0 top-0 pointer-events-none z-0 hidden md:block">
	<svg xmlns="http://www.w3.org/2000/svg" width="741" height="1225" viewBox="0 0 741 1225" fill="none" class="max-h-screen">
		<g filter="url(#filter0_f_7511_88441)">
		  <ellipse cx="126.5" cy="612.5" rx="114.5" ry="112.5" fill="#7CCCCA"/>
		</g>
		<defs>
		  <filter id="filter0_f_7511_88441" x="-488" y="0" width="1229" height="1225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_7511_88441"/>
		  </filter>
		</defs>
	  </svg>
	</div>
		<!-- Clay Gradient Background fot Products -->
		<div class="absolute top-[760px] left-0 pointer-events-none z-0 hidden md:block">
			<svg xmlns="http://www.w3.org/2000/svg" width="784" height="1225" viewBox="0 0 784 1225" fill="none" class="max-h-screen">
				<g filter="url(#filter0_f_7511_88452)">
				  <ellipse cx="169.5" cy="612.5" rx="114.5" ry="112.5" fill="#7CCCCA"/>
				</g>
				<defs>
				  <filter id="filter0_f_7511_88452" x="-445" y="0" width="1229" height="1225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix"/>
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
					<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_7511_88452"/>
				  </filter>
				</defs>
			  </svg>
		</div>

		<!-- Pink Gradient Background fot Follow Our Journey -->
		<div class="absolute top-[2696px] left-[10%] pointer-events-none z-0 hidden md:block">
			<svg xmlns="http://www.w3.org/2000/svg" width="1229" height="1225" viewBox="0 0 1229 1225" fill="none" class="max-h-screen">
				<g filter="url(#filter0_f_7511_88699)">
				  <ellipse cx="614.5" cy="612.5" rx="114.5" ry="112.5" fill="#EF3E72" fill-opacity="0.8"/>
				</g>
				<defs>
				  <filter id="filter0_f_7511_88699" x="0" y="0" width="1229" height="1225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix"/>
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
					<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_7511_88699"/>
				  </filter>
				</defs>
			  </svg>
		</div>

		

		<!-- Trusted By Section -->
		<div
			class="relative z-10 w-auto h-auto flex justify-center mt-[125px] md:mt-[180px] mb-6 md:mb-[15px]"
		>
			<div
				class="p-[2px] rounded-full"
				style="background: linear-gradient(to right, rgba(0, 0, 0, 0.39), rgba(255, 255, 255, 0));"
			>
				<div
					class="flex items-center gap-[4px] pl-[4px] pr-[12px] py-[4px] rounded-full bg-white/90"
				>
					<div class="flex items-center -space-x-2">
						<img
							class="w-8 h-8 rounded-full object-cover border-2 border-white"
							src="/avaters/avater-1.jpg"
						/>
						<img
							class="w-8 h-8 rounded-full object-cover border-2 border-white"
							src="/avaters/avater-2.jpg"
						/>
						<img
							class="w-8 h-8 rounded-full object-cover border-2 border-white"
							src="/avaters/avater-3.jpg"
						/>
						<img
							class="w-8 h-8 rounded-full object-cover border-2 border-white"
							src="/avaters/avater-4.jpg"
						/>
					</div>
					<div class="text-black text-base font-medium">
						Trusted By Thousands
					</div>
				</div>
			</div>
		</div>

		<!-- Hero Section -->
		<div
			class="relative z-10 flex flex-col justify-center items-center gap-10 md:gap-14 mx-5 md:ml-[143px] md:mr-[142px]"
		>
			<div
				class="flex flex-col justify-center items-center gap-4 md:gap-6"
			>
				<div
					class="text-center justify-start text-black text-h1-xs md:text-h1-lg font-sans capitalize"
				>
					Building a Portfolio <br />of Essential Digital Products
				</div>
				<div class="md:w-[657px] md:h-auto">
					<p
						class="text-black text-center text-small md:text-small-lg font-sans capitalize"
					>
						We're a venture studio creating apps that solve real
						problems in health, learning, and productivity. With our
						first products in market and an ambitious roadmap ahead,
						we're systematically building mobile-first solutions for
						everyday needs.
					</p>
				</div>
			</div>
			<div
				class="px-4 py-2 md:px-6 md:py-4 bg-black rounded-lg inline-flex justify-center items-center gap-2.5 cursor-default"
			>
				<div
					id="products-section"
					class="text-center justify-center text-white text-small-medium md:text-small-lg font-sans capitalize"
				>
					Explore our Apps
				</div>
			</div>
		</div>

		<!-- Pink Gradient Background for Products Section (Mobile) -->
		<!-- <div class="absolute top-[4000px] left-[0px] pointer-events-none z-0 md:hidden">
			<div class="w-[430px] h-[430px] rounded-full gradient-pink"></div>
		</div> -->

		<!-- Our Products Section -->
		<div
			class="relative z-10 flex flex-col justify-center items-center gap-4 md:gap-8 mx-5 md:ml-[97px] md:mr-[96px] mt-[71px] md:mt-[119px]"
		>
			<div
				class="text-center justify-center text-black text-h3-medium md:text-h2-medium font-sans capitalize"
			>
				Products in Market
			</div>
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-6 md:gap-y-8 w-full "
			>
				<!-- RootCause.my -->
				<ProductCard
					title="RootCause.my"
					category="Health & Wellness"
					description="Discover the emotional root of symptoms with personalised German New Medicine reports."
					availability="Now available on App Store & Google Play"
					stats="400 symptom lookups logged"
					buttonText="Get Your Health Map"
					imageUrl="/products/rootcause.png"
					buttonUrl="https://rootcause.my"
				/>

				<!-- ExpatPass -->
				<ProductCard
					title="ExpatPass"
					category="Travel & Compliance"
					description="Automate Visas, Residency Permits, And Document Reminders—Built For Remote Workers And Expat Families."
					availability="MVP Live"
					stats="400 Symptom Lookups Logged"
					buttonText="Join Waitlist"
					imageUrl="/products/expatpass-web.svg"
					buttonUrl="https://expatpass.io"
				/>

				<!-- Youversity -->
				<ProductCard
					title="Youversity"
					category="Education & Learning"
					description="Turn Any YouTube Playlist Into A Structured, Trackable Course In Seconds."
					availability="Live Web App"
					stats="Over 500 Courses Created By Early Educators"
					buttonText="Start Building Your Course"
					imageUrl="/products/youversity-web.svg"
					buttonUrl="https://youversity.io"
				/>

				<!-- Patent Trail -->
				<ProductCard
					title="Patent Trail"
					category="Research & Productivity"
					description="AI-Powered Patent Exploration And Tracking—Find Gaps, And Trends In Seconds."
					availability="MVP Live"
					stats="Used By 40+ Indie Inventors & Startup CTOs"
					buttonText="Track Patents"
					imageUrl="/products/patenttrail-web.svg"
					buttonUrl="https://patenttrail.com"
				/>

				<!-- Painpoint Viral -->
				<ProductCard
					title="Painpoint Viral"
					category="SaaS Community Growth"
					description="Transform Your Twitter Presence Into Authentic SaaS Growth With Real-Time Conversation Discovery And AI-Driven Engagement Tools."
					availability="Coming Soon — Currently In Development"
					stats=""
					buttonText="Join Waitlist"
					imageUrl="/products/painpointviral-web.svg"
					buttonUrl="https://painpointviral.com"
				/>

				<div class="max-w-[400px] flex justify-center items-center">
					<p
						class=" text-start text-black text-h3 md:text-h1-bold-lg font-sans italic"
					>
						Currently Building Multiple Products Across Fintech And
						Productivity Tools To Strengthen Our Growing Ecosystem.
					</p>
				</div>
			</div>
		</div>

		

		<!-- How we build Section -->
		<div
			class="flex flex-col justify-center items-center gap-6 md:gap-8 mx-5 md:ml-[97px] md:mr-[96px] mt-[71px] md:mt-[119px]"
		>
			<div
				class="flex flex-col justify-center items-center gap-2 md:gap-0"
			>
				<div
					class="text-center justify-center text-black text-h3-medium md:text-h2-medium font-sans capitalize"
				>
					How we build
				</div>
				<p
					class="text-center text-black text-small-mini md:text-body-italic font-sans italic"
				>
					We're at the beginning of an ambitious journey. Our goal is
					to build a portfolio of apps that millions rely on daily.
				</p>
			</div>
				<img src="/how-we-build-mobile.svg" alt="how we build"  class="block md:hidden"/>
				<img src="/how-we-build-ls.svg" alt="how we build" class="hidden md:block"/>
		</div>

		<!-- Where We're Heading -->
		<div
			class="flex flex-col justify-center items-center gap-6 md:gap-8 mx-5 md:ml-[97px] md:mr-[96px] mt-[64px] md:mt-[38px]"
		>
			<div
				class="flex flex-col justify-center items-center gap-2 md:gap-0"
			>
				<div
					class="text-center justify-center text-black text-h3-medium md:text-h2-medium font-sans capitalize"
				>
					Where We're Heading
				</div>
				<p
					class="text-center text-black text-small-mini md:text-body-italic font-sans italic"
				>
					We're at the beginning of an ambitious journey. Our goal is
					to build a portfolio of apps that millions rely on daily.
				</p>
			</div>
				<img
					src="/where-we-heading-mobile.svg"
					alt="Where we heading"
					class="w-full h-auto object-contain block md:hidden"
				/>
				<div class="hidden md:flex md:items-center md:justify-center gap-2 w-full">
					<img
						src="/where-we-heading-ls-1.svg"
						alt="Where we are Heading ls 1"
						class="w-full h-auto object-contain max-w-[50%]"
					/>
					<img
						src="/where-we-heading-ls-2.svg"
						alt="Where we are Heading ls 2"
						class="w-full h-auto object-contain max-w-[50%]"
					/>
				</div>
		</div>
		<div class="absolute w-[229px] h-[225px] top-[3236px] left-[68px] rounded-full pointer-events-none z-0 gradient-blob md:hidden">
			<div class="w-full h-full rounded-full bg-[#7CCCCA] opacity-30" style="filter: blur(125px); -webkit-filter: blur(125px); transform: translate3d(0,0,0); -webkit-transform: translate3d(0,0,0);"></div>
		</div>

		<div class="absolute w-[229px] h-[225px] top-[3768px] left-[0px] rounded-full pointer-events-none z-0 gradient-blob md:hidden">
			<div class="w-full h-full rounded-full bg-[#FCE18999] opacity-40" style="filter: blur(125px); -webkit-filter: blur(125px); transform: translate3d(0,0,0); -webkit-transform: translate3d(0,0,0);"></div>
		</div>

		
		<!-- Follow Our Journey Section -->
		<div
			class="flex flex-col justify-center items-center gap-6 md:gap-8 mx-5 md:ml-[97px] md:mr-[96px] mt-[64px] md:mt-[95px]"
		>
			<div class="flex flex-col justify-center items-center">
				<div
					class="text-h3-medium md:text-h2-medium font-sans capitalize"
				>
					Follow Our Journey
				</div>
				<div class="text-body-italic italic font-sans capitalize">
					Get notified when we launch new apps
				</div>
			</div>

			<!-- Email Input Section -->
			<div id="contact-section" class="w-full flex flex-col items-center gap-3">
				<div class="w-full flex md:w-[473px] md:gap-0 items-center justify-center">
					<input
						type="email"
						bind:value={email}
						placeholder="Enter your email updates"
						disabled={isSubmitting}
						class="flex-1 px-4 py-3 md:py-[15px] bg-white/50 border border-black/10 rounded-lg rounded-r-none text-black text-small-mini md:text-small-medium-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 font-sans font-medium disabled:opacity-50 disabled:cursor-not-allowed"
					/>
					<button
						on:click={handleEmailSubmit}
						disabled={isSubmitting}
						class="px-6 py-3 md:py-4 bg-black text-white text-small-mini md:text-small-medium-lg rounded-lg rounded-l-none hover:bg-gray-800 transition-colors duration-200 font-sans font-medium md:capitalize disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black flex items-center gap-2"
					>
						{#if isSubmitting}
							<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Sending...
						{:else}
							Send
						{/if}
					</button>
				</div>
				
				<!-- Success/Error Message -->
				{#if submissionMessage}
					<div 
						class="text-center text-small-mini md:text-small-medium font-sans font-medium px-4 py-2 rounded-lg transition-opacity duration-300 border"
						class:text-green-700={submissionType === "success"}
						class:bg-green-50={submissionType === "success"}
						class:border-green-200={submissionType === "success"}
						class:text-red-700={submissionType === "error"}
						class:bg-red-50={submissionType === "error"}
						class:border-red-200={submissionType === "error"}
					>
						{submissionMessage}
					</div>
				{/if}
			</div>

			
		</div>

		<div class="absolute w-[229px] h-[225px] top-[4171px] left-[68px] rounded-full pointer-events-none z-0 gradient-blob md:hidden">
			<div class="w-full h-full rounded-full bg-[#EF3E72CC] opacity-40" style="filter: blur(125px); -webkit-filter: blur(125px); transform: translate3d(0,0,0); -webkit-transform: translate3d(0,0,0);"></div>
		</div>

		


		<!-- Let's Talk Section -->
		 <div class="relative mx-5 mt-16 md:mx-24 md:mt-[89.38px] bg-black/[0.03] rounded-lg flex ">
			<div
					class="absolute w-[203px] h-[203px] bottom-0 left-0 mb-[-42px]  flex-shrink-0 md:hidden"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="175" height="162" viewBox="0 0 175 162" fill="none">
						<path d="M38.5652 6.90647C36.8135 6.92685 35.4102 8.36372 35.4305 10.1154V16.4589C35.5265 20.5952 41.6825 20.5952 41.7742 16.4589V10.1154C41.7982 8.33461 40.3461 6.88566 38.5652 6.90647ZM19.1316 20.467L23.6725 25.0326C26.6709 28.0309 31.1685 23.5335 28.1701 20.5352L23.6044 15.9943C23.0074 15.3805 22.1872 15.0342 21.3309 15.0341C18.505 15.0569 17.1175 18.4849 19.1316 20.467ZM53.619 15.9944L49.0533 20.5352C46.055 23.5335 50.5525 28.031 53.5508 25.0327L58.0918 20.4671C60.106 18.485 58.7188 15.0571 55.8926 15.0342C55.0366 15.0342 54.2162 15.3805 53.619 15.9944ZM-12.1467 32.2806C-17.4625 32.2806 -21.656 36.5793 -21.656 41.7959V86.2131C-21.656 91.504 -17.3634 95.716 -12.1467 95.716H-2.20997C-2.52286 96.8236 -2.61757 97.7068 -2.61876 98.8754C-2.61876 105.845 3.01856 111.575 10.0747 111.575C17.1309 111.575 22.7372 105.845 22.7372 98.8754C22.7348 97.7074 22.6293 96.8228 22.3164 95.716H32.2718C34.7349 95.716 36.9317 94.8136 38.6092 93.3C40.2942 94.8155 42.5019 95.716 44.959 95.716H89.3521C94.5689 95.716 98.88 91.5348 98.88 86.2131V76.2703C99.9877 76.5831 100.871 76.6776 102.039 76.6791C109.009 76.6791 114.733 71.0665 114.733 63.992C114.733 56.936 109.009 51.2988 102.039 51.2988C100.872 51.3011 99.9868 51.4127 98.88 51.7262V41.7958C98.88 36.5792 94.674 32.2867 89.3521 32.2867H74.2241C71.4772 32.2826 70.0285 35.5334 71.8637 37.5771C72.9091 38.739 73.4959 40.2329 73.4993 41.7958C73.4993 45.3368 70.6442 48.1393 67.1556 48.1393C63.6671 48.1393 60.8119 45.3368 60.8119 41.7958C60.814 40.234 61.385 38.7398 62.4288 37.5771C64.2569 35.5416 62.8232 32.3029 60.0871 32.2867H44.959C42.487 32.2867 40.2867 33.1976 38.6092 34.7027C36.9197 33.1875 34.7084 32.2871 32.2718 32.2867L-12.1467 32.2806ZM54.8889 38.6362C54.5772 39.7429 54.4634 40.6279 54.4622 41.7955C54.4622 48.7648 60.0635 54.4826 67.1556 54.4826C74.2477 54.4826 79.8491 48.7648 79.8491 41.7955C79.8467 40.6277 79.7292 39.743 79.4211 38.6362H89.3516C91.0585 38.6362 92.5358 39.9835 92.5358 41.7955V56.9172C92.5317 59.664 95.7824 61.1189 97.8263 59.2836C98.988 58.2384 100.476 57.6452 102.039 57.642C105.58 57.642 108.389 60.5734 108.389 63.9917C108.389 67.4801 105.58 70.3353 102.039 70.3353C100.476 70.3332 98.9887 69.762 97.8263 68.7184C95.7824 66.8832 92.5317 68.338 92.5358 71.0849V86.2127C92.5358 87.9196 91.1636 89.3721 89.3515 89.3721H44.9584C43.1464 89.3721 41.7742 87.9196 41.7742 86.2127V75.0867V71.0601C41.7622 68.3243 38.5193 66.8905 36.4837 68.7184C35.3221 69.7636 33.834 70.332 32.2712 70.3353C28.7301 70.3353 25.9213 67.4832 25.9213 63.9917C25.9213 60.5003 28.7301 57.642 32.2712 57.642C33.8335 57.6441 35.3212 58.24 36.4837 59.2837C38.5275 61.1189 41.7783 59.664 41.7742 56.9172V52.8906V41.7956C41.7742 40.0887 43.1464 38.6362 44.9584 38.6362L54.8889 38.6362ZM126.243 68.929L113.388 80.1975C110.271 82.9296 109.914 87.5789 112.291 90.8216L109.627 93.7023C101.019 100.936 84.1757 101.785 72.7178 126.739L71.0636 130.494C70.2137 130.862 67.5498 132.029 63.5492 133.572C61.2553 134.457 58.8122 135.348 56.7348 135.988C54.6572 136.629 52.9524 136.973 52.4044 136.973H50.7752C49.4729 133.305 45.9611 130.624 41.7987 130.624H25.8962C20.6923 130.624 16.4055 134.841 16.4055 140.133V181.384C16.4055 186.675 20.6923 190.869 25.8962 190.869H41.7987C45.9538 190.869 49.4462 188.209 50.7504 184.55H52.0265L61.127 186.799C62.1352 190.92 65.7747 194.016 70.3265 194.016C72.0404 194.016 73.6037 193.543 74.9726 192.777C76.6342 195.432 79.562 197.218 83.0137 197.218C85.4921 197.218 87.6827 196.277 89.3511 194.778C91.0197 196.277 93.2103 197.218 95.6887 197.218C99.1426 197.218 102.074 195.428 103.736 192.77C105.109 193.542 106.68 194.016 108.401 194.016C112.614 194.016 116.062 191.359 117.352 187.697H121.063C126.28 187.697 130.591 183.538 130.591 178.182C130.591 176.466 130.14 174.9 129.371 173.529C132.024 171.867 133.763 168.94 133.763 165.495C133.763 163.015 132.833 160.833 131.328 159.163C132.832 157.494 133.763 155.287 133.763 152.807C133.763 151.087 133.322 149.516 132.549 148.143C135.192 146.478 136.935 143.558 136.935 140.12C136.935 139.451 136.875 138.801 136.743 138.175L144.375 126.554C147.183 127.987 150.677 127.683 153.16 125.507L166.008 114.244C169.267 111.388 169.551 106.35 166.677 103.075L137.406 69.7282C135.937 68.0549 133.959 67.1406 131.942 67.0024C129.925 66.8643 127.872 67.5005 126.243 68.929ZM116.473 95.6351L139.698 122.093L132.952 132.389C131.389 131.278 129.49 130.617 127.432 130.617C121.236 130.604 115.234 130.618 109.262 130.624C110.69 128.843 111.705 126.698 111.69 124.231C111.714 122.432 110.23 120.981 108.432 121.028C106.689 121.072 105.308 122.512 105.341 124.255C105.345 125.101 104.738 126.394 103.327 127.7C102.028 128.902 100.279 129.944 98.4519 130.624C97.524 130.624 96.5698 130.624 95.627 130.624C92.5294 130.624 90.457 131.482 88.9301 132.848C87.4032 134.213 86.7461 135.642 86.1177 136.571C83.5294 140.398 78.8138 147.015 78.8138 147.015C77.3272 149.427 75.4083 150.188 73.641 149.45C71.8308 148.662 70.9154 146.561 71.7453 144.674L78.5102 129.317C89.0151 106.496 104.072 106.761 113.822 98.4787C113.929 98.3923 114.03 98.2993 114.125 98.2L116.473 95.6351ZM130.591 140.12C130.591 141.844 129.244 143.292 127.432 143.292C122.119 143.285 116.862 143.298 111.56 143.292C107.236 143.196 107.236 149.732 111.56 149.636C114.732 149.63 114.743 149.648 124.26 149.648C126.072 149.648 127.42 151.083 127.42 152.807C127.42 154.531 126.072 155.966 124.26 155.966C120.008 155.967 115.811 155.983 111.56 155.978C107.236 155.883 107.236 162.418 111.56 162.322C114.732 162.317 114.73 162.322 124.248 162.322C126.06 162.322 127.42 163.844 127.42 165.494C127.42 167.218 126.072 168.665 124.26 168.665C118.991 168.68 113.43 168.682 108.358 168.672C106.624 168.69 105.076 169.123 103.724 169.886C102.058 167.238 99.1301 165.494 95.6888 165.494C93.2131 165.494 91.021 166.397 89.3514 167.897C87.6819 166.397 85.4896 165.494 83.014 165.494C81.2933 165.494 79.7171 165.934 78.343 166.708C76.6754 164.073 73.7567 162.347 70.3267 162.347C64.97 162.347 60.8236 166.633 60.8236 171.85V180.189L52.8012 178.2H51.2957L51.3021 143.317H52.405C54.093 143.317 56.3001 142.764 58.6061 142.053C60.9121 141.342 63.4461 140.418 65.8232 139.501C66.4119 139.274 66.8015 139.099 67.3658 138.875L65.9347 142.121C63.7267 147.142 66.0186 153.038 71.1137 155.255C76.3978 157.555 81.5212 154.743 84.1045 150.503C84.2603 150.284 88.7233 144.039 91.365 140.133C92.2737 138.789 92.7884 137.92 93.1678 137.581C93.446 137.332 93.8607 136.974 95.6272 136.974C106.649 136.959 119.678 136.96 127.432 136.962C129.244 136.961 130.591 138.397 130.591 140.12ZM70.3267 168.666C72.0505 168.666 73.4861 170.038 73.4861 171.85V184.512C73.4861 186.325 71.9647 187.696 70.3267 187.696C68.6887 187.696 67.1672 186.325 67.1672 184.512V171.85C67.1672 170.038 68.6028 168.666 70.3267 168.666ZM83.014 171.838C84.7379 171.838 86.1734 173.185 86.1734 174.997V187.715C86.1734 189.527 84.652 190.899 83.014 190.899C81.376 190.899 79.8546 189.527 79.8546 187.715V174.997C79.8546 173.185 81.2902 171.838 83.014 171.838ZM95.6888 171.838C97.4127 171.838 98.8731 173.185 98.8731 174.997V187.715C98.8731 189.527 97.3269 190.899 95.6888 190.899C94.0509 190.899 92.5294 189.527 92.5294 187.715V174.997C92.5294 173.185 93.965 171.838 95.6888 171.838ZM108.426 175.009C110.193 175.08 111.56 176.403 111.56 178.169V184.512C111.56 186.325 110.039 187.696 108.401 187.696C106.763 187.696 105.217 186.325 105.217 184.512V178.169C105.217 176.387 106.638 175.051 108.426 175.009ZM117.359 175.009C118.835 175.011 118.269 175.021 121.064 175.021C122.876 175.021 124.248 176.457 124.248 178.181C124.248 179.905 122.962 181.353 121.064 181.353H117.904V178.168C117.904 177.059 117.707 176.003 117.359 175.009Z" fill="black" fill-opacity="0.06"/>
					</svg>
				</div>
			<div
					class="absolute w-[359px] h-[359px] bottom-0 left-0 p-3 mb-[-56px] ml-[-12px]  flex-shrink-0 hidden md:block"
				>
				<svg xmlns="http://www.w3.org/2000/svg" width="343" height="290" viewBox="0 0 343 290" fill="none">
					<path d="M96.5883 0.969168C93.2834 1.00762 90.6357 3.71856 90.6742 7.02347V18.9918C90.8551 26.7957 102.47 26.7957 102.643 18.9918V7.02347C102.688 3.66364 99.9483 0.929903 96.5883 0.969168ZM59.923 26.5538L68.4903 35.1678C74.1473 40.8247 82.633 32.3393 76.976 26.6824L68.3619 18.1152C67.2355 16.9572 65.6879 16.3038 64.0723 16.3036C58.7408 16.3465 56.123 22.8142 59.923 26.5538ZM124.99 18.1153L116.376 26.6825C110.719 32.3395 119.205 40.8248 124.862 35.1679L133.429 26.554C137.229 22.8144 134.612 16.347 129.28 16.3037C127.665 16.3037 126.117 16.9571 124.99 18.1153ZM0.91013 48.8426C-9.11919 48.8426 -17.031 56.9529 -17.031 66.7951V150.597C-17.031 160.579 -8.93214 168.526 0.91013 168.526H19.6578C19.0675 170.616 18.8888 172.282 18.8865 174.487C18.8865 187.636 29.5225 198.447 42.8353 198.447C56.1483 198.447 66.7257 187.636 66.7257 174.487C66.7211 172.283 66.5221 170.614 65.9318 168.526H84.7145C89.3616 168.526 93.5064 166.824 96.6714 163.968C99.8503 166.827 104.016 168.526 108.651 168.526H192.408C202.25 168.526 210.384 160.637 210.384 150.597V131.838C212.474 132.428 214.14 132.606 216.345 132.609C229.494 132.609 240.294 122.02 240.294 108.672C240.294 95.3598 229.494 84.7241 216.345 84.7241C214.142 84.7286 212.472 84.939 210.384 85.5305V66.7949C210.384 56.9527 202.449 48.854 192.408 48.854H163.866C158.683 48.8462 155.95 54.9795 159.413 58.8354C161.385 61.0276 162.492 63.8462 162.498 66.7949C162.498 73.4757 157.112 78.7632 150.53 78.7632C143.948 78.7632 138.561 73.4757 138.561 66.7949C138.565 63.8481 139.642 61.0292 141.612 58.8354C145.061 54.9951 142.356 48.8845 137.194 48.854H108.651C103.988 48.854 99.8363 50.5725 96.6714 53.4123C93.4838 50.5536 89.3117 48.8548 84.7145 48.854L0.91013 48.8426ZM127.386 60.8335C126.798 62.9216 126.583 64.5913 126.581 66.7944C126.581 79.9433 137.149 90.7311 150.53 90.7311C163.91 90.7311 174.479 79.9433 174.479 66.7944C174.474 64.5909 174.252 62.9217 173.671 60.8336H192.407C195.627 60.8336 198.415 63.3757 198.415 66.7944V95.3244C198.407 100.507 204.54 103.252 208.396 99.7891C210.588 97.8171 213.396 96.6978 216.344 96.6919C223.025 96.6919 228.324 102.223 228.324 108.672C228.324 115.253 223.025 120.64 216.344 120.64C213.396 120.636 210.589 119.559 208.396 117.59C204.54 114.127 198.407 116.872 198.415 122.055V150.596C198.415 153.817 195.826 156.557 192.407 156.557H108.65C105.232 156.557 102.643 153.817 102.643 150.596V129.605V122.008C102.62 116.846 96.5017 114.141 92.6612 117.59C90.4695 119.562 87.6619 120.634 84.7134 120.64C78.0325 120.64 72.733 115.259 72.733 108.672C72.733 102.085 78.0325 96.6919 84.7134 96.6919C87.661 96.6959 90.4679 97.8201 92.6612 99.7892C96.5171 103.252 102.65 100.507 102.643 95.3244V87.7273V66.7944C102.643 63.574 105.232 60.8336 108.65 60.8336L127.386 60.8335ZM262.009 117.987L237.757 139.247C231.876 144.402 231.203 153.174 235.687 159.292L230.661 164.727C214.42 178.375 182.642 179.976 161.024 227.058L157.903 234.141C156.299 234.837 151.274 237.037 143.726 239.95C139.398 241.62 134.788 243.299 130.869 244.508C126.949 245.717 123.733 246.367 122.699 246.366H119.625C117.168 239.444 110.542 234.386 102.689 234.386H72.6858C62.8675 234.386 54.7797 242.344 54.7797 252.327V330.156C54.7797 340.138 62.8675 348.051 72.6858 348.051H102.689C110.528 348.051 117.117 343.032 119.578 336.129H121.986L139.156 340.372C141.058 348.147 147.924 353.988 156.512 353.988C159.746 353.988 162.695 353.096 165.278 351.65C168.413 356.661 173.937 360.031 180.449 360.031C185.125 360.031 189.258 358.254 192.406 355.426C195.554 358.254 199.687 360.031 204.363 360.031C210.88 360.031 216.41 356.653 219.546 351.639C222.136 353.095 225.1 353.988 228.347 353.988C236.296 353.988 242.801 348.976 245.236 342.066H252.237C262.079 342.066 270.214 334.22 270.214 324.114C270.214 320.877 269.363 317.922 267.911 315.336C272.918 312.199 276.198 306.678 276.198 300.177C276.198 295.499 274.443 291.382 271.604 288.232C274.442 285.082 276.198 280.918 276.198 276.24C276.198 272.995 275.366 270.031 273.907 267.44C278.894 264.299 282.182 258.789 282.182 252.304C282.182 251.041 282.069 249.815 281.82 248.634L296.22 226.707C301.517 229.411 308.11 228.837 312.793 224.732L337.034 203.484C343.184 198.094 343.719 188.589 338.297 182.411L283.071 119.495C280.3 116.338 276.568 114.613 272.762 114.352C268.956 114.092 265.084 115.292 262.009 117.987ZM243.577 168.373L287.395 218.292L274.667 237.717C271.719 235.621 268.137 234.375 264.253 234.375C252.563 234.35 241.239 234.375 229.972 234.387C232.666 231.027 234.581 226.979 234.554 222.325C234.599 218.931 231.798 216.194 228.406 216.282C225.117 216.366 222.511 219.082 222.573 222.371C222.582 223.966 221.436 226.407 218.775 228.87C216.324 231.138 213.023 233.104 209.576 234.387C207.826 234.387 206.026 234.387 204.247 234.387C198.403 234.387 194.493 236.006 191.612 238.582C188.731 241.158 187.491 243.854 186.306 245.607C181.422 252.827 172.525 265.313 172.525 265.313C169.721 269.862 166.1 271.299 162.766 269.906C159.35 268.419 157.623 264.455 159.189 260.895L171.953 231.92C191.772 188.864 220.18 189.365 238.574 173.738C238.778 173.576 238.968 173.4 239.147 173.213L243.577 168.373ZM270.214 252.304C270.214 255.556 267.672 258.288 264.253 258.288C254.229 258.275 244.311 258.299 234.308 258.288C226.15 258.107 226.15 270.437 234.308 270.256C240.293 270.246 240.312 270.279 258.269 270.279C261.688 270.279 264.23 272.987 264.23 276.24C264.23 279.492 261.688 282.201 258.269 282.201C250.246 282.202 242.329 282.232 234.308 282.223C226.15 282.042 226.15 294.373 234.308 294.191C240.293 294.181 240.289 294.191 258.245 294.191C261.664 294.191 264.23 297.064 264.23 300.176C264.23 303.428 261.688 306.16 258.269 306.16C248.328 306.187 237.835 306.192 228.266 306.172C224.996 306.206 222.074 307.023 219.523 308.463C216.38 303.466 210.856 300.176 204.363 300.176C199.693 300.176 195.557 301.879 192.407 304.711C189.257 301.879 185.121 300.176 180.45 300.176C177.203 300.176 174.23 301.007 171.637 302.466C168.491 297.496 162.984 294.238 156.513 294.238C146.406 294.238 138.583 302.326 138.583 312.167V327.901L123.447 324.149H120.607L120.619 258.335H122.7C125.885 258.335 130.049 257.292 134.399 255.951C138.75 254.609 143.531 252.866 148.016 251.135C149.127 250.706 149.862 250.376 150.926 249.955L148.226 256.079C144.061 265.551 148.385 276.676 157.998 280.857C167.967 285.198 177.633 279.892 182.507 271.893C182.801 271.479 191.222 259.697 196.206 252.327C197.92 249.792 198.891 248.152 199.607 247.512C200.132 247.042 200.914 246.367 204.247 246.367C225.042 246.34 249.623 246.342 264.253 246.344C267.672 246.343 270.214 249.051 270.214 252.304ZM156.513 306.161C159.765 306.161 162.474 308.749 162.474 312.168V336.058C162.474 339.477 159.603 342.066 156.513 342.066C153.422 342.066 150.552 339.477 150.552 336.058V312.168C150.552 308.749 153.26 306.161 156.513 306.161ZM180.45 312.145C183.702 312.145 186.411 314.687 186.411 318.106V342.101C186.411 345.52 183.54 348.108 180.45 348.108C177.359 348.108 174.489 345.52 174.489 342.101V318.106C174.489 314.687 177.197 312.145 180.45 312.145ZM204.363 312.145C207.616 312.145 210.371 314.687 210.371 318.106V342.101C210.371 345.52 207.454 348.108 204.363 348.108C201.273 348.108 198.403 345.52 198.403 342.101V318.106C198.403 314.687 201.111 312.145 204.363 312.145ZM228.394 318.129C231.729 318.262 234.308 320.758 234.308 324.09V336.058C234.308 339.477 231.438 342.066 228.347 342.066C225.257 342.066 222.34 339.477 222.34 336.058V324.09C222.34 320.727 225.021 318.207 228.394 318.129ZM245.248 318.129C248.033 318.133 246.965 318.152 252.238 318.152C255.657 318.152 258.245 320.86 258.245 324.112C258.245 327.365 255.82 330.097 252.238 330.097H246.277V324.089C246.277 321.995 245.904 320.003 245.248 318.129Z" fill="black" fill-opacity="0.06"/>
				  </svg>
				</div>
			<!--main container  -->
			<div class="w-full  h-auto flex flex-col px-5 gap-6 items-end pt-[74.28px] pb-[18.72px] md:py-[45px] md:pl-[400px] md:pr-[45px]">
				<div class="w-full gap-1">
					<p 
					class="text-right text-black text-[20px] md:text-[24px] font-light italic font-sans capitalize">
					Early Adopters</p>
					<p class="text-right text-black text-[14px] md:text-[16px] font-light font-sans capitalize">
					Be first to try our new apps. Join our beta community for exclusive access and direct input into what we build.</p>
				</div>
				<div class="w-full gap-1">
					<p 
					class="text-right text-black text-[20px] md:text-[24px] font-light italic font-sans capitalize">
					Strategic Partners</p>
					<p class="text-right text-black text-[14px] md:text-[16px] font-light font-sans capitalize">
					Be first to try our new apps. Join our beta community for exclusive access and direct input into what we build.</p>
				</div>
				<div class="w-full gap-1">
					<p 
					class="text-right text-black text-[20px] md:text-[24px] font-light italic font-sans capitalize">
					Exceptional Opportunities</p>
					<p class="text-right text-black text-[14px] md:text-[16px] font-light font-sans capitalize">
						While focused on our own products, we're open to exploring unique collaborations.</p>
				</div> 
				
				<button 
					class="px-3 py-2 md:px-6 md:py-4 bg-black rounded-lg inline-flex justify-center items-center gap-2.5 cursor-pointer hover:bg-gray-800 transition-colors"
					on:click={handleGetInTouchClick}
				>
					<div class="text-center justify-start text-white text-[14px] md:text-[16px] font-medium font-sans capitalize">
						Get in Touch</div>
						<div class="w-6 h-6 relative overflow-hidden">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
								<path d="M18.7501 6.5625V16.3125C18.7501 16.5114 18.671 16.7022 18.5304 16.8428C18.3897 16.9835 18.199 17.0625 18.0001 17.0625C17.8011 17.0625 17.6104 16.9835 17.4697 16.8428C17.3291 16.7022 17.2501 16.5114 17.2501 16.3125V8.37281L6.53068 19.0931C6.38995 19.2339 6.19907 19.3129 6.00005 19.3129C5.80103 19.3129 5.61016 19.2339 5.46943 19.0931C5.3287 18.9524 5.24963 18.7615 5.24963 18.5625C5.24963 18.3635 5.3287 18.1726 5.46943 18.0319L16.1897 7.3125H8.25005C8.05114 7.3125 7.86037 7.23348 7.71972 7.09283C7.57907 6.95218 7.50005 6.76141 7.50005 6.5625C7.50005 6.36359 7.57907 6.17282 7.71972 6.03217C7.86037 5.89152 8.05114 5.8125 8.25005 5.8125H18.0001C18.199 5.8125 18.3897 5.89152 18.5304 6.03217C18.671 6.17282 18.7501 6.36359 18.7501 6.5625Z" fill="white"/>
						  	</svg>
						</div>
				</button>
			</div>

			<div
					class="absolute left-[28px] md:left-[59px] top-[36.28px]  md:top-[173px]"
				>
					<h2
						class="text-[28.899px]/[34.679px] md:text-[71.17px]/[85.40px] font-bold font-sans capitalize bg-gradient-to-r from-black to-[#7CCCCA] bg-clip-text text-transparent whitespace-nowrap"
					>
						Let's Talk!
					</h2>
				</div>
		 </div>
		
	</div>
	
</div>

<!-- Footer -->
<Footer />