import AmbrasoftArticle from "../components/projects/articles/ambrasoftArticle";
import BlueChipSearchResultsArticle from "../components/projects/articles/bluechipSearchResultsArticle";
import DeeDeeCareArticle from "../components/projects/articles/deedeecareArticle";
import HyperfoxBandArticle from "../components/projects/articles/hyperfoxBandArticle";
import IR35ShieldBlogArticle from "../components/projects/articles/ir35ShieldBlogArticle";
import IR35ShieldReactMigrationArticle from "../components/projects/articles/ir35ShieldReactMigrationArticle";
import PortfolioArticle from "../components/projects/articles/portfolioArticle";
import VinniedropArticle from "../components/projects/articles/vinniedropArticle";
export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    thumbnailImageUrl?: string;
    skills: string[];
    articleContent: () => React.JSX.Element;
    websiteUrl?: string;
}

export const projects: Project[] = [
    {
        slug: 'react-migration-of-ir35-shield-dashboard',
        title: 'React migration of IR35 Shield Dashboard',
        shortDescription: 'Frontend project leader for converting a SaaS product dashboard from Vanilla JS to React with Typescript. Integrated several NodeJS packages and fully unit tested using Jest.',
        thumbnailImageUrl: '/images/ir35shieldreact/shield-react-project-thumbnail.png',
        skills: ['React', 'TypeScript', 'SCSS', 'Redux', 'Jest', 'RTL'],
        articleContent: IR35ShieldReactMigrationArticle
    },
    {
        slug: 'ir35-shield-blog',
        title: 'IR35 Shield Blog',
        shortDescription: 'Design and frontend build of the IR35 Shield blog. Adobe XD used for the design phase, HTML, SCSS, and Vanilla JS used for the build phase.',
        thumbnailImageUrl: '/images/ir35shieldblog/shield-blog-project-thumbnail.png',
        skills: ['HTML', 'SCSS', 'Javascript', 'Bootstrap', 'XD'],
        articleContent: IR35ShieldBlogArticle,
        websiteUrl: 'https://www.ir35shield.co.uk/Articles/',
    },
    {
        slug: 'maxmallett-portfolio-website',
        title: 'maxmallett.co.uk',
        shortDescription: 'My portfolio website, created to showcase some of the professional and personal projects I have completed. Built using NextJS, Typescript, Tailwind, and deployed on Vercel.',
        thumbnailImageUrl: '/images/portfolio/portfolio-project-thumbnail-1.png',
        skills: ['NextJS', 'Typescript', 'Tailwind', 'Figma', 'Vercel'],
        articleContent: PortfolioArticle
    },
    {
        slug: 'blue-chip-holidays-search-results-page',
        title: 'Blue Chip Holidays Search Results Page',
        shortDescription: 'Led frontend development for Blue Chip Holidays search results page at Awaze. Utilised Vanilla JS for AJAX, emphasising responsive design and robust coding.',
        thumbnailImageUrl: '/images/bluechip/bluechip-project-thumbnail.png',
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
    },
    {
        slug: 'ambrasoft-flash-to-canvas-game-conversions',
        title: 'Ambrasoft HTML Canvas Games',
        shortDescription: 'Ambrasoft, owned by Dutch company Noordhoff, is an educational suite featuring maths and language games. In 2015, I contributed to their collection of HTML Canvas games using CreateJS.',
        skills: ['Javascript', 'Canvas', 'CreateJS', 'Illustrator'],
        articleContent: AmbrasoftArticle
    },
];