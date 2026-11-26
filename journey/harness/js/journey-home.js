var jp=0,od=1,Kp=2;var wa=1,Qp=2,co=3,Ds=0,Jn=1,wn=2,nr=0,ho=1,Vn=2,ad=3,ld=4,em=5;var ir=100,tm=101,nm=102,im=103,sm=104,rm=200,om=201,am=202,lm=203,cd=204,hd=205,cm=206,hm=207,um=208,dm=209,fm=210,pm=211,mm=212,gm=213,_m=214,$l=0,jl=1,Kl=2,$r=3,Ql=4,ec=5,tc=6,nc=7,Oc=0,xm=1,vm=2,Xi=0,ud=1,dd=2,fd=3,pd=4,md=5,gd=6,_d=7;var xd=300,sr=301,uo=302,Bc=303,zc=304,$s=1e3,Gi=1001,ic=1002,In=1003,ym=1004;var Aa=1005;var qn=1006,kc=1007;var cs=1008;var Qn=1009,vd=1010,yd=1011,fo=1012,Vc=1013,Ii=1014,Li=1015,Di=1016,Gc=1017,Hc=1018,rr=1020,Md=35902,Sd=35899,bd=1021,wd=1022,Ni=1023,as=1026,hs=1027,Ad=1028,Wc=1029,Ns=1030,Xc=1031;var qc=1033,Ta=33776,Ea=33777,Ca=33778,Ra=33779,Yc=35840,Zc=35841,Jc=35842,$c=35843,jc=36196,Kc=37492,Qc=37496,eh=37488,th=37489,Pa=37490,nh=37491,ih=37808,sh=37809,rh=37810,oh=37811,ah=37812,lh=37813,ch=37814,hh=37815,uh=37816,dh=37817,fh=37818,ph=37819,mh=37820,gh=37821,_h=36492,xh=36494,vh=36495,yh=36283,Mh=36284,Ia=36285,Sh=36286;var Qo=2300,sc=2301,Yl=2302,Ku=2303,Qu=2400,ed=2401,td=2402;var Mm=3200;var bh=0,Sm=1,us="",cn="srgb",ea="srgb-linear",ta="linear",Zt="srgb";var Zl=7680;var bm=519,wm=512,Am=513,Tm=514,Td=515,Em=516,Cm=517,Ed=518,Cd=519,Rd=35044;var Pd="300 es",pi=2e3,jr=2001;function Fg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Og(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rm(){let i=Kr("canvas");return i.style.display="block",i}var pp={},Qr=null;function na(...i){let e="THREE."+i.shift();Qr?Qr("log",e,...i):console.log(e,...i)}function Pm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function rt(...i){i=Pm(i);let e="THREE."+i.shift();if(Qr)Qr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ft(...i){i=Pm(i);let e="THREE."+i.shift();if(Qr)Qr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Zo(...i){let e=i.join(" ");e in pp||(pp[e]=!0,rt(...i))}function Im(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lm={[$l]:$l,[Kl]:tc,[Ql]:Ql,[$r]:ec,[jl]:jl,[tc]:Kl,[nc]:nc,[ec]:$r},Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mp=1234567,Jo=Math.PI/180,eo=180/Math.PI;function Us(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function Id(i,e){return(i%e+e)%e}function Bg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zg(i,e,t){return i!==e?(t-i)/(e-i):0}function $o(i,e,t){return(1-t)*i+t*e}function kg(i,e,t,n){return $o(i,e,1-Math.exp(-t*n))}function Vg(i,e=1){return e-Math.abs(Id(i,e*2)-e)}function Gg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xg(i,e){return i+Math.random()*(e-i)}function qg(i){return i*(.5-Math.random())}function Yg(i){i!==void 0&&(mp=i);let e=mp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zg(i){return i*Jo}function Jg(i){return i*eo}function $g(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function jg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ld(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),d=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),h=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*d,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*d,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*d,a*l);break;case"XZX":i.set(a*d,c*g,c*h,a*l);break;case"YXY":i.set(c*h,a*d,c*g,a*l);break;case"ZYZ":i.set(c*g,c*h,a*d,a*l);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Dd(i,e){if(e.constructor===Float32Array)return i;let t=wh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Nd(i,e){if(e.constructor===Float32Array)return i;let t=wh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var le={DEG2RAD:Jo,RAD2DEG:eo,generateUUID:Us,clamp:Ct,euclideanModulo:Id,mapLinear:Bg,inverseLerp:zg,lerp:$o,damp:kg,pingpong:Vg,smoothstep:Gg,smootherstep:Hg,randInt:Wg,randFloat:Xg,randFloatSpread:qg,seededRandom:Yg,degToRad:Zg,radToDeg:Jg,isPowerOfTwo:$g,ceilPowerOfTwo:jg,floorPowerOfTwo:Ld,setQuaternionFromProperEuler:Kg,normalize:Nd,denormalize:Dd},kd=class kd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kd.prototype.isVector2=!0;var Oe=kd,yt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],f=n[s+3],u=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3];if(f!==v||c!==u||l!==h||d!==g){let m=c*u+l*h+d*g+f*v;m<0&&(u=-u,h=-h,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),P=Math.sin(M);p=Math.sin(p*M)/P,a=Math.sin(a*M)/P,c=c*p+u*a,l=l*p+h*a,d=d*p+g*a,f=f*p+v*a}else{c=c*p+u*a,l=l*p+h*a,d=d*p+g*a,f=f*p+v*a;let M=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=M,l*=M,d*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],f=r[o],u=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+d*f+c*h-l*u,e[t+1]=c*g+d*u+l*f-a*h,e[t+2]=l*g+d*h+a*u-c*f,e[t+3]=d*g-a*f-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),f=a(r/2),u=c(n/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*d*f+l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f-u*h*g;break;case"YXZ":this._x=u*d*f+l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f+u*h*g;break;case"ZXY":this._x=u*d*f-l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f-u*h*g;break;case"ZYX":this._x=u*d*f-l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f+u*h*g;break;case"YZX":this._x=u*d*f+l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f-u*h*g;break;case"XZY":this._x=u*d*f-l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f+u*h*g;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=n+a+f;if(u>0){let h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>f){let h=2*Math.sqrt(1+n-a-f);this._w=(d-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>f){let h=2*Math.sqrt(1+a-n-f);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+d)/h}else{let h=2*Math.sqrt(1+f-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vd=class Vd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),d=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*d,this.y=n+c*d+a*l-r*f,this.z=s+c*f+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vd.prototype.isVector3=!0;var T=Vd,Eu=new T,gp=new yt,Gd=class Gd{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],f=n[7],u=n[2],h=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],P=s[4],w=s[7],C=s[2],R=s[5],x=s[8];return r[0]=o*v+a*M+c*C,r[3]=o*m+a*P+c*R,r[6]=o*p+a*w+c*x,r[1]=l*v+d*M+f*C,r[4]=l*m+d*P+f*R,r[7]=l*p+d*w+f*x,r[2]=u*v+h*M+g*C,r[5]=u*m+h*P+g*R,r[8]=u*p+h*w+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,u=a*c-d*r,h=l*r-o*c,g=t*f+n*u+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*l-d*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(d*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=h*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Zo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cu.makeScale(e,t)),this}rotate(e){return Zo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cu.makeRotation(-e)),this}translate(e,t){return Zo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gd.prototype.isMatrix3=!0;var mt=Gd,Cu=new mt,_p=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xp=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qg(){let i={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Zt&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Zt&&(s.r=Jr(s.r),s.g=Jr(s.g),s.b=Jr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ea]:{primaries:e,whitePoint:n,transfer:ta,toXYZ:_p,fromXYZ:xp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:n,transfer:Zt,toXYZ:_p,fromXYZ:xp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}var Ut=Qg();function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ir,rc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=Kr("canvas")),Ir.width=e.width,Ir.height=e.height;let s=Ir.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Kr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(os(t[n]/255)*255):t[n]=os(t[n]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},e_=0,to=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ru(s[o].image)):r.push(Ru(s[o]))}else r=Ru(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ru(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}var t_=0,Pu=new T,Ln=class i extends Hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=qn,o=cs,a=Ni,c=Qn,l=i.DEFAULT_ANISOTROPY,d=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Us(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Pu).x}get height(){return this.source.getSize(Pu).y}get depth(){return this.source.getSize(Pu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=xd;Ln.DEFAULT_ANISOTROPY=1;var Hd=class Hd{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],h=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let P=(l+1)/2,w=(h+1)/2,C=(p+1)/2,R=(d+u)/4,x=(f+v)/4,A=(g+m)/4;return P>w&&P>C?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=R/n,r=x/n):w>C?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=R/s,r=A/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=A/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(u-d)/M,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hd.prototype.isVector4=!0;var hn=Hd,oc=class extends Hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ln({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new to(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends oc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ia=class extends Ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends Ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Fc=class Fc{constructor(e,t,n,s,r,o,a,c,l,d,f,u,h,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,d,f,u,h,g,v,m)}set(e,t,n,s,r,o,a,c,l,d,f,u,h,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=f,p[14]=u,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*d,h=o*f,g=a*d,v=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*d,h=c*f,g=l*d,v=l*f;t[0]=u+v*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=h*a-g,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*d,h=c*f,g=l*d,v=l*f;t[0]=u-v*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*d,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*d,h=o*f,g=a*d,v=a*f;t[0]=c*d,t[4]=g*l-h,t[8]=u*l+v,t[1]=c*f,t[5]=v*l+u,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*d,t[4]=v-u*f,t[8]=g*f+h,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=h*f+g,t[10]=u-v*f}else if(e.order==="XZY"){let u=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+v,t[5]=o*d,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*d,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n_,e,i_)}lookAt(e,t,n){let s=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ms.crossVectors(n,ri),Ms.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ms.crossVectors(n,ri)),Ms.normalize(),yl.crossVectors(ri,Ms),s[0]=Ms.x,s[4]=yl.x,s[8]=ri.x,s[1]=Ms.y,s[5]=yl.y,s[9]=ri.y,s[2]=Ms.z,s[6]=yl.z,s[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],f=n[5],u=n[9],h=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],P=n[7],w=n[11],C=n[15],R=s[0],x=s[4],A=s[8],O=s[12],N=s[1],z=s[5],k=s[9],K=s[13],F=s[2],Z=s[6],Q=s[10],G=s[14],j=s[3],J=s[7],re=s[11],ue=s[15];return r[0]=o*R+a*N+c*F+l*j,r[4]=o*x+a*z+c*Z+l*J,r[8]=o*A+a*k+c*Q+l*re,r[12]=o*O+a*K+c*G+l*ue,r[1]=d*R+f*N+u*F+h*j,r[5]=d*x+f*z+u*Z+h*J,r[9]=d*A+f*k+u*Q+h*re,r[13]=d*O+f*K+u*G+h*ue,r[2]=g*R+v*N+m*F+p*j,r[6]=g*x+v*z+m*Z+p*J,r[10]=g*A+v*k+m*Q+p*re,r[14]=g*O+v*K+m*G+p*ue,r[3]=M*R+P*N+w*F+C*j,r[7]=M*x+P*z+w*Z+C*J,r[11]=M*A+P*k+w*Q+C*re,r[15]=M*O+P*K+w*G+C*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=c*h-l*u,P=a*h-l*f,w=a*u-c*f,C=o*h-l*d,R=o*u-c*d,x=o*f-a*d;return t*(v*M-m*P+p*w)-n*(g*M-m*C+p*R)+s*(g*P-v*C+p*x)-r*(g*w-v*R+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-n*(r*d-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=t*a-n*o,P=t*c-s*o,w=t*l-r*o,C=n*c-s*a,R=n*l-r*a,x=s*l-r*c,A=d*v-f*g,O=d*m-u*g,N=d*p-h*g,z=f*m-u*v,k=f*p-h*v,K=u*p-h*m,F=M*K-P*k+w*z+C*N-R*O+x*A;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/F;return e[0]=(a*K-c*k+l*z)*Z,e[1]=(s*k-n*K-r*z)*Z,e[2]=(v*x-m*R+p*C)*Z,e[3]=(u*R-f*x-h*C)*Z,e[4]=(c*N-o*K-l*O)*Z,e[5]=(t*K-s*N+r*O)*Z,e[6]=(m*w-g*x-p*P)*Z,e[7]=(d*x-u*w+h*P)*Z,e[8]=(o*k-a*N+l*A)*Z,e[9]=(n*N-t*k-r*A)*Z,e[10]=(g*R-v*w+p*M)*Z,e[11]=(f*w-d*R-h*M)*Z,e[12]=(a*O-o*z-c*A)*Z,e[13]=(t*z-n*O+s*A)*Z,e[14]=(v*P-g*C-m*M)*Z,e[15]=(d*C-f*P+u*M)*Z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,f=a+a,u=r*l,h=r*d,g=r*f,v=o*d,m=o*f,p=a*f,M=c*l,P=c*d,w=c*f,C=n.x,R=n.y,x=n.z;return s[0]=(1-(v+p))*C,s[1]=(h+w)*C,s[2]=(g-P)*C,s[3]=0,s[4]=(h-w)*R,s[5]=(1-(u+p))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(g+P)*x,s[9]=(m-M)*x,s[10]=(1-(u+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Lr.set(s[0],s[1],s[2]).length(),a=Lr.set(s[4],s[5],s[6]).length(),c=Lr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ai.copy(this);let l=1/o,d=1/a,f=1/c;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=d,Ai.elements[5]*=d,Ai.elements[6]*=d,Ai.elements[8]*=f,Ai.elements[9]*=f,Ai.elements[10]*=f,t.setFromRotationMatrix(Ai),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=pi,c=!1){let l=this.elements,d=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===pi)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===jr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi,c=!1){let l=this.elements,d=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),h=-(n+s)/(n-s),g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===pi)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===jr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fc.prototype.isMatrix4=!0;var Pt=Fc,Lr=new T,Ai=new Pt,n_=new T(0,0,0),i_=new T(1,1,1),Ms=new T,yl=new T,ri=new T,vp=new Pt,yp=new yt,Ri=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],f=s[2],u=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yp.setFromEuler(this),this.setFromQuaternion(yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},s_=0,Mp=new T,Dr=new yt,es=new Pt,Ml=new T,ko=new T,r_=new T,o_=new yt,Sp=new T(1,0,0),bp=new T(0,1,0),wp=new T(0,0,1),Ap={type:"added"},a_={type:"removed"},Nr={type:"childadded",child:null},Iu={type:"childremoved",child:null},kn=class i extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new Ri,n=new yt,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new mt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(Sp,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(wp,e)}translateOnAxis(e,t){return Mp.copy(e).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sp,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ml.copy(e):Ml.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(ko,Ml,this.up):es.lookAt(Ml,ko,this.up),this.quaternion.setFromRotationMatrix(es),s&&(es.extractRotation(s.matrixWorld),Dr.setFromRotationMatrix(es),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ap),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a_),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),es.multiply(e.parent.matrixWorld)),e.applyMatrix4(es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ap),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,r_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,o_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kn.DEFAULT_UP=new T(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=class extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}},l_={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&u>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function Lu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ut.workingColorSpace){if(e=Id(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lu(o,r,e+1/3),this.g=Lu(o,r,e),this.b=Lu(o,r,e-1/3)}return Ut.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function n(r){r!==void 0&&parseFloat(r)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){let n=Dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return Ut.workingToColorSpace(Bn.copy(this),e),Math.round(Ct(Bn.r*255,0,255))*65536+Math.round(Ct(Bn.g*255,0,255))*256+Math.round(Ct(Bn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,s=Bn.g,r=Bn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=cn){Ut.workingToColorSpace(Bn.copy(this),e);let t=Bn.r,n=Bn.g,s=Bn.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(Sl);let n=$o(Ss.h,Sl.h,t),s=$o(Ss.s,Sl.s,t),r=$o(Ss.l,Sl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new Ye;Ye.NAMES=Dm;var ra=class extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new T,ts=new T,Du=new T,ns=new T,Ur=new T,Fr=new T,Tp=new T,Nu=new T,Uu=new T,Fu=new T,Ou=new hn,Bu=new hn,zu=new hn,rs=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ti.subVectors(e,t),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ti.subVectors(s,t),ts.subVectors(n,t),Du.subVectors(e,t);let o=Ti.dot(Ti),a=Ti.dot(ts),c=Ti.dot(Du),l=ts.dot(ts),d=ts.dot(Du),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,h=(l*c-a*d)*u,g=(o*d-a*c)*u;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ns)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ns.x),c.addScaledVector(o,ns.y),c.addScaledVector(a,ns.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ou.setScalar(0),Bu.setScalar(0),zu.setScalar(0),Ou.fromBufferAttribute(e,t),Bu.fromBufferAttribute(e,n),zu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ou,r.x),o.addScaledVector(Bu,r.y),o.addScaledVector(zu,r.z),o}static isFrontFacing(e,t,n,s){return Ti.subVectors(n,t),ts.subVectors(e,t),Ti.cross(ts).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),Ti.cross(ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ur.subVectors(s,n),Fr.subVectors(r,n),Nu.subVectors(e,n);let c=Ur.dot(Nu),l=Fr.dot(Nu);if(c<=0&&l<=0)return t.copy(n);Uu.subVectors(e,s);let d=Ur.dot(Uu),f=Fr.dot(Uu);if(d>=0&&f<=d)return t.copy(s);let u=c*f-d*l;if(u<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(n).addScaledVector(Ur,o);Fu.subVectors(e,r);let h=Ur.dot(Fu),g=Fr.dot(Fu);if(g>=0&&h<=g)return t.copy(r);let v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Fr,a);let m=d*g-h*f;if(m<=0&&f-d>=0&&h-g>=0)return Tp.subVectors(r,s),a=(f-d)/(f-d+(h-g)),t.copy(s).addScaledVector(Tp,a);let p=1/(m+v+u);return o=v*p,a=u*p,t.copy(n).addScaledVector(Ur,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ts=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(r,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bl.copy(n.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),wl.subVectors(this.max,Vo),Or.subVectors(e.a,Vo),Br.subVectors(e.b,Vo),zr.subVectors(e.c,Vo),bs.subVectors(Br,Or),ws.subVectors(zr,Br),qs.subVectors(Or,zr);let t=[0,-bs.z,bs.y,0,-ws.z,ws.y,0,-qs.z,qs.y,bs.z,0,-bs.x,ws.z,0,-ws.x,qs.z,0,-qs.x,-bs.y,bs.x,0,-ws.y,ws.x,0,-qs.y,qs.x,0];return!ku(t,Or,Br,zr,wl)||(t=[1,0,0,0,1,0,0,0,1],!ku(t,Or,Br,zr,wl))?!1:(Al.crossVectors(bs,ws),t=[Al.x,Al.y,Al.z],ku(t,Or,Br,zr,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},is=[new T,new T,new T,new T,new T,new T,new T,new T],Ei=new T,bl=new Ts,Or=new T,Br=new T,zr=new T,bs=new T,ws=new T,qs=new T,Vo=new T,wl=new T,Al=new T,Ys=new T;function ku(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ys.fromArray(i,r);let a=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),c=e.dot(Ys),l=t.dot(Ys),d=n.dot(Ys);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var vn=new T,Tl=new Oe,c_=0,Ci=class extends Hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rd,this.updateRanges=[],this.gpuType=Li,this.version=0,this._normalizationScale=e!==void 0?wh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Dd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Nd(e,this.array)}};var oa=class extends Ci{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var aa=class extends Ci{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Ci{constructor(e,t,n){super(new Float32Array(e),t,n)}},h_=new Ts,Go=new T,Vu=new T,Es=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):h_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);let t=Go.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Go,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Vu)),this.expandByPoint(Go.copy(e.center).sub(Vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},u_=0,fi=new Pt,Gu=new kn,kr=new T,oi=new Ts,Ho=new Ts,Pn=new T,It=class i extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fg(e)?aa:oa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new mt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(oi.min,Ho.min),oi.expandByPoint(Pn),Pn.addVectors(oi.max,Ho.max),oi.expandByPoint(Pn)):(oi.expandByPoint(Ho.min),oi.expandByPoint(Ho.max))}oi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Pn.fromBufferAttribute(a,l),c&&(kr.fromBufferAttribute(e,l),Pn.add(kr)),s=Math.max(s,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ci(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let O=0;O<n.count;O++)a[O]=new T,c[O]=new T;let d=new T,f=new T,u=new T,h=new Oe,g=new Oe,v=new Oe,m=new T,p=new T;function M(O,N,z){l[O]=l[N]=l[z]=1,d.fromBufferAttribute(n,O),f.fromBufferAttribute(n,N),u.fromBufferAttribute(n,z),h.fromBufferAttribute(r,O),g.fromBufferAttribute(r,N),v.fromBufferAttribute(r,z),f.sub(d),u.sub(d),g.sub(h),v.sub(h);let k=1/(g.x*v.y-v.x*g.y);isFinite(k)&&(m.copy(f).multiplyScalar(v.y).addScaledVector(u,-g.y).multiplyScalar(k),p.copy(u).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(k),a[O].add(m),a[N].add(m),a[z].add(m),c[O].add(p),c[N].add(p),c[z].add(p))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let O=0,N=P.length;O<N;++O){let z=P[O],k=z.start,K=z.count;for(let F=k,Z=k+K;F<Z;F+=3)M(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let w=new T,C=new T,R=new T,x=new T;function A(O){R.fromBufferAttribute(s,O),x.copy(R);let N=a[O];w.copy(N),w.sub(R.multiplyScalar(R.dot(N))).normalize(),C.crossVectors(x,N);let k=C.dot(c[O])<0?-1:1;o.setXYZW(O,w.x,w.y,w.z,k)}for(let O=0,N=n.count;O<N;++O)l[O]&&A(O);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ci(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,d=new T,f=new T;if(e)for(let u=0,h=e.count;u<h;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,f=a.normalized,u=new l.constructor(c.length*d),h=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*d;for(let p=0;p<d;p++)u[g++]=l[h++]}return new Ci(u,d,f)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,f=l.length;d<f;d++){let u=l[d],h=e(u,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){let h=l[f];d.push(h.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],f=r[l];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},lc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rd,this.updateRanges=[],this.version=0,this.uuid=Us()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ep(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ep(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Ep(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Us()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Xn=new T,la=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?wh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ci(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Dd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Nd(e,this.data.array)}},Hu=new T,d_=new T,f_=new mt,ai=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Hu.subVectors(n,t).cross(d_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Hu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||f_.getNormalMatrix(e),s=this.coplanarPoint(Hu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},p_=0,Pi=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=ho,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=hd,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zl,this.stencilZFail=Zl,this.stencilZPass=Zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ai().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},js=class extends Pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vr,Wo=new T,Gr=new T,Hr=new T,Wr=new Oe,Xo=new Oe,Nm=new Pt,El=new T,qo=new T,Cl=new T,Cp=new Oe,Wu=new Oe,Rp=new Oe,io=class extends kn{constructor(e=new js){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lc(t,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new la(n,3,0,!1)),Vr.setAttribute("uv",new la(n,2,3,!1))}this.geometry=Vr,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gr.setFromMatrixScale(this.matrixWorld),Nm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gr.multiplyScalar(-Hr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Rl(El.set(-.5,-.5,0),Hr,o,Gr,s,r),Rl(qo.set(.5,-.5,0),Hr,o,Gr,s,r),Rl(Cl.set(.5,.5,0),Hr,o,Gr,s,r),Cp.set(0,0),Wu.set(1,0),Rp.set(1,1);let a=e.ray.intersectTriangle(El,qo,Cl,!1,Wo);if(a===null&&(Rl(qo.set(-.5,.5,0),Hr,o,Gr,s,r),Wu.set(0,1),a=e.ray.intersectTriangle(El,Cl,qo,!1,Wo),a===null))return;let c=e.ray.origin.distanceTo(Wo);c<e.near||c>e.far||t.push({distance:c,point:Wo.clone(),uv:rs.getInterpolation(Wo,El,qo,Cl,Cp,Wu,Rp,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Rl(i,e,t,n,s,r){Wr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Xo.x=r*Wr.x-s*Wr.y,Xo.y=s*Wr.x+r*Wr.y):Xo.copy(Wr),i.copy(e),i.x+=Xo.x,i.y+=Xo.y,i.applyMatrix4(Nm)}var ss=new T,Xu=new T,Pl=new T,Il=new T,so=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ss.copy(this.origin).addScaledVector(this.direction,t),ss.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xu.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),Il.copy(this.origin).sub(Xu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Pl),a=Il.dot(this.direction),c=-Il.dot(Pl),l=Il.lengthSq(),d=Math.abs(1-o*o),f,u,h,g;if(d>0)if(f=o*c-a,u=o*a-c,g=r*d,f>=0)if(u>=-g)if(u<=g){let v=1/d;f*=v,u*=v,h=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),h=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),h=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),h=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Xu).addScaledVector(Pl,u),h}intersectSphere(e,t){if(e.radius<0)return null;ss.subVectors(e.center,this.origin);let n=ss.dot(this.direction),s=ss.dot(ss)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ss)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,f=e.x-o.x,u=e.y-o.y,h=e.z-o.z,g=t.x-o.x,v=t.y-o.y,m=t.z-o.z,p=n.x-o.x,M=n.y-o.y,P=n.z-o.z,w=Math.abs(c),C=Math.abs(l),R=Math.abs(d),x,A,O,N,z,k,K,F,Z,Q,G,j;if(w>=C&&w>=R?(O=c,k=f,Z=g,j=p,c>=0?(x=l,A=d,N=u,z=h,K=v,F=m,Q=M,G=P):(x=d,A=l,N=h,z=u,K=m,F=v,Q=P,G=M)):C>=R?(O=l,k=u,Z=v,j=M,l>=0?(x=d,A=c,N=h,z=f,K=m,F=g,Q=P,G=p):(x=c,A=d,N=f,z=h,K=g,F=m,Q=p,G=P)):(O=d,k=h,Z=m,j=P,d>=0?(x=c,A=l,N=f,z=u,K=g,F=v,Q=p,G=M):(x=l,A=c,N=u,z=f,K=v,F=g,Q=M,G=p)),O===0)return null;let J=x/O,re=A/O,ue=1/O,ke=N-J*k,lt=z-re*k,q=K-J*Z,pe=F-re*Z,Se=Q-J*j,Ie=G-re*j,de=Se*pe-Ie*q,ge=ke*Ie-lt*Se,At=q*lt-pe*ke;if(s){if(de<0||ge<0||At<0)return null}else if((de<0||ge<0||At<0)&&(de>0||ge>0||At>0))return null;let Ge=de+ge+At;if(Ge===0)return null;let Be=ue*(de*k+ge*Z+At*j);return(Ge>0?Be<0:Be>0)?null:this.at(Be/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wi=class extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pp=new Pt,Zs=new so,Ll=new Es,Ip=new T,Dl=new T,Nl=new T,Ul=new T,qu=new T,Fl=new T,Lp=new T,Ol=new T,ot=class extends kn{constructor(e=new It,t=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Fl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],f=r[c];d!==0&&(qu.fromBufferAttribute(f,e),o?Fl.addScaledVector(qu,d):Fl.addScaledVector(qu.sub(t),d))}t.add(Fl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(r),Zs.copy(e.ray).recast(e.near),!(Ll.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Ll,Ip)===null||Zs.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Pp.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(Pp),!(n.boundingBox!==null&&Zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),P=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let w=M,C=P;w<C;w+=3){let R=a.getX(w),x=a.getX(w+1),A=a.getX(w+2);s=Bl(this,p,e,n,l,d,f,R,x,A),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let M=a.getX(m),P=a.getX(m+1),w=a.getX(m+2);s=Bl(this,o,e,n,l,d,f,M,P,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),P=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let w=M,C=P;w<C;w+=3){let R=w,x=w+1,A=w+2;s=Bl(this,p,e,n,l,d,f,R,x,A),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let M=m,P=m+1,w=m+2;s=Bl(this,o,e,n,l,d,f,M,P,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function m_(i,e,t,n,s,r,o,a){let c;if(e.side===Jn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ds,a),c===null)return null;Ol.copy(a),Ol.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ol);return l<t.near||l>t.far?null:{distance:l,point:Ol.clone(),object:i}}function Bl(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Dl),i.getVertexPosition(c,Nl),i.getVertexPosition(l,Ul);let d=m_(i,e,t,n,Dl,Nl,Ul,Lp);if(d){let f=new T;rs.getBarycoord(Lp,Dl,Nl,Ul,f),s&&(d.uv=rs.getInterpolatedAttribute(s,a,c,l,f,new Oe)),r&&(d.uv1=rs.getInterpolatedAttribute(r,a,c,l,f,new Oe)),o&&(d.normal=rs.getInterpolatedAttribute(o,a,c,l,f,new T),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new T,materialIndex:0};rs.getNormal(Dl,Nl,Ul,u.normal),d.face=u,d.barycoord=f}return d}var cc=class extends Ln{constructor(e=null,t=1,n=1,s,r,o,a,c,l=In,d=In,f,u){super(null,o,a,c,l,d,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Js=new Es,g_=new Oe(.5,.5),zl=new T,Cs=class{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],f=r[5],u=r[6],h=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],P=r[13],w=r[14],C=r[15];if(s[0].setComponents(l-o,h-d,p-g,C-M).normalize(),s[1].setComponents(l+o,h+d,p+g,C+M).normalize(),s[2].setComponents(l+a,h+f,p+v,C+P).normalize(),s[3].setComponents(l-a,h-f,p-v,C-P).normalize(),n)s[4].setComponents(c,u,m,w).normalize(),s[5].setComponents(l-c,h-u,p-m,C-w).normalize();else if(s[4].setComponents(l-c,h-u,p-m,C-w).normalize(),t===pi)s[5].setComponents(l+c,h+u,p+m,C+w).normalize();else if(t===jr)s[5].setComponents(c,u,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);let t=g_.distanceTo(e.center);return Js.radius=.7071067811865476+t,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(zl.x=s.normal.x>0?e.max.x:e.min.x,zl.y=s.normal.y>0?e.max.y:e.min.y,zl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Dp=new Pt,hc=class i{constructor(){this.coordinateSystem=pi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Dp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Cs),n[s].setFromProjectionMatrix(Dp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Cs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var yn=class extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uc=new T,dc=new T,Np=new Pt,Yo=new so,kl=new Es,Yu=new T,Up=new T,Nn=class extends kn{constructor(e=new It,t=new yn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)uc.fromBufferAttribute(t,s-1),dc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=uc.distanceTo(dc);e.setAttribute("lineDistance",new it(n,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kl.copy(n.boundingSphere),kl.applyMatrix4(s),kl.radius+=r,e.ray.intersectsSphere(kl)===!1)return;Np.copy(s).invert(),Yo.copy(e.ray).applyMatrix4(Np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=l){let p=d.getX(v),M=d.getX(v+1),P=Vl(this,e,Yo,c,p,M,v);P&&t.push(P)}if(this.isLineLoop){let v=d.getX(g-1),m=d.getX(h),p=Vl(this,e,Yo,c,v,m,g-1);p&&t.push(p)}}else{let h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=l){let p=Vl(this,e,Yo,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Vl(this,e,Yo,c,g-1,h,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(uc.fromBufferAttribute(a,s),dc.fromBufferAttribute(a,r),t.distanceSqToSegment(uc,dc,Yu,Up)>n)return;Yu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Yu);if(!(l<e.near||l>e.far))return{distance:l,point:Up.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fp=new T,Op=new T,ro=class extends Nn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Fp.fromBufferAttribute(t,s),Op.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fp.distanceTo(Op);e.setAttribute("lineDistance",new it(n,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ks=class extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bp=new Pt,nd=new so,Gl=new Es,Hl=new T,Rs=class extends kn{constructor(e=new It,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(s),Gl.radius+=r,e.ray.intersectsSphere(Gl)===!1)return;Bp.copy(s).invert(),nd.copy(e.ray).applyMatrix4(Bp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=u,v=h;g<v;g++){let m=l.getX(g);Hl.fromBufferAttribute(f,m),zp(Hl,m,c,s,e,t,this)}}else{let u=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=u,v=h;g<v;g++)Hl.fromBufferAttribute(f,g),zp(Hl,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zp(i,e,t,n,s,r,o){let a=nd.distanceSqToPoint(i);if(a<t){let c=new T;nd.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ca=class extends Ln{constructor(e=[],t=sr,n,s,r,o,a,c,l,d){super(e,t,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ci=class extends Ln{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends Ln{constructor(e,t,n=Ii,s,r,o,a=In,c=In,l,d=as,f=1){if(d!==as&&d!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ha=class extends ls{constructor(e,t=Ii,n=sr,s,r,o=In,a=In,c,l=as){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ua=class extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yn=class i extends It{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],f=[],u=0,h=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function g(v,m,p,M,P,w,C,R,x,A,O){let N=w/x,z=C/A,k=w/2,K=C/2,F=R/2,Z=x+1,Q=A+1,G=0,j=0,J=new T;for(let re=0;re<Q;re++){let ue=re*z-K;for(let ke=0;ke<Z;ke++){let lt=ke*N-k;J[v]=lt*M,J[m]=ue*P,J[p]=F,l.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[p]=R>0?1:-1,d.push(J.x,J.y,J.z),f.push(ke/x),f.push(1-re/A),G+=1}}for(let re=0;re<A;re++)for(let ue=0;ue<x;ue++){let ke=u+ue+Z*re,lt=u+ue+Z*(re+1),q=u+(ue+1)+Z*(re+1),pe=u+(ue+1)+Z*re;c.push(ke,lt,pe),c.push(lt,q,pe),j+=6}a.addGroup(h,j,O),h+=j,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var da=class i extends It{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new T,d=new Oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let h=n+f/t*s;l.x=e*Math.cos(h),l.y=e*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zn=class i extends It{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],u=[],h=[],g=0,v=[],m=n/2,p=0;M(),o===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(d),this.setAttribute("position",new it(f,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(h,2));function M(){let w=new T,C=new T,R=0,x=(t-e)/n;for(let A=0;A<=r;A++){let O=[],N=A/r,z=N*(t-e)+e;for(let k=0;k<=s;k++){let K=k/s,F=K*c+a,Z=Math.sin(F),Q=Math.cos(F);C.x=z*Z,C.y=-N*n+m,C.z=z*Q,f.push(C.x,C.y,C.z),w.set(Z,x,Q).normalize(),u.push(w.x,w.y,w.z),h.push(K,1-N),O.push(g++)}v.push(O)}for(let A=0;A<s;A++)for(let O=0;O<r;O++){let N=v[O][A],z=v[O+1][A],k=v[O+1][A+1],K=v[O][A+1];(e>0||O!==0)&&(d.push(N,z,K),R+=3),(t>0||O!==r-1)&&(d.push(z,k,K),R+=3)}l.addGroup(p,R,0),p+=R}function P(w){let C=g,R=new Oe,x=new T,A=0,O=w===!0?e:t,N=w===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,m*N,0),u.push(0,N,0),h.push(.5,.5),g++;let z=g;for(let k=0;k<=s;k++){let F=k/s*c+a,Z=Math.cos(F),Q=Math.sin(F);x.x=O*Q,x.y=m*N,x.z=O*Z,f.push(x.x,x.y,x.z),u.push(0,N,0),R.x=Z*.5+.5,R.y=Q*.5*N+.5,h.push(R.x,R.y),g++}for(let k=0;k<s;k++){let K=C+k,F=z+k;w===!0?d.push(F,F+1,K):d.push(F+1,F,K),A+=3}l.addGroup(p,A,w===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qs=class i extends Zn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let d=n[s],u=n[s+1]-d,h=(o-d)/u;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Oe:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,s=[],r=[],o=[],a=new T,c=new Pt;for(let h=0;h<=e;h++){let g=h/e;s[h]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ct(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Ct(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},fa=class extends mi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,h=l-this.aY;c=u*d-h*f+this.aX,l=u*f+h*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fc=class extends fa{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ud(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,d,f){let u=(o-r)/l-(a-r)/(l+d)+(a-o)/d,h=(a-o)/d-(c-o)/(d+f)+(c-a)/f;u*=d,h*=d,s(o,a,u,h)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var kp=new T,Vp=new T,Zu=new Ud,Ju=new Ud,$u=new Ud,er=class extends mi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,d;this.closed||a>0?l=s[(a-1)%r]:(Vp.subVectors(s[0],s[1]).add(s[0]),l=Vp);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(kp.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=kp),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),h),v=Math.pow(f.distanceToSquared(u),h),m=Math.pow(u.distanceToSquared(d),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Zu.initNonuniformCatmullRom(l.x,f.x,u.x,d.x,g,v,m),Ju.initNonuniformCatmullRom(l.y,f.y,u.y,d.y,g,v,m),$u.initNonuniformCatmullRom(l.z,f.z,u.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(Zu.initCatmullRom(l.x,f.x,u.x,d.x,this.tension),Ju.initCatmullRom(l.y,f.y,u.y,d.y,this.tension),$u.initCatmullRom(l.z,f.z,u.z,d.z,this.tension));return n.set(Zu.calc(c),Ju.calc(c),$u.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function __(i,e){let t=1-i;return t*t*e}function x_(i,e){return 2*(1-i)*i*e}function v_(i,e){return i*i*e}function jo(i,e,t,n){return __(i,e)+x_(i,t)+v_(i,n)}function y_(i,e){let t=1-i;return t*t*t*e}function M_(i,e){let t=1-i;return 3*t*t*i*e}function S_(i,e){return 3*(1-i)*i*i*e}function b_(i,e){return i*i*i*e}function Ko(i,e,t,n,s){return y_(i,e)+M_(i,t)+S_(i,n)+b_(i,s)}var pc=class extends mi{constructor(e=new Oe,t=new Oe,n=new Oe,s=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mc=class extends mi{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y),Ko(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gc=class extends mi{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_c=class extends mi{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xc=class extends mi{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(jo(e,s.x,r.x,o.x),jo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends mi{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(jo(e,s.x,r.x,o.x),jo(e,s.y,r.y,o.y),jo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vc=class extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],d=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Gp(a,c.x,l.x,d.x,f.x),Gp(a,c.y,l.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Oe().fromArray(s))}return this}},w_=Object.freeze({__proto__:null,ArcCurve:fc,CatmullRomCurve3:er,CubicBezierCurve:pc,CubicBezierCurve3:mc,EllipseCurve:fa,LineCurve:gc,LineCurve3:_c,QuadraticBezierCurve:xc,QuadraticBezierCurve3:pa,SplineCurve:vc});var tr=class i extends It{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ct(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],d=1/t,f=new T,u=new Oe,h=new T,g=new T,v=new T,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,h.x=p*1,h.y=-m,h.z=p*0,v.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:v.normalize(),c.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),c.push(h.x,h.y,h.z),v.copy(g)}for(let M=0;M<=t;M++){let P=n+M*d*s,w=Math.sin(P),C=Math.cos(P);for(let R=0;R<=e.length-1;R++){f.x=e[R].x*w,f.y=e[R].y,f.z=e[R].x*C,o.push(f.x,f.y,f.z),u.x=M/t,u.y=R/(e.length-1),a.push(u.x,u.y);let x=c[3*R+0]*w,A=c[3*R+1],O=c[3*R+0]*C;l.push(x,A,O)}}for(let M=0;M<t;M++)for(let P=0;P<e.length-1;P++){let w=P+M*e.length,C=w,R=w+e.length,x=w+e.length+1,A=w+1;r.push(C,R,A),r.push(x,A,R)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ma=class i extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,f=e/a,u=t/c,h=[],g=[],v=[],m=[];for(let p=0;p<d;p++){let M=p*u-o;for(let P=0;P<l;P++){let w=P*f-r;g.push(w,-M,0),v.push(0,0,1),m.push(P/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let P=M+l*p,w=M+l*(p+1),C=M+1+l*(p+1),R=M+1+l*p;h.push(P,w,R),h.push(w,C,R)}this.setIndex(h),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ga=class i extends It{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],d=[],f=e,u=(t-e)/s,h=new T,g=new Oe;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*o;h.x=f*Math.cos(p),h.y=f*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,d.push(g.x,g.y)}f+=u}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let M=p+m,P=M,w=M+n+1,C=M+n+2,R=M+1;a.push(P,w,R),a.push(w,C,R)}}this.setIndex(a),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Un=class i extends It{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],f=new T,u=new T,h=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],P=p/n,w=o+P*a,C=e*Math.cos(w),R=Math.sqrt(e*e-C*C),x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let O=A/t,N=s+O*r;f.x=-R*Math.cos(N),f.y=C,f.z=R*Math.sin(N),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(O+x,1-P),M.push(l++)}d.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let P=d[p][M+1],w=d[p][M],C=d[p+1][M],R=d[p+1][M+1];(p!==0||o>0)&&h.push(P,w,R),(p!==n-1||c<Math.PI)&&h.push(w,C,R)}this.setIndex(h),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var oo=class i extends It{constructor(e=new pa(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,c=new T,l=new Oe,d=new T,f=[],u=[],h=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new it(f,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(h,2));function v(){for(let P=0;P<t;P++)m(P);m(r===!1?t:0),M(),p()}function m(P){d=e.getPointAt(P/t,d);let w=o.normals[P],C=o.binormals[P];for(let R=0;R<=s;R++){let x=R/s*Math.PI*2,A=Math.sin(x),O=-Math.cos(x);c.x=O*w.x+A*C.x,c.y=O*w.y+A*C.y,c.z=O*w.z+A*C.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let P=1;P<=t;P++)for(let w=1;w<=s;w++){let C=(s+1)*(P-1)+(w-1),R=(s+1)*P+(w-1),x=(s+1)*P+w,A=(s+1)*(P-1)+w;g.push(C,R,A),g.push(R,x,A)}}function M(){for(let P=0;P<=t;P++)for(let w=0;w<=s;w++)l.x=P/t,l.y=w/s,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new w_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function or(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Hp(s))s.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Hp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Gn(i){let e={};for(let t=0;t<i.length;t++){let n=or(i[t]);for(let s in n)e[s]=n[s]}return e}function Hp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function A_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}var Um={clone:or,merge:Gn},T_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=A_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new T().fromArray(s.value);break;case"v4":this.uniforms[n].value=new hn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},yc=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Bt=class extends Pi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Oc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Mc=class extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var _a=class extends yn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Xr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ps=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bc=class extends Ps{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qu,endingEnd:Qu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ed:r=e,a=2*t-n;break;case td:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ed:o=e,c=2*n-t;break;case td:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,h=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,P=(-1-h)*m+(1.5+h)*v+.5*g,w=h*m-h*v;for(let C=0;C!==a;++C)r[C]=p*o[d+C]+M*o[l+C]+P*o[c+C]+w*o[f+C];return r}},wc=class extends Ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(s-t),f=1-d;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*d;return r}},Ac=class extends Ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Tc=class extends Ps{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*v+o[c+m]*g;return r}let u=a*2,h=e-1;for(let g=0;g!==a;++g){let v=o[l+g],m=o[c+g],p=h*u+g*2,M=f[p],P=f[p+1],w=e*u+g*2,C=d[w],R=d[w+1],x=R_(n,t,M,C,s);r[g]=Fm(x,v,P,R,m)}return r}};function Fm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function C_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function R_(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Fm(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=C_(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var hi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xr(t,this.TimeBufferType),this.values=Xr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xr(e.times,Array),values:Xr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wl(e.settings)&&(n.settings={inTangents:Xr(e.settings.inTangents,Array),outTangents:Xr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Tc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qo:t=this.InterpolantFactoryMethodDiscrete;break;case sc:t=this.InterpolantFactoryMethodLinear;break;case Yl:t=this.InterpolantFactoryMethodSmooth;break;case Ku:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return rt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qo;case this.InterpolantFactoryMethodLinear:return sc;case this.InterpolantFactoryMethodSmooth:return Yl;case this.InterpolantFactoryMethodBezier:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Wl(this.settings)&&(Wp(this.settings.inTangents,e),Wp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wl(this.settings)&&(Xp(this.settings.inTangents,e),Xp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ft("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ft("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Og(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ft("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,u=f-n,h=f+n;for(let g=0;g!==n;++g){let v=t[f+g];if(v!==t[u+g]||v!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let h=0;h!==n;++h)t[u+h]=t[f+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Xp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=sc;var Is=class extends hi{constructor(e,t,n){super(e,t,n)}};Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Qo;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};Ec.prototype.ValueTypeName="color";var Cc=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};Cc.prototype.ValueTypeName="number";var Rc=class extends Ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},xa=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}};xa.prototype.ValueTypeName="quaternion";xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends hi{constructor(e,t,n){super(e,t,n)}};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Qo;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Pc=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};Pc.prototype.ValueTypeName="vector";var Jl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(qp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!qp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function qp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ic=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=l.length;f<u;f+=2){let h=l[f],g=l[f+1];if(h.global&&(h.lastIndex=0),h.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Om=new Ic,ao=class{constructor(e){this.manager=e!==void 0?e:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var qr=new WeakMap,Lc=class extends ao{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Jl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=qr.get(o);f===void 0&&(f=[],qr.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=Kr("img");function c(){d(),t&&t(this);let f=qr.get(this)||[];for(let u=0;u<f.length;u++){let h=f[u];h.onLoad&&h.onLoad(this)}qr.delete(this),r.manager.itemEnd(e)}function l(f){d(),s&&s(f),Jl.remove(`image:${e}`);let u=qr.get(this)||[];for(let h=0;h<u.length;h++){let g=u[h];g.onError&&g.onError(f)}qr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Jl.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var va=class extends ao{constructor(e){super(e)}load(e,t,n,s){let r=new Ln,o=new Lc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ya=class extends kn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var ju=new Pt,Yp=new T,Zp=new T,Dc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yp),Zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ju.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ju,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===jr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xl=new T,ql=new yt,Vi=new T,Ma=class extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xl,ql,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xl,ql,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},As=new T,Jp=new Oe,$p=new Oe,zn=class extends Ma{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,t){return this.getViewBounds(e,Jp,$p),t.subVectors($p,Jp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var id=class extends Dc{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}},Sa=class extends ya{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new id}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Nc=class extends Ma{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ba=class extends ya{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Yr=-90,Zr=1,lo=class extends kn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zn(Yr,Zr,e,t);s.layers=this.layers,this.add(s);let r=new zn(Yr,Zr,e,t);r.layers=this.layers,this.add(r);let o=new zn(Yr,Zr,e,t);o.layers=this.layers,this.add(o);let a=new zn(Yr,Zr,e,t);a.layers=this.layers,this.add(a);let c=new zn(Yr,Zr,e,t);c.layers=this.layers,this.add(c);let l=new zn(Yr,Zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Uc=class extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Od="\\[\\]\\.:\\/",P_=new RegExp("["+Od+"]","g"),Bd="[^"+Od+"]",I_="[^"+Od.replace("\\.","")+"]",L_=/((?:WC+[\/:])*)/.source.replace("WC",Bd),D_=/(WCOD+)?/.source.replace("WCOD",I_),N_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bd),U_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bd),F_=new RegExp("^"+L_+D_+N_+U_+"$"),O_=["material","materials","bones","map"],sd=class{constructor(e,t,n){let s=n||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},an=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(P_,"")}static parseTrackName(e){let t=F_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);O_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};an.Composite=sd;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JS=new Float32Array(1);var Wd=class Wd{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Wd.prototype.isMatrix2=!0;var rd=Wd;function zd(i,e,t,n){let s=B_(n);switch(t){case bd:return i*e;case Ad:return i*e/s.components*s.byteLength;case Wc:return i*e/s.components*s.byteLength;case Ns:return i*e*2/s.components*s.byteLength;case Xc:return i*e*2/s.components*s.byteLength;case wd:return i*e*3/s.components*s.byteLength;case Ni:return i*e*4/s.components*s.byteLength;case qc:return i*e*4/s.components*s.byteLength;case Ta:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:case $c:return Math.max(i,16)*Math.max(e,8)/4;case Yc:case Jc:return Math.max(i,8)*Math.max(e,8)/2;case jc:case Kc:case eh:case th:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qc:case Pa:case nh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case uh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _h:case xh:case vh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yh:case Mh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ia:case Sh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B_(i){switch(i){case Qn:case vd:return{byteLength:1,components:1};case fo:case yd:case Di:return{byteLength:2,components:1};case Gc:case Hc:return{byteLength:2,components:4};case Ii:case Vc:case Li:return{byteLength:4,components:1};case Md:case Sd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function r0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function k_(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let d=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,d);else{f.sort((h,g)=>h.start-g.start);let u=0;for(let h=1;h<f.length;h++){let g=f[u],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let h=0,g=f.length;h<g;h++){let v=f[h];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var V_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G_=`#ifdef USE_ALPHAHASH
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
#endif`,H_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y_=`#ifdef USE_AOMAP
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
#endif`,Z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J_=`#ifdef USE_BATCHING
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
#endif`,$_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ex=`#ifdef USE_IRIDESCENCE
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
#endif`,tx=`#ifdef USE_BUMPMAP
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hx=`#define PI 3.141592653589793
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
} // validated`,ux=`vec3 transformedNormal = objectNormal;
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
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",_x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xx=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
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
}`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ix=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ox=`PhysicalMaterial material;
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
#endif`,Bx=`uniform sampler2D dfgLUT;
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
}`,zx=`
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
#endif`,kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$x=`#if defined( USE_POINTS_UV )
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
#endif`,jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ev=`#if defined( USE_MORPHCOLORS )
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
#endif`,tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nv=`#ifdef USE_MORPHTARGETS
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
#endif`,iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cv=`#ifdef USE_NORMALMAP
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
#endif`,hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Av=`float getShadowMask() {
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
}`,Tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ev=`#ifdef USE_SKINNING
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
#endif`,Cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rv=`#ifdef USE_SKINNING
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
#endif`,Pv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nv=`#ifdef USE_TRANSMISSION
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
#endif`,Uv=`#ifdef USE_TRANSMISSION
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
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vv=`uniform sampler2D t2D;
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`uniform float backgroundBlurriness;
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`#include <common>
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
}`,Yv=`#if DEPTH_PACKING == 3200
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
}`,Zv=`#define DISTANCE
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
}`,Jv=`#define DISTANCE
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
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`uniform float scale;
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
}`,Qv=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ty=`uniform vec3 diffuse;
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
}`,ny=`#define LAMBERT
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
}`,iy=`#define LAMBERT
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
}`,sy=`#define MATCAP
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
}`,ry=`#define MATCAP
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
}`,oy=`#define NORMAL
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
}`,ay=`#define NORMAL
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
}`,ly=`#define PHONG
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
}`,cy=`#define PHONG
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
}`,hy=`#define STANDARD
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
}`,uy=`#define STANDARD
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
}`,dy=`#define TOON
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
}`,fy=`#define TOON
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
}`,py=`uniform float size;
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,_y=`uniform vec3 color;
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
}`,xy=`uniform float rotation;
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
}`,vy=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:V_,alphahash_pars_fragment:G_,alphamap_fragment:H_,alphamap_pars_fragment:W_,alphatest_fragment:X_,alphatest_pars_fragment:q_,aomap_fragment:Y_,aomap_pars_fragment:Z_,batching_pars_vertex:J_,batching_vertex:$_,begin_vertex:j_,beginnormal_vertex:K_,bsdfs:Q_,iridescence_fragment:ex,bumpmap_pars_fragment:tx,clipping_planes_fragment:nx,clipping_planes_pars_fragment:ix,clipping_planes_pars_vertex:sx,clipping_planes_vertex:rx,color_fragment:ox,color_pars_fragment:ax,color_pars_vertex:lx,color_vertex:cx,common:hx,defaultnormal_vertex:ux,displacementmap_pars_vertex:dx,displacementmap_vertex:fx,emissivemap_fragment:px,emissivemap_pars_fragment:mx,colorspace_fragment:gx,colorspace_pars_fragment:_x,envmap_fragment:xx,envmap_common_pars_fragment:vx,envmap_pars_fragment:yx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Lx,envmap_vertex:Sx,fog_vertex:bx,fog_pars_vertex:wx,fog_fragment:Ax,fog_pars_fragment:Tx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:Cx,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Px,lights_pars_begin:Ix,lights_toon_fragment:Dx,lights_toon_pars_fragment:Nx,lights_phong_fragment:Ux,lights_phong_pars_fragment:Fx,lights_physical_fragment:Ox,lights_physical_pars_fragment:Bx,lights_fragment_begin:zx,lights_fragment_maps:kx,lights_fragment_end:Vx,lightprobes_pars_fragment:Gx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Wx,logdepthbuf_pars_vertex:Xx,logdepthbuf_vertex:qx,map_fragment:Yx,map_pars_fragment:Zx,map_particle_fragment:Jx,map_particle_pars_fragment:$x,metalnessmap_fragment:jx,metalnessmap_pars_fragment:Kx,morphinstance_vertex:Qx,morphcolor_vertex:ev,morphnormal_vertex:tv,morphtarget_pars_vertex:nv,morphtarget_vertex:iv,normal_fragment_begin:sv,normal_fragment_maps:rv,normal_pars_fragment:ov,normal_pars_vertex:av,normal_vertex:lv,normalmap_pars_fragment:cv,clearcoat_normal_fragment_begin:hv,clearcoat_normal_fragment_maps:uv,clearcoat_pars_fragment:dv,iridescence_pars_fragment:fv,opaque_fragment:pv,packing:mv,premultiplied_alpha_fragment:gv,project_vertex:_v,dithering_fragment:xv,dithering_pars_fragment:vv,roughnessmap_fragment:yv,roughnessmap_pars_fragment:Mv,shadowmap_pars_fragment:Sv,shadowmap_pars_vertex:bv,shadowmap_vertex:wv,shadowmask_pars_fragment:Av,skinbase_vertex:Tv,skinning_pars_vertex:Ev,skinning_vertex:Cv,skinnormal_vertex:Rv,specularmap_fragment:Pv,specularmap_pars_fragment:Iv,tonemapping_fragment:Lv,tonemapping_pars_fragment:Dv,transmission_fragment:Nv,transmission_pars_fragment:Uv,uv_pars_fragment:Fv,uv_pars_vertex:Ov,uv_vertex:Bv,worldpos_vertex:zv,background_vert:kv,background_frag:Vv,backgroundCube_vert:Gv,backgroundCube_frag:Hv,cube_vert:Wv,cube_frag:Xv,depth_vert:qv,depth_frag:Yv,distance_vert:Zv,distance_frag:Jv,equirect_vert:$v,equirect_frag:jv,linedashed_vert:Kv,linedashed_frag:Qv,meshbasic_vert:ey,meshbasic_frag:ty,meshlambert_vert:ny,meshlambert_frag:iy,meshmatcap_vert:sy,meshmatcap_frag:ry,meshnormal_vert:oy,meshnormal_frag:ay,meshphong_vert:ly,meshphong_frag:cy,meshphysical_vert:hy,meshphysical_frag:uy,meshtoon_vert:dy,meshtoon_frag:fy,points_vert:py,points_frag:my,shadow_vert:gy,shadow_frag:_y,sprite_vert:xy,sprite_frag:vy},Fe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Yi={basic:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Gn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Gn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Gn([Fe.points,Fe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Gn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Gn([Fe.common,Fe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Gn([Fe.sprite,Fe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Gn([Fe.common,Fe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Gn([Fe.lights,Fe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Yi.physical={uniforms:Gn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var Ah={r:0,b:0,g:0},yy=new Pt,o0=new mt;o0.set(-1,0,0,0,1,0,0,0,1);function My(i,e,t,n,s,r){let o=new Ye(0),a=s===!0?0:1,c,l,d=null,f=0,u=null;function h(M){let P=M.isScene===!0?M.background:null;if(P&&P.isTexture){let w=M.backgroundBlurriness>0;P=e.get(P,w)}return P}function g(M){let P=!1,w=h(M);w===null?m(o,a):w&&w.isColor&&(m(w,1),P=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,P){let w=h(P);w&&w.isCubeTexture?(l===void 0&&(l=new ot(new Yn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:or(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(yy.makeRotationFromEuler(P.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(o0),l.material.toneMapped=Ut.getTransfer(w.colorSpace)!==Zt,(d!==w||f!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,f=w.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ot(new ma(2,2),new fn({name:"BackgroundMaterial",uniforms:or(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=Ut.getTransfer(w.colorSpace)!==Zt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,P){M.getRGB(Ah,Fd(i)),t.buffers.color.setClear(Ah.r,Ah.g,Ah.b,P,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,P=1){o.set(M),a=P,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:p}}function Sy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(z,k,K,F,Z){let Q=!1,G=f(z,F,K,k);r!==G&&(r=G,l(r.object)),Q=h(z,F,K,Z),Q&&g(z,F,K,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,w(z,k,K,F),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return i.createVertexArray()}function l(z){return i.bindVertexArray(z)}function d(z){return i.deleteVertexArray(z)}function f(z,k,K,F){let Z=F.wireframe===!0,Q=n[k.id];Q===void 0&&(Q={},n[k.id]=Q);let G=z.isInstancedMesh===!0?z.id:0,j=Q[G];j===void 0&&(j={},Q[G]=j);let J=j[K.id];J===void 0&&(J={},j[K.id]=J);let re=J[Z];return re===void 0&&(re=u(c()),J[Z]=re),re}function u(z){let k=[],K=[],F=[];for(let Z=0;Z<t;Z++)k[Z]=0,K[Z]=0,F[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:F,object:z,attributes:{},index:null}}function h(z,k,K,F){let Z=r.attributes,Q=k.attributes,G=0,j=K.getAttributes();for(let J in j)if(j[J].location>=0){let ue=Z[J],ke=Q[J];if(ke===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(ke=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(ke=z.instanceColor)),ue===void 0||ue.attribute!==ke||ke&&ue.data!==ke.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(z,k,K,F){let Z={},Q=k.attributes,G=0,j=K.getAttributes();for(let J in j)if(j[J].location>=0){let ue=Q[J];ue===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(ue=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(ue=z.instanceColor));let ke={};ke.attribute=ue,ue&&ue.data&&(ke.data=ue.data),Z[J]=ke,G++}r.attributes=Z,r.attributesNum=G,r.index=F}function v(){let z=r.newAttributes;for(let k=0,K=z.length;k<K;k++)z[k]=0}function m(z){p(z,0)}function p(z,k){let K=r.newAttributes,F=r.enabledAttributes,Z=r.attributeDivisors;K[z]=1,F[z]===0&&(i.enableVertexAttribArray(z),F[z]=1),Z[z]!==k&&(i.vertexAttribDivisor(z,k),Z[z]=k)}function M(){let z=r.newAttributes,k=r.enabledAttributes;for(let K=0,F=k.length;K<F;K++)k[K]!==z[K]&&(i.disableVertexAttribArray(K),k[K]=0)}function P(z,k,K,F,Z,Q,G){G===!0?i.vertexAttribIPointer(z,k,K,Z,Q):i.vertexAttribPointer(z,k,K,F,Z,Q)}function w(z,k,K,F){v();let Z=F.attributes,Q=K.getAttributes(),G=k.defaultAttributeValues;for(let j in Q){let J=Q[j];if(J.location>=0){let re=Z[j];if(re===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),re!==void 0){let ue=re.normalized,ke=re.itemSize,lt=e.get(re);if(lt===void 0)continue;let q=lt.buffer,pe=lt.type,Se=lt.bytesPerElement,Ie=pe===i.INT||pe===i.UNSIGNED_INT||re.gpuType===Vc;if(re.isInterleavedBufferAttribute){let de=re.data,ge=de.isInterleavedBuffer===!0?de.stride:de.itemSize,At=re.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let Ge=0;Ge<J.locationSize;Ge++)p(J.location+Ge,de.meshPerAttribute);z.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ge=0;Ge<J.locationSize;Ge++)m(J.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Ge=0;Ge<J.locationSize;Ge++)P(J.location+Ge,ke/J.locationSize,pe,ue,ge*Se,(At+ke/J.locationSize*Ge)*Se,Ie)}else{if(re.isInstancedBufferAttribute){for(let de=0;de<J.locationSize;de++)p(J.location+de,re.meshPerAttribute);z.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let de=0;de<J.locationSize;de++)m(J.location+de);i.bindBuffer(i.ARRAY_BUFFER,q);for(let de=0;de<J.locationSize;de++)P(J.location+de,ke/J.locationSize,pe,ue,ke*Se,ke/J.locationSize*de*Se,Ie)}}else if(G!==void 0){let ue=G[j];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(J.location,ue);break;case 3:i.vertexAttrib3fv(J.location,ue);break;case 4:i.vertexAttrib4fv(J.location,ue);break;default:i.vertexAttrib1fv(J.location,ue)}}}}M()}function C(){O();for(let z in n){let k=n[z];for(let K in k){let F=k[K];for(let Z in F){let Q=F[Z];for(let G in Q)d(Q[G].object),delete Q[G];delete F[Z]}}delete n[z]}}function R(z){if(n[z.id]===void 0)return;let k=n[z.id];for(let K in k){let F=k[K];for(let Z in F){let Q=F[Z];for(let G in Q)d(Q[G].object),delete Q[G];delete F[Z]}}delete n[z.id]}function x(z){for(let k in n){let K=n[k];for(let F in K){let Z=K[F];if(Z[z.id]===void 0)continue;let Q=Z[z.id];for(let G in Q)d(Q[G].object),delete Q[G];delete Z[z.id]}}}function A(z){for(let k in n){let K=n[k],F=z.isInstancedMesh===!0?z.id:0,Z=K[F];if(Z!==void 0){for(let Q in Z){let G=Z[Q];for(let j in G)d(G[j].object),delete G[j];delete Z[Q]}delete K[F],Object.keys(K).length===0&&delete n[k]}}}function O(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfObject:A,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function by(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let h=0;h<d;h++)u+=l[h];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function wy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Ni&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let A=x===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Qn&&x!==Li&&!A&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(rt("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:P,maxFragmentUniforms:w,maxSamples:C,samples:R}}function Ay(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ai,a=new mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let h=f.length!==0||u||n!==0||s;return s=u,n=f.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{let M=r?0:n,P=M*4,w=p.clippingState||null;c.value=w,w=d(g,u,P,h);for(let C=0;C!==P;++C)w[C]=t[C];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,h,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=h+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,w=h;P!==v;++P,w+=4)o.copy(f[P]).applyMatrix4(M,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Na=class extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ca(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yn(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:nr});r.uniforms.tEquirect.value=t;let o=new ot(s,r),a=t.minFilter;return t.minFilter===cs&&(t.minFilter=qn),new lo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Bm=256,Ty=3,Ey=20,a0=256,l0=16,Cy=3,Ry=new T,Py=new Ye,Eh=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lo(1,10,null),this._boxMesh=new ot(new Yn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ry}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,h=c.autoClearDepth,g=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(Py));let m=new lo(n,s,d);return m.position.copy(a),m.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=h,c.autoClearStencil=g,e.background=v,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Bm,Ld(e))}_fromTexture(e,t){e.mapping===sr||e.mapping===uo?this._setSize(e.image.length===0?Bm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=zm(e,!1,!1),n=Math.log2(e)-Ty;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===sr||e.mapping===uo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=km()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Iy(),this._integrationMaterial=Ly());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/l0);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Cy)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(a0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Dy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function zm(i,e,t){return new Na(i,{minFilter:cs,generateMipmaps:e,type:Di,colorSpace:ea,depthBuffer:t})}function Ua(i,e,t){return new fn({name:i,uniforms:e,vertexShader:wt.cube_vert,fragmentShader:t,side:Jn,blending:nr,depthTest:!1,depthWrite:!1})}function Iy(){return Ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${a0}u

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
	`)}function Ly(){return Ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:l0}},`

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
	`)}function Dy(){return Ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ey}
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
	`)}function km(){return Ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Vm(){return Ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ny(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,h=!1){return u==null?null:h?o(u):r(u)}function r(u){if(u&&u.isTexture){let h=u.mapping;if(h===Bc||h===zc)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new Na(g.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let h=u.mapping,g=h===Bc||h===zc,v=h===sr||h===uo;if(g||v){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Eh(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new Eh(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function a(u,h){return h===Bc?u.mapping=sr:h===zc&&(u.mapping=uo),u}function c(u){let h=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&h++;return h===g}function l(u){let h=u.target;h.removeEventListener("dispose",l);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function d(u){let h=u.target;h.removeEventListener("dispose",d);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Uy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Zo("WebGLRenderer: "+n+" extension not supported."),s}}}function Fy(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function d(g){let v=g.attributes;for(let m in v)e.update(v[m],i.ARRAY_BUFFER)}function f(g){let v=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let M=v!==null?v.array.length:m.array.length/3-1,P=m.count>=65535?aa:oa,w=new P(Math.ceil(M/3)*6,1),C=w.array;if(v!==null){let x=v.array;p=v.version;for(let A=0,O=0;A<M;A+=3){let N=x[A+0],z=x[A+1],k=x[A+2];C[O++]=N,C[O++]=z,C[O++]=z,C[O++]=k,C[O++]=k,C[O++]=N}}else{p=m.version;for(let x=0,A=0;x<M;x+=3){let O=x+0,N=x+1,z=x+2;C[A++]=O,C[A++]=N,C[A++]=N,C[A++]=z,C[A++]=z,C[A++]=O}}w.version=p;let R=r.get(g);R&&e.remove(R),r.set(g,w)}function u(g){let v=r.get(g);if(v){let m=g.index;m!==null&&v.version<m.version&&f(g)}else f(g);return r.get(g)}function h(){for(let g in s){let v=s[g].deref();v!==void 0&&c(v)}}return{get:l,update:d,getWireframeAttribute:u,dispose:h}}function Oy(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*o),t.update(u,n,1)}function l(f,u,h){h!==0&&(i.drawElementsInstanced(n,u,r,f*o,h),t.update(u,n,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,h);let v=0;for(let m=0;m<h;m++)v+=u[m];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function By(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zy(i,e,t){let n=new WeakMap,s=new hn;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,u=n.get(a);if(u===void 0||u.count!==f){let O=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],P=0;h===!0&&(P=1),g===!0&&(P=2),v===!0&&(P=3);let w=a.attributes.position.count*P,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let R=new Float32Array(w*C*4*f),x=new ia(R,w,C,f);x.type=Li,x.needsUpdate=!0;let A=P*4;for(let N=0;N<f;N++){let z=m[N],k=p[N],K=M[N],F=w*C*4*N;for(let Z=0;Z<z.count;Z++){let Q=Z*A;h===!0&&(s.fromBufferAttribute(z,Z),R[F+Q+0]=s.x,R[F+Q+1]=s.y,R[F+Q+2]=s.z,R[F+Q+3]=0),g===!0&&(s.fromBufferAttribute(k,Z),R[F+Q+4]=s.x,R[F+Q+5]=s.y,R[F+Q+6]=s.z,R[F+Q+7]=0),v===!0&&(s.fromBufferAttribute(K,Z),R[F+Q+8]=s.x,R[F+Q+9]=s.y,R[F+Q+10]=s.z,R[F+Q+11]=K.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new Oe(w,C)},n.set(a,u),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let h=0;for(let v=0;v<l.length;v++)h+=l[v];let g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ky(i,e,t,n,s){let r=new WeakMap;function o(l){let d=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return u}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var Vy={[ud]:"LINEAR_TONE_MAPPING",[dd]:"REINHARD_TONE_MAPPING",[fd]:"CINEON_TONE_MAPPING",[pd]:"ACES_FILMIC_TONE_MAPPING",[gd]:"AGX_TONE_MAPPING",[_d]:"NEUTRAL_TONE_MAPPING",[md]:"CUSTOM_TONE_MAPPING"};function Gy(i,e,t,n,s,r){let o=new li(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,d=new It;d.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new it([0,2,0,0,2,0],2));let f=new yc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ot(d,f),h=new Nc(-1,1,1,-1,0,1),g=null,v=null,m=!1,p,M=null,P=[],w=!1;this.setSize=function(C,R){o.setSize(C,R),a!==null&&a.setSize(C,R),c!==null&&c.setSize(C,R);for(let x=0;x<P.length;x++){let A=P[x];A.setSize&&A.setSize(C,R)}},this.setEffects=function(C){P=C,w=P.length>0&&P[0].isRenderPass===!0;let R=o.width,x=o.height;P.length>0&&a===null&&(a=new li(R,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}),c=new li(R,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}));let A=s===!0&&P.some(O=>O.needsDepthTexture===!0);A!==(o.depthTexture!==null)&&(A===!0&&l===null&&(l=new ls(R,x),r===!0&&(l.format=hs,l.type=rr)),o.dispose(),o.depthTexture=A?l:null,o.resolveDepthBuffer=A,o.storeMultisampledDepthBuffer=A);for(let O=0;O<P.length;O++){let N=P[O];N.setSize&&N.setSize(R,x),A&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(l)}},this.begin=function(C,R){if(m||C.toneMapping===Xi&&P.length===0)return!1;if(M=R,R!==null){let x=R.width,A=R.height;(o.width!==x||o.height!==A)&&this.setSize(x,A)}return w===!1&&C.setRenderTarget(o),p=C.toneMapping,C.toneMapping=Xi,!0},this.hasRenderPass=function(){return w},this.end=function(C,R){C.toneMapping=p,m=!0;let x=o,A=a;for(let O=0;O<P.length;O++){let N=P[O];N.enabled!==!1&&(N.render(C,A,x,R),N.needsSwap!==!1&&(x=A,A=A===a?c:a))}if(g!==C.outputColorSpace||v!==C.toneMapping){g=C.outputColorSpace,v=C.toneMapping,f.defines={},Ut.getTransfer(g)===Zt&&(f.defines.SRGB_TRANSFER="");let O=Vy[v];O&&(f.defines[O]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(M),C.render(u,h),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}var c0=new Ln,h0=new ls(1,1),u0=new ha(1),d0=new ia,f0=new ac,p0=new ca,Gm=[],Hm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),qm=new Float32Array(4);function mo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gm[s];if(r===void 0&&(r=new Float32Array(s),Gm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function An(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rh(i,e){let t=Hm[e];t===void 0&&(t=new Int32Array(e),Hm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2fv(this.addr,e),Tn(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(An(t,e))return;i.uniform3fv(this.addr,e),Tn(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4fv(this.addr,e),Tn(t,e)}}function Yy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(An(t,n))return;qm.set(n),i.uniformMatrix2fv(this.addr,!1,qm),Tn(t,n)}}function Zy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(An(t,n))return;Xm.set(n),i.uniformMatrix3fv(this.addr,!1,Xm),Tn(t,n)}}function Jy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(An(t,n))return;Wm.set(n),i.uniformMatrix4fv(this.addr,!1,Wm),Tn(t,n)}}function $y(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2iv(this.addr,e),Tn(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;i.uniform3iv(this.addr,e),Tn(t,e)}}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4iv(this.addr,e),Tn(t,e)}}function eM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2uiv(this.addr,e),Tn(t,e)}}function nM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;i.uniform3uiv(this.addr,e),Tn(t,e)}}function iM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4uiv(this.addr,e),Tn(t,e)}}function Ph(i){return i.version===0&&(i.compareFunction=Cd,i.needsUpdate=!0),i}function sM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ph(h0):r=c0,t.setTexture2D(e||r,s)}function rM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||f0,s)}function oM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ph(u0):r=p0,t.setTextureCube(e||r,s)}function aM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||d0,s)}function lM(i){switch(i){case 5126:return Hy;case 35664:return Wy;case 35665:return Xy;case 35666:return qy;case 35674:return Yy;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return $y;case 35667:case 35671:return jy;case 35668:case 35672:return Ky;case 35669:case 35673:return Qy;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}function cM(i,e){i.uniform1fv(this.addr,e)}function hM(i,e){let t=mo(e,this.size,2);i.uniform2fv(this.addr,t)}function uM(i,e){let t=mo(e,this.size,3);i.uniform3fv(this.addr,t)}function dM(i,e){let t=mo(e,this.size,4);i.uniform4fv(this.addr,t)}function fM(i,e){let t=mo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pM(i,e){let t=mo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mM(i,e){let t=mo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gM(i,e){i.uniform1iv(this.addr,e)}function _M(i,e){i.uniform2iv(this.addr,e)}function xM(i,e){i.uniform3iv(this.addr,e)}function vM(i,e){i.uniform4iv(this.addr,e)}function yM(i,e){i.uniform1uiv(this.addr,e)}function MM(i,e){i.uniform2uiv(this.addr,e)}function SM(i,e){i.uniform3uiv(this.addr,e)}function bM(i,e){i.uniform4uiv(this.addr,e)}function wM(i,e,t){let n=this.cache,s=e.length,r=Rh(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ph(h0):o=c0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function AM(i,e,t){let n=this.cache,s=e.length,r=Rh(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||f0,r[o])}function TM(i,e,t){let n=this.cache,s=e.length,r=Rh(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ph(u0):o=p0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function EM(i,e,t){let n=this.cache,s=e.length,r=Rh(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||d0,r[o])}function CM(i){switch(i){case 5126:return cM;case 35664:return hM;case 35665:return uM;case 35666:return dM;case 35674:return fM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return _M;case 35668:case 35672:return xM;case 35669:case 35673:return vM;case 5125:return yM;case 36294:return MM;case 36295:return SM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return EM}}var Yd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lM(t.type)}},Zd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CM(t.type)}},Jd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Xd=/(\w+)(\])?(\[|\.)?/g;function Ym(i,e){i.seq.push(e),i.map[e.id]=e}function RM(i,e,t){let n=i.name,s=n.length;for(Xd.lastIndex=0;;){let r=Xd.exec(n),o=Xd.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ym(t,l===void 0?new Yd(a,i,e):new Zd(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Jd(a),Ym(t,f)),t=f}}}var po=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);RM(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Zm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var PM=37297,IM=0;function LM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Jm=new mt;function DM(i){Ut._getMatrix(Jm,Ut.workingColorSpace,i);let e=`mat3( ${Jm.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(i)){case ta:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $m(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+LM(i.getShaderSource(e),a)}else return r}function NM(i,e){let t=DM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var UM={[ud]:"Linear",[dd]:"Reinhard",[fd]:"Cineon",[pd]:"ACESFilmic",[gd]:"AgX",[_d]:"Neutral",[md]:"Custom"};function FM(i,e){let t=UM[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Th=new T;function OM(){Ut.getLuminanceCoefficients(Th);let i=Th.x.toFixed(4),e=Th.y.toFixed(4),t=Th.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function zM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Da(i){return i!==""}function jm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Km(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var VM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(i){return i.replace(VM,GM)}function GM(i,e){let t=wt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return $d(t)}var HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(i){return i.replace(HM,WM)}function WM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function e0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var XM={[wa]:"SHADOWMAP_TYPE_PCF",[co]:"SHADOWMAP_TYPE_VSM"};function qM(i){return XM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var YM={[uo]:"ENVMAP_MODE_REFRACTION"};function ZM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":YM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var JM={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[xm]:"ENVMAP_BLENDING_MIX",[vm]:"ENVMAP_BLENDING_ADD"};function $M(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":JM[i.combine]||"ENVMAP_BLENDING_NONE"}function jM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=qM(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=ZM(t),f=$M(t),u=BM(t),h=zM(r),g=s.createProgram(),v,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Da).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Da).join(`
`),m.length>0&&(m+=`
`)):(v=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),m=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?wt.tonemapping_pars_fragment:"",t.toneMapping!==Xi?FM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,NM("linearToOutputTexel",t.outputColorSpace),OM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),o=$d(o),o=jm(o,t),o=Km(o,t),a=$d(a),a=jm(a,t),a=Km(a,t),o=Qm(o),a=Qm(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=p+v+o,P=p+m+a,w=Zm(s,s.VERTEX_SHADER,M),C=Zm(s,s.FRAGMENT_SHADER,P);s.attachShader(g,w),s.attachShader(g,C),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(N){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(g)||"",k=s.getShaderInfoLog(w)||"",K=s.getShaderInfoLog(C)||"",F=z.trim(),Z=k.trim(),Q=K.trim(),G=!0,j=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,w,C);else{let J=$m(s,w,"vertex"),re=$m(s,C,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+J+`
`+re)}else F!==""?rt("WebGLProgram: Program Info Log:",F):(Z===""||Q==="")&&(j=!1);j&&(N.diagnostics={runnable:G,programLog:F,vertexShader:{log:Z,prefix:v},fragmentShader:{log:Q,prefix:m}})}s.deleteShader(w),s.deleteShader(C),x=new po(s,g),A=kM(s,g)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,PM)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=C,this}var KM=0,jd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kd(e),t.set(e,n)),n}},Kd=class{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}};function QM(i){return i===Ns||i===Pa||i===Ia}function eS(i,e,t,n,s,r){let o=new sa,a=new jd,c=new Set,l=[],d=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,A,O,N,z,k){let K=N.fog,F=z.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||Z,Q),j=u[x.type],J=n.precision;x.precision!==null&&(J=n.getMaxPrecision(x.precision),J!==x.precision&&rt("WebGLProgram.getParameters:",x.precision,"not supported, using",J,"instead."));let re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ue=re!==void 0?re.length:0,ke=0;F.morphAttributes.position!==void 0&&(ke=1),F.morphAttributes.normal!==void 0&&(ke=2),F.morphAttributes.color!==void 0&&(ke=3);let lt,q,pe,Se;if(j){let Ne=Yi[j];lt=Ne.vertexShader,q=Ne.fragmentShader}else{lt=x.vertexShader,q=x.fragmentShader;let Ne=a.getVertexShaderStage(x),Wt=a.getFragmentShaderStage(x);a.update(x,Ne,Wt),pe=Ne.id,Se=Wt.id}let Ie=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),ge=z.isInstancedMesh===!0,At=z.isBatchedMesh===!0,Ge=!!x.map,Be=!!x.matcap,ct=!!G,ut=ct&&G.isPMREMTexture===!0,gt=!!x.aoMap,qt=!!x.lightMap,pn=!!x.bumpMap&&x.wireframe===!1,kt=!!x.normalMap,Dn=!!x.displacementMap,Kt=!!x.emissiveMap,Ft=!!x.metalnessMap,En=!!x.roughnessMap,Cn=x.anisotropy>0,V=x.clearcoat>0,Hn=x.diffuseRoughness>0,Qt=x.dispersion>0,$t=x.retroreflectivity>0,Ue=x.iridescence>0,dn=x.sheen>0,ce=x.transmission>0,ht=Cn&&!!x.anisotropyMap,I=V&&!!x.clearcoatMap,y=V&&!!x.clearcoatNormalMap,H=V&&!!x.clearcoatRoughnessMap,he=Hn&&!!x.diffuseRoughnessMap,ae=Ue&&!!x.iridescenceMap,Ae=Ue&&!!x.iridescenceThicknessMap,Le=dn&&!!x.sheenColorMap,te=dn&&!!x.sheenRoughnessMap,ie=!!x.specularMap,Te=!!x.specularColorMap,U=!!x.specularIntensityMap,ne=ce&&!!x.transmissionMap,ee=ce&&!!x.thicknessMap,Ee=!!x.gradientMap,Me=!!x.alphaMap,Ce=x.alphaTest>0,je=!!x.alphaHash,xt=!!x.extensions,_e=Xi;x.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(_e=i.toneMapping);let tt=ut?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,_t={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:lt,fragmentShader:q,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:J,batching:At,batchingColor:At&&z._colorsTexture!==null,instancing:ge,instancingColor:ge&&z.instanceColor!==null,instancingMorph:ge&&z.morphTexture!==null,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:Be,envMap:ct,envMapMode:ct&&G.mapping,envMapPMREM:ut,envMapMaxLod:ut?tt.length-1:null,envMapSize:ut?tt[0].width:null,aoMap:gt,lightMap:qt,bumpMap:pn,normalMap:kt,displacementMap:Dn,emissiveMap:Kt,normalMapObjectSpace:kt&&x.normalMapType===Sm,normalMapTangentSpace:kt&&x.normalMapType===bh,packedNormalMap:kt&&x.normalMapType===bh&&QM(x.normalMap.format),metalnessMap:Ft,roughnessMap:En,anisotropy:Cn,anisotropyMap:ht,clearcoat:V,clearcoatMap:I,clearcoatNormalMap:y,clearcoatRoughnessMap:H,diffuseRoughness:Hn,diffuseRoughnessMap:he,dispersion:Qt,retroreflection:$t,iridescence:Ue,iridescenceMap:ae,iridescenceThicknessMap:Ae,sheen:dn,sheenColorMap:Le,sheenRoughnessMap:te,specularMap:ie,specularColorMap:Te,specularIntensityMap:U,transmission:ce,transmissionMap:ne,thicknessMap:ee,gradientMap:Ee,opaque:x.transparent===!1&&x.blending===ho&&x.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ce,alphaHash:je,combine:x.combine,mapUv:Ge&&h(x.map.channel),aoMapUv:gt&&h(x.aoMap.channel),lightMapUv:qt&&h(x.lightMap.channel),bumpMapUv:pn&&h(x.bumpMap.channel),normalMapUv:kt&&h(x.normalMap.channel),displacementMapUv:Dn&&h(x.displacementMap.channel),emissiveMapUv:Kt&&h(x.emissiveMap.channel),metalnessMapUv:Ft&&h(x.metalnessMap.channel),roughnessMapUv:En&&h(x.roughnessMap.channel),anisotropyMapUv:ht&&h(x.anisotropyMap.channel),clearcoatMapUv:I&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&h(x.sheenRoughnessMap.channel),specularMapUv:ie&&h(x.specularMap.channel),specularColorMapUv:Te&&h(x.specularColorMap.channel),specularIntensityMapUv:U&&h(x.specularIntensityMap.channel),transmissionMapUv:ne&&h(x.transmissionMap.channel),thicknessMapUv:ee&&h(x.thicknessMap.channel),alphaMapUv:Me&&h(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(kt||Cn),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(Ge||Me),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&kt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ke,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&Ut.getTransfer(x.map.colorSpace)===Zt,decodeVideoTextureEmissive:Kt&&x.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(x.emissiveMap.colorSpace)===Zt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===Jn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&x.extensions.multiDraw===!0||At)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function v(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let O in x.defines)A.push(O),A.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(m(A,x),p(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapPMREM),x.push(A.envMapMaxLod),x.push(A.envMapSize),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.diffuseRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.numLightProbeGrids),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function p(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.diffuseRoughness&&o.enable(25),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let A=u[x.type],O;if(A){let N=Yi[A];O=Um.clone(N.uniforms)}else O=x.uniforms;return O}function P(x,A){let O=d.get(A);return O!==void 0?++O.usedTimes:(O=new jM(i,A,x,s),l.push(O),d.set(A,O)),O}function w(x){if(--x.usedTimes===0){let A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function C(x){a.remove(x)}function R(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:P,releaseProgram:w,releaseShaderCache:C,programs:l,dispose:R}}function tS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function t0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function n0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function a(u,h,g,v,m,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:h,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=h,M.material=g,M.materialVariant=o(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function c(u,h,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);let P=a(u,h,g,v,m,p);g.transmission>0?n.push(P):g.transparent===!0?s.push(P):t.push(P)}function l(u,h,g,v,m,p){let M=a(u,h,g,v,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function d(u,h){t.length>1&&t.sort(u||nS),n.length>1&&n.sort(h||t0),s.length>1&&s.sort(h||t0)}function f(){for(let u=e,h=i.length;u<h;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:d}}function iS(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new n0,i.set(n,[o])):s>=r.length?(o=new n0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function sS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new Ye};break;case"SpotLight":t={position:new T,direction:new T,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function rS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var oS=0;function aS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lS(i){let e=new sS,t=rS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new Pt,o=new Pt;function a(l){let d=0,f=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,M=0,P=0,w=0,C=0,R=0,x=0,A=0,O=0,N=0;l.sort(aS);for(let k=0,K=l.length;k<K;k++){let F=l[k],Z=F.color,Q=F.intensity,G=F.distance,j=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ns?j=F.shadow.map.texture:j=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=Z.r*Q,f+=Z.g*Q,u+=Z.b*Q;else if(F.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(F.sh.coefficients[J],Q);N++}else if(F.isSunLight){let J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let re=F.shadow,ue=t.get(F);ue.shadowIntensity=re.intensity,ue.shadowBias=re.bias,ue.shadowNormalBias=re.normalBias,ue.shadowRadius=re.radius,ue.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[g]=ue,n.sunShadowMap[g]=j;let ke=re.getViewportCount();for(let lt=0;lt<ke;lt++)n.sunShadowMatrix[v+lt]=re.getMatrix(lt),n.sunShadowCascade[v+lt]=re._cascadeData[lt];v+=ke,g++}n.sun[h]=J,h++}else if(F.isDirectionalLight){let J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let re=F.shadow,ue=t.get(F);ue.shadowIntensity=re.intensity,ue.shadowBias=re.bias,ue.shadowNormalBias=re.normalBias,ue.shadowRadius=re.radius,ue.shadowMapSize=re.mapSize,n.directionalShadow[m]=ue,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=F.shadow.matrix,C++}n.directional[m]=J,m++}else if(F.isSpotLight){let J=e.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(Z).multiplyScalar(Q),J.distance=G,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,n.spot[M]=J;let re=F.shadow;if(F.map&&(n.spotLightMap[A]=F.map,A++,re.updateMatrices(F),F.castShadow&&O++),n.spotLightMatrix[M]=re.matrix,F.castShadow){let ue=t.get(F);ue.shadowIntensity=re.intensity,ue.shadowBias=re.bias,ue.shadowNormalBias=re.normalBias,ue.shadowRadius=re.radius,ue.shadowMapSize=re.mapSize,n.spotShadow[M]=ue,n.spotShadowMap[M]=j,x++}M++}else if(F.isRectAreaLight){let J=e.get(F);J.color.copy(Z).multiplyScalar(Q),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),n.rectArea[P]=J,P++}else if(F.isPointLight){let J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){let re=F.shadow,ue=t.get(F);ue.shadowIntensity=re.intensity,ue.shadowBias=re.bias,ue.shadowNormalBias=re.normalBias,ue.shadowRadius=re.radius,ue.shadowMapSize=re.mapSize,ue.shadowCameraNear=re.camera.near,ue.shadowCameraFar=re.camera.far,n.pointShadow[p]=ue,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=F.shadow.matrix,R++}n.point[p]=J,p++}else if(F.isHemisphereLight){let J=e.get(F);J.skyColor.copy(F.color).multiplyScalar(Q),J.groundColor.copy(F.groundColor).multiplyScalar(Q),n.hemi[w]=J,w++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;let z=n.hash;(z.sunLength!==h||z.directionalLength!==m||z.pointLength!==p||z.spotLength!==M||z.rectAreaLength!==P||z.hemiLength!==w||z.numSunShadows!==g||z.numDirectionalShadows!==C||z.numPointShadows!==R||z.numSpotShadows!==x||z.numSpotMaps!==A||z.numLightProbes!==N)&&(n.sun.length=h,n.directional.length=m,n.spot.length=M,n.rectArea.length=P,n.point.length=p,n.hemi.length=w,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+A-O,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=N,z.sunLength=h,z.directionalLength=m,z.pointLength=p,z.spotLength=M,z.rectAreaLength=P,z.hemiLength=w,z.numSunShadows=g,z.numDirectionalShadows=C,z.numPointShadows=R,z.numSpotShadows=x,z.numSpotMaps=A,z.numLightProbes=N,n.version=oS++)}function c(l,d){let f=0,u=0,h=0,g=0,v=0,m=0,p=d.matrixWorldInverse;for(let M=0,P=l.length;M<P;M++){let w=l[M];if(w.isSunLight){let C=n.sun[f];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(p),f++}else if(w.isDirectionalLight){let C=n.directional[u];C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),u++}else if(w.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let C=n.rectArea[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){let C=n.point[h];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),h++}else if(w.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function i0(i){let e=new lS(i),t=[],n=[],s=[];function r(f){d.camera=f,t.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){n.push(f)}function c(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function cS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new i0(i),e.set(s,[a])):r>=o.length?(a=new i0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var hS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uS=`uniform sampler2D shadow_pass;
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
}`,dS=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],fS=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],s0=new Pt,La=new T,qd=new T;function pS(i,e,t){let n=new Cs,s=new Oe,r=new Oe,o=new hn,a=new Mc,c=new Sc,l={},d=t.maxTextureSize,f={[Ds]:Jn,[Jn]:Ds,[wn]:wn},u=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:hS,fragmentShader:uS}),h=u.clone();h.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ot(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let p=this.type;this.render=function(R,x,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Qp&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wa);let O=i.getRenderTarget(),N=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),k=i.state;k.setBlending(nr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let K=p!==this.type;K&&x.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(Z=>Z.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,Z=R.length;F<Z;F++){let Q=R[F],G=Q.shadow;if(G===void 0){rt("WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let j=G.getFrameExtents();s.multiply(j),r.copy(G.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/j.y),s.y=r.y*j.y,G.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=J,G.map===null||K===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===co){if(Q.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new li(s.x,s.y,{format:Ns,type:Di,minFilter:qn,magFilter:qn,generateMipmaps:!1}),G.map.texture.name=Q.name+".shadowMap",G.map.depthTexture=new ls(s.x,s.y,Li),G.map.depthTexture.name=Q.name+".shadowMapDepth",G.map.depthTexture.format=as,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=In,G.map.depthTexture.magFilter=In}else Q.isPointLight?(G.map=new Na(s.x),G.map.depthTexture=new ha(s.x,Ii)):(G.map=new li(s.x,s.y),G.map.depthTexture=new ls(s.x,s.y,Ii)),G.map.depthTexture.name=Q.name+".shadowMap",G.map.depthTexture.format=as,this.type===wa?(G.map.depthTexture.compareFunction=J?Ed:Td,G.map.depthTexture.minFilter=qn,G.map.depthTexture.magFilter=qn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=In,G.map.depthTexture.magFilter=In);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let re=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Q.isPointLight!==!0&&G.updateMatrices(Q,A);let ue=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:A.layers;for(let ke=0;ke<re;ke++){let lt=G.getCamera(ke);if(Q.isPointLight){let q=G.camera,pe=G.matrix,Se=Q.distance||q.far;Se!==q.far&&(q.far=Se,q.updateProjectionMatrix()),La.setFromMatrixPosition(Q.matrixWorld),q.position.copy(La),qd.copy(q.position),qd.add(dS[ke]),q.up.copy(fS[ke]),q.lookAt(qd),q.updateMatrixWorld(),pe.makeTranslation(-La.x,-La.y,-La.z),s0.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(s0,q.coordinateSystem,q.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ke),i.clear();else{ke===0&&(i.setRenderTarget(G.map),i.clear());let q=G.getViewport(ke);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),k.viewport(o)}n=G.getFrustum(ke),w(x,A,lt,Q,ue,this.type)}G.isPointLightShadow!==!0&&this.type===co&&M(G,A),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(O,N,z)};function M(R,x){let A=e.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null?R.mapPass=new li(s.x,s.y,{format:Ns,type:Di}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(x,null,A,u,v,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(x,null,A,h,v,null)}function P(R,x,A,O){let N=null,z=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)N=z;else if(N=A.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let k=N.uuid,K=x.uuid,F=l[k];F===void 0&&(F={},l[k]=F);let Z=F[K];Z===void 0&&(Z=N.clone(),F[K]=Z,x.addEventListener("dispose",C)),N=Z}if(N.visible=x.visible,N.wireframe=x.wireframe,O===co?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:f[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,A.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let k=i.properties.get(N);k.light=A}return N}function w(R,x,A,O,N,z){if(R.visible===!1)return;if(R.layers.test(N)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&z===co)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);let F=e.update(R),Z=R.material;if(Array.isArray(Z)){let Q=F.groups;for(let G=0,j=Q.length;G<j;G++){let J=Q[G],re=Z[J.materialIndex];if(re&&re.visible){let ue=P(R,re,O,z);R.onBeforeShadow(i,R,x,A,F,ue,J),i.renderBufferDirect(A,null,F,ue,R,J),R.onAfterShadow(i,R,x,A,F,ue,J)}}}else if(Z.visible){let Q=P(R,Z,O,z);R.onBeforeShadow(i,R,x,A,F,Q,null),i.renderBufferDirect(A,null,F,Q,R,null),R.onAfterShadow(i,R,x,A,F,Q,null)}}let K=R.children;for(let F=0,Z=K.length;F<Z;F++)w(K[F],x,A,O,N,z)}function C(R){R.target.removeEventListener("dispose",C);for(let A in l){let O=l[A],N=R.target.uuid;N in O&&(O[N].dispose(),delete O[N])}}}function mS(i,e){function t(){let U=!1,ne=new hn,ee=null,Ee=new hn(0,0,0,0);return{setMask:function(Me){ee!==Me&&!U&&(i.colorMask(Me,Me,Me,Me),ee=Me)},setLocked:function(Me){U=Me},setClear:function(Me,Ce,je,xt,_e){_e===!0&&(Me*=xt,Ce*=xt,je*=xt),ne.set(Me,Ce,je,xt),Ee.equals(ne)===!1&&(i.clearColor(Me,Ce,je,xt),Ee.copy(ne))},reset:function(){U=!1,ee=null,Ee.set(-1,0,0,0)}}}function n(){let U=!1,ne=!1,ee=null,Ee=null,Me=null;return{setReversed:function(Ce){if(ne!==Ce){let je=e.get("EXT_clip_control");Ce?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),ne=Ce;let xt=Me;Me=null,this.setClear(xt)}},getReversed:function(){return ne},setTest:function(Ce){Ce?de(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Ce){ee!==Ce&&!U&&(i.depthMask(Ce),ee=Ce)},setFunc:function(Ce){if(ne&&(Ce=Lm[Ce]),Ee!==Ce){switch(Ce){case $l:i.depthFunc(i.NEVER);break;case jl:i.depthFunc(i.ALWAYS);break;case Kl:i.depthFunc(i.LESS);break;case $r:i.depthFunc(i.LEQUAL);break;case Ql:i.depthFunc(i.EQUAL);break;case ec:i.depthFunc(i.GEQUAL);break;case tc:i.depthFunc(i.GREATER);break;case nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=Ce}},setLocked:function(Ce){U=Ce},setClear:function(Ce){Me!==Ce&&(Me=Ce,ne&&(Ce=1-Ce),i.clearDepth(Ce))},reset:function(){U=!1,ee=null,Ee=null,Me=null,ne=!1}}}function s(){let U=!1,ne=null,ee=null,Ee=null,Me=null,Ce=null,je=null,xt=null,_e=null;return{setTest:function(tt){U||(tt?de(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(tt){ne!==tt&&!U&&(i.stencilMask(tt),ne=tt)},setFunc:function(tt,_t,Ne){(ee!==tt||Ee!==_t||Me!==Ne)&&(i.stencilFunc(tt,_t,Ne),ee=tt,Ee=_t,Me=Ne)},setOp:function(tt,_t,Ne){(Ce!==tt||je!==_t||xt!==Ne)&&(i.stencilOp(tt,_t,Ne),Ce=tt,je=_t,xt=Ne)},setLocked:function(tt){U=tt},setClear:function(tt){_e!==tt&&(i.clearStencil(tt),_e=tt)},reset:function(){U=!1,ne=null,ee=null,Ee=null,Me=null,Ce=null,je=null,xt=null,_e=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,d={},f={},u={},h=new WeakMap,g=[],v=null,m=!1,p=null,M=null,P=null,w=null,C=null,R=null,x=null,A=new Ye(0,0,0),O=0,N=!1,z=null,k=null,K=null,F=null,Z=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=j>=1):J.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=j>=2);let re=null,ue={},ke=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),q=new hn().fromArray(ke),pe=new hn().fromArray(lt);function Se(U,ne,ee,Ee){let Me=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(U,Ce),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<ee;je++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(ne+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ce}let Ie={};Ie[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc($r),pn(!1),kt(od),de(i.CULL_FACE),gt(nr);function de(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function ge(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function At(U,ne){return u[U]!==ne?(i.bindFramebuffer(U,ne),u[U]=ne,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ne),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ge(U,ne){let ee=g,Ee=!1;if(U){ee=h.get(ne),ee===void 0&&(ee=[],h.set(ne,ee));let Me=U.textures;if(ee.length!==Me.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,je=Me.length;Ce<je;Ce++)ee[Ce]=i.COLOR_ATTACHMENT0+Ce;ee.length=Me.length,Ee=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ee)}function Be(U){return v!==U?(i.useProgram(U),v=U,!0):!1}let ct={[ir]:i.FUNC_ADD,[tm]:i.FUNC_SUBTRACT,[nm]:i.FUNC_REVERSE_SUBTRACT};ct[im]=i.MIN,ct[sm]=i.MAX;let ut={[rm]:i.ZERO,[om]:i.ONE,[am]:i.SRC_COLOR,[cd]:i.SRC_ALPHA,[fm]:i.SRC_ALPHA_SATURATE,[um]:i.DST_COLOR,[cm]:i.DST_ALPHA,[lm]:i.ONE_MINUS_SRC_COLOR,[hd]:i.ONE_MINUS_SRC_ALPHA,[dm]:i.ONE_MINUS_DST_COLOR,[hm]:i.ONE_MINUS_DST_ALPHA,[pm]:i.CONSTANT_COLOR,[mm]:i.ONE_MINUS_CONSTANT_COLOR,[gm]:i.CONSTANT_ALPHA,[_m]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(U,ne,ee,Ee,Me,Ce,je,xt,_e,tt){if(U===nr){m===!0&&(ge(i.BLEND),m=!1);return}if(m===!1&&(de(i.BLEND),m=!0),U!==em){if(U!==p||tt!==N){if((M!==ir||C!==ir)&&(i.blendEquation(i.FUNC_ADD),M=ir,C=ir),tt)switch(U){case ho:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFunc(i.ONE,i.ONE);break;case ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ld:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",U);break}else switch(U){case ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ad:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ld:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",U);break}P=null,w=null,R=null,x=null,A.set(0,0,0),O=0,p=U,N=tt}return}Me=Me||ne,Ce=Ce||ee,je=je||Ee,(ne!==M||Me!==C)&&(i.blendEquationSeparate(ct[ne],ct[Me]),M=ne,C=Me),(ee!==P||Ee!==w||Ce!==R||je!==x)&&(i.blendFuncSeparate(ut[ee],ut[Ee],ut[Ce],ut[je]),P=ee,w=Ee,R=Ce,x=je),(xt.equals(A)===!1||_e!==O)&&(i.blendColor(xt.r,xt.g,xt.b,_e),A.copy(xt),O=_e),p=U,N=!1}function qt(U,ne){U.side===wn?ge(i.CULL_FACE):de(i.CULL_FACE);let ee=U.side===Jn;ne&&(ee=!ee),pn(ee),U.blending===ho&&U.transparent===!1?gt(nr):gt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Ee=U.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Kt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function pn(U){z!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),z=U)}function kt(U){U!==jp?(de(i.CULL_FACE),U!==k&&(U===od?i.cullFace(i.BACK):U===Kp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),k=U}function Dn(U){U!==K&&(G&&i.lineWidth(U),K=U)}function Kt(U,ne,ee){U?(de(i.POLYGON_OFFSET_FILL),(F!==ne||Z!==ee)&&(F=ne,Z=ee,o.getReversed()&&(ne=-ne,ee=-ee),i.polygonOffset(ne,ee))):ge(i.POLYGON_OFFSET_FILL)}function Ft(U){U?de(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function En(U){U===void 0&&(U=i.TEXTURE0+Q-1),re!==U&&(i.activeTexture(U),re=U)}function Cn(U,ne,ee){ee===void 0&&(re===null?ee=i.TEXTURE0+Q-1:ee=re);let Ee=ue[ee];Ee===void 0&&(Ee={type:void 0,texture:void 0},ue[ee]=Ee),(Ee.type!==U||Ee.texture!==ne)&&(re!==ee&&(i.activeTexture(ee),re=ee),i.bindTexture(U,ne||Ie[U]),Ee.type=U,Ee.texture=ne)}function V(){let U=ue[re];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Hn(){try{i.compressedTexImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function Qt(){try{i.compressedTexImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function $t(){try{i.texSubImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function Ue(){try{i.texSubImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function dn(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function ce(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function ht(){try{i.texStorage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function I(){try{i.texStorage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function y(){try{i.texImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function H(){try{i.texImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function he(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function ae(U,ne){f[U]!==ne&&(i.pixelStorei(U,ne),f[U]=ne)}function Ae(U){q.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),q.copy(U))}function Le(U){pe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function te(U,ne){let ee=l.get(ne);ee===void 0&&(ee=new WeakMap,l.set(ne,ee));let Ee=ee.get(U);Ee===void 0&&(Ee=i.getUniformBlockIndex(ne,U.name),i.uniformBlockBinding(ne,Ee,Ee),ee.set(U,Ee))}function ie(U,ne,ee){let Me=l.get(ne).get(U);c[Me]!==ee&&(i.bindBufferBase(i.UNIFORM_BUFFER,Me,ee),c[Me]=ee)}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},re=null,ue={},u={},c={},h=new WeakMap,g=[],v=null,m=!1,p=null,M=null,P=null,w=null,C=null,R=null,x=null,A=new Ye(0,0,0),O=0,N=!1,z=null,k=null,K=null,F=null,Z=null,q.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:ge,bindFramebuffer:At,drawBuffers:Ge,useProgram:Be,setBlending:gt,setMaterial:qt,setFlipSided:pn,setCullFace:kt,setLineWidth:Dn,setPolygonOffset:Kt,setScissorTest:Ft,activeTexture:En,bindTexture:Cn,unbindTexture:V,compressedTexImage2D:Hn,compressedTexImage3D:Qt,texImage2D:y,texImage3D:H,pixelStorei:ae,getParameter:he,updateUBOMapping:te,uniformBlockBinding:ie,texStorage2D:ht,texStorage3D:I,texSubImage2D:$t,texSubImage3D:Ue,compressedTexSubImage2D:dn,compressedTexSubImage3D:ce,scissor:Ae,viewport:Le,reset:Te}}function gS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,d=new WeakMap,f=new Set,u,h=new WeakMap,g=new Set,v=new FinalizationRegistry(I=>g.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,y){return m?new OffscreenCanvas(I,y):Kr("canvas")}function M(I,y,H){let he=1,ae=ht(I);if((ae.width>H||ae.height>H)&&(he=H/Math.max(ae.width,ae.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Ae=Math.floor(he*ae.width),Le=Math.floor(he*ae.height);u===void 0&&(u=p(Ae,Le));let te=y?p(Ae,Le):u;return te.width=Ae,te.height=Le,te.getContext("2d").drawImage(I,0,0,Ae,Le),rt("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Ae+"x"+Le+")."),te}else return"data"in I&&rt("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}function P(I){return I.generateMipmaps}function w(I){i.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(I,y,H,he,ae,Ae=!1){if(I!==null){if(i[I]!==void 0)return i[I];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Le;he&&(Le=e.get("EXT_texture_norm16"),Le||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=y;if(y===i.RED&&(H===i.FLOAT&&(te=i.R32F),H===i.HALF_FLOAT&&(te=i.R16F),H===i.UNSIGNED_BYTE&&(te=i.R8),H===i.UNSIGNED_SHORT&&Le&&(te=Le.R16_EXT),H===i.SHORT&&Le&&(te=Le.R16_SNORM_EXT)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.R8UI),H===i.UNSIGNED_SHORT&&(te=i.R16UI),H===i.UNSIGNED_INT&&(te=i.R32UI),H===i.BYTE&&(te=i.R8I),H===i.SHORT&&(te=i.R16I),H===i.INT&&(te=i.R32I)),y===i.RG&&(H===i.FLOAT&&(te=i.RG32F),H===i.HALF_FLOAT&&(te=i.RG16F),H===i.UNSIGNED_BYTE&&(te=i.RG8),H===i.UNSIGNED_SHORT&&Le&&(te=Le.RG16_EXT),H===i.SHORT&&Le&&(te=Le.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RG8UI),H===i.UNSIGNED_SHORT&&(te=i.RG16UI),H===i.UNSIGNED_INT&&(te=i.RG32UI),H===i.BYTE&&(te=i.RG8I),H===i.SHORT&&(te=i.RG16I),H===i.INT&&(te=i.RG32I)),y===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGB8UI),H===i.UNSIGNED_SHORT&&(te=i.RGB16UI),H===i.UNSIGNED_INT&&(te=i.RGB32UI),H===i.BYTE&&(te=i.RGB8I),H===i.SHORT&&(te=i.RGB16I),H===i.INT&&(te=i.RGB32I)),y===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),H===i.UNSIGNED_INT&&(te=i.RGBA32UI),H===i.BYTE&&(te=i.RGBA8I),H===i.SHORT&&(te=i.RGBA16I),H===i.INT&&(te=i.RGBA32I)),y===i.RGB&&(H===i.UNSIGNED_SHORT&&Le&&(te=Le.RGB16_EXT),H===i.SHORT&&Le&&(te=Le.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),y===i.RGBA){let ie=Ae?ta:Ut.getTransfer(ae);H===i.FLOAT&&(te=i.RGBA32F),H===i.HALF_FLOAT&&(te=i.RGBA16F),H===i.UNSIGNED_BYTE&&(te=ie===Zt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&Le&&(te=Le.RGBA16_EXT),H===i.SHORT&&Le&&(te=Le.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(I,y){let H;return I?y===null||y===Ii||y===rr?H=i.DEPTH24_STENCIL8:y===Li?H=i.DEPTH32F_STENCIL8:y===fo&&(H=i.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ii||y===rr?H=i.DEPTH_COMPONENT24:y===Li?H=i.DEPTH_COMPONENT32F:y===fo&&(H=i.DEPTH_COMPONENT16),H}function A(I,y){return P(I)===!0||I.isFramebufferTexture&&I.minFilter!==In&&I.minFilter!==qn?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function O(I){let y=new WeakRef(I);n.get(I).__ref=y,g.add(y),v.register(I,y,y)}function N(I){let y=n.get(I).__ref;y!==void 0&&(g.delete(y),v.unregister(y))}function z(I){K(I.target)}function k(I){F(I.target)}function K(I){I.removeEventListener("dispose",z),N(I),Q(I),I.isVideoTexture&&d.delete(I),I.isHTMLTexture&&f.delete(I)}function F(I){I.removeEventListener("dispose",k),N(I),j(I)}function Z(){for(let I of g){let y=I.deref();y!==void 0&&(y.isRenderTarget===!0?F(y):K(y))}g.clear(),f.clear()}function Q(I){let y=n.get(I);if(y.__webglInit===void 0)return;let H=I.source,he=h.get(H);if(he){let ae=he[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&G(I),Object.keys(he).length===0&&h.delete(H)}n.remove(I)}function G(I){let y=n.get(I);i.deleteTexture(y.__webglTexture);let H=I.source,he=h.get(H);delete he[y.__cacheKey],o.memory.textures--}function j(I){let y=n.get(I);y.__depthDisposeCallback&&y.__depthDisposeCallback();let H=I.depthTexture;if(H&&H.renderTarget===I&&K(H),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(y.__webglFramebuffer[ae]))for(let Ae=0;Ae<y.__webglFramebuffer[ae].length;Ae++)i.deleteFramebuffer(y.__webglFramebuffer[ae][Ae]);else i.deleteFramebuffer(y.__webglFramebuffer[ae]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ae])}else{if(Array.isArray(y.__webglFramebuffer))for(let ae=0;ae<y.__webglFramebuffer.length;ae++)i.deleteFramebuffer(y.__webglFramebuffer[ae]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ae=0;ae<y.__webglColorRenderbuffer.length;ae++)y.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ae]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let he=I.textures;for(let ae=0,Ae=he.length;ae<Ae;ae++){let Le=n.get(he[ae]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(he[ae])}n.remove(I)}let J=0;function re(){J=0}function ue(){return J}function ke(I){J=I}function lt(){let I=J;return I>=s.maxTextures&&rt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,I}function q(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.mipmapsAutoUpdate),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function pe(I,y){let H=n.get(I);if(I.isVideoTexture&&dn(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let he=I.image;if(he===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{qt(H,I,y);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function Se(I,y){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){qt(H,I,y);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function Ie(I,y){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){qt(H,I,y);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function de(I,y){let H=n.get(I);if(I.version>0&&H.__version!==I.version){pn(H,I,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}let ge={[$s]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[ic]:i.MIRRORED_REPEAT},At={[In]:i.NEAREST,[ym]:i.NEAREST_MIPMAP_NEAREST,[Aa]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[kc]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},Ge={[wm]:i.NEVER,[Cd]:i.ALWAYS,[Am]:i.LESS,[Td]:i.LEQUAL,[Tm]:i.EQUAL,[Ed]:i.GEQUAL,[Em]:i.GREATER,[Cm]:i.NOTEQUAL};function Be(I,y){if(y.type===Li&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===qn||y.magFilter===kc||y.magFilter===Aa||y.magFilter===cs||y.minFilter===qn||y.minFilter===kc||y.minFilter===Aa||y.minFilter===cs)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ge[y.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ge[y.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ge[y.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,At[y.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,At[y.minFilter]),y.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===In||y.minFilter!==Aa&&y.minFilter!==cs||y.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ct(I,y){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",z),O(y));let he=y.source,ae=h.get(he);ae===void 0&&(ae={},h.set(he,ae));let Ae=q(y);if(Ae!==I.__cacheKey){ae[Ae]===void 0&&(ae[Ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ae[Ae].usedTimes++;let Le=ae[I.__cacheKey];Le!==void 0&&(ae[I.__cacheKey].usedTimes--,Le.usedTimes===0&&G(y)),I.__cacheKey=Ae,I.__webglTexture=ae[Ae].texture}return H}function ut(I,y,H){return Math.floor(Math.floor(I/H)/y)}function gt(I,y,H,he){let Ae=I.updateRanges;if(Ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,H,he,y.data);else{Ae.sort((U,ne)=>U.start-ne.start);let Le=0;for(let U=1;U<Ae.length;U++){let ne=Ae[Le],ee=Ae[U],Ee=ne.start+ne.count,Me=ut(ee.start,y.width,4),Ce=ut(ne.start,y.width,4);ee.start<=Ee+1&&Me===Ce&&ut(ee.start+ee.count-1,y.width,4)===Me?ne.count=Math.max(ne.count,ee.start+ee.count-ne.start):(++Le,Ae[Le]=ee)}Ae.length=Le+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),Te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let U=0,ne=Ae.length;U<ne;U++){let ee=Ae[U],Ee=Math.floor(ee.start/4),Me=Math.ceil(ee.count/4),Ce=Ee%y.width,je=Math.floor(Ee/y.width),xt=Me,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,je),t.texSubImage2D(i.TEXTURE_2D,0,Ce,je,xt,_e,H,he,y.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function qt(I,y,H){let he=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(he=i.TEXTURE_3D);let ae=ct(I,y),Ae=y.source;t.bindTexture(he,I.__webglTexture,i.TEXTURE0+H);let Le=n.get(Ae);if(Ae.version!==Le.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let _e=Ut.getPrimaries(Ut.workingColorSpace),tt=y.colorSpace===us?null:Ut.getPrimaries(y.colorSpace),_t=y.colorSpace===us||_e===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=M(y.image,!1,s.maxTextureSize);ie=ce(y,ie);let Te=r.convert(y.format,y.colorSpace),U=r.convert(y.type),ne=R(y.internalFormat,Te,U,y.normalized,y.colorSpace,y.isVideoTexture);Be(he,y);let ee,Ee=y.mipmaps,Me=y.isVideoTexture!==!0,Ce=Le.__version===void 0||ae===!0,je=Ae.dataReady,xt=A(y,ie);if(y.isDepthTexture)ne=x(y.format===hs,y.type),Ce&&(Me?t.texStorage2D(i.TEXTURE_2D,1,ne,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,ne,ie.width,ie.height,0,Te,U,null));else if(y.isDataTexture)if(Ee.length>0){Me&&Ce&&t.texStorage2D(i.TEXTURE_2D,xt,ne,Ee[0].width,Ee[0].height);for(let _e=0,tt=Ee.length;_e<tt;_e++)ee=Ee[_e],Me?je&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,ee.width,ee.height,Te,U,ee.data):t.texImage2D(i.TEXTURE_2D,_e,ne,ee.width,ee.height,0,Te,U,ee.data);y.generateMipmaps=!1}else Me?(Ce&&t.texStorage2D(i.TEXTURE_2D,xt,ne,ie.width,ie.height),je&&gt(y,ie,Te,U)):t.texImage2D(i.TEXTURE_2D,0,ne,ie.width,ie.height,0,Te,U,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Me&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xt,ne,Ee[0].width,Ee[0].height,ie.depth);for(let _e=0,tt=Ee.length;_e<tt;_e++)if(ee=Ee[_e],y.format!==Ni)if(Te!==null)if(Me){if(je)if(y.layerUpdates.size>0){let _t=zd(ee.width,ee.height,y.format,y.type);for(let Ne of y.layerUpdates){let Wt=ee.data.subarray(Ne*_t/ee.data.BYTES_PER_ELEMENT,(Ne+1)*_t/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Ne,ee.width,ee.height,1,Te,Wt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,ee.width,ee.height,ie.depth,Te,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,ne,ee.width,ee.height,ie.depth,0,ee.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,ee.width,ee.height,ie.depth,Te,U,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,ne,ee.width,ee.height,ie.depth,0,Te,U,ee.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Me&&Ce&&t.texStorage2D(i.TEXTURE_2D,xt,ne,Ee[0].width,Ee[0].height);for(let _e=0,tt=Ee.length;_e<tt;_e++)ee=Ee[_e],y.format!==Ni?Te!==null?Me?je&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,ee.width,ee.height,Te,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,ne,ee.width,ee.height,0,ee.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?je&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,ee.width,ee.height,Te,U,ee.data):t.texImage2D(i.TEXTURE_2D,_e,ne,ee.width,ee.height,0,Te,U,ee.data)}else if(y.isDataArrayTexture)if(Me){if(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xt,ne,ie.width,ie.height,ie.depth),je)if(y.layerUpdates.size>0){let _e=zd(ie.width,ie.height,y.format,y.type);for(let tt of y.layerUpdates){let _t=ie.data.subarray(tt*_e/ie.data.BYTES_PER_ELEMENT,(tt+1)*_e/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ie.width,ie.height,1,Te,U,_t)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Te,U,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,ie.width,ie.height,ie.depth,0,Te,U,ie.data);else if(y.isData3DTexture)Me?(Ce&&t.texStorage3D(i.TEXTURE_3D,xt,ne,ie.width,ie.height,ie.depth),je&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Te,U,ie.data)):t.texImage3D(i.TEXTURE_3D,0,ne,ie.width,ie.height,ie.depth,0,Te,U,ie.data);else if(y.isFramebufferTexture){if(Ce)if(Me)t.texStorage2D(i.TEXTURE_2D,xt,ne,ie.width,ie.height);else{let _e=ie.width,tt=ie.height;for(let _t=0;_t<xt;_t++)t.texImage2D(i.TEXTURE_2D,_t,ne,_e,tt,0,Te,U,null),_e>>=1,tt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ie.parentNode!==_e){_e.appendChild(ie),f.add(y),_e.onpaint=tt=>{let _t=tt.changedElements;for(let Ne of f)_t.includes(Ne.image)&&(Ne.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let _t=i.RGBA,Ne=i.RGBA,Wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_t,Ne,Wt,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Me&&Ce){let _e=ht(Ee[0]);t.texStorage2D(i.TEXTURE_2D,xt,ne,_e.width,_e.height)}for(let _e=0,tt=Ee.length;_e<tt;_e++)ee=Ee[_e],Me?je&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Te,U,ee):t.texImage2D(i.TEXTURE_2D,_e,ne,Te,U,ee);y.generateMipmaps=!1}else if(Me){if(Ce){let _e=ht(ie);t.texStorage2D(i.TEXTURE_2D,xt,ne,_e.width,_e.height)}je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,U,ie)}else t.texImage2D(i.TEXTURE_2D,0,ne,Te,U,ie);P(y)&&y.mipmapsAutoUpdate===!0&&w(he),Le.__version=Ae.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function pn(I,y,H){if(y.image.length!==6)return;let he=ct(I,y),ae=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let Ae=n.get(ae);if(ae.version!==Ae.__version||he===!0){t.activeTexture(i.TEXTURE0+H);let Le=Ut.getPrimaries(Ut.workingColorSpace),te=y.colorSpace===us?null:Ut.getPrimaries(y.colorSpace),ie=y.colorSpace===us||Le===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Te=y.isCompressedTexture||y.image[0].isCompressedTexture,U=y.image[0]&&y.image[0].isDataTexture,ne=[];for(let Ne=0;Ne<6;Ne++)!Te&&!U?ne[Ne]=M(y.image[Ne],!0,s.maxCubemapSize):ne[Ne]=U?y.image[Ne].image:y.image[Ne],ne[Ne]=ce(y,ne[Ne]);let ee=ne[0],Ee=r.convert(y.format,y.colorSpace),Me=r.convert(y.type),Ce=R(y.internalFormat,Ee,Me,y.normalized,y.colorSpace),je=y.isVideoTexture!==!0,xt=Ae.__version===void 0||he===!0,_e=ae.dataReady,tt=A(y,ee);Be(i.TEXTURE_CUBE_MAP,y);let _t;if(y.isDepthTexture){if(Ce=x(y.format===hs,y.type),xt)if(je)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ce,ee.width,ee.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ce,ee.width,ee.height,0,Ee,Me,null)}else if(Te){je&&xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Ce,ee.width,ee.height);for(let Ne=0;Ne<6;Ne++){_t=ne[Ne].mipmaps;for(let Wt=0;Wt<_t.length;Wt++){let mn=_t[Wt];y.format!==Ni?Ee!==null?je?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Wt,0,0,mn.width,mn.height,Ee,mn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Wt,Ce,mn.width,mn.height,0,mn.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Wt,0,0,mn.width,mn.height,Ee,Me,mn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Wt,Ce,mn.width,mn.height,0,Ee,Me,mn.data)}}}else{if(_t=y.mipmaps,je&&xt){_t.length>0&&tt++;let Ne=ht(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Ce,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(U){je?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ne[Ne].width,ne[Ne].height,Ee,Me,ne[Ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ce,ne[Ne].width,ne[Ne].height,0,Ee,Me,ne[Ne].data);for(let Wt=0;Wt<_t.length;Wt++){let Oi=_t[Wt].image[Ne].image;je?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Wt+1,0,0,Oi.width,Oi.height,Ee,Me,Oi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Wt+1,Ce,Oi.width,Oi.height,0,Ee,Me,Oi.data)}}else{je?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Ee,Me,ne[Ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ce,Ee,Me,ne[Ne]);for(let Wt=0;Wt<_t.length;Wt++){let mn=_t[Wt];je?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Wt+1,0,0,Ee,Me,mn.image[Ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Wt+1,Ce,Ee,Me,mn.image[Ne])}}}P(y)&&y.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),Ae.__version=ae.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function kt(I,y,H,he,ae,Ae){let Le=r.convert(H.format,H.colorSpace),te=r.convert(H.type),ie=R(H.internalFormat,Le,te,H.normalized,H.colorSpace),Te=n.get(y),U=n.get(H);if(U.__renderTarget=y,!Te.__hasExternalTextures){let ne=Math.max(1,y.width>>Ae),ee=Math.max(1,y.height>>Ae);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Ae,ie,ne,ee,y.depth,0,Le,te,null):t.texImage2D(ae,Ae,ie,ne,ee,0,Le,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ue(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,ae,U.__webglTexture,0,$t(y)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,ae,U.__webglTexture,Ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Dn(I,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),y.depthBuffer){let he=y.depthTexture,ae=he&&he.isDepthTexture?he.type:null,Ae=x(y.stencilBuffer,ae),Le=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(y),Ae,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(y),Ae,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,I)}else{let he=y.textures;for(let ae=0;ae<he.length;ae++){let Ae=he[ae],Le=r.convert(Ae.format,Ae.colorSpace),te=r.convert(Ae.type),ie=R(Ae.internalFormat,Le,te,Ae.normalized,Ae.colorSpace);Ue(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(y),ie,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(y),ie,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Kt(I,y,H){let he=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(y.depthTexture);ae.__renderTarget=y;let Ae=he?y.depthTexture.image[0]:y.depthTexture.image;(!ae.__webglTexture||Ae.width!==y.width||Ae.height!==y.height)&&(Ae.width=y.width,Ae.height=y.height,y.depthTexture.needsUpdate=!0),he?de(y.depthTexture,0):pe(y.depthTexture,0);let Le=ae.__webglTexture,te=$t(y),ie=he?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,Te=y.depthTexture.format===hs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===as)Ue(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,ie,Le,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,Te,ie,Le,0);else if(y.depthTexture.format===hs)Ue(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,ie,Le,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,Te,ie,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ft(I){let y=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let he=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),he){let ae=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,he.removeEventListener("dispose",ae)};he.addEventListener("dispose",ae),y.__depthDisposeCallback=ae}y.__boundDepthTexture=he}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let he=0;he<6;he++)Kt(y.__webglFramebuffer[he],I,he);else I.texture.mipmaps.length>0?Kt(y.__webglFramebuffer[0],I,0):Kt(y.__webglFramebuffer,I,0);else if(H){y.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[he]),y.__webglDepthbuffer[he]===void 0)y.__webglDepthbuffer[he]=i.createRenderbuffer(),Dn(y.__webglDepthbuffer[he],I,!1);else{let ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=y.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Ae)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Dn(y.__webglDepthbuffer,I,!1);else{let ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function En(I,y,H){let he=n.get(I);y!==void 0&&kt(he.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ft(I)}function Cn(I){let y=I.texture,H=n.get(I),he=n.get(y);I.addEventListener("dispose",k),O(I);let ae=I.textures,Ae=I.isWebGLCubeRenderTarget===!0,Le=ae.length>1;if(Le||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=y.version,o.memory.textures++),Ae){H.__webglFramebuffer=[];for(let te=0;te<6;te++)if(y.mipmaps.length>0){H.__webglFramebuffer[te]=[];for(let ie=0;ie<y.mipmaps.length;ie++)H.__webglFramebuffer[te][ie]=i.createFramebuffer()}else H.__webglFramebuffer[te]=i.createFramebuffer()}else{if(y.mipmaps.length>0){H.__webglFramebuffer=[];for(let te=0;te<y.mipmaps.length;te++)H.__webglFramebuffer[te]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Le)for(let te=0,ie=ae.length;te<ie;te++){let Te=n.get(ae[te]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ue(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let te=0;te<ae.length;te++){let ie=ae[te];H.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[te]);let Te=r.convert(ie.format,ie.colorSpace),U=r.convert(ie.type),ne=R(ie.internalFormat,Te,U,ie.normalized,ie.colorSpace,I.isXRRenderTarget===!0),ee=$t(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,ne,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,H.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Dn(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Be(i.TEXTURE_CUBE_MAP,y);for(let te=0;te<6;te++)if(y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)kt(H.__webglFramebuffer[te][ie],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else kt(H.__webglFramebuffer[te],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);P(y)?w(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(Le){for(let te=0,ie=ae.length;te<ie;te++){let Te=ae[te],U=n.get(Te),ne=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ne=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,U.__webglTexture),Be(ne,Te),kt(H.__webglFramebuffer,I,Te,i.COLOR_ATTACHMENT0+te,ne,0),P(Te)&&w(ne)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,he.__webglTexture),Be(te,y),y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)kt(H.__webglFramebuffer[ie],I,y,i.COLOR_ATTACHMENT0,te,ie);else kt(H.__webglFramebuffer,I,y,i.COLOR_ATTACHMENT0,te,0);P(y)?w(te):y.mipmaps.length>0&&i.texParameteri(te,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Ft(I)}function V(I){let y=I.textures;for(let H=0,he=y.length;H<he;H++){let ae=y[H];if(P(ae)&&ae.mipmapsAutoUpdate===!0){let Ae=C(I),Le=n.get(ae).__webglTexture;t.bindTexture(Ae,Le),w(Ae),t.unbindTexture()}}}let Hn=[];function Qt(I){if(I.samples>0){if(Ue(I)===!1){let y=I.textures,H=I.width,he=I.height,ae=i.COLOR_BUFFER_BIT,Ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(I),te=y.length>1;if(te)for(let Te=0;Te<y.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);let U=n.get(y[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,H,he,0,0,H,he,ae,i.NEAREST),c===!0&&(Hn.length=0,Hn.push(i.COLOR_ATTACHMENT0+Te),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Hn.push(Ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Hn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let Te=0;Te<y.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);let U=n.get(y[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function $t(I){return Math.min(s.maxSamples,I.samples)}function Ue(I){let y=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function dn(I){let y=o.render.frame;d.get(I)!==y&&(d.set(I,y),I.update())}function ce(I,y){let H=I.colorSpace,he=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==ea&&H!==us&&(Ut.getTransfer(H)===Zt?(he!==Ni||ae!==Qn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",H)),y}function ht(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=lt,this.resetTextureUnits=re,this.getTextureUnits=ue,this.setTextureUnits=ke,this.setTexture2D=pe,this.setTexture2DArray=Se,this.setTexture3D=Ie,this.setTextureCube=de,this.rebindTextures=En,this.setupRenderTarget=Cn,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=Ue,this.dispose=Z}function _S(i,e){function t(n,s=us){let r,o=Ut.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===Gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Md)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vd)return i.BYTE;if(n===yd)return i.SHORT;if(n===fo)return i.UNSIGNED_SHORT;if(n===Vc)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Li)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===bd)return i.ALPHA;if(n===wd)return i.RGB;if(n===Ni)return i.RGBA;if(n===as)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===Ad)return i.RED;if(n===Wc)return i.RED_INTEGER;if(n===Ns)return i.RG;if(n===Xc)return i.RG_INTEGER;if(n===qc)return i.RGBA_INTEGER;if(n===Ta||n===Ea||n===Ca||n===Ra)if(o===Zt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yc||n===Zc||n===Jc||n===$c)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===Kc||n===Qc||n===eh||n===th||n===Pa||n===nh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jc||n===Kc)return o===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qc)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===eh)return r.COMPRESSED_R11_EAC;if(n===th)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pa)return r.COMPRESSED_RG11_EAC;if(n===nh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ih)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sh)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rh)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oh)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ah)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lh)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ch)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hh)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uh)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dh)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fh)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ph)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mh)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gh)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_h||n===xh||n===vh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_h)return o===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yh||n===Mh||n===Ia||n===Sh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var xS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vS=`
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

}`,Qd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:xS,fragmentShader:vS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new ma(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ef=class extends Hi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,u=null,h=null,g=null,v=typeof XRWebGLBinding<"u",m=new Qd,p={},M=t.getContextAttributes(),P=null,w=null,C=[],R=[],x=new Oe,A=null,O=null,N=new zn;N.viewport=new hn;let z=new zn;z.viewport=new hn;let k=[N,z],K=new Uc,F=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let pe=C[q];return pe===void 0&&(pe=new no,C[q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(q){let pe=C[q];return pe===void 0&&(pe=new no,C[q]=pe),pe.getGripSpace()},this.getHand=function(q){let pe=C[q];return pe===void 0&&(pe=new no,C[q]=pe),pe.getHandSpace()};function Q(q){let pe=R.indexOf(q.inputSource);if(pe===-1)return;let Se=C[pe];Se!==void 0&&(Se.update(q.inputSource,q.frame,l||o),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let q=0;q<C.length;q++){let pe=R[q];pe!==null&&(R[q]=null,C[q].disconnect(pe))}F=null,Z=null,m.reset();for(let q in p)delete p[q];if(e.setRenderTarget(P),h=null,u=null,f=null,s=null,w=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(x.width,x.height,!1),O!==null){let q=O.camera;q.fov=O.fov,q.zoom=O.zoom,q.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ie=null,de=null;M.depth&&(de=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=M.stencil?hs:as,Ie=M.stencil?rr:Ii);let ge={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new li(u.textureWidth,u.textureHeight,{format:Ni,type:Qn,depthTexture:new ls(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new li(h.framebufferWidth,h.framebufferHeight,{format:Ni,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(q){for(let pe=0;pe<q.removed.length;pe++){let Se=q.removed[pe],Ie=R.indexOf(Se);Ie>=0&&(R[Ie]=null,C[Ie].disconnect(Se))}for(let pe=0;pe<q.added.length;pe++){let Se=q.added[pe],Ie=R.indexOf(Se);if(Ie===-1){for(let ge=0;ge<C.length;ge++)if(ge>=R.length){R.push(Se),Ie=ge;break}else if(R[ge]===null){R[ge]=Se,Ie=ge;break}if(Ie===-1)break}let de=C[Ie];de&&de.connect(Se)}}function J(q,pe){pe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let pe=q.near,Se=q.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),K.near=z.near=N.near=pe,K.far=z.far=N.far=Se,(F!==K.near||Z!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),F=K.near,Z=K.far),K.layers.mask=q.layers.mask|6,N.layers.mask=K.layers.mask&-5,z.layers.mask=K.layers.mask&-3;let Ie=q.parent,de=K.cameras;J(K,Ie);for(let ge=0;ge<de.length;ge++)J(de[ge],Ie);K.projectionMatrix.copy(N.projectionMatrix),K.projectionMatrixInverse.copy(N.projectionMatrixInverse),O===null&&q.isPerspectiveCamera&&(O={camera:q,fov:q.fov,zoom:q.zoom}),re(q,K,Ie)};function re(q,pe,Se){Se===null?q.matrix.copy(pe.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(pe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(pe.projectionMatrix),q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=eo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(q){return p[q]};let ue=null;function ke(q,pe){if(d=pe.getViewerPose(l||o),g=pe,d!==null){let Se=d.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let Ie=!1;Se.length!==K.cameras.length&&(K.cameras.length=0,Ie=!0);for(let Ge=0;Ge<Se.length;Ge++){let Be=Se[Ge],ct=null;if(h!==null)ct=h.getViewport(Be);else{let gt=f.getViewSubImage(u,Be);ct=gt.viewport,Ge===0&&(e.setRenderTargetTextures(w,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(w))}let ut=k[Ge];ut===void 0&&(ut=new zn,ut.layers.enable(Ge),ut.viewport=new hn,k[Ge]=ut),ut.matrix.fromArray(Be.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Be.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ct.x,ct.y,ct.width,ct.height),Ge===0&&(K.matrix.copy(ut.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ie===!0&&K.cameras.push(ut)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let Ge=f.getDepthInformation(Se[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(de&&de.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let Ge=0;Ge<Se.length;Ge++){let Be=Se[Ge].camera;if(Be){let ct=p[Be];ct||(ct=new ua,p[Be]=ct);let ut=f.getCameraImage(Be);ct.sourceTexture=ut}}}}for(let Se=0;Se<C.length;Se++){let Ie=R[Se],de=C[Se];Ie!==null&&de!==void 0&&de.update(Ie,pe,l||o)}ue&&ue(q,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}let lt=new r0;lt.setAnimationLoop(ke),this.setAnimationLoop=function(q){ue=q},this.dispose=function(){}}},yS=new Pt,m0=new mt;m0.set(-1,0,0,0,1,0,0,0,1);function MS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,P,w){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&h(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,P):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),P=M.envMap,w=M.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(yS.makeRotationFromEuler(w)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(m0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=P*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function SS(i,e,t,n){let s={},r={};function o(M,P){let w=P.program;n.uniformBlockBinding(M,w,s[M.id])}function a(M,P){let w=s[M.id];w===void 0&&(g(M),w=c(M),s[M.id]=w,M.addEventListener("dispose",m));let C=P.program;n.updateUBOMapping(M,C);let R=e.render.frame;r[M.id]!==R&&(l(M),r[M.id]=R)}function c(M){let P=i.createBuffer(),w=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,w,C),i.bindBuffer(i.UNIFORM_BUFFER,null),P}function l(M){let P=s[M.id],w=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let R=0,x=w.length;R<x;R++){let A=w[R];if(Array.isArray(A))for(let O=0,N=A.length;O<N;O++)d(A[O],R,O,C);else d(A,R,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,P,w,C){if(u(M,P,w,C)===!0){let R=M.__offset,x=M.value;if(Array.isArray(x)){let A=0;for(let O=0;O<x.length;O++){let N=x[O],z=v(N,!0);f(N,M.__data,A),A+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,M.__data)}}function f(M,P,w){typeof M=="number"||typeof M=="boolean"?P[w]=M:M.isMatrix3?(P[w]=M.elements[0],P[w+1]=M.elements[1],P[w+2]=M.elements[2],P[w+3]=0,P[w+4]=M.elements[3],P[w+5]=M.elements[4],P[w+6]=M.elements[5],P[w+7]=0,P[w+8]=M.elements[6],P[w+9]=M.elements[7],P[w+10]=M.elements[8],P[w+11]=0):ArrayBuffer.isView(M)?P.set(M.subarray(0,P.length-w),w):M.toArray(P,w)}function u(M,P,w,C){let R=M.value,x=P+"_"+w;if(Array.isArray(R)){C[x]===void 0&&(C[x]=[]);let A=C[x],O=!1;for(let N=0;N<R.length;N++)h(R[N],A,N)===!0&&(O=!0);return O}return h(R,C,x)}function h(M,P,w){if(P[w]===void 0)return typeof M=="number"||typeof M=="boolean"?P[w]=M:ArrayBuffer.isView(M)?P[w]=M.slice():P[w]=M.clone(),!0;{let C=P[w];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return P[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function g(M){let P=M.uniforms,w=0,C=16;for(let x=0,A=P.length;x<A;x++){let O=Array.isArray(P[x])?P[x]:[P[x]];for(let N=0,z=O.length;N<z;N++){let k=O[N],K=Array.isArray(k.value)?k.value:[k.value],F=Array.isArray(P[x])||Array.isArray(k.value),Z=w;for(let G=0,j=K.length;G<j;G++){let J=K[G],re=v(J,F),ue=w%C,ke=ue%re.boundary,lt=ue+ke;w+=ke,lt!==0&&C-lt<re.storage&&(w+=C-lt),G===0&&(Z=w),w+=re.storage}let Q=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new Q((w-Z)/Float32Array.BYTES_PER_ELEMENT),k.__offset=Z}}let R=w%C;return R>0&&(w+=C-R),M.__size=w,M.__cache={},this}function v(M,P){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=16,w.storage=48):M.isMatrix4?(w.boundary=16,w.storage=64):M.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",M),P===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(M){let P=M.target;P.removeEventListener("dispose",m),i.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:p}}var bS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function wS(){return qi===null&&(qi=new cc(bS,16,16,Ns,Di),qi.name="DFG_LUT",qi.minFilter=qn,qi.magFilter=qn,qi.wrapS=Gi,qi.wrapT=Gi,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var Ch=class{constructor(e={}){let{canvas:t=Rm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Qn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let v=h,m=new Set([qc,Xc,Wc]),p=new Set([Qn,Ii,fo,rr,Gc,Hc]),M=new Uint32Array(4),P=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},C=null,R=null,x=[],A=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,z=!1,k=null,K=null,F=null,Z=null;this._outputColorSpace=cn;let Q=0,G=0,j=null,J=-1,re=null,ue=new hn,ke=new hn,lt=null,q=new Ye(0),pe=0,Se=t.width,Ie=t.height,de=1,ge=null,At=null,Ge=new hn(0,0,Se,Ie),Be=new hn(0,0,Se,Ie),ct=!1,ut=new Cs,gt=new hc,qt=!1,pn=!1,kt=new Pt,Dn=new T,Kt=new hn,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},En=!1;function Cn(){return j===null?de:1}let V=n;function Hn(S,B){return t.getContext(S,B)}let Qt,$t,Ue,dn,ce,ht,I,y,H,he,ae,Ae,Le,te,ie,Te,U,ne,ee,Ee,Me,Ce,je;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),V===null){let B="webgl2";if(V=Hn(B,S),V===null)throw Hn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xt()}catch(S){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),ft("WebGLRenderer: "+S.message),S}function xt(){Qt=new Uy(V),Qt.init(),Me=new _S(V,Qt),$t=new wy(V,Qt,e,Me),Ue=new mS(V,Qt),$t.reversedDepthBuffer&&u&&Ue.buffers.depth.setReversed(!0),K=V.createFramebuffer(),F=V.createFramebuffer(),Z=V.createFramebuffer(),dn=new By(V),ce=new tS,ht=new gS(V,Qt,Ue,ce,$t,Me,dn),I=new Ny(N),y=new k_(V),Ce=new Sy(V,y),H=new Fy(V,y,dn,Ce),he=new ky(V,H,y,Ce,dn),ne=new zy(V,$t,ht),ie=new Ay(ce),ae=new eS(N,I,Qt,$t,Ce,ie),Ae=new MS(N,ce),Le=new iS,te=new cS(Qt),U=new My(N,I,Ue,he,g,c),Te=new pS(N,he,$t),je=new SS(V,dn,$t,Ue),ee=new by(V,Qt,dn),Ee=new Oy(V,Qt,dn),dn.programs=ae.programs,N.capabilities=$t,N.extensions=Qt,N.properties=ce,N.renderLists=Le,N.shadowMap=Te,N.state=Ue,N.info=dn}v!==Qn&&(O=new Gy(v,t.width,t.height,a,s,r));let _e=new ef(N,V);this.xr=_e,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let S=Qt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Qt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(S){S!==void 0&&(de=S,this.setSize(Se,Ie,!1))},this.getSize=function(S){return S.set(Se,Ie)},this.setSize=function(S,B,$=!0){if(_e.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=S,Ie=B,t.width=Math.floor(S*de),t.height=Math.floor(B*de),$===!0&&(t.style.width=S+"px",t.style.height=B+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(Se*de,Ie*de).floor()},this.setDrawingBufferSize=function(S,B,$){Se=S,Ie=B,de=$,t.width=Math.floor(S*$),t.height=Math.floor(B*$),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(v===Qn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ue)},this.getViewport=function(S){return S.copy(Ge)},this.setViewport=function(S,B,$,X){S.isVector4?Ge.set(S.x,S.y,S.z,S.w):Ge.set(S,B,$,X),Ue.viewport(ue.copy(Ge).multiplyScalar(Cn()).round())},this.getScissor=function(S){return S.copy(Be)},this.setScissor=function(S,B,$,X){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,B,$,X),Ue.scissor(ke.copy(Be).multiplyScalar(Cn()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){Ue.setScissorTest(ct=S)},this.setOpaqueSort=function(S){ge=S},this.setTransparentSort=function(S){At=S},this.getClearColor=function(S){return S.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,$=!0){let X=0;if(S){let W=!1;if(j!==null){let Re=j.texture.format;W=m.has(Re)}if(W){let Re=j.texture.type,He=p.has(Re),we=U.getClearColor(),De=U.getClearAlpha(),Ze=we.r,dt=we.g,bt=we.b;He?(M[0]=Ze,M[1]=dt,M[2]=bt,M[3]=De,V.clearBufferuiv(V.COLOR,0,M)):(P[0]=Ze,P[1]=dt,P[2]=bt,P[3]=De,V.clearBufferiv(V.COLOR,0,P))}else X|=V.COLOR_BUFFER_BIT}B&&(X|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&V.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),U.dispose(),Le.dispose(),te.dispose(),ht.dispose(),ce.dispose(),I.dispose(),he.dispose(),H.dispose(),Ce.dispose(),je.dispose(),ae.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",_i),_e.removeEventListener("sessionend",yo),Ji.stop()};function tt(S){S.preventDefault(),na("WebGLRenderer: Context Lost."),z=!0}function _t(){na("WebGLRenderer: Context Restored."),z=!1;let S=dn.autoReset,B=Te.enabled,$=Te.autoUpdate,X=Te.needsUpdate,W=Te.type;xt(),dn.autoReset=S,Te.enabled=B,Te.autoUpdate=$,Te.needsUpdate=X,Te.type=W}function Ne(S){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Wt(S){let B=S.target;B.removeEventListener("dispose",Wt),mn(B)}function mn(S){Oi(S),ce.remove(S)}function Oi(S){let B=ce.get(S).programs;B!==void 0&&(B.forEach(function($){ae.releaseProgram($)}),S.isShaderMaterial&&ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,$,X,W,Re){B===null&&(B=Ft);let He=W.isMesh&&W.matrixWorld.determinantAffine()<0,we=ka(S,B,$,X,W);Ue.setMaterial(X,He);let De=$.index,Ze=1;if(X.wireframe===!0){if(De=H.getWireframeAttribute($),De===void 0)return;Ze=2}let dt=$.drawRange,bt=$.attributes.position,Ve=dt.start*Ze,Mt=(dt.start+dt.count)*Ze;Re!==null&&(Ve=Math.max(Ve,Re.start*Ze),Mt=Math.min(Mt,(Re.start+Re.count)*Ze)),De!==null?(Ve=Math.max(Ve,0),Mt=Math.min(Mt,De.count)):bt!=null&&(Ve=Math.max(Ve,0),Mt=Math.min(Mt,bt.count));let jt=Mt-Ve;if(jt<0||jt===1/0)return;Ce.setup(W,X,we,$,De);let Dt,Yt=ee;if(De!==null&&(Dt=y.get(De),Yt=Ee,Yt.setIndex(Dt)),W.isMesh)X.wireframe===!0?(Ue.setLineWidth(X.wireframeLinewidth*Cn()),Yt.setMode(V.LINES)):Yt.setMode(V.TRIANGLES);else if(W.isLine){let Mn=X.linewidth;Mn===void 0&&(Mn=1),Ue.setLineWidth(Mn*Cn()),W.isLineSegments?Yt.setMode(V.LINES):W.isLineLoop?Yt.setMode(V.LINE_LOOP):Yt.setMode(V.LINE_STRIP)}else W.isPoints?Yt.setMode(V.POINTS):W.isSprite&&Yt.setMode(V.TRIANGLES);if(W.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Mn=W._multiDrawStarts,qe=W._multiDrawCounts,Sn=W._multiDrawCount,Tt=De?y.get(De).bytesPerElement:1,vi=ce.get(X).currentProgram.getUniforms();for(let xn=0;xn<Sn;xn++)vi.setValue(V,"_gl_DrawID",xn),Yt.render(Mn[xn]/Tt,qe[xn])}else if(W.isInstancedMesh)Yt.renderInstances(Ve,jt,W.count);else if($.isInstancedBufferGeometry){let Mn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,qe=Math.min($.instanceCount,Mn);Yt.renderInstances(Ve,jt,qe)}else Yt.render(Ve,jt)};function Zi(S,B,$,X){k!==null&&S.isNodeMaterial&&k.setObject(X,S),qt===!0&&ie.setState(S,$,!1),S.transparent===!0&&S.side===wn&&S.forceSinglePass===!1?(S.side=Jn,S.needsUpdate=!0,Je(S,B,X),S.side=Ds,S.needsUpdate=!0,Je(S,B,X),S.side=wn):Je(S,B,X)}this.compile=function(S,B,$=null){$===null&&($=S),k!==null&&k.renderStart(S,B,$),R=te.get($),R.init(B),A.push(R),$.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(R.pushLight(W),W.castShadow&&R.pushShadow(W))}),S!==$&&S.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(R.pushLight(W),W.castShadow&&R.pushShadow(W))}),R.setupLights(),k!==null&&k.updateLights(R.state.lightsArray),pn=this.localClippingEnabled,qt=ie.init(this.clippingPlanes,pn),qt===!0&&ie.setGlobalState(this.clippingPlanes,B),k!==null&&Te.render(R.state.shadowsArray,$,B);let X=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Re=W.material;if(Re)if(Array.isArray(Re))for(let He=0;He<Re.length;He++){let we=Re[He];Zi(we,$,B,W),X.add(we)}else Zi(Re,$,B,W),X.add(Re)}),R=A.pop(),k!==null&&k.renderEnd(),X},this.compileAsync=function(S,B,$=null){let X=this.compile(S,B,$);return new Promise(W=>{function Re(){if(X.forEach(function(He){let De=ce.get(He).currentProgram;(De===void 0||De.isReady())&&X.delete(He)}),X.size===0){W(S);return}setTimeout(Re,10)}Qt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let gi=null;function zh(S){gi&&gi(S)}function _i(){Ji.stop()}function yo(){Ji.start()}let Ji=new r0;Ji.setAnimationLoop(zh),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(S){gi=S,_e.setAnimationLoop(S),S===null?Ji.stop():Ji.start()},_e.addEventListener("sessionstart",_i),_e.addEventListener("sessionend",yo),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;k!==null&&k.renderStart(S,B);let $=_e.enabled===!0&&_e.isPresenting===!0,X=O!==null&&(j===null||$)&&O.begin(N,j);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),S.isScene===!0&&S.onBeforeRender(N,S,B,j),R=te.get(S,A.length),R.init(B),R.state.textureUnits=ht.getTextureUnits(),A.push(R),kt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?gt.setFromArrayCamera(B):ut.setFromProjectionMatrix(kt,pi,B.reversedDepth),pn=this.localClippingEnabled,qt=ie.init(this.clippingPlanes,pn),C=Le.get(S,x.length),C.init(),x.push(C),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let He=N.xr.getDepthSensingMesh();He!==null&&$i(He,B,-1/0,N.sortObjects)}$i(S,B,0,N.sortObjects),C.finish(),k!==null&&k.updateLights(R.state.lightsArray),N.sortObjects===!0&&C.sort(ge,At),En=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,En&&U.addToRenderList(C,S),this.info.autoReset===!0&&this.info.reset(),qt===!0&&ie.beginShadows();let W=R.state.shadowsArray;if(Te.render(W,S,B),qt===!0&&ie.endShadows(),(X&&O.hasRenderPass())===!1){let He=C.opaque,we=C.transmissive;if(R.setupLights(),B.isArrayCamera){let De=B.cameras;if(we.length>0)for(let Ze=0,dt=De.length;Ze<dt;Ze++){let bt=De[Ze];Xt(He,we,S,bt)}En&&U.render(S);for(let Ze=0,dt=De.length;Ze<dt;Ze++){let bt=De[Ze];Mo(C,S,bt,bt.viewport)}}else we.length>0&&Xt(He,we,S,B),En&&U.render(S),Mo(C,S,B)}j!==null&&G===0&&(ht.updateMultisampleRenderTarget(j),ht.updateRenderTargetMipmap(j)),X&&O.end(N),S.isScene===!0&&S.onAfterRender(N,S,B),Ce.resetDefaultState(),J=-1,re=null,A.pop(),A.length>0?(R=A[A.length-1],ht.setTextureUnits(R.state.textureUnits),qt===!0&&ie.setGlobalState(N.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,k!==null&&k.renderEnd()};function $i(S,B,$,X){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)R.pushLight(S),S.castShadow&&R.pushShadow(S);else if(S.isSprite){let He=B.isArrayCamera?gt:ut;if(!S.frustumCulled||S.intersectsFrustum(He)){X&&Kt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(kt);let we=he.update(S),De=S.material;De.visible&&C.push(S,we,De,$,Kt.z,null,B)}}else if(S.isMesh||S.isLine||S.isPoints){let He=B.isArrayCamera?gt:ut;if(!S.frustumCulled||S.intersectsFrustum(He)){let we=he.update(S),De=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Kt.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Kt.copy(we.boundingSphere.center)),Kt.applyMatrix4(S.matrixWorld).applyMatrix4(kt)),Array.isArray(De)){let Ze=we.groups;for(let dt=0,bt=Ze.length;dt<bt;dt++){let Ve=Ze[dt],Mt=De[Ve.materialIndex];Mt&&Mt.visible&&C.push(S,we,Mt,$,Kt.z,Ve,B)}}else De.visible&&C.push(S,we,De,$,Kt.z,null,B)}}}let Re=S.children;for(let He=0,we=Re.length;He<we;He++)$i(Re[He],B,$,X)}function Mo(S,B,$,X){let{opaque:W,transmissive:Re,transparent:He}=S;R.setupLightsView($),qt===!0&&ie.setGlobalState(N.clippingPlanes,$),X&&Ue.viewport(ue.copy(X)),W.length>0&&ji(W,B,$),Re.length>0&&ji(Re,B,$),He.length>0&&ji(He,B,$),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Xt(S,B,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[X.id]===void 0){let Ve=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[X.id]=new li(1,1,{generateMipmaps:!0,type:Ve?Di:Qn,minFilter:cs,samples:Math.max(4,$t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}let Re=R.state.transmissionRenderTarget[X.id],He=X.viewport||ue;Re.setSize(He.z*N.transmissionResolutionScale,He.w*N.transmissionResolutionScale);let we=N.getRenderTarget(),De=N.getActiveCubeFace(),Ze=N.getActiveMipmapLevel();N.setRenderTarget(Re),N.getClearColor(q),pe=N.getClearAlpha(),pe<1&&N.setClearColor(16777215,.5),N.clear(),En&&U.render($);let dt=N.toneMapping;N.toneMapping=Xi;let bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),R.setupLightsView(X),qt===!0&&ie.setGlobalState(N.clippingPlanes,X),ji(S,$,X),ht.updateMultisampleRenderTarget(Re),ht.updateRenderTargetMipmap(Re),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Mt=0,jt=B.length;Mt<jt;Mt++){let Dt=B[Mt],{object:Yt,geometry:Mn,material:qe,group:Sn}=Dt;if(qe.side===wn&&Yt.layers.test(X.layers)){let Tt=qe.side;qe.side=Jn,qe.needsUpdate=!0,xi(Yt,$,X,Mn,qe,Sn),qe.side=Tt,qe.needsUpdate=!0,Ve=!0}}Ve===!0&&(ht.updateMultisampleRenderTarget(Re),ht.updateRenderTargetMipmap(Re))}N.setRenderTarget(we,De,Ze),N.setClearColor(q,pe),bt!==void 0&&(X.viewport=bt),N.toneMapping=dt}function ji(S,B,$){let X=B.isScene===!0?B.overrideMaterial:null;for(let W=0,Re=S.length;W<Re;W++){let He=S[W],{object:we,geometry:De,group:Ze}=He,dt=He.material;dt.allowOverride===!0&&X!==null&&(dt=X),we.layers.test($.layers)&&xi(we,B,$,De,dt,Ze)}}function xi(S,B,$,X,W,Re){k!==null&&W.isNodeMaterial&&k.setObject(S,W),S.onBeforeRender(N,B,$,X,W,Re),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(N,B,$,X,S,Re),W.transparent===!0&&W.side===wn&&W.forceSinglePass===!1?(W.side=Jn,W.needsUpdate=!0,N.renderBufferDirect($,B,X,W,S,Re),W.side=Ds,W.needsUpdate=!0,N.renderBufferDirect($,B,X,W,S,Re),W.side=wn):N.renderBufferDirect($,B,X,W,S,Re),S.onAfterRender(N,B,$,X,W,Re)}function ps(S){let B=0;for(let $ of S)$.texture!==null&&B++;return B}function Je(S,B,$){B.isScene!==!0&&(B=Ft);let X=ce.get(S),W=R.state.lights,Re=R.state.shadowsArray,He=W.state.version,we=ae.getParameters(S,W.state,Re,B,$,R.state.lightProbeGridArray),De=ae.getProgramCacheKey(we),Ze=X.programs;X.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let dt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;X.envMap=I.get(S.envMap||X.environment,dt),X.envMapRotation=X.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ze===void 0&&(S.addEventListener("dispose",Wt),Ze=new Map,X.programs=Ze,X.programVariants=new Map);let bt=Ze.get(De);if(bt!==void 0){if(X.currentProgram===bt&&X.lightsStateVersion===He)return bo(S,we),bt}else we.uniforms=ae.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,$,we),S.onBeforeCompile(we,N),bt=ae.acquireProgram(we,De),Ze.set(De,bt),X.uniforms=we.uniforms;let Ve=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ve.clippingPlanes=ie.uniform),bo(S,we),X.needsLights=Ga(S),X.lightsStateVersion=He,X.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.sunLights.value=W.state.sun,Ve.sunLightShadows.value=W.state.sunShadow,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.sunShadowMatrix.value=W.state.sunShadowMatrix,Ve.sunShadowCascade.value=W.state.sunShadowCascade,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),X.numLightProbeGrids=ps(R.state.lightProbeGridArray),X.currentProgram=bt,X.uniformsList=null,bt}function kh(S,B,$,X,W){let Re=ce.get(S),He=Re.currentProgram.id+","+X+","+W,we=Re.programVariants.get(He);return we===void 0?(we=Je(S,B,$),Re.programVariants.set(He,we)):(Re.currentProgram=we,Re.uniformsList=null,Re.outputColorSpace=X,Re.toneMapping=W),we}function So(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=po.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function bo(S,B){let $=ce.get(S);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function ka(S,B,$,X,W){B.isScene!==!0&&(B=Ft),ht.resetTextureUnits();let Re=B.fog,He=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,we=j===null?N.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ut.workingColorSpace,De=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ze=I.get(X.envMap||He,De),dt=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,bt=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ve=!!$.morphAttributes.position,Mt=!!$.morphAttributes.normal,jt=!!$.morphAttributes.color,Dt=Xi;X.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Dt=N.toneMapping);let Yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mn=Yt!==void 0?Yt.length:0,qe=ce.get(X),Sn=R.state.lights;if(qt===!0&&(pn===!0||S!==re)){let nn=S===re&&X.id===J;ie.setState(X,S,nn)}let Tt=!1,vi=!1;X.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==Sn.state.version||W.isBatchedMesh&&qe.batching===!1||!W.isBatchedMesh&&qe.batching===!0||W.isBatchedMesh&&qe.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&qe.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||W.isInstancedMesh&&qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&qe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&qe.instancingMorph===!1&&W.morphTexture!==null||qe.envMap!==Ze||X.fog===!0&&qe.fog!==Re||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ie.numPlanes||qe.numIntersection!==ie.numIntersection)||qe.vertexAlphas!==dt||qe.vertexTangents!==bt||qe.morphTargets!==Ve||qe.morphNormals!==Mt||qe.morphColors!==jt||qe.morphTargetsCount!==Mn||qe.numLightProbeGrids!==ps(R.state.lightProbeGridArray)?Tt=!0:(qe.outputColorSpace!==we||qe.toneMapping!==Dt)&&(vi=!0):(Tt=!0,qe.__version=X.version);let xn=qe.currentProgram;(Tt===!0||vi===!0)&&(xn=vi===!0?kh(X,B,W,we,Dt):Je(X,B,W),k&&X.isNodeMaterial&&k.onUpdateProgram(X,xn,qe));let ur=!1,yi=!1,Bi=!1,We=xn.getUniforms(),_n=qe.uniforms;if(Ue.useProgram(xn.program)&&(ur=!0,yi=!0,Bi=!0),X.id!==J&&(J=X.id,yi=!0),ur||re!==S){Ue.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),We.setValue(V,"projectionMatrix",S.projectionMatrix),We.setValue(V,"viewMatrix",S.matrixWorldInverse);let bn=We.map.cameraPosition;bn!==void 0&&bn.setValue(V,Dn.setFromMatrixPosition(S.matrixWorld)),$t.logarithmicDepthBuffer&&We.setValue(V,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&We.setValue(V,"isOrthographic",S.isOrthographicCamera===!0),re!==S&&(re=S,yi=!0,Bi=!0)}if(qe.needsLights&&(Sn.state.sunShadowMap.length>0&&We.setValue(V,"sunShadowMap",Sn.state.sunShadowMap,ht),Sn.state.directionalShadowMap.length>0&&We.setValue(V,"directionalShadowMap",Sn.state.directionalShadowMap,ht),Sn.state.spotShadowMap.length>0&&We.setValue(V,"spotShadowMap",Sn.state.spotShadowMap,ht),Sn.state.pointShadowMap.length>0&&We.setValue(V,"pointShadowMap",Sn.state.pointShadowMap,ht)),W.isSkinnedMesh){We.setOptional(V,W,"bindMatrix"),We.setOptional(V,W,"bindMatrixInverse");let nn=W.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),We.setValue(V,"boneTexture",nn.boneTexture,ht))}W.isBatchedMesh&&(We.setOptional(V,W,"batchingTexture"),We.setValue(V,"batchingTexture",W._matricesTexture,ht),We.setOptional(V,W,"batchingIdTexture"),We.setValue(V,"batchingIdTexture",W._indirectTexture,ht),We.setOptional(V,W,"batchingColorTexture"),W._colorsTexture!==null&&We.setValue(V,"batchingColorTexture",W._colorsTexture,ht));let jn=$.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&ne.update(W,$,xn),(yi||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,We.setValue(V,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(_n.envMapIntensity.value=B.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=wS()),yi){if(We.setValue(V,"toneMappingExposure",N.toneMappingExposure),qe.needsLights&&Va(_n,Bi),Re&&X.fog===!0&&Ae.refreshFogUniforms(_n,Re),Ae.refreshMaterialUniforms(_n,X,de,Ie,R.state.transmissionRenderTarget[S.id]),qe.needsLights&&qe.numLightProbeGrids>0){let nn=w,bn=0;for(let ni of R.state.lightProbeGridArray)ni.texture!==null&&(nn.textures[bn]=ni.texture,nn.min[bn]=ni.boundingBox.min,nn.max[bn]=ni.boundingBox.max,nn.resolution[bn]=ni.resolution,bn++);for(let ni in nn)nn[ni].length=bn;_n.probesSH.value=nn.textures,_n.probesMin.value=nn.min,_n.probesMax.value=nn.max,_n.probesResolution.value=nn.resolution}po.upload(V,So(qe),_n,ht)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(po.upload(V,So(qe),_n,ht),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&We.setValue(V,"center",W.center),We.setValue(V,"modelViewMatrix",W.modelViewMatrix),We.setValue(V,"normalMatrix",W.normalMatrix),We.setValue(V,"modelMatrix",W.matrixWorld),X.uniformsGroups!==void 0){let nn=X.uniformsGroups;for(let bn=0,ni=nn.length;bn<ni;bn++){let Ha=nn[bn];je.update(Ha,xn),je.bind(Ha,xn)}}return xn}function Va(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.sunLights.needsUpdate=B,S.sunLightShadows.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Ga(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(S,B,$){let X=ce.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ce.get(S.texture).__webglTexture=B,ce.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){let $=ce.get(S);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,$=0){j=S,Q=B,G=$;let X=null,W=!1,Re=!1;if(S){let we=ce.get(S);if(we.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(V.FRAMEBUFFER,we.__webglFramebuffer),ue.copy(S.viewport),ke.copy(S.scissor),lt=S.scissorTest,Ue.viewport(ue),Ue.scissor(ke),Ue.setScissorTest(lt),J=-1;return}else if(we.__webglFramebuffer===void 0)ht.setupRenderTarget(S);else if(we.__hasExternalTextures)ht.rebindTextures(S,ce.get(S.texture).__webglTexture,ce.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let dt=S.depthTexture;if(we.__boundDepthTexture!==dt){if(dt!==null&&ce.has(dt)&&(S.width!==dt.image.width||S.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(S)}}let De=S.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);let Ze=ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ze[B])?X=Ze[B][$]:X=Ze[B],W=!0):S.samples>0&&ht.useMultisampledRTT(S)===!1?X=ce.get(S).__webglMultisampledFramebuffer:Array.isArray(Ze)?X=Ze[$]:X=Ze,ue.copy(S.viewport),ke.copy(S.scissor),lt=S.scissorTest}else ue.copy(Ge).multiplyScalar(de).floor(),ke.copy(Be).multiplyScalar(de).floor(),lt=ct;if($!==0&&(X=K),Ue.bindFramebuffer(V.FRAMEBUFFER,X)&&Ue.drawBuffers(S,X),Ue.viewport(ue),Ue.scissor(ke),Ue.setScissorTest(lt),W){let we=ce.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,$)}else if(Re){let we=B;for(let De=0;De<S.textures.length;De++){let Ze=ce.get(S.textures[De]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+De,Ze.__webglTexture,$,we)}}else if(S!==null&&$!==0){let we=ce.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,we.__webglTexture,$)}J=-1};function wo(S){let B=ce.get(S);return(B.__readFormat!==S.format||B.__readType!==S.type)&&(B.__readFormat=S.format,B.__readType=S.type,B.__formatReadable=$t.textureFormatReadable(S.format),B.__typeReadable=$t.textureTypeReadable(S.type)),B}this.readRenderTargetPixels=function(S,B,$,X,W,Re,He,we=0){if(!(S&&S.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&He!==void 0&&(De=De[He],Array.isArray(De)&&(De=De[0])),De){Ue.bindFramebuffer(V.FRAMEBUFFER,De);try{let Ze=S.textures[we],dt=Ze.format,bt=Ze.type;S.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+we);let Ve=wo(Ze);if(Ve.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-X&&$>=0&&$<=S.height-W&&V.readPixels(B,$,X,W,Me.convert(dt),Me.convert(bt),Re)}finally{let Ze=j!==null?ce.get(j).__webglFramebuffer:null;Ue.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(S,B,$,X,W,Re,He,we=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&He!==void 0&&(De=De[He],Array.isArray(De)&&(De=De[0])),De)if(B>=0&&B<=S.width-X&&$>=0&&$<=S.height-W){Ue.bindFramebuffer(V.FRAMEBUFFER,De);let Ze=S.textures[we],dt=Ze.format,bt=Ze.type;S.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+we);let Ve=wo(Ze);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Mt),V.bufferData(V.PIXEL_PACK_BUFFER,Re.byteLength,V.STREAM_READ),V.readPixels(B,$,X,W,Me.convert(dt),Me.convert(bt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let jt=j!==null?ce.get(j).__webglFramebuffer:null;Ue.bindFramebuffer(V.FRAMEBUFFER,jt);let Dt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Im(V,Dt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Mt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Re),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Mt),V.deleteSync(Dt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,$=0){let X=Math.pow(2,-$),W=Math.floor(S.image.width*X),Re=Math.floor(S.image.height*X),He=B!==null?B.x:0,we=B!==null?B.y:0;ht.setTexture2D(S,0),V.copyTexSubImage2D(V.TEXTURE_2D,$,0,0,He,we,W,Re),Ue.unbindTexture()},this.copyTextureToTexture=function(S,B,$=null,X=null,W=0,Re=0){let He,we,De,Ze,dt,bt,Ve,Mt,jt,Dt=S.isCompressedTexture?S.mipmaps[Re]:S.image;if($!==null)He=$.max.x-$.min.x,we=$.max.y-$.min.y,De=$.isBox3?$.max.z-$.min.z:1,Ze=$.min.x,dt=$.min.y,bt=$.isBox3?$.min.z:0;else{let We=Math.pow(2,-W);He=Math.floor(Dt.width*We),we=Math.floor(Dt.height*We),S.isDataArrayTexture?De=Dt.depth:S.isData3DTexture?De=Math.floor(Dt.depth*We):De=1,Ze=0,dt=0,bt=0}X!==null?(Ve=X.x,Mt=X.y,jt=X.z):(Ve=0,Mt=0,jt=0);let Yt=Me.convert(B.format),Mn=Me.convert(B.type),qe;B.isData3DTexture?(ht.setTexture3D(B,0),qe=V.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ht.setTexture2DArray(B,0),qe=V.TEXTURE_2D_ARRAY):(ht.setTexture2D(B,0),qe=V.TEXTURE_2D),Ue.activeTexture(V.TEXTURE0),Ue.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,B.flipY),Ue.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Ue.pixelStorei(V.UNPACK_ALIGNMENT,B.unpackAlignment);let Sn=Ue.getParameter(V.UNPACK_ROW_LENGTH),Tt=Ue.getParameter(V.UNPACK_IMAGE_HEIGHT),vi=Ue.getParameter(V.UNPACK_SKIP_PIXELS),xn=Ue.getParameter(V.UNPACK_SKIP_ROWS),ur=Ue.getParameter(V.UNPACK_SKIP_IMAGES);Ue.pixelStorei(V.UNPACK_ROW_LENGTH,Dt.width),Ue.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Dt.height),Ue.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),Ue.pixelStorei(V.UNPACK_SKIP_ROWS,dt),Ue.pixelStorei(V.UNPACK_SKIP_IMAGES,bt);let yi=S.isDataArrayTexture||S.isData3DTexture,Bi=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){let We=ce.get(S),_n=ce.get(B),jn=ce.get(We.__renderTarget),nn=ce.get(_n.__renderTarget);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,jn.__webglFramebuffer),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let bn=0;bn<De;bn++)yi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ce.get(S).__webglTexture,W,bt+bn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ce.get(B).__webglTexture,Re,jt+bn)),V.blitFramebuffer(Ze,dt,Ze+He,dt+we,Ve,Mt,Ve+He,Mt+we,V.DEPTH_BUFFER_BIT,V.NEAREST);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||ce.has(S)){let We=ce.get(S),_n=ce.get(B);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,F),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,Z);for(let jn=0;jn<De;jn++)yi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.__webglTexture,W,bt+jn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,We.__webglTexture,W),Bi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,_n.__webglTexture,Re,jt+jn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,_n.__webglTexture,Re),W!==0?V.blitFramebuffer(Ze,dt,Ze+He,dt+we,Ve,Mt,Ve+He,Mt+we,V.COLOR_BUFFER_BIT,V.NEAREST):Bi?V.copyTexSubImage3D(qe,Re,Ve,Mt,jt+jn,Ze,dt,He,we):V.copyTexSubImage2D(qe,Re,Ve,Mt,Ze,dt,He,we);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Bi?S.isDataTexture||S.isData3DTexture?V.texSubImage3D(qe,Re,Ve,Mt,jt,He,we,De,Yt,Mn,Dt.data):B.isCompressedArrayTexture?V.compressedTexSubImage3D(qe,Re,Ve,Mt,jt,He,we,De,Yt,Dt.data):V.texSubImage3D(qe,Re,Ve,Mt,jt,He,we,De,Yt,Mn,Dt):S.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Re,Ve,Mt,He,we,Yt,Mn,Dt.data):S.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Re,Ve,Mt,Dt.width,Dt.height,Yt,Dt.data):V.texSubImage2D(V.TEXTURE_2D,Re,Ve,Mt,He,we,Yt,Mn,Dt);Ue.pixelStorei(V.UNPACK_ROW_LENGTH,Sn),Ue.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tt),Ue.pixelStorei(V.UNPACK_SKIP_PIXELS,vi),Ue.pixelStorei(V.UNPACK_SKIP_ROWS,xn),Ue.pixelStorei(V.UNPACK_SKIP_IMAGES,ur),Re===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&V.generateMipmap(qe),Ue.unbindTexture()},this.initRenderTarget=function(S){ce.get(S).__webglFramebuffer===void 0&&ht.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ht.setTextureCube(S,0):S.isData3DTexture?ht.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ht.setTexture2DArray(S,0):ht.setTexture2D(S,0),Ue.unbindTexture()},this.resetState=function(){Q=0,G=0,j=null,Ue.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}};function g0({rInner:i,omega:e=1,reflections:t=10}){let n=Math.atan(Math.sqrt(4/(e*e)-1)),s=Math.asin(e/2),r=(f,u)=>f[0]*u[0]+f[1]*u[1];function o(f,u,h){let g=r(f,u),v=r(f,f)-h*h,m=g*g-v;if(m<0)return null;let p=[-g-Math.sqrt(m),-g+Math.sqrt(m)].filter(M=>M>1e-6);return p.length?Math.min(...p):null}function a(f,u){let h=Math.hypot(u[0],u[1]);u=[u[0]/h,u[1]/h];let g=[f];for(let v=0;v<t;v++){let m=o(f,u,1),p=o(f,u,i),M=p!==null&&p<m,P=M?p:m;f=[f[0]+P*u[0],f[1]+P*u[1]],g.push(f);let w=Math.hypot(f[0],f[1]),C=M?[f[0]/w,f[1]/w]:[-f[0]/w,-f[1]/w],R=[-C[1],C[0]],x=[[-u[0],u[1]],[u[0],-u[1]]].filter(A=>r(A,C)>1e-9);if(!x.length)break;u=x.find(A=>Math.sign(r(A,R))===Math.sign(r(u,R)))??x[0]}return g}let c=[],l=Math.cos(n),d=Math.sin(n);for(let f of[1,-1])for(let u of[1,-1]){let h=[f*i*Math.cos(s),u*i*Math.sin(s)],g=[-f*u*Math.sin(s),Math.cos(s)];c.push(a(h,g),a(h,[-g[0],-g[1]]));let v=[f*Math.cos(s),u*Math.sin(s)];for(let m of[[l,d],[l,-d],[-l,d],[-l,-d]]){let p=-r(m,v),M=Math.abs(m[0]*-v[1]+m[1]*v[0]);p>1e-6&&M<.999&&c.push(a(v,m))}}return c}function _0({rInner:i=.1,rOuter:e=1,omega:t,N:n,starts:s,length:r=9,step:o=.004}){let a=(h,g,v)=>{let m=Math.hypot(g,v)||1e-9,p=n(m),M=Math.cos(h),P=Math.sin(h),w=M*(v/m)-P*(g/m);return 4*P*P+p*p*w*w-t*t},c=(h,g,v=180)=>{let m=[],p=0,M=a(0,h,g);for(let P=1;P<=v;P++){let w=Math.PI*P/v,C=a(w,h,g);if(M===0||M*C<0){let R=p,x=w,A=M;for(let N=0;N<30;N++){let z=(R+x)/2,k=a(z,h,g);A*k<=0?x=z:(R=z,A=k)}let O=(R+x)/2;m.push([-Math.sin(O),Math.cos(O)],[Math.sin(O),-Math.cos(O)])}p=w,M=C}return m},l=(h,g)=>h[0]*g[0]+h[1]*g[1],d=h=>{let g=Math.hypot(h[0],h[1]);return g<e&&g>i};function f(h,g){let v=[h.slice()];v.bends=new Set;let m=0,p=0;for(;m<r;){let M=[h[0]+o*g[0],h[1]+o*g[1]],P=d(M)?c(M[0],M[1]):[];if(P.length&&d(M)){let O=P[0];for(let N of P)l(N,g)>l(O,g)&&(O=N);if(l(O,g)>.6){h=M,g=O,m+=o,p+=o,p>.02&&(v.push(h.slice()),p=0);continue}}let w=c(h[0],h[1]),C=Math.hypot(h[0],h[1]),R=C>(i+e)/2?[-h[0]/C,-h[1]/C]:[h[0]/C,h[1]/C],x=[-R[1],R[0]],A=w.filter(O=>l(O,g)<.98).filter(O=>{let N=[h[0]+3*o*O[0],h[1]+3*o*O[1]];return d(N)&&c(N[0],N[1]).length});if(!A.length)break;A.sort((O,N)=>(Math.sign(l(N,x))===Math.sign(l(g,x)))-(Math.sign(l(O,x))===Math.sign(l(g,x)))||l(N,g)-l(O,g)),g=A[0],v.push(h.slice()),v.bends.add(v.length-1),p=0}return v.push(h.slice()),v}let u=[];for(let[h,g]of s){let v=Math.hypot(h,g),m=[h/v*e*.999,g/v*e*.999];for(let p of c(m[0],m[1]))l(p,m)<-.05&&u.push(f(m,p))}return u}var x0=new T(0,1,0),AS=55*Math.PI/180,S0=6;function tf(i,e,t,n,s=160){let r=[],o=null,a=.02;for(let c=0;c<=s;c++){let l=a+(Math.PI-2*a)*c/s,d=i*Math.sin(l)**2,f=d*Math.sin(l),u=-d*Math.cos(l)+e,h=Math.hypot(f,u);h>=t&&h<=n?(o||r.push(o=[]),o.push([f,u])):o=null}return r.filter(c=>c.length>2)}function v0(i,e,t=1,n=!1){let s=[],r=[],o=[],a=[],c=[];for(let d of i){let f=0,u=0;for(let h=0;h<d.length-1;h++){d.bends?d.bends.has(h)&&u++:u=h;let[g,v]=d[h],[m,p]=d[h+1],M=Math.hypot(m-g,p-v);if(M===0)continue;let P=-(p-v)/M*e,w=(m-g)/M*e,C=s.length/3;for(let[R,x,A,O]of[[g+P,v+w,f,1],[g-P,v-w,f,-1],[m+P,p+w,f+M,1],[m-P,p-w,f+M,-1]])s.push(R*t,x*t,0),r.push(A),o.push(O),a.push(n?u:0);c.push(C,C+1,C+2,C+1,C+3,C+2),f+=M}}let l=new It;return l.setAttribute("position",new it(s,3)),l.setAttribute("aAlong",new it(r,1)),l.setAttribute("aSide",new it(o,1)),l.setAttribute("aGen",new it(a,1)),l.setIndex(c),l}var TS={vertexShader:`
    varying vec3 vPos;
    void main() {
      // in view space: world coordinates are too large for single precision far from the origin
      vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * vec4(vPos, 1.0);
    }`,fragmentShader:`
    #define MAX_LAYERS ${S0}
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
    }`},y0={vertexShader:`
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
    }`},ES={vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform float uTime, uOpacity;
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      float pulse = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(22.0 * vUv.x - 3.0 * uTime), 6.0);
      gl_FragColor = vec4(mix(uColor, vec3(1.0), pulse * 0.5) * pulse * uOpacity * 0.85, 1.0);
    }`},CS=`
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
  }`;function M0([i,e,t],n){let s=(d,f)=>[Math.cos(d)*Math.cos(f),Math.sin(d),-Math.cos(d)*Math.sin(f)],r=(d,f,u)=>{let h=s(d*Math.PI/180,f*Math.PI/180);return Math.exp(-((i-h[0])**2+(e-h[1])**2+(t-h[2])**2)/u)},o=Math.asin(Math.max(-1,Math.min(1,e))),a=Math.atan2(-t,i),c=-40+10*Math.sin(.11*n),l=.9*(r(35,c,.5)+r(-35,c,.5));l-=.6*(r(30,120,.4)+r(-30,120,.4));for(let d=0;d<6;d++){let f=(d%2<1?1:-1)*(20+8*Math.sin(d*1.7));l+=(d%3<1.5?.35:-.35)*r(f,d*60-8*n,.06)}return l+=.18*Math.exp(-((o/.3)**2))*Math.cos(6*a+.9*n),l}function RS(i,e,t){let s=r=>[Math.cos(r)*Math.cos(e),Math.sin(r),-Math.cos(r)*Math.sin(e)];return-(M0(s(i+.01),t)-M0(s(i-.01),t))/(2*.01)}var PS={vertexShader:`
    varying vec3 vDir, vNormal;
    void main() {
      vDir = normalize(position);
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform float uTime, uOpacity;
    varying vec3 vDir, vNormal;
    ${CS}

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
    }`},IS={vertexShader:`
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
    }`},Ih={transparent:!0,blending:Vn,depthWrite:!1};function ar(i){let{loader:e,textures:t,radius:n}=i,s=i.center.clone(),r=new Gt,o=new ai(new T(0,0,-1),1e6),a=new Gt;r.add(a);let c=(q,pe=!0)=>{let Se=e.load(t+q);return pe&&(Se.colorSpace=cn),Se.anisotropy=4,Se},l=i.maps,d=new ot(new Un(n,192,96),new Bt({map:c(l.map),normalMap:l.normal?c(l.normal,!1):null,bumpMap:l.bump?c(l.bump,!1):null,bumpScale:l.bumpScale??1,specularMap:l.specular?c(l.specular,!1):null,specular:new Ye(l.specular?3815994:1118481),shininess:l.specular?22:4,emissiveMap:l.night?c(l.night):null,emissive:new Ye(l.night?16767392:0),clippingPlanes:[o],transparent:!0}));a.add(d);let f={uSunView:{value:new T(1,0,0)}};l.night&&(d.material.onBeforeCompile=q=>{Object.assign(q.uniforms,f),q.fragmentShader=q.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSunView;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          totalEmissiveRadiance *= smoothstep(0.12, -0.18, dot(normal, uSunView));`)});let u=null;l.clouds&&(u=new ot(new Un(n*1.006,192,96),new Bt({color:16777215,alphaMap:c(l.clouds,!1),transparent:!0,depthWrite:!1,shininess:2,clippingPlanes:[o]})),d.add(u));let h=new Wi({color:16777215,transparent:!0,opacity:0,depthWrite:!1});a.add(new ot(new Zn(n*.012,n*.012,n*3.1,8),h));let g=i.wobble,v=(q,pe=new T)=>{if(!g)return pe.copy(i.axis?.lengthSq()>.5?i.axis:x0);let Se=g.obliquity*Math.PI/180,Ie=g.nutation*Math.PI/180,de=Se+Ie*Math.cos(g.nods*q),ge=q+Ie/Math.sin(Se)*Math.sin(g.nods*q);return pe.set(Math.sin(de)*Math.cos(ge),Math.cos(de),-Math.sin(de)*Math.sin(ge))},m,p;if(g){m=new Nn(new It().setFromPoints([new T(0,-1.6*n,0),new T(0,1.6*n,0)]),new yn({color:8952234,transparent:!0,opacity:0})),r.add(m);let q=[];for(let pe=0;pe<=900;pe++)q.push(v(pe/900*Math.PI*2).multiplyScalar(n*1.55));p=new Nn(new It().setFromPoints(q),new yn({color:12576511,transparent:!0,opacity:0})),r.add(p)}let M=new Gt;r.add(M);let P=i.layers,w=(q,pe)=>[...q,...Array(S0-q.length).fill(pe)],C={uCenter:{value:s.clone()},uRadius:{value:n},uTop:{value:w(P.map(q=>q.top),1)},uLow:{value:w(P.map(q=>new Ye(q.low)),new Ye)},uHigh:{value:w(P.map(q=>new Ye(q.high)),new Ye)},uCount:{value:P.length}};M.add(new ot(new da(n*1.5,128),new fn({...TS,uniforms:C})));let R=(Array.isArray(i.waves)?i.waves:i.waves?[i.waves]:[]).map(({inner:q,outer:pe,omega:Se,paths:Ie,color:de=[.75,.95,1],speed:ge=2.6,width:At=.011},Ge)=>{let Be=new fn({...y0,...Ih,uniforms:{uTime:{value:0},uOpacity:{value:0},uSpeed:{value:ge},uColor:{value:new Ye(...de)}}}),ct=new ot(v0(Ie??g0({rInner:q/pe,omega:Se}),At,pe,!0),Be);return ct.scale.setScalar(n),ct.position.z=n*(.004+5e-4*Ge),M.add(ct),Be}),x=i.field,A=new Ye(.45,.78,1),O=new fn({...y0,...Ih,uniforms:{uTime:{value:0},uOpacity:{value:0},uSpeed:{value:2.6},uColor:{value:A}}}),N=new fn({...ES,...Ih,uniforms:{uTime:{value:0},uOpacity:{value:0},uColor:{value:A}}}),z=new Gt;if(a.add(z),x){let q=x.coreTop,pe=[];for(let de of[...x.inner??[],...x.shells])for(let ge of tf(de,x.offset,q,1))pe.push(ge,ge.map(([At,Ge])=>[-At,Ge]));let Se=new ot(v0(pe,.006),O);Se.scale.setScalar(n),Se.position.z=n*.005,M.add(Se);let Ie=x.azimuths??10;for(let de of x.shells)for(let ge of tf(de,x.offset,1,1/0,180))for(let At=0;At<Ie;At++){let Ge=At/Ie*Math.PI*2+de,Be=ge.map(([ct,ut])=>new T(ct*Math.cos(Ge)*n,ut*n,ct*Math.sin(Ge)*n));z.add(new ot(new oo(new er(Be),90,n*.007,5,!1),N))}}let k,K,F=[];if(i.coreField){K=new fn({...PS,uniforms:{uTime:{value:0},uOpacity:{value:0}},transparent:!0}),k=new ot(new Un(n*i.coreField,128,64),K),k.renderOrder=-1,d.add(k);let q=n*i.coreField,pe=5;[1.25,1.6,2.1,2.8].forEach((Se,Ie)=>{let[de]=tf(Se,0,1,1/0,160);for(let ge=0;ge<pe;ge++){let At=(ge+.5*(Ie%2))/pe*Math.PI*2,Ge=de.map(([kt,Dn])=>new T(kt*Math.cos(At)*q,Dn*q,-kt*Math.sin(At)*q)),Be=new fn({...IS,...Ih,uniforms:{uTime:{value:0},uOpacity:{value:0},uColor:{value:new Ye(.6,.85,1)},uShiftS:{value:0},uShiftN:{value:0}}}),ct=new ot(new oo(new er(Ge),140,n*.0045,5,!1),Be),[ut,gt]=de[0],[qt,pn]=de[de.length-1];F.push({mesh:ct,mat:Be,phi:At,latS:Math.atan2(gt,ut),latN:Math.atan2(pn,qt),shiftS:0,shiftN:0}),k.add(ct)}})}let Z=.6,Q=0,G=new T,j=new T,J=new T,re=new Pt,ue=new yt;function ke(q){s.copy(q)}function lt({dt:q,time:pe,camera:Se,wobble:Ie=0,cut:de=0,waves:ge=0,cutTurn:At=AS,field:Ge=0,core:Be=0,animate:ct,spinAngle:ut,scale:gt=1,stretch:qt=1}){let pn=n*gt;ct&&(g&&(Z+=q*Math.PI*2/g.seconds*Ie),Q+=q*(i.spinRate??.35)),a.position.copy(s),C.uCenter.value.copy(s).applyMatrix4(Se.matrixWorldInverse),a.scale.setScalar(gt),M.scale.setScalar(gt),C.uRadius.value=pn,v(Z,G),ue.setFromUnitVectors(x0,G),a.quaternion.copy(ue),d.rotation.y=ut??Q,d.scale.set(qt,1,1),h.opacity=.9*Math.max(Ie,de*.6),g&&(m.position.copy(s),p.position.copy(s),p.material.opacity=.8*Ie,m.material.opacity=.5*Ie),j.copy(Se.position).sub(s),j.addScaledVector(G,-j.dot(G)).normalize(),j.applyAxisAngle(G,At);let kt=(1-de)*pn;o.normal.copy(j).negate(),o.constant=de>.001?j.dot(s)+kt:1e6,M.visible=de>.001,J.crossVectors(G,j).normalize(),re.makeBasis(J,G,j),M.quaternion.setFromRotationMatrix(re),M.position.copy(s).addScaledVector(j,kt);for(let Kt of[...R,O,N])Kt.uniforms.uTime.value=pe;R.forEach((Kt,Ft)=>Kt.uniforms.uOpacity.value=(Array.isArray(ge)?ge[Ft]??0:ge)*de);let Dn=x?.strength??1;if(O.uniforms.uOpacity.value=Ge*de*Dn,N.uniforms.uOpacity.value=Ge*Dn,z.visible=Ge>.001,i.sunDir&&f.uSunView.value.copy(i.sunDir).transformDirection(Se.matrixWorldInverse),u&&(ct&&(u.rotation.y+=q*.012),u.material.opacity=.95*(1-Be),u.visible=Be<.99),k){d.material.opacity=1-.88*Be,d.material.depthWrite=Be<.01,k.visible=Be>.001,K.uniforms.uOpacity.value=Math.min(1,Be*1.5);let Kt=pe*.6;K.uniforms.uTime.value=Kt;for(let Ft of F){if(Ft.mesh.visible=Be>.001,ct&&Be>.001){let En=(Cn,V)=>.5*RS(Cn,Ft.phi+V,Kt)/Math.max(Math.cos(Cn),.2);Ft.shiftS+=q*.6*(En(Ft.latS,Ft.shiftS)-.25*Ft.shiftS),Ft.shiftN+=q*.6*(En(Ft.latN,Ft.shiftN)-.25*Ft.shiftN)}Ft.mat.uniforms.uShiftS.value=Ft.shiftS,Ft.mat.uniforms.uShiftN.value=Ft.shiftN,Ft.mat.uniforms.uTime.value=pe,Ft.mat.uniforms.uOpacity.value=.7*Be}}}return{root:r,surface:d,update:lt,setCenter:ke,center:s,clip:o,layerColors:C}}function LS(){let i=document.createElement("canvas");i.width=256,i.height=184;let e=i.getContext("2d");e.fillStyle="#c9ccd1",e.fillRect(0,0,i.width,i.height);let t=14,n=10,s=6,r=2,o=(i.width-2*s-(t-1)*r)/t,a=(i.height-2*s-(n-1)*r)/n;for(let l=0;l<t;l++)for(let d=0;d<n;d++){let f=22+Math.random()*10;e.fillStyle=`hsl(226 55% ${f}%)`,e.fillRect(s+l*(o+r),s+d*(a+r),o,a)}let c=new ci(i);return c.colorSpace=cn,c.anisotropy=4,c}function DS(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#b8862b",e.fillRect(0,0,256,256);for(let n=0;n<900;n++){let s=Math.random()*256,r=Math.random()*256,o=4+Math.random()*18;e.fillStyle=`hsla(${38+Math.random()*8} ${60+Math.random()*25}% ${40+Math.random()*30}% / 0.35)`,e.beginPath(),e.moveTo(s,r),e.lineTo(s+o,r+o*(Math.random()-.5)),e.lineTo(s+o*(Math.random()-.5),r+o),e.fill()}let t=new ci(i);return t.colorSpace=cn,t}function go(i,e,t,n){let s=new T().subVectors(e,i),r=new ot(new Zn(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.copy(new yt().setFromUnitVectors(new T(0,1,0),s.normalize())),r}function b0(){let i=new Gt,e=(w,C,R)=>new T(w,C,R),t=new Bt({map:DS(),shininess:60,specular:new Ye(8939042)}),n=new Bt({color:15263972,shininess:20}),s=new Bt({color:10133672,shininess:50,specular:new Ye(7829367)}),r=new Bt({color:2763310,shininess:10}),o=new Bt({map:LS(),shininess:70,specular:new Ye(4478327)}),a=new Bt({color:7040885,shininess:10}),c=2.86,l=4.35,d=4.09;i.add(new ot(new Yn(c,l,d),t));for(let w of[-1,1]){let C=new Gt;i.add(C);let R=c/2;C.add(go(e(w*R,0,0),e(w*(R+1.3),0,0),.06,s));let x=3.5,A=2.5,O=.05,N=(k,K)=>{let F=new Gt,Z=new ot(new Yn(x,A,O),[a,a,a,a,o,a]);F.add(Z),F.position.set(w*k,K,0),C.add(F)},z=R+1.3+x/2;for(let k=0;k<3;k++)N(z+k*(x+.08),0);N(z+x+.08,A+.08),N(z+x+.08,-(A+.08)),C.rotation.x=-.35}let f=1.25,u=.38,h=[];for(let w=0;w<=16;w++){let C=w/16*f;h.push(new Oe(C,u*C*C/(f*f)))}let g=new ot(new tr(h,48),new Bt({color:15921902,shininess:30,side:wn}));g.rotation.x=Math.PI/2,g.position.set(0,.4,d/2+.25),i.add(g);let v=e(0,.4,d/2+.25+f*f/(4*u)*.9);for(let w=0;w<3;w++){let C=w/3*Math.PI*2;i.add(go(e(Math.cos(C)*f*.95,.4+Math.sin(C)*f*.95,d/2+.25+u),v,.02,n))}let m=new ot(new Qs(.12,.3,12),n);m.rotation.x=-Math.PI/2,m.position.copy(v),i.add(m),i.add(go(e(0,l/2+.25,-8),e(0,l/2+.25,8),.035,n)),i.add(go(e(0,l/2,0),e(0,l/2+.25,0),.08,s));let p=e(-c/2,-l/2+.5,-d/2),M=p.clone().add(e(-.35,-.25,-1).normalize().multiplyScalar(10.6));i.add(go(p,M,.04,s));for(let w of[.55,.8,1]){let C=new ot(new Yn(.18,.18,.18),n);C.position.lerpVectors(p,M,w),i.add(C)}for(let[w,C,R]of[[1,1,1],[-1,1,-1],[1,-1,-1],[-1,-1,1]]){let x=e(w*c/2,C*l/2,R*d/2),A=x.clone().add(e(w*.7,C*.5,R*.5).normalize().multiplyScalar(3));i.add(go(x,A,.015,s));let O=new ot(new Un(.05,10,8),r);O.position.copy(A),i.add(O)}let P=new ot(new Zn(.18,.42,.8,24,1,!0),new Bt({color:5987683,shininess:40,side:wn}));return P.position.y=-l/2-.4,i.add(P),i}var _o=13.6;function sf(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new ci(n);return s.colorSpace=cn,s.anisotropy=8,s}var w0=()=>sf(256,200,(i,e,t)=>{i.fillStyle="#b9bec6",i.fillRect(0,0,e,t);let n=6,s=16,r=(t-2*n)/s;for(let o=0;o<s;o++){let a=n+o*r;if(o%2===0)for(let c=n;c<e-n;c+=14)i.fillStyle=`hsl(222 50% ${18+Math.random()*8}%)`,i.fillRect(c,a+1,12,r-2);else i.fillStyle=`hsl(210 12% ${74+Math.random()*10}%)`,i.fillRect(n,a+1,e-2*n,r-2)}}),nf=(i,e)=>sf(256,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s);for(let r=0;r<700;r++){t.fillStyle=e(Math.random());let o=Math.random()*n,a=Math.random()*s,c=3+Math.random()*14;t.beginPath(),t.moveTo(o,a),t.lineTo(o+c,a+c*(Math.random()-.5)),t.lineTo(o+c*(Math.random()-.5),a+c),t.fill()}t.strokeStyle="rgba(0,0,0,0.12)";for(let r=1;r<4;r++)t.beginPath(),t.moveTo(r*n/4,0),t.lineTo(r*n/4,s),t.stroke()}),NS=()=>sf(256,256,(i,e,t)=>{i.fillStyle="#d9dde2",i.fillRect(0,0,e,t),i.strokeStyle="#aab1ba";for(let n=0;n<e;n+=16)i.beginPath(),i.moveTo(n,0),i.lineTo(n,t),i.stroke();i.fillStyle="#c3c9d0";for(let n=24;n<t;n+=48)i.fillRect(0,n,e,4)});function Lh(i,e,t,n){let s=new T().subVectors(e,i),r=new ot(new Zn(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.copy(new yt().setFromUnitVectors(new T(0,1,0),s.normalize())),r}function A0(){let i=(G,j,J)=>new T(G,j,J),e=new Bt({map:w0(),shininess:70,specular:new Ye(5596791)}),t=new Bt({color:5593439,shininess:8}),n=new Bt({map:nf("#8c8f95",G=>`hsla(${30+G*20} 20% ${45+G*35}% / 0.35)`),shininess:40,specular:new Ye(4473924)}),s=new Bt({map:nf("#d8d2c4",G=>`hsla(40 18% ${70+G*20}% / 0.35)`),shininess:12}),r=new Bt({map:nf("#eceae4",G=>`hsla(45 10% ${80+G*15}% / 0.3)`),shininess:10,side:wn}),o=new Bt({color:10133672,shininess:60,specular:new Ye(7829367)}),a=new Bt({color:2369067,shininess:20}),c=(G,j)=>new ot(new Yn(G,j,.05),[t,t,t,t,e,t]),l=new Gt,d=2.3,f=new ot(new Yn(3.9,d,3.6),n);f.position.y=d/2,l.add(f);let u=new ot(new Zn(1.1,1.3,.35,32,1,!0),new Bt({color:7304315,side:wn,shininess:30}));u.position.y=-.17,l.add(u);let h=[];for(let[G,j]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){let J=new ot(new Zn(.16,.2,.3,20),a);J.position.set(G,-.1,j),l.add(J),h.push(J.position)}let g=new Wi({color:7183615,transparent:!0,opacity:0,blending:Vn,depthWrite:!1}),v=new Gt;for(let G of h.slice(0,2)){let j=new ot(new Qs(.4,4,24,1,!0),g);j.rotation.x=Math.PI,j.position.set(G.x,-2.2,G.z),v.add(j)}l.add(v);for(let G of[-1,1]){let j=new Gt;j.add(Lh(i(G*1.95,d/2,0),i(G*3.2,d/2,0),.06,o));for(let J=0;J<5;J++){let re=c(2.25,1.85);re.position.set(G*(3.2+1.15+J*2.3),d/2,0),j.add(re)}j.rotation.x=-.55,l.add(j)}let m=new Gt,p=d,M=1.7,P=new ot(new Yn(2.4,M,2.2),s);P.position.y=p+M/2,m.add(P);let w=new ot(new Yn(3.7,2.6,.06),new Bt({map:NS(),shininess:50}));w.position.set(0,p+1.2,-1.2),m.add(w);let C=new Gt;C.add(Lh(i(0,p+M/2,1.1),i(0,p+M/2,2),.05,o));for(let G=0;G<3;G++){let j=c(1.6,1.85);j.rotation.y=Math.PI/2,j.position.set(0,p+M/2,2+.95+G*1.9),C.add(j)}C.rotation.z=.35,m.add(C);let R=.5,x=.14,A=[];for(let G=0;G<=12;G++){let j=G/12*R;A.push(new Oe(j,x*j*j/(R*R)))}let O=new ot(new tr(A,36),new Bt({color:16052972,side:wn,shininess:30}));O.position.set(1.9,p+M+.25,.5),O.rotation.z=-.9,m.add(O),m.add(Lh(i(1.2,p+M-.2,.5),O.position,.04,o));let N=new Gt,z=p+M,k=2.3,K=new ot(new Zn(1.25,1.6,k,8,1,!0),r);K.position.y=z+k/2,N.add(K);for(let G=0;G<8;G++){let j=G/8*Math.PI*2+Math.PI/8;N.add(Lh(i(Math.cos(j)*1.6,z,Math.sin(j)*1.6),i(Math.cos(j)*1.25,z+k,Math.sin(j)*1.25),.03,o))}let F=new ot(new Zn(.97,.97,.9,8),[new Bt({map:w0(),shininess:60}),new Bt({color:3816772,shininess:30}),a]);F.position.y=z+k-.55,N.add(F);let Z=new Gt;Z.add(m,N);let Q=new Gt;Q.add(l,Z);for(let G of[l,Z])G.position.y-=3.1;return{group:Q,mtm:l,update({separation:G=0,thrust:j=1,time:J=0}){g.opacity=.07*j*(G>0?0:1)*(.9+.1*Math.sin(J*17)),v.visible=g.opacity>.005;let re=50*G;l.position.set(0,-3.1-re,0),l.rotation.set(.5*G,0,.2*G)}}}var xo=15;var Fn=(i,e,t)=>new T(i,e,t),Jt=Fn(0,1,0),Lt=2/6371,P0=1496e5*Lt,un=Lt/1e3,Fh=(i,e)=>i.clone().applyAxisAngle(Jt,e*Math.PI/180),sn={center:Fn(0,0,0),radius:2},Oh=Fn(-40,0,62).normalize(),Ba={center:new T,radius:1737.4*Lt},nt={center:Oh.clone().multiplyScalar(P0),radius:695700*Lt},Bh=Oh.clone().negate(),tn={center:nt.center.clone().addScaledVector(Fh(Bh,70),7785e5*Lt),radius:69911*Lt},gn={center:nt.center.clone().addScaledVector(Fh(Bh,110),14335e5*Lt),radius:58232*Lt},za=new Ri(.25,0,-26.7*Math.PI/180),T0=16,Ui=30,ui=30,ds=[{name:"io",orbit:421700*Lt,radius:1821.6*Lt,period:1.769},{name:"europa",orbit:671034*Lt,radius:1560.8*Lt,period:3.551},{name:"ganymede",orbit:1070412*Lt,radius:2634.1*Lt,period:7.155},{name:"callisto",orbit:1882709*Lt,radius:2410.3*Lt,period:16.689}],US=6,ei=(()=>{let i=Jt.clone().applyEuler(za),e=nt.center.clone().sub(gn.center).normalize(),t=e.addScaledVector(i,-e.dot(i)).normalize();return{center:gn.center.clone().addScaledVector(t,238042*Lt),radius:252.1*Lt}})(),ti={a:5791e4*Lt,e:.2056,secondsPerOrbit:9},Os=sn.center.clone().sub(nt.center).setY(0).normalize(),I0=new T().crossVectors(Jt,Os).normalize(),$n={radius:2439.7*Lt,enlarge:1200,home:nt.center.clone().addScaledVector(Os,ti.a*(1-ti.e))},FS=Math.atan2(-Os.z,Os.x);function E0(i,e=new T){let t=i;for(let r=0;r<8;r++)t-=(t-ti.e*Math.sin(t)-i)/(1-ti.e*Math.cos(t));let n=ti.a*(Math.cos(t)-ti.e),s=ti.a*Math.sqrt(1-ti.e**2)*Math.sin(t);return e.copy(nt.center).addScaledVector(Os,n).addScaledVector(I0,s)}var Dh=(i,e,t)=>$n.home.clone().addScaledVector(Os,-i).addScaledVector(I0,e).addScaledVector(Jt,t),C0=nt.center.clone().addScaledVector(Os,-ti.a*ti.e),zt={},lr=new T(0,1,0),Fa=()=>({}),hr=ei.radius/.6;function vo(i,e,t){let n=f=>{let u=new T().crossVectors(f,Jt).normalize();return[f,new T().crossVectors(u,f),u]},[s,r,o]=n(Fn(9,2,-8).normalize()),[a,c,l]=n(gn.center.clone().sub(ei.center).normalize()),d=Fn(i,e,t);return ei.center.clone().addScaledVector(a,d.dot(s)*hr).addScaledVector(c,d.dot(r)*hr).addScaledVector(l,d.dot(o)*hr)}var Fs=(()=>{let i=Jt.clone().applyEuler(za),e=nt.center.clone().sub(gn.center).normalize(),t=e.clone().addScaledVector(i,-e.dot(i)).normalize().applyAxisAngle(i,.55),n=new T().crossVectors(i,t).normalize(),s=gn.radius,r=gn.center.clone().addScaledVector(n,4*s),o=gn.center.clone().addScaledVector(n,1.9*s);return{n:i,side:n,flat:t,jupiterAt:r,pos:o.clone().addScaledVector(t,9.2*s).addScaledVector(i,1.9*s),look:o}})(),fs={earth:{pos:Fn(1.5,1.2,9.5),look:sn.center,shift:2.4},wobble:{pos:Fn(.8,8.5,9.5),look:Fn(0,1.2,0),shift:2.8},cut:{pos:Fn(1.2,.6,8),look:sn.center,shift:2.2},waves:{pos:Fn(.6,.3,6.6),look:sn.center,shift:1.8},field:{pos:Fn(3,2.6,14.5),look:sn.center,shift:3.8},core:{pos:Fn(-1.2,2.2,6.2),look:sn.center,shift:1.7},mercury:{pos:Dh(3.6,-1.5,.9),look:$n.home,shift:1.1,narrowBack:.85},"mercury-map":{pos:Dh(4.4,-1.8,1.1),look:$n.home,shift:1.3,narrowBack:.9},"mercury-fields":{pos:Dh(6.2,-2.5,1.6),look:$n.home,shift:1.9,narrowBack:.9},"mercury-probes":{pos:Dh(5.2,-2.1,1.3),look:$n.home,shift:1.5,narrowBack:.9},"mercury-orbit":{pos:C0.clone().add(Fn(0,100*(ti.a/26),0)).addScaledVector(Os,22*(ti.a/26)),look:C0,shift:20*(ti.a/26)},sun:{pos:nt.center.clone().addScaledVector(Fn(24,6,-20),nt.radius/9),look:nt.center,shift:7*nt.radius/9},jupiter:(()=>{let i=nt.center.clone().sub(tn.center).normalize(),e=new T().crossVectors(i,Jt).normalize(),t=tn.center.clone().addScaledVector(i,760).addScaledVector(Jt,430).addScaledVector(e,-170),n={pos:t,look:tn.center};return{pos:t,look:tn.center,shift:230,narrowBack:1.3,follow:()=>zt.jupiter?zt.jupiter(n):n}})(),"juice-cruise":{follow:()=>zt.juiceRide(),shift:9*un*ui,narrowBack:1.2},juice:{follow:()=>zt.juiceDown?zt.juiceDown():zt.juice(),shift:9*un*ui,narrowBack:1.25},"juice-map":{follow:()=>zt.juiceMap(),shift:.5*2634*Lt,narrowBack:1.2},"juice-gravity":{follow:()=>zt.juiceMap(),shift:.5*2634*Lt,narrowBack:1.2},"juice-field":{follow:()=>zt.juiceField(),shift:1.2*2634*Lt,narrowBack:1.2},ganymede:{follow:()=>zt.juiceMap(),shift:.5*2634*Lt,narrowBack:1.2},"juice-tour":{follow:()=>zt.tourTop(),narrowBack:1.35},"ocean-worlds":{follow:()=>zt.row(),shift:0,narrowBack:1.45},"ocean-depth":{follow:()=>zt.row(),shift:0,narrowBack:1.45},"ocean-probes":{follow:()=>zt.probe(),shift:.55*2634*Lt,narrowBack:1.3},launch:{follow:()=>zt.launch,shift:4.6,narrowBack:1.15},bepi:{follow:()=>zt.bepi(),shift:9*un*Ui,narrowBack:1.2},arrival:{follow:()=>zt.arrival,shift:3,narrowBack:1.25},enceladus:{pos:vo(-3,.7,4),look:vo(2.5,.4,-2.5),shift:0},"enceladus-intro":{pos:vo(-.3,-2,3.3),look:ei.center.clone().addScaledVector(Jt.clone().applyEuler(za),-1.3*ei.radius),shift:1.2*hr,narrowBack:.95},"enceladus-ocean":{pos:vo(1.4,.45,2.85),look:ei.center,shift:1.1*hr,narrowBack:.95},"enceladus-resonance":{pos:vo(.9,.4,3.05),look:ei.center,shift:1.1*hr,narrowBack:.95},"enceladus-return":{pos:vo(1.9,.75,4.1),look:ei.center,shift:1.5*hr,narrowBack:.95},"saturn-modes":{pos:Fs.pos,look:Fs.look,shift:2.4*gn.radius,narrowBack:1.1},end:(()=>{let i=Fh(Bh,270);return{pos:nt.center.clone().addScaledVector(Jt,115e4).addScaledVector(i,55e4),look:nt.center.clone().addScaledVector(Fh(Bh,90),12e4),shift:24e4}})()};{let i=fs.earth.pos,e=fs.earth.look.clone().sub(i).normalize(),t=new T().crossVectors(e,Jt).normalize(),n=new T().crossVectors(t,e),o=fs.earth.look.clone().addScaledVector(t,-fs.earth.shift).sub(i).normalize().addScaledVector(n,.3).addScaledVector(t,-.12).normalize(),a=i.dot(o),c=384400*Lt;Ba.center.copy(i).addScaledVector(o,-a+Math.sqrt(a*a-i.lengthSq()+c*c))}var OS={wobble:{eWobble:1},cut:{eCut:1},waves:{eCut:1,eWaves:1},field:{eCut:1,eField:1},core:{eCore:1},mercury:{mCut:1,mWaves:1,mField:1,mLibration:1},"mercury-probes":{mCut:1,mProbe:1},"mercury-map":{bMap:1},"mercury-fields":{bMap:1,bGrav:1,mField:1},"mercury-orbit":{mOrbit:1},jupiter:{jOrbits:1},juice:{jJuice:1},"juice-map":{gMap:1},ganymede:{gMap:1,gCover:1},"juice-tour":{jOrbits:1},"juice-gravity":{gMap:1,gGrav:1},"juice-field":{gMap:1,gField:1},"ocean-worlds":{gRow:1,gCover:1},"ocean-depth":{gRow:1,gDepth:1,gCover:1},"ocean-probes":{gRow:1,gDepth:1,gProbe:1},arrival:{bOrbit:1},enceladus:{nPlume:1},"enceladus-intro":{nPlume:1},"enceladus-ocean":{nPlume:1,nCut:1,nWaves:1},"enceladus-resonance":{nPlume:1,nCut:1,nWaves:1,nHeat:1},"enceladus-return":{nPlume:1},"saturn-modes":{sCut:1,sWaves:1},end:{xMap:1}},rf=["eWobble","eCut","eWaves","eField","eCore","mCut","mWaves","mField","mLibration","mOrbit","nCut","nWaves","nHeat","nPlume","jOrbits","xMap","jJuice","bOrbit","gMap","gGrav","gField","gRow","gDepth","gProbe","mProbe","bMap","bGrav","gCover","sCut","sWaves"],Oa=[{top:1221/6371,low:"#fff2c4",high:"#facc14"},{top:3480/6371,low:"#fa7317",high:"#fa913d"},{top:.985,low:"#9e1c1c",high:"#d94d1a"},{top:1,low:"#575450",high:"#575450"}],cr=[{top:.77,low:"#3f342b",high:"#6b5a4a"},{top:.92,low:"#0c3a66",high:"#1f6fae"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}],BS={europa:[{top:600/1561,low:"#7a3f22",high:"#b0602f"},{top:1436/1561,low:"#3f342b",high:"#6b5a4a"},{top:1536/1561,low:"#1258a8",high:"#3d95e6"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}],ganymede:[{top:700/2634,low:"#7a3f22",high:"#b0602f"},{top:1780/2634,low:"#3f342b",high:"#6b5a4a"},{top:2384/2634,low:"#6b7180",high:"#9aa1ae"},{top:2484/2634,low:"#1258a8",high:"#3d95e6"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}],callisto:[{top:600/2410,low:"#5a3f2c",high:"#80603f"},{top:2185/2410,low:"#4a4640",high:"#6e685f"},{top:2310/2410,low:"#1258a8",high:"#3d95e6"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}]},Nh=[{top:.33,low:"#fff2c4",high:"#facc14"},{top:.77,low:"#fa7317",high:"#fa913d"},{top:2020/2440,low:"#b45309",high:"#c2560f"},{top:.985,low:"#5c4a3d",high:"#7d6a5a"},{top:1,low:"#8a8580",high:"#8a8580"}],Fi=document.querySelector(".journey-canvas"),Uh=[...document.querySelectorAll(".journey-step[data-stop]")];Fi&&Uh.length&&zS()?VS():document.documentElement.classList.add("no-webgl");function zS(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function R0(i,e){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,i),s.addColorStop(.35,e),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,256,256);let r=new ci(t);return r.colorSpace=cn,r}function kS(i){let e=new va,t=new Map,n=new Map,s=new Map,r=f=>/^(earth|moon)/.test(f)?"earth":/^mercury/.test(f)?"mercury":/^sun/.test(f)?"sun":/^(jupiter|io|europa|ganymede|callisto)/.test(f)?"jupiter":"saturn",o=f=>/normal|spec|bump/.test(f),a=f=>{let u=document.createElement("canvas");u.width=u.height=1;let h=u.getContext("2d");return h.fillStyle=f?"rgb(128,128,255)":"rgb(46,46,50)",h.fillRect(0,0,1,1),u};function c(f){if(f=f.replace(/\.(jpg|png)(#|$)/,".webp$2"),t.has(f))return t.get(f).t;let u=new Ln(a(/normal/.test(f)));u.needsUpdate=!0,!o(f)&&!/clouds/.test(f)&&(u.colorSpace=cn),u.anisotropy=d.anisotropy;let h={t:u,file:f.split("#")[0],level:0,preview:!o(f)};t.set(f,h);let g=r(f);return n.has(g)||n.set(g,[]),n.get(g).push(h),u}function l(f,u){let h=f+u;if(!s.has(h)){let g=(n.get(f)??[]).filter(v=>v.level<u&&(u===2||v.preview));s.set(h,Promise.all(g.map(v=>new Promise(m=>e.load(i+(u===1?v.file.replace(".webp",".lo.webp"):v.file),p=>{v.level<u&&(v.t.dispose(),v.t.image=p.image,v.t.needsUpdate=!0,v.level=u,d.uploaded?.(v.t)),m()},void 0,m)))))}return s.get(h)}let d={get:c,load:l,anisotropy:8,loader:{load:f=>c(f.slice(i.length))}};return d}function VS(){let i=matchMedia("(prefers-reduced-motion: reduce)").matches,e=1,t=[],n=!1,s=new T,r=new Ch({canvas:Fi,antialias:!0,reversedDepthBuffer:!0}),o=Math.min(devicePixelRatio,2),a=o;r.setPixelRatio(a);let c=Fi.dataset.textures,l=kS(c),d=l.get,f=l.loader;l.anisotropy=r.capabilities.getMaxAnisotropy(),r.localClippingEnabled=!0,r.setClearColor(263434);let u=new ra,h=new zn(45,1,.1,1e8);u.add(new ba(16777215,.22));let g=new Sa(16774368,3,0,0);g.position.copy(nt.center),u.add(g);let v=600,m=[],p=[];for(let _=0;_<v;_++)m.push(Fn(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize().multiplyScalar(300+Math.random()*500)),p.push(.3+Math.random()*.7);let M=new It;M.setAttribute("position",new it(new Float32Array(v*6),3));{let _=new Float32Array(v*6);for(let b=0;b<v;b++)_.set([.85,.92,1,0,0,0],b*6);M.setAttribute("color",new it(_,3))}let P=new ro(M,new yn({vertexColors:!0,blending:Vn,depthWrite:!1}));P.renderOrder=-1,P.frustumCulled=!1,u.add(P);function w(){if(P.visible=_s>.01,C.material.color.setScalar(1-.35*_s),!P.visible)return;P.position.copy(h.position),P.scale.copy(C.scale),P.material.color.setScalar(.6*_s);let _=M.attributes.position;for(let b=0;b<v;b++){let E=m[b],L=220*p[b]*_s;_.setXYZ(2*b,E.x,E.y,E.z),_.setXYZ(2*b+1,E.x-xs.x*L,E.y-xs.y*L,E.z-xs.z*L)}_.needsUpdate=!0}let C;{let _=[],b=[];for(let L=0;L<5e3;L++){let D=Fn(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();D.multiplyScalar(300+Math.random()*500),_.push(D.x,D.y,D.z);let Y=new Ye().setHSL(.58+(Math.random()-.5)*.25,.4,.75+Math.random()*.25);b.push(Y.r,Y.g,Y.b)}let E=new It;E.setAttribute("position",new it(_,3)),E.setAttribute("color",new it(b,3)),C=new Rs(E,new Ks({size:1.6,sizeAttenuation:!1,vertexColors:!0,depthWrite:!1})),C.renderOrder=-1,C.frustumCulled=!1,u.add(C)}let R=[],x=_=>new Un(_,96,48),A=ar({loader:f,textures:c,center:sn.center,radius:sn.radius,maps:{map:"earthday4k.webp",bump:"earthbump4k.webp",bumpScale:2.2,specular:"earthspec4k.webp",clouds:"earthclouds2k.webp",night:"earthnight4k.webp"},sunDir:Oh,layers:Oa,waves:{inner:Oa[0].top,outer:Oa[1].top,omega:1},field:{shells:[1.35,1.8,2.5,3.4],inner:[.8],offset:0,coreTop:Oa[1].top},wobble:{obliquity:23.4,nutation:2.5,nods:11,seconds:16},coreField:Oa[1].top,spinRate:.35});u.add(A.root);let O=new fn({uniforms:{uSun:{value:new T},uOpacity:{value:1}},vertexShader:`
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
      }`,blending:Vn,transparent:!0,depthWrite:!1}),N=new ot(new Un(sn.radius*1.025,96,48),O);N.position.copy(sn.center),u.add(N);let z=new ot(new Un(Ba.radius,96,48),new Bt({map:d("moonmap2k.jpg"),normalMap:d("moonnormal2k.jpg"),shininess:4}));z.position.copy(Ba.center),u.add(z);let k=ar({loader:f,textures:c,center:$n.home,radius:$n.radius,maps:{map:"mercurymap.jpg",normal:"mercurynormal.jpg"},layers:Nh,waves:{inner:Nh[0].top,outer:Nh[1].top,omega:58.65/87.97},field:{shells:[1.5,2.1],offset:.2,coreTop:Nh[2].top,strength:.55,azimuths:8},spinRate:.05});u.add(k.root);let K=[];for(let _=0;_<=256;_++)E0(_/256*Math.PI*2,K[_]=new T);let F=new Nn(new It().setFromPoints(K),new yn({color:10530496,transparent:!0,opacity:0}));u.add(F);let Z={orbits:document.querySelector("[data-orbits]"),spins:document.querySelector("[data-spins]")},Q=new ot(x(nt.radius),new Wi({map:d("sunmap.jpg")}));Q.position.copy(nt.center),u.add(Q),R.push([Q,.02]);let G=new io(new js({map:R0("rgba(255,214,140,0.9)","rgba(255,140,40,0.35)"),blending:Vn,depthWrite:!1}));G.scale.setScalar(nt.radius*4.2),G.position.copy(nt.center),u.add(G);let j=new Gt;j.position.copy(tn.center),j.rotation.z=3.1*Math.PI/180,u.add(j);let J=new ot(x(tn.radius),new Bt({map:d("jupitermap.jpg"),shininess:4}));j.add(J),R.push([J,.12]);let re=d("moonnormal2k.jpg#detail");re.wrapS=re.wrapT=$s,re.repeat.set(10,5);let ue={io:Math.PI,europa:0,ganymede:0,callisto:2.2},ke=ds.map(_=>{let b=new ot(new Un(_.radius,_.name==="ganymede"?384:96,_.name==="ganymede"?192:48),new Bt({map:d(`${_.name}.jpg`),normalMap:re,normalScale:new Oe(.45,.45),shininess:8}));j.add(b);let E=[];for(let D=0;D<=192;D++){let Y=D/192*Math.PI*2;E.push(new T(Math.cos(Y)*_.orbit,0,-Math.sin(Y)*_.orbit))}let L=new Nn(new It().setFromPoints(E),new yn({color:10530496,transparent:!0,opacity:0}));return j.add(L),{..._,mesh:b,line:L,phase:ue[_.name]}}),lt=[],q=(_,b)=>{let E=[];for(let L=0;L<=256;L++){let D=L/256*Math.PI*2;E.push(_.clone().add(Fn(Math.cos(D)*b,0,Math.sin(D)*b)))}return E};for(let _ of[sn,tn,gn]){let b=new Nn(new It().setFromPoints(q(nt.center,_.center.distanceTo(nt.center))),new yn({color:10530496,transparent:!0,opacity:0}));u.add(b),lt.push(b)}let pe=[[sn.center,"#60a5fa"],[null,"#b8b0a8"],[tn.center,"#e3c9a0"],[gn.center,"#f0dca0"]],Se=new Rs(new It().setAttribute("position",new it(new Float32Array(12),3)).setAttribute("color",new it(pe.flatMap(([,_])=>new Ye(_).toArray()),3)),new Ks({size:7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1}));Se.frustumCulled=!1,u.add(Se);let Ie=ke.find(_=>_.name==="ganymede"),de=null,ge=b0();ge.scale.setScalar(un*ui),u.add(ge);let At=Bi(),Ge=()=>1+(T0-1)*ze.jOrbits,Be=new T,ct=new T,ut=new T,gt=new T,qt=new T,pn=new T,kt=new Pt;function Dn(){j.updateMatrixWorld(!0),Ie.mesh.getWorldPosition(Be),ct.copy(nt.center).sub(Be).normalize(),ut.copy(tn.center).sub(Be).normalize(),gt.copy(Jt).addScaledVector(ct,.6).normalize(),qt.copy(ut).addScaledVector(gt,-ut.dot(gt)).normalize(),pn.crossVectors(qt,gt)}function Kt(_,b){let E=Ie.radius*Ge()+(500+(ce?5500:19500)*(1-_)**1.5)*Lt,L=Math.PI*3*(1-_);return b.copy(Be).addScaledVector(gt,E*Math.cos(L)).addScaledVector(qt,E*Math.sin(L))}let Ft=2*Math.PI*Math.sqrt((2634.1+500)**3/9887.8)/3600,En=7.1546*24,Cn=2*Math.PI*Ft/En,V=["juice-map","juice-gravity","juice-field"],Hn=24,Qt=.75,$t=new T,Ue=new T;function dn(_,b){j.updateMatrixWorld(),$t.set(0,1,0).applyQuaternion(j.getWorldQuaternion(new yt)),Ue.copy($t).addScaledVector(gt,-$t.dot(gt)).normalize();let E=Ie.radius*Ge()+500*Lt,L=Math.PI*2*_;return b.copy(Be).addScaledVector(gt,E*Math.cos(L)).addScaledVector(Ue,E*Math.sin(L))}let ce=null,ht=new Gt;j.add(ht);let I=_=>_*_*(3-2*_);fetch(`${c}juice-tour.json`).then(_=>_.ok?_.json():Promise.reject(_.status)).then(({data:_})=>{let b=Uint8Array.from(atob(_),ve=>ve.charCodeAt(0)).buffer,E=new Float64Array(b,0,16),[L,D,Y,oe]=E,fe=new Float32Array(b,128,L*3),xe=new Int16Array(b,128+L*12,4*D);j.updateMatrixWorld(!0);let se=j.worldToLocal(nt.center.clone()),me=Math.atan2(-se.z,se.x)-Math.atan2(-E[14],E[12]);ht.rotation.y=me;let be=71492,Pe=new Float64Array(L),Qe=new Float32Array(L),st=new Float32Array(L);for(let ve=0;ve<L;ve++)st[ve]=Math.hypot(fe[3*ve],fe[3*ve+1],fe[3*ve+2])/be;for(let ve=1;ve<L;ve++)Pe[ve]=Pe[ve-1]+Math.max(st[ve],12)**-.75;for(let ve=0;ve<L;ve++)Pe[ve]/=Pe[L-1];for(let ve=0;ve<L;ve++){let pt=0;for(let Nt=Math.max(0,ve-120);Nt<=Math.min(L-1,ve+120);Nt++)pt=Math.max(pt,st[Nt]);Qe[ve]=pt}for(let ve=1;ve<L;ve++)Qe[ve]+=(Qe[ve-1]-Qe[ve])*(1-1/240);for(let ve=L-2;ve>=0;ve--)Qe[ve]+=(Qe[ve+1]-Qe[ve])*(1-1/240);let St=new It,et=4,Vt=(L-1)*et+1,Rt=new Float32Array(Vt*3),ye=(ve,pt)=>fe[3*Math.min(Math.max(ve,0),L-1)+pt];for(let ve=0;ve<Vt;ve++){let pt=Math.min(Math.floor(ve/et),L-2),Nt=ve/et-pt;for(let en=0;en<3;en++)Rt[3*ve+en]=U(ye(pt-1,en),ye(pt,en),ye(pt+1,en),ye(pt+2,en),Nt)*Lt}St.setAttribute("position",new it(Rt,3)),St.setAttribute("color",new it(new Float32Array(Vt*3),3));let Ke=new Nn(St,new yn({vertexColors:!0,transparent:!0,blending:Vn,depthWrite:!1}));Ke.frustumCulled=!1,Ke.visible=!1,ht.add(Ke),ce={K:L,L:D,step:Y,jd0:oe,fits:[...E.slice(4,12)],pos:fe,res:xe,cum:Pe,reach:Qe,delta:me,trace:Ke,SUB:et,shown:-1},fl=!0;let at=0;for(;at<L-1&&st[at]>45;)at++;ce.rideEnd=Pe[at],ce.rideEndDay=at*Y;let Et=at,Ht=1/0;for(let ve=at;ve<Math.min(L,at+400);ve++){let pt=H(2,ve)-me,Nt=Math.cos(pt)*1070400,en=-Math.sin(pt)*1070400,on=Math.hypot(fe[3*ve]-Nt,fe[3*ve+1],fe[3*ve+2]-en);on<Ht&&(Ht=on,Et=ve)}ce.flyby=Pe[Et]}).catch(()=>{});function y(_){let{cum:b,K:E}=ce;_=le.clamp(_,0,1);let L=0,D=E-1;for(;D-L>1;){let Y=L+D>>1;b[Y]<=_?L=Y:D=Y}return L+(_-b[L])/Math.max(b[D]-b[L],1e-12)}function H(_,b){let{fits:E,res:L,L:D,step:Y}=ce,oe=le.clamp(b/4,0,D-1),fe=Math.min(Math.floor(oe),D-2),xe=oe-fe;return E[2*_]+E[2*_+1]*b*Y+1e-6*(L[_*D+fe]*(1-xe)+L[_*D+fe+1]*xe)+ce.delta}let he=null,ae=_=>he?1-le.smoothstep(Math.abs(_-he.s0),0,.08):0,Ae=14,Le=!1,te=130,ie=_=>H(_,ce.K-1)-Math.PI*2*Ae*(ds[0].period/ds[_].period)*(1-ji/te),Te=(_,b,E)=>Le?ie(_):H(_,b)+(he?he.phase[_]*ae(E):0),U=(_,b,E,L,D)=>b+.5*D*(E-_+D*(2*_-5*b+4*E-L+D*(3*(b-E)+L-_))),ne=new T,ee=new T,Ee=new T;function Me(_,b){let E=_.length();return E>1.2*b?_.multiplyScalar(1.2*b/E):_}function Ce(_,b){let{pos:E,K:L}=ce,D=y(_),Y=Math.min(Math.floor(D),L-2),oe=D-Y,fe=(se,me)=>E[3*le.clamp(se,0,L-1)+me];ne.set(...[0,1,2].map(se=>U(fe(Y-1,se),fe(Y,se),fe(Y+1,se),fe(Y+2,se),oe)*Lt)),ne.applyAxisAngle(Jt,ce.delta);let xe=le.smoothstep(D,L-241,L-41);if(xe>0){let se=Ie.orbit,me=H(2,D),be=Te(2,D,_);ee.set(Math.cos(me)*se,0,-Math.sin(me)*se),Ee.set(Math.cos(be)*se,0,-Math.sin(be)*se),ne.addScaledVector(Ee.sub(ee),xe)}return b.copy(ne).applyMatrix4(j.matrixWorld)}function je(_){return new Date((ce.jd0+_*ce.step-24405875e-1)*864e5).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}let xt=Math.atan2(-(nt.center.z-tn.center.z),nt.center.x-tn.center.x)+1.05,_e=3,tt=850,_t=new T;function Ne(_,b){if(ce)return Ce(_,b);let E=Ie.orbit,L=E+(tt-E)*(1-_)**1.6,D=le.lerp(.68*E,E,le.smoothstep(_,.55,1)),Y=Math.PI+Math.PI*2*_e*_,oe=2*L*D/(L+D+(L-D)*Math.cos(Y)),fe=xt+Y-(Math.PI+Math.PI*2*_e);return _t.set(Math.cos(fe)*oe,0,-Math.sin(fe)*oe),b.copy(_t).applyMatrix4(j.matrixWorld),b.lerp(Kt(0,new T),le.smoothstep(_,.9,1))}let Wt=Math.atan2(tn.center.z-nt.center.z,tn.center.x-nt.center.x),mn={r:2.4*P0,angle:Wt-.9},Oi=Math.hypot(tn.center.x-nt.center.x,tn.center.z-nt.center.z);function Zi(_,b){let E=mn.r*(Oi/mn.r)**_,L=mn.angle+.9*_;return b.set(nt.center.x+E*Math.cos(L),0,nt.center.z+E*Math.sin(L))}let gi=.85;function zh(_,b){if(ce){let be=Zi(0,new T),Pe=Ne(0,new T),Qe=be.distanceTo(Pe),st=Zi(1e-4,new T).sub(be).normalize().multiplyScalar(Qe*.9),St=Ne(1e-5,new T).sub(Pe).normalize().multiplyScalar(Qe*.9);return ks(be,st,Pe,St,_,b)}if(_<gi)return Zi(_,b);let E=Zi(gi,new T),L=Zi(gi+1e-4,new T).sub(Zi(gi-1e-4,new T)).multiplyScalar((1-gi)/2e-4),D=Ne(0,new T),Y=(_-gi)/(1-gi);if(!ce){let be=Ne(1e-4,new T).sub(Ne(0,new T)).normalize().multiplyScalar(E.distanceTo(D)*.6);return ks(E,L,D,be,Y,b)}let oe=.8,fe=45e6*Lt,xe=Ne(1e-5,new T).sub(D).normalize(),se=D.clone().addScaledVector(xe,-fe);if(Y>=oe)return b.copy(se).lerp(D,(Y-oe)/(1-oe));let me=fe/(1-oe);return Me(L.multiplyScalar(oe),E.distanceTo(se)),ks(E,L,se,xe.multiplyScalar(me*oe),Y/oe,b)}function _i(_,b){return _<=1?zh(Math.max(_,0),b):_<=2?Ne(_-1,b):_<=3?Kt(_-2,b):dn(_-3,b)}let yo=.78,Ji=.62,$i=.7,Mo=.75;Fa=()=>({bepi:[jn,!0],"juice-cruise":[yo,!0],...ce?{jupiter:[$i,!1],juice:[Mo,!1]}:{},...Object.fromEntries(V.map(_=>[_,[Qt,!1]]))});let Xt=0,ji=0,xi=0,ps=0,Je=null;function kh(_){if(Je)return Je.clock;let b=$e.indexOf("jupiter"),E=$e.indexOf("juice");return b<0||E<0?0:le.clamp((_-b)/(E-b)/Ji,0,1)}function So(_){let b=$e.indexOf("jupiter"),E=$e.indexOf("juice"),L=1+ce.rideEnd,D=1+ce.flyby;return _<E?le.lerp(L,D,I(le.clamp((_-b)/(E-b)/$i,0,1))):_<ka()?2+I(le.clamp((_-E)/Mo,0,1)):3+$(_)}let bo=()=>Math.max(X(),$e.indexOf("ocean-depth"),$e.indexOf("ocean-probes")),ka=()=>{let _=$e.indexOf(V[0]);return _>=0?_:$e.indexOf("juice")+1};function Va(_){let b=$e.indexOf("juice-cruise"),E=$e.indexOf("jupiter");return!ce||b<0||_<b-.3||_>bo()+.6?-1:_<E?Math.max(0,Xt-1):Math.min(So(Math.min(_,$e.indexOf("juice")-1e-6))-1,ce.flyby)}function Ga(_){Dn();let b=$e.indexOf("juice-tour"),E=ce&&b>=0?1-le.smoothstep(Math.abs(_-b),.2,.55):0;if(E>.001){Xt=1+xi,_i(Xt,ge.position),ge.visible=!0;let ye=ge.position.clone(),Ke=Xt;t.push(()=>At.draw(ye,_i,Ke,1e-5,E,_o*un*ui,1));let{SUB:at}=ce,Et=y(xi),Ht=Math.min(Math.ceil(Et*at)+1,(ce.K-1)*at+1);ce.trace.visible=Ht>1,ce.trace.geometry.setDrawRange(0,Ht);let ve=ce.trace.geometry.attributes.color;for(let pt=0;pt<Ht;pt++){let Nt=E*(.05+.95*Math.exp(-(Et-pt/at)/400));ve.setXYZ(pt,.32*Nt,.42*Nt,.55*Nt)}ve.needsUpdate=!0;return}if($e.includes("ganymede")){Xt=3+ps,_i(Xt,ge.position);let ye=nt.center.clone().sub(ge.position).normalize(),Ke=new T().crossVectors(gt,ye).normalize(),at=new T().crossVectors(ye,Ke);ge.quaternion.setFromRotationMatrix(kt.makeBasis(Ke,at,ye));let Et=ze.gMap;ge.visible=Et>.001;let Ht=ge.position.clone(),ve=Xt;t.push(()=>{ge.scale.setScalar(un*ui),At.draw(Ht,_i,ve,ce?Math.min(.08,Xt-2):.3,Et,_o*un*ui,1)}),ce&&(ce.trace.visible=!1);return}let L=$e.indexOf("juice-cruise"),D=$e.indexOf("jupiter"),Y=$e.indexOf("juice");if(L<0||D<0||Y<0)return;let oe=1+(ce?.rideEnd??0);if(_<D)Xt=I(le.clamp((_-L)/yo,0,1))*oe;else if(Je)Xt=1+Je.clock;else if(ce&&_<ka())Xt=So(_);else if(_<Y){let ye=(_-D)/(Y-D);Xt=ye<.06?oe:2+I((ye-.06)/.94)}else Xt=3+$(_);_i(Xt,ge.position);let fe=nt.center.clone().sub(ge.position).normalize(),xe=new T().crossVectors(gt,fe).normalize(),se=new T().crossVectors(fe,xe);ge.quaternion.setFromRotationMatrix(kt.makeBasis(xe,se,fe));let me=Je||ce?0:(()=>{let ye=(_-D)/(Y-D);return le.smoothstep(ye,0,.05)*(1-le.smoothstep(ye,.3,.5))})(),be=X(),Pe=ce&&!Je?(()=>{let ye=(_-D)/(Y-D);return le.smoothstep(ye,$i+.02,$i+.12)*(1-le.smoothstep(_,Y+.005,Y+.08))})():0,Qe=le.smoothstep(_,L-.7,L-.5)*(1-le.smoothstep(_,be+.1,be+.5))*(1-me)*(1-Pe);ge.visible=Qe>.001;let st=Xt<=1?.035:Xt<=2?ce?Je?.008:.02:.22:ce?Math.min(.08,Xt-2):.3,St=1+.8*ze.jOrbits,et=ce?1:Xt>3?le.smoothstep(Xt,3.02,3.1):1-le.smoothstep(Xt,2.8,2.97),Vt=ge.position.clone(),Rt=Xt;if(t.push(()=>{let ye=Kf(Vt);ge.scale.setScalar(un*ui*ye),At.draw(Vt,_i,Rt,st,Qe*et,_o*un*ui*ye,St)}),ce){let ye=Je?ze.jOrbits*Qe*Je.ramp*le.smoothstep(Xt,1,1.002):0;if(ce.trace.visible=ye>.002,ce.trace.visible){let{SUB:Ke}=ce,at=y(Xt-1),Et=Math.min(Math.ceil(at*Ke)+1,(ce.K-1)*Ke+1);ce.trace.geometry.setDrawRange(0,Et);let Ht=ce.trace.geometry.attributes.color;for(let ve=0;ve<Et;ve++){let pt=ye*(.05+.95*Math.exp(-(at-ve/Ke)/320));Ht.setXYZ(ve,.32*pt,.42*pt,.55*pt)}Ht.needsUpdate=!0}}}function wo(_){let b=nt.center.clone().sub(_).normalize();return _.clone().sub(tn.center).normalize().addScaledVector(Jt,.6).addScaledVector(b,.4).normalize()}function S(_,b,E){let L=ge.position.clone(),D=Xt;ge.position.copy(_),Xt=b;let Y=E();return ge.position.copy(L),Xt=D,Y}let B=()=>{let _=_i(1+ce.rideEnd,new T);return{pos:_.clone().addScaledVector(wo(_),330),look:tn.center.clone()}};zt.jupiter=_=>{if(!ce)return _;let b=B();if(!Je)return b;let E=y(Je.clock),L=tn.center.clone().lerp(_.pos,le.clamp(ce.reach[Math.round(E)],26,60)/20),D=I(Je.ramp),Y=b.pos.clone().sub(tn.center),oe=L.sub(tn.center),fe=Math.exp(le.lerp(Math.log(Y.length()),Math.log(oe.length()),D));Y.normalize().applyQuaternion(new yt().slerp(new yt().setFromUnitVectors(Y.clone().normalize(),oe.normalize()),D));let xe=tn.center.clone().addScaledVector(Y,fe),se=b.look.clone().lerp(_.look,D);return{pos:xe,look:se}};function $(_){if($e.includes("ganymede"))return ps;let b=0;for(let[E,L]of V.entries()){let D=$e.indexOf(L);if(D<0||_<D)break;b=Hn*(E+le.clamp((_-D)/Qt,0,1))}return b}let X=()=>{let _=$e.indexOf(V.at(-1));return _>=0?_+Qt:$e.indexOf("juice")};zt.juiceMap=()=>{let _=Ie.radius,b=pn.clone().multiplyScalar(.8).addScaledVector(ct,.55).addScaledVector(gt,.15).normalize();return{pos:Be.clone().addScaledVector(b,_*4.2),look:Be.clone()}},zt.tourTop=()=>{let _=27e5*Lt,b=le.degToRad(22),E=ct.clone().addScaledVector(gt,-ct.dot(gt)).normalize(),L=gt.clone().multiplyScalar(Math.cos(b)).addScaledVector(E,Math.sin(b));return{pos:tn.center.clone().addScaledVector(L,_/Math.tan(le.degToRad(h.fov/2))),look:tn.center.clone()}},zt.juiceField=()=>{let _=zt.juiceMap();return{pos:Be.clone().lerp(_.pos,1.75),look:_.look}};let W=new Nn(new It().setAttribute("position",new it(new Float32Array(387),3)),new yn({color:16767392,transparent:!0,opacity:0,depthWrite:!1}));W.frustumCulled=!1,u.add(W);let Re=1024,He=512,we=document.createElement("canvas");we.width=Re,we.height=He;let De=we.getContext("2d"),Ze=new ci(we),dt=!1,bt=(()=>{let E=document.createElement("canvas");E.width=512,E.height=256;let L=E.getContext("2d"),D=L.createImageData(512,256),Y=7,oe=()=>(Y=Y*16807%2147483647)/2147483647,fe=Array.from({length:18},()=>{let st=Math.acos(2*oe()-1),St=oe()*Math.PI*2;return{x:Math.sin(st)*Math.cos(St),y:Math.cos(st),z:Math.sin(st)*Math.sin(St),a:(oe()*2-1)*.35,w:.25+oe()*.3}}),xe=new Float32Array(512*256),se=0;for(let st=0;st<256;st++)for(let St=0;St<512;St++){let et=(st+.5)/256*Math.PI,Vt=(St+.5)/512*Math.PI*2,Rt=Math.sin(et),ye=Math.cos(et),Ke=-127.5*(1.5*ye*ye-.5)+38.3*3*Rt*Rt*Math.cos(2*Vt);Ke/=127.5;let at=-Math.cos(Vt)*Rt,Et=ye,Ht=Math.sin(Vt)*Rt;for(let ve of fe){let pt=Math.acos(Math.min(1,at*ve.x+Et*ve.y+Ht*ve.z));Ke+=ve.a*Math.exp(-(pt*pt)/(ve.w*ve.w))}xe[st*512+St]=Ke,se=Math.max(se,Math.abs(Ke))}let me=[44,98,210],be=[236,234,226],Pe=[214,84,52];for(let st=0;st<512*256;st++){let St=xe[st]/se,et=St<0?me:Pe,Vt=Math.min(1,Math.abs(St)*1.3);for(let Rt=0;Rt<3;Rt++)D.data[4*st+Rt]=be[Rt]+(et[Rt]-be[Rt])*Vt;D.data[4*st+3]=255}L.putImageData(D,0,0);let Qe=new ci(E);return Qe.colorSpace=cn,Qe})(),Ve=new fn({uniforms:{surf:{value:null},mask:{value:Ze},grav:{value:bt},sun:{value:new T(1,0,0)},show:{value:0},wGrav:{value:0}},vertexShader:`
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
        float seen = texture2D(mask, vUv).a;
        vec3 sharp = texture2D(surf, vUv).rgb, soft = texture2D(surf, vUv, 5.0).rgb;
        vec3 colour = mix(soft * 0.85, sharp, seen) + vec3(1.0, 0.72, 0.4) * 0.07 * seen * (1.0 - wGrav);
        colour = mix(colour, texture2D(grav, vUv).rgb * 0.75, wGrav * seen);
        float light = 0.12 + 0.95 * max(dot(normalize(vNormal), sun), 0.0);
        gl_FragColor = vec4(colour * light, show);
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1}),Mt=new ot(new Un(Ie.radius*1.004,128,64),Ve);Mt.visible=!1,Mt.renderOrder=1,Ie.mesh.add(Mt);let jt=0,Dt=new T,Yt=new yt;function Mn(_){dn(_,Dt).sub(Be),j.getWorldQuaternion(Yt).invert(),Dt.applyQuaternion(Yt).applyAxisAngle(lr,-(Ie.phase+Cn*_)).normalize();let b=Math.acos(le.clamp(Dt.y,-1,1)),E=Math.atan2(Dt.z,-Dt.x);return E<0&&(E+=Math.PI*2),[E/(Math.PI*2)*Re,b/Math.PI*He]}function qe(_){if(_<jt-1e-9&&(De.clearRect(0,0,Re,He),jt=0),_-jt<1e-6)return;De.lineCap="round",De.strokeStyle="rgba(255, 255, 255, 0.9)",De.shadowColor="white",De.shadowBlur=6,De.lineWidth=10;let b=Math.max(1,Math.ceil((_-jt)*160)),[E,L]=Mn(jt);for(let D=1;D<=b;D++){let[Y,oe]=Mn(jt+(_-jt)*D/b);Math.abs(Y-E)<Re/2&&(De.beginPath(),De.moveTo(E,L),De.lineTo(Y,oe),De.stroke()),E=Y,L=oe}jt=_,Ze.needsUpdate=!0}function Sn(_,b,E){let L=new Gt,D=new yn({color:E,transparent:!0,opacity:0,depthWrite:!1});for(let Y=0;Y<b;Y++){let oe=Y/b*Math.PI*2;for(let fe of _){let xe=Math.asin(Math.sqrt(1/fe)),se=[];for(let me=0;me<=90;me++){let be=xe+(Math.PI-2*xe)*me/90,Pe=fe*Math.sin(be)**2;se.push(new T(Pe*Math.sin(be)*Math.cos(oe),Pe*Math.cos(be),Pe*Math.sin(be)*Math.sin(oe)))}L.add(new Nn(new It().setFromPoints(se),D))}}return L.userData.material=D,L}let Tt=new Gt,vi=Sn([1.7,2.6,4],6,12375295),xn=Sn([1.35,1.9],4,6283468);Tt.add(vi,xn),Tt.visible=!1,u.add(Tt);function ur(_){let b=$(_),E=ze.gMap,L=b*Ft,D=Ie.radius*Ge();if(Mt.visible=ze.gCover>.01&&!dt,Ve.uniforms.show.value=ze.gCover,Ve.uniforms.wGrav.value=ze.gGrav,Ve.uniforms.surf.value=Ie.mesh.material.map,Ve.uniforms.sun.value.copy(nt.center).sub(Be).normalize(),E>.01&&!dt&&(Ie.mesh.scale.x*=1+.018*E*Math.cos(2*Math.PI*L/En)),Tt.visible=ze.gField>.01,Tt.visible&&(Tt.position.copy(Be),Tt.scale.setScalar(D),vi.quaternion.setFromUnitVectors(lr,$t),xn.quaternion.setFromUnitVectors(lr,ut),vi.userData.material.opacity=.35*ze.gField,xn.userData.material.opacity=.95*ze.gField*Math.abs(Math.sin(2*Math.PI*L/10.53))**.7),W.material.opacity=.3*E,W.visible=E>.01,W.visible){let Y=W.geometry.attributes.position;W.position.copy(Be);for(let oe=0;oe<=128;oe++)dn(oe/128,Dt).sub(Be),Y.setXYZ(oe,Dt.x,Dt.y,Dt.z);Y.needsUpdate=!0}(Mt.visible||b===0)&&qe(b),cg(b,E)}zt.juice=yi,zt.juiceDown=()=>ce?zt.juiceMap():yi();function yi(){let _=ct.clone().addScaledVector(qt,-ct.dot(qt)).normalize(),b=qt.clone().multiplyScalar(-.75).addScaledVector(_,.65).addScaledVector(gt,.12).normalize();return{pos:ge.position.clone().addScaledVector(b,50*un*ui),look:ge.position.clone()}}zt.juiceRide=()=>{let _=nt.center.clone().sub(ge.position).normalize(),E=new T().crossVectors(_,Jt).normalize().multiplyScalar(.55).addScaledVector(_,.7).addScaledVector(Jt,.35).normalize(),L=ge.position.clone().sub(fs.mercury.pos).normalize().negate();E.copy(L.applyQuaternion(new yt().slerp(new yt().setFromUnitVectors(L.clone(),E.clone()),le.smoothstep(Xt,0,.35))));let D=wo(ge.position),Y=new yt().setFromUnitVectors(E,D);E.applyQuaternion(new yt().slerp(Y,le.smoothstep(Xt,.45,1)));let oe=ge.position.clone().addScaledVector(E,50*un*ui),fe=ge.position.clone().sub(oe).normalize(),xe=tn.center.clone().sub(oe),se=xe.length();xe.normalize();let me=0;if(me<=0)return{pos:oe,look:ge.position.clone()};let be=fe.clone().applyQuaternion(new yt().slerp(new yt().setFromUnitVectors(fe,xe),me));return{pos:oe,look:oe.clone().addScaledVector(be,le.lerp(oe.distanceTo(ge.position),se,me*2))}};function Bi(){let _=new io(new js({map:R0("rgba(225,238,255,0.9)","rgba(150,190,255,0.12)"),blending:Vn,depthWrite:!1,sizeAttenuation:!1,transparent:!0}));_.scale.setScalar(.012),u.add(_);let b=240,E=new It;E.setAttribute("position",new it(new Float32Array(b*3),3)),E.setAttribute("color",new it(new Float32Array(b*3),3));let L=new Nn(E,new yn({vertexColors:!0,transparent:!0,blending:Vn,depthWrite:!1}));L.frustumCulled=!1,u.add(L);let D=new It;D.setAttribute("position",E.attributes.position),D.setAttribute("aFade",new it(new Float32Array(b),1));let Y=new Rs(D,new fn({uniforms:{uScale:{value:1}},vertexShader:`
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
        }`,transparent:!0,blending:Vn,depthWrite:!1}));Y.frustumCulled=!1,u.add(Y);let oe=new T,fe=0,xe=0;return{draw(se,me,be,Pe,Qe,st,St=1){let et=h.position.distanceTo(se),Vt=2*st/et*(r.domElement.height/(2*Math.tan(le.degToRad(h.fov/2))));_.position.copy(se),_.material.opacity=Qe*(1-le.smoothstep(Vt,3,14)),_.visible=_.material.opacity>.01;let Rt=performance.now(),ye=Math.min((Rt-xe)/1e3,.1);xe=Rt;let Ke=1-le.smoothstep(Vt,5,22);if(fe=i||Ke<fe?Ke:fe+(Ke-fe)*(1-Math.exp(-ye*1.2)),Math.abs(Ke-fe)<.001&&(fe=Ke),Pe*=fe**1.5,Qe*=Math.min(1,fe*3)*e,L.visible=Y.visible=Qe>.01&&Pe>1e-4,!L.visible)return;L.position.copy(se),Y.position.copy(se),Y.material.uniforms.uScale.value=r.getPixelRatio();let at=E.attributes.position,Et=E.attributes.color,Ht=D.attributes.aFade;for(let ve=0;ve<b;ve++){let pt=(ve/(b-1))**1.8;me(be-Pe*pt,oe).sub(se),at.setXYZ(ve,oe.x,oe.y,oe.z);let Nt=Qe*(1-pt)**1.6;Et.setXYZ(ve,.32*Nt*St,.42*Nt*St,.55*Nt*St),Ht.setX(ve,Nt)}at.needsUpdate=Et.needsUpdate=Ht.needsUpdate=!0}}}let We=A0();We.group.scale.setScalar(un*Ui),u.add(We.group);let _n=Bi(),jn=.78,nn=nt.center.clone().sub($n.home).normalize(),ni=new T().crossVectors(nn,Jt).normalize().clone().multiplyScalar(.7).addScaledVector(nn,.55).addScaledVector(Jt,.3).normalize(),Ha=ni.clone().setY(0).normalize(),of=new T().crossVectors(Jt,Ha).normalize(),Vh=3030,Gh=14079,zi={a:(Vh+Gh)/2*Lt,e:(Gh-Vh)/(Gh+Vh),turn:-.5,seconds:8};function dr(_,b){let E=_;for(let fe=0;fe<8;fe++)E-=(E-zi.e*Math.sin(E)-_)/(1-zi.e*Math.cos(E));let L=zi.a*(Math.cos(E)-zi.e),D=zi.a*Math.sqrt(1-zi.e*zi.e)*Math.sin(E),Y=Math.cos(zi.turn),oe=Math.sin(zi.turn);return b.copy($n.home).addScaledVector(of,L*Y-D*oe).addScaledVector(Jt,L*oe+D*Y)}dr(Math.PI,new T).sub($n.home).dot(nn)<0&&of.negate();let Hh=dr(Math.PI,new T);{let _=[];for(let b=0;b<=256;b++)_.push(dr(b/256*Math.PI*2,new T));var Ao=new Nn(new It().setFromPoints(_),new yn({color:10867967,transparent:!0,opacity:0}));u.add(Ao)}let Bs=(()=>{let _=sn.center.clone().sub(nt.center);return{r:_.length(),angle:Math.atan2(_.z,_.x)+30/_.length()}})(),zs=new T(nt.center.x+Bs.r*Math.cos(Bs.angle),0,nt.center.z+Bs.r*Math.sin(Bs.angle)),fr=zs.clone().sub(sn.center).normalize(),af=sn.center.clone().addScaledVector(fr,sn.radius*1.01),lf=Hh.clone().sub(nt.center),L0=Math.hypot(lf.x,lf.z);function D0(_,b){let E=Bs.r*(L0/Bs.r)**_,L=Bs.angle+Math.PI*2*_;return b.set(nt.center.x+E*Math.cos(L),0,nt.center.z+E*Math.sin(L))}function ks(_,b,E,L,D,Y){let oe=D*D,fe=oe*D;return Y.copy(_).multiplyScalar(2*fe-3*oe+1).addScaledVector(b,fe-2*oe+D).addScaledVector(E,-2*fe+3*oe).addScaledVector(L,fe-oe)}let cf=(_,b,E=1e-4)=>_(b+E,new T).sub(_(b-E,new T)).normalize(),HS=.8,Wa=.93,hf=40,Wh=cf(dr,Math.PI),Xh=Hh.clone().addScaledVector(Wh,-hf),uf=cf(D0,1e-4).lerp(nt.center.clone().sub(zs).normalize(),.5).normalize(),df=(()=>{let _=zs.distanceTo(Xh);return{d0:uf.clone().multiplyScalar(_*.9),d1:Wh.clone().multiplyScalar(_*.9)}})();function qh(_,b){if(_<Wa)return ks(zs,df.d0,Xh,df.d1,_/Wa,b);let E=(_-Wa)/(1-Wa);return b.copy(Xh).addScaledVector(Wh,hf*(1-(1-E)**2))}let ff=(()=>{let _=af.distanceTo(zs);return{d0:fr.clone().multiplyScalar(_*.8),d1:uf.clone().multiplyScalar(_*.8)}})(),N0=new T;zt.launch=(()=>{let _=fs.core.pos.clone().sub(sn.center);_.addScaledVector(fr,-_.dot(fr)).normalize();let b=sn.center.clone().addScaledVector(fr,3.5);return{pos:sn.center.clone().addScaledVector(_,15).addScaledVector(fr,1.5).addScaledVector(Jt,2),look:b}})();let U0=new T(.3,.3,.9).normalize(),WS=ni.clone(),Xa=(()=>{let b=[],E=fe=>qh(Math.min(fe+1e-4,1),new T).sub(qh(Math.max(fe-1e-4,0),new T)).normalize(),L=E(0),D=nt.center.clone().sub(zs).normalize();D.addScaledVector(L,-D.dot(L)).normalize();let Y=new yt,oe=new Pt;for(let fe=0;fe<=600;fe++){let xe=E(fe/600);Y.setFromUnitVectors(L,xe),D.applyQuaternion(Y).addScaledVector(xe,-D.dot(xe)).normalize(),L=xe,b.push(new yt().setFromRotationMatrix(oe.makeBasis(new T().crossVectors(L,D),L,D)))}return b})();function pf(_,b){let E=le.clamp(_,0,1)*(Xa.length-1),L=Math.min(Math.floor(E),Xa.length-2);return b.copy(Xa[L]).slerp(Xa[L+1],E-L)}function Yh(_,b,E){let L=b.clone().normalize(),D=nt.center.clone().sub(_).normalize();return D.addScaledVector(L,-D.dot(L)).normalize(),E.setFromRotationMatrix(new Pt().makeBasis(new T().crossVectors(L,D),L,D))}let mf=(()=>{let _=pr(2,new T),b=pr(2.002,new T).sub(_);return Yh(_,b,new yt)})();function F0(_,b,E){return E.copy(U0).applyQuaternion(We.group.quaternion)}let O0=Jt.clone().applyQuaternion(pf(0,new yt).invert());zt.bepiUp=()=>O0.clone().applyQuaternion(We.group.quaternion);function pr(_,b){return _<=1?ks(af,ff.d0,zs,ff.d1,Math.max(_,0)**1.6,b):_<=2?qh(_-1,b):dr(Math.PI+Math.PI*2*(_-2),b)}let To=new T,XS=new Pt,B0=le.degToRad(12),Zh=0,ms=-1,qa=1024,Jh=512,Ya=document.createElement("canvas");Ya.width=qa,Ya.height=Jh;let ki=Ya.getContext("2d"),gf=new ci(Ya),Eo=new fn({uniforms:{surf:{value:null},mask:{value:gf},grav:{value:bt},sun:{value:new T(1,0,0)},show:{value:0},wGrav:{value:0}},vertexShader:`
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
        float seen = texture2D(mask, vUv).a;
        vec3 sharp = texture2D(surf, vUv).rgb, soft = texture2D(surf, vUv, 5.0).rgb;
        vec3 colour = mix(soft * 0.8, sharp, seen) + vec3(1.0, 0.72, 0.4) * 0.07 * seen * (1.0 - wGrav);
        colour = mix(colour, texture2D(grav, vUv).rgb * 0.75, wGrav * seen);
        float light = 0.1 + 0.95 * max(dot(normalize(vNormal), sun), 0.0);
        gl_FragColor = vec4(colour * light, show);
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1}),Za=new ot(new Un($n.radius*1.004,128,64),Eo);Za.visible=!1,k.surface.add(Za);let Ja=new T;function _f(_,b){ja(_,Ja).sub(k.center).applyAxisAngle(lr,-b).normalize();let E=Math.acos(le.clamp(Ja.y,-1,1)),L=Math.atan2(Ja.z,-Ja.x);return L<0&&(L+=Math.PI*2),[L/(Math.PI*2)*qa,E/Math.PI*Jh]}function z0(_){let b=ze.bMap;if(Za.visible=b>.01,!Za.visible)return;Eo.uniforms.show.value=b,Eo.uniforms.wGrav.value=ze.bGrav,Eo.uniforms.surf.value=k.surface.material.map,Eo.uniforms.sun.value.copy(nt.center).sub(k.center).normalize();let E=gs/9;i||(Zh+=_/9*B0*b),(ms<0||E<ms)&&(ki.clearRect(0,0,qa,Jh),ms=E),ki.lineCap="round",ki.strokeStyle="rgba(255, 255, 255, 0.9)",ki.shadowColor="white",ki.shadowBlur=6,ki.lineWidth=16;let L=cu+Zh,D=Math.max(1,Math.ceil((E-ms)*200)),[Y,oe]=_f(ms,L);for(let fe=1;fe<=D;fe++){let[xe,se]=_f(ms+(E-ms)*fe/D,L);Math.abs(xe-Y)<qa/2&&(ki.beginPath(),ki.moveTo(Y,oe),ki.lineTo(xe,se),ki.stroke()),Y=xe,oe=se}ms=E,gf.needsUpdate=!0}let $a=new T,xf=new T;function ja(_,b){$a.copy(fs.mercury.pos).sub(k.center),$a.addScaledVector(Jt,-$a.dot(Jt)).normalize().applyAxisAngle(Jt,le.degToRad(50)),xf.crossVectors(Jt,$a).normalize();let E=Math.PI*2*_,L=1.4*$n.radius*pl();return b.copy(k.center).addScaledVector(Jt,L*Math.cos(E)).addScaledVector(xf,L*Math.sin(E))}let Vs=0,gs=0;function vf(_,b){let E=$e.indexOf("launch"),L=$e.indexOf("bepi"),D=$e.indexOf("arrival");if(E<0||L<0||D<0){if($e.indexOf("mercury")<0)return;let be=["mercury-map","mercury-fields","mercury","mercury-probes"].map(ye=>$e.indexOf(ye)).filter(ye=>ye>=0),Pe=Math.min(...be),Qe=Math.max(...be),st=_>=Pe&&_<=Qe?0:Math.min(Math.abs(_-Pe),Math.abs(_-Qe)),St=1-le.smoothstep(st,.12,.28);if(We.group.visible=St>.001,!We.group.visible){gs=0;return}i||(gs+=b);let et=gs/9,Vt=ja(et,We.group.position);We.group.quaternion.copy(mf);let Rt=Vt.clone();t.push(()=>{We.group.scale.setScalar(un*Ui),_n.draw(Rt,ja,et,.3,St,xo*un*Ui),Ao.visible=!1});return}let Y;if(_<L)Y=le.clamp((_-(E-.6))/(L-E+.6),0,1),Vs=0,gs=0;else{let me=le.clamp((_-L)/jn,0,1);Vs=me*me*(3-2*me),Vs>=1?i||(gs+=b):gs=0,Y=1+Vs+gs/zi.seconds}let oe=pr(Y,We.group.position);pr(Y+.002,To).sub(oe),To.lengthSq()<1e-14&&pr(Y-.002,To).sub(oe).negate(),Y>=1&&Y<=2?(pf(Y-1,We.group.quaternion),We.group.quaternion.slerp(mf,le.smoothstep(Y-1,.5,1))):To.lengthSq()>1e-14&&Yh(oe,To,We.group.quaternion);let fe=le.smoothstep(_,E-.6,E-.45)*(1-le.smoothstep(_,D+.2,D+.7));We.group.visible=fe>.001;let xe=Y<=1?Math.min(Y,.35):Y<=2?.035:Math.min(.22,.02+(Y-2)),se=oe.clone();t.push(()=>{let me=Kf(se);We.group.scale.setScalar(un*Ui*me),_n.draw(se,pr,Y,xe,fe,xo*un*Ui*me);let be=le.smoothstep(h.position.distanceTo($h),8,12);Ao.material.opacity=.25*ze.bOrbit*be,Ao.visible=Ao.material.opacity>.0025})}zt.bepi=()=>({pos:We.group.position.clone().addScaledVector(F0(We.group.position,Vs,N0),42*un*Ui),look:We.group.position.clone()});let $h=Hh.clone().add(dr(0,new T)).multiplyScalar(.5);zt.arrival={pos:$h.clone().addScaledVector(ni,13),look:$h};let Co=new Gt;Co.position.copy(gn.center),Co.rotation.copy(za),u.add(Co);let k0={uSunDir:{value:nt.center.clone().sub(gn.center).normalize()},uRingNormal:{value:Jt.clone().applyEuler(za)},uR:{value:gn.radius}},yf=(_,b)=>(_.onBeforeCompile=E=>{Object.assign(E.uniforms,k0),E.vertexShader=E.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRel;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRel = mat3(modelMatrix) * position;`),E.fragmentShader=E.fragmentShader.replace("#include <common>",`#include <common>
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
          }`).replace("#include <dithering_fragment>",b==="ring"?`#include <dithering_fragment>
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
            }`)},_),Ka=new ot(x(gn.radius),yf(new Bt({map:d("saturnmap.jpg"),shininess:6}),"planet"));Co.add(Ka),R.push([Ka,.05]);let Mf=d("saturnringcolortrans.png");Mf.repeat.set(.5,1);let Sf=new ot(new ga(gn.radius*1.1,gn.radius*2.3,160,1),yf(new Bt({map:Mf,transparent:!0,side:wn,depthWrite:!1,shininess:0}),"ring"));Sf.rotation.x=-Math.PI/2,Co.add(Sf);let bf=(_,b,E)=>le.smoothstep(E,_,b),jh=1.5;function V0(_){let b=D=>2*bf(0,.35*_,D)*(1-bf(.75*_,_,D)),E=Math.asin(jh/2),L=[];for(let D of[1,-1])for(let Y of[1,-1])for(let oe of[E])L.push([D*Math.cos(oe),Y*Math.sin(oe)]);return _0({rInner:.05,omega:jh,N:b,starts:L,length:4.5})}let wf=[{top:.62,low:"#3d3426",high:"#6e5c40"},{top:1,low:"#7a6a52",high:"#c9b48e"}],Af=[{top:.45,low:"#3f2f24",high:"#6f5240"},{top:1,low:"#7d6550",high:"#d2b08c"}],Tf=_=>({inner:.05,outer:1,omega:jh,paths:V0(_),color:[1,.85,.55],width:.009}),mr=ar({loader:f,textures:c,center:gn.center,radius:gn.radius,maps:{map:"saturnmap.jpg"},layers:wf,waves:Tf(wf[0].top),axis:Fs.n,spinRate:0});mr.root.visible=!1,u.add(mr.root);let Ro=ar({loader:f,textures:c,center:Fs.jupiterAt.clone(),radius:tn.radius,maps:{map:"jupitermap.jpg"},layers:Af,waves:Tf(Af[0].top),axis:Fs.n,spinRate:.01});Ro.root.visible=!1,u.add(Ro.root);let Ef=new yt,Cf=new yt,G0=new T;function H0(_,b){let E=ze.sCut>.001;if(mr.root.visible=E,Ro.root.visible=E,Ka.visible=!E,!E)return;let L=22*Math.PI/180;mr.update({dt:_,time:b,camera:h,cut:ze.sCut,cutTurn:L,waves:ze.sWaves,animate:!i}),Ka.getWorldQuaternion(Ef),mr.surface.parent.getWorldQuaternion(Cf),mr.surface.quaternion.copy(Cf.invert().multiply(Ef));let D=le.smootherstep(ze.sCut,0,1);Ro.setCenter(G0.copy(Fs.jupiterAt).addScaledVector(Fs.side,9*gn.radius*(1-D))),Ro.update({dt:_,time:b,camera:h,cut:ze.sCut,cutTurn:-L,waves:ze.sWaves,animate:!i})}let gr=ar({loader:f,textures:c,center:ei.center,radius:ei.radius,maps:{map:"enceladus.jpg",normal:"moonnormal2k.jpg#enceladus"},layers:cr,waves:[{inner:cr[0].top,outer:cr[1].top,omega:1,color:[.85,.95,1]},{inner:cr[0].top,outer:cr[1].top,omega:1,color:[1,.36,.06],speed:4,width:.04}],spinRate:.04});u.add(gr.root);let _r=["europa","ganymede","callisto"].map(_=>{let b=ds.find(L=>L.name===_),E=ar({loader:f,textures:c,center:new T,radius:b.radius,maps:{map:`${_}.jpg`,normal:`moonnormal2k.jpg#row-${_}`},layers:BS[_],spinRate:.03,axis:gt});return E.root.visible=!1,u.add(E.root),{name:_,radius:b.radius,planet:E,at:new T}}),W0=6800*Lt,X0=27e3*Lt,Rf=new yt,Pf=new yt,If=new yt,q0=new yt;for(let _ of _r)_.planet.surface.renderOrder=2;let Po=_r.find(_=>_.name==="ganymede"),Qa=Ve.clone();Qa.uniforms.mask.value=Ze,Qa.uniforms.grav.value=bt;let Io=new ot(new Un(Po.radius*1.004,128,64),Qa);Io.renderOrder=3,Io.visible=!1,Po.planet.surface.add(Io);function Y0(){let _=ze.gCover*(1-le.smoothstep(ze.gRow,.15,.85))*(1-le.smoothstep(ze.gDepth,0,.3));if(Io.visible=Po.planet.root.visible&&_>.01,!Io.visible)return;let b=Qa.uniforms,E=Ve.uniforms;b.show.value=_*(Po.fade??1),b.wGrav.value=E.wGrav.value,b.surf.value=E.surf.value,b.sun.value.copy(E.sun.value)}let Kh=new T,Lo=new T;function Qh(){Lo.copy(zt.juiceMap().pos).sub(Be).normalize(),Kh.crossVectors(gt,Lo).normalize()}zt.row=()=>(Qh(),{pos:Be.clone().addScaledVector(Lo,X0),look:Be.clone()}),zt.probe=()=>(Qh(),{pos:Be.clone().addScaledVector(Lo,5.2*ds[2].radius),look:Be.clone()});let el=11,tl=0,Lf=-1,xr=new Gt;xr.visible=!1,u.add(xr);let eu=9,nl=new It;nl.setAttribute("position",new it(new Float32Array(eu*4*3),3));let Df=new ro(nl,new yn({color:13161184,transparent:!0,opacity:0,depthWrite:!1})),il=Sn([1.3,1.75,2.4],4,6280432),Nf=(_,b,E,L=3)=>{let D=E?new _a({color:b,dashSize:.05,gapSize:.04,transparent:!0,opacity:0,depthWrite:!1}):new yn({color:b,transparent:!0,opacity:0,depthWrite:!1}),Y=new Gt;for(let oe=0;oe<L;oe++){let fe=new It;fe.setAttribute("position",new it(new Float32Array(_*3),3)),Y.add(new Nn(fe,D))}return Y.material=D,Y},tu=(_,b)=>Nf(129,_,b,b?1:3),sl=tu(8370431),nu=tu(10134445),vr=tu(16777215,!0),Uf=(_,b)=>Nf(41,_,b,b?1:3),rl=Uf(8370431),Gs=Uf(16777215,!0);xr.add(Df,il,sl,nu,vr,rl,Gs);let Do={items:[...document.querySelectorAll("[data-probe]")],groups:[...document.querySelectorAll("[data-probe-chart]")],cursor:document.querySelector("[data-probe-cursor]")};{let _=L=>Array.from({length:121},(D,Y)=>`${(Y*2.5).toFixed(1)},${L(Y/120).toFixed(1)}`).join(" "),b=(L,D)=>{let Y=document.querySelector(L);Y&&Y.setAttribute("points",_(D))},E=(L,D=0)=>Math.sin(2*Math.PI*(2*L-D));b("[data-probe-line='ext']",L=>32-24*E(L)),b("[data-probe-line='ind']",L=>32+13*E(L,.06)),b("[data-probe-line='tideOcean']",L=>32-25*E(L+.125)),b("[data-probe-line='tideSolid']",L=>32-4*E(L+.125)),b("[data-probe-line='libOcean']",L=>32-25*E(L)),b("[data-probe-line='libSolid']",L=>32-7*E(L))}let ol=0,Z0=new T,J0=new T,$0=new T,j0=new T,iu=new yt,YS=new Pt;function K0(_){let b=ze.mProbe>.001||$e.indexOf("ocean-probes")<0,E=$e.indexOf(b?"mercury-probes":"ocean-probes"),L=b?ze.mProbe:ze.gProbe,D=b?k.center:Be,Y=b?Jt:gt,oe=b?nt.center.clone().sub(k.center).normalize():ut;E>=0&&Math.abs(vt-E)<.5&&!i?tl+=_:E>=0&&Math.abs(vt-E)>=.5&&(tl=0),xr.visible=L>.01;let fe=Math.floor(tl/el)%3,xe=tl%el,se=L*le.smoothstep(xe,0,.8)*(1-le.smoothstep(xe,el-.8,el)),me=[0,1,2].map(et=>et===fe?se:0);fe!==Lf&&(Lf=fe,Do.items.forEach(et=>et.classList.toggle("active",+et.dataset.probe===fe)),Do.groups.forEach(et=>et.style.display=+et.dataset.probeChart===fe?"":"none"));let be=b?$n.radius*pl():ds[2].radius;xr.position.copy(D);let Pe=Z0.copy(h.position).sub(D).normalize(),Qe=J0.crossVectors(Y,Pe).normalize(),st=$0.crossVectors(Pe,Qe).normalize(),St=2*Math.PI*xe/4.4;{let et=j0.copy(st).multiplyScalar(-1).addScaledVector(Qe,.55*Math.sin(St)).normalize(),Vt=new T().crossVectors(et,Pe).normalize(),Rt=nl.attributes.position,ye=3.4*be;for(let at=0;at<eu;at++){let Et=(at-(eu-1)/2)*.5*be,Ht=Math.sqrt(Math.max(0,(1.08*be)**2-Et*Et)),ve=Vt.clone().multiplyScalar(Et);[[-ye,-Ht],[Ht,ye]].forEach(([Nt,en],on)=>{let Xe=ve.clone().addScaledVector(et,Nt),Ot=ve.clone().addScaledVector(et,en);Rt.setXYZ(at*4+on*2,Xe.x,Xe.y,Xe.z),Rt.setXYZ(at*4+on*2+1,Ot.x,Ot.y,Ot.z)})}Rt.needsUpdate=!0,nl.computeBoundingSphere(),Df.material.opacity=.75*me[0];let Ke=-Math.sin(St-.35);il.quaternion.setFromUnitVectors(lr,Qe.clone().multiplyScalar(Math.sign(Ke)||1)),il.scale.setScalar(be),il.userData.material.opacity=.9*me[0]*Math.abs(Ke)}{let et=Qe.clone().multiplyScalar(Math.sign(oe.dot(Qe))||1);al=et,Ff=be;let Vt=new T().crossVectors(Pe,et).normalize(),Rt=2*Math.PI*xe/5.5,ye=(Ke,at)=>Ke.children.forEach((Et,Ht)=>{let ve=Et.geometry.attributes.position;for(let pt=0;pt<=128;pt++){let Nt=pt/128*Math.PI*2,en=Math.cos(Nt),on=(1.06+.004*(Ht-1))*be*(1+at*(1.5*en*en-.5));ve.setXYZ(pt,on*en*et.x+on*Math.sin(Nt)*Vt.x,on*en*et.y+on*Math.sin(Nt)*Vt.y,on*en*et.z+on*Math.sin(Nt)*Vt.z)}ve.needsUpdate=!0,Et.geometry.computeBoundingSphere()});ye(sl,.16+.09*Math.sin(Rt)),ye(nu,.02+.012*Math.sin(Rt)),ye(vr,0),vr.children[0].computeLineDistances(),vr.material.dashSize=.06*be,vr.material.gapSize=.05*be,sl.material.opacity=me[1],nu.material.opacity=.9*me[1],vr.material.opacity=.45*me[1]}{let et=.3*Math.sin(2*Math.PI*xe/5.5)*Math.min(1,me[2]/Math.max(L,.001)*1.2);su=b?0:et,Bf=b?et:0,iu.setFromUnitVectors(lr,Y);let Vt=Pe.clone().applyQuaternion(iu.clone().invert()),Rt=Math.atan2(-Vt.z,Vt.x),ye=(Ke,at)=>Ke.children.forEach((Et,Ht)=>{let ve=Et.geometry.attributes.position;for(let pt=0;pt<=40;pt++){let Nt=.12*Math.PI+.76*Math.PI*pt/40,en=Rt-1.05+at+.004*(Ht-1),on=new T(Math.sin(Nt)*Math.cos(en),Math.cos(Nt),-Math.sin(Nt)*Math.sin(en)).multiplyScalar(1.006*be).applyQuaternion(iu);ve.setXYZ(pt,on.x,on.y,on.z)}ve.needsUpdate=!0,Et.geometry.computeBoundingSphere()});ye(rl,et),ye(Gs,0),Gs.children[0].computeLineDistances(),Gs.material.dashSize=.05*be,Gs.material.gapSize=.04*be,rl.material.opacity=me[2],rl.material.depthTest=Gs.material.depthTest=!0,Gs.material.opacity=.85*me[2],Of=b?0:me[2],zf=b?me[2]:0}if(Q0(me[1]),Do.cursor&&L>.01){let et=xe%5.5/5.5*150+0;Do.cursor.setAttribute("x1",et.toFixed(1)),Do.cursor.setAttribute("x2",et.toFixed(1))}if(!b)for(let et of _r)et.name!=="ganymede"&&L>.9&&(et.planet.root.visible=!1);ru=b?"Sun":"Jupiter"}let Ff=1,su=0,Of=0,al=null,Bf=0,zf=0,ru="Jupiter",yr=document.createElement("div");yr.style.cssText="position:fixed;left:0;top:0;pointer-events:none;color:#cbd5e1;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;opacity:0;z-index:2;transition:opacity 0.3s",document.body.append(yr);function Q0(_){if(!al||_<.02){yr.style.opacity="0";return}let E=new T().fromBufferAttribute(sl.children[0].geometry.attributes.position,0).applyMatrix4(xr.matrixWorld).addScaledVector(al,.12*Ff).project(h),L=Math.sign(al.dot(new T(1,0,0).applyQuaternion(h.quaternion)))<0;yr.textContent=L?`\u2190 ${ru}`:`${ru} \u2192`,yr.style.opacity=_.toFixed(2);let D=Fi.getBoundingClientRect();yr.style.transform=`translate(${D.left+(E.x+1)/2*D.width}px, ${D.top+(1-E.y)/2*D.height}px) translate(${L?"-100%":"0"}, -50%)`}let ou=!1;function eg(){let _=ze.gRow,b=_>.001;b||(ou=!1);for(let[E,L]of _r.entries()){let D=ke.find(oe=>oe.name===L.name);if(L.planet.root.visible=b,D.mesh.visible=!b,!b)continue;Qh();let Y=Be.clone().addScaledVector(Kh,(E-1)*W0);if(L.name==="ganymede")L.at.copy(Be),L.fade=1,(_<.3||!ou)&&(ou=!0,D.mesh.getWorldQuaternion(Rf),Po.planet.surface.parent.getWorldQuaternion(Pf),If.copy(Pf.invert().multiply(Rf)),ol=0);else{let oe=Y.clone().addScaledVector(Lo,-4e5*Lt).addScaledVector(Kh,(E-1)*15e4*Lt);L.at.copy(oe).lerp(Y,1-(1-le.clamp(_,0,1))**3),L.fade=1}L.planet.setCenter(L.at)}}{let _=gr.surface.material.normalMap;_.wrapS=_.wrapT=$s,_.repeat.set(6,3),gr.surface.material.normalScale.set(.4,.4)}let ll={low:new Ye(cr[1].low),high:new Ye(cr[1].high),hotLow:new Ye("#4a1d3a"),hotHigh:new Ye("#b4532a")},kf=GS(ei.center,ei.radius);u.add(kf.points);let Vf=[[.2,1],[.47,.5],[.66,.8],[.85,.35]],Gf=_=>.06+.04*_+Vf.reduce((b,[E,L])=>b+L/(1+((_-E)/.022)**2),0),au=[.06,.2,.33,.47,.56,.66,.76,.85,.95],tg=_=>{let b=au.length-1,E=Math.floor(_/2.4)%(2*b),[L,D]=E<b?[E,E+1]:[2*b-E,2*b-E-1];return le.lerp(au[L],au[D],le.smoothstep(_/2.4%1,.55,1))},No={curve:document.querySelector("[data-response]"),sweep:document.querySelector("[data-sweep]")};if(No.curve){let _=[];for(let b=0;b<=300;b++)_.push(`${b},${(88-80*Math.min(Gf(b/300),1.05)).toFixed(1)}`);No.curve.setAttribute("points",_.join(" "))}let Ki={date:document.querySelector(".journey-date"),passes:document.querySelector(".journey-passes"),labels:document.querySelector(".journey-labels"),chapters:[...document.querySelectorAll(".journey-chapters a")]},ZS={launch:"bepi",bepi:"bepi",arrival:"bepi",mercury:"bepi","mercury-orbit":"bepi","juice-cruise":"juice",jupiter:"juice",juice:"juice","juice-map":"juice","juice-gravity":"juice","juice-field":"juice","ocean-worlds":"icy","ocean-depth":"icy",enceladus:"enceladus","enceladus-ocean":"enceladus","enceladus-resonance":"enceladus",sun:"sun",end:"sun"},ng={"bepi-pass":"mercury","mercury-map":"mercury","mercury-fields":"mercury","mercury-probes":"mercury","juice-pass":"jupiter","juice-tour":"jupiter",mercury:"mercury",ganymede:"jupiter","ocean-worlds":"jupiter","ocean-depth":"jupiter","ocean-probes":"jupiter","enceladus-intro":"beyond","enceladus-ocean":"beyond","enceladus-resonance":"beyond","enceladus-return":"beyond","saturn-modes":"beyond",sun:"beyond",end:"beyond"},ig={mercury:"mercury",jupiter:"jupiter",beyond:"beyond"},sg=[...document.querySelectorAll(".journey-parts")],Uo=()=>ze.xMap,rg=()=>ze.jOrbits*(Je?1-Je.ramp*le.smoothstep(Je.clock,.004,.025):1)*(1-le.smoothstep(xi,.004,.025)),og=_=>{let b=new T;return()=>ke.find(E=>E.name===_).mesh.getWorldPosition(b)},ag=[["Sun",()=>nt.center,"-50%, 60%",Uo],["Mercury",()=>cl,"-115%, -50%",Uo],["Earth",()=>sn.center,"15%, -50%",Uo],["Jupiter",()=>tn.center,"-50%, -170%",Uo],["Saturn",()=>gn.center,"-50%, -170%",Uo],...["Io","Europa","Ganymede","Callisto"].map(_=>[_,og(_.toLowerCase()),"-50%, -190%",rg,"moon"]),..._r.map(_=>[_.name[0].toUpperCase()+_.name.slice(1),()=>_.at.clone().addScaledVector(gt,-_.radius*1.25),"-50%, 0%",()=>le.smoothstep(ze.gRow,.7,1)*(1-ze.gProbe),"moon"])].map(([_,b,E,L,D])=>{let Y=document.createElement("span");return Y.textContent=_,D&&(Y.className=D),Ki.labels?.append(Y),{el:Y,at:b,anchor:E,when:L}}),Mr=new T,Hf=null,Wf="";function lg(_){if(!Ki.date)return;let b=_>=0?ze.jOrbits*(1-Ar)*(Je?Je.ramp:1):0;if(Ki.date.style.opacity=b.toFixed(2),b<.01)return;let E=je(_);E!==Wf&&(Ki.date.firstElementChild.textContent=Wf=E)}let ln={panel:document.querySelector(".journey-tour"),range:document.querySelector(".journey-tour-range"),marks:document.querySelector(".journey-tour-marks"),open:document.querySelector(".journey-tour-open"),close:document.querySelector(".journey-tour-close"),milestones:[...document.querySelectorAll(".journey-tour-milestone")]},lu=()=>{};if(ln.panel&&ln.range&&ln.open){let D=function(){E=(ce.K-1)*ce.step,ln.range.max=String(E);let se=me=>`${100*me/E}%`;for(let me of[2032,2033,2034]){let be=document.createElement("span");be.className="year",be.style.left=se(_(`${me}-01-01`)),be.textContent=me,ln.marks.append(be)}for(let me of ln.milestones){me.day=_(me.dataset.date);let be=document.createElement("span");be.className="dot",be.style.left=se(me.day),ln.marks.append(be),me.dot=be}ln.open.hidden=!1,L=!0},oe=function(){let se=Number(ln.range.value);Je&&!Je.closing&&(Je.target=b(se)),ln.range.setAttribute("aria-valuetext",je(se/ce.step)),lu()},fe=function(){if(!L)return;let se=Math.max(0,Va(vt));Je={clock:Je?.clock??se,target:se,ramp:Je?.ramp??0,closing:!1,back:se},document.documentElement.classList.add("journey-touring"),ln.panel.hidden=!1,ln.range.value=String(y(Je.back)*ce.step),oe(),ln.range.focus({preventScroll:!0})},xe=function(){Je&&(Je.closing=!0,Je.target=Je.back,document.documentElement.classList.remove("journey-touring"),ln.panel.hidden=!0,ln.open.focus({preventScroll:!0}))},_=se=>Date.parse(se)/864e5+24405875e-1-ce.jd0,b=se=>{let me=le.clamp(se/ce.step,0,ce.K-1),be=Math.min(Math.floor(me),ce.K-2);return le.lerp(ce.cum[be],ce.cum[be+1],me-be)},E=0,L=!1,Y=setInterval(()=>{ce&&(clearInterval(Y),D())},300);lu=()=>{if(!L)return;let se=Number(ln.range.value),me=ln.marks.clientWidth;for(let[be,Pe]of ln.milestones.entries()){let Qe=Math.abs(se-Pe.day);(be===0&&se<Pe.day||be===ln.milestones.length-1&&se>Pe.day)&&(Qe=0);let st=1-le.smoothstep(Qe,25,70);Pe.style.opacity=st.toFixed(2),Pe.style.visibility=st>.01?"visible":"hidden",Pe.dot.classList.toggle("near",st>.5);let St=Pe.offsetWidth/2,et=Pe.day/E*me;Pe.style.left=`${le.clamp(et,St,me-St)}px`}},ln.range.addEventListener("input",oe),addEventListener("resize",lu),ln.open.addEventListener("click",fe),ln.close?.addEventListener("click",xe),addEventListener("keydown",se=>{se.key==="Escape"&&Je&&!Je.closing&&xe()}),addEventListener("wheel",se=>{if(!Je||Je.closing)return;se.preventDefault();let me=(se.deltaX+se.deltaY)*(se.deltaMode===1?16:1)*.12;ln.range.value=String(le.clamp(Number(ln.range.value)+me,0,E)),oe()},{passive:!1})}let Xf="";function cg(_,b){if(!Ki.passes)return;let E=_>.02?b*(1-Ar):0;if(Ki.passes.style.opacity=E.toFixed(2),E<.01)return;let L=Math.round(_*Ft),D=Math.floor(L/24),Y=`Pass ${Math.min(Hn*V.length,Math.floor(_)+1)} \xB7 ${D?`${D} d `:""}${L%24} h`;Y!==Xf&&(Ki.passes.firstElementChild.textContent=Xf=Y)}function hg(_){let b=ng[$e[Math.round(_)]]??"earth",E=ig[b]??"earth";if(b!==Hf){for(let D of Ki.chapters)D.setAttribute("aria-current",String(D.dataset.chapter===E||D.dataset.part===b));for(let D of sg){let Y=D.dataset.act===E;D.classList.toggle("open",Y),D.inert=!Y}Hf=b}let L=Fi.getBoundingClientRect();for(let D of ag){let Y=D.when();if(Y<.01){D.el.style.opacity="0";continue}Mr.copy(D.at()).project(h);let oe=Mr.z<1&&Math.abs(Mr.x)<1.1&&Math.abs(Mr.y)<1.1;D.el.style.opacity=oe?Y.toFixed(2):"0",D.el.style.transform=`translate(${(Mr.x+1)/2*L.width}px, ${(1-Mr.y)/2*L.height}px) translate(${D.anchor})`}}let $e=Uh.map(_=>_.dataset.stop),Wn=$e.map((_,b)=>({def:fs[_]??fs.earth,cardOnLeft:b%2===0,fx:Object.fromEntries(rf.map(E=>[E,OS[_]?.[E]??0])),pos:new T,posNarrow:new T,lookWide:new T,lookNarrow:new T})),cl=new T,cu=0,qf=new T,ug=new T;function dg(){for(let _ of Wn){let b=_.def,E=b.pos,L=b.look;b.follow&&({pos:E,look:L}=b.follow()),_.pos.copy(E),(_.target??(_.target=new T)).copy(L),qf.copy(L).sub(E).normalize(),ug.crossVectors(qf,Jt).normalize(),_.lookWide.copy(L),_.lookNarrow.copy(L),_.posNarrow.copy(L).lerp(E,b.narrowBack??1.15)}}let Kn=innerWidth<768;function Sr(){let _=scrollY+innerHeight/2,b=Uh.map(E=>Kn?E.offsetTop+innerHeight/2:E.offsetTop+E.offsetHeight/2);if(_<=b[0])return 0;for(let E=0;E<b.length-1;E++)if(_<b[E+1]){let L=(_-b[E])/(b[E+1]-b[E]);return E+(Kn?le.smoothstep(L,.35,.95):le.smoothstep(L,.15,.85))}return b.length-1}let ze=Object.fromEntries(rf.map(_=>[_,0]));function hu(_){let b=Math.min(Math.floor(_),Wn.length-1),E=Math.min(b+1,Wn.length-1),L=_-b,D=Fa()[$e[b]];D&&E!==b&&(L=Math.max(0,(L-D[0])/(1-D[0])));for(let Y of rf){let oe=Wn[b].fx[Y],fe=Wn[E].fx[Y],xe=fe<oe?le.smoothstep(L,0,.5):fe>oe?le.smoothstep(L,.5,1):L;ze[Y]=le.lerp(oe,fe,xe)}}let rn=new T,ii=new T,uu=document.querySelector(".landing"),Fo=document.documentElement,si=uu&&!location.hash?1:0,Hs=si,Yf=4;si&&(Fo.classList.add("landing-wide","landing-on","landing-hold"),"scrollRestoration"in history&&(history.scrollRestoration="manual"),scrollTo({top:0,behavior:"instant"})),uu?.querySelector("[data-launch]")?.addEventListener("click",()=>{Hs!==0&&(Hs=0,i&&(si=0),Fo.classList.remove("landing-on","landing-wide"))}),document.querySelector(".site-header .brand")?.addEventListener("click",_=>{uu&&(_.preventDefault(),Hs!==1&&(wi=null,Au(()=>{Fo.classList.add("instant","landing-hold","landing-wide","landing-on"),scrollTo({top:0,behavior:"instant"}),vt=Sr(),bi=0,Rr=!0,Hs=si=1,history.replaceState(null,"",location.pathname),requestAnimationFrame(()=>requestAnimationFrame(()=>Fo.classList.remove("instant")))})))});function fg(_){si!==Hs&&(si=Hs?Math.min(1,si+_/Yf):Math.max(0,si-_/Yf),Hs===0&&si<.3&&Fo.classList.remove("landing-hold"))}let br=new T,Zf=new T,du=new T,Jf=new T;function pg(){let _=sn.radius,b=1.55*_;br.copy(rn).sub(sn.center).normalize(),Zf.set(0,1,0).addScaledVector(br,-br.y).normalize();let E=Math.asin(_/b)+.22;du.copy(sn.center).addScaledVector(br,b),Jf.copy(du).addScaledVector(br,-Math.cos(E)*_).addScaledVector(Zf,Math.sin(E)*_);let L=1-si,D=L*L*L*(L*(6*L-15)+10),Y=rn.distanceTo(sn.center),oe=Math.exp(le.lerp(Math.log(b),Math.log(Y),D)),fe=Jf.clone().sub(du).normalize(),xe=ii.clone().sub(rn),se=xe.length();xe.normalize();let me=fe.lerp(xe,D).normalize();rn.copy(sn.center).addScaledVector(br,oe),ii.copy(rn).addScaledVector(me,le.lerp(_,se,D))}let di=new T,wr=new T,Mi=new yt,Si=new yt,Ar=0,_s=0,fu=!1,Tr=null,pu=!1,hl=null,Oo=0,mu=-1,gu=-1,_u=!1,$f=(_,b)=>Math.max(_,b)/Math.min(_,b)>3e3&&Math.min(_,b)<.02,jf=!1,mg=(_,b)=>jf&&$f(_,b),Er=0,ul=1;function Kf(_){if(Er<.001)return 1;let b=h.position.distanceTo(_);return 1+Er*(Math.max(1,b/ul)**.75-1)}let xs=new T;function Qf(_){Ar=0,_s=0,Oo=0,_u=!1,Er=0,fu=!1,Tr=null;let b=Math.max(ze.gRow,ze.gCover);b>.001&&(Tr=h.up.clone().lerp(gt,b).normalize()),ze.sCut>.001&&(Tr=(Tr??h.up.clone()).lerp(Fs.n,ze.sCut).normalize()),pu=!1,hl=null,dg();let E=Math.min(Math.floor(_),Wn.length-1),L=Math.min(E+1,Wn.length-1),D=_-E;Ws[$e[E]]&&E>0&&L>E?(E-=1,D=(1+D)/2):Ws[$e[L]]&&L+1<Wn.length&&(L+=1,D/=2);let Y=Fa()[$e[E]];if(Y&&L!==E){let[ye,Ke]=Y;if(D<ye){rn.copy(Kn?Wn[E].posNarrow:Wn[E].pos),ii.copy(Kn?Wn[E].lookNarrow:Wn[E].lookWide),Ke?Ar=le.smoothstep(D,0,.06)*(1-le.smoothstep(D,ye-.04,ye)):pu=!0,fu=Ke,Tr=$e[E]==="bepi"?zt.bepiUp():null;return}D=(D-ye)/(1-ye)}let oe=Wn[E],fe=Wn[L],xe=Kn?oe.posNarrow:oe.pos,se=Kn?fe.posNarrow:fe.pos,me=Kn?oe.lookNarrow:oe.lookWide,be=Kn?fe.lookNarrow:fe.lookWide,Pe=xe.distanceTo(oe.target),Qe=se.distanceTo(fe.target),st=xe.distanceTo(se);if(ce&&!Je&&$e[E]==="jupiter"&&$e[L]==="juice"){let ye=Be,Ke=xe.clone().sub(ye),at=se.clone().sub(ye),Et=Math.exp(le.lerp(Math.log(Ke.length()),Math.log(at.length()),I(D)));Ke.normalize().applyQuaternion(new yt().slerp(new yt().setFromUnitVectors(Ke.clone().normalize(),at.normalize()),I(D))),rn.copy(ye).addScaledVector(Ke,Et),ii.copy(me).lerp(ye,le.smoothstep(D,0,.3)),hl={d0:xe.distanceTo(ye),d1:se.distanceTo(ye)};return}if($e[E]==="mercury"&&$e[L]==="juice-cruise"){if(xs.copy(be).sub(xe).normalize(),Er=1,ul=Qe,D<.22){let Ht=I(D/.22);rn.copy(xe),di.copy(me).sub(xe);let ve=Math.exp(le.lerp(Math.log(di.length()),Math.log(be.distanceTo(xe)),Ht));Mi.setFromUnitVectors(di.normalize(),xs),Si.identity().slerp(Mi,Ht),ii.copy(di.applyQuaternion(Si)).multiplyScalar(ve).add(xe);return}let Ke=(D-.22)/(1-.22),at=xe.distanceTo(se),Et=Ke<.5?Pe*((at/(2*Pe)+1)**(Ke/.5)-1):at-Qe*((at/(2*Qe)+1)**((1-Ke)/.5)-1);rn.copy(xe).addScaledVector(xs,Et),ii.copy(be),_s=le.smoothstep(Ke,.12,.3)*(1-le.smoothstep(Ke,.7,.88)),Ar=_s;return}let St=!1;if(St){let ye=Pe<Qe,Ke=ye?D:1-D;Er=1-le.smoothstep(Ke,.5,.9),ul=Math.min(Pe,Qe);let at=D<.5?Pe*((st/(2*Pe)+1)**(D/.5)-1):st-Qe*((st/(2*Qe)+1)**((1-D)/.5)-1),Et=ye?be:me,Ht=ye?xe:se,ve=ye?se:xe,pt=Et.clone().sub(Ht).normalize().multiplyScalar(st*.7),Nt=Et.clone().sub(ve).normalize().multiplyScalar(st*.7);ye?ks(xe,pt,se,Nt,at/st,rn):ks(xe,Nt.negate(),se,pt.negate(),at/st,rn);let en=(ye?oe:fe).target,on=ye?be:me,Xe=en.clone().sub(rn),Ot=on.clone().sub(rn),Rn=le.smoothstep(Ke,.04,.4),Pr=Math.exp(le.lerp(Math.log(Xe.length()),Math.log(Ot.length()),Rn));Mi.setFromUnitVectors(Xe.normalize(),Ot.normalize()),Si.identity().slerp(Mi,Rn),ii.copy(Xe.applyQuaternion(Si)).multiplyScalar(Pr).add(rn);return}if($f(Pe,Qe)&&!jf&&!St){let ye=Pe<Qe,Ke=ye?D:1-D,at=(ye?oe:fe).target,Et=ye?xe:se,Ht=ye?se:xe,ve=ye?be:me;di.copy(Et).sub(at),wr.copy(Ht).sub(at);let pt=di.length(),Nt=wr.length();Mi.setFromUnitVectors(di.normalize(),wr.normalize()),Si.identity().slerp(Mi,le.smoothstep(Ke,.05,.95));let en=Math.exp(le.lerp(Math.log(pt),Math.log(Nt),I(Ke)));rn.copy(at).addScaledVector(di.applyQuaternion(Si),en);let on=at.clone().sub(rn),Xe=ve.clone().sub(rn),Ot=le.smoothstep(Ke,.62,1),Rn=le.lerp(on.length(),Xe.length(),Ot);Mi.setFromUnitVectors(on.normalize(),Xe.normalize()),Si.identity().slerp(Mi,Ot),ii.copy(on.applyQuaternion(Si)).multiplyScalar(Rn).add(rn),Er=1-le.smoothstep(Ke,.8,1),ul=Math.min(Pe,Qe);return}if(mg(Pe,Qe)){let ye=D>=.5;rn.copy(ye?se:xe),ii.copy(ye?be:me),Oo=le.smoothstep(D,.25,.45)*(1-le.smoothstep(D,.55,.75)),mu=ye?L:E,_u=!0;return}di.copy(me).sub(xe),wr.copy(be).sub(se);let et=di.length(),Vt=wr.length();Mi.setFromUnitVectors(di.normalize(),wr.normalize());let Rt=ye=>{Si.identity().slerp(Mi,ye),ii.copy(di).applyQuaternion(Si).multiplyScalar(Math.exp(le.lerp(Math.log(et+1e-9),Math.log(Vt+1e-9),ye))).add(rn)};if(st<4*Math.min(Pe,Qe))rn.lerpVectors(xe,se,D),Mi.angleTo(Si.identity())<.6?ii.lerpVectors(me,be,D):Rt(le.smoothstep(D,0,1));else{let ye=D,Ke=ye<.5?Pe*((st/(2*Pe)+1)**(ye/.5)-1):st-Qe*((st/(2*Qe)+1)**((1-ye)/.5)-1);Ar=le.smoothstep(D,.12,.3)*(1-le.smoothstep(D,.7,.88)),rn.lerpVectors(xe,se,Ke/st),st>5e3&&(_s=le.smoothstep(D,.2,.36)*(1-le.smoothstep(D,.64,.8)),xs.copy(se).sub(xe).normalize()),Rt(le.smoothstep(D,.04,.96))}}let Ws={"bepi-pass":{name:"BepiColombo",note:"ESA \xB7 JAXA, on its way to Mercury"},"juice-pass":{name:"JUICE",note:"ESA, on its way to Jupiter"}},vs=document.createElement("div");vs.className="journey-flyby",vs.style.cssText="position:fixed;left:0;top:0;pointer-events:none;color:#e5e7eb;font-size:0.8rem;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;opacity:0;z-index:2;text-shadow:0 0 6px #000",document.body.append(vs);let dl=1/0,ys=new T,ep=new T,tp=new T,xu=new T;function gg(_){dl=1/0;let b=Math.floor(_),E=_-b,L=Ws[$e[b]]?$e[b]:Ws[$e[b+1]]?$e[b+1]:null,D=L===$e[b]?E:E-1,Y=Ws[L];if(!Y||Math.abs(D)>=.6){vs.style.opacity="0";return}let oe=L==="bepi-pass",fe=oe?We.group:ge,xe=oe?xo*un*Ui:_o*un*ui;t.push(()=>{h.updateMatrixWorld(),ep.set(0,0,-1).applyQuaternion(h.quaternion),tp.set(1,0,0).applyQuaternion(h.quaternion),xu.set(0,1,0).applyQuaternion(h.quaternion);let se=I(Math.min(Math.abs(D)/.6,1)),me=xe*(D<0?le.lerp(5.5,30,se):le.lerp(5.5,-10,se)),be=xe*le.lerp(Kn?.3:.95,2.6,se),Pe=i?0:.06*xe*Math.sin(performance.now()/1600);if(ys.copy(h.position).addScaledVector(ep,me).addScaledVector(tp,be).addScaledVector(xu,-.3*xe+Pe),fe.position.copy(ys),fe.visible=!0,oe)Yh(ys,xs,We.group.quaternion),We.group.scale.setScalar(un*Ui),_n.draw(ys,ja,0,0,0,xe);else{let et=nt.center.clone().sub(ys).normalize(),Vt=new T().crossVectors(gt,et).normalize(),Rt=new T().crossVectors(et,Vt);ge.quaternion.setFromRotationMatrix(kt.makeBasis(Vt,Rt,et)),ge.scale.setScalar(un*ui),At.draw(ys,_i,0,0,0,xe)}dl=Math.max(h.position.distanceTo(ys)-xe,.2*xe);let Qe=ys.clone().addScaledVector(xu,-.8*xe).project(h),st=1-le.smoothstep(Math.abs(D),.3,.45);vs.innerHTML=`${Y.name} <span style="opacity:.6;text-transform:none;letter-spacing:0">\xB7 ${Y.note}</span>`,vs.style.opacity=me>0&&!Kn?st.toFixed(3):"0";let St=Fi.getBoundingClientRect();vs.style.transform=`translate(${St.left+(Qe.x+1)/2*St.width}px, ${St.top+(1-Qe.y)/2*St.height}px) translate(-50%, 0)`})}let vu=new T;function _g(){return[[sn.center,sn.radius],[k.center,$n.radius*pl()*1.5],[nt.center,nt.radius],[tn.center,tn.radius],[gn.center,gn.radius*2.3],[ei.center,ei.radius],[Be,Ie.radius*Ge()],[ge.position,ge.visible?_o*un*ui:0],[Ba.center,Ba.radius],[We.group.position,We.group.visible?xo*un*Ui:0]]}function np(_){let b=1/0;for(let[E,L]of _g())vu.copy(_).sub(E),vu.length()<1.12*L&&_.copy(E).addScaledVector(vu.normalize(),1.12*L),b=Math.min(b,Math.max(_.distanceTo(E)-L,.02*L));return b}let xg=.7,vg=Math.log(10),Xs=.01,yu=1.1,yg=3.5,Mg=.2,Sg=.12,Qi=null,fl=!0;function bg(){fl=!1;let _=Math.round((Wn.length-1)/Xs)+1,b=[],E=[],L=[],D=Je;Je=null;for(let se=0;se<_;se++){let me=se*Xs;hu(me),Ga(me),vf(me,0),Qf(me);let be=rn.clone(),Pe=np(be);We.group.visible&&(Pe=Math.min(Pe,be.distanceTo(We.group.position))),ge.visible&&(Pe=Math.min(Pe,be.distanceTo(ge.position))),b.push(ii.clone().sub(be).normalize()),L.push(_u),E.push(Math.log(Math.max(Pe,1e-9)))}Je=D,t.length=0;let Y=new Float32Array(_);for(let se=0;se<_;se++){let me=Math.max(0,se-1),be=Math.min(_-1,se+1),Pe=(be-me)*Xs,Qe=Math.max(b[me].angleTo(b[be])/Pe/xg,Math.abs(E[be]-E[me])/Pe/vg);Y[se]=le.clamp(Qe,1/yu,40),L[se]&&(Y[se]=1/.45)}Qi=new Float32Array(_);let oe=new Float32Array(_);for(let se=0;se<_;se++){let me=0,be=0;for(let Pe=Math.max(0,se-3);Pe<=Math.min(_-1,se+3);Pe++)me+=Y[Pe],be++;oe[se]=me/be}let fe=1/Xs;for(let se=0;se<_-1;se+=fe){let me=0;for(let Pe=se;Pe<Math.min(se+fe,_);Pe++)me+=oe[Pe]*Xs;let be=Math.max(1,me/yg);for(let Pe=se;Pe<Math.min(se+fe,_);Pe++)Qi[Pe]=Math.min(yu,be/oe[Pe])}Qi[_-1]=Qi[_-2];let xe=Fa();for(let se=0;se<_;se++){let me=se*Xs,be=Math.floor(me),Pe=xe[$e[be]];Pe&&me-be<Pe[0]+.05&&(Qi[se]=Math.min(Qi[se],Pe[1]?Mg:Sg))}}let ip=_=>Math.min(Qi?Qi[le.clamp(Math.round(_/Xs),0,Qi.length-1)]:yu,wg(_));function wg(_){let b=Math.floor(_),E=_-b;return Ws[$e[b]]&&E<.6||Ws[$e[b+1]]&&E>.4?.26:1/0}function Mu(){Kn!==innerWidth<768&&(fl=!0),Kn=innerWidth<768;let _=Fi.clientWidth||innerWidth,b=Fi.clientHeight||innerHeight;r.setSize(_,b,!1),h.aspect=_/b,h.fov=h.aspect<1?52:45,h.updateProjectionMatrix(),sp&&r.render(u,h),sp=!0}let sp=!1;new ResizeObserver(Mu).observe(Fi),Mu();let pl=()=>1+($n.enlarge-1)*ze.mOrbit,Su=0,ml=0;function rp(_,b){let E=ze.mOrbit;E<.001?Su=0:i||(Su+=_*Math.PI*2*E/ti.secondsPerOrbit);let L=Su*le.smoothstep(E,0,1);E0(L,cl),i||(ml=(ml+_*.05*(1-E))%(Math.PI*2));let D=i?0:.35*ze.mLibration*Math.sin(b/1e3*(Math.PI*2/3)),Y=FS-ml;return Y=Math.atan2(Math.sin(Y),Math.cos(Y)),cu=ml+Y*le.smoothstep(E,0,1)+1.5*L+D,L}let op=()=>Fi.classList.add("ready"),ap=l.load("earth",2),Ag=l.load("earth",1);ap.then(op),setTimeout(()=>Ag.then(op),3500),l.uploaded=_=>r.initTexture(_),ap.then(async()=>{for(let _ of["mercury","jupiter","saturn","sun"])await l.load(_,1),await l.load(_,2)});let Tg={mercury:$e.indexOf("bepi-pass"),sun:$e.indexOf("sun"),jupiter:$e.indexOf("juice-pass"),saturn:$e.indexOf("enceladus-intro")};function bu(_){for(let[b,E]of Object.entries(Tg))E<0||(_>E-3&&l.load(b,1),_>E-1.5&&l.load(b,2))}let lp=!0;new IntersectionObserver(([_])=>lp=_.isIntersecting).observe(document.querySelector(".journey"));let Eg=performance.now(),wu=0,gl=0;function Cg(_){if(performance.now()-Eg<1e4||(gl++,wu+=_,gl<120))return;let b=wu/gl;gl=0,wu=0;let E=b>1/24?Math.max(1.25,a-.25):b<1/55?Math.min(o,a+.25):a;E!==a&&(a=E,r.setPixelRatio(a),Mu())}let vt=Sr(),bi=0,cp=Uh.map(_=>_.querySelector(".journey-card")),_l=cp.map(()=>-1);function Rg(_){let b=Math.floor(_),E=Fa()[$e[b]];E&&_-b<E[0]?_=b:E&&(_=b+(_-b-E[0])/(1-E[0]));for(let[L,D]of cp.entries()){if(!D)continue;if(Kn){_l[L]!==1&&(D.style.opacity="",D.style.visibility="",D.style.transform="",_l[L]=1);continue}let Y=_-L,oe=1-le.smoothstep(Math.abs(Y),.38,.5);Math.abs(oe-_l[L])<.005||(_l[L]=oe,D.style.opacity=oe.toFixed(3),D.style.visibility=oe>.01?"visible":"hidden",D.style.pointerEvents=oe>.5?"":"none",D.style.transform=`translateY(calc(-50% + ${((Y>=0?-1:1)*14*(1-oe)).toFixed(1)}px))`)}}let Pg=2.4,xl=document.createElement("div");xl.className="journey-dissolve",xl.setAttribute("aria-hidden","true"),Fi.after(xl);let Bo=document.createElement("div");Bo.className="journey-veil",Bo.setAttribute("aria-hidden","true"),document.body.append(Bo);let zo=!1;for(let _ of Ki.chapters)_.addEventListener("click",b=>{let E=document.getElementById(_.getAttribute("href").slice(1));if(!E||zo)return;b.preventDefault(),Au(()=>{let D=Kn?E.offsetTop:E.offsetTop+E.offsetHeight/2-innerHeight/2;scrollTo({top:D,behavior:"instant"}),vt=Sr(),bi=0,Rr=!0,history.replaceState(null,"",_.getAttribute("href")),bu(vt)})});let Ig=.8,Lg=.45,wi=null,Cr=0,hp=0;addEventListener("wheel",_=>{if(si>0){_.preventDefault();return}if(Je||_.ctrlKey||i)return;_.preventDefault();let b=document.documentElement.scrollHeight-innerHeight,E=_.deltaMode===1?_.deltaY/3:Math.abs(_.deltaY)>=50&&_.wheelDeltaY&&_.wheelDeltaY%120===0?-_.wheelDeltaY/120:0,L=E?E*Lg*innerHeight:_.deltaY*(_.deltaMode===2?innerHeight:1)*Ig,D=performance.now();D-hp>90&&L&&(L=Math.sign(L)*Math.max(Math.abs(L),.3*innerHeight)),hp=D;let Y=wi??scrollY,oe=le.clamp(Y+L-scrollY,-2.2*innerHeight,2.2*innerHeight);wi=le.clamp(scrollY+oe,0,b),Cr||(Cr=performance.now(),requestAnimationFrame(up))},{passive:!1});function up(_){if(wi===null){Cr=0;return}let b=Math.min((_-Cr)/1e3,.1);Cr=_;let E=scrollY+(wi-scrollY)*(1-Math.exp(-b*7));if(scrollTo({top:Math.abs(wi-E)<.5?wi:E,behavior:"instant"}),Math.abs(wi-scrollY)<.5){wi=null,Cr=0;return}requestAnimationFrame(up)}addEventListener("keydown",()=>{wi=null}),addEventListener("pointerdown",()=>{wi=null});function Au(_){if(zo=!0,i){_(),zo=!1;return}Bo.classList.add("on"),setTimeout(()=>{_(),requestAnimationFrame(()=>requestAnimationFrame(()=>{Bo.classList.remove("on"),zo=!1}))},320)}function Dg(){Au(()=>{vt=Sr(),bi=0,Rr=!0,bu(vt)})}hu(vt),rp(0,performance.now()),window.__probe=()=>({fly:[We.group.visible,+h.position.distanceTo(We.group.position).toFixed(3),+h.near.toExponential(2),vs.style.opacity],bepi:[We.group.visible,...We.group.position.toArray().map(_=>+_.toFixed(2))],merc:k.center.toArray().map(_=>+_.toFixed(2)),cam:h.position.toArray().map(_=>+_.toFixed(2)),shown:vt,goal:Sr(),at:$e[Math.floor(vt)],pace:ip(vt)});let dp=new Pt,vl=new yt,Rr=!0,fp=performance.now();function Tu(_){let b=Math.min(_-fp,100)/1e3;if(fp=_,!lp){requestAnimationFrame(Tu);return}Cg(b);let E=i?0:_/1e3,L=i?1:1-Math.exp(-b*3);fl&&bg();let D=Je?$e.indexOf("jupiter"):Sr();!zo&&!Je&&Math.abs(D-vt)>2.5&&Dg();let Y=ip(vt),oe=vt;if(i)vt+=(D-vt)*L,bi=0;else{let Xe=Pg;bi+=(Xe*Xe*(D-vt)-2*Xe*bi)*b,bi=le.clamp(bi,-Y,Y),vt+=bi*b,Math.abs(D-vt)<1e-4&&Math.abs(bi)<.001&&(vt=D,bi=0)}let fe=b>0?Math.abs(vt-oe)/b/Y:0,xe=pu?1:1-le.smoothstep(fe,.05,.2);e=xe<e?xe:e+(xe-e)*(1-Math.exp(-b*1.5)),Je&&(Je.clock+=(Je.target-Je.clock)*(i?1:1-Math.exp(-b*(Je.closing?5:2.2))),Je.ramp=le.clamp(Je.ramp+(Je.closing?-b:b)/.8,0,1),Je.closing&&Je.ramp===0&&Math.abs(Je.clock-Je.back)<.002&&(Je=null)),fg(b),hu(vt),ps=ze.gMap>.01?Math.min(ps+(i?0:b*.8*ze.gMap),200):ze.gCover>.01?ps:0,bu(vt),Rg(vt);let se=rp(b,_);k.setCenter(cl);let me=$e.indexOf("jupiter"),be=$e.indexOf("juice"),Pe=bo(),Qe=me>=0&&vt>me-.02&&vt<Pe+.6,st=kh(vt),St=Je?-1:Va(vt),et=$e.indexOf("juice-tour"),Vt=Math.max($e.indexOf("ganymede"),$e.indexOf("ocean-depth"),$e.indexOf("ocean-probes"));ce&&et>=0&&(vt<et-.6?(xi=0,ji=0):i?(xi=1,ji=te):Math.abs(vt-et)<.5&&(xi=Math.min(1,xi+b/te),ji+=b));let Rt=ce&&et>=0&&vt>et-.6&&vt<Vt+.7;Le=Rt;let ye=Rt?y(xi):ce&&Je?y(st):St>=0?y(St):-1;if(ye<0)he=null;else if(!Je)he={s0:0,phase:[0,0,0,0],story:!0};else if(!he||he.story){let Xe=Ot=>Ot-Math.PI*2*Math.round(Ot/(Math.PI*2));he={s0:st,phase:ke.map((Ot,Rn)=>Xe(Ot.phase-H(Rn,ye)))}}lg(ye);let Ke=$e.indexOf("ganymede"),at=Math.max($e.indexOf("ocean-depth"),$e.indexOf("ocean-probes")),Et=ce&&Qe&&!Je||Ke>=0&&vt>Ke-.7&&vt<Math.max(Ke,at)+.7;if(!Qe||ye>=0||Et)de=null;else if(!de){let Xe=((xt-Ie.phase)%(Math.PI*2)+Math.PI*2)%(Math.PI*2);de={start:ke.map(Ot=>Ot.phase),advance:Xe+Math.PI*2}}let Ht=Qe?I(st):0;for(let Xe of ke){if(ye>=0?Xe.phase=Te(ke.indexOf(Xe),ye,Je?st:0):de?Xe.phase=de.start[ke.indexOf(Xe)]+de.advance*(ds[2].period/Xe.period)*Ht:!i&&!Et&&(Xe.phase+=b*Math.PI*2*(ds[0].period/Xe.period)/US),ye<0&&!de&&me>=0){let Rn=le.clamp(vt-me,-.4,$i);Xe.phase+=Math.PI*2*(ds[2].period/Xe.period)*(Rn-(Xe.scrollTurn??Rn)),Xe.scrollTurn=Rn}if(Xe.mesh.scale.setScalar(Ge()),Xe===Ie&&hl){let{d0:Rn,d1:Pr}=hl,Ng=le.clamp(h.position.distanceTo(Be),Pr,Rn),Ug=Math.log(Rn/Ng)/Math.log(Rn/Pr);Xe.mesh.scale.setScalar(T0**(1-Ug))}let Ot=Xe.phase;Xe.shown=Ot,Xe.mesh.position.set(Math.cos(Ot)*Xe.orbit,0,-Math.sin(Ot)*Xe.orbit),Xe.mesh.rotation.y=Ot,Xe===Ie&&!dt&&(Xe.mesh.rotation.y+=Cn*$(vt)),Xe.line.material.opacity=.35*ze.jOrbits,Xe.line.visible=ze.jOrbits>.001}Ga(vt),ur(vt),vf(vt,b),gg(vt);let ve=Math.max(0,(Vs-.52)/.3);We.update({thrust:1-le.smoothstep(Vs,.42,.5),separation:ve,time:E}),t.push(()=>{if(n=!1,ve>0){We.group.updateMatrixWorld(!0),We.mtm.getWorldPosition(s),h.updateMatrixWorld();let Xe=xo*un*Ui*1.2/h.position.distanceTo(s)*r.domElement.height/Math.tan(le.degToRad(h.fov/2));s.applyMatrix4(h.matrixWorldInverse);let Ot=Math.tan(le.degToRad(h.fov/2)),Rn=-s.z,Pr=Rn<=0||Math.abs(s.x/Rn)>1.15*Ot*h.aspect||Math.abs(s.y/Rn)>1.15*Ot;(Xe<3||Pr)&&(n=!0)}We.mtm.visible=!n}),Qf(vt),si>0&&pg();let pt=np(rn);if(h.position.copy(rn),dp.lookAt(h.position,ii,Tr??h.up),vl.setFromRotationMatrix(dp),Oo>0&&mu!==gu&&gu!==-1&&(Rr=!0),gu=Oo>0?mu:-1,xl.style.opacity=Oo.toFixed(3),i||Rr||fu||si>0)h.quaternion.copy(vl);else{let Xe=h.quaternion.angleTo(vl);h.quaternion.rotateTowards(vl,Math.min(Xe*(1-Math.exp(-b*6)),b*.8))}Rr=!1,h.near=le.clamp(.05*pt,1e-7,5e3),h.updateProjectionMatrix();for(let Xe of t)Xe();if(t.length=0,dl<1/0&&(h.near=Math.min(h.near,.05*dl),h.updateProjectionMatrix()),h.updateMatrixWorld(),C.position.copy(h.position),C.scale.setScalar(h.near*.25),w(),A.update({dt:b,time:E,camera:h,wobble:ze.eWobble,cut:ze.eCut,waves:ze.eWaves,field:ze.eField,core:ze.eCore,animate:!i}),k.update({dt:b,time:E,camera:h,cut:ze.mCut*(1-.55*zf),waves:ze.mWaves,field:ze.mField,animate:!i,spinAngle:cu+Bf+Zh,scale:pl(),stretch:1+.45*ze.mOrbit}),z0(b),Z.orbits&&ze.mOrbit>.5){let Xe=se/(Math.PI*2);Z.orbits.textContent=Xe.toFixed(1),Z.spins.textContent=(1.5*Xe).toFixed(1)}let Nt=i?Vf[0][0]:tg(_/1e3),en=le.clamp((Gf(Nt)-.1)/.8,0,1);eg();for(let Xe of _r){if(!Xe.planet.root.visible)continue;let Ot=Xe.name==="ganymede";Ot&&!i&&(ol+=b*.03),Xe.planet.update({dt:b,time:E,camera:h,cut:ze.gDepth*(Ot?1-.55*Of:1),cutTurn:35*Math.PI/180,animate:!i,scale:Ot?1.003:1,spinAngle:Ot?ol+su:void 0,stretch:Ot?Ie.mesh.scale.x/Ie.mesh.scale.y:1}),Xe.planet.surface.material.opacity=Xe.fade??1,Ot&&Xe.planet.surface.quaternion.copy(q0.setFromAxisAngle(lr,ol+su)).multiply(If)}Y0(),H0(b,E),K0(b),gr.update({dt:b,time:E,camera:h,cut:ze.nCut,cutTurn:35*Math.PI/180,animate:!i,waves:[ze.nWaves*(1-.6*en*ze.nHeat),ze.nHeat*en]}),kf.update(E,ze.nPlume);let on=en*ze.nHeat;gr.layerColors.uLow.value[1].set(ll.low).lerp(ll.hotLow,on),gr.layerColors.uHigh.value[1].set(ll.high).lerp(ll.hotHigh,on),No.sweep&&ze.nHeat>.5&&(No.sweep.setAttribute("x1",(Nt*300).toFixed(1)),No.sweep.setAttribute("x2",(Nt*300).toFixed(1)));for(let Xe of lt)Xe.material.opacity=.35*ze.xMap,Xe.visible=ze.xMap>.001;if(F.material.opacity=Math.max(.6*ze.mOrbit,.35*ze.xMap),Se.visible=ze.xMap>.001,Se.material.opacity=ze.xMap,pe.forEach(([Xe],Ot)=>Se.geometry.attributes.position.setXYZ(Ot,...(Xe??cl).toArray())),Se.geometry.attributes.position.needsUpdate=!0,hg(vt),G.scale.setScalar(Math.max(nt.radius*4.2,h.position.distanceTo(nt.center)*.05)),O.uniforms.uOpacity.value=1-Math.max(ze.eCut,ze.eCore,ze.eField*.6),N.visible=O.uniforms.uOpacity.value>.01,O.uniforms.uSun.value.copy(Oh).transformDirection(h.matrixWorldInverse),!i)for(let[Xe,Ot]of R)Xe.rotation.y+=b*Ot;r.render(u,h),requestAnimationFrame(Tu)}requestAnimationFrame(Tu)}function GS(i,e,t=700){let n=[],s=[],r=[];for(let l=0;l<t;l++){let d=l%4-1.5,f=(Math.random()-.5)*.9,u=f*.5,h=d*.13+f*.08,g=new T(u,-Math.sqrt(Math.max(0,1-u*u-h*h)),h).multiplyScalar(e),v=new T((Math.random()-.5)*.5+u*.6,-1,(Math.random()-.5)*.5+h*.6).normalize();r.push(g.x,g.y,g.z),s.push(v.x,v.y,v.z),n.push(Math.random())}let o=new It;o.setAttribute("position",new it(r,3)),o.setAttribute("aDir",new it(s,3)),o.setAttribute("aSeed",new it(n,1));let a=new fn({uniforms:{uTime:{value:0},uOpacity:{value:0},uLength:{value:e*2.2},uScale:{value:innerHeight*.5},uSize:{value:e/.6}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1,blending:Vn}),c=new Rs(o,a);return c.position.copy(i),c.frustumCulled=!1,{points:c,update(l,d){c.visible=d>.001,a.uniforms.uTime.value=l,a.uniforms.uOpacity.value=d,a.uniforms.uScale.value=innerHeight*.5}}}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
