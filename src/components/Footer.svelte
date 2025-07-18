<script lang="ts">
	// Footer data
	const apps = [
		{ name: "RootCause", category: "Health & Wellness" },
		{ name: "ExpatPass", category: "Travel Compliance" },
		{ name: "Patent Trail", category: "Innovation Access" },
		{ name: "Youversity", category: "Education & Learning" }
	];

	const socialLinks = [
		{ name: "Twitter/X", url: "https://twitter.com/AyanaDevs" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/company/ayana-dev-studio" }
	];
</script>

<footer class="w-full bg-light-bg-primary">
	<div class="w-full flex flex-col justify-center items-center mb-10 md:gap-14 px-5 md:px-[97px] pt-[98px] md:pt-[110px]">
		<!-- Main Content -->
		<div class="w-full max-w-7xl flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-[159px] lg:gap-auto">
			<!-- Logo and Tagline -->
			<div class="w-[312.1px] md:w-[451px] flex flex-col justify-start items-start gap-[12.48px] md:gap-4">
				<img class="w-[208.42px] md:w-[257px] h-[67.87px] md:h-[87px]" src="/ayana-dev-logo.svg" alt="Ayana Dev Studio" />
				<div class="w-full justify-start text-black text-[31.49px]/[37.79px] md:text-[40.37px]/[48.45px] font-bold font-sans capitalize md:leading-[48.45px] bg-gradient-to-r from-black to-[#7CCCCA] bg-clip-text text-transparent">
					Crafting Tomorrow's Essential Apps.
				</div>
			</div>
			
			<!-- Navigation Sections -->
			<div class="w-full md:w-[815px] flex flex-col md:flex-row justify-start items-start md:items-center gap-8 md:gap-[86px]">
				<!-- Our Apps Section -->
				<div class="flex flex-col justify-start items-start gap-6">
					<div class="self-stretch justify-start text-black text-h3-bold md:text-[24px] font-sans">
						Our Apps
					</div>
					<div class="self-stretch flex flex-col md:inline-flex md:flex-row justify-start items-start gap-4">
						<div class="flex flex-col justify-start items-start gap-4">
							<a href="https://rootcause.my" class="self-stretch justify-start">
								<span class="text-black text-base/[100%] font-normal font-sans">RootCause - </span>
								<span class="text-black text-base/[100%] font-light italic font-sans">Health & Wellness</span>
							</a>
							<a href="https://expatpass.io" class="self-stretch justify-start">
								<span class="text-black text-base/[100%] font-normal font-sans">ExpatPass - </span>
								<span class="text-black text-base/[100%] font-light italic font-sans">Travel Compliance</span>
							</a>
						</div>
						<div class="flex flex-col justify-start items-start gap-4">
							<a href="https://patenttrail.com" class="justify-start">
								<span class="text-black text-base/[100%] font-normal font-sans">Patent Trail - </span>
								<span class="text-black text-base/[100%] font-light italic font-sans">Innovation Access</span>
							</a>
							<a href="https://youversity.io" class="justify-start">
								<span class="text-black text-base/[100%] font-normal font-sans">Youversity - </span>
								<span class="text-black text-base/[100%] font-light italic font-sans">Education & Learning</span>
							</a>
						</div>
					</div>
				</div>
				
				<!-- Connect Section -->
				<div class="flex flex-col justify-start items-start gap-6">
					<div class="self-stretch justify-start text-black text-h3-bold md:text-[24px] font-bold font-sans leading-loose">
						Connect
					</div>
					<div class="self-stretch flex flex-col justify-start items-start gap-4">
						<div class="self-stretch justify-start text-black text-base/[100%] font-normal font-sans">
							Twitter/X
						</div>
						<div class="self-stretch justify-start text-black text-base/[100%] font-normal font-sans">
							LinkedIn
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
    <!-- Copyright -->
    <div class="w-full px-2.5 pt-2.5 pb-8 border-t border-black/20 flex justify-center items-center gap-2.5">
        <div class="text-center justify-start text-black text-base/[30px] font-normal font-sans">
            © 2025 Ayana Dev Studio
        </div>
    </div>
</footer> 