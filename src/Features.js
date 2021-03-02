

import React from 'react';
import {Tab, Tabs} from '@material-ui/core';


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './feature.css';

import transparentrecords from '../src/images/imagenew/transparent-records.png';
import receivable from '../src/images/imagenew/receivable-payable.png';
import customerledgerentry from '../src/images/imagenew/customer-ledger-entry.png';
import manageyourstore from '../src/images/imagenew/manage-your-store-now.png';
import reachmillionsonline from '../src/images/imagenew/reach-millions-online.png';
import increasesalesby from '../src/images/imagenew/increase-sales-by.png';
import getyouordercustomers from '../src/images/imagenew/get-your-orders-from-customers.png';
import billinvoice from '../src/images/imagenew/create-bills-invoice.png';
import reducetime from '../src/images/imagenew/reduce-wait-time-by.png';
import makecustomledgers from '../src/images/imagenew/make-custom-ledgers.png';
import walletconnected from '../src/images/imagenew/wallet-connected-secure.png';
import businebasedbenef from '../src/images/imagenew/business-volume-based-benefits12.png';


function Features(){

 const [value, setValue] = React.useState(0)
 const handleTabs = (e, val)=>{
  
   setValue(val)
 }
    return (
   <div>
    
<div className="container-fluid">
<div className="row" id="sidehead">Features</div>
<div className="row" id="sidebottom"></div>
<div id="webviewfeature">
<Tabs value = {value} onChange={handleTabs} centered variant="fullWidth" id="featuresTabs" indicatorColor="red">
      <Tab label = "Transaction" id="featuresTab" />
      <Tab label = "Inventory" id="featuresTab1"/>
      <Tab label = "Orders" id="featuresTab2"/>
      <Tab label = "Khatas" id="featuresTab3"/>
</Tabs>

  <TabPanel value={value} index={0}>
    <div className="row justify-content-center" style={{marginTop:"55px"}}>
      <div className="col-lg-1"><p id="featurespara">Transaction</p></div>
      <div className="col-lg-8"><p id="featuresspanpara">Never miss a single order or receipt!<br/><br/>
We help manage all your transactions be it bills or credits for customers
and vendors! In addition to that we take away your headache of
maintaining a ledger by creating a custom book for wll in/out transactions!</p>
    </div>
    </div>
    <div className="row justify-content-center" id="featuresmaincont">
    <div className="row justify-content-center" id="featurescard">
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures1">
       <div className="card-body">
        <p id="featuresparam3">100% Transparent Records</p>
        <img id="webviewfeatureimg" src={transparentrecords} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam4">Never forgot even a single order or receipt, ever.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures2">
       <div className="card-body">
        <p id="featuresparam5">Receivable & Payable</p>
        <img id="webviewfeatureimg" src={receivable} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam6">Manage bills and credits for customers and vendors.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures3">
       <div className="card-body">
        <p id="featuresparam7">Customer ledger entry</p>
        <img id="webviewfeatureimg" src={customerledgerentry} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam8">Create bespoke accounts book your business.</p>
       </div>
      </div>
     </div>
    </div>
    </div>
    </div>
  </TabPanel>
  <TabPanel value={value} index={1}>
    <div className="row justify-content-center" style={{marginTop:"55px"}}>
      <div className="col-lg-1"><p id="featurespara">Inventory</p></div>
      <div className="col-lg-8"><p id="featuresspanpara">You can now manage your products through a digital catalog!
Your customers can now go through all that you have to offer from the
comfort of their homes. Your catalog will consist of an accurate
description of all the things available at your store.</p>
    </div>
    </div>
    <div className="row justify-content-center" id="featuresmaincont">
    <div className="row justify-content-center" id="featurescard">
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures1">
       <div className="card-body">
        <p id="featuresparam3">Manage your store now</p>
        <img id="webviewfeatureimg" src={manageyourstore} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam4">Manage your product on digital catalog.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures2">
       <div className="card-body">
        <p id="featuresparam5">Reach milions online</p>
        <img id="webviewfeatureimg" src={reachmillionsonline} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam6">And thousands locally who can access your catalogfrom home.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures3">
       <div className="card-body">
        <p id="featuresparam7">Increase sales by 10x</p>
        <img id="webviewfeatureimg" src={increasesalesby} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam8">Drive engagement in your store through combo and subscriptions.</p>
       </div>
      </div>
     </div>
    </div>
    </div>
    </div>
  </TabPanel>
  <TabPanel value={value} index={2}>
    <div className="row justify-content-center" style={{marginTop:"55px"}}>
      <div className="col-lg-1"><p id="featurespara">Orders</p></div>
      <div className="col-lg-8"><p id="featuresspanpara">Get double the orders with the choice of delivery or self-pickup.
Your customers will never have to wait in line to place an order. They can
directly order online with an immediate payment. Not only will you
receive orders from your known customers but also the new customers!
You can offer them the option of home delivery or self-pick up.</p>
    </div>
    </div>
    <div className="row justify-content-center" id="featuresmaincont">
    <div className="row justify-content-center" id="featurescard">
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures1">
       <div className="card-body">
        <p id="featuresparam3">Get orders from your customers.</p>
        <img id="webviewfeatureimg" src={getyouordercustomers} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam4">Offer then delivery or in-store pickup.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures2">
       <div className="card-body">
        <p id="featuresparam5">Create bills and invoice.</p>
        <img id="webviewfeatureimg" src={billinvoice} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam6">Keep accurate records of all your orders through out the day.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures3">
       <div className="card-body">
        <p id="featuresparam7">Reduce wait time by 40%</p>
        <img id="webviewfeatureimg" src={reducetime} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam8">Your customers will never have to wait in line to tell you their orders.</p>
       </div>
      </div>
     </div>
    </div>
    </div>
    </div>
  </TabPanel>
  <TabPanel value={value} index={3}>
    <div className="row justify-content-center" style={{marginTop:"55px"}}>
      <div className="col-lg-1"><p id="featurespara">Khatas</p></div>
      <div className="col-lg-8"><p id="featuresspanpara">never forget even a single order or receipt, ever!
Manage bills and credits for customers and vendors. 
Make custom ledger entries for in/out ledger transactions.</p>
    </div>
    </div>
    <div className="row justify-content-center" id="featuresmaincont">
    <div className="row justify-content-center" id="featurescard">
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures1">
       <div className="card-body">
        <p id="featuresparam3">Make customs ledgers.</p>
        <img id="webviewfeatureimg" src={makecustomledgers} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam4">Create in-out transaction entries for customer & send reminders and payment links.</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures2">
       <div className="card-body">
        <p id="featuresparam5">Wallet connected and secure.</p>
        <img id="webviewfeatureimg" src={walletconnected} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam6">Get real time update of all your transaction.(online,offline,credits)</p>
       </div>
      </div>
     </div>
    </div>
    <div className="col-lg-4">
     <div className="row justify-content-center">
      <div id="cardfeatures3">
       <div className="card-body">
        <p id="featuresparam7">Business, volume based, and benefits.</p>
        <img id="webviewfeatureimg" src={businebasedbenef} alt="home img" style={{width:"100%",height:"100%"}}/>
        <p id="featuresparam8">We rewards your customers for each of their shopping with you. Can you find the better deal?</p>
       </div>
      </div>
     </div>
    </div>
    </div>
    </div>
  </TabPanel>

</div>

<div id="mobileviewfeature">
      <div className="row justify-content-center text-center">
      <a class="btn" id="mobileviewfeaturebtn" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Transaction</a>
      </div>
      <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div className="row">
        <p id="mobileviewfeaturesspanpara">Never miss a single order or receipt!<br/>
          We help manage all your transactions be it bills or credits for customers
          and vendors! In addition to that we take away your headache of
          maintaining a ledger by creating a custom book for wll in/out transactions!</p>
        <div className="row justify-content-center">
          <div className="col"  id="mobileviewfeaturesmaincont">
          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
 
 <div class="carousel-inner">
   <div class="carousel-item active" data-bs-interval="10000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures1">
      <div className="card-body">
       <p id="mobileviewfeaturesparam">100% Transparent Records</p>
       <img id="mobileviewimg" src={transparentrecords} alt="home img"/>
       <p id="mobileviewfeaturesparam1">Never forgot even a single order or receipt, ever.</p>
      </div>
     </div>
    </div>
   </div>
   <div class="carousel-item" data-bs-interval="5000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures2">
      <div className="card-body">
       <p id="mobileviewfeaturesparam2">Receivable & Payable</p>
       <img id="mobileviewimg" src={receivable} alt="home img"/>
       <p id="mobileviewfeaturesparam3">Manage bills and credits for customers and vendors.</p>
      </div>
     </div>
    </div>
   </div> 
    <div class="carousel-item" data-bs-interval="2000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures3">
      <div className="card-body">
       <p id="mobileviewfeaturesparam4">Customer ledger entry</p>
       <img id="mobileviewimg" src={customerledgerentry} alt="home img"/>
       <p id="mobileviewfeaturesparam5">Create bespoke accounts book your business.</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
 </div>
</div>
</div>
</div>

<div className="row justify-content-center text-center">
      <a class="btn" id="mobileviewfeaturebtn" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">Inventory</a>
      </div>
      <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div className="row">
        <p id="mobileviewfeaturesspanpara">You can now manage your products through a digital catalog!
Your customers can now go through all that you have to offer from the
comfort of their homes. Your catalog will consist of an accurate
description of all the things available at your store.</p>
        <div className="row justify-content-center">
          <div className="col"  id="mobileviewfeaturesmaincont">
          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
 
 <div class="carousel-inner">
   <div class="carousel-item active" data-bs-interval="10000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures1">
      <div className="card-body">
       <p id="mobileviewfeaturesparam">Manage your store now</p>
       <img id="mobileviewimg" src={manageyourstore} alt="home img"/>
       <p id="mobileviewfeaturesparam1">Manage your product on digital catalog.</p>
      </div>
     </div>
    </div>
   </div>
   <div class="carousel-item" data-bs-interval="5000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures2">
      <div className="card-body">
       <p id="mobileviewfeaturesparam2">Reach milions online</p>
       <img id="mobileviewimg" src={reachmillionsonline} alt="home img"/>
       <p id="mobileviewfeaturesparam3">And thousands locally who can access your catalogfrom home.</p>
      </div>
     </div>
    </div>
   </div>
   <div class="carousel-item" data-bs-interval="2000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures3">
      <div className="card-body">
       <p id="mobileviewfeaturesparam4">Increase sales by 10x</p>
       <img id="mobileviewimg" src={increasesalesby} alt="home img"/>
       <p id="mobileviewfeaturesparam5">Drive engagement in your store through combo and subscriptions.</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
 </div>
</div>
</div>
</div>

<div className="row justify-content-center text-center">
      <a class="btn" id="mobileviewfeaturebtn" data-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">Orders</a>
      </div>
      <div class="collapse multi-collapse" id="multiCollapseExample3">
      <div className="row">
        <p id="mobileviewfeaturesspanpara">Get double the orders with the choice of delivery or self-pickup.
Your customers will never have to wait in line to place an order. They can
directly order online with an immediate payment. Not only will you
receive orders from your known customers but also the new customers!
You can offer them the option of home delivery or self-pick up.</p>
        <div className="row justify-content-center">
          <div className="col"  id="mobileviewfeaturesmaincont">
          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
 
 <div class="carousel-inner">
   <div class="carousel-item active" data-bs-interval="10000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures1">
      <div className="card-body">
       <p id="mobileviewfeaturesparam">Get orders from your customers.</p>
       <img id="mobileviewimg" src={getyouordercustomers} alt="home img"/>
       <p id="mobileviewfeaturesparam1">Offer then delivery or in-store pickup.</p>
      </div>
     </div>
    </div>
   </div>
   <div class="carousel-item" data-bs-interval="5000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures2">
      <div className="card-body">
       <p id="mobileviewfeaturesparam2">Create bills and invoice.</p>
       <img id="mobileviewimg" src={billinvoice} alt="home img"/>
       <p id="mobileviewfeaturesparam3">Keep accurate records of all your orders through out the day.</p>
      </div>
     </div>
    </div>
   </div>
   <div class="carousel-item" data-bs-interval="2000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures3">
      <div className="card-body">
       <p id="mobileviewfeaturesparam4">Reduce wait time by 40%</p>
       <img id="mobileviewimg" src={reducetime} alt="home img"/>
       <p id="mobileviewfeaturesparam5">Your customers will never have to wait in line to tell you their orders.</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
 </div>
</div>
</div>
</div>

<div className="row justify-content-center text-center">
      <a class="btn" id="mobileviewfeaturebtn" data-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">Khatas</a>
      </div>
      <div class="collapse multi-collapse" id="multiCollapseExample4">
      <div className="row">
        <p id="mobileviewfeaturesspanpara">Never forget even a single order or receipt, ever!
Manage bills and credits for customers and vendors. 
Make custom ledger entries for in/out ledger transactions.</p>
        <div className="row justify-content-center">
          <div className="col"  id="mobileviewfeaturesmaincont">
          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
 
 <div class="carousel-inner">
   <div class="carousel-item active" data-bs-interval="10000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures1">
      <div className="card-body">
       <p id="mobileviewfeaturesparam">Make customs ledgers.</p>
       <img id="mobileviewimg" src={makecustomledgers} alt="home img"/>
       <p id="mobileviewfeaturesparam1">Create in-out transaction entries for customer & send reminders and payment links.</p>
      </div>
     </div>
    </div>
   </div>
   <div class="carousel-item" data-bs-interval="5000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures2">
      <div className="card-body">
       <p id="mobileviewfeaturesparam2">Wallet connected and secure.</p>
       <img id="mobileviewimg" src={walletconnected} alt="home img"/>
       <p id="mobileviewfeaturesparam3">Get real time update of all your transaction.(online,offline,credits)</p>
      </div>
     </div>
    </div>
   </div>
   <div class="carousel-item" data-bs-interval="2000">
   <div className="row justify-content-center">
     <div id="mobileviewcardfeatures3">
      <div className="card-body">
       <p id="mobileviewfeaturesparam4">Business, volume based, and benefits.</p>
       <img id="mobileviewimg" src={businebasedbenef} alt="home img"/>
       <p id="mobileviewfeaturesparam5">We rewards your customers for each of their shopping with you. Can you find the better deal?</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
 </div>
</div>
</div>
</div>

      </div>
</div>
   </div> 
 )
}

export default Features;


function TabPanel(props){
  const {children, value, index} = props
  return(
    <div>
    {value === index && (<h1>{children}</h1>)}
    </div>
  )
}
