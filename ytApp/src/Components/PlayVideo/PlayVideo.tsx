import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='playVideo'>
        <video src={video1} controls autoPlay muted>
        </video>
        <h3>Tittle one</h3>
        <div className="playVideoInfo">
            <p>15 minutes</p>
            <div>
                <span><img src={like} alt="" />125</span>
                 <span><img src={dislike} alt="" />50</span>
                  <span><img src={share} alt="" />share</span>
                   <span><img src={save} alt="" />save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div><p>
                Quoc thai channel name</p>
                <span>1M sub
                    </span></div>
                    <button>Subcried</button>
        </div>
        <div className="description">
            <p>Chanel this is good</p>
            <p>Subcried to get more thing </p>
            <hr />
            <h4>130 comments</h4>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack norris <span>12 min ago</span></h3>
                <p>Commment session jfhjabhjgdhahdadjahdgahd</p>
                <div className="commentAction">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                    <span>20</span>
                </div>
            </div>
        </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack norris <span>12 min ago</span></h3>
                <p>Commment session jfhjabhjgdhahdadjahdgahd</p>
                <div className="commentAction">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                    <span>20</span>
                </div>
            </div>
        </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack norris <span>12 min ago</span></h3>
                <p>Commment session jfhjabhjgdhahdadjahdgahd</p>
                <div className="commentAction">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                    <span>20</span>
                </div>
            </div>
        </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack norris <span>12 min ago</span></h3>
                <p>Commment session jfhjabhjgdhahdadjahdgahd</p>
                <div className="commentAction">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                    <span>20</span>
                </div>
            </div>
        </div>
        </div>
  )
}

export default PlayVideo