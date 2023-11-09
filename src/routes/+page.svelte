<script>
  import {i} from '@inlang/sdk-js';
  import imgHero from '$assets/carmenworking.png';
  import imgCardPlant from '$assets/card-plant.png'
  import imgPortraitPlants from '$assets/portrait-plants.png' 
  import HeroWrapper from '../_includes/blocks/hero_wrapper.svelte';
</script>



<HeroWrapper>
    <div class="sidebar">
      <div class="hero-text flow">
        <h2 class="hero-text_title text-step-4">{@html i('Startseite.heading')} </h2>
        <p class="hero-text_subtitle text-step-2">{i('Startseite.subheading')}</p>
      </div>
      <div class="hero-img">
        <img class="portrait mx-auto" src={imgHero} alt="testing" width="322" height="400">
      </div>
    </div>
</HeroWrapper>

<article class="praxis region bg-light-glare px-m">
  <address class="card offset font-base not-italic mx-auto bg-light-glare">
    <div class="card-row bg-nebula-100">
      <img class="self-center card-plant" src={imgCardPlant} alt="deco" width="53" height="104">
      <p class="inline-block self-center">
        <span class="block card-row_title">{@html i('Startseite.card.0')}</span>
        <span class="text-step-1">{@html i('Startseite.card.1')}</span>
      </p>
    </div>
    <div class="card-row">
      <span class="card-row_title">{i('Startseite.card.2')}</span>
      <a class="text-step-1" target='_blank' rel='noreferrer' href='https://www.google.com/maps/place/Psychologische+Privatpraxis+im+Bayerischen+Viertel+Carmen+Alvarez/@52.4869995,13.3383774,15z/data=!4m6!3m5!1s0x47a851faa4a2d3a3:0xba7343ea7b73ad4d!8m2!3d52.4869995!4d13.3383774!16s%2Fg%2F11sjgtq6tx?entry=ttu' >Bozener Str. 17, 10825 Berlin</a>
    </div>
    <div class="card-row">
      <span class="card-row_title">e&#8211;mail:</span>
      <a class="text-step-1" href="mailto:alvarez.carmenglo@gmail.com">alvarez.carmenglo@gmail.com</a>
    </div>
  </address>
  <div class="quote-wrapper pt-l-2xl">
    <figure class="">
      <blockquote class="">
        <svg class="quote sm:mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 31">
          <path fill="var(--color-primary)" d="M34.631 30.5c-3.133 0-5.533-1.033-7.2-3.1-1.666-2.067-2.5-4.667-2.5-7.8 0-3.533.7-6.567 2.1-9.1 1.4-2.6 3.134-4.733 5.2-6.4 2.067-1.733 4-3.033 5.8-3.9l1.5 2c-1.666.733-3.266 1.733-4.8 3-1.533 1.267-2.8 2.633-3.8 4.1-.933 1.467-1.4 2.833-1.4 4.1 0 .467.1.8.3 1 .267.2.534.3.8.3.4 0 1-.233 1.8-.7.8-.533 2-.8 3.6-.8 2.334 0 4.267.733 5.8 2.2 1.6 1.4 2.4 3.433 2.4 6.1 0 2.467-.833 4.6-2.5 6.4-1.6 1.733-3.966 2.6-7.1 2.6Zm-24.1 0c-3.133 0-5.533-1.033-7.2-3.1-1.666-2.067-2.5-4.667-2.5-7.8 0-3.533.7-6.567 2.1-9.1 1.4-2.6 3.134-4.733 5.2-6.4 2.067-1.733 4-3.033 5.8-3.9l1.5 2c-1.666.733-3.266 1.733-4.8 3-1.533 1.267-2.8 2.633-3.8 4.1-.933 1.467-1.4 2.833-1.4 4.1 0 .467.1.8.3 1 .267.2.534.3.8.3.4 0 1-.233 1.8-.7.8-.533 2-.8 3.6-.8 2.334 0 4.267.733 5.8 2.2 1.6 1.4 2.4 3.433 2.4 6.1 0 2.467-.833 4.6-2.5 6.4-1.6 1.733-3.966 2.6-7.1 2.6Z"/>
        </svg>
        <p class="font-serif-text mt-s-m text-step-2  sm:text-center sm:mx-auto">
          {i('Startseite.quote')}
        </p>
      </blockquote>
    </figure>
  </div>
</article>


<style lang="postcss">
  .hero-text{
    display: grid;
    align-content: center;
    justify-content: center;
  }

  .hero-text_title{
    font-weight: 650;
    line-height: 1;
    @media(--above_large){
    display: grid;
    max-width: 28ch;
  }

  }

  .hero-text_subtitle{
     max-width: 55ch;
    @media(--above_large){
     text-indent: 1ch;
  }
  }

  blockquote{
   font-style: italic;
  }

  .quote-wrapper{
    overflow: hidden;
    border-top: 1px solid var(--color-border);
  }

  


  .portrait{
    position: relative;
    width: clamp(14.5rem, 13.5rem + 12vw, 20.15rem);
    transform: initial;

  }

  

  .card {
    overflow: hidden;
    width: 100%;
    border-radius: clamp(10px,8px + 2vw,30px);
    letter-spacing: 0.015em;
    border: 1px solid var(--color-nebula-200);
    box-shadow: var(--shadow-2);
    white-space: nowrap;
    

    @media (--above_small) {
      display: grid;
      width: max-content;
      align-content: center;
      grid-template-columns: max-content 1fr;
      column-gap: 0;
      column-gap: var(--space-s-l);
    }
  }

  .card-row:first-child{
    padding-block: var(--space-xs-s);
  }

   .card-row{
    padding-inline: var(--space-s-l);
  }

  .card > * + * {
    border-top: 1px solid var(--color-nebula-200);
    padding-block: var(--space-s-m);
  }


  .card-plant{
    position: relative;
    mix-blend-mode: multiply;
    justify-self: end;
    @media (--above_small) {
    right: 14px;
    justify-self: start;
    }

  }

  .quote{
   width: 2.75ex;
  }
  
  blockquote p{
    max-width: 40ch;
  }


  .card-row{
    display: grid;
     grid-column: span 2;
    grid: inherit;
    align-items: baseline;
    grid-template-columns: subgrid;
  }

  .card-row_title{
    font-size: var(--size-step-2);
    letter-spacing: 0.05em;
    font-variant: all-petite-caps;
    letter-spacing: 0.05em;
  }




</style>
