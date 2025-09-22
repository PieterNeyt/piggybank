import {useParams} from "react-router";

export function PiggyBankDetail() {
    const {id} = useParams();
    return (
        <div>
            <h1>PiggyBank {id} Detail page</h1>
        </div>
    )

}