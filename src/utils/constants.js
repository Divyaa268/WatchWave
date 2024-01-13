
const GOOGLE_API_KEY = "AIzaSyBKaH0FX4qdUWEiUPY0uuE0waupyqWC8H4";

export const YOUTUBE_POPULAR_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 20;



// let name = {
//     first: "Akshay",
//     last: "Saini",
// }

// let printFullName = function(hometown, state) {
//     console.log(this.first + " " + this.last + " from" + hometown + ", " + state);
// }

// printFullName.call(name, "Dehradun", "Uttrakhand");

// printFullName.apply(name, ["Dehradun", "Uttrakhand"]);

// let printMyName = printFullName.bind(name, "Dehradun", "Uttrakhand");
// console.log(printMyName);
// printMyName();