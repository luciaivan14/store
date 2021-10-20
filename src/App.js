import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import homedecor from './images/homedecor.jpeg';
import desk from './images/desk.png';
import chair from './images/in-between-chair5.png';
import table from './images/corbula-coffee-table.png'
import coffeetable from './images/april-tables1.png'
import ceramics from './images/ceramic-vases.png'
import plate from './images/christmas-plate.jpeg'
import house from './images/christmas-house.jpeg'
import cluster from './images/coral-cluster.jpeg'
import garland from './images/wood-garland.jpeg'
import card from './images/christmas-card.jpeg'
import tree from './images/christmas-tree.jpeg'
import alpaca from './images/christmas-alpaca.jpeg'
import lamp from './images/wood-lamp.jpeg'
import pendant from './images/pendant-light.jpeg'
import berrytree from './images/berry-tree.jpeg'
import pinecone from './images/glitter-pinecone.jpeg'
import logo from'./images/logo.png'
import CategoryHeader from "./components/CategoryHeader/categoryHeader";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
        <div className="right-toolbar">
        

              <Link to="/"><img src={logo} alt="logo" align="center" /></Link>

              <Link to="/">Home</Link>

              <Link to="/new-in">New In</Link>

              <Link to="/furniture">Furniture</Link>

              <Link to="/ceramics">Ceramics</Link>

              <Link to="/lighting">Lighting</Link>

              <Link to="/christmas">Christmas</Link>

              <Link to="/contact">Contact</Link>
        </div>
        </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/new-in">
            <new-in />
          </Route>
          <Route path="/furniture">
            <Furniture />
          </Route>
          <Route path="/ceramics">
            <Ceramics />
          </Route>
          <Route path="/lighting">
            <Lighting />
          </Route>
          <Route path="/christmas">
            <Christmas />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return ( <div>

     <div className="image-container">
       <div className="floating-text">
         <a href="/new-in">Shop the newly added products</a>
         </div>
        <img className="full-width-image" src={homedecor} alt="homedecor" align="center" />
    </div>
    <CategoryHeader title="Christimas is coming" button="Shop now" />
    {/* <CategoryHeader title="Christmas is coming" button="Explore"></CategoryHeader> */}
    <div className="full-width-overflow">
<center><br />
<table width='80%' border="0">
<tbody>
<tr>
<td rowspan="2"><center><img src={tree} alt="tree" align="center" /></center></td>
<td><center><img src={plate} alt="plate" align="center" /></center></td>
<td><center><img src={house} alt="house" align="center" /></center></td>
<td><center><img src={cluster} alt="cluster" align="center" /></center></td>
<td><center><img src={berrytree} alt="berrytree" align="center" /></center></td>
</tr>
<tr>
<td><center><img src={garland} alt="garland" align="center" /></center></td>
<td><center><img src={card} alt="card" align="center" /></center></td>
<td><center><img src={alpaca} alt="alpaca" align="center" /></center></td>
<td><center><img src={pinecone} alt="pinecone" align="center" /></center></td>
</tr>
</tbody>
</table>
</center>
    <CategoryHeader title="Your pièce de résistance" button="Shop now" />

<center>
<table width='80%' border="0">
<tbody>
<tr>
<td border-color='f8f8f8' border-style='solid'><center><img src={desk} alt="desk" align="center" /></center></td>
<td ><center><img src={table} alt="table" align="center" /></center></td>
<td ><center><img src={coffeetable} alt="coffee" align="center" /></center></td>
<td ><center><img src={chair} alt="chair" align="center" /></center></td>
<p>&nbsp;</p>
</tr>
</tbody>
</table>
</center>
     <CategoryHeader title="Hold it to have it" button="Shop now" />  
&nbsp;
&nbsp;
<center><img src={ceramics} alt="ceramics" align="center" />
</center>

     <CategoryHeader title="Light your day" button="Shop now" />
<center><br />
<table width='80%' border="0">
<tbody>
<tr>
<td ><center><img src={lamp} alt="lamp" align="center" /></center></td>
<td ><center><img src={pendant} alt="pendant" align="center" /></center></td>
</tr>
</tbody>
</table>
</center>
     </div>
     </div>);
}

function Furniture() {
  return <h2>Furniture</h2>;
}

function Ceramics() {
  return <h2>Ceramics</h2>;
}

function Lighting() {
  return <h2>Lighting</h2>;
}

function Christmas() {
  return <h2>Christmas</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}