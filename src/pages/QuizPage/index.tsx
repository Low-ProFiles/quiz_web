import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { scoreHandler } from 'redux/store';
import { useNavigate } from 'react-router-dom';
import { decode } from 'html-entities';

import Button from 'components/Button';
import QuizItem from 'components/QuizItem';
import Axios from 'api/axios';
import styles from './quizPage.module.scss';

const QuizPage = () => {
  const [index, setIndex] = useState(0);
  const [example, setExample] = useState<any[]>([]);
  const [disabled, setDisabled] = useState(true);
  const [answer, setAnswer] = useState<string>('');
  const [buttonText, setButtonText] = useState('제출');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { response, loading } = Axios();

  const submitAnswer = (e: any) => {
    const question = response[index];
    if (e.target.innerHTML === '다음') {
      if (e.target.textContent === question.correct_answer) {
        dispatch(scoreHandler());
      }
      if (index + 1 < response.length) {
        setIndex(index + 1);
      } else {
        navigate('/result');
      }
    } else {
      if (response[index].correct_answer === answer) {
        console.log('정답');
      } else {
        console.log('오답');
      }
      setButtonText('다음');
    }
  };

  const checkAnswer = (e: any) => {
    setDisabled(false);
    setAnswer(e.target.outerText);
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
      setDisabled(true);
      setButtonText('제출');
      setExample(answers);
    }
  }, [response, index]);

  return (
    <>
      {loading ? (
        <span className={styles.quizLoading}>loading..</span>
      ) : (
        <>
          <p className={styles.quizIndex}>
            {index + 1}/{response?.length}
          </p>
          <p className={styles.quizTitle}>
            {index + 1}. {decode(response[index]?.question)}
          </p>
          <div className={styles.quizItems}>
            {example.map(item => (
              <QuizItem key={item} onClick={checkAnswer}>
                {decode(item)}
              </QuizItem>
            ))}
          </div>
          <div className={styles.quizButton}>
            <Button size="small" onClick={submitAnswer} disabled={disabled}>
              {buttonText}
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default QuizPage;
