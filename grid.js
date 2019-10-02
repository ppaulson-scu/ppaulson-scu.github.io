"use strict";

const HEIGHT = 20;
const WIDTH = 50;

const e = React.createElement;

class GridSquare extends React.Component {
	
	constructor(props){
		super(props);
		this.state = { clicked: false };
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
	}
	
	render() {
		return <button onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseEnter={this.onMouseEnter} className="grid_button"> { "." } </button>;
	}
	
	onMouseDown({SyntheticEvent}){
		this.mouseDown = true;
		this.setState((state) => {
			return {clicked: true}
		});
		this.changeClass();
		console.log("Mouse down.");
	}
	
	onMouseEnter(e){
		console.log(e.buttons);
		if(e.buttons == 1){
			this.setState((state) => {
				return {clicked: true}
			});
			this.changeClass();
		}
	}
	
	changeClass(){
		if(this.state.clicked){
			this.setState((state) => {
				return {clicked: false}
			});
			this.className = "grid_button"
			//change state unwalled
		} else {
			this.setState((state) => {
				return {clicked: true}
			});
			this.className = "grid_button_wall"
			//change state walled
		}
	}
}

class GridRow extends React.Component {
	render() {
		var row = []
		for (var i = 0; i < WIDTH; i++){
			row[i] = i + this.props.position * WIDTH;
		}
		var mappedRow = row.map((item) => 
			//<span key={item.toString()}> <GridSquare position = {item.toString()} /> </span>);
			<GridSquare position = {item.toString()} />);
		return ( <div className = "grid_row" style={{padding:0, margin:0, border:0}}> { mappedRow } </div> );
	}
}

class MapGrid extends React.Component {

	render() {

		var grid = [];
		for (var i = 0; i < HEIGHT; i++){
			grid[i] = i;
		}
		
		var mappedGrid = grid.map((item) =>
			//<div key={item.toString()}> <GridRow position={item.toString()} /> </div>);
			<GridRow position={item.toString()} />);

		return( <div className="grid"> { mappedGrid } </div> );
		
  }
}

const domContainer = document.querySelector('#grid_container');
ReactDOM.render(e(MapGrid), domContainer);