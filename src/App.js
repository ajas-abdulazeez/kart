import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ChatBox from "./Routes/ChatBox";
import ChatList from "./Routes/ChatList";
import Home from "./Routes/Home";
import ProductDetails from "./Routes/ProductDetails";
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";
import ProductForm from "./Routes/ProductUploadForm";
import Validation from "./Routes/Validation";

const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route path="/details" component={ProductDetails}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/chatlist" component={ChatList}/>
        <Route path="/chatbox" component={ChatBox}/>
        <Route path="/uploadform" component={ProductForm}/>
        <Route path="/validation" component={Validation}/>
        <Route path="/" component={Home}/>
       
      </Switch>
    </Router>
  );
}

export default App;
