import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios';
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const apiKey="f37f4ed02a78b618bfeb981f04a9046d"
const url ="https://api.themoviedb.org/3/movie"
const upcoming="upcoming"
const imageurl="https://image.tmdb.org/t/p/w500"
const popular="popular"
const nowplaying="now_playing"
const toprated="top_rated"


const Card = ({img}) =>(
  <img className='card' src={img} alt="cover"/>
)

const Row = ({
  title,
  arr = [
    {
      img: "https://i.kym-cdn.com/photos/images/original/001/477/408/5e2.jpeg",
    },
  ],
}) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item,index) => (
        <Card key={index} img={`${imageurl}${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {

  const [upcomingMovies,setUpcomingMovies] = useState([])
  const [popularMovies,setPopularMovies] = useState([])
  const [nowplayingMovies,setNowplayingMovies] = useState([])
  const [topratedMovies,setTopratedMovies] = useState([])

  useEffect(()=>{
    const fetchUpcomming = async()=>{
      const {data:{results}}=await axios.get(`${url}/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };
    const fetchpopular = async()=>{
      const {data:{results}}=await axios.get(`${url}/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };
    const fetchnowplaying = async()=>{
      const {data:{results}}=await axios.get(`${url}/${nowplaying}?api_key=${apiKey}`);
      setNowplayingMovies(results);
    };
    const fetchtoprated = async()=>{
      const {data:{results}}=await axios.get(`${url}/${toprated}?api_key=${apiKey}`);
      setTopratedMovies(results);
    };
    fetchUpcomming()
    fetchpopular()
    fetchnowplaying()
    fetchtoprated()
  })
  return (
    <section className='home'>
      <div className='banner' style={{
        backgroundImage:popularMovies[2]?`url(${`${imageurl}${popularMovies[2].poster_path}`})`:"none"
      }}>
      {popularMovies[2] && (<h1>{popularMovies[2].title}</h1>)}
      {popularMovies[2] && (<p>{popularMovies[2].overview}</p>)}
      
      <button>Play <BiPlay/></button>
      <button>My List <AiOutlinePlus/></button>
      </div>

      <Row title={"Upcoming Movies"} arr={upcomingMovies}/>
      <Row title={"Popular Movies"} arr={popularMovies}/>
      <Row title={"Now Playing"} arr={nowplayingMovies}/>
      <Row title={"Top Rated"} arr={topratedMovies}/>
      
    </section>
  )
}

export default Home