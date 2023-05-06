import { useEffect, useState } from "react";
import SingleFact from "../components/SingleFact"

export default function Home() {

let results;

const [fact, setFact] = useState("");
const [title, setTitle] = useState("Random Fact")

const getFact = (url) => {
    	fetch(url, {
		method: 'GET'
	})
		.then(response => response.json())
		.then(response => {
			setFact(response);
    })
		.catch(err => console.error(err));
}

useEffect(() => {
	getFact("https://uselessfacts.jsph.pl/api/v2/facts/random");
}, [])


  return (
    <main>
      <h1>{ title }</h1>
      <SingleFact fact={fact} />
      <button onClick={ () => {
        getFact("https://uselessfacts.jsph.pl/api/v2/facts/random");
        setTitle("Random Fact");
       } 
       } >Random Fact</button>
      <button onClick={ () => {
        getFact("https://uselessfacts.jsph.pl/api/v2/facts/today");
        setTitle("Fact of the day");
       } 
       } >Fact of the day</button>
    </main>
  )
}
