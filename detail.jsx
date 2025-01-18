import React from 'react';
import './dtail.css';

const mdetail = () => {
  // 임시 데이터 설정 (나중에 API 연결시 데이터로 대체)
  const movieData = {
    name: "movie name~",
    overview: "영화 줄거리 내용이 여기에 들어갑니다.줄거리줄거리줄거리.. 줄줄거리 줄거리줄거리! 아 줄거리줄거리 줄거리 길다길어 줄거리줄거리줄거리줄거리줄거리 줄거리 줄거리 줄거리줄거리줄거리",
    release_date: "2025-01-15",
    director: "감독 이름",
    actors: "배우1, 배우2 배우3 배우 4",
    adult: "12세 이상",
    vote_average: "8.5/10",
    genre: "액션, 드라마",
    orgnl_cntry: "한국",
    original_language: "한국어",
    original_title: "원래 제목은요~",
    popularity: "1000",
    runtime: 120,
    vote_count: 15
  };

  return (
    <div className="m_container">
      <h1 className="name">{movieData.name}</h1>
      <p className="overview">{movieData.overview}</p>

      <div className="info_box">
        <div className="group">
          {movieData.release_date && (
            <div className="release_date"><strong>날짜:</strong> {movieData.release_date}</div>
          )}
          {movieData.original_language && (
            <div className="original_language"><strong>언어:</strong> {movieData.original_language}</div>
          )}
          {movieData.genre && (
            <div className="genre"><strong>장르:</strong> {movieData.genre}</div>
          )}
          {movieData.popularity && (
            <div className="popularity"><strong>인기:</strong> {movieData.popularity}</div>
          )}
          {movieData.original_title && (
            <div className="original_title"><strong>원래 제목:</strong> {movieData.original_title}</div>
          )}
        </div>

        <div className="group2">
          {movieData.director && (
            <div className="director"><strong>감독:</strong> {movieData.director}</div>
          )}
          {movieData.actors && (
            <div className="actor_disp"><strong>출연 배우:</strong> {movieData.actors}</div>
          )}
          {movieData.adult && (
            <div className="adult"><strong>연령 제한:</strong> {movieData.adult}</div>
          )}
          {movieData.runtime && (
            <div className="runtime"><strong>상영 시간:</strong> {movieData.runtime}분</div>
          )}
          {movieData.vote_average && (
            <div className="vote_average"><strong>평점:</strong> {movieData.vote_average}</div>
          )}
          {movieData.vote_count && (
            <div className="vote_count"><strong>투표 수:</strong> {movieData.vote_count}</div>
          )}
        </div>
      </div>

      <button className="watch_btn">Watch Now</button>
    </div>
  );
};

export default mdetail;
