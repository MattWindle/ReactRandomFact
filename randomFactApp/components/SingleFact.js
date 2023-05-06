import styles from "./singleFact.module.css"


const singleFact = ({fact}) => { 

// console.log(fact)
    return (
		<div className={styles.wrapper} >
			<p>{ fact.text }</p>
        </div>
    );
}
 
export default singleFact;
