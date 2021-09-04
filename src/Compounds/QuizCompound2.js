import React, { useState } from 'react'
import ProgressBar from '../components/Candidat/quizCode2/ProgressBar/ProgressBar'
import AnswerCompound2 from './AnswerCompound2'
import QuestionCompound2 from './QuestionCompound2'
import { CurrentQuestionContext } from '../Context/CurrentQuestionContext'
import { AnswerResultContext } from '../Context/AnswerResultContext'
import { CorrectAnswersContext } from '../Context/CorrectAnswersContext'
import { WrongAnswersContext } from '../Context/WrongAnswersContext'
import '../App.css'

export default QuizCompound2

function QuizCompound2 ({ children ,score , setStep ,setScore}) {

  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [showAnswerResult, setShowAnswerResult] = useState('')
  const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0)
  const [wrongAnswersNumber, setWrongAnswersNumber] = useState(0)
  return(   

  <div>
      <CurrentQuestionContext.Provider
        value={[currentQuestion, setCurrentQuestion]}
      >
        <AnswerResultContext.Provider
          value={[showAnswerResult, setShowAnswerResult]}
        >
          <CorrectAnswersContext.Provider
            value={[correctAnswersNumber, setCorrectAnswersNumber]}
          >
            <WrongAnswersContext.Provider
              value={[wrongAnswersNumber, setWrongAnswersNumber]}
            >
              <ProgressBar />
              <QuestionCompound2 score={score} setScore={setScore} />
              <AnswerCompound2  setStep={setStep}/>
              {children}
              
            </WrongAnswersContext.Provider>
          </CorrectAnswersContext.Provider>
        </AnswerResultContext.Provider>
      </CurrentQuestionContext.Provider>
    </div>
    )}