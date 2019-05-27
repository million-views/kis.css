import React from 'react';
const backgroundImage = 'assets/images/forest.jpg';

/**
 * See:
 * - https://reactjs.org/docs/dom-elements.html
 * - https://stackoverflow.com/questions/39260595/event-handlers-in-react-stateless-components
 * - https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
 * - http://codelikethis.com/lessons/react/using-refs
 * - https://stackoverflow.com/questions/39597804/how-i-can-use-refs-to-change-styling-class-in-reactjs
 * - https://stackoverflow.com/questions/14226511/how-can-one-change-the-background-image-of-a-label-using-css-with-javascript
 * - https://stackoverflow.com/questions/44030645/are-arrow-functions-faster-more-performant-lighter-than-ordinary-standalone-f
 */

/* <script>
  window.onload = function(){
    [].forEach.call(document.querySelectorAll('.dropzone'), function (img) {
      img.onchange = function (e) {
        var inputfile = this, reader = new FileReader();
        reader.onloadend = function () {
          inputfile.style['background-image'] = 'url(' + reader.result + ')';
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  };
</script> */

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

const One = () => {
  const file = React.createRef();
  const changeImage = handler(file);

  return (
    <div>
      <label ref={file} className="dropzone" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <input onChange={changeImage} name="filea" title="Drop image or click me" type="file" />
      </label>
    </div>
  );
};

const Two = () => {
  const file = React.createRef();
  const changeImage = handler(file);
  return (
    <div>
      <label ref={file} className="dropzone">
        <input onChange={changeImage} name="fileb" title="Drop image or click me" type="file" />
      </label>
    </div>
  );
};

const Three = () => {
  const file = React.createRef();
  const changeImage = handler(file);

  return (
    <div>
      <label ref={file} className="dropzone">
        <input onChange={changeImage} name="filec" title="Drop image or click me" type="file" />
      </label>
    </div>
  );
};

export default () => (
  <div className="container">
    <h2>Dropzone</h2>
    <p />

    <div className="flex three">
      <One />
      <Two />
      <Three />
    </div>
  </div>
);
