import { scrollToElement } from "./scrollTo";

export const handleRouteLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {

    const sectionId: string = event.currentTarget.getAttribute('data-sectionid') || '';
    const scrollTarget = document.getElementById(sectionId);

    if (scrollTarget) {
        event.preventDefault();
        scrollToElement(scrollTarget);
    }
}