import { changeScale, defaultScale } from './scripts/scales.js';
import {
  setBgColor,
  drawSketch,
  eraser,
  changeMode,
  setColorHistory,
} from './scripts/draw.js';

const sketch = document.getElementById('sketch');
const scaleOptions = document.getElementById('scales');
const penModes = document.getElementById('modes');
const bgColor = document.getElementById('color-background');
const colorPaletteTag = document.getElementById('color-palette');
const colorPenTag = document.getElementById('color-pen');

const clearBtn = document.getElementById('clear-sketch');
const gridBtn = document.getElementById('show-grid');

// DRAW / BACKGROUND / SCALES EVENTS
let penMode = 'draw';

setBgColor(sketch, bgColor.value);
defaultScale(sketch);

const handleDraw = (e) => {
  if (penMode === 'draw') {
    const color = document.getElementById('color-pen').value;
    drawSketch(e.target, color);
  } else if (penMode === 'eraser') {
    eraser(e.target);
  }
};

sketch.addEventListener('pointerdown', () => {
  sketch.addEventListener('pointermove', handleDraw);

  sketch.addEventListener('pointerup', () =>
    sketch.removeEventListener('pointermove', handleDraw)
  );
});
sketch.addEventListener('pointerdown', handleDraw);

bgColor.addEventListener('change', (e) => setBgColor(sketch, e.target.value));
penModes.addEventListener('click', (e) => (penMode = changeMode(e)));
scaleOptions.addEventListener('click', changeScale);

clearBtn.addEventListener('click', () => {
  const sketchDots = sketch.childNodes;
  for (const node of sketchDots) node.style.backgroundColor = 'transparent';
});
gridBtn.addEventListener('click', () => {
  const sketchDots = document.querySelectorAll('.sketch-dot');

  for (const sketchDot of sketchDots)
    sketchDot.classList.toggle('sketch-dot-border');
});

// COLOR HISTORY EVENTS
colorPenTag.addEventListener('change', (e) =>
  setColorHistory(e, colorPaletteTag)
);

const setColorPen = (target) => {
  const dataColor = target.dataset.bgColor;

  colorPenTag.value = dataColor;
};

// colorPickerTag.addEventListener('click', copyColor);
colorPaletteTag.addEventListener('click', (e) => {
  if (e.target.className === 'color-container') return;

  const dataColor = e.target.dataset.bgColor;
  if (dataColor) setColorPen(e.target);
});
