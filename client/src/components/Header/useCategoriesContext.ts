import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {ICategoriesElem} from "../../types/types";
import {ICategoryData} from "./HeaderCategoriesList";

type useCategoriesContextReturnType = [boolean, Dispatch<SetStateAction<boolean>>, React.RefObject<HTMLDivElement>, (toggler: boolean) => void];
export default function useCategoriesContext(category: ICategoryData, categoriesElems: ICategoriesElem[]): useCategoriesContextReturnType {
    const [contextDisplay, setContextDisplay] = useState<boolean>(false);
    const contextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const body = document.querySelector("#body");
        (body as HTMLBodyElement).addEventListener("click", (event: MouseEvent) => {
            const target = (event.target as HTMLElement);
            if (!target.closest(".header__categories")) {
                setContextDisplay(false);
            }
        });


    }, [])

    function clickHandler(toggler: boolean): void {
        if (toggler) {
            if (contextDisplay) return setContextDisplay(false);
            // eslint-disable-next-line sonarjs/no-ignored-return
            categoriesElems.filter(item => item.id !== category.id)
                .map(item => item.setDisplay(false));
            setContextDisplay(true);
            return;
        }
        setContextDisplay(false);
    }


    return [contextDisplay, setContextDisplay, contextRef, clickHandler];
}