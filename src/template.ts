function getPlayerColor(playerNumber: 1 | 2) {
  if (playerNumber === 1) {
    return "red";
  }
  return "yellow";
}

// eslint-disable-next-line import/prefer-default-export
export { getPlayerColor };
