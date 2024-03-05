let y = new Date().getFullYear()
let m = new Date().getMonth() + 1
let d = new Date().getDate()
document.querySelector(".date").innerHTML = `${y}-${m}-${d}`
let url = `http://api.aladhan.com/v1/calendarByCity/${ y }/${ m }?city=&country=${ se.value }&method=1`
se.addEventListener( "change", () =>
{
  url = `http://api.aladhan.com/v1/calendarByCity/${ y }/${ m }?city=&country=${ se.value }&method=1`
  console.log( url )
  req()
} )

function req ()
{
  axios.get( url )
  .then( function ( r )
  {
    let timing = r.data.data[0].timings;
    document.getElementById("Fajr").innerHTML = timing.Fajr.split(" ")[0]
    document.getElementById("Sunrise").innerHTML = timing.Sunrise.split(" ")[0]
    document.getElementById("Dhuhr").innerHTML = timing.Dhuhr.split(" ")[0]
    document.getElementById("Asr").innerHTML = timing.Asr.split(" ")[0]
    document.getElementById("Maghrib").innerHTML = timing.Maghrib.split(" ")[0]
    document.getElementById("Isha").innerHTML = timing.Isha.split(" ")[0]
  } );
}
req()