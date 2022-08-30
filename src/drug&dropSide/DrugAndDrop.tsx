import {DragEvent, useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../store/store";
import {btnSlice} from "../store/reducers/btnState/btnSlice";

import "./DrugAndDrop.scss"


const DrugAndDrop = () => {
    const [error, setError] = useState(false);

    const btnState = useSelector((state: RootState) => state.btnReducer.btnState);
    const dispatch = useDispatch();
    const {toggleState} = btnSlice.actions;

    const ASN1 = require('@lapo/asn1js');

    const fileReader = new FileReader();

    const dragStartHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    // const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    //     // dispatch(toggleState())
    // }

    const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        let file = [...e.dataTransfer.files]

        console.log(file[0])

        const result = ASN1.decode(file[0]);
        if (result.typeName() !== 'SEQUENCE') {
            throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)';
        }
        const tbsCertificate = result.sub[0];

        setError(false)
        dispatch(toggleState())
    }

    return (
        <div className="dd-container">
            {btnState
                ? <div className="drop-area-close">Виберіть сертифікат, щоб переглянути інформацію</div>
                : <div
                    className="drop-area-open"
                    onDragStart={e => dragStartHandler(e)}
                    // onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => onDropHandler(e)}
                >Перетягніть файл сертифіката у поле</div>
            }
            {error ? <p>Невірний формат файлу!</p> : null}
        </div>
    );
};

export default DrugAndDrop;