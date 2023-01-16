import React from 'react'
import "./Feature.scss"
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import InfoIcon from '@mui/icons-material/Info';

const Feature = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span> {type === "movie" ? "Movies" : "Series"} </span>
                <select name="genre" id="genre">
                    <option> Genre  </option>
                        <option value="horror"> Horror</option>
                        <option value="entertainment"> Entertainment</option>
                        <option value="comedy"> Comedy</option>
                        <option value="family"> Family</option>
                        <option value="mature"> Mature</option>
                        <option value="anime"> Anime</option>
                        <option value="korean"> Korean</option>
                        <option value="japanese"> Japanese</option>
                        <option value="biography"> Biography</option>
                   
                </select>
            </div>
        )}
        <div className="featurePic">
        <img src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="featureInfo">
            <div className="image">
                <img src="https://1000marcas.net/wp-content/uploads/2020/01/Avengers-Logo.png" alt="" />
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque libero <br /> bculpa adipisci nihil ad quidem.s
                    Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Asperiores dolor quia, eius m consequatur, delvident? Officiis? </p>
            </div>
            <div className="buttons">
            <button className="play">
                <PlayCircleFilledWhiteIcon/>
                <span> Play </span>

            </button>
            <button className="info">
                <InfoIcon/>
                <span> Info </span>

            </button>

            </div>
           

        </div>
    </div>
  )
}

export default Feature