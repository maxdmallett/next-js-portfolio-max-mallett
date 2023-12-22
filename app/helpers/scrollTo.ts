export const scrollToElement = (element: HTMLElement) => {
    const yOffset = isMobile() ? -30 : -80; // allow space for fixed navbar in desktop view and hamburger menu in mobile view
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

const isMobile = () => {
    return window.innerWidth < 1024;
}