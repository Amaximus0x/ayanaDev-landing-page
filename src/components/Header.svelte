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

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function scrollToProducts() {
    scrollToSection('products-section');
  }

  function scrollToContact() {
    scrollToSection('contact-section');
  }
</script>

<!-- <header class="fixed z-50 bg-white p-2 md:p-4 rounded-lg md:rounded-2xl top-[60px] left-[20px] right-[20px] md:top-[55px] md:left-[66px] md:right-[66.5px] w-auto"> -->
<header class="fixed z-50 bg-white px-5 py-4 md:px-14 md:pt-8 md:pb-6 rounded-lg md:rounded-2xl  w-full">
  <div class="w-full mx-auto flex justify-between items-center">
    <!-- Logo -->
    <img 
      class="w-[109.11px] h-[36.95px] md:w-[159.45px] md:h-auto" 
      src="/Ayana-Dev-PNG.svg" 
      alt="AyanaDev Logo" 
    />
    
    <!-- Navigation -->
    <div class="flex justify-start items-center gap-[19px] md:gap-6">
      <div class="text-center text-black text-small-medium md:text-small-medium-lg font-satoshi cursor-pointer" on:click={scrollToContact}>
        Contact Us
      </div>
      <div class="px-4 py-2 md:px-6 md:py-4 bg-black rounded-lg flex justify-center items-center gap-2.5 md:w-[196.50px]" on:click={scrollToProducts}>
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