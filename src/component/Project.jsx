import React from 'react'
import "../css/Project.css"

const Project = () => {
    return (
        <section className='project-section'>
            <h2>Projects</h2>
            <div className="container">
                <div className="row projects">
                    <div className="col-12 col-lg-4 project-1">
                        <img src="musicalinstrumentproject.png" alt="Musical Project" />
                        <h3>Musical Project</h3>
                        <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quaerat fuga
                            ipsum assumenda eum expedita asperiores tempore natus,
                            rerum recusandae repudiandae at obcaecati quisquam, dignissimos accusamus ratione quae,
                            saepe deserunt?</p>
                        <button className='btn btn-primary'>View on GitHub</button>
                    </div>
                    <div className="col-12 col-lg-3 project-2">
                        <img src="studywithmeproject.png" alt="Study With Me Project" />
                        <h3>Study With Me Project</h3>
                        <p className='lead'>A study app that is a digital tool designed to enhance learning for highschool student.
                            It offers access to educational materials, quizzes, set schedule for studying and
                            interact with other users.</p>
                        <button className='btn btn-primary'>View on GitHub</button>
                    </div>
                    <div className="col-12 col-lg-4 project-3">
                        <img src="manhwaproject.png" alt="Manhwa Project" />
                        <h3>Manhwa Project</h3>
                        <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quaerat fuga
                            ipsum assumenda eum expedita asperiores tempore natus,
                            rerum recusandae repudiandae at obcaecati quisquam, dignissimos accusamus ratione quae,
                            saepe deserunt?</p>
                        <button className='btn btn-primary'>View on GitHub</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project