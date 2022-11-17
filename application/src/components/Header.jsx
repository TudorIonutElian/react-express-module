import React from "react";

function Header({urls}) {
    const generatedUrls = urls.map((url, index) => {
        return (
            <li className="bg-white p-2 rounded-md mx-1" key={index}>
                <a href={url.href}>{url.text}</a>
            </li>
        );
    });

    return (
        <div className="bg-purple-900 h-14 flex flex-row justify-center sticky top-0">
            <ul className="flex flex-row justify-center justify-items-center content-between items-center">
                {generatedUrls}
            </ul>
        </div>
    );
}


export default Header;