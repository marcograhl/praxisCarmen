<script>
  import HeroWrapper from "$blocks/hero_wrapper.svelte";
  import {i} from '@inlang/sdk-js';
  import praxisImg from "$assets/praxis-img.jpeg";
    import postcss from "postcss";
</script>



<HeroWrapper>
  <h1 class="title">
    {i('Kontakt.title')}
  </h1>
  <article class="flow content text-step-1">
    <p>{@html i('Kontakt.p_1')}</p>
    <h2>{i('Kontakt.h2_1')}</h2>
    <div class="praxis grid" data-layout="50-50">
      <div class="flow">
        <p>{@html i('Kontakt.p_2')}</p>
        <div class="indent">
          <div></div>
          <div class="flow">
            <p class="text-step-01">{@html i('Kontakt.p_4')}</p>
            <p class="text-step-01">{@html i('Kontakt.p_3')}</p>
          </div>
        </div>
      </div>
      <div>
        <img src={praxisImg} alt="" width="512" height="384">
      </div>
    </div>
    <p></p>
  </article>
</HeroWrapper>

<style lang="postcss">
  .praxis{
   --gutter: var(--space-s-m);

  }
  img{
   border-radius: clamp(8px,6vw,10px);

  }
</style>
