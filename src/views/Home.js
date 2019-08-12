import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";

function Home() {
  const position = [19.4204502, -99.1566862];
  const data =  {
	"type": "Polygon",
	"coordinates": [
	  [
		[
		  -99.16285514831543,
		  19.41743341323147
		],
		[
		  -99.15791988372803,
		  19.41743341323147
		],
		[
		  -99.15791988372803,
		  19.422158729089336
		],
		[
		  -99.16285514831543,
		  19.422158729089336
		],
		[
		  -99.16285514831543,
		  19.41743341323147
		]
	  ]
	]
  }

  return (
    <>
      <Navbar />
      <main className="container my-5 py-5">
        <section className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h4>Mapa</h4>
            <Map center={position} zoom={13}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
			  <GeoJSON data={data} />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </Map>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
