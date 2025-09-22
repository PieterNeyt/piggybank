import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import {PiggyBankDetail} from "./pages/PiggyBankDetail.tsx";
import {PiggyBankList} from "./pages/PiggyBankList.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/piggybanks/:id" element={<PiggyBankDetail/>}/>
                <Route path="/piggybanks" element={<PiggyBankList/>}/>
                <Route path="/" element={<Navigate to="piggybanks"/>}/>

            </Routes>

        </BrowserRouter>

    )
}

export default App
