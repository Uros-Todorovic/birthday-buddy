import { useState } from 'react';
import List from './List';
import data, { DataType } from './data.js';

const App = () => {
	const [people, setPeople] = useState<DataType[]>(data);

	const clearList = (): void => {
		setPeople([]);
	};

	return (
		<main>
			<section className="container">
				<h3>{people.length} birthdays today</h3>
				<List people={people} />
				<button className="btn btn-block" type="button" onClick={clearList}>
					clear all
				</button>
			</section>
		</main>
	);
};
export default App;
