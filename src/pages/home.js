import React from 'react';
import { CDBFooter } from 'cdbreact';
const Home = () => {

  
// let index=0;

// function autowrite(){
//     const underText = document.querySelector('.underText');
//     if (underText) {
//         underText.innerHTML=text.slice(0,index);
//         ++index;
//         if(index>text.length){
//             index=0;
//         }
//     }
// }
// setInterval(autowrite,100);

  return (
    
    <>
     <div
      style={{
        display: '',
        justifyContent: 'center',
        alignItems: 'center',
        
      }
    }
    ></div>
    <header id="header" class="py-5 bg-light">
      <div class="container">
          <div class="row height align-items-center ">
              <div class="col height-80  text-center">
                  <h1 class="text-white display- font-weight-bold text-uppercase font-italic">
                      <strong>WElCOME TO KEJANY!</strong>
  
                  </h1>
                  <p class="underText text-white display-">relax.... we found a home for you!</p>
                  </div>
            </div>
            
              </div>
        </header>

        <tr></tr>
  <footer>
    <div className="row p-5 d-flex justify-content-center">
      {/* <div className="col-lg-2">

     
        <p>Need a home ? <tr></tr>Leave the hustle to us</p>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/fb.svg" alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/instagram.svg"
          alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/youtube.svg"
          alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/twitter.svg"
          alt=""></img>
      </div> */}



      

      {/* <div className="col-lg-2">
        <p className="quicklinks">Quick Links</p>
        <p>– About</p>
        <p>– photos</p>
        <p>– News</p>
        <p>– Contacts</p>

      </div> */}

      <div className="col-lg-2">
        {/* <p className="quicklinks">Help</p>
        <p>– FAQs</p>
        <p>– Updates</p>
        <p>– Complains</p>
        <p>– Contacts</p> */}

      </div>

      <div className="col-lg-2">
        {/* <p className="quicklinks">Categories</p><tr></tr> */}
        {/* <p>– FAQs</p>
        <p>– Rentals</p>
        <p>– Apartments</p>
        <p>– Contacts</p> */}

      </div>

      <div className="col-lg-2">
        <p className="quicklinks">Contacts</p>
        <p className="number">
          <ion-icon name="call"></ion-icon>254706815961
        </p>
        <p>
          <ion-icon name="pin"></ion-icon>Pioneer house Moi Avenue,<tr></tr>
           Nairobi
        </p>
        <p className="number2">
          <ion-icon name="mail"></ion-icon>petermburunganga@gmail.com
        </p>


      </div>
       <h6> @ petermburunganga98@gmail.com </h6>
    </div>
    </footer>   
    </>
      
    
  );
};
  
export default Home;