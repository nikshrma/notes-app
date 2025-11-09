interface ButtonProps{
label:string,
clickHandler:()=>void
}

export function MainButton({label , clickHandler} : ButtonProps){
    return <div onClick={clickHandler} className=" text-nowrap transition-all duration-120 select-none  bg-[#82A4B0] text-white mt-1.75 text-center cursor-pointer p-1.25 w-full hover:bg-[#6892A1] focus:outline-none focus:ring-4 active:bg-[#4F717D] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {label}
    </div>
}