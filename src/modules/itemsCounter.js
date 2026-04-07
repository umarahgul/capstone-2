// Returns the length of the node (the divs with the series class).

const itemsCounter = () => {
  const seriesElements = document.querySelectorAll('.series');

  // if (!seriesElements) {

  //     return 0;

  // }
  // if (seriesElements.length > 30) {
  //   return 'Error';
  // }
  alert(`no of items ${seriesElements.length}`);
  return seriesElements.length;
};

export default itemsCounter;