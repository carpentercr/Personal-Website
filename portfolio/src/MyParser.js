import * as THREE from 'three';
import LSystem from './lindenmayer/dist/lindenmayer';

class MyParser{

	constructor(){
		this.Y = new THREE.Vector3(0, 1, 0);
		this.Z = new THREE.Vector3(0, 0, 1);
		this.geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.15, 8);
		this.geometry.rotateZ(Math.PI * 0.5);
		this.minimum = 22.5;
		this.maximum = 50;
		this.stack = [];
		this.currentCylinder = new THREE.Mesh( this.geometry );
		this.model = new THREE.Mesh(new THREE.Geometry());
	}

	myIterate(){
	let tree = new LSystem({axiom: 'X', productions:{ 'F': 'FF' }});
	tree.setProduction('X', { successors: [ {weight: 25 , successor: 'FFF[+X][-X][&X][^X]' }, 
												{weight: 25, successor: 'FFF[-X][+X][&X]' },
												{weight: 25, successor: 'FFF[&X][^X]' },
												{weight: 25, successor: 'FFF[^X]' }
												]});
	tree.iterate(6);
	return tree.getString();
	}

	myParse(char){
	switch(char){
		case 'F':
			this.pushCylinder();
			break;
		case '[':
			this.stack.push(this.currentCylinder.clone())
			break;
		case ']':
			this.currentCylinder = this.stack.pop()
			break;
		case '+':
			this.currentCylinder.quaternion.multiply(this.yRotationPositive());
			break;
		case '-':
			this.currentCylinder.quaternion.multiply(this.yRotationNegative());
			break;
		case '&':
			this.currentCylinder.quaternion.multiply(this.zRotationPositive());
			break;
		case '^':
			this.currentCylinder.quaternion.multiply(this.zRotationNegative());
			break;
		default:
	
		}
	}

	getRandomNumber(min, max) {
  		return Math.random() * (max - min) + min;
	}

	pushCylinder() {
	let cylinderToPush = this.currentCylinder.clone();
		cylinderToPush.matrixAutoUpdate = false;
		cylinderToPush.updateMatrix();
		
		this.model.geometry.merge(cylinderToPush.geometry, cylinderToPush.matrix);
		this.currentCylinder.translateX(-(0.15));
	}

	yRotationPositive(){
	return new THREE.Quaternion().setFromAxisAngle( this.Y, (Math.PI / 180) * this.getRandomNumber(this.minimum, this.maximum) );
	}

	yRotationNegative(){
	return new THREE.Quaternion().setFromAxisAngle( this.Y, (Math.PI / 180) * -this.getRandomNumber(this.minimum, this.maximum) );
	}

	zRotationPositive(){
	return new THREE.Quaternion().setFromAxisAngle( this.Z, (Math.PI / 180) * this.getRandomNumber(this.minimum, this.maximum) );
	}

	zRotationNegative(){
	return new THREE.Quaternion().setFromAxisAngle( this.Z, (Math.PI / 180) * -this.getRandomNumber(this.minimum, this.maximum) );
	}

	getModel(){
	return this.model.geometry;
	}

}

export {MyParser};