export function InputBox({label,placeholder,onChange}){
        return <div>
            <div>
                {label}
            </div>
            <input onChange={onChange} placeholder={placeholder} class="w-full px-2 py-1 border rounded border-slate-200"/>
        </div>
}