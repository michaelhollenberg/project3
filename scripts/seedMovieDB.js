const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/movielist",
    
  { useMongClient: true }
);

const movieSeed = [
  {
    title: "Kung FU Hustle",
    year: "2004",
    synopsis: "The film follows a wannabe-gangster as he joins the mob gang in town and residents of a housing complex defend their turf with their own extra-ordinary powers. Funny, innovative visuals and some very inventive action set pieces in the climax will ensure you have a blast!", 
    image: "https://www.bing.com/th?id=OIP.lMcv1RVsO1tyEo28bNzQwwHaE0&w=186&h=121&c=7&o=5&dpr=2&pid=1.7"
    
  },
  {
    title: "Fight Club",
    year: "2000",
    synopsis: "This masterpiece  by David Fincher is not the most convenient films to watch the first time. Be prepared to be bowled over the magical duo of Edward Norton and Brad Pitt. Rule no. 1 - watch it high, and you'll like the striking visuals even more than usual.", 
    image: "https://www.bing.com/th?id=OIP.FmbqXP45qlGYDcCbHTjdJAHaEv&w=234&h=160&c=7&o=5&dpr=2&pid=1.7"
    
  },
  {
    title: "Interstellar",
    year: "2014",
    synopsis: "The stoner's favourite filmmaker. Everything was hunky dory in Interstellar till the last half an hour when they start zooming through Quantum Physics and concepts like singularity, gravitational constant and slow passage of time - left everyone in a dizzy. Watching it high might actually help you focus on the essentials, and you might actually make sense of it.", 
    image: "https://www.bing.com/th?id=OIP.Ww5w73XmqwEGJI4TDobnogHaEK&w=210&h=160&c=7&o=5&dpr=2&pid=1.7"
    
  },
  {
    title: "Memento",
    year: "1999",
    synopsis: "The movie with which Nolan began turning heads towards his work. In a bid to explain the movie, I could simply say the film runs backwards, however that would be shortchanging the logic and the impact of the film. Sure to blow your mind when you're watching it intoxicated, only ever slightly.", 
    image: "https://www.bing.com/th?id=OIP.NYe24KWjbTiDEqxJgl1HGQHaE8&w=269&h=177&c=7&o=5&dpr=2&pid=1.7"
    
  },
  {
    title: "Donnie Darko",
    year: "2001",
    synopsis: "Jake Gylenhall's breakthrough film, it follows the life of an awkward and slightly oddball teenager. One night he meets a 'bunny', who tells him  that the world is going to end in 28 days. The narrative is kinda' spaced out and that's a good thing if you're watching it while you're high.", 
    image: "https://www.bing.com/th?id=OIP.xy_6fy2XJNxxS6ShB0nvAwHaE9&w=249&h=166&c=7&o=5&dpr=2&pid=1.7"
    
  },
  {
    title: "Inception",
    year: "2010",
    synopsis: "Known for his complex films, Nolan made this film on heists happening in a dream state. Subjected to a lot of criticism for it's convoluted logic - it might be just the perfect movie to watch when you're in a semi-dream state.", 
    image: "https://www.bing.com/th?id=OIP.XRIACtdVCZLptVO8S3-9TgHaFH&w=198&h=160&c=7&o=5&dpr=2&pid=1.7"
    
  },
  {
    title: "Enter the Void",
    year: "2009",
    synopsis: "Directed by Gasper Noe, this film made the whole psychedelic trip more accessible to India. It follows a drug dealer as his spirit floats over Tokyo and he re-examines life. The director was on mushrooms when he wrote the film.", 
    image: "https://www.bing.com/th?id=OIP.DIrY33kXblY6yxJRB--gaQHaEK&w=233&h=160&c=7&o=5&dpr=2&pid=1.7"
    
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: "2004",
    synopsis: "Starring an unconventional pair of Jim Carrey and Kate Winslet, the movie deals with a man seeking help to get over a failed relationship. The movie is inventive in its approach towards addressing heartbreak and moving on, and it takes quite a few twist and turns. Some of the plot devices might zonk you out while sober, being high while watching might help you laugh at the randomness of it.", 
    image: "https://soreike.files.wordpress.com/2013/07/eternal-sunshine-of-the-spotless-mind-1.jpg"
    
  },
  {
    title: "Batman & Robin",
    year: "1997",
    synopsis: "This film shut DC down for 7 years, after which they decided to reboot it afresh with Chris Nolan in 2004. This debacle made by Joel Schumacher actually has some entertaining spangled outfits, Clooney's teeth, Arnold's frozen expression as he plays Mr. Freeze, a lot of fun for a night out drinking with friends.", 
    image: "https://velvetcurtainreviews.files.wordpress.com/2012/07/batman-and-robin-1997-movie-cover1.jpg"
    
  },

  {
    title: "Videodrome",
    year: "1983",
    synopsis: "When he acquires a different kind of show for his station, a sleazy cable-TV programmer begins to see his life and the future of media spin out of control in a terrifying new reality.", 
    image: "https://www.bing.com/th?id=OIP.rQDeh1KbPL3SPuZPAI1f_QHaFp&w=286&h=218&c=7&o=5&dpr=2&pid=1.7"
    
  },
  {
    title: "Friday",
    year: "1995",
    synopsis: "Two homies, Smokey and Craig, smoke a dope dealer's weed and try to figure a way to get the $200 they owe to the dealer by 10 p.m. that same night.", 
    image: "https://www.bing.com/th?id=OIP.0tuqHbOROSCAbheA7gCpcAHaE4&w=282&h=183&c=7&o=5&dpr=2&pid=1.7"
    
  },
  {
    title: "Hell Comes to Frogtown",
    year: "1988",
    synopsis: "After a nuclear war, the survivors are divided between horribly mutated beings who live on desolate reservations and fertile women who are searching for scarce virile men in order to multiply and start a new human society.", 
    image: "https://i.ytimg.com/vi/mh8UgsSov8A/maxresdefault.jpg"
    
  },
  {
    title: "Pink Floyd: The Wall",
    year: "1982",
    synopsis: "A confined but troubled rock star descends into madness in the midst of his physical and social isolation from everyone.", 
    image: "https://www.bing.com/th?id=OIP.HOK0Od8GbA06fXOQk8yk6gHaGr&w=228&h=206&c=7&o=5&dpr=2&pid=1.7"
    
  },
  {
    title: "Yellow Submarine",
    year: "1968",
    synopsis: "The Beatles agree to accompany Captain Fred in his Yellow Submarine and go to Pepperland to free it from the music hating Blue Meanies.", 
    image: "http://4.bp.blogspot.com/-yu_X9iLjNwg/T9G27NdGN_I/AAAAAAAAECA/fDnNyUh6m5Y/s1600/The_Beatles_-_Yellow_Submarine-%5Bfront%5D-%5Bwww.FreeCovers.net%5D.jpg"
   
  },

];

const randomMovie = () => {
  return Math.floor(Math.random() * Math.floor(movieSeed.length));
}; 

db.Movie
  .remove({})
  .then(() => db.Movie.collection.insertOne(randomMovie))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
