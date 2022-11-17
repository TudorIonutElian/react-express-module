function SidedMenu({urls, menuSide, urlChanger}) {
    const generatedUrls = urls.map((url, index) => {
        return (
            <li className="p-2 w-full text-center hover:bg-blue-900" key={index}>
                <a href={url.href} onClick={()=> {urlChanger(event, url.href)}}>{url.text}</a>
            </li>
        );
    });

    return (
        <div className={menuSide === "left" ? "h-screen bg-cyan-700 text-white fixed top-0 w-60 left-0": "h-screen bg-cyan-700 text-white fixed top-0 w-60 right-0"}>
           <ul className="flex flex-col justify-center justify-items-center content-between items-center">
                {generatedUrls}
            </ul>
        </div>
  )
}

export default SidedMenu;
