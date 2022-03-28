import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({
      type: 'create-tuit',
      tuit: whatsHappening
    });
  }
  return (
      <>
        <div className="row">
          <div className="col-2">
            <img className="img-fluid circle-img" height="40px"
                 src="https://pbs.twimg.com/profile_images/1490862109797793792/4EsEb62G_400x400.jpg"/>
          </div>
          <div className="col-10">
      <textarea className="whats-happening-text"
                placeholder="Whats Happening?"
                value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
      </textarea>
            <div className="row">
              <div className="col-10">
                <i className="fa-regular fa-image tweet-icons"/>
                <i className="fa-solid fa-chart-line  tweet-icons"/>
                <i className="fa-solid fa-face-smile  tweet-icons"/>
                <i className="fa-regular fa-calendar  tweet-icons"/>
              </div>
              <div className="col-2">
                <button className="rounded-pill tweet-button"
                        onClick={tuitClickHandler}>
                  Tuit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
export default WhatsHappening;