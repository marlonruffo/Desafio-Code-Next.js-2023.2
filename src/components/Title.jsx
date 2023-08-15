import React from 'react';
import styles from "../../styles/Title.css";

export function Title(props) {
    return (
        <div>
            <h1 className="title">{props.title}</h1>
        </div>
    );
}