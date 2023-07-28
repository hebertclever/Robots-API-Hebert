import Card from "../../components/Card";

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; 
  }
}

export default async function Home() {
  try {
    const dataRobot = await getData();
    console.log(dataRobot); 

    return (
      <div className="container">
        {/* Verifique se dataRobot é um array antes de mapeá-lo */}
        {Array.isArray(dataRobot) &&
          dataRobot.map((el, i) => {
            console.log(el);
            return <Card key={i} robot={el} />;
          })}
      </div>
    );
  } catch (error) {
    console.error("Error in Home component:", error);
    return <div>Failed to load data</div>; 
  }
}
