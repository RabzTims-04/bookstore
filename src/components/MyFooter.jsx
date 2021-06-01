import { MDBIcon } from "mdbreact";

const MyFooter = ()=>(
    <div className="container footer">
        <div className="row flex-column text-center text-muted align-items-center mt-5">            
               <h1>{"Contact Us"}</h1>          
           
                 <p className="mt-2">{"We are currently giving discounts on latest books. You can enjoy reading and can also donate books"}</p>         
          
                 <p className="mt-2">{"+44 (0) 2920 090 505"}</p>
                 <p className="mt-2">{"rabzbookstore@gmail.com"}</p>
         
            <div className="mt-3 mb-5">
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

