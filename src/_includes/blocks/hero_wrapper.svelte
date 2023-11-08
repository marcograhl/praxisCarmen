
<section class="hero wrapper pb-2xl-5xl">
  <div class="hero-inner bg-light-glare">
    <slot/>
  </div>
</section>


<style lang="postcss">
  .hero{
    @media(--below_large){
      --content-max-width: 55rem;
    }
  }

  .hero-inner{
    min-height: 23.25rem;
    border-radius: none;
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: var(--space-l) var(--space-m);


    @media(--above_small){
    padding: var(--space-l) var(--space-m-3xl);
    border-radius: clamp(10px,8px + 2vw,30px);
    box-shadow: var(--shadow-2);
    border: 1px solid var(--color-nebula-200);
    margin-inline: auto;
    width: 100%;
    transform: initial;
  }

  }

</style>
