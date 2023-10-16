"use client";
import { decrement, increment } from "@/app/Redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import s from './../styles/counter.module.scss'

export default function Counter() {
    const dispatch = useDispatch();
    const value = useSelector((state: any) => state.counterPage.value);
    return (
        <div className={s.counter}>
            <h3>{value}</h3>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
}
