import {useState} from "react";

export type togglerHandlerType = (val?: boolean) => void;

export function useToggler(init: boolean): [boolean, togglerHandlerType] {
    const [toggler, setToggler] = useState<boolean>(init);

    const togglerHandler: togglerHandlerType = (val) => {
        setToggler(val ? val : !toggler);
    }

    return [toggler, togglerHandler];
}