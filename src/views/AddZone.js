import React, {useState} from "react";
import useForm from "../hooks/useForm";
import Input from "../components/Input";
import MapEditor from "../components/MapEditor";

function AddZone() {
    const [zone, setZone] =  useState({})
    const sendZone = (data) => {
        console.log(data,zone)
    }
    const { inputs, handleSubmit, handleInputChange  } = useForm(sendZone, {})
  return (
    <section className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div  className="row" >
            <div className="form-group col-10">
                <Input 
                    label="Nombre de la Zona:"
                    name="zone"
                    type="text"
                    value={inputs.zone}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group col-10">
                <Input 
                    label="Precio:"
                    name="zone"
                    type="number"
                    value={inputs.price}
                    onChange={handleInputChange}
                />
            </div>

            <div className="col-10">
                <MapEditor setZone={setZone} />
            </div>
            <div className="col-10 my-4">
              <button type="submit" className="btn bg-dark text-light btn-lg">Guardar</button>
            </div>

        </div>
      </form>
    </section>
  );
}

export default AddZone;
