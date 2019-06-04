const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoader = (cssModule, localIdentName = undefined) => {
  return {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      modules: cssModule,
      importLoaders: 1,
      localIdentName,
    }
  };
};

// Keep each export to a single test
module.exports = (wpc) => {
  const test = /\.(css|scss)$/;
  const plugins = [];
  const appCss = [];

  // NOTE:
  // - chunks are from imported css files in java script
  // - and filenames are entries listed in 'entry' of webpack
  // - you will need to evaluate the tradeoffs in using a hash
  //   in the resulting file name fromr either of these sources
  // - not using a hash allows you to publish to a website without
  //   accumulating past released cruft but also puts the burden
  //   of cache busting on you.
  // - in our case being able to deploy and revert using git is
  //   important so we chose not to use hash.
  // - the hash may actually work against you when using service
  //   workers; thus it is only helpful for simple deployments
  // - a hash is a simple solution for cache busting; however
  //   versioning and cache management are for more complex and
  //   thus need more systems thinking than to accept the simple
  //   solution without understanding the requirements in detail.
  plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
      // filename: '[name].[hash].css',
      // chunkFilename: '[name].[hash].css'
    })
  );
  // last step in the pipeline is minification and extraction of css
  appCss.push({
    loader: MiniCssExtractPlugin.loader,
    options: {
      // only enable hot in development
      hmr: !wpc.isProd,
      // if hmr doesn't work, uncomment next line to use force
      // reloadAll: true
    }
  });

  appCss.push(cssLoader(false, '[local]-[hash:base64:5]'));

  // NOTE: loaders are chained last-in-first-out (i.e right to left)
  appCss.push({
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      includePaths: [wpc.app, wpc.lib]
    }
  });

  return {
    module: {
      rules: [
        {
          test,
          exclude: /node_modules/,
          use: appCss
        },
      ]
    },
    plugins
  };
};
