import React from 'react';
import forestUrl from 'url:../../web/assets/images/forest.jpg';
import lakeUrl from 'url:../../web/assets/images/lake.jpg';
import balloonUrl from 'url:../../web/assets/images/balloon.jpg';



const One = () => (
  <div className="tabs">
    <input id="tab-1" type="radio" name="tabgroupB" defaultChecked />
    <label className="pseudo button toggle" htmlFor="tab-1">
      Forest
    </label>
    <div className="tab">
      <img alt="forrest" src={forestUrl} />
    </div>

    <input id="tab-2" type="radio" name="tabgroupB" />
    <label className="pseudo button toggle" htmlFor="tab-2">
      Lake
    </label>
    <div className="tab">
      <img alt="lake" src={lakeUrl} />
    </div>

    <input id="tab-3" type="radio" name="tabgroupB" />
    <label className="pseudo button toggle" htmlFor="tab-3">
      Balloon
    </label>
    <div className="tab">
      <img alt="balloon" src={balloonUrl} />
    </div>
  </div>
);

const Two = () => (
  <div className="tabs">
    <input id="tabC-1" type="radio" name="tabgroupC" defaultChecked />
    <label className="pseudo button toggle" htmlFor="tabC-1">1</label>
    <div className="tab card">
      <header>
        <h3>Super important notice!</h3>
      </header>
      <p>Thank you for registering! By doing so you agree to the <a href="#">Terms and conditions</a></p>
      <footer>
        <label className="button" htmlFor="tabC-2">Agree</label>
      </footer>
    </div>
    <input id="tabC-2" type="radio" name="tabgroupC" />
    <label className="pseudo button toggle" htmlFor="tabC-2">2</label>
    <div className="tab card">
      <header>
        <h3>Your basic data</h3>
      </header>
      <section>
        <label>
          <input type="text" placeholder="Full Name" />
        </label>
      </section>
      <section>
        <select>
          <option>Where did you find us?</option>
          <option>Facebook</option>
          <option>Twitter</option>
          <option>Linkedin</option>
        </select>
      </section>
      <footer>
        <label className="button" htmlFor="tabC-3">Next</label>
        <label className="button dangerous" htmlFor="tabC-1">Back</label>
      </footer>
    </div>

    <input id="tabC-3" type="radio" name="tabgroupC" />
    <label className="pseudo button toggle" htmlFor="tabC-3">3</label>
    <div className="tab card">
      <header>
        <h3>Create account</h3>
      </header>
      <form>
        <section>
          <label>
            <input type="email" placeholder="Email" />
          </label>
        </section>
        <section>
          <label>
            <input type="password" placeholder="Password" />
          </label>
        </section>
      </form>
      <footer>
        <button className="success">Finish!</button>
        <label className="button dangerous" htmlFor="tabC-2">Back</label>
      </footer>
    </div>
  </div>
);

const Three = () => (
  <div className="tabs">
    <input id="tabA-1" type="radio" name="tabgroupA" defaultChecked />
    <label className="button toggle" htmlFor="tabA-1">Tab 1</label>
    <div className="tab">
      <h3>This is the first tab</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    <input id="tabA-2" type="radio" name="tabgroupA" />
    <label className="button toggle" htmlFor="tabA-2">Tab 2</label>
    <div className="tab">
      <h3>This is the second tab</h3>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
    </div>
  </div>
);

const Four = () => (
  <div className="tabs">
    <input id="tabD-1" type="radio" name="tabgroupD" defaultChecked />
    <label className="pseudo button toggle" htmlFor="tabD-1">•</label>
    <section className="tab">
      <h2>This is the first tab</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>

    <input id="tabD-2" type="radio" name="tabgroupD" />
    <label className="pseudo button toggle" htmlFor="tabD-2">•</label>
    <section className="tab">
      <h2>This is the second tab</h2>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
    </section>

    <input id="tabD-3" type="radio" name="tabgroupD" />
    <label className="pseudo button toggle" htmlFor="tabD-3">•</label>
    <section className="tab">
      <h2>This is the third tab</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>

    <input id="tabD-4" type="radio" name="tabgroupD" />
    <label className="pseudo button toggle" htmlFor="tabD-4">•</label>
    <section className="tab">
      <h2>This is the fourth tab</h2>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
    </section>
    <input id="tabD-5" type="radio" name="tabgroupD" />
    <label className="pseudo button toggle" htmlFor="tabD-5">•</label>
    <section className="tab">
      <h2>This is the fifth tab</h2>
      <p>
        To illustrate that we can have more than 4 tabs
      </p>
    </section>

  </div>
);

