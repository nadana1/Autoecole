import React, { useContext, useState } from 'react'
import QuestionsData from '../Data/questions2.json'
import AnswerButton from '../components/Candidat/quizCode2/Answer/AnswerButton'
import AnswerButtonsWrapper from '../components/Candidat/quizCode2/Answer/AnswerButtonsWrapper'
import AnswerResult from '../components/Candidat/quizCode2/Answer/AnswerResult'
import AnswerSectionWrapper from '../components/Candidat/quizCode2/Answer/AnswerSectionWrapper'
import NextQuestionButton from '../components/Candidat/quizCode2/Answer/NextQuestionButton'
import NextQuestionButtonWrapper from '../components/Candidat/quizCode2/Answer/NextQuestionButtonWrapper'

import { CurrentQuestionContext } from '../Context/CurrentQuestionContext'
import { AnswerResultContext } from '../Context/AnswerResultContext'
import { CorrectAnswersContext } from '../Context/CorrectAnswersContext'
import { WrongAnswersContext } from '../Context/WrongAnswersContext'

export default AnswerCompound2

function AnswerCompound2 ({ children,setStep }) {
  
  const [currentQuestion, setCurrentQuestion] = useContext(
    CurrentQuestionContext
  )
  const [showAnswerResult, setShowAnswerResult] = useContext(
    AnswerResultContext
  )
  const [correctAnswersNumber, setCorrectAnswersNumber] = useContext(
    CorrectAnswersContext
  )
  const [wrongAnswersNumber, setWrongAnswersNumber] = useContext(
    WrongAnswersContext
  )
  const [finalResult, setFinalResult] = useState('')
  const [wrongClickedAnswer, setWrongClickedAnswer] = useState('')
  const answersArray = [
    QuestionsData[currentQuestion - 1].correct_answer
  ].concat(QuestionsData[currentQuestion - 1].incorrect_answers)
  const correctAnswer = answersArray[0]

  function checkAnswer (answer) {
    if (answer === correctAnswer) {
      setShowAnswerResult('Bravo 🎉')
      setFinalResult('correct')
    }
    else {
      setShowAnswerResult('Echec 😐')
      setFinalResult('wrong')
      setWrongClickedAnswer(answer)
    }
  }

  function changeButtonColor (answer) {
    if (answer === correctAnswer) {
      return 'green-button'
    }
    if (answer === wrongClickedAnswer) {
      return 'red-button'
    } else {
      return 'answer-button'
    }
  }

  function doButtonClickActions () {
    if (currentQuestion === QuestionsData.length) {
      if (finalResult === 'correct') {
        setCorrectAnswersNumber(correctAnswersNumber + 1)
      }
      if (finalResult === 'wrong') {
        setWrongAnswersNumber(wrongAnswersNumber + 1)
      }
      setFinalResult('')
      return setStep(3)
    }

    setCurrentQuestion(currentQuestion + 1)
    setShowAnswerResult('')

    if (finalResult === 'correct') {
      setCorrectAnswersNumber(correctAnswersNumber + 1)
    }
    if (finalResult === 'wrong') {
      setWrongAnswersNumber(wrongAnswersNumber + 1)
    }
    setFinalResult('')
  }
  
  return (
    <div>
    <div className="row">
    <div  className="col-xs-12 col-md-6" > <img className="image" alt="world" src = {QuestionsData[currentQuestion-1].source}></img></div>
    <div className="col-xs-12 col-md-6" id="answers">
      <AnswerSectionWrapper>
      <AnswerButtonsWrapper>
       {answersArray.map((answer, index) => (
            <AnswerButton
              key={index}
              disabled={showAnswerResult !== ''}
              onClick={() => checkAnswer(answer)}
              className={ finalResult === '' ? 'answer-button' : changeButtonColor(answer)}>
              {decodeURIComponent(answer)}
            </AnswerButton>
          ))}
        </AnswerButtonsWrapper>
        <AnswerResult>{showAnswerResult}</AnswerResult>
        <NextQuestionButtonWrapper>
          {showAnswerResult === '' ? null : (
            <NextQuestionButton onClick={doButtonClickActions}>
              suivant
            </NextQuestionButton>
          )}
        </NextQuestionButtonWrapper>
      </AnswerSectionWrapper>
      </div>
      </div>
      
      
    </div>
  )
}
