import React from 'react';
import MainMenu from '../Menu/Menu';
import { Image } from 'semantic-ui-react'; 

const Header = () => {

    return (
        <div className="headerWrapper">
            <MainMenu />
            <div className="headerImage">
                <img src="https://s3-alpha-sig.figma.com/img/96e4/97f9/d8573185d0f036516d2621a7512a78da?Expires=1565568000&Signature=ELrbBOExCSEH2CyJGXL2njN9l5q2q9V0VR83yWbRJ6Mhd8UYTdEQ3ZM9UNvpci5mZCe~EW6AmC7mcDdpRw9ZH5Mf2uig~YPzmlMGxwq1VR9dzyOUiWVWcfDKdKUt3kg-Q5FhWdnn17P~i9diCVP68g7v26KZ80G8BpcPlPkGWHTZ2PNuC1pkeFqzFdc3RbWvOvmyhGkFTbQ~AimuhU2r84k2~Jo01JkevQ4PAqZdsEq1JPdXMxqQfX39tRvrdMPT4L0~HlrWQ7kHS5EV8m~iYxrgWQFVzqzhYJ8fhwJ6P626YFjV~SXtSFtadbhMLay753by0~7uVynKopLBE1oO8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Chef Hero"/>
                <h1>Chef Portfolio is the place for Professional Chefs</h1>
            </div>
        </div>
    )
}

export default Header