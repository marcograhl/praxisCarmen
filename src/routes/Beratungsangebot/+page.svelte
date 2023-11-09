<script>
  import HeroWrapper from "$blocks/hero_wrapper.svelte";
  import {i} from '@inlang/sdk-js';
  import beratungImg from '$assets/beratung-img.jpg'
</script>


<HeroWrapper>
  <h1 class="title">
    {i('beratungsangebot.title')}
  </h1>
  <div class="mt-m-l content grid text-step-1" data-layout="50-50">
    <ul class="flow" role="presentation">
      <li role="presentation">{i("beratungsangebot.liste.0")}</li>
      <li role="presentation">{i("beratungsangebot.liste.1")}</li>
      <li role="presentation">{i("beratungsangebot.liste.2")}</li>
    </ul>

    <div class="flow">
      <p>
        {@html i("beratungsangebot.behandlungsangebot")}
      </p>
      <p></p>
    </div>


  </div>
</HeroWrapper>
<div class="region bg-light-glare center-xy">
  <div class="wrapper offset">
    <img src={beratungImg} alt="" width="960" height="640">

  </div>
</div>



<style lang="postcss">
  .grid{
   --gutter: var(--space-2xs);

  }


  ul{
   --flow-space: 0.25em;

    & li{
    list-style-type: "✓ ";
    list-style-position: outside;

    @media (--above_small) {
    list-style-type: "✓";
    padding-inline-start: var(--space-2xs-xs);
    margin-inline-start: calc(-1* var(--space-2xs-xs));
    }
    }
  }

  img{
   border-radius: clamp(8px,6vw,10px);

  }
</style>


