type PersonProps = {
	name: string;
	age: number;
	image: string;
};

const Person = ({ name, age, image }: PersonProps) => {
	return (
		<article className="person">
			<img className="img" src={image} alt={name} />
			<div>
				<h4>{name}</h4>
				<p>{age}</p>
			</div>
		</article>
	);
};

export default Person;
