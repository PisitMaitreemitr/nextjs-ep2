import Image from "next/image";
import Header from "./components/Header"
import PokeData from "./components/pokedata";

export default function Home() {
	return (
		<>
			<Header/>
			<PokeData/>
		</>
	);
}
