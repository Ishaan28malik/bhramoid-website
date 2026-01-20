import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { ScrollReveal } from '../components/ScrollAnimation';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <HeroSlider />
      
      {/* SECTION 1: Your Competitive Edge in Modern Politics */}
      <section className="home-section section-competitive">
        <div className="section-graphic section-graphic-1"></div>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Your Competitive Edge in Modern Politics</h2>
          </ScrollReveal>
          
          {/* Row 1 */}
          <div className="content-row">
            <ScrollReveal delay={0.1}>
              <div className="content-block enhanced-block">
                <div className="block-icon">📊</div>
                <h3>Digital-First Campaign Strategy</h3>
                <p>
                  In an era where digital presence determines electoral success, BrahMoID provides 
                  political leaders with cutting-edge tools to connect directly with constituents. 
                  Our platform enables real-time communication, data-driven decision making, and 
                  transparent governance practices that build trust and credibility.
                </p>
                <Link to="/about" className="btn">Learn More</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="content-block enhanced-block">
                <div className="block-icon">🔍</div>
                <h3>Transparency as a Differentiator</h3>
                <p>
                  Voters increasingly demand accountability from their representatives. BrahMoID's 
                  transparent governance framework allows leaders to demonstrate integrity, track 
                  performance, and build a reputation for honest public service. This transparency 
                  becomes your strongest campaign asset.
                </p>
                <Link to="/about" className="btn">Learn More</Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2 */}
          <div className="content-row">
            <ScrollReveal delay={0.3}>
              <div className="content-block enhanced-block">
                <div className="block-icon">📈</div>
                <h3>Data-Driven Constituency Management</h3>
                <p>
                  Make informed decisions based on real constituency data. Track grievances, monitor 
                  development projects, analyze feedback, and respond to citizen needs systematically. 
                  This data-driven approach ensures you address the issues that matter most to your voters.
                </p>
                <Link to="/about" className="btn">Learn More</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="content-block enhanced-block">
                <div className="block-icon">⚖️</div>
                <h3>Independent Platform Advantage</h3>
                <p>
                  Unlike party-affiliated tools, BrahMoID operates independently, allowing you to 
                  maintain your unique political identity while leveraging powerful governance 
                  technology. Build your brand and reputation without being constrained by party limitations.
                </p>
                <Link to="/about" className="btn">Learn More</Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 3 */}
          <div className="content-row">
            <ScrollReveal delay={0.5}>
              <div className="content-block enhanced-block">
                <div className="block-icon">💰</div>
                <h3>Cost-Effective Campaign Infrastructure</h3>
                <p>
                  Traditional campaign infrastructure requires significant investment in technology, 
                  personnel, and systems. BrahMoID provides a comprehensive governance platform at 
                  a fraction of the cost, allowing you to allocate resources more effectively toward 
                  direct voter engagement.
                </p>
                <Link to="/about" className="btn">Learn More</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <div className="content-block enhanced-block">
                <div className="block-icon">🔄</div>
                <h3>Sustainable Long-Term Engagement</h3>
                <p>
                  Elections are won through consistent engagement, not just campaign season activity. 
                  BrahMoID enables continuous communication with constituents, building lasting 
                  relationships that translate into electoral support when it matters most.
                </p>
                <Link to="/about" className="btn">Learn More</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Leadership Advancement Framework */}
      <section className="home-section section-leadership">
        <div className="section-graphic section-graphic-2"></div>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Our Leadership Advancement Framework</h2>
          </ScrollReveal>
          
          <div className="content-blocks">
            <ScrollReveal delay={0.1}>
              <div className="content-block-full enhanced-block">
                <div className="block-icon-large">🛠️</div>
                <h3>Comprehensive Governance Tools</h3>
                <p>
                  BrahMoID provides a complete suite of governance tools designed to help political 
                  leaders excel in their roles. From grievance management to project tracking, from 
                  citizen feedback systems to transparency portals, our platform covers every aspect 
                  of effective public service delivery.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="content-block-full enhanced-block">
                <div className="block-icon-large">📊</div>
                <h3>Performance Tracking and Analytics</h3>
                <p>
                  Monitor your governance performance with detailed analytics and reporting. Track 
                  response times, resolution rates, citizen satisfaction, and development project 
                  progress. Use data-driven insights to improve your service delivery and demonstrate 
                  your effectiveness to constituents.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="content-block-full enhanced-block">
                <div className="block-icon-large">⚖️</div>
                <h3>Fair and Transparent Platform</h3>
                <p>
                  <strong>Note on Fairness:</strong> BrahMoID is committed to providing equal 
                  opportunities to all political leaders regardless of party affiliation. We maintain 
                  strict conflict of interest policies to ensure our platform remains neutral and 
                  accessible to leaders across the political spectrum. Our technology serves democracy, 
                  not any particular political agenda.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Need for Reform in Governance */}
      <section className="home-section section-reform">
        <div className="section-graphic section-graphic-3"></div>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Need for Reform in Governance</h2>
          </ScrollReveal>
          
          <div className="reform-blocks">
            <ScrollReveal delay={0.1}>
              <div className="reform-block enhanced-block">
                <div className="reform-icon">📋</div>
                <h3>Right to Information (RTI) Challenges</h3>
                <div className="problem-zone">
                  <h4>Problem Zone:</h4>
                  <ul>
                    <li>Delayed responses to RTI applications</li>
                    <li>Incomplete or evasive information provided</li>
                    <li>Lack of proactive disclosure of information</li>
                    <li>Citizens unaware of their rights and procedures</li>
                    <li>No systematic tracking of RTI requests</li>
                  </ul>
                </div>
                <div className="transition-line">
                  <div className="arrow-graphic">→</div>
                </div>
                <div className="solution-preview">
                  <h4>Solution Preview:</h4>
                  <p>
                    BrahMoID's RTI management system ensures timely responses, complete transparency, 
                    and proactive information disclosure. Citizens can easily file RTI requests, track 
                    their status, and receive comprehensive information through our platform.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="reform-block enhanced-block">
                <div className="reform-icon">⚖️</div>
                <h3>Right to Redressal (RTR) Issues</h3>
                <div className="problem-zone">
                  <h4>Problem Zone:</h4>
                  <ul>
                    <li>Grievances go unaddressed for months or years</li>
                    <li>No accountability for delayed responses</li>
                    <li>Lack of systematic grievance tracking</li>
                    <li>Citizens don't know the status of their complaints</li>
                    <li>No escalation mechanism for unresolved issues</li>
                  </ul>
                </div>
                <div className="transition-line">
                  <div className="arrow-graphic">→</div>
                </div>
                <div className="solution-preview">
                  <h4>Solution Preview:</h4>
                  <p>
                    Our grievance management system provides real-time tracking, automatic escalation, 
                    and guaranteed response timelines. Every complaint is logged, assigned, and 
                    monitored until resolution, ensuring accountability and citizen satisfaction.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="reform-block enhanced-block">
                <div className="reform-icon">💬</div>
                <h3>Citizen Feedback Mechanisms</h3>
                <div className="problem-zone">
                  <h4>Problem Zone:</h4>
                  <ul>
                    <li>No systematic way to collect citizen feedback</li>
                    <li>Feedback is collected but not acted upon</li>
                    <li>Lack of two-way communication channels</li>
                    <li>Citizens feel their opinions don't matter</li>
                    <li>No data-driven policy adjustments based on feedback</li>
                  </ul>
                </div>
                <div className="transition-line">
                  <div className="arrow-graphic">→</div>
                </div>
                <div className="solution-preview">
                  <h4>Solution Preview:</h4>
                  <p>
                    BrahMoID's feedback system enables continuous citizen engagement, real-time 
                    sentiment analysis, and data-driven policy improvements. Leaders can respond 
                    directly to feedback and demonstrate that citizen voices shape governance decisions.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="reform-block enhanced-block">
                <div className="reform-icon">🔧</div>
                <h3>Grievance Resolution Systems</h3>
                <div className="problem-zone">
                  <h4>Problem Zone:</h4>
                  <ul>
                    <li>Multiple disconnected grievance systems</li>
                    <li>No coordination between different departments</li>
                    <li>Duplicate complaints and wasted resources</li>
                    <li>No performance metrics for resolution efficiency</li>
                    <li>Citizens forced to navigate complex bureaucratic processes</li>
                  </ul>
                </div>
                <div className="transition-line">
                  <div className="arrow-graphic">→</div>
                </div>
                <div className="solution-preview">
                  <h4>Solution Preview:</h4>
                  <p>
                    Our unified grievance management platform integrates all complaint systems, 
                    provides seamless coordination between departments, eliminates duplicates, and 
                    offers clear performance metrics. Citizens enjoy a simple, transparent process 
                    with guaranteed outcomes.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Governance Transformation Strategy */}
      <section className="home-section section-transformation">
        <div className="section-graphic section-graphic-4"></div>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Our Governance Transformation Strategy</h2>
          </ScrollReveal>
          
          <div className="content-blocks">
            <ScrollReveal delay={0.1}>
              <div className="content-block-full enhanced-block">
                <div className="block-icon-large">🌐</div>
                <h3>Digital Infrastructure for Modern Governance</h3>
                <p>
                  We build comprehensive digital infrastructure that transforms how governance works. 
                  Our platform integrates all aspects of public service delivery into a unified, 
                  transparent, and accountable system. From citizen engagement to project management, 
                  from grievance resolution to performance tracking, everything is connected and visible.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="content-block-full enhanced-block">
                <div className="block-icon-large">👥</div>
                <h3>Citizen-Centric Design Philosophy</h3>
                <p>
                  Every feature in BrahMoID is designed with citizens at the center. We prioritize 
                  ease of use, accessibility, and transparency. Our platform ensures that citizens 
                  can easily access information, file complaints, provide feedback, and track the 
                  progress of their requests without navigating complex bureaucratic systems.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="content-block-full enhanced-block">
                <div className="block-icon-large">📈</div>
                <h3>Sustainable and Scalable Solutions</h3>
                <p>
                  Our governance transformation strategy focuses on building sustainable systems that 
                  can scale from local panchayats to state-level governance. We design solutions that 
                  work for small communities and can grow to serve larger constituencies, ensuring 
                  long-term viability and impact.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 5: Why Adopt BrahMoID */}
      <section className="home-section section-why-adopt">
        <div className="section-graphic section-graphic-5"></div>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Why Adopt BrahMoID?</h2>
          </ScrollReveal>
          
          <div className="content-blocks">
            <ScrollReveal delay={0.1}>
              <div className="content-block-full enhanced-block">
                <div className="block-icon-large">🏆</div>
                <h3>Proven Model: RSS/BJP Success Story</h3>
                <p>
                  Just as the RSS provided organizational infrastructure that enabled BJP's political 
                  success, BrahMoID provides governance infrastructure that enables political leaders 
                  to excel. We don't dictate ideology or policy—we provide the tools and systems that 
                  make effective governance possible, regardless of political affiliation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="content-block-full enhanced-block">
                <div className="block-icon-large">📱</div>
                <h3>Platform Power: Twitter/Trump Analogy</h3>
                <p>
                  Twitter didn't create Donald Trump's political message, but it provided the platform 
                  that amplified his reach and enabled direct communication with constituents. Similarly, 
                  BrahMoID doesn't create your political vision, but it provides the platform that 
                  amplifies your governance effectiveness and enables direct engagement with citizens.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="content-block-full enhanced-block">
                <div className="block-icon-large">🎯</div>
                <h3>Strategic Advantage: I-PAC Model</h3>
                <p>
                  I-PAC demonstrated how professional campaign management and data-driven strategies 
                  can transform electoral outcomes. BrahMoID applies similar professional standards 
                  to governance, providing data-driven tools, systematic processes, and strategic 
                  frameworks that help leaders deliver results and build electoral credibility.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="content-block-full enhanced-block">
                <div className="block-icon-large">🔄</div>
                <h3>Independent and Neutral Platform</h3>
                <p>
                  Unlike party-affiliated organizations, BrahMoID operates independently, serving 
                  leaders across the political spectrum. This neutrality ensures that our platform 
                  remains focused on governance excellence rather than partisan agendas, making it 
                  a trusted partner for any political leader committed to transparent, accountable governance.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 6: Function: BrahMoID vs. Political Party */}
      <section className="home-section section-comparison">
        <div className="section-graphic section-graphic-6"></div>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Function: BrahMoID vs. Political Party</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="context-strip">
              <div className="context-column">
                <div className="context-icon">⚙️</div>
                <h3>BrahMoID: The Governance Engine</h3>
                <p>
                  BrahMoID provides the technology, systems, and infrastructure for effective governance. 
                  We are the platform that enables transparency, accountability, and citizen engagement.
                </p>
              </div>
              <div className="context-column">
                <div className="context-icon">🏛️</div>
                <h3>Political Party: The Ideology & Politics</h3>
                <p>
                  Political parties provide ideology, policy direction, and political organization. 
                  They define the vision and values that guide governance decisions.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="division-blocks">
            <ScrollReveal delay={0.2}>
              <div className="division-block enhanced-block">
                <h3>BrahMoID Responsibilities</h3>
                <ul>
                  <li>Grievance management systems</li>
                  <li>RTI request processing</li>
                  <li>Citizen feedback collection</li>
                  <li>Project tracking and transparency</li>
                  <li>Performance analytics and reporting</li>
                  <li>Digital infrastructure and tools</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="division-block enhanced-block">
                <h3>Political Party Responsibilities</h3>
                <ul>
                  <li>Policy formulation and ideology</li>
                  <li>Political strategy and campaigning</li>
                  <li>Candidate selection and support</li>
                  <li>Constituency organization</li>
                  <li>Voter mobilization</li>
                  <li>Political messaging and communication</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="division-block enhanced-block">
                <h3>Shared Responsibilities</h3>
                <ul>
                  <li>Citizen engagement and communication</li>
                  <li>Development project implementation</li>
                  <li>Constituency service delivery</li>
                  <li>Public accountability</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="division-block enhanced-block">
                <h3>How They Work Together</h3>
                <p>
                  BrahMoID provides the governance infrastructure that enables political parties and 
                  leaders to deliver on their promises effectively. The party provides the vision; 
                  BrahMoID provides the tools to realize that vision with transparency and accountability.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="division-block enhanced-block">
                <h3>Independence and Neutrality</h3>
                <p>
                  BrahMoID operates independently of any political party, ensuring that our governance 
                  tools are available to all leaders regardless of affiliation. This independence 
                  ensures that our platform remains focused on governance excellence rather than 
                  partisan interests.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <div className="division-block enhanced-block">
                <h3>Complementary, Not Competing</h3>
                <p>
                  BrahMoID and political parties serve complementary roles. Parties focus on politics, 
                  ideology, and electoral strategy. BrahMoID focuses on governance infrastructure, 
                  transparency, and citizen engagement. Together, they enable effective democratic governance.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 7: Political Power Without Dirty Money */}
      <section className="home-section section-funding">
        <div className="section-graphic section-graphic-7"></div>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Political Power Without Dirty Money</h2>
          </ScrollReveal>
          
          <div className="funding-blocks">
            <ScrollReveal delay={0.1}>
              <div className="funding-block enhanced-block">
                <div className="funding-icon">💎</div>
                <h3>Transparent Funding Models</h3>
                <p>
                  BrahMoID operates on transparent, ethical funding models. We do not accept donations 
                  from corporations seeking political favors, nor do we engage in quid-pro-quo 
                  arrangements. Our funding comes from legitimate sources committed to democratic 
                  governance and transparency.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="funding-block enhanced-block">
                <div className="funding-icon">💳</div>
                <h3>Subscription-Based Platform</h3>
                <p>
                  Political leaders and organizations subscribe to BrahMoID's services at fair, 
                  transparent rates. This subscription model ensures that our platform remains 
                  accessible while maintaining financial sustainability without compromising our 
                  independence or neutrality.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="funding-block enhanced-block">
                <div className="funding-icon">🤝</div>
                <h3>Grants and Philanthropic Support</h3>
                <p>
                  We accept grants from foundations and organizations committed to democratic 
                  governance, transparency, and citizen engagement. All grants are publicly disclosed, 
                  and we maintain strict policies to ensure that funding sources do not influence 
                  our platform's neutrality or functionality.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="funding-block enhanced-block">
                <div className="funding-icon">🚫</div>
                <h3>No Corporate Political Contributions</h3>
                <p>
                  BrahMoID does not accept contributions from corporations in exchange for political 
                  influence or favors. We maintain strict separation between our funding sources and 
                  the political leaders who use our platform, ensuring that our governance tools 
                  remain free from corporate capture.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5}>
            <div className="key-message-strip">
              <div className="message-icon">✨</div>
              <h3>Clean Money, Clean Governance</h3>
              <p>
                Political power should be built on transparency, accountability, and citizen trust—not 
                on opaque financial arrangements or corporate influence. BrahMoID demonstrates that 
                effective governance technology can be funded ethically and operate independently, 
                serving democracy rather than special interests.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
