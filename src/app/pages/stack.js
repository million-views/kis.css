import React from 'react';

// TODO: move to tiny?
const handler = (ref) => {
  return (e) => {
    // console.log(e);
    const reader = new FileReader();
    reader.onloadend = () => {
      // console.log(ref.current.style);
      ref.current.style.backgroundImage = `url(${reader.result})`;
    };
    reader.readAsDataURL(e.target.files[0]);
  };
};

const ButtonStack = () => (
  <>
    <h3>Buttons stack</h3>
    <p />
    <div className="flex two four-800">
      <div>
        <span className="stack button icon-puzzle">Plugins</span>
        <span className="stack button icon-picture">Demo</span>
        <span className="stack button icon-spin-1 spin">I can spin</span>
      </div>
      <div>
        <label className="stack">
          <input type="radio" name="stack" defaultChecked />
          <span className="button toggle icon-videocam">Record</span>
        </label>
        <label className="stack">
          <input type="radio" name="stack" />
          <span className="button toggle icon-play">Play</span>
        </label>
        <label className="stack">
          <input type="radio" name="stack" />
          <span className="button toggle icon-stop">Stop</span>
        </label>
      </div>
      <div>
        <label className="stack">
          <input type="checkbox" defaultChecked />
          <span className="button toggle icon-login">Login</span>
        </label>
        <label className="stack">
          <input type="checkbox" defaultChecked />
          <span className="button toggle icon-logout">Logout</span>
        </label>
        <label className="stack">
          <input type="checkbox" />
          <span className="button toggle icon-cog">Settings</span>
        </label>
      </div>
      <div>
        <span className="stack pseudo button icon-paper-plane">Activate</span>
        <span className="stack pseudo button icon-mobile">Mobile</span>
        <span className="stack pseudo button icon-list">List</span>
      </div>
    </div>
  </>
);

const ImageStack = () => (
  <>
    <h3>Image stack</h3>
    <p />
    <div className="flex two four-800">
      <div>
        <img className="stack" alt="forest" src="assets/images/forest.jpg" />
        <a className="stack button">Forest</a>
      </div>
      <div>
        <img className="stack" alt="balloon" src="assets/images/balloon.jpg" />
        <a className="stack button">Balloon</a>
      </div>
      <div>
        <img className="stack" alt="lake" src="assets/images/lake.jpg" />
        <a className="stack button">Lake</a>
      </div>
      <div>
        <img className="stack" alt="halong" src="assets/images/halong.jpg" />
        <a className="stack button">Halong bay</a>
      </div>
    </div>
  </>
);

const FormStack = () => {
  const fileA = React.createRef();
  const fileB = React.createRef();
  const fileC = React.createRef();

  return (
    <>
      <h3 id="stack-test">Form stack</h3>
      <p />
      <form>
        <div className="flex one two-600 four-800">
          <div>
            <label aria-describedby="stack-test">
              <input className="stack" placeholder="Name" />
            </label>
            <label aria-describedby="stack-test">
              <input className="stack" type="email" placeholder="Email" />
            </label>
            <label aria-describedby="stack-test">
              <input className="stack" type="password" placeholder="Password" />
            </label>
          </div>
          <div>
            <select className="stack" aria-describedby="stack-test">
              <option>Select an option</option>
              <option>Good option</option>
              <option>Nice option</option>
              <option>Cheap option</option>
            </select>
            <select className="stack" aria-describedby="stack-test">
              <option>Select an option</option>
              <option>Good option</option>
              <option>Nice option</option>
              <option>Cheap option</option>
            </select>
            <select className="stack" aria-describedby="stack-test">
              <option>Select an option</option>
              <option>Good option</option>
              <option>Nice option</option>
              <option>Cheap option</option>
            </select>
          </div>
          <div>
            <textarea aria-describedby="stack-test" className="stack" placeholder="Textarea" />
            <textarea aria-describedby="stack-test" className="stack" placeholder="Textarea" />
            <textarea aria-describedby="stack-test" className="stack" placeholder="Textarea" />
          </div>
          <div>
            <label ref={fileA} onChange={handler(fileA)} className="dropzone stack" aria-describedby="stack-test">
              <input name="filea" title="Drop image or click me" type="file" />
            </label>
            <label ref={fileB} onChange={handler(fileB)} className="dropzone stack" aria-describedby="stack-test">
              <input name="filea" title="Drop image or click me" type="file" />
            </label>
            <label ref={fileC} onChange={handler(fileC)} className="dropzone stack" aria-describedby="stack-test">
              <input name="filea" title="Drop image or click me" type="file" />
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default () => (
  <div className="container">
    <h2>Stack</h2>
    <p />
    <ButtonStack />
    <ImageStack />
    <FormStack />
  </div>
);
