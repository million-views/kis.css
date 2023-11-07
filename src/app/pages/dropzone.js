import React from 'react';
import forestUrl from 'url:../../web/assets/images/forest.jpg';

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


// currently handles only a single file
const handler = (ref) => {
  return (e) => {
    console.log(e);
    console.log({'files': e.target.files});
    const reader = new FileReader();
    reader.onloadend = () => {
      // console.log(ref.current.style);
      ref.current.removeAttribute('data-show-selector');
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
      <label ref={file} className="dropzone" style={{ backgroundImage: `url(${forestUrl})` }}>
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
  const thumbnail = React.createRef();
  const changeImage = handler(thumbnail);
  const zone = React.createRef();

  const dropHandler = (ev) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    zone.current.files = ev.dataTransfer.files;
    // hack, knowing what changeImage does...
    changeImage({target: {files: zone.current.files}});
  }

  const dragOverHandler = (ev) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  return (
    <div>
      <label data-show-selector className="dropzone"
        onDragOver={dragOverHandler} onDrop={dropHandler}>
        <span>Drop files here</span>
        <span>or</span>
        <input 
          ref={zone} onChange={changeImage} 
          id="filec" name="filec" title="Drop image or click me" 
          type="file" 
          onInputCapture={(e) => console.log(e.target)}
        />
        <div
          style={{ backgroundImage: ""}}
          ref={thumbnail}
          className="file-upload-thumb">
        </div>
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

// TODO: drag events not working
// onloadend = () => {

//   const dropContainer = document.getElementById("drop-container")
//   const fileInput = document.getElementById("filec")
  
//   dropContainer.addEventListener("dragover", (e) => {
//     // prevent default to allow drop
//     e.preventDefault();
//   }, false);
  
//   dropContainer.addEventListener("dragenter", () => {
//     dropContainer.classList.add("drag-active");
//   });
  
//   dropContainer.addEventListener("dragleave", () => {
//     dropContainer.classList.remove("drag-active");
//   });
  
//   dropContainer.addEventListener("drop", (e) => {
//     e.preventDefault();
//     dropContainer.classList.remove("drag-active");
//     fileInput.files = e.dataTransfer.files;
//   });    
  
// }


