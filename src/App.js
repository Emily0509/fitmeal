import React, { useState } from 'react';
import './App.css';
import EditableCell from './EditableCell';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem
} from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle'; // Import shuffle icon
import ListIcon from '@mui/icons-material/List'; // Import list icon


// TODO: This is mock data. Fetch the data from backend to replace mock data
const mockMealPlan = [
  {
    day: "Day 1",
    breakfast: "Greek yogurt with honey, almonds, and mixed berries",
    lunch: "Grilled chicken salad with mixed greens, cherry tomatoes, cucumber, and balsamic vinaigrette",
    dinner: "Baked salmon with steamed broccoli and quinoa"
  },
  {
    day: "Day 2",
    breakfast: "Scrambled eggs with spinach and whole grain toast",
    lunch: "Turkey and cheese sandwich on whole grain bread with lettuce, tomato, and mustard",
    dinner: "Stir-fried tofu with mixed vegetables (bell peppers, snap peas, carrots) and brown rice"
  },
  {
    day: "Day 3",
    breakfast: "Oatmeal with sliced banana and a sprinkle of cinnamon",
    lunch: "Lentil soup with a side of whole grain bread",
    dinner: "Grilled steak with a side of sweet potato mash and green beans"
  },
  {
    day: "Day 4",
    breakfast: "Smoothie with spinach, banana, mixed berries, and almond milk",
    lunch: "Quinoa salad with chickpeas, cucumber, tomatoes, feta cheese, and lemon vinaigrette",
    dinner: "Baked chicken breast with roasted Mediterranean vegetables (eggplant, zucchini, bell peppers)"
  },
  {
    day: "Day 5",
    breakfast: "Whole grain cereal with skim milk and sliced strawberries",
    lunch: "Tuna salad with mixed greens, avocado, and whole grain crackers",
    dinner: "Spaghetti with homemade tomato sauce and a side salad"
  },
  {
    day: "Day 6",
    breakfast: "Avocado toast on whole grain bread with a poached egg",
    lunch: "Chicken Caesar wrap with a side of fruit salad",
    dinner: "Grilled shrimp with garlic butter, asparagus, and wild rice"
  },
  {
    day: "Day 7",
    breakfast: "Pancakes with fresh blueberries and a small amount of maple syrup",
    lunch: "Caprese salad with fresh mozzarella, tomatoes, basil, and balsamic glaze",
    dinner: "Beef stir-fry with bell peppers, onions, and broccoli served over noodles"
  }
];
const fitnessGoals = ["Stay Healthy", "Lose weight", "Maintain weight", "Gain muscle"];
const dietRestrictions = ["N/A", "Vegetarian", "Vegan", "Gluten-Free"];



