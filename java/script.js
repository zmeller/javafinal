const [form] = document.forms;
const [askValidationMsg] = document.querySelectorAll('.validationMsg');

const myPics = ["img/magic8ball_1.png","img/magic8ball_2.png", "img/magic8ball_3.png", "img/magic8ball_4.png", "img/magic8ball_5.png", "img/magic8ball_6.png", "img/magic8ball_7.png", "img/magic8ball_8.png", "img/magic8ball_9.png", "img/magic8ball_10.png", "img/magic8ball_11.png", "img/magic8ball_12.png", "img/magic8ball_13.png", "img/magic8ball_14.png", "img/magic8ball_15.png", "img/magic8ball_16.png", "img/magic8ball_17.png", "img/magic8ball_18.png", "img/magic8ball_19.png"];

function isQuestionValid(question){
  return question.length > 10 && question.length < 100;
}

function getElement(name, e){
  return {
    question(e){
      e.target.classList.toggle('border-danger', !isQuestionValid(e.target.value));
      askValidationMsg.textContent = isQuestionValid(e.target.value) ? null : 'Question must be at least 10 to 100 characters long';
    }
  }[name](e);
}

function handleInput(e){
  const { question, askBtn } = form
  const { name } = e.target;
  getElement(name, e);
  askBtn.disabled = !isQuestionValid(question.value);
}

document.addEventListener('DOMContentLoaded', () => {
  form.question.addEventListener('input', handleInput);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const { question } = e.target;
    const submittedQuestion = question.value;
    const resultElement = document.getElementById('result');
    const myPic = document.getElementById('myPic');
    resultElement.textContent = `Your Question: ${submittedQuestion}`;
    let randomNum = Math.floor(Math.random()* myPics.length);
	myPic.src=myPics[randomNum];
    myPic.classList.add(myPics[randomNum]);
  });
});

		  