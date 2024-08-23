export enum PageSectionType {
    LANDING = "landingPage",
    PROJECTS = "projectsPage",
    MEMBERS = "membersPage"
}

/**
 * Scroll to a particular page section
 * @param type The Page Section to scroll to
 */
export function scrollTo(type: PageSectionType) {
    if (typeof document !== 'undefined') {
        document.getElementById(type)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
}