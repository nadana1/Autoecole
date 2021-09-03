import React from 'react'
import QuitContent from '../components/Candidat/quizCode/Quit/QuitContent'
function QuitCompound({setStep, score}) {
    
    return (
        <div>
            <div className="end-wrapper">
                <QuitContent  score={score} setStep={setStep}/>
            </div>
        </div>
        
           
        
        
    )
}

export default QuitCompound
