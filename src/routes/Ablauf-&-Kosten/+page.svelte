<script>
  import HeroWrapper from "$blocks/hero_wrapper.svelte";
  import {i} from '@inlang/sdk-js';
</script>



<HeroWrapper>
  <h1 class="title">
    {i('Ablauf.title')}
  </h1>
  <article class="flow content text-step-1">
    <p>{@html i('Ablauf.p_1')}</p>
    <div class="q indent">
      <div></div>
      <q class="q-content">{i('Ablauf.q_1')}</q>
    </div>
    <h2>{i('Ablauf.h2_1')} </h2>
    <p>{i('Ablauf.p_2')}</p>
    <h2>{i('Ablauf.h2_2')} </h2>
    <p>{i('Ablauf.p_3')}</p>
    <p></p>
  </article>
</HeroWrapper>



<style lang="postcss">
   
.q-content{
  display: block;
  max-width: 40ch;
  quotes: none;
  font-family: var(--font-serif-text);
  font-style: italic;
}
</style>

