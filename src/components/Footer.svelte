<script lang="ts">
	// Footer data
	const apps = [
		{ name: "RootCause", category: "Health & Wellness", url: "https://rootcause.my" },
		{ name: "ExpatPass", category: "Travel Compliance", url: "https://expatpass.io" },
		{ name: "Patent Trail", category: "Innovation Access", url: "https://patenttrail.com" },
		{ name: "Youversity", category: "Education & Learning", url: "https://youversity.io" }
	];

	const socialLinks = [
		{ name: "Twitter", url: "https://twitter.com/AyanaDevs" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/company/ayana-dev-studio" }
	];
</script>

<footer class="w-full bg-light-bg-primary">
	<div class="w-full flex flex-col justify-center items-center mb-10 md:gap-14 px-5 md:px-[97px] pt-[98px] md:pt-[110px]">
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
				<div class="flex flex-col justify-start items-start gap-6 h-[114px]">
					<div class="self-stretch justify-start text-black text-h3-bold md:text-[24px] font-sans">
						Connect
					</div>
					<div class="self-stretch flex flex-col justify-start items-start gap-4">
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
    <div class="w-full px-2.5 pt-2.5 pb-8 border-t border-black/20 flex justify-center items-center gap-2.5">
        <div class="text-center justify-start text-black text-base/[30px] font-normal font-sans">
            © 2025 Ayana Dev Studio
        </div>
    </div>
</footer> 