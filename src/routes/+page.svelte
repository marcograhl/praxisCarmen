<script>
  import {i,languages,switchLanguage} from '@inlang/sdk-js';
  import imgHero from '$assets/carmenworking.png';
  import imgCardPlant from '$assets/card-plant.png'
  import imgPortraitPlants from '$assets/portrait-plants.png' 
</script>


<section class="hero bg-secondary mt-s-2xl">
  <div class="sidebar py-m-xl px-xs-3xl">
    <div class="hero-text flow">
      <h2 class="hero-text_title">{@html i('intro.info')} </h2>
      <p class="hero-text_subtitle text-step-2">{i('intro.next')}</p>
    </div>
    <div class="hero-img">
      <img class="portrait mx-auto" src={imgHero} alt="testing" width="400" height="482">
    </div>
  </div>
</section>
<article class="praxis region">
  <address class="card font-base not-italic mx-auto bg-secondary">
    <div class="card-row bg-accent text-light">
      <img class="self-center card-plant" src={imgCardPlant} alt="deco" width="53" height="104">
      <p class="inline-block self-center">
        <span class="block card-row_title">Öffnungszeiten:</span>
        <span class="text-step-1"><strong>Mo, Mi:&ensp; 10:00 &thinsp;&ndash;&thinsp; 18:00</strong></span>
      </p>
    </div>
    <div class="card-row">
      <span class="card-row_title">Praxis:</span>
      <a class="text-step-1" href="mailto:alvarez.carmenglo@gmail.com">Bozener Str. 17, 10825 Berlin↗</a>
    </div>
    <div class="card-row">
      <span class="card-row_title">e&#8211;mail:</span>
      <a class="text-step-1" href="mailto:alvarez.carmenglo@gmail.com">alvarez.carmenglo@gmail.com↗</a>
    </div>
  </address>
</article>
<section class="quote-wrapper region full-bleed bg-secondary px-m">
  <figure class="">
    <blockquote class="">
      <svg class="quote sm:mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 31">
        <path fill="var(--color-primary)" d="M34.631 30.5c-3.133 0-5.533-1.033-7.2-3.1-1.666-2.067-2.5-4.667-2.5-7.8 0-3.533.7-6.567 2.1-9.1 1.4-2.6 3.134-4.733 5.2-6.4 2.067-1.733 4-3.033 5.8-3.9l1.5 2c-1.666.733-3.266 1.733-4.8 3-1.533 1.267-2.8 2.633-3.8 4.1-.933 1.467-1.4 2.833-1.4 4.1 0 .467.1.8.3 1 .267.2.534.3.8.3.4 0 1-.233 1.8-.7.8-.533 2-.8 3.6-.8 2.334 0 4.267.733 5.8 2.2 1.6 1.4 2.4 3.433 2.4 6.1 0 2.467-.833 4.6-2.5 6.4-1.6 1.733-3.966 2.6-7.1 2.6Zm-24.1 0c-3.133 0-5.533-1.033-7.2-3.1-1.666-2.067-2.5-4.667-2.5-7.8 0-3.533.7-6.567 2.1-9.1 1.4-2.6 3.134-4.733 5.2-6.4 2.067-1.733 4-3.033 5.8-3.9l1.5 2c-1.666.733-3.266 1.733-4.8 3-1.533 1.267-2.8 2.633-3.8 4.1-.933 1.467-1.4 2.833-1.4 4.1 0 .467.1.8.3 1 .267.2.534.3.8.3.4 0 1-.233 1.8-.7.8-.533 2-.8 3.6-.8 2.334 0 4.267.733 5.8 2.2 1.6 1.4 2.4 3.433 2.4 6.1 0 2.467-.833 4.6-2.5 6.4-1.6 1.733-3.966 2.6-7.1 2.6Z"/>
      </svg>
      <p class="mt-m-xl font-serif text-step-3 sm:text-center sm:mx-auto">
      Wenn wir eine Verbindung mit den Gründen für unsere Ängste &
      Symptomen herstellen, öffnen wir uns einer möglichen Lösung
      </p>
    </blockquote>
  </figure>
</section>


<style lang="postcss">
  .praxis{


  }

:global(html[lang="de"]){
    @media(--below_med){
    hyphens: auto;
    }
}
  .quote-wrapper{
    box-shadow: var(--shadow-1);
    overflow: hidden;
    border-top: 1px solid var(--color-border);
   @media(--above_large){
    &:before{
      content: url("$assets/hero-plant.png");
      position: absolute;
      top: 6rem;
      mix-blend-mode: color-burn;
      transform: translateX(calc(-77% + 4vw));
      z-index: 2;
    }
  &:after{
      content: url("$assets/footer-right.png");
      position: absolute;
  bottom: -5.5rem;
      right:-3.5rem;
      mix-blend-mode: color-burn;
      z-index: 2;
  }
  }
  }

  
  .hero{
   width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
    border-radius: none;
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-2);

  @media(--above_med){
    width: 100%;
    margin-left: 0%;
    transform: inherit;
    border-radius:clamp(10px,8px + 2vw,30px);
  }

  @media(--above_xlarge){
    &:before{
      content: url("$assets/hero-plant.png");
      position: absolute;
      top: calc(7rem + 6vw);
      mix-blend-mode: color-burn;
      transform: translateX(calc(-87% + 4vw));
      z-index: 2;

    }

  }

  }


  .portrait{
    position: relative;
    width: clamp(17.5rem, 15.5rem + 12vw, 28.75rem);
    margin-bottom: calc(-1 * var(--space-m-xl));
    transform: initial;

  @media(--above_xlarge){
    transform: translateX(var(--space-xs-l));
  }
  }

  

  .card {
    overflow: hidden;
    width: 100%;
    border-radius: clamp(10px,8px + 2vw,30px);
    letter-spacing: 0.025em;
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-2);

    @media (--above_small) {
      display: grid;
      align-content: center;
      grid-template-columns: max-content 1fr;
      column-gap: 0;
      column-gap: var(--space-s-xl);
      width: max-content;
    }
  }

  .card-row:first-child{
    padding-block: var(--space-xs-s);
  }

   .card-row{
    padding-inline: var(--space-s-l);
  }

  .card > * + * {
    border-top: 1px solid var(--color-border);
    padding-block: var(--space-s-m);
  }

  .quote{
   width: 3ch;
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
  
  blockquote p{
    max-width: 40ch;
  }


  .card-row{
    display: grid;
     grid-column: span 2;
    grid: inherit;
    align-items: baseline;
    grid-template-columns: subgrid;
    @media (--above_small) {
    }
  }

  .card-row_title{
   text-transform: uppercase;
   font-size: var(--size-step-0);
    letter-spacing: 0.15em;
  }


  .hero .sidebar{
    --sidebar-vertical-alignment: flex-start;
    --sidebar-target-width: 28.75rem;
    --sidebar-content-min-width: 35%;
    --gutter: var(--space-2xs-xl);
  }

  .hero-text{
    --flow-space: var(--space-s-m);
    display: grid;
    align-content: center;
    justify-content: center;
  }

  .hero-text_title{
    max-width: 30ch;
    font-weight: 650;
    line-height: 1;
    letter-spacing: -0.01em;
  }




  .hero-text_subtitle{
    text-indent: 1ch;
     max-width: 50ch;
  }


</style>
