"use client"

import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker
} from "react-simple-maps";
import { TransitionLeft } from "./transitions";

const Map = () => {
  return (
    <TransitionLeft delay={0.4} className="w-full h-full">
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [50.2287, 20.0277, 0],
          center: [-5, -3],
          scale: 1500
        }}
        style={{width: '100%', height: '100%'}}
      >
        <Geographies
          geography="/features.json"
          fill="#757575"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker coordinates={[-51.2287, -30.0277]}>
            <g
              fill="none"
              stroke="#10F500"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={-30}
              style={{ fontFamily: "system-ui", fill: "#10F500" }}
            >
              {"Porto Alegre"}
            </text>
          </Marker>
        <Annotation
          subject={[-47.9292, -15.7801]}
          dx={0}
          dy={0}
          connectorProps={{
            stroke: "#10F500",
            strokeWidth: 0,
            strokeLinecap: "round"
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#10F500">
            {"Brasil"}
          </text>
        </Annotation>
      </ComposableMap>
    </TransitionLeft>
  );
};

export default Map;