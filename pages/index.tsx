import type { NextPage } from "next";
import classes from "../styles/index.module.css";

import Note from "../components/Note";
import { useState } from "react";

type notes = {
	title: string;
	text: string;
	id: number;
}[];

const Home: React.FC = () => {
	const [notes, setNotes] = useState<{ title: string; text: string }[]>([
		{
			title: "First Notete",
			text: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida massa id augue varius fringilla. Curabitur sit amet semper elit, a egestas sapien. Morbi imperdiet lectus velit, vel sodales orci tincidunt a. Morbi quis orci ut libero dictum rhoncus sit amet id diam. Cras a lobortis leo. Praesent feugiat maximus dignissim. Proin suscipit augue vel elit sagittis, in maximus diam bibendum. Nullam a dui et ex venenatis consequat consequat a lacus. Duis ultricies orci quis nisi tempus, ac blandit libero maximus. Nunc nec imperdiet nisl. Aliquam erat volutpat. Nullam fringilla pulvinar arcu, ac pharetra turpis malesuada non. Nam et elit.",
		},
		{
			title: "Second Note",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida massa id augue varius fringilla. Curabitur sit amet semper elit, a egestas sapien.",
		},
		{
			title: "Third Note",
			text: 'Hi my name is Michal and i just oploded this project to github. I hope you like it. If you have any questions or suggestions please contact me at "',
		},
		{
			title: "Fourth Note",
			text: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 fromde Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
		},
	]);

	const [title, setTitle] = useState("");
	const [text, setText] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newNote = {
			title: title,
			text: text,
		};
		console.log(title, text);
		setNotes((prevNotes) => [...prevNotes, newNote]);
		setTitle("");
		setText("");
	};

	const deleteHandler = (props: number) => {
		const newNotes = notes.filter((note) => notes.indexOf(note) !== props);

		setNotes(newNotes);
	};

	return (
		<div className={classes.container}>
			<h2 className={classes.logo}>NotePad</h2>
			<form className={classes.inputs} onSubmit={handleSubmit}>
				<div className={classes.title}>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						name='title'
						id='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className={classes.text}>
					<label htmlFor='text'>Text</label>
					<input
						type='text'
						name='text'
						id='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<button className={classes.button}>Submit</button>
			</form>

			<ul className={classes.cards}>
				{notes.map((note, index) => (
					<li key={index}>
						<Note
							title={note.title}
							text={note.text}
							id={index}
							deleteHandler={deleteHandler}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
