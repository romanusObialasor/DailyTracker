import React from "react";
import SignUp from "./Register/Components/SignUp";
import SignIn from "./Register/Components/SignIn";
import Home from "./Dashboard/Home";
import Task from "./Tasks/Task";
import Notes from "./Notes/Notes";
import MealHome from "./MealTracker/MealHome";
import MyCalender from "./Calendar/MyCalender";
import CalDetails from "./Calendar/CalDetails";
import Goals from "./Goals/Goals";
import "react-calendar/dist/Calendar.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/dashboard/tasks" component={Task} />
          <Route exact path="/dashboard/notes" component={Notes} />
          <Route exact path="/dashboard/meal" component={MealHome} />
          <Route exact path="/dashboard/calendar" component={MyCalender} />
          <Route exact path="/dashboard/calendar/id" component={CalDetails} />
          <Route exact path="/dashboard/Goals" component={Goals} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
