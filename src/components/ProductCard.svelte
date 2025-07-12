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
				<div class="text-center justify-start text-black text-small-medium-lg-bold font-sans capitalize">
					{category}
				</div>
			</div>
			
			<!-- Description and Details -->
			<div class="self-stretch flex flex-col justify-start items-start gap-2">
				<div class="self-stretch justify-start text-black text-mini italic font-sans capitalize">
					{description}
				</div>
				<div class="self-stretch flex flex-col justify-start items-start gap-1">
					<div class="self-stretch inline-flex justify-start items-center gap-4">
						<div class="justify-start text-black text-small-xs font-sans capitalize">
							{availability}
						</div>
					</div>
					{#if stats}
						<div class="self-stretch justify-start text-black text-small-xs font-sans capitalize">
							{stats}
						</div>
					{/if}
				</div>
			</div>
		</div>
		
		<!-- CTA Button -->
		<button 
			class="self-stretch h-14 px-6 py-4 bg-black rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-gray-800 transition-colors duration-200"
			class:mt-[3px]={!stats}
			on:click={buttonAction}
		>
		<!-- <button 
			class="self-stretch h-14 px-6 py-4 bg-black rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-gray-800 transition-colors duration-200"
			on:click={buttonAction}
		> -->
			<div class="text-center justify-start text-white text-small-lg font-sans capitalize">
				{buttonText}
			</div>
			<div class="w-6 h-6 relative overflow-hidden">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path d="M18.7501 6V15.75C18.7501 15.9489 18.671 16.1397 18.5304 16.2803C18.3897 16.421 18.199 16.5 18.0001 16.5C17.8011 16.5 17.6104 16.421 17.4697 16.2803C17.3291 16.1397 17.2501 15.9489 17.2501 15.75V7.81031L6.53068 18.5306C6.38995 18.6714 6.19907 18.7504 6.00005 18.7504C5.80103 18.7504 5.61016 18.6714 5.46943 18.5306C5.3287 18.3899 5.24963 18.199 5.24963 18C5.24963 17.801 5.3287 17.6101 5.46943 17.4694L16.1897 6.75H8.25005C8.05114 6.75 7.86037 6.67098 7.71972 6.53033C7.57907 6.38968 7.50005 6.19891 7.50005 6C7.50005 5.80109 7.57907 5.61032 7.71972 5.46967C7.86037 5.32902 8.05114 5.25 8.25005 5.25H18.0001C18.199 5.25 18.3897 5.32902 18.5304 5.46967C18.671 5.61032 18.7501 5.80109 18.7501 6Z" fill="white"/>
				  </svg>
			</div>
		</button>
	</div>
</div> 