import React, { useState } from 'react'
import Pribadi from './Pribadi'
import Pendidikan from './Pendidikan'
import Pekerjaan from './Pekerjaan'
import Penunjang from './Penunjang'
import Konfirmasi from './Konfirmasi'
import { Container } from 'react-bootstrap'
import './style.css'

const Index = () => {
    const [steps, setSteps] = useState([
        { key: 'firstStep', label: `Pribadi`, isDone: false, component: Pribadi },
        { key: 'secondStep', label: 'Pendidikan', isDone: false, component: Pendidikan },
        { key: 'thirdStep', label: 'Pekerjaan', isDone: false, component: Pekerjaan },
        { key: 'fourthStep', label: 'Pendukung', isDone: false, component: Penunjang },
        { key: 'finalStep', label: 'Konfirmasi', isDone: false, component: Konfirmasi },
    ])

    const [activeStep, setActiveStep] = useState(steps[0])

    const handleNext = () => {
      if (steps[steps.length - 1].key === activeStep.key) {
        alert('Anda harus menyelesaikan form yang tersedia')
        return
      }
  
      const index = steps.findIndex(x => x.key === activeStep.key)
      setSteps(prevStep => prevStep.map(x => {
        if (x.key === activeStep.key) x.isDone = true
        return x
      }))
      setActiveStep(steps[index + 1])
    }

    const handleBack = () => {
        const index = steps.findIndex(x => x.key === activeStep.key);
        if (index === 0) return;
    
        setSteps(prevStep => prevStep.map(x => {
          if (x.key === activeStep.key) x.isDone = false;
          return x;
        }))
        setActiveStep(steps[index - 1]);
    }

    const handleMove = (step) => {
        if (steps[step].isDone) {
            setActiveStep(steps[step])
        } else {
            alert("anda harus menyelesaikan form sebelumnya!")
        }
    }

    return (
        <>
            <Container style={{paddingTop:"100px", marginBottom:"50px"}} className='mt-5'>
                <div className='text-center'>
                    <h2 className='font-weight-bold pb-2 border-bottom mb-5 d-inline-block'>Alur Pendaftaran</h2>
                </div>
                <div className="box">
                    <div className="steps">
                        <ul className="nav justify-content-center align-items-center">
                            <li onClick={() => handleMove(0)} className={`${activeStep.key === steps[0].key ? 'step-active' : 'step-deactive'} ${steps[0].isDone ? 'step-done' : ''} mr-5`}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>Data Pribadi</p>
                                </div>
                            </li>
                            <li onClick={() => handleMove(1)} className={`${activeStep.key === steps[1].key ? 'step-active' : 'step-deactive'} ${steps[1].isDone ? 'step-done' : ''} mr-5`}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                    <p>Pendidikan</p>
                                </div>
                            </li>
                            <li onClick={() => handleMove(2)} className={`${activeStep.key === steps[2].key ? 'step-active' : 'step-deactive'} ${steps[2].isDone ? 'step-done' : ''} mr-5`}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p>Pekerjaan</p>
                                </div>
                            </li>
                            <li onClick={() => handleMove(3)} className={`${activeStep.key === steps[3].key ? 'step-active' : 'step-deactive'} ${steps[3].isDone ? 'step-done' : ''} mr-5`}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    <p>Penunjang</p>
                                </div>
                            </li>
                            <li onClick={() => handleMove(4)} className={`${activeStep.key === steps[4].key ? 'step-active' : 'step-deactive'} ${steps[4].isDone ? 'step-done' : ''} mr-5`}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>Konfirmasi</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="step-component">
                        {<activeStep.component next={handleNext}/>}
                    </div>
                    {/* <div className="btn-component">
                        <input type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
                        <input type="button" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} />
                    </div> */}
                </div>
            </Container>
        </>
    )
}

export default Index
