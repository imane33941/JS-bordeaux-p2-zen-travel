import { useEffect, useState } from "react";
interface Country {
	translations: Record<string, { common: string }>;
}

export interface EmergencyTips {
	police: string;
	ambulance: string;
	pompiers: string;
}

export interface BestTimeToVisit {
	spring: string;
	autumn: string;
	saisons: string;
	tips: string[];
}

export interface DataTipsInterface {
	country: string;
	visa: string;
	vaccines: string;
	currency: string;
	plug: string;
	language: string;
	emergency: EmergencyTips;
	best_time_to_visit: BestTimeToVisit;
}

export interface Dish {
	id: string;
	name: string;
	description: string;
	picture: string;
}

export interface ClimateData {
	[key: string]: {
		average: number;
		rainfall: number;
	};
}

export interface CountryInterface {
	translations: Record<string, { common: string }>;
	currencies: Record<string, { name: string; symbol: string }>;
	best_time_to_visit: BestTimeToVisit;
	typical_dishes: Dish[];
	climate: ClimateData;
	tips: DataTipsInterface;
}



export function useFetchData(country: Country) {
	const [dataFetch, setDataFetch] = useState<CountryInterface | null>(null);

	useEffect(() => {
		async function fetchCountryData() {
			const response = await fetch(
				"https://my-json-server.typicode.com/wildcodeschool-2025-03/JS-bordeaux-p2-api-zen-travel/db",
			);
			const data = await response.json();
			const countryName = country.translations.fra.common;
			const allCountries = [
				{ name: "Maroc", index: 0 },
				{ name: "France", index: 1 },
				{ name: "États-Unis", index: 2 },
			];
			const selectedCountry = allCountries.find((c) => c.name === countryName);
			if (selectedCountry) {
				setDataFetch(data.countries[selectedCountry.index]);
			}
		}
		fetchCountryData();
	}, [country]);

	return dataFetch;
}
