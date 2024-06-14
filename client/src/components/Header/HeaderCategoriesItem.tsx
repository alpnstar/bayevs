import React, {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react';
import {ICategoriesElem, ICategory} from "../../types/types";

interface ICategoriesItemProps {
    category: ICategory,
    categoriesElems: ICategoriesElem[],
    setCategoriesElems: Dispatch<SetStateAction<ICategoriesElem[]>>
}

const HeaderCategoriesItem: FC<ICategoriesItemProps> = ({category, categoriesElems, setCategoriesElems}) => {

    const [contextDisplay, setContextDisplay] = useState<boolean>(false);
    const contextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setCategoriesElems(prevState => [...prevState, {id: category.id, setDisplay: setContextDisplay}])
    }, []);
    console.log(contextRef.current)
    useEffect(() => {
        contextRef.current && console.log(contextRef.current.offsetHeight)
    }, [contextRef.current]);

    function clickHandler(): void {
        if (contextDisplay) return setContextDisplay(false);
        categoriesElems.filter(item => item.id !== category.id)
            .map(item => item.setDisplay(false));
        setContextDisplay(true);
    }

    return (
        <li onClick={clickHandler}
            className={`main-style-list__item header__categories-item header__categories-item--expand ${contextDisplay ? 'header__categories-item--expand--active' : ''}`}>
            <div className="header__categories-item-title-wrapper">
                <div className="header__categories-item-title">{category.title}</div>
            </div>
            <div ref={contextRef}
                 className={`header__categories-context ${contextDisplay ? 'header__categories-context--active' : ''}`}>
                <div className="header__categories-context-wrapper container">
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