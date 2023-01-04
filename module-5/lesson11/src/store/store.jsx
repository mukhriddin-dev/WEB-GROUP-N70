import { createStore } from "redux";
import {reducer} from "../reducer/index";


export const store = createStore(reducer);