const quotes = [
"Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill" ,
    "Believe you can and you're halfway there. - Theodore Roosevelt" ,
    "The expert in anything was once a beginner. - Helen Hayes" ,
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar" ,
    "The beautiful thing about learning is that no one can take it away from you. - B.B. King" ,
    "Learning never exhausts the mind. - Leonardo da Vinci" ,
    "A goal without a plan is just a wish.  Antoine de Saint-Exupéry" ,
    "Don't let yesterday take up too much of today. - Will Rogers" ,
    "I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey"
    
];

const images = [
 "https://m.media-amazon.com/images/I/81vDy9WRB-L._AC_SL1500_.jpg",   
"https://m.media-amazon.com/images/I/51BhJ5zn1dL.jpg",
"https://gosharpener.com/content/uploads/photos/2024/07/sngine_35e689ba5c2fbfa7e47c0abe832d97c4.png",
"https://www.azquotes.com/picture-quotes/quote-the-expert-at-anything-was-once-a-beginner-helen-hayes-130-67-57.jpg",
"https://developingsuperleaders.wordpress.com/wp-content/uploads/2020/09/3..jpg?w=640",
"https://www.azquotes.com/picture-quotes/quote-the-beautiful-thing-about-learning-is-nobody-can-take-it-away-from-you-b-b-king-15-86-26.jpg",
"https://media.licdn.com/dms/image/v2/D5622AQEZx-cSGKeZ1g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1704261359842?e=2147483647&v=beta&t=ZpXhVi8FRo3sv5pyiiIVpoHdZjcqQ8QRx6eFlxEvMZY",
"https://media.gettyimages.com/id/515164192/pt/foto/antoine-de-saint-exupery-probably-best-remembered-as-the-author-of-le-petite-prince-in-english.jpg?s=612x612&w=gi&k=20&c=RqlXqp_aNmxi81LumdKltXqN5IJpkVLM10CvitzjDiY=",
"https://miro.medium.com/v2/resize:fit:480/0*uR2p9yfRLg3279So.jpg",
"https://media.licdn.com/dms/image/v2/C5112AQGw5syZ6MqlAw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520106863796?e=2147483647&v=beta&t=RsYY8HqabyG1f3m8lOUdh_g2HeN1pY-Lk_1GRYRqT6U"
];
const quoteElement = document.getElementById("quote");
const imgElement = document.getElementById("quote-img");

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const randomImage = images[randomIndex];
    
    quoteElement.textContent = randomQuote;
    imgElement.src = randomImage;
}

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateQuote);