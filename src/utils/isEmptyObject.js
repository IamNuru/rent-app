const isEmptyObject = (obj) => {
  if (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  ) {
    return true;
  } else {
    return false;
  }
};

export default isEmptyObject;
