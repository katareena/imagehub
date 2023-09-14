export function getElementsInRow(screenSize: number) {
  if (screenSize <= 1024 && screenSize > 767) {
    return 3;
  } else if (screenSize <= 767 && screenSize > 576) {
    return 2;
  } else if (screenSize <= 576) {
    return 1;
  } else {
    return 4;
  }
}

export function getSercherHeight(screenSize: number) {
  if (screenSize <= 767 && screenSize > 576) {
    return 170;
  } else if (screenSize <= 576) {
    return 140;
  } else {
    return 180;
  }
}
