<script lang="ts">
  import { onMount } from 'svelte';
  
  let isMobile = false;
  
  onMount(() => {
    const checkWidth = () => {
      isMobile = window.innerWidth < 768;
    };
    
    // Initial check
    checkWidth();
    
    // Add resize listener
    window.addEventListener('resize', checkWidth);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  });
</script>

<header class="fixed top-0 left-0 right-0 z-50 w-full bg-white p-2 md:p-4">
  <div class="w-full mx-auto px-4 md:px-6 flex justify-between items-center">
    <!-- Logo -->
    <img 
      class="w-[109.11px] h-[36.95px] md:w-[159.45px] md:h-auto" 
      src="/Ayana-Dev-PNG.png" 
      alt="AyanaDev Logo" 
    />
    
    <!-- Navigation -->
    <div class="flex justify-start items-center gap-[19px] md:gap-6">
      <div class="text-center text-black text-small-medium md:text-small-medium-lg font-satoshi">
        Contact Us
      </div>
      <div class="px-4 py-2 md:px-6 md:py-4 bg-black rounded-lg flex justify-center items-center gap-2.5 md:w-[196.50px]">
        <div class="text-center text-white text-small-medium md:text-small-medium-lg font-satoshi">
          {#if isMobile}
            our Apps
          {:else}
            Explore our Apps
          {/if}
        </div>
      </div>
    </div>
  </div>
</header> 