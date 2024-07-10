import Pet from './task_2/Pet';
import petData from './task_2/PetData';

export default function App2() {
    return (
        <fieldset>
            <legend>TASK 2</legend>
            <Pet
                {...petData}
            />
        </fieldset>
    );
}