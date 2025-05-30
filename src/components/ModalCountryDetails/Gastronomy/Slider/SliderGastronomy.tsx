import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useFetchData } from "../../DataFetch/DataFetch.tsx";
import "./SliderGastronomy.css";
import { DishesMap } from "../../../../assets/images/image.ts";

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
}

function Slider({ country }: { country: Country }) {
	const dataGastronomy: FetchDataResult | null = useFetchData(country);

	if (!dataGastronomy) return null;

	return (
		<div className="dishes">
			<Carousel
				className="carousel-dishes"
				autoPlay
				interval={5000}
				infiniteLoop
			>
				{dataGastronomy.typical_dishes.slice(0, 3).map((dish) => (
					<div key={dish.id} className="dish-card-slider">
						<img
							src={DishesMap[dish.picture]}
							alt="typical-dish-picture"
							id={`dish-${dish.id}`}
							className="dishe-img"
						/>
						<h2 className="dishe-title">{dish.name}</h2>
						<p className="dishe-description ">{dish.description}</p>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default Slider;
