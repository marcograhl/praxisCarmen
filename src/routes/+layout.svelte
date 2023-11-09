<script lang="ts">
import './style.css';
import SiteFooter from '$partials/Site-footer.svelte';
import SiteHeader from '$partials/Site-header.svelte';


</script>


  <a class="skip-link button" href="#main-content">Skip to content</a>
   <SiteHeader/>
      <main class="mt-m-xl" tabindex="-1" id="main-content">
    <slot />
  </main>
  <SiteFooter/>
  






<style lang="postcss" >



</style>

