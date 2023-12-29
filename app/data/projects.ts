import BlueChipSearchResultsArticle from "../components/projects/articles/bluechipSearchResultsArticle";
import DeeDeeCareArticle from "../components/projects/articles/deedeecareArticle";
import HyperfoxBandArticle from "../components/projects/articles/hyperfoxBandArticle";
import VinniedropArticle from "../components/projects/articles/vinniedropArticle";
export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    thumbnailImageUrl?: string;
    skills: string[];
    articleContent?: () => React.JSX.Element;
    websiteUrl?: string;
}

export const projects: Project[] = [
    {
        slug: 'react-migration-of-ir35-shield-dashboard',
        title: 'React migration of IR35 Shield Dashboard',
        shortDescription: 'Morbi dui nisi, fermentum a arcu ac, luctus vehicula ex. Donec tincidunt ultrices est, eu vestibulum ex convallis sit amet. Cras efficitur diam orci, tristique gravida dui feugiat nec.',
        thumbnailImageUrl: '/projects/project-thumbnail-placeholder.png',
        skills: ['React', 'TypeScript', 'SCSS', 'Redux', 'Jest', 'RTL'],
    },
    {
        slug: 'ir35-shield-blog',
        title: 'IR35 Shield Blog',
        shortDescription: 'Morbi dui nisi, fermentum a arcu ac, luctus vehicula ex. Donec tincidunt ultrices est, eu vestibulum ex convallis sit amet. Cras efficitur diam orci, tristique gravida dui feugiat nec.',
        thumbnailImageUrl: '/projects/project-thumbnail-placeholder.png',
        skills: ['HTML', 'SCSS', 'Javascript', 'Bootstrap', 'XD'],
    },
    {
        slug: 'maxmallett-portfolio-website',
        title: 'maxmallett.co.uk',
        shortDescription: 'Morbi dui nisi, fermentum a arcu ac, luctus vehicula ex. Donec tincidunt ultrices est, eu vestibulum ex convallis sit amet. Cras efficitur diam orci, tristique gravida dui feugiat nec.',
        thumbnailImageUrl: '/projects/project-thumbnail-placeholder.png',
        skills: ['NextJS', 'Typescript', 'Tailwind', 'Figma', 'Vercel'],
    },
    {
        slug: 'blue-chip-holidays-search-results-page',
        title: 'Blue Chip Holidays Search Results Page',
        shortDescription: 'Led frontend development for Blue Chip Holidays search results page at Awaze. Utilised vanilla JS for AJAX, emphasising responsive design and robust coding.',
        thumbnailImageUrl: '/projects/bluechip/bluechip-project-thumbnail.png',
        skills: ['Javascript', 'HTML', 'CSS', 'Spectre CSS'],
        articleContent: BlueChipSearchResultsArticle,
    },
    {
        slug: 'nextjs-migration-deedeecare',
        title: 'Next.js migration of deedeecare.co.uk',
        shortDescription: "Migrated to Next.js in 2023 to improve developer and client experience. Utilised reusable components and Contentful for testimonial updates, streamlining maintenance and enabling client content control.",
        skills: ['Next.js', 'TypeScript', 'SCSS', 'Photoshop'],
        articleContent: DeeDeeCareArticle,
        websiteUrl: 'https://www.deedeecare.co.uk/',
    },
    {
        slug: 'ambrasoft-flash-to-canvas-game-conversions',
        title: 'Ambrasoft Flash to Canvas Game Conversions',
        shortDescription: 'Morbi dui nisi, fermentum a arcu ac, luctus vehicula ex. Donec tincidunt ultrices est, eu vestibulum ex convallis sit amet. Cras efficitur diam orci, tristique gravida dui feugiat nec.',
        skills: ['Javascript', 'Canvas', 'CreateJS', 'Illustrator'],
    },
    {
        slug: 'vinnie-drop',
        title: 'Vinnie Drop Mobile Game & Website',
        shortDescription: "In 2017, I developed Vinnie Drop, a mobile game inspired by Net Yaroze's 'Down'. Simple controls, custom engine, along with a static website to complement the Google Play release.",
        skills: ['Adobe Animate', 'ActionScript 3', 'Javascript'],
        articleContent: VinniedropArticle,
    },
    {
        slug: 'hyperfoxband',
        title: 'hyperfoxband.com',
        shortDescription: 'Designed and built a minimalist website for the band Hyperfox, showcasing music, videos, and news.',
        skills: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Photoshop'],
        articleContent: HyperfoxBandArticle,
    }
];