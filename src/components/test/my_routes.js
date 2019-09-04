import page_1 from './page_1';
import page_2 from './page_2';
import dashboard from './dashboard';
import home from './home';

const appRoutes = [
    {path: '/page1', name: 'page1', component: page_1},
    {path: '/page2', name: 'page2', component: page_2},
    {path: '/dashboard', name: 'dashboard', component: dashboard},
    // {path: '/', name: 'home', component: home},
];

export default appRoutes;