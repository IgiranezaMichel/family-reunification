const AdminNavigationAttribute: (activeLink: string) => NavigationItem = (activeLink) => {
    let navigationItems: NavigationItem = {
        activeLinkName: activeLink,
        bg: '#D8232A',
        textColor: 'text-white',
        navSticky:'',
        items: [
            {
                name: 'Admin',
                link: '/admin'
            },
            {
                name: 'Home',
                link: '/contact-us'
            },
            {
                name: 'Logout',
                link: '/logout'
            }
        ]
    };
    return navigationItems;
};
export {AdminNavigationAttribute}