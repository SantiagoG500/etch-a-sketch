export const setBgColor = (sketch, bgColor) =>
  (sketch.style.backgroundColor = `${bgColor}`);

export const drawSketch = (dotSketch, colorPickerValue) => {
  const target = dotSketch;
  const color = colorPickerValue;

  if (target.id === 'sketch') return;
  target.style.backgroundColor = `${color}`;
};

export const changeMode = (e) => {
  const mode = e.target.dataset.mode;
  const defaultMode = 'draw';

  if (!mode) return defaultMode;
  else return mode;
};
export const eraser = (dotSketch) => {
  dotSketch.style.backgroundColor = 'transparent';
};

let arrayColors = [];

export const setColorHistory = (e, colorHistoryTag) => {
  const color = e.target.value;
  arrayColors = [...arrayColors, color];

  const fragment = document.createDocumentFragment();
  const createColors = (arrayColors) => {
    for (const color of arrayColors) {
      const containerDiv = document.createElement('div');
      containerDiv.innerHTML = `
       <div class="color" data-bg-color="${color}" style="background-color: ${color};"></div>
     `;
      containerDiv.classList.add('color-container');
      fragment.appendChild(containerDiv);
    }
  };

  if (arrayColors.length > 40) {
    let remainingColors = arrayColors.slice(40);
    arrayColors.splice(0, remainingColors, ...remainingColors);
    arrayColors.splice(40);

    createColors(arrayColors);
  } else createColors(arrayColors);

  colorHistoryTag.innerHTML = '';
  colorHistoryTag.appendChild(fragment);
};

// export const setColorHistory = (e, colorHistoryTag) => {
//   const color = e.target.value;
//   arrayColors = [...arrayColors, color];

//   const fragment = document.createDocumentFragment();

//   for (const color of arrayColors) {
//     const containerDiv = document.createElement('div');
//     containerDiv.innerHTML = `
//        <div class="color" data-bg-color="${color}" style="background-color: ${color};"></div>
//      `;
//     containerDiv.classList.add('color-container');
//     fragment.appendChild(containerDiv);
//   }

//   colorHistoryTag.innerHTML = '';
//   colorHistoryTag.appendChild(fragment);
// };

// const iterateColors = (colors) => {
//   colors.splice(3);

//   for (const color of colors) {
//     const containerDiv = document.createElement('div');
//     containerDiv.innerHTML = `
//        <div class="color" data-bg-color="${color}" style="background-color: ${color};"></div>
//      `;
//     containerDiv.classList.add('color-container');
//     fragment.appendChild(containerDiv);
//   }
// };

// if (arrayColors.length > 3) {

//   let replaceColors = arrayColors.slice(3);

//   for (const color of replaceColors) {
//     const index = replaceColors.indexOf(color);

//     arrayColors.splice(index, 1, color);
//   }
//   replaceColors = [];

//   iterateColors(arrayColors);
// } else iterateColors(arrayColors);
