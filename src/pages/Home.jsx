import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import "../styles/Home.css";
import ImageSlider from "../components/ImageSlider";

const HomePage = () => {
  const [previews, setPreviews] = useState([]);

  const [data, setData] = useState([]);
  const getAllData = () => {
    axios
      .get(
        "https://yts.mx/api/v2/list_movies.json?quality=3D&minimum_rating=8&limit=5"
      )
      .then((response) => {
        setData(response.data.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);

  let arrayOfImage = [];

  data.map((movie) => {
    arrayOfImage.push(movie.background_image);
  });

  useEffect(() => {
    console.log("data", data);
    data.map((movie) => {
      // console.log("url", movie.background_image);
      arrayOfImage.push(movie.background_image);
      // setPreviews([
      //   ...previews,
      //   {
      //     url: movie.background_image,
      //     title: movie.title,
      //     summary: movie.summary,
      //   },
      // ]);
    });
  }, []);

  const [previewData, setPreviewData] = useState([]);

  useEffect(() => {
    axios.get("https://yts.mx/api/v2/list_movies.json?quality=3D&minimum_rating=8&limit=5")
      .then(res => {
          res.data.data.movies.map((item) => {
            setPreviewData[{
              "url": item.url,
              "title": item.title,
              "summary": item.summary
            }]
        })
        console.log("previews", previewData);
      console.log("Your new array of modified objects here", previewData)
    })
    .catch(err => { console.log('Error', err) })
  }, [])

  console.log('==', previewData.title);

  return (
    <div className="container">
      <div className="content-container">
        <div className="preview-container">
          <div className="preview-img">
            <ImageSlider slides={arrayOfImage} />
          </div>
          <div className="preview-title">Hello there</div>
          <div className="preview-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aut
            error accusamus mollitia sunt! Voluptates, explicabo? Magni
            voluptates cum assumenda dicta dolor, repellendus minus quia
            quibusdam? Ullam corrupti architecto odio?
          </div>
        </div>
        {/* <div
          className="featured-content"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0), #151515), url(https://deadline.com/wp-content/uploads/2022/09/Wednesday_S1_E1_00_08_38_23R.jpg?w=1280)`,
          }}
        >
          <img className="featured-title" src="img/f-t-1.png" alt="" />
          <p className="featured-desc">
            While attending Nevermore Academy, Wednesday Addams attempts to
            master her emerging psychic ability, thwart a killing spree and
            solve the mystery that embroiled her parents 25 years ago.
          </p>
          <button className="featured-button" type="button">
            <i className="watch-button fas fa-play"></i>WATCH NOW
          </button>
        </div> */}

        {SECTIONS.map((section, i) => (
          <div className="movie-list-container" key={section.title}>
            <h1 className="movie-list-title">{section.title}</h1>
            <div className="movie-list-wrapper">
              <MovieList title={section.title} fetchURL={section.fetchURL} />
            </div>
          </div>
        ))}

        <div
          className="featured-content"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0), #151515), url(https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQfI4sFN9nnwdqYGpZ20PZwUbrop6KutVr3p_-NAEIQtFu0eEqaU3XfBOk4DyAQCefP6o2DJK3LYF87_egWXtUUk423pk5GqCMkXls8E05JowEdt80hfAok6BUthtaWIQMBpdaSkymw563faSdEyhnoVYYcI.jpg?r=711)`,
          }}
        >
          {/* <img className="featured-title" src="img/f-t-2.png" alt="" /> */}
          <p className="featured-desc">
            Tech billionaire Miles Bron invites his friends for a getaway on his
            private Greek island. When someone turns up dead, Detective Benoit
            Blanc is put on the case.
          </p>
          <button className="featured-button" type="button">
            <i className="watch-button fas fa-play"></i>WATCH NOW
          </button>
        </div>

        {SECTIONS_AGAIN.map((section) => (
          <div className="movie-list-container" key={section.title}>
            <h1 className="movie-list-title">{section.title}</h1>
            <div className="movie-list-wrapper">
              <MovieList title={section.title} fetchURL={section.fetchURL} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

const PREVIEW = [
  {
    title: "PREVIEW",
    fetchURL:
      "https://yts.mx/api/v2/list_movies.json?quality=3D&minimum_rating=8&limit=5",
  },
];

const SECTIONS = [
  {
    title: "ACTION",
    fetchURL:
      "https://yts.mx/api/v2/list_movies.json?genre=action&limit=10",
  },
  {
    title: "CRIME",
    fetchURL:
      "https://yts.mx/api/v2/list_movies.json?genre=crime&limit=10",
  },
  {
    title: "DRAMA",
    fetchURL:
      "https://yts.mx/api/v2/list_movies.json?genre=drama&limit=10",
  },
];

const SECTIONS_AGAIN = [
  {
    title: "THRILLER",
    fetchURL:
      "https://yts.mx/api/v2/list_movies.json?genre=thriller&limit=10",
  },
  {
    title: "ANIMATION",
    fetchURL:
      "https://yts.mx/api/v2/list_movies.json?genre=animation&limit=10",
  },
];
