function Card () {
    return(
        <>
        <div className="h-[30vh] w-[35vw] bg-gray-100 rounded-xl space-y-5 p-3">
            <div className="flex gap-6">
                <img src="my-image.jpg" alt="" className="rounded-full h-16 w-16" />
            <div>
                <h1 className="font-medium">Muhammad Bilal</h1>
                <p>Software Engineer</p>
            </div>
            </div>
            <div className="flex justify-between">
            <button className="font-medium cursor-pointer duration-200 hover:text-gray-200">Follow</button>
            <button className="font-medium cursor-pointer duration-200 hover:text-gray-200">Info</button>
            <button className="font-medium cursor-pointer duration-200 hover:text-gray-200">Like</button>
            </div>
        </div>

        </>
    )
}

export default Card