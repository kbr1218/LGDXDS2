import React from 'react';
import './dtail.css';

const mdetail = () => {
  const movieData = null;
 
  return (
    <div className="m_container">
      <h1 className="name">{movieData?.name|| 제목목}</h1>
      <p className="overview">{movieData?.overview||줄거리리}</p>

      <div className="info_box">
        <div className="group">
          {movieData.release_date && (
            <div className="release_date"><strong>날짜:</strong> {movieData|| 날짜짜?.release_date|| 날짜}</div>
          )}
          {movieData.original_language && (
            <div className="original_language"><strong>언어:</strong> {movieData?.original_language||언어}</div>
          )}
          {movieData.genre && (
            <div className="genre"><strong>장르:</strong> {movieData?.genre||장르르}</div>
          )}y
          {movieData.popularity && (
            <div className="popularity"><strong>인기:</strong> {movieData?.popularity||인기}</div>
          )}
          {movieData.original_title && (
            <div className="original_title"><strong>원래 제목:</strong> {movieData?.original_title||원래제목}</div>
          )}
          {movieData.orgnl_cntry && (
            <div className="orgnl_cntry"><strong>국가:</strong> {movieData?.orgnl_cntry||국가}</div>
          )}
        </div>

        <div className="group2">
          {movieData.director && (
            <div className="director"><strong>감독:</strong> {movieData?.director||감독독}</div>
          )}
          {movieData.actors && (
            <div className="actor_disp"><strong>출연 배우:</strong> {movieData?.actors|출연배우우}</div>
          )}
          {movieData.adult && (
            <div className="adult"><strong>연령 제한:</strong> {movieData?.adult||연령제한한}</div>
          )}
          {movieData.runtime && (
            <div className="runtime"><strong>상영 시간:</strong> {movieData?.runtime||상영시간}분</div>
          )}
          {movieData.vote_average && (
            <div className="vote_average"><strong>평점:</strong> {movieData?.vote_average||평점점}</div>
          )}
          {movieData.vote_count && (
            <div className="vote_count"><strong>투표 수:</strong> {movieData?.vote_count||투표수}</div>
          )}
        </div>
      </div>

      <button className="watch_btn">Watch Now</button>
    </div>
  );
};
export default mdetail;
