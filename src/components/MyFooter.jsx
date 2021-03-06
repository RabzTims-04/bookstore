import { MDBIcon } from "mdbreact";

const MyFooter = ()=>(
<div className="container footer">
    <div className="row text-light"> 
        <div className = "col-8">
            <h6>{"Contact Us"}</h6>          
            <p className="">{"We are currently giving discounts on latest books. You can enjoy reading and can also donate books"}</p>      
            <p className="">{"+44 (0) 2920 090 505"}</p>
            <p className="">{"rabzbookstore@gmail.com"}</p>
        </div>  

        <div className="col-4 ml-auto mt-3 pb-5 text-right pt-3">            
            <MDBIcon fab icon="facebook" size="2x" className="mr-2 indigo-text" />
            <MDBIcon fab icon="instagram" size="2x" className="mr-2 orange-text" />
            <MDBIcon fab icon="youtube" size="2x" className="mr-2 red-text"/>
            <MDBIcon fab icon="snapchat" size="2x"className="mr-2 amber-text" />
            <MDBIcon fab icon="discord" size="2x" className="mr-2 cyan-text"/>            
        </div>        
    </div>
</div>
)

export default MyFooter

