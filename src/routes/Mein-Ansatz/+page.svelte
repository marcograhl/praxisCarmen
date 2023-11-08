
<script>
  import HeroWrapper from "$blocks/hero_wrapper.svelte";
  import {i} from '@inlang/sdk-js';
  import ansatzImg from "$assets/ansatz-img.jpg"
</script>


<HeroWrapper>
  <h1 class="title">
    {i('meinAnsatz.title')}
  </h1>
  <article class="mt-m-l flow content text-step-1">
    <p>Ich begleite Menschen in einer Phase ihres Lebens, in der sie sich entscheiden, etwas in ihrem Leben verändern zu wollen und psychologische Unterstützung suchen.</p>
    <p>Psychologische Beratung kann helfen, wenn man mit der aktuellen Situation unzufrieden ist, sich belastet fühlt oder nicht weiß, wie es weiter gehen soll.</p>
    <p>Die Beratung bietet Entlastung und Unterstützung in Krisensituationen und in Belastungssituationen: Privater, familiärer oder beruflicher Art.</p>
    <div class="img-wrapper">
      <img class="" src={ansatzImg} alt="carmen mit notizblock, sitzend" title="Carmen Alvarez" width="200" height="300">
    </div>
    <p>Therapie ist eine Möglichkeit, schwierige Lebensphasen und Situationen mithilfe von fachkundiger Unterstützung zu bewältigen. Ich arbeite mit einem breiten Fach- und Erfahrungswissen.</p>
    <p>Mein Beratungskonzept ist von einem humanistischen Menschenbild geprägt. In meiner Arbeit integriere ich systemische Ansätze, zusätzlich arbeite ich mit emotionsfokussierten und achtsamkeitsbasierten Verfahren sowie schema therapeutischen Methoden.</p>
    <p>Durch das therapeutische Gespräch werden Dialoge über Probleme, Erzählungen eröffnet und neue Ideen ins Spiel gebracht.
Die Zusammenarbeit und die Behandlung ist Ressourcen-, Ziel- und Lösungsorientiert. </p>
    <p>Gemeinsam werden wir die persönlichen Ressourcen ausfindig machen und lernen sie zu nutzen. 
Erfahren mehr über mein Beratungsangebot. 
</p>
  </article>
</HeroWrapper>



<style lang="postcss">
  .content{
    margin-left: 2px;
    max-width: 52ch;
  }

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
    margin-block: 2.5ex  var(--photo-margin);
  }

  }

</style>


