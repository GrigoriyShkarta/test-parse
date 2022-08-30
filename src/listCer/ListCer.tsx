import {useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import {btnSlice} from "../store/reducers/btnState/btnSlice";
import {RootState} from "../store/store";

import "./ListCer.scss"


const ListCer = () => {
    const btnState = useSelector((state: RootState) => state.btnReducer.btnState);
    const {toggleState} = btnSlice.actions;
    const dispatch = useDispatch();

    return (
        <div className="listContainer">
            <div className="list">

            </div>
            <button onClick={() => dispatch(toggleState())}>{btnState ? "Додати" : "Скасувати"}</button>
        </div>
    );
};

export default ListCer;