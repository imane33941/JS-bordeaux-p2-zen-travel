import "./Gastronomy.css";
import "./Slider/SliderGastronomy.css";
import { useFetchData } from "../DataFetch/DataFetch.tsx";
import Slider from "./Slider/SliderGastronomy.tsx";

interface DishInterface {
	id: string;
	name: string;
	description: string;
	picture: string;
}

interface FetchDataResult {
	typical_dishes: DishInterface[];
}

interface Country {
	translations: Record<string, { common: string }>;
	// currencies: string;
}

function Gastronomy({ country }: { country: Country }) {
	const dataGastronomy: FetchDataResult = useFetchData(country);

	if (!dataGastronomy) return null;

	return (
		<article className="gastronomy-body">
			<Slider country={country} />
			<div className="dishes">
				{dataGastronomy?.typical_dishes.slice(0, 3).map((dish) => (
					<div key={dish.id} className="dish-card">
						<img
							src={`src/assets/images/${dish.picture}`}
							alt="typical-dish-picture"
							className="dishe-img"
							id={`dish-${dish.id}`}
						/>
						<h2 className="dishe-title">{dish.name}</h2>
						<p className="dishe-description">{dish.description}</p>
					</div>
				))}
			</div>
		</article>
	);
}

export default Gastronomy;
