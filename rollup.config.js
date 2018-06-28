import babel from "rollup-plugin-babel";

export default {
  input: "src/ReactBeaconFullsteak.js",
  output: {
    file: "index.js",
    format: "umd",
    name: "ReactBeaconFullsteak"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ]
};
