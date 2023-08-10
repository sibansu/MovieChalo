import ReactPlayer from "react-player";

const MovieDetails = (props) => {
  return (
    <div className="container">
      <div className="movie-details">
        <h1>{props.movie.name}</h1>
        <div className="movie-details-subtitle">
          {props.movie.lang} • {props.movie.duration}m • {props.movie.genre}
        </div>
        <div className="description">{props.movie.desc}</div>
        <div style={{height:"25rem",width:"50rem"}}>
          <ReactPlayer
            id="MovieTrailer"
            url={props.movie.trailer}
            playing={true}
            loop={true}
            controls={false}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
