import GoogleMapReact from "google-map-react";
import styled from "@emotion/styled";

import { mapStyles } from "mapStyles";
import { LeadT } from "utils/lead";
import { Marker } from "./Marker";

const defaultProps = {
  center: {
    lat: -1.286389,
    lng: 36.817223,
  },
  zoom: 7,
};

type MapScreenProps = {
  coordinates: any;
  setCoordinates: React.Dispatch<React.SetStateAction<any>>;
  leads: Array<LeadT>;
  setVisitedPos: (value: string) => void;
  setLeads: (value: Array<LeadT>) => void;
};

//map function
const MapScreen = ({
  coordinates,
  setCoordinates,
  leads,
  setVisitedPos,
  setLeads,
}: MapScreenProps) => {
  //mediaquery hook : will not allow the max width to go beyond 600px

  // onChildClick callback can take two arguments: key and childProps
  const onChildClickCallback = (key: string) => {
    setVisitedPos(key);

    const index = leads.findIndex((e) => e._id === key);
    leads[index].show = !leads[index].show; // eslint-disable-line no-param-reassign
    setLeads({ ...leads });
  };
  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
          libraries: ["places"],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        // onChange= {(event)=>{
        //     setCoordinates({ lat : event.center.lng, lng : event.center.lng})
        //     setBounds({ne : event.marginBounds.ne, sw : event.marginBounds.sw}) //bottom left and top right
        // }}
        onChildClick={onChildClickCallback}>
        {leads?.slice(0, 50).map((lead, index) => (
          <Marker
            key={lead._id}
            //@ts-ignore
            lat={Number(
              lead.location?.coordinates?.length > 0
                ? lead?.location?.coordinates[0]
                : 0
            )}
            lng={Number(
              lead.location?.coordinates?.length > 1
                ? lead?.location?.coordinates[1]
                : 0
            )}
            show={lead.show}
            lead={lead}
          />
          // <div
          //   className="absolute z-1 transform-x"
          //   // @ts-ignore
          //   lat={Number(
          //     lead.location?.coordinates?.length > 0
          //       ? lead?.location?.coordinates[0]
          //       : 0
          //   )}
          //   lng={Number(
          //     lead.location?.coordinates?.length > 1
          //       ? lead?.location?.coordinates[1]
          //       : 0
          //   )}
          //   key={index}>
          //   <div className="flex flex-col items-center w-[300px] h-[150px]">
          //     <LeadCard lead={lead} />
          //   </div>
          //   {/* <LocationOnOutlinedIcon className="md:hidden flex" color="primary" fontSize="large" /> */}
          // </div>
        ))}
      </GoogleMapReact>
    </MapWrapper>
  );
};

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export default MapScreen;
