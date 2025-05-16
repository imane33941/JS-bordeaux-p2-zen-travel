import home from "./home.jpg";
import logo from "../logo.png";
import facebook from "./imageSocial/facebook.png";
import instagram from "./imageSocial/instagram.png";
import twitter from "./imageSocial/twitter.png";
import applePie from "./apple-pie.jpg";
import boeufBourguignon from "./boeuf-bourguignon.png";
import coqAuVin from "./coq-au-vin.png";
import couscous from "./couscous.jpg";
import crepes from "./crepes.png";
import croissant from "./croissant.png";
import hamburger from "./hamburger.jpg";
import harira from "./harira.jpg";
import hotDog from "./hot-dog.jpg";
import ratatouille from "./ratatouille.png";
import tajine from "./tajine.jpg";

import yellowStone from "./yellowstone.jpg";
import tourEiffel from "./tour-Eiffel.png";
import montSaintMichel from "./Mont-Saint-Michel.png";
import marrakech from "./marrakech.jpg";
import grandCanyon from "./grand-canyon.jpg";
import fes from "./fes.jpg";
import chefchaouen from "./chefchaouen.jpg";
import chateauVersailles from "./chateau-versailles.png";
import casablanca from "./casablanca.jpg";
import statusLiberte from "./liberty-statue.jpg";

const images = {
	logo,
	home,
	facebook,
	instagram,
	twitter,
};

export default images;

export const DishesMap: Record<string, string> = {
	"apple-pie.jpg": applePie,
	"boeuf-bourguignon.png": boeufBourguignon,
	"coq-au-vin": coqAuVin,
	"couscous.jpg": couscous,
	"crepes.png": crepes,
	"croissant.png": croissant,
	"hamburger.jpg": hamburger,
	"harira.jpg": harira,
	"hot-dog.jpg": hotDog,
	"ratatouille.png": ratatouille,
	"tajine.jpg": tajine,
};

export const placesMap: Record<string, string> = {
	"yellowstone.jpg": yellowStone,
	"tour-Eiffel.png": tourEiffel,
	"Mont-Saint-Michel.png": montSaintMichel,
	"marrakech.jpg": marrakech,
	"grand-canyon.jpg": grandCanyon,
	"fes.jpg": fes,
	"chefchaouen.jpg": chefchaouen,
	"chateau-versailles.png": chateauVersailles,
	"casablanca.jpg": casablanca,
	"liberty-statue.jpg": statusLiberte,
};
