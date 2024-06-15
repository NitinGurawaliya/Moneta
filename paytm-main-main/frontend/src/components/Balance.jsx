export function Balance({value}){
    return <div className="flex">
    <div className="font-bold text-lg mt-4">
        Your balance Rs
    </div>
    <div className="font-semibild ml-4 text-lg mt-4">
        {value}
    </div>

    </div>
}