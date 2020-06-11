import React from 'react';
const headerStyle = {
    background : '#000',
    color : '#fff',
    padding : 20,
    textAlign : 'center',
    textTransform: 'uppercase'
}
const Header = function () {
    return (
        <div style={headerStyle}>
            Phone Directory
        </div>
    )
}
export default Header;