export const scrollToElement = (element: HTMLElement) => {
    const yOffset = -80; // allow space for fixed navbar
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}