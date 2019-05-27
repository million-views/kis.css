import React from 'react';

export default () => (
  <div className="container">
    <h2>Flex Layout</h2>
    <p />
    <h3>Mobile first layout is default</h3>
    <div className="flex two four-600 six-800 demo">
      <div><span>1</span></div>
      <div><span>2</span></div>
      <div className="full half-600 third-800"><span>3</span></div>
      <div><span>4</span></div>
      <div><span>5</span></div>
      <div><span>6</span></div>
      <div><span>7</span></div>
      <div><span>8</span></div>
      <div><span>9</span></div>
      <div className="off-half off-fourth-600 off-sixth-800">
        <span>10</span>
      </div>
    </div>
    <h3>Content can be centered</h3>
    <div className="flex three justify-center demo">
      <div><span>1</span></div>
      <div><span>2</span></div>
      <div><span>3</span></div>
      <div><span>4</span></div>
      <div><span>5</span></div>
    </div>
  </div>
);
