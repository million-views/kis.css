import React from 'react';

const cellType1 = {
  display: 'flex',
  flex: 1,
  alignSelf: 'stretch'
};

// const cellType2 = {
//   display: 'flex',
//   flex: 1,
//   alignSelf: 'stretch'
// };
const cellType2 = {
  // display: 'flex',
  alignSelf: 'stretch',
  justifyContent: 'center',
  alignItems: 'stretch'
};

const cellType3 = {
  display: 'flex',
  flex: 1,
  alignSelf: 'center'
};

const cellType4 = {
  display: 'flex',
  flex: 1,
  alignSelf: 'flex-end'
};

const moreFlex = () => (
  <div className="container">
    <h2>More Flex Layout</h2>
    <p />

    <h3>Basic Grids</h3>
    <p>
      The grid cells below do not specify any widths, they just naturally
      space themselves equally and expand to fit the entire row. They’re
      also equal height by default.
    </p>
    <div className="flex grow demo">
      <div>
        <div>1/2</div>
      </div>
      <div>
        <div>1/2</div>
      </div>
    </div>
    <div className="flex grow demo">
      <div>
        <div>1/3</div>
      </div>
      <div>
        <div>1/3</div>
      </div>
      <div>
        <div>1/3</div>
      </div>
    </div>
    <div className="flex grow demo">
      <div>
        <div>1/4</div>
      </div>
      <div>
        <div>1/4</div>
      </div>
      <div>
        <div>1/4</div>
      </div>
      <div>
        <div>1/4</div>
      </div>
    </div>
    <div className="flex two align-top demo">
      <div style={cellType1}>
        <div>
          Full-height, even when my content doesn't fill the space.
          Cheating a bit by using inline style. TODO: fix me!
        </div>
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          mollis velit non gravida venenatis. Praesent consequat lectus purus,
          ut scelerisque velit condimentum eu. Maecenas sagittis ante ut turpis
          varius interdum. Quisque tellus ipsum, eleifend non ipsum id,
          suscipit ultricies neque.
        </div>
      </div>
    </div>
    <h3>Individual Sizing</h3>
    <p>
      When equal widths aren’t what you want, you can add sizing classes to
      individual cells. Cells without sizing classes simply divide up the
      remaining space as normal.
    </p>
    <p>
      The cells below labeled “auto” do not have sizing classes specified.
    </p>
    <div className="flex grow demo">
      <div className="half">
        <div>1/2</div>
      </div>
      <div>
        <div>auto</div>
      </div>
      <div>
        <div>auto</div>
      </div>
    </div>
    <div className="flex grow demo">
      <div>
        <div>auto</div>
      </div>
      <div className="third">
        <div>1/3</div>
      </div>
    </div>
    {/*
      In the following example, notice that we are forced to specify how many
      cells are in the flex in order for the children's size requirements to
      be honored accurately.
    */}
    <div className="flex three grow demo">
      <div className="fourth">
        <div>1/4</div>
      </div>
      <div>
        <div>auto</div>
      </div>
      <div className="third">
        <div>1/3</div>
      </div>
    </div>
    <h3>Responsive</h3>
    <p>
      Responsive Grids work by adding media classes to the Grid cells or
      containers. When those media values are met, the grids automatically
      adjust accordingly.
    </p>
    <p>
      The cells below should be full width by default and scaled to fit
    above <code>48em</code>. Resize your browser to see them in action.
    </p>
    <div className="flex demo">
      <div className="full half-800">
        <div className="Demo">Full / Halves</div>
      </div>
      <div className="full half-800">
        <div className="Demo">Full / Halves</div>
      </div>
    </div>
    <div className="flex demo">
      <div className="full third-800">
        <div>Full / Thirds</div>
      </div>
      <div className="full third-800">
        <div>Full / Thirds</div>
      </div>
      <div className="full third-800">
        <div>Full / Thirds</div>
      </div>
    </div>
    <h3>Flex-ception</h3>
    <p>
      Flex layouts are infinitely nestable inside of other flex
      components. TODO: fix me!
    </p>
    <div className="flex grow three align-center demo">
      <div className="two-third">
        <div>
          <div className="flex two demo">
            <div className="third">
              <div>1/3</div>
            </div>
            <div className="two-third">
              <div>
                <div className="flex demo">
                  <div className="half">
                    <div>1/2</div>
                  </div>
                  <div className="half">
                    <div>1/2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third" style={cellType2}>
        <div>1/3</div>
      </div>
    </div>
    <h2>Alignment Features</h2>
    <h3>Top-aligned Grid Cells</h3>
    <div className="flex three align-top demo">
      <div>
        <div>This cell should be top-aligned.</div>
      </div>
      <div>
        <div>
          Pellentesque sagittis vel erat ac laoreet. Phasellus ac aliquet enim,
          eu aliquet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed pulvinar porta leo, eu ultricies nunc sollicitudin vitae. Curabitur
          pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget
          varius turpis, quis iaculis nibh.
        </div>
      </div>
      <div>
        <div>This cell should be top-aligned.</div>
      </div>
    </div>
    <h3>Bottom-aligned Grid Cells</h3>
    <div className="flex three align-bottom demo">
      <div>
        <div>This cell should be bottom-aligned.</div>
      </div>
      <div>
        <div>
          Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec.
          Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula
          id metus hendrerit cursus. Integer eu leo felis. Aenean commodo
          ultrices nunc, sit amet blandit elit gravida in.
        </div>
      </div>
      <div>
        <div>
          This cell should be bottom-aligned.
        </div>
      </div>
    </div>
    <h3>Vertically Centered Grid Cells</h3>
    <div className="flex three align-center demo">
      <div>
        <div>
          This cell should be vertically-centered with the cell to its right.
        </div>
      </div>
      <div>
        <div>
          Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec.
          Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id
          metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices
          nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi
          adipiscing, iaculis facilisis tellus. Nullam vel facilisis libero.
          Duis semper lobortis elit, vitae dictum erat.
        </div>
      </div>
    </div>
    <h3>Mixed Vertical Alignment</h3>
    <div className="flex four align-top demo">
      <div>
        <div>This cell should be top aligned.</div>
      </div>
      <div>
        <div>
          Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec.
          Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula
          id metus hendrerit cursus. Integer eu leo felis. Aenean commodo
          ultrices nunc, sit amet blandit elit gravida in. Sed est ligula,
          ornare ac nisi adipiscing, iaculis facilisis tellus.
        </div>
      </div>
      <div style={cellType3}>
        <div>
          This cell should be center-aligned.
        </div>
      </div>
      <div style={cellType4}>
        <div>This cell should be bottom-aligned.</div>
      </div>
    </div>
  </div>
);

export default moreFlex;
