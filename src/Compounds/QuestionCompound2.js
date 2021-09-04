import React from 'react'
import QuestionCategory from '../components/Candidat/quizCode2/Question/QuestionCategory'
import QuestionDifficulty from '../components/Candidat/quizCode2/Question/QuestionDifficulty'
import ScoreBarCompound from './ScoreBarCompound'
import QuestionSectionWrapper from '../components/Candidat/quizCode/Question/QuestionSectionWrapper'
import QuestionText from '../components/Candidat/quizCode2/Question/QuestionText'
export default QuestionCompound2

function QuestionCompound2 ({ children, score , setScore }) {
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
