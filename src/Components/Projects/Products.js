import projImg1 from '../../assets/img/project-img1.png';
import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';
import whetrip from '../../assets/img/mock1.jpeg';
import hertz from '../../assets/img/mock2.jpeg';
import Baggi from '../../assets/img/mock3.jpeg';

let all_projects = [
    {
        title: "Whetrip",
        description: 'VR PROJECT',
        imgUrl: whetrip,
        redirect: 'https://whetripp.netlify.app/',
        role1: 'React.js',
        role2: 'VR',
        role3: 'Real-time'
    },
    {
        title: "DionPower",
        description: 'Lithium Battery Repair',
        imgUrl: hertz,
        redirect: 'http://dionpower.in/',
        role1: 'React.js',
        role2: 'Firebase',
        role3: 'Freelance'
    },
    {
        title: "Baggi",
        description: 'E-commerce',
        imgUrl: Baggi,
        redirect: 'https://baggi.netlify.app/',
        role1: 'React.js',
        role2: 'E-commerce',
        role3: 'Real-time'
    }
];

export default all_projects;
