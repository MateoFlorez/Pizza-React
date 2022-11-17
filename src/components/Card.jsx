export default function Card({photo, name}) {
    return (
        <div className="rounded overflow-hidden shadow-xl bg-gray-600 text-white">
            <img className="h-80 w-full" src={photo} alt=""></img>
            <div className="px-6 py-4 text-justify">
                <div className="font-bold text-xl mb-2 text-center">{name}</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nobis quia maxime facere, reiciendis
                </p>
            </div>
        </div>
    )
}