import axios from 'axios';

export const requestQuiz = async () => {
  try {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`,
    );
    console.log(res.data);
    return res;
  } catch (e) {
    console.log(e);
  }
};
