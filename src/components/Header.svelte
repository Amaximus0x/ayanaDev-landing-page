<script lang="ts">
  import { onMount } from 'svelte';
  import { push, location } from 'svelte-spa-router';
  
  let isMobile = false;
  let currentPath = '/';
  
  // Subscribe to location changes
  location.subscribe(value => {
    currentPath = value || '/';
  });
  
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

  function handleProductsClick() {
    if (currentPath === '/') {
      scrollToSection('products-section');
    } else {
      push('/');
      setTimeout(() => {
        scrollToSection('products-section');
      }, 100);
    }
  }

  function handleContactClick() {
    const email = 'info@ayanadevstudio.com';
    
    try {
      // Method 1: Create temporary anchor element (works best for iOS Safari)
      const link = document.createElement('a');
      link.href = `mailto:${email}`;
      link.setAttribute('target', '_blank');
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Fallback: Use window.open (works on most browsers)
      try {
        window.open(`mailto:${email}`, '_blank');
      } catch (fallbackError) {
        // Final fallback: Direct location change
        window.location.href = `mailto:${email}`;
      }
    }
  }

  function navigateToHome() {
    push('/');
  }
</script>

<!-- <header class="fixed z-50 bg-white p-2 md:p-4 rounded-lg md:rounded-2xl top-[60px] left-[20px] right-[20px] md:top-[55px] md:left-[66px] md:right-[66.5px] w-auto"> -->
<header class="fixed z-50 bg-white px-5 py-4 md:px-14 md:pt-8 md:pb-6 rounded-lg md:rounded-2xl  w-full">
  <div class="w-full mx-auto flex justify-between items-center">
    <!-- Logo -->
    <button on:click={navigateToHome} class="cursor-pointer">
      <img 
        class="w-[109.11px] h-[36.95px] md:w-[159.45px] md:h-auto" 
        src="/Ayana-Dev-PNG.svg" 
        alt="AyanaDev Logo" 
      />
    </button>
    
    <!-- Navigation -->
    <div class="flex justify-start items-center gap-[19px] md:gap-6">
      <div class="text-center text-black text-small-medium md:text-small-medium-lg font-satoshi cursor-pointer" on:click={handleContactClick}>
        Contact Us
      </div>
      <div class="px-4 py-2 md:px-6 md:py-4 bg-black rounded-lg flex justify-center items-center gap-2.5 md:w-[196.50px] cursor-pointer" on:click={handleProductsClick}>
        <div class="text-center text-white text-small-medium md:text-small-medium-lg font-satoshi">
          {#if isMobile}
            Our Apps
          {:else}
            Explore our Apps
          {/if}
        </div>
      </div>
    </div>
  </div>
</header> 