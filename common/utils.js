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

export function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}
/*
export function hasClass(eli, className) {
    if (eli.classList)
        return eli.classList.contains(className);
    return !!eli.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
*/
export function addClass(eld, className) {
    if (eld.classList)
        eld.classList.add(className)
    else if (!hasClass(eld, className))
        eld.className += " " + className;
}

export function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}