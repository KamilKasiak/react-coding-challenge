import React, { useState } from 'react';
import './OneObject.scss';

const OneObject = ({
  id,
  originalId,
  talentId,
  talentName,
  talentGrade,
  bookingGrade,
  operatingUnit,
  officeCity,
  officePostalCode,
  jobManagerName,
  jobManagerId,
  totalHours,
  startDate,
  endDate,
  clientName,
  clientId,
  industry,
  isUnassigned,
  requiredSkills,
  optionalSkills,
}) => {
  const [showSkills, setShowSkills] = useState(false);
  const [showOptionalSkills, setShowOptionalSkills] = useState(false);
  // const [skillsRequired, setSkillsRequired] = useState('');

  // const skills = requiredSkills.flatMap((o) => (o.name == 'R' ? [o.name] : []));
  // console.log(skills);

  return (
    <div className='one-object-container'>
      <div className='grid-container'>
        <div className='labels'>
          <div className='label'>
            <p>{id}</p>
          </div>
          <div className='label'>
            <p>{originalId}</p>
          </div>
          <div className='label'>
            <p>{talentId}</p>
          </div>
          <div className='label'>
            <p>{talentName}</p>
          </div>
          <div className='label'>
            <p>{talentGrade}</p>
          </div>
          <div className='label'>
            <p>{bookingGrade}</p>
          </div>
          <div className='label'>
            <p>{operatingUnit}</p>
          </div>
          <div className='label'>
            <p>{officeCity}</p>
          </div>
          <div className='label'>
            <p>{officePostalCode}</p>
          </div>
          <div className='label'>
            <p>{jobManagerName}</p>
          </div>
          <div className='label'>
            <p>{jobManagerId}</p>
          </div>
          <div className='label'>
            <p>{totalHours}</p>
          </div>
          <div className='label'>
            <p>{startDate}</p>
          </div>
          <div className='label'>
            <p>{endDate}</p>
          </div>
          <div className='label'>
            <p>{clientName}</p>
          </div>
          <div className='label'>
            <p>{clientId}</p>
          </div>
          <div className='label'>
            <p>{industry}</p>
          </div>
          <div
            className='label'
            onClick={() => setShowSkills((prev) => !showSkills)}
          >
            {requiredSkills.length > 0 && showSkills ? (
              <table className='skill-box'>
                <tr>
                  <th>Skill</th>
                  <th>Category</th>
                </tr>
                {requiredSkills.map((skills, idx) => {
                  return (
                    <tr key={idx}>
                      <td>
                        <p>{skills.name}</p>
                      </td>
                      <td>
                        <p>{skills.category}</p>
                      </td>
                    </tr>
                  );
                })}
              </table>
            ) : (
              <p>
                required <b>{requiredSkills.length}</b>.{' '}
                <i>
                  <b>click</b> to expand
                </i>
              </p>
            )}
          </div>
          <div
            className='label'
            onClick={() => setShowOptionalSkills((prev) => !showOptionalSkills)}
          >
            {optionalSkills.length > 0 && showOptionalSkills ? (
              <div className='skill-box'>
                <table>
                  <tr>
                    <th>Skill</th>
                    <th>Category</th>
                  </tr>
                  {optionalSkills.map((skills, idx) => {
                    return (
                      <tr key={idx}>
                        <td>
                          <p>{skills.name}</p>
                        </td>
                        <td>
                          <p>{skills.category}</p>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            ) : (
              <p>
                required <b>{optionalSkills.length}</b>.{' '}
                <i>
                  <b>click</b> to expand
                </i>
              </p>
            )}
          </div>
          <div className='label'>
            <p>{isUnassigned ? 'true' : 'false'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneObject;
