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
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['React', 'Typescript', 'SCSS', 'Redux', 'Jest', 'RTL'],
        timeframe: '2019 - present',
        url: 'https://www.ir35shield.co.uk/'
    },
    {
        title: 'Frontend Developer @ Awaze',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['HTML', 'CSS', 'Javascript', 'jQuery'],
        timeframe: 'Aug 2017 - Jan 2019',
        url: 'https://www.awaze.com/'
    },
    {
        title: 'Javascript Developer @ LJ Create',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['Javascript', 'Canvas', 'CreateJS', 'HTML', 'CSS'],
        timeframe: '2013 - 2017',
        url: 'https://ljcreate.com/uk/'
    },
    {
        title: 'Flash Developer @ LJ Create',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['ActionScript 3', 'XML', 'Photoshop', 'Illustrator'],
        timeframe: '2010 - 2013',
        url: 'https://ljcreate.com/uk/'
    },
    {
        title: 'Assistant Graphic Designer @ LJ Create',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['Photoshop', 'Illustrator', 'Powerpoint'],
        timeframe: '2009 - 2010',
        url: 'https://ljcreate.com/uk/'
    },
    {
        title: 'CAD Draughtsperson @ LJ Create',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        skills: ['Solidworks', 'AutoCAD'],
        timeframe: '2008 - 2009',
        url: 'https://ljcreate.com/uk/'
    }
];