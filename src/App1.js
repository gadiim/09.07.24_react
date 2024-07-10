import PersonalPage from './task_1/PersonalPage';
import bioData from './task_1/BioData';

export default function App1() {
    return (
        <fieldset>
            <legend>TASK 1</legend>
            <PersonalPage
                {...bioData}
            />
        </fieldset>
    );
}
