import { stringify } from "querystring";
import React, { useState } from "react";
import classes from "../styles/note.module.css";

type NoteProps = {
	title: string;
	text: string;
	id: number;
	deleteHandler: (props: number) => void;
	onCLick: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function Note({
	title,
	text,
	id,
	deleteHandler,
}: NoteProps): JSX.Element {
	const deleteClick = (e: Event) => {
		deleteHandler(id);
	};

	return (
		<div className={classes.note}>
			<button className={classes.delete} value={id} onClick={deleteClick}>
				X
			</button>
			<h2 className={classes.title}>{title}</h2>
			<div className={classes.text}>{text}</div>
		</div>
	);
}
