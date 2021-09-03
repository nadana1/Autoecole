import React, {useState} from 'react'
import QuitCompound from './Compounds/QuitCompound'
import QuizCompound from './Compounds/QuizCompound'
import StartCompound from './Compounds/StartCompound'
import CandidatDashboard from './components/Candidat/CandidatDashboard';
function Quiz () {
  const[step,setStep]=useState(3)
  const [score, setScore]=useState(0)
  return (
    <div>
    {step === 1 && <StartCompound  setStep={setStep} />}
    {step===2 && <QuizCompound  score={score} setScore={setScore} setStep={setStep}/>}
    {step ===3 && <QuitCompound score={score} setStep={setStep}/>}
    {step ===4 && <CandidatDashboard />}
    </div>
  
  )
}

export default Quiz
