import React from 'react'
import studentsImg from '../../assets/students.png';
import './BeingAStudent.css'

function BeingAStudent() {
  return (
    <div>
        <div className='student-main-container'>
            <div className='student-details-text'>
            <p className='student-header-text'>Being a student in Leeds</p>
              <p className='student-margin-top-text'>
                Leeds is a great location for students, 
                no matter what you’re looking to get out of your time 
                at university. Dubbed the UK’s ‘happiest city for students’, 
                it’s understandable that over 30,000 students choose Leeds to 
                call home every year.
              </p>
              <p className='student-margin-top-text'>
                The city has a vibe like nowhere else in the UK, which 
                is why 93% of students say they are ‘very happy’ here.
              </p>  
            </div>
            <img className='students-img' src={studentsImg} alt="Image of students sitting" />
        </div>
    </div>
  )
}

export default BeingAStudent
