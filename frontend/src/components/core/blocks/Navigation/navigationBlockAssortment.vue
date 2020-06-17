<template>
    <article class="widget subnavigation-assortment">
      <h6>Blader in assortiment</h6>
        <ul>
          <li>
            
            <a href="/voorugevonden/?N=110&amp;in_vs=1" class="assortment-icon assortment- green  " data-track="Elektrotechniek">
                Elektrotechniek</a>
          </li>
          <li>
            
            <a href="/voorugevonden/?N=111&amp;in_vs=1" class="assortment-icon assortment- red    " data-track="Verwarming &amp; klimaat">
                Verwarming &amp; klimaat</a>
          </li>
          <li>
            
            <a href="/voorugevonden/?N=112&amp;in_vs=1" class="assortment-icon assortment- aqua   " data-track="Sanitair">
                Sanitair</a>
          </li>
          <li>
            
            <a href="/voorugevonden/?N=113&amp;in_vs=1" class="assortment-icon assortment- blue   " data-track="Gereedschap">
                Gereedschap</a>
          </li>
          <li>
            
            <a href="/voorugevonden/?N=115&amp;in_vs=1" class="assortment-icon assortment- orange " data-track="Consumentenproducten">
                Consumentenproducten</a>
          </li>
          <li>
            
            <a href="/voorugevonden/?N=114&amp;in_vs=1" class="assortment-icon assortment- purple " data-prop-marketinggroup="mgrLI" data-track="Verlichting">
                Verlichting</a>
          </li>
          <li>
            
            <a href="/voorugevonden/?N=116&amp;in_vs=1" class="assortment-icon assortment- yellow " data-track="Persoonlijke beschermingsmiddelen">
                Persoonlijke beschermingsmiddelen</a>
          </li>
        </ul>
    </article>
</template>

<script>
export default {
      name: 'assortmentNavigation',
      components: {
       }
}
</script>

<style lang="scss" scoped>
article.widget, div.grid-3 article.widget.subnavigation-assortment, .widget.pw-request, .widget.signupsteps {
    background-color: rgba(255,255,255,0.86);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid $tuWhiteGray;
    
}

article.widget.subnavigation-assortment ul {
    padding: 0;
    li {
    list-style-type: none;
    margin: 0 0 10px;
    text-align: left;
        a {
        display: block;
        font: 13.4px Arial;
        min-height: 19px;
        padding: 4px 0 0 34px;
        text-decoration: none;
        &.assortment-icon {
            background: url(https://accept.ocp.technischeunie.nl//static/images/sprites/assortment.png) 0 0 no-repeat;
            min-height: 24px;
                &.green {
                    background-position: 0 -34px;
                }
                &.red {
                    background-position: 0 -204px;
                }
                &.aqua {
                    background-position: 0 -136px;
                }
                &.blue {
                    background-position: 0 -68px;
                }
                &.orange {
                    background-position: 0 -102px;
                }
                &.purple {
                    background-position: 0 -170px;
                }
                &.yellow {
                    background-position: 0 0px;
                }
            }
        }
    }
}


</style>