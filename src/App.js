
import React,{Component} from 'react';

import './App.css';

import axios from 'axios';

class App extends Component {

  constructor(props) {
    
    super(props);

    this.state = { 

      data:[{Name: "","Highlights":[],"Cuisines":[]}],

      search :'',

      searched : false

    }

  }

  componentDidMount() {}

  search = (e)=>{

    this.setState({search:e.target.value})

  }

  button = (e)=>{

    axios.get("https://zomato-backend-axios.herokuapp.com/search/city?query="+this.state.search).then(result=>{this.setState({data:result.data});console.log(result,1)})

    this.setState({searched:!this.state.searched})

  }

  render() { 

    var displayer =  <div>
      
        <div>
            
            <div class="search1 search__wrapper">
        
             <button type="button" className="btn" onClick={e=>this.button(e)}>Home</button>
    
            </div>
  
        </div>

        <br/><br/><br/><br/>

        {this.state.data.map(e=> <a href={e.Link}> 
        
        <div className="hotel1" > 
        
        <img src={e["Image Url"]} alt="img"/>
        
        <div className="hi">

          <br/>
          
          <h2>{e.Name}</h2>
          
          <h5 className="h5class">{e.Address}</h5>
          
          <div class="hi3">
            
            <div className="hi4">
              
              <h4>Highlights</h4>
              
              {e["Highlights"].map(i=><h5>&emsp;&emsp;{i}</h5>)}
              
          </div>
    
    <div>
      
      <h4>Cuisines</h4>
      
      {e["Cuisines"].map(i=><h5>&emsp;&emsp;{i}</h5>)}
    
    </div>
    
    </div>
    
    </div>
    
    <div className="hi2"><br/><br/>

      <h5>Timings         : {e.Timings}</h5>

      <h5>Average Cost    : Rs.{e['Average Cost']}</h5>

      <h5>Online Delivery : {e["Online Delivery"]}</h5>

      <h5>Contact No : {e.Contact}</h5>

      <h5>Rating : <strong>{e.Rating} <span class="fa fa-star checked"/>

    </strong></h5>

    </div> 

  </div></a>)}

</div> 

var searchBar = <div>
        
  <form class="search">
    
    <div class="search__wrapper">
    
      <input type="text" value={this.state.search} onChange={e=>this.search(e)} onSubmit={e=>this.button(e)} placeholder="Search for..." class="search__field"/>
    
      <button type="submit" onClick={e=>this.button(e)}class="fa fa-search search__icon"/>
    
    </div>
  
  </form>

</div>

return (this.state.searched?displayer:searchBar);

}

}
 
export default App;

