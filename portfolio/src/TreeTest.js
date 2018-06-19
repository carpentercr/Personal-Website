import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import {MyParser} from './MyParser';

var lstring;
var lparser = new MyParser();

function go(){

	lparser = new MyParser();
	lstring = lparser.myIterate();

	for (var i = 0; i < lstring.length; i++){
		lparser.myParse(lstring.charAt(i));
	}
}

go(); //init
setInterval(go, 3000);

class TreeTest extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.cameraPosition = new THREE.Vector3(0, 0, 15);
    this.fmPosition = new THREE.Vector3(0, -20, 0);

    this.state = {
     	fmRotation: new THREE.Euler(),
     	fmGeometry: new THREE.Geometry(),
    };

    this._onAnimate = () => {

      this.setState({
                fmRotation: new THREE.Euler(
          this.state.fmRotation.x = 0,
          this.state.fmRotation.y + 0.025,
          this.state.fmRotation.z = Math.PI * -0.5
        ),
                fmGeometry: lparser.getModel(),
      });
    };
  }

  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (<React3
      mainCamera="camera" 
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
        />
        <mesh
        geometry={this.state.fmGeometry}
        rotation={this.state.fmRotation}
        position={this.fmPosition}
        >
          <meshBasicMaterial
            color={0xe53635}
          />
        </mesh>
      </scene>
    </React3>);
  }
}

export default (TreeTest);