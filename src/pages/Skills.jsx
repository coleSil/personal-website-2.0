import React from 'react';

function Skills() {
    var programmingSkills = [
        'C#', 'TypeScript', 'JavaScript', 'Python', 'AngularJS', 'React', 
        '.NET', 'ASP.NET', 'SQL', 'MySQL', 'shell scripting'
    ];

    var otherSKills = [
        'RESTful APIs', 'Full Stack Development', 'Linux', 'Red Hat Linux', 'Windows 11', 'git',
        'Agile Development', 'HTML', 'Bootstrap', 'CSS'
    ];

    /**
     * takes skills array and formats into styled jsx element
     */
    function createSkillsTemplate(skills) {

        var lastSkill = skills.pop();
        var lastSkillTemplate = <p className='inline-block'>{lastSkill}</p>

        var skillsTemplate = skills.map(function(skill) {
            return <p key={skill} className='inline-block'>{skill}<span className='text-pink-600 font-bold'> · <span className='inline-block'> </span></span></p>
        });
        return (<div className='items-center'>{skillsTemplate}{lastSkillTemplate}</div>)
    }

  return (
    <div name='skills' className='w-full h-screen bg-white text-emerald-800'>
        <div className='flex flex-col w-full h-full justify-center items-center px-4'>
            {/* header */}
            <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</h2>

            <div className='lg:grid lg:grid-cols-2'>
                {/* programming skills */}
                <div className='lg:text-right lg:px-3'>
                    <div className='text-2xl font-bold pt-3'>Programming</div>
                    <div className='text-xl'>{createSkillsTemplate(programmingSkills)}</div>
                </div>

                {/* other skills */}
                <div className='lg:text-left lg:px-3'>
                    <div className='text-2xl font-bold pt-3'>Other</div>
                    <div className='text-xl'>{createSkillsTemplate(otherSKills)}</div>
                </div>

            </div>


        </div>
        
    </div>
  )
}

export default Skills