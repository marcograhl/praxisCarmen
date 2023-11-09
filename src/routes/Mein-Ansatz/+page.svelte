
<script>
  import HeroWrapper from "$blocks/hero_wrapper.svelte";
  import {i} from '@inlang/sdk-js';
  import ansatzImg from "$assets/ansatz-img.jpg"
</script>


<HeroWrapper>
  <h1 class="title">
    {i('meinAnsatz.title')}
  </h1>
  <article class="flow content text-w  text-step-1">
    <p>{i('meinAnsatz.p_1')}</p>
    <p>{@html i('meinAnsatz.p_2')}</p>
    <p>{@html i('meinAnsatz.p_3')}</p>
    <div class="img-wrapper">
      <img class="" src={ansatzImg} alt={i('meinAnsatz.img_alt')} title="Carmen Alvarez" width="200" height="300">
    </div>
    <p>{@html i('meinAnsatz.p_4')}</p>
    <p>{@html i('meinAnsatz.p_5')}</p>
    <p>{i('meinAnsatz.p_6')}</p>
    <p>{@html i('meinAnsatz.p_7')}</p>
    <p>{@html i('meinAnsatz.p_8')}</p>
    <p></p>
  </article>
</HeroWrapper>



<style lang="postcss">

  .img-wrapper{
    display: grid;
    grid-template-areas:
    "container";
    place-items: start;
    margin-inline: auto;
    @media(--above_med){
    --photo-margin: 1em;
    clear: both;
    float: var(--float, right);
    margin-inline-start: var(--photo-margin);
    margin-block: 3.5ex  var(--photo-margin);
  }

  }

</style>


