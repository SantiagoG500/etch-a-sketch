const fillSketch = (className) => {
  let nOfDivs = 0;

  if (className === 'sketch-16-16') nOfDivs = 256;
  if (className === 'sketch-32-32') nOfDivs = 1024;
  if (className === 'sketch-40-40') nOfDivs = 1600;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < nOfDivs; i++) {
    const divTag = document.createElement('div');
    divTag.classList.add('sketch-dot');
    divTag.classList.add('sketch-dot-border');
    fragment.appendChild(divTag);
  }

  sketch.innerHTML = '';
  sketch.appendChild(fragment);
};

export const changeScale = (e) => {
  const target = e.target;
  const clasNameSketch = sketch.className;
  const selectedScale = target.dataset.scale;

  if (selectedScale === clasNameSketch || target.className !== 'btn') return;

  sketch.classList.replace(clasNameSketch, selectedScale);
  fillSketch(selectedScale);
};

export const defaultScale = (sketch) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 256; i++) {
    const divTag = document.createElement('div');
    divTag.classList.add('sketch-dot');
    divTag.classList.add('sketch-dot', 'sketch-dot-border');
    fragment.appendChild(divTag);
  }

  sketch.classList.add('sketch-16-16');
  sketch.appendChild(fragment);
};
