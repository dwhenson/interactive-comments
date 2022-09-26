function addUpdatedItem(arrayToCheck, valueToTarget, updatedItem) {
  return arrayToCheck.map((item) =>
    item[valueToTarget] !== updatedItem[valueToTarget] ? item : updatedItem
  );
}

export default addUpdatedItem;
