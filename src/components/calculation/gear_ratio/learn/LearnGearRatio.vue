<template>
  <div class="has-text-left">
    <h2 class="title is-4">What are gear ratios?</h2>

    <div class="section">
      <h3 class="title is-5">Introduction</h3>

      <article class="tile is-12 mb-3">
        <div class="content">
          <p>A ratio compares value, and says how much of one thing there is compared to another thing.
            For example, if there are 5 boys in your classroom and 2 girls then the ratio of boys to girls is 5:2.
            This means there are <i>5 / 2 = 2.5 times</i> as many boys in the class as there are girls.
            A <i>gear ratio</i> is similar and compares the size of one gear to the size of another gear.</p>
          <p>
            Gear ratios on bicycles are important, because they allow us to change how fast we pedal to achieve different speeds.
            Using gears on our bike, we can move our legs and pedal at the same speed while slowly climbing a bumpy hill, or racing down a paved road.
          </p>
          <p>Try the example below to compare the ratio of the front gear (or chainring) to the gear on the rear wheel.</p>
        </div>
      </article>

      <div class="tile is-ancestor">
        <div class="tile is-vertical is-12">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-info" id="example-tile">
                <div class="content columns is-multiline">

                  <div class="column vertical-center">
                    <div class="field">
                      <label class="label has-text-white">Front gear</label>
                      <div class="control">
                        <div class="select">
                          <select v-model="exampleFrontGear">
                            <option :value="gear" v-for="gear in exampleGearOptions" :key="gear">{{gear}}T</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="column vertical-center">
                    <div class="field">
                      <label class="label has-text-white">Rear gear</label>
                      <div class="control">
                        <div class="select">
                          <select v-model="exampleRearGear">
                            <option :value="gear" v-for="gear in exampleGearOptions" :key="gear">{{gear}}T</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="column vertical-center" id="equals">
                    =
                  </div>

                  <div class="column vertical-center">
                    <p>A gear ratio of <b>{{exampleFrontGear}}:{{exampleRearGear}}</b> or <b>{{computeGearRatio(exampleFrontGear, exampleRearGear)}}</b></p>
                  </div>

                  <div class="column is-full">
                    <p>One complete rotation of the crank will cause the rear wheel to rotate <b>{{computeGearRatio(exampleFrontGear, exampleRearGear)}}</b> times</p>
                  </div>

                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <p class="subtitle">"High" gears</p>
                <p>If your gear ratio is <strong>above 1</strong>, then your bike's rear wheel will complete a full turn <b>more</b> often than your pedals will. </p>
                <p>This means that you can bike at a faster speed without 'running out of gears' because you can pedal slower and still turn the rear wheel very quickly.</p>
                <p class="subtitle">"Low" gears</p>
                <p>If your gear ratio is <strong>below 1</strong>, then your bike's rear wheel will complete a full turn <strong>less</strong> often than your pedals will. </p>
                <p>This means you can bike slower, and climbing up hills will be easier because you can continue to pedal at a comfortable rate.</p>
              </article>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div class="section">
      <h3 class="title is-5">What is a Cassette?</h3>
      <article class="tile is-12 mb-3">
        <div class="content columns">
          <div class="column">
            <p>A cassette (or freewheel) is mounted on the center of the rear wheel of a bicycle.</p>
            <p>It is made up of separate cogs, each having a different number of teeth. When combined with a chainring on the front, this allows your rear wheel to rotate at a different speed compared to your pedals.</p>
            <p>If you look closely at the example on the right, you will see that this cassette has 10 cogs (or 10 speeds).</p>
            <p>You can count the number of teeth on the smallest cog to find your minimum cassette cog.</p>
            <p>You can count the number of teeth on the largest cog to find your maximum cassette cog.</p>
          </div>
          <div class="column">
            <figure class="image">
              <img src="@/assets/cassette.jpg" alt="Image of a rear cassette">
            </figure>
          </div>
        </div>
      </article>
    </div>

    <div class="section">
      <h3 class="title is-5">What are Chainrings?</h3>
      <article class="tile is-12 mb-3">
        <div class="content columns">
          <div class="column">
            <figure class="image">
              <img src="@/assets/crank.jpg" alt="Image of crankset, showing 3 chainrings">
            </figure>
          </div>
          <div class="column">
            <p>The pedals, crank arm, chainrings, and bottom bracket make up what is called a <i>crankset</i>. The chainrings are attached to the crank arms, and spin as you pedal.</p>
            <p>There are usually between 1 and 3 chainrings on a bike. If you look closely at the image on the left, you will see 3 chainrings.</p>
            <p>If you have more than one chainring, you will be able to shift between them to increase or decrease your gear ratio.</p>
            <ul>
              <li>A <strong>smaller chainring</strong> corresponds to a <strong>smaller gear ratio</strong></li>
              <li>A <strong>larger chainring</strong> corresponds to a <strong>larger gear ratio</strong></li>
            </ul>
            <p>The number of teeth is usually printed on each chainring. If you can't find it, you can count the teeth on a chainring to determine it's size.</p>
          </div>
        </div>
      </article>

    </div>

    <div class="section">
      <h3 class="title is-5">What is gear range?</h3>
      <article class="tile is-12 mb-3">
        <div class="content columns">
          <div class="column">
            <p>A <i>gear range</i> refers to the difference between the highest and lowest gears. You can calculate gear range using the following formula:</p>
          </div>
          <div class="column has-text-centered">
            <p class="is-italic is-size-4">
              (min. gear ratio / max gear ratio) * 100 = <b>gear range</b>
            </p>
          </div>
        </div>
      </article>
    </div>

    <div class="section">
      <h3 class="title is-5">Choosing Gearing</h3>
      <article class="tile is-12 mb-3">
        <div class="content">
          <p>
            How do we choose gearing that will allow us to go fast enough, while still being able to go slow enough to climb steep hills?
            In general, you should choose a low gear with a ratio of less than 1, and a high gear with a ratio greater than about 3.5.
            However, there aren't any strict rules about this, and you should experiment and choose what you think will work best for you.
          </p>
          <p>A few thoughts:</p>
          <ul>
            <li>If you are racing on a light carbon or aluminum road bike, you would generally want higher gearing so you can go faster!</li>
            <li>If you are touring or commuting with lots of groceries or camping gear, you will want lower gearing.</li>
            <li>If you find that you often struggle to climb hills, you might want to consider choosing a bike with a lower gear ratio.</li>
            <li>If you love speeding down hills, and are frustrated when pedalling doesn't make you go any faster, you would enjoy a higher gear.</li>
          </ul>
          <p>
            Reading articles online is great, but the best way to figure out what gearing is best for you is to ride your current bike (or borrow a friend's).
            Shift into the lowest gear - could you make it up a steep hill comfortably? Now shift into the highest gear and speed up, can you reach a good speed? Or do you 'top out'?
          </p>
          <p>Once you have tested out a bike in person, come back to this website and experiment with different cassette and chainring values and hopefully you will find what works best for you.</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import ComputeGearRatio from "@/components/calculation/gear_ratio/mixins/ComputeGearRatio";
import _ from 'lodash';

export default {
  name: "LearnGearRatio",
  mixins: [ComputeGearRatio],
  data() {
    return {
      exampleFrontGear: 34,
      exampleRearGear: 11,
      exampleGearOptions: _.range(1, 51, 1)
    }
  }
}
</script>

<style scoped lang="scss">
  #equals {
    font-size: 3rem;
  }

  .vertical-center {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  #example-tile {
    background-image: linear-gradient(to bottom right, #00afb5 , #00797d);
  }

  .subtitle:not(:last-child) {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: .2rem;
  }

  .subtitle:not(:first-child) {
    margin-top: 1rem;
  }

  .image > img {
    border-radius: 4px;
  }
</style>
