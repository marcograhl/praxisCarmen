<script>
  import HeroWrapper from "$blocks/hero_wrapper.svelte";
  import {i} from '@inlang/sdk-js';
  import beratungImg from '$assets/beratung-img.jpg'
</script>


<HeroWrapper>
  <h1 class="title">
    {i('beratungsangebot.title')}
  </h1>
  <div class="mt-m-l content switcher text-step-1">
    <ul class="flow" role="presentation">
      <li role="presentation">{i("beratungsangebot.liste.0")}</li>
      <li role="presentation">{i("beratungsangebot.liste.1")}</li>
      <li role="presentation">{i("beratungsangebot.liste.2")}</li>
    </ul>

    <p>
      {@html i("beratungsangebot.behandlungsangebot")}
    </p>
  </div>
</HeroWrapper>
<div class="region bg-light-glare center-xy">
  <div class="wrapper">
    <img src={beratungImg} alt="" width="960" height="640">

  </div>
</div>



<style lang="postcss">
  .content{
    margin-left: 2px;
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
</style>


