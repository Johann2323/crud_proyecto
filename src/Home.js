import logo from './logo.svg';
import { Component } from 'react';
import { libroService } from './service/libroService';
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';



export class Home extends Component{
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
      <DataTable  value={this.state.libros} >
        <Column field='id' header='id'></Column>
        <Column field='titulo' header='titulo'></Column>
        <Column field='autor' header='autor'></Column>
        <Column field='descripcion' header='descripcion'></Column>
      </DataTable>
      
    );
  }
}


