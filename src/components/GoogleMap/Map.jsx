import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from "./LocationPin";
import './map.css'
import mapStyles from "./mapStyles";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Map = ({shops, zoomLevel}) => {
    console.log("hhhhhhh",shops)
    const [type, setType] = useState(shops[0].type);

    const typeArray = [
        'dairy',
        'kiranas',
        'bakery',
        'toys',
        'cosmetic',
        'giftshop',
        'electrical',
        'hardware',
        'groceries'
    ]
    

    function selectShop(type) {
     

        typeArray.forEach(item => {
            const element = document.getElementById(item);
            const elementNumber = document.getElementById(`${item}-number`);
           
          
            element.style.background = "none";
            elementNumber.style.background = "none";
        })

        const element = document.getElementById(type);
        const elementNumber = document.getElementById(`${type}-number`);
        element.style.background = "#1A2637";
        elementNumber.style.background = "#1A2637";

        setType(type)
    }

    const defaultProps = {

        center: {
            lat: 19.28714,
            lng: 72.86884
        },
        zoom: 15
    };
    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        draggable: true,
        keyboardShortcuts: false,
        scaleControl: true,
        scrollwheel: true,
    };


    return (
        <div className="map" style={{backgroundColor: "#2C3D6333", overflow: "hidden"}}>
            <div id="motabahiheadtitle">
                <div class="row"><p id="mapmotabhaai" style={{color: "#2C3D63"}}>Motabhaai's</p></div>
                <div class="row"><p id="mapmotabhaaisecond" style={{color: "#2C3D63"}}>of Mira Bhayander</p></div>
                <div class="row"><p id="mapmotabhaaithird" style={{color: "#2C3D63"}}>The good, The best and the
                    superstar!</p></div>
            </div>

            <div className="google-map" style={{borderRadius: "30px", overflow: "hidden"}}>
                <GoogleMapReact
                  
                    bootstrapURLKeys={{key: 'AIzaSyDcxe_iN11f0cp88emtxk7RH0U-DfJx5BM'}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    options={{options}}
                >


                    {shops.map(item => {
                       console.log(item)
                        if (item.type === type) {
                            return (
                                <LocationPin
                                    lat={item.lat}
                                    lng={item.lng}
                                    text={item.text}
                                    type={item.type}
                                    name={item.name}
                                />
                            )

                        }
                        return null;


                    })}

                    <table style={{backgroundColor: "#556577", opacity: '2'}} id="maptableweb">
                        <thead>
                        <tr style={{height: "2rem"}}>
                            <th style={{color:"#DCDCDC"}} class="tdf" scope="col">Type</th>
                            <th style={{color:"#DCDCDC"}} class="tds" scope="col">No of shop</th>
                        </tr>
                        </thead>
                        <tbody>


                        <tr class="tdwebrow">

                            <td id="dairy" style={{color:"#DCDCDC"}} class="tdf" onClick={() => selectShop('dairy')}
                                key={'dairy'}>Dairy
                            </td>
                            <td id="dairy-number" style={{color:"#DCDCDC"}} class="tds">34</td>

                        </tr>
                        <tr class="tdwebrow">

                            <td id="kiranas" style={{color:"#DCDCDC"}} class="tdf"
                                onClick={() => selectShop('kiranas')} key={'kiranas'}>Kiranas
                            </td>
                            <td id="kiranas-number" style={{color:"#DCDCDC"}} class="tds">04</td>

                        </tr>
                        <tr class="tdwebrow">

                            <td id="bakery" style={{color:"#DCDCDC"}} class="tdf" onClick={() => selectShop('bakery')}
                                key={'bakery'}>Bakery
                            </td>
                            <td id="bakery-number" style={{color:"#DCDCDC"}} class="tds">12</td>
                        </tr>
                        <tr class="tdwebrow">
                            <td id="toys" style={{color:"#DCDCDC"}} class="tdf" onClick={() => selectShop('toys')}
                                key={'toys'}>Toys
                            </td>
                            <td id="toys-number" style={{color:"#DCDCDC"}} class="tds">05</td>
                        </tr>
                        <tr class="tdwebrow">
                            <td id="cosmetic" style={{color:"#DCDCDC"}} class="tdf"
                                onClick={() => selectShop('cosmetic')} key={'cosmetic'}>Cosmetic
                            </td>
                            <td id="cosmetic-number" style={{color:"#DCDCDC"}} class="tds">08</td>
                        </tr>
                        <tr class="tdwebrow">
                            <td id="giftshop" style={{color:"#DCDCDC"}} class="tdf"
                                onClick={() => selectShop('giftshop')} key={'giftshop'}>Gift Shop
                            </td>
                            <td id="giftshop-number" style={{color:"#DCDCDC"}} class="tds">20</td>
                        </tr>
                        <tr class="tdwebrow">
                            <td id="electrical" style={{color:"#DCDCDC"}} class="tdf"
                                onClick={() => selectShop('electrical')} key={'electrical'}>Electrical
                            </td>
                            <td id="electrical-number" style={{color: "#FFFFFF"}} class="tds">25</td>
                        </tr>
                        <tr class="tdwebrow">
                            <td id="hardware" style={{color:"#DCDCDC"}} class="tdf"
                                onClick={() => selectShop('hardware')} key={'hardware'}>Hardware
                            </td>
                            <td id="hardware-number" style={{color:"#DCDCDC"}} class="tds">27</td>
                        </tr>
                        <tr class="tdwebrow">
                            <td id="groceries" style={{color:"#DCDCDC"}} class="tdf"
                                onClick={() => selectShop('groceries')} key={'groceries'}>Groceries
                            </td>
                            <td id="groceries-number" style={{color:"#DCDCDC"}} class="tds">13</td>
                        </tr>
                        </tbody>
                    </table>

                   
                </GoogleMapReact>

            </div>

            {/* <div className="row">
                <div className="col-sm">

                    <table class="table" id="maptablemob" style={{}}>
                        <thead>
                        <tr style={{}}>

                            <th className="tdmodulehead" scope="col">Type</th>
                            <th style={{backgroundColor:"pink",width:"12vh"}} id="mobshop" className="tdmodulehead" scope="col">No of shop</th>

                        </tr>
                        </thead>
                        <tbody>


                        <tr>
                            <td style={{backgroundColor:"green"}} id="dairy" className="tdmodule" onClick={() => selectShop('dairy')}
                                key={'dairy'}>Dairy
                            </td>
                            <td style={{backgroundColor:"red"}}  id="dairy-number" className="tdmodule">34</td>
                        </tr>
                        <tr>

                            <td id="kiranas" className="tdmodule" onClick={() => selectShop('kiranas')}
                                key={'kiranas'}>Kiranas
                            </td>
                            <td id="kiranas-number" className="tdmodule">04</td>

                        </tr>
                        <tr>

                            <td id="bakery" className="tdmodule" onClick={() => selectShop('bakery')}
                                key={'bakery'}>Bakery
                            </td>
                            <td id="bakery-number" className="tdmodule">12</td>
                        </tr>
                        <tr>
                            <td id="toys" className="tdmodule" onClick={() => selectShop('toys')} key={'toys'}>Toys</td>
                            <td id="toys-number" className="tdmodule">05</td>
                        </tr>
                        <tr>
                            <td id="cosmetic" className="tdmodule" onClick={() => selectShop('cosmetic')}
                                key={'cosmetic'}>Cosmetic
                            </td>
                            <td id="cosmetic-number" className="tdmodule">08</td>
                        </tr>
                        <tr>
                            <td id="giftshop" className="tdmodule" onClick={() => selectShop('giftshop')}
                                key={'giftshop'}>Gift Shop
                            </td>
                            <td id="giftshop-number" className="tdmodule">20</td>
                        </tr>
                        <tr>
                            <td id="electrical" className="tdmodule" onClick={() => selectShop('electrical')}
                                key={'electrical'}>Electrical
                            </td>
                            <td id="electrical-number" className="tdmodule">25</td>
                        </tr>
                        <tr>
                            <td id="hardware" className="tdmodule" onClick={() => selectShop('hardware')}
                                key={'hardware'}>Hardware
                            </td>
                            <td id="hardware-number" className="tdmodule">27</td>
                        </tr>
                        <tr>
                            <td id="groceries" className="tdmodule" onClick={() => selectShop('groceries')}
                                key={'groceries'}>Groceries
                            </td>
                            <td id="groceries-number" className="tdmodule">13</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}
            
<table class="table" id="secondtable" style={{opacity:"1",
fontFamily:"Roboto",
letterSpacing: "0px",
}}>
 
  <thead>
    <tr>
    
      <th style={{border:"hidden"}} scope="col">Type</th>
      <th  style={{border:"hidden"}}scope="col">No of Shop</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
    

      <td id="dairy" onClick={() => selectShop('dairy')} >Dairy</td>
      <td id="dairy-number">34</td>
      
    </tr>
    <tr>
    
      <td id="kiranas" onClick={() => selectShop('kiranas')}>Kiranas</td>
      <td id="kiranas-number">04</td>
   
    </tr>
    <tr>
    
      <td id="bakery" onClick={() => selectShop('bakery')}>Bakery</td>
      <td id="bakery-number">12</td>
   
    </tr>
    <tr>
    
      <td id="toys" onClick={() => selectShop('toys')}>Toys</td>
      <td id="toys-number">05</td>
   
    </tr>
    <tr>
   
                           
      <td id="cosmetic" onClick={() => selectShop('cosmetic')} key={'cosmetic'}>Cosmetic</td>
      <td id="cosmetic-number">08</td>
   
    </tr>
    <tr>
   
      <td id="giftshop" onClick={() => selectShop('giftshop')} key={'giftshop'}>Gift Shop</td>
      <td  id="giftshop-number">20</td>
   
    </tr>
    <tr>
   
      <td id="electrical" onClick={() => selectShop('electrical')} key={'electrical'}>Electrical</td>
      <td id="electrical-number">25</td>
   
    </tr>
    <tr>
    
      <td id="hardware" onClick={() => selectShop('hardware')}  key={'hardware'}>Hardware</td>
      <td id="hardware-number">27</td>
   
    </tr>
    <tr>
  
                           
      <td id="groceries" onClick={() => selectShop('groceries')} key={'groceries'}>Groceries</td>
      <td>13</td>
   
    </tr>
  </tbody>
 
</table>
                  
              
              
            
      </div>
    )
}

export default Map;
