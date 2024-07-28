import React, {FC} from "react";
import logoIMG from "../../../public/images/logo.png";


const HeaderMiddle: FC = () => {
    return (
        <section className="header__middle">
            <div className="header__middle-wrapper container">
                <div className="header__logo-wrapper">
                        <span className="logo">
                            <img src={logoIMG} alt="rsrg"/>
                        </span>
                </div>
                <div className="header__phones">
                    <ul className="header__phones-list">
                        <li className="header__phone">+7 (920) 872-70-40</li>
                        <li className="header__phone">+7 (920) 872-70-40</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeaderMiddle;