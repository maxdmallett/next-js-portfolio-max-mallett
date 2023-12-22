import BlueChipSearchResultsArticle from "../components/projects/articles/bluechipSearchResultsArticle";
import HyperfoxBandArticle from "../components/projects/articles/hyperfoxBandArticle";
export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    cardImageUrl?: string;
    skills: string[];
    articleContent?: () => React.JSX.Element;
    websiteUrl?: string;
}

export const projects: Project[] = [
    {
        slug: 'react-migration-of-ir35-shield-dashboard',
        title: 'React migration of IR35 Shield Dashboard',
        shortDescription: 'Morbi dui nisi, fermentum a arcu ac, luctus vehicula ex. Donec tincidunt ultrices est, eu vestibulum ex convallis sit amet. Cras efficitur diam orci, tristique gravida dui feugiat nec.',
        cardImageUrl: '/Dashboard_1.png',
        skills: ['React', 'TypeScript', 'SCSS', 'Redux', 'Jest', 'RTL'],
    },
    {
        slug: 'ir35-shield-blog',
        title: 'IR35 Shield Blog',
        shortDescription: 'Morbi dui nisi, fermentum a arcu ac, luctus vehicula ex. Donec tincidunt ultrices est, eu vestibulum ex convallis sit amet. Cras efficitur diam orci, tristique gravida dui feugiat nec.',
        cardImageUrl: '/Dashboard_1.png',
        skills: ['HTML', 'SCSS', 'Javascript', 'Bootstrap', 'XD'],
    },
    {
        slug: 'maxmallett-portfolio-website',
        title: 'maxmallett.co.uk',
        shortDescription: 'Morbi dui nisi, fermentum a arcu ac, luctus vehicula ex. Donec tincidunt ultrices est, eu vestibulum ex convallis sit amet. Cras efficitur diam orci, tristique gravida dui feugiat nec.',
        cardImageUrl: '/Dashboard_1.png',
        skills: ['NextJS', 'Typescript', 'Tailwind', 'Figma', 'Vercel'],
    },
    {
        slug: 'blue-chip-holidays-search-results-page',
        title: 'Blue Chip Holidays Search Results Page',
        shortDescription: 'Led frontend development for Blue Chip Holidays search results page at Awaze. Utilised vanilla JS for AJAX, emphasising responsive design and robust coding.',
        cardImageUrl: '/projects/bluechip/bluechip-sr-desktop.png',
        skills: ['Javascript', 'HTML', 'CSS', 'Spectre CSS'],
        articleContent: BlueChipSearchResultsArticle,
    },
    {
        slug: 'nextjs-migration-deedeecare',
        title: 'NextJS migration of deedeecare.co.uk',
        shortDescription: 'Morbi dui nisi, fermentum a arcu ac, luctus vehicula ex. Donec tincidunt ultrices est, eu vestibulum ex convallis sit amet. Cras efficitur diam orci, tristique gravida dui feugiat nec.',
        cardImageUrl: '/Dashboard_1.png',
        skills: ['NextJS', 'TypeScript', 'SCSS', 'Photoshop'],
    },
    {
        slug: 'ambrasoft-flash-to-canvas-game-conversions',
        title: 'Ambrasoft Flash to Canvas Game Conversions',
        shortDescription: 'Morbi dui nisi, fermentum a arcu ac, luctus vehicula ex. Donec tincidunt ultrices est, eu vestibulum ex convallis sit amet. Cras efficitur diam orci, tristique gravida dui feugiat nec.',
        cardImageUrl: '/Dashboard_1.png',
        skills: ['Javascript', 'Canvas', 'CreateJS', 'Illustrator'],
    },
    {
        slug: 'vinnie-drop',
        title: 'Vinnie Drop Mobile Game & Website',
        shortDescription: 'Morbi dui nisi, fermentum a arcu ac, luctus vehicula ex. Donec tincidunt ultrices est, eu vestibulum ex convallis sit amet. Cras efficitur diam orci, tristique gravida dui feugiat nec.',
        cardImageUrl: '/Dashboard_1.png',
        skills: ['Adobe Animate', 'ActionScript 3', 'Javascript'],
    },
    {
        slug: 'hyperfoxband',
        title: 'hyperfoxband.com',
        shortDescription: 'Designed and built a minimalist website for the band Hyperfox, showcasing music, videos, and news.',
        skills: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Photoshop'],
        articleContent: HyperfoxBandArticle,
    }
];