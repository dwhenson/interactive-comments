function findItem(arrayToCheck, valueToTarget, valueToCheck) {
  return arrayToCheck.find(
    (item) => String(item[valueToTarget]) === valueToCheck
  );
}

export default findItem;
