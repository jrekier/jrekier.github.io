var u0=0,$d=1,d0=2;var Za=1,f0=2,zo=3,tr=0,ni=1,An=2,Dr=0,ko=1,yn=2,jd=3,Kd=4,p0=5;var Nr=100,m0=101,g0=102,_0=103,x0=104,v0=200,y0=201,M0=202,S0=203,Qd=204,ef=205,b0=206,w0=207,A0=208,T0=209,E0=210,C0=211,R0=212,P0=213,I0=214,Ec=0,Cc=1,Rc=2,Co=3,Pc=4,Ic=5,Lc=6,Dc=7,ph=0,L0=1,D0=2,Qi=0,tf=1,nf=2,sf=3,rf=4,of=5,af=6,lf=7;var cf=300,Ur=301,Vo=302,mh=303,gh=304,qs=1e3,$i=1001,Nc=1002,On=1003,N0=1004;var Ja=1005;var Qn=1006,_h=1007;var vs=1008;var ri=1009,hf=1010,uf=1011,Go=1012,xh=1013,Oi=1014,Bi=1015,zi=1016,vh=1017,yh=1018,Fr=1020,df=35902,ff=35899,pf=1021,mf=1022,ki=1023,ms=1026,ys=1027,gf=1028,Mh=1029,nr=1030,Sh=1031;var bh=1033,$a=33776,ja=33777,Ka=33778,Qa=33779,wh=35840,Ah=35841,Th=35842,Eh=35843,Ch=36196,Rh=37492,Ph=37496,Ih=37488,Lh=37489,el=37490,Dh=37491,Nh=37808,Uh=37809,Fh=37810,Oh=37811,Bh=37812,zh=37813,kh=37814,Vh=37815,Gh=37816,Hh=37817,Wh=37818,Xh=37819,qh=37820,Yh=37821,Zh=36492,Jh=36494,$h=36495,jh=36283,Kh=36284,tl=36285,Qh=36286;var Aa=2300,Uc=2301,wc=2302,Gd=2303,Hd=2400,Wd=2401,Xd=2402;var U0=3200;var eu=0,F0=1,Ms="",xn="srgb",Ta="srgb-linear",Ea="linear",Kt="srgb";var Ac=7680;var O0=519,B0=512,z0=513,k0=514,_f=515,V0=516,G0=517,xf=518,vf=519,yf=35044;var Mf="300 es",bi=2e3,Ro=2001;function _x(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function H0(){let i=Po("canvas");return i.style.display="block",i}var Cm={},Io=null;function Ca(...i){let e="THREE."+i.shift();Io?Io("log",e,...i):console.log(e,...i)}function W0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function lt(...i){i=W0(i);let e="THREE."+i.shift();if(Io)Io("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ft(...i){i=W0(i);let e="THREE."+i.shift();if(Io)Io("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ya(...i){let e=i.join(" ");e in Cm||(Cm[e]=!0,lt(...i))}function X0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var q0={[Ec]:Ec,[Rc]:Lc,[Pc]:Pc,[Co]:Ic,[Cc]:Cc,[Lc]:Rc,[Dc]:Dc,[Ic]:Co},ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rm=1234567,Ma=Math.PI/180,Lo=180/Math.PI;function ir(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[n&255]+Wn[n>>8&255]+Wn[n>>16&255]+Wn[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Sf(i,e){return(i%e+e)%e}function vx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function yx(i,e,t){return i!==e?(t-i)/(e-i):0}function Sa(i,e,t){return(1-t)*i+t*e}function Mx(i,e,t,n){return Sa(i,e,1-Math.exp(-t*n))}function Sx(i,e=1){return e-Math.abs(Sf(i,e*2)-e)}function bx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ax(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tx(i,e){return i+Math.random()*(e-i)}function Ex(i){return i*(.5-Math.random())}function Cx(i){i!==void 0&&(Rm=i);let e=Rm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rx(i){return i*Ma}function Px(i){return i*Lo}function Ix(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Lx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),d=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),h=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*d,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*d,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*d,a*l);break;case"XZX":i.set(a*d,c*_,c*h,a*l);break;case"YXY":i.set(c*h,a*d,c*_,a*l);break;case"ZYZ":i.set(c*_,c*h,a*d,a*l);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function tu(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wf(i,e){if(e.constructor===Float32Array)return i;let t=tu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Af(i,e){if(e.constructor===Float32Array)return i;let t=tu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var J={DEG2RAD:Ma,RAD2DEG:Lo,generateUUID:ir,clamp:Pt,euclideanModulo:Sf,mapLinear:vx,inverseLerp:yx,lerp:Sa,damp:Mx,pingpong:Sx,smoothstep:bx,smootherstep:wx,randInt:Ax,randFloat:Tx,randFloatSpread:Ex,seededRandom:Cx,degToRad:Rx,radToDeg:Px,isPowerOfTwo:Ix,ceilPowerOfTwo:Lx,floorPowerOfTwo:bf,setQuaternionFromProperEuler:Dx,normalize:Af,denormalize:wf},If=class If{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};If.prototype.isVector2=!0;var ke=If,yt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],f=n[s+3],u=r[o+0],h=r[o+1],_=r[o+2],y=r[o+3];if(f!==y||c!==u||l!==h||d!==_){let g=c*u+l*h+d*_+f*y;g<0&&(u=-u,h=-h,_=-_,y=-y,g=-g);let m=1-a;if(g<.9995){let b=Math.acos(g),L=Math.sin(b);m=Math.sin(m*b)/L,a=Math.sin(a*b)/L,c=c*m+u*a,l=l*m+h*a,d=d*m+_*a,f=f*m+y*a}else{c=c*m+u*a,l=l*m+h*a,d=d*m+_*a,f=f*m+y*a;let b=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=b,l*=b,d*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],f=r[o],u=r[o+1],h=r[o+2],_=r[o+3];return e[t]=a*_+d*f+c*h-l*u,e[t+1]=c*_+d*u+l*f-a*h,e[t+2]=l*_+d*h+a*u-c*f,e[t+3]=d*_-a*f-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),f=a(r/2),u=c(n/2),h=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=u*d*f+l*h*_,this._y=l*h*f-u*d*_,this._z=l*d*_+u*h*f,this._w=l*d*f-u*h*_;break;case"YXZ":this._x=u*d*f+l*h*_,this._y=l*h*f-u*d*_,this._z=l*d*_-u*h*f,this._w=l*d*f+u*h*_;break;case"ZXY":this._x=u*d*f-l*h*_,this._y=l*h*f+u*d*_,this._z=l*d*_+u*h*f,this._w=l*d*f-u*h*_;break;case"ZYX":this._x=u*d*f-l*h*_,this._y=l*h*f+u*d*_,this._z=l*d*_-u*h*f,this._w=l*d*f+u*h*_;break;case"YZX":this._x=u*d*f+l*h*_,this._y=l*h*f+u*d*_,this._z=l*d*_-u*h*f,this._w=l*d*f-u*h*_;break;case"XZY":this._x=u*d*f-l*h*_,this._y=l*h*f-u*d*_,this._z=l*d*_+u*h*f,this._w=l*d*f+u*h*_;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=n+a+f;if(u>0){let h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>f){let h=2*Math.sqrt(1+n-a-f);this._w=(d-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>f){let h=2*Math.sqrt(1+a-n-f);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+d)/h}else{let h=2*Math.sqrt(1+f-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lf=class Lf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),d=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*d,this.y=n+c*d+a*l-r*f,this.z=s+c*f+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lf.prototype.isVector3=!0;var T=Lf,_d=new T,Pm=new yt,Df=class Df{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],f=n[7],u=n[2],h=n[5],_=n[8],y=s[0],g=s[3],m=s[6],b=s[1],L=s[4],A=s[7],I=s[2],P=s[5],x=s[8];return r[0]=o*y+a*b+c*I,r[3]=o*g+a*L+c*P,r[6]=o*m+a*A+c*x,r[1]=l*y+d*b+f*I,r[4]=l*g+d*L+f*P,r[7]=l*m+d*A+f*x,r[2]=u*y+h*b+_*I,r[5]=u*g+h*L+_*P,r[8]=u*m+h*A+_*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,u=a*c-d*r,h=l*r-o*c,_=t*f+n*u+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=f*y,e[1]=(s*l-d*n)*y,e[2]=(a*n-s*o)*y,e[3]=u*y,e[4]=(d*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=h*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ya("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xd.makeScale(e,t)),this}rotate(e){return ya("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xd.makeRotation(-e)),this}translate(e,t){return ya("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Df.prototype.isMatrix3=!0;var pt=Df,xd=new pt,Im=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nx(){let i={enabled:!0,workingColorSpace:Ta,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Kt&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Kt&&(s.r=Eo(s.r),s.g=Eo(s.g),s.b=Eo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ms?Ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ta]:{primaries:e,whitePoint:n,transfer:Ea,toXYZ:Im,fromXYZ:Lm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:Kt,toXYZ:Im,fromXYZ:Lm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}var zt=Nx();function ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Eo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var lo,Fc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{lo===void 0&&(lo=Po("canvas")),lo.width=e.width,lo.height=e.height;let s=lo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=lo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Po("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ps(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ps(t[n]/255)*255):t[n]=ps(t[n]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ux=0,Do=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vd(s[o].image)):r.push(vd(s[o]))}else r=vd(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}var Fx=0,yd=new T,Bn=class i extends ji{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$i,s=$i,r=Qn,o=vs,a=ki,c=ri,l=i.DEFAULT_ANISOTROPY,d=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=ir(),this.name="",this.source=new Do(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=cf;Bn.DEFAULT_ANISOTROPY=1;var Nf=class Nf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],h=c[5],_=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let L=(l+1)/2,A=(h+1)/2,I=(m+1)/2,P=(d+u)/4,x=(f+y)/4,C=(_+g)/4;return L>A&&L>I?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=P/n,r=x/n):A>I?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=P/s,r=C/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=x/r,s=C/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(u-d)*(u-d));return Math.abs(b)<.001&&(b=1),this.x=(g-_)/b,this.y=(f-y)/b,this.z=(u-d)/b,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nf.prototype.isVector4=!0;var vn=Nf,Oc=class extends ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Bn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Do(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends Oc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ra=class extends Bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bc=class extends Bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var fh=class fh{constructor(e,t,n,s,r,o,a,c,l,d,f,u,h,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,d,f,u,h,_,y,g)}set(e,t,n,s,r,o,a,c,l,d,f,u,h,_,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=d,m[10]=f,m[14]=u,m[3]=h,m[7]=_,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fh().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/co.setFromMatrixColumn(e,0).length(),r=1/co.setFromMatrixColumn(e,1).length(),o=1/co.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*d,h=o*f,_=a*d,y=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=h+_*l,t[5]=u-y*l,t[9]=-a*c,t[2]=y-u*l,t[6]=_+h*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*d,h=c*f,_=l*d,y=l*f;t[0]=u+y*a,t[4]=_*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=h*a-_,t[6]=y+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*d,h=c*f,_=l*d,y=l*f;t[0]=u-y*a,t[4]=-o*f,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*d,t[9]=y-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*d,h=o*f,_=a*d,y=a*f;t[0]=c*d,t[4]=_*l-h,t[8]=u*l+y,t[1]=c*f,t[5]=y*l+u,t[9]=h*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,h=o*l,_=a*c,y=a*l;t[0]=c*d,t[4]=y-u*f,t[8]=_*f+h,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=h*f+_,t[10]=u-y*f}else if(e.order==="XZY"){let u=o*c,h=o*l,_=a*c,y=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+y,t[5]=o*d,t[9]=h*f-_,t[2]=_*f-h,t[6]=a*d,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ox,e,Bx)}lookAt(e,t,n){let s=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Vs.crossVectors(n,di),Vs.lengthSq()===0&&(Math.abs(n.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Vs.crossVectors(n,di)),Vs.normalize(),jl.crossVectors(di,Vs),s[0]=Vs.x,s[4]=jl.x,s[8]=di.x,s[1]=Vs.y,s[5]=jl.y,s[9]=di.y,s[2]=Vs.z,s[6]=jl.z,s[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],f=n[5],u=n[9],h=n[13],_=n[2],y=n[6],g=n[10],m=n[14],b=n[3],L=n[7],A=n[11],I=n[15],P=s[0],x=s[4],C=s[8],O=s[12],N=s[1],z=s[5],k=s[9],Q=s[13],F=s[2],$=s[6],te=s[10],V=s[14],K=s[3],j=s[7],le=s[11],ue=s[15];return r[0]=o*P+a*N+c*F+l*K,r[4]=o*x+a*z+c*$+l*j,r[8]=o*C+a*k+c*te+l*le,r[12]=o*O+a*Q+c*V+l*ue,r[1]=d*P+f*N+u*F+h*K,r[5]=d*x+f*z+u*$+h*j,r[9]=d*C+f*k+u*te+h*le,r[13]=d*O+f*Q+u*V+h*ue,r[2]=_*P+y*N+g*F+m*K,r[6]=_*x+y*z+g*$+m*j,r[10]=_*C+y*k+g*te+m*le,r[14]=_*O+y*Q+g*V+m*ue,r[3]=b*P+L*N+A*F+I*K,r[7]=b*x+L*z+A*$+I*j,r[11]=b*C+L*k+A*te+I*le,r[15]=b*O+L*Q+A*V+I*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],h=e[14],_=e[3],y=e[7],g=e[11],m=e[15],b=c*h-l*u,L=a*h-l*f,A=a*u-c*f,I=o*h-l*d,P=o*u-c*d,x=o*f-a*d;return t*(y*b-g*L+m*A)-n*(_*b-g*I+m*P)+s*(_*L-y*I+m*x)-r*(_*A-y*P+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-n*(r*d-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],h=e[11],_=e[12],y=e[13],g=e[14],m=e[15],b=t*a-n*o,L=t*c-s*o,A=t*l-r*o,I=n*c-s*a,P=n*l-r*a,x=s*l-r*c,C=d*y-f*_,O=d*g-u*_,N=d*m-h*_,z=f*g-u*y,k=f*m-h*y,Q=u*m-h*g,F=b*Q-L*k+A*z+I*N-P*O+x*C;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/F;return e[0]=(a*Q-c*k+l*z)*$,e[1]=(s*k-n*Q-r*z)*$,e[2]=(y*x-g*P+m*I)*$,e[3]=(u*P-f*x-h*I)*$,e[4]=(c*N-o*Q-l*O)*$,e[5]=(t*Q-s*N+r*O)*$,e[6]=(g*A-_*x-m*L)*$,e[7]=(d*x-u*A+h*L)*$,e[8]=(o*k-a*N+l*C)*$,e[9]=(n*N-t*k-r*C)*$,e[10]=(_*P-y*A+m*b)*$,e[11]=(f*A-d*P-h*b)*$,e[12]=(a*O-o*z-c*C)*$,e[13]=(t*z-n*O+s*C)*$,e[14]=(y*L-_*I-g*b)*$,e[15]=(d*I-f*L+u*b)*$,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,f=a+a,u=r*l,h=r*d,_=r*f,y=o*d,g=o*f,m=a*f,b=c*l,L=c*d,A=c*f,I=n.x,P=n.y,x=n.z;return s[0]=(1-(y+m))*I,s[1]=(h+A)*I,s[2]=(_-L)*I,s[3]=0,s[4]=(h-A)*P,s[5]=(1-(u+m))*P,s[6]=(g+b)*P,s[7]=0,s[8]=(_+L)*x,s[9]=(g-b)*x,s[10]=(1-(u+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=co.set(s[0],s[1],s[2]).length(),a=co.set(s[4],s[5],s[6]).length(),c=co.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ii.copy(this);let l=1/o,d=1/a,f=1/c;return Ii.elements[0]*=l,Ii.elements[1]*=l,Ii.elements[2]*=l,Ii.elements[4]*=d,Ii.elements[5]*=d,Ii.elements[6]*=d,Ii.elements[8]*=f,Ii.elements[9]*=f,Ii.elements[10]*=f,t.setFromRotationMatrix(Ii),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=bi,c=!1){let l=this.elements,d=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),_,y;if(c)_=r/(o-r),y=o*r/(o-r);else if(a===bi)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ro)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=bi,c=!1){let l=this.elements,d=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),h=-(n+s)/(n-s),_,y;if(c)_=1/(o-r),y=o/(o-r);else if(a===bi)_=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ro)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};fh.prototype.isMatrix4=!0;var Dt=fh,co=new T,Ii=new Dt,Ox=new T(0,0,0),Bx=new T(1,1,1),Vs=new T,jl=new T,di=new T,Dm=new Dt,Nm=new yt,Ui=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],f=s[2],u=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var Pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zx=0,Um=new T,ho=new yt,ls=new Dt,Kl=new T,da=new T,kx=new T,Vx=new yt,Fm=new T(1,0,0),Om=new T(0,1,0),Bm=new T(0,0,1),zm={type:"added"},Gx={type:"removed"},uo={type:"childadded",child:null},Md={type:"childremoved",child:null},Yn=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new Ui,n=new yt,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new pt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.multiply(ho),this}rotateOnWorldAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.premultiply(ho),this}rotateX(e){return this.rotateOnAxis(Fm,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return Um.copy(e).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fm,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kl.copy(e):Kl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(da,Kl,this.up):ls.lookAt(Kl,da,this.up),this.quaternion.setFromRotationMatrix(ls),s&&(ls.extractRotation(s.matrixWorld),ho.setFromRotationMatrix(ls),this.quaternion.premultiply(ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),uo.child=e,this.dispatchEvent(uo),uo.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gx),Md.child=e,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(ls),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),uo.child=e,this.dispatchEvent(uo),uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,kx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,Vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yn.DEFAULT_UP=new T(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ut=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hx={type:"move"},No=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,_=.005;l.inputState.pinching&&u>h+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gs={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function Sd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=zt.workingColorSpace){if(e=Sf(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Sd(o,r,e+1/3),this.g=Sd(o,r,e),this.b=Sd(o,r,e-1/3)}return zt.colorSpaceToWorking(this,s),this}setStyle(e,t=xn){function n(r){r!==void 0&&parseFloat(r)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){let n=Y0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return zt.workingToColorSpace(Xn.copy(this),e),Math.round(Pt(Xn.r*255,0,255))*65536+Math.round(Pt(Xn.g*255,0,255))*256+Math.round(Pt(Xn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(Xn.copy(this),t);let n=Xn.r,s=Xn.g,r=Xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=xn){zt.workingToColorSpace(Xn.copy(this),e);let t=Xn.r,n=Xn.g,s=Xn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gs),this.setHSL(Gs.h+e,Gs.s+t,Gs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gs),e.getHSL(Ql);let n=Sa(Gs.h,Ql.h,t),s=Sa(Gs.s,Ql.s,t),r=Sa(Gs.l,Ql.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new Be;Be.NAMES=Y0;var Ia=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Li=new T,cs=new T,bd=new T,hs=new T,fo=new T,po=new T,km=new T,wd=new T,Ad=new T,Td=new T,Ed=new vn,Cd=new vn,Rd=new vn,fs=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Li.subVectors(e,t),s.cross(Li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Li.subVectors(s,t),cs.subVectors(n,t),bd.subVectors(e,t);let o=Li.dot(Li),a=Li.dot(cs),c=Li.dot(bd),l=cs.dot(cs),d=cs.dot(bd),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,h=(l*c-a*d)*u,_=(o*d-a*c)*u;return r.set(1-h-_,_,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hs)===null?!1:hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,hs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hs.x),c.addScaledVector(o,hs.y),c.addScaledVector(a,hs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ed.setScalar(0),Cd.setScalar(0),Rd.setScalar(0),Ed.fromBufferAttribute(e,t),Cd.fromBufferAttribute(e,n),Rd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ed,r.x),o.addScaledVector(Cd,r.y),o.addScaledVector(Rd,r.z),o}static isFrontFacing(e,t,n,s){return Li.subVectors(n,t),cs.subVectors(e,t),Li.cross(cs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),Li.cross(cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;fo.subVectors(s,n),po.subVectors(r,n),wd.subVectors(e,n);let c=fo.dot(wd),l=po.dot(wd);if(c<=0&&l<=0)return t.copy(n);Ad.subVectors(e,s);let d=fo.dot(Ad),f=po.dot(Ad);if(d>=0&&f<=d)return t.copy(s);let u=c*f-d*l;if(u<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(n).addScaledVector(fo,o);Td.subVectors(e,r);let h=fo.dot(Td),_=po.dot(Td);if(_>=0&&h<=_)return t.copy(r);let y=h*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(po,a);let g=d*_-h*f;if(g<=0&&f-d>=0&&h-_>=0)return km.subVectors(r,s),a=(f-d)/(f-d+(h-_)),t.copy(s).addScaledVector(km,a);let m=1/(g+y+u);return o=y*m,a=u*m,t.copy(n).addScaledVector(fo,o).addScaledVector(po,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ys=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Di):Di.fromBufferAttribute(r,o),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ec.copy(n.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),tc.subVectors(this.max,fa),mo.subVectors(e.a,fa),go.subVectors(e.b,fa),_o.subVectors(e.c,fa),Hs.subVectors(go,mo),Ws.subVectors(_o,go),wr.subVectors(mo,_o);let t=[0,-Hs.z,Hs.y,0,-Ws.z,Ws.y,0,-wr.z,wr.y,Hs.z,0,-Hs.x,Ws.z,0,-Ws.x,wr.z,0,-wr.x,-Hs.y,Hs.x,0,-Ws.y,Ws.x,0,-wr.y,wr.x,0];return!Pd(t,mo,go,_o,tc)||(t=[1,0,0,0,1,0,0,0,1],!Pd(t,mo,go,_o,tc))?!1:(nc.crossVectors(Hs,Ws),t=[nc.x,nc.y,nc.z],Pd(t,mo,go,_o,tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(us),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},us=[new T,new T,new T,new T,new T,new T,new T,new T],Di=new T,ec=new Ys,mo=new T,go=new T,_o=new T,Hs=new T,Ws=new T,wr=new T,fa=new T,tc=new T,nc=new T,Ar=new T;function Pd(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ar.fromArray(i,r);let a=s.x*Math.abs(Ar.x)+s.y*Math.abs(Ar.y)+s.z*Math.abs(Ar.z),c=e.dot(Ar),l=t.dot(Ar),d=n.dot(Ar);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var Pn=new T,ic=new ke,Wx=0,Ni=class extends ji{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yf,this.updateRanges=[],this.gpuType=Bi,this.version=0,this._normalizationScale=e!==void 0?tu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix3(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Af(e,this.array)}};var La=class extends Ni{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Da=class extends Ni{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends Ni{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xx=new Ys,pa=new T,Id=new T,Zs=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);let t=pa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Id)),this.expandByPoint(pa.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qx=0,Si=new Dt,Ld=new Yn,xo=new T,fi=new Ys,ma=new Ys,Fn=new T,It=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_x(e)?Da:La)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,n){return Si.makeTranslation(e,t,n),this.applyMatrix4(Si),this}scale(e,t,n){return Si.makeScale(e,t,n),this.applyMatrix4(Si),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ma.setFromBufferAttribute(a),this.morphTargetsRelative?(Fn.addVectors(fi.min,ma.min),fi.expandByPoint(Fn),Fn.addVectors(fi.max,ma.max),fi.expandByPoint(Fn)):(fi.expandByPoint(ma.min),fi.expandByPoint(ma.max))}fi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Fn.fromBufferAttribute(a,l),c&&(xo.fromBufferAttribute(e,l),Fn.add(xo)),s=Math.max(s,n.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ni(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let O=0;O<n.count;O++)a[O]=new T,c[O]=new T;let d=new T,f=new T,u=new T,h=new ke,_=new ke,y=new ke,g=new T,m=new T;function b(O,N,z){l[O]=l[N]=l[z]=1,d.fromBufferAttribute(n,O),f.fromBufferAttribute(n,N),u.fromBufferAttribute(n,z),h.fromBufferAttribute(r,O),_.fromBufferAttribute(r,N),y.fromBufferAttribute(r,z),f.sub(d),u.sub(d),_.sub(h),y.sub(h);let k=1/(_.x*y.y-y.x*_.y);isFinite(k)&&(g.copy(f).multiplyScalar(y.y).addScaledVector(u,-_.y).multiplyScalar(k),m.copy(u).multiplyScalar(_.x).addScaledVector(f,-y.x).multiplyScalar(k),a[O].add(g),a[N].add(g),a[z].add(g),c[O].add(m),c[N].add(m),c[z].add(m))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let O=0,N=L.length;O<N;++O){let z=L[O],k=z.start,Q=z.count;for(let F=k,$=k+Q;F<$;F+=3)b(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let A=new T,I=new T,P=new T,x=new T;function C(O){P.fromBufferAttribute(s,O),x.copy(P);let N=a[O];A.copy(N),A.sub(P.multiplyScalar(P.dot(N))).normalize(),I.crossVectors(x,N);let k=I.dot(c[O])<0?-1:1;o.setXYZW(O,A.x,A.y,A.z,k)}for(let O=0,N=n.count;O<N;++O)l[O]&&C(O);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,d=new T,f=new T;if(e)for(let u=0,h=e.count;u<h;u+=3){let _=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(d),c.add(d),l.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,f=a.normalized,u=new l.constructor(c.length*d),h=0,_=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?h=c[y]*a.data.stride+a.offset:h=c[y]*d;for(let m=0;m<d;m++)u[_++]=l[h++]}return new Ni(u,d,f)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,f=l.length;d<f;d++){let u=l[d],h=e(u,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){let h=l[f];d.push(h.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],f=r[l];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yf,this.updateRanges=[],this.version=0,this.uuid=ir()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Vm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Vm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Vm(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ir()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Kn=new T,Na=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?tu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix4(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyNormalMatrix(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.transformDirection(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ni(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Af(e,this.data.array)}},Dd=new T,Yx=new T,Zx=new pt,pi=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dd.subVectors(n,t).cross(Yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Dd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zx.getNormalMatrix(e),s=this.coplanarPoint(Dd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Jx=0,Fi=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=ko,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=ef,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ac,this.stencilZFail=Ac,this.stencilZPass=Ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ki=class extends Fi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vo,ga=new T,yo=new T,Mo=new T,So=new ke,_a=new ke,Z0=new Dt,sc=new T,xa=new T,rc=new T,Gm=new ke,Nd=new ke,Hm=new ke,gs=class extends Yn{constructor(e=new Ki){if(super(),this.isSprite=!0,this.type="Sprite",vo===void 0){vo=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zc(t,5);vo.setIndex([0,1,2,0,2,3]),vo.setAttribute("position",new Na(n,3,0,!1)),vo.setAttribute("uv",new Na(n,2,3,!1))}this.geometry=vo,this.material=e,this.center=new ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yo.setFromMatrixScale(this.matrixWorld),Z0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yo.multiplyScalar(-Mo.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;oc(sc.set(-.5,-.5,0),Mo,o,yo,s,r),oc(xa.set(.5,-.5,0),Mo,o,yo,s,r),oc(rc.set(.5,.5,0),Mo,o,yo,s,r),Gm.set(0,0),Nd.set(1,0),Hm.set(1,1);let a=e.ray.intersectTriangle(sc,xa,rc,!1,ga);if(a===null&&(oc(xa.set(-.5,.5,0),Mo,o,yo,s,r),Nd.set(0,1),a=e.ray.intersectTriangle(sc,rc,xa,!1,ga),a===null))return;let c=e.ray.origin.distanceTo(ga);c<e.near||c>e.far||t.push({distance:c,point:ga.clone(),uv:fs.getInterpolation(ga,sc,xa,rc,Gm,Nd,Hm,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function oc(i,e,t,n,s,r){So.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(_a.x=r*So.x-s*So.y,_a.y=s*So.x+r*So.y):_a.copy(So),i.copy(e),i.x+=_a.x,i.y+=_a.y,i.applyMatrix4(Z0)}var ds=new T,Ud=new T,ac=new T,lc=new T,Uo=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ds)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ds.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ds.copy(this.origin).addScaledVector(this.direction,t),ds.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ud.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),lc.copy(this.origin).sub(Ud);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ac),a=lc.dot(this.direction),c=-lc.dot(ac),l=lc.lengthSq(),d=Math.abs(1-o*o),f,u,h,_;if(d>0)if(f=o*c-a,u=o*a-c,_=r*d,f>=0)if(u>=-_)if(u<=_){let y=1/d;f*=y,u*=y,h=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u<=-_?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),h=-f*f+u*(u+2*c)+l):u<=_?(f=0,u=Math.min(Math.max(-r,-c),r),h=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),h=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ud).addScaledVector(ac,u),h}intersectSphere(e,t){if(e.radius<0)return null;ds.subVectors(e.center,this.origin);let n=ds.dot(this.direction),s=ds.dot(ds)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ds)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,f=e.x-o.x,u=e.y-o.y,h=e.z-o.z,_=t.x-o.x,y=t.y-o.y,g=t.z-o.z,m=n.x-o.x,b=n.y-o.y,L=n.z-o.z,A=Math.abs(c),I=Math.abs(l),P=Math.abs(d),x,C,O,N,z,k,Q,F,$,te,V,K;if(A>=I&&A>=P?(O=c,k=f,$=_,K=m,c>=0?(x=l,C=d,N=u,z=h,Q=y,F=g,te=b,V=L):(x=d,C=l,N=h,z=u,Q=g,F=y,te=L,V=b)):I>=P?(O=l,k=u,$=y,K=b,l>=0?(x=d,C=c,N=h,z=f,Q=g,F=_,te=L,V=m):(x=c,C=d,N=f,z=h,Q=_,F=g,te=m,V=L)):(O=d,k=h,$=g,K=L,d>=0?(x=c,C=l,N=f,z=u,Q=_,F=y,te=m,V=b):(x=l,C=c,N=u,z=f,Q=y,F=_,te=b,V=m)),O===0)return null;let j=x/O,le=C/O,ue=1/O,Ge=N-j*k,ct=z-le*k,Y=Q-j*$,pe=F-le*$,Me=te-j*K,He=V-le*K,de=Me*pe-He*Y,Le=Ge*He-ct*Me,Mt=Y*ct-pe*Ge;if(s){if(de<0||Le<0||Mt<0)return null}else if((de<0||Le<0||Mt<0)&&(de>0||Le>0||Mt>0))return null;let _e=de+Le+Mt;if(_e===0)return null;let at=ue*(de*k+Le*$+Mt*K);return(_e>0?at<0:at>0)?null:this.at(at/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wi=class extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wm=new Dt,Tr=new Uo,cc=new Zs,Xm=new T,hc=new T,uc=new T,dc=new T,Fd=new T,fc=new T,qm=new T,pc=new T,st=class extends Yn{constructor(e=new It,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],f=r[c];d!==0&&(Fd.fromBufferAttribute(f,e),o?fc.addScaledVector(Fd,d):fc.addScaledVector(Fd.sub(t),d))}t.add(fc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),Tr.copy(e.ray).recast(e.near),!(cc.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(cc,Xm)===null||Tr.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(r).invert(),Tr.copy(e.ray).applyMatrix4(Wm),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=u.length;_<y;_++){let g=u[_],m=o[g.materialIndex],b=Math.max(g.start,h.start),L=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let A=b,I=L;A<I;A+=3){let P=a.getX(A),x=a.getX(A+1),C=a.getX(A+2);s=mc(this,m,e,n,l,d,f,P,x,C),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let g=_,m=y;g<m;g+=3){let b=a.getX(g),L=a.getX(g+1),A=a.getX(g+2);s=mc(this,o,e,n,l,d,f,b,L,A),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=u.length;_<y;_++){let g=u[_],m=o[g.materialIndex],b=Math.max(g.start,h.start),L=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let A=b,I=L;A<I;A+=3){let P=A,x=A+1,C=A+2;s=mc(this,m,e,n,l,d,f,P,x,C),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let g=_,m=y;g<m;g+=3){let b=g,L=g+1,A=g+2;s=mc(this,o,e,n,l,d,f,b,L,A),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function $x(i,e,t,n,s,r,o,a){let c;if(e.side===ni?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===tr,a),c===null)return null;pc.copy(a),pc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(pc);return l<t.near||l>t.far?null:{distance:l,point:pc.clone(),object:i}}function mc(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,hc),i.getVertexPosition(c,uc),i.getVertexPosition(l,dc);let d=$x(i,e,t,n,hc,uc,dc,qm);if(d){let f=new T;fs.getBarycoord(qm,hc,uc,dc,f),s&&(d.uv=fs.getInterpolatedAttribute(s,a,c,l,f,new ke)),r&&(d.uv1=fs.getInterpolatedAttribute(r,a,c,l,f,new ke)),o&&(d.normal=fs.getInterpolatedAttribute(o,a,c,l,f,new T),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new T,materialIndex:0};fs.getNormal(hc,uc,dc,u.normal),d.face=u,d.barycoord=f}return d}var kc=class extends Bn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=On,d=On,f,u){super(null,o,a,c,l,d,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=new Zs,jx=new ke(.5,.5),gc=new T,Js=class{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,o=new pi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],f=r[5],u=r[6],h=r[7],_=r[8],y=r[9],g=r[10],m=r[11],b=r[12],L=r[13],A=r[14],I=r[15];if(s[0].setComponents(l-o,h-d,m-_,I-b).normalize(),s[1].setComponents(l+o,h+d,m+_,I+b).normalize(),s[2].setComponents(l+a,h+f,m+y,I+L).normalize(),s[3].setComponents(l-a,h-f,m-y,I-L).normalize(),n)s[4].setComponents(c,u,g,A).normalize(),s[5].setComponents(l-c,h-u,m-g,I-A).normalize();else if(s[4].setComponents(l-c,h-u,m-g,I-A).normalize(),t===bi)s[5].setComponents(l+c,h+u,m+g,I+A).normalize();else if(t===Ro)s[5].setComponents(c,u,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);let t=jx.distanceTo(e.center);return Er.radius=.7071067811865476+t,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(gc.x=s.normal.x>0?e.max.x:e.min.x,gc.y=s.normal.y>0?e.max.y:e.min.y,gc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ym=new Dt,Vc=class i{constructor(){this.coordinateSystem=bi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ym.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Js),n[s].setFromProjectionMatrix(Ym,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Js),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Sn=class extends Fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Gc=new T,Hc=new T,Zm=new Dt,va=new Uo,_c=new Zs,Od=new T,Jm=new T,In=class extends Yn{constructor(e=new It,t=new Sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Gc.fromBufferAttribute(t,s-1),Hc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Gc.distanceTo(Hc);e.setAttribute("lineDistance",new nt(n,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(s),_c.radius+=r,e.ray.intersectsSphere(_c)===!1)return;Zm.copy(s).invert(),va.copy(e.ray).applyMatrix4(Zm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let h=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let y=h,g=_-1;y<g;y+=l){let m=d.getX(y),b=d.getX(y+1),L=xc(this,e,va,c,m,b,y);L&&t.push(L)}if(this.isLineLoop){let y=d.getX(_-1),g=d.getX(h),m=xc(this,e,va,c,y,g,_-1);m&&t.push(m)}}else{let h=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let y=h,g=_-1;y<g;y+=l){let m=xc(this,e,va,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=xc(this,e,va,c,_-1,h,_-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xc(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Gc.fromBufferAttribute(a,s),Hc.fromBufferAttribute(a,r),t.distanceSqToSegment(Gc,Hc,Od,Jm)>n)return;Od.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Od);if(!(l<e.near||l>e.far))return{distance:l,point:Jm.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var $m=new T,jm=new T,Fo=class extends In{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$m.fromBufferAttribute(t,s),jm.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$m.distanceTo(jm);e.setAttribute("lineDistance",new nt(n,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Cr=class extends Fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Km=new Dt,qd=new Uo,vc=new Zs,yc=new T,$s=class extends Yn{constructor(e=new It,t=new Cr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(s),vc.radius+=r,e.ray.intersectsSphere(vc)===!1)return;Km.copy(s).invert(),qd.copy(e.ray).applyMatrix4(Km);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let _=u,y=h;_<y;_++){let g=l.getX(_);yc.fromBufferAttribute(f,g),Qm(yc,g,c,s,e,t,this)}}else{let u=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let _=u,y=h;_<y;_++)yc.fromBufferAttribute(f,_),Qm(yc,_,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qm(i,e,t,n,s,r,o){let a=qd.distanceSqToPoint(i);if(a<t){let c=new T;qd.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ua=class extends Bn{constructor(e=[],t=Ur,n,s,r,o,a,c,l,d){super(e,t,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gi=class extends Bn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _s=class extends Bn{constructor(e,t,n=Oi,s,r,o,a=On,c=On,l,d=ms,f=1){if(d!==ms&&d!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Do(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fa=class extends _s{constructor(e,t=Oi,n=Ur,s,r,o=On,a=On,c,l=ms){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Oa=class extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ei=class i extends It{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],f=[],u=0,h=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function _(y,g,m,b,L,A,I,P,x,C,O){let N=A/x,z=I/C,k=A/2,Q=I/2,F=P/2,$=x+1,te=C+1,V=0,K=0,j=new T;for(let le=0;le<te;le++){let ue=le*z-Q;for(let Ge=0;Ge<$;Ge++){let ct=Ge*N-k;j[y]=ct*b,j[g]=ue*L,j[m]=F,l.push(j.x,j.y,j.z),j[y]=0,j[g]=0,j[m]=P>0?1:-1,d.push(j.x,j.y,j.z),f.push(Ge/x),f.push(1-le/C),V+=1}}for(let le=0;le<C;le++)for(let ue=0;ue<x;ue++){let Ge=u+ue+$*le,ct=u+ue+$*(le+1),Y=u+(ue+1)+$*(le+1),pe=u+(ue+1)+$*le;c.push(Ge,ct,pe),c.push(ct,Y,pe),K+=6}a.addGroup(h,K,O),h+=K,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ba=class i extends It{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new T,d=new ke;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let h=n+f/t*s;l.x=e*Math.cos(h),l.y=e*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ti=class i extends It{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],u=[],h=[],_=0,y=[],g=n/2,m=0;b(),o===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(d),this.setAttribute("position",new nt(f,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function b(){let A=new T,I=new T,P=0,x=(t-e)/n;for(let C=0;C<=r;C++){let O=[],N=C/r,z=N*(t-e)+e;for(let k=0;k<=s;k++){let Q=k/s,F=Q*c+a,$=Math.sin(F),te=Math.cos(F);I.x=z*$,I.y=-N*n+g,I.z=z*te,f.push(I.x,I.y,I.z),A.set($,x,te).normalize(),u.push(A.x,A.y,A.z),h.push(Q,1-N),O.push(_++)}y.push(O)}for(let C=0;C<s;C++)for(let O=0;O<r;O++){let N=y[O][C],z=y[O+1][C],k=y[O+1][C+1],Q=y[O][C+1];(e>0||O!==0)&&(d.push(N,z,Q),P+=3),(t>0||O!==r-1)&&(d.push(z,k,Q),P+=3)}l.addGroup(m,P,0),m+=P}function L(A){let I=_,P=new ke,x=new T,C=0,O=A===!0?e:t,N=A===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,g*N,0),u.push(0,N,0),h.push(.5,.5),_++;let z=_;for(let k=0;k<=s;k++){let F=k/s*c+a,$=Math.cos(F),te=Math.sin(F);x.x=O*te,x.y=g*N,x.z=O*$,f.push(x.x,x.y,x.z),u.push(0,N,0),P.x=$*.5+.5,P.y=te*.5*N+.5,h.push(P.x,P.y),_++}for(let k=0;k<s;k++){let Q=I+k,F=z+k;A===!0?d.push(F,F+1,Q):d.push(F+1,F,Q),C+=3}l.addGroup(m,C,A===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rr=class i extends ti{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let d=n[s],u=n[s+1]-d,h=(o-d)/u;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ke:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,s=[],r=[],o=[],a=new T,c=new Dt;for(let h=0;h<=e;h++){let _=h/e;s[h]=this.getTangentAt(_,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Pt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,_))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Pt(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],h*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},za=class extends Ai{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ke){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,h=l-this.aY;c=u*d-h*f+this.aX,l=u*f+h*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wc=class extends za{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Tf(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,d,f){let u=(o-r)/l-(a-r)/(l+d)+(a-o)/d,h=(a-o)/d-(c-o)/(d+f)+(c-a)/f;u*=d,h*=d,s(o,a,u,h)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var e0=new T,t0=new T,Bd=new Tf,zd=new Tf,kd=new Tf,xs=class extends Ai{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,d;this.closed||a>0?l=s[(a-1)%r]:(t0.subVectors(s[0],s[1]).add(s[0]),l=t0);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(e0.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=e0),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(f),h),y=Math.pow(f.distanceToSquared(u),h),g=Math.pow(u.distanceToSquared(d),h);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),Bd.initNonuniformCatmullRom(l.x,f.x,u.x,d.x,_,y,g),zd.initNonuniformCatmullRom(l.y,f.y,u.y,d.y,_,y,g),kd.initNonuniformCatmullRom(l.z,f.z,u.z,d.z,_,y,g)}else this.curveType==="catmullrom"&&(Bd.initCatmullRom(l.x,f.x,u.x,d.x,this.tension),zd.initCatmullRom(l.y,f.y,u.y,d.y,this.tension),kd.initCatmullRom(l.z,f.z,u.z,d.z,this.tension));return n.set(Bd.calc(c),zd.calc(c),kd.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function n0(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Kx(i,e){let t=1-i;return t*t*e}function Qx(i,e){return 2*(1-i)*i*e}function ev(i,e){return i*i*e}function ba(i,e,t,n){return Kx(i,e)+Qx(i,t)+ev(i,n)}function tv(i,e){let t=1-i;return t*t*t*e}function nv(i,e){let t=1-i;return 3*t*t*i*e}function iv(i,e){return 3*(1-i)*i*i*e}function sv(i,e){return i*i*i*e}function wa(i,e,t,n,s){return tv(i,e)+nv(i,t)+iv(i,n)+sv(i,s)}var Xc=class extends Ai{constructor(e=new ke,t=new ke,n=new ke,s=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ke){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wa(e,s.x,r.x,o.x,a.x),wa(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qc=class extends Ai{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wa(e,s.x,r.x,o.x,a.x),wa(e,s.y,r.y,o.y,a.y),wa(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yc=class extends Ai{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zc=class extends Ai{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jc=class extends Ai{constructor(e=new ke,t=new ke,n=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ke){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ba(e,s.x,r.x,o.x),ba(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends Ai{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ba(e,s.x,r.x,o.x),ba(e,s.y,r.y,o.y),ba(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],d=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(n0(a,c.x,l.x,d.x,f.x),n0(a,c.y,l.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ke().fromArray(s))}return this}},rv=Object.freeze({__proto__:null,ArcCurve:Wc,CatmullRomCurve3:xs,CubicBezierCurve:Xc,CubicBezierCurve3:qc,EllipseCurve:za,LineCurve:Yc,LineCurve3:Zc,QuadraticBezierCurve:Jc,QuadraticBezierCurve3:ka,SplineCurve:$c});var Pr=class i extends It{constructor(e=[new ke(0,-.5),new ke(.5,0),new ke(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Pt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],d=1/t,f=new T,u=new ke,h=new T,_=new T,y=new T,g=0,m=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,h.x=m*1,h.y=-g,h.z=m*0,y.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:y.normalize(),c.push(y.x,y.y,y.z);break;default:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,h.x=m*1,h.y=-g,h.z=m*0,_.copy(h),h.x+=y.x,h.y+=y.y,h.z+=y.z,h.normalize(),c.push(h.x,h.y,h.z),y.copy(_)}for(let b=0;b<=t;b++){let L=n+b*d*s,A=Math.sin(L),I=Math.cos(L);for(let P=0;P<=e.length-1;P++){f.x=e[P].x*A,f.y=e[P].y,f.z=e[P].x*I,o.push(f.x,f.y,f.z),u.x=b/t,u.y=P/(e.length-1),a.push(u.x,u.y);let x=c[3*P+0]*A,C=c[3*P+1],O=c[3*P+0]*I;l.push(x,C,O)}}for(let b=0;b<t;b++)for(let L=0;L<e.length-1;L++){let A=L+b*e.length,I=A,P=A+e.length,x=A+e.length+1,C=A+1;r.push(I,P,C),r.push(x,C,P)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ir=class i extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,f=e/a,u=t/c,h=[],_=[],y=[],g=[];for(let m=0;m<d;m++){let b=m*u-o;for(let L=0;L<l;L++){let A=L*f-r;_.push(A,-b,0),y.push(0,0,1),g.push(L/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let L=b+l*m,A=b+l*(m+1),I=b+1+l*(m+1),P=b+1+l*m;h.push(L,A,P),h.push(A,I,P)}this.setIndex(h),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Lr=class i extends It{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],d=[],f=e,u=(t-e)/s,h=new T,_=new ke;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let m=r+g/n*o;h.x=f*Math.cos(m),h.y=f*Math.sin(m),c.push(h.x,h.y,h.z),l.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,d.push(_.x,_.y)}f+=u}for(let y=0;y<s;y++){let g=y*(n+1);for(let m=0;m<n;m++){let b=m+g,L=b,A=b+n+1,I=b+n+2,P=b+1;a.push(L,A,P),a.push(A,I,P)}}this.setIndex(a),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var zn=class i extends It{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],f=new T,u=new T,h=[],_=[],y=[],g=[];for(let m=0;m<=n;m++){let b=[],L=m/n,A=o+L*a,I=e*Math.cos(A),P=Math.sqrt(e*e-I*I),x=0;m===0&&o===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){let O=C/t,N=s+O*r;f.x=-P*Math.cos(N),f.y=I,f.z=P*Math.sin(N),_.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),g.push(O+x,1-L),b.push(l++)}d.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let L=d[m][b+1],A=d[m][b],I=d[m+1][b],P=d[m+1][b+1];(m!==0||o>0)&&h.push(L,A,P),(m!==n-1||c<Math.PI)&&h.push(A,I,P)}this.setIndex(h),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var js=class i extends It{constructor(e=new ka(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,c=new T,l=new ke,d=new T,f=[],u=[],h=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new nt(f,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function y(){for(let L=0;L<t;L++)g(L);g(r===!1?t:0),b(),m()}function g(L){d=e.getPointAt(L/t,d);let A=o.normals[L],I=o.binormals[L];for(let P=0;P<=s;P++){let x=P/s*Math.PI*2,C=Math.sin(x),O=-Math.cos(x);c.x=O*A.x+C*I.x,c.y=O*A.y+C*I.y,c.z=O*A.z+C*I.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,f.push(a.x,a.y,a.z)}}function m(){for(let L=1;L<=t;L++)for(let A=1;A<=s;A++){let I=(s+1)*(L-1)+(A-1),P=(s+1)*L+(A-1),x=(s+1)*L+A,C=(s+1)*(L-1)+A;_.push(I,P,C),_.push(P,x,C)}}function b(){for(let L=0;L<=t;L++)for(let A=0;A<=s;A++)l.x=L/t,l.y=A/s,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new rv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Or(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(i0(s))s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(i0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Zn(i){let e={};for(let t=0;t<i.length;t++){let n=Or(i[t]);for(let s in n)e[s]=n[s]}return e}function i0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ov(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ef(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}var J0={clone:Or,merge:Zn},av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=av,this.fragmentShader=lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new T().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jc=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Wt=class extends Fi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=ph,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Kc=class extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qc=class extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Va=class extends Sn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function bo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ks=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},eh=class extends Ks{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hd,endingEnd:Hd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wd:r=e,a=2*t-n;break;case Xd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wd:o=e,c=2*n-t;break;case Xd:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,h=this._weightNext,_=(n-t)/(s-t),y=_*_,g=y*_,m=-u*g+2*u*y-u*_,b=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*_+1,L=(-1-h)*g+(1.5+h)*y+.5*_,A=h*g-h*y;for(let I=0;I!==a;++I)r[I]=m*o[d+I]+b*o[l+I]+L*o[c+I]+A*o[f+I];return r}},th=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(s-t),f=1-d;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*d;return r}},nh=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ih=class extends Ks{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let _=(n-t)/(s-t),y=1-_;for(let g=0;g!==a;++g)r[g]=o[l+g]*y+o[c+g]*_;return r}let u=a*2,h=e-1;for(let _=0;_!==a;++_){let y=o[l+_],g=o[c+_],m=h*u+_*2,b=f[m],L=f[m+1],A=e*u+_*2,I=d[A],P=d[A+1],x=hv(n,t,b,I,s);r[_]=$0(x,y,L,P,g)}return r}};function $0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function cv(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function hv(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=$0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=cv(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var _i=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Mc(e.settings)&&(n.settings={inTangents:bo(e.settings.inTangents,Array),outTangents:bo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ih(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Aa:t=this.InterpolantFactoryMethodDiscrete;break;case Uc:t=this.InterpolantFactoryMethodLinear;break;case wc:t=this.InterpolantFactoryMethodSmooth;break;case Gd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return lt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Uc;case this.InterpolantFactoryMethodSmooth:return wc;case this.InterpolantFactoryMethodBezier:return Gd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Mc(this.settings)&&(s0(this.settings.inTangents,e),s0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Mc(this.settings)&&(r0(this.settings.inTangents,e),r0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ft("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ft("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&xx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ft("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,u=f-n,h=f+n;for(let _=0;_!==n;++_){let y=t[f+_];if(y!==t[u+_]||y!==t[h+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let h=0;h!==n;++h)t[u+h]=t[f+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Mc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function s0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function r0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Uc;var Qs=class extends _i{constructor(e,t,n){super(e,t,n)}};Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Aa;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}};sh.prototype.ValueTypeName="color";var rh=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}};rh.prototype.ValueTypeName="number";var oh=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ga=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new oh(this.times,this.values,this.getValueSize(),e)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var er=class extends _i{constructor(e,t,n){super(e,t,n)}};er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Aa;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}};ah.prototype.ValueTypeName="vector";var Tc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(o0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!o0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function o0(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var lh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=l.length;f<u;f+=2){let h=l[f],_=l[f+1];if(h.global&&(h.lastIndex=0),h.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},j0=new lh,Oo=class{constructor(e){this.manager=e!==void 0?e:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var wo=new WeakMap,ch=class extends Oo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Tc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=wo.get(o);f===void 0&&(f=[],wo.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=Po("img");function c(){d(),t&&t(this);let f=wo.get(this)||[];for(let u=0;u<f.length;u++){let h=f[u];h.onLoad&&h.onLoad(this)}wo.delete(this),r.manager.itemEnd(e)}function l(f){d(),s&&s(f),Tc.remove(`image:${e}`);let u=wo.get(this)||[];for(let h=0;h<u.length;h++){let _=u[h];_.onError&&_.onError(f)}wo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Tc.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Ha=class extends Oo{constructor(e){super(e)}load(e,t,n,s){let r=new Bn,o=new ch(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Wa=class extends Yn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Vd=new Dt,a0=new T,l0=new T,hh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;a0.setFromMatrixPosition(e.matrixWorld),t.position.copy(a0),l0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(l0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Vd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ro||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Sc=new T,bc=new yt,Ji=new T,Xa=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sc,bc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,bc,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Sc,bc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,bc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xs=new T,c0=new ke,h0=new ke,qn=class extends Xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z),Xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z)}getViewSize(e,t){return this.getViewBounds(e,c0,h0),t.subVectors(h0,c0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Yd=class extends hh{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}},qa=class extends Wa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},uh=class extends Xa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ya=class extends Wa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ao=-90,To=1,Bo=class extends Yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qn(Ao,To,e,t);s.layers=this.layers,this.add(s);let r=new qn(Ao,To,e,t);r.layers=this.layers,this.add(r);let o=new qn(Ao,To,e,t);o.layers=this.layers,this.add(o);let a=new qn(Ao,To,e,t);a.layers=this.layers,this.add(a);let c=new qn(Ao,To,e,t);c.layers=this.layers,this.add(c);let l=new qn(Ao,To,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},dh=class extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Cf="\\[\\]\\.:\\/",uv=new RegExp("["+Cf+"]","g"),Rf="[^"+Cf+"]",dv="[^"+Cf.replace("\\.","")+"]",fv=/((?:WC+[\/:])*)/.source.replace("WC",Rf),pv=/(WCOD+)?/.source.replace("WCOD",dv),mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rf),gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rf),_v=new RegExp("^"+fv+pv+mv+gv+"$"),xv=["material","materials","bones","map"],Zd=class{constructor(e,t,n){let s=n||dn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uv,"")}static parseTrackName(e){let t=_v.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dn.Composite=Zd;dn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dn.prototype.GetterByBindingType=[dn.prototype._getValue_direct,dn.prototype._getValue_array,dn.prototype._getValue_arrayElement,dn.prototype._getValue_toArray];dn.prototype.SetterByBindingTypeAndVersioning=[[dn.prototype._setValue_direct,dn.prototype._setValue_direct_setNeedsUpdate,dn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dn.prototype._setValue_array,dn.prototype._setValue_array_setNeedsUpdate,dn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dn.prototype._setValue_arrayElement,dn.prototype._setValue_arrayElement_setNeedsUpdate,dn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dn.prototype._setValue_fromArray,dn.prototype._setValue_fromArray_setNeedsUpdate,dn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O1=new Float32Array(1);var Uf=class Uf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Uf.prototype.isMatrix2=!0;var Jd=Uf;function Pf(i,e,t,n){let s=vv(n);switch(t){case pf:return i*e;case gf:return i*e/s.components*s.byteLength;case Mh:return i*e/s.components*s.byteLength;case nr:return i*e*2/s.components*s.byteLength;case Sh:return i*e*2/s.components*s.byteLength;case mf:return i*e*3/s.components*s.byteLength;case ki:return i*e*4/s.components*s.byteLength;case bh:return i*e*4/s.components*s.byteLength;case $a:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ah:case Eh:return Math.max(i,16)*Math.max(e,8)/4;case wh:case Th:return Math.max(i,8)*Math.max(e,8)/2;case Ch:case Rh:case Ih:case Lh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ph:case el:case Dh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zh:case Jh:case $h:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jh:case Kh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tl:case Qh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vv(i){switch(i){case ri:case hf:return{byteLength:1,components:1};case Go:case uf:case zi:return{byteLength:2,components:1};case vh:case yh:return{byteLength:2,components:4};case Oi:case xh:case Bi:return{byteLength:4,components:1};case df:case ff:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function vg(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mv(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let d=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,d);else{f.sort((h,_)=>h.start-_.start);let u=0;for(let h=1;h<f.length;h++){let _=f[u],y=f[h];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,f[u]=y)}f.length=u+1;for(let h=0,_=f.length;h<_;h++){let y=f[h];i.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,My=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,by=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uy=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,MM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Et={alphahash_fragment:Sv,alphahash_pars_fragment:bv,alphamap_fragment:wv,alphamap_pars_fragment:Av,alphatest_fragment:Tv,alphatest_pars_fragment:Ev,aomap_fragment:Cv,aomap_pars_fragment:Rv,batching_pars_vertex:Pv,batching_vertex:Iv,begin_vertex:Lv,beginnormal_vertex:Dv,bsdfs:Nv,iridescence_fragment:Uv,bumpmap_pars_fragment:Fv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:Bv,clipping_planes_pars_vertex:zv,clipping_planes_vertex:kv,color_fragment:Vv,color_pars_fragment:Gv,color_pars_vertex:Hv,color_vertex:Wv,common:Xv,defaultnormal_vertex:qv,displacementmap_pars_vertex:Yv,displacementmap_vertex:Zv,emissivemap_fragment:Jv,emissivemap_pars_fragment:$v,colorspace_fragment:jv,colorspace_pars_fragment:Kv,envmap_fragment:Qv,envmap_common_pars_fragment:ey,envmap_pars_fragment:ty,envmap_pars_vertex:ny,envmap_physical_pars_fragment:fy,envmap_vertex:iy,fog_vertex:sy,fog_pars_vertex:ry,fog_fragment:oy,fog_pars_fragment:ay,gradientmap_pars_fragment:ly,lightmap_pars_fragment:cy,lights_lambert_fragment:hy,lights_lambert_pars_fragment:uy,lights_pars_begin:dy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:_y,lights_physical_fragment:xy,lights_physical_pars_fragment:vy,lights_fragment_begin:yy,lights_fragment_maps:My,lights_fragment_end:Sy,lightprobes_pars_fragment:by,logdepthbuf_fragment:wy,logdepthbuf_pars_fragment:Ay,logdepthbuf_pars_vertex:Ty,logdepthbuf_vertex:Ey,map_fragment:Cy,map_pars_fragment:Ry,map_particle_fragment:Py,map_particle_pars_fragment:Iy,metalnessmap_fragment:Ly,metalnessmap_pars_fragment:Dy,morphinstance_vertex:Ny,morphcolor_vertex:Uy,morphnormal_vertex:Fy,morphtarget_pars_vertex:Oy,morphtarget_vertex:By,normal_fragment_begin:zy,normal_fragment_maps:ky,normal_pars_fragment:Vy,normal_pars_vertex:Gy,normal_vertex:Hy,normalmap_pars_fragment:Wy,clearcoat_normal_fragment_begin:Xy,clearcoat_normal_fragment_maps:qy,clearcoat_pars_fragment:Yy,iridescence_pars_fragment:Zy,opaque_fragment:Jy,packing:$y,premultiplied_alpha_fragment:jy,project_vertex:Ky,dithering_fragment:Qy,dithering_pars_fragment:eM,roughnessmap_fragment:tM,roughnessmap_pars_fragment:nM,shadowmap_pars_fragment:iM,shadowmap_pars_vertex:sM,shadowmap_vertex:rM,shadowmask_pars_fragment:oM,skinbase_vertex:aM,skinning_pars_vertex:lM,skinning_vertex:cM,skinnormal_vertex:hM,specularmap_fragment:uM,specularmap_pars_fragment:dM,tonemapping_fragment:fM,tonemapping_pars_fragment:pM,transmission_fragment:mM,transmission_pars_fragment:gM,uv_pars_fragment:_M,uv_pars_vertex:xM,uv_vertex:vM,worldpos_vertex:yM,background_vert:MM,background_frag:SM,backgroundCube_vert:bM,backgroundCube_frag:wM,cube_vert:AM,cube_frag:TM,depth_vert:EM,depth_frag:CM,distance_vert:RM,distance_frag:PM,equirect_vert:IM,equirect_frag:LM,linedashed_vert:DM,linedashed_frag:NM,meshbasic_vert:UM,meshbasic_frag:FM,meshlambert_vert:OM,meshlambert_frag:BM,meshmatcap_vert:zM,meshmatcap_frag:kM,meshnormal_vert:VM,meshnormal_frag:GM,meshphong_vert:HM,meshphong_frag:WM,meshphysical_vert:XM,meshphysical_frag:qM,meshtoon_vert:YM,meshtoon_frag:ZM,points_vert:JM,points_frag:$M,shadow_vert:jM,shadow_frag:KM,sprite_vert:QM,sprite_frag:eS},ze={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ts={basic:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Zn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Zn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Be(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Zn([ze.points,ze.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Zn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Zn([ze.common,ze.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Zn([ze.sprite,ze.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Zn([ze.common,ze.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Zn([ze.lights,ze.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};ts.physical={uniforms:Zn([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var nu={r:0,b:0,g:0},tS=new Dt,yg=new pt;yg.set(-1,0,0,0,1,0,0,0,1);function nS(i,e,t,n,s,r){let o=new Be(0),a=s===!0?0:1,c,l,d=null,f=0,u=null;function h(b){let L=b.isScene===!0?b.background:null;if(L&&L.isTexture){let A=b.backgroundBlurriness>0;L=e.get(L,A)}return L}function _(b){let L=!1,A=h(b);A===null?g(o,a):A&&A.isColor&&(g(A,1),L=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(b,L){let A=h(L);A&&A.isCubeTexture?(l===void 0&&(l=new st(new ei(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Or(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(I,P,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=A,l.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tS.makeRotationFromEuler(L.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yg),l.material.toneMapped=zt.getTransfer(A.colorSpace)!==Kt,(d!==A||f!==A.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=A,f=A.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new st(new Ir(2,2),new cn({name:"BackgroundMaterial",uniforms:Or(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=zt.getTransfer(A.colorSpace)!==Kt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,L){b.getRGB(nu,Ef(i)),t.buffers.color.setClear(nu.r,nu.g,nu.b,L,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,L=1){o.set(b),a=L,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:_,addToRenderList:y,dispose:m}}function iS(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(z,k,Q,F,$){let te=!1,V=f(z,F,Q,k);r!==V&&(r=V,l(r.object)),te=h(z,F,Q,$),te&&_(z,F,Q,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,A(z,k,Q,F),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(z){return i.bindVertexArray(z)}function d(z){return i.deleteVertexArray(z)}function f(z,k,Q,F){let $=F.wireframe===!0,te=n[k.id];te===void 0&&(te={},n[k.id]=te);let V=z.isInstancedMesh===!0?z.id:0,K=te[V];K===void 0&&(K={},te[V]=K);let j=K[Q.id];j===void 0&&(j={},K[Q.id]=j);let le=j[$];return le===void 0&&(le=u(c()),j[$]=le),le}function u(z){let k=[],Q=[],F=[];for(let $=0;$<t;$++)k[$]=0,Q[$]=0,F[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:F,object:z,attributes:{},index:null}}function h(z,k,Q,F){let $=r.attributes,te=k.attributes,V=0,K=Q.getAttributes();for(let j in K)if(K[j].location>=0){let ue=$[j],Ge=te[j];if(Ge===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(Ge=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(Ge=z.instanceColor)),ue===void 0||ue.attribute!==Ge||Ge&&ue.data!==Ge.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function _(z,k,Q,F){let $={},te=k.attributes,V=0,K=Q.getAttributes();for(let j in K)if(K[j].location>=0){let ue=te[j];ue===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(ue=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(ue=z.instanceColor));let Ge={};Ge.attribute=ue,ue&&ue.data&&(Ge.data=ue.data),$[j]=Ge,V++}r.attributes=$,r.attributesNum=V,r.index=F}function y(){let z=r.newAttributes;for(let k=0,Q=z.length;k<Q;k++)z[k]=0}function g(z){m(z,0)}function m(z,k){let Q=r.newAttributes,F=r.enabledAttributes,$=r.attributeDivisors;Q[z]=1,F[z]===0&&(i.enableVertexAttribArray(z),F[z]=1),$[z]!==k&&(i.vertexAttribDivisor(z,k),$[z]=k)}function b(){let z=r.newAttributes,k=r.enabledAttributes;for(let Q=0,F=k.length;Q<F;Q++)k[Q]!==z[Q]&&(i.disableVertexAttribArray(Q),k[Q]=0)}function L(z,k,Q,F,$,te,V){V===!0?i.vertexAttribIPointer(z,k,Q,$,te):i.vertexAttribPointer(z,k,Q,F,$,te)}function A(z,k,Q,F){y();let $=F.attributes,te=Q.getAttributes(),V=k.defaultAttributeValues;for(let K in te){let j=te[K];if(j.location>=0){let le=$[K];if(le===void 0&&(K==="instanceMatrix"&&z.instanceMatrix&&(le=z.instanceMatrix),K==="instanceColor"&&z.instanceColor&&(le=z.instanceColor)),le!==void 0){let ue=le.normalized,Ge=le.itemSize,ct=e.get(le);if(ct===void 0)continue;let Y=ct.buffer,pe=ct.type,Me=ct.bytesPerElement,He=pe===i.INT||pe===i.UNSIGNED_INT||le.gpuType===xh;if(le.isInterleavedBufferAttribute){let de=le.data,Le=de.isInterleavedBuffer===!0?de.stride:de.itemSize,Mt=le.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let _e=0;_e<j.locationSize;_e++)m(j.location+_e,de.meshPerAttribute);z.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<j.locationSize;_e++)g(j.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let _e=0;_e<j.locationSize;_e++)L(j.location+_e,Ge/j.locationSize,pe,ue,Le*Me,(Mt+Ge/j.locationSize*_e)*Me,He)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<j.locationSize;de++)m(j.location+de,le.meshPerAttribute);z.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<j.locationSize;de++)g(j.location+de);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let de=0;de<j.locationSize;de++)L(j.location+de,Ge/j.locationSize,pe,ue,Ge*Me,Ge/j.locationSize*de*Me,He)}}else if(V!==void 0){let ue=V[K];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(j.location,ue);break;case 3:i.vertexAttrib3fv(j.location,ue);break;case 4:i.vertexAttrib4fv(j.location,ue);break;default:i.vertexAttrib1fv(j.location,ue)}}}}b()}function I(){O();for(let z in n){let k=n[z];for(let Q in k){let F=k[Q];for(let $ in F){let te=F[$];for(let V in te)d(te[V].object),delete te[V];delete F[$]}}delete n[z]}}function P(z){if(n[z.id]===void 0)return;let k=n[z.id];for(let Q in k){let F=k[Q];for(let $ in F){let te=F[$];for(let V in te)d(te[V].object),delete te[V];delete F[$]}}delete n[z.id]}function x(z){for(let k in n){let Q=n[k];for(let F in Q){let $=Q[F];if($[z.id]===void 0)continue;let te=$[z.id];for(let V in te)d(te[V].object),delete te[V];delete $[z.id]}}}function C(z){for(let k in n){let Q=n[k],F=z.isInstancedMesh===!0?z.id:0,$=Q[F];if($!==void 0){for(let te in $){let V=$[te];for(let K in V)d(V[K].object),delete V[K];delete $[te]}delete Q[F],Object.keys(Q).length===0&&delete n[k]}}}function O(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:N,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:C,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:g,disableUnusedAttributes:b}}function sS(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let h=0;h<d;h++)u+=l[h];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rS(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==ki&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let C=x===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==ri&&x!==Bi&&!C&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(lt("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:A,maxSamples:I,samples:P}}function oS(i){let e=this,t=null,n=0,s=!1,r=!1,o=new pi,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let h=f.length!==0||u||n!==0||s;return s=u,n=f.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){let _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||_===null||_.length===0||r&&!g)r?d(null):l();else{let b=r?0:n,L=b*4,A=m.clippingState||null;c.value=A,A=d(_,u,L,h);for(let I=0;I!==L;++I)A[I]=t[I];m.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,h,_){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=c.value,_!==!0||g===null){let m=h+y*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let L=0,A=h;L!==y;++L,A+=4)o.copy(f[L]).applyMatrix4(b,a),o.normal.toArray(g,A),g[A+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var sl=class extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ei(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ni,blending:Dr});r.uniforms.tEquirect.value=t;let o=new st(s,r),a=t.minFilter;return t.minFilter===vs&&(t.minFilter=Qn),new Bo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},K0=256,aS=3,lS=20,Mg=256,Sg=16,cS=3,hS=new T,uS=new Be,su=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bo(1,10,null),this._boxMesh=new st(new ei(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=hS}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,h=c.autoClearDepth,_=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(uS));let g=new Bo(n,s,d);return g.position.copy(a),g.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=h,c.autoClearStencil=_,e.background=y,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(K0,bf(e))}_fromTexture(e,t){e.mapping===Ur||e.mapping===Vo?this._setSize(e.image.length===0?K0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Q0(e,!1,!1),n=Math.log2(e)-aS;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Q0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ur||e.mapping===Vo?(this._cubemapMaterial===null&&(this._cubemapMaterial=tg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=eg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=dS(),this._integrationMaterial=fS());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Sg);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-cS)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Mg*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pS());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Q0(i,e,t){return new sl(i,{minFilter:vs,generateMipmaps:e,type:zi,colorSpace:Ta,depthBuffer:t})}function rl(i,e,t){return new cn({name:i,uniforms:e,vertexShader:Et.cube_vert,fragmentShader:t,side:ni,blending:Dr,depthTest:!1,depthWrite:!1})}function dS(){return rl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Mg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fS(){return rl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Sg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pS(){return rl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lS}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function eg(){return rl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function tg(){return rl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mS(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,h=!1){return u==null?null:h?o(u):r(u)}function r(u){if(u&&u.isTexture){let h=u.mapping;if(h===mh||h===gh)if(e.has(u)){let _=e.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let y=new sl(_.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",l),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let h=u.mapping,_=h===mh||h===gh,y=h===Ur||h===Vo;if(_||y){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new su(i)),g=_?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return _&&b&&b.height>0||y&&b&&c(b)?(n===null&&(n=new su(i)),g=_?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function a(u,h){return h===mh?u.mapping=Ur:h===gh&&(u.mapping=Vo),u}function c(u){let h=0,_=6;for(let y=0;y<_;y++)u[y]!==void 0&&h++;return h===_}function l(u){let h=u.target;h.removeEventListener("dispose",l);let _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function d(u){let h=u.target;h.removeEventListener("dispose",d);let _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function gS(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ya("WebGLRenderer: "+n+" extension not supported."),s}}}function _S(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(let g in _.attributes)e.remove(_.attributes[g]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);let y=r.get(_);y&&(e.remove(y),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function d(_){let y=_.attributes;for(let g in y)e.update(y[g],i.ARRAY_BUFFER)}function f(_){let y=_.index,g=_.attributes.position,m=0;if(g===void 0)return;let b=y!==null?y.array.length:g.array.length/3-1,L=g.count>=65535?Da:La,A=new L(Math.ceil(b/3)*6,1),I=A.array;if(y!==null){let x=y.array;m=y.version;for(let C=0,O=0;C<b;C+=3){let N=x[C+0],z=x[C+1],k=x[C+2];I[O++]=N,I[O++]=z,I[O++]=z,I[O++]=k,I[O++]=k,I[O++]=N}}else{m=g.version;for(let x=0,C=0;x<b;x+=3){let O=x+0,N=x+1,z=x+2;I[C++]=O,I[C++]=N,I[C++]=N,I[C++]=z,I[C++]=z,I[C++]=O}}A.version=m;let P=r.get(_);P&&e.remove(P),r.set(_,A)}function u(_){let y=r.get(_);if(y){let g=_.index;g!==null&&y.version<g.version&&f(_)}else f(_);return r.get(_)}function h(){for(let _ in s){let y=s[_].deref();y!==void 0&&c(y)}}return{get:l,update:d,getWireframeAttribute:u,dispose:h}}function xS(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*o),t.update(u,n,1)}function l(f,u,h){h!==0&&(i.drawElementsInstanced(n,u,r,f*o,h),t.update(u,n,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,h);let y=0;for(let g=0;g<h;g++)y+=u[g];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function vS(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yS(i,e,t){let n=new WeakMap,s=new vn;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,u=n.get(a);if(u===void 0||u.count!==f){let O=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let h=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],L=0;h===!0&&(L=1),_===!0&&(L=2),y===!0&&(L=3);let A=a.attributes.position.count*L,I=1;A>e.maxTextureSize&&(I=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let P=new Float32Array(A*I*4*f),x=new Ra(P,A,I,f);x.type=Bi,x.needsUpdate=!0;let C=L*4;for(let N=0;N<f;N++){let z=g[N],k=m[N],Q=b[N],F=A*I*4*N;for(let $=0;$<z.count;$++){let te=$*C;h===!0&&(s.fromBufferAttribute(z,$),P[F+te+0]=s.x,P[F+te+1]=s.y,P[F+te+2]=s.z,P[F+te+3]=0),_===!0&&(s.fromBufferAttribute(k,$),P[F+te+4]=s.x,P[F+te+5]=s.y,P[F+te+6]=s.z,P[F+te+7]=0),y===!0&&(s.fromBufferAttribute(Q,$),P[F+te+8]=s.x,P[F+te+9]=s.y,P[F+te+10]=s.z,P[F+te+11]=Q.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new ke(A,I)},n.set(a,u),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let h=0;for(let y=0;y<l.length;y++)h+=l[y];let _=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function MS(i,e,t,n,s){let r=new WeakMap;function o(l){let d=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return u}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var SS={[tf]:"LINEAR_TONE_MAPPING",[nf]:"REINHARD_TONE_MAPPING",[sf]:"CINEON_TONE_MAPPING",[rf]:"ACES_FILMIC_TONE_MAPPING",[af]:"AGX_TONE_MAPPING",[lf]:"NEUTRAL_TONE_MAPPING",[of]:"CUSTOM_TONE_MAPPING"};function bS(i,e,t,n,s,r){let o=new mi(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,d=new It;d.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new nt([0,2,0,0,2,0],2));let f=new jc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new st(d,f),h=new uh(-1,1,1,-1,0,1),_=null,y=null,g=!1,m,b=null,L=[],A=!1;this.setSize=function(I,P){o.setSize(I,P),a!==null&&a.setSize(I,P),c!==null&&c.setSize(I,P);for(let x=0;x<L.length;x++){let C=L[x];C.setSize&&C.setSize(I,P)}},this.setEffects=function(I){L=I,A=L.length>0&&L[0].isRenderPass===!0;let P=o.width,x=o.height;L.length>0&&a===null&&(a=new mi(P,x,{type:zi,depthBuffer:!1,stencilBuffer:!1}),c=new mi(P,x,{type:zi,depthBuffer:!1,stencilBuffer:!1}));let C=s===!0&&L.some(O=>O.needsDepthTexture===!0);C!==(o.depthTexture!==null)&&(C===!0&&l===null&&(l=new _s(P,x),r===!0&&(l.format=ys,l.type=Fr)),o.dispose(),o.depthTexture=C?l:null,o.resolveDepthBuffer=C,o.storeMultisampledDepthBuffer=C);for(let O=0;O<L.length;O++){let N=L[O];N.setSize&&N.setSize(P,x),C&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(l)}},this.begin=function(I,P){if(g||I.toneMapping===Qi&&L.length===0)return!1;if(b=P,P!==null){let x=P.width,C=P.height;(o.width!==x||o.height!==C)&&this.setSize(x,C)}return A===!1&&I.setRenderTarget(o),m=I.toneMapping,I.toneMapping=Qi,!0},this.hasRenderPass=function(){return A},this.end=function(I,P){I.toneMapping=m,g=!0;let x=o,C=a;for(let O=0;O<L.length;O++){let N=L[O];N.enabled!==!1&&(N.render(I,C,x,P),N.needsSwap!==!1&&(x=C,C=C===a?c:a))}if(_!==I.outputColorSpace||y!==I.toneMapping){_=I.outputColorSpace,y=I.toneMapping,f.defines={},zt.getTransfer(_)===Kt&&(f.defines.SRGB_TRANSFER="");let O=SS[y];O&&(f.defines[O]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,I.setRenderTarget(b),I.render(u,h),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}var bg=new Bn,wg=new _s(1,1),Ag=new Fa(1),Tg=new Ra,Eg=new Bc,Cg=new Ua,ng=[],ig=[],sg=new Float32Array(16),rg=new Float32Array(9),og=new Float32Array(4);function Wo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ng[s];if(r===void 0&&(r=new Float32Array(s),ng[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ou(i,e){let t=ig[e];t===void 0&&(t=new Int32Array(e),ig[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function AS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2fv(this.addr,e),Dn(t,e)}}function TS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ln(t,e))return;i.uniform3fv(this.addr,e),Dn(t,e)}}function ES(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4fv(this.addr,e),Dn(t,e)}}function CS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;og.set(n),i.uniformMatrix2fv(this.addr,!1,og),Dn(t,n)}}function RS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;rg.set(n),i.uniformMatrix3fv(this.addr,!1,rg),Dn(t,n)}}function PS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;sg.set(n),i.uniformMatrix4fv(this.addr,!1,sg),Dn(t,n)}}function IS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function LS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2iv(this.addr,e),Dn(t,e)}}function DS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3iv(this.addr,e),Dn(t,e)}}function NS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4iv(this.addr,e),Dn(t,e)}}function US(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function FS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2uiv(this.addr,e),Dn(t,e)}}function OS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3uiv(this.addr,e),Dn(t,e)}}function BS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4uiv(this.addr,e),Dn(t,e)}}function au(i){return i.version===0&&(i.compareFunction=vf,i.needsUpdate=!0),i}function zS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=au(wg):r=bg,t.setTexture2D(e||r,s)}function kS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Eg,s)}function VS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=au(Ag):r=Cg,t.setTextureCube(e||r,s)}function GS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tg,s)}function HS(i){switch(i){case 5126:return wS;case 35664:return AS;case 35665:return TS;case 35666:return ES;case 35674:return CS;case 35675:return RS;case 35676:return PS;case 5124:case 35670:return IS;case 35667:case 35671:return LS;case 35668:case 35672:return DS;case 35669:case 35673:return NS;case 5125:return US;case 36294:return FS;case 36295:return OS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return GS}}function WS(i,e){i.uniform1fv(this.addr,e)}function XS(i,e){let t=Wo(e,this.size,2);i.uniform2fv(this.addr,t)}function qS(i,e){let t=Wo(e,this.size,3);i.uniform3fv(this.addr,t)}function YS(i,e){let t=Wo(e,this.size,4);i.uniform4fv(this.addr,t)}function ZS(i,e){let t=Wo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function JS(i,e){let t=Wo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $S(i,e){let t=Wo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jS(i,e){i.uniform1iv(this.addr,e)}function KS(i,e){i.uniform2iv(this.addr,e)}function QS(i,e){i.uniform3iv(this.addr,e)}function eb(i,e){i.uniform4iv(this.addr,e)}function tb(i,e){i.uniform1uiv(this.addr,e)}function nb(i,e){i.uniform2uiv(this.addr,e)}function ib(i,e){i.uniform3uiv(this.addr,e)}function sb(i,e){i.uniform4uiv(this.addr,e)}function rb(i,e,t){let n=this.cache,s=e.length,r=ou(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=au(wg):o=bg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ob(i,e,t){let n=this.cache,s=e.length,r=ou(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Eg,r[o])}function ab(i,e,t){let n=this.cache,s=e.length,r=ou(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=au(Ag):o=Cg;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function lb(i,e,t){let n=this.cache,s=e.length,r=ou(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tg,r[o])}function cb(i){switch(i){case 5126:return WS;case 35664:return XS;case 35665:return qS;case 35666:return YS;case 35674:return ZS;case 35675:return JS;case 35676:return $S;case 5124:case 35670:return jS;case 35667:case 35671:return KS;case 35668:case 35672:return QS;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return lb}}var Bf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=HS(t.type)}},zf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cb(t.type)}},kf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ff=/(\w+)(\])?(\[|\.)?/g;function ag(i,e){i.seq.push(e),i.map[e.id]=e}function hb(i,e,t){let n=i.name,s=n.length;for(Ff.lastIndex=0;;){let r=Ff.exec(n),o=Ff.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ag(t,l===void 0?new Bf(a,i,e):new zf(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new kf(a),ag(t,f)),t=f}}}var Ho=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);hb(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function lg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ub=37297,db=0;function fb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var cg=new pt;function pb(i){zt._getMatrix(cg,zt.workingColorSpace,i);let e=`mat3( ${cg.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fb(i.getShaderSource(e),a)}else return r}function mb(i,e){let t=pb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var gb={[tf]:"Linear",[nf]:"Reinhard",[sf]:"Cineon",[rf]:"ACESFilmic",[af]:"AgX",[lf]:"Neutral",[of]:"Custom"};function _b(i,e){let t=gb[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var iu=new T;function xb(){zt.getLuminanceCoefficients(iu);let i=iu.x.toFixed(4),e=iu.y.toFixed(4),t=iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function yb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function il(i){return i!==""}function ug(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function dg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vf(i){return i.replace(Sb,bb)}function bb(i,e){let t=Et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Vf(t)}var wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(i){return i.replace(wb,Ab)}function Ab(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Tb={[Za]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function Eb(i){return Tb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Cb={[Vo]:"ENVMAP_MODE_REFRACTION"};function Rb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Cb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pb={[ph]:"ENVMAP_BLENDING_MULTIPLY",[L0]:"ENVMAP_BLENDING_MIX",[D0]:"ENVMAP_BLENDING_ADD"};function Ib(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Pb[i.combine]||"ENVMAP_BLENDING_NONE"}function Lb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Eb(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Rb(t),f=Ib(t),u=vb(t),h=yb(r),_=s.createProgram(),y,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(il).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(il).join(`
`),g.length>0&&(g+=`
`)):(y=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),g=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?Et.tonemapping_pars_fragment:"",t.toneMapping!==Qi?_b("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,mb("linearToOutputTexel",t.outputColorSpace),xb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(il).join(`
`)),o=Vf(o),o=ug(o,t),o=dg(o,t),a=Vf(a),a=ug(a,t),a=dg(a,t),o=fg(o),a=fg(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=m+y+o,L=m+g+a,A=lg(s,s.VERTEX_SHADER,b),I=lg(s,s.FRAGMENT_SHADER,L);s.attachShader(_,A),s.attachShader(_,I),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(N){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(A)||"",Q=s.getShaderInfoLog(I)||"",F=z.trim(),$=k.trim(),te=Q.trim(),V=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,I);else{let j=hg(s,A,"vertex"),le=hg(s,I,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+j+`
`+le)}else F!==""?lt("WebGLProgram: Program Info Log:",F):($===""||te==="")&&(K=!1);K&&(N.diagnostics={runnable:V,programLog:F,vertexShader:{log:$,prefix:y},fragmentShader:{log:te,prefix:g}})}s.deleteShader(A),s.deleteShader(I),x=new Ho(s,_),C=Mb(s,_)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(_,ub)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=db++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=I,this}var Db=0,Gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hf(e),t.set(e,n)),n}},Hf=class{constructor(e){this.id=Db++,this.code=e,this.usedTimes=0}};function Nb(i){return i===nr||i===el||i===tl}function Ub(i,e,t,n,s,r){let o=new Pa,a=new Gf,c=new Set,l=[],d=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,C,O,N,z,k){let Q=N.fog,F=z.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||$,te),K=u[x.type],j=n.precision;x.precision!==null&&(j=n.getMaxPrecision(x.precision),j!==x.precision&&lt("WebGLProgram.getParameters:",x.precision,"not supported, using",j,"instead."));let le=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ue=le!==void 0?le.length:0,Ge=0;F.morphAttributes.position!==void 0&&(Ge=1),F.morphAttributes.normal!==void 0&&(Ge=2),F.morphAttributes.color!==void 0&&(Ge=3);let ct,Y,pe,Me;if(K){let Fe=ts[K];ct=Fe.vertexShader,Y=Fe.fragmentShader}else{ct=x.vertexShader,Y=x.fragmentShader;let Fe=a.getVertexShaderStage(x),Yt=a.getFragmentShaderStage(x);a.update(x,Fe,Yt),pe=Fe.id,Me=Yt.id}let He=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Le=z.isInstancedMesh===!0,Mt=z.isBatchedMesh===!0,_e=!!x.map,at=!!x.matcap,_t=!!V,Ue=_t&&V.isPMREMTexture===!0,Vt=!!x.aoMap,Jt=!!x.lightMap,ut=!!x.bumpMap&&x.wireframe===!1,Lt=!!x.normalMap,Tn=!!x.displacementMap,qt=!!x.emissiveMap,Nt=!!x.metalnessMap,En=!!x.roughnessMap,wn=x.anisotropy>0,G=x.clearcoat>0,Jn=x.diffuseRoughness>0,jt=x.dispersion>0,nn=x.retroreflectivity>0,Ne=x.iridescence>0,pn=x.sheen>0,ot=x.transmission>0,ht=wn&&!!x.anisotropyMap,E=G&&!!x.clearcoatMap,S=G&&!!x.clearcoatNormalMap,W=G&&!!x.clearcoatRoughnessMap,fe=Jn&&!!x.diffuseRoughnessMap,ce=Ne&&!!x.iridescenceMap,ye=Ne&&!!x.iridescenceThicknessMap,De=pn&&!!x.sheenColorMap,re=pn&&!!x.sheenRoughnessMap,oe=!!x.specularMap,Ce=!!x.specularColorMap,U=!!x.specularIntensityMap,ae=ot&&!!x.transmissionMap,ne=ot&&!!x.thicknessMap,Ee=!!x.gradientMap,be=!!x.alphaMap,Re=x.alphaTest>0,Ke=!!x.alphaHash,St=!!x.extensions,ve=Qi;x.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(ve=i.toneMapping);let it=Ue?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,vt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:ct,fragmentShader:Y,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:j,batching:Mt,batchingColor:Mt&&z._colorsTexture!==null,instancing:Le,instancingColor:Le&&z.instanceColor!==null,instancingMorph:Le&&z.morphTexture!==null,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:_e,matcap:at,envMap:_t,envMapMode:_t&&V.mapping,envMapPMREM:Ue,envMapMaxLod:Ue?it.length-1:null,envMapSize:Ue?it[0].width:null,aoMap:Vt,lightMap:Jt,bumpMap:ut,normalMap:Lt,displacementMap:Tn,emissiveMap:qt,normalMapObjectSpace:Lt&&x.normalMapType===F0,normalMapTangentSpace:Lt&&x.normalMapType===eu,packedNormalMap:Lt&&x.normalMapType===eu&&Nb(x.normalMap.format),metalnessMap:Nt,roughnessMap:En,anisotropy:wn,anisotropyMap:ht,clearcoat:G,clearcoatMap:E,clearcoatNormalMap:S,clearcoatRoughnessMap:W,diffuseRoughness:Jn,diffuseRoughnessMap:fe,dispersion:jt,retroreflection:nn,iridescence:Ne,iridescenceMap:ce,iridescenceThicknessMap:ye,sheen:pn,sheenColorMap:De,sheenRoughnessMap:re,specularMap:oe,specularColorMap:Ce,specularIntensityMap:U,transmission:ot,transmissionMap:ae,thicknessMap:ne,gradientMap:Ee,opaque:x.transparent===!1&&x.blending===ko&&x.alphaToCoverage===!1,alphaMap:be,alphaTest:Re,alphaHash:Ke,combine:x.combine,mapUv:_e&&h(x.map.channel),aoMapUv:Vt&&h(x.aoMap.channel),lightMapUv:Jt&&h(x.lightMap.channel),bumpMapUv:ut&&h(x.bumpMap.channel),normalMapUv:Lt&&h(x.normalMap.channel),displacementMapUv:Tn&&h(x.displacementMap.channel),emissiveMapUv:qt&&h(x.emissiveMap.channel),metalnessMapUv:Nt&&h(x.metalnessMap.channel),roughnessMapUv:En&&h(x.roughnessMap.channel),anisotropyMapUv:ht&&h(x.anisotropyMap.channel),clearcoatMapUv:E&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:re&&h(x.sheenRoughnessMap.channel),specularMapUv:oe&&h(x.specularMap.channel),specularColorMapUv:Ce&&h(x.specularColorMap.channel),specularIntensityMapUv:U&&h(x.specularIntensityMap.channel),transmissionMapUv:ae&&h(x.transmissionMap.channel),thicknessMapUv:ne&&h(x.thicknessMap.channel),alphaMapUv:be&&h(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Lt||wn),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(_e||be),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Lt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ge,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:k.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:_e&&x.map.isVideoTexture===!0&&zt.getTransfer(x.map.colorSpace)===Kt,decodeVideoTextureEmissive:qt&&x.emissiveMap.isVideoTexture===!0&&zt.getTransfer(x.emissiveMap.colorSpace)===Kt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===An,flipSided:x.side===ni,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function y(x){let C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(let O in x.defines)C.push(O),C.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(g(C,x),m(C,x),C.push(i.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function g(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapPMREM),x.push(C.envMapMaxLod),x.push(C.envMapSize),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.diffuseRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.numSunLights),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numSunLightShadows),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.numLightProbeGrids),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function m(x,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.diffuseRoughness&&o.enable(25),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){let C=u[x.type],O;if(C){let N=ts[C];O=J0.clone(N.uniforms)}else O=x.uniforms;return O}function L(x,C){let O=d.get(C);return O!==void 0?++O.usedTimes:(O=new Lb(i,C,x,s),l.push(O),d.set(C,O)),O}function A(x){if(--x.usedTimes===0){let C=l.indexOf(x);l[C]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function I(x){a.remove(x)}function P(){a.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:b,acquireProgram:L,releaseProgram:A,releaseShaderCache:I,programs:l,dispose:P}}function Fb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ob(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function mg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function a(u,h,_,y,g,m){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:h,material:_,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:m},i[e]=b):(b.id=u.id,b.object=u,b.geometry=h,b.material=_,b.materialVariant=o(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=g,b.group=m),e++,b}function c(u,h,_,y,g,m,b){b.reversedDepth===!0&&(g=-g);let L=a(u,h,_,y,g,m);_.transmission>0?n.push(L):_.transparent===!0?s.push(L):t.push(L)}function l(u,h,_,y,g,m){let b=a(u,h,_,y,g,m);_.transmission>0?n.unshift(b):_.transparent===!0?s.unshift(b):t.unshift(b)}function d(u,h){t.length>1&&t.sort(u||Ob),n.length>1&&n.sort(h||mg),s.length>1&&s.sort(h||mg)}function f(){for(let u=e,h=i.length;u<h;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:d}}function Bb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new gg,i.set(n,[o])):s>=r.length?(o=new gg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function zb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new Be};break;case"SpotLight":t={position:new T,direction:new T,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function kb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Vb=0;function Gb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hb(i){let e=new zb,t=kb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new Dt,o=new Dt;function a(l){let d=0,f=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let h=0,_=0,y=0,g=0,m=0,b=0,L=0,A=0,I=0,P=0,x=0,C=0,O=0,N=0;l.sort(Gb);for(let k=0,Q=l.length;k<Q;k++){let F=l[k],$=F.color,te=F.intensity,V=F.distance,K=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===nr?K=F.shadow.map.texture:K=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=$.r*te,f+=$.g*te,u+=$.b*te;else if(F.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(F.sh.coefficients[j],te);N++}else if(F.isSunLight){let j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let le=F.shadow,ue=t.get(F);ue.shadowIntensity=le.intensity,ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),n.sunShadow[_]=ue,n.sunShadowMap[_]=K;let Ge=le.getViewportCount();for(let ct=0;ct<Ge;ct++)n.sunShadowMatrix[y+ct]=le.getMatrix(ct),n.sunShadowCascade[y+ct]=le._cascadeData[ct];y+=Ge,_++}n.sun[h]=j,h++}else if(F.isDirectionalLight){let j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let le=F.shadow,ue=t.get(F);ue.shadowIntensity=le.intensity,ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,n.directionalShadow[g]=ue,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=F.shadow.matrix,I++}n.directional[g]=j,g++}else if(F.isSpotLight){let j=e.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy($).multiplyScalar(te),j.distance=V,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,n.spot[b]=j;let le=F.shadow;if(F.map&&(n.spotLightMap[C]=F.map,C++,le.updateMatrices(F),F.castShadow&&O++),n.spotLightMatrix[b]=le.matrix,F.castShadow){let ue=t.get(F);ue.shadowIntensity=le.intensity,ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,n.spotShadow[b]=ue,n.spotShadowMap[b]=K,x++}b++}else if(F.isRectAreaLight){let j=e.get(F);j.color.copy($).multiplyScalar(te),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),n.rectArea[L]=j,L++}else if(F.isPointLight){let j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){let le=F.shadow,ue=t.get(F);ue.shadowIntensity=le.intensity,ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,ue.shadowCameraNear=le.camera.near,ue.shadowCameraFar=le.camera.far,n.pointShadow[m]=ue,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=F.shadow.matrix,P++}n.point[m]=j,m++}else if(F.isHemisphereLight){let j=e.get(F);j.skyColor.copy(F.color).multiplyScalar(te),j.groundColor.copy(F.groundColor).multiplyScalar(te),n.hemi[A]=j,A++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;let z=n.hash;(z.sunLength!==h||z.directionalLength!==g||z.pointLength!==m||z.spotLength!==b||z.rectAreaLength!==L||z.hemiLength!==A||z.numSunShadows!==_||z.numDirectionalShadows!==I||z.numPointShadows!==P||z.numSpotShadows!==x||z.numSpotMaps!==C||z.numLightProbes!==N)&&(n.sun.length=h,n.directional.length=g,n.spot.length=b,n.rectArea.length=L,n.point.length=m,n.hemi.length=A,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+C-O,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=N,z.sunLength=h,z.directionalLength=g,z.pointLength=m,z.spotLength=b,z.rectAreaLength=L,z.hemiLength=A,z.numSunShadows=_,z.numDirectionalShadows=I,z.numPointShadows=P,z.numSpotShadows=x,z.numSpotMaps=C,z.numLightProbes=N,n.version=Vb++)}function c(l,d){let f=0,u=0,h=0,_=0,y=0,g=0,m=d.matrixWorldInverse;for(let b=0,L=l.length;b<L;b++){let A=l[b];if(A.isSunLight){let I=n.sun[f];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(m),f++}else if(A.isDirectionalLight){let I=n.directional[u];I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),u++}else if(A.isSpotLight){let I=n.spot[_];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),_++}else if(A.isRectAreaLight){let I=n.rectArea[y];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),y++}else if(A.isPointLight){let I=n.point[h];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){let I=n.hemi[g];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function _g(i){let e=new Hb(i),t=[],n=[],s=[];function r(f){d.camera=f,t.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){n.push(f)}function c(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Wb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _g(i),e.set(s,[a])):r>=o.length?(a=new _g(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yb=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],Zb=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],xg=new Dt,nl=new T,Of=new T;function Jb(i,e,t){let n=new Js,s=new ke,r=new ke,o=new vn,a=new Kc,c=new Qc,l={},d=t.maxTextureSize,f={[tr]:ni,[ni]:tr,[An]:An},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Xb,fragmentShader:qb}),h=u.clone();h.defines.HORIZONTAL_PASS=1;let _=new It;_.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new st(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za;let m=this.type;this.render=function(P,x,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;this.type===f0&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Za);let O=i.getRenderTarget(),N=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Dr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let Q=m!==this.type;Q&&x.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach($=>$.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,$=P.length;F<$;F++){let te=P[F],V=te.shadow;if(V===void 0){lt("WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let K=V.getFrameExtents();s.multiply(K),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/K.x),s.x=r.x*K.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/K.y),s.y=r.y*K.y,V.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=j,V.map===null||Q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===zo){if(te.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new mi(s.x,s.y,{format:nr,type:zi,minFilter:Qn,magFilter:Qn,generateMipmaps:!1}),V.map.texture.name=te.name+".shadowMap",V.map.depthTexture=new _s(s.x,s.y,Bi),V.map.depthTexture.name=te.name+".shadowMapDepth",V.map.depthTexture.format=ms,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=On,V.map.depthTexture.magFilter=On}else te.isPointLight?(V.map=new sl(s.x),V.map.depthTexture=new Fa(s.x,Oi)):(V.map=new mi(s.x,s.y),V.map.depthTexture=new _s(s.x,s.y,Oi)),V.map.depthTexture.name=te.name+".shadowMap",V.map.depthTexture.format=ms,this.type===Za?(V.map.depthTexture.compareFunction=j?xf:_f,V.map.depthTexture.minFilter=Qn,V.map.depthTexture.magFilter=Qn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=On,V.map.depthTexture.magFilter=On);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let le=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();te.isPointLight!==!0&&V.updateMatrices(te,C);let ue=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:C.layers;for(let Ge=0;Ge<le;Ge++){let ct=V.getCamera(Ge);if(te.isPointLight){let Y=V.camera,pe=V.matrix,Me=te.distance||Y.far;Me!==Y.far&&(Y.far=Me,Y.updateProjectionMatrix()),nl.setFromMatrixPosition(te.matrixWorld),Y.position.copy(nl),Of.copy(Y.position),Of.add(Yb[Ge]),Y.up.copy(Zb[Ge]),Y.lookAt(Of),Y.updateMatrixWorld(),pe.makeTranslation(-nl.x,-nl.y,-nl.z),xg.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(xg,Y.coordinateSystem,Y.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Ge),i.clear();else{Ge===0&&(i.setRenderTarget(V.map),i.clear());let Y=V.getViewport(Ge);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),k.viewport(o)}n=V.getFrustum(Ge),A(x,C,ct,te,ue,this.type)}V.isPointLightShadow!==!0&&this.type===zo&&b(V,C),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(O,N,z)};function b(P,x){let C=e.update(y);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null?P.mapPass=new mi(s.x,s.y,{format:nr,type:zi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),u.uniforms.shadow_pass.value=P.map.depthTexture,u.uniforms.resolution.value.set(P.map.width,P.map.height),u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(x,null,C,u,y,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value.set(P.map.width,P.map.height),h.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(x,null,C,h,y,null)}function L(P,x,C,O){let N=null,z=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)N=z;else if(N=C.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let k=N.uuid,Q=x.uuid,F=l[k];F===void 0&&(F={},l[k]=F);let $=F[Q];$===void 0&&($=N.clone(),F[Q]=$,x.addEventListener("dispose",I)),N=$}if(N.visible=x.visible,N.wireframe=x.wireframe,O===zo?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:f[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,C.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let k=i.properties.get(N);k.light=C}return N}function A(P,x,C,O,N,z){if(P.visible===!1)return;if(P.layers.test(N)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&z===zo)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);let F=e.update(P),$=P.material;if(Array.isArray($)){let te=F.groups;for(let V=0,K=te.length;V<K;V++){let j=te[V],le=$[j.materialIndex];if(le&&le.visible){let ue=L(P,le,O,z);P.onBeforeShadow(i,P,x,C,F,ue,j),i.renderBufferDirect(C,null,F,ue,P,j),P.onAfterShadow(i,P,x,C,F,ue,j)}}}else if($.visible){let te=L(P,$,O,z);P.onBeforeShadow(i,P,x,C,F,te,null),i.renderBufferDirect(C,null,F,te,P,null),P.onAfterShadow(i,P,x,C,F,te,null)}}let Q=P.children;for(let F=0,$=Q.length;F<$;F++)A(Q[F],x,C,O,N,z)}function I(P){P.target.removeEventListener("dispose",I);for(let C in l){let O=l[C],N=P.target.uuid;N in O&&(O[N].dispose(),delete O[N])}}}function $b(i,e){function t(){let U=!1,ae=new vn,ne=null,Ee=new vn(0,0,0,0);return{setMask:function(be){ne!==be&&!U&&(i.colorMask(be,be,be,be),ne=be)},setLocked:function(be){U=be},setClear:function(be,Re,Ke,St,ve){ve===!0&&(be*=St,Re*=St,Ke*=St),ae.set(be,Re,Ke,St),Ee.equals(ae)===!1&&(i.clearColor(be,Re,Ke,St),Ee.copy(ae))},reset:function(){U=!1,ne=null,Ee.set(-1,0,0,0)}}}function n(){let U=!1,ae=!1,ne=null,Ee=null,be=null;return{setReversed:function(Re){if(ae!==Re){let Ke=e.get("EXT_clip_control");Re?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),ae=Re;let St=be;be=null,this.setClear(St)}},getReversed:function(){return ae},setTest:function(Re){Re?de(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(Re){ne!==Re&&!U&&(i.depthMask(Re),ne=Re)},setFunc:function(Re){if(ae&&(Re=q0[Re]),Ee!==Re){switch(Re){case Ec:i.depthFunc(i.NEVER);break;case Cc:i.depthFunc(i.ALWAYS);break;case Rc:i.depthFunc(i.LESS);break;case Co:i.depthFunc(i.LEQUAL);break;case Pc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Lc:i.depthFunc(i.GREATER);break;case Dc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=Re}},setLocked:function(Re){U=Re},setClear:function(Re){be!==Re&&(be=Re,ae&&(Re=1-Re),i.clearDepth(Re))},reset:function(){U=!1,ne=null,Ee=null,be=null,ae=!1}}}function s(){let U=!1,ae=null,ne=null,Ee=null,be=null,Re=null,Ke=null,St=null,ve=null;return{setTest:function(it){U||(it?de(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(it){ae!==it&&!U&&(i.stencilMask(it),ae=it)},setFunc:function(it,vt,Fe){(ne!==it||Ee!==vt||be!==Fe)&&(i.stencilFunc(it,vt,Fe),ne=it,Ee=vt,be=Fe)},setOp:function(it,vt,Fe){(Re!==it||Ke!==vt||St!==Fe)&&(i.stencilOp(it,vt,Fe),Re=it,Ke=vt,St=Fe)},setLocked:function(it){U=it},setClear:function(it){ve!==it&&(i.clearStencil(it),ve=it)},reset:function(){U=!1,ae=null,ne=null,Ee=null,be=null,Re=null,Ke=null,St=null,ve=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,d={},f={},u={},h=new WeakMap,_=[],y=null,g=!1,m=null,b=null,L=null,A=null,I=null,P=null,x=null,C=new Be(0,0,0),O=0,N=!1,z=null,k=null,Q=null,F=null,$=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,K=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=K>=2);let le=null,ue={},Ge=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),Y=new vn().fromArray(Ge),pe=new vn().fromArray(ct);function Me(U,ae,ne,Ee){let be=new Uint8Array(4),Re=i.createTexture();i.bindTexture(U,Re),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<ne;Ke++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ae+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return Re}let He={};He[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),He[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),He[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(Co),ut(!1),Lt($d),de(i.CULL_FACE),Vt(Dr);function de(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function Le(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Mt(U,ae){return u[U]!==ae?(i.bindFramebuffer(U,ae),u[U]=ae,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ae),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function _e(U,ae){let ne=_,Ee=!1;if(U){ne=h.get(ae),ne===void 0&&(ne=[],h.set(ae,ne));let be=U.textures;if(ne.length!==be.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,Ke=be.length;Re<Ke;Re++)ne[Re]=i.COLOR_ATTACHMENT0+Re;ne.length=be.length,Ee=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ne)}function at(U){return y!==U?(i.useProgram(U),y=U,!0):!1}let _t={[Nr]:i.FUNC_ADD,[m0]:i.FUNC_SUBTRACT,[g0]:i.FUNC_REVERSE_SUBTRACT};_t[_0]=i.MIN,_t[x0]=i.MAX;let Ue={[v0]:i.ZERO,[y0]:i.ONE,[M0]:i.SRC_COLOR,[Qd]:i.SRC_ALPHA,[E0]:i.SRC_ALPHA_SATURATE,[A0]:i.DST_COLOR,[b0]:i.DST_ALPHA,[S0]:i.ONE_MINUS_SRC_COLOR,[ef]:i.ONE_MINUS_SRC_ALPHA,[T0]:i.ONE_MINUS_DST_COLOR,[w0]:i.ONE_MINUS_DST_ALPHA,[C0]:i.CONSTANT_COLOR,[R0]:i.ONE_MINUS_CONSTANT_COLOR,[P0]:i.CONSTANT_ALPHA,[I0]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(U,ae,ne,Ee,be,Re,Ke,St,ve,it){if(U===Dr){g===!0&&(Le(i.BLEND),g=!1);return}if(g===!1&&(de(i.BLEND),g=!0),U!==p0){if(U!==m||it!==N){if((b!==Nr||I!==Nr)&&(i.blendEquation(i.FUNC_ADD),b=Nr,I=Nr),it)switch(U){case ko:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.ONE,i.ONE);break;case jd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",U);break}else switch(U){case ko:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jd:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kd:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",U);break}L=null,A=null,P=null,x=null,C.set(0,0,0),O=0,m=U,N=it}return}be=be||ae,Re=Re||ne,Ke=Ke||Ee,(ae!==b||be!==I)&&(i.blendEquationSeparate(_t[ae],_t[be]),b=ae,I=be),(ne!==L||Ee!==A||Re!==P||Ke!==x)&&(i.blendFuncSeparate(Ue[ne],Ue[Ee],Ue[Re],Ue[Ke]),L=ne,A=Ee,P=Re,x=Ke),(St.equals(C)===!1||ve!==O)&&(i.blendColor(St.r,St.g,St.b,ve),C.copy(St),O=ve),m=U,N=!1}function Jt(U,ae){U.side===An?Le(i.CULL_FACE):de(i.CULL_FACE);let ne=U.side===ni;ae&&(ne=!ne),ut(ne),U.blending===ko&&U.transparent===!1?Vt(Dr):Vt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Ee=U.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),qt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(U){z!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),z=U)}function Lt(U){U!==u0?(de(i.CULL_FACE),U!==k&&(U===$d?i.cullFace(i.BACK):U===d0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),k=U}function Tn(U){U!==Q&&(V&&i.lineWidth(U),Q=U)}function qt(U,ae,ne){U?(de(i.POLYGON_OFFSET_FILL),(F!==ae||$!==ne)&&(F=ae,$=ne,o.getReversed()&&(ae=-ae,ne=-ne),i.polygonOffset(ae,ne))):Le(i.POLYGON_OFFSET_FILL)}function Nt(U){U?de(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function En(U){U===void 0&&(U=i.TEXTURE0+te-1),le!==U&&(i.activeTexture(U),le=U)}function wn(U,ae,ne){ne===void 0&&(le===null?ne=i.TEXTURE0+te-1:ne=le);let Ee=ue[ne];Ee===void 0&&(Ee={type:void 0,texture:void 0},ue[ne]=Ee),(Ee.type!==U||Ee.texture!==ae)&&(le!==ne&&(i.activeTexture(ne),le=ne),i.bindTexture(U,ae||He[U]),Ee.type=U,Ee.texture=ae)}function G(){let U=ue[le];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Jn(){try{i.compressedTexImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function jt(){try{i.compressedTexImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function nn(){try{i.texSubImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function Ne(){try{i.texSubImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function pn(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function ht(){try{i.texStorage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function E(){try{i.texStorage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function S(){try{i.texImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function W(){try{i.texImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function fe(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function ce(U,ae){f[U]!==ae&&(i.pixelStorei(U,ae),f[U]=ae)}function ye(U){Y.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Y.copy(U))}function De(U){pe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function re(U,ae){let ne=l.get(ae);ne===void 0&&(ne=new WeakMap,l.set(ae,ne));let Ee=ne.get(U);Ee===void 0&&(Ee=i.getUniformBlockIndex(ae,U.name),i.uniformBlockBinding(ae,Ee,Ee),ne.set(U,Ee))}function oe(U,ae,ne){let be=l.get(ae).get(U);c[be]!==ne&&(i.bindBufferBase(i.UNIFORM_BUFFER,be,ne),c[be]=ne)}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},le=null,ue={},u={},c={},h=new WeakMap,_=[],y=null,g=!1,m=null,b=null,L=null,A=null,I=null,P=null,x=null,C=new Be(0,0,0),O=0,N=!1,z=null,k=null,Q=null,F=null,$=null,Y.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Le,bindFramebuffer:Mt,drawBuffers:_e,useProgram:at,setBlending:Vt,setMaterial:Jt,setFlipSided:ut,setCullFace:Lt,setLineWidth:Tn,setPolygonOffset:qt,setScissorTest:Nt,activeTexture:En,bindTexture:wn,unbindTexture:G,compressedTexImage2D:Jn,compressedTexImage3D:jt,texImage2D:S,texImage3D:W,pixelStorei:ce,getParameter:fe,updateUBOMapping:re,uniformBlockBinding:oe,texStorage2D:ht,texStorage3D:E,texSubImage2D:nn,texSubImage3D:Ne,compressedTexSubImage2D:pn,compressedTexSubImage3D:ot,scissor:ye,viewport:De,reset:Ce}}function jb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,d=new WeakMap,f=new Set,u,h=new WeakMap,_=new Set,y=new FinalizationRegistry(E=>_.delete(E)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,S){return g?new OffscreenCanvas(E,S):Po("canvas")}function b(E,S,W){let fe=1,ce=ht(E);if((ce.width>W||ce.height>W)&&(fe=W/Math.max(ce.width,ce.height)),fe<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ye=Math.floor(fe*ce.width),De=Math.floor(fe*ce.height);u===void 0&&(u=m(ye,De));let re=S?m(ye,De):u;return re.width=ye,re.height=De,re.getContext("2d").drawImage(E,0,0,ye,De),lt("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ye+"x"+De+")."),re}else return"data"in E&&lt("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),E;return E}function L(E){return E.generateMipmaps}function A(E){i.generateMipmap(E)}function I(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(E,S,W,fe,ce,ye=!1){if(E!==null){if(i[E]!==void 0)return i[E];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let De;fe&&(De=e.get("EXT_texture_norm16"),De||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=S;if(S===i.RED&&(W===i.FLOAT&&(re=i.R32F),W===i.HALF_FLOAT&&(re=i.R16F),W===i.UNSIGNED_BYTE&&(re=i.R8),W===i.UNSIGNED_SHORT&&De&&(re=De.R16_EXT),W===i.SHORT&&De&&(re=De.R16_SNORM_EXT)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.R8UI),W===i.UNSIGNED_SHORT&&(re=i.R16UI),W===i.UNSIGNED_INT&&(re=i.R32UI),W===i.BYTE&&(re=i.R8I),W===i.SHORT&&(re=i.R16I),W===i.INT&&(re=i.R32I)),S===i.RG&&(W===i.FLOAT&&(re=i.RG32F),W===i.HALF_FLOAT&&(re=i.RG16F),W===i.UNSIGNED_BYTE&&(re=i.RG8),W===i.UNSIGNED_SHORT&&De&&(re=De.RG16_EXT),W===i.SHORT&&De&&(re=De.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.RG8UI),W===i.UNSIGNED_SHORT&&(re=i.RG16UI),W===i.UNSIGNED_INT&&(re=i.RG32UI),W===i.BYTE&&(re=i.RG8I),W===i.SHORT&&(re=i.RG16I),W===i.INT&&(re=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.RGB8UI),W===i.UNSIGNED_SHORT&&(re=i.RGB16UI),W===i.UNSIGNED_INT&&(re=i.RGB32UI),W===i.BYTE&&(re=i.RGB8I),W===i.SHORT&&(re=i.RGB16I),W===i.INT&&(re=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),W===i.UNSIGNED_INT&&(re=i.RGBA32UI),W===i.BYTE&&(re=i.RGBA8I),W===i.SHORT&&(re=i.RGBA16I),W===i.INT&&(re=i.RGBA32I)),S===i.RGB&&(W===i.UNSIGNED_SHORT&&De&&(re=De.RGB16_EXT),W===i.SHORT&&De&&(re=De.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),S===i.RGBA){let oe=ye?Ea:zt.getTransfer(ce);W===i.FLOAT&&(re=i.RGBA32F),W===i.HALF_FLOAT&&(re=i.RGBA16F),W===i.UNSIGNED_BYTE&&(re=oe===Kt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&De&&(re=De.RGBA16_EXT),W===i.SHORT&&De&&(re=De.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(E,S){let W;return E?S===null||S===Oi||S===Fr?W=i.DEPTH24_STENCIL8:S===Bi?W=i.DEPTH32F_STENCIL8:S===Go&&(W=i.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Oi||S===Fr?W=i.DEPTH_COMPONENT24:S===Bi?W=i.DEPTH_COMPONENT32F:S===Go&&(W=i.DEPTH_COMPONENT16),W}function C(E,S){return L(E)===!0||E.isFramebufferTexture&&E.minFilter!==On&&E.minFilter!==Qn?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function O(E){let S=new WeakRef(E);n.get(E).__ref=S,_.add(S),y.register(E,S,S)}function N(E){let S=n.get(E).__ref;S!==void 0&&(_.delete(S),y.unregister(S))}function z(E){Q(E.target)}function k(E){F(E.target)}function Q(E){E.removeEventListener("dispose",z),N(E),te(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&f.delete(E)}function F(E){E.removeEventListener("dispose",k),N(E),K(E)}function $(){for(let E of _){let S=E.deref();S!==void 0&&(S.isRenderTarget===!0?F(S):Q(S))}_.clear(),f.clear()}function te(E){let S=n.get(E);if(S.__webglInit===void 0)return;let W=E.source,fe=h.get(W);if(fe){let ce=fe[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&V(E),Object.keys(fe).length===0&&h.delete(W)}n.remove(E)}function V(E){let S=n.get(E);i.deleteTexture(S.__webglTexture);let W=E.source,fe=h.get(W);delete fe[S.__cacheKey],o.memory.textures--}function K(E){let S=n.get(E);S.__depthDisposeCallback&&S.__depthDisposeCallback();let W=E.depthTexture;if(W&&W.renderTarget===E&&Q(W),E.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(S.__webglFramebuffer[ce]))for(let ye=0;ye<S.__webglFramebuffer[ce].length;ye++)i.deleteFramebuffer(S.__webglFramebuffer[ce][ye]);else i.deleteFramebuffer(S.__webglFramebuffer[ce]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ce])}else{if(Array.isArray(S.__webglFramebuffer))for(let ce=0;ce<S.__webglFramebuffer.length;ce++)i.deleteFramebuffer(S.__webglFramebuffer[ce]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ce=0;ce<S.__webglColorRenderbuffer.length;ce++)S.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ce]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let fe=E.textures;for(let ce=0,ye=fe.length;ce<ye;ce++){let De=n.get(fe[ce]);De.__webglTexture&&(i.deleteTexture(De.__webglTexture),o.memory.textures--),n.remove(fe[ce])}n.remove(E)}let j=0;function le(){j=0}function ue(){return j}function Ge(E){j=E}function ct(){let E=j;return E>=s.maxTextures&&lt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),j+=1,E}function Y(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.mipmapsAutoUpdate),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function pe(E,S){let W=n.get(E);if(E.isVideoTexture&&pn(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&W.__version!==E.version){let fe=E.image;if(fe===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Jt(W,E,S);return}}else E.isExternalTexture&&(W.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function Me(E,S){let W=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){Jt(W,E,S);return}else E.isExternalTexture&&(W.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function He(E,S){let W=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){Jt(W,E,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function de(E,S){let W=n.get(E);if(E.version>0&&W.__version!==E.version){ut(W,E,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}let Le={[qs]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[Nc]:i.MIRRORED_REPEAT},Mt={[On]:i.NEAREST,[N0]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[_h]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},_e={[B0]:i.NEVER,[vf]:i.ALWAYS,[z0]:i.LESS,[_f]:i.LEQUAL,[k0]:i.EQUAL,[xf]:i.GEQUAL,[V0]:i.GREATER,[G0]:i.NOTEQUAL};function at(E,S){if(S.type===Bi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qn||S.magFilter===_h||S.magFilter===Ja||S.magFilter===vs||S.minFilter===Qn||S.minFilter===_h||S.minFilter===Ja||S.minFilter===vs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Le[S.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Le[S.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Le[S.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Mt[S.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Mt[S.minFilter]),S.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===On||S.minFilter!==Ja&&S.minFilter!==vs||S.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function _t(E,S){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",z),O(S));let fe=S.source,ce=h.get(fe);ce===void 0&&(ce={},h.set(fe,ce));let ye=Y(S);if(ye!==E.__cacheKey){ce[ye]===void 0&&(ce[ye]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ce[ye].usedTimes++;let De=ce[E.__cacheKey];De!==void 0&&(ce[E.__cacheKey].usedTimes--,De.usedTimes===0&&V(S)),E.__cacheKey=ye,E.__webglTexture=ce[ye].texture}return W}function Ue(E,S,W){return Math.floor(Math.floor(E/W)/S)}function Vt(E,S,W,fe){let ye=E.updateRanges;if(ye.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,W,fe,S.data);else{ye.sort((U,ae)=>U.start-ae.start);let De=0;for(let U=1;U<ye.length;U++){let ae=ye[De],ne=ye[U],Ee=ae.start+ae.count,be=Ue(ne.start,S.width,4),Re=Ue(ae.start,S.width,4);ne.start<=Ee+1&&be===Re&&Ue(ne.start+ne.count-1,S.width,4)===be?ae.count=Math.max(ae.count,ne.start+ne.count-ae.start):(++De,ye[De]=ne)}ye.length=De+1;let re=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let U=0,ae=ye.length;U<ae;U++){let ne=ye[U],Ee=Math.floor(ne.start/4),be=Math.ceil(ne.count/4),Re=Ee%S.width,Ke=Math.floor(Ee/S.width),St=be,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ke),t.texSubImage2D(i.TEXTURE_2D,0,Re,Ke,St,ve,W,fe,S.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,re),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function Jt(E,S,W){let fe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(fe=i.TEXTURE_3D);let ce=_t(E,S),ye=S.source;t.bindTexture(fe,E.__webglTexture,i.TEXTURE0+W);let De=n.get(ye);if(ye.version!==De.__version||ce===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ve=zt.getPrimaries(zt.workingColorSpace),it=S.colorSpace===Ms?null:zt.getPrimaries(S.colorSpace),vt=S.colorSpace===Ms||ve===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let oe=b(S.image,!1,s.maxTextureSize);oe=ot(S,oe);let Ce=r.convert(S.format,S.colorSpace),U=r.convert(S.type),ae=P(S.internalFormat,Ce,U,S.normalized,S.colorSpace,S.isVideoTexture);at(fe,S);let ne,Ee=S.mipmaps,be=S.isVideoTexture!==!0,Re=De.__version===void 0||ce===!0,Ke=ye.dataReady,St=C(S,oe);if(S.isDepthTexture)ae=x(S.format===ys,S.type),Re&&(be?t.texStorage2D(i.TEXTURE_2D,1,ae,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,ae,oe.width,oe.height,0,Ce,U,null));else if(S.isDataTexture)if(Ee.length>0){be&&Re&&t.texStorage2D(i.TEXTURE_2D,St,ae,Ee[0].width,Ee[0].height);for(let ve=0,it=Ee.length;ve<it;ve++)ne=Ee[ve],be?Ke&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,ne.width,ne.height,Ce,U,ne.data):t.texImage2D(i.TEXTURE_2D,ve,ae,ne.width,ne.height,0,Ce,U,ne.data);S.generateMipmaps=!1}else be?(Re&&t.texStorage2D(i.TEXTURE_2D,St,ae,oe.width,oe.height),Ke&&Vt(S,oe,Ce,U)):t.texImage2D(i.TEXTURE_2D,0,ae,oe.width,oe.height,0,Ce,U,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){be&&Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,St,ae,Ee[0].width,Ee[0].height,oe.depth);for(let ve=0,it=Ee.length;ve<it;ve++)if(ne=Ee[ve],S.format!==ki)if(Ce!==null)if(be){if(Ke)if(S.layerUpdates.size>0){let vt=Pf(ne.width,ne.height,S.format,S.type);for(let Fe of S.layerUpdates){let Yt=ne.data.subarray(Fe*vt/ne.data.BYTES_PER_ELEMENT,(Fe+1)*vt/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Fe,ne.width,ne.height,1,Ce,Yt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,ne.width,ne.height,oe.depth,Ce,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,ae,ne.width,ne.height,oe.depth,0,ne.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?Ke&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,ne.width,ne.height,oe.depth,Ce,U,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,ae,ne.width,ne.height,oe.depth,0,Ce,U,ne.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{be&&Re&&t.texStorage2D(i.TEXTURE_2D,St,ae,Ee[0].width,Ee[0].height);for(let ve=0,it=Ee.length;ve<it;ve++)ne=Ee[ve],S.format!==ki?Ce!==null?be?Ke&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,ne.width,ne.height,Ce,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,ae,ne.width,ne.height,0,ne.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Ke&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,ne.width,ne.height,Ce,U,ne.data):t.texImage2D(i.TEXTURE_2D,ve,ae,ne.width,ne.height,0,Ce,U,ne.data)}else if(S.isDataArrayTexture)if(be){if(Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,St,ae,oe.width,oe.height,oe.depth),Ke)if(S.layerUpdates.size>0){let ve=Pf(oe.width,oe.height,S.format,S.type);for(let it of S.layerUpdates){let vt=oe.data.subarray(it*ve/oe.data.BYTES_PER_ELEMENT,(it+1)*ve/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,oe.width,oe.height,1,Ce,U,vt)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ce,U,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,oe.width,oe.height,oe.depth,0,Ce,U,oe.data);else if(S.isData3DTexture)be?(Re&&t.texStorage3D(i.TEXTURE_3D,St,ae,oe.width,oe.height,oe.depth),Ke&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ce,U,oe.data)):t.texImage3D(i.TEXTURE_3D,0,ae,oe.width,oe.height,oe.depth,0,Ce,U,oe.data);else if(S.isFramebufferTexture){if(Re)if(be)t.texStorage2D(i.TEXTURE_2D,St,ae,oe.width,oe.height);else{let ve=oe.width,it=oe.height;for(let vt=0;vt<St;vt++)t.texImage2D(i.TEXTURE_2D,vt,ae,ve,it,0,Ce,U,null),ve>>=1,it>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),oe.parentNode!==ve){ve.appendChild(oe),f.add(S),ve.onpaint=it=>{let vt=it.changedElements;for(let Fe of f)vt.includes(Fe.image)&&(Fe.needsUpdate=!0)},ve.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let vt=i.RGBA,Fe=i.RGBA,Yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,vt,Fe,Yt,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(be&&Re){let ve=ht(Ee[0]);t.texStorage2D(i.TEXTURE_2D,St,ae,ve.width,ve.height)}for(let ve=0,it=Ee.length;ve<it;ve++)ne=Ee[ve],be?Ke&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ce,U,ne):t.texImage2D(i.TEXTURE_2D,ve,ae,Ce,U,ne);S.generateMipmaps=!1}else if(be){if(Re){let ve=ht(oe);t.texStorage2D(i.TEXTURE_2D,St,ae,ve.width,ve.height)}Ke&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,U,oe)}else t.texImage2D(i.TEXTURE_2D,0,ae,Ce,U,oe);L(S)&&S.mipmapsAutoUpdate===!0&&A(fe),De.__version=ye.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ut(E,S,W){if(S.image.length!==6)return;let fe=_t(E,S),ce=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+W);let ye=n.get(ce);if(ce.version!==ye.__version||fe===!0){t.activeTexture(i.TEXTURE0+W);let De=zt.getPrimaries(zt.workingColorSpace),re=S.colorSpace===Ms?null:zt.getPrimaries(S.colorSpace),oe=S.colorSpace===Ms||De===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,U=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let Fe=0;Fe<6;Fe++)!Ce&&!U?ae[Fe]=b(S.image[Fe],!0,s.maxCubemapSize):ae[Fe]=U?S.image[Fe].image:S.image[Fe],ae[Fe]=ot(S,ae[Fe]);let ne=ae[0],Ee=r.convert(S.format,S.colorSpace),be=r.convert(S.type),Re=P(S.internalFormat,Ee,be,S.normalized,S.colorSpace),Ke=S.isVideoTexture!==!0,St=ye.__version===void 0||fe===!0,ve=ce.dataReady,it=C(S,ne);at(i.TEXTURE_CUBE_MAP,S);let vt;if(S.isDepthTexture){if(Re=x(S.format===ys,S.type),St)if(Ke)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Re,ne.width,ne.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Re,ne.width,ne.height,0,Ee,be,null)}else if(Ce){Ke&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,it,Re,ne.width,ne.height);for(let Fe=0;Fe<6;Fe++){vt=ae[Fe].mipmaps;for(let Yt=0;Yt<vt.length;Yt++){let an=vt[Yt];S.format!==ki?Ee!==null?Ke?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Yt,0,0,an.width,an.height,Ee,an.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Yt,Re,an.width,an.height,0,an.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Yt,0,0,an.width,an.height,Ee,be,an.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Yt,Re,an.width,an.height,0,Ee,be,an.data)}}}else{if(vt=S.mipmaps,Ke&&St){vt.length>0&&it++;let Fe=ht(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,it,Re,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(U){Ke?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,ae[Fe].width,ae[Fe].height,Ee,be,ae[Fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Re,ae[Fe].width,ae[Fe].height,0,Ee,be,ae[Fe].data);for(let Yt=0;Yt<vt.length;Yt++){let Wi=vt[Yt].image[Fe].image;Ke?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Yt+1,0,0,Wi.width,Wi.height,Ee,be,Wi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Yt+1,Re,Wi.width,Wi.height,0,Ee,be,Wi.data)}}else{Ke?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,Ee,be,ae[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Re,Ee,be,ae[Fe]);for(let Yt=0;Yt<vt.length;Yt++){let an=vt[Yt];Ke?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Yt+1,0,0,Ee,be,an.image[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Yt+1,Re,Ee,be,an.image[Fe])}}}L(S)&&S.mipmapsAutoUpdate===!0&&A(i.TEXTURE_CUBE_MAP),ye.__version=ce.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Lt(E,S,W,fe,ce,ye){let De=r.convert(W.format,W.colorSpace),re=r.convert(W.type),oe=P(W.internalFormat,De,re,W.normalized,W.colorSpace),Ce=n.get(S),U=n.get(W);if(U.__renderTarget=S,!Ce.__hasExternalTextures){let ae=Math.max(1,S.width>>ye),ne=Math.max(1,S.height>>ye);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ye,oe,ae,ne,S.depth,0,De,re,null):t.texImage2D(ce,ye,oe,ae,ne,0,De,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ce,U.__webglTexture,0,nn(S)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,ce,U.__webglTexture,ye),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Tn(E,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,E),S.depthBuffer){let fe=S.depthTexture,ce=fe&&fe.isDepthTexture?fe.type:null,ye=x(S.stencilBuffer,ce),De=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ne(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nn(S),ye,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,nn(S),ye,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ye,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,E)}else{let fe=S.textures;for(let ce=0;ce<fe.length;ce++){let ye=fe[ce],De=r.convert(ye.format,ye.colorSpace),re=r.convert(ye.type),oe=P(ye.internalFormat,De,re,ye.normalized,ye.colorSpace);Ne(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nn(S),oe,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,nn(S),oe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,oe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qt(E,S,W){let fe=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=n.get(S.depthTexture);ce.__renderTarget=S;let ye=fe?S.depthTexture.image[0]:S.depthTexture.image;(!ce.__webglTexture||ye.width!==S.width||ye.height!==S.height)&&(ye.width=S.width,ye.height=S.height,S.depthTexture.needsUpdate=!0),fe?de(S.depthTexture,0):pe(S.depthTexture,0);let De=ce.__webglTexture,re=nn(S),oe=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,Ce=S.depthTexture.format===ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ms)Ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,oe,De,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,oe,De,0);else if(S.depthTexture.format===ys)Ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,oe,De,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,oe,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(E){let S=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){let fe=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),fe){let ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,fe.removeEventListener("dispose",ce)};fe.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=fe}if(E.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let fe=0;fe<6;fe++)qt(S.__webglFramebuffer[fe],E,fe);else E.texture.mipmaps.length>0?qt(S.__webglFramebuffer[0],E,0):qt(S.__webglFramebuffer,E,0);else if(W){S.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[fe]),S.__webglDepthbuffer[fe]===void 0)S.__webglDepthbuffer[fe]=i.createRenderbuffer(),Tn(S.__webglDepthbuffer[fe],E,!1);else{let ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=S.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ye)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Tn(S.__webglDepthbuffer,E,!1);else{let ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ye)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function En(E,S,W){let fe=n.get(E);S!==void 0&&Lt(fe.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Nt(E)}function wn(E){let S=E.texture,W=n.get(E),fe=n.get(S);E.addEventListener("dispose",k),O(E);let ce=E.textures,ye=E.isWebGLCubeRenderTarget===!0,De=ce.length>1;if(De||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=S.version,o.memory.textures++),ye){W.__webglFramebuffer=[];for(let re=0;re<6;re++)if(S.mipmaps.length>0){W.__webglFramebuffer[re]=[];for(let oe=0;oe<S.mipmaps.length;oe++)W.__webglFramebuffer[re][oe]=i.createFramebuffer()}else W.__webglFramebuffer[re]=i.createFramebuffer()}else{if(S.mipmaps.length>0){W.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)W.__webglFramebuffer[re]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(De)for(let re=0,oe=ce.length;re<oe;re++){let Ce=n.get(ce[re]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ne(E)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let re=0;re<ce.length;re++){let oe=ce[re];W.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[re]);let Ce=r.convert(oe.format,oe.colorSpace),U=r.convert(oe.type),ae=P(oe.internalFormat,Ce,U,oe.normalized,oe.colorSpace,E.isXRRenderTarget===!0),ne=nn(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,ae,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,W.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Tn(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ye){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),at(i.TEXTURE_CUBE_MAP,S);for(let re=0;re<6;re++)if(S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)Lt(W.__webglFramebuffer[re][oe],E,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe);else Lt(W.__webglFramebuffer[re],E,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);L(S)?A(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(De){for(let re=0,oe=ce.length;re<oe;re++){let Ce=ce[re],U=n.get(Ce),ae=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,U.__webglTexture),at(ae,Ce),Lt(W.__webglFramebuffer,E,Ce,i.COLOR_ATTACHMENT0+re,ae,0),L(Ce)&&A(ae)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,fe.__webglTexture),at(re,S),S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)Lt(W.__webglFramebuffer[oe],E,S,i.COLOR_ATTACHMENT0,re,oe);else Lt(W.__webglFramebuffer,E,S,i.COLOR_ATTACHMENT0,re,0);L(S)?A(re):S.mipmaps.length>0&&i.texParameteri(re,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&Nt(E)}function G(E){let S=E.textures;for(let W=0,fe=S.length;W<fe;W++){let ce=S[W];if(L(ce)&&ce.mipmapsAutoUpdate===!0){let ye=I(E),De=n.get(ce).__webglTexture;t.bindTexture(ye,De),A(ye),t.unbindTexture()}}}let Jn=[];function jt(E){if(E.samples>0){if(Ne(E)===!1){let S=E.textures,W=E.width,fe=E.height,ce=i.COLOR_BUFFER_BIT,ye=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(E),re=S.length>1;if(re)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);let U=n.get(S[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,W,fe,0,0,W,fe,ce,i.NEAREST),c===!0&&(Jn.length=0,Jn.push(i.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Jn.push(ye),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);let U=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let S=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function nn(E){return Math.min(s.maxSamples,E.samples)}function Ne(E){let S=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pn(E){let S=o.render.frame;d.get(E)!==S&&(d.set(E,S),E.update())}function ot(E,S){let W=E.colorSpace,fe=E.format,ce=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||W!==Ta&&W!==Ms&&(zt.getTransfer(W)===Kt?(fe!==ki||ce!==ri)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",W)),S}function ht(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=ct,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=Ge,this.setTexture2D=pe,this.setTexture2DArray=Me,this.setTexture3D=He,this.setTextureCube=de,this.rebindTextures=En,this.setupRenderTarget=wn,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Ne,this.dispose=$}function Kb(i,e){function t(n,s=Ms){let r,o=zt.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===vh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===df)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ff)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hf)return i.BYTE;if(n===uf)return i.SHORT;if(n===Go)return i.UNSIGNED_SHORT;if(n===xh)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Bi)return i.FLOAT;if(n===zi)return i.HALF_FLOAT;if(n===pf)return i.ALPHA;if(n===mf)return i.RGB;if(n===ki)return i.RGBA;if(n===ms)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===gf)return i.RED;if(n===Mh)return i.RED_INTEGER;if(n===nr)return i.RG;if(n===Sh)return i.RG_INTEGER;if(n===bh)return i.RGBA_INTEGER;if(n===$a||n===ja||n===Ka||n===Qa)if(o===Kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wh||n===Ah||n===Th||n===Eh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ah)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===el||n===Dh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ch||n===Rh)return o===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ph)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ih)return r.COMPRESSED_R11_EAC;if(n===Lh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===el)return r.COMPRESSED_RG11_EAC;if(n===Dh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nh||n===Uh||n===Fh||n===Oh||n===Bh||n===zh||n===kh||n===Vh||n===Gh||n===Hh||n===Wh||n===Xh||n===qh||n===Yh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yh)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zh||n===Jh||n===$h)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Zh)return o===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$h)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jh||n===Kh||n===tl||n===Qh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cn({vertexShader:Qb,fragmentShader:e1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xf=class extends ji{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,u=null,h=null,_=null,y=typeof XRWebGLBinding<"u",g=new Wf,m={},b=t.getContextAttributes(),L=null,A=null,I=[],P=[],x=new ke,C=null,O=null,N=new qn;N.viewport=new vn;let z=new qn;z.viewport=new vn;let k=[N,z],Q=new dh,F=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pe=I[Y];return pe===void 0&&(pe=new No,I[Y]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Y){let pe=I[Y];return pe===void 0&&(pe=new No,I[Y]=pe),pe.getGripSpace()},this.getHand=function(Y){let pe=I[Y];return pe===void 0&&(pe=new No,I[Y]=pe),pe.getHandSpace()};function te(Y){let pe=P.indexOf(Y.inputSource);if(pe===-1)return;let Me=I[pe];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,l||o),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<I.length;Y++){let pe=P[Y];pe!==null&&(P[Y]=null,I[Y].disconnect(pe))}F=null,$=null,g.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(L),h=null,u=null,f=null,s=null,A=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(x.width,x.height,!1),O!==null){let Y=O.camera;Y.fov=O.fov,Y.zoom=O.zoom,Y.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",V),s.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,He=null,de=null;b.depth&&(de=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=b.stencil?ys:ms,He=b.stencil?Fr:Oi);let Le={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),A=new mi(u.textureWidth,u.textureHeight,{format:ki,type:ri,depthTexture:new _s(u.textureWidth,u.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),A=new mi(h.framebufferWidth,h.framebufferHeight,{format:ki,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(Y){for(let pe=0;pe<Y.removed.length;pe++){let Me=Y.removed[pe],He=P.indexOf(Me);He>=0&&(P[He]=null,I[He].disconnect(Me))}for(let pe=0;pe<Y.added.length;pe++){let Me=Y.added[pe],He=P.indexOf(Me);if(He===-1){for(let Le=0;Le<I.length;Le++)if(Le>=P.length){P.push(Me),He=Le;break}else if(P[Le]===null){P[Le]=Me,He=Le;break}if(He===-1)break}let de=I[He];de&&de.connect(Me)}}function j(Y,pe){pe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let pe=Y.near,Me=Y.far;g.texture!==null&&(g.depthNear>0&&(pe=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),Q.near=z.near=N.near=pe,Q.far=z.far=N.far=Me,(F!==Q.near||$!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),F=Q.near,$=Q.far),Q.layers.mask=Y.layers.mask|6,N.layers.mask=Q.layers.mask&-5,z.layers.mask=Q.layers.mask&-3;let He=Y.parent,de=Q.cameras;j(Q,He);for(let Le=0;Le<de.length;Le++)j(de[Le],He);Q.projectionMatrix.copy(N.projectionMatrix),Q.projectionMatrixInverse.copy(N.projectionMatrixInverse),O===null&&Y.isPerspectiveCamera&&(O={camera:Y,fov:Y.fov,zoom:Y.zoom}),le(Y,Q,He)};function le(Y,pe,Me){Me===null?Y.matrix.copy(pe.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pe.projectionMatrix),Y.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Lo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Q)},this.getCameraTexture=function(Y){return m[Y]};let ue=null;function Ge(Y,pe){if(d=pe.getViewerPose(l||o),_=pe,d!==null){let Me=d.views;h!==null&&(e.setRenderTargetFramebuffer(A,h.framebuffer),e.setRenderTarget(A));let He=!1;Me.length!==Q.cameras.length&&(Q.cameras.length=0,He=!0);for(let _e=0;_e<Me.length;_e++){let at=Me[_e],_t=null;if(h!==null)_t=h.getViewport(at);else{let Vt=f.getViewSubImage(u,at);_t=Vt.viewport,_e===0&&(e.setRenderTargetTextures(A,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(A))}let Ue=k[_e];Ue===void 0&&(Ue=new qn,Ue.layers.enable(_e),Ue.viewport=new vn,k[_e]=Ue),Ue.matrix.fromArray(at.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(at.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(_t.x,_t.y,_t.width,_t.height),_e===0&&(Q.matrix.copy(Ue.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),He===!0&&Q.cameras.push(Ue)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let _e=f.getDepthInformation(Me[0]);_e&&_e.isValid&&_e.texture&&g.init(_e,s.renderState)}if(de&&de.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let _e=0;_e<Me.length;_e++){let at=Me[_e].camera;if(at){let _t=m[at];_t||(_t=new Oa,m[at]=_t);let Ue=f.getCameraImage(at);_t.sourceTexture=Ue}}}}for(let Me=0;Me<I.length;Me++){let He=P[Me],de=I[Me];He!==null&&de!==void 0&&de.update(He,pe,l||o)}ue&&ue(Y,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),_=null}let ct=new vg;ct.setAnimationLoop(Ge),this.setAnimationLoop=function(Y){ue=Y},this.dispose=function(){}}},t1=new Dt,Rg=new pt;Rg.set(-1,0,0,0,1,0,0,0,1);function n1(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ef(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,L,A){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&h(g,m,A)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,b,L):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ni&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ni&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=e.get(m),L=b.envMap,A=b.envMapRotation;L&&(g.envMap.value=L,g.envMapRotation.value.setFromMatrix4(t1.makeRotationFromEuler(A)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Rg),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,L){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=L*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,b){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ni&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i1(i,e,t,n){let s={},r={};function o(b,L){let A=L.program;n.uniformBlockBinding(b,A,s[b.id])}function a(b,L){let A=s[b.id];A===void 0&&(_(b),A=c(b),s[b.id]=A,b.addEventListener("dispose",g));let I=L.program;n.updateUBOMapping(b,I);let P=e.render.frame;r[b.id]!==P&&(l(b),r[b.id]=P)}function c(b){let L=i.createBuffer(),A=b.__size,I=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,A,I),i.bindBuffer(i.UNIFORM_BUFFER,null),L}function l(b){let L=s[b.id],A=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let P=0,x=A.length;P<x;P++){let C=A[P];if(Array.isArray(C))for(let O=0,N=C.length;O<N;O++)d(C[O],P,O,I);else d(C,P,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,L,A,I){if(u(b,L,A,I)===!0){let P=b.__offset,x=b.value;if(Array.isArray(x)){let C=0;for(let O=0;O<x.length;O++){let N=x[O],z=y(N,!0);f(N,b.__data,C),C+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,P,b.__data)}}function f(b,L,A){typeof b=="number"||typeof b=="boolean"?L[A]=b:b.isMatrix3?(L[A]=b.elements[0],L[A+1]=b.elements[1],L[A+2]=b.elements[2],L[A+3]=0,L[A+4]=b.elements[3],L[A+5]=b.elements[4],L[A+6]=b.elements[5],L[A+7]=0,L[A+8]=b.elements[6],L[A+9]=b.elements[7],L[A+10]=b.elements[8],L[A+11]=0):ArrayBuffer.isView(b)?L.set(b.subarray(0,L.length-A),A):b.toArray(L,A)}function u(b,L,A,I){let P=b.value,x=L+"_"+A;if(Array.isArray(P)){I[x]===void 0&&(I[x]=[]);let C=I[x],O=!1;for(let N=0;N<P.length;N++)h(P[N],C,N)===!0&&(O=!0);return O}return h(P,I,x)}function h(b,L,A){if(L[A]===void 0)return typeof b=="number"||typeof b=="boolean"?L[A]=b:ArrayBuffer.isView(b)?L[A]=b.slice():L[A]=b.clone(),!0;{let I=L[A];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return L[A]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(I.equals(b)===!1)return I.copy(b),!0}}return!1}function _(b){let L=b.uniforms,A=0,I=16;for(let x=0,C=L.length;x<C;x++){let O=Array.isArray(L[x])?L[x]:[L[x]];for(let N=0,z=O.length;N<z;N++){let k=O[N],Q=Array.isArray(k.value)?k.value:[k.value],F=Array.isArray(L[x])||Array.isArray(k.value),$=A;for(let V=0,K=Q.length;V<K;V++){let j=Q[V],le=y(j,F),ue=A%I,Ge=ue%le.boundary,ct=ue+Ge;A+=Ge,ct!==0&&I-ct<le.storage&&(A+=I-ct),V===0&&($=A),A+=le.storage}let te=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new te((A-$)/Float32Array.BYTES_PER_ELEMENT),k.__offset=$}}let P=A%I;return P>0&&(A+=I-P),b.__size=A,b.__cache={},this}function y(b,L){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=16,A.storage=48):b.isMatrix4?(A.boundary=16,A.storage=64):b.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",b),L===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function g(b){let L=b.target;L.removeEventListener("dispose",g),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:o,update:a,dispose:m}}var s1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),es=null;function r1(){return es===null&&(es=new kc(s1,16,16,nr,zi),es.name="DFG_LUT",es.minFilter=Qn,es.magFilter=Qn,es.wrapS=$i,es.wrapT=$i,es.generateMipmaps=!1,es.needsUpdate=!0),es}var ru=class{constructor(e={}){let{canvas:t=H0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=ri}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let y=h,g=new Set([bh,Sh,Mh]),m=new Set([ri,Oi,Go,Fr,vh,yh]),b=new Uint32Array(4),L=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},I=null,P=null,x=[],C=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,z=!1,k=null,Q=null,F=null,$=null;this._outputColorSpace=xn;let te=0,V=0,K=null,j=-1,le=null,ue=new vn,Ge=new vn,ct=null,Y=new Be(0),pe=0,Me=t.width,He=t.height,de=1,Le=null,Mt=null,_e=new vn(0,0,Me,He),at=new vn(0,0,Me,He),_t=!1,Ue=new Js,Vt=new Vc,Jt=!1,ut=!1,Lt=new Dt,Tn=new T,qt=new vn,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},En=!1;function wn(){return K===null?de:1}let G=n;function Jn(w,B){return t.getContext(w,B)}let jt,nn,Ne,pn,ot,ht,E,S,W,fe,ce,ye,De,re,oe,Ce,U,ae,ne,Ee,be,Re,Ke;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),G===null){let B="webgl2";if(G=Jn(B,w),G===null)throw Jn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}St()}catch(w){throw t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),ft("WebGLRenderer: "+w.message),w}function St(){jt=new gS(G),jt.init(),be=new Kb(G,jt),nn=new rS(G,jt,e,be),Ne=new $b(G,jt),nn.reversedDepthBuffer&&u&&Ne.buffers.depth.setReversed(!0),Q=G.createFramebuffer(),F=G.createFramebuffer(),$=G.createFramebuffer(),pn=new vS(G),ot=new Fb,ht=new jb(G,jt,Ne,ot,nn,be,pn),E=new mS(N),S=new Mv(G),Re=new iS(G,S),W=new _S(G,S,pn,Re),fe=new MS(G,W,S,Re,pn),ae=new yS(G,nn,ht),oe=new oS(ot),ce=new Ub(N,E,jt,nn,Re,oe),ye=new n1(N,ot),De=new Bb,re=new Wb(jt),U=new nS(N,E,Ne,fe,_,c),Ce=new Jb(N,fe,nn),Ke=new i1(G,pn,nn,Ne),ne=new sS(G,jt,pn),Ee=new xS(G,jt,pn),pn.programs=ce.programs,N.capabilities=nn,N.extensions=jt,N.properties=ot,N.renderLists=De,N.shadowMap=Ce,N.state=Ne,N.info=pn}y!==ri&&(O=new bS(y,t.width,t.height,a,s,r));let ve=new Xf(N,G);this.xr=ve,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let w=jt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=jt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(w){w!==void 0&&(de=w,this.setSize(Me,He,!1))},this.getSize=function(w){return w.set(Me,He)},this.setSize=function(w,B,ee=!0){if(ve.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=w,He=B,t.width=Math.floor(w*de),t.height=Math.floor(B*de),ee===!0&&(t.style.width=w+"px",t.style.height=B+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(Me*de,He*de).floor()},this.setDrawingBufferSize=function(w,B,ee){Me=w,He=B,de=ee,t.width=Math.floor(w*ee),t.height=Math.floor(B*ee),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(y===ri){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ue)},this.getViewport=function(w){return w.copy(_e)},this.setViewport=function(w,B,ee,X){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,B,ee,X),Ne.viewport(ue.copy(_e).multiplyScalar(wn()).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,B,ee,X){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,B,ee,X),Ne.scissor(Ge.copy(at).multiplyScalar(wn()).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(w){Ne.setScissorTest(_t=w)},this.setOpaqueSort=function(w){Le=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,ee=!0){let X=0;if(w){let q=!1;if(K!==null){let Ie=K.texture.format;q=g.has(Ie)}if(q){let Ie=K.texture.type,Ve=m.has(Ie),Pe=U.getClearColor(),Oe=U.getClearAlpha(),Ye=Pe.r,rt=Pe.g,wt=Pe.b;Ve?(b[0]=Ye,b[1]=rt,b[2]=wt,b[3]=Oe,G.clearBufferuiv(G.COLOR,0,b)):(L[0]=Ye,L[1]=rt,L[2]=wt,L[3]=Oe,G.clearBufferiv(G.COLOR,0,L))}else X|=G.COLOR_BUFFER_BIT}B&&(X|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),k=w},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),U.dispose(),De.dispose(),re.dispose(),ht.dispose(),ot.dispose(),E.dispose(),fe.dispose(),W.dispose(),Re.dispose(),Ke.dispose(),ce.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Xi),ve.removeEventListener("sessionend",dl),Gn.stop()};function it(w){w.preventDefault(),Ca("WebGLRenderer: Context Lost."),z=!0}function vt(){Ca("WebGLRenderer: Context Restored."),z=!1;let w=pn.autoReset,B=Ce.enabled,ee=Ce.autoUpdate,X=Ce.needsUpdate,q=Ce.type;St(),pn.autoReset=w,Ce.enabled=B,Ce.autoUpdate=ee,Ce.needsUpdate=X,Ce.type=q}function Fe(w){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yt(w){let B=w.target;B.removeEventListener("dispose",Yt),an(B)}function an(w){Wi(w),ot.remove(w)}function Wi(w){let B=ot.get(w).programs;B!==void 0&&(B.forEach(function(ee){ce.releaseProgram(ee)}),w.isShaderMaterial&&ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,ee,X,q,Ie){B===null&&(B=Nt);let Ve=q.isMesh&&q.matrixWorld.determinantAffine()<0,Pe=ml(w,B,ee,X,q);Ne.setMaterial(X,Ve);let Oe=ee.index,Ye=1;if(X.wireframe===!0){if(Oe=W.getWireframeAttribute(ee),Oe===void 0)return;Ye=2}let rt=ee.drawRange,wt=ee.attributes.position,Xe=rt.start*Ye,At=(rt.start+rt.count)*Ye;Ie!==null&&(Xe=Math.max(Xe,Ie.start*Ye),At=Math.min(At,(Ie.start+Ie.count)*Ye)),Oe!==null?(Xe=Math.max(Xe,0),At=Math.min(At,Oe.count)):wt!=null&&(Xe=Math.max(Xe,0),At=Math.min(At,wt.count));let tn=At-Xe;if(tn<0||tn===1/0)return;Re.setup(q,X,Pe,ee,Oe);let Zt,Ot=ne;if(Oe!==null&&(Zt=S.get(Oe),Ot=Ee,Ot.setIndex(Zt)),q.isMesh)X.wireframe===!0?(Ne.setLineWidth(X.wireframeLinewidth*wn()),Ot.setMode(G.LINES)):Ot.setMode(G.TRIANGLES);else if(q.isLine){let ln=X.linewidth;ln===void 0&&(ln=1),Ne.setLineWidth(ln*wn()),q.isLineSegments?Ot.setMode(G.LINES):q.isLineLoop?Ot.setMode(G.LINE_LOOP):Ot.setMode(G.LINE_STRIP)}else q.isPoints?Ot.setMode(G.POINTS):q.isSprite&&Ot.setMode(G.TRIANGLES);if(q.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let ln=q._multiDrawStarts,qe=q._multiDrawCounts,Nn=q._multiDrawCount,Xt=Oe?S.get(Oe).bytesPerElement:1,vi=ot.get(X).currentProgram.getUniforms();for(let mn=0;mn<Nn;mn++)vi.setValue(G,"_gl_DrawID",mn),Ot.render(ln[mn]/Xt,qe[mn])}else if(q.isInstancedMesh)Ot.renderInstances(Xe,tn,q.count);else if(ee.isInstancedBufferGeometry){let ln=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,qe=Math.min(ee.instanceCount,ln);Ot.renderInstances(Xe,tn,qe)}else Ot.render(Xe,tn)};function zr(w,B,ee,X){k!==null&&w.isNodeMaterial&&k.setObject(X,w),Jt===!0&&oe.setState(w,ee,!1),w.transparent===!0&&w.side===An&&w.forceSinglePass===!1?(w.side=ni,w.needsUpdate=!0,ii(w,B,X),w.side=tr,w.needsUpdate=!0,ii(w,B,X),w.side=An):ii(w,B,X)}this.compile=function(w,B,ee=null){ee===null&&(ee=w),k!==null&&k.renderStart(w,B,ee),P=re.get(ee),P.init(B),C.push(P),ee.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(P.pushLight(q),q.castShadow&&P.pushShadow(q))}),w!==ee&&w.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(P.pushLight(q),q.castShadow&&P.pushShadow(q))}),P.setupLights(),k!==null&&k.updateLights(P.state.lightsArray),ut=this.localClippingEnabled,Jt=oe.init(this.clippingPlanes,ut),Jt===!0&&oe.setGlobalState(this.clippingPlanes,B),k!==null&&Ce.render(P.state.shadowsArray,ee,B);let X=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ie=q.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){let Pe=Ie[Ve];zr(Pe,ee,B,q),X.add(Pe)}else zr(Ie,ee,B,q),X.add(Ie)}),P=C.pop(),k!==null&&k.renderEnd(),X},this.compileAsync=function(w,B,ee=null){let X=this.compile(w,B,ee);return new Promise(q=>{function Ie(){if(X.forEach(function(Ve){let Oe=ot.get(Ve).currentProgram;(Oe===void 0||Oe.isReady())&&X.delete(Ve)}),X.size===0){q(w);return}setTimeout(Ie,10)}jt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let $o=null;function Es(w){$o&&$o(w)}function Xi(){Gn.stop()}function dl(){Gn.start()}let Gn=new vg;Gn.setAnimationLoop(Es),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(w){$o=w,ve.setAnimationLoop(w),w===null?Gn.stop():Gn.start()},ve.addEventListener("sessionstart",Xi),ve.addEventListener("sessionend",dl),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;k!==null&&k.renderStart(w,B);let ee=ve.enabled===!0&&ve.isPresenting===!0,X=O!==null&&(K===null||ee)&&O.begin(N,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(B),B=ve.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,B,K),P=re.get(w,C.length),P.init(B),P.state.textureUnits=ht.getTextureUnits(),C.push(P),Lt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Vt.setFromArrayCamera(B):Ue.setFromProjectionMatrix(Lt,bi,B.reversedDepth),ut=this.localClippingEnabled,Jt=oe.init(this.clippingPlanes,ut),I=De.get(w,x.length),I.init(),x.push(I),this.info.render.frame++,ve.enabled===!0&&ve.isPresenting===!0){let Ve=N.xr.getDepthSensingMesh();Ve!==null&&kr(Ve,B,-1/0,N.sortObjects)}kr(w,B,0,N.sortObjects),I.finish(),k!==null&&k.updateLights(P.state.lightsArray),N.sortObjects===!0&&I.sort(Le,Mt),En=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,En&&U.addToRenderList(I,w),this.info.autoReset===!0&&this.info.reset(),Jt===!0&&oe.beginShadows();let q=P.state.shadowsArray;if(Ce.render(q,w,B),Jt===!0&&oe.endShadows(),(X&&O.hasRenderPass())===!1){let Ve=I.opaque,Pe=I.transmissive;if(P.setupLights(),B.isArrayCamera){let Oe=B.cameras;if(Pe.length>0)for(let Ye=0,rt=Oe.length;Ye<rt;Ye++){let wt=Oe[Ye];Cs(Ve,Pe,w,wt)}En&&U.render(w);for(let Ye=0,rt=Oe.length;Ye<rt;Ye++){let wt=Oe[Ye];fl(I,w,wt,wt.viewport)}}else Pe.length>0&&Cs(Ve,Pe,w,B),En&&U.render(w),fl(I,w,B)}K!==null&&V===0&&(ht.updateMultisampleRenderTarget(K),ht.updateRenderTargetMipmap(K)),X&&O.end(N),w.isScene===!0&&w.onAfterRender(N,w,B),Re.resetDefaultState(),j=-1,le=null,C.pop(),C.length>0?(P=C[C.length-1],ht.setTextureUnits(P.state.textureUnits),Jt===!0&&oe.setGlobalState(N.clippingPlanes,P.state.camera)):P=null,x.pop(),x.length>0?I=x[x.length-1]:I=null,k!==null&&k.renderEnd()};function kr(w,B,ee,X){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){let Ve=B.isArrayCamera?Vt:Ue;if(!w.frustumCulled||w.intersectsFrustum(Ve)){X&&qt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Lt);let Pe=fe.update(w),Oe=w.material;Oe.visible&&I.push(w,Pe,Oe,ee,qt.z,null,B)}}else if(w.isMesh||w.isLine||w.isPoints){let Ve=B.isArrayCamera?Vt:Ue;if(!w.frustumCulled||w.intersectsFrustum(Ve)){let Pe=fe.update(w),Oe=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qt.copy(w.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),qt.copy(Pe.boundingSphere.center)),qt.applyMatrix4(w.matrixWorld).applyMatrix4(Lt)),Array.isArray(Oe)){let Ye=Pe.groups;for(let rt=0,wt=Ye.length;rt<wt;rt++){let Xe=Ye[rt],At=Oe[Xe.materialIndex];At&&At.visible&&I.push(w,Pe,At,ee,qt.z,Xe,B)}}else Oe.visible&&I.push(w,Pe,Oe,ee,qt.z,null,B)}}}let Ie=w.children;for(let Ve=0,Pe=Ie.length;Ve<Pe;Ve++)kr(Ie[Ve],B,ee,X)}function fl(w,B,ee,X){let{opaque:q,transmissive:Ie,transparent:Ve}=w;P.setupLightsView(ee),Jt===!0&&oe.setGlobalState(N.clippingPlanes,ee),X&&Ne.viewport(ue.copy(X)),q.length>0&&or(q,B,ee),Ie.length>0&&or(Ie,B,ee),Ve.length>0&&or(Ve,B,ee),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Cs(w,B,ee,X){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[X.id]===void 0){let Xe=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[X.id]=new mi(1,1,{generateMipmaps:!0,type:Xe?zi:ri,minFilter:vs,samples:Math.max(4,nn.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let Ie=P.state.transmissionRenderTarget[X.id],Ve=X.viewport||ue;Ie.setSize(Ve.z*N.transmissionResolutionScale,Ve.w*N.transmissionResolutionScale);let Pe=N.getRenderTarget(),Oe=N.getActiveCubeFace(),Ye=N.getActiveMipmapLevel();N.setRenderTarget(Ie),N.getClearColor(Y),pe=N.getClearAlpha(),pe<1&&N.setClearColor(16777215,.5),N.clear(),En&&U.render(ee);let rt=N.toneMapping;N.toneMapping=Qi;let wt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),P.setupLightsView(X),Jt===!0&&oe.setGlobalState(N.clippingPlanes,X),or(w,ee,X),ht.updateMultisampleRenderTarget(Ie),ht.updateRenderTargetMipmap(Ie),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let At=0,tn=B.length;At<tn;At++){let Zt=B[At],{object:Ot,geometry:ln,material:qe,group:Nn}=Zt;if(qe.side===An&&Ot.layers.test(X.layers)){let Xt=qe.side;qe.side=ni,qe.needsUpdate=!0,$t(Ot,ee,X,ln,qe,Nn),qe.side=Xt,qe.needsUpdate=!0,Xe=!0}}Xe===!0&&(ht.updateMultisampleRenderTarget(Ie),ht.updateRenderTargetMipmap(Ie))}N.setRenderTarget(Pe,Oe,Ye),N.setClearColor(Y,pe),wt!==void 0&&(X.viewport=wt),N.toneMapping=rt}function or(w,B,ee){let X=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Ie=w.length;q<Ie;q++){let Ve=w[q],{object:Pe,geometry:Oe,group:Ye}=Ve,rt=Ve.material;rt.allowOverride===!0&&X!==null&&(rt=X),Pe.layers.test(ee.layers)&&$t(Pe,B,ee,Oe,rt,Ye)}}function $t(w,B,ee,X,q,Ie){k!==null&&q.isNodeMaterial&&k.setObject(w,q),w.onBeforeRender(N,B,ee,X,q,Ie),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(N,B,ee,X,w,Ie),q.transparent===!0&&q.side===An&&q.forceSinglePass===!1?(q.side=ni,q.needsUpdate=!0,N.renderBufferDirect(ee,B,X,q,w,Ie),q.side=tr,q.needsUpdate=!0,N.renderBufferDirect(ee,B,X,q,w,Ie),q.side=An):N.renderBufferDirect(ee,B,X,q,w,Ie),w.onAfterRender(N,B,ee,X,q,Ie)}function ar(w){let B=0;for(let ee of w)ee.texture!==null&&B++;return B}function ii(w,B,ee){B.isScene!==!0&&(B=Nt);let X=ot.get(w),q=P.state.lights,Ie=P.state.shadowsArray,Ve=q.state.version,Pe=ce.getParameters(w,q.state,Ie,B,ee,P.state.lightProbeGridArray),Oe=ce.getProgramCacheKey(Pe),Ye=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=E.get(w.envMap||X.environment,rt),X.envMapRotation=X.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ye===void 0&&(w.addEventListener("dispose",Yt),Ye=new Map,X.programs=Ye,X.programVariants=new Map);let wt=Ye.get(Oe);if(wt!==void 0){if(X.currentProgram===wt&&X.lightsStateVersion===Ve)return pl(w,Pe),wt}else Pe.uniforms=ce.getUniforms(w),k!==null&&w.isNodeMaterial&&k.build(w,ee,Pe),w.onBeforeCompile(Pe,N),wt=ce.acquireProgram(Pe,Oe),Ye.set(Oe,wt),X.uniforms=Pe.uniforms;let Xe=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=oe.uniform),pl(w,Pe),X.needsLights=_l(w),X.lightsStateVersion=Ve,X.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.sunLights.value=q.state.sun,Xe.sunLightShadows.value=q.state.sunShadow,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.sunShadowMatrix.value=q.state.sunShadowMatrix,Xe.sunShadowCascade.value=q.state.sunShadowCascade,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),X.numLightProbeGrids=ar(P.state.lightProbeGridArray),X.currentProgram=wt,X.uniformsList=null,wt}function lr(w,B,ee,X,q){let Ie=ot.get(w),Ve=Ie.currentProgram.id+","+X+","+q,Pe=Ie.programVariants.get(Ve);return Pe===void 0?(Pe=ii(w,B,ee),Ie.programVariants.set(Ve,Pe)):(Ie.currentProgram=Pe,Ie.uniformsList=null,Ie.outputColorSpace=X,Ie.toneMapping=q),Pe}function $e(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Ho.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function pl(w,B){let ee=ot.get(w);ee.outputColorSpace=B.outputColorSpace,ee.batching=B.batching,ee.batchingColor=B.batchingColor,ee.instancing=B.instancing,ee.instancingColor=B.instancingColor,ee.instancingMorph=B.instancingMorph,ee.skinning=B.skinning,ee.morphTargets=B.morphTargets,ee.morphNormals=B.morphNormals,ee.morphColors=B.morphColors,ee.morphTargetsCount=B.morphTargetsCount,ee.numClippingPlanes=B.numClippingPlanes,ee.numIntersection=B.numClipIntersection,ee.vertexAlphas=B.vertexAlphas,ee.vertexTangents=B.vertexTangents,ee.toneMapping=B.toneMapping}function ml(w,B,ee,X,q){B.isScene!==!0&&(B=Nt),ht.resetTextureUnits();let Ie=B.fog,Ve=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,Pe=K===null?N.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:zt.workingColorSpace,Oe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ye=E.get(X.envMap||Ve,Oe),rt=X.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,wt=!!ee.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Xe=!!ee.morphAttributes.position,At=!!ee.morphAttributes.normal,tn=!!ee.morphAttributes.color,Zt=Qi;X.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Zt=N.toneMapping);let Ot=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ln=Ot!==void 0?Ot.length:0,qe=ot.get(X),Nn=P.state.lights;if(Jt===!0&&(ut===!0||w!==le)){let sn=w===le&&X.id===j;oe.setState(X,w,sn)}let Xt=!1,vi=!1;X.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==Nn.state.version||q.isBatchedMesh&&qe.batching===!1||!q.isBatchedMesh&&qe.batching===!0||q.isBatchedMesh&&qe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&qe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&qe.instancing===!1||!q.isInstancedMesh&&qe.instancing===!0||q.isSkinnedMesh&&qe.skinning===!1||!q.isSkinnedMesh&&qe.skinning===!0||q.isInstancedMesh&&qe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&qe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&qe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&qe.instancingMorph===!1&&q.morphTexture!==null||qe.envMap!==Ye||X.fog===!0&&qe.fog!==Ie||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==oe.numPlanes||qe.numIntersection!==oe.numIntersection)||qe.vertexAlphas!==rt||qe.vertexTangents!==wt||qe.morphTargets!==Xe||qe.morphNormals!==At||qe.morphColors!==tn||qe.morphTargetsCount!==ln||qe.numLightProbeGrids!==ar(P.state.lightProbeGridArray)?Xt=!0:(qe.outputColorSpace!==Pe||qe.toneMapping!==Zt)&&(vi=!0):(Xt=!0,qe.__version=X.version);let mn=qe.currentProgram;(Xt===!0||vi===!0)&&(mn=vi===!0?lr(X,B,q,Pe,Zt):ii(X,B,q),k&&X.isNodeMaterial&&k.onUpdateProgram(X,mn,qe));let Rs=!1,yi=!1,ns=!1,Bt=mn.getUniforms(),Rn=qe.uniforms;if(Ne.useProgram(mn.program)&&(Rs=!0,yi=!0,ns=!0),X.id!==j&&(j=X.id,yi=!0),Rs||le!==w){Ne.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Bt.setValue(G,"projectionMatrix",w.projectionMatrix),Bt.setValue(G,"viewMatrix",w.matrixWorldInverse);let Cn=Bt.map.cameraPosition;Cn!==void 0&&Cn.setValue(G,Tn.setFromMatrixPosition(w.matrixWorld)),nn.logarithmicDepthBuffer&&Bt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Bt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),le!==w&&(le=w,yi=!0,ns=!0)}if(qe.needsLights&&(Nn.state.sunShadowMap.length>0&&Bt.setValue(G,"sunShadowMap",Nn.state.sunShadowMap,ht),Nn.state.directionalShadowMap.length>0&&Bt.setValue(G,"directionalShadowMap",Nn.state.directionalShadowMap,ht),Nn.state.spotShadowMap.length>0&&Bt.setValue(G,"spotShadowMap",Nn.state.spotShadowMap,ht),Nn.state.pointShadowMap.length>0&&Bt.setValue(G,"pointShadowMap",Nn.state.pointShadowMap,ht)),q.isSkinnedMesh){Bt.setOptional(G,q,"bindMatrix"),Bt.setOptional(G,q,"bindMatrixInverse");let sn=q.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Bt.setValue(G,"boneTexture",sn.boneTexture,ht))}q.isBatchedMesh&&(Bt.setOptional(G,q,"batchingTexture"),Bt.setValue(G,"batchingTexture",q._matricesTexture,ht),Bt.setOptional(G,q,"batchingIdTexture"),Bt.setValue(G,"batchingIdTexture",q._indirectTexture,ht),Bt.setOptional(G,q,"batchingColorTexture"),q._colorsTexture!==null&&Bt.setValue(G,"batchingColorTexture",q._colorsTexture,ht));let xt=ee.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0)&&ae.update(q,ee,mn),(yi||qe.receiveShadow!==q.receiveShadow)&&(qe.receiveShadow=q.receiveShadow,Bt.setValue(G,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Rn.envMapIntensity.value=B.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=r1()),yi){if(Bt.setValue(G,"toneMappingExposure",N.toneMappingExposure),qe.needsLights&&gl(Rn,ns),Ie&&X.fog===!0&&ye.refreshFogUniforms(Rn,Ie),ye.refreshMaterialUniforms(Rn,X,de,He,P.state.transmissionRenderTarget[w.id]),qe.needsLights&&qe.numLightProbeGrids>0){let sn=A,Cn=0;for(let li of P.state.lightProbeGridArray)li.texture!==null&&(sn.textures[Cn]=li.texture,sn.min[Cn]=li.boundingBox.min,sn.max[Cn]=li.boundingBox.max,sn.resolution[Cn]=li.resolution,Cn++);for(let li in sn)sn[li].length=Cn;Rn.probesSH.value=sn.textures,Rn.probesMin.value=sn.min,Rn.probesMax.value=sn.max,Rn.probesResolution.value=sn.resolution}Ho.upload(G,$e(qe),Rn,ht)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ho.upload(G,$e(qe),Rn,ht),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Bt.setValue(G,"center",q.center),Bt.setValue(G,"modelViewMatrix",q.modelViewMatrix),Bt.setValue(G,"normalMatrix",q.normalMatrix),Bt.setValue(G,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let sn=X.uniformsGroups;for(let Cn=0,li=sn.length;Cn<li;Cn++){let du=sn[Cn];Ke.update(du,mn),Ke.bind(du,mn)}}return mn}function gl(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function _l(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,B,ee){let X=ot.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ot.get(w.texture).__webglTexture=B,ot.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:ee,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let ee=ot.get(w);ee.__webglFramebuffer=B,ee.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,ee=0){K=w,te=B,V=ee;let X=null,q=!1,Ie=!1;if(w){let Pe=ot.get(w);if(Pe.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(G.FRAMEBUFFER,Pe.__webglFramebuffer),ue.copy(w.viewport),Ge.copy(w.scissor),ct=w.scissorTest,Ne.viewport(ue),Ne.scissor(Ge),Ne.setScissorTest(ct),j=-1;return}else if(Pe.__webglFramebuffer===void 0)ht.setupRenderTarget(w);else if(Pe.__hasExternalTextures)ht.rebindTextures(w,ot.get(w.texture).__webglTexture,ot.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let rt=w.depthTexture;if(Pe.__boundDepthTexture!==rt){if(rt!==null&&ot.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(w)}}let Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ie=!0);let Ye=ot.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ye[B])?X=Ye[B][ee]:X=Ye[B],q=!0):w.samples>0&&ht.useMultisampledRTT(w)===!1?X=ot.get(w).__webglMultisampledFramebuffer:Array.isArray(Ye)?X=Ye[ee]:X=Ye,ue.copy(w.viewport),Ge.copy(w.scissor),ct=w.scissorTest}else ue.copy(_e).multiplyScalar(de).floor(),Ge.copy(at).multiplyScalar(de).floor(),ct=_t;if(ee!==0&&(X=Q),Ne.bindFramebuffer(G.FRAMEBUFFER,X)&&Ne.drawBuffers(w,X),Ne.viewport(ue),Ne.scissor(Ge),Ne.setScissorTest(ct),q){let Pe=ot.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,ee)}else if(Ie){let Pe=B;for(let Oe=0;Oe<w.textures.length;Oe++){let Ye=ot.get(w.textures[Oe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Oe,Ye.__webglTexture,ee,Pe)}}else if(w!==null&&ee!==0){let Pe=ot.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pe.__webglTexture,ee)}j=-1};function jo(w){let B=ot.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=nn.textureFormatReadable(w.format),B.__typeReadable=nn.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,ee,X,q,Ie,Ve,Pe=0){if(!(w&&w.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(Oe=Oe[Ve],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){Ne.bindFramebuffer(G.FRAMEBUFFER,Oe);try{let Ye=w.textures[Pe],rt=Ye.format,wt=Ye.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe);let Xe=jo(Ye);if(Xe.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-X&&ee>=0&&ee<=w.height-q&&G.readPixels(B,ee,X,q,be.convert(rt),be.convert(wt),Ie)}finally{let Ye=K!==null?ot.get(K).__webglFramebuffer:null;Ne.bindFramebuffer(G.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(w,B,ee,X,q,Ie,Ve,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(Oe=Oe[Ve],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(B>=0&&B<=w.width-X&&ee>=0&&ee<=w.height-q){Ne.bindFramebuffer(G.FRAMEBUFFER,Oe);let Ye=w.textures[Pe],rt=Ye.format,wt=Ye.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pe);let Xe=jo(Ye);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,At),G.bufferData(G.PIXEL_PACK_BUFFER,Ie.byteLength,G.STREAM_READ),G.readPixels(B,ee,X,q,be.convert(rt),be.convert(wt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let tn=K!==null?ot.get(K).__webglFramebuffer:null;Ne.bindFramebuffer(G.FRAMEBUFFER,tn);let Zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await X0(G,Zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,At),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ie),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(At),G.deleteSync(Zt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,ee=0){let X=Math.pow(2,-ee),q=Math.floor(w.image.width*X),Ie=Math.floor(w.image.height*X),Ve=B!==null?B.x:0,Pe=B!==null?B.y:0;ht.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,ee,0,0,Ve,Pe,q,Ie),Ne.unbindTexture()},this.copyTextureToTexture=function(w,B,ee=null,X=null,q=0,Ie=0){let Ve,Pe,Oe,Ye,rt,wt,Xe,At,tn,Zt=w.isCompressedTexture?w.mipmaps[Ie]:w.image;if(ee!==null)Ve=ee.max.x-ee.min.x,Pe=ee.max.y-ee.min.y,Oe=ee.isBox3?ee.max.z-ee.min.z:1,Ye=ee.min.x,rt=ee.min.y,wt=ee.isBox3?ee.min.z:0;else{let Bt=Math.pow(2,-q);Ve=Math.floor(Zt.width*Bt),Pe=Math.floor(Zt.height*Bt),w.isDataArrayTexture?Oe=Zt.depth:w.isData3DTexture?Oe=Math.floor(Zt.depth*Bt):Oe=1,Ye=0,rt=0,wt=0}X!==null?(Xe=X.x,At=X.y,tn=X.z):(Xe=0,At=0,tn=0);let Ot=be.convert(B.format),ln=be.convert(B.type),qe;B.isData3DTexture?(ht.setTexture3D(B,0),qe=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ht.setTexture2DArray(B,0),qe=G.TEXTURE_2D_ARRAY):(ht.setTexture2D(B,0),qe=G.TEXTURE_2D),Ne.activeTexture(G.TEXTURE0),Ne.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),Ne.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Ne.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);let Nn=Ne.getParameter(G.UNPACK_ROW_LENGTH),Xt=Ne.getParameter(G.UNPACK_IMAGE_HEIGHT),vi=Ne.getParameter(G.UNPACK_SKIP_PIXELS),mn=Ne.getParameter(G.UNPACK_SKIP_ROWS),Rs=Ne.getParameter(G.UNPACK_SKIP_IMAGES);Ne.pixelStorei(G.UNPACK_ROW_LENGTH,Zt.width),Ne.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Zt.height),Ne.pixelStorei(G.UNPACK_SKIP_PIXELS,Ye),Ne.pixelStorei(G.UNPACK_SKIP_ROWS,rt),Ne.pixelStorei(G.UNPACK_SKIP_IMAGES,wt);let yi=w.isDataArrayTexture||w.isData3DTexture,ns=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let Bt=ot.get(w),Rn=ot.get(B),xt=ot.get(Bt.__renderTarget),sn=ot.get(Rn.__renderTarget);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,xt.__webglFramebuffer),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let Cn=0;Cn<Oe;Cn++)yi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ot.get(w).__webglTexture,q,wt+Cn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ot.get(B).__webglTexture,Ie,tn+Cn)),G.blitFramebuffer(Ye,rt,Ye+Ve,rt+Pe,Xe,At,Xe+Ve,At+Pe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||ot.has(w)){let Bt=ot.get(w),Rn=ot.get(B);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,F),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,$);for(let xt=0;xt<Oe;xt++)yi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.__webglTexture,q,wt+xt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Bt.__webglTexture,q),ns?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Rn.__webglTexture,Ie,tn+xt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Rn.__webglTexture,Ie),q!==0?G.blitFramebuffer(Ye,rt,Ye+Ve,rt+Pe,Xe,At,Xe+Ve,At+Pe,G.COLOR_BUFFER_BIT,G.NEAREST):ns?G.copyTexSubImage3D(qe,Ie,Xe,At,tn+xt,Ye,rt,Ve,Pe):G.copyTexSubImage2D(qe,Ie,Xe,At,Ye,rt,Ve,Pe);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else ns?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(qe,Ie,Xe,At,tn,Ve,Pe,Oe,Ot,ln,Zt.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(qe,Ie,Xe,At,tn,Ve,Pe,Oe,Ot,Zt.data):G.texSubImage3D(qe,Ie,Xe,At,tn,Ve,Pe,Oe,Ot,ln,Zt):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ie,Xe,At,Ve,Pe,Ot,ln,Zt.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ie,Xe,At,Zt.width,Zt.height,Ot,Zt.data):G.texSubImage2D(G.TEXTURE_2D,Ie,Xe,At,Ve,Pe,Ot,ln,Zt);Ne.pixelStorei(G.UNPACK_ROW_LENGTH,Nn),Ne.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Xt),Ne.pixelStorei(G.UNPACK_SKIP_PIXELS,vi),Ne.pixelStorei(G.UNPACK_SKIP_ROWS,mn),Ne.pixelStorei(G.UNPACK_SKIP_IMAGES,Rs),Ie===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&G.generateMipmap(qe),Ne.unbindTexture()},this.initRenderTarget=function(w){ot.get(w).__webglFramebuffer===void 0&&ht.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ht.setTextureCube(w,0):w.isData3DTexture?ht.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ht.setTexture2DArray(w,0):ht.setTexture2D(w,0),Ne.unbindTexture()},this.resetState=function(){te=0,V=0,K=null,Ne.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}};function Pg({rInner:i,omega:e=1,reflections:t=10}){let n=Math.atan(Math.sqrt(4/(e*e)-1)),s=Math.asin(e/2),r=(f,u)=>f[0]*u[0]+f[1]*u[1];function o(f,u,h){let _=r(f,u),y=r(f,f)-h*h,g=_*_-y;if(g<0)return null;let m=[-_-Math.sqrt(g),-_+Math.sqrt(g)].filter(b=>b>1e-6);return m.length?Math.min(...m):null}function a(f,u){let h=Math.hypot(u[0],u[1]);u=[u[0]/h,u[1]/h];let _=[f];for(let y=0;y<t;y++){let g=o(f,u,1),m=o(f,u,i),b=m!==null&&m<g,L=b?m:g;f=[f[0]+L*u[0],f[1]+L*u[1]],_.push(f);let A=Math.hypot(f[0],f[1]),I=b?[f[0]/A,f[1]/A]:[-f[0]/A,-f[1]/A],P=[-I[1],I[0]],x=[[-u[0],u[1]],[u[0],-u[1]]].filter(C=>r(C,I)>1e-9);if(!x.length)break;u=x.find(C=>Math.sign(r(C,P))===Math.sign(r(u,P)))??x[0]}return _}let c=[],l=Math.cos(n),d=Math.sin(n);for(let f of[1,-1])for(let u of[1,-1]){let h=[f*i*Math.cos(s),u*i*Math.sin(s)],_=[-f*u*Math.sin(s),Math.cos(s)];c.push(a(h,_),a(h,[-_[0],-_[1]]));let y=[f*Math.cos(s),u*Math.sin(s)];for(let g of[[l,d],[l,-d],[-l,d],[-l,-d]]){let m=-r(g,y),b=Math.abs(g[0]*-y[1]+g[1]*y[0]);m>1e-6&&b<.999&&c.push(a(y,g))}}return c}function Ig({rInner:i=.1,rOuter:e=1,omega:t,N:n,starts:s,length:r=9,step:o=.004}){let a=(h,_,y)=>{let g=Math.hypot(_,y)||1e-9,m=n(g),b=Math.cos(h),L=Math.sin(h),A=b*(y/g)-L*(_/g);return 4*L*L+m*m*A*A-t*t},c=(h,_,y=180)=>{let g=[],m=0,b=a(0,h,_);for(let L=1;L<=y;L++){let A=Math.PI*L/y,I=a(A,h,_);if(b===0||b*I<0){let P=m,x=A,C=b;for(let N=0;N<30;N++){let z=(P+x)/2,k=a(z,h,_);C*k<=0?x=z:(P=z,C=k)}let O=(P+x)/2;g.push([-Math.sin(O),Math.cos(O)],[Math.sin(O),-Math.cos(O)])}m=A,b=I}return g},l=(h,_)=>h[0]*_[0]+h[1]*_[1],d=h=>{let _=Math.hypot(h[0],h[1]);return _<e&&_>i};function f(h,_){let y=[h.slice()];y.bends=new Set;let g=0,m=0;for(;g<r;){let b=[h[0]+o*_[0],h[1]+o*_[1]],L=d(b)?c(b[0],b[1]):[];if(L.length&&d(b)){let O=L[0];for(let N of L)l(N,_)>l(O,_)&&(O=N);if(l(O,_)>.6){h=b,_=O,g+=o,m+=o,m>.02&&(y.push(h.slice()),m=0);continue}}let A=c(h[0],h[1]),I=Math.hypot(h[0],h[1]),P=I>(i+e)/2?[-h[0]/I,-h[1]/I]:[h[0]/I,h[1]/I],x=[-P[1],P[0]],C=A.filter(O=>l(O,_)<.98).filter(O=>{let N=[h[0]+3*o*O[0],h[1]+3*o*O[1]];return d(N)&&c(N[0],N[1]).length});if(!C.length)break;C.sort((O,N)=>(Math.sign(l(N,x))===Math.sign(l(_,x)))-(Math.sign(l(O,x))===Math.sign(l(_,x)))||l(N,_)-l(O,_)),_=C[0],y.push(h.slice()),y.bends.add(y.length-1),m=0}return y.push(h.slice()),y}let u=[];for(let[h,_]of s){let y=Math.hypot(h,_),g=[h/y*e*.999,_/y*e*.999];for(let m of c(g[0],g[1]))l(m,g)<-.05&&u.push(f(g,m))}return u}var Lg=new T(0,1,0),o1=55*Math.PI/180,Fg=6;function qf(i,e,t,n,s=160){let r=[],o=null,a=.02;for(let c=0;c<=s;c++){let l=a+(Math.PI-2*a)*c/s,d=i*Math.sin(l)**2,f=d*Math.sin(l),u=-d*Math.cos(l)+e,h=Math.hypot(f,u);h>=t&&h<=n?(o||r.push(o=[]),o.push([f,u])):o=null}return r.filter(c=>c.length>2)}function Dg(i,e,t=1,n=!1){let s=[],r=[],o=[],a=[],c=[];for(let d of i){let f=0,u=0;for(let h=0;h<d.length-1;h++){d.bends?d.bends.has(h)&&u++:u=h;let[_,y]=d[h],[g,m]=d[h+1],b=Math.hypot(g-_,m-y);if(b===0)continue;let L=-(m-y)/b*e,A=(g-_)/b*e,I=s.length/3;for(let[P,x,C,O]of[[_+L,y+A,f,1],[_-L,y-A,f,-1],[g+L,m+A,f+b,1],[g-L,m-A,f+b,-1]])s.push(P*t,x*t,0),r.push(C),o.push(O),a.push(n?u:0);c.push(I,I+1,I+2,I+1,I+3,I+2),f+=b}}let l=new It;return l.setAttribute("position",new nt(s,3)),l.setAttribute("aAlong",new nt(r,1)),l.setAttribute("aSide",new nt(o,1)),l.setAttribute("aGen",new nt(a,1)),l.setIndex(c),l}var a1={vertexShader:`
    varying vec3 vPos;
    void main() {
      // in view space: world coordinates are too large for single precision far from the origin
      vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * vec4(vPos, 1.0);
    }`,fragmentShader:`
    #define MAX_LAYERS ${Fg}
    uniform float uRadius;
    uniform vec3 uCenter; // view space
    uniform float uTop[MAX_LAYERS];     // outer radius of each layer, innermost first
    uniform vec3 uLow[MAX_LAYERS];      // colour at the bottom of each layer
    uniform vec3 uHigh[MAX_LAYERS];     // colour at the top
    uniform int uCount;
    varying vec3 vPos;
    void main() {
      vec3 d = vPos - uCenter;
      float r = length(d) / uRadius;
      if (r > 1.0) discard;
      vec3 c = uHigh[0];
      float bottom = 0.0, line = 1.0;
      for (int i = 0; i < MAX_LAYERS; i++) {
        if (i >= uCount) break;
        float top = uTop[i];
        if (r <= top) { c = mix(uLow[i], uHigh[i], (r - bottom) / max(top - bottom, 1e-4)); break; }
        bottom = top;
      }
      for (int i = 0; i < MAX_LAYERS; i++) {
        if (i >= uCount - 1) break;
        line = min(line, smoothstep(0.0, 0.006, abs(r - uTop[i])));
      }
      gl_FragColor = vec4(c * mix(0.72, 1.0, line), 1.0); // thin lines between layers
    }`},Ng={vertexShader:`
    attribute float aAlong, aSide, aGen;
    varying float vAlong, vSide, vGen;
    void main() {
      vAlong = aAlong; vSide = aSide; vGen = aGen;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform float uTime, uOpacity, uSpeed;
    uniform vec3 uColor;
    varying float vAlong, vSide, vGen;
    void main() {
      float edge = pow(1.0 - abs(vSide), 1.6);
      float pulse = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(9.0 * vAlong - uSpeed * uTime), 4.0);
      float fade = pow(0.82, vGen);
      vec3 c = mix(uColor, vec3(1.0), pulse * 0.6);
      gl_FragColor = vec4(c * edge * pulse * fade * uOpacity, 1.0);
    }`},l1={vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D uMap;
    uniform float uTime, uOpacity, uPeriod, uDecades, uGain, uShow, uPolar, uRin, uFrames, uFrame;
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      vec2 p = vUv * 2.0 - 1.0;                     // in units of the texture's half-size (the outer wall, if polar)
      float r = length(p);
      float ph = 12.566370614 * uTime / uPeriod;    // 2\u03C9t, one period of the forcing every uPeriod seconds
      float w;
      if (uPolar > 0.5) {                           // a thin shell: colatitude across, radius from uRin to 1 up
        if (r > 1.0 || r < uRin) discard;
        // (a stack of uFrames frames, frame 0 at the bottom: two neighbours blended at uFrame)
        float u = acos(clamp(p.y / r, -1.0, 1.0)) / 3.14159265, v = clamp((r - uRin) / (1.0 - uRin), 0.02, 0.98);
        float f0 = floor(uFrame), f1 = min(f0 + 1.0, uFrames - 1.0), k = uFrame - f0;
        vec4 t0 = texture2D(uMap, vec2(u, (f0 + v) / uFrames)), t1 = texture2D(uMap, vec2(u, (f1 + v) / uFrames));
        float a0 = t0.r > 0.004 ? pow(10.0, uDecades * (t0.r - 1.0)) : 0.0, a1 = t1.r > 0.004 ? pow(10.0, uDecades * (t1.r - 1.0)) : 0.0;
        vec2 c0 = t0.gb * 2.0 - 1.0, c1 = t1.gb * 2.0 - 1.0;
        float w0 = a0 * sqrt(max(0.0, 1.0 + c0.x * cos(ph) - c0.y * sin(ph))), w1 = a1 * sqrt(max(0.0, 1.0 + c1.x * cos(ph) - c1.y * sin(ph)));
        w = mix(w0, w1, k);
      } else {
        vec4 t = texture2D(uMap, vec2(abs(p.x), 0.5 + 0.5 * p.y));
        if (t.a < 0.5 || r > 1.0) discard;
        float amp = t.r > 0.004 ? pow(10.0, uDecades * (t.r - 1.0)) : 0.0;
        vec2 c = t.gb * 2.0 - 1.0;
        w = amp * sqrt(max(0.0, 1.0 + c.x * cos(ph) - c.y * sin(ph)));
      }
      float g = clamp(1.0 + log(max(w * uGain, 1e-6)) / (2.302585 * uShow), 0.0, 1.0); // the top uShow decades
      g = g * g * (3.0 - 2.0 * g);
      vec3 col = mix(uColor, vec3(1.0), g * g * 0.55);
      gl_FragColor = vec4(col * g * uOpacity, 1.0);
    }`},c1={vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform float uTime, uOpacity;
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      float pulse = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(22.0 * vUv.x - 3.0 * uTime), 6.0);
      gl_FragColor = vec4(mix(uColor, vec3(1.0), pulse * 0.5) * pulse * uOpacity * 0.85, 1.0);
    }`},h1=`
  vec3 dirAt(float lat, float lon) { return vec3(cos(lat) * cos(lon), sin(lat), -cos(lat) * sin(lon)); }
  float blob(vec3 p, float lat, float lon, float size) { vec3 d = p - dirAt(radians(lat), radians(lon)); return exp(-dot(d, d) / size); }
  float psi(vec3 p, float t) {
    float lat = asin(clamp(p.y, -1.0, 1.0));
    float lon = atan(-p.z, p.x);
    float w = -40.0 + 10.0 * sin(0.11 * t);
    float s = 0.9 * (blob(p, 35.0, w, 0.5) + blob(p, -35.0, w, 0.5));
    s -= 0.6 * (blob(p, 30.0, 120.0, 0.4) + blob(p, -30.0, 120.0, 0.4));
    for (int i = 0; i < 6; i++) {
      float fi = float(i);
      float la = (mod(fi, 2.0) < 1.0 ? 1.0 : -1.0) * (20.0 + 8.0 * sin(fi * 1.7));
      s += (mod(fi, 3.0) < 1.5 ? 0.35 : -0.35) * blob(p, la, fi * 60.0 - 8.0 * t, 0.06);
    }
    s += 0.18 * exp(-pow(lat / 0.3, 2.0)) * cos(6.0 * lon + 0.9 * t);
    return s;
  }`;function Ug([i,e,t],n){let s=(d,f)=>[Math.cos(d)*Math.cos(f),Math.sin(d),-Math.cos(d)*Math.sin(f)],r=(d,f,u)=>{let h=s(d*Math.PI/180,f*Math.PI/180);return Math.exp(-((i-h[0])**2+(e-h[1])**2+(t-h[2])**2)/u)},o=Math.asin(Math.max(-1,Math.min(1,e))),a=Math.atan2(-t,i),c=-40+10*Math.sin(.11*n),l=.9*(r(35,c,.5)+r(-35,c,.5));l-=.6*(r(30,120,.4)+r(-30,120,.4));for(let d=0;d<6;d++){let f=(d%2<1?1:-1)*(20+8*Math.sin(d*1.7));l+=(d%3<1.5?.35:-.35)*r(f,d*60-8*n,.06)}return l+=.18*Math.exp(-((o/.3)**2))*Math.cos(6*a+.9*n),l}function u1(i,e,t){let s=r=>[Math.cos(r)*Math.cos(e),Math.sin(r),-Math.cos(r)*Math.sin(e)];return-(Ug(s(i+.01),t)-Ug(s(i-.01),t))/(2*.01)}var d1={vertexShader:`
    varying vec3 vDir, vNormal;
    void main() {
      vDir = normalize(position);
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform float uTime, uOpacity;
    varying vec3 vDir, vNormal;
    ${h1}

    float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
    float noise(vec3 x) {
      vec3 i = floor(x), f = fract(x);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                 mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
    }
    // noise stretched along the flow, so its features look like streaks
    float streaks(vec3 q, vec3 dir) { return noise((q - dir * dot(q, dir) * 0.75) * 9.0); }

    void main() {
      vec3 p = normalize(vDir);
      float t = uTime;
      vec3 east = normalize(cross(vec3(0.0, 1.0, 0.0), p) + vec3(1e-5, 0.0, 0.0));
      vec3 north = cross(p, east);
      const float h = 0.01;
      float gE = (psi(normalize(p + h * east), t) - psi(normalize(p - h * east), t)) / (2.0 * h);
      float gN = (psi(normalize(p + h * north), t) - psi(normalize(p - h * north), t)) / (2.0 * h);
      vec3 u = gE * north - gN * east; // u = r\u0302 \xD7 \u2207\u03C8
      float ue = -gN;                   // eastward component
      vec3 dir = length(u) > 1e-4 ? normalize(u) : east;

      // two layers of streaks carried along the flow, cross-faded so they never jump
      float ph0 = fract(t * 0.25), ph1 = fract(t * 0.25 + 0.5);
      float n0 = streaks(p - u * ph0 * 0.6, dir), n1 = streaks(p - u * ph1 * 0.6, dir);
      float n = mix(n0, n1, abs(2.0 * ph0 - 1.0));

      float v = clamp(ue * 0.9, -1.0, 1.0);
      vec3 slate = vec3(0.20, 0.25, 0.33), amber = vec3(0.96, 0.62, 0.04), teal = vec3(0.18, 0.83, 0.75);
      vec3 c = v > 0.0 ? mix(slate, amber, pow(v, 0.7)) : mix(slate, teal, pow(-v, 0.7));
      c *= 0.55 + 0.9 * pow(n, 2.5) * (0.4 + 0.6 * min(1.0, length(u)));
      // streamlines: contours of \u03C8
      float f = fract(psi(p, t) * 6.0);
      c += 0.18 * (1.0 - smoothstep(0.0, 0.05, min(f, 1.0 - f)));
      float light = 0.7 + 0.3 * max(dot(vNormal, normalize(vec3(-0.4, 0.5, 0.8))), 0.0);
      gl_FragColor = vec4(c * light, uOpacity);
    }`},f1={vertexShader:`
    uniform float uShiftS, uShiftN;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      float s = uv.x; // 0 at the southern footpoint, 1 at the northern one
      float d = uShiftS * pow(1.0 - s, 2.0) + uShiftN * pow(s, 2.0);
      vec3 q = position;
      q.xz = vec2(q.x * cos(d) + q.z * sin(d), q.z * cos(d) - q.x * sin(d)); // turn eastward by d about the axis
      gl_Position = projectionMatrix * modelViewMatrix * vec4(q, 1.0);
    }`,fragmentShader:`
    uniform float uTime, uOpacity;
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      float pulse = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(26.0 * vUv.x - 3.0 * uTime), 6.0);
      gl_FragColor = vec4(mix(uColor, vec3(1.0), pulse * 0.5) * pulse * uOpacity * 0.9, 1.0);
    }`},ol={transparent:!0,blending:yn,depthWrite:!1};function Ss(i){let{loader:e,textures:t,radius:n}=i,s=i.center.clone(),r=new Ut,o=new pi(new T(0,0,-1),1e6),a=new Ut;r.add(a);let c=(Y,pe=!0)=>{let Me=e.load(t+Y);return pe&&(Me.colorSpace=xn),Me.anisotropy=4,Me},l=i.maps,d=new st(new zn(n,192,96),new Wt({map:c(l.map),normalMap:l.normal?c(l.normal,!1):null,bumpMap:l.bump?c(l.bump,!1):null,bumpScale:l.bumpScale??1,specularMap:l.specular?c(l.specular,!1):null,specular:new Be(l.specular?3815994:1118481),shininess:l.specular?22:4,emissiveMap:l.night?c(l.night):null,emissive:new Be(l.night?16767392:0),clippingPlanes:[o],transparent:!0}));a.add(d);let f={uSunView:{value:new T(1,0,0)}};l.night&&(d.material.onBeforeCompile=Y=>{Object.assign(Y.uniforms,f),Y.fragmentShader=Y.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSunView;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          totalEmissiveRadiance *= smoothstep(0.12, -0.18, dot(normal, uSunView));`)});let u=null;l.clouds&&(u=new st(new zn(n*1.006,192,96),new Wt({color:16777215,alphaMap:c(l.clouds,!1),transparent:!0,depthWrite:!1,shininess:2,clippingPlanes:[o]})),d.add(u));let h=new wi({color:16777215,transparent:!0,opacity:0,depthWrite:!1});a.add(new st(new ti(n*.012,n*.012,n*3.1,8),h));let _=i.wobble,y=(Y,pe=new T)=>{if(!_)return pe.copy(i.axis?.lengthSq()>.5?i.axis:Lg);let Me=_.obliquity*Math.PI/180,He=_.nutation*Math.PI/180,de=Me+He*Math.cos(_.nods*Y),Le=Y+He/Math.sin(Me)*Math.sin(_.nods*Y);return pe.set(Math.sin(de)*Math.cos(Le),Math.cos(de),-Math.sin(de)*Math.sin(Le))},g,m;if(_){g=new In(new It().setFromPoints([new T(0,-1.6*n,0),new T(0,1.6*n,0)]),new Sn({color:8952234,transparent:!0,opacity:0})),r.add(g);let Y=[];for(let pe=0;pe<=900;pe++)Y.push(y(pe/900*Math.PI*2).multiplyScalar(n*1.55));m=new In(new It().setFromPoints(Y),new Sn({color:12576511,transparent:!0,opacity:0})),r.add(m)}let b=new Ut;r.add(b);let L=i.layers,A=(Y,pe)=>[...Y,...Array(Fg-Y.length).fill(pe)],I={uCenter:{value:s.clone()},uRadius:{value:n},uTop:{value:A(L.map(Y=>Y.top),1)},uLow:{value:A(L.map(Y=>new Be(Y.low)),new Be)},uHigh:{value:A(L.map(Y=>new Be(Y.high)),new Be)},uCount:{value:L.length}};b.add(new st(new Ba(n*1.5,128),new cn({...a1,uniforms:I})));let P=(Array.isArray(i.waves)?i.waves:i.waves?[i.waves]:[]).map(({inner:Y,outer:pe,omega:Me,paths:He,color:de=[.75,.95,1],speed:Le=2.6,width:Mt=.011,texture:_e,rmax:at=1,decades:_t=2.5,period:Ue=4,gain:Vt=1,show:Jt=1.3,rin:ut=0,frames:Lt=1},Tn)=>{if(_e){let En=new cn({...l1,...ol,uniforms:{uMap:{value:c(_e,!1)},uTime:{value:0},uOpacity:{value:0},uPeriod:{value:Ue},uDecades:{value:_t},uGain:{value:Vt},uShow:{value:Jt},uPolar:{value:ut>0?1:0},uRin:{value:ut/at},uFrames:{value:Lt},uFrame:{value:0},uColor:{value:new Be(...de)}}}),wn=new st(new Ir(2*at*n,2*at*n),En);return wn.position.z=n*(.004+5e-4*Tn),b.add(wn),En}let qt=new cn({...Ng,...ol,uniforms:{uTime:{value:0},uOpacity:{value:0},uSpeed:{value:Le},uColor:{value:new Be(...de)}}}),Nt=new st(Dg(He??Pg({rInner:Y/pe,omega:Me}),Mt,pe,!0),qt);return Nt.scale.setScalar(n),Nt.position.z=n*(.004+5e-4*Tn),b.add(Nt),qt}),x=i.field,C=new Be(.45,.78,1),O=new cn({...Ng,...ol,uniforms:{uTime:{value:0},uOpacity:{value:0},uSpeed:{value:2.6},uColor:{value:C}}}),N=new cn({...c1,...ol,uniforms:{uTime:{value:0},uOpacity:{value:0},uColor:{value:C}}}),z=new Ut;if(a.add(z),x){let Y=x.coreTop,pe=[];for(let de of[...x.inner??[],...x.shells])for(let Le of qf(de,x.offset,Y,1))pe.push(Le,Le.map(([Mt,_e])=>[-Mt,_e]));let Me=new st(Dg(pe,.006),O);Me.scale.setScalar(n),Me.position.z=n*.005,b.add(Me);let He=x.azimuths??10;for(let de of x.shells)for(let Le of qf(de,x.offset,1,1/0,180))for(let Mt=0;Mt<He;Mt++){let _e=Mt/He*Math.PI*2+de,at=Le.map(([_t,Ue])=>new T(_t*Math.cos(_e)*n,Ue*n,_t*Math.sin(_e)*n));z.add(new st(new js(new xs(at),90,n*.007,5,!1),N))}}let k,Q,F=[];if(i.coreField){Q=new cn({...d1,uniforms:{uTime:{value:0},uOpacity:{value:0}},transparent:!0}),k=new st(new zn(n*i.coreField,128,64),Q),k.renderOrder=-1,d.add(k);let Y=n*i.coreField,pe=5;[1.25,1.6,2.1,2.8].forEach((Me,He)=>{let[de]=qf(Me,0,1,1/0,160);for(let Le=0;Le<pe;Le++){let Mt=(Le+.5*(He%2))/pe*Math.PI*2,_e=de.map(([Lt,Tn])=>new T(Lt*Math.cos(Mt)*Y,Tn*Y,-Lt*Math.sin(Mt)*Y)),at=new cn({...f1,...ol,uniforms:{uTime:{value:0},uOpacity:{value:0},uColor:{value:new Be(.6,.85,1)},uShiftS:{value:0},uShiftN:{value:0}}}),_t=new st(new js(new xs(_e),140,n*.0045,5,!1),at),[Ue,Vt]=de[0],[Jt,ut]=de[de.length-1];F.push({mesh:_t,mat:at,phi:Mt,latS:Math.atan2(Vt,Ue),latN:Math.atan2(ut,Jt),shiftS:0,shiftN:0}),k.add(_t)}})}let $=.6,te=0,V=new T,K=new T,j=new T,le=new Dt,ue=new yt;function Ge(Y){s.copy(Y)}function ct({dt:Y,time:pe,camera:Me,wobble:He=0,cut:de=0,waves:Le=0,cutTurn:Mt=o1,field:_e=0,core:at=0,animate:_t,spinAngle:Ue,scale:Vt=1,stretch:Jt=1}){let ut=n*Vt;_t&&(_&&($+=Y*Math.PI*2/_.seconds*He),te+=Y*(i.spinRate??.35)),a.position.copy(s),I.uCenter.value.copy(s).applyMatrix4(Me.matrixWorldInverse),a.scale.setScalar(Vt),b.scale.setScalar(Vt),I.uRadius.value=ut,y($,V),ue.setFromUnitVectors(Lg,V),a.quaternion.copy(ue),d.rotation.y=Ue??te,d.scale.set(Jt,1,1),h.opacity=.9*Math.max(He,de*.6),_&&(g.position.copy(s),m.position.copy(s),m.material.opacity=.8*He,g.material.opacity=.5*He),K.copy(Me.position).sub(s),K.addScaledVector(V,-K.dot(V)).normalize(),K.applyAxisAngle(V,Mt);let Lt=(1-de)*ut;o.normal.copy(K).negate(),o.constant=de>.001?K.dot(s)+Lt:1e6,b.visible=de>.001,j.crossVectors(V,K).normalize(),le.makeBasis(j,V,K),b.quaternion.setFromRotationMatrix(le),b.position.copy(s).addScaledVector(K,Lt);for(let qt of[...P,O,N])qt.uniforms.uTime.value=pe;P.forEach((qt,Nt)=>qt.uniforms.uOpacity.value=(Array.isArray(Le)?Le[Nt]??0:Le)*de);let Tn=x?.strength??1;if(O.uniforms.uOpacity.value=_e*de*Tn,N.uniforms.uOpacity.value=_e*Tn,z.visible=_e>.001,i.sunDir&&f.uSunView.value.copy(i.sunDir).transformDirection(Me.matrixWorldInverse),u&&(_t&&(u.rotation.y+=Y*.012),u.material.opacity=.95*(1-at),u.visible=at<.99),k){d.material.opacity=1-.88*at,d.material.depthWrite=at<.01,k.visible=at>.001,Q.uniforms.uOpacity.value=Math.min(1,at*1.5);let qt=pe*.6;Q.uniforms.uTime.value=qt;for(let Nt of F){if(Nt.mesh.visible=at>.001,_t&&at>.001){let En=(wn,G)=>.5*u1(wn,Nt.phi+G,qt)/Math.max(Math.cos(wn),.2);Nt.shiftS+=Y*.6*(En(Nt.latS,Nt.shiftS)-.25*Nt.shiftS),Nt.shiftN+=Y*.6*(En(Nt.latN,Nt.shiftN)-.25*Nt.shiftN)}Nt.mat.uniforms.uShiftS.value=Nt.shiftS,Nt.mat.uniforms.uShiftN.value=Nt.shiftN,Nt.mat.uniforms.uTime.value=pe,Nt.mat.uniforms.uOpacity.value=.7*at}}}return{root:r,surface:d,update:ct,setCenter:Ge,center:s,clip:o,layerColors:I,waveMaterials:P}}function p1(){let i=document.createElement("canvas");i.width=256,i.height=184;let e=i.getContext("2d");e.fillStyle="#c9ccd1",e.fillRect(0,0,i.width,i.height);let t=14,n=10,s=6,r=2,o=(i.width-2*s-(t-1)*r)/t,a=(i.height-2*s-(n-1)*r)/n;for(let l=0;l<t;l++)for(let d=0;d<n;d++){let f=22+Math.random()*10;e.fillStyle=`hsl(226 55% ${f}%)`,e.fillRect(s+l*(o+r),s+d*(a+r),o,a)}let c=new gi(i);return c.colorSpace=xn,c.anisotropy=4,c}function m1(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#b8862b",e.fillRect(0,0,256,256);for(let n=0;n<900;n++){let s=Math.random()*256,r=Math.random()*256,o=4+Math.random()*18;e.fillStyle=`hsla(${38+Math.random()*8} ${60+Math.random()*25}% ${40+Math.random()*30}% / 0.35)`,e.beginPath(),e.moveTo(s,r),e.lineTo(s+o,r+o*(Math.random()-.5)),e.lineTo(s+o*(Math.random()-.5),r+o),e.fill()}let t=new gi(i);return t.colorSpace=xn,t}function Xo(i,e,t,n){let s=new T().subVectors(e,i),r=new st(new ti(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.copy(new yt().setFromUnitVectors(new T(0,1,0),s.normalize())),r}function Og(){let i=new Ut,e=(A,I,P)=>new T(A,I,P),t=new Wt({map:m1(),shininess:60,specular:new Be(8939042)}),n=new Wt({color:15263972,shininess:20}),s=new Wt({color:10133672,shininess:50,specular:new Be(7829367)}),r=new Wt({color:2763310,shininess:10}),o=new Wt({map:p1(),shininess:70,specular:new Be(4478327)}),a=new Wt({color:7040885,shininess:10}),c=2.86,l=4.35,d=4.09;i.add(new st(new ei(c,l,d),t));for(let A of[-1,1]){let I=new Ut;i.add(I);let P=c/2;I.add(Xo(e(A*P,0,0),e(A*(P+1.3),0,0),.06,s));let x=3.5,C=2.5,O=.05,N=(k,Q)=>{let F=new Ut,$=new st(new ei(x,C,O),[a,a,a,a,o,a]);F.add($),F.position.set(A*k,Q,0),I.add(F)},z=P+1.3+x/2;for(let k=0;k<3;k++)N(z+k*(x+.08),0);N(z+x+.08,C+.08),N(z+x+.08,-(C+.08)),I.rotation.x=-.35}let f=1.25,u=.38,h=[];for(let A=0;A<=16;A++){let I=A/16*f;h.push(new ke(I,u*I*I/(f*f)))}let _=new st(new Pr(h,48),new Wt({color:15921902,shininess:30,side:An}));_.rotation.x=Math.PI/2,_.position.set(0,.4,d/2+.25),i.add(_);let y=e(0,.4,d/2+.25+f*f/(4*u)*.9);for(let A=0;A<3;A++){let I=A/3*Math.PI*2;i.add(Xo(e(Math.cos(I)*f*.95,.4+Math.sin(I)*f*.95,d/2+.25+u),y,.02,n))}let g=new st(new Rr(.12,.3,12),n);g.rotation.x=-Math.PI/2,g.position.copy(y),i.add(g),i.add(Xo(e(0,l/2+.25,-8),e(0,l/2+.25,8),.035,n)),i.add(Xo(e(0,l/2,0),e(0,l/2+.25,0),.08,s));let m=e(-c/2,-l/2+.5,-d/2),b=m.clone().add(e(-.35,-.25,-1).normalize().multiplyScalar(10.6));i.add(Xo(m,b,.04,s));for(let A of[.55,.8,1]){let I=new st(new ei(.18,.18,.18),n);I.position.lerpVectors(m,b,A),i.add(I)}for(let[A,I,P]of[[1,1,1],[-1,1,-1],[1,-1,-1],[-1,-1,1]]){let x=e(A*c/2,I*l/2,P*d/2),C=x.clone().add(e(A*.7,I*.5,P*.5).normalize().multiplyScalar(3));i.add(Xo(x,C,.015,s));let O=new st(new zn(.05,10,8),r);O.position.copy(C),i.add(O)}let L=new st(new ti(.18,.42,.8,24,1,!0),new Wt({color:5987683,shininess:40,side:An}));return L.position.y=-l/2-.4,i.add(L),i}var qo=13.6;function Zf(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new gi(n);return s.colorSpace=xn,s.anisotropy=8,s}var Bg=()=>Zf(256,200,(i,e,t)=>{i.fillStyle="#b9bec6",i.fillRect(0,0,e,t);let n=6,s=16,r=(t-2*n)/s;for(let o=0;o<s;o++){let a=n+o*r;if(o%2===0)for(let c=n;c<e-n;c+=14)i.fillStyle=`hsl(222 50% ${18+Math.random()*8}%)`,i.fillRect(c,a+1,12,r-2);else i.fillStyle=`hsl(210 12% ${74+Math.random()*10}%)`,i.fillRect(n,a+1,e-2*n,r-2)}}),Yf=(i,e)=>Zf(256,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s);for(let r=0;r<700;r++){t.fillStyle=e(Math.random());let o=Math.random()*n,a=Math.random()*s,c=3+Math.random()*14;t.beginPath(),t.moveTo(o,a),t.lineTo(o+c,a+c*(Math.random()-.5)),t.lineTo(o+c*(Math.random()-.5),a+c),t.fill()}t.strokeStyle="rgba(0,0,0,0.12)";for(let r=1;r<4;r++)t.beginPath(),t.moveTo(r*n/4,0),t.lineTo(r*n/4,s),t.stroke()}),g1=()=>Zf(256,256,(i,e,t)=>{i.fillStyle="#d9dde2",i.fillRect(0,0,e,t),i.strokeStyle="#aab1ba";for(let n=0;n<e;n+=16)i.beginPath(),i.moveTo(n,0),i.lineTo(n,t),i.stroke();i.fillStyle="#c3c9d0";for(let n=24;n<t;n+=48)i.fillRect(0,n,e,4)});function lu(i,e,t,n){let s=new T().subVectors(e,i),r=new st(new ti(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.copy(new yt().setFromUnitVectors(new T(0,1,0),s.normalize())),r}function zg(){let i=(V,K,j)=>new T(V,K,j),e=new Wt({map:Bg(),shininess:70,specular:new Be(5596791)}),t=new Wt({color:5593439,shininess:8}),n=new Wt({map:Yf("#8c8f95",V=>`hsla(${30+V*20} 20% ${45+V*35}% / 0.35)`),shininess:40,specular:new Be(4473924)}),s=new Wt({map:Yf("#d8d2c4",V=>`hsla(40 18% ${70+V*20}% / 0.35)`),shininess:12}),r=new Wt({map:Yf("#eceae4",V=>`hsla(45 10% ${80+V*15}% / 0.3)`),shininess:10,side:An}),o=new Wt({color:10133672,shininess:60,specular:new Be(7829367)}),a=new Wt({color:2369067,shininess:20}),c=(V,K)=>new st(new ei(V,K,.05),[t,t,t,t,e,t]),l=new Ut,d=2.3,f=new st(new ei(3.9,d,3.6),n);f.position.y=d/2,l.add(f);let u=new st(new ti(1.1,1.3,.35,32,1,!0),new Wt({color:7304315,side:An,shininess:30}));u.position.y=-.17,l.add(u);let h=[];for(let[V,K]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){let j=new st(new ti(.16,.2,.3,20),a);j.position.set(V,-.1,K),l.add(j),h.push(j.position)}let _=new wi({color:7183615,transparent:!0,opacity:0,blending:yn,depthWrite:!1}),y=new Ut;for(let V of h.slice(0,2)){let K=new st(new Rr(.4,4,24,1,!0),_);K.rotation.x=Math.PI,K.position.set(V.x,-2.2,V.z),y.add(K)}l.add(y);for(let V of[-1,1]){let K=new Ut;K.add(lu(i(V*1.95,d/2,0),i(V*3.2,d/2,0),.06,o));for(let j=0;j<5;j++){let le=c(2.25,1.85);le.position.set(V*(3.2+1.15+j*2.3),d/2,0),K.add(le)}K.rotation.x=-.55,l.add(K)}let g=new Ut,m=d,b=1.7,L=new st(new ei(2.4,b,2.2),s);L.position.y=m+b/2,g.add(L);let A=new st(new ei(3.7,2.6,.06),new Wt({map:g1(),shininess:50}));A.position.set(0,m+1.2,-1.2),g.add(A);let I=new Ut;I.add(lu(i(0,m+b/2,1.1),i(0,m+b/2,2),.05,o));for(let V=0;V<3;V++){let K=c(1.6,1.85);K.rotation.y=Math.PI/2,K.position.set(0,m+b/2,2+.95+V*1.9),I.add(K)}I.rotation.z=.35,g.add(I);let P=.5,x=.14,C=[];for(let V=0;V<=12;V++){let K=V/12*P;C.push(new ke(K,x*K*K/(P*P)))}let O=new st(new Pr(C,36),new Wt({color:16052972,side:An,shininess:30}));O.position.set(1.9,m+b+.25,.5),O.rotation.z=-.9,g.add(O),g.add(lu(i(1.2,m+b-.2,.5),O.position,.04,o));let N=new Ut,z=m+b,k=2.3,Q=new st(new ti(1.25,1.6,k,8,1,!0),r);Q.position.y=z+k/2,N.add(Q);for(let V=0;V<8;V++){let K=V/8*Math.PI*2+Math.PI/8;N.add(lu(i(Math.cos(K)*1.6,z,Math.sin(K)*1.6),i(Math.cos(K)*1.25,z+k,Math.sin(K)*1.25),.03,o))}let F=new st(new ti(.97,.97,.9,8),[new Wt({map:Bg(),shininess:60}),new Wt({color:3816772,shininess:30}),a]);F.position.y=z+k-.55,N.add(F);let $=new Ut;$.add(g,N);let te=new Ut;te.add(l,$);for(let V of[l,$])V.position.y-=3.1;return{group:te,mtm:l,update({separation:V=0,thrust:K=1,time:j=0}){_.opacity=.07*K*(V>0?0:1)*(.9+.1*Math.sin(j*17)),y.visible=_.opacity>.005;let le=50*V;l.position.set(0,-3.1-le,0),l.rotation.set(.5*V,0,.2*V)}}}var Yo=15;var kn=(i,e,t)=>new T(i,e,t),Qt=kn(0,1,0),Ft=2/6371,jf=1496e5*Ft,Mn=Ft/1e3,Kf=(i,e)=>i.clone().applyAxisAngle(Qt,e*Math.PI/180),on={center:kn(0,0,0),radius:2},uu=kn(-40,0,62).normalize(),hl={center:new T,radius:1737.4*Ft},Je={center:uu.clone().multiplyScalar(jf),radius:695700*Ft},Qf=uu.clone().negate(),kt={center:Je.center.clone().addScaledVector(Kf(Qf,70),7785e5*Ft),radius:69911*Ft},fn={center:Je.center.clone().addScaledVector(Kf(Qf,110),14335e5*Ft),radius:58232*Ft},ul=new Ui(.25,0,-26.7*Math.PI/180),kg=16,Gi=30,xi=30,bs=[{name:"io",orbit:421700*Ft,radius:1821.6*Ft,period:1.769},{name:"europa",orbit:671034*Ft,radius:1560.8*Ft,period:3.551},{name:"ganymede",orbit:1070412*Ft,radius:2634.1*Ft,period:7.155},{name:"callisto",orbit:1882709*Ft,radius:2410.3*Ft,period:16.689}],_1=6,oi=(()=>{let i=Qt.clone().applyEuler(ul),e=Je.center.clone().sub(fn.center).normalize(),t=e.addScaledVector(i,-e.dot(i)).normalize();return{center:fn.center.clone().addScaledVector(t,238042*Ft),radius:252.1*Ft}})(),ai={a:5791e4*Ft,e:.2056,secondsPerOrbit:9},rr=on.center.clone().sub(Je.center).setY(0).normalize(),Hg=new T().crossVectors(Qt,rr).normalize(),Vn={radius:2439.7*Ft,enlarge:1200,home:Je.center.clone().addScaledVector(rr,ai.a*(1-ai.e))},x1=Math.atan2(-rr.z,rr.x);function Vg(i,e=new T){let t=i;for(let r=0;r<8;r++)t-=(t-ai.e*Math.sin(t)-i)/(1-ai.e*Math.cos(t));let n=ai.a*(Math.cos(t)-ai.e),s=ai.a*Math.sqrt(1-ai.e**2)*Math.sin(t);return e.copy(Je.center).addScaledVector(rr,n).addScaledVector(Hg,s)}var Zo=(i,e,t)=>Vn.home.clone().addScaledVector(rr,-i).addScaledVector(Hg,e).addScaledVector(Qt,t),Gg=Je.center.clone().addScaledVector(rr,-ai.a*ai.e),bt={},ws=new T(0,1,0),al=()=>({}),Br=oi.radius/.6;function Jo(i,e,t){let n=f=>{let u=new T().crossVectors(f,Qt).normalize();return[f,new T().crossVectors(u,f),u]},[s,r,o]=n(kn(9,2,-8).normalize()),[a,c,l]=n(fn.center.clone().sub(oi.center).normalize()),d=kn(i,e,t);return oi.center.clone().addScaledVector(a,d.dot(s)*Br).addScaledVector(c,d.dot(r)*Br).addScaledVector(l,d.dot(o)*Br)}var bn=(()=>{let i=Qt.clone().applyEuler(ul),e=Je.center.clone().sub(fn.center).normalize(),t=e.clone().addScaledVector(i,-e.dot(i)).normalize().applyAxisAngle(i,.55),n=new T().crossVectors(i,t).normalize(),s=fn.radius,r=fn.center.clone().addScaledVector(n,4*s),o=fn.center.clone().addScaledVector(n,1.9*s);return{n:i,side:n,flat:t,jupiterAt:r,pos:o.clone().addScaledVector(t,9.2*s).addScaledVector(i,1.9*s),look:o}})(),Vi={center:bn.jupiterAt.clone(),radius:1.005*kt.radius},Ts={earth:{pos:kn(1.5,1.2,9.5),look:on.center,shift:2.4},wobble:{pos:kn(.8,8.5,9.5),look:kn(0,1.2,0),shift:2.8},cut:{pos:kn(1.2,.6,8),look:on.center,shift:2.2},waves:{pos:kn(.6,.3,6.6),look:on.center,shift:1.8},field:{pos:kn(3,2.6,14.5),look:on.center,shift:3.8},core:{pos:kn(-1.2,2.2,6.2),look:on.center,shift:1.7},mercury:{pos:Zo(3.6,-1.5,.9),look:Vn.home,shift:1.1,narrowBack:.85},"mercury-layer":{pos:Zo(3.6,-1.5,.9),look:Vn.home,shift:1.1,narrowBack:.85},"mercury-strong":{pos:Zo(3.6,-1.5,.9),look:Vn.home,shift:1.1,narrowBack:.85},"mercury-map":{pos:Zo(4.4,-1.8,1.1),look:Vn.home,shift:1.3,narrowBack:.9},"mercury-fields":{pos:Zo(6.2,-2.5,1.6),look:Vn.home,shift:1.9,narrowBack:.9},"mercury-probes":{pos:Zo(5.2,-2.1,1.3),look:Vn.home,shift:1.5,narrowBack:.9},"mercury-orbit":{pos:Gg.clone().add(kn(0,100*(ai.a/26),0)).addScaledVector(rr,22*(ai.a/26)),look:Gg,shift:20*(ai.a/26)},sun:{pos:Je.center.clone().addScaledVector(kn(24,6,-20),Je.radius/9),look:Je.center,shift:7*Je.radius/9},end:{pos:Je.center.clone().addScaledVector(kn(24,6,-20),1.3*Je.radius/9),look:Je.center,shift:1.3*7*Je.radius/9},jupiter:(()=>{let i=Je.center.clone().sub(kt.center).normalize(),e=new T().crossVectors(i,Qt).normalize(),t=kt.center.clone().addScaledVector(i,760).addScaledVector(Qt,430).addScaledVector(e,-170),n={pos:t,look:kt.center};return{pos:t,look:kt.center,shift:230,narrowBack:1.3,follow:()=>bt.jupiter?bt.jupiter(n):n}})(),"juice-cruise":{follow:()=>bt.juiceRide(),shift:9*Mn*xi,narrowBack:1.2},juice:{follow:()=>bt.juiceDown?bt.juiceDown():bt.juice(),shift:9*Mn*xi,narrowBack:1.25},"juice-map":{follow:()=>bt.juiceMap(),shift:.5*2634*Ft,narrowBack:1.2},"juice-gravity":{follow:()=>bt.juiceMap(),shift:.5*2634*Ft,narrowBack:1.2},"juice-field":{follow:()=>bt.juiceField(),shift:1.2*2634*Ft,narrowBack:1.2},ganymede:{follow:()=>bt.juiceMap(),shift:.5*2634*Ft,narrowBack:1.2},"ganymede-ocean":{follow:()=>bt.ganymedeOcean(),narrowBack:1.2},"ganymede-field":{follow:()=>bt.ganymedeSurface(),narrowBack:1.2},"juice-tour":{follow:()=>bt.tourTop(),narrowBack:1.35},"ocean-worlds":{follow:()=>bt.row(),shift:0,narrowBack:1.45},"ocean-depth":{follow:()=>bt.row(),shift:0,narrowBack:1.45},"ocean-probes":{follow:()=>bt.probe(),shift:.55*2634*Ft,narrowBack:1.3},launch:{follow:()=>bt.launch,shift:4.6,narrowBack:1.15},bepi:{follow:()=>bt.bepi(),shift:9*Mn*Gi,narrowBack:1.2},arrival:{follow:()=>bt.arrival,shift:3,narrowBack:1.25},enceladus:{pos:Jo(-3,.7,4),look:Jo(2.5,.4,-2.5),shift:0},"enceladus-intro":{pos:Jo(-.3,-2,3.3),look:oi.center.clone().addScaledVector(Qt.clone().applyEuler(ul),-1.3*oi.radius),shift:1.2*Br,narrowBack:.95},"enceladus-ocean":{pos:Jo(1.4,.45,2.85),look:oi.center,shift:1.1*Br,narrowBack:.95},"enceladus-resonance":{pos:Jo(.9,.4,3.05),look:oi.center,shift:1.1*Br,narrowBack:.95},"enceladus-return":{pos:Jo(1.9,.75,4.1),look:oi.center,shift:1.5*Br,narrowBack:.95},"saturn-modes":{pos:bn.pos,look:bn.look,shift:2.4*fn.radius,narrowBack:1.1},locking:{pos:bn.jupiterAt.clone().addScaledVector(bn.flat,62*kt.radius).addScaledVector(bn.n,27*kt.radius),look:bn.jupiterAt,shift:14*kt.radius,narrowBack:1.2},exo:{pos:bn.jupiterAt.clone().addScaledVector(bn.flat,62*kt.radius).addScaledVector(bn.n,27*kt.radius),look:bn.jupiterAt,shift:14*kt.radius,narrowBack:1.2}};{let i=Ts.earth.pos,e=Ts.earth.look.clone().sub(i).normalize(),t=new T().crossVectors(e,Qt).normalize(),n=new T().crossVectors(t,e),o=Ts.earth.look.clone().addScaledVector(t,-Ts.earth.shift).sub(i).normalize().addScaledVector(n,.3).addScaledVector(t,-.12).normalize(),a=i.dot(o),c=384400*Ft;hl.center.copy(i).addScaledVector(o,-a+Math.sqrt(a*a-i.lengthSq()+c*c))}var v1={wobble:{eWobble:1},cut:{eCut:1},waves:{eCut:1,eWaves:1},field:{eCut:1,eField:1},core:{eCore:1},mercury:{mCut:1,mWaves:1,mField:1,mLibration:1},"mercury-layer":{mCut:1,mWaves:1,mLibration:1,mStrat:1},"mercury-strong":{mCut:1,mWaves:1,mLibration:1,mStrat:1,mStrong:1},"mercury-probes":{mCut:1,mProbe:1},"mercury-map":{bMap:1},"mercury-fields":{bMap:1,bGrav:1,mField:1},"mercury-orbit":{mOrbit:1},jupiter:{jOrbits:1},juice:{jJuice:1},"juice-map":{gMap:1},ganymede:{gMap:1,gCover:1},"ganymede-ocean":{gOcean:1},"ganymede-field":{gOcean:1,gInduced:1},"juice-tour":{jOrbits:1},"juice-gravity":{gMap:1,gGrav:1},"juice-field":{gMap:1,gField:1},"ocean-worlds":{gRow:1,gCover:1},"ocean-depth":{gRow:1,gDepth:1,gCover:1},"ocean-probes":{gRow:1,gDepth:1,gProbe:1},arrival:{bOrbit:1},enceladus:{nPlume:1},"enceladus-intro":{nPlume:1},"enceladus-ocean":{nPlume:1,nCut:1,nWaves:1},"enceladus-resonance":{nPlume:1,nCut:1,nWaves:1,nHeat:1},"enceladus-return":{nPlume:1},"saturn-modes":{sCut:1,sWaves:1},locking:{sCut:1,sWaves:1,lLock:1},exo:{sCut:1,sWaves:1,lLock:1,xMorph:1},sun:{sunCut:1},end:{sunCut:1}},Jf=["eWobble","eCut","eWaves","eField","eCore","mCut","mWaves","mField","mLibration","mOrbit","nCut","nWaves","nHeat","nPlume","jOrbits","xMap","jJuice","bOrbit","gMap","gGrav","gField","gRow","gDepth","gProbe","mProbe","bMap","bGrav","gCover","sCut","sWaves","mStrat","mStrong","gOcean","gInduced","lLock","sunCut","starOn","xMorph"],cu=[{top:1221/6371,low:"#fff2c4",high:"#facc14"},{top:3480/6371,low:"#fa7317",high:"#fa913d"},{top:.985,low:"#9e1c1c",high:"#d94d1a"},{top:1,low:"#575450",high:"#575450"}],hu=60;var As=[{top:.77,low:"#3f342b",high:"#6b5a4a"},{top:.92,low:"#0c3a66",high:"#1f6fae"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}],$f={europa:[{top:600/1561,low:"#7a3f22",high:"#b0602f"},{top:1436/1561,low:"#3f342b",high:"#6b5a4a"},{top:1536/1561,low:"#1258a8",high:"#3d95e6"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}],ganymede:[{top:700/2634,low:"#7a3f22",high:"#b0602f"},{top:1780/2634,low:"#3f342b",high:"#6b5a4a"},{top:2384/2634,low:"#6b7180",high:"#9aa1ae"},{top:2484/2634,low:"#1258a8",high:"#3d95e6"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}],callisto:[{top:600/2410,low:"#5a3f2c",high:"#80603f"},{top:2185/2410,low:"#4a4640",high:"#6e685f"},{top:2310/2410,low:"#1258a8",high:"#3d95e6"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}]},ll=[{top:.33,low:"#fff2c4",high:"#facc14"},{top:.7*2020/2440,low:"#fa7317",high:"#fa913d"},{top:2020/2440,low:"#b45309",high:"#c2560f"},{top:.985,low:"#5c4a3d",high:"#7d6a5a"},{top:1,low:"#8a8580",high:"#8a8580"}],Hi=document.querySelector(".journey-canvas"),sr=[...document.querySelectorAll(".journey-step[data-stop]")];Hi&&sr.length&&y1()?S1():document.documentElement.classList.add("no-webgl");function y1(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function cl(i,e){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,i),s.addColorStop(.35,e),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,256,256);let r=new gi(t);return r.colorSpace=xn,r}function M1(i){let e=new Ha,t=new Map,n=new Map,s=new Map,r=f=>/^(earth|moon)/.test(f)?"earth":/^mercury/.test(f)?"mercury":/^sun/.test(f)?"sun":/^(jupiter|io|europa|ganymede|callisto)/.test(f)?"jupiter":"saturn",o=f=>/normal|spec|bump|kore/.test(f),a=f=>{let u=document.createElement("canvas");u.width=u.height=1;let h=u.getContext("2d");return h.fillStyle=f?"rgb(128,128,255)":"rgb(46,46,50)",h.fillRect(0,0,1,1),u};function c(f){if(f=f.replace(/\.(jpg|png)(#|$)/,".webp$2"),t.has(f))return t.get(f).t;let u=new Bn(a(/normal/.test(f)));u.needsUpdate=!0,!o(f)&&!/clouds/.test(f)&&(u.colorSpace=xn),u.anisotropy=d.anisotropy;let h={t:u,file:f.split("#")[0],level:0,preview:!o(f)};t.set(f,h);let _=r(f);return n.has(_)||n.set(_,[]),n.get(_).push(h),u}function l(f,u){let h=f+u;if(!s.has(h)){let _=(n.get(f)??[]).filter(y=>y.level<u&&(u===2||y.preview));s.set(h,Promise.all(_.map(y=>new Promise(g=>e.load(i+(u===1?y.file.replace(".webp",".lo.webp"):y.file),m=>{y.level<u&&(y.t.dispose(),y.t.image=m.image,y.t.needsUpdate=!0,y.level=u,d.uploaded?.(y.t)),g()},void 0,g)))))}return s.get(h)}let d={get:c,load:l,anisotropy:8,loader:{load:f=>c(f.slice(i.length))}};return d}function S1(){let i=matchMedia("(prefers-reduced-motion: reduce)").matches,e=1,t=[],n=!1,s=new T,r=new ru({canvas:Hi,antialias:!0,reversedDepthBuffer:!0}),o=Math.min(devicePixelRatio,2),a=o;r.setPixelRatio(a);let c=Hi.dataset.textures,l=M1(c),d=l.get,f=l.loader;l.anisotropy=r.capabilities.getMaxAnisotropy(),r.localClippingEnabled=!0,r.setClearColor(263434);let u=new Ia,h=new qn(45,1,.1,1e8);u.add(new Ya(16777215,.22));let _=new qa(16774368,3,0,0);_.position.copy(Je.center),u.add(_);let y=600,g=[],m=[];for(let p=0;p<y;p++)g.push(kn(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize().multiplyScalar(300+Math.random()*500)),m.push(.3+Math.random()*.7);let b=new It;b.setAttribute("position",new nt(new Float32Array(y*6),3));{let p=new Float32Array(y*6);for(let v=0;v<y;v++)p.set([.85,.92,1,0,0,0],v*6);b.setAttribute("color",new nt(p,3))}let L=new Fo(b,new Sn({vertexColors:!0,blending:yn,depthWrite:!1}));L.renderOrder=-1,L.frustumCulled=!1,u.add(L);function A(){if(L.visible=Fs>.01,I.material.color.setScalar(1-.35*Fs),!L.visible)return;L.position.copy(h.position),L.scale.copy(I.scale),L.material.color.setScalar(.6*Fs);let p=b.attributes.position;for(let v=0;v<y;v++){let M=g[v],R=220*m[v]*Fs;p.setXYZ(2*v,M.x,M.y,M.z),p.setXYZ(2*v+1,M.x-Os.x*R,M.y-Os.y*R,M.z-Os.z*R)}p.needsUpdate=!0}let I;{let p=[],v=[];for(let R=0;R<5e3;R++){let D=kn(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();D.multiplyScalar(300+Math.random()*500),p.push(D.x,D.y,D.z);let H=new Be().setHSL(.58+(Math.random()-.5)*.25,.4,.75+Math.random()*.25);v.push(H.r,H.g,H.b)}let M=new It;M.setAttribute("position",new nt(p,3)),M.setAttribute("color",new nt(v,3)),I=new $s(M,new Cr({size:1.6,sizeAttenuation:!1,vertexColors:!0,depthWrite:!1})),I.renderOrder=-1,I.frustumCulled=!1,u.add(I)}let P=[],x=p=>new zn(p,96,48),C=Ss({loader:f,textures:c,center:on.center,radius:on.radius,maps:{map:"earthday4k.webp",bump:"earthbump4k.webp",bumpScale:2.2,specular:"earthspec4k.webp",clouds:"earthclouds2k.webp",night:"earthnight4k.webp"},sunDir:uu,layers:cu,waves:{texture:"kore-earth.webp",rmax:cu[1].top,color:[.75,.95,1],period:5,gain:2.2,show:1.5},field:{shells:[1.35,1.8,2.5,3.4],inner:[.8],offset:0,coreTop:cu[1].top},wobble:{obliquity:23.4,nutation:2.5,nods:11,seconds:16},coreField:cu[1].top,spinRate:.35});u.add(C.root);let O=new cn({uniforms:{uSun:{value:new T},uOpacity:{value:1}},vertexShader:`
      varying vec3 vNormal, vView;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uSun; // view space
      uniform float uOpacity;
      varying vec3 vNormal, vView;
      void main() {
        float rim = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.6);
        float day = smoothstep(-0.25, 0.45, dot(vNormal, uSun));
        gl_FragColor = vec4(vec3(0.38, 0.62, 1.0) * rim * day * 1.4 * uOpacity, 1.0);
      }`,blending:yn,transparent:!0,depthWrite:!1}),N=new st(new zn(on.radius*1.025,96,48),O);N.position.copy(on.center),u.add(N);let z=new st(new zn(hl.radius,96,48),new Wt({map:d("moonmap2k.jpg"),normalMap:d("moonnormal2k.jpg"),shininess:4}));z.position.copy(hl.center),u.add(z);let k=Ss({loader:f,textures:c,center:Vn.home,radius:Vn.radius,maps:{map:"mercurymap.jpg",normal:"mercurynormal.jpg"},layers:ll,waves:[{texture:"kore-mercury-neutral.webp",rmax:ll[2].top,color:[1,.9,.7],period:5,gain:1.6,show:1.4},{texture:"kore-mercury-mid.webp",rmax:ll[2].top,color:[1,.9,.7],period:5,gain:1.6,show:1.4},{texture:"kore-mercury-strat.webp",rmax:ll[2].top,color:[1,.9,.7],period:5,gain:1.6,show:1.4}],field:{shells:[1.5,2.1],offset:.2,coreTop:ll[2].top,strength:.55,azimuths:8},spinRate:.05});u.add(k.root);let Q=[];for(let p=0;p<=256;p++)Vg(p/256*Math.PI*2,Q[p]=new T);let F=new In(new It().setFromPoints(Q),new Sn({color:10530496,transparent:!0,opacity:0}));u.add(F);let $={orbits:document.querySelector("[data-orbits]"),spins:document.querySelector("[data-spins]")},te=new st(x(Je.radius),new wi({map:d("sunmap.jpg")}));te.position.copy(Je.center),u.add(te),P.push([te,.02]);let V=new gs(new Ki({map:cl("rgba(255,214,140,0.9)","rgba(255,140,40,0.35)"),blending:yn,depthWrite:!1}));V.scale.setScalar(Je.radius*4.2),V.position.copy(Je.center),u.add(V);let K=new Ut;K.position.copy(kt.center),K.rotation.z=3.1*Math.PI/180,u.add(K);let j=new st(x(kt.radius),new Wt({map:d("jupitermap.jpg"),shininess:4}));K.add(j),P.push([j,.12]);let le=d("moonnormal2k.jpg#detail");le.wrapS=le.wrapT=qs,le.repeat.set(10,5);let ue={io:Math.PI,europa:0,ganymede:0,callisto:2.2},Ge=bs.map(p=>{let v=new st(new zn(p.radius,p.name==="ganymede"?384:96,p.name==="ganymede"?192:48),new Wt({map:d(`${p.name}.jpg`),normalMap:le,normalScale:new ke(.45,.45),shininess:8}));K.add(v);let M=[];for(let D=0;D<=192;D++){let H=D/192*Math.PI*2;M.push(new T(Math.cos(H)*p.orbit,0,-Math.sin(H)*p.orbit))}let R=new In(new It().setFromPoints(M),new Sn({color:10530496,transparent:!0,opacity:0}));return K.add(R),{...p,mesh:v,line:R,phase:ue[p.name]}}),ct=[],Y=(p,v)=>{let M=[];for(let R=0;R<=256;R++){let D=R/256*Math.PI*2;M.push(p.clone().add(kn(Math.cos(D)*v,0,Math.sin(D)*v)))}return M},pe=(p,v)=>Je.center.clone().addScaledVector(Kf(Qf,p),v*jf),Me={venus:pe(-40,.723),mars:pe(30,1.524),uranus:pe(165,19.19),neptune:pe(230,30.07)};for(let p of[Me.venus,on.center,Me.mars,kt.center,fn.center,Me.uranus,Me.neptune]){let v=new In(new It().setFromPoints(Y(Je.center,p.distanceTo(Je.center))),new Sn({color:10530496,transparent:!0,opacity:0}));u.add(v),ct.push(v)}let He=[[null,"#b8b0a8"],[Me.venus,"#e8d3a2"],[on.center,"#60a5fa"],[Me.mars,"#d0754a"],[kt.center,"#e3c9a0"],[fn.center,"#f0dca0"],[Me.uranus,"#a5e0e6"],[Me.neptune,"#5b7fe0"]],de=new $s(new It().setAttribute("position",new nt(new Float32Array(3*He.length),3)).setAttribute("color",new nt(He.flatMap(([,p])=>new Be(p).toArray()),3)),new Cr({size:7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1}));de.frustumCulled=!1,u.add(de);let Le=Ge.find(p=>p.name==="ganymede"),Mt=null,_e=Og();_e.scale.setScalar(Mn*xi),u.add(_e);let at=Rn(),_t=()=>1+(kg-1)*he.jOrbits,Ue=new T,Vt=new T,Jt=new T,ut=new T,Lt=new T,Tn=new T,qt=new Dt;function Nt(){K.updateMatrixWorld(!0),Le.mesh.getWorldPosition(Ue),Vt.copy(Je.center).sub(Ue).normalize(),Jt.copy(kt.center).sub(Ue).normalize(),ut.copy(Qt).addScaledVector(Vt,.6).normalize(),Lt.copy(Jt).addScaledVector(ut,-Jt.dot(ut)).normalize(),Tn.crossVectors(Lt,ut)}function En(p,v){let M=Le.radius*_t()+(500+(E?5500:19500)*(1-p)**1.5)*Ft,R=Math.PI*3*(1-p);return v.copy(Ue).addScaledVector(ut,M*Math.cos(R)).addScaledVector(Lt,M*Math.sin(R))}let wn=2*Math.PI*Math.sqrt((2634.1+500)**3/9887.8)/3600,G=7.1546*24,Jn=2*Math.PI*wn/G,jt=["juice-map","juice-gravity","juice-field"],nn=24,Ne=.75,pn=new T,ot=new T;function ht(p,v){K.updateMatrixWorld(),pn.set(0,1,0).applyQuaternion(K.getWorldQuaternion(new yt)),ot.copy(pn).addScaledVector(ut,-pn.dot(ut)).normalize();let M=Le.radius*_t()+500*Ft,R=Math.PI*2*p;return v.copy(Ue).addScaledVector(ut,M*Math.cos(R)).addScaledVector(ot,M*Math.sin(R))}let E=null,S=new Ut;K.add(S);let W=p=>p*p*(3-2*p);fetch(`${c}juice-tour.json`).then(p=>p.ok?p.json():Promise.reject(p.status)).then(({data:p})=>{let v=Uint8Array.from(atob(p),Se=>Se.charCodeAt(0)).buffer,M=new Float64Array(v,0,16),[R,D,H,Z]=M,ie=new Float32Array(v,128,R*3),me=new Int16Array(v,128+R*12,4*D);K.updateMatrixWorld(!0);let se=K.worldToLocal(Je.center.clone()),ge=Math.atan2(-se.z,se.x)-Math.atan2(-M[14],M[12]);S.rotation.y=ge;let xe=71492,Ae=new Float64Array(R),Qe=new Float32Array(R),tt=new Float32Array(R);for(let Se=0;Se<R;Se++)tt[Se]=Math.hypot(ie[3*Se],ie[3*Se+1],ie[3*Se+2])/xe;for(let Se=1;Se<R;Se++)Ae[Se]=Ae[Se-1]+Math.max(tt[Se],12)**-.75;for(let Se=0;Se<R;Se++)Ae[Se]/=Ae[R-1];for(let Se=0;Se<R;Se++){let dt=0;for(let Ht=Math.max(0,Se-120);Ht<=Math.min(R-1,Se+120);Ht++)dt=Math.max(dt,tt[Ht]);Qe[Se]=dt}for(let Se=1;Se<R;Se++)Qe[Se]+=(Qe[Se-1]-Qe[Se])*(1-1/240);for(let Se=R-2;Se>=0;Se--)Qe[Se]+=(Qe[Se+1]-Qe[Se])*(1-1/240);let gt=new It,et=4,Ct=(R-1)*et+1,Rt=new Float32Array(Ct*3),Te=(Se,dt)=>ie[3*Math.min(Math.max(Se,0),R-1)+dt];for(let Se=0;Se<Ct;Se++){let dt=Math.min(Math.floor(Se/et),R-2),Ht=Se/et-dt;for(let rn=0;rn<3;rn++)Rt[3*Se+rn]=ne(Te(dt-1,rn),Te(dt,rn),Te(dt+1,rn),Te(dt+2,rn),Ht)*Ft}gt.setAttribute("position",new nt(Rt,3)),gt.setAttribute("color",new nt(new Float32Array(Ct*3),3));let we=new In(gt,new Sn({vertexColors:!0,transparent:!0,blending:yn,depthWrite:!1}));we.frustumCulled=!1,we.visible=!1,S.add(we),E={K:R,L:D,step:H,jd0:Z,fits:[...M.slice(4,12)],pos:ie,res:me,cum:Ae,reach:Qe,delta:ge,trace:we,SUB:et,shown:-1},Vl=!0;let Ze=0;for(;Ze<R-1&&tt[Ze]>45;)Ze++;E.rideEnd=Ae[Ze],E.rideEndDay=Ze*H;let Tt=Ze,Gt=1/0;for(let Se=Ze;Se<Math.min(R,Ze+400);Se++){let dt=ce(2,Se)-ge,Ht=Math.cos(dt)*1070400,rn=-Math.sin(dt)*1070400,un=Math.hypot(ie[3*Se]-Ht,ie[3*Se+1],ie[3*Se+2]-rn);un<Gt&&(Gt=un,Tt=Se)}E.flyby=Ae[Tt]}).catch(()=>{});function fe(p){let{cum:v,K:M}=E;p=J.clamp(p,0,1);let R=0,D=M-1;for(;D-R>1;){let H=R+D>>1;v[H]<=p?R=H:D=H}return R+(p-v[R])/Math.max(v[D]-v[R],1e-12)}function ce(p,v){let{fits:M,res:R,L:D,step:H}=E,Z=J.clamp(v/4,0,D-1),ie=Math.min(Math.floor(Z),D-2),me=Z-ie;return M[2*p]+M[2*p+1]*v*H+1e-6*(R[p*D+ie]*(1-me)+R[p*D+ie+1]*me)+E.delta}let ye=null,De=p=>ye?1-J.smoothstep(Math.abs(p-ye.s0),0,.08):0,re=14,oe=!1,Ce=130,U=p=>ce(p,E.K-1)-Math.PI*2*re*(bs[0].period/bs[p].period)*(1-ar/Ce),ae=(p,v,M)=>oe?U(p):ce(p,v)+(ye?ye.phase[p]*De(M):0),ne=(p,v,M,R,D)=>v+.5*D*(M-p+D*(2*p-5*v+4*M-R+D*(3*(v-M)+R-p))),Ee=new T,be=new T,Re=new T;function Ke(p,v){let M=p.length();return M>1.2*v?p.multiplyScalar(1.2*v/M):p}function St(p,v){let{pos:M,K:R}=E,D=fe(p),H=Math.min(Math.floor(D),R-2),Z=D-H,ie=(se,ge)=>M[3*J.clamp(se,0,R-1)+ge];Ee.set(...[0,1,2].map(se=>ne(ie(H-1,se),ie(H,se),ie(H+1,se),ie(H+2,se),Z)*Ft)),Ee.applyAxisAngle(Qt,E.delta);let me=J.smoothstep(D,R-241,R-41);if(me>0){let se=Le.orbit,ge=ce(2,D),xe=ae(2,D,p);be.set(Math.cos(ge)*se,0,-Math.sin(ge)*se),Re.set(Math.cos(xe)*se,0,-Math.sin(xe)*se),Ee.addScaledVector(Re.sub(be),me)}return v.copy(Ee).applyMatrix4(K.matrixWorld)}function ve(p){return new Date((E.jd0+p*E.step-24405875e-1)*864e5).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}let it=Math.atan2(-(Je.center.z-kt.center.z),Je.center.x-kt.center.x)+1.05,vt=3,Fe=850,Yt=new T;function an(p,v){if(E)return St(p,v);let M=Le.orbit,R=M+(Fe-M)*(1-p)**1.6,D=J.lerp(.68*M,M,J.smoothstep(p,.55,1)),H=Math.PI+Math.PI*2*vt*p,Z=2*R*D/(R+D+(R-D)*Math.cos(H)),ie=it+H-(Math.PI+Math.PI*2*vt);return Yt.set(Math.cos(ie)*Z,0,-Math.sin(ie)*Z),v.copy(Yt).applyMatrix4(K.matrixWorld),v.lerp(En(0,new T),J.smoothstep(p,.9,1))}let Wi=Math.atan2(kt.center.z-Je.center.z,kt.center.x-Je.center.x),zr={r:2.4*jf,angle:Wi-.9},$o=Math.hypot(kt.center.x-Je.center.x,kt.center.z-Je.center.z);function Es(p,v){let M=zr.r*($o/zr.r)**p,R=zr.angle+.9*p;return v.set(Je.center.x+M*Math.cos(R),0,Je.center.z+M*Math.sin(R))}let Xi=.85;function dl(p,v){if(E){let xe=Es(0,new T),Ae=an(0,new T),Qe=xe.distanceTo(Ae),tt=Es(1e-4,new T).sub(xe).normalize().multiplyScalar(Qe*.9),gt=an(1e-5,new T).sub(Ae).normalize().multiplyScalar(Qe*.9);return ur(xe,tt,Ae,gt,p,v)}if(p<Xi)return Es(p,v);let M=Es(Xi,new T),R=Es(Xi+1e-4,new T).sub(Es(Xi-1e-4,new T)).multiplyScalar((1-Xi)/2e-4),D=an(0,new T),H=(p-Xi)/(1-Xi);if(!E){let xe=an(1e-4,new T).sub(an(0,new T)).normalize().multiplyScalar(M.distanceTo(D)*.6);return ur(M,R,D,xe,H,v)}let Z=.8,ie=45e6*Ft,me=an(1e-5,new T).sub(D).normalize(),se=D.clone().addScaledVector(me,-ie);if(H>=Z)return v.copy(se).lerp(D,(H-Z)/(1-Z));let ge=ie/(1-Z);return Ke(R.multiplyScalar(Z),M.distanceTo(se)),ur(M,R,se,me.multiplyScalar(ge*Z),H/Z,v)}function Gn(p,v){return p<=1?dl(Math.max(p,0),v):p<=2?an(p-1,v):p<=3?En(p-2,v):ht(p-3,v)}let kr=.78,fl=.62,Cs=.7,or=.75;al=()=>({bepi:[Cn,!0],"juice-cruise":[kr,!0],...E?{jupiter:[Cs,!1],juice:[or,!1]}:{},...Object.fromEntries(jt.map(p=>[p,[Ne,!1]]))});let $t=0,ar=0,ii=0,lr=0,$e=null;function pl(p){if($e)return $e.clock;let v=We.indexOf("jupiter"),M=We.indexOf("juice");return v<0||M<0?0:J.clamp((p-v)/(M-v)/fl,0,1)}function ml(p){let v=We.indexOf("jupiter"),M=We.indexOf("juice"),R=1+E.rideEnd,D=1+E.flyby;return p<M?J.lerp(R,D,W(J.clamp((p-v)/(M-v)/Cs,0,1))):p<_l()?2+W(J.clamp((p-M)/or,0,1)):3+q(p)}let gl=()=>Math.max(Ie(),We.indexOf("ocean-depth"),We.indexOf("ocean-probes")),_l=()=>{let p=We.indexOf(jt[0]);return p>=0?p:We.indexOf("juice")+1};function jo(p){let v=We.indexOf("juice-cruise"),M=We.indexOf("jupiter");return!E||v<0||p<v-.3||p>gl()+.6?-1:p<M?Math.max(0,$t-1):Math.min(ml(Math.min(p,We.indexOf("juice")-1e-6))-1,E.flyby)}function w(p){Nt();let v=We.indexOf("juice-tour"),M=E&&v>=0?1-J.smoothstep(Math.abs(p-v),.2,.55):0;if(M>.001){$t=1+ii,Gn($t,_e.position),_e.visible=!0;let Te=_e.position.clone(),we=$t;t.push(()=>at.draw(Te,Gn,we,1e-5,M,qo*Mn*xi,1));let{SUB:Ze}=E,Tt=fe(ii),Gt=Math.min(Math.ceil(Tt*Ze)+1,(E.K-1)*Ze+1);E.trace.visible=Gt>1,E.trace.geometry.setDrawRange(0,Gt);let Se=E.trace.geometry.attributes.color;for(let dt=0;dt<Gt;dt++){let Ht=M*(.05+.95*Math.exp(-(Tt-dt/Ze)/400));Se.setXYZ(dt,.32*Ht,.42*Ht,.55*Ht)}Se.needsUpdate=!0;return}if(We.includes("ganymede")){$t=3+lr,Gn($t,_e.position);let Te=Je.center.clone().sub(_e.position).normalize(),we=new T().crossVectors(ut,Te).normalize(),Ze=new T().crossVectors(Te,we);_e.quaternion.setFromRotationMatrix(qt.makeBasis(we,Ze,Te));let Tt=he.gMap;_e.visible=Tt>.001;let Gt=_e.position.clone(),Se=$t;t.push(()=>{_e.scale.setScalar(Mn*xi),at.draw(Gt,Gn,Se,E?Math.min(.08,$t-2):.3,Tt,qo*Mn*xi,1)}),E&&(E.trace.visible=!1);return}let R=We.indexOf("juice-cruise"),D=We.indexOf("jupiter"),H=We.indexOf("juice");if(R<0||D<0||H<0)return;let Z=1+(E?.rideEnd??0);if(p<D)$t=W(J.clamp((p-R)/kr,0,1))*Z;else if($e)$t=1+$e.clock;else if(E&&p<_l())$t=ml(p);else if(p<H){let Te=(p-D)/(H-D);$t=Te<.06?Z:2+W((Te-.06)/.94)}else $t=3+q(p);Gn($t,_e.position);let ie=Je.center.clone().sub(_e.position).normalize(),me=new T().crossVectors(ut,ie).normalize(),se=new T().crossVectors(ie,me);_e.quaternion.setFromRotationMatrix(qt.makeBasis(me,se,ie));let ge=$e||E?0:(()=>{let Te=(p-D)/(H-D);return J.smoothstep(Te,0,.05)*(1-J.smoothstep(Te,.3,.5))})(),xe=Ie(),Ae=E&&!$e?(()=>{let Te=(p-D)/(H-D);return J.smoothstep(Te,Cs+.02,Cs+.12)*(1-J.smoothstep(p,H+.005,H+.08))})():0,Qe=J.smoothstep(p,R-.7,R-.5)*(1-J.smoothstep(p,xe+.1,xe+.5))*(1-ge)*(1-Ae);_e.visible=Qe>.001;let tt=$t<=1?.035:$t<=2?E?$e?.008:.02:.22:E?Math.min(.08,$t-2):.3,gt=1+.8*he.jOrbits,et=E?1:$t>3?J.smoothstep($t,3.02,3.1):1-J.smoothstep($t,2.8,2.97),Ct=_e.position.clone(),Rt=$t;if(t.push(()=>{let Te=am(Ct);_e.scale.setScalar(Mn*xi*Te),at.draw(Ct,Gn,Rt,tt,Qe*et,qo*Mn*xi*Te,gt)}),E){let Te=$e?he.jOrbits*Qe*$e.ramp*J.smoothstep($t,1,1.002):0;if(E.trace.visible=Te>.002,E.trace.visible){let{SUB:we}=E,Ze=fe($t-1),Tt=Math.min(Math.ceil(Ze*we)+1,(E.K-1)*we+1);E.trace.geometry.setDrawRange(0,Tt);let Gt=E.trace.geometry.attributes.color;for(let Se=0;Se<Tt;Se++){let dt=Te*(.05+.95*Math.exp(-(Ze-Se/we)/320));Gt.setXYZ(Se,.32*dt,.42*dt,.55*dt)}Gt.needsUpdate=!0}}}function B(p){let v=Je.center.clone().sub(p).normalize();return p.clone().sub(kt.center).normalize().addScaledVector(Qt,.6).addScaledVector(v,.4).normalize()}function ee(p,v,M){let R=_e.position.clone(),D=$t;_e.position.copy(p),$t=v;let H=M();return _e.position.copy(R),$t=D,H}let X=()=>{let p=Gn(1+E.rideEnd,new T);return{pos:p.clone().addScaledVector(B(p),330),look:kt.center.clone()}};bt.jupiter=p=>{if(!E)return p;let v=X();if(!$e)return v;let M=fe($e.clock),R=kt.center.clone().lerp(p.pos,J.clamp(E.reach[Math.round(M)],26,60)/20),D=W($e.ramp),H=v.pos.clone().sub(kt.center),Z=R.sub(kt.center),ie=Math.exp(J.lerp(Math.log(H.length()),Math.log(Z.length()),D));H.normalize().applyQuaternion(new yt().slerp(new yt().setFromUnitVectors(H.clone().normalize(),Z.normalize()),D));let me=kt.center.clone().addScaledVector(H,ie),se=v.look.clone().lerp(p.look,D);return{pos:me,look:se}};function q(p){if(We.includes("ganymede"))return lr;let v=0;for(let[M,R]of jt.entries()){let D=We.indexOf(R);if(D<0||p<D)break;v=nn*(M+J.clamp((p-D)/Ne,0,1))}return v}let Ie=()=>{let p=We.indexOf(jt.at(-1));return p>=0?p+Ne:We.indexOf("juice")};bt.juiceMap=()=>{let p=Le.radius,v=Tn.clone().multiplyScalar(.8).addScaledVector(Vt,.55).addScaledVector(ut,.15).normalize();return{pos:Ue.clone().addScaledVector(v,p*4.2),look:Ue.clone()}},bt.tourTop=()=>{let p=27e5*Ft,v=J.degToRad(22),M=Vt.clone().addScaledVector(ut,-Vt.dot(ut)).normalize(),R=ut.clone().multiplyScalar(Math.cos(v)).addScaledVector(M,Math.sin(v));return{pos:kt.center.clone().addScaledVector(R,p/Math.tan(J.degToRad(h.fov/2))),look:kt.center.clone()}},bt.ganymedeOcean=()=>{let p=Le.radius,v=ut.clone().normalize(),M=bt.juiceMap().pos.sub(Ue),R=M.addScaledVector(v,-M.dot(v)).normalize().addScaledVector(v,.3).normalize(),D=R.clone().addScaledVector(v,-R.dot(v)).normalize().applyAxisAngle(v,J.degToRad(30)),H=new T().crossVectors(v,D).normalize();return{pos:Ue.clone().addScaledVector(R,2.5*p),look:Ue.clone().addScaledVector(H,Lp*.1*p)}},bt.ganymedeSurface=()=>{let p=Le.radius,v=ut.clone().normalize(),M=bt.juiceMap().pos.sub(Ue),R=M.addScaledVector(v,-M.dot(v)).normalize().addScaledVector(v,.3).normalize(),D=R.clone().addScaledVector(v,-R.dot(v)).normalize().applyAxisAngle(v,J.degToRad(30)),H=new T().crossVectors(v,D).normalize(),Z=J.degToRad(35),ie=H.clone().multiplyScalar(Lp*Math.cos(Z)).addScaledVector(v,Math.sin(Z)),me=Ue.clone().addScaledVector(ie,.93*p);return{pos:me.clone().addScaledVector(D,1.15*p).addScaledVector(ie,.5*p),look:me.clone().addScaledVector(ie,.2*p)}},bt.ganymedeField=()=>{let p=Le.radius,v=ut.clone().normalize(),M=bt.juiceMap().pos.sub(Ue),R=M.addScaledVector(v,-M.dot(v)).normalize().addScaledVector(v,.3).normalize();return{pos:Ue.clone().addScaledVector(R,3.8*p),look:Ue.clone()}},bt.juiceField=()=>{let p=bt.juiceMap();return{pos:Ue.clone().lerp(p.pos,1.75),look:p.look}};let Ve=new In(new It().setAttribute("position",new nt(new Float32Array(387),3)),new Sn({color:16767392,transparent:!0,opacity:0,depthWrite:!1}));Ve.frustumCulled=!1,u.add(Ve);let Pe=1024,Oe=512,Ye=document.createElement("canvas");Ye.width=Pe,Ye.height=Oe;let rt=Ye.getContext("2d"),wt=new gi(Ye),Xe=!1,At=(()=>{let M=document.createElement("canvas");M.width=512,M.height=256;let R=M.getContext("2d"),D=R.createImageData(512,256),H=7,Z=()=>(H=H*16807%2147483647)/2147483647,ie=Array.from({length:18},()=>{let tt=Math.acos(2*Z()-1),gt=Z()*Math.PI*2;return{x:Math.sin(tt)*Math.cos(gt),y:Math.cos(tt),z:Math.sin(tt)*Math.sin(gt),a:(Z()*2-1)*.35,w:.25+Z()*.3}}),me=new Float32Array(512*256),se=0;for(let tt=0;tt<256;tt++)for(let gt=0;gt<512;gt++){let et=(tt+.5)/256*Math.PI,Ct=(gt+.5)/512*Math.PI*2,Rt=Math.sin(et),Te=Math.cos(et),we=-127.5*(1.5*Te*Te-.5)+38.3*3*Rt*Rt*Math.cos(2*Ct);we/=127.5;let Ze=-Math.cos(Ct)*Rt,Tt=Te,Gt=Math.sin(Ct)*Rt;for(let Se of ie){let dt=Math.acos(Math.min(1,Ze*Se.x+Tt*Se.y+Gt*Se.z));we+=Se.a*Math.exp(-(dt*dt)/(Se.w*Se.w))}me[tt*512+gt]=we,se=Math.max(se,Math.abs(we))}let ge=[44,98,210],xe=[236,234,226],Ae=[214,84,52];for(let tt=0;tt<512*256;tt++){let gt=me[tt]/se,et=gt<0?ge:Ae,Ct=Math.min(1,Math.abs(gt)*1.3);for(let Rt=0;Rt<3;Rt++)D.data[4*tt+Rt]=xe[Rt]+(et[Rt]-xe[Rt])*Ct;D.data[4*tt+3]=255}R.putImageData(D,0,0);let Qe=new gi(M);return Qe.colorSpace=xn,Qe})(),tn=new cn({uniforms:{surf:{value:null},mask:{value:wt},grav:{value:At},sun:{value:new T(1,0,0)},show:{value:0},wGrav:{value:0}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D surf, mask, grav;
      uniform vec3 sun;
      uniform float show, wGrav;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        // (an overlay, as at Mercury: Ganymede itself shows through, sharp; the strips mapped so far are tinted,
        // and filled with the gravity field when it is shown)
        float seen = texture2D(mask, vUv).a;
        float light = 0.12 + 0.95 * max(dot(normalize(vNormal), sun), 0.0);
        vec3 colour = mix(vec3(1.0, 0.78, 0.5), texture2D(grav, vUv).rgb * 0.75 * light, wGrav);
        gl_FragColor = vec4(colour, show * seen * mix(0.22, 0.9, wGrav));
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1}),Zt=new st(new zn(Le.radius*1.004,128,64),tn);Zt.visible=!1,Zt.renderOrder=1,Le.mesh.add(Zt);let Ot=0,ln=new T,qe=new yt;function Nn(p){ht(p,ln).sub(Ue),K.getWorldQuaternion(qe).invert(),ln.applyQuaternion(qe).applyAxisAngle(ws,-(Le.phase+Jn*p)).normalize();let v=Math.acos(J.clamp(ln.y,-1,1)),M=Math.atan2(ln.z,-ln.x);return M<0&&(M+=Math.PI*2),[M/(Math.PI*2)*Pe,v/Math.PI*Oe]}function Xt(p){if(p<Ot-1e-9&&(rt.clearRect(0,0,Pe,Oe),Ot=0),p-Ot<1e-6)return;rt.lineCap="round",rt.strokeStyle="rgba(255, 255, 255, 0.9)",rt.shadowColor="white",rt.shadowBlur=6,rt.lineWidth=10;let v=Math.max(1,Math.ceil((p-Ot)*160)),[M,R]=Nn(Ot);for(let D=1;D<=v;D++){let[H,Z]=Nn(Ot+(p-Ot)*D/v);Math.abs(H-M)<Pe/2&&(rt.beginPath(),rt.moveTo(M,R),rt.lineTo(H,Z),rt.stroke()),M=H,R=Z}Ot=p,wt.needsUpdate=!0}function vi(p,v,M){let R=new Ut,D=new Sn({color:M,transparent:!0,opacity:0,depthWrite:!1});for(let H=0;H<v;H++){let Z=H/v*Math.PI*2;for(let ie of p){let me=Math.asin(Math.sqrt(1/ie)),se=[];for(let ge=0;ge<=90;ge++){let xe=me+(Math.PI-2*me)*ge/90,Ae=ie*Math.sin(xe)**2;se.push(new T(Ae*Math.sin(xe)*Math.cos(Z),Ae*Math.cos(xe),Ae*Math.sin(xe)*Math.sin(Z)))}R.add(new In(new It().setFromPoints(se),D))}}return R.userData.material=D,R}let mn=new Ut,Rs=vi([1.7,2.6,4],6,12375295),yi=vi([1.35,1.9],4,6283468);mn.add(Rs,yi),mn.visible=!1,u.add(mn);function ns(p){let v=q(p),M=he.gMap,R=v*wn,D=Le.radius*_t();if(Zt.visible=he.gCover>.01&&!Xe,tn.uniforms.show.value=he.gCover,tn.uniforms.wGrav.value=he.gGrav,tn.uniforms.surf.value=Le.mesh.material.map,tn.uniforms.sun.value.copy(Je.center).sub(Ue).normalize(),M>.01&&!Xe&&(Le.mesh.scale.x*=1+.018*M*Math.cos(2*Math.PI*R/G)),mn.visible=he.gField>.01,mn.visible&&(mn.position.copy(Ue),mn.scale.setScalar(D),Rs.quaternion.setFromUnitVectors(ws,pn),yi.quaternion.setFromUnitVectors(ws,Jt),Rs.userData.material.opacity=.35*he.gField,yi.userData.material.opacity=.95*he.gField*Math.abs(Math.sin(2*Math.PI*R/10.53))**.7),Ve.material.opacity=.3*M,Ve.visible=M>.01,Ve.visible){let H=Ve.geometry.attributes.position;Ve.position.copy(Ue);for(let Z=0;Z<=128;Z++)ht(Z/128,ln).sub(Ue),H.setXYZ(Z,ln.x,ln.y,ln.z);H.needsUpdate=!0}(Zt.visible||v===0)&&Xt(v),G_(v,M)}bt.juice=Bt,bt.juiceDown=()=>E?bt.juiceMap():Bt();function Bt(){let p=Vt.clone().addScaledVector(Lt,-Vt.dot(Lt)).normalize(),v=Lt.clone().multiplyScalar(-.75).addScaledVector(p,.65).addScaledVector(ut,.12).normalize();return{pos:_e.position.clone().addScaledVector(v,50*Mn*xi),look:_e.position.clone()}}bt.juiceRide=()=>{let p=Je.center.clone().sub(_e.position).normalize(),M=new T().crossVectors(p,Qt).normalize().multiplyScalar(.55).addScaledVector(p,.7).addScaledVector(Qt,.35).normalize(),R=_e.position.clone().sub(Ts.mercury.pos).normalize().negate();M.copy(R.applyQuaternion(new yt().slerp(new yt().setFromUnitVectors(R.clone(),M.clone()),J.smoothstep($t,0,.35))));let D=B(_e.position),H=new yt().setFromUnitVectors(M,D);M.applyQuaternion(new yt().slerp(H,J.smoothstep($t,.45,1)));let Z=_e.position.clone().addScaledVector(M,50*Mn*xi),ie=_e.position.clone().sub(Z).normalize(),me=kt.center.clone().sub(Z),se=me.length();me.normalize();let ge=0;if(ge<=0)return{pos:Z,look:_e.position.clone()};let xe=ie.clone().applyQuaternion(new yt().slerp(new yt().setFromUnitVectors(ie,me),ge));return{pos:Z,look:Z.clone().addScaledVector(xe,J.lerp(Z.distanceTo(_e.position),se,ge*2))}};function Rn(){let p=new gs(new Ki({map:cl("rgba(225,238,255,0.9)","rgba(150,190,255,0.12)"),blending:yn,depthWrite:!1,sizeAttenuation:!1,transparent:!0}));p.scale.setScalar(.012),u.add(p);let v=240,M=new It;M.setAttribute("position",new nt(new Float32Array(v*3),3)),M.setAttribute("color",new nt(new Float32Array(v*3),3));let R=new In(M,new Sn({vertexColors:!0,transparent:!0,blending:yn,depthWrite:!1}));R.frustumCulled=!1,u.add(R);let D=new It;D.setAttribute("position",M.attributes.position),D.setAttribute("aFade",new nt(new Float32Array(v),1));let H=new $s(D,new cn({uniforms:{uScale:{value:1}},vertexShader:`
        attribute float aFade;
        uniform float uScale;
        varying float vFade;
        void main() {
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (1.5 + 3.5 * aFade * aFade) * uScale;
        }`,fragmentShader:`
        varying float vFade;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = exp(-4.0 * d * d) * vFade;
          gl_FragColor = vec4(vec3(0.55, 0.75, 1.0) * a * 0.12, 1.0);
        }`,transparent:!0,blending:yn,depthWrite:!1}));H.frustumCulled=!1,u.add(H);let Z=new T,ie=0,me=0;return{draw(se,ge,xe,Ae,Qe,tt,gt=1){let et=h.position.distanceTo(se),Ct=2*tt/et*(r.domElement.height/(2*Math.tan(J.degToRad(h.fov/2))));p.position.copy(se),p.material.opacity=Qe*(1-J.smoothstep(Ct,3,14)),p.visible=p.material.opacity>.01;let Rt=performance.now(),Te=Math.min((Rt-me)/1e3,.1);me=Rt;let we=1-J.smoothstep(Ct,5,22);if(ie=i||we<ie?we:ie+(we-ie)*(1-Math.exp(-Te*1.2)),Math.abs(we-ie)<.001&&(ie=we),Ae*=ie**1.5,Qe*=Math.min(1,ie*3)*e,R.visible=H.visible=Qe>.01&&Ae>1e-4,!R.visible)return;R.position.copy(se),H.position.copy(se),H.material.uniforms.uScale.value=r.getPixelRatio();let Ze=M.attributes.position,Tt=M.attributes.color,Gt=D.attributes.aFade;for(let Se=0;Se<v;Se++){let dt=(Se/(v-1))**1.8;ge(xe-Ae*dt,Z).sub(se),Ze.setXYZ(Se,Z.x,Z.y,Z.z);let Ht=Qe*(1-dt)**1.6;Tt.setXYZ(Se,.32*Ht*gt,.42*Ht*gt,.55*Ht*gt),Gt.setX(Se,Ht)}Ze.needsUpdate=Tt.needsUpdate=Gt.needsUpdate=!0}}}let xt=zg();xt.group.scale.setScalar(Mn*Gi),u.add(xt.group);let sn=Rn(),Cn=.78,li=Je.center.clone().sub(Vn.home).normalize(),fu=new T().crossVectors(li,Qt).normalize().clone().multiplyScalar(.7).addScaledVector(li,.55).addScaledVector(Qt,.3).normalize(),Wg=fu.clone().setY(0).normalize(),ep=new T().crossVectors(Qt,Wg).normalize(),pu=3030,mu=14079,qi={a:(pu+mu)/2*Ft,e:(mu-pu)/(mu+pu),turn:-.5,seconds:8};function Vr(p,v){let M=p;for(let ie=0;ie<8;ie++)M-=(M-qi.e*Math.sin(M)-p)/(1-qi.e*Math.cos(M));let R=qi.a*(Math.cos(M)-qi.e),D=qi.a*Math.sqrt(1-qi.e*qi.e)*Math.sin(M),H=Math.cos(qi.turn),Z=Math.sin(qi.turn);return v.copy(Vn.home).addScaledVector(ep,R*H-D*Z).addScaledVector(Qt,R*Z+D*H)}Vr(Math.PI,new T).sub(Vn.home).dot(li)<0&&ep.negate();let gu=Vr(Math.PI,new T);{let p=[];for(let v=0;v<=256;v++)p.push(Vr(v/256*Math.PI*2,new T));var Ko=new In(new It().setFromPoints(p),new Sn({color:10867967,transparent:!0,opacity:0}));u.add(Ko)}let cr=(()=>{let p=on.center.clone().sub(Je.center);return{r:p.length(),angle:Math.atan2(p.z,p.x)+30/p.length()}})(),hr=new T(Je.center.x+cr.r*Math.cos(cr.angle),0,Je.center.z+cr.r*Math.sin(cr.angle)),Gr=hr.clone().sub(on.center).normalize(),tp=on.center.clone().addScaledVector(Gr,on.radius*1.01),np=gu.clone().sub(Je.center),Xg=Math.hypot(np.x,np.z);function qg(p,v){let M=cr.r*(Xg/cr.r)**p,R=cr.angle+Math.PI*2*p;return v.set(Je.center.x+M*Math.cos(R),0,Je.center.z+M*Math.sin(R))}function ur(p,v,M,R,D,H){let Z=D*D,ie=Z*D;return H.copy(p).multiplyScalar(2*ie-3*Z+1).addScaledVector(v,ie-2*Z+D).addScaledVector(M,-2*ie+3*Z).addScaledVector(R,ie-Z)}let ip=(p,v,M=1e-4)=>p(v+M,new T).sub(p(v-M,new T)).normalize(),w1=.8,xl=.93,sp=40,_u=ip(Vr,Math.PI),xu=gu.clone().addScaledVector(_u,-sp),rp=ip(qg,1e-4).lerp(Je.center.clone().sub(hr).normalize(),.5).normalize(),op=(()=>{let p=hr.distanceTo(xu);return{d0:rp.clone().multiplyScalar(p*.9),d1:_u.clone().multiplyScalar(p*.9)}})();function vu(p,v){if(p<xl)return ur(hr,op.d0,xu,op.d1,p/xl,v);let M=(p-xl)/(1-xl);return v.copy(xu).addScaledVector(_u,sp*(1-(1-M)**2))}let ap=(()=>{let p=tp.distanceTo(hr);return{d0:Gr.clone().multiplyScalar(p*.8),d1:rp.clone().multiplyScalar(p*.8)}})(),Yg=new T;bt.launch=(()=>{let p=Ts.core.pos.clone().sub(on.center);p.addScaledVector(Gr,-p.dot(Gr)).normalize();let v=on.center.clone().addScaledVector(Gr,3.5);return{pos:on.center.clone().addScaledVector(p,15).addScaledVector(Gr,1.5).addScaledVector(Qt,2),look:v}})();let Zg=new T(.3,.3,.9).normalize(),A1=fu.clone(),vl=(()=>{let v=[],M=ie=>vu(Math.min(ie+1e-4,1),new T).sub(vu(Math.max(ie-1e-4,0),new T)).normalize(),R=M(0),D=Je.center.clone().sub(hr).normalize();D.addScaledVector(R,-D.dot(R)).normalize();let H=new yt,Z=new Dt;for(let ie=0;ie<=600;ie++){let me=M(ie/600);H.setFromUnitVectors(R,me),D.applyQuaternion(H).addScaledVector(me,-D.dot(me)).normalize(),R=me,v.push(new yt().setFromRotationMatrix(Z.makeBasis(new T().crossVectors(R,D),R,D)))}return v})();function lp(p,v){let M=J.clamp(p,0,1)*(vl.length-1),R=Math.min(Math.floor(M),vl.length-2);return v.copy(vl[R]).slerp(vl[R+1],M-R)}function yu(p,v,M){let R=v.clone().normalize(),D=Je.center.clone().sub(p).normalize();return D.addScaledVector(R,-D.dot(R)).normalize(),M.setFromRotationMatrix(new Dt().makeBasis(new T().crossVectors(R,D),R,D))}let cp=(()=>{let p=Hr(2,new T),v=Hr(2.002,new T).sub(p);return yu(p,v,new yt)})();function Jg(p,v,M){return M.copy(Zg).applyQuaternion(xt.group.quaternion)}let $g=Qt.clone().applyQuaternion(lp(0,new yt).invert());bt.bepiUp=()=>$g.clone().applyQuaternion(xt.group.quaternion);function Hr(p,v){return p<=1?ur(tp,ap.d0,hr,ap.d1,Math.max(p,0)**1.6,v):p<=2?vu(p-1,v):Vr(Math.PI+Math.PI*2*(p-2),v)}let Qo=new T,T1=new Dt,jg=J.degToRad(12),Mu=0,Ps=-1,yl=1024,Su=512,Ml=document.createElement("canvas");Ml.width=yl,Ml.height=Su;let Yi=Ml.getContext("2d"),hp=new gi(Ml),ea=new cn({uniforms:{surf:{value:null},mask:{value:hp},grav:{value:At},sun:{value:new T(1,0,0)},show:{value:0},wGrav:{value:0}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D surf, mask, grav;
      uniform vec3 sun;
      uniform float show, wGrav;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        // (an overlay: Mercury itself shows through, sharp, with its own lighting and relief; the strips mapped
        // so far are tinted, and filled with the gravity field when it is shown)
        float seen = texture2D(mask, vUv).a;
        float light = 0.1 + 0.95 * max(dot(normalize(vNormal), sun), 0.0);
        vec3 colour = mix(vec3(1.0, 0.78, 0.5), texture2D(grav, vUv).rgb * 0.75 * light, wGrav);
        gl_FragColor = vec4(colour, show * seen * mix(0.22, 0.9, wGrav));
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1}),Sl=new st(new zn(Vn.radius*1.004,128,64),ea);Sl.visible=!1,k.surface.add(Sl);let bl=new T;function up(p,v){Al(p,bl).sub(k.center).applyAxisAngle(ws,-v).normalize();let M=Math.acos(J.clamp(bl.y,-1,1)),R=Math.atan2(bl.z,-bl.x);return R<0&&(R+=Math.PI*2),[R/(Math.PI*2)*yl,M/Math.PI*Su]}function Kg(p){let v=he.bMap;if(Sl.visible=v>.01,!Sl.visible)return;ea.uniforms.show.value=v,ea.uniforms.wGrav.value=he.bGrav,ea.uniforms.surf.value=k.surface.material.map,ea.uniforms.sun.value.copy(Je.center).sub(k.center).normalize();let M=Is/9;i||(Mu+=p/9*jg*v),(Ps<0||M<Ps)&&(Yi.clearRect(0,0,yl,Su),Ps=M),Yi.lineCap="round",Yi.strokeStyle="rgba(255, 255, 255, 0.9)",Yi.shadowColor="white",Yi.shadowBlur=6,Yi.lineWidth=16;let R=Ju+Mu,D=Math.max(1,Math.ceil((M-Ps)*200)),[H,Z]=up(Ps,R);for(let ie=1;ie<=D;ie++){let[me,se]=up(Ps+(M-Ps)*ie/D,R);Math.abs(me-H)<yl/2&&(Yi.beginPath(),Yi.moveTo(H,Z),Yi.lineTo(me,se),Yi.stroke()),H=me,Z=se}Ps=M,hp.needsUpdate=!0}let wl=new T,dp=new T;function Al(p,v){wl.copy(Ts.mercury.pos).sub(k.center),wl.addScaledVector(Qt,-wl.dot(Qt)).normalize().applyAxisAngle(Qt,J.degToRad(50)),dp.crossVectors(Qt,wl).normalize();let M=Math.PI*2*p,R=1.4*Vn.radius*Gl();return v.copy(k.center).addScaledVector(Qt,R*Math.cos(M)).addScaledVector(dp,R*Math.sin(M))}let dr=0,Is=0;function fp(p,v){let M=We.indexOf("launch"),R=We.indexOf("bepi"),D=We.indexOf("arrival");if(M<0||R<0||D<0){if(We.indexOf("mercury")<0)return;let xe=["mercury-map","mercury-fields","mercury","mercury-layer","mercury-strong","mercury-probes"].map(Te=>We.indexOf(Te)).filter(Te=>Te>=0),Ae=Math.min(...xe),Qe=Math.max(...xe),tt=p>=Ae&&p<=Qe?0:Math.min(Math.abs(p-Ae),Math.abs(p-Qe)),gt=1-J.smoothstep(tt,.12,.28);if(xt.group.visible=gt>.001,!xt.group.visible){Is=0;return}i||(Is+=v);let et=Is/9,Ct=Al(et,xt.group.position);xt.group.quaternion.copy(cp);let Rt=Ct.clone();t.push(()=>{xt.group.scale.setScalar(Mn*Gi),sn.draw(Rt,Al,et,.3,gt,Yo*Mn*Gi),Ko.visible=!1});return}let H;if(p<R)H=J.clamp((p-(M-.6))/(R-M+.6),0,1),dr=0,Is=0;else{let ge=J.clamp((p-R)/Cn,0,1);dr=ge*ge*(3-2*ge),dr>=1?i||(Is+=v):Is=0,H=1+dr+Is/qi.seconds}let Z=Hr(H,xt.group.position);Hr(H+.002,Qo).sub(Z),Qo.lengthSq()<1e-14&&Hr(H-.002,Qo).sub(Z).negate(),H>=1&&H<=2?(lp(H-1,xt.group.quaternion),xt.group.quaternion.slerp(cp,J.smoothstep(H-1,.5,1))):Qo.lengthSq()>1e-14&&yu(Z,Qo,xt.group.quaternion);let ie=J.smoothstep(p,M-.6,M-.45)*(1-J.smoothstep(p,D+.2,D+.7));xt.group.visible=ie>.001;let me=H<=1?Math.min(H,.35):H<=2?.035:Math.min(.22,.02+(H-2)),se=Z.clone();t.push(()=>{let ge=am(se);xt.group.scale.setScalar(Mn*Gi*ge),sn.draw(se,Hr,H,me,ie,Yo*Mn*Gi*ge);let xe=J.smoothstep(h.position.distanceTo(bu),8,12);Ko.material.opacity=.25*he.bOrbit*xe,Ko.visible=Ko.material.opacity>.0025})}bt.bepi=()=>({pos:xt.group.position.clone().addScaledVector(Jg(xt.group.position,dr,Yg),42*Mn*Gi),look:xt.group.position.clone()});let bu=gu.clone().add(Vr(0,new T)).multiplyScalar(.5);bt.arrival={pos:bu.clone().addScaledVector(fu,13),look:bu};let Wr=new Ut;Wr.position.copy(fn.center),Wr.rotation.copy(ul),u.add(Wr);let Qg={uSunDir:{value:Je.center.clone().sub(fn.center).normalize()},uRingNormal:{value:Qt.clone().applyEuler(ul)},uR:{value:fn.radius}},pp=(p,v)=>(p.onBeforeCompile=M=>{Object.assign(M.uniforms,Qg),M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRel;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRel = mat3(modelMatrix) * position;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
          varying vec3 vRel;
          uniform vec3 uSunDir, uRingNormal;
          uniform float uR;
          // how much light the rings let through at a given radius (C ring, B ring, Cassini division, A ring)
          float ringOpacity(float r) {
            r /= uR;
            float o = 0.0;
            o += 0.25 * (smoothstep(1.23, 1.25, r) - smoothstep(1.52, 1.53, r));
            o += 0.85 * (smoothstep(1.52, 1.53, r) - smoothstep(1.94, 1.95, r));
            o += 0.12 * (smoothstep(1.94, 1.95, r) - smoothstep(2.02, 2.03, r));
            o += 0.6 * (smoothstep(2.02, 2.03, r) - smoothstep(2.26, 2.27, r));
            return o;
          }`).replace("#include <dithering_fragment>",v==="ring"?`#include <dithering_fragment>
            { // in Saturn's shadow?
              float t = dot(-vRel, uSunDir);
              float d = length(vRel + t * uSunDir);
              float lit = t < 0.0 ? 1.0 : smoothstep(uR * 0.97, uR * 1.02, d);
              gl_FragColor.rgb *= mix(0.06, 1.0, lit);
            }`:`#include <dithering_fragment>
            { // under the rings' shadow?
              float dn = dot(uSunDir, uRingNormal);
              float t = -dot(vRel, uRingNormal) / (abs(dn) < 1e-4 ? 1e-4 : dn);
              if (t > 0.0) gl_FragColor.rgb *= 1.0 - 0.85 * ringOpacity(length(vRel + t * uSunDir));
            }`)},p),Tl=new st(x(fn.radius),pp(new Wt({map:d("saturnmap.jpg"),shininess:6}),"planet"));Wr.add(Tl),P.push([Tl,.05]);let mp=d("saturnringcolortrans.png");mp.repeat.set(.5,1);let Xr=new st(new Lr(fn.radius*1.1,fn.radius*2.3,160,1),pp(new Wt({map:mp,transparent:!0,side:An,depthWrite:!1,shininess:0}),"ring"));Xr.rotation.x=-Math.PI/2,Wr.add(Xr);let gp=(p,v,M)=>J.smoothstep(M,p,v),wu=1.5;function e_(p){let v=D=>2*gp(0,.35*p,D)*(1-gp(.75*p,p,D)),M=Math.asin(wu/2),R=[];for(let D of[1,-1])for(let H of[1,-1])for(let Z of[M])R.push([D*Math.cos(Z),H*Math.sin(Z)]);return Ig({rInner:.05,omega:wu,N:v,starts:R,length:4.5})}let t_=[{top:.62,low:"#3d3426",high:"#6e5c40"},{top:1,low:"#7a6a52",high:"#c9b48e"}],n_=[{top:.45,low:"#3f2f24",high:"#6f5240"},{top:1,low:"#7d6550",high:"#d2b08c"}],E1=p=>({inner:.05,outer:1,omega:wu,paths:e_(p),color:[1,.85,.55],width:.009}),_p=p=>({texture:`kore-${p}.webp`,color:[1,.78,.45],period:5,gain:1,show:1.3}),Ls=Ss({loader:f,textures:c,center:fn.center,radius:fn.radius,maps:{map:"saturnmap.jpg"},layers:t_,waves:_p("saturn"),axis:bn.n,spinRate:0});Ls.root.visible=!1,u.add(Ls.root);let fr=Ss({loader:f,textures:c,center:bn.jupiterAt.clone(),radius:kt.radius,maps:{map:"jupitermap.jpg"},layers:n_,waves:_p("jupiter"),axis:bn.n,spinRate:.01});fr.root.visible=!1,u.add(fr.root);let pr=kt.radius,Ti=new Ut;Ti.position.copy(bn.jupiterAt);{let p=bn.side.clone(),v=new T().crossVectors(bn.n,p).normalize();Ti.quaternion.setFromRotationMatrix(new Dt().makeBasis(p,v,bn.n))}Ti.visible=!1,u.add(Ti);let xp=(()=>{let p=[];for(let M=0;M<=256;M++){let R=M/256*Math.PI*2;p.push(Math.cos(R),Math.sin(R),0)}let v=new It;return v.setAttribute("position",new nt(p,3)),v})(),Au=(p,v)=>{let M=new In(xp,new Sn({color:p,transparent:!0,opacity:v,depthWrite:!1}));return M.userData.base=v,Ti.add(M),M},Ei=[["io",5.9],["europa",9.4],["ganymede",15],["callisto",26.3]].map(([p,v],M)=>{let R=Au(M===3?"#f59e4c":"#9fb4cc",M===3?.55:.28);R.scale.setScalar(v*pr);let D=new gs(new Ki({map:cl("rgba(230,240,255,0.95)","rgba(150,180,220,0.3)"),blending:yn,depthWrite:!1,transparent:!0,sizeAttenuation:!1}));return D.scale.setScalar(M===3?.034:.024),Ti.add(D),{name:p,r:v,r0:v,orbit:R,glow:D,phase:1.3+2.1*M,at:new T}}),mr=Ei[3],Tu=Au("#f59e4c",.18);Tu.scale.setScalar(mr.r0*pr);let vp=Au("#8fc7ff",.9),Eu=new st(new Lr(.985,1.015,256,1),new wi({color:"#8fc7ff",transparent:!0,opacity:.25,blending:yn,depthWrite:!1,side:An}));Ti.add(Eu);let Cu=900,Ds=new It;Ds.setAttribute("position",new nt(new Float32Array(Cu*3),3)),Ds.setAttribute("color",new nt(new Float32Array(Cu*3),3));let yp=Ds.attributes.position.array,Ru=Ds.attributes.color.array,Mp=new In(Ds,new Sn({vertexColors:!0,transparent:!0,blending:yn,depthWrite:!1}));Mp.frustumCulled=!1,Ti.add(Mp);let is=0,Sp=-1,i_=13,bp=p=>mr.r0+i_*(p-gn.start),s_=4,wp=p=>Ei[0].r0-s_*(p-gn.start),r_=[new Be(1,1,1),new Be(1,1,1),new Be(1,1,1),new Be(1,.55,.25)],o_=[new Be(1,.55,.25),new Be(1,1,1),new Be(1,1,1),new Be(1,1,1)],a_=Ei.map(p=>p.orbit.material.color.clone()),l_=Ei.map((p,v)=>new Be(v===0?"#f59e4c":"#9fb4cc")),Pu=0,Ap=0;function c_(p){let v=J.smoothstep(he.lLock,.45,1);if(Ti.visible=v>.001,!Ti.visible)return;let M=Ns,R=M>=.5?1:0,D=J.smoothstep(M,.3,.6),H=R?J.smoothstep(M,.75,1):1-J.smoothstep(M,0,.25);R!==Ap&&(Ap=R,is=0),Pu=M>.75?Pu+p:0;let Z=R?Pu:performance.now()/1e3,ie=gn.run+gn.hold,me=i?gn.run:Math.min(Z%ie,gn.run),se=Math.floor(Z/ie)+1e3*R,ge=H*(i?1:Math.min(J.smoothstep(Z%ie,0,.6),1-J.smoothstep(Z%ie,ie-.7,ie)));se!==Sp&&(Sp=se,is=0);let[xe,Ae]=aa[Math.round(me/gn.run*(aa.length-1))],Qe=R?wp:bp,tt=R?Ei[0]:mr,gt=Qe(xe),et=Ae-xe<2.2*gn.width,Ct=bp(R?gn.start:Ae),Rt=wp(R?Ae:gn.start);mr.r=J.lerp(R?mr.r0:Ct,mr.r0,D),Ei[0].r=J.lerp(Ei[0].r0,R?Rt:Ei[0].r0,D),vp.scale.setScalar(gt*pr),Eu.scale.setScalar(gt*pr);let Te=.75+.25*Math.sin(Z*5);if(vp.material.opacity=v*ge*(et?1:.6),Eu.material.opacity=v*ge*(et?.35*Te:.12),Tu.scale.setScalar(tt.r0*pr),Tu.material.opacity=v*H*.18,Ei.forEach((we,Ze)=>{i||(we.phase+=p*Math.PI*2/(16*(we.r/26.3)**1.5)),we.glow.position.set(Math.cos(we.phase),Math.sin(we.phase),0).multiplyScalar(we.r*pr),we.orbit.scale.setScalar(we.r*pr),we.glow.material.color.lerpColors(r_[Ze],o_[Ze],D),we.orbit.material.color.lerpColors(a_[Ze],l_[Ze],D);let Tt=J.lerp(we.orbit.userData.base,Ze===0?.55:.28,D),Gt=we===tt?ge:we===mr||Ze===0?Math.max(H,.35):1;we.orbit.material.opacity=v*Gt*Tt,we.glow.material.opacity=v*(we===tt&&et?1:.85),we.glow.getWorldPosition(we.at)}),!i){is===Cu&&(yp.copyWithin(0,3),is--),tt.glow.position.toArray(yp,is*3),is++;for(let we=0;we<is;we++){let Ze=v*ge*(.15+.85*(we/is))*.8;Ru[3*we]=.96*Ze,Ru[3*we+1]=.62*Ze,Ru[3*we+2]=.3*Ze}Ds.setDrawRange(0,is),Ds.attributes.position.needsUpdate=!0,Ds.attributes.color.needsUpdate=!0}}let Tp=(p,v)=>{let M=p.surface.material;M.emissiveMap=M.map,M.emissive=new Be(v),M.color=new Be(0),M.needsUpdate=!0},h_=[{top:.5,low:"#2a0e04",high:"#4a1a08"},{top:.713,low:"#3a1406",high:"#6a2810"},{top:1,low:"#4a1a08",high:"#8c3a14"}],ta=Ss({loader:f,textures:c,center:Je.center,radius:Je.radius,maps:{map:"sunmap.jpg"},layers:h_,waves:{texture:"kore-sun-mixed.webp",rmax:.985,color:[1,.86,.55],period:6,gain:.8,show:2.2},spinRate:.02});Tp(ta,16777215),ta.root.visible=!1,u.add(ta.root);let u_=[{top:.15,low:"#2c2a3a",high:"#4c4a66"},{top:1,low:"#3a2a14",high:"#7a5a2c"}],gr=Ss({loader:f,textures:c,center:Vi.center,radius:Vi.radius,maps:{map:"sunmap.jpg"},layers:u_,waves:{texture:"kore-star.webp",rmax:1,color:[1,.92,.7],period:6,gain:1,show:1.3},spinRate:.03});Tp(gr,16773848),gr.root.visible=!1,u.add(gr.root);let qr=new gs(new Ki({map:cl("rgba(255,240,210,0.9)","rgba(255,200,120,0.3)"),blending:yn,depthWrite:!1,transparent:!0}));qr.scale.setScalar(Vi.radius*4),qr.position.copy(Vi.center),qr.visible=!1,u.add(qr);let ss=new Ut;ss.position.copy(Vi.center),ss.quaternion.setFromUnitVectors(new T(0,0,1),Qt),ss.visible=!1,u.add(ss);let Iu=(p,v)=>{let M=new In(xp,new Sn({color:p,transparent:!0,opacity:v,depthWrite:!1}));return ss.add(M),M},d_=Iu("#f59e4c",.18),C1=Iu("#f59e4c",.55),R1=Iu("#8fc7ff",.9),f_=new st(new Lr(.985,1.015,256,1),new wi({color:"#8fc7ff",transparent:!0,opacity:.25,blending:yn,depthWrite:!1,side:An}));ss.add(f_);let Ep=new gs(new Ki({map:cl("rgba(255,214,160,1)","rgba(245,158,76,0.4)"),blending:yn,depthWrite:!1,transparent:!0,sizeAttenuation:!1}));Ep.scale.setScalar(.034),ss.add(Ep);let P1=new T,I1=.6,Cp=5,p_=5,L1=p=>Cp-p_*(p-gn.start);d_.scale.setScalar(Cp*Vi.radius);let Lu=0,D1=0;function m_(p,v){let M=he.sunCut>.97&&h.position.distanceTo(Je.center)<8*Je.radius;Lu=i?M?1:0:J.clamp(Lu+(M?p/2.2:-p/.8),0,1);let R=J.smootherstep(Lu,0,1),D=R>.001;ta.root.visible=D;let H=Ns>.01&&h.position.distanceTo(Vi.center)<200*Vi.radius;te.visible=!D&&!H,D&&ta.update({dt:p,time:v,camera:h,cut:R,cutTurn:25*Math.PI/180,waves:R,animate:!i,spinAngle:te.rotation.y}),V.material.opacity=(1-.85*R)*(H?0:1);let Z=J.smoothstep(Ns,.3,.55),ie=0;ss.visible=!1,gr.root.visible=qr.visible=Z>.005,gr.root.visible&&(gr.surface.material.opacity=Z,gr.update({dt:p,time:v,camera:h,cut:ie,cutTurn:25*Math.PI/180,waves:ie,animate:!i}),qr.material.opacity=Z*(1-.8*ie))}let Rp=new yt,Pp=new yt,g_=new T,__=new T,Ip=new yt,Du=0,El=0,Ns=0;function x_(p,v){let M=he.sCut>.001;if(Ls.root.visible=M,fr.root.visible=M,Tl.visible=!M,!M){Xr.position.set(0,0,0),Xr.visible=!0,Ti.visible=!1;return}let R=22*Math.PI/180;Ls.update({dt:p,time:v,camera:h,cut:he.sCut,cutTurn:R,waves:he.sWaves,animate:!i}),Tl.getWorldQuaternion(Rp),Ls.surface.parent.getWorldQuaternion(Pp),Ls.surface.quaternion.copy(Pp.invert().multiply(Rp));let D=J.smootherstep(he.sCut,0,1);fr.setCenter(g_.copy(bn.jupiterAt).addScaledVector(bn.side,9*fn.radius*(1-D))),Ns=he.xMorph;let H=(1-J.smoothstep(he.lLock,0,.5))*(1-J.smoothstep(Ns,0,.25));fr.surface.material.opacity=1,fr.root.visible=Ns<.56,fr.update({dt:p,time:v,camera:h,cut:he.sCut*H,cutTurn:-R,waves:he.sWaves*H,animate:!i});let Z=J.smootherstep(he.lLock,0,.55);Ls.setCenter(__.copy(fn.center).addScaledVector(bn.side,-70*fn.radius*Z)),Ls.root.visible=Z<.98,Wr.getWorldQuaternion(Ip).invert(),Xr.position.copy(bn.side).multiplyScalar(-70*fn.radius*Z).applyQuaternion(Ip),Xr.visible=Z<.98,c_(p,v)}let _r=Ss({loader:f,textures:c,center:oi.center,radius:oi.radius,maps:{map:"enceladus.jpg",normal:"moonnormal2k.jpg#enceladus"},layers:As,waves:[{texture:"kore-enceladus-lib.webp",rmax:As[1].top,rin:As[0].top,color:[.75,.95,1],period:6,gain:1.6,show:1.4},{texture:"kore-enceladus-sweep.webp",rmax:As[1].top,rin:As[0].top,frames:hu,color:[.75,.95,1],period:6,gain:1.6,show:1.4},{texture:"kore-enceladus-sweep.webp",rmax:As[1].top,rin:As[0].top,frames:hu,color:[1,.45,.1],period:6,gain:1.6,show:1.4}],spinRate:.04});u.add(_r.root);let Yr=["europa","ganymede","callisto"].map(p=>{let v=bs.find(Z=>Z.name===p),M=$f.ganymede[3].top,R=$f.ganymede[2].top,D=p==="ganymede"?[{texture:"kore-ganymede-flow.webp",rmax:M,rin:R,color:[.35,.7,1],period:6,gain:1,show:.6},{texture:"kore-ganymede-waves.webp",rmax:M,rin:R,color:[.75,.95,1],period:6,gain:2,show:1.6}]:void 0,H=Ss({loader:f,textures:c,center:new T,radius:v.radius,maps:{map:`${p}.jpg`,normal:`moonnormal2k.jpg#row-${p}`},layers:$f[p],waves:D,spinRate:.03,axis:ut});H.root.visible=!1;{let Z=H.surface.material,ie=Z.normalMap;ie&&(ie.wrapS=ie.wrapT=qs,ie.repeat.set(10,5),ie.needsUpdate=!0),Z.normalScale.set(.45,.45),Z.shininess=8}return u.add(H.root),{name:p,radius:v.radius,planet:H,at:new T}}),Lp=-1,v_=-2.747,Dp=()=>J.degToRad(35-5*J.smoothstep(he.gOcean,0,1)),y_=6800*Ft,M_=27e3*Ft,Np=new yt,Up=new yt,Fp=new yt,S_=new yt;for(let p of Yr)p.planet.surface.renderOrder=2;let rs=Yr.find(p=>p.name==="ganymede"),Cl=tn.clone();Cl.uniforms.mask.value=wt,Cl.uniforms.grav.value=At;let na=new st(new zn(rs.radius*1.004,128,64),Cl);na.renderOrder=3,na.visible=!1,rs.planet.surface.add(na);let Us=new cn({uniforms:{opacity:{value:0},uCut:{value:new T(0,0,1)},uTurn:{value:new pt}},vertexShader:`
      uniform mat3 uTurn;
      varying vec3 vRel;
      void main() { vRel = uTurn * position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float opacity;
      uniform vec3 uCut;
      varying vec3 vRel;
      void main() {
        float front = smoothstep(-0.05, 0.15, dot(vRel, uCut));
        gl_FragColor = vec4(vec3(0.56, 1.0, 0.94) * opacity * mix(1.0, 0.25, front), 1.0);
      }`,transparent:!0,depthWrite:!1,blending:yn});Object.defineProperty(Us,"opacity",{get:()=>Us.uniforms.opacity.value,set:p=>{Us.uniforms&&(Us.uniforms.opacity.value=p)}});let xr=new Ut;xr.userData.material=Us;for(let p=0;p<6;p++){let v=p/6*Math.PI*2;for(let M of[1.15,1.5,2.2]){let R=Math.asin(Math.sqrt(1/M)),D=[];for(let H=0;H<=90;H++){let Z=R+(Math.PI-2*R)*H/90,ie=M*Math.sin(Z)**2;D.push(new T(ie*Math.sin(Z)*Math.cos(v),ie*Math.cos(Z),ie*Math.sin(Z)*Math.sin(v)))}xr.add(new st(new js(new xs(D),120,.0035,6,!1),Us))}}let Nu=vi([1.7,2.6,4],6,12375295),Uu=new cn({uniforms:{uCut:{value:new T(0,0,1)},uOpacity:{value:0}},vertexShader:`
      varying vec3 vN, vNV, vPV;
      void main() {
        vN = normalize(mat3(modelMatrix) * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vPV = mv.xyz; vNV = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uCut;
      uniform float uOpacity;
      varying vec3 vN, vNV, vPV;
      void main() {
        if (dot(normalize(vN), uCut) < 0.0) discard;           // only the half that was cut away
        float rim = pow(1.0 - abs(dot(normalize(vNV), normalize(-vPV))), 3.0);
        gl_FragColor = vec4(vec3(0.75, 0.85, 1.0) * (0.02 + 0.15 * rim) * uOpacity, 1.0);
      }`,transparent:!0,blending:yn,depthWrite:!1,side:An}),b_=new st(new zn(1,96,48),Uu),vr=new Ut;vr.add(xr,Nu,b_),vr.visible=!1,u.add(vr);let Op=new T,Bp=new T,ia=new T;function w_(p){if(vr.visible=rs.planet.root.visible&&he.gInduced>.01,!vr.visible)return;let v=rs.radius,M=ut.clone().normalize();vr.position.copy(rs.at),vr.scale.setScalar(v*1.003),Bp.copy(Vt).addScaledVector(M,-Vt.dot(M)).normalize(),Op.copy(Bp).applyAxisAngle(M,-(2*Math.PI*p/6+v_)),xr.quaternion.setFromUnitVectors(ws,Op),Nu.quaternion.setFromUnitVectors(ws,M),xr.userData.material.opacity=.8*he.gInduced,Nu.userData.material.opacity=.45*he.gInduced*(1-J.smoothstep(he.gOcean,0,1)),ia.copy(h.position).sub(rs.at),ia.addScaledVector(M,-ia.dot(M)).normalize().applyAxisAngle(M,Dp()),Uu.uniforms.uCut.value.copy(ia),Us.uniforms.uCut.value.copy(ia),Us.uniforms.uTurn.value.setFromMatrix4(xr.matrix.makeRotationFromQuaternion(xr.quaternion)),Uu.uniforms.uOpacity.value=he.gInduced*J.smoothstep(he.gOcean,0,1)}function A_(){let p=he.gCover*(1-J.smoothstep(he.gRow,.15,.85))*(1-J.smoothstep(Math.max(he.gDepth,he.gOcean),0,.3));if(na.visible=rs.planet.root.visible&&p>.01,!na.visible)return;let v=Cl.uniforms,M=tn.uniforms;v.show.value=p*(rs.fade??1),v.wGrav.value=M.wGrav.value,v.surf.value=M.surf.value,v.sun.value.copy(M.sun.value)}let Fu=new T,sa=new T;function Ou(){sa.copy(bt.juiceMap().pos).sub(Ue).normalize(),Fu.crossVectors(ut,sa).normalize()}bt.row=()=>(Ou(),{pos:Ue.clone().addScaledVector(sa,M_),look:Ue.clone()}),bt.probe=()=>(Ou(),{pos:Ue.clone().addScaledVector(sa,5.2*bs[2].radius),look:Ue.clone()});let Rl=11,Pl=0,zp=-1,Zr=new Ut;Zr.visible=!1,u.add(Zr);let Bu=9,Il=new It;Il.setAttribute("position",new nt(new Float32Array(Bu*4*3),3));let kp=new Fo(Il,new Sn({color:13161184,transparent:!0,opacity:0,depthWrite:!1})),Ll=vi([1.3,1.75,2.4],4,6280432),Vp=(p,v,M,R=3)=>{let D=M?new Va({color:v,dashSize:.05,gapSize:.04,transparent:!0,opacity:0,depthWrite:!1}):new Sn({color:v,transparent:!0,opacity:0,depthWrite:!1}),H=new Ut;for(let Z=0;Z<R;Z++){let ie=new It;ie.setAttribute("position",new nt(new Float32Array(p*3),3)),H.add(new In(ie,D))}return H.material=D,H},zu=(p,v)=>Vp(129,p,v,v?1:3),Dl=zu(8370431),ku=zu(10134445),Jr=zu(16777215,!0),Gp=(p,v)=>Vp(41,p,v,v?1:3),Nl=Gp(8370431),yr=Gp(16777215,!0);Zr.add(kp,Ll,Dl,ku,Jr,Nl,yr);let ra={items:[...document.querySelectorAll("[data-probe]")],groups:[...document.querySelectorAll("[data-probe-chart]")],cursor:document.querySelector("[data-probe-cursor]")};{let p=R=>Array.from({length:121},(D,H)=>`${(H*2.5).toFixed(1)},${R(H/120).toFixed(1)}`).join(" "),v=(R,D)=>{let H=document.querySelector(R);H&&H.setAttribute("points",p(D))},M=(R,D=0)=>Math.sin(2*Math.PI*(2*R-D));v("[data-probe-line='ext']",R=>32-24*M(R)),v("[data-probe-line='ind']",R=>32+13*M(R,.06)),v("[data-probe-line='tideOcean']",R=>32-25*M(R+.125)),v("[data-probe-line='tideSolid']",R=>32-4*M(R+.125)),v("[data-probe-line='libOcean']",R=>32-25*M(R)),v("[data-probe-line='libSolid']",R=>32-7*M(R))}let Ul=0,T_=new T,E_=new T,C_=new T,R_=new T,Vu=new yt,U1=new Dt;function P_(p){let v=he.mProbe>.001||We.indexOf("ocean-probes")<0,M=We.indexOf(v?"mercury-probes":"ocean-probes"),R=v?he.mProbe:he.gProbe,D=v?k.center:Ue,H=v?Qt:ut,Z=v?Je.center.clone().sub(k.center).normalize():Jt;M>=0&&Math.abs(mt-M)<.5&&!i?Pl+=p:M>=0&&Math.abs(mt-M)>=.5&&(Pl=0),Zr.visible=R>.01;let ie=Math.floor(Pl/Rl)%3,me=Pl%Rl,se=R*J.smoothstep(me,0,.8)*(1-J.smoothstep(me,Rl-.8,Rl)),ge=[0,1,2].map(et=>et===ie?se:0);ie!==zp&&(zp=ie,ra.items.forEach(et=>et.classList.toggle("active",+et.dataset.probe===ie)),ra.groups.forEach(et=>et.style.display=+et.dataset.probeChart===ie?"":"none"));let xe=v?Vn.radius*Gl():bs[2].radius;Zr.position.copy(D);let Ae=T_.copy(h.position).sub(D).normalize(),Qe=E_.crossVectors(H,Ae).normalize(),tt=C_.crossVectors(Ae,Qe).normalize(),gt=2*Math.PI*me/4.4;{let et=R_.copy(tt).multiplyScalar(-1).addScaledVector(Qe,.55*Math.sin(gt)).normalize(),Ct=new T().crossVectors(et,Ae).normalize(),Rt=Il.attributes.position,Te=3.4*xe;for(let Ze=0;Ze<Bu;Ze++){let Tt=(Ze-(Bu-1)/2)*.5*xe,Gt=Math.sqrt(Math.max(0,(1.08*xe)**2-Tt*Tt)),Se=Ct.clone().multiplyScalar(Tt);[[-Te,-Gt],[Gt,Te]].forEach(([Ht,rn],un)=>{let jn=Se.clone().addScaledVector(et,Ht),hi=Se.clone().addScaledVector(et,rn);Rt.setXYZ(Ze*4+un*2,jn.x,jn.y,jn.z),Rt.setXYZ(Ze*4+un*2+1,hi.x,hi.y,hi.z)})}Rt.needsUpdate=!0,Il.computeBoundingSphere(),kp.material.opacity=.75*ge[0];let we=-Math.sin(gt-.35);Ll.quaternion.setFromUnitVectors(ws,Qe.clone().multiplyScalar(Math.sign(we)||1)),Ll.scale.setScalar(xe),Ll.userData.material.opacity=.9*ge[0]*Math.abs(we)}{let et=Qe.clone().multiplyScalar(Math.sign(Z.dot(Qe))||1);Fl=et,Hp=xe;let Ct=new T().crossVectors(Ae,et).normalize(),Rt=2*Math.PI*me/5.5,Te=(we,Ze)=>we.children.forEach((Tt,Gt)=>{let Se=Tt.geometry.attributes.position;for(let dt=0;dt<=128;dt++){let Ht=dt/128*Math.PI*2,rn=Math.cos(Ht),un=(1.06+.004*(Gt-1))*xe*(1+Ze*(1.5*rn*rn-.5));Se.setXYZ(dt,un*rn*et.x+un*Math.sin(Ht)*Ct.x,un*rn*et.y+un*Math.sin(Ht)*Ct.y,un*rn*et.z+un*Math.sin(Ht)*Ct.z)}Se.needsUpdate=!0,Tt.geometry.computeBoundingSphere()});Te(Dl,.16+.09*Math.sin(Rt)),Te(ku,.02+.012*Math.sin(Rt)),Te(Jr,0),Jr.children[0].computeLineDistances(),Jr.material.dashSize=.06*xe,Jr.material.gapSize=.05*xe,Dl.material.opacity=ge[1],ku.material.opacity=.9*ge[1],Jr.material.opacity=.45*ge[1]}{let et=.3*Math.sin(2*Math.PI*me/5.5)*Math.min(1,ge[2]/Math.max(R,.001)*1.2);Gu=v?0:et,Xp=v?et:0,Vu.setFromUnitVectors(ws,H);let Ct=Ae.clone().applyQuaternion(Vu.clone().invert()),Rt=Math.atan2(-Ct.z,Ct.x),Te=(we,Ze)=>we.children.forEach((Tt,Gt)=>{let Se=Tt.geometry.attributes.position;for(let dt=0;dt<=40;dt++){let Ht=.12*Math.PI+.76*Math.PI*dt/40,rn=Rt-1.05+Ze+.004*(Gt-1),un=new T(Math.sin(Ht)*Math.cos(rn),Math.cos(Ht),-Math.sin(Ht)*Math.sin(rn)).multiplyScalar(1.006*xe).applyQuaternion(Vu);Se.setXYZ(dt,un.x,un.y,un.z)}Se.needsUpdate=!0,Tt.geometry.computeBoundingSphere()});Te(Nl,et),Te(yr,0),yr.children[0].computeLineDistances(),yr.material.dashSize=.05*xe,yr.material.gapSize=.04*xe,Nl.material.opacity=ge[2],Nl.material.depthTest=yr.material.depthTest=!0,yr.material.opacity=.85*ge[2],Wp=v?0:ge[2],qp=v?ge[2]:0}if(I_(ge[1]),ra.cursor&&R>.01){let et=me%5.5/5.5*150+0;ra.cursor.setAttribute("x1",et.toFixed(1)),ra.cursor.setAttribute("x2",et.toFixed(1))}if(!v)for(let et of Yr)et.name!=="ganymede"&&R>.9&&(et.planet.root.visible=!1);Hu=v?"Sun":"Jupiter"}let Hp=1,Gu=0,Wp=0,Fl=null,Xp=0,qp=0,Hu="Jupiter",$r=document.createElement("div");$r.style.cssText="position:fixed;left:0;top:0;pointer-events:none;color:#cbd5e1;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;opacity:0;z-index:2;transition:opacity 0.3s",document.body.append($r);function I_(p){if(!Fl||p<.02){$r.style.opacity="0";return}let M=new T().fromBufferAttribute(Dl.children[0].geometry.attributes.position,0).applyMatrix4(Zr.matrixWorld).addScaledVector(Fl,.12*Hp).project(h),R=Math.sign(Fl.dot(new T(1,0,0).applyQuaternion(h.quaternion)))<0;$r.textContent=R?`\u2190 ${Hu}`:`${Hu} \u2192`,$r.style.opacity=p.toFixed(2);let D=Hi.getBoundingClientRect();$r.style.transform=`translate(${D.left+(M.x+1)/2*D.width}px, ${D.top+(1-M.y)/2*D.height}px) translate(${R?"-100%":"0"}, -50%)`}let Wu=!1;function L_(){let p=he.gRow,v=p>.001;v||(Wu=!1);for(let[M,R]of Yr.entries()){let D=Ge.find(ie=>ie.name===R.name),H=v||R.name==="ganymede"&&(he.gOcean>.001||he.gInduced>.001);if(R.planet.root.visible=H,D.mesh.visible=!H,!H)continue;Ou();let Z=Ue.clone().addScaledVector(Fu,(M-1)*y_);if(R.name==="ganymede")R.at.copy(Ue),R.fade=1,(p<.3||!Wu)&&(Wu=!0,D.mesh.getWorldQuaternion(Np),rs.planet.surface.parent.getWorldQuaternion(Up),Fp.copy(Up.invert().multiply(Np)),Ul=0);else{let ie=Z.clone().addScaledVector(sa,-4e5*Ft).addScaledVector(Fu,(M-1)*15e4*Ft);R.at.copy(ie).lerp(Z,1-(1-J.clamp(p,0,1))**3),R.fade=1}R.planet.setCenter(R.at)}}{let p=_r.surface.material.normalMap;p.wrapS=p.wrapT=qs,p.repeat.set(6,3),_r.surface.material.normalScale.set(.4,.4)}let Ol={low:new Be(As[1].low),high:new Be(As[1].high),hotLow:new Be("#4a1d3a"),hotHigh:new Be("#b4532a")},Yp=b1(oi.center,oi.radius);u.add(Yp.points);let Zp=[[.102,1],[.39,.6],[.746,.35],[.898,.5]],Jp=p=>.06+.04*p+Zp.reduce((v,[M,R])=>v+R/(1+((p-M)/.022)**2),0),Xu=[.03,.102,.25,.39,.57,.746,.82,.898,.97],D_=p=>{let v=Xu.length-1,M=Math.floor(p/2.4)%(2*v),[R,D]=M<v?[M,M+1]:[2*v-M,2*v-M-1];return J.lerp(Xu[R],Xu[D],J.smoothstep(p/2.4%1,.55,1))},oa={curve:document.querySelector("[data-response]"),sweep:document.querySelector("[data-sweep]")};if(oa.curve){let p=[];for(let v=0;v<=300;v++)p.push(`${v},${(88-80*Math.min(Jp(v/300),1.05)).toFixed(1)}`);oa.curve.setAttribute("points",p.join(" "))}let gn={width:.03,x0:.2,x1:.75,start:.5,run:13,hold:2.5},qu=p=>.04+1/(1+(p/gn.width)**2),aa=[];{let p=(gn.x1-gn.x0)/gn.run,v=.1,M=1300,R=gn.run/M,D=gn.start;for(let H=0;H<=M;H++){let Z=gn.x0+p*H*R;aa.push([Z,D]),D+=R*v*qu(D-Z)}}let Zi={curve:document.querySelector("[data-lock-curve]"),moon:document.querySelector("[data-lock-moon]"),dot:document.querySelector("[data-lock-dot]"),mode:document.querySelector("[data-lock-mode]"),tide:document.querySelector("[data-lock-tide]"),state:document.querySelector("[data-lock-state]")},$p=p=>88-76*Math.min(p,1.05),N_=p=>{if(!Zi.curve)return;let v=gn.run+gn.hold,M=i?gn.run:Math.min(p%v,gn.run),[R,D]=aa[Math.round(M/gn.run*(aa.length-1))],H=[];for(let se=0;se<=150;se++)H.push(`${se*2},${$p(qu(se/150-R)).toFixed(1)}`);Zi.curve.setAttribute("points",H.join(" "));let Z=(D*300).toFixed(1),ie=$p(qu(D-R)).toFixed(1);Zi.moon.setAttribute("x1",Z),Zi.moon.setAttribute("x2",Z),Zi.dot.setAttribute("cx",Z),Zi.dot.setAttribute("cy",ie),Zi.mode.setAttribute("x",(R*300).toFixed(1)),Zi.tide.setAttribute("x",Z);let me=D-R<2.2*gn.width;Zi.state.textContent=me?"In tune: the moon's orbit follows the mode":"Out of tune: the moon migrates slowly",Zi.state.classList.toggle("on",me)},os={date:document.querySelector(".journey-date"),passes:document.querySelector(".journey-passes"),labels:document.querySelector(".journey-labels"),chapters:[...document.querySelectorAll(".journey-chapters a")]},F1={launch:"bepi",bepi:"bepi",arrival:"bepi",mercury:"bepi","mercury-orbit":"bepi","juice-cruise":"juice",jupiter:"juice",juice:"juice","juice-map":"juice","juice-gravity":"juice","juice-field":"juice","ocean-worlds":"icy","ocean-depth":"icy",enceladus:"enceladus","enceladus-ocean":"enceladus","enceladus-resonance":"enceladus",sun:"sun",end:"sun"},U_={"bepi-pass":"mercury","mercury-map":"mercury","mercury-fields":"mercury","mercury-probes":"mercury","juice-pass":"jupiter","juice-tour":"jupiter",mercury:"mercury","mercury-layer":"mercury","mercury-strong":"mercury",ganymede:"jupiter","ganymede-ocean":"jupiter","ganymede-field":"jupiter","ocean-worlds":"jupiter","ocean-depth":"jupiter","ocean-probes":"jupiter","enceladus-intro":"beyond","enceladus-ocean":"beyond","enceladus-resonance":"beyond","enceladus-return":"beyond","saturn-modes":"beyond",locking:"beyond",exo:"beyond",sun:"beyond",end:"beyond"},F_={mercury:"mercury",jupiter:"jupiter",beyond:"beyond"},O_=[...document.querySelectorAll(".journey-parts")],jr=()=>he.xMap,B_=()=>he.jOrbits*($e?1-$e.ramp*J.smoothstep($e.clock,.004,.025):1)*(1-J.smoothstep(ii,.004,.025)),z_=p=>{let v=new T;return()=>Ge.find(M=>M.name===p).mesh.getWorldPosition(v)},k_=[["Sun",()=>Je.center,"-50%, 60%",jr],["Mercury, Venus, Earth, Mars",()=>on.center,"15%, -50%",jr],["Jupiter",()=>kt.center,"-50%, -170%",jr],["Saturn",()=>fn.center,"-50%, -170%",jr],["Uranus",()=>Me.uranus,"-50%, -170%",jr],["Neptune",()=>Me.neptune,"-50%, -170%",jr],...["Io","Europa","Ganymede","Callisto"].map(p=>[p,z_(p.toLowerCase()),"-50%, -190%",B_,"moon"]),...Ei.map(p=>[p.name[0].toUpperCase()+p.name.slice(1),()=>p.at,"-50%, -190%",()=>J.smoothstep(he.lLock,.8,1)*(1-J.smoothstep(Ns,.15,.4)),"moon"]),...Ei.map((p,v)=>["bcde"[v],()=>p.at,"-50%, -190%",()=>J.smoothstep(he.lLock,.8,1)*J.smoothstep(Ns,.55,.8),"moon letter"]),...Yr.map(p=>[p.name[0].toUpperCase()+p.name.slice(1),()=>p.at.clone().addScaledVector(ut,-p.radius*1.25),"-50%, 0%",()=>J.smoothstep(he.gRow,.7,1)*(1-he.gProbe),"moon"])].map(([p,v,M,R,D])=>{let H=document.createElement("span");return H.textContent=p,D&&(H.className=D),os.labels?.append(H),{el:H,at:v,anchor:M,when:R}}),Kr=new T,jp=null,Kp="";function V_(p){if(!os.date)return;let v=p>=0?he.jOrbits*(1-no)*($e?$e.ramp:1):0;if(os.date.style.opacity=v.toFixed(2),v<.01)return;let M=ve(p);M!==Kp&&(os.date.firstElementChild.textContent=Kp=M)}let _n={panel:document.querySelector(".journey-tour"),range:document.querySelector(".journey-tour-range"),marks:document.querySelector(".journey-tour-marks"),open:document.querySelector(".journey-tour-open"),close:document.querySelector(".journey-tour-close"),milestones:[...document.querySelectorAll(".journey-tour-milestone")]},Yu=()=>{};if(_n.panel&&_n.range&&_n.open){let D=function(){M=(E.K-1)*E.step,_n.range.max=String(M);let se=ge=>`${100*ge/M}%`;for(let ge of[2032,2033,2034]){let xe=document.createElement("span");xe.className="year",xe.style.left=se(p(`${ge}-01-01`)),xe.textContent=ge,_n.marks.append(xe)}for(let ge of _n.milestones){ge.day=p(ge.dataset.date);let xe=document.createElement("span");xe.className="dot",xe.style.left=se(ge.day),_n.marks.append(xe),ge.dot=xe}_n.open.hidden=!1,R=!0},Z=function(){let se=Number(_n.range.value);$e&&!$e.closing&&($e.target=v(se)),_n.range.setAttribute("aria-valuetext",ve(se/E.step)),Yu()},ie=function(){if(!R)return;let se=Math.max(0,jo(mt));$e={clock:$e?.clock??se,target:se,ramp:$e?.ramp??0,closing:!1,back:se},document.documentElement.classList.add("journey-touring"),_n.panel.hidden=!1,_n.range.value=String(fe($e.back)*E.step),Z(),_n.range.focus({preventScroll:!0})},me=function(){$e&&($e.closing=!0,$e.target=$e.back,document.documentElement.classList.remove("journey-touring"),_n.panel.hidden=!0,_n.open.focus({preventScroll:!0}))},p=se=>Date.parse(se)/864e5+24405875e-1-E.jd0,v=se=>{let ge=J.clamp(se/E.step,0,E.K-1),xe=Math.min(Math.floor(ge),E.K-2);return J.lerp(E.cum[xe],E.cum[xe+1],ge-xe)},M=0,R=!1,H=setInterval(()=>{E&&(clearInterval(H),D())},300);Yu=()=>{if(!R)return;let se=Number(_n.range.value),ge=_n.marks.clientWidth;for(let[xe,Ae]of _n.milestones.entries()){let Qe=Math.abs(se-Ae.day);(xe===0&&se<Ae.day||xe===_n.milestones.length-1&&se>Ae.day)&&(Qe=0);let tt=1-J.smoothstep(Qe,25,70);Ae.style.opacity=tt.toFixed(2),Ae.style.visibility=tt>.01?"visible":"hidden",Ae.dot.classList.toggle("near",tt>.5);let gt=Ae.offsetWidth/2,et=Ae.day/M*ge;Ae.style.left=`${J.clamp(et,gt,ge-gt)}px`}},_n.range.addEventListener("input",Z),addEventListener("resize",Yu),_n.open.addEventListener("click",ie),_n.close?.addEventListener("click",me),addEventListener("keydown",se=>{se.key==="Escape"&&$e&&!$e.closing&&me()}),addEventListener("wheel",se=>{if(!$e||$e.closing)return;se.preventDefault();let ge=(se.deltaX+se.deltaY)*(se.deltaMode===1?16:1)*.12;_n.range.value=String(J.clamp(Number(_n.range.value)+ge,0,M)),Z()},{passive:!1})}let Qp="";function G_(p,v){if(!os.passes)return;let M=p>.02?v*(1-no):0;if(os.passes.style.opacity=M.toFixed(2),M<.01)return;let R=Math.round(p*wn),D=Math.floor(R/24),H=`Pass ${Math.min(nn*jt.length,Math.floor(p)+1)} \xB7 ${D?`${D} d `:""}${R%24} h`;H!==Qp&&(os.passes.firstElementChild.textContent=Qp=H)}function H_(p){let v=U_[We[Math.round(p)]]??"earth",M=F_[v]??"earth";if(v!==jp){for(let D of os.chapters)D.setAttribute("aria-current",String(D.dataset.chapter===M||D.dataset.part===v));for(let D of O_){let H=D.dataset.act===M;D.classList.toggle("open",H),D.inert=!H}jp=v}let R=Hi.getBoundingClientRect();for(let D of k_){let H=D.when();if(H<.01){D.el.style.opacity="0";continue}Kr.copy(D.at()).project(h);let Z=Kr.z<1&&Math.abs(Kr.x)<1.1&&Math.abs(Kr.y)<1.1;D.el.style.opacity=Z?H.toFixed(2):"0",D.el.style.transform=`translate(${(Kr.x+1)/2*R.width}px, ${(1-Kr.y)/2*R.height}px) translate(${D.anchor})`}}let We=sr.map(p=>p.dataset.stop),Hn=We.map((p,v)=>({def:Ts[p]??Ts.earth,cardOnLeft:v%2===0,fx:Object.fromEntries(Jf.map(M=>[M,v1[p]?.[M]??0])),pos:new T,posNarrow:new T,lookWide:new T,lookNarrow:new T})),Zu=new T,Ju=0,em=new T,W_=new T;function X_(){for(let p of Hn){let v=p.def,M=v.pos,R=v.look;v.follow&&({pos:M,look:R}=v.follow()),p.pos.copy(M),(p.target??(p.target=new T)).copy(R),em.copy(R).sub(M).normalize(),W_.crossVectors(em,Qt).normalize(),p.lookWide.copy(R),p.lookNarrow.copy(R),p.posNarrow.copy(R).lerp(M,v.narrowBack??1.15)}}let Un=innerWidth<768;function Qr(){let p=scrollY+innerHeight/2,v=sr.map(M=>Un?M.offsetTop+innerHeight/2:M.offsetTop+M.offsetHeight/2);if(p<=v[0])return 0;for(let M=0;M<v.length-1;M++)if(p<v[M+1]){let R=(p-v[M])/(v[M+1]-v[M]);return M+(Un?J.smoothstep(R,.35,.95):J.smoothstep(R,.15,.85))}return v.length-1}let he=Object.fromEntries(Jf.map(p=>[p,0]));function $u(p){let v=Math.min(Math.floor(p),Hn.length-1),M=Math.min(v+1,Hn.length-1),R=p-v,D=al()[We[v]];D&&M!==v&&(R=Math.max(0,(R-D[0])/(1-D[0])));for(let H of Jf){let Z=Hn[v].fx[H],ie=Hn[M].fx[H],me=ie<Z?J.smoothstep(R,0,.5):ie>Z?J.smoothstep(R,.5,1):R;he[H]=J.lerp(Z,ie,me)}}let hn=new T,ci=new T,ju=document.querySelector(".landing"),la=document.documentElement,$n=ju&&!location.hash?1:0,Mr=$n,tm=4;$n&&(la.classList.add("landing-wide","landing-on","landing-hold"),"scrollRestoration"in history&&(history.scrollRestoration="manual"),scrollTo({top:0,behavior:"instant"})),ju?.querySelector("[data-launch]")?.addEventListener("click",()=>{Mr!==0&&(Mr=0,i&&($n=0),la.classList.remove("landing-on","landing-wide"))}),document.querySelector(".site-header .brand")?.addEventListener("click",p=>{ju&&(p.preventDefault(),Mr!==1&&(si=null,md(()=>{la.classList.add("instant","landing-hold","landing-wide","landing-on"),scrollTo({top:0,behavior:"instant"}),mt=Qr(),Pi=0,oo=!0,Mr=$n=1,history.replaceState(null,"",location.pathname),requestAnimationFrame(()=>requestAnimationFrame(()=>la.classList.remove("instant")))})))});function q_(p){$n!==Mr&&($n=Mr?Math.min(1,$n+p/tm):Math.max(0,$n-p/tm),Mr===0&&$n<.3&&la.classList.remove("landing-hold"))}let eo=new T,nm=new T,Ku=new T,im=new T;function Y_(){let p=on.radius,v=1.55*p;eo.copy(hn).sub(on.center).normalize(),nm.set(0,1,0).addScaledVector(eo,-eo.y).normalize();let M=Math.asin(p/v)+.22;Ku.copy(on.center).addScaledVector(eo,v),im.copy(Ku).addScaledVector(eo,-Math.cos(M)*p).addScaledVector(nm,Math.sin(M)*p);let R=1-$n,D=R*R*R*(R*(6*R-15)+10),H=hn.distanceTo(on.center),Z=Math.exp(J.lerp(Math.log(v),Math.log(H),D)),ie=im.clone().sub(Ku).normalize(),me=ci.clone().sub(hn),se=me.length();me.normalize();let ge=ie.lerp(me,D).normalize();hn.copy(on.center).addScaledVector(eo,Z),ci.copy(hn).addScaledVector(ge,J.lerp(p,se,D))}let Mi=new T,to=new T,Ci=new yt,Ri=new yt,no=0,Fs=0,Qu=!1,io=null,ed=!1,Bl=null,ca=0,td=-1,nd=-1,id=!1,sm=(p,v)=>Math.max(p,v)/Math.min(p,v)>3e3&&Math.min(p,v)<.02,rm=!1,Z_=(p,v)=>rm&&sm(p,v),om=new Set(["exo>sun"]),so=0,zl=1;function am(p){if(so<.001)return 1;let v=h.position.distanceTo(p);return 1+so*(Math.max(1,v/zl)**.75-1)}let Os=new T;function lm(p){no=0,Fs=0,ca=0,id=!1,so=0,Qu=!1,io=null;let v=Math.max(he.gRow,he.gCover);v>.001&&(io=h.up.clone().lerp(ut,v).normalize()),he.sCut>.001&&(io=(io??h.up.clone()).lerp(bn.n,he.sCut).normalize()),ed=!1,Bl=null,X_();let M=Math.min(Math.floor(p),Hn.length-1),R=Math.min(M+1,Hn.length-1),D=p-M;Sr[We[M]]&&M>0&&R>M?(M-=1,D=(1+D)/2):Sr[We[R]]&&R+1<Hn.length&&(R+=1,D/=2);let H=al()[We[M]];if(H&&R!==M){let[Te,we]=H;if(D<Te){hn.copy(Un?Hn[M].posNarrow:Hn[M].pos),ci.copy(Un?Hn[M].lookNarrow:Hn[M].lookWide),we?no=J.smoothstep(D,0,.06)*(1-J.smoothstep(D,Te-.04,Te)):ed=!0,Qu=we,io=We[M]==="bepi"?bt.bepiUp():null;return}D=(D-Te)/(1-Te)}let Z=Hn[M],ie=Hn[R],me=Un?Z.posNarrow:Z.pos,se=Un?ie.posNarrow:ie.pos,ge=Un?Z.lookNarrow:Z.lookWide,xe=Un?ie.lookNarrow:ie.lookWide,Ae=me.distanceTo(Z.target),Qe=se.distanceTo(ie.target),tt=me.distanceTo(se);if(E&&!$e&&We[M]==="jupiter"&&We[R]==="juice"){let Te=Ue,we=me.clone().sub(Te),Ze=se.clone().sub(Te),Tt=Math.exp(J.lerp(Math.log(we.length()),Math.log(Ze.length()),W(D)));we.normalize().applyQuaternion(new yt().slerp(new yt().setFromUnitVectors(we.clone().normalize(),Ze.normalize()),W(D))),hn.copy(Te).addScaledVector(we,Tt),ci.copy(ge).lerp(Te,J.smoothstep(D,0,.3)),Bl={d0:me.distanceTo(Te),d1:se.distanceTo(Te)};return}if(We[M]==="mercury"&&We[R]==="juice-cruise"){if(Os.copy(xe).sub(me).normalize(),so=1,zl=Qe,D<.22){let Gt=W(D/.22);hn.copy(me),Mi.copy(ge).sub(me);let Se=Math.exp(J.lerp(Math.log(Mi.length()),Math.log(xe.distanceTo(me)),Gt));Ci.setFromUnitVectors(Mi.normalize(),Os),Ri.identity().slerp(Ci,Gt),ci.copy(Mi.applyQuaternion(Ri)).multiplyScalar(Se).add(me);return}let we=(D-.22)/(1-.22),Ze=me.distanceTo(se),Tt=we<.5?Ae*((Ze/(2*Ae)+1)**(we/.5)-1):Ze-Qe*((Ze/(2*Qe)+1)**((1-we)/.5)-1);hn.copy(me).addScaledVector(Os,Tt),ci.copy(xe),Fs=J.smoothstep(we,.12,.3)*(1-J.smoothstep(we,.7,.88)),no=Fs;return}let gt=!1;if(gt){let Te=Ae<Qe,we=Te?D:1-D;so=1-J.smoothstep(we,.5,.9),zl=Math.min(Ae,Qe);let Ze=D<.5?Ae*((tt/(2*Ae)+1)**(D/.5)-1):tt-Qe*((tt/(2*Qe)+1)**((1-D)/.5)-1),Tt=Te?xe:ge,Gt=Te?me:se,Se=Te?se:me,dt=Tt.clone().sub(Gt).normalize().multiplyScalar(tt*.7),Ht=Tt.clone().sub(Se).normalize().multiplyScalar(tt*.7);Te?ur(me,dt,se,Ht,Ze/tt,hn):ur(me,Ht.negate(),se,dt.negate(),Ze/tt,hn);let rn=(Te?Z:ie).target,un=Te?xe:ge,jn=rn.clone().sub(hn),hi=un.clone().sub(hn),ao=J.smoothstep(we,.04,.4),Jl=Math.exp(J.lerp(Math.log(jn.length()),Math.log(hi.length()),ao));Ci.setFromUnitVectors(jn.normalize(),hi.normalize()),Ri.identity().slerp(Ci,ao),ci.copy(jn.applyQuaternion(Ri)).multiplyScalar(Jl).add(hn);return}if(sm(Ae,Qe)&&!rm&&!gt){let Te=Ae<Qe,we=Te?D:1-D,Ze=(Te?Z:ie).target,Tt=Te?me:se,Gt=Te?se:me,Se=Te?xe:ge;Mi.copy(Tt).sub(Ze),to.copy(Gt).sub(Ze);let dt=Mi.length(),Ht=to.length();Ci.setFromUnitVectors(Mi.normalize(),to.normalize()),Ri.identity().slerp(Ci,J.smoothstep(we,.05,.95));let rn=Math.exp(J.lerp(Math.log(dt),Math.log(Ht),W(we)));hn.copy(Ze).addScaledVector(Mi.applyQuaternion(Ri),rn);let un=Ze.clone().sub(hn),jn=Se.clone().sub(hn),hi=J.smoothstep(we,.62,1),ao=J.lerp(un.length(),jn.length(),hi);Ci.setFromUnitVectors(un.normalize(),jn.normalize()),Ri.identity().slerp(Ci,hi),ci.copy(un.applyQuaternion(Ri)).multiplyScalar(ao).add(hn),so=1-J.smoothstep(we,.8,1),zl=Math.min(Ae,Qe);return}if(Z_(Ae,Qe)||om.has(`${We[M]}>${We[R]}`)||om.has(`${We[R]}>${We[M]}`)){let Te=D>=.5;hn.copy(Te?se:me),ci.copy(Te?xe:ge),ca=J.smoothstep(D,.25,.45)*(1-J.smoothstep(D,.55,.75)),td=Te?R:M,id=!0;return}Mi.copy(ge).sub(me),to.copy(xe).sub(se);let et=Mi.length(),Ct=to.length();Ci.setFromUnitVectors(Mi.normalize(),to.normalize());let Rt=Te=>{Ri.identity().slerp(Ci,Te),ci.copy(Mi).applyQuaternion(Ri).multiplyScalar(Math.exp(J.lerp(Math.log(et+1e-9),Math.log(Ct+1e-9),Te))).add(hn)};if(tt<4*Math.min(Ae,Qe))hn.lerpVectors(me,se,D),Ci.angleTo(Ri.identity())<.6?ci.lerpVectors(ge,xe,D):Rt(J.smoothstep(D,0,1));else{let Te=D,we=Te<.5?Ae*((tt/(2*Ae)+1)**(Te/.5)-1):tt-Qe*((tt/(2*Qe)+1)**((1-Te)/.5)-1);no=J.smoothstep(D,.12,.3)*(1-J.smoothstep(D,.7,.88)),hn.lerpVectors(me,se,we/tt),tt>5e3&&(Fs=J.smoothstep(D,.2,.36)*(1-J.smoothstep(D,.64,.8)),Os.copy(se).sub(me).normalize()),Rt(J.smoothstep(D,.04,.96))}}let Sr={"bepi-pass":{name:"BepiColombo",note:"ESA \xB7 JAXA, on its way to Mercury"},"juice-pass":{name:"JUICE",note:"ESA, on its way to Jupiter"}},Bs=document.createElement("div");Bs.className="journey-flyby",Bs.style.cssText="position:fixed;left:0;top:0;pointer-events:none;color:#e5e7eb;font-size:0.8rem;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;opacity:0;z-index:2;text-shadow:0 0 6px #000",document.body.append(Bs);let kl=1/0,zs=new T,cm=new T,hm=new T,sd=new T;function J_(p){kl=1/0;let v=Math.floor(p),M=p-v,R=Sr[We[v]]?We[v]:Sr[We[v+1]]?We[v+1]:null,D=R===We[v]?M:M-1,H=Sr[R];if(!H||Math.abs(D)>=.6){Bs.style.opacity="0";return}let Z=R==="bepi-pass",ie=Z?xt.group:_e,me=Z?Yo*Mn*Gi:qo*Mn*xi;t.push(()=>{h.updateMatrixWorld(),cm.set(0,0,-1).applyQuaternion(h.quaternion),hm.set(1,0,0).applyQuaternion(h.quaternion),sd.set(0,1,0).applyQuaternion(h.quaternion);let se=W(Math.min(Math.abs(D)/.6,1)),ge=me*(D<0?J.lerp(5.5,30,se):J.lerp(5.5,-10,se)),xe=me*J.lerp(Un?.3:.95,2.6,se),Ae=i?0:.06*me*Math.sin(performance.now()/1600);if(zs.copy(h.position).addScaledVector(cm,ge).addScaledVector(hm,xe).addScaledVector(sd,-.3*me+Ae),ie.position.copy(zs),ie.visible=!0,Z)yu(zs,Os,xt.group.quaternion),xt.group.scale.setScalar(Mn*Gi),sn.draw(zs,Al,0,0,0,me);else{let et=Je.center.clone().sub(zs).normalize(),Ct=new T().crossVectors(ut,et).normalize(),Rt=new T().crossVectors(et,Ct);_e.quaternion.setFromRotationMatrix(qt.makeBasis(Ct,Rt,et)),_e.scale.setScalar(Mn*xi),at.draw(zs,Gn,0,0,0,me)}kl=Math.max(h.position.distanceTo(zs)-me,.2*me);let Qe=zs.clone().addScaledVector(sd,-.8*me).project(h),tt=1-J.smoothstep(Math.abs(D),.3,.45);Bs.innerHTML=`${H.name} <span style="opacity:.6;text-transform:none;letter-spacing:0">\xB7 ${H.note}</span>`,Bs.style.opacity=ge>0&&!Un?tt.toFixed(3):"0";let gt=Hi.getBoundingClientRect();Bs.style.transform=`translate(${gt.left+(Qe.x+1)/2*gt.width}px, ${gt.top+(1-Qe.y)/2*gt.height}px) translate(-50%, 0)`})}let rd=new T;function $_(){return[[on.center,on.radius],[k.center,Vn.radius*Gl()*1.5],[Je.center,Je.radius],[kt.center,kt.radius],[fn.center,fn.radius*2.3],[oi.center,oi.radius],[Ue,Le.radius*_t()],[_e.position,_e.visible?qo*Mn*xi:0],[hl.center,hl.radius],[xt.group.position,xt.group.visible?Yo*Mn*Gi:0]]}function um(p){let v=1/0;for(let[M,R]of $_())rd.copy(p).sub(M),rd.length()<1.12*R&&p.copy(M).addScaledVector(rd.normalize(),1.12*R),v=Math.min(v,Math.max(p.distanceTo(M)-R,.02*R));return v}let j_=.7,K_=Math.log(10),br=.01,od=1.1,Q_=3.5,ex=.2,tx=.12,as=null,Vl=!0;function nx(){Vl=!1;let p=Math.round((Hn.length-1)/br)+1,v=[],M=[],R=[],D=$e;$e=null;for(let se=0;se<p;se++){let ge=se*br;$u(ge),w(ge),fp(ge,0),lm(ge);let xe=hn.clone(),Ae=um(xe);xt.group.visible&&(Ae=Math.min(Ae,xe.distanceTo(xt.group.position))),_e.visible&&(Ae=Math.min(Ae,xe.distanceTo(_e.position))),v.push(ci.clone().sub(xe).normalize()),R.push(id),M.push(Math.log(Math.max(Ae,1e-9)))}$e=D,t.length=0;let H=new Float32Array(p);for(let se=0;se<p;se++){let ge=Math.max(0,se-1),xe=Math.min(p-1,se+1),Ae=(xe-ge)*br,Qe=Math.max(v[ge].angleTo(v[xe])/Ae/j_,Math.abs(M[xe]-M[ge])/Ae/K_);H[se]=J.clamp(Qe,1/od,40),R[se]&&(H[se]=1/.45)}as=new Float32Array(p);let Z=new Float32Array(p);for(let se=0;se<p;se++){let ge=0,xe=0;for(let Ae=Math.max(0,se-3);Ae<=Math.min(p-1,se+3);Ae++)ge+=H[Ae],xe++;Z[se]=ge/xe}let ie=1/br;for(let se=0;se<p-1;se+=ie){let ge=0;for(let Ae=se;Ae<Math.min(se+ie,p);Ae++)ge+=Z[Ae]*br;let xe=Math.max(1,ge/Q_);for(let Ae=se;Ae<Math.min(se+ie,p);Ae++)as[Ae]=Math.min(od,xe/Z[Ae])}as[p-1]=as[p-2];let me=al();for(let se=0;se<p;se++){let ge=se*br,xe=Math.floor(ge),Ae=me[We[xe]];Ae&&ge-xe<Ae[0]+.05&&(as[se]=Math.min(as[se],Ae[1]?ex:tx))}}let dm=p=>Math.min(as?as[J.clamp(Math.round(p/br),0,as.length-1)]:od,ix(p));function ix(p){let v=Math.floor(p),M=p-v;return Sr[We[v]]&&M<.6||Sr[We[v+1]]&&M>.4?.26:1/0}function ad(){Un!==innerWidth<768&&(Vl=!0),Un=innerWidth<768;let p=Hi.clientWidth||innerWidth,v=Hi.clientHeight||innerHeight;r.setSize(p,v,!1),h.aspect=p/v,h.fov=h.aspect<1?52:45,h.updateProjectionMatrix(),fm&&r.render(u,h),fm=!0}let fm=!1;new ResizeObserver(ad).observe(Hi),ad();let Gl=()=>1+(Vn.enlarge-1)*he.mOrbit,ld=0,Hl=0;function pm(p,v){let M=he.mOrbit;M<.001?ld=0:i||(ld+=p*Math.PI*2*M/ai.secondsPerOrbit);let R=ld*J.smoothstep(M,0,1);Vg(R,Zu),i||(Hl=(Hl+p*.05*(1-M))%(Math.PI*2));let D=i?0:.35*he.mLibration*Math.sin(v/1e3*(Math.PI*2/3)),H=x1-Hl;return H=Math.atan2(Math.sin(H),Math.cos(H)),Ju=Hl+H*J.smoothstep(M,0,1)+1.5*R+D,R}let mm=()=>Hi.classList.add("ready"),gm=l.load("earth",2),sx=l.load("earth",1);gm.then(mm),setTimeout(()=>sx.then(mm),3500),l.uploaded=p=>r.initTexture(p),gm.then(async()=>{for(let p of["mercury","jupiter","saturn","sun"])await l.load(p,1),await l.load(p,2)});let rx={mercury:We.indexOf("bepi-pass"),sun:We.indexOf("sun"),jupiter:We.indexOf("juice-pass"),saturn:We.indexOf("enceladus-intro")};function cd(p){for(let[v,M]of Object.entries(rx))M<0||(p>M-3&&l.load(v,1),p>M-1.5&&l.load(v,2))}let _m=!0;new IntersectionObserver(([p])=>_m=p.isIntersecting).observe(document.querySelector(".journey"));let ox=performance.now(),hd=0,Wl=0;function ax(p){if(performance.now()-ox<1e4||(Wl++,hd+=p,Wl<120))return;let v=hd/Wl;Wl=0,hd=0;let M=v>1/24?Math.max(1.25,a-.25):v<1/55?Math.min(o,a+.25):a;M!==a&&(a=M,r.setPixelRatio(a),ad())}let mt=Qr(),Pi=0,xm=sr.map(p=>p.querySelector(".journey-card")),Xl=xm.map(()=>-1);function lx(p){let v=Math.floor(p),M=al()[We[v]];M&&p-v<M[0]?p=v:M&&(p=v+(p-v-M[0])/(1-M[0]));for(let[R,D]of xm.entries()){if(!D)continue;if(Un){Xl[R]!==1&&(D.style.opacity="",D.style.visibility="",D.style.transform="",Xl[R]=1);continue}let H=p-R,Z=1-J.smoothstep(Math.abs(H),.38,.5);Math.abs(Z-Xl[R])<.005||(Xl[R]=Z,D.style.opacity=Z.toFixed(3),D.style.visibility=Z>.01?"visible":"hidden",D.style.pointerEvents=Z>.5?"":"none",D.style.transform=`translateY(calc(-50% + ${((H>=0?-1:1)*14*(1-Z)).toFixed(1)}px))`)}}let cx=2.4,ql=document.createElement("div");ql.className="journey-dissolve",ql.setAttribute("aria-hidden","true"),Hi.after(ql);let ha=document.createElement("div");ha.className="journey-veil",ha.setAttribute("aria-hidden","true"),document.body.append(ha);let ks=!1;for(let p of os.chapters)p.addEventListener("click",v=>{let M=document.getElementById(p.getAttribute("href").slice(1));if(!M||ks)return;v.preventDefault(),md(()=>{let D=Un?M.offsetTop:M.offsetTop+M.offsetHeight/2-innerHeight/2;scrollTo({top:D,behavior:"instant"}),mt=Qr(),Pi=0,oo=!0,history.replaceState(null,"",p.getAttribute("href")),cd(mt)})});let hx=.8,ux=.45,dx=180,fx=1,vm=2,si=null,ro=0,ua=p=>{let v=sr[p],M=Un?v.offsetTop:v.offsetTop+v.offsetHeight/2-innerHeight/2;return J.clamp(M,0,document.documentElement.scrollHeight-innerHeight)},ym=p=>{let v=0;for(let M=1;M<sr.length;M++)Math.abs(ua(M)-p)<Math.abs(ua(v)-p)&&(v=M);return v};function ud(p){let v=ym(si??scrollY),M=J.clamp(J.clamp(v+p,Math.round(mt)-vm,Math.round(mt)+vm),0,sr.length-1);Yl(ua(M))}function Yl(p){si=p,ro||(ro=performance.now(),requestAnimationFrame(bm))}let Mm=0,Sm=0,dd=0,fd=!1;addEventListener("wheel",p=>{if($n>0){p.preventDefault();return}if($e||p.ctrlKey||i||ks||!p.deltaY||Math.abs(p.deltaX)>Math.abs(p.deltaY))return;p.preventDefault();let v=p.deltaMode===1?p.deltaY/3:Math.abs(p.deltaY)>=50&&p.wheelDeltaY&&p.wheelDeltaY%120===0?-p.wheelDeltaY/120:0;if(Un){let D=v?v*ux*innerHeight:p.deltaY*(p.deltaMode===2?innerHeight:1)*hx,H=document.documentElement.scrollHeight-innerHeight,Z=si??scrollY,ie=J.clamp(Z+D-scrollY,-2.2*innerHeight,2.2*innerHeight);return Yl(J.clamp(scrollY+ie,0,H))}if(v)return ud(Math.sign(v));let M=p.timeStamp,R=Math.sign(p.deltaY);(M-Mm>dx||R!==Sm)&&(Sm=R,dd=0,fd=!1),Mm=M,dd+=Math.abs(p.deltaY),!fd&&dd>=fx&&(fd=!0,ud(R))},{passive:!1}),addEventListener("keydown",p=>{if(Un||$n>0||$e||ks||p.altKey||p.ctrlKey||p.metaKey)return void(si=null);if(p.target.closest?.("input, textarea, select, [contenteditable]"))return;let v={ArrowDown:1,PageDown:1," ":p.shiftKey?-1:1,ArrowUp:-1,PageUp:-1}[p.key];v?(p.preventDefault(),ud(v)):(p.key==="Home"||p.key==="End")&&(p.preventDefault(),Yl(ua(p.key==="Home"?0:sr.length-1)))});function bm(p){if(si===null){ro=0;return}let v=Math.min((p-ro)/1e3,.1);ro=p;let M=scrollY+(si-scrollY)*(1-Math.exp(-v*7));if(scrollTo({top:Math.abs(si-M)<.5?si:M,behavior:"instant"}),Math.abs(si-scrollY)<.5){si=null,ro=0;return}requestAnimationFrame(bm)}let pd=!1;addEventListener("pointerdown",()=>{si=null,pd=!0});for(let p of["pointerup","pointercancel"])addEventListener(p,()=>{pd=!1,Am()});let wm=0,Am=()=>{clearTimeout(wm),wm=setTimeout(()=>{if(pd||Un||si!==null||$n>0||$e||ks||i)return;let p=ua(ym(scrollY));Math.abs(p-scrollY)>2&&Yl(p)},160)};addEventListener("scroll",()=>{si===null&&Am()},{passive:!0});function md(p){if(ks=!0,i){p(),ks=!1;return}ha.classList.add("on"),setTimeout(()=>{p(),requestAnimationFrame(()=>requestAnimationFrame(()=>{ha.classList.remove("on"),ks=!1}))},320)}function px(){md(()=>{mt=Qr(),Pi=0,oo=!0,cd(mt)})}$u(mt),pm(0,performance.now()),window.__probe=()=>({fly:[xt.group.visible,+h.position.distanceTo(xt.group.position).toFixed(3),+h.near.toExponential(2),Bs.style.opacity],bepi:[xt.group.visible,...xt.group.position.toArray().map(p=>+p.toFixed(2))],merc:k.center.toArray().map(p=>+p.toFixed(2)),cam:h.position.toArray().map(p=>+p.toFixed(2)),shown:mt,goal:Qr(),at:We[Math.floor(mt)],pace:dm(mt)});let Tm=new Dt,Zl=new yt,oo=!0,Em=performance.now();function gd(p){let v=Math.min(p-Em,100)/1e3;if(Em=p,!_m){requestAnimationFrame(gd);return}ax(v);let M=i?0:p/1e3,R=i?1:1-Math.exp(-v*3);Vl&&nx();let D=$e?We.indexOf("jupiter"):Qr();!ks&&!$e&&Math.abs(D-mt)>2.5&&px();let H=dm(mt),Z=mt;if(i)mt+=(D-mt)*R,Pi=0;else{let je=cx;Pi+=(je*je*(D-mt)-2*je*Pi)*v,Pi=J.clamp(Pi,-H,H),mt+=Pi*v,Math.abs(D-mt)<1e-4&&Math.abs(Pi)<.001&&(mt=D,Pi=0)}let ie=v>0?Math.abs(mt-Z)/v/H:0,me=ed?1:1-J.smoothstep(ie,.05,.2);e=me<e?me:e+(me-e)*(1-Math.exp(-v*1.5)),$e&&($e.clock+=($e.target-$e.clock)*(i?1:1-Math.exp(-v*($e.closing?5:2.2))),$e.ramp=J.clamp($e.ramp+($e.closing?-v:v)/.8,0,1),$e.closing&&$e.ramp===0&&Math.abs($e.clock-$e.back)<.002&&($e=null)),q_(v),$u(mt);{let je=Math.min(Math.floor(mt),Hn.length-1),en=mt-je;We[je]==="exo"&&We[je+1]==="sun"&&en<.5&&(he.xMorph=1,he.lLock=1)}let se=he.gDepth>.97&&he.gProbe<.01;Du=i?se?1.6:0:J.clamp(Du+(se?v/2.5:-v/.8),0,1.6),he.gDepth=Math.min(he.gDepth,J.smootherstep(Du,.6,1.6)),lr=he.gMap>.01?Math.min(lr+(i?0:v*.8*he.gMap),200):he.gCover>.01?lr:0,cd(mt),lx(mt);let ge=pm(v,p);k.setCenter(Zu);let xe=We.indexOf("jupiter"),Ae=We.indexOf("juice"),Qe=gl(),tt=xe>=0&&mt>xe-.02&&mt<Qe+.6,gt=pl(mt),et=$e?-1:jo(mt),Ct=We.indexOf("juice-tour"),Rt=Math.max(We.indexOf("ganymede"),We.indexOf("ocean-depth"),We.indexOf("ocean-probes"));E&&Ct>=0&&(mt<Ct-.6?(ii=0,ar=0):i?(ii=1,ar=Ce):Math.abs(mt-Ct)<.5&&(ii=Math.min(1,ii+v/Ce),ar+=v));let Te=E&&Ct>=0&&mt>Ct-.6&&mt<Rt+.7;oe=Te;let we=Te?fe(ii):E&&$e?fe(gt):et>=0?fe(et):-1;if(we<0)ye=null;else if(!$e)ye={s0:0,phase:[0,0,0,0],story:!0};else if(!ye||ye.story){let je=en=>en-Math.PI*2*Math.round(en/(Math.PI*2));ye={s0:gt,phase:Ge.map((en,ui)=>je(en.phase-ce(ui,we)))}}V_(we);let Ze=We.indexOf("ganymede"),Tt=Math.max(We.indexOf("ocean-depth"),We.indexOf("ocean-probes")),Gt=E&&tt&&!$e||Ze>=0&&mt>Ze-.7&&mt<Math.max(Ze,Tt)+.7;if(!tt||we>=0||Gt)Mt=null;else if(!Mt){let je=((it-Le.phase)%(Math.PI*2)+Math.PI*2)%(Math.PI*2);Mt={start:Ge.map(en=>en.phase),advance:je+Math.PI*2}}let Se=tt?W(gt):0;for(let je of Ge){if(we>=0?je.phase=ae(Ge.indexOf(je),we,$e?gt:0):Mt?je.phase=Mt.start[Ge.indexOf(je)]+Mt.advance*(bs[2].period/je.period)*Se:!i&&!Gt&&(je.phase+=v*Math.PI*2*(bs[0].period/je.period)/_1),we<0&&!Mt&&xe>=0){let ui=J.clamp(mt-xe,-.4,Cs);je.phase+=Math.PI*2*(bs[2].period/je.period)*(ui-(je.scrollTurn??ui)),je.scrollTurn=ui}if(je.mesh.scale.setScalar(_t()),je===Le&&Bl){let{d0:ui,d1:$l}=Bl,mx=J.clamp(h.position.distanceTo(Ue),$l,ui),gx=Math.log(ui/mx)/Math.log(ui/$l);je.mesh.scale.setScalar(kg**(1-gx))}let en=je.phase;je.shown=en,je.mesh.position.set(Math.cos(en)*je.orbit,0,-Math.sin(en)*je.orbit),je.mesh.rotation.y=en,je===Le&&!Xe&&(je.mesh.rotation.y+=Jn*q(mt)),je.line.material.opacity=.35*he.jOrbits,je.line.visible=he.jOrbits>.001}w(mt),ns(mt),fp(mt,v),J_(mt);let dt=Math.max(0,(dr-.52)/.3);xt.update({thrust:1-J.smoothstep(dr,.42,.5),separation:dt,time:M}),t.push(()=>{if(n=!1,dt>0){xt.group.updateMatrixWorld(!0),xt.mtm.getWorldPosition(s),h.updateMatrixWorld();let je=Yo*Mn*Gi*1.2/h.position.distanceTo(s)*r.domElement.height/Math.tan(J.degToRad(h.fov/2));s.applyMatrix4(h.matrixWorldInverse);let en=Math.tan(J.degToRad(h.fov/2)),ui=-s.z,$l=ui<=0||Math.abs(s.x/ui)>1.15*en*h.aspect||Math.abs(s.y/ui)>1.15*en;(je<3||$l)&&(n=!0)}xt.mtm.visible=!n}),lm(mt),$n>0&&Y_();let Ht=um(hn);if(h.position.copy(hn),Tm.lookAt(h.position,ci,io??h.up),Zl.setFromRotationMatrix(Tm),ca>0&&td!==nd&&nd!==-1&&(oo=!0),nd=ca>0?td:-1,ql.style.opacity=ca.toFixed(3),i||oo||Qu||$n>0)h.quaternion.copy(Zl);else{let je=h.quaternion.angleTo(Zl);h.quaternion.rotateTowards(Zl,Math.min(je*(1-Math.exp(-v*6)),v*.8))}oo=!1,h.near=J.clamp(.05*Ht,1e-7,5e3),h.updateProjectionMatrix();for(let je of t)je();t.length=0,kl<1/0&&(h.near=Math.min(h.near,.05*kl),h.updateProjectionMatrix()),ss.visible&&(h.near=Math.min(h.near,Math.max(.05*(h.position.distanceTo(Vi.center)-8*Vi.radius),.01*Vi.radius)),h.updateProjectionMatrix()),h.updateMatrixWorld(),I.position.copy(h.position),I.scale.setScalar(h.near*.25),A(),C.update({dt:v,time:M,camera:h,wobble:he.eWobble,cut:he.eCut,waves:he.eWaves,field:he.eField,core:he.eCore,animate:!i}),he.mStrat>.97&&!i?El+=v:El=0;let rn=El%12/12,un=Math.max(he.mStrong,El>0?J.smoothstep(rn,.46,.5)*(1-J.smoothstep(rn,.96,1)):0);if(k.update({dt:v,time:M,camera:h,cut:he.mCut*(1-.55*qp),waves:[he.mWaves*(1-he.mStrat),he.mWaves*he.mStrat*(1-un),he.mWaves*un],field:he.mField,animate:!i,spinAngle:Ju+Xp+Mu,scale:Gl(),stretch:1+.45*he.mOrbit}),Kg(v),$.orbits&&he.mOrbit>.5){let je=ge/(Math.PI*2);$.orbits.textContent=je.toFixed(1),$.spins.textContent=(1.5*je).toFixed(1)}let jn=i?Zp[0][0]:D_(p/1e3),hi=J.clamp((Jp(jn)-.1)/.8,0,1),ao=J.clamp(jn*(hu-1),0,hu-1);for(let je of[1,2])_r.waveMaterials[je].uniforms.uFrame.value=ao;L_();for(let je of Yr){if(!je.planet.root.visible)continue;let en=je.name==="ganymede";en&&!i&&(Ul+=v*.03),je.planet.update({dt:v,time:M,camera:h,cut:en?Math.max(he.gDepth*(1-.55*Wp),he.gOcean):he.gDepth,cutTurn:en?Dp():35*Math.PI/180,animate:!i,scale:en?1.003:1,waves:en?he.gOcean:0,spinAngle:en?Ul+Gu:void 0,stretch:en?Le.mesh.scale.x/Le.mesh.scale.y:1}),je.planet.surface.material.opacity=je.fade??1,en&&je.planet.surface.quaternion.copy(S_.setFromAxisAngle(ws,Ul+Gu)).multiply(Fp)}A_(),w_(M),x_(v,M),m_(v,M),P_(v),_r.update({dt:v,time:M,camera:h,cut:he.nCut,cutTurn:35*Math.PI/180,animate:!i,waves:[he.nWaves*(1-he.nHeat),he.nWaves*he.nHeat*(1-.7*hi),he.nWaves*he.nHeat*hi]}),Yp.update(M,he.nPlume);let Jl=hi*he.nHeat;_r.layerColors.uLow.value[1].set(Ol.low).lerp(Ol.hotLow,Jl),_r.layerColors.uHigh.value[1].set(Ol.high).lerp(Ol.hotHigh,Jl),he.lLock>.5&&N_(p/1e3),oa.sweep&&he.nHeat>.5&&(oa.sweep.setAttribute("x1",(jn*300).toFixed(1)),oa.sweep.setAttribute("x2",(jn*300).toFixed(1)));for(let je of ct)je.material.opacity=.35*he.xMap,je.visible=he.xMap>.001;if(F.material.opacity=Math.max(.6*he.mOrbit,.35*he.xMap),de.visible=he.xMap>.001,de.material.opacity=he.xMap,He.forEach(([je],en)=>de.geometry.attributes.position.setXYZ(en,...(je??Zu).toArray())),de.geometry.attributes.position.needsUpdate=!0,H_(mt),V.scale.setScalar(Math.max(Je.radius*4.2,h.position.distanceTo(Je.center)*.05)),O.uniforms.uOpacity.value=1-Math.max(he.eCut,he.eCore,he.eField*.6),N.visible=O.uniforms.uOpacity.value>.01,O.uniforms.uSun.value.copy(uu).transformDirection(h.matrixWorldInverse),!i)for(let[je,en]of P)je.rotation.y+=v*en;r.render(u,h),requestAnimationFrame(gd)}requestAnimationFrame(gd)}function b1(i,e,t=700){let n=[],s=[],r=[];for(let l=0;l<t;l++){let d=l%4-1.5,f=(Math.random()-.5)*.9,u=f*.5,h=d*.13+f*.08,_=new T(u,-Math.sqrt(Math.max(0,1-u*u-h*h)),h).multiplyScalar(e),y=new T((Math.random()-.5)*.5+u*.6,-1,(Math.random()-.5)*.5+h*.6).normalize();r.push(_.x,_.y,_.z),s.push(y.x,y.y,y.z),n.push(Math.random())}let o=new It;o.setAttribute("position",new nt(r,3)),o.setAttribute("aDir",new nt(s,3)),o.setAttribute("aSeed",new nt(n,1));let a=new cn({uniforms:{uTime:{value:0},uOpacity:{value:0},uLength:{value:e*2.2},uScale:{value:innerHeight*.5},uSize:{value:e/.6}},vertexShader:`
      attribute vec3 aDir;
      attribute float aSeed;
      uniform float uTime, uLength, uScale, uSize;
      varying float vAge;
      void main() {
        float age = fract(aSeed + uTime * (0.12 + 0.06 * aSeed));
        vAge = age;
        vec3 p = position + aDir * uLength * age * (0.6 + 0.4 * aSeed);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (0.02 + 0.07 * age) * uSize * uScale / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uOpacity;
      varying float vAge;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float a = (1.0 - smoothstep(0.0, 1.0, d)) * pow(1.0 - vAge, 2.0) * smoothstep(0.0, 0.05, vAge);
        gl_FragColor = vec4(vec3(0.85, 0.93, 1.0), a * 0.55 * uOpacity);
      }`,transparent:!0,depthWrite:!1,blending:yn}),c=new $s(o,a);return c.position.copy(i),c.frustumCulled=!1,{points:c,update(l,d){c.visible=d>.001,a.uniforms.uTime.value=l,a.uniforms.uOpacity.value=d,a.uniforms.uScale.value=innerHeight*.5}}}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
