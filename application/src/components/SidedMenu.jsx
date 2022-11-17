function SidedMenu() {

    return (
        <div className="h-screen bg-cyan-700 text-white fixed top-0 bottom-0 w-60">
           <ul className="flex flex-col justify-center justify-items-center content-between items-center">
                <li className="p-2 w-full text-center hover:bg-blue-900">
                    <a href="#">Home</a>
                </li>
                <li className="p-2 w-full text-center hover:bg-blue-900">
                    <a href="#">NewList (API2)</a>
                </li>
                <li className="p-2 w-full text-center hover:bg-blue-900">
                    <a href="#">Change Sidebar (API1)</a>
                </li>
                <li className="p-2 w-full text-center hover:bg-blue-900">
                    <a href="#">Change Sidebar + New List (API2)</a>
                </li>
            </ul>
        </div>
  )
}

export default SidedMenu;
