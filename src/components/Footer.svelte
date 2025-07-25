<script lang="ts">
	import { push } from 'svelte-spa-router';
	
	// Footer data
	const apps = [
		{ name: "RootCause", category: "Health & Wellness", url: "/products/rootcause" },
		{ name: "ExpatPass", category: "Travel Compliance", url: "/products/expatpass" },
		{ name: "Patent Trail", category: "Innovation Access", url: "/products/patenttrail" },
		{ name: "Youversity", category: "Education & Learning", url: "/products/youversity" }
	];

	const socialLinks = [
		{ name: "Twitter", url: "https://twitter.com/AyanaDevs" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/company/ayana-dev-studio" }
	];
	
	function navigateToPrivacy(e: Event) {
		e.preventDefault();
		// Scroll to top first
		window.scrollTo({ top: 0, behavior: 'instant' });
		// Then navigate to privacy page
		setTimeout(() => {
			push('/privacy');
		}, 10);
	}
</script>

<footer class="relative w-full bg-light-bg-primary overflow-hidden">
	<!-- Clay Gradient Background fot Footer mobile-->
	<div class="absolute w-[229px] h-[225px] top-[0px] left-[35px] rounded-full pointer-events-none z-0 bg-[#7CCCCA] blur-[250px] md:hidden">
		<img src="/ellipse-15.svg" alt="ellipse-15" class="w-full h-auto object-contain">
	</div>
	<!-- <div class="absolute left-[50%] top-[30%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none flex-shrink-0 z-0 block md:hidden overflow-hidden">
		<svg xmlns="http://www.w3.org/2000/svg" class="w-[1200px] h-[1200px]" viewBox="0 0 800 800" fill="none">
			<g filter="url(#filter0_f_clay_mobile)">
			  <ellipse cx="400" cy="400" rx="120" ry="120" fill="#7CCCCA" fill-opacity="0.15"/>
			</g>
			<defs>
			  <filter id="filter0_f_clay_mobile" x="-200" y="-200" width="1200" height="1200" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_clay_mobile"/>
			  </filter>
			</defs>
		  </svg>
	</div> -->
	<!-- Clay Gradient Background fot Footer web -->
	<!-- <div class="absolute  pointer-events-none flex-shrink-0 z-0 hidden md:block">
		<svg xmlns="http://www.w3.org/2000/svg" class="w-[445px] h-full" viewBox="0 0 764 727" fill="none">
			<g filter="url(#filter0_f_7511_88701)">
			  <ellipse cx="149.5" cy="612.5" rx="114.5" ry="112.5" fill="#7CCCCA"/>
			</g>
			<defs>
			  <filter id="filter0_f_7511_88701" x="-465" y="0" width="1229" height="1225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_7511_88701"/>
			  </filter>
			</defs>
		  </svg>
	</div> -->
	<!-- Yellow Gradient Background fot Footer -->
	<!-- <div class="absolute right-0 pointer-events-none flex-shrink-0 z-0 hidden md:block">
		<svg xmlns="http://www.w3.org/2000/svg" class="w-[445px] h-full" viewBox="0 0 1005 797" fill="none">
			<g filter="url(#filter0_f_7511_88703)">
			  <ellipse cx="614.5" cy="612.5" rx="114.5" ry="112.5" fill="#FCE189" fill-opacity="0.6"/>
			</g>
			<defs>
			  <filter id="filter0_f_7511_88703" x="0" y="0" width="1229" height="1225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_7511_88703"/>
			  </filter>
			</defs>
		  </svg>
	</div> -->
	<div class="relative z-10 w-full flex flex-col justify-center items-center mb-10 md:gap-14 px-5 md:px-[97px] pt-[98px] md:pt-[110px]">
		<!-- Main Content -->
		<div class="w-full max-w-7xl flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-[159px] lg:gap-auto">
			<!-- Logo and Tagline -->
			<div class="w-[312.1px] md:w-[401px] flex flex-col justify-start items-start gap-[12.48px] md:gap-4">
				<img class="w-[208.42px] md:w-[257px] h-[67.87px] md:h-[87px]" src="/ayana-dev-logo.svg" alt="Ayana Dev Studio" />
				<div class="w-full md:w-[401px] justify-start text-black text-[31.49px]/[37.79px] md:text-[40.37px]/[48.45px] font-bold font-sans capitalize md:leading-[48.45px] bg-gradient-to-r from-black to-[#7CCCCA] bg-clip-text text-transparent">
					Crafting Tomorrow's<br> Essential Apps.
				</div>
			</div>
			
			<!-- Navigation Sections -->
			<div class="w-full md:w-[815px] flex flex-col md:flex-row justify-start items-start md:items-center md:justify-between gap-8 md:gap-[86px]">
				<!-- Our Apps Section -->
				<div class="flex flex-col justify-start items-start gap-6">
					<div class="self-stretch justify-start text-black text-h3-bold md:text-[24px] font-sans">
						Our Apps
					</div>
					<div class="self-stretch flex flex-col md:inline-flex md:flex-row justify-start items-start gap-4">
						<div class="flex flex-col justify-start items-start gap-4">
							<a href={apps[0].url} class="self-stretch justify-start">
								<span class="text-black text-base/[100%] font-normal font-sans">{apps[0].name} - </span>
								<span class="text-black text-base/[100%] font-light italic font-sans">{apps[0].category}</span>
							</a>
							<a href={apps[1].url} class="self-stretch justify-start">
								<span class="text-black text-base/[100%] font-normal font-sans">{apps[1].name} - </span>
								<span class="text-black text-base/[100%] font-light italic font-sans">{apps[1].category}</span>
							</a>
						</div>
						<div class="flex flex-col justify-start items-start gap-4">
							<a href={apps[2].url} class="justify-start">
								<span class="text-black text-base/[100%] font-normal font-sans">{apps[2].name} - </span>
								<span class="text-black text-base/[100%] font-light italic font-sans">{apps[2].category}</span>
							</a>
							<a href={apps[3].url} class="justify-start">
								<span class="text-black text-base/[100%] font-normal font-sans">{apps[3].name} - </span>
								<span class="text-black text-base/[100%] font-light italic font-sans">{apps[3].category}</span>
							</a>
						</div>
					</div>
				</div>
				
				<!-- Connect Section -->
				<div class="flex flex-col justify-start items-start gap-6">
					<div class="self-stretch justify-start text-black text-h3-bold md:text-[24px] font-sans">
						Connect
					</div>
					<div class="self-stretch flex flex-col justify-start items-start gap-4">
						<a href="/about" class="self-stretch justify-start text-black text-base/[100%] font-normal font-sans">
							About
						</a>
						<a href={socialLinks[0].url} class="self-stretch justify-start text-black text-base/[100%] font-normal font-sans">
							{socialLinks[0].name}
						</a>
						<a href={socialLinks[1].url} class="self-stretch justify-start text-black text-base/[100%] font-normal font-sans">
							{socialLinks[1].name}
						</a>
					</div>
				</div>
			</div>
		</div>
		
	</div>
    <!-- Copyright -->
    <div class="relative z-10 w-full px-5 md:px-[96px] pt-2.5 pb-8 border-t border-black/20 flex flex-row justify-between items-center">
        <div class="text-center justify-start text-black text-base/[30px] font-normal font-sans">
            © 2025 Ayana Dev Studio
        </div>
        <div class="flex items-center gap-4 text-base/[30px] font-normal font-sans">
            <a
                href="#/privacy"
                class="text-black hover:text-gray-600 transition-colors underline font-sans"
                on:click={navigateToPrivacy}
            >
                Privacy Policy
            </a>
        </div>
    </div>
</footer> 