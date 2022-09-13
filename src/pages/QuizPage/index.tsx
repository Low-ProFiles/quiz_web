import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { scoreHandler, timeHandler } from 'redux/store';
import { useNavigate } from 'react-router-dom';
import { decode } from 'html-entities';

import Button from 'components/Button';
import QuizItem from 'components/QuizItem';
import Axios from 'api/axios';
import styles from './quizPage.module.scss';

const QuizPage = () => {
  const [index, setIndex] = useState(0);
  const [example, setExample] = useState<any[]>([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { response } = Axios();

  const submitAnswer = (e: any) => {
    const question = response[index];
    if (e.target.textContent === question.correct_answer) {
      dispatch(scoreHandler());
    }
    if (index + 1 < response.length) {
      setIndex(index + 1);
    } else {
      navigate('/result');
    }
  };
  useEffect(() => {
    if (response?.length) {
      const question = response[index];
      const answers = [...question.incorrect_answers];
      answers.splice(
        Math.floor(Math.random() * Math.floor(question.incorrect_answers.length)),
        0,
        question.correct_answer,
      );
      setExample(answers);
    }
  }, [response, index]);

  return (
    <>
      <p className={styles.quizIndex}>
        {index + 1}/{response?.length}
      </p>
      <p className={styles.quizTitle}>
        {index + 1}. {decode(response[index]?.question)}
      </p>
      <div className={styles.quizTimeBar}>Timebar</div>
      <div className={styles.quizItems}>
        {example.map(item => (
          <QuizItem>{item}</QuizItem>
        ))}
      </div>
      <div className={styles.quizButton}>
        <Button size="small" onClick={submitAnswer}>
          다음
        </Button>
      </div>
    </>
  );
};

export default QuizPage;
