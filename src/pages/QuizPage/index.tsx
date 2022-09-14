import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { scoreHandler } from 'redux/store';
import { useNavigate } from 'react-router-dom';
import { decode } from 'html-entities';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from 'components/Button';
import QuizItem from 'components/QuizItem';
import Axios from 'api/axios';
import styles from './quizPage.module.scss';

const QuizPage = () => {
  const [index, setIndex] = useState(0);
  const [example, setExample] = useState<any[]>([]);
  const [disabled, setDisabled] = useState(true);
  const [answer, setAnswer] = useState<string>('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { response, loading } = Axios();

  const submitAnswer = (e: any) => {
    if (response[index].correct_answer === answer) {
      toast.success('정답입니다!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        closeOnClick: true,
        hideProgressBar: true,
      });
      dispatch(scoreHandler());
      setTimeout(() => {
        if (index + 1 < response.length) {
          setIndex(index + 1);
        } else {
          navigate('/result');
        }
      }, 1000);
    } else {
      toast.error('오답입니다!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        closeOnClick: true,
        hideProgressBar: true,
      });
      setTimeout(() => {
        if (index + 1 < response.length) {
          setIndex(index + 1);
        } else {
          navigate('/result');
        }
      }, 1000);
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
      setExample(answers);
    }
  }, [response, index]);

  return (
    <>
      {loading ? (
        <span className={styles.quizLoading}>loading..</span>
      ) : (
        <>
          <ToastContainer />
          <p className={styles.quizIndex}>
            {index + 1}/{response?.length}
          </p>
          <p className={styles.quizTitle}>
            {index + 1}. {decode(response[index]?.question)}
          </p>
          <div className={styles.quizItems}>
            {example.map(item => (
              <>
                <QuizItem key={item} onClick={checkAnswer}>
                  {decode(item)}
                </QuizItem>
              </>
            ))}
          </div>
          <div className={styles.quizButton}>
            <Button size="small" onClick={submitAnswer} disabled={disabled}>
              제출
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default QuizPage;
