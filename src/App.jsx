import { useState } from "react";
import "./App.css"

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  const handleAddFighter = (fighter) => {
    // check if player has enough money to add this fighter
    if (fighter.price <= money) {
      // append fighter to const
      const newTeam = [...team, fighter];
      // deduct money based on fighter price and update squad stats
      setMoney(money - fighter.price);
      setTotalStrength(totalStrength + fighter.strength);
      setTotalAgility(totalAgility + fighter.agility);
      // set new team with added fighter
      setTeam(newTeam);
    } else {
      console.log('Not enough money');
    }
  }

  const handleRemoveFighter = (fighterRemove) => {
    // get current team


    // adjust values so that money is refunded and strength & agility is updated
    setMoney(money + fighterRemove.price)
    setTotalStrength(totalStrength - fighterRemove.strength);
    setTotalAgility(totalAgility - fighterRemove.agility);

    // get new team after removing fighrter and set to state
    const newTeam = team.filter((fighter) => fighter !== fighterRemove)
    setTeam(newTeam);
  }

  return (
    <>
      <h3>Current money: {money}</h3>
      <h3>Total team strength: {totalStrength}</h3>
      <h3>Total team agility: {totalAgility}</h3>
      {team.length > 0 ? <ul> {displayArrayMembers(team)} </ul> : <h2> "Pick some team members!" </h2>} 
      <hr />
      <h3>Members list</h3>
      <ul>
        {
          displayArrayMembers(zombieFighters, true)
        }
      </ul>
    </>
  );

  // function to display fighters, takes in the passed array to be displayed
  function displayArrayMembers(array, isRecruitMenu = false) {
    return array.map((fighter, index) => (
      <li key={index}>
        <p>
          Name: {fighter.name}
        </p>
        <p>
          Pirce: {fighter.price}
        </p>
        <p>
          Strength: {fighter.strength}
        </p>
        <p>
          Agility: {fighter.agility}
        </p>
        <img src={fighter.img} alt="loading fighter..." />
        <br />
        {
          // check if array is recruit menu to display add to team button
          isRecruitMenu ?
            <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
            // otherwise display remove button
            :
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
        }
      </li>
    ));
  }
}

export default App