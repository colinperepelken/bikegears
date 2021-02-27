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
                          <select>
                            <option>34T</option>
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
                          <select>
                            <option>11T</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="column vertical-center" id="equals">
                    =
                  </div>

                  <div class="column vertical-center">
                    <p>A gear ratio of <b>34:11</b> or <b>{{3.09}}</b></p>
                  </div>

                  <div class="column is-full">
                    <p>One complete rotation of the crank will cause the rear wheel to rotate <b>3.09</b> times</p>
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
      <h3 class="title is-5">What is a Cassette</h3>
      <article class="tile is-12 mb-3">
        <div class="content">
          <p>A cassette (or freewheel) is mounted on the center of the rear wheel of a bicycle.</p>
        </div>
      </article>
    </div>

    <div class="section">
      <h3 class="title is-5">What is a Chainring</h3>
    </div>

    <div class="section">
      <h3 class="title is-5">What is gear range?</h3>
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
          <p>Once you have tested out a bike in person, come back to this website and experiment with different cassette and chainrings values and hopefully you will find what works best for you.</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearnGearRatio"
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
</style>
