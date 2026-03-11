import Banner from '../components/Home/Banner';
import BVCTE from '../components/Home/BVCTE';
import OurCourses from '../components/Home/OurCourses';
import Facilities from '../components/Home/Facilities';
import Faculty from '../components/Home/Faculty';
import StudentAchivement from '../components/Home/StudentAchivement';
import StudentActivities from '../components/Home/StudentActivities';

function Home() {
    return (
        <>
            <Banner />
            <BVCTE />
            <StudentAchivement />
            <OurCourses />
            <Facilities />
            <StudentActivities />
            <Faculty />
        </>
    );
}

export default Home;