function App() {
  const [mealPlan, setMealPlan] = useState(mockMealPlan);
  const [diet, setDiet] = useState('N/A');
  const [goal, setGoal] = useState("Stay Healthy");

  const handleUpdate = (rowIndex, columnKey, newValue) => {
    const updatedMealPlan = [...mealPlan];
    updatedMealPlan[rowIndex][columnKey] = newValue;
    setMealPlan(updatedMealPlan);
  };

  const handleDietChange = (event) => {
    // TODO
    // to debug, use console.log(event)
    setDiet(event.target.value);
  };

  const handleGoalChange = (event) => {
    // TODO
    setGoal(event.target.value);
  };

  const handleGenerateMealPlan = () => {
    // TODO
    // send request to generate plan api using axios here
    // you might want to send a POST request with body variables like:
    // age, weight, height, etc
  };

  const handleShuffle = () => {
    // TODO
    // send a request to shuffle api using axios here
  }

  const handleGetGrocery = () => {
    // TODO
    // define your handle get grocery logic here to send requests to backend
  }

  return (
    <Container sx={{ mb: 4 }}>
      {/* Header */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{
          fontFamily: 'Lucida Handwriting, cursive',
          fontWeight: '400'
        }}>
          FitMeal
        </Typography>
        <Typography variant="subtitle1" width={500}>
          Discover your tailored weekly meal plan: simply share your goals, and we'll craft your path to healthier eating
        </Typography>
      </Box>

      {/* Right Panel */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom align='center' sx={{
                fontFamily: 'Inter',
                fontWeight: '700'
              }}>Goal Setting</Typography>
              <Typography variant="h6" gutterBottom align='left' sx={{
                fontFamily: 'Inter',
                fontWeight: '500',
                ml: 0.1
              }}>Basic info</Typography>
              <TextField label="Age" variant="outlined" fullWidth margin="normal" />
              <TextField label="Weight (lb)" variant="outlined" fullWidth margin="normal" />
              <TextField label="Height (ft)" variant="outlined" fullWidth margin="normal" />

              <Typography variant="h6" gutterBottom align='left' sx={{
                fontFamily: 'Inter',
                fontWeight: '500',
                mt: 2,
                ml: 0.1
              }}>My fitness goal</Typography>
              <TextField
                select
                label="My fitness goal"
                variant="outlined"
                value={goal}
                onChange={handleGoalChange}
                fullWidth
                margin="normal"
              >
                {fitnessGoals.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <Typography variant="h6" gutterBottom align='center' sx={{
                fontFamily: 'Inter',
                fontWeight: '700'
              }}>Customization</Typography>
              <TextField
                select
                label="Diet Restriction"
                variant="outlined"
                value={diet}
                onChange={handleDietChange}
                fullWidth
                margin="normal"
              >
                {dietRestrictions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              <Button
                variant="outlined"
                fullWidth
                onClick={handleGenerateMealPlan}
                sx={{
                  mt: 2,
                  borderColor: 'gray',
                  color: 'white',
                  backgroundColor: "gray",
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'black',
                    borderColor: 'black',
                  },
                }}
              >
                Generate My Meal Plan
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Left Panel */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h6" sx={{
                  mb: 2, pl: 2, fontFamily: 'Inter',
                  fontWeight: '700'
                }}>
                  My Meal Plan
                </Typography>
                <Box>
                  <Button
                    variant="outlined"
                    startIcon={<ShuffleIcon />}
                    onClick={handleShuffle}
                    sx={{
                      mr: 1,
                      borderColor: 'black',
                      color: 'black',
                      '&:hover': {
                        backgroundColor: 'gray',
                        color: 'white',
                        borderColor: 'black',
                      },
                    }}
                  >
                    Shuffle
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<ListIcon />}
                    onClick={handleGetGrocery}
                    sx={{
                      mr: 1,
                      borderColor: 'black',
                      color: 'black',
                      '&:hover': {
                        backgroundColor: 'gray',
                        color: 'white',
                        borderColor: 'black',
                      },
                    }}
                  >
                    Get Grocery List
                  </Button>
                </Box>
              </Box>
              <TableContainer component={Paper} elevation={0} style={{ boxShadow: 'none', border: 'none' }}>
                <Table sx={{ minWidth: 650 }} aria-label="meal plan table">
                  <TableHead>
                    <TableRow sx={{ borderBottom: 1 }}>
                      <TableCell sx={{ width: '10%' }}></TableCell>
                      <TableCell align="left" sx={{
                        fontFamily: 'Inter',
                        fontWeight: '700'
                      }}>Breakfast</TableCell>
                      <TableCell align="left" sx={{
                        fontFamily: 'Inter',
                        fontWeight: '700'
                      }}>Lunch</TableCell>
                      <TableCell align="left" sx={{
                        fontFamily: 'Inter',
                        fontWeight: '700'
                      }}>Dinner</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mockMealPlan.map((dayPlan, index) => (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { borderBottom: 'none' } }}>
                        <TableCell component="th" scope="row" sx={{
                          fontFamily: 'Inter',
                          fontWeight: '700'
                        }}>
                          {`Day ${index + 1}`}
                        </TableCell>
                        {/* Calls Editable Cell component for double click modifitcation */}
                        <EditableCell value={dayPlan.breakfast} row={index} column="breakfast" onUpdate={handleUpdate} />
                        <EditableCell value={dayPlan.lunch} row={index} column="lunch" onUpdate={handleUpdate} />
                        <EditableCell value={dayPlan.dinner} row={index} column="dinner" onUpdate={handleUpdate} />
                      </TableRow>
                    ))}
                  </TableBody>

                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
