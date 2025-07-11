<script lang="ts">
	export let title: string;
	export let category: string;
	export let description: string;
	export let availability: string;
	export let stats: string;
	export let buttonText: string;
	export let imageUrl: string;
	export let buttonAction: () => void = () => {};
</script>

<div class=" p-2 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/5 inline-flex flex-col justify-start items-end gap-2.5">
	<!-- Image Container -->
	<div class="self-stretch h-56 relative bg-neutral-300 rounded-lg outline outline-1 outline-offset-[-1px] outline-black/5 overflow-hidden">
		<img 
			class="w-[424.76px] h-[240.85px] object-cover" 
			src={imageUrl} 
			alt={title}
		/>
	</div>
	
	<!-- Content Container -->
	<div class="self-stretch flex flex-col justify-start items-end gap-6">
		<div class="self-stretch flex flex-col justify-start items-center gap-4">
			<!-- Title and Category -->
			<div class="self-stretch inline-flex justify-between items-center">
				<div class="flex-1 justify-start text-black text-h2-medium md:text-h1-sm-medium font-sans capitalize">
					{title}
				</div>
				<div class="text-center justify-start text-black text-sm font-medium font-sans capitalize">
					{category}
				</div>
			</div>
			
			<!-- Description and Details -->
			<div class="self-stretch flex flex-col justify-start items-start gap-2">
				<div class="self-stretch justify-start text-black text-xs font-normal font-sans capitalize">
					{description}
				</div>
				<div class="self-stretch flex flex-col justify-start items-start gap-1">
					<div class="self-stretch inline-flex justify-start items-center gap-4">
						<div class="justify-start text-black text-xs font-medium font-sans capitalize">
							{availability}
						</div>
					</div>
					<div class="self-stretch justify-start text-black text-xs font-medium font-sans capitalize">
						{stats}
					</div>
				</div>
			</div>
		</div>
		
		<!-- CTA Button -->
		<button 
			class="self-stretch h-14 px-6 py-4 bg-black rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-gray-800 transition-colors duration-200"
			on:click={buttonAction}
		>
			<div class="text-center justify-start text-white text-base font-medium font-sans capitalize">
				{buttonText}
			</div>
			<div class="w-6 h-6 relative overflow-hidden">
				<div class="w-3.5 h-3.5 left-[5.25px] top-[5.25px] absolute bg-white"></div>
			</div>
		</button>
	</div>
</div> 