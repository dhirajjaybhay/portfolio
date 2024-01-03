import React from 'react'
import './Skill.css'
import dj from '../images/design1.svg'

export default function Skill() {
    return (
        <div>
            <div className='skillComponent'>
                <div className='row '>
                    <div className='col-lg-12 col-md-12 col-sm-12 p-0 d-flex title-skill'>
                        <h2 className='mb-0'><span className='hastag'>#</span>Skills</h2>
                        <div className='d-flex justify-content-center line'>
                            <svg className='' xmlns="http://www.w3.org/2000/svg" width="200" height="2" viewBox="0 0 239 2" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M239 1.5H0V0.5H239V1.5Z" fill="#C778DD" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='row pt-4'>
                    <div className='col-lg-4 col-md-4 col-sm-12 svg-design'>
                        <img src={dj} alt="44" />
                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-12'>
                        <div className='row d-flex justify-content-between skills-list'>
                            <div className='col-lg-4 col-md-4 col-sm-4 container-1'>
                                <div className='html language'>
                                    <h2>HTML</h2>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 container-2'>
                                <div className='css language'>
                                    <h2>CSS</h2>
                                </div>
                                <div className='react language'>
                                    <h2>ReactJS</h2>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 container-3'>
                                <div className='javascript language'>
                                    <h2>JavaScript</h2>
                                </div>
                                <div className='angular language'>
                                    <h2>Angular</h2>
                                </div>
                                <div className='bootstrap language'>
                                    <h2>Bootstrap</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
