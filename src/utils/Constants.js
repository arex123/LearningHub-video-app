const API_KEY = "AIzaSyCbxjTsA6mfiUc-c9UqhevjxTIT4I6zVpk"

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;
export const YOUTUBE_VIDEO_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key="+API_KEY;


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="
// export const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=aditya&type=video&key="+API_KEY;
// export const YOUTUBE_SEARCH_API = "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";