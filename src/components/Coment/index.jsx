import React, { useState } from 'react';
import style from "./Coments.module.scss";

import comentsImg from "../../assets/coments.png";
import heartFilledImg from "../../assets/heart-filled.png";
import heartOutlinedImg from "../../assets/heart-outlined.png";
import shareImg from "../../assets/share.png";




function Coment(props) {

    const [liked, setLiked] = useState(false);

    return (
        <div className={style.coment} onDoubleClick={() => setLiked(!liked)}>
            <h3>{props.author}</h3>
            <p>{props.content}</p>

            <div className={style.footerComents} >
                <div className={style.actions}>
                    <img src={liked ? heartFilledImg : heartOutlinedImg} alt="logo Like" onClick={() => setLiked(!liked)} />
                    <img src={comentsImg} alt="logo Comentarios" />
                    <img src={shareImg} alt="logo Share" />
                </div>
                <small>{props.date}</small>
            </div>
        </div>
    );
}
export default Coment;
