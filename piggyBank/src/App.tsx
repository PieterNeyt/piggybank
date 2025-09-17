import './App.css'
import {PiggyBank} from "./components/PiggyBank.tsx";
import type {Account} from "./model/Account.ts";

const account: Account = {
    balance: 100,
    owner: {
        name: "royale king",
        image: "https://sm.ign.com/ign_za/cover/c/clash-roya/clash-royale_88kr.jpg"
    }
}


function App() {
    return (
        <PiggyBank account={account}/>
    )
}

export default App
