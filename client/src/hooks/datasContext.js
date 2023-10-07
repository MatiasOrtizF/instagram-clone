import { useContext } from "react";
import { DatasContext } from "../context/useDatas";

export const useDatas = () => {
    const context = useContext(DatasContext)

    return context
}