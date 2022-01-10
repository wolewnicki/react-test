import { RaceModel } from "../../types/RaceModel";


const createRaceComponent = (race: RaceModel): JSX.Element => {
    return (
        <option value={race.name.toLowerCase()}>{race.name}</option>
    );
}

export default createRaceComponent;