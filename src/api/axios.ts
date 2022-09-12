import axios from 'axios';
import { useEffect, useState } from 'react';

const Axios = () => {
  const [response, setResponce] = useState<any[]>([]);

  useEffect(() => {
    const requestQuiz = () => {
      axios
        .get(`https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`)
        .then(res => setResponce(res.data.results))
        .catch(err => console.log(err));
    };
    requestQuiz();
  }, []);
  return { response };
};

export default Axios;
