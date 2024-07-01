import React, {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from "react";
import {ICategoriesElem, ICategory} from "../../types/types";

interface ICategoriesItemProps {
    category: ICategory,
    categoriesElems: ICategoriesElem[],
    setCategoriesElems: Dispatch<SetStateAction<ICategoriesElem[]>>
}

const HeaderCategoriesItem: FC<ICategoriesItemProps> = ({category, categoriesElems, setCategoriesElems}) => {

    const [contextDisplay, setContextDisplay] = useState<boolean>(false);
    const contextRef = useRef<HTMLDivElement>(null);
    const body = document.querySelector("#body");
    (body as HTMLBodyElement).addEventListener("click", (event: MouseEvent) => {
        const target = (event.target as HTMLElement);
        if (!target.closest(".header__categories")) {
            setContextDisplay(false);
        }
    });
    useEffect(() => {
        setCategoriesElems(prevState => [...prevState, {id: category.id, setDisplay: setContextDisplay}]);
    }, []);

    function clickHandler(): void {
        if (contextDisplay) return setContextDisplay(false);
        // eslint-disable-next-line sonarjs/no-ignored-return
        categoriesElems.filter(item => item.id !== category.id)
            .map(item => item.setDisplay(false));
        setContextDisplay(true);
    }

    function closeClickHandler(): void {
        setContextDisplay(false);
    }

    return (
        <li
            className={`main-style-list__item header__categories-item header__categories-item--expand ${contextDisplay ? "header__categories-item--expand--active" : ""}`}>
            <div onClick={clickHandler} className="header__categories-item-title-wrapper">
                <div className="header__categories-item-title">{category.title}</div>
            </div>
            <div ref={contextRef}
                 className={`header__categories-context ${contextDisplay ? "header__categories-context--active" : ""}`}>
                <div className="header__categories-context-wrapper container">
                    <div className="header__categories-context-header">
                        <h2 className="main-h2">{category.title}</h2>
                        <div onClick={closeClickHandler} className="close-button" />
                    </div>
                    <div className="header__sub-categories">
                        {category.subCategories.map((subCategory, index) => (
                            <div key={index} className="header__sub-categories-item">
                        <span className="header__sub-categories-item-title">
                            {subCategory.title}
                        </span>
                                <ul className="header__sub-categories-item-list">
                                    {subCategory.items.map((subCategoryItems, index) => (
                                        <li key={index}><a href={subCategoryItems.url}>{subCategoryItems.title}</a></li>
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