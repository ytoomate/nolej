import React from 'react';
import '../Profile/Profile.css'
import {
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   PolarRadiusAxis
} from 'recharts';

function Profile() {
   const skillsData = [
      {
         skill: 'Smartness',
         A: 120,
         B: 110,
         fullMark: 150,
      },
      {
         skill: 'Creativity',
         A: 98,
         B: 130,
         fullMark: 150,
      },
      {
         skill: 'Responsibility',
         A: 86,
         B: 130,
         fullMark: 150,
      },
      {
         skill: 'Discipline',
         A: 99,
         B: 100,
         fullMark: 150,
      },
      {
         skill: 'Sport',
         A: 85,
         B: 90,
         fullMark: 150,
      },
      {
         skill: 'Communication Skills',
         A: 65,
         B: 85,
         fullMark: 150,
      },
   ];

   return (
      <div className='cont'>
         <div className='container'>
            <div className='section gpa-section'>
               <div className='gpa'>
                  <div className='gpa-label'>Overall GPA</div>
                  <div className='gpa-value'>4.0</div>
                  <div className='gpa-history'>
                     <span>GPA History:</span>
                     <ul>
                        <li>Year 1: 3.8</li>
                        <li>Year 2: 3.9</li>
                        <li>Year 3: 4.0</li>
                        <li>Year 4: 4.0</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="section radar-chart-section">
               <RadarChart cx={180} cy={170} outerRadius={150} width={500} height={500} data={skillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis />
                  <Radar name="Mike" dataKey="A" stroke="#4B64F2" fill="#4B64F2" fillOpacity={0.6} />
               </RadarChart>
            </div>
            <div className='section achievements-section'>
               <h2>Achievements</h2>
               <ul className='achievements-list'>
                  <li>
                     <span>Math Olympiad:</span> Winner
                  </li>
                  <li>
                     <span>Science Fair:</span> First Place
                  </li>
                  <li>
                     <span>Debate Club:</span> Best Speaker
                  </li>
               </ul>
            </div>
            <div className='section top-subject-section'>
               <h2>Top Subject</h2>
               <div className='top-subject'>
                  <span>Not Top Subject</span>
                  <span className='big-font'>Top Subject</span>
               </div>
            </div>
            <div className='section top-percent-section'>
               <h2>Top Percent</h2>
               <div className='top-percent'>
                  <span>Not Top Percent</span>
                  <span className='big-font'>Top Percent</span>
               </div>
            </div>
            <div className='section school-skips-section'>
               <h2>School Skips</h2>
               <div className='calendly'>
                  {/* Your Calendly widget code here */}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Profile;
