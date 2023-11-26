import React from 'react';
import './App.css';
import MealPlanner from './MealPlanner';
import DataInput from './Components/DataInput';
import DropdownMenu from './Components/FitnessGoal';
import CustomizationOption from './Components/Customization';
import Calendar from './Components/Calendar';
import GridCell from './Components/GridCell';



function App() {
  return (
    <div className="App">
      <MealPlanner />
      <DataInput />
      <DropdownMenu />
      <CustomizationOption />
      <Calendar />
      <GridCell />
    </div>
  );
}

export default App;
