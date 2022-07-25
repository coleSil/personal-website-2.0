import React from 'react';
import JobExperience from '../components/JobExperience';

function Experience() {
  var seniorDevDescriptions = [
    'Full stack development of web applications using appropriate frameworks and technologies',
    'Build secure APIs for easy interfacing with large sets of data',
    'Designed and developed a delegate tracking application used to log convention election results and input delegate information',
    'Mentor junior developers in solving programing problems and design choices'
  ];

  var juniorDevDescriptions = [
    "Reconstructed pension system from a mainframe program to a web app including automation of pension checks",
    "Responsible for testing a migration importer and ensuring the database was up to date using Microsoft’s Entity Framework",
    "Collaborated as a team to migrate a legacy mainframe system to a modern, web-based application for company wide use",
    "Designed, coded, and maintained enterprise software using latest industry adopted programming languages"
  ];

  var softwareInternDescriptions = [
    "Composed bash scripts for the effective automation of test software",
    "Developed comprehensive applications to install drivers and company embedded software on Linux modules for clients",
    "Conceived, designed, monitored, and administered solutions tests to ensure continuous quality control"
  ];

  return (
    <div name='experience' className='w-full bg-[#0a192f] text-[#ccd6f6] pb-32 justify-center'> 

        <div className='flex flex-col px-8 w-full lg:h-full'>

          {/* Header for experience */}
          <div className='grid grid-cols-4 pb-3'>
            <div className='pt-24'>
              <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</h2>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Actual jobs */}
          <JobExperience 
            company="United Food and Commercial Workers Union (UFCW)" 
            start="February 2022" 
            end="Current" 
            title="Senior Web Developer" 
            location="Washington, DC"
            descriptions={seniorDevDescriptions} 
          />

          <JobExperience 
            company="United Food and Commercial Workers Union (UFCW)" 
            start="July 2019" 
            end="February 2022" 
            title="Junior Web Developer"
            location="Washington, DC"
            descriptions={juniorDevDescriptions} 
          />

          <JobExperience
            company="Alstom"
            start="June 2018"
            end="August 2018"
            title="Software Intern"
            location="Melbourne, FL"
            descriptions={softwareInternDescriptions} 
          />

        </div>
        
    </div>
  )
}

export default Experience