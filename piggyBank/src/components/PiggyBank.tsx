import './PiggyBank.scss'
import type {Account} from "../model/Account.ts";
import type {Owner} from "../model/Owner.ts";

interface PiggyBankProps {
    account: Account
}

interface OwnerBadgeProps {
    owner: Owner;
}

export function OwnerBadge({owner}: OwnerBadgeProps) {
    return (
        <div className="owner-badge" title={owner.name}><img src={owner.image} alt={owner.name}/></div>
    )
}

export function PiggyBank({account}: PiggyBankProps) {
    return (
        <div className="piggy-bank">
            <OwnerBadge owner={account.owner}/>
            <div className="fields">
                <div className="owner">{account.owner.name}'s piggybank</div>
                <div className="balance">Balance: {account.balance}</div>
            </div>
        </div>
    )
}