import { HomePage } from ".";
import Iroute from "../../../typings/route.";
import { TopCoursesDetail } from "../CoursePage";

const routes: Iroute[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        exact: true
    },
    {
        path: '/courses',
        name: 'Courses',
        component: TopCoursesDetail,
        exact: true
    }
]

export default routes;