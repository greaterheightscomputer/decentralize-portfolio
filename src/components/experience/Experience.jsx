import { useState, useEffect } from 'react';
import { SlCalender } from 'react-icons/sl';
import './Experience.css';

const Experience = ({ state }) => {
  const [educations, setEducations] = useState('');
  const [experiences, setExperiences] = useState('');

  useEffect(() => {
    const { contract } = state;

    const educationDetail = async () => {
      const educDetails = await contract.methods.allEductationDetails().call();
      //   console.log(educDetails);
      setEducations(educDetails);
    };
    contract && educationDetail();
  }, [state]);

  useEffect(() => {
    const { contract } = state;

    const experienceDetail = async () => {
      const experDetails = await contract.methods.allExperienceDetails().call();
      //   console.log(experDetails);
      setExperiences(experDetails);
    };
    contract && experienceDetail();
  }, [state]);

  return (
    <section className="exp-section">
      <h1 className="title">Experience & Education </h1>

      <div className="container">
        <div className="education">
          <h1 className="edu-tittle">Education</h1>
          {educations !== '' &&
            educations.map((education) => {
              return (
                <div className="edu-card" key={education.id}>
                  <p className="card-text1">
                    <SlCalender className="icon" /> {education.date}
                  </p>
                  <h3 className="card-text2">{education.degree}</h3>
                  <p className="card-text3">{education.knowledgeAcquired}</p>
                  <p className="card-text4">{education.instutionName}</p>
                </div>
              );
            })}
        </div>

        {/* experience */}
        <div className="education">
          <h1 className="edu-tittle">Experience</h1>

          {experiences !== '' &&
            experiences.map((experience) => {
              return (
                <div className="edu-card" key={experience.id}>
                  <p className="card-text1">
                    <SlCalender className="icon" /> {experience.date}
                  </p>
                  <h3 className="card-text2">{experience.post}</h3>
                  <p className="card-text3">{experience.knowledgeAcquired}</p>
                  <p className="card-text4">{experience.compamyName}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