const Five = () => (
  <div className="tabs">
    <input name="tabs-a" type="radio" id="tab-1a" defaultChecked />
    <label htmlFor="tab-1a" className="pseudo button toggle">Orange</label>
    <section className="card tab">
      <h1>Orange</h1>
      <p>The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae</p>
      <p>The fruit of the Citrus × sinensis is considered a sweet orange, whereas the fruit of the Citrus × aurantium is considered a bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.</p>
    </section>

    <input name="tabs-a" type="radio" id="tab-2a" />
    <label htmlFor="tab-2a" className="pseudo button toggle">Tangerine</label>
    <section className="card tab">
      <h1>Tangerine</h1>
      <p>The tangerine (Citrus tangerina) is an orange-colored citrus fruit that is closely related to, or possibly a type of, mandarin orange (Citrus reticulata).</p>
      <p>The name was first used for fruit coming from Tangier, Morocco, described as a mandarin variety. Under the Tanaka classification system, Citrus tangerina is considered a separate species.</p>
    </section>

    <input name="tabs-a" type="radio" id="tab-3a" />
    <label htmlFor="tab-3a" className="pseudo button toggle">Clemantine</label>
    <section className="card tab">
      <h1>Clemantine</h1>
      <p>A clementine (Citrus ×clementina) is a hybrid between a mandarin orange and a sweet orange, so named in 1902. The exterior is a deep orange colour with a smooth, glossy appearance. Clementines can be separated into 7 to 14 segments. Similarly to tangerines, they tend to be easy to peel.</p>
    </section>
  </div>
);

const Six = () => (
  <div className="tabs">
    <input name="tabs-b" type="radio" id="tab-1b" defaultChecked />
    <label htmlFor="tab-1b" className="pseudo button toggle">Orange</label>
    <div className="tab">
      <h1>Orange</h1>
      <p>The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae</p>
      <p>The fruit of the Citrus × sinensis is considered a sweet orange, whereas the fruit of the Citrus × aurantium is considered a bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.</p>
    </div>

    <input name="tabs-b" type="radio" id="tab-2b" />
    <label htmlFor="tab-2b" className="pseudo button toggle">Tangerine</label>
    <div className="tab">
      <h1>Tangerine</h1>
      <p>The tangerine (Citrus tangerina) is an orange-colored citrus fruit that is closely related to, or possibly a type of, mandarin orange (Citrus reticulata).</p>
      <p>The name was first used for fruit coming from Tangier, Morocco, described as a mandarin variety. Under the Tanaka classification system, Citrus tangerina is considered a separate species.</p>
    </div>

    <input name="tabs-b" type="radio" id="tab-3b" />
    <label htmlFor="tab-3b" className="pseudo button toggle">Clemantine</label>
    <div className="tab">
      <h1>Clemantine</h1>
      <p>A clementine (Citrus ×clementina) is a hybrid between a mandarin orange and a sweet orange, so named in 1902. The exterior is a deep orange colour with a smooth, glossy appearance. Clementines can be separated into 7 to 14 segments. Similarly to tangerines, they tend to be easy to peel.</p>
    </div>
  </div>
);

export default () => (
  <div className="container">
    <h2>Simple CSS only Tabs</h2>
    <p />
    <h3>Tabs can contain images and forms</h3>
    <div className="flex one two-600 align-top">
      <One />
      <Two />
    </div>
    <h3>Tab controls (switchers) can be styled</h3>
    <div className="flex one two-600 align-top">
      <Three />
      <Four />
    </div>
    <h3>Tabs can contain cards or not</h3>
    <div className="flex one two-600 align-top">
      <Five />
      <Six />
    </div>
  </div>
);
