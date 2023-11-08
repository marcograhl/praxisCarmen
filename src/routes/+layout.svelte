<script lang="ts">
import './style.css';
import imgHero from '$assets/carmenworking.png';
import {i,languages,switchLanguage} from '@inlang/sdk-js';
import SiteFooter from '../_includes/partials/Site-footer.svelte';
import SiteHeader from '../_includes/partials/Site-header.svelte';


</script>


  <a class="skip-link button" href="#main-content">Skip to content</a>
   <SiteHeader/>
      <main class="mt-m-xl" tabindex="-1" id="main-content">
    <slot />
  </main>

  <SiteFooter/>
  






<style lang="postcss" >
  :global(.indent){
    @media(--above_large){
    text-indent: 1.5ch;
  }
  }



</style>

