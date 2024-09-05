import React, {Dispatch, FC, SetStateAction, useEffect} from "react";
import {ICategoriesElem} from "../../types/types";
import useCategoriesContext from "./useCategoriesContext";
import {Link} from "react-router-dom";
import {ICategoryData} from "./HeaderCategoriesList";

interface ICategoriesItemProps {
    category: ICategoryData,
    categoriesElems: ICategoriesElem[],
    setCategoriesElems: Dispatch<SetStateAction<ICategoriesElem[]>>
}

const HeaderCategoriesItem: FC<ICategoriesItemProps> = ({category, categoriesElems, setCategoriesElems}) => {

    const [contextDisplay,
        setContextDisplay,
        contextRef,
        clickHandler] = useCategoriesContext(category, categoriesElems);
    useEffect(() => {
        setCategoriesElems(prevState => [...prevState, {id: category.id, setDisplay: setContextDisplay}]);
    }, []);


    return (
        <li
            className={`main-style-list__item header__categories-item header__categories-item--expand ${contextDisplay ? "header__categories-item--expand--active" : ""}`}>
            <div onClick={() => clickHandler(true)} className="header__categories-item-title-wrapper">
                <div className="header__categories-item-title">{category.title}</div>
            </div>
            <div ref={contextRef}
                 className={`header__categories-context ${contextDisplay ? "header__categories-context--active" : ""}`}>
                <div className="header__categories-context-wrapper container">
                    <div className="header__categories-context-header">
                        <h2 className="main-h2">{category.title}</h2>
                        <div onClick={() => clickHandler(false)} className="close-button"/>
                    </div>
                    <div className="header__sub-categories">
                        {category.subCategories.map((subCategory, index) => (
                            <div key={index} className="header__sub-categories-item">
                        <span className="header__sub-categories-item-title">
                            {subCategory.attributes.name}
                        </span>
                                <ul className="header__sub-categories-item-list">
                                    {subCategory.attributes.subs.map((subCategoryItems, index) => (
                                        <li key={index}><Link onClick={() => clickHandler(false)} to={'/category/' + subCategoryItems.id + '/products'}>{subCategoryItems.attributes.name}</Link></li>
                                    ))}
                                </ul>

                            </div>

                        ))}

                    </div>
                </div>
            </div>
        </li>
    );
};

export default HeaderCategoriesItem;