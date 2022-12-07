export const checkImage = (url) => {
  let image = new Image();
 
  image.onload = function () {
    if (this.width > 0) {
      return true
    }else{
      return false
    }
  }
  image.onerror = function () {
    console.log(this)
    return false
  }
  image.src = url;
  return true
}