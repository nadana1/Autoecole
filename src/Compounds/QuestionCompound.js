import React from 'react'
import QuestionCategory from '../components/Candidat/quizCode/Question/QuestionCategory'
import QuestionDifficulty from '../components/Candidat/quizCode/Question/QuestionDifficulty'
import ScoreBarCompound from './ScoreBarCompound'
import QuestionSectionWrapper from '../components/Candidat/quizCode/Question/QuestionSectionWrapper'
import QuestionText from '../components/Candidat/quizCode/Question/QuestionText'
export default QuestionCompound

function QuestionCompound ({ children, score , setScore }) {
  return (
    <div>
      <QuestionSectionWrapper>
        <div className="row">
          <div className="col-xs-6 col-md-6">
        <QuestionCategory />
        <QuestionDifficulty />
          </div>
          <div className="col-xs-6 col-md-6 score">
          
          <ScoreBarCompound score={score}setScore={setScore}  />
          
          </div>
        </div>
        <QuestionText />
      </QuestionSectionWrapper>
      {children}
    </div>
  )
}
