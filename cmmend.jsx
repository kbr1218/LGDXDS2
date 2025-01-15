import React from 'react';
import './mo_list.css';

const moviecmd = () => {
  return (
    <>
      <div className="box_container">

        <button className="arow_btnl">&lt;</button>

        <div className="box">
          <span class="num">1</span>
          <img src="/images/peaky.jpg" alt="영화이미지" className="image" />
 
        </div>
        <div className="box">
          <span class="num">2</span>
          <img src="" alt="영화이미지" className="image" />
        </div>
          <div className="box">
          <span class="num">3</span>
        <img src="" alt="영화이미지" className="image" />
        </div>

        <div className="box">
          <span class="num">4</span>
          <img src="" alt="영화이미지" className="image" />
        </div>
          <div className="box">
          <span class="num">5</span>
        <img src="" alt="영화이미지" className="image" />
        </div>

        <button className="arow_btnr">&gt;</button>
      </div>

      <button className="restart_btn">다시 추천하기</button> 
    </>
  );
};

export default moviecmd;
