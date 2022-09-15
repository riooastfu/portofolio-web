import React from 'react'
import { useState } from 'react'
import Image1 from "../../assets/img/img1.jpg"
import Image2 from "../../assets/img/img2.jpg"
import Image3 from "../../assets/img/img3.jpg"
import Image4 from "../../assets/img/MyWinter.jpg"
import Image5 from "../../assets/img/img4.jpg"
import Image6 from "../../assets/img/img5.jpg"
import Image7 from "../../assets/img/img6.jpg"
import Image8 from "../../assets/img/img7.jpg"

import "./gallery.css"

const data = [
    {
        id: 1,
        image: Image1,
    },
    {
        id: 2,
        image: Image2,
    },
    {
        id: 3,
        image: Image3,
    },
    {
        id: 4,
        image: Image4,
    },
    {
        id: 5,
        image: Image5,
    },
    {
        id: 6,
        image: Image6,
    },
    {
        id: 7,
        image: Image7,
    },
    {
        id: 8,
        image: Image8,
    },
];

const Gallery = () => {

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (image) => {
        setTempImgSrc(image);
        setModel(true);
    }
    return (
        <section className="gallery container section" id='gallery'>
            <h2 className="section__title">Gallery</h2>

            <div className={model ? "model open" : "model"}>
                <i class="fa fa-times" onClick={()=>setModel(false)}/>
                <img src={tempimgSrc} alt="" />

            </div>

            <div className="gallery__container">
                {data.map(({ id, image }) => {
                    return (
                        <div className="gallery__card" key={id} onClick={() => getImg(image)}>
                            <img src={image} alt="" className="gallery__img" />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Gallery