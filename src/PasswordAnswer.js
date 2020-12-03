import React, { useState } from 'react';
import { Button, Form, Image } from "react-bootstrap";
import mindstoneAns from './mind-stone-ans.jpg';
import timestoneAns from './time-stone-ans.jpg';
import soulstoneAns from './soul-stone-ans.jpg';
import spacestoneAns from './space-stone-ans.jpg';

import styles from './PasswordAnswer.module.css';

const STONE_IMG_PAIRS = {
  mind: mindstoneAns,
  time: timestoneAns,
  soul: soulstoneAns,
  space: spacestoneAns,
}

const PasswordAnswer = ({ stone, correctAnswer, hint, initShow }) => {
  const [answer, setAnswer] = useState('');
  const [showImg, setShowImg] = useState(initShow);

  const checkAnswer = () => {
    if(answer === correctAnswer) {
      setShowImg(true);
    } else {
      alert('Your answer is incorrect. Please try again');
    }
  }

  const imageContainerClass = showImg
    ? `${styles.answerImageContainer} ${styles.show}`
    : `${styles.answerImageContainer} ${styles.hide}`;
  const placeHolder = hint ? hint : "Enter Answer Here";

  return (
    <div className={styles.container}>
      <div className={imageContainerClass}>
        <Image src={STONE_IMG_PAIRS[stone]} fluid/>
      </div>
      <Form.Group>
        <Form.Control type="text" placeholder={placeHolder} onChange={e => setAnswer(e.target.value)} value={answer}/>
      </Form.Group>
      <Form.Group className="d-flex justify-content-center">
        <Button variant="primary" type="button" onClick={checkAnswer}>
          Submit
        </Button>
      </Form.Group>
    </div>
  );
}

export default PasswordAnswer;
