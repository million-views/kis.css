import React from 'react';

const One = () => (
  <div className="full half-600 third-800">
    <article className="card">
      <img alt="forest" src="assets/images/forest.jpg" />
      <section>This is a nice forest. What do you want to do with it?</section>
      <footer>
        <button>Enjoy</button>
        <button className="dangerous">Go away</button>
      </footer>
    </article>
  </div>
);

const Two = () => (
  <div className="full half-600 third-800">
    <article className="card">
      <header>
        <h3>A more elaborate card</h3>
      </header>
      <section><code>It has some text</code></section>
      <footer>
        And even a footer! Oh, dear lord. What next?
      </footer>
    </article>
    <div>
      <article className="card">
        <p>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
      </article>
    </div>
  </div>
);

const Three = () => (
  <div className="full half-600 third-800">
    <article className="card">
      <header>
        <h1>Header 1</h1>
      </header>
    </article>
    <article className="card">
      <header>
        <h2>Header 2</h2>
      </header>
    </article>
    <article className="card">
      <header>
        <h3>Header 3</h3>
      </header>
    </article>
    <article className="card">
      <header>
        <h4>Header 4</h4>
      </header>
    </article>
  </div>
);

const Row = () => (
  <div className="card">
    <p>This is a one line card</p>
  </div>
);

export default () => (
  <div className="container">
    <h2>Card</h2>
    <p />
    <div className="flex three">
      <One />
      <Two />
      <Three />
    </div>
    <Row />
  </div>
);
