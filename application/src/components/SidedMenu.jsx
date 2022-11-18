import config from "../data/config";

function SidedMenu({urls, menuSide, urlChanger}) {
    const generatedUrls = urls.map((url, index) => {
        return (
            <li className="p-2 w-full text-center hover:bg-blue-900" key={index}>
                <a href={url.href} onClick={()=> {urlChanger(event, url.href)}}>{url.text}</a>
            </li>
        );
    });

    const menuCSSClass = config.MENU_CSS + " " + ( menuSide === "left" ? config.MENU_LEFT_CSS: config.MENU_RIGHT_CSS);

    return (
        <div className={menuCSSClass}>
           <ul className="flex flex-col justify-center justify-items-center content-between items-center">
                {generatedUrls}
            </ul>
        </div>
  )
}

export default SidedMenu;
