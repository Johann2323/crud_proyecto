import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { libroService } from './service/libroService';
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';



export class App extends Component{
  constructor(){
    super();
    this.state={};
    this.setState({
      libros:[]
    });
    this.libroService = new libroService();
  }

  componentDidMount(){
    this.libroService.getAll().then(data => this.setState({libros: data}))
  }

  render(){
    return(
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>,
      <DataTable  value={this.state.libros} >
        <Column field='id' header='id'></Column>
        <Column field='titulo' header='titulo'></Column>
        <Column field='autor' header='autor'></Column>
        <Column field='descripcion' header='descripcion'></Column>
      </DataTable>
      
    );
  }
}


