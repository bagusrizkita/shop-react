function Card(props) {
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href={props.url}>
                <img className="rounded-t-lg object-cover h-48 w-96" src={props.image} alt="" />
            </a>
            <div className="p-3">
                <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
                    {props.title}
                </h5>
                <p className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${props.className}`}>
                    {props.body}
                </p>
            </div>
        </div>
    )
}

export default Card;