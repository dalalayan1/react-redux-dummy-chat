import React from "react";

const Folder = ({ name, onClick, handleDeleteFolder}) => (
    <div className="folder-wrapper">
        <button className="folder" onClick = { (e) => onClick(e,name) }>
            <img className = "folder-img" src={"http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/folder-icon.png"}/>
            <div className = "folder-name">{ name }</div>
        </button>
        <button className="delete-folder-cta" onClick = { (e) => handleDeleteFolder(e, name) }>X</button>
    </div>
)

export default Folder;