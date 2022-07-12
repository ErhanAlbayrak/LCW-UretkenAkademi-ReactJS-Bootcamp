import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import {useState} from 'react';

export default function About() {
    const [cartItems, setCartItems] = useState([]);
   
  return (
    <div>
        <Navbar countCartItems={cartItems.length}></Navbar>
<div class="container about">
    <br/><br/><br/><br/>
  <div class="row">
    
    <div class="col-sm-4">
      <h2>Hakkımda</h2>
     <img class="col-sm-6 rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4D03AQH6qelfTaqVhQ/profile-displayphoto-shrink_800_800/0/1591285253944?e=1658966400&v=beta&t=2z_a7P-XTXQyx6sBUeyfvu8RX0_SK9o8GZbdZ0kf07I" alt="Erhan Albayrak FotoÄŸrafÄ±"/>
      <p></p>
      
    </div>


    <div class="col-sm-8">
      <h2>Erhan Albayrak</h2>
      <h6>(+90) 534 761 55 35</h6>
      <h6>erhaanalbayrak@gmail.com</h6>
      <br/>
      <h4> Sayın Yetkili;</h4>
      <p>Bu metni, uzun zamandır takibinde olduğum, Grow Global kapsamında staj fırsatı bulduğum ve yakından tanıma fırsatı bulduğum, sonrasında ise Üretken Akademi aracılığı ile daha da yakından tanıma fırsatı bulduğum <strong>"LC Waikiki"</strong> ailesinin yazılım geliştirme ekiplerinin bir parçası olmak istediğim için yazıyorum. <br/><br/><br/>2016 Yılında Tülay Başaran Anadolu Lisesl/ Bilgi Fen Lisesi'nden mezun olduktan sonra, 2017 yılında başladığım Kocaeli Üniversitesi Bilgisayar Mühendisliği bölümünde lisans eğitimimi sürdürmekteyim. Küçük yaşlarımdan beri bilgisayar ile sürekli zaman geçirmemin sonunda, mesleğimi de bu alanda ilerletmem gerektiğini düşünüp yazılım sektörüne yönelerek kendimi geliştirmeye başladım. Öncesinde back-end developer olma yolunda ilerlerken, <strong> .net Core, EF Core, LINQ , SQL , ELK , RabbitMQ, Neo4j</strong> gibi konularda kendimi yetiştirmeye çalıştım. Daha sonra ise, full-stack developer olabilmek adına <strong> HTML,CSS, JavaScript, Angular</strong> ve son olarak da, Üretken Akademi bünyesinde dahil olduğum bootcamp ile <strong> ReactJS</strong> yazılım dillerinde kendimi geliştirmek adına çalışmalar yaptım. <br/><br/><br/> LC Waikiki ile tanışmam 2019 Yılına dayanıyor. 2019 Yılında abim LC Waikiki ailesinde IT Software Specialist olarak işe başladı. Ben de çalışmalarına yakından bakabilme fırsatı buldum. Kullanılan teknolojiler, güncellik ve profesyonel iş ortamı fazlasıyla ilgimi ve dikkatimi çekti. Bundan 2 yıl sonra ise kendim LC Waikiki bünyesinde staj yapma imkanı buldum. Ekip uyumları, güncel teknoloji takibi ve iş imkanları açısından çok beğendiğim bir şirket oldu.<br/><br/><br/> Bu zamana kadar yaptığım çalışmalarda, ilgilendiğim konularda ilk dikkat ettiğim konu beni ne kadar geliştirecek olduğuydu. Bu nedenden ötürü, bir çok fırsatın bulunduğu LC Waikiki bünyesinde bulunmak, hem iş kariyeri açısından hem de kendimi geliştirmek adına mükemmel bir fırsat olacağını düşünüyorum. Bu nedenle, ekiplerinizde yer almak istiyorum. </p>
        <br/>
        <h5>Saygılarımla..</h5>
        <h4>Erhan Albayrak</h4>
        <br/><br/>

    </div>
  </div>
</div>
<Footer></Footer>
</div>
  )
}

