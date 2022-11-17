import React from "react";

function Header() {
    return (
        <div className="bg-purple-900 h-14 flex flex-row justify-center sticky top-0">
            <ul className="flex flex-row justify-center justify-items-center content-between items-center">
                <li className="bg-white p-2 rounded-md mx-1">
                    <a href="#">Home</a>
                </li>
                <li className="bg-white p-2 rounded-md mx-1">
                    <a href="#">NewList (API2)</a>
                </li>
                <li className="bg-white p-2 rounded-md mx-1">
                    <a href="#">Change Sidebar (API1)</a>
                </li>
                <li className="bg-white p-2 rounded-md mx-1">
                    <a href="#">Change Sidebar + New List (API2)</a>
                </li>
            </ul>
        </div>
    );
}


export default Header;