import React from 'react';

export default () => (
  <div className="container">
    <h2>Modal</h2>
    <p>
      <label htmlFor="modal-test" className="button">
        Show modal
      </label>
    </p>
    <div className="modal">
      <input id="modal-test" type="checkbox" />
      <label htmlFor="modal-test" className="overlay" />
      <article className="card">
        <header>
          <h3>Great offer</h3>
          <label htmlFor="modal-test" className="close">×</label>
        </header>
        <section>
          We have a special offer for you. I am sure you will love it!
          However this does look spammy...
        </section>
        <footer>
          <a className="button" href="#">See offer</a>
          <label htmlFor="modal-test" className="button dangerous">
            Cancel
          </label>
        </footer>
      </article>
    </div>
  </div>
);
