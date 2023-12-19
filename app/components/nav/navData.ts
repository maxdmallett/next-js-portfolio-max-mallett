export interface NavItem {
    label: string;
    href: string;
    sectionId: string;
}

export const navItems: NavItem[] = [
    {
        label: 'Home',
        href: '/',
        sectionId: 'hero',
    },
    {
        label: 'Experience',
        href: '/#experience',
        sectionId: 'experience',
    },
    {
        label: 'Projects',
        href: '/#projects',
        sectionId: 'projects',
    },
    {
        label: 'Contact',
        href: '/#contact',
        sectionId: 'contact',
    }
];