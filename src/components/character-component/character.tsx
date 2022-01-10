import { RaceModel } from "../../types/RaceModel";

const createCharacterComponent = (race: RaceModel): JSX.Element => {

    return (
        <div>
            {race.name}
        </div>
    );
}

export default createCharacterComponent;