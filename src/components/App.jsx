// import 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js';

export default function App() {

    // const map = L.map('map').setView(["<%= lng %>", "<%= lat %>"], 13);

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 19,
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map);

    // const Icon = L.icon({
    //     iconUrl: 'images/icon-location.svg',

    //     iconSize:     [45, 55], // size of the icon
    //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    // });

    // const marker = L.marker(["<%= lng %>", "<%= lat %>"], {icon: Icon}).addTo(map);


    return (
        <main>
            <section className="ip-address-section">
                <h1>IP Address Tracker</h1>
                <form>
                <input placeholder="Search for any IP address or domain" type="text" name="ipAddress" id="" />
                <button type="submit">{'>'}</button>
                </form>
            </section>
            <section className="details-section">
                <div className="ip-address detail">
                <h2 className="detail-heading">IP Address</h2>
                <p className="detail-info">ipAddress</p>
                </div>

                <div className="partition"></div>
                
                
                <div className="location detail">
                <h2 className="detail-heading">Location</h2>
                <p className="detail-info"> location</p>
                </div>
                
                <div className="partition"></div>

                <div className="timezone detail">
                <h2 className="detail-heading">Timezone</h2>
                <p className="detail-info">UTCtimezone</p>
                </div>

                <div className="partition"></div>

                <div className="isp detail">
                <h2 className="detail-heading">ISP</h2>
                <p className="detail-info"> isp </p>
                </div>
            </section>
            <div className="background">
                <img src="images/pattern-bg-desktop.png" alt="" />
                <div id="map"></div>
            </div>
        </main>
    );
}