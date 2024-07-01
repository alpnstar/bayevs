import { createContext } from "react";

interface CarouselContextProps {
    width: number;
}

export const CarouselContext = createContext<CarouselContextProps | undefined>(undefined);
