import React from 'react';
import './cmm_end.css';

const moviecmd = () => {
  return (
    <>
      <div className="box_container">

        <button className="arow_btnl">&lt;</button>

        <div className="box">
          <img src="/images/peaky.png" alt="example" className="image" />
 
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>

        <button className="arow_btnr">&gt;</button>
      </div>

      <button className="restart_btn">다시 추천하기</button>
    </>
  );
};

export default moviecmd;
