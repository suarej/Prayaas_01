import { HomePage } from ".";
import Iroute from "../../../typings/route.";
import { ContactUs } from "../ContactUs";
import { TopCoursesDetail } from "../CoursePage";
import { DAW } from "../DAW";
import { PreviousQuestions } from "../PYQ";
import { TestSeries } from "../TestSeries";

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
    },
    {
        path: '/PYQ',
        name: 'PYQ',
        component: PreviousQuestions,
        exact: true
    },
    {
        path: '/TestSeries',
        name: 'TestSeries',
        component: TestSeries,
        exact: true
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs,
        exact: true
    },
    {
        path: '/DAW',
        name: 'DAW',
        component: DAW,
        exact: true
    },
]

export default routes;