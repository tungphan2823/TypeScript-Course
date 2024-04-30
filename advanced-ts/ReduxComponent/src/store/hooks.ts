import { AppDispatch } from "./store";
import { useDispatch } from "react-redux";
type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
