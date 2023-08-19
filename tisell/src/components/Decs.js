import clsx from "clsx";



export default function Decs(){
    return (
        <div className={clsx(
            "flex justify-center items-start flex-col",
            "mr-60",
        )}>
            <img className={clsx(
                "rounded-full",
                "mb-20"
            )} src="./bg.jpg" alt="" width={350} height={350} />
            <h1 className={clsx(
                "text-5xl text-white font-bold",
                "mb-20",
                "tracking-wider leading-normal",
            )}>Find the best deals on flights right now</h1>
            <p className={clsx(
                "text-xl text-white tracking-wide"
            )}>Our customers rate us 4.5 out of 5 start based on 3200+ reviews!</p>
        </div>
    )
}