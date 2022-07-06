import { Link } from "react-router-dom"
import { Toast } from 'primereact/toast';
import { useEffect, useRef, useState } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { logoutUser } from "../../Login";
import { useDispatch } from "react-redux";
export const Cabecera = ()=>{
    const toast = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null); const dispatch = useDispatch()
   
    function getAbsolutePath() {
        var loc = window.location;
        var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
        return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    }
    const showInfo = () => {
        toast.current.show({severity:'info', summary: 'Mensaje informativo ', detail:`Ya se encuentra en la pagina    ${getAbsolutePath()} `, life: 3000});
    }
return(
<div id="cabecera"  className="cabecera">
<Toast ref={toast} />
<div className="items">


<div className="items_Inferior2"  ><Link to="/Entrada" onClick={showInfo} style={{textDecoration:"none"}}>   <div className="con">CIRCULO A1 SCHOOL</div></Link> </div>

</div>


<div className="items">
<div className="items_Inferior" ><Link to="/Entrada" onClick={showInfo} style={{textDecoration:"none"}}><div className="con">Inicio</div> </Link></div>

<div className="items_Inferior" ><Link to="/MesaPartes/Respuesta" onClick={showInfo} style={{textDecoration:"none"}}><div className="con">  Mesa de partes </div> </Link></div>
<div className="items_Inferior-desplegable" >


<div className="con"  style={{cursor:"pointer"}} onClick={() =>     dispatch(logoutUser())}>Cerrar session</div>



</div></div>
</div>
)
}