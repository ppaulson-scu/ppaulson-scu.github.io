'use strict';

const e = React.createElement;

class GridSquare extends React.Component {
	constructor(props) {
		super(props);
		this.state = { start:false, goal:false, explored:false, wall:false }
	}
	
	render() {
			return (
				<button className="square">
					{ } 
				</button>
			);
	}
}

class MapGrid extends React.Component {

	renderSquare(x, y){
		return <GridSquare />;

	render() {
		var grid = [];
		for (var i = 0; i < 20; i++){
			var row = [];
			for (var  = 0; j < 50; j++) {
				row.push(GridSquare(i, j));
			}
			grid.push(row);
		}
		return tbody(grid)
			
  }
}

const domContainer = document.querySelector('#grid_container');
ReactDOM.render(e(MapGrid), domContainer);