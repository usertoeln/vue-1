import MyProgram from '../Prog_1';
import Todo from '../todo';
import PrisonersVue from '../Prisoners';
import Dynamics from '../Dynamics';
import blog from '../blog';
import Axios from '../axios';
import Axios_2 from '../axios_2';
import CustomDirective from '../custom_directives';
import Home from './home';


export default [
    {path: '/MyProgram', name: 'MyProgram', component: MyProgram},
    {path: '/Todo', name: 'Todo', component: Todo},
    {path: '/PrisonersVue', name: 'PrisonersVue', component: PrisonersVue},
    {path: '/Dynamics', name: 'Dynamics', component: Dynamics},
    {path: '/blog', name: 'blog', component: blog},
    {path: '/Axios', name: 'Axios', component: Axios},
    {path: '/Axios_2', name: 'Axios_2', component: Axios_2},
    {path: '/CustomDirective', name: 'CustomDirective', component: CustomDirective},
    {path: '/', name: 'home', component: Home},
]
