const start$$ = document.querySelector('[data-function="start-game"]')
const text$$ = document.querySelector('[data-function="questions-number"]');
const board$$ = document.querySelector('[data-function="gameboard"]');
const check$$ = document.querySelector('[data-function="check-game"]');
start$$.addEventListener('click', () => startGame(text$$.value));
let answers = [];
const getQuestions = async (amount) => {
    const res = await fetch('https://opentdb.com/api.php?amount=' + amount);
    const json = await res.json();
    return json;
}

const mapQuestions = (questions) => {
    const mapped = questions.results.map((q) => ({
        quest: q.question,
        correct: q.correct_answer,
        incorrect: q.incorrect_answers
    }));
    return mapped;
}

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const createQuestions = (questions) => {
    for (let i = 0 ; i < questions.length ; i++) {
        const quest$$ = document.createElement('h4');
        quest$$.textContent = questions[i].quest;
        board$$.appendChild(quest$$);
        const ans$$ = shuffle([questions[i].correct , ...questions[i].incorrect]);
        for (const answer of ans$$) {
            const p$$ = document.createElement('p');
            p$$.classList.add('answer');
            p$$.setAttribute("data-function", i);
            p$$.textContent = answer;
            p$$.addEventListener('click', (p$$) => {
                markAnswer(p$$.target, i);
                checkAnswer(questions[i].correct, answer, i);
                console.log(questions[i].correct, answer, i);
            });
            board$$.appendChild(p$$);
        }
    }
}

const markAnswer = (answer, index) => {
    const otherAnswers = document.body.querySelectorAll('[data-function="' + index + '"');
    for(const otherAnswer of otherAnswers) {
        otherAnswer.classList.remove('marked');
    }
    answer.classList.add('marked');
}

const checkAnswer = (correct, answer, index) => {
    if(answer === correct) answers[index] = true;
    else answers[index] = false;
}

const checkGame = () => {
    let correct = 0;
    let incorrect = 0;
    console.log(answers);
    for(answer of answers) {
        if(answer) correct++;
        else incorrect++;
    }
    const res$$ = document.createElement('p');
    res$$.textContent = ('You have ' + correct + ' correct answers and ' + incorrect + ' incorrect answers.');
    board$$.appendChild(res$$);
}

const startGame = async (amount) => {
    answers = [];
    board$$.innerHTML = ``;
    const questions = await getQuestions(amount);
    const mappedQuestions = mapQuestions(questions);
    createQuestions(mappedQuestions);
}

check$$.addEventListener('click', checkGame);