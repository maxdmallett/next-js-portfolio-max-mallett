export interface IJob {
    title: string;
    description: string;
    skills: string[];
    timeframe: string;
    url: string;
}

export const jobs: IJob[] = [
    {
        title: 'Frontend Developer @ IR35 Shield',
        description: 'Building high-quality, responsive user interfaces for a range of SaaS products. Collaborating with developers, designers, and product managers in a small, tech-focused team. Writing unit tests and conducting code reviews to ensure quality.',
        skills: ['React', 'Typescript', 'SCSS', 'Redux', 'Jest', 'RTL'],
        timeframe: '2019 - present',
        url: 'https://www.ir35shield.co.uk/'
    },
    {
        title: 'Frontend Developer @ Awaze',
        description: 'Worked on the e-commerce platform for a range of holiday brands, including Hoseasons, cottages.com, and Blue Chip Holidays. Built new features and maintained existing code, working with a large team of developers, designers, and product managers.',
        skills: ['HTML', 'CSS', 'Javascript', 'jQuery'],
        timeframe: '2017 - 2019',
        url: 'https://www.awaze.com/'
    },
    {
        title: 'Javascript Developer @ LJ Create',
        description: 'Created new and migrated existing interactive games using Javascript and Canvas, working with international clients.',
        skills: ['Javascript', 'Canvas', 'CreateJS', 'HTML', 'CSS'],
        timeframe: '2013 - 2017',
        url: 'https://ljcreate.com/uk/'
    },
    {
        title: 'Flash Developer @ LJ Create',
        description: 'Developed interactive educational content for STEM subjects. Involved coding, illustration, animation, 3D modelling, and SFX.',
        skills: ['ActionScript 3', 'XML', 'Photoshop', 'Illustrator'],
        timeframe: '2010 - 2013',
        url: 'https://ljcreate.com/uk/'
    },
    {
        title: 'Assistant Graphic Designer @ LJ Create',
        description: 'Worked with a team of graphic designers and technical authors to create graphics for online educational content.',
        skills: ['Photoshop', 'Illustrator', 'Powerpoint'],
        timeframe: '2009 - 2010',
        url: 'https://ljcreate.com/uk/'
    },
    {
        title: 'CAD Draughtsperson @ LJ Create',
        description: 'Created 3D part models, engineering drawings, and assembly diagrams for a range of science and technology equipment.',
        skills: ['Solidworks', 'AutoCAD'],
        timeframe: '2008 - 2009',
        url: 'https://ljcreate.com/uk/'
    }
];