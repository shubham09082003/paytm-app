


export function Appbar({username}){
    return <div className="shadow h-14 flex justify-between w-full">
        <div className="flex flex-col justify-center h-full ml-4">Paytm App</div>
        <div className="flex"> 
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 p-3">{username ? username.charAt(0).toUpperCase() : 'U'}</div>
            <div className="flex flex-col justify-center h-full mr-1 font-bold">Hello</div>
            <div className="flex flex-col justify-center h-full font-bold">{username || 'User'}</div>
        </div>
    </div>
}