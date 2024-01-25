import Person from './Person';
import { DataType } from './data';

type ListProps = {
	people: DataType[];
};

const List = ({ people }: ListProps) => {
	return (
		<section>
			{people.map((person: DataType) => {
				return <Person key={person.id} {...person} />;
			})}
		</section>
	);
};

export default List;
