//export const moonIcons = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
/*
   https://ecomaan.nl/javascript/moonphase/
   Moonphase approximation in Javascript by Pieter Suurmond, january 3, 2020.
   Input must be a Javascript Date; output is a floating point number between 0
   and 1 (exclusive), where a value about 0.5 indicates a full moon.
*/
export default function moonPhase(date)
{
    // A recent new moon occured on december, 26, 2019 = 18256 days since 1970.
    // An average synodic month takes 29 days, 12 hours, 44 minutes, 3 seconds.

    var days_after_new_moon = (date.getTime() / 86400000) - 18256.8;
    var synodic_month = 29.53059;
    var m = Math.abs(days_after_new_moon / synodic_month);         // Must be +.
    return (m - Math.floor(m)); // Fractional part = moonphase from 0 to 1 (ex).
}