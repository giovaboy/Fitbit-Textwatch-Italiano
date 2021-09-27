// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function toLower(input) {
  return input.toLowerCase();
}

export function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

export function changeFontSize(el, delta) {
    if (el.style.fontSize) {
      let a = el.style.fontSize;
      //console.log(a);
      a += delta;
      el.style.fontSize = a;
    }
}
