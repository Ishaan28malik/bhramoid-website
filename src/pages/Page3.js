import React from 'react';
import './Page.css';

const Page3 = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Need for Reform in Governance</h1>
        
        <div className="reform-blocks">
          <div className="reform-block">
            <h2>Right to Information (RTI) Challenges</h2>
            <div className="problem-zone">
              <h3>Problem Zone:</h3>
              <ul>
                <li>Delayed responses to RTI applications</li>
                <li>Incomplete or evasive information provided</li>
                <li>Lack of proactive disclosure of information</li>
                <li>Citizens unaware of their rights and procedures</li>
                <li>No systematic tracking of RTI requests</li>
              </ul>
            </div>
            <div className="transition-line">
              <p><strong>→</strong></p>
            </div>
            <div className="solution-preview">
              <h3>Solution Preview:</h3>
              <p>
                BrahMoID's RTI management system ensures timely responses, complete transparency, 
                and proactive information disclosure. Citizens can easily file RTI requests, track 
                their status, and receive comprehensive information through our platform.
              </p>
            </div>
          </div>

          <div className="reform-block">
            <h2>Right to Redressal (RTR) Issues</h2>
            <div className="problem-zone">
              <h3>Problem Zone:</h3>
              <ul>
                <li>Grievances go unaddressed for months or years</li>
                <li>No accountability for delayed responses</li>
                <li>Lack of systematic grievance tracking</li>
                <li>Citizens don't know the status of their complaints</li>
                <li>No escalation mechanism for unresolved issues</li>
              </ul>
            </div>
            <div className="transition-line">
              <p><strong>→</strong></p>
            </div>
            <div className="solution-preview">
              <h3>Solution Preview:</h3>
              <p>
                Our grievance management system provides real-time tracking, automatic escalation, 
                and guaranteed response timelines. Every complaint is logged, assigned, and 
                monitored until resolution, ensuring accountability and citizen satisfaction.
              </p>
            </div>
          </div>

          <div className="reform-block">
            <h2>Citizen Feedback Mechanisms</h2>
            <div className="problem-zone">
              <h3>Problem Zone:</h3>
              <ul>
                <li>No systematic way to collect citizen feedback</li>
                <li>Feedback is collected but not acted upon</li>
                <li>Lack of two-way communication channels</li>
                <li>Citizens feel their opinions don't matter</li>
                <li>No data-driven policy adjustments based on feedback</li>
              </ul>
            </div>
            <div className="transition-line">
              <p><strong>→</strong></p>
            </div>
            <div className="solution-preview">
              <h3>Solution Preview:</h3>
              <p>
                BrahMoID's feedback system enables continuous citizen engagement, real-time 
                sentiment analysis, and data-driven policy improvements. Leaders can respond 
                directly to feedback and demonstrate that citizen voices shape governance decisions.
              </p>
            </div>
          </div>

          <div className="reform-block">
            <h2>Grievance Resolution Systems</h2>
            <div className="problem-zone">
              <h3>Problem Zone:</h3>
              <ul>
                <li>Multiple disconnected grievance systems</li>
                <li>No coordination between different departments</li>
                <li>Duplicate complaints and wasted resources</li>
                <li>No performance metrics for resolution efficiency</li>
                <li>Citizens forced to navigate complex bureaucratic processes</li>
              </ul>
            </div>
            <div className="transition-line">
              <p><strong>→</strong></p>
            </div>
            <div className="solution-preview">
              <h3>Solution Preview:</h3>
              <p>
                Our unified grievance management platform integrates all complaint systems, 
                provides seamless coordination between departments, eliminates duplicates, and 
                offers clear performance metrics. Citizens enjoy a simple, transparent process 
                with guaranteed outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
