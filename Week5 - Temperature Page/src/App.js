import {Container, Row, Col} from 'reactstrap';
import Celcius from './Celcius';
import Fahrenheit from './Fahrenheit';
import Kelvin from './Kelvin';
import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  state = {
    // Sıcaklık için default değer atadık.
    sicaklik: 0
  };
   

  sicaklikArttir = () => {
    // Sıcaklık arttırma fonksiyonu
    this.setState(prev => ({ sicaklik: prev.sicaklik + 1 }));

    // Fantezi kısmı ;

    if(this.state.sicaklik < 10){
      const element = document.getElementById("id01");
      element.innerHTML = "Hava Buz Gibi. Sıkı Giyinmeyi Unutma";
      debugger;
       }
       else if(this.state.sicaklik >= 10 && this.state.sicaklik < 20){
         const element = document.getElementById("id01");
         element.innerHTML = "Hava Biraz Ilık. Bi' Ceket Almaya Ne Dersin?";
       }
       else {
         const element = document.getElementById("id01");
         element.innerHTML = "Bugün Hava Sıcak. Güneş Gözlüğün Nerede?";
       }
  };

  sicaklikAzalt = () => {
    // Sıcaklık azaltma fonksiyonu
    this.setState(prev => ({ sicaklik: prev.sicaklik - 1 }));

    // Fantezi kısmı ;

    if(this.state.sicaklik < 10){
      const element = document.getElementById("id01");
      element.innerHTML = "Hava Buz Gibi. Sıkı Giyinmeyi Unutma";
      debugger;
       }
       else if(this.state.sicaklik >= 10 && this.state.sicaklik < 20){
         const element = document.getElementById("id01");
         element.innerHTML = "Hava Biraz Ilık. Bi' Ceket Almaya Ne Dersin?";
       }
       else {
         const element = document.getElementById("id01");
         element.innerHTML = "Bugün Hava Sıcak. Güneş Gözlüğün Nerede?";
       }
  };

  render() {
    // Güncel sıcaklığı fahrenheit değerine çevirdik.
    let fahrenheitSicaklik = (this.state.sicaklik * 9/5) + 32;
    // Güncel sıcaklığı kelvin değerine çevirdik.
    let kelvinSicaklik = this.state.sicaklik + 273.15 ;

    return (
    <div>
      <Container>
      <Row>
      <h1 class="App">Hava Nasıl</h1>
      
      <h3 class="App">Şu an sıcaklık : {this.state.sicaklik} derece.</h3>
       <Row>
        <div class="row">
        <div class="col-md-10">
        <button type="button" class="btn btn-secondary" onClick={this.sicaklikArttir}><i class="fa-solid fa-arrow-up"></i>Sıcaklık Arttır</button>
        </div>
        <div class="col-md-2">
        <button type="button" class="btn btn-secondary" onClick={this.sicaklikAzalt}><i class="fa-solid fa-arrow-down"></i>Sıcaklık Azalt</button>
       </div>
       </div>
      
      </Row>
      </Row>  
      
      <h6 class="App paddingTopTxt">3 Birimde Sıcaklık Ölçümü</h6>
      <div class="row paddingLeftTxt">
      <Col> 
      <Celcius sicaklik={this.state.sicaklik}/>
      </Col>

      <Col>
      <Fahrenheit sicaklik={fahrenheitSicaklik}/>
      </Col>

      <Col>
      <Kelvin sicaklik={kelvinSicaklik}/>
      </Col>

      </div>
       
      </Container>    

      <h3 id="id01" class="middleEnd"></h3>
    </div>
  );
}
}

