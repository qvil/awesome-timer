import { theme } from "src/styles";

// function randomColorPicker(colors: object) {
function randomColorPicker() {
  const colors = theme.color;

  const keys = Object.keys(colors);

  // tslint:disable-next-line:no-bitwise
  return colors[keys[(keys.length * Math.random()) << 0]];
}

export default randomColorPicker;
