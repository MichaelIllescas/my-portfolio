import bootstrapLogo from '../assets/img/tecnologies-logos/bootstrap-logo.png';
import cssLogo from '../assets/img/tecnologies-logos/css-logo.png';
import gitLogo from '../assets/img/tecnologies-logos/git-logo.png';
import gitFlowLogo from '../assets/img/tecnologies-logos/gitFlow-logo.png';
import githubLogo from '../assets/img/tecnologies-logos/github-logo.png';
import htmlLogo from '../assets/img/tecnologies-logos/html-logo.png';
import javaLogo from '../assets/img/tecnologies-logos/java-logo.png';
import javascriptLogo from '../assets/img/tecnologies-logos/javascript-logo.webp';
import jpaLogo from '../assets/img/tecnologies-logos/jpa-hibernate-logo.png';
import jspLogo from '../assets/img/tecnologies-logos/jsp-image.png';
import jwtLogo from '../assets/img/tecnologies-logos/jwt-logo.png';
import mysqlLogo from '../assets/img/tecnologies-logos/mysql-logo.png';
import reactLogo from '../assets/img/tecnologies-logos/react-logo.png';
import springBootLogo from '../assets/img/tecnologies-logos/spring-boot.svg';
import springDataLogo from '../assets/img/tecnologies-logos/spring-data-logo.svg';
import springSecurityLogo from '../assets/img/tecnologies-logos/spring-security.svg';
import thymeleafLogo from '../assets/img/tecnologies-logos/thymeleaf-logo.png';

const techConfig = {
  javascript: { src: javascriptLogo, alt: 'JavaScript', scale: 1.3 },
  react: { src: reactLogo, alt: 'React', scale: 1.3 },
  java: { src: javaLogo, alt: 'Java', scale: 1.3 },
  spring: { src: springBootLogo, alt: 'Spring Boot' , scale: 1.1},
  springboot: { src: springBootLogo, alt: 'Spring Boot',scale: 1.1 },
  springsecurity: { src: springSecurityLogo, alt: 'Spring Security', scale: 1.1},
  springdatajpa: { src: springDataLogo, alt: 'Spring Data JPA' },
  mysql: { src: mysqlLogo, alt: 'MySQL', scale: 1.8 },
  bootstrap: { src: bootstrapLogo, alt: 'Bootstrap' , scale: 1.3},
  html: { src: htmlLogo, alt: 'HTML5' , scale: 1.3},
  html5: { src: htmlLogo, alt: 'HTML5', scale: 1.3 },
  css: { src: cssLogo, alt: 'CSS3' , scale: 1.3},
  css3: { src: cssLogo, alt: 'CSS3' , scale: 1.3},
  jwt: { src: jwtLogo, alt: 'JWT', scale: 1.1 },
  github: { src: githubLogo, alt: 'GitHub', scale: 1.2 },
  git: { src: gitLogo, alt: 'Git' },
  gitflow: { src: gitFlowLogo, alt: 'Git Flow' },
  thymeleaf: { src: thymeleafLogo, alt: 'Thymeleaf', scale: 1.6 },
  jsp: { src: jspLogo, alt: 'JSP, ', scale: 1.3 },
  jpa: { src: jpaLogo, alt: 'JPA / Hibernate', scale: 1.3 },
  'spring data jpa': { src: springDataLogo, alt: 'Spring Data JPA' },
};

const TechIcon = ({ tech }) => {
  const key = tech.toLowerCase().replace(/\s+/g, '');
  const config = techConfig[key];

  if (!config) return null;

  return (
    <div
      className="d-flex align-items-center justify-content-center me-2"
      title={config.alt}
      style={{
        width: '50px',
        height: '50px',
        display: 'flex',
        padding: '4px',
        backgroundColor: 'transparent',
      }}
    >
      <img
        src={config.src}
        alt={config.alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transform: `scale(${config.scale || 1})`,
        }}
      />
    </div>
  );
};

export default TechIcon;
