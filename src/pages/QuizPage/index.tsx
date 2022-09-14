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
import { errorToast, successToast } from 'components/Toast';

const QuizPage = () => {
  const [index, setIndex] = useState(0);
  const [example, setExample] = useState<any[]>([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [itemDisabled, setItemDisabled] = useState(false);
  const [answer, setAnswer] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>('제출');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { response, loading } = Axios();

  const submitAnswer = (e: any) => {
    setItemDisabled(true);
    if (e.target.innerText === '제출' && response[index].correct_answer === answer) {
      successToast('정답입니다!');
      setButtonText('다음');
      dispatch(scoreHandler());
    } else if (e.target.innerText === '제출' && response[index].correct_answer !== answer) {
      errorToast('오답입니다!');
      setButtonText('다음');
    }
    if (e.target.innerText === '다음') {
      if (index + 1 < response.length) {
        setIndex(index + 1);
        setButtonText('제출');
      } else {
        navigate('/result');
      }
    }
  };

  const checkAnswer = (e: any) => {
    setButtonDisabled(false);
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
      setItemDisabled(false);
      setButtonDisabled(true);
      setExample(answers);
    }
  }, [response, index]);

  return (
    <>
      {loading ? (
        <span className={styles.quizLoading}>loading...</span>
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
                <QuizItem key={item} onClick={checkAnswer} disabled={itemDisabled}>
                  {decode(item)}
                </QuizItem>
              </>
            ))}
          </div>
          <div className={styles.quizButton}>
            <Button size="small" onClick={submitAnswer} disabled={buttonDisabled}>
              {buttonText}
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default QuizPage;
