import axios from 'axios';
import { useEffect, useState } from 'react';

const Axios = () => {
  const [response, setResponce] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestQuiz = () => {
      axios
        .get(`https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`)
        .then(res => setResponce(res.data.results))
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    };
    requestQuiz();
  }, []);
  return { response, error, loading };
};

export default Axios;
