import './App.css';
import PetStoreImg from './images/PetStore.png';

function App() {
  return (
    <div className='App'>
      <div className='Background' />
      {/* <a className='WebsiteLink' target='_blank' rel='noopener' href=''>
        <div>Resume Website: </div>
      </a> */}
      <div className='PageGrid'>
        <div className='Name'> Connor Rack </div>
        <Header />
        <Statement />
        <Skills />
        <Projects />
        <WorkXP />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className='Header'>
      <div className='Links'>
        <p className='HeaderTitles'>Links</p>
        <div style={{ display: 'flex' }}>
          <ul className='HeaderLists'>
            <a target='_blank' rel='noopener' href='https://github.com/Racksoup'>
              <li>Github - https://github.com/Racksoup</li>
            </a>
            <a
              target='_blank'
              rel='noopener'
              href='https://www.linkedin.com/in/connor-rack-ab9755206/'
            >
              <li>LinkedIn - https://www.linkedin.com /in/connor-rack-ab9755206/</li>
            </a>
          </ul>
          <ul className='HeaderLists' style={{ marginLeft: '20px' }}>
            <a target='_blank' rel='noopener' href=''>
              <li>Showcase - </li>
            </a>
            <a target='_blank' rel='noopener' href=''>
              <li>Blog - </li>
            </a>
          </ul>
        </div>
      </div>
      <div className='Contact'>
        <p className='HeaderTitles'>Contact</p>
        <ul className='HeaderLists'>
          <li>Cell: 613-869-2343</li>
          <li>Email: Tranquilgorge@outlook.com</li>
        </ul>
      </div>
    </div>
  );
}

function Statement() {
  return (
    <div className='Statement'>
      <p
        className='SectionText'
        style={{ fontSize: '22px', width: '80%', textAlign: 'center', margin: 'auto' }}
      >
        Highly motivated and self-driven Web Developer. Looking for team to contribute to, that can
        help me develop my skill-set.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className='Skills'>
      <p className='SectionTitle'>Skills</p>
      <div className='SkillsGrid'>
        <div className='SkillsGridList'>
          <p className='SkillsGridListLabel'>Front-End</p>
          <ul>
            <li>Html & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Axios</li>
          </ul>
        </div>
        <div className='SkillsGridList'>
          <p className='SkillsGridListLabel'>Back-End</p>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Heroku Deployment</li>
          </ul>
        </div>
        <div className='SkillsGridList'>
          <p className='SkillsGridListLabel'>Other</p>
          <ul>
            <li>Git & Github</li>
            <li>C++ & C#</li>
            <li>Lua & XML</li>
            <li>Unity Game Dev</li>
            <li>Photoshop & Illustrator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className='Projects'>
      <div className='ProjectsFlex'>
        <p className='SectionTitle'>Projects</p>
      </div>
      <div className='ProjectsGrid'>
        <div className='ProjectsGridItem'>
          <a target='_blank' rel='noopener' href='https://github.com/Racksoup/PetStore'>
            <p className='ProjectLinkLabel'>Github - https://github.com/Racksoup/PetStore</p>
          </a>
          <a
            className='ProjectsGridButton'
            target='_blank'
            rel='noopener'
            href='https://whispering-springs-57888.herokuapp.com/'
          >
            <img src={PetStoreImg} className='ProjectImage' />
          </a>
          <a target='_blank' rel='noopener' href='https://whispering-springs-57888.herokuapp.com/'>
            <p className='ProjectLinkLabel'>https://whispering-springs-57888.herokuapp.com/</p>
          </a>
          <p className='ProjectItemDesc'>
            Online Pet-Store! Lets users make a profile and buy from website. Admins can update
            items and check orders.
          </p>
        </div>
        <div className='ProjectsGridItem'>
          <a target='_blank' rel='noopener' href=''>
            <p className='ProjectLinkLabel'>Github - </p>
          </a>
          <a className='ProjectsGridButton' target='_blank' rel='noopener' href=''>
            {/* <img src={PetStoreImg} className='ProjectImage' /> */}
          </a>
          <a target='_blank' rel='noopener' href=''>
            <p className='ProjectLinkLabel'></p>
          </a>
          <p className='ProjectItemDesc'></p>
        </div>
        <div className='ProjectsGridItem'>
          <a target='_blank' rel='noopener' href=''>
            <p className='ProjectLinkLabel'>Github - </p>
          </a>
          <a className='ProjectsGridButton' target='_blank' rel='noopener' href=''>
            {/* <img src={PetStoreImg} className='ProjectImage' /> */}
          </a>
          <a target='_blank' rel='noopener' href=''>
            <p className='ProjectLinkLabel'></p>
          </a>
          <p className='ProjectItemDesc'></p>
        </div>
      </div>
    </div>
  );
}

function WorkXP() {
  return (
    <div className='WorkXP'>
      <p className='SectionTitle'>Work And Education</p>
      <ul className='WorkXPList'>
        <li style={{ marginBottom: '10px' }}>Algonquin College, Game Development, 2021-2022</li>
        <li>Home Depot, Merchandiser, July 2020 - March 2021</li>
      </ul>
    </div>
  );
}

export default App;
