import './PiggyBank.scss'
import './OwnerBadge.scss'
import type {Account} from "../model/Account.ts";
import {useEffect, useState} from "react";
import {OwnerBadge} from "./OwnerBadge.tsx";


interface PiggyBankProps {
    account: Account
}


const backgrounds = ["piggy", "bank", "cocVault"] as const;

export function PiggyBank({account}: PiggyBankProps) {
    const [showFields, setShowFields] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const changeBackgroundIndex = (step: number) => {
        setCurrentIndex(i => (i + step + backgrounds.length) % backgrounds.length)
    }
    const goPrev = () => changeBackgroundIndex(-1)
    const goNext = () => changeBackgroundIndex(1)

    const background = backgrounds[currentIndex]

    useEffect(() => {
        if (!showFields) return
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setShowFields(false)
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [showFields])

    return (
        <div className={`piggy-bank bg-${background}`}>
            <div className="bg-controls">
                <button type="button" className="bg-btn" onClick={goPrev} aria-label="Previous theme">◀</button>
                <button type="button" className="bg-btn" onClick={goNext} aria-label="Next theme">▶</button>
            </div>

            <OwnerBadge
                owner={account.owner}
                onClick={() => setShowFields(s => !s)}
                aria-expanded={showFields}
            />

            {showFields && (
                <div className="fields">
                    <div className="owner">{account.owner.name}</div>
                    <div className="balance">{account.balance}</div>
                </div>
            )}
        </div>
    )
}