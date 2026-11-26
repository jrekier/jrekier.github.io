var rp=0,Cu=1,op=2;var oa=1,ap=2,Yr=3,Rs=0,Jn=1,Mn=2,js=0,Zr=1,Bn=2,Pu=3,Iu=4,lp=5;var Qs=100,cp=101,hp=102,up=103,dp=104,fp=200,pp=201,mp=202,gp=203,Lu=204,Nu=205,_p=206,xp=207,vp=208,yp=209,Mp=210,Sp=211,bp=212,wp=213,Ap=214,Tl=0,El=1,Rl=2,Dr=3,Cl=4,Pl=5,Il=6,Ll=7,fc=0,Tp=1,Ep=2,Vi=0,Du=1,Uu=2,Fu=3,Ou=4,Bu=5,zu=6,ku=7;var Vu=300,er=301,Jr=302,pc=303,mc=304,qs=1e3,Bi=1001,Nl=1002,Cn=1003,Rp=1004;var aa=1005;var Xn=1006,gc=1007;var as=1008;var Kn=1009,Gu=1010,Hu=1011,$r=1012,_c=1013,Ei=1014,Ri=1015,Ci=1016,xc=1017,vc=1018,tr=1020,Wu=35902,Xu=35899,qu=1021,Yu=1022,Pi=1023,rs=1026,ls=1027,Zu=1028,yc=1029,Cs=1030,Mc=1031;var Sc=1033,la=33776,ca=33777,ha=33778,ua=33779,bc=35840,wc=35841,Ac=35842,Tc=35843,Ec=36196,Rc=37492,Cc=37496,Pc=37488,Ic=37489,da=37490,Lc=37491,Nc=37808,Dc=37809,Uc=37810,Fc=37811,Oc=37812,Bc=37813,zc=37814,kc=37815,Vc=37816,Gc=37817,Hc=37818,Wc=37819,Xc=37820,qc=37821,Yc=36492,Zc=36494,Jc=36495,$c=36283,Kc=36284,fa=36285,jc=36286;var Uo=2300,Dl=2301,bl=2302,Mu=2303,Su=2400,bu=2401,wu=2402;var Cp=3200;var Qc=0,Pp=1,cs="",on="srgb",Fo="srgb-linear",Oo="linear",Yt="srgb";var wl=7680;var Ip=519,Lp=512,Np=513,Dp=514,Ju=515,Up=516,Fp=517,$u=518,Ku=519,ju=35044;var Qu="300 es",ci=2e3,Ur=2001;function L0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function N0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Op(){let i=Fr("canvas");return i.style.display="block",i}var Sf={},Or=null;function Bo(...i){let e="THREE."+i.shift();Or?Or("log",e,...i):console.log(e,...i)}function Bp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function nt(...i){i=Bp(i);let e="THREE."+i.shift();if(Or)Or("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=Bp(i);let e="THREE."+i.shift();if(Or)Or("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Po(...i){let e=i.join(" ");e in Sf||(Sf[e]=!0,nt(...i))}function zp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var kp={[Tl]:Tl,[Rl]:Il,[Cl]:Cl,[Dr]:Pl,[El]:El,[Il]:Rl,[Ll]:Ll,[Pl]:Dr},zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bf=1234567,Io=Math.PI/180,Br=180/Math.PI;function Ps(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function ed(i,e){return(i%e+e)%e}function D0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function U0(i,e,t){return i!==e?(t-i)/(e-i):0}function Lo(i,e,t){return(1-t)*i+t*e}function F0(i,e,t,n){return Lo(i,e,1-Math.exp(-t*n))}function O0(i,e=1){return e-Math.abs(ed(i,e*2)-e)}function B0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function z0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function k0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function V0(i,e){return i+Math.random()*(e-i)}function G0(i){return i*(.5-Math.random())}function H0(i){i!==void 0&&(bf=i);let e=bf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function W0(i){return i*Io}function X0(i){return i*Br}function q0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Y0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function td(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Z0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),d=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),u=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*d,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*d,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*d,a*l);break;case"XZX":i.set(a*d,c*g,c*u,a*l);break;case"YXY":i.set(c*u,a*d,c*g,a*l);break;case"ZYZ":i.set(c*g,c*u,a*d,a*l);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function eh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nd(i,e){if(e.constructor===Float32Array)return i;let t=eh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function id(i,e){if(e.constructor===Float32Array)return i;let t=eh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var ue={DEG2RAD:Io,RAD2DEG:Br,generateUUID:Ps,clamp:At,euclideanModulo:ed,mapLinear:D0,inverseLerp:U0,lerp:Lo,damp:F0,pingpong:O0,smoothstep:B0,smootherstep:z0,randInt:k0,randFloat:V0,randFloatSpread:G0,seededRandom:H0,degToRad:W0,radToDeg:X0,isPowerOfTwo:q0,ceilPowerOfTwo:Y0,floorPowerOfTwo:td,setQuaternionFromProperEuler:Z0,normalize:id,denormalize:nd},cd=class cd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cd.prototype.isVector2=!0;var Oe=cd,Ct=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],f=n[s+3],h=r[o+0],u=r[o+1],g=r[o+2],y=r[o+3];if(f!==y||c!==h||l!==u||d!==g){let m=c*h+l*u+d*g+f*y;m<0&&(h=-h,u=-u,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let S=Math.acos(m),I=Math.sin(S);p=Math.sin(p*S)/I,a=Math.sin(a*S)/I,c=c*p+h*a,l=l*p+u*a,d=d*p+g*a,f=f*p+y*a}else{c=c*p+h*a,l=l*p+u*a,d=d*p+g*a,f=f*p+y*a;let S=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=S,l*=S,d*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],f=r[o],h=r[o+1],u=r[o+2],g=r[o+3];return e[t]=a*g+d*f+c*u-l*h,e[t+1]=c*g+d*h+l*f-a*u,e[t+2]=l*g+d*u+a*h-c*f,e[t+3]=d*g-a*f-c*h-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),f=a(r/2),h=c(n/2),u=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*d*f+l*u*g,this._y=l*u*f-h*d*g,this._z=l*d*g+h*u*f,this._w=l*d*f-h*u*g;break;case"YXZ":this._x=h*d*f+l*u*g,this._y=l*u*f-h*d*g,this._z=l*d*g-h*u*f,this._w=l*d*f+h*u*g;break;case"ZXY":this._x=h*d*f-l*u*g,this._y=l*u*f+h*d*g,this._z=l*d*g+h*u*f,this._w=l*d*f-h*u*g;break;case"ZYX":this._x=h*d*f-l*u*g,this._y=l*u*f+h*d*g,this._z=l*d*g-h*u*f,this._w=l*d*f+h*u*g;break;case"YZX":this._x=h*d*f+l*u*g,this._y=l*u*f+h*d*g,this._z=l*d*g-h*u*f,this._w=l*d*f-h*u*g;break;case"XZY":this._x=h*d*f-l*u*g,this._y=l*u*f-h*d*g,this._z=l*d*g+h*u*f,this._w=l*d*f+h*u*g;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],h=n+a+f;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(d-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+d)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},hd=class hd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),d=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*d,this.y=n+c*d+a*l-r*f,this.z=s+c*f+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $h.copy(this).projectOnVector(e),this.sub($h)}reflect(e){return this.sub($h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hd.prototype.isVector3=!0;var T=hd,$h=new T,wf=new Ct,ud=class ud{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],f=n[7],h=n[2],u=n[5],g=n[8],y=s[0],m=s[3],p=s[6],S=s[1],I=s[4],b=s[7],R=s[2],E=s[5],_=s[8];return r[0]=o*y+a*S+c*R,r[3]=o*m+a*I+c*E,r[6]=o*p+a*b+c*_,r[1]=l*y+d*S+f*R,r[4]=l*m+d*I+f*E,r[7]=l*p+d*b+f*_,r[2]=h*y+u*S+g*R,r[5]=h*m+u*I+g*E,r[8]=h*p+u*b+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,h=a*c-d*r,u=l*r-o*c,g=t*f+n*h+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(s*l-d*n)*y,e[2]=(a*n-s*o)*y,e[3]=h*y,e[4]=(d*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=u*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kh.makeScale(e,t)),this}rotate(e){return Po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kh.makeRotation(-e)),this}translate(e,t){return Po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ud.prototype.isMatrix3=!0;var dt=ud,Kh=new dt,Af=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tf=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J0(){let i={enabled:!0,workingColorSpace:Fo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Yt&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Yt&&(s.r=Nr(s.r),s.g=Nr(s.g),s.b=Nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cs?Oo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fo]:{primaries:e,whitePoint:n,transfer:Oo,toXYZ:Af,fromXYZ:Tf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:Yt,toXYZ:Af,fromXYZ:Tf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}var Lt=J0();function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mr,Ul=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mr===void 0&&(mr=Fr("canvas")),mr.width=e.width,mr.height=e.height;let s=mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ss(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ss(t[n]/255)*255):t[n]=ss(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$0=0,zr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jh(s[o].image)):r.push(jh(s[o]))}else r=jh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var K0=0,Qh=new T,Pn=class i extends zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bi,s=Bi,r=Xn,o=as,a=Pi,c=Kn,l=i.DEFAULT_ANISOTROPY,d=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Ps(),this.name="",this.source=new zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qh).x}get height(){return this.source.getSize(Qh).y}get depth(){return this.source.getSize(Qh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Vu;Pn.DEFAULT_ANISOTROPY=1;var dd=class dd{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],f=c[8],h=c[1],u=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let I=(l+1)/2,b=(u+1)/2,R=(p+1)/2,E=(d+h)/4,_=(f+y)/4,A=(g+m)/4;return I>b&&I>R?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=E/n,r=_/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=A/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=A/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-y)/S,this.z=(h-d)/S,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dd.prototype.isVector4=!0;var an=dd,Fl=class extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Pn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new zr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zo=class extends Pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ol=class extends Pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var dc=class dc{constructor(e,t,n,s,r,o,a,c,l,d,f,h,u,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,d,f,h,u,g,y,m)}set(e,t,n,s,r,o,a,c,l,d,f,h,u,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=f,p[14]=h,p[3]=u,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/gr.setFromMatrixColumn(e,0).length(),r=1/gr.setFromMatrixColumn(e,1).length(),o=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*d,u=o*f,g=a*d,y=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=u+g*l,t[5]=h-y*l,t[9]=-a*c,t[2]=y-h*l,t[6]=g+u*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*d,u=c*f,g=l*d,y=l*f;t[0]=h+y*a,t[4]=g*a-u,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=u*a-g,t[6]=y+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*d,u=c*f,g=l*d,y=l*f;t[0]=h-y*a,t[4]=-o*f,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*d,t[9]=y-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*d,u=o*f,g=a*d,y=a*f;t[0]=c*d,t[4]=g*l-u,t[8]=h*l+y,t[1]=c*f,t[5]=y*l+h,t[9]=u*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,u=o*l,g=a*c,y=a*l;t[0]=c*d,t[4]=y-h*f,t[8]=g*f+u,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=u*f+g,t[10]=h-y*f}else if(e.order==="XZY"){let h=o*c,u=o*l,g=a*c,y=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=h*f+y,t[5]=o*d,t[9]=u*f-g,t[2]=g*f-u,t[6]=a*d,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j0,e,Q0)}lookAt(e,t,n){let s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),gs.crossVectors(n,ei),gs.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),gs.crossVectors(n,ei)),gs.normalize(),$a.crossVectors(ei,gs),s[0]=gs.x,s[4]=$a.x,s[8]=ei.x,s[1]=gs.y,s[5]=$a.y,s[9]=ei.y,s[2]=gs.z,s[6]=$a.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],f=n[5],h=n[9],u=n[13],g=n[2],y=n[6],m=n[10],p=n[14],S=n[3],I=n[7],b=n[11],R=n[15],E=s[0],_=s[4],A=s[8],O=s[12],U=s[1],z=s[5],V=s[9],j=s[13],D=s[2],Z=s[6],Q=s[10],k=s[14],K=s[3],J=s[7],se=s[11],fe=s[15];return r[0]=o*E+a*U+c*D+l*K,r[4]=o*_+a*z+c*Z+l*J,r[8]=o*A+a*V+c*Q+l*se,r[12]=o*O+a*j+c*k+l*fe,r[1]=d*E+f*U+h*D+u*K,r[5]=d*_+f*z+h*Z+u*J,r[9]=d*A+f*V+h*Q+u*se,r[13]=d*O+f*j+h*k+u*fe,r[2]=g*E+y*U+m*D+p*K,r[6]=g*_+y*z+m*Z+p*J,r[10]=g*A+y*V+m*Q+p*se,r[14]=g*O+y*j+m*k+p*fe,r[3]=S*E+I*U+b*D+R*K,r[7]=S*_+I*z+b*Z+R*J,r[11]=S*A+I*V+b*Q+R*se,r[15]=S*O+I*j+b*k+R*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],h=e[10],u=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=c*u-l*h,I=a*u-l*f,b=a*h-c*f,R=o*u-l*d,E=o*h-c*d,_=o*f-a*d;return t*(y*S-m*I+p*b)-n*(g*S-m*R+p*E)+s*(g*I-y*R+p*_)-r*(g*b-y*E+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-n*(r*d-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],h=e[10],u=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=t*a-n*o,I=t*c-s*o,b=t*l-r*o,R=n*c-s*a,E=n*l-r*a,_=s*l-r*c,A=d*y-f*g,O=d*m-h*g,U=d*p-u*g,z=f*m-h*y,V=f*p-u*y,j=h*p-u*m,D=S*j-I*V+b*z+R*U-E*O+_*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/D;return e[0]=(a*j-c*V+l*z)*Z,e[1]=(s*V-n*j-r*z)*Z,e[2]=(y*_-m*E+p*R)*Z,e[3]=(h*E-f*_-u*R)*Z,e[4]=(c*U-o*j-l*O)*Z,e[5]=(t*j-s*U+r*O)*Z,e[6]=(m*b-g*_-p*I)*Z,e[7]=(d*_-h*b+u*I)*Z,e[8]=(o*V-a*U+l*A)*Z,e[9]=(n*U-t*V-r*A)*Z,e[10]=(g*E-y*b+p*S)*Z,e[11]=(f*b-d*E-u*S)*Z,e[12]=(a*O-o*z-c*A)*Z,e[13]=(t*z-n*O+s*A)*Z,e[14]=(y*I-g*R-m*S)*Z,e[15]=(d*R-f*I+h*S)*Z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,f=a+a,h=r*l,u=r*d,g=r*f,y=o*d,m=o*f,p=a*f,S=c*l,I=c*d,b=c*f,R=n.x,E=n.y,_=n.z;return s[0]=(1-(y+p))*R,s[1]=(u+b)*R,s[2]=(g-I)*R,s[3]=0,s[4]=(u-b)*E,s[5]=(1-(h+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+I)*_,s[9]=(m-S)*_,s[10]=(1-(h+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=gr.set(s[0],s[1],s[2]).length(),a=gr.set(s[4],s[5],s[6]).length(),c=gr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Mi.copy(this);let l=1/o,d=1/a,f=1/c;return Mi.elements[0]*=l,Mi.elements[1]*=l,Mi.elements[2]*=l,Mi.elements[4]*=d,Mi.elements[5]*=d,Mi.elements[6]*=d,Mi.elements[8]*=f,Mi.elements[9]*=f,Mi.elements[10]*=f,t.setFromRotationMatrix(Mi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=ci,c=!1){let l=this.elements,d=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===ci)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ur)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ci,c=!1){let l=this.elements,d=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),u=-(n+s)/(n-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===ci)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ur)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};dc.prototype.isMatrix4=!0;var Rt=dc,gr=new T,Mi=new Rt,j0=new T(0,0,0),Q0=new T(1,1,1),gs=new T,$a=new T,ei=new T,Ef=new Rt,Rf=new Ct,Ai=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],f=s[2],h=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ef,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rf.setFromEuler(this),this.setFromQuaternion(Rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";var ko=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},eg=0,Cf=new T,_r=new Ct,ji=new Rt,Ka=new T,So=new T,tg=new T,ng=new Ct,Pf=new T(1,0,0),If=new T(0,1,0),Lf=new T(0,0,1),Nf={type:"added"},ig={type:"removed"},xr={type:"childadded",child:null},eu={type:"childremoved",child:null},On=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new Ai,n=new Ct,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new dt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Pf,e)}rotateY(e){return this.rotateOnAxis(If,e)}rotateZ(e){return this.rotateOnAxis(Lf,e)}translateOnAxis(e,t){return Cf.copy(e).applyQuaternion(this.quaternion),this.position.add(Cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pf,e)}translateY(e){return this.translateOnAxis(If,e)}translateZ(e){return this.translateOnAxis(Lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ka.copy(e):Ka.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(So,Ka,this.up):ji.lookAt(Ka,So,this.up),this.quaternion.setFromRotationMatrix(ji),s&&(ji.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(ji),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nf),xr.child=e,this.dispatchEvent(xr),xr.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ig),eu.child=e,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nf),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,ng,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};On.DEFAULT_UP=new T(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}},sg={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=d.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&h>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},ja={h:0,s:0,l:0};function tu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Lt.workingColorSpace){if(e=ed(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tu(o,r,e+1/3),this.g=tu(o,r,e),this.b=tu(o,r,e-1/3)}return Lt.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let n=Vp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Lt.workingToColorSpace(Un.copy(this),e),Math.round(At(Un.r*255,0,255))*65536+Math.round(At(Un.g*255,0,255))*256+Math.round(At(Un.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Un.copy(this),t);let n=Un.r,s=Un.g,r=Un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=on){Lt.workingToColorSpace(Un.copy(this),e);let t=Un.r,n=Un.g,s=Un.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(ja);let n=Lo(_s.h,ja.h,t),s=Lo(_s.s,ja.s,t),r=Lo(_s.l,ja.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new Xe;Xe.NAMES=Vp;var Vo=class extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Si=new T,Qi=new T,nu=new T,es=new T,vr=new T,yr=new T,Df=new T,iu=new T,su=new T,ru=new T,ou=new an,au=new an,lu=new an,is=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Si.subVectors(e,t),s.cross(Si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Si.subVectors(s,t),Qi.subVectors(n,t),nu.subVectors(e,t);let o=Si.dot(Si),a=Si.dot(Qi),c=Si.dot(nu),l=Qi.dot(Qi),d=Qi.dot(nu),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,u=(l*c-a*d)*h,g=(o*d-a*c)*h;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,es)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,es.x),c.addScaledVector(o,es.y),c.addScaledVector(a,es.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ou.setScalar(0),au.setScalar(0),lu.setScalar(0),ou.fromBufferAttribute(e,t),au.fromBufferAttribute(e,n),lu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ou,r.x),o.addScaledVector(au,r.y),o.addScaledVector(lu,r.z),o}static isFrontFacing(e,t,n,s){return Si.subVectors(n,t),Qi.subVectors(e,t),Si.cross(Qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Si.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;vr.subVectors(s,n),yr.subVectors(r,n),iu.subVectors(e,n);let c=vr.dot(iu),l=yr.dot(iu);if(c<=0&&l<=0)return t.copy(n);su.subVectors(e,s);let d=vr.dot(su),f=yr.dot(su);if(d>=0&&f<=d)return t.copy(s);let h=c*f-d*l;if(h<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(n).addScaledVector(vr,o);ru.subVectors(e,r);let u=vr.dot(ru),g=yr.dot(ru);if(g>=0&&u<=g)return t.copy(r);let y=u*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(yr,a);let m=d*g-u*f;if(m<=0&&f-d>=0&&u-g>=0)return Df.subVectors(r,s),a=(f-d)/(f-d+(u-g)),t.copy(s).addScaledVector(Df,a);let p=1/(m+y+h);return o=y*p,a=h*p,t.copy(n).addScaledVector(vr,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ms=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(r,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),el.subVectors(this.max,bo),Mr.subVectors(e.a,bo),Sr.subVectors(e.b,bo),br.subVectors(e.c,bo),xs.subVectors(Sr,Mr),vs.subVectors(br,Sr),Gs.subVectors(Mr,br);let t=[0,-xs.z,xs.y,0,-vs.z,vs.y,0,-Gs.z,Gs.y,xs.z,0,-xs.x,vs.z,0,-vs.x,Gs.z,0,-Gs.x,-xs.y,xs.x,0,-vs.y,vs.x,0,-Gs.y,Gs.x,0];return!cu(t,Mr,Sr,br,el)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,Mr,Sr,br,el))?!1:(tl.crossVectors(xs,vs),t=[tl.x,tl.y,tl.z],cu(t,Mr,Sr,br,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ts=[new T,new T,new T,new T,new T,new T,new T,new T],bi=new T,Qa=new Ms,Mr=new T,Sr=new T,br=new T,xs=new T,vs=new T,Gs=new T,bo=new T,el=new T,tl=new T,Hs=new T;function cu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hs.fromArray(i,r);let a=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),c=e.dot(Hs),l=t.dot(Hs),d=n.dot(Hs);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var xn=new T,nl=new Oe,rg=0,wi=class extends zi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ju,this.updateRanges=[],this.gpuType=Ri,this.version=0,this._normalizationScale=e!==void 0?eh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):nd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):id(e,this.array)}};var Go=class extends wi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ho=class extends wi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends wi{constructor(e,t,n){super(new Float32Array(e),t,n)}},og=new Ms,wo=new T,hu=new T,Ss=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):og.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);let t=wo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(hu)),this.expandByPoint(wo.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ag=0,li=new Rt,uu=new On,wr=new T,ti=new Ms,Ao=new Ms,Rn=new T,Pt=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L0(e)?Ho:Go)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(Rn.addVectors(ti.min,Ao.min),ti.expandByPoint(Rn),Rn.addVectors(ti.max,Ao.max),ti.expandByPoint(Rn)):(ti.expandByPoint(Ao.min),ti.expandByPoint(Ao.max))}ti.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Rn.fromBufferAttribute(a,l),c&&(wr.fromBufferAttribute(e,l),Rn.add(wr)),s=Math.max(s,n.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new wi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let O=0;O<n.count;O++)a[O]=new T,c[O]=new T;let d=new T,f=new T,h=new T,u=new Oe,g=new Oe,y=new Oe,m=new T,p=new T;function S(O,U,z){l[O]=l[U]=l[z]=1,d.fromBufferAttribute(n,O),f.fromBufferAttribute(n,U),h.fromBufferAttribute(n,z),u.fromBufferAttribute(r,O),g.fromBufferAttribute(r,U),y.fromBufferAttribute(r,z),f.sub(d),h.sub(d),g.sub(u),y.sub(u);let V=1/(g.x*y.y-y.x*g.y);isFinite(V)&&(m.copy(f).multiplyScalar(y.y).addScaledVector(h,-g.y).multiplyScalar(V),p.copy(h).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(V),a[O].add(m),a[U].add(m),a[z].add(m),c[O].add(p),c[U].add(p),c[z].add(p))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let O=0,U=I.length;O<U;++O){let z=I[O],V=z.start,j=z.count;for(let D=V,Z=V+j;D<Z;D+=3)S(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let b=new T,R=new T,E=new T,_=new T;function A(O){E.fromBufferAttribute(s,O),_.copy(E);let U=a[O];b.copy(U),b.sub(E.multiplyScalar(E.dot(U))).normalize(),R.crossVectors(_,U);let V=R.dot(c[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,V)}for(let O=0,U=n.count;O<U;++O)l[O]&&A(O);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,d=new T,f=new T;if(e)for(let h=0,u=e.count;h<u;h+=3){let g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,u=t.count;h<u;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,f=a.normalized,h=new l.constructor(c.length*d),u=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?u=c[y]*a.data.stride+a.offset:u=c[y]*d;for(let p=0;p<d;p++)h[g++]=l[u++]}return new wi(h,d,f)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,f=l.length;d<f;d++){let h=l[d],u=e(h,n);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,h=l.length;f<h;f++){let u=l[f];d.push(u.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],f=r[l];for(let h=0,u=f.length;h<u;h++)d.push(f[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ju,this.updateRanges=[],this.version=0,this.uuid=Ps()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Uf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Uf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Uf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ps()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Wn=new T,Wo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?eh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):nd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):id(e,this.data.array)}},du=new T,lg=new T,cg=new dt,ni=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=du.subVectors(n,t).cross(lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(du),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cg.getNormalMatrix(e),s=this.coplanarPoint(du).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hg=0,Ti=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=Zr,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Nu,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wl,this.stencilZFail=wl,this.stencilZPass=wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ys=class extends Ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ar,To=new T,Tr=new T,Er=new T,Rr=new Oe,Eo=new Oe,Gp=new Rt,il=new T,Ro=new T,sl=new T,Ff=new Oe,fu=new Oe,Of=new Oe,Vr=class extends On{constructor(e=new Ys){if(super(),this.isSprite=!0,this.type="Sprite",Ar===void 0){Ar=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bl(t,5);Ar.setIndex([0,1,2,0,2,3]),Ar.setAttribute("position",new Wo(n,3,0,!1)),Ar.setAttribute("uv",new Wo(n,2,3,!1))}this.geometry=Ar,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Tr.setFromMatrixScale(this.matrixWorld),Gp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Tr.multiplyScalar(-Er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;rl(il.set(-.5,-.5,0),Er,o,Tr,s,r),rl(Ro.set(.5,-.5,0),Er,o,Tr,s,r),rl(sl.set(.5,.5,0),Er,o,Tr,s,r),Ff.set(0,0),fu.set(1,0),Of.set(1,1);let a=e.ray.intersectTriangle(il,Ro,sl,!1,To);if(a===null&&(rl(Ro.set(-.5,.5,0),Er,o,Tr,s,r),fu.set(0,1),a=e.ray.intersectTriangle(il,sl,Ro,!1,To),a===null))return;let c=e.ray.origin.distanceTo(To);c<e.near||c>e.far||t.push({distance:c,point:To.clone(),uv:is.getInterpolation(To,il,Ro,sl,Ff,fu,Of,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function rl(i,e,t,n,s,r){Rr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Eo.x=r*Rr.x-s*Rr.y,Eo.y=s*Rr.x+r*Rr.y):Eo.copy(Rr),i.copy(e),i.x+=Eo.x,i.y+=Eo.y,i.applyMatrix4(Gp)}var ns=new T,pu=new T,ol=new T,al=new T,Gr=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pu.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),al.copy(this.origin).sub(pu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ol),a=al.dot(this.direction),c=-al.dot(ol),l=al.lengthSq(),d=Math.abs(1-o*o),f,h,u,g;if(d>0)if(f=o*c-a,h=o*a-c,g=r*d,f>=0)if(h>=-g)if(h<=g){let y=1/d;f*=y,h*=y,u=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),u=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(pu).addScaledVector(ol,h),u}intersectSphere(e,t){if(e.radius<0)return null;ns.subVectors(e.center,this.origin);let n=ns.dot(this.direction),s=ns.dot(ns)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,f=e.x-o.x,h=e.y-o.y,u=e.z-o.z,g=t.x-o.x,y=t.y-o.y,m=t.z-o.z,p=n.x-o.x,S=n.y-o.y,I=n.z-o.z,b=Math.abs(c),R=Math.abs(l),E=Math.abs(d),_,A,O,U,z,V,j,D,Z,Q,k,K;if(b>=R&&b>=E?(O=c,V=f,Z=g,K=p,c>=0?(_=l,A=d,U=h,z=u,j=y,D=m,Q=S,k=I):(_=d,A=l,U=u,z=h,j=m,D=y,Q=I,k=S)):R>=E?(O=l,V=h,Z=y,K=S,l>=0?(_=d,A=c,U=u,z=f,j=m,D=g,Q=I,k=p):(_=c,A=d,U=f,z=u,j=g,D=m,Q=p,k=I)):(O=d,V=u,Z=m,K=I,d>=0?(_=c,A=l,U=f,z=h,j=g,D=y,Q=p,k=S):(_=l,A=c,U=h,z=f,j=y,D=g,Q=S,k=p)),O===0)return null;let J=_/O,se=A/O,fe=1/O,ze=U-J*V,ot=z-se*V,q=j-J*Z,me=D-se*Z,Me=Q-J*K,Ie=k-se*K,pe=Me*me-Ie*q,ge=ze*Ie-ot*Me,wt=q*ot-me*ze;if(s){if(pe<0||ge<0||wt<0)return null}else if((pe<0||ge<0||wt<0)&&(pe>0||ge>0||wt>0))return null;let Ve=pe+ge+wt;if(Ve===0)return null;let Ue=fe*(pe*V+ge*Z+wt*K);return(Ve>0?Ue<0:Ue>0)?null:this.at(Ue/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ki=class extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bf=new Rt,Ws=new Gr,ll=new Ss,zf=new T,cl=new T,hl=new T,ul=new T,mu=new T,dl=new T,kf=new T,fl=new T,rt=class extends On{constructor(e=new Pt,t=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){dl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],f=r[c];d!==0&&(mu.fromBufferAttribute(f,e),o?dl.addScaledVector(mu,d):dl.addScaledVector(mu.sub(t),d))}t.add(dl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(r),Ws.copy(e.ray).recast(e.near),!(ll.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(ll,zf)===null||Ws.origin.distanceToSquared(zf)>(e.far-e.near)**2))&&(Bf.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(Bf),!(n.boundingBox!==null&&Ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ws)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,u.start),I=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let b=S,R=I;b<R;b+=3){let E=a.getX(b),_=a.getX(b+1),A=a.getX(b+2);s=pl(this,p,e,n,l,d,f,E,_,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let S=a.getX(m),I=a.getX(m+1),b=a.getX(m+2);s=pl(this,o,e,n,l,d,f,S,I,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,u.start),I=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let b=S,R=I;b<R;b+=3){let E=b,_=b+1,A=b+2;s=pl(this,p,e,n,l,d,f,E,_,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(c.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let S=m,I=m+1,b=m+2;s=pl(this,o,e,n,l,d,f,S,I,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ug(i,e,t,n,s,r,o,a){let c;if(e.side===Jn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Rs,a),c===null)return null;fl.copy(a),fl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(fl);return l<t.near||l>t.far?null:{distance:l,point:fl.clone(),object:i}}function pl(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,cl),i.getVertexPosition(c,hl),i.getVertexPosition(l,ul);let d=ug(i,e,t,n,cl,hl,ul,kf);if(d){let f=new T;is.getBarycoord(kf,cl,hl,ul,f),s&&(d.uv=is.getInterpolatedAttribute(s,a,c,l,f,new Oe)),r&&(d.uv1=is.getInterpolatedAttribute(r,a,c,l,f,new Oe)),o&&(d.normal=is.getInterpolatedAttribute(o,a,c,l,f,new T),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new T,materialIndex:0};is.getNormal(cl,hl,ul,h.normal),d.face=h,d.barycoord=f}return d}var zl=class extends Pn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Cn,d=Cn,f,h){super(null,o,a,c,l,d,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=new Ss,dg=new Oe(.5,.5),ml=new T,bs=class{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],f=r[5],h=r[6],u=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],I=r[13],b=r[14],R=r[15];if(s[0].setComponents(l-o,u-d,p-g,R-S).normalize(),s[1].setComponents(l+o,u+d,p+g,R+S).normalize(),s[2].setComponents(l+a,u+f,p+y,R+I).normalize(),s[3].setComponents(l-a,u-f,p-y,R-I).normalize(),n)s[4].setComponents(c,h,m,b).normalize(),s[5].setComponents(l-c,u-h,p-m,R-b).normalize();else if(s[4].setComponents(l-c,u-h,p-m,R-b).normalize(),t===ci)s[5].setComponents(l+c,u+h,p+m,R+b).normalize();else if(t===Ur)s[5].setComponents(c,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);let t=dg.distanceTo(e.center);return Xs.radius=.7071067811865476+t,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ml.x=s.normal.x>0?e.max.x:e.min.x,ml.y=s.normal.y>0?e.max.y:e.min.y,ml.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Vf=new Rt,kl=class i{constructor(){this.coordinateSystem=ci,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Vf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new bs),n[s].setFromProjectionMatrix(Vf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new bs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var vn=class extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vl=new T,Gl=new T,Gf=new Rt,Co=new Gr,gl=new Ss,gu=new T,Hf=new T,Ln=class extends On{constructor(e=new Pt,t=new vn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vl.fromBufferAttribute(t,s-1),Gl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vl.distanceTo(Gl);e.setAttribute("lineDistance",new Qe(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(s),gl.radius+=r,e.ray.intersectsSphere(gl)===!1)return;Gf.copy(s).invert(),Co.copy(e.ray).applyMatrix4(Gf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=u,m=g-1;y<m;y+=l){let p=d.getX(y),S=d.getX(y+1),I=_l(this,e,Co,c,p,S,y);I&&t.push(I)}if(this.isLineLoop){let y=d.getX(g-1),m=d.getX(u),p=_l(this,e,Co,c,y,m,g-1);p&&t.push(p)}}else{let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=u,m=g-1;y<m;y+=l){let p=_l(this,e,Co,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=_l(this,e,Co,c,g-1,u,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _l(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Vl.fromBufferAttribute(a,s),Gl.fromBufferAttribute(a,r),t.distanceSqToSegment(Vl,Gl,gu,Hf)>n)return;gu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(gu);if(!(l<e.near||l>e.far))return{distance:l,point:Hf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Wf=new T,Xf=new T,Hr=class extends Ln{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wf.fromBufferAttribute(t,s),Xf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wf.distanceTo(Xf);e.setAttribute("lineDistance",new Qe(n,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zs=class extends Ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qf=new Rt,Au=new Gr,xl=new Ss,vl=new T,ws=class extends On{constructor(e=new Pt,t=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),xl.radius+=r,e.ray.intersectsSphere(xl)===!1)return;qf.copy(s).invert(),Au.copy(e.ray).applyMatrix4(qf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let g=h,y=u;g<y;g++){let m=l.getX(g);vl.fromBufferAttribute(f,m),Yf(vl,m,c,s,e,t,this)}}else{let h=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let g=h,y=u;g<y;g++)vl.fromBufferAttribute(f,g),Yf(vl,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yf(i,e,t,n,s,r,o){let a=Au.distanceSqToPoint(i);if(a<t){let c=new T;Au.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xo=class extends Pn{constructor(e=[],t=er,n,s,r,o,a,c,l,d){super(e,t,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hi=class extends Pn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var os=class extends Pn{constructor(e,t,n=Ei,s,r,o,a=Cn,c=Cn,l,d=rs,f=1){if(d!==rs&&d!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qo=class extends os{constructor(e,t=Ei,n=er,s,r,o=Cn,a=Cn,c,l=rs){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Yo=class extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qn=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],f=[],h=0,u=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function g(y,m,p,S,I,b,R,E,_,A,O){let U=b/_,z=R/A,V=b/2,j=R/2,D=E/2,Z=_+1,Q=A+1,k=0,K=0,J=new T;for(let se=0;se<Q;se++){let fe=se*z-j;for(let ze=0;ze<Z;ze++){let ot=ze*U-V;J[y]=ot*S,J[m]=fe*I,J[p]=D,l.push(J.x,J.y,J.z),J[y]=0,J[m]=0,J[p]=E>0?1:-1,d.push(J.x,J.y,J.z),f.push(ze/_),f.push(1-se/A),k+=1}}for(let se=0;se<A;se++)for(let fe=0;fe<_;fe++){let ze=h+fe+Z*se,ot=h+fe+Z*(se+1),q=h+(fe+1)+Z*(se+1),me=h+(fe+1)+Z*se;c.push(ze,ot,me),c.push(ot,q,me),K+=6}a.addGroup(u,K,O),u+=K,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Zo=class i extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new T,d=new Oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let u=n+f/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yn=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],h=[],u=[],g=0,y=[],m=n/2,p=0;S(),o===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(d),this.setAttribute("position",new Qe(f,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function S(){let b=new T,R=new T,E=0,_=(t-e)/n;for(let A=0;A<=r;A++){let O=[],U=A/r,z=U*(t-e)+e;for(let V=0;V<=s;V++){let j=V/s,D=j*c+a,Z=Math.sin(D),Q=Math.cos(D);R.x=z*Z,R.y=-U*n+m,R.z=z*Q,f.push(R.x,R.y,R.z),b.set(Z,_,Q).normalize(),h.push(b.x,b.y,b.z),u.push(j,1-U),O.push(g++)}y.push(O)}for(let A=0;A<s;A++)for(let O=0;O<r;O++){let U=y[O][A],z=y[O+1][A],V=y[O+1][A+1],j=y[O][A+1];(e>0||O!==0)&&(d.push(U,z,j),E+=3),(t>0||O!==r-1)&&(d.push(z,V,j),E+=3)}l.addGroup(p,E,0),p+=E}function I(b){let R=g,E=new Oe,_=new T,A=0,O=b===!0?e:t,U=b===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,m*U,0),h.push(0,U,0),u.push(.5,.5),g++;let z=g;for(let V=0;V<=s;V++){let D=V/s*c+a,Z=Math.cos(D),Q=Math.sin(D);_.x=O*Q,_.y=m*U,_.z=O*Z,f.push(_.x,_.y,_.z),h.push(0,U,0),E.x=Z*.5+.5,E.y=Q*.5*U+.5,u.push(E.x,E.y),g++}for(let V=0;V<s;V++){let j=R+V,D=z+V;b===!0?d.push(D,D+1,j):d.push(D+1,D,j),A+=3}l.addGroup(p,A,b===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Js=class i extends Yn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let d=n[s],h=n[s+1]-d,u=(o-d)/h;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Oe:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,s=[],r=[],o=[],a=new T,c=new Rt;for(let u=0;u<=e;u++){let g=u/e;s[u]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(At(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(At(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Jo=class extends ui{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,u=l-this.aY;c=h*d-u*f+this.aX,l=h*f+u*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hl=class extends Jo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function sd(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,d,f){let h=(o-r)/l-(a-r)/(l+d)+(a-o)/d,u=(a-o)/d-(c-o)/(d+f)+(c-a)/f;h*=d,u*=d,s(o,a,h,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Zf=new T,Jf=new T,_u=new sd,xu=new sd,vu=new sd,$s=class extends ui{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,d;this.closed||a>0?l=s[(a-1)%r]:(Jf.subVectors(s[0],s[1]).add(s[0]),l=Jf);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Zf.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Zf),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),u),y=Math.pow(f.distanceToSquared(h),u),m=Math.pow(h.distanceToSquared(d),u);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),_u.initNonuniformCatmullRom(l.x,f.x,h.x,d.x,g,y,m),xu.initNonuniformCatmullRom(l.y,f.y,h.y,d.y,g,y,m),vu.initNonuniformCatmullRom(l.z,f.z,h.z,d.z,g,y,m)}else this.curveType==="catmullrom"&&(_u.initCatmullRom(l.x,f.x,h.x,d.x,this.tension),xu.initCatmullRom(l.y,f.y,h.y,d.y,this.tension),vu.initCatmullRom(l.z,f.z,h.z,d.z,this.tension));return n.set(_u.calc(c),xu.calc(c),vu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $f(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function fg(i,e){let t=1-i;return t*t*e}function pg(i,e){return 2*(1-i)*i*e}function mg(i,e){return i*i*e}function No(i,e,t,n){return fg(i,e)+pg(i,t)+mg(i,n)}function gg(i,e){let t=1-i;return t*t*t*e}function _g(i,e){let t=1-i;return 3*t*t*i*e}function xg(i,e){return 3*(1-i)*i*i*e}function vg(i,e){return i*i*i*e}function Do(i,e,t,n,s){return gg(i,e)+_g(i,t)+xg(i,n)+vg(i,s)}var Wl=class extends ui{constructor(e=new Oe,t=new Oe,n=new Oe,s=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(e,s.x,r.x,o.x,a.x),Do(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xl=class extends ui{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(e,s.x,r.x,o.x,a.x),Do(e,s.y,r.y,o.y,a.y),Do(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ql=class extends ui{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yl=class extends ui{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zl=class extends ui{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(No(e,s.x,r.x,o.x),No(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends ui{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(No(e,s.x,r.x,o.x),No(e,s.y,r.y,o.y),No(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jl=class extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],d=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set($f(a,c.x,l.x,d.x,f.x),$f(a,c.y,l.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Oe().fromArray(s))}return this}},yg=Object.freeze({__proto__:null,ArcCurve:Hl,CatmullRomCurve3:$s,CubicBezierCurve:Wl,CubicBezierCurve3:Xl,EllipseCurve:Jo,LineCurve:ql,LineCurve3:Yl,QuadraticBezierCurve:Zl,QuadraticBezierCurve3:$o,SplineCurve:Jl});var Ks=class i extends Pt{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=At(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],d=1/t,f=new T,h=new Oe,u=new T,g=new T,y=new T,m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,u.x=p*1,u.y=-m,u.z=p*0,y.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:y.normalize(),c.push(y.x,y.y,y.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),c.push(u.x,u.y,u.z),y.copy(g)}for(let S=0;S<=t;S++){let I=n+S*d*s,b=Math.sin(I),R=Math.cos(I);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*b,f.y=e[E].y,f.z=e[E].x*R,o.push(f.x,f.y,f.z),h.x=S/t,h.y=E/(e.length-1),a.push(h.x,h.y);let _=c[3*E+0]*b,A=c[3*E+1],O=c[3*E+0]*R;l.push(_,A,O)}}for(let S=0;S<t;S++)for(let I=0;I<e.length-1;I++){let b=I+S*e.length,R=b,E=b+e.length,_=b+e.length+1,A=b+1;r.push(R,E,A),r.push(_,A,E)}this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ko=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,f=e/a,h=t/c,u=[],g=[],y=[],m=[];for(let p=0;p<d;p++){let S=p*h-o;for(let I=0;I<l;I++){let b=I*f-r;g.push(b,-S,0),y.push(0,0,1),m.push(I/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let I=S+l*p,b=S+l*(p+1),R=S+1+l*(p+1),E=S+1+l*p;u.push(I,b,E),u.push(b,R,E)}this.setIndex(u),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},jo=class i extends Pt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],d=[],f=e,h=(t-e)/s,u=new T,g=new Oe;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;u.x=f*Math.cos(p),u.y=f*Math.sin(p),c.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,d.push(g.x,g.y)}f+=h}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let S=p+m,I=S,b=S+n+1,R=S+n+2,E=S+1;a.push(I,b,E),a.push(b,R,E)}}this.setIndex(a),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Zn=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],f=new T,h=new T,u=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let S=[],I=p/n,b=o+I*a,R=e*Math.cos(b),E=Math.sqrt(e*e-R*R),_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){let O=A/t,U=s+O*r;f.x=-E*Math.cos(U),f.y=R,f.z=E*Math.sin(U),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(O+_,1-I),S.push(l++)}d.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let I=d[p][S+1],b=d[p][S],R=d[p+1][S],E=d[p+1][S+1];(p!==0||o>0)&&u.push(I,b,E),(p!==n-1||c<Math.PI)&&u.push(b,R,E)}this.setIndex(u),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wr=class i extends Pt{constructor(e=new $o(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,c=new T,l=new Oe,d=new T,f=[],h=[],u=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Qe(f,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function y(){for(let I=0;I<t;I++)m(I);m(r===!1?t:0),S(),p()}function m(I){d=e.getPointAt(I/t,d);let b=o.normals[I],R=o.binormals[I];for(let E=0;E<=s;E++){let _=E/s*Math.PI*2,A=Math.sin(_),O=-Math.cos(_);c.x=O*b.x+A*R.x,c.y=O*b.y+A*R.y,c.z=O*b.z+A*R.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let I=1;I<=t;I++)for(let b=1;b<=s;b++){let R=(s+1)*(I-1)+(b-1),E=(s+1)*I+(b-1),_=(s+1)*I+b,A=(s+1)*(I-1)+b;g.push(R,E,A),g.push(E,_,A)}}function S(){for(let I=0;I<=t;I++)for(let b=0;b<=s;b++)l.x=I/t,l.y=b/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new yg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Kf(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Kf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zn(i){let e={};for(let t=0;t<i.length;t++){let n=nr(i[t]);for(let s in n)e[s]=n[s]}return e}function Kf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}var Hp={clone:nr,merge:zn},Sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sg,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new T().fromArray(s.value);break;case"v4":this.uniforms[n].value=new an().fromArray(s.value);break;case"m3":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$l=class extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ft=class extends Ti{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=fc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Kl=class extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jl=class extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Qo=class extends vn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Cr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function yl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var As=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ql=class extends As{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Su,endingEnd:Su}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bu:r=e,a=2*t-n;break;case wu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bu:o=e,c=2*n-t;break;case wu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,u=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,S=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,I=(-1-u)*m+(1.5+u)*y+.5*g,b=u*m-u*y;for(let R=0;R!==a;++R)r[R]=p*o[d+R]+S*o[l+R]+I*o[c+R]+b*o[f+R];return r}},ec=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(s-t),f=1-d;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*d;return r}},tc=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nc=class extends As{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*g;return r}let h=a*2,u=e-1;for(let g=0;g!==a;++g){let y=o[l+g],m=o[c+g],p=u*h+g*2,S=f[p],I=f[p+1],b=e*h+g*2,R=d[b],E=d[b+1],_=Ag(n,t,S,R,s);r[g]=Wp(_,y,I,E,m)}return r}};function Wp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function wg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ag(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Wp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=wg(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var si=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),yl(e.settings)&&(n.settings={inTangents:Cr(e.settings.inTangents,Array),outTangents:Cr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case Dl:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth;break;case Mu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Dl;case this.InterpolantFactoryMethodSmooth:return bl;case this.InterpolantFactoryMethodBezier:return Mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;yl(this.settings)&&(jf(this.settings.inTangents,e),jf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;yl(this.settings)&&(Qf(this.settings.inTangents,e),Qf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ct("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ct("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&N0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ct("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,h=f-n,u=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[h+g]||y!==t[u+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let u=0;u!==n;++u)t[h+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,yl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Qf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Dl;var Ts=class extends si{constructor(e,t,n){super(e,t,n)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Uo;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends si{constructor(e,t,n,s){super(e,t,n,s)}};ic.prototype.ValueTypeName="color";var sc=class extends si{constructor(e,t,n,s){super(e,t,n,s)}};sc.prototype.ValueTypeName="number";var rc=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)Ct.slerpFlat(r,0,o,l-a,o,l,c);return r}},ea=class extends si{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new rc(this.times,this.values,this.getValueSize(),e)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends si{constructor(e,t,n){super(e,t,n)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Uo;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends si{constructor(e,t,n,s){super(e,t,n,s)}};oc.prototype.ValueTypeName="vector";var Al={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ep(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ep(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ep(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ac=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=l.length;f<h;f+=2){let u=l[f],g=l[f+1];if(u.global&&(u.lastIndex=0),u.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xp=new ac,Xr=class{constructor(e){this.manager=e!==void 0?e:Xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pr=new WeakMap,lc=class extends Xr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Al.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=Pr.get(o);f===void 0&&(f=[],Pr.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=Fr("img");function c(){d(),t&&t(this);let f=Pr.get(this)||[];for(let h=0;h<f.length;h++){let u=f[h];u.onLoad&&u.onLoad(this)}Pr.delete(this),r.manager.itemEnd(e)}function l(f){d(),s&&s(f),Al.remove(`image:${e}`);let h=Pr.get(this)||[];for(let u=0;u<h.length;u++){let g=h[u];g.onError&&g.onError(f)}Pr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Al.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var ta=class extends Xr{constructor(e){super(e)}load(e,t,n,s){let r=new Pn,o=new lc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},na=class extends On{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var yu=new Rt,tp=new T,np=new T,cc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(tp),np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(np),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(yu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ur||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ml=new T,Sl=new Ct,Oi=new T,ia=class extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ml,Sl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ml,Sl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ys=new T,ip=new Oe,sp=new Oe,Fn=class extends ia{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,t){return this.getViewBounds(e,ip,sp),t.subVectors(sp,ip)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Io*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Tu=class extends cc{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0}},sa=class extends na{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hc=class extends ia{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ra=class extends na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ir=-90,Lr=1,qr=class extends On{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(Ir,Lr,e,t);s.layers=this.layers,this.add(s);let r=new Fn(Ir,Lr,e,t);r.layers=this.layers,this.add(r);let o=new Fn(Ir,Lr,e,t);o.layers=this.layers,this.add(o);let a=new Fn(Ir,Lr,e,t);a.layers=this.layers,this.add(a);let c=new Fn(Ir,Lr,e,t);c.layers=this.layers,this.add(c);let l=new Fn(Ir,Lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,h,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},uc=class extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var od="\\[\\]\\.:\\/",Tg=new RegExp("["+od+"]","g"),ad="[^"+od+"]",Eg="[^"+od.replace("\\.","")+"]",Rg=/((?:WC+[\/:])*)/.source.replace("WC",ad),Cg=/(WCOD+)?/.source.replace("WCOD",Eg),Pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ad),Ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ad),Lg=new RegExp("^"+Rg+Cg+Pg+Ig+"$"),Ng=["material","materials","bones","map"],Eu=class{constructor(e,t,n){let s=n||nn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tg,"")}static parseTrackName(e){let t=Lg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ng.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=Eu;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qM=new Float32Array(1);var fd=class fd{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};fd.prototype.isMatrix2=!0;var Ru=fd;function ld(i,e,t,n){let s=Dg(n);switch(t){case qu:return i*e;case Zu:return i*e/s.components*s.byteLength;case yc:return i*e/s.components*s.byteLength;case Cs:return i*e*2/s.components*s.byteLength;case Mc:return i*e*2/s.components*s.byteLength;case Yu:return i*e*3/s.components*s.byteLength;case Pi:return i*e*4/s.components*s.byteLength;case Sc:return i*e*4/s.components*s.byteLength;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:case Tc:return Math.max(i,16)*Math.max(e,8)/4;case bc:case Ac:return Math.max(i,8)*Math.max(e,8)/2;case Ec:case Rc:case Pc:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cc:case da:case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yc:case Zc:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $c:case Kc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fa:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dg(i){switch(i){case Kn:case Gu:return{byteLength:1,components:1};case $r:case Hu:case Ci:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Ei:case _c:case Ri:return{byteLength:4,components:1};case Wu:case Xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function fm(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fg(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let d=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,d);else{f.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<f.length;u++){let g=f[h],y=f[u];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let u=0,g=f.length;u<g;u++){let y=f[u];i.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
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
#endif`,zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
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
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
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
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$g=`#ifdef USE_IRIDESCENCE
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
#endif`,Kg=`#ifdef USE_BUMPMAP
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
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,r_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,o_=`#define PI 3.141592653589793
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
} // validated`,a_=`vec3 transformedNormal = objectNormal;
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
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d_="gl_FragColor = linearToOutputTexel( gl_FragColor );",f_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
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
#endif`,__=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b_=`#ifdef USE_GRADIENTMAP
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
}`,w_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,R_=`#ifdef USE_ENVMAP
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
#endif`,C_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N_=`PhysicalMaterial material;
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
#endif`,D_=`uniform sampler2D dfgLUT;
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
}`,U_=`
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
#endif`,F_=`#if defined( RE_IndirectDiffuse )
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
#endif`,O_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,z_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q_=`#if defined( USE_POINTS_UV )
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
#endif`,Y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$_=`#if defined( USE_MORPHCOLORS )
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
#endif`,K_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j_=`#ifdef USE_MORPHTARGETS
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
#endif`,Q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rx=`#ifdef USE_NORMALMAP
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
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mx=`float getShadowMask() {
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ox=`uniform sampler2D t2D;
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform float backgroundBlurriness;
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`#include <common>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
}`,Wx=`#define DISTANCE
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
}`,Xx=`#define DISTANCE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`uniform float scale;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,Kx=`uniform vec3 diffuse;
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
}`,jx=`#define LAMBERT
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
}`,Qx=`#define LAMBERT
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
}`,ev=`#define MATCAP
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
}`,tv=`#define MATCAP
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
}`,nv=`#define NORMAL
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
}`,iv=`#define NORMAL
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
}`,sv=`#define PHONG
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
}`,rv=`#define PHONG
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
}`,ov=`#define STANDARD
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
}`,av=`#define STANDARD
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
}`,lv=`#define TOON
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
}`,cv=`#define TOON
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
}`,hv=`uniform float size;
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
}`,uv=`uniform vec3 diffuse;
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
}`,dv=`#include <common>
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
}`,fv=`uniform vec3 color;
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
}`,pv=`uniform float rotation;
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
}`,mv=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:Og,alphahash_pars_fragment:Bg,alphamap_fragment:zg,alphamap_pars_fragment:kg,alphatest_fragment:Vg,alphatest_pars_fragment:Gg,aomap_fragment:Hg,aomap_pars_fragment:Wg,batching_pars_vertex:Xg,batching_vertex:qg,begin_vertex:Yg,beginnormal_vertex:Zg,bsdfs:Jg,iridescence_fragment:$g,bumpmap_pars_fragment:Kg,clipping_planes_fragment:jg,clipping_planes_pars_fragment:Qg,clipping_planes_pars_vertex:e_,clipping_planes_vertex:t_,color_fragment:n_,color_pars_fragment:i_,color_pars_vertex:s_,color_vertex:r_,common:o_,defaultnormal_vertex:a_,displacementmap_pars_vertex:l_,displacementmap_vertex:c_,emissivemap_fragment:h_,emissivemap_pars_fragment:u_,colorspace_fragment:d_,colorspace_pars_fragment:f_,envmap_fragment:p_,envmap_common_pars_fragment:m_,envmap_pars_fragment:g_,envmap_pars_vertex:__,envmap_physical_pars_fragment:R_,envmap_vertex:x_,fog_vertex:v_,fog_pars_vertex:y_,fog_fragment:M_,fog_pars_fragment:S_,gradientmap_pars_fragment:b_,lightmap_pars_fragment:w_,lights_lambert_fragment:A_,lights_lambert_pars_fragment:T_,lights_pars_begin:E_,lights_toon_fragment:C_,lights_toon_pars_fragment:P_,lights_phong_fragment:I_,lights_phong_pars_fragment:L_,lights_physical_fragment:N_,lights_physical_pars_fragment:D_,lights_fragment_begin:U_,lights_fragment_maps:F_,lights_fragment_end:O_,lightprobes_pars_fragment:B_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:k_,logdepthbuf_pars_vertex:V_,logdepthbuf_vertex:G_,map_fragment:H_,map_pars_fragment:W_,map_particle_fragment:X_,map_particle_pars_fragment:q_,metalnessmap_fragment:Y_,metalnessmap_pars_fragment:Z_,morphinstance_vertex:J_,morphcolor_vertex:$_,morphnormal_vertex:K_,morphtarget_pars_vertex:j_,morphtarget_vertex:Q_,normal_fragment_begin:ex,normal_fragment_maps:tx,normal_pars_fragment:nx,normal_pars_vertex:ix,normal_vertex:sx,normalmap_pars_fragment:rx,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:ax,clearcoat_pars_fragment:lx,iridescence_pars_fragment:cx,opaque_fragment:hx,packing:ux,premultiplied_alpha_fragment:dx,project_vertex:fx,dithering_fragment:px,dithering_pars_fragment:mx,roughnessmap_fragment:gx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:vx,shadowmap_vertex:yx,shadowmask_pars_fragment:Mx,skinbase_vertex:Sx,skinning_pars_vertex:bx,skinning_vertex:wx,skinnormal_vertex:Ax,specularmap_fragment:Tx,specularmap_pars_fragment:Ex,tonemapping_fragment:Rx,tonemapping_pars_fragment:Cx,transmission_fragment:Px,transmission_pars_fragment:Ix,uv_pars_fragment:Lx,uv_pars_vertex:Nx,uv_vertex:Dx,worldpos_vertex:Ux,background_vert:Fx,background_frag:Ox,backgroundCube_vert:Bx,backgroundCube_frag:zx,cube_vert:kx,cube_frag:Vx,depth_vert:Gx,depth_frag:Hx,distance_vert:Wx,distance_frag:Xx,equirect_vert:qx,equirect_frag:Yx,linedashed_vert:Zx,linedashed_frag:Jx,meshbasic_vert:$x,meshbasic_frag:Kx,meshlambert_vert:jx,meshlambert_frag:Qx,meshmatcap_vert:ev,meshmatcap_frag:tv,meshnormal_vert:nv,meshnormal_frag:iv,meshphong_vert:sv,meshphong_frag:rv,meshphysical_vert:ov,meshphysical_frag:av,meshtoon_vert:lv,meshtoon_frag:cv,points_vert:hv,points_frag:uv,shadow_vert:dv,shadow_frag:fv,sprite_vert:pv,sprite_frag:mv},Fe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Hi={basic:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:zn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:zn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:zn([Fe.points,Fe.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:zn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:zn([Fe.common,Fe.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:zn([Fe.sprite,Fe.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:zn([Fe.common,Fe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:zn([Fe.lights,Fe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Hi.physical={uniforms:zn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};var th={r:0,b:0,g:0},gv=new Rt,pm=new dt;pm.set(-1,0,0,0,1,0,0,0,1);function _v(i,e,t,n,s,r){let o=new Xe(0),a=s===!0?0:1,c,l,d=null,f=0,h=null;function u(S){let I=S.isScene===!0?S.background:null;if(I&&I.isTexture){let b=S.backgroundBlurriness>0;I=e.get(I,b)}return I}function g(S){let I=!1,b=u(S);b===null?m(o,a):b&&b.isColor&&(m(b,1),I=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,I){let b=u(I);b&&b.isCubeTexture?(l===void 0&&(l=new rt(new qn(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:nr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(gv.makeRotationFromEuler(I.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pm),l.material.toneMapped=Lt.getTransfer(b.colorSpace)!==Yt,(d!==b||f!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new rt(new Ko(2,2),new pn({name:"BackgroundMaterial",uniforms:nr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(b.colorSpace)!==Yt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,I){S.getRGB(th,rd(i)),t.buffers.color.setClear(th.r,th.g,th.b,I,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,I=1){o.set(S),a=I,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:y,dispose:p}}function xv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(z,V,j,D,Z){let Q=!1,k=f(z,D,j,V);r!==k&&(r=k,l(r.object)),Q=u(z,D,j,Z),Q&&g(z,D,j,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,b(z,V,j,D),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return i.createVertexArray()}function l(z){return i.bindVertexArray(z)}function d(z){return i.deleteVertexArray(z)}function f(z,V,j,D){let Z=D.wireframe===!0,Q=n[V.id];Q===void 0&&(Q={},n[V.id]=Q);let k=z.isInstancedMesh===!0?z.id:0,K=Q[k];K===void 0&&(K={},Q[k]=K);let J=K[j.id];J===void 0&&(J={},K[j.id]=J);let se=J[Z];return se===void 0&&(se=h(c()),J[Z]=se),se}function h(z){let V=[],j=[],D=[];for(let Z=0;Z<t;Z++)V[Z]=0,j[Z]=0,D[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:D,object:z,attributes:{},index:null}}function u(z,V,j,D){let Z=r.attributes,Q=V.attributes,k=0,K=j.getAttributes();for(let J in K)if(K[J].location>=0){let fe=Z[J],ze=Q[J];if(ze===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(ze=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(ze=z.instanceColor)),fe===void 0||fe.attribute!==ze||ze&&fe.data!==ze.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function g(z,V,j,D){let Z={},Q=V.attributes,k=0,K=j.getAttributes();for(let J in K)if(K[J].location>=0){let fe=Q[J];fe===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(fe=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(fe=z.instanceColor));let ze={};ze.attribute=fe,fe&&fe.data&&(ze.data=fe.data),Z[J]=ze,k++}r.attributes=Z,r.attributesNum=k,r.index=D}function y(){let z=r.newAttributes;for(let V=0,j=z.length;V<j;V++)z[V]=0}function m(z){p(z,0)}function p(z,V){let j=r.newAttributes,D=r.enabledAttributes,Z=r.attributeDivisors;j[z]=1,D[z]===0&&(i.enableVertexAttribArray(z),D[z]=1),Z[z]!==V&&(i.vertexAttribDivisor(z,V),Z[z]=V)}function S(){let z=r.newAttributes,V=r.enabledAttributes;for(let j=0,D=V.length;j<D;j++)V[j]!==z[j]&&(i.disableVertexAttribArray(j),V[j]=0)}function I(z,V,j,D,Z,Q,k){k===!0?i.vertexAttribIPointer(z,V,j,Z,Q):i.vertexAttribPointer(z,V,j,D,Z,Q)}function b(z,V,j,D){y();let Z=D.attributes,Q=j.getAttributes(),k=V.defaultAttributeValues;for(let K in Q){let J=Q[K];if(J.location>=0){let se=Z[K];if(se===void 0&&(K==="instanceMatrix"&&z.instanceMatrix&&(se=z.instanceMatrix),K==="instanceColor"&&z.instanceColor&&(se=z.instanceColor)),se!==void 0){let fe=se.normalized,ze=se.itemSize,ot=e.get(se);if(ot===void 0)continue;let q=ot.buffer,me=ot.type,Me=ot.bytesPerElement,Ie=me===i.INT||me===i.UNSIGNED_INT||se.gpuType===_c;if(se.isInterleavedBufferAttribute){let pe=se.data,ge=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,wt=se.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Ve=0;Ve<J.locationSize;Ve++)p(J.location+Ve,pe.meshPerAttribute);z.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ve=0;Ve<J.locationSize;Ve++)m(J.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Ve=0;Ve<J.locationSize;Ve++)I(J.location+Ve,ze/J.locationSize,me,fe,ge*Me,(wt+ze/J.locationSize*Ve)*Me,Ie)}else{if(se.isInstancedBufferAttribute){for(let pe=0;pe<J.locationSize;pe++)p(J.location+pe,se.meshPerAttribute);z.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let pe=0;pe<J.locationSize;pe++)m(J.location+pe);i.bindBuffer(i.ARRAY_BUFFER,q);for(let pe=0;pe<J.locationSize;pe++)I(J.location+pe,ze/J.locationSize,me,fe,ze*Me,ze/J.locationSize*pe*Me,Ie)}}else if(k!==void 0){let fe=k[K];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(J.location,fe);break;case 3:i.vertexAttrib3fv(J.location,fe);break;case 4:i.vertexAttrib4fv(J.location,fe);break;default:i.vertexAttrib1fv(J.location,fe)}}}}S()}function R(){O();for(let z in n){let V=n[z];for(let j in V){let D=V[j];for(let Z in D){let Q=D[Z];for(let k in Q)d(Q[k].object),delete Q[k];delete D[Z]}}delete n[z]}}function E(z){if(n[z.id]===void 0)return;let V=n[z.id];for(let j in V){let D=V[j];for(let Z in D){let Q=D[Z];for(let k in Q)d(Q[k].object),delete Q[k];delete D[Z]}}delete n[z.id]}function _(z){for(let V in n){let j=n[V];for(let D in j){let Z=j[D];if(Z[z.id]===void 0)continue;let Q=Z[z.id];for(let k in Q)d(Q[k].object),delete Q[k];delete Z[z.id]}}}function A(z){for(let V in n){let j=n[V],D=z.isInstancedMesh===!0?z.id:0,Z=j[D];if(Z!==void 0){for(let Q in Z){let k=Z[Q];for(let K in k)d(k[K].object),delete k[K];delete Z[Q]}delete j[D],Object.keys(j).length===0&&delete n[V]}}}function O(){U(),o=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:A,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function vv(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let u=0;u<d;u++)h+=l[u];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function yv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Pi&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let A=_===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Kn&&_!==Ri&&!A&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(nt("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:I,maxFragmentUniforms:b,maxSamples:R,samples:E}}function Mv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ni,a=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let u=f.length!==0||h||n!==0||s;return s=h,n=f.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,u){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{let S=r?0:n,I=S*4,b=p.clippingState||null;c.value=b,b=d(g,h,I,u);for(let R=0;R!==I;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,u,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=u+y*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,b=u;I!==y;++I,b+=4)o.copy(f[I]).applyMatrix4(S,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var ga=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:js});r.uniforms.tEquirect.value=t;let o=new rt(s,r),a=t.minFilter;return t.minFilter===as&&(t.minFilter=Xn),new qr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},qp=256,Sv=3,bv=20,mm=256,gm=16,wv=3,Av=new T,Tv=new Xe,ih=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qr(1,10,null),this._boxMesh=new rt(new qn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Av}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,h=c.autoClearColor,u=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(Tv));let m=new qr(n,s,d);return m.position.copy(a),m.update(c,e),c.autoClear=f,c.autoClearColor=h,c.autoClearDepth=u,c.autoClearStencil=g,e.background=y,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(qp,td(e))}_fromTexture(e,t){e.mapping===er||e.mapping===Jr?this._setSize(e.image.length===0?qp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Yp(e,!1,!1),n=Math.log2(e)-Sv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Yp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===er||e.mapping===Jr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ev(),this._integrationMaterial=Rv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/gm);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-wv)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(mm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Cv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Yp(i,e,t){return new ga(i,{minFilter:as,generateMipmaps:e,type:Ci,colorSpace:Fo,depthBuffer:t})}function _a(i,e,t){return new pn({name:i,uniforms:e,vertexShader:bt.cube_vert,fragmentShader:t,side:Jn,blending:js,depthTest:!1,depthWrite:!1})}function Ev(){return _a("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mm}u

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
	`)}function Rv(){return _a("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gm}},`

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
	`)}function Cv(){return _a("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bv}
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
	`)}function Zp(){return _a("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jp(){return _a("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Pv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,u=!1){return h==null?null:u?o(h):r(h)}function r(h){if(h&&h.isTexture){let u=h.mapping;if(u===pc||u===mc)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new ga(g.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let u=h.mapping,g=u===pc||u===mc,y=u===er||u===Jr;if(g||y){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new ih(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new ih(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function a(h,u){return u===pc?h.mapping=er:u===mc&&(h.mapping=Jr),h}function c(h){let u=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&u++;return u===g}function l(h){let u=h.target;u.removeEventListener("dispose",l);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function d(h){let u=h.target;u.removeEventListener("dispose",d);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Iv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Po("WebGLRenderer: "+n+" extension not supported."),s}}}function Lv(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function d(g){let y=g.attributes;for(let m in y)e.update(y[m],i.ARRAY_BUFFER)}function f(g){let y=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let S=y!==null?y.array.length:m.array.length/3-1,I=m.count>=65535?Ho:Go,b=new I(Math.ceil(S/3)*6,1),R=b.array;if(y!==null){let _=y.array;p=y.version;for(let A=0,O=0;A<S;A+=3){let U=_[A+0],z=_[A+1],V=_[A+2];R[O++]=U,R[O++]=z,R[O++]=z,R[O++]=V,R[O++]=V,R[O++]=U}}else{p=m.version;for(let _=0,A=0;_<S;_+=3){let O=_+0,U=_+1,z=_+2;R[A++]=O,R[A++]=U,R[A++]=U,R[A++]=z,R[A++]=z,R[A++]=O}}b.version=p;let E=r.get(g);E&&e.remove(E),r.set(g,b)}function h(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&f(g)}else f(g);return r.get(g)}function u(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return{get:l,update:d,getWireframeAttribute:h,dispose:u}}function Nv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),t.update(h,n,1)}function l(f,h,u){u!==0&&(i.drawElementsInstanced(n,h,r,f*o,u),t.update(h,n,u))}function d(f,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,u);let y=0;for(let m=0;m<u;m++)y+=h[m];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Dv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Uv(i,e,t){let n=new WeakMap,s=new an;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==f){let O=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",O)};h!==void 0&&h.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],I=0;u===!0&&(I=1),g===!0&&(I=2),y===!0&&(I=3);let b=a.attributes.position.count*I,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*R*4*f),_=new zo(E,b,R,f);_.type=Ri,_.needsUpdate=!0;let A=I*4;for(let U=0;U<f;U++){let z=m[U],V=p[U],j=S[U],D=b*R*4*U;for(let Z=0;Z<z.count;Z++){let Q=Z*A;u===!0&&(s.fromBufferAttribute(z,Z),E[D+Q+0]=s.x,E[D+Q+1]=s.y,E[D+Q+2]=s.z,E[D+Q+3]=0),g===!0&&(s.fromBufferAttribute(V,Z),E[D+Q+4]=s.x,E[D+Q+5]=s.y,E[D+Q+6]=s.z,E[D+Q+7]=0),y===!0&&(s.fromBufferAttribute(j,Z),E[D+Q+8]=s.x,E[D+Q+9]=s.y,E[D+Q+10]=s.z,E[D+Q+11]=j.itemSize===4?s.w:1)}}h={count:f,texture:_,size:new Oe(b,R)},n.set(a,h),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let y=0;y<l.length;y++)u+=l[y];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Fv(i,e,t,n,s){let r=new WeakMap;function o(l){let d=s.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return h}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var Ov={[Du]:"LINEAR_TONE_MAPPING",[Uu]:"REINHARD_TONE_MAPPING",[Fu]:"CINEON_TONE_MAPPING",[Ou]:"ACES_FILMIC_TONE_MAPPING",[zu]:"AGX_TONE_MAPPING",[ku]:"NEUTRAL_TONE_MAPPING",[Bu]:"CUSTOM_TONE_MAPPING"};function Bv(i,e,t,n,s,r){let o=new ii(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,d=new Pt;d.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let f=new $l({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new rt(d,f),u=new hc(-1,1,1,-1,0,1),g=null,y=null,m=!1,p,S=null,I=[],b=!1;this.setSize=function(R,E){o.setSize(R,E),a!==null&&a.setSize(R,E),c!==null&&c.setSize(R,E);for(let _=0;_<I.length;_++){let A=I[_];A.setSize&&A.setSize(R,E)}},this.setEffects=function(R){I=R,b=I.length>0&&I[0].isRenderPass===!0;let E=o.width,_=o.height;I.length>0&&a===null&&(a=new ii(E,_,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),c=new ii(E,_,{type:Ci,depthBuffer:!1,stencilBuffer:!1}));let A=s===!0&&I.some(O=>O.needsDepthTexture===!0);A!==(o.depthTexture!==null)&&(A===!0&&l===null&&(l=new os(E,_),r===!0&&(l.format=ls,l.type=tr)),o.dispose(),o.depthTexture=A?l:null,o.resolveDepthBuffer=A,o.storeMultisampledDepthBuffer=A);for(let O=0;O<I.length;O++){let U=I[O];U.setSize&&U.setSize(E,_),A&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(l)}},this.begin=function(R,E){if(m||R.toneMapping===Vi&&I.length===0)return!1;if(S=E,E!==null){let _=E.width,A=E.height;(o.width!==_||o.height!==A)&&this.setSize(_,A)}return b===!1&&R.setRenderTarget(o),p=R.toneMapping,R.toneMapping=Vi,!0},this.hasRenderPass=function(){return b},this.end=function(R,E){R.toneMapping=p,m=!0;let _=o,A=a;for(let O=0;O<I.length;O++){let U=I[O];U.enabled!==!1&&(U.render(R,A,_,E),U.needsSwap!==!1&&(_=A,A=A===a?c:a))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,f.defines={},Lt.getTransfer(g)===Yt&&(f.defines.SRGB_TRANSFER="");let O=Ov[y];O&&(f.defines[O]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(S),R.render(h,u),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}var _m=new Pn,xm=new os(1,1),vm=new qo(1),ym=new zo,Mm=new Ol,Sm=new Xo,$p=[],Kp=[],jp=new Float32Array(16),Qp=new Float32Array(9),em=new Float32Array(4);function jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=$p[s];if(r===void 0&&(r=new Float32Array(s),$p[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rh(i,e){let t=Kp[e];t===void 0&&(t=new Int32Array(e),Kp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2fv(this.addr,e),bn(t,e)}}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;i.uniform3fv(this.addr,e),bn(t,e)}}function Gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4fv(this.addr,e),bn(t,e)}}function Hv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;em.set(n),i.uniformMatrix2fv(this.addr,!1,em),bn(t,n)}}function Wv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;Qp.set(n),i.uniformMatrix3fv(this.addr,!1,Qp),bn(t,n)}}function Xv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;jp.set(n),i.uniformMatrix4fv(this.addr,!1,jp),bn(t,n)}}function qv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2iv(this.addr,e),bn(t,e)}}function Zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3iv(this.addr,e),bn(t,e)}}function Jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4iv(this.addr,e),bn(t,e)}}function $v(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2uiv(this.addr,e),bn(t,e)}}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3uiv(this.addr,e),bn(t,e)}}function Qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4uiv(this.addr,e),bn(t,e)}}function oh(i){return i.version===0&&(i.compareFunction=Ku,i.needsUpdate=!0),i}function ey(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=oh(xm):r=_m,t.setTexture2D(e||r,s)}function ty(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mm,s)}function ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=oh(vm):r=Sm,t.setTextureCube(e||r,s)}function iy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ym,s)}function sy(i){switch(i){case 5126:return zv;case 35664:return kv;case 35665:return Vv;case 35666:return Gv;case 35674:return Hv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return qv;case 35667:case 35671:return Yv;case 35668:case 35672:return Zv;case 35669:case 35673:return Jv;case 5125:return $v;case 36294:return Kv;case 36295:return jv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}function ry(i,e){i.uniform1fv(this.addr,e)}function oy(i,e){let t=jr(e,this.size,2);i.uniform2fv(this.addr,t)}function ay(i,e){let t=jr(e,this.size,3);i.uniform3fv(this.addr,t)}function ly(i,e){let t=jr(e,this.size,4);i.uniform4fv(this.addr,t)}function cy(i,e){let t=jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hy(i,e){let t=jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function uy(i,e){let t=jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dy(i,e){i.uniform1iv(this.addr,e)}function fy(i,e){i.uniform2iv(this.addr,e)}function py(i,e){i.uniform3iv(this.addr,e)}function my(i,e){i.uniform4iv(this.addr,e)}function gy(i,e){i.uniform1uiv(this.addr,e)}function _y(i,e){i.uniform2uiv(this.addr,e)}function xy(i,e){i.uniform3uiv(this.addr,e)}function vy(i,e){i.uniform4uiv(this.addr,e)}function yy(i,e,t){let n=this.cache,s=e.length,r=rh(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=oh(xm):o=_m;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function My(i,e,t){let n=this.cache,s=e.length,r=rh(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mm,r[o])}function Sy(i,e,t){let n=this.cache,s=e.length,r=rh(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=oh(vm):o=Sm;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function by(i,e,t){let n=this.cache,s=e.length,r=rh(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ym,r[o])}function wy(i){switch(i){case 5126:return ry;case 35664:return oy;case 35665:return ay;case 35666:return ly;case 35674:return cy;case 35675:return hy;case 35676:return uy;case 5124:case 35670:return dy;case 35667:case 35671:return fy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return _y;case 36295:return xy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return by}}var gd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sy(t.type)}},_d=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wy(t.type)}},xd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},pd=/(\w+)(\])?(\[|\.)?/g;function tm(i,e){i.seq.push(e),i.map[e.id]=e}function Ay(i,e,t){let n=i.name,s=n.length;for(pd.lastIndex=0;;){let r=pd.exec(n),o=pd.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){tm(t,l===void 0?new gd(a,i,e):new _d(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new xd(a),tm(t,f)),t=f}}}var Kr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Ay(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function nm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ty=37297,Ey=0;function Ry(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var im=new dt;function Cy(i){Lt._getMatrix(im,Lt.workingColorSpace,i);let e=`mat3( ${im.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(i)){case Oo:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ry(i.getShaderSource(e),a)}else return r}function Py(i,e){let t=Cy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Iy={[Du]:"Linear",[Uu]:"Reinhard",[Fu]:"Cineon",[Ou]:"ACESFilmic",[zu]:"AgX",[ku]:"Neutral",[Bu]:"Custom"};function Ly(i,e){let t=Iy[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nh=new T;function Ny(){Lt.getLuminanceCoefficients(nh);let i=nh.x.toFixed(4),e=nh.y.toFixed(4),t=nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function Uy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ma(i){return i!==""}function rm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function om(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(i){return i.replace(Oy,By)}function By(i,e){let t=bt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return vd(t)}var zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function am(i){return i.replace(zy,ky)}function ky(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Vy={[oa]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function Gy(i){return Vy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hy={[Jr]:"ENVMAP_MODE_REFRACTION"};function Wy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xy={[fc]:"ENVMAP_BLENDING_MULTIPLY",[Tp]:"ENVMAP_BLENDING_MIX",[Ep]:"ENVMAP_BLENDING_ADD"};function qy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xy[i.combine]||"ENVMAP_BLENDING_NONE"}function Yy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Gy(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Wy(t),f=qy(t),h=Dy(t),u=Uy(r),g=s.createProgram(),y,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(ma).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(ma).join(`
`),m.length>0&&(m+=`
`)):(y=[lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),m=[lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?bt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?Ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,Py("linearToOutputTexel",t.outputColorSpace),Ny(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),o=vd(o),o=rm(o,t),o=om(o,t),a=vd(a),a=rm(a,t),a=om(a,t),o=am(o),a=am(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=p+y+o,I=p+m+a,b=nm(s,s.VERTEX_SHADER,S),R=nm(s,s.FRAGMENT_SHADER,I);s.attachShader(g,b),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(U){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(g)||"",V=s.getShaderInfoLog(b)||"",j=s.getShaderInfoLog(R)||"",D=z.trim(),Z=V.trim(),Q=j.trim(),k=!0,K=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,R);else{let J=sm(s,b,"vertex"),se=sm(s,R,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+D+`
`+J+`
`+se)}else D!==""?nt("WebGLProgram: Program Info Log:",D):(Z===""||Q==="")&&(K=!1);K&&(U.diagnostics={runnable:k,programLog:D,vertexShader:{log:Z,prefix:y},fragmentShader:{log:Q,prefix:m}})}s.deleteShader(b),s.deleteShader(R),_=new Kr(s,g),A=Fy(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,Ty)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ey++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=R,this}var Zy=0,yd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Md(e),t.set(e,n)),n}},Md=class{constructor(e){this.id=Zy++,this.code=e,this.usedTimes=0}};function Jy(i){return i===Cs||i===da||i===fa}function $y(i,e,t,n,s,r){let o=new ko,a=new yd,c=new Set,l=[],d=new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,A,O,U,z,V){let j=U.fog,D=z.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=e.get(_.envMap||Z,Q),K=h[_.type],J=n.precision;_.precision!==null&&(J=n.getMaxPrecision(_.precision),J!==_.precision&&nt("WebGLProgram.getParameters:",_.precision,"not supported, using",J,"instead."));let se=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,fe=se!==void 0?se.length:0,ze=0;D.morphAttributes.position!==void 0&&(ze=1),D.morphAttributes.normal!==void 0&&(ze=2),D.morphAttributes.color!==void 0&&(ze=3);let ot,q,me,Me;if(K){let Le=Hi[K];ot=Le.vertexShader,q=Le.fragmentShader}else{ot=_.vertexShader,q=_.fragmentShader;let Le=a.getVertexShaderStage(_),Gt=a.getFragmentShaderStage(_);a.update(_,Le,Gt),me=Le.id,Me=Gt.id}let Ie=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),ge=z.isInstancedMesh===!0,wt=z.isBatchedMesh===!0,Ve=!!_.map,Ue=!!_.matcap,ft=!!k,lt=ft&&k.isPMREMTexture===!0,ht=!!_.aoMap,Wt=!!_.lightMap,un=!!_.bumpMap&&_.wireframe===!1,Bt=!!_.normalMap,In=!!_.displacementMap,$t=!!_.emissiveMap,Nt=!!_.metalnessMap,wn=!!_.roughnessMap,An=_.anisotropy>0,B=_.clearcoat>0,kn=_.diffuseRoughness>0,Kt=_.dispersion>0,Zt=_.retroreflectivity>0,Ne=_.iridescence>0,cn=_.sheen>0,le=_.transmission>0,at=An&&!!_.anisotropyMap,C=B&&!!_.clearcoatMap,v=B&&!!_.clearcoatNormalMap,H=B&&!!_.clearcoatRoughnessMap,de=kn&&!!_.diffuseRoughnessMap,oe=Ne&&!!_.iridescenceMap,be=Ne&&!!_.iridescenceThicknessMap,Re=cn&&!!_.sheenColorMap,te=cn&&!!_.sheenRoughnessMap,ie=!!_.specularMap,we=!!_.specularColorMap,N=!!_.specularIntensityMap,ne=le&&!!_.transmissionMap,ee=le&&!!_.thicknessMap,Ae=!!_.gradientMap,ve=!!_.alphaMap,Te=_.alphaTest>0,Ze=!!_.alphaHash,xt=!!_.extensions,xe=Vi;_.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(xe=i.toneMapping);let je=lt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,gt={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:ot,fragmentShader:q,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:J,batching:wt,batchingColor:wt&&z._colorsTexture!==null,instancing:ge,instancingColor:ge&&z.instanceColor!==null,instancingMorph:ge&&z.morphTexture!==null,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:Ue,envMap:ft,envMapMode:ft&&k.mapping,envMapPMREM:lt,envMapMaxLod:lt?je.length-1:null,envMapSize:lt?je[0].width:null,aoMap:ht,lightMap:Wt,bumpMap:un,normalMap:Bt,displacementMap:In,emissiveMap:$t,normalMapObjectSpace:Bt&&_.normalMapType===Pp,normalMapTangentSpace:Bt&&_.normalMapType===Qc,packedNormalMap:Bt&&_.normalMapType===Qc&&Jy(_.normalMap.format),metalnessMap:Nt,roughnessMap:wn,anisotropy:An,anisotropyMap:at,clearcoat:B,clearcoatMap:C,clearcoatNormalMap:v,clearcoatRoughnessMap:H,diffuseRoughness:kn,diffuseRoughnessMap:de,dispersion:Kt,retroreflection:Zt,iridescence:Ne,iridescenceMap:oe,iridescenceThicknessMap:be,sheen:cn,sheenColorMap:Re,sheenRoughnessMap:te,specularMap:ie,specularColorMap:we,specularIntensityMap:N,transmission:le,transmissionMap:ne,thicknessMap:ee,gradientMap:Ae,opaque:_.transparent===!1&&_.blending===Zr&&_.alphaToCoverage===!1,alphaMap:ve,alphaTest:Te,alphaHash:Ze,combine:_.combine,mapUv:Ve&&u(_.map.channel),aoMapUv:ht&&u(_.aoMap.channel),lightMapUv:Wt&&u(_.lightMap.channel),bumpMapUv:un&&u(_.bumpMap.channel),normalMapUv:Bt&&u(_.normalMap.channel),displacementMapUv:In&&u(_.displacementMap.channel),emissiveMapUv:$t&&u(_.emissiveMap.channel),metalnessMapUv:Nt&&u(_.metalnessMap.channel),roughnessMapUv:wn&&u(_.roughnessMap.channel),anisotropyMapUv:at&&u(_.anisotropyMap.channel),clearcoatMapUv:C&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:be&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:te&&u(_.sheenRoughnessMap.channel),specularMapUv:ie&&u(_.specularMap.channel),specularColorMapUv:we&&u(_.specularColorMap.channel),specularIntensityMapUv:N&&u(_.specularIntensityMap.channel),transmissionMapUv:ne&&u(_.transmissionMap.channel),thicknessMapUv:ee&&u(_.thicknessMap.channel),alphaMapUv:ve&&u(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Bt||An),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!D.attributes.uv&&(Ve||ve),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&Bt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ze,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:V.filter(Le=>Le.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&Lt.getTransfer(_.map.colorSpace)===Yt,decodeVideoTextureEmissive:$t&&_.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(_.emissiveMap.colorSpace)===Yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mn,flipSided:_.side===Jn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xt&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&_.extensions.multiDraw===!0||wt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function y(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let O in _.defines)A.push(O),A.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(m(A,_),p(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function m(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapPMREM),_.push(A.envMapMaxLod),_.push(A.envMapSize),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.diffuseRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.numLightProbeGrids),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function p(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.diffuseRoughness&&o.enable(25),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){let A=h[_.type],O;if(A){let U=Hi[A];O=Hp.clone(U.uniforms)}else O=_.uniforms;return O}function I(_,A){let O=d.get(A);return O!==void 0?++O.usedTimes:(O=new Yy(i,A,_,s),l.push(O),d.set(A,O)),O}function b(_){if(--_.usedTimes===0){let A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function R(_){a.remove(_)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:S,acquireProgram:I,releaseProgram:b,releaseShaderCache:R,programs:l,dispose:E}}function Ky(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function cm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function a(h,u,g,y,m,p){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:u,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},i[e]=S):(S.id=h.id,S.object=h,S.geometry=u,S.material=g,S.materialVariant=o(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function c(h,u,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);let I=a(h,u,g,y,m,p);g.transmission>0?n.push(I):g.transparent===!0?s.push(I):t.push(I)}function l(h,u,g,y,m,p){let S=a(h,u,g,y,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function d(h,u){t.length>1&&t.sort(h||jy),n.length>1&&n.sort(u||cm),s.length>1&&s.sort(u||cm)}function f(){for(let h=e,u=i.length;h<u;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:d}}function Qy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new hm,i.set(n,[o])):s>=r.length?(o=new hm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function eM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new Xe};break;case"SpotLight":t={position:new T,direction:new T,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function tM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var nM=0;function iM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sM(i){let e=new eM,t=tM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new Rt,o=new Rt;function a(l){let d=0,f=0,h=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let u=0,g=0,y=0,m=0,p=0,S=0,I=0,b=0,R=0,E=0,_=0,A=0,O=0,U=0;l.sort(iM);for(let V=0,j=l.length;V<j;V++){let D=l[V],Z=D.color,Q=D.intensity,k=D.distance,K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Cs?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=Z.r*Q,f+=Z.g*Q,h+=Z.b*Q;else if(D.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(D.sh.coefficients[J],Q);U++}else if(D.isSunLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,fe=t.get(D);fe.shadowIntensity=se.intensity,fe.shadowBias=se.bias,fe.shadowNormalBias=se.normalBias,fe.shadowRadius=se.radius,fe.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),n.sunShadow[g]=fe,n.sunShadowMap[g]=K;let ze=se.getViewportCount();for(let ot=0;ot<ze;ot++)n.sunShadowMatrix[y+ot]=se.getMatrix(ot),n.sunShadowCascade[y+ot]=se._cascadeData[ot];y+=ze,g++}n.sun[u]=J,u++}else if(D.isDirectionalLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,fe=t.get(D);fe.shadowIntensity=se.intensity,fe.shadowBias=se.bias,fe.shadowNormalBias=se.normalBias,fe.shadowRadius=se.radius,fe.shadowMapSize=se.mapSize,n.directionalShadow[m]=fe,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=D.shadow.matrix,R++}n.directional[m]=J,m++}else if(D.isSpotLight){let J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(Z).multiplyScalar(Q),J.distance=k,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,n.spot[S]=J;let se=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,se.updateMatrices(D),D.castShadow&&O++),n.spotLightMatrix[S]=se.matrix,D.castShadow){let fe=t.get(D);fe.shadowIntensity=se.intensity,fe.shadowBias=se.bias,fe.shadowNormalBias=se.normalBias,fe.shadowRadius=se.radius,fe.shadowMapSize=se.mapSize,n.spotShadow[S]=fe,n.spotShadowMap[S]=K,_++}S++}else if(D.isRectAreaLight){let J=e.get(D);J.color.copy(Z).multiplyScalar(Q),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),n.rectArea[I]=J,I++}else if(D.isPointLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){let se=D.shadow,fe=t.get(D);fe.shadowIntensity=se.intensity,fe.shadowBias=se.bias,fe.shadowNormalBias=se.normalBias,fe.shadowRadius=se.radius,fe.shadowMapSize=se.mapSize,fe.shadowCameraNear=se.camera.near,fe.shadowCameraFar=se.camera.far,n.pointShadow[p]=fe,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=J,p++}else if(D.isHemisphereLight){let J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(Q),J.groundColor.copy(D.groundColor).multiplyScalar(Q),n.hemi[b]=J,b++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;let z=n.hash;(z.sunLength!==u||z.directionalLength!==m||z.pointLength!==p||z.spotLength!==S||z.rectAreaLength!==I||z.hemiLength!==b||z.numSunShadows!==g||z.numDirectionalShadows!==R||z.numPointShadows!==E||z.numSpotShadows!==_||z.numSpotMaps!==A||z.numLightProbes!==U)&&(n.sun.length=u,n.directional.length=m,n.spot.length=S,n.rectArea.length=I,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+A-O,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=U,z.sunLength=u,z.directionalLength=m,z.pointLength=p,z.spotLength=S,z.rectAreaLength=I,z.hemiLength=b,z.numSunShadows=g,z.numDirectionalShadows=R,z.numPointShadows=E,z.numSpotShadows=_,z.numSpotMaps=A,z.numLightProbes=U,n.version=nM++)}function c(l,d){let f=0,h=0,u=0,g=0,y=0,m=0,p=d.matrixWorldInverse;for(let S=0,I=l.length;S<I;S++){let b=l[S];if(b.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),f++}else if(b.isDirectionalLight){let R=n.directional[h];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),h++}else if(b.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let R=n.point[u];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),u++}else if(b.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function um(i){let e=new sM(i),t=[],n=[],s=[];function r(f){d.camera=f,t.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){n.push(f)}function c(){e.setup(t),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function l(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function rM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new um(i),e.set(s,[a])):r>=o.length?(a=new um(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var oM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aM=`uniform sampler2D shadow_pass;
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
}`,lM=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],cM=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],dm=new Rt,pa=new T,md=new T;function hM(i,e,t){let n=new bs,s=new Oe,r=new Oe,o=new an,a=new Kl,c=new jl,l={},d=t.maxTextureSize,f={[Rs]:Jn,[Jn]:Rs,[Mn]:Mn},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:oM,fragmentShader:aM}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new rt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let p=this.type;this.render=function(E,_,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===ap&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);let O=i.getRenderTarget(),U=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),V=i.state;V.setBlending(js),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let j=p!==this.type;j&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(Z=>Z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,Z=E.length;D<Z;D++){let Q=E[D],k=Q.shadow;if(k===void 0){nt("WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let K=k.getFrameExtents();s.multiply(K),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/K.x),s.x=r.x*K.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/K.y),s.y=r.y*K.y,k.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=J,k.map===null||j===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Yr){if(Q.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ii(s.x,s.y,{format:Cs,type:Ci,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),k.map.texture.name=Q.name+".shadowMap",k.map.depthTexture=new os(s.x,s.y,Ri),k.map.depthTexture.name=Q.name+".shadowMapDepth",k.map.depthTexture.format=rs,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn}else Q.isPointLight?(k.map=new ga(s.x),k.map.depthTexture=new qo(s.x,Ei)):(k.map=new ii(s.x,s.y),k.map.depthTexture=new os(s.x,s.y,Ei)),k.map.depthTexture.name=Q.name+".shadowMap",k.map.depthTexture.format=rs,this.type===oa?(k.map.depthTexture.compareFunction=J?$u:Ju,k.map.depthTexture.minFilter=Xn,k.map.depthTexture.magFilter=Xn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let se=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Q.isPointLight!==!0&&k.updateMatrices(Q,A);let fe=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:A.layers;for(let ze=0;ze<se;ze++){let ot=k.getCamera(ze);if(Q.isPointLight){let q=k.camera,me=k.matrix,Me=Q.distance||q.far;Me!==q.far&&(q.far=Me,q.updateProjectionMatrix()),pa.setFromMatrixPosition(Q.matrixWorld),q.position.copy(pa),md.copy(q.position),md.add(lM[ze]),q.up.copy(cM[ze]),q.lookAt(md),q.updateMatrixWorld(),me.makeTranslation(-pa.x,-pa.y,-pa.z),dm.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),k._frustum.setFromProjectionMatrix(dm,q.coordinateSystem,q.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,ze),i.clear();else{ze===0&&(i.setRenderTarget(k.map),i.clear());let q=k.getViewport(ze);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),V.viewport(o)}n=k.getFrustum(ze),b(_,A,ot,Q,fe,this.type)}k.isPointLightShadow!==!0&&this.type===Yr&&S(k,A),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(O,U,z)};function S(E,_){let A=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new ii(s.x,s.y,{format:Cs,type:Ci}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,A,h,y,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,A,u,y,null)}function I(E,_,A,O){let U=null,z=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(z!==void 0)U=z;else if(U=A.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let V=U.uuid,j=_.uuid,D=l[V];D===void 0&&(D={},l[V]=D);let Z=D[j];Z===void 0&&(Z=U.clone(),D[j]=Z,_.addEventListener("dispose",R)),U=Z}if(U.visible=_.visible,U.wireframe=_.wireframe,O===Yr?U.side=_.shadowSide!==null?_.shadowSide:_.side:U.side=_.shadowSide!==null?_.shadowSide:f[_.side],U.alphaMap=_.alphaMap,U.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,U.map=_.map,U.clipShadows=_.clipShadows,U.clippingPlanes=_.clippingPlanes,U.clipIntersection=_.clipIntersection,U.displacementMap=_.displacementMap,U.displacementScale=_.displacementScale,U.displacementBias=_.displacementBias,U.wireframeLinewidth=_.wireframeLinewidth,U.linewidth=_.linewidth,A.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let V=i.properties.get(U);V.light=A}return U}function b(E,_,A,O,U,z){if(E.visible===!1)return;if(E.layers.test(U)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&z===Yr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);let D=e.update(E),Z=E.material;if(Array.isArray(Z)){let Q=D.groups;for(let k=0,K=Q.length;k<K;k++){let J=Q[k],se=Z[J.materialIndex];if(se&&se.visible){let fe=I(E,se,O,z);E.onBeforeShadow(i,E,_,A,D,fe,J),i.renderBufferDirect(A,null,D,fe,E,J),E.onAfterShadow(i,E,_,A,D,fe,J)}}}else if(Z.visible){let Q=I(E,Z,O,z);E.onBeforeShadow(i,E,_,A,D,Q,null),i.renderBufferDirect(A,null,D,Q,E,null),E.onAfterShadow(i,E,_,A,D,Q,null)}}let j=E.children;for(let D=0,Z=j.length;D<Z;D++)b(j[D],_,A,O,U,z)}function R(E){E.target.removeEventListener("dispose",R);for(let A in l){let O=l[A],U=E.target.uuid;U in O&&(O[U].dispose(),delete O[U])}}}function uM(i,e){function t(){let N=!1,ne=new an,ee=null,Ae=new an(0,0,0,0);return{setMask:function(ve){ee!==ve&&!N&&(i.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){N=ve},setClear:function(ve,Te,Ze,xt,xe){xe===!0&&(ve*=xt,Te*=xt,Ze*=xt),ne.set(ve,Te,Ze,xt),Ae.equals(ne)===!1&&(i.clearColor(ve,Te,Ze,xt),Ae.copy(ne))},reset:function(){N=!1,ee=null,Ae.set(-1,0,0,0)}}}function n(){let N=!1,ne=!1,ee=null,Ae=null,ve=null;return{setReversed:function(Te){if(ne!==Te){let Ze=e.get("EXT_clip_control");Te?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),ne=Te;let xt=ve;ve=null,this.setClear(xt)}},getReversed:function(){return ne},setTest:function(Te){Te?pe(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Te){ee!==Te&&!N&&(i.depthMask(Te),ee=Te)},setFunc:function(Te){if(ne&&(Te=kp[Te]),Ae!==Te){switch(Te){case Tl:i.depthFunc(i.NEVER);break;case El:i.depthFunc(i.ALWAYS);break;case Rl:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Cl:i.depthFunc(i.EQUAL);break;case Pl:i.depthFunc(i.GEQUAL);break;case Il:i.depthFunc(i.GREATER);break;case Ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=Te}},setLocked:function(Te){N=Te},setClear:function(Te){ve!==Te&&(ve=Te,ne&&(Te=1-Te),i.clearDepth(Te))},reset:function(){N=!1,ee=null,Ae=null,ve=null,ne=!1}}}function s(){let N=!1,ne=null,ee=null,Ae=null,ve=null,Te=null,Ze=null,xt=null,xe=null;return{setTest:function(je){N||(je?pe(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(je){ne!==je&&!N&&(i.stencilMask(je),ne=je)},setFunc:function(je,gt,Le){(ee!==je||Ae!==gt||ve!==Le)&&(i.stencilFunc(je,gt,Le),ee=je,Ae=gt,ve=Le)},setOp:function(je,gt,Le){(Te!==je||Ze!==gt||xt!==Le)&&(i.stencilOp(je,gt,Le),Te=je,Ze=gt,xt=Le)},setLocked:function(je){N=je},setClear:function(je){xe!==je&&(i.clearStencil(je),xe=je)},reset:function(){N=!1,ne=null,ee=null,Ae=null,ve=null,Te=null,Ze=null,xt=null,xe=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,d={},f={},h={},u=new WeakMap,g=[],y=null,m=!1,p=null,S=null,I=null,b=null,R=null,E=null,_=null,A=new Xe(0,0,0),O=0,U=!1,z=null,V=null,j=null,D=null,Z=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),k=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),k=K>=2);let se=null,fe={},ze=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),q=new an().fromArray(ze),me=new an().fromArray(ot);function Me(N,ne,ee,Ae){let ve=new Uint8Array(4),Te=i.createTexture();i.bindTexture(N,Te),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ee;Ze++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ne+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Te}let Ie={};Ie[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(Dr),un(!1),Bt(Cu),pe(i.CULL_FACE),ht(js);function pe(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function ge(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function wt(N,ne){return h[N]!==ne?(i.bindFramebuffer(N,ne),h[N]=ne,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ne),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ve(N,ne){let ee=g,Ae=!1;if(N){ee=u.get(ne),ee===void 0&&(ee=[],u.set(ne,ee));let ve=N.textures;if(ee.length!==ve.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Ze=ve.length;Te<Ze;Te++)ee[Te]=i.COLOR_ATTACHMENT0+Te;ee.length=ve.length,Ae=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(ee)}function Ue(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let ft={[Qs]:i.FUNC_ADD,[cp]:i.FUNC_SUBTRACT,[hp]:i.FUNC_REVERSE_SUBTRACT};ft[up]=i.MIN,ft[dp]=i.MAX;let lt={[fp]:i.ZERO,[pp]:i.ONE,[mp]:i.SRC_COLOR,[Lu]:i.SRC_ALPHA,[Mp]:i.SRC_ALPHA_SATURATE,[vp]:i.DST_COLOR,[_p]:i.DST_ALPHA,[gp]:i.ONE_MINUS_SRC_COLOR,[Nu]:i.ONE_MINUS_SRC_ALPHA,[yp]:i.ONE_MINUS_DST_COLOR,[xp]:i.ONE_MINUS_DST_ALPHA,[Sp]:i.CONSTANT_COLOR,[bp]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Ap]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(N,ne,ee,Ae,ve,Te,Ze,xt,xe,je){if(N===js){m===!0&&(ge(i.BLEND),m=!1);return}if(m===!1&&(pe(i.BLEND),m=!0),N!==lp){if(N!==p||je!==U){if((S!==Qs||R!==Qs)&&(i.blendEquation(i.FUNC_ADD),S=Qs,R=Qs),je)switch(N){case Zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.ONE,i.ONE);break;case Pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",N);break}else switch(N){case Zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pu:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Iu:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",N);break}I=null,b=null,E=null,_=null,A.set(0,0,0),O=0,p=N,U=je}return}ve=ve||ne,Te=Te||ee,Ze=Ze||Ae,(ne!==S||ve!==R)&&(i.blendEquationSeparate(ft[ne],ft[ve]),S=ne,R=ve),(ee!==I||Ae!==b||Te!==E||Ze!==_)&&(i.blendFuncSeparate(lt[ee],lt[Ae],lt[Te],lt[Ze]),I=ee,b=Ae,E=Te,_=Ze),(xt.equals(A)===!1||xe!==O)&&(i.blendColor(xt.r,xt.g,xt.b,xe),A.copy(xt),O=xe),p=N,U=!1}function Wt(N,ne){N.side===Mn?ge(i.CULL_FACE):pe(i.CULL_FACE);let ee=N.side===Jn;ne&&(ee=!ee),un(ee),N.blending===Zr&&N.transparent===!1?ht(js):ht(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Ae=N.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),$t(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function un(N){z!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),z=N)}function Bt(N){N!==rp?(pe(i.CULL_FACE),N!==V&&(N===Cu?i.cullFace(i.BACK):N===op?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),V=N}function In(N){N!==j&&(k&&i.lineWidth(N),j=N)}function $t(N,ne,ee){N?(pe(i.POLYGON_OFFSET_FILL),(D!==ne||Z!==ee)&&(D=ne,Z=ee,o.getReversed()&&(ne=-ne,ee=-ee),i.polygonOffset(ne,ee))):ge(i.POLYGON_OFFSET_FILL)}function Nt(N){N?pe(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function wn(N){N===void 0&&(N=i.TEXTURE0+Q-1),se!==N&&(i.activeTexture(N),se=N)}function An(N,ne,ee){ee===void 0&&(se===null?ee=i.TEXTURE0+Q-1:ee=se);let Ae=fe[ee];Ae===void 0&&(Ae={type:void 0,texture:void 0},fe[ee]=Ae),(Ae.type!==N||Ae.texture!==ne)&&(se!==ee&&(i.activeTexture(ee),se=ee),i.bindTexture(N,ne||Ie[N]),Ae.type=N,Ae.texture=ne)}function B(){let N=fe[se];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function kn(){try{i.compressedTexImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function Kt(){try{i.compressedTexImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function Zt(){try{i.texSubImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function Ne(){try{i.texSubImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function cn(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function le(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function at(){try{i.texStorage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function C(){try{i.texStorage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function v(){try{i.texImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function H(){try{i.texImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function de(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function oe(N,ne){f[N]!==ne&&(i.pixelStorei(N,ne),f[N]=ne)}function be(N){q.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),q.copy(N))}function Re(N){me.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),me.copy(N))}function te(N,ne){let ee=l.get(ne);ee===void 0&&(ee=new WeakMap,l.set(ne,ee));let Ae=ee.get(N);Ae===void 0&&(Ae=i.getUniformBlockIndex(ne,N.name),i.uniformBlockBinding(ne,Ae,Ae),ee.set(N,Ae))}function ie(N,ne,ee){let ve=l.get(ne).get(N);c[ve]!==ee&&(i.bindBufferBase(i.UNIFORM_BUFFER,ve,ee),c[ve]=ee)}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},se=null,fe={},h={},c={},u=new WeakMap,g=[],y=null,m=!1,p=null,S=null,I=null,b=null,R=null,E=null,_=null,A=new Xe(0,0,0),O=0,U=!1,z=null,V=null,j=null,D=null,Z=null,q.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:ge,bindFramebuffer:wt,drawBuffers:Ve,useProgram:Ue,setBlending:ht,setMaterial:Wt,setFlipSided:un,setCullFace:Bt,setLineWidth:In,setPolygonOffset:$t,setScissorTest:Nt,activeTexture:wn,bindTexture:An,unbindTexture:B,compressedTexImage2D:kn,compressedTexImage3D:Kt,texImage2D:v,texImage3D:H,pixelStorei:oe,getParameter:de,updateUBOMapping:te,uniformBlockBinding:ie,texStorage2D:at,texStorage3D:C,texSubImage2D:Zt,texSubImage3D:Ne,compressedTexSubImage2D:cn,compressedTexSubImage3D:le,scissor:be,viewport:Re,reset:we}}function dM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,d=new WeakMap,f=new Set,h,u=new WeakMap,g=new Set,y=new FinalizationRegistry(C=>g.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,v){return m?new OffscreenCanvas(C,v):Fr("canvas")}function S(C,v,H){let de=1,oe=at(C);if((oe.width>H||oe.height>H)&&(de=H/Math.max(oe.width,oe.height)),de<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let be=Math.floor(de*oe.width),Re=Math.floor(de*oe.height);h===void 0&&(h=p(be,Re));let te=v?p(be,Re):h;return te.width=be,te.height=Re,te.getContext("2d").drawImage(C,0,0,be,Re),nt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+be+"x"+Re+")."),te}else return"data"in C&&nt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function I(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,v,H,de,oe,be=!1){if(C!==null){if(i[C]!==void 0)return i[C];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Re;de&&(Re=e.get("EXT_texture_norm16"),Re||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=v;if(v===i.RED&&(H===i.FLOAT&&(te=i.R32F),H===i.HALF_FLOAT&&(te=i.R16F),H===i.UNSIGNED_BYTE&&(te=i.R8),H===i.UNSIGNED_SHORT&&Re&&(te=Re.R16_EXT),H===i.SHORT&&Re&&(te=Re.R16_SNORM_EXT)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.R8UI),H===i.UNSIGNED_SHORT&&(te=i.R16UI),H===i.UNSIGNED_INT&&(te=i.R32UI),H===i.BYTE&&(te=i.R8I),H===i.SHORT&&(te=i.R16I),H===i.INT&&(te=i.R32I)),v===i.RG&&(H===i.FLOAT&&(te=i.RG32F),H===i.HALF_FLOAT&&(te=i.RG16F),H===i.UNSIGNED_BYTE&&(te=i.RG8),H===i.UNSIGNED_SHORT&&Re&&(te=Re.RG16_EXT),H===i.SHORT&&Re&&(te=Re.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RG8UI),H===i.UNSIGNED_SHORT&&(te=i.RG16UI),H===i.UNSIGNED_INT&&(te=i.RG32UI),H===i.BYTE&&(te=i.RG8I),H===i.SHORT&&(te=i.RG16I),H===i.INT&&(te=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGB8UI),H===i.UNSIGNED_SHORT&&(te=i.RGB16UI),H===i.UNSIGNED_INT&&(te=i.RGB32UI),H===i.BYTE&&(te=i.RGB8I),H===i.SHORT&&(te=i.RGB16I),H===i.INT&&(te=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),H===i.UNSIGNED_INT&&(te=i.RGBA32UI),H===i.BYTE&&(te=i.RGBA8I),H===i.SHORT&&(te=i.RGBA16I),H===i.INT&&(te=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_SHORT&&Re&&(te=Re.RGB16_EXT),H===i.SHORT&&Re&&(te=Re.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),v===i.RGBA){let ie=be?Oo:Lt.getTransfer(oe);H===i.FLOAT&&(te=i.RGBA32F),H===i.HALF_FLOAT&&(te=i.RGBA16F),H===i.UNSIGNED_BYTE&&(te=ie===Yt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&Re&&(te=Re.RGBA16_EXT),H===i.SHORT&&Re&&(te=Re.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function _(C,v){let H;return C?v===null||v===Ei||v===tr?H=i.DEPTH24_STENCIL8:v===Ri?H=i.DEPTH32F_STENCIL8:v===$r&&(H=i.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ei||v===tr?H=i.DEPTH_COMPONENT24:v===Ri?H=i.DEPTH_COMPONENT32F:v===$r&&(H=i.DEPTH_COMPONENT16),H}function A(C,v){return I(C)===!0||C.isFramebufferTexture&&C.minFilter!==Cn&&C.minFilter!==Xn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function O(C){let v=new WeakRef(C);n.get(C).__ref=v,g.add(v),y.register(C,v,v)}function U(C){let v=n.get(C).__ref;v!==void 0&&(g.delete(v),y.unregister(v))}function z(C){j(C.target)}function V(C){D(C.target)}function j(C){C.removeEventListener("dispose",z),U(C),Q(C),C.isVideoTexture&&d.delete(C),C.isHTMLTexture&&f.delete(C)}function D(C){C.removeEventListener("dispose",V),U(C),K(C)}function Z(){for(let C of g){let v=C.deref();v!==void 0&&(v.isRenderTarget===!0?D(v):j(v))}g.clear(),f.clear()}function Q(C){let v=n.get(C);if(v.__webglInit===void 0)return;let H=C.source,de=u.get(H);if(de){let oe=de[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&k(C),Object.keys(de).length===0&&u.delete(H)}n.remove(C)}function k(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let H=C.source,de=u.get(H);delete de[v.__cacheKey],o.memory.textures--}function K(C){let v=n.get(C);v.__depthDisposeCallback&&v.__depthDisposeCallback();let H=C.depthTexture;if(H&&H.renderTarget===C&&j(H),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(v.__webglFramebuffer[oe]))for(let be=0;be<v.__webglFramebuffer[oe].length;be++)i.deleteFramebuffer(v.__webglFramebuffer[oe][be]);else i.deleteFramebuffer(v.__webglFramebuffer[oe]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[oe])}else{if(Array.isArray(v.__webglFramebuffer))for(let oe=0;oe<v.__webglFramebuffer.length;oe++)i.deleteFramebuffer(v.__webglFramebuffer[oe]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let oe=0;oe<v.__webglColorRenderbuffer.length;oe++)v.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[oe]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let de=C.textures;for(let oe=0,be=de.length;oe<be;oe++){let Re=n.get(de[oe]);Re.__webglTexture&&(i.deleteTexture(Re.__webglTexture),o.memory.textures--),n.remove(de[oe])}n.remove(C)}let J=0;function se(){J=0}function fe(){return J}function ze(C){J=C}function ot(){let C=J;return C>=s.maxTextures&&nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,C}function q(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.mipmapsAutoUpdate),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function me(C,v){let H=n.get(C);if(C.isVideoTexture&&cn(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let de=C.image;if(de===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(H,C,v);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function Me(C,v){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Wt(H,C,v);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function Ie(C,v){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Wt(H,C,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function pe(C,v){let H=n.get(C);if(C.version>0&&H.__version!==C.version){un(H,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let ge={[qs]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[Nl]:i.MIRRORED_REPEAT},wt={[Cn]:i.NEAREST,[Rp]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[gc]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},Ve={[Lp]:i.NEVER,[Ku]:i.ALWAYS,[Np]:i.LESS,[Ju]:i.LEQUAL,[Dp]:i.EQUAL,[$u]:i.GEQUAL,[Up]:i.GREATER,[Fp]:i.NOTEQUAL};function Ue(C,v){if(v.type===Ri&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Xn||v.magFilter===gc||v.magFilter===aa||v.magFilter===as||v.minFilter===Xn||v.minFilter===gc||v.minFilter===aa||v.minFilter===as)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ge[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ge[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ge[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,wt[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,wt[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Cn||v.minFilter!==aa&&v.minFilter!==as||v.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ft(C,v){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",z),O(v));let de=v.source,oe=u.get(de);oe===void 0&&(oe={},u.set(de,oe));let be=q(v);if(be!==C.__cacheKey){oe[be]===void 0&&(oe[be]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[be].usedTimes++;let Re=oe[C.__cacheKey];Re!==void 0&&(oe[C.__cacheKey].usedTimes--,Re.usedTimes===0&&k(v)),C.__cacheKey=be,C.__webglTexture=oe[be].texture}return H}function lt(C,v,H){return Math.floor(Math.floor(C/H)/v)}function ht(C,v,H,de){let be=C.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,de,v.data);else{be.sort((N,ne)=>N.start-ne.start);let Re=0;for(let N=1;N<be.length;N++){let ne=be[Re],ee=be[N],Ae=ne.start+ne.count,ve=lt(ee.start,v.width,4),Te=lt(ne.start,v.width,4);ee.start<=Ae+1&&ve===Te&&lt(ee.start+ee.count-1,v.width,4)===ve?ne.count=Math.max(ne.count,ee.start+ee.count-ne.start):(++Re,be[Re]=ee)}be.length=Re+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let N=0,ne=be.length;N<ne;N++){let ee=be[N],Ae=Math.floor(ee.start/4),ve=Math.ceil(ee.count/4),Te=Ae%v.width,Ze=Math.floor(Ae/v.width),xt=ve,xe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ze),t.texSubImage2D(i.TEXTURE_2D,0,Te,Ze,xt,xe,H,de,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Wt(C,v,H){let de=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(de=i.TEXTURE_3D);let oe=ft(C,v),be=v.source;t.bindTexture(de,C.__webglTexture,i.TEXTURE0+H);let Re=n.get(be);if(be.version!==Re.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let xe=Lt.getPrimaries(Lt.workingColorSpace),je=v.colorSpace===cs?null:Lt.getPrimaries(v.colorSpace),gt=v.colorSpace===cs||xe===je?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ie=S(v.image,!1,s.maxTextureSize);ie=le(v,ie);let we=r.convert(v.format,v.colorSpace),N=r.convert(v.type),ne=E(v.internalFormat,we,N,v.normalized,v.colorSpace,v.isVideoTexture);Ue(de,v);let ee,Ae=v.mipmaps,ve=v.isVideoTexture!==!0,Te=Re.__version===void 0||oe===!0,Ze=be.dataReady,xt=A(v,ie);if(v.isDepthTexture)ne=_(v.format===ls,v.type),Te&&(ve?t.texStorage2D(i.TEXTURE_2D,1,ne,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,ne,ie.width,ie.height,0,we,N,null));else if(v.isDataTexture)if(Ae.length>0){ve&&Te&&t.texStorage2D(i.TEXTURE_2D,xt,ne,Ae[0].width,Ae[0].height);for(let xe=0,je=Ae.length;xe<je;xe++)ee=Ae[xe],ve?Ze&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ee.width,ee.height,we,N,ee.data):t.texImage2D(i.TEXTURE_2D,xe,ne,ee.width,ee.height,0,we,N,ee.data);v.generateMipmaps=!1}else ve?(Te&&t.texStorage2D(i.TEXTURE_2D,xt,ne,ie.width,ie.height),Ze&&ht(v,ie,we,N)):t.texImage2D(i.TEXTURE_2D,0,ne,ie.width,ie.height,0,we,N,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ve&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xt,ne,Ae[0].width,Ae[0].height,ie.depth);for(let xe=0,je=Ae.length;xe<je;xe++)if(ee=Ae[xe],v.format!==Pi)if(we!==null)if(ve){if(Ze)if(v.layerUpdates.size>0){let gt=ld(ee.width,ee.height,v.format,v.type);for(let Le of v.layerUpdates){let Gt=ee.data.subarray(Le*gt/ee.data.BYTES_PER_ELEMENT,(Le+1)*gt/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,Le,ee.width,ee.height,1,we,Gt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ee.width,ee.height,ie.depth,we,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,ne,ee.width,ee.height,ie.depth,0,ee.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ee.width,ee.height,ie.depth,we,N,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,ne,ee.width,ee.height,ie.depth,0,we,N,ee.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ve&&Te&&t.texStorage2D(i.TEXTURE_2D,xt,ne,Ae[0].width,Ae[0].height);for(let xe=0,je=Ae.length;xe<je;xe++)ee=Ae[xe],v.format!==Pi?we!==null?ve?Ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,ee.width,ee.height,we,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,ne,ee.width,ee.height,0,ee.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Ze&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ee.width,ee.height,we,N,ee.data):t.texImage2D(i.TEXTURE_2D,xe,ne,ee.width,ee.height,0,we,N,ee.data)}else if(v.isDataArrayTexture)if(ve){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xt,ne,ie.width,ie.height,ie.depth),Ze)if(v.layerUpdates.size>0){let xe=ld(ie.width,ie.height,v.format,v.type);for(let je of v.layerUpdates){let gt=ie.data.subarray(je*xe/ie.data.BYTES_PER_ELEMENT,(je+1)*xe/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,je,ie.width,ie.height,1,we,N,gt)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,we,N,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,ie.width,ie.height,ie.depth,0,we,N,ie.data);else if(v.isData3DTexture)ve?(Te&&t.texStorage3D(i.TEXTURE_3D,xt,ne,ie.width,ie.height,ie.depth),Ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,we,N,ie.data)):t.texImage3D(i.TEXTURE_3D,0,ne,ie.width,ie.height,ie.depth,0,we,N,ie.data);else if(v.isFramebufferTexture){if(Te)if(ve)t.texStorage2D(i.TEXTURE_2D,xt,ne,ie.width,ie.height);else{let xe=ie.width,je=ie.height;for(let gt=0;gt<xt;gt++)t.texImage2D(i.TEXTURE_2D,gt,ne,xe,je,0,we,N,null),xe>>=1,je>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let xe=i.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ie.parentNode!==xe){xe.appendChild(ie),f.add(v),xe.onpaint=je=>{let gt=je.changedElements;for(let Le of f)gt.includes(Le.image)&&(Le.needsUpdate=!0)},xe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let gt=i.RGBA,Le=i.RGBA,Gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,gt,Le,Gt,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(ve&&Te){let xe=at(Ae[0]);t.texStorage2D(i.TEXTURE_2D,xt,ne,xe.width,xe.height)}for(let xe=0,je=Ae.length;xe<je;xe++)ee=Ae[xe],ve?Ze&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,we,N,ee):t.texImage2D(i.TEXTURE_2D,xe,ne,we,N,ee);v.generateMipmaps=!1}else if(ve){if(Te){let xe=at(ie);t.texStorage2D(i.TEXTURE_2D,xt,ne,xe.width,xe.height)}Ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,N,ie)}else t.texImage2D(i.TEXTURE_2D,0,ne,we,N,ie);I(v)&&v.mipmapsAutoUpdate===!0&&b(de),Re.__version=be.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function un(C,v,H){if(v.image.length!==6)return;let de=ft(C,v),oe=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let be=n.get(oe);if(oe.version!==be.__version||de===!0){t.activeTexture(i.TEXTURE0+H);let Re=Lt.getPrimaries(Lt.workingColorSpace),te=v.colorSpace===cs?null:Lt.getPrimaries(v.colorSpace),ie=v.colorSpace===cs||Re===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let we=v.isCompressedTexture||v.image[0].isCompressedTexture,N=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let Le=0;Le<6;Le++)!we&&!N?ne[Le]=S(v.image[Le],!0,s.maxCubemapSize):ne[Le]=N?v.image[Le].image:v.image[Le],ne[Le]=le(v,ne[Le]);let ee=ne[0],Ae=r.convert(v.format,v.colorSpace),ve=r.convert(v.type),Te=E(v.internalFormat,Ae,ve,v.normalized,v.colorSpace),Ze=v.isVideoTexture!==!0,xt=be.__version===void 0||de===!0,xe=oe.dataReady,je=A(v,ee);Ue(i.TEXTURE_CUBE_MAP,v);let gt;if(v.isDepthTexture){if(Te=_(v.format===ls,v.type),xt)if(Ze)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Te,ee.width,ee.height);else for(let Le=0;Le<6;Le++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Te,ee.width,ee.height,0,Ae,ve,null)}else if(we){Ze&&xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,je,Te,ee.width,ee.height);for(let Le=0;Le<6;Le++){gt=ne[Le].mipmaps;for(let Gt=0;Gt<gt.length;Gt++){let dn=gt[Gt];v.format!==Pi?Ae!==null?Ze?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Gt,0,0,dn.width,dn.height,Ae,dn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Gt,Te,dn.width,dn.height,0,dn.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Gt,0,0,dn.width,dn.height,Ae,ve,dn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Gt,Te,dn.width,dn.height,0,Ae,ve,dn.data)}}}else{if(gt=v.mipmaps,Ze&&xt){gt.length>0&&je++;let Le=at(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,je,Te,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(N){Ze?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ne[Le].width,ne[Le].height,Ae,ve,ne[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Te,ne[Le].width,ne[Le].height,0,Ae,ve,ne[Le].data);for(let Gt=0;Gt<gt.length;Gt++){let Ni=gt[Gt].image[Le].image;Ze?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Gt+1,0,0,Ni.width,Ni.height,Ae,ve,Ni.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Gt+1,Te,Ni.width,Ni.height,0,Ae,ve,Ni.data)}}else{Ze?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Ae,ve,ne[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Te,Ae,ve,ne[Le]);for(let Gt=0;Gt<gt.length;Gt++){let dn=gt[Gt];Ze?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Gt+1,0,0,Ae,ve,dn.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Gt+1,Te,Ae,ve,dn.image[Le])}}}I(v)&&v.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),be.__version=oe.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Bt(C,v,H,de,oe,be){let Re=r.convert(H.format,H.colorSpace),te=r.convert(H.type),ie=E(H.internalFormat,Re,te,H.normalized,H.colorSpace),we=n.get(v),N=n.get(H);if(N.__renderTarget=v,!we.__hasExternalTextures){let ne=Math.max(1,v.width>>be),ee=Math.max(1,v.height>>be);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,be,ie,ne,ee,v.depth,0,Re,te,null):t.texImage2D(oe,be,ie,ne,ee,0,Re,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ne(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,oe,N.__webglTexture,0,Zt(v)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,oe,N.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function In(C,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let de=v.depthTexture,oe=de&&de.isDepthTexture?de.type:null,be=_(v.stencilBuffer,oe),Re=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ne(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(v),be,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(v),be,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,be,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,C)}else{let de=v.textures;for(let oe=0;oe<de.length;oe++){let be=de[oe],Re=r.convert(be.format,be.colorSpace),te=r.convert(be.type),ie=E(be.internalFormat,Re,te,be.normalized,be.colorSpace);Ne(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(v),ie,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $t(C,v,H){let de=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(v.depthTexture);oe.__renderTarget=v;let be=de?v.depthTexture.image[0]:v.depthTexture.image;(!oe.__webglTexture||be.width!==v.width||be.height!==v.height)&&(be.width=v.width,be.height=v.height,v.depthTexture.needsUpdate=!0),de?pe(v.depthTexture,0):me(v.depthTexture,0);let Re=oe.__webglTexture,te=Zt(v),ie=de?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,we=v.depthTexture.format===ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===rs)Ne(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,ie,Re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,we,ie,Re,0);else if(v.depthTexture.format===ls)Ne(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,ie,Re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,we,ie,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(C){let v=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let de=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),de){let oe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,de.removeEventListener("dispose",oe)};de.addEventListener("dispose",oe),v.__depthDisposeCallback=oe}v.__boundDepthTexture=de}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let de=0;de<6;de++)$t(v.__webglFramebuffer[de],C,de);else C.texture.mipmaps.length>0?$t(v.__webglFramebuffer[0],C,0):$t(v.__webglFramebuffer,C,0);else if(H){v.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[de]),v.__webglDepthbuffer[de]===void 0)v.__webglDepthbuffer[de]=i.createRenderbuffer(),In(v.__webglDepthbuffer[de],C,!1);else{let oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=v.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,be)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),In(v.__webglDepthbuffer,C,!1);else{let oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,be)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function wn(C,v,H){let de=n.get(C);v!==void 0&&Bt(de.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Nt(C)}function An(C){let v=C.texture,H=n.get(C),de=n.get(v);C.addEventListener("dispose",V),O(C);let oe=C.textures,be=C.isWebGLCubeRenderTarget===!0,Re=oe.length>1;if(Re||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=v.version,o.memory.textures++),be){H.__webglFramebuffer=[];for(let te=0;te<6;te++)if(v.mipmaps.length>0){H.__webglFramebuffer[te]=[];for(let ie=0;ie<v.mipmaps.length;ie++)H.__webglFramebuffer[te][ie]=i.createFramebuffer()}else H.__webglFramebuffer[te]=i.createFramebuffer()}else{if(v.mipmaps.length>0){H.__webglFramebuffer=[];for(let te=0;te<v.mipmaps.length;te++)H.__webglFramebuffer[te]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Re)for(let te=0,ie=oe.length;te<ie;te++){let we=n.get(oe[te]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ne(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let te=0;te<oe.length;te++){let ie=oe[te];H.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[te]);let we=r.convert(ie.format,ie.colorSpace),N=r.convert(ie.type),ne=E(ie.internalFormat,we,N,ie.normalized,ie.colorSpace,C.isXRRenderTarget===!0),ee=Zt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,ne,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,H.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),In(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,v);for(let te=0;te<6;te++)if(v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Bt(H.__webglFramebuffer[te][ie],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else Bt(H.__webglFramebuffer[te],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);I(v)?b(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(Re){for(let te=0,ie=oe.length;te<ie;te++){let we=oe[te],N=n.get(we),ne=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,N.__webglTexture),Ue(ne,we),Bt(H.__webglFramebuffer,C,we,i.COLOR_ATTACHMENT0+te,ne,0),I(we)&&b(ne)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,de.__webglTexture),Ue(te,v),v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Bt(H.__webglFramebuffer[ie],C,v,i.COLOR_ATTACHMENT0,te,ie);else Bt(H.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,te,0);I(v)?b(te):v.mipmaps.length>0&&i.texParameteri(te,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Nt(C)}function B(C){let v=C.textures;for(let H=0,de=v.length;H<de;H++){let oe=v[H];if(I(oe)&&oe.mipmapsAutoUpdate===!0){let be=R(C),Re=n.get(oe).__webglTexture;t.bindTexture(be,Re),b(be),t.unbindTexture()}}}let kn=[];function Kt(C){if(C.samples>0){if(Ne(C)===!1){let v=C.textures,H=C.width,de=C.height,oe=i.COLOR_BUFFER_BIT,be=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(C),te=v.length>1;if(te)for(let we=0;we<v.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let we=0;we<v.length;we++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);let N=n.get(v[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,H,de,0,0,H,de,oe,i.NEAREST),c===!0&&(kn.length=0,kn.push(i.COLOR_ATTACHMENT0+we),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&kn.push(be),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let we=0;we<v.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);let N=n.get(v[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Zt(C){return Math.min(s.maxSamples,C.samples)}function Ne(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function cn(C){let v=o.render.frame;d.get(C)!==v&&(d.set(C,v),C.update())}function le(C,v){let H=C.colorSpace,de=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Fo&&H!==cs&&(Lt.getTransfer(H)===Yt?(de!==Pi||oe!==Kn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",H)),v}function at(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=ot,this.resetTextureUnits=se,this.getTextureUnits=fe,this.setTextureUnits=ze,this.setTexture2D=me,this.setTexture2DArray=Me,this.setTexture3D=Ie,this.setTextureCube=pe,this.rebindTextures=wn,this.setupRenderTarget=An,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Ne,this.dispose=Z}function fM(i,e){function t(n,s=cs){let r,o=Lt.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gu)return i.BYTE;if(n===Hu)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===_c)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Ri)return i.FLOAT;if(n===Ci)return i.HALF_FLOAT;if(n===qu)return i.ALPHA;if(n===Yu)return i.RGB;if(n===Pi)return i.RGBA;if(n===rs)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===Zu)return i.RED;if(n===yc)return i.RED_INTEGER;if(n===Cs)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(o===Yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===wc||n===Ac||n===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ec||n===Rc||n===Cc||n===Pc||n===Ic||n===da||n===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ec||n===Rc)return o===Yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return r.COMPRESSED_R11_EAC;if(n===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===da)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nc||n===Dc||n===Uc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yc||n===Zc||n===Jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yc)return o===Yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===Kc||n===fa||n===jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var pM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mM=`
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

}`,Sd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Yo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pn({vertexShader:pM,fragmentShader:mM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bd=class extends zi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,h=null,u=null,g=null,y=typeof XRWebGLBinding<"u",m=new Sd,p={},S=t.getContextAttributes(),I=null,b=null,R=[],E=[],_=new Oe,A=null,O=null,U=new Fn;U.viewport=new an;let z=new Fn;z.viewport=new an;let V=[U,z],j=new uc,D=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let me=R[q];return me===void 0&&(me=new kr,R[q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(q){let me=R[q];return me===void 0&&(me=new kr,R[q]=me),me.getGripSpace()},this.getHand=function(q){let me=R[q];return me===void 0&&(me=new kr,R[q]=me),me.getHandSpace()};function Q(q){let me=E.indexOf(q.inputSource);if(me===-1)return;let Me=R[me];Me!==void 0&&(Me.update(q.inputSource,q.frame,l||o),Me.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",K);for(let q=0;q<R.length;q++){let me=E[q];me!==null&&(E[q]=null,R[q].disconnect(me))}D=null,Z=null,m.reset();for(let q in p)delete p[q];if(e.setRenderTarget(I),u=null,h=null,f=null,s=null,b=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(_.width,_.height,!1),O!==null){let q=O.camera;q.fov=O.fov,q.zoom=O.zoom,q.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",k),s.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ie=null,pe=null;S.depth&&(pe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=S.stencil?ls:rs,Ie=S.stencil?tr:Ei);let ge={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ge),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new ii(h.textureWidth,h.textureHeight,{format:Pi,type:Kn,depthTexture:new os(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new ii(u.framebufferWidth,u.framebufferHeight,{format:Pi,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(q){for(let me=0;me<q.removed.length;me++){let Me=q.removed[me],Ie=E.indexOf(Me);Ie>=0&&(E[Ie]=null,R[Ie].disconnect(Me))}for(let me=0;me<q.added.length;me++){let Me=q.added[me],Ie=E.indexOf(Me);if(Ie===-1){for(let ge=0;ge<R.length;ge++)if(ge>=E.length){E.push(Me),Ie=ge;break}else if(E[ge]===null){E[ge]=Me,Ie=ge;break}if(Ie===-1)break}let pe=R[Ie];pe&&pe.connect(Me)}}function J(q,me){me===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(me.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let me=q.near,Me=q.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),j.near=z.near=U.near=me,j.far=z.far=U.far=Me,(D!==j.near||Z!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),D=j.near,Z=j.far),j.layers.mask=q.layers.mask|6,U.layers.mask=j.layers.mask&-5,z.layers.mask=j.layers.mask&-3;let Ie=q.parent,pe=j.cameras;J(j,Ie);for(let ge=0;ge<pe.length;ge++)J(pe[ge],Ie);j.projectionMatrix.copy(U.projectionMatrix),j.projectionMatrixInverse.copy(U.projectionMatrixInverse),O===null&&q.isPerspectiveCamera&&(O={camera:q,fov:q.fov,zoom:q.zoom}),se(q,j,Ie)};function se(q,me,Me){Me===null?q.matrix.copy(me.matrixWorld):(q.matrix.copy(Me.matrixWorld),q.matrix.invert(),q.matrix.multiply(me.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(me.projectionMatrix),q.projectionMatrixInverse.copy(me.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Br*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(h===null&&u===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(j)},this.getCameraTexture=function(q){return p[q]};let fe=null;function ze(q,me){if(d=me.getViewerPose(l||o),g=me,d!==null){let Me=d.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let Ie=!1;Me.length!==j.cameras.length&&(j.cameras.length=0,Ie=!0);for(let Ve=0;Ve<Me.length;Ve++){let Ue=Me[Ve],ft=null;if(u!==null)ft=u.getViewport(Ue);else{let ht=f.getViewSubImage(h,Ue);ft=ht.viewport,Ve===0&&(e.setRenderTargetTextures(b,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(b))}let lt=V[Ve];lt===void 0&&(lt=new Fn,lt.layers.enable(Ve),lt.viewport=new an,V[Ve]=lt),lt.matrix.fromArray(Ue.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Ue.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ft.x,ft.y,ft.width,ft.height),Ve===0&&(j.matrix.copy(lt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ie===!0&&j.cameras.push(lt)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Ve=f.getDepthInformation(Me[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,s.renderState)}if(pe&&pe.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Ve=0;Ve<Me.length;Ve++){let Ue=Me[Ve].camera;if(Ue){let ft=p[Ue];ft||(ft=new Yo,p[Ue]=ft);let lt=f.getCameraImage(Ue);ft.sourceTexture=lt}}}}for(let Me=0;Me<R.length;Me++){let Ie=E[Me],pe=R[Me];Ie!==null&&pe!==void 0&&pe.update(Ie,me,l||o)}fe&&fe(q,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}let ot=new fm;ot.setAnimationLoop(ze),this.setAnimationLoop=function(q){fe=q},this.dispose=function(){}}},gM=new Rt,bm=new dt;bm.set(-1,0,0,0,1,0,0,0,1);function _M(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,I,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&u(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,I):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),I=S.envMap,b=S.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(gM.makeRotationFromEuler(b)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=I*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,S){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xM(i,e,t,n){let s={},r={};function o(S,I){let b=I.program;n.uniformBlockBinding(S,b,s[S.id])}function a(S,I){let b=s[S.id];b===void 0&&(g(S),b=c(S),s[S.id]=b,S.addEventListener("dispose",m));let R=I.program;n.updateUBOMapping(S,R);let E=e.render.frame;r[S.id]!==E&&(l(S),r[S.id]=E)}function c(S){let I=i.createBuffer(),b=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,b,R),i.bindBuffer(i.UNIFORM_BUFFER,null),I}function l(S){let I=s[S.id],b=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let E=0,_=b.length;E<_;E++){let A=b[E];if(Array.isArray(A))for(let O=0,U=A.length;O<U;O++)d(A[O],E,O,R);else d(A,E,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,I,b,R){if(h(S,I,b,R)===!0){let E=S.__offset,_=S.value;if(Array.isArray(_)){let A=0;for(let O=0;O<_.length;O++){let U=_[O],z=y(U,!0);f(U,S.__data,A),A+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,S.__data)}}function f(S,I,b){typeof S=="number"||typeof S=="boolean"?I[b]=S:S.isMatrix3?(I[b]=S.elements[0],I[b+1]=S.elements[1],I[b+2]=S.elements[2],I[b+3]=0,I[b+4]=S.elements[3],I[b+5]=S.elements[4],I[b+6]=S.elements[5],I[b+7]=0,I[b+8]=S.elements[6],I[b+9]=S.elements[7],I[b+10]=S.elements[8],I[b+11]=0):ArrayBuffer.isView(S)?I.set(S.subarray(0,I.length-b),b):S.toArray(I,b)}function h(S,I,b,R){let E=S.value,_=I+"_"+b;if(Array.isArray(E)){R[_]===void 0&&(R[_]=[]);let A=R[_],O=!1;for(let U=0;U<E.length;U++)u(E[U],A,U)===!0&&(O=!0);return O}return u(E,R,_)}function u(S,I,b){if(I[b]===void 0)return typeof S=="number"||typeof S=="boolean"?I[b]=S:ArrayBuffer.isView(S)?I[b]=S.slice():I[b]=S.clone(),!0;{let R=I[b];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return I[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function g(S){let I=S.uniforms,b=0,R=16;for(let _=0,A=I.length;_<A;_++){let O=Array.isArray(I[_])?I[_]:[I[_]];for(let U=0,z=O.length;U<z;U++){let V=O[U],j=Array.isArray(V.value)?V.value:[V.value],D=Array.isArray(I[_])||Array.isArray(V.value),Z=b;for(let k=0,K=j.length;k<K;k++){let J=j[k],se=y(J,D),fe=b%R,ze=fe%se.boundary,ot=fe+ze;b+=ze,ot!==0&&R-ot<se.storage&&(b+=R-ot),k===0&&(Z=b),b+=se.storage}let Q=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new Q((b-Z)/Float32Array.BYTES_PER_ELEMENT),V.__offset=Z}}let E=b%R;return E>0&&(b+=R-E),S.__size=b,S.__cache={},this}function y(S,I){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=16,b.storage=48):S.isMatrix4?(b.boundary=16,b.storage=64):S.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",S),I===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(S){let I=S.target;I.removeEventListener("dispose",m),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:o,update:a,dispose:p}}var vM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function yM(){return Gi===null&&(Gi=new zl(vM,16,16,Cs,Ci),Gi.name="DFG_LUT",Gi.minFilter=Xn,Gi.magFilter=Xn,Gi.wrapS=Bi,Gi.wrapT=Bi,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var sh=class{constructor(e={}){let{canvas:t=Op(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:u=Kn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=u,m=new Set([Sc,Mc,yc]),p=new Set([Kn,Ei,$r,tr,xc,vc]),S=new Uint32Array(4),I=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},R=null,E=null,_=[],A=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,z=!1,V=null,j=null,D=null,Z=null;this._outputColorSpace=on;let Q=0,k=0,K=null,J=-1,se=null,fe=new an,ze=new an,ot=null,q=new Xe(0),me=0,Me=t.width,Ie=t.height,pe=1,ge=null,wt=null,Ve=new an(0,0,Me,Ie),Ue=new an(0,0,Me,Ie),ft=!1,lt=new bs,ht=new kl,Wt=!1,un=!1,Bt=new Rt,In=new T,$t=new an,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wn=!1;function An(){return K===null?pe:1}let B=n;function kn(M,F){return t.getContext(M,F)}let Kt,Zt,Ne,cn,le,at,C,v,H,de,oe,be,Re,te,ie,we,N,ne,ee,Ae,ve,Te,Ze;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",Le,!1),B===null){let F="webgl2";if(B=kn(F,M),B===null)throw kn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xt()}catch(M){throw t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),ct("WebGLRenderer: "+M.message),M}function xt(){Kt=new Iv(B),Kt.init(),ve=new fM(B,Kt),Zt=new yv(B,Kt,e,ve),Ne=new uM(B,Kt),Zt.reversedDepthBuffer&&h&&Ne.buffers.depth.setReversed(!0),j=B.createFramebuffer(),D=B.createFramebuffer(),Z=B.createFramebuffer(),cn=new Dv(B),le=new Ky,at=new dM(B,Kt,Ne,le,Zt,ve,cn),C=new Pv(U),v=new Fg(B),Te=new xv(B,v),H=new Lv(B,v,cn,Te),de=new Fv(B,H,v,Te,cn),ne=new Uv(B,Zt,at),ie=new Mv(le),oe=new $y(U,C,Kt,Zt,Te,ie),be=new _M(U,le),Re=new Qy,te=new rM(Kt),N=new _v(U,C,Ne,de,g,c),we=new hM(U,de,Zt),Ze=new xM(B,cn,Zt,Ne),ee=new vv(B,Kt,cn),Ae=new Nv(B,Kt,cn),cn.programs=oe.programs,U.capabilities=Zt,U.extensions=Kt,U.properties=le,U.renderLists=Re,U.shadowMap=we,U.state=Ne,U.info=cn}y!==Kn&&(O=new Bv(y,t.width,t.height,a,s,r));let xe=new bd(U,B);this.xr=xe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=Kt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Kt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(M){M!==void 0&&(pe=M,this.setSize(Me,Ie,!1))},this.getSize=function(M){return M.set(Me,Ie)},this.setSize=function(M,F,$=!0){if(xe.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=M,Ie=F,t.width=Math.floor(M*pe),t.height=Math.floor(F*pe),$===!0&&(t.style.width=M+"px",t.style.height=F+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Me*pe,Ie*pe).floor()},this.setDrawingBufferSize=function(M,F,$){Me=M,Ie=F,pe=$,t.width=Math.floor(M*$),t.height=Math.floor(F*$),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(y===Kn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(fe)},this.getViewport=function(M){return M.copy(Ve)},this.setViewport=function(M,F,$,X){M.isVector4?Ve.set(M.x,M.y,M.z,M.w):Ve.set(M,F,$,X),Ne.viewport(fe.copy(Ve).multiplyScalar(An()).round())},this.getScissor=function(M){return M.copy(Ue)},this.setScissor=function(M,F,$,X){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,F,$,X),Ne.scissor(ze.copy(Ue).multiplyScalar(An()).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(M){Ne.setScissorTest(ft=M)},this.setOpaqueSort=function(M){ge=M},this.setTransparentSort=function(M){wt=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,$=!0){let X=0;if(M){let W=!1;if(K!==null){let Ee=K.texture.format;W=m.has(Ee)}if(W){let Ee=K.texture.type,Ge=p.has(Ee),Se=N.getClearColor(),Ce=N.getClearAlpha(),Ye=Se.r,ut=Se.g,vt=Se.b;Ge?(S[0]=Ye,S[1]=ut,S[2]=vt,S[3]=Ce,B.clearBufferuiv(B.COLOR,0,S)):(I[0]=Ye,I[1]=ut,I[2]=vt,I[3]=Ce,B.clearBufferiv(B.COLOR,0,I))}else X|=B.COLOR_BUFFER_BIT}F&&(X|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),V=M},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),N.dispose(),Re.dispose(),te.dispose(),at.dispose(),le.dispose(),C.dispose(),de.dispose(),H.dispose(),Te.dispose(),Ze.dispose(),oe.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",fi),xe.removeEventListener("sessionend",no),Yi.stop()};function je(M){M.preventDefault(),Bo("WebGLRenderer: Context Lost."),z=!0}function gt(){Bo("WebGLRenderer: Context Restored."),z=!1;let M=cn.autoReset,F=we.enabled,$=we.autoUpdate,X=we.needsUpdate,W=we.type;xt(),cn.autoReset=M,we.enabled=F,we.autoUpdate=$,we.needsUpdate=X,we.type=W}function Le(M){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Gt(M){let F=M.target;F.removeEventListener("dispose",Gt),dn(F)}function dn(M){Ni(M),le.remove(M)}function Ni(M){let F=le.get(M).programs;F!==void 0&&(F.forEach(function($){oe.releaseProgram($)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,$,X,W,Ee){F===null&&(F=Nt);let Ge=W.isMesh&&W.matrixWorld.determinantAffine()<0,Se=wa(M,F,$,X,W);Ne.setMaterial(X,Ge);let Ce=$.index,Ye=1;if(X.wireframe===!0){if(Ce=H.getWireframeAttribute($),Ce===void 0)return;Ye=2}let ut=$.drawRange,vt=$.attributes.position,He=ut.start*Ye,pt=(ut.start+ut.count)*Ye;Ee!==null&&(He=Math.max(He,Ee.start*Ye),pt=Math.min(pt,(Ee.start+Ee.count)*Ye)),Ce!==null?(He=Math.max(He,0),pt=Math.min(pt,Ce.count)):vt!=null&&(He=Math.max(He,0),pt=Math.min(pt,vt.count));let Xt=pt-He;if(Xt<0||Xt===1/0)return;Te.setup(W,X,Se,$,Ce);let Jt,qt=ee;if(Ce!==null&&(Jt=v.get(Ce),qt=Ae,qt.setIndex(Jt)),W.isMesh)X.wireframe===!0?(Ne.setLineWidth(X.wireframeLinewidth*An()),qt.setMode(B.LINES)):qt.setMode(B.TRIANGLES);else if(W.isLine){let Tn=X.linewidth;Tn===void 0&&(Tn=1),Ne.setLineWidth(Tn*An()),W.isLineSegments?qt.setMode(B.LINES):W.isLineLoop?qt.setMode(B.LINE_LOOP):qt.setMode(B.LINE_STRIP)}else W.isPoints?qt.setMode(B.POINTS):W.isSprite&&qt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))qt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Tn=W._multiDrawStarts,We=W._multiDrawCounts,hn=W._multiDrawCount,Dt=Ce?v.get(Ce).bytesPerElement:1,mi=le.get(X).currentProgram.getUniforms();for(let En=0;En<hn;En++)mi.setValue(B,"_gl_DrawID",En),qt.render(Tn[En]/Dt,We[En])}else if(W.isInstancedMesh)qt.renderInstances(He,Xt,W.count);else if($.isInstancedBufferGeometry){let Tn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,We=Math.min($.instanceCount,Tn);qt.renderInstances(He,Xt,We)}else qt.render(He,Xt)};function qi(M,F,$,X){V!==null&&M.isNodeMaterial&&V.setObject(X,M),Wt===!0&&ie.setState(M,$,!1),M.transparent===!0&&M.side===Mn&&M.forceSinglePass===!1?(M.side=Jn,M.needsUpdate=!0,qe(M,F,X),M.side=Rs,M.needsUpdate=!0,qe(M,F,X),M.side=Mn):qe(M,F,X)}this.compile=function(M,F,$=null){$===null&&($=M),V!==null&&V.renderStart(M,F,$),E=te.get($),E.init(F),A.push(E),$.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),M!==$&&M.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),V!==null&&V.updateLights(E.state.lightsArray),un=this.localClippingEnabled,Wt=ie.init(this.clippingPlanes,un),Wt===!0&&ie.setGlobalState(this.clippingPlanes,F),V!==null&&we.render(E.state.shadowsArray,$,F);let X=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Ge=0;Ge<Ee.length;Ge++){let Se=Ee[Ge];qi(Se,$,F,W),X.add(Se)}else qi(Ee,$,F,W),X.add(Ee)}),E=A.pop(),V!==null&&V.renderEnd(),X},this.compileAsync=function(M,F,$=null){let X=this.compile(M,F,$);return new Promise(W=>{function Ee(){if(X.forEach(function(Ge){let Ce=le.get(Ge).currentProgram;(Ce===void 0||Ce.isReady())&&X.delete(Ge)}),X.size===0){W(M);return}setTimeout(Ee,10)}Kt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let di=null;function mh(M){di&&di(M)}function fi(){Yi.stop()}function no(){Yi.start()}let Yi=new fm;Yi.setAnimationLoop(mh),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(M){di=M,xe.setAnimationLoop(M),M===null?Yi.stop():Yi.start()},xe.addEventListener("sessionstart",fi),xe.addEventListener("sessionend",no),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;V!==null&&V.renderStart(M,F);let $=xe.enabled===!0&&xe.isPresenting===!0,X=O!==null&&(K===null||$)&&O.begin(U,K);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(F),F=xe.getCamera()),M.isScene===!0&&M.onBeforeRender(U,M,F,K),E=te.get(M,A.length),E.init(F),E.state.textureUnits=at.getTextureUnits(),A.push(E),Bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ht.setFromArrayCamera(F):lt.setFromProjectionMatrix(Bt,ci,F.reversedDepth),un=this.localClippingEnabled,Wt=ie.init(this.clippingPlanes,un),R=Re.get(M,_.length),R.init(),_.push(R),this.info.render.frame++,xe.enabled===!0&&xe.isPresenting===!0){let Ge=U.xr.getDepthSensingMesh();Ge!==null&&Zi(Ge,F,-1/0,U.sortObjects)}Zi(M,F,0,U.sortObjects),R.finish(),V!==null&&V.updateLights(E.state.lightsArray),U.sortObjects===!0&&R.sort(ge,wt),wn=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,wn&&N.addToRenderList(R,M),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&ie.beginShadows();let W=E.state.shadowsArray;if(we.render(W,M,F),Wt===!0&&ie.endShadows(),(X&&O.hasRenderPass())===!1){let Ge=R.opaque,Se=R.transmissive;if(E.setupLights(),F.isArrayCamera){let Ce=F.cameras;if(Se.length>0)for(let Ye=0,ut=Ce.length;Ye<ut;Ye++){let vt=Ce[Ye];Ht(Ge,Se,M,vt)}wn&&N.render(M);for(let Ye=0,ut=Ce.length;Ye<ut;Ye++){let vt=Ce[Ye];io(R,M,vt,vt.viewport)}}else Se.length>0&&Ht(Ge,Se,M,F),wn&&N.render(M),io(R,M,F)}K!==null&&k===0&&(at.updateMultisampleRenderTarget(K),at.updateRenderTargetMipmap(K)),X&&O.end(U),M.isScene===!0&&M.onAfterRender(U,M,F),Te.resetDefaultState(),J=-1,se=null,A.pop(),A.length>0?(E=A[A.length-1],at.setTextureUnits(E.state.textureUnits),Wt===!0&&ie.setGlobalState(U.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,V!==null&&V.renderEnd()};function Zi(M,F,$,X){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let Ge=F.isArrayCamera?ht:lt;if(!M.frustumCulled||M.intersectsFrustum(Ge)){X&&$t.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Bt);let Se=de.update(M),Ce=M.material;Ce.visible&&R.push(M,Se,Ce,$,$t.z,null,F)}}else if(M.isMesh||M.isLine||M.isPoints){let Ge=F.isArrayCamera?ht:lt;if(!M.frustumCulled||M.intersectsFrustum(Ge)){let Se=de.update(M),Ce=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$t.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),$t.copy(Se.boundingSphere.center)),$t.applyMatrix4(M.matrixWorld).applyMatrix4(Bt)),Array.isArray(Ce)){let Ye=Se.groups;for(let ut=0,vt=Ye.length;ut<vt;ut++){let He=Ye[ut],pt=Ce[He.materialIndex];pt&&pt.visible&&R.push(M,Se,pt,$,$t.z,He,F)}}else Ce.visible&&R.push(M,Se,Ce,$,$t.z,null,F)}}}let Ee=M.children;for(let Ge=0,Se=Ee.length;Ge<Se;Ge++)Zi(Ee[Ge],F,$,X)}function io(M,F,$,X){let{opaque:W,transmissive:Ee,transparent:Ge}=M;E.setupLightsView($),Wt===!0&&ie.setGlobalState(U.clippingPlanes,$),X&&Ne.viewport(fe.copy(X)),W.length>0&&Ji(W,F,$),Ee.length>0&&Ji(Ee,F,$),Ge.length>0&&Ji(Ge,F,$),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Ht(M,F,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let He=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new ii(1,1,{generateMipmaps:!0,type:He?Ci:Kn,minFilter:as,samples:Math.max(4,Zt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let Ee=E.state.transmissionRenderTarget[X.id],Ge=X.viewport||fe;Ee.setSize(Ge.z*U.transmissionResolutionScale,Ge.w*U.transmissionResolutionScale);let Se=U.getRenderTarget(),Ce=U.getActiveCubeFace(),Ye=U.getActiveMipmapLevel();U.setRenderTarget(Ee),U.getClearColor(q),me=U.getClearAlpha(),me<1&&U.setClearColor(16777215,.5),U.clear(),wn&&N.render($);let ut=U.toneMapping;U.toneMapping=Vi;let vt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),Wt===!0&&ie.setGlobalState(U.clippingPlanes,X),Ji(M,$,X),at.updateMultisampleRenderTarget(Ee),at.updateRenderTargetMipmap(Ee),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let pt=0,Xt=F.length;pt<Xt;pt++){let Jt=F[pt],{object:qt,geometry:Tn,material:We,group:hn}=Jt;if(We.side===Mn&&qt.layers.test(X.layers)){let Dt=We.side;We.side=Jn,We.needsUpdate=!0,pi(qt,$,X,Tn,We,hn),We.side=Dt,We.needsUpdate=!0,He=!0}}He===!0&&(at.updateMultisampleRenderTarget(Ee),at.updateRenderTargetMipmap(Ee))}U.setRenderTarget(Se,Ce,Ye),U.setClearColor(q,me),vt!==void 0&&(X.viewport=vt),U.toneMapping=ut}function Ji(M,F,$){let X=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Ee=M.length;W<Ee;W++){let Ge=M[W],{object:Se,geometry:Ce,group:Ye}=Ge,ut=Ge.material;ut.allowOverride===!0&&X!==null&&(ut=X),Se.layers.test($.layers)&&pi(Se,F,$,Ce,ut,Ye)}}function pi(M,F,$,X,W,Ee){V!==null&&W.isNodeMaterial&&V.setObject(M,W),M.onBeforeRender(U,F,$,X,W,Ee),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(U,F,$,X,M,Ee),W.transparent===!0&&W.side===Mn&&W.forceSinglePass===!1?(W.side=Jn,W.needsUpdate=!0,U.renderBufferDirect($,F,X,W,M,Ee),W.side=Rs,W.needsUpdate=!0,U.renderBufferDirect($,F,X,W,M,Ee),W.side=Mn):U.renderBufferDirect($,F,X,W,M,Ee),M.onAfterRender(U,F,$,X,W,Ee)}function Ls(M){let F=0;for(let $ of M)$.texture!==null&&F++;return F}function qe(M,F,$){F.isScene!==!0&&(F=Nt);let X=le.get(M),W=E.state.lights,Ee=E.state.shadowsArray,Ge=W.state.version,Se=oe.getParameters(M,W.state,Ee,F,$,E.state.lightProbeGridArray),Ce=oe.getProgramCacheKey(Se),Ye=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let ut=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=C.get(M.envMap||X.environment,ut),X.envMapRotation=X.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ye===void 0&&(M.addEventListener("dispose",Gt),Ye=new Map,X.programs=Ye,X.programVariants=new Map);let vt=Ye.get(Ce);if(vt!==void 0){if(X.currentProgram===vt&&X.lightsStateVersion===Ge)return ro(M,Se),vt}else Se.uniforms=oe.getUniforms(M),V!==null&&M.isNodeMaterial&&V.build(M,$,Se),M.onBeforeCompile(Se,U),vt=oe.acquireProgram(Se,Ce),Ye.set(Ce,vt),X.uniforms=Se.uniforms;let He=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=ie.uniform),ro(M,Se),X.needsLights=Ta(M),X.lightsStateVersion=Ge,X.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.sunLights.value=W.state.sun,He.sunLightShadows.value=W.state.sunShadow,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.sunShadowMatrix.value=W.state.sunShadowMatrix,He.sunShadowCascade.value=W.state.sunShadowCascade,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),X.numLightProbeGrids=Ls(E.state.lightProbeGridArray),X.currentProgram=vt,X.uniformsList=null,vt}function gh(M,F,$,X,W){let Ee=le.get(M),Ge=Ee.currentProgram.id+","+X+","+W,Se=Ee.programVariants.get(Ge);return Se===void 0?(Se=qe(M,F,$),Ee.programVariants.set(Ge,Se)):(Ee.currentProgram=Se,Ee.uniformsList=null,Ee.outputColorSpace=X,Ee.toneMapping=W),Se}function so(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Kr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function ro(M,F){let $=le.get(M);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function wa(M,F,$,X,W){F.isScene!==!0&&(F=Nt),at.resetTextureUnits();let Ee=F.fog,Ge=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,Se=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Lt.workingColorSpace,Ce=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ye=C.get(X.envMap||Ge,Ce),ut=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vt=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),He=!!$.morphAttributes.position,pt=!!$.morphAttributes.normal,Xt=!!$.morphAttributes.color,Jt=Vi;X.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Jt=U.toneMapping);let qt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Tn=qt!==void 0?qt.length:0,We=le.get(X),hn=E.state.lights;if(Wt===!0&&(un===!0||M!==se)){let sn=M===se&&X.id===J;ie.setState(X,M,sn)}let Dt=!1,mi=!1;X.version===We.__version?We.needsLights&&We.lightsStateVersion!==hn.state.version||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isBatchedMesh&&We.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&We.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&We.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&We.instancingMorph===!1&&W.morphTexture!==null||We.envMap!==Ye||X.fog===!0&&We.fog!==Ee||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ie.numPlanes||We.numIntersection!==ie.numIntersection)||We.vertexAlphas!==ut||We.vertexTangents!==vt||We.morphTargets!==He||We.morphNormals!==pt||We.morphColors!==Xt||We.morphTargetsCount!==Tn||We.numLightProbeGrids!==Ls(E.state.lightProbeGridArray)?Dt=!0:(We.outputColorSpace!==Se||We.toneMapping!==Jt)&&(mi=!0):(Dt=!0,We.__version=X.version);let En=We.currentProgram;(Dt===!0||mi===!0)&&(En=mi===!0?gh(X,F,W,Se,Jt):qe(X,F,W),V&&X.isNodeMaterial&&V.onUpdateProgram(X,En,We));let Ns=!1,gi=!1,Mt=!1,Tt=En.getUniforms(),gn=We.uniforms;if(Ne.useProgram(En.program)&&(Ns=!0,gi=!0,Mt=!0),X.id!==J&&(J=X.id,gi=!0),Ns||se!==M){Ne.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Tt.setValue(B,"projectionMatrix",M.projectionMatrix),Tt.setValue(B,"viewMatrix",M.matrixWorldInverse);let fn=Tt.map.cameraPosition;fn!==void 0&&fn.setValue(B,In.setFromMatrixPosition(M.matrixWorld)),Zt.logarithmicDepthBuffer&&Tt.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Tt.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),se!==M&&(se=M,gi=!0,Mt=!0)}if(We.needsLights&&(hn.state.sunShadowMap.length>0&&Tt.setValue(B,"sunShadowMap",hn.state.sunShadowMap,at),hn.state.directionalShadowMap.length>0&&Tt.setValue(B,"directionalShadowMap",hn.state.directionalShadowMap,at),hn.state.spotShadowMap.length>0&&Tt.setValue(B,"spotShadowMap",hn.state.spotShadowMap,at),hn.state.pointShadowMap.length>0&&Tt.setValue(B,"pointShadowMap",hn.state.pointShadowMap,at)),W.isSkinnedMesh){Tt.setOptional(B,W,"bindMatrix"),Tt.setOptional(B,W,"bindMatrixInverse");let sn=W.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Tt.setValue(B,"boneTexture",sn.boneTexture,at))}W.isBatchedMesh&&(Tt.setOptional(B,W,"batchingTexture"),Tt.setValue(B,"batchingTexture",W._matricesTexture,at),Tt.setOptional(B,W,"batchingIdTexture"),Tt.setValue(B,"batchingIdTexture",W._indirectTexture,at),Tt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Tt.setValue(B,"batchingColorTexture",W._colorsTexture,at));let Vn=$.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ne.update(W,$,En),(gi||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,Tt.setValue(B,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(gn.envMapIntensity.value=F.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=yM()),gi){if(Tt.setValue(B,"toneMappingExposure",U.toneMappingExposure),We.needsLights&&Aa(gn,Mt),Ee&&X.fog===!0&&be.refreshFogUniforms(gn,Ee),be.refreshMaterialUniforms(gn,X,pe,Ie,E.state.transmissionRenderTarget[M.id]),We.needsLights&&We.numLightProbeGrids>0){let sn=b,fn=0;for(let _i of E.state.lightProbeGridArray)_i.texture!==null&&(sn.textures[fn]=_i.texture,sn.min[fn]=_i.boundingBox.min,sn.max[fn]=_i.boundingBox.max,sn.resolution[fn]=_i.resolution,fn++);for(let _i in sn)sn[_i].length=fn;gn.probesSH.value=sn.textures,gn.probesMin.value=sn.min,gn.probesMax.value=sn.max,gn.probesResolution.value=sn.resolution}Kr.upload(B,so(We),gn,at)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Kr.upload(B,so(We),gn,at),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Tt.setValue(B,"center",W.center),Tt.setValue(B,"modelViewMatrix",W.modelViewMatrix),Tt.setValue(B,"normalMatrix",W.normalMatrix),Tt.setValue(B,"modelMatrix",W.matrixWorld),X.uniformsGroups!==void 0){let sn=X.uniformsGroups;for(let fn=0,_i=sn.length;fn<_i;fn++){let ao=sn[fn];Ze.update(ao,En),Ze.bind(ao,En)}}return En}function Aa(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Ta(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(M,F,$){let X=le.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),le.get(M.texture).__webglTexture=F,le.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let $=le.get(M);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,$=0){K=M,Q=F,k=$;let X=null,W=!1,Ee=!1;if(M){let Se=le.get(M);if(Se.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(B.FRAMEBUFFER,Se.__webglFramebuffer),fe.copy(M.viewport),ze.copy(M.scissor),ot=M.scissorTest,Ne.viewport(fe),Ne.scissor(ze),Ne.setScissorTest(ot),J=-1;return}else if(Se.__webglFramebuffer===void 0)at.setupRenderTarget(M);else if(Se.__hasExternalTextures)at.rebindTextures(M,le.get(M.texture).__webglTexture,le.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ut=M.depthTexture;if(Se.__boundDepthTexture!==ut){if(ut!==null&&le.has(ut)&&(M.width!==ut.image.width||M.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(M)}}let Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ee=!0);let Ye=le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ye[F])?X=Ye[F][$]:X=Ye[F],W=!0):M.samples>0&&at.useMultisampledRTT(M)===!1?X=le.get(M).__webglMultisampledFramebuffer:Array.isArray(Ye)?X=Ye[$]:X=Ye,fe.copy(M.viewport),ze.copy(M.scissor),ot=M.scissorTest}else fe.copy(Ve).multiplyScalar(pe).floor(),ze.copy(Ue).multiplyScalar(pe).floor(),ot=ft;if($!==0&&(X=j),Ne.bindFramebuffer(B.FRAMEBUFFER,X)&&Ne.drawBuffers(M,X),Ne.viewport(fe),Ne.scissor(ze),Ne.setScissorTest(ot),W){let Se=le.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,$)}else if(Ee){let Se=F;for(let Ce=0;Ce<M.textures.length;Ce++){let Ye=le.get(M.textures[Ce]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ce,Ye.__webglTexture,$,Se)}}else if(M!==null&&$!==0){let Se=le.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Se.__webglTexture,$)}J=-1};function oo(M){let F=le.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=Zt.textureFormatReadable(M.format),F.__typeReadable=Zt.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,$,X,W,Ee,Ge,Se=0){if(!(M&&M.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ce=Ce[Ge],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){Ne.bindFramebuffer(B.FRAMEBUFFER,Ce);try{let Ye=M.textures[Se],ut=Ye.format,vt=Ye.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Se);let He=oo(Ye);if(He.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-X&&$>=0&&$<=M.height-W&&B.readPixels(F,$,X,W,ve.convert(ut),ve.convert(vt),Ee)}finally{let Ye=K!==null?le.get(K).__webglFramebuffer:null;Ne.bindFramebuffer(B.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(M,F,$,X,W,Ee,Ge,Se=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ce=Ce[Ge],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(F>=0&&F<=M.width-X&&$>=0&&$<=M.height-W){Ne.bindFramebuffer(B.FRAMEBUFFER,Ce);let Ye=M.textures[Se],ut=Ye.format,vt=Ye.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Se);let He=oo(Ye);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),B.readPixels(F,$,X,W,ve.convert(ut),ve.convert(vt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Xt=K!==null?le.get(K).__webglFramebuffer:null;Ne.bindFramebuffer(B.FRAMEBUFFER,Xt);let Jt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await zp(B,Jt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(pt),B.deleteSync(Jt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,$=0){let X=Math.pow(2,-$),W=Math.floor(M.image.width*X),Ee=Math.floor(M.image.height*X),Ge=F!==null?F.x:0,Se=F!==null?F.y:0;at.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Ge,Se,W,Ee),Ne.unbindTexture()},this.copyTextureToTexture=function(M,F,$=null,X=null,W=0,Ee=0){let Ge,Se,Ce,Ye,ut,vt,He,pt,Xt,Jt=M.isCompressedTexture?M.mipmaps[Ee]:M.image;if($!==null)Ge=$.max.x-$.min.x,Se=$.max.y-$.min.y,Ce=$.isBox3?$.max.z-$.min.z:1,Ye=$.min.x,ut=$.min.y,vt=$.isBox3?$.min.z:0;else{let Tt=Math.pow(2,-W);Ge=Math.floor(Jt.width*Tt),Se=Math.floor(Jt.height*Tt),M.isDataArrayTexture?Ce=Jt.depth:M.isData3DTexture?Ce=Math.floor(Jt.depth*Tt):Ce=1,Ye=0,ut=0,vt=0}X!==null?(He=X.x,pt=X.y,Xt=X.z):(He=0,pt=0,Xt=0);let qt=ve.convert(F.format),Tn=ve.convert(F.type),We;F.isData3DTexture?(at.setTexture3D(F,0),We=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(at.setTexture2DArray(F,0),We=B.TEXTURE_2D_ARRAY):(at.setTexture2D(F,0),We=B.TEXTURE_2D),Ne.activeTexture(B.TEXTURE0),Ne.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),Ne.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Ne.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let hn=Ne.getParameter(B.UNPACK_ROW_LENGTH),Dt=Ne.getParameter(B.UNPACK_IMAGE_HEIGHT),mi=Ne.getParameter(B.UNPACK_SKIP_PIXELS),En=Ne.getParameter(B.UNPACK_SKIP_ROWS),Ns=Ne.getParameter(B.UNPACK_SKIP_IMAGES);Ne.pixelStorei(B.UNPACK_ROW_LENGTH,Jt.width),Ne.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Jt.height),Ne.pixelStorei(B.UNPACK_SKIP_PIXELS,Ye),Ne.pixelStorei(B.UNPACK_SKIP_ROWS,ut),Ne.pixelStorei(B.UNPACK_SKIP_IMAGES,vt);let gi=M.isDataArrayTexture||M.isData3DTexture,Mt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let Tt=le.get(M),gn=le.get(F),Vn=le.get(Tt.__renderTarget),sn=le.get(gn.__renderTarget);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let fn=0;fn<Ce;fn++)gi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,le.get(M).__webglTexture,W,vt+fn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,le.get(F).__webglTexture,Ee,Xt+fn)),B.blitFramebuffer(Ye,ut,Ye+Ge,ut+Se,He,pt,He+Ge,pt+Se,B.DEPTH_BUFFER_BIT,B.NEAREST);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||le.has(M)){let Tt=le.get(M),gn=le.get(F);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,D),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,Z);for(let Vn=0;Vn<Ce;Vn++)gi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tt.__webglTexture,W,vt+Vn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tt.__webglTexture,W),Mt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,gn.__webglTexture,Ee,Xt+Vn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,gn.__webglTexture,Ee),W!==0?B.blitFramebuffer(Ye,ut,Ye+Ge,ut+Se,He,pt,He+Ge,pt+Se,B.COLOR_BUFFER_BIT,B.NEAREST):Mt?B.copyTexSubImage3D(We,Ee,He,pt,Xt+Vn,Ye,ut,Ge,Se):B.copyTexSubImage2D(We,Ee,He,pt,Ye,ut,Ge,Se);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Mt?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(We,Ee,He,pt,Xt,Ge,Se,Ce,qt,Tn,Jt.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(We,Ee,He,pt,Xt,Ge,Se,Ce,qt,Jt.data):B.texSubImage3D(We,Ee,He,pt,Xt,Ge,Se,Ce,qt,Tn,Jt):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ee,He,pt,Ge,Se,qt,Tn,Jt.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ee,He,pt,Jt.width,Jt.height,qt,Jt.data):B.texSubImage2D(B.TEXTURE_2D,Ee,He,pt,Ge,Se,qt,Tn,Jt);Ne.pixelStorei(B.UNPACK_ROW_LENGTH,hn),Ne.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Dt),Ne.pixelStorei(B.UNPACK_SKIP_PIXELS,mi),Ne.pixelStorei(B.UNPACK_SKIP_ROWS,En),Ne.pixelStorei(B.UNPACK_SKIP_IMAGES,Ns),Ee===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(We),Ne.unbindTexture()},this.initRenderTarget=function(M){le.get(M).__webglFramebuffer===void 0&&at.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?at.setTextureCube(M,0):M.isData3DTexture?at.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?at.setTexture2DArray(M,0):at.setTexture2D(M,0),Ne.unbindTexture()},this.resetState=function(){Q=0,k=0,K=null,Ne.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}};function wm({rInner:i,omega:e=1,reflections:t=10}){let n=Math.atan(Math.sqrt(4/(e*e)-1)),s=Math.asin(e/2),r=(f,h)=>f[0]*h[0]+f[1]*h[1];function o(f,h,u){let g=r(f,h),y=r(f,f)-u*u,m=g*g-y;if(m<0)return null;let p=[-g-Math.sqrt(m),-g+Math.sqrt(m)].filter(S=>S>1e-6);return p.length?Math.min(...p):null}function a(f,h){let u=Math.hypot(h[0],h[1]);h=[h[0]/u,h[1]/u];let g=[f];for(let y=0;y<t;y++){let m=o(f,h,1),p=o(f,h,i),S=p!==null&&p<m,I=S?p:m;f=[f[0]+I*h[0],f[1]+I*h[1]],g.push(f);let b=Math.hypot(f[0],f[1]),R=S?[f[0]/b,f[1]/b]:[-f[0]/b,-f[1]/b],E=[-R[1],R[0]],_=[[-h[0],h[1]],[h[0],-h[1]]].filter(A=>r(A,R)>1e-9);if(!_.length)break;h=_.find(A=>Math.sign(r(A,E))===Math.sign(r(h,E)))??_[0]}return g}let c=[],l=Math.cos(n),d=Math.sin(n);for(let f of[1,-1])for(let h of[1,-1]){let u=[f*i*Math.cos(s),h*i*Math.sin(s)],g=[-f*h*Math.sin(s),Math.cos(s)];c.push(a(u,g),a(u,[-g[0],-g[1]]));let y=[f*Math.cos(s),h*Math.sin(s)];for(let m of[[l,d],[l,-d],[-l,d],[-l,-d]]){let p=-r(m,y),S=Math.abs(m[0]*-y[1]+m[1]*y[0]);p>1e-6&&S<.999&&c.push(a(y,m))}}return c}var Am=new T(0,1,0),MM=55*Math.PI/180,Cm=6;function wd(i,e,t,n,s=160){let r=[],o=null,a=.02;for(let c=0;c<=s;c++){let l=a+(Math.PI-2*a)*c/s,d=i*Math.sin(l)**2,f=d*Math.sin(l),h=-d*Math.cos(l)+e,u=Math.hypot(f,h);u>=t&&u<=n?(o||r.push(o=[]),o.push([f,h])):o=null}return r.filter(c=>c.length>2)}function Tm(i,e,t=1,n=!1){let s=[],r=[],o=[],a=[],c=[];for(let d of i){let f=0;for(let h=0;h<d.length-1;h++){let[u,g]=d[h],[y,m]=d[h+1],p=Math.hypot(y-u,m-g);if(p===0)continue;let S=-(m-g)/p*e,I=(y-u)/p*e,b=s.length/3;for(let[R,E,_,A]of[[u+S,g+I,f,1],[u-S,g-I,f,-1],[y+S,m+I,f+p,1],[y-S,m-I,f+p,-1]])s.push(R*t,E*t,0),r.push(_),o.push(A),a.push(n?h:0);c.push(b,b+1,b+2,b+1,b+3,b+2),f+=p}}let l=new Pt;return l.setAttribute("position",new Qe(s,3)),l.setAttribute("aAlong",new Qe(r,1)),l.setAttribute("aSide",new Qe(o,1)),l.setAttribute("aGen",new Qe(a,1)),l.setIndex(c),l}var SM={vertexShader:`
    varying vec3 vPos;
    void main() {
      // in view space: world coordinates are too large for single precision far from the origin
      vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * vec4(vPos, 1.0);
    }`,fragmentShader:`
    #define MAX_LAYERS ${Cm}
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
    }`},Em={vertexShader:`
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
    }`},bM={vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform float uTime, uOpacity;
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      float pulse = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(22.0 * vUv.x - 3.0 * uTime), 6.0);
      gl_FragColor = vec4(mix(uColor, vec3(1.0), pulse * 0.5) * pulse * uOpacity * 0.85, 1.0);
    }`},wM=`
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
  }`;function Rm([i,e,t],n){let s=(d,f)=>[Math.cos(d)*Math.cos(f),Math.sin(d),-Math.cos(d)*Math.sin(f)],r=(d,f,h)=>{let u=s(d*Math.PI/180,f*Math.PI/180);return Math.exp(-((i-u[0])**2+(e-u[1])**2+(t-u[2])**2)/h)},o=Math.asin(Math.max(-1,Math.min(1,e))),a=Math.atan2(-t,i),c=-40+10*Math.sin(.11*n),l=.9*(r(35,c,.5)+r(-35,c,.5));l-=.6*(r(30,120,.4)+r(-30,120,.4));for(let d=0;d<6;d++){let f=(d%2<1?1:-1)*(20+8*Math.sin(d*1.7));l+=(d%3<1.5?.35:-.35)*r(f,d*60-8*n,.06)}return l+=.18*Math.exp(-((o/.3)**2))*Math.cos(6*a+.9*n),l}function AM(i,e,t){let s=r=>[Math.cos(r)*Math.cos(e),Math.sin(r),-Math.cos(r)*Math.sin(e)];return-(Rm(s(i+.01),t)-Rm(s(i-.01),t))/(2*.01)}var TM={vertexShader:`
    varying vec3 vDir, vNormal;
    void main() {
      vDir = normalize(position);
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform float uTime, uOpacity;
    varying vec3 vDir, vNormal;
    ${wM}

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
    }`},EM={vertexShader:`
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
    }`},ah={transparent:!0,blending:Bn,depthWrite:!1};function xa(i){let{loader:e,textures:t,radius:n}=i,s=i.center.clone(),r=new kt,o=new ni(new T(0,0,-1),1e6),a=new kt;r.add(a);let c=(q,me=!0)=>{let Me=e.load(t+q);return me&&(Me.colorSpace=on),Me.anisotropy=4,Me},l=i.maps,d=new rt(new Zn(n,192,96),new Ft({map:c(l.map),normalMap:l.normal?c(l.normal,!1):null,bumpMap:l.bump?c(l.bump,!1):null,bumpScale:l.bumpScale??1,specularMap:l.specular?c(l.specular,!1):null,specular:new Xe(l.specular?3815994:1118481),shininess:l.specular?22:4,emissiveMap:l.night?c(l.night):null,emissive:new Xe(l.night?16767392:0),clippingPlanes:[o],transparent:!0}));a.add(d);let f={uSunView:{value:new T(1,0,0)}};l.night&&(d.material.onBeforeCompile=q=>{Object.assign(q.uniforms,f),q.fragmentShader=q.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSunView;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          totalEmissiveRadiance *= smoothstep(0.12, -0.18, dot(normal, uSunView));`)});let h=null;l.clouds&&(h=new rt(new Zn(n*1.006,192,96),new Ft({color:16777215,alphaMap:c(l.clouds,!1),transparent:!0,depthWrite:!1,shininess:2,clippingPlanes:[o]})),d.add(h));let u=new ki({color:16777215,transparent:!0,opacity:0,depthWrite:!1});a.add(new rt(new Yn(n*.012,n*.012,n*3.1,8),u));let g=i.wobble,y=(q,me=new T)=>{if(!g)return me.copy(i.axis?.lengthSq()>.5?i.axis:Am);let Me=g.obliquity*Math.PI/180,Ie=g.nutation*Math.PI/180,pe=Me+Ie*Math.cos(g.nods*q),ge=q+Ie/Math.sin(Me)*Math.sin(g.nods*q);return me.set(Math.sin(pe)*Math.cos(ge),Math.cos(pe),-Math.sin(pe)*Math.sin(ge))},m,p;if(g){m=new Ln(new Pt().setFromPoints([new T(0,-1.6*n,0),new T(0,1.6*n,0)]),new vn({color:8952234,transparent:!0,opacity:0})),r.add(m);let q=[];for(let me=0;me<=900;me++)q.push(y(me/900*Math.PI*2).multiplyScalar(n*1.55));p=new Ln(new Pt().setFromPoints(q),new vn({color:12576511,transparent:!0,opacity:0})),r.add(p)}let S=new kt;r.add(S);let I=i.layers,b=(q,me)=>[...q,...Array(Cm-q.length).fill(me)],R={uCenter:{value:s.clone()},uRadius:{value:n},uTop:{value:b(I.map(q=>q.top),1)},uLow:{value:b(I.map(q=>new Xe(q.low)),new Xe)},uHigh:{value:b(I.map(q=>new Xe(q.high)),new Xe)},uCount:{value:I.length}};S.add(new rt(new Zo(n*1.5,128),new pn({...SM,uniforms:R})));let E=(Array.isArray(i.waves)?i.waves:i.waves?[i.waves]:[]).map(({inner:q,outer:me,omega:Me,color:Ie=[.75,.95,1],speed:pe=2.6,width:ge=.011},wt)=>{let Ve=new pn({...Em,...ah,uniforms:{uTime:{value:0},uOpacity:{value:0},uSpeed:{value:pe},uColor:{value:new Xe(...Ie)}}}),Ue=new rt(Tm(wm({rInner:q/me,omega:Me}),ge,me,!0),Ve);return Ue.scale.setScalar(n),Ue.position.z=n*(.004+5e-4*wt),S.add(Ue),Ve}),_=i.field,A=new Xe(.45,.78,1),O=new pn({...Em,...ah,uniforms:{uTime:{value:0},uOpacity:{value:0},uSpeed:{value:2.6},uColor:{value:A}}}),U=new pn({...bM,...ah,uniforms:{uTime:{value:0},uOpacity:{value:0},uColor:{value:A}}}),z=new kt;if(a.add(z),_){let q=_.coreTop,me=[];for(let pe of[..._.inner??[],..._.shells])for(let ge of wd(pe,_.offset,q,1))me.push(ge,ge.map(([wt,Ve])=>[-wt,Ve]));let Me=new rt(Tm(me,.006),O);Me.scale.setScalar(n),Me.position.z=n*.005,S.add(Me);let Ie=_.azimuths??10;for(let pe of _.shells)for(let ge of wd(pe,_.offset,1,1/0,180))for(let wt=0;wt<Ie;wt++){let Ve=wt/Ie*Math.PI*2+pe,Ue=ge.map(([ft,lt])=>new T(ft*Math.cos(Ve)*n,lt*n,ft*Math.sin(Ve)*n));z.add(new rt(new Wr(new $s(Ue),90,n*.007,5,!1),U))}}let V,j,D=[];if(i.coreField){j=new pn({...TM,uniforms:{uTime:{value:0},uOpacity:{value:0}},transparent:!0}),V=new rt(new Zn(n*i.coreField,128,64),j),V.renderOrder=-1,d.add(V);let q=n*i.coreField,me=5;[1.25,1.6,2.1,2.8].forEach((Me,Ie)=>{let[pe]=wd(Me,0,1,1/0,160);for(let ge=0;ge<me;ge++){let wt=(ge+.5*(Ie%2))/me*Math.PI*2,Ve=pe.map(([Bt,In])=>new T(Bt*Math.cos(wt)*q,In*q,-Bt*Math.sin(wt)*q)),Ue=new pn({...EM,...ah,uniforms:{uTime:{value:0},uOpacity:{value:0},uColor:{value:new Xe(.6,.85,1)},uShiftS:{value:0},uShiftN:{value:0}}}),ft=new rt(new Wr(new $s(Ve),140,n*.0045,5,!1),Ue),[lt,ht]=pe[0],[Wt,un]=pe[pe.length-1];D.push({mesh:ft,mat:Ue,phi:wt,latS:Math.atan2(ht,lt),latN:Math.atan2(un,Wt),shiftS:0,shiftN:0}),V.add(ft)}})}let Z=.6,Q=0,k=new T,K=new T,J=new T,se=new Rt,fe=new Ct;function ze(q){s.copy(q)}function ot({dt:q,time:me,camera:Me,wobble:Ie=0,cut:pe=0,waves:ge=0,cutTurn:wt=MM,field:Ve=0,core:Ue=0,animate:ft,spinAngle:lt,scale:ht=1,stretch:Wt=1}){let un=n*ht;ft&&(g&&(Z+=q*Math.PI*2/g.seconds*Ie),Q+=q*(i.spinRate??.35)),a.position.copy(s),R.uCenter.value.copy(s).applyMatrix4(Me.matrixWorldInverse),a.scale.setScalar(ht),S.scale.setScalar(ht),R.uRadius.value=un,y(Z,k),fe.setFromUnitVectors(Am,k),a.quaternion.copy(fe),d.rotation.y=lt??Q,d.scale.set(Wt,1,1),u.opacity=.9*Math.max(Ie,pe*.6),g&&(m.position.copy(s),p.position.copy(s),p.material.opacity=.8*Ie,m.material.opacity=.5*Ie),K.copy(Me.position).sub(s),K.addScaledVector(k,-K.dot(k)).normalize(),K.applyAxisAngle(k,wt);let Bt=(1-pe)*un;o.normal.copy(K).negate(),o.constant=pe>.001?K.dot(s)+Bt:1e6,S.visible=pe>.001,J.crossVectors(k,K).normalize(),se.makeBasis(J,k,K),S.quaternion.setFromRotationMatrix(se),S.position.copy(s).addScaledVector(K,Bt);for(let $t of[...E,O,U])$t.uniforms.uTime.value=me;E.forEach(($t,Nt)=>$t.uniforms.uOpacity.value=(Array.isArray(ge)?ge[Nt]??0:ge)*pe);let In=_?.strength??1;if(O.uniforms.uOpacity.value=Ve*pe*In,U.uniforms.uOpacity.value=Ve*In,z.visible=Ve>.001,i.sunDir&&f.uSunView.value.copy(i.sunDir).transformDirection(Me.matrixWorldInverse),h&&(ft&&(h.rotation.y+=q*.012),h.material.opacity=.95*(1-Ue),h.visible=Ue<.99),V){d.material.opacity=1-.88*Ue,d.material.depthWrite=Ue<.01,V.visible=Ue>.001,j.uniforms.uOpacity.value=Math.min(1,Ue*1.5);let $t=me*.6;j.uniforms.uTime.value=$t;for(let Nt of D){if(Nt.mesh.visible=Ue>.001,ft&&Ue>.001){let wn=(An,B)=>.5*AM(An,Nt.phi+B,$t)/Math.max(Math.cos(An),.2);Nt.shiftS+=q*.6*(wn(Nt.latS,Nt.shiftS)-.25*Nt.shiftS),Nt.shiftN+=q*.6*(wn(Nt.latN,Nt.shiftN)-.25*Nt.shiftN)}Nt.mat.uniforms.uShiftS.value=Nt.shiftS,Nt.mat.uniforms.uShiftN.value=Nt.shiftN,Nt.mat.uniforms.uTime.value=me,Nt.mat.uniforms.uOpacity.value=.7*Ue}}}return{root:r,surface:d,update:ot,setCenter:ze,center:s,clip:o,layerColors:R}}function RM(){let i=document.createElement("canvas");i.width=256,i.height=184;let e=i.getContext("2d");e.fillStyle="#c9ccd1",e.fillRect(0,0,i.width,i.height);let t=14,n=10,s=6,r=2,o=(i.width-2*s-(t-1)*r)/t,a=(i.height-2*s-(n-1)*r)/n;for(let l=0;l<t;l++)for(let d=0;d<n;d++){let f=22+Math.random()*10;e.fillStyle=`hsl(226 55% ${f}%)`,e.fillRect(s+l*(o+r),s+d*(a+r),o,a)}let c=new hi(i);return c.colorSpace=on,c.anisotropy=4,c}function CM(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#b8862b",e.fillRect(0,0,256,256);for(let n=0;n<900;n++){let s=Math.random()*256,r=Math.random()*256,o=4+Math.random()*18;e.fillStyle=`hsla(${38+Math.random()*8} ${60+Math.random()*25}% ${40+Math.random()*30}% / 0.35)`,e.beginPath(),e.moveTo(s,r),e.lineTo(s+o,r+o*(Math.random()-.5)),e.lineTo(s+o*(Math.random()-.5),r+o),e.fill()}let t=new hi(i);return t.colorSpace=on,t}function Qr(i,e,t,n){let s=new T().subVectors(e,i),r=new rt(new Yn(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.copy(new Ct().setFromUnitVectors(new T(0,1,0),s.normalize())),r}function Pm(){let i=new kt,e=(b,R,E)=>new T(b,R,E),t=new Ft({map:CM(),shininess:60,specular:new Xe(8939042)}),n=new Ft({color:15263972,shininess:20}),s=new Ft({color:10133672,shininess:50,specular:new Xe(7829367)}),r=new Ft({color:2763310,shininess:10}),o=new Ft({map:RM(),shininess:70,specular:new Xe(4478327)}),a=new Ft({color:7040885,shininess:10}),c=2.86,l=4.35,d=4.09;i.add(new rt(new qn(c,l,d),t));for(let b of[-1,1]){let R=new kt;i.add(R);let E=c/2;R.add(Qr(e(b*E,0,0),e(b*(E+1.3),0,0),.06,s));let _=3.5,A=2.5,O=.05,U=(V,j)=>{let D=new kt,Z=new rt(new qn(_,A,O),[a,a,a,a,o,a]);D.add(Z),D.position.set(b*V,j,0),R.add(D)},z=E+1.3+_/2;for(let V=0;V<3;V++)U(z+V*(_+.08),0);U(z+_+.08,A+.08),U(z+_+.08,-(A+.08)),R.rotation.x=-.35}let f=1.25,h=.38,u=[];for(let b=0;b<=16;b++){let R=b/16*f;u.push(new Oe(R,h*R*R/(f*f)))}let g=new rt(new Ks(u,48),new Ft({color:15921902,shininess:30,side:Mn}));g.rotation.x=Math.PI/2,g.position.set(0,.4,d/2+.25),i.add(g);let y=e(0,.4,d/2+.25+f*f/(4*h)*.9);for(let b=0;b<3;b++){let R=b/3*Math.PI*2;i.add(Qr(e(Math.cos(R)*f*.95,.4+Math.sin(R)*f*.95,d/2+.25+h),y,.02,n))}let m=new rt(new Js(.12,.3,12),n);m.rotation.x=-Math.PI/2,m.position.copy(y),i.add(m),i.add(Qr(e(0,l/2+.25,-8),e(0,l/2+.25,8),.035,n)),i.add(Qr(e(0,l/2,0),e(0,l/2+.25,0),.08,s));let p=e(-c/2,-l/2+.5,-d/2),S=p.clone().add(e(-.35,-.25,-1).normalize().multiplyScalar(10.6));i.add(Qr(p,S,.04,s));for(let b of[.55,.8,1]){let R=new rt(new qn(.18,.18,.18),n);R.position.lerpVectors(p,S,b),i.add(R)}for(let[b,R,E]of[[1,1,1],[-1,1,-1],[1,-1,-1],[-1,-1,1]]){let _=e(b*c/2,R*l/2,E*d/2),A=_.clone().add(e(b*.7,R*.5,E*.5).normalize().multiplyScalar(3));i.add(Qr(_,A,.015,s));let O=new rt(new Zn(.05,10,8),r);O.position.copy(A),i.add(O)}let I=new rt(new Yn(.18,.42,.8,24,1,!0),new Ft({color:5987683,shininess:40,side:Mn}));return I.position.y=-l/2-.4,i.add(I),i}var eo=13.6;function Td(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new hi(n);return s.colorSpace=on,s.anisotropy=8,s}var Im=()=>Td(256,200,(i,e,t)=>{i.fillStyle="#b9bec6",i.fillRect(0,0,e,t);let n=6,s=16,r=(t-2*n)/s;for(let o=0;o<s;o++){let a=n+o*r;if(o%2===0)for(let c=n;c<e-n;c+=14)i.fillStyle=`hsl(222 50% ${18+Math.random()*8}%)`,i.fillRect(c,a+1,12,r-2);else i.fillStyle=`hsl(210 12% ${74+Math.random()*10}%)`,i.fillRect(n,a+1,e-2*n,r-2)}}),Ad=(i,e)=>Td(256,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s);for(let r=0;r<700;r++){t.fillStyle=e(Math.random());let o=Math.random()*n,a=Math.random()*s,c=3+Math.random()*14;t.beginPath(),t.moveTo(o,a),t.lineTo(o+c,a+c*(Math.random()-.5)),t.lineTo(o+c*(Math.random()-.5),a+c),t.fill()}t.strokeStyle="rgba(0,0,0,0.12)";for(let r=1;r<4;r++)t.beginPath(),t.moveTo(r*n/4,0),t.lineTo(r*n/4,s),t.stroke()}),PM=()=>Td(256,256,(i,e,t)=>{i.fillStyle="#d9dde2",i.fillRect(0,0,e,t),i.strokeStyle="#aab1ba";for(let n=0;n<e;n+=16)i.beginPath(),i.moveTo(n,0),i.lineTo(n,t),i.stroke();i.fillStyle="#c3c9d0";for(let n=24;n<t;n+=48)i.fillRect(0,n,e,4)});function lh(i,e,t,n){let s=new T().subVectors(e,i),r=new rt(new Yn(t,t,s.length(),8),n);return r.position.copy(i).addScaledVector(s,.5),r.quaternion.copy(new Ct().setFromUnitVectors(new T(0,1,0),s.normalize())),r}function Lm(){let i=(k,K,J)=>new T(k,K,J),e=new Ft({map:Im(),shininess:70,specular:new Xe(5596791)}),t=new Ft({color:5593439,shininess:8}),n=new Ft({map:Ad("#8c8f95",k=>`hsla(${30+k*20} 20% ${45+k*35}% / 0.35)`),shininess:40,specular:new Xe(4473924)}),s=new Ft({map:Ad("#d8d2c4",k=>`hsla(40 18% ${70+k*20}% / 0.35)`),shininess:12}),r=new Ft({map:Ad("#eceae4",k=>`hsla(45 10% ${80+k*15}% / 0.3)`),shininess:10,side:Mn}),o=new Ft({color:10133672,shininess:60,specular:new Xe(7829367)}),a=new Ft({color:2369067,shininess:20}),c=(k,K)=>new rt(new qn(k,K,.05),[t,t,t,t,e,t]),l=new kt,d=2.3,f=new rt(new qn(3.9,d,3.6),n);f.position.y=d/2,l.add(f);let h=new rt(new Yn(1.1,1.3,.35,32,1,!0),new Ft({color:7304315,side:Mn,shininess:30}));h.position.y=-.17,l.add(h);let u=[];for(let[k,K]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){let J=new rt(new Yn(.16,.2,.3,20),a);J.position.set(k,-.1,K),l.add(J),u.push(J.position)}let g=new ki({color:7183615,transparent:!0,opacity:0,blending:Bn,depthWrite:!1}),y=new kt;for(let k of u.slice(0,2)){let K=new rt(new Js(.4,4,24,1,!0),g);K.rotation.x=Math.PI,K.position.set(k.x,-2.2,k.z),y.add(K)}l.add(y);for(let k of[-1,1]){let K=new kt;K.add(lh(i(k*1.95,d/2,0),i(k*3.2,d/2,0),.06,o));for(let J=0;J<5;J++){let se=c(2.25,1.85);se.position.set(k*(3.2+1.15+J*2.3),d/2,0),K.add(se)}K.rotation.x=-.55,l.add(K)}let m=new kt,p=d,S=1.7,I=new rt(new qn(2.4,S,2.2),s);I.position.y=p+S/2,m.add(I);let b=new rt(new qn(3.7,2.6,.06),new Ft({map:PM(),shininess:50}));b.position.set(0,p+1.2,-1.2),m.add(b);let R=new kt;R.add(lh(i(0,p+S/2,1.1),i(0,p+S/2,2),.05,o));for(let k=0;k<3;k++){let K=c(1.6,1.85);K.rotation.y=Math.PI/2,K.position.set(0,p+S/2,2+.95+k*1.9),R.add(K)}R.rotation.z=.35,m.add(R);let E=.5,_=.14,A=[];for(let k=0;k<=12;k++){let K=k/12*E;A.push(new Oe(K,_*K*K/(E*E)))}let O=new rt(new Ks(A,36),new Ft({color:16052972,side:Mn,shininess:30}));O.position.set(1.9,p+S+.25,.5),O.rotation.z=-.9,m.add(O),m.add(lh(i(1.2,p+S-.2,.5),O.position,.04,o));let U=new kt,z=p+S,V=2.3,j=new rt(new Yn(1.25,1.6,V,8,1,!0),r);j.position.y=z+V/2,U.add(j);for(let k=0;k<8;k++){let K=k/8*Math.PI*2+Math.PI/8;U.add(lh(i(Math.cos(K)*1.6,z,Math.sin(K)*1.6),i(Math.cos(K)*1.25,z+V,Math.sin(K)*1.25),.03,o))}let D=new rt(new Yn(.97,.97,.9,8),[new Ft({map:Im(),shininess:60}),new Ft({color:3816772,shininess:30}),a]);D.position.y=z+V-.55,U.add(D);let Z=new kt;Z.add(m,U);let Q=new kt;Q.add(l,Z);for(let k of[l,Z])k.position.y-=3.1;return{group:Q,mtm:l,update({separation:k=0,thrust:K=1,time:J=0}){g.opacity=.07*K*(k>0?0:1)*(.9+.1*Math.sin(J*17)),y.visible=g.opacity>.005;let se=50*k;l.position.set(0,-3.1-se,0),l.rotation.set(.5*k,0,.2*k)}}}var to=15;var Nn=(i,e,t)=>new T(i,e,t),tn=Nn(0,1,0),It=2/6371,Om=1496e5*It,ln=It/1e3,dh=(i,e)=>i.clone().applyAxisAngle(tn,e*Math.PI/180),mn={center:Nn(0,0,0),radius:2},fh=Nn(-40,0,62).normalize(),Sa={center:new T,radius:1737.4*It},it={center:fh.clone().multiplyScalar(Om),radius:695700*It},ph=fh.clone().negate(),en={center:it.center.clone().addScaledVector(dh(ph,70),7785e5*It),radius:69911*It},jn={center:it.center.clone().addScaledVector(dh(ph,110),14335e5*It),radius:58232*It},Rd=new Ai(.25,0,-26.7*Math.PI/180),Nm=16,Ii=30,ri=30,Wi=[{name:"io",orbit:421700*It,radius:1821.6*It,period:1.769},{name:"europa",orbit:671034*It,radius:1560.8*It,period:3.551},{name:"ganymede",orbit:1070412*It,radius:2634.1*It,period:7.155},{name:"callisto",orbit:1882709*It,radius:2410.3*It,period:16.689}],IM=6,Li=(()=>{let i=tn.clone().applyEuler(Rd),e=it.center.clone().sub(jn.center).normalize(),t=e.addScaledVector(i,-e.dot(i)).normalize();return{center:jn.center.clone().addScaledVector(t,238042*It),radius:252.1*It}})(),Qn={a:5791e4*It,e:.2056,secondsPerOrbit:9},Is=mn.center.clone().sub(it.center).setY(0).normalize(),Bm=new T().crossVectors(tn,Is).normalize(),Xi={radius:2439.7*It,enlarge:1200,home:it.center.clone().addScaledVector(Is,Qn.a*(1-Qn.e))},LM=Math.atan2(-Is.z,Is.x);function Dm(i,e=new T){let t=i;for(let r=0;r<8;r++)t-=(t-Qn.e*Math.sin(t)-i)/(1-Qn.e*Math.cos(t));let n=Qn.a*(Math.cos(t)-Qn.e),s=Qn.a*Math.sqrt(1-Qn.e**2)*Math.sin(t);return e.copy(it.center).addScaledVector(Is,n).addScaledVector(Bm,s)}var NM=(i,e,t)=>Xi.home.clone().addScaledVector(Is,-i).addScaledVector(Bm,e).addScaledVector(tn,t),Um=it.center.clone().addScaledVector(Is,-Qn.a*Qn.e),Ot={},va=new T(0,1,0),ya=()=>({}),ba=Li.radius/.6;function ch(i,e,t){let n=f=>{let h=new T().crossVectors(f,tn).normalize();return[f,new T().crossVectors(h,f),h]},[s,r,o]=n(Nn(9,2,-8).normalize()),[a,c,l]=n(jn.center.clone().sub(Li.center).normalize()),d=Nn(i,e,t);return Li.center.clone().addScaledVector(a,d.dot(s)*ba).addScaledVector(c,d.dot(r)*ba).addScaledVector(l,d.dot(o)*ba)}var us={earth:{pos:Nn(1.5,1.2,9.5),look:mn.center,shift:2.4},wobble:{pos:Nn(.8,8.5,9.5),look:Nn(0,1.2,0),shift:2.8},cut:{pos:Nn(1.2,.6,8),look:mn.center,shift:2.2},waves:{pos:Nn(.6,.3,6.6),look:mn.center,shift:1.8},field:{pos:Nn(3,2.6,14.5),look:mn.center,shift:3.8},core:{pos:Nn(-1.2,2.2,6.2),look:mn.center,shift:1.7},mercury:{pos:NM(3.6,-1.5,.9),look:Xi.home,shift:1.1,narrowBack:.85},"mercury-orbit":{pos:Um.clone().add(Nn(0,100*(Qn.a/26),0)).addScaledVector(Is,22*(Qn.a/26)),look:Um,shift:20*(Qn.a/26)},sun:{pos:it.center.clone().addScaledVector(Nn(24,6,-20),it.radius/9),look:it.center,shift:7*it.radius/9},jupiter:(()=>{let i=it.center.clone().sub(en.center).normalize(),e=new T().crossVectors(i,tn).normalize(),t=en.center.clone().addScaledVector(i,760).addScaledVector(tn,430).addScaledVector(e,-170),n={pos:t,look:en.center};return{pos:t,look:en.center,shift:230,narrowBack:1.3,follow:()=>Ot.jupiter?Ot.jupiter(n):n}})(),"juice-cruise":{follow:()=>Ot.juiceRide(),shift:9*ln*ri,narrowBack:1.2},juice:{follow:()=>Ot.juiceDown?Ot.juiceDown():Ot.juice(),shift:9*ln*ri,narrowBack:1.25},"juice-map":{follow:()=>Ot.juiceMap(),shift:.5*2634*It,narrowBack:1.2},"juice-gravity":{follow:()=>Ot.juiceMap(),shift:.5*2634*It,narrowBack:1.2},"juice-field":{follow:()=>Ot.juiceField(),shift:1.2*2634*It,narrowBack:1.2},ganymede:{follow:()=>Ot.juiceMap(),shift:.5*2634*It,narrowBack:1.2},"juice-tour":{follow:()=>Ot.tourTop(),narrowBack:1.35},"ocean-worlds":{follow:()=>Ot.row(),shift:0,narrowBack:1.45},"ocean-depth":{follow:()=>Ot.row(),shift:0,narrowBack:1.45},"ocean-probes":{follow:()=>Ot.probe(),shift:.55*2634*It,narrowBack:1.3},launch:{follow:()=>Ot.launch,shift:4.6,narrowBack:1.15},bepi:{follow:()=>Ot.bepi(),shift:9*ln*Ii,narrowBack:1.2},arrival:{follow:()=>Ot.arrival,shift:3,narrowBack:1.25},enceladus:{pos:ch(-3,.7,4),look:ch(2.5,.4,-2.5),shift:0},"enceladus-ocean":{pos:ch(1.4,.45,2.85),look:Li.center,shift:1.1*ba,narrowBack:.95},"enceladus-resonance":{pos:ch(.9,.4,3.05),look:Li.center,shift:1.1*ba,narrowBack:.95},end:(()=>{let i=dh(ph,270);return{pos:it.center.clone().addScaledVector(tn,115e4).addScaledVector(i,55e4),look:it.center.clone().addScaledVector(dh(ph,90),12e4),shift:24e4}})()};{let i=us.earth.pos,e=us.earth.look.clone().sub(i).normalize(),t=new T().crossVectors(e,tn).normalize(),n=new T().crossVectors(t,e),o=us.earth.look.clone().addScaledVector(t,-us.earth.shift).sub(i).normalize().addScaledVector(n,.3).addScaledVector(t,-.12).normalize(),a=i.dot(o),c=384400*It;Sa.center.copy(i).addScaledVector(o,-a+Math.sqrt(a*a-i.lengthSq()+c*c))}var DM={wobble:{eWobble:1},cut:{eCut:1},waves:{eCut:1,eWaves:1},field:{eCut:1,eField:1},core:{eCore:1},mercury:{mCut:1,mWaves:1,mField:1,mLibration:1},"mercury-orbit":{mOrbit:1},jupiter:{jOrbits:1},juice:{jJuice:1},"juice-map":{gMap:1},ganymede:{gMap:1},"juice-tour":{jOrbits:1},"juice-gravity":{gMap:1,gGrav:1},"juice-field":{gMap:1,gField:1},"ocean-worlds":{gRow:1},"ocean-depth":{gRow:1,gDepth:1},"ocean-probes":{gRow:1,gDepth:1,gProbe:1},arrival:{bOrbit:1},enceladus:{nPlume:1},"enceladus-ocean":{nPlume:1,nCut:1,nWaves:1},"enceladus-resonance":{nPlume:1,nCut:1,nWaves:1,nHeat:1},end:{xMap:1}},Ed=["eWobble","eCut","eWaves","eField","eCore","mCut","mWaves","mField","mLibration","mOrbit","nCut","nWaves","nHeat","nPlume","jOrbits","xMap","jJuice","bOrbit","gMap","gGrav","gField","gRow","gDepth","gProbe"],Ma=[{top:1221/6371,low:"#fff2c4",high:"#facc14"},{top:3480/6371,low:"#fa7317",high:"#fa913d"},{top:.985,low:"#9e1c1c",high:"#d94d1a"},{top:1,low:"#575450",high:"#575450"}],ir=[{top:.77,low:"#3f342b",high:"#6b5a4a"},{top:.92,low:"#0c3a66",high:"#1f6fae"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}],UM={europa:[{top:600/1561,low:"#7a3f22",high:"#b0602f"},{top:1436/1561,low:"#3f342b",high:"#6b5a4a"},{top:1536/1561,low:"#1258a8",high:"#3d95e6"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}],ganymede:[{top:700/2634,low:"#7a3f22",high:"#b0602f"},{top:1780/2634,low:"#3f342b",high:"#6b5a4a"},{top:2384/2634,low:"#6b7180",high:"#9aa1ae"},{top:2484/2634,low:"#1258a8",high:"#3d95e6"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}],callisto:[{top:600/2410,low:"#5a3f2c",high:"#80603f"},{top:2185/2410,low:"#4a4640",high:"#6e685f"},{top:2310/2410,low:"#1258a8",high:"#3d95e6"},{top:1,low:"#b9d3e6",high:"#eaf4fb"}]},hh=[{top:.33,low:"#fff2c4",high:"#facc14"},{top:.77,low:"#fa7317",high:"#fa913d"},{top:2020/2440,low:"#b45309",high:"#c2560f"},{top:.985,low:"#5c4a3d",high:"#7d6a5a"},{top:1,low:"#8a8580",high:"#8a8580"}],hs=document.querySelector(".journey-canvas"),uh=[...document.querySelectorAll(".journey-step[data-stop]")];hs&&uh.length&&FM()?BM():document.documentElement.classList.add("no-webgl");function FM(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function Fm(i,e){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,i),s.addColorStop(.35,e),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,256,256);let r=new hi(t);return r.colorSpace=on,r}function OM(i){let e=new ta,t=new Map,n=new Map,s=new Map,r=f=>/^(earth|moon)/.test(f)?"earth":/^mercury/.test(f)?"mercury":/^sun/.test(f)?"sun":/^(jupiter|io|europa|ganymede|callisto)/.test(f)?"jupiter":"saturn",o=f=>/normal|spec|bump/.test(f),a=f=>{let h=document.createElement("canvas");h.width=h.height=1;let u=h.getContext("2d");return u.fillStyle=f?"rgb(128,128,255)":"rgb(46,46,50)",u.fillRect(0,0,1,1),h};function c(f){if(f=f.replace(/\.(jpg|png)(#|$)/,".webp$2"),t.has(f))return t.get(f).t;let h=new Pn(a(/normal/.test(f)));h.needsUpdate=!0,!o(f)&&!/clouds/.test(f)&&(h.colorSpace=on),h.anisotropy=d.anisotropy;let u={t:h,file:f.split("#")[0],level:0,preview:!o(f)};t.set(f,u);let g=r(f);return n.has(g)||n.set(g,[]),n.get(g).push(u),h}function l(f,h){let u=f+h;if(!s.has(u)){let g=(n.get(f)??[]).filter(y=>y.level<h&&(h===2||y.preview));s.set(u,Promise.all(g.map(y=>new Promise(m=>e.load(i+(h===1?y.file.replace(".webp",".lo.webp"):y.file),p=>{y.level<h&&(y.t.dispose(),y.t.image=p.image,y.t.needsUpdate=!0,y.level=h),m()},void 0,m)))))}return s.get(u)}let d={get:c,load:l,anisotropy:8,loader:{load:f=>c(f.slice(i.length))}};return d}function BM(){let i=matchMedia("(prefers-reduced-motion: reduce)").matches,e=1,t=[],n=!1,s=new T,r=new sh({canvas:hs,antialias:!0,reversedDepthBuffer:!0}),o=Math.min(devicePixelRatio,2),a=o;r.setPixelRatio(a);let c=hs.dataset.textures,l=OM(c),d=l.get,f=l.loader;l.anisotropy=r.capabilities.getMaxAnisotropy(),r.localClippingEnabled=!0,r.setClearColor(263434);let h=new Vo,u=new Fn(45,1,.1,1e8);h.add(new ra(16777215,.22));let g=new sa(16774368,3,0,0);g.position.copy(it.center),h.add(g);let y=600,m=[],p=[];for(let x=0;x<y;x++)m.push(Nn(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize().multiplyScalar(300+Math.random()*500)),p.push(.3+Math.random()*.7);let S=new Pt;S.setAttribute("position",new Qe(new Float32Array(y*6),3));{let x=new Float32Array(y*6);for(let w=0;w<y;w++)x.set([.85,.92,1,0,0,0],w*6);S.setAttribute("color",new Qe(x,3))}let I=new Hr(S,new vn({vertexColors:!0,blending:Bn,depthWrite:!1}));I.renderOrder=-1,I.frustumCulled=!1,h.add(I);function b(){if(I.visible=ds>.01,R.material.color.setScalar(1-.35*ds),!I.visible)return;I.position.copy(u.position),I.scale.copy(R.scale),I.material.color.setScalar(.6*ds);let x=S.attributes.position;for(let w=0;w<y;w++){let P=m[w],L=220*p[w]*ds;x.setXYZ(2*w,P.x,P.y,P.z),x.setXYZ(2*w+1,P.x-fs.x*L,P.y-fs.y*L,P.z-fs.z*L)}x.needsUpdate=!0}let R;{let x=[],w=[];for(let L=0;L<5e3;L++){let G=Nn(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();G.multiplyScalar(300+Math.random()*500),x.push(G.x,G.y,G.z);let Y=new Xe().setHSL(.58+(Math.random()-.5)*.25,.4,.75+Math.random()*.25);w.push(Y.r,Y.g,Y.b)}let P=new Pt;P.setAttribute("position",new Qe(x,3)),P.setAttribute("color",new Qe(w,3)),R=new ws(P,new Zs({size:1.6,sizeAttenuation:!1,vertexColors:!0,depthWrite:!1})),R.renderOrder=-1,R.frustumCulled=!1,h.add(R)}let E=[],_=x=>new Zn(x,96,48),A=xa({loader:f,textures:c,center:mn.center,radius:mn.radius,maps:{map:"earthday4k.webp",bump:"earthbump4k.webp",bumpScale:2.2,specular:"earthspec4k.webp",clouds:"earthclouds2k.webp",night:"earthnight4k.webp"},sunDir:fh,layers:Ma,waves:{inner:Ma[0].top,outer:Ma[1].top,omega:1},field:{shells:[1.35,1.8,2.5,3.4],inner:[.8],offset:0,coreTop:Ma[1].top},wobble:{obliquity:23.4,nutation:2.5,nods:11,seconds:16},coreField:Ma[1].top,spinRate:.35});h.add(A.root);let O=new pn({uniforms:{uSun:{value:new T},uOpacity:{value:1}},vertexShader:`
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
      }`,blending:Bn,transparent:!0,depthWrite:!1}),U=new rt(new Zn(mn.radius*1.025,96,48),O);U.position.copy(mn.center),h.add(U);let z=new rt(new Zn(Sa.radius,96,48),new Ft({map:d("moonmap2k.jpg"),normalMap:d("moonnormal2k.jpg"),shininess:4}));z.position.copy(Sa.center),h.add(z);let V=xa({loader:f,textures:c,center:Xi.home,radius:Xi.radius,maps:{map:"mercurymap.jpg",normal:"mercurynormal.jpg"},layers:hh,waves:{inner:hh[0].top,outer:hh[1].top,omega:58.65/87.97},field:{shells:[1.5,2.1],offset:.2,coreTop:hh[2].top,strength:.55,azimuths:8},spinRate:.05});h.add(V.root);let j=[];for(let x=0;x<=256;x++)Dm(x/256*Math.PI*2,j[x]=new T);let D=new Ln(new Pt().setFromPoints(j),new vn({color:10530496,transparent:!0,opacity:0}));h.add(D);let Z={orbits:document.querySelector("[data-orbits]"),spins:document.querySelector("[data-spins]")},Q=new rt(_(it.radius),new ki({map:d("sunmap.jpg")}));Q.position.copy(it.center),h.add(Q),E.push([Q,.02]);let k=new Vr(new Ys({map:Fm("rgba(255,214,140,0.9)","rgba(255,140,40,0.35)"),blending:Bn,depthWrite:!1}));k.scale.setScalar(it.radius*4.2),k.position.copy(it.center),h.add(k);let K=new kt;K.position.copy(en.center),K.rotation.z=3.1*Math.PI/180,h.add(K);let J=new rt(_(en.radius),new Ft({map:d("jupitermap.jpg"),shininess:4}));K.add(J),E.push([J,.12]);let se=d("moonnormal2k.jpg#detail");se.wrapS=se.wrapT=qs,se.repeat.set(10,5);let fe={io:Math.PI,europa:0,ganymede:0,callisto:2.2},ze=Wi.map(x=>{let w=new rt(new Zn(x.radius,x.name==="ganymede"?384:96,x.name==="ganymede"?192:48),new Ft({map:d(`${x.name}.jpg`),normalMap:se,normalScale:new Oe(.45,.45),shininess:8}));K.add(w);let P=[];for(let G=0;G<=192;G++){let Y=G/192*Math.PI*2;P.push(new T(Math.cos(Y)*x.orbit,0,-Math.sin(Y)*x.orbit))}let L=new Ln(new Pt().setFromPoints(P),new vn({color:10530496,transparent:!0,opacity:0}));return K.add(L),{...x,mesh:w,line:L,phase:fe[x.name]}}),ot=[],q=(x,w)=>{let P=[];for(let L=0;L<=256;L++){let G=L/256*Math.PI*2;P.push(x.clone().add(Nn(Math.cos(G)*w,0,Math.sin(G)*w)))}return P};for(let x of[mn,en,jn]){let w=new Ln(new Pt().setFromPoints(q(it.center,x.center.distanceTo(it.center))),new vn({color:10530496,transparent:!0,opacity:0}));h.add(w),ot.push(w)}let me=[[mn.center,"#60a5fa"],[null,"#b8b0a8"],[en.center,"#e3c9a0"],[jn.center,"#f0dca0"]],Me=new ws(new Pt().setAttribute("position",new Qe(new Float32Array(12),3)).setAttribute("color",new Qe(me.flatMap(([,x])=>new Xe(x).toArray()),3)),new Zs({size:7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1}));Me.frustumCulled=!1,h.add(Me);let Ie=ze.find(x=>x.name==="ganymede"),pe=null,ge=Pm();ge.scale.setScalar(ln*ri),h.add(ge);let wt=gi(),Ve=()=>1+(Nm-1)*et.jOrbits,Ue=new T,ft=new T,lt=new T,ht=new T,Wt=new T,un=new T,Bt=new Rt;function In(){K.updateMatrixWorld(!0),Ie.mesh.getWorldPosition(Ue),ft.copy(it.center).sub(Ue).normalize(),lt.copy(en.center).sub(Ue).normalize(),ht.copy(tn).addScaledVector(ft,.6).normalize(),Wt.copy(lt).addScaledVector(ht,-lt.dot(ht)).normalize(),un.crossVectors(Wt,ht)}function $t(x,w){let P=Ie.radius*Ve()+(500+(le?5500:19500)*(1-x)**1.5)*It,L=Math.PI*3*(1-x);return w.copy(Ue).addScaledVector(ht,P*Math.cos(L)).addScaledVector(Wt,P*Math.sin(L))}let Nt=2*Math.PI*Math.sqrt((2634.1+500)**3/9887.8)/3600,wn=7.1546*24,An=2*Math.PI*Nt/wn,B=["juice-map","juice-gravity","juice-field"],kn=24,Kt=.75,Zt=new T,Ne=new T;function cn(x,w){K.updateMatrixWorld(),Zt.set(0,1,0).applyQuaternion(K.getWorldQuaternion(new Ct)),Ne.copy(Zt).addScaledVector(ht,-Zt.dot(ht)).normalize();let P=Ie.radius*Ve()+500*It,L=Math.PI*2*x;return w.copy(Ue).addScaledVector(ht,P*Math.cos(L)).addScaledVector(Ne,P*Math.sin(L))}let le=null,at=new kt;K.add(at);let C=x=>x*x*(3-2*x);fetch(`${c}juice-tour.json`).then(x=>x.ok?x.json():Promise.reject(x.status)).then(({data:x})=>{let w=Uint8Array.from(atob(x),_e=>_e.charCodeAt(0)).buffer,P=new Float64Array(w,0,16),[L,G,Y,re]=P,ce=new Float32Array(w,128,L*3),De=new Int16Array(w,128+L*12,4*G);K.updateMatrixWorld(!0);let ae=K.worldToLocal(it.center.clone()),ye=Math.atan2(-ae.z,ae.x)-Math.atan2(-P[14],P[12]);at.rotation.y=ye;let Pe=71492,he=new Float64Array(L),$e=new Float32Array(L),st=new Float32Array(L);for(let _e=0;_e<L;_e++)st[_e]=Math.hypot(ce[3*_e],ce[3*_e+1],ce[3*_e+2])/Pe;for(let _e=1;_e<L;_e++)he[_e]=he[_e-1]+Math.max(st[_e],12)**-.75;for(let _e=0;_e<L;_e++)he[_e]/=he[L-1];for(let _e=0;_e<L;_e++){let St=0;for(let jt=Math.max(0,_e-120);jt<=Math.min(L-1,_e+120);jt++)St=Math.max(St,st[jt]);$e[_e]=St}for(let _e=1;_e<L;_e++)$e[_e]+=($e[_e-1]-$e[_e])*(1-1/240);for(let _e=L-2;_e>=0;_e--)$e[_e]+=($e[_e+1]-$e[_e])*(1-1/240);let _t=new Pt,zt=4,Vt=(L-1)*zt+1,Be=new Float32Array(Vt*3),ke=(_e,St)=>ce[3*Math.min(Math.max(_e,0),L-1)+St];for(let _e=0;_e<Vt;_e++){let St=Math.min(Math.floor(_e/zt),L-2),jt=_e/zt-St;for(let yn=0;yn<3;yn++)Be[3*_e+yn]=N(ke(St-1,yn),ke(St,yn),ke(St+1,yn),ke(St+2,yn),jt)*It}_t.setAttribute("position",new Qe(Be,3)),_t.setAttribute("color",new Qe(new Float32Array(Vt*3),3));let tt=new Ln(_t,new vn({vertexColors:!0,transparent:!0,blending:Bn,depthWrite:!1}));tt.frustumCulled=!1,tt.visible=!1,at.add(tt),le={K:L,L:G,step:Y,jd0:re,fits:[...P.slice(4,12)],pos:ce,res:De,cum:he,reach:$e,delta:ye,trace:tt,SUB:zt,shown:-1},Ha=!0;let mt=0;for(;mt<L-1&&st[mt]>45;)mt++;le.rideEnd=he[mt],le.rideEndDay=mt*Y;let Et=mt,Ut=1/0;for(let _e=mt;_e<Math.min(L,mt+400);_e++){let St=H(2,_e)-ye,jt=Math.cos(St)*1070400,yn=-Math.sin(St)*1070400,ai=Math.hypot(ce[3*_e]-jt,ce[3*_e+1],ce[3*_e+2]-yn);ai<Ut&&(Ut=ai,Et=_e)}le.flyby=he[Et]}).catch(()=>{});function v(x){let{cum:w,K:P}=le;x=ue.clamp(x,0,1);let L=0,G=P-1;for(;G-L>1;){let Y=L+G>>1;w[Y]<=x?L=Y:G=Y}return L+(x-w[L])/Math.max(w[G]-w[L],1e-12)}function H(x,w){let{fits:P,res:L,L:G,step:Y}=le,re=ue.clamp(w/4,0,G-1),ce=Math.min(Math.floor(re),G-2),De=re-ce;return P[2*x]+P[2*x+1]*w*Y+1e-6*(L[x*G+ce]*(1-De)+L[x*G+ce+1]*De)+le.delta}let de=null,oe=x=>de?1-ue.smoothstep(Math.abs(x-de.s0),0,.08):0,be=14,Re=!1,te=130,ie=x=>H(x,le.K-1)-Math.PI*2*be*(Wi[0].period/Wi[x].period)*(1-Ji/te),we=(x,w,P)=>Re?ie(x):H(x,w)+(de?de.phase[x]*oe(P):0),N=(x,w,P,L,G)=>w+.5*G*(P-x+G*(2*x-5*w+4*P-L+G*(3*(w-P)+L-x))),ne=new T,ee=new T,Ae=new T;function ve(x,w){let P=x.length();return P>1.2*w?x.multiplyScalar(1.2*w/P):x}function Te(x,w){let{pos:P,K:L}=le,G=v(x),Y=Math.min(Math.floor(G),L-2),re=G-Y,ce=(ae,ye)=>P[3*ue.clamp(ae,0,L-1)+ye];ne.set(...[0,1,2].map(ae=>N(ce(Y-1,ae),ce(Y,ae),ce(Y+1,ae),ce(Y+2,ae),re)*It)),ne.applyAxisAngle(tn,le.delta);let De=ue.smoothstep(G,L-241,L-41);if(De>0){let ae=Ie.orbit,ye=H(2,G),Pe=we(2,G,x);ee.set(Math.cos(ye)*ae,0,-Math.sin(ye)*ae),Ae.set(Math.cos(Pe)*ae,0,-Math.sin(Pe)*ae),ne.addScaledVector(Ae.sub(ee),De)}return w.copy(ne).applyMatrix4(K.matrixWorld)}function Ze(x){return new Date((le.jd0+x*le.step-24405875e-1)*864e5).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}let xt=Math.atan2(-(it.center.z-en.center.z),it.center.x-en.center.x)+1.05,xe=3,je=850,gt=new T;function Le(x,w){if(le)return Te(x,w);let P=Ie.orbit,L=P+(je-P)*(1-x)**1.6,G=ue.lerp(.68*P,P,ue.smoothstep(x,.55,1)),Y=Math.PI+Math.PI*2*xe*x,re=2*L*G/(L+G+(L-G)*Math.cos(Y)),ce=xt+Y-(Math.PI+Math.PI*2*xe);return gt.set(Math.cos(ce)*re,0,-Math.sin(ce)*re),w.copy(gt).applyMatrix4(K.matrixWorld),w.lerp($t(0,new T),ue.smoothstep(x,.9,1))}let Gt=Math.atan2(en.center.z-it.center.z,en.center.x-it.center.x),dn={r:2.4*Om,angle:Gt-.9},Ni=Math.hypot(en.center.x-it.center.x,en.center.z-it.center.z);function qi(x,w){let P=dn.r*(Ni/dn.r)**x,L=dn.angle+.9*x;return w.set(it.center.x+P*Math.cos(L),0,it.center.z+P*Math.sin(L))}let di=.85;function mh(x,w){if(le){let Pe=qi(0,new T),he=Le(0,new T),$e=Pe.distanceTo(he),st=qi(1e-4,new T).sub(Pe).normalize().multiplyScalar($e*.9),_t=Le(1e-5,new T).sub(he).normalize().multiplyScalar($e*.9);return Fs(Pe,st,he,_t,x,w)}if(x<di)return qi(x,w);let P=qi(di,new T),L=qi(di+1e-4,new T).sub(qi(di-1e-4,new T)).multiplyScalar((1-di)/2e-4),G=Le(0,new T),Y=(x-di)/(1-di);if(!le){let Pe=Le(1e-4,new T).sub(Le(0,new T)).normalize().multiplyScalar(P.distanceTo(G)*.6);return Fs(P,L,G,Pe,Y,w)}let re=.8,ce=45e6*It,De=Le(1e-5,new T).sub(G).normalize(),ae=G.clone().addScaledVector(De,-ce);if(Y>=re)return w.copy(ae).lerp(G,(Y-re)/(1-re));let ye=ce/(1-re);return ve(L.multiplyScalar(re),P.distanceTo(ae)),Fs(P,L,ae,De.multiplyScalar(ye*re),Y/re,w)}function fi(x,w){return x<=1?mh(Math.max(x,0),w):x<=2?Le(x-1,w):x<=3?$t(x-2,w):cn(x-3,w)}let no=.78,Yi=.62,Zi=.7,io=.75;ya=()=>({bepi:[gn,!0],"juice-cruise":[no,!0],...le?{jupiter:[Zi,!1],juice:[io,!1]}:{},...Object.fromEntries(B.map(x=>[x,[Kt,!1]]))});let Ht=0,Ji=0,pi=0,Ls=0,qe=null;function gh(x){if(qe)return qe.clock;let w=Je.indexOf("jupiter"),P=Je.indexOf("juice");return w<0||P<0?0:ue.clamp((x-w)/(P-w)/Yi,0,1)}function so(x){let w=Je.indexOf("jupiter"),P=Je.indexOf("juice"),L=1+le.rideEnd,G=1+le.flyby;return x<P?ue.lerp(L,G,C(ue.clamp((x-w)/(P-w)/Zi,0,1))):x<wa()?2+C(ue.clamp((x-P)/io,0,1)):3+$(x)}let ro=()=>Math.max(X(),Je.indexOf("ocean-depth"),Je.indexOf("ocean-probes")),wa=()=>{let x=Je.indexOf(B[0]);return x>=0?x:Je.indexOf("juice")+1};function Aa(x){let w=Je.indexOf("juice-cruise"),P=Je.indexOf("jupiter");return!le||w<0||x<w-.3||x>ro()+.6?-1:x<P?Math.max(0,Ht-1):Math.min(so(Math.min(x,Je.indexOf("juice")-1e-6))-1,le.flyby)}function Ta(x){In();let w=Je.indexOf("juice-tour"),P=le&&w>=0?1-ue.smoothstep(Math.abs(x-w),.2,.55):0;if(P>.001){Ht=1+pi,fi(Ht,ge.position),ge.visible=!0;let ke=ge.position.clone(),tt=Ht;t.push(()=>wt.draw(ke,fi,tt,1e-5,P,eo*ln*ri,1));let{SUB:mt}=le,Et=v(pi),Ut=Math.min(Math.ceil(Et*mt)+1,(le.K-1)*mt+1);le.trace.visible=Ut>1,le.trace.geometry.setDrawRange(0,Ut);let _e=le.trace.geometry.attributes.color;for(let St=0;St<Ut;St++){let jt=P*(.05+.95*Math.exp(-(Et-St/mt)/400));_e.setXYZ(St,.32*jt,.42*jt,.55*jt)}_e.needsUpdate=!0;return}if(Je.includes("ganymede")){Ht=3+Ls,fi(Ht,ge.position);let ke=it.center.clone().sub(ge.position).normalize(),tt=new T().crossVectors(ht,ke).normalize(),mt=new T().crossVectors(ke,tt);ge.quaternion.setFromRotationMatrix(Bt.makeBasis(tt,mt,ke));let Et=et.gMap;ge.visible=Et>.001;let Ut=ge.position.clone(),_e=Ht;t.push(()=>{ge.scale.setScalar(ln*ri),wt.draw(Ut,fi,_e,le?Math.min(.08,Ht-2):.3,Et,eo*ln*ri,1)}),le&&(le.trace.visible=!1);return}let L=Je.indexOf("juice-cruise"),G=Je.indexOf("jupiter"),Y=Je.indexOf("juice");if(L<0||G<0||Y<0)return;let re=1+(le?.rideEnd??0);if(x<G)Ht=C(ue.clamp((x-L)/no,0,1))*re;else if(qe)Ht=1+qe.clock;else if(le&&x<wa())Ht=so(x);else if(x<Y){let ke=(x-G)/(Y-G);Ht=ke<.06?re:2+C((ke-.06)/.94)}else Ht=3+$(x);fi(Ht,ge.position);let ce=it.center.clone().sub(ge.position).normalize(),De=new T().crossVectors(ht,ce).normalize(),ae=new T().crossVectors(ce,De);ge.quaternion.setFromRotationMatrix(Bt.makeBasis(De,ae,ce));let ye=qe||le?0:(()=>{let ke=(x-G)/(Y-G);return ue.smoothstep(ke,0,.05)*(1-ue.smoothstep(ke,.3,.5))})(),Pe=X(),he=le&&!qe?(()=>{let ke=(x-G)/(Y-G);return ue.smoothstep(ke,Zi+.02,Zi+.12)*(1-ue.smoothstep(x,Y+.005,Y+.08))})():0,$e=ue.smoothstep(x,L-.7,L-.5)*(1-ue.smoothstep(x,Pe+.1,Pe+.5))*(1-ye)*(1-he);ge.visible=$e>.001;let st=Ht<=1?.035:Ht<=2?le?qe?.008:.02:.22:le?Math.min(.08,Ht-2):.3,_t=1+.8*et.jOrbits,zt=le?1:Ht>3?ue.smoothstep(Ht,3.02,3.1):1-ue.smoothstep(Ht,2.8,2.97),Vt=ge.position.clone(),Be=Ht;if(t.push(()=>{let ke=lf(Vt);ge.scale.setScalar(ln*ri*ke),wt.draw(Vt,fi,Be,st,$e*zt,eo*ln*ri*ke,_t)}),le){let ke=qe?et.jOrbits*$e*qe.ramp*ue.smoothstep(Ht,1,1.002):0;if(le.trace.visible=ke>.002,le.trace.visible){let{SUB:tt}=le,mt=v(Ht-1),Et=Math.min(Math.ceil(mt*tt)+1,(le.K-1)*tt+1);le.trace.geometry.setDrawRange(0,Et);let Ut=le.trace.geometry.attributes.color;for(let _e=0;_e<Et;_e++){let St=ke*(.05+.95*Math.exp(-(mt-_e/tt)/320));Ut.setXYZ(_e,.32*St,.42*St,.55*St)}Ut.needsUpdate=!0}}}function oo(x){let w=it.center.clone().sub(x).normalize();return x.clone().sub(en.center).normalize().addScaledVector(tn,.6).addScaledVector(w,.4).normalize()}function M(x,w,P){let L=ge.position.clone(),G=Ht;ge.position.copy(x),Ht=w;let Y=P();return ge.position.copy(L),Ht=G,Y}let F=()=>{let x=fi(1+le.rideEnd,new T);return{pos:x.clone().addScaledVector(oo(x),330),look:en.center.clone()}};Ot.jupiter=x=>{if(!le)return x;let w=F();if(!qe)return w;let P=v(qe.clock),L=en.center.clone().lerp(x.pos,ue.clamp(le.reach[Math.round(P)],26,60)/20),G=C(qe.ramp),Y=w.pos.clone().sub(en.center),re=L.sub(en.center),ce=Math.exp(ue.lerp(Math.log(Y.length()),Math.log(re.length()),G));Y.normalize().applyQuaternion(new Ct().slerp(new Ct().setFromUnitVectors(Y.clone().normalize(),re.normalize()),G));let De=en.center.clone().addScaledVector(Y,ce),ae=w.look.clone().lerp(x.look,G);return{pos:De,look:ae}};function $(x){if(Je.includes("ganymede"))return Ls;let w=0;for(let[P,L]of B.entries()){let G=Je.indexOf(L);if(G<0||x<G)break;w=kn*(P+ue.clamp((x-G)/Kt,0,1))}return w}let X=()=>{let x=Je.indexOf(B.at(-1));return x>=0?x+Kt:Je.indexOf("juice")};Ot.juiceMap=()=>{let x=Ie.radius,w=un.clone().multiplyScalar(.8).addScaledVector(ft,.55).addScaledVector(ht,.15).normalize();return{pos:Ue.clone().addScaledVector(w,x*4.2),look:Ue.clone()}},Ot.tourTop=()=>{let x=27e5*It,w=ue.degToRad(22),P=ft.clone().addScaledVector(ht,-ft.dot(ht)).normalize(),L=ht.clone().multiplyScalar(Math.cos(w)).addScaledVector(P,Math.sin(w));return{pos:en.center.clone().addScaledVector(L,x/Math.tan(ue.degToRad(u.fov/2))),look:en.center.clone()}},Ot.juiceField=()=>{let x=Ot.juiceMap();return{pos:Ue.clone().lerp(x.pos,1.75),look:x.look}};let W=new Ln(new Pt().setAttribute("position",new Qe(new Float32Array(387),3)),new vn({color:16767392,transparent:!0,opacity:0,depthWrite:!1}));W.frustumCulled=!1,h.add(W);let Ee=1024,Ge=512,Se=document.createElement("canvas");Se.width=Ee,Se.height=Ge;let Ce=Se.getContext("2d"),Ye=new hi(Se),ut=(()=>{let P=document.createElement("canvas");P.width=512,P.height=256;let L=P.getContext("2d"),G=L.createImageData(512,256),Y=7,re=()=>(Y=Y*16807%2147483647)/2147483647,ce=Array.from({length:18},()=>{let st=Math.acos(2*re()-1),_t=re()*Math.PI*2;return{x:Math.sin(st)*Math.cos(_t),y:Math.cos(st),z:Math.sin(st)*Math.sin(_t),a:(re()*2-1)*.35,w:.25+re()*.3}}),De=new Float32Array(512*256),ae=0;for(let st=0;st<256;st++)for(let _t=0;_t<512;_t++){let zt=(st+.5)/256*Math.PI,Vt=(_t+.5)/512*Math.PI*2,Be=Math.sin(zt),ke=Math.cos(zt),tt=-127.5*(1.5*ke*ke-.5)+38.3*3*Be*Be*Math.cos(2*Vt);tt/=127.5;let mt=-Math.cos(Vt)*Be,Et=ke,Ut=Math.sin(Vt)*Be;for(let _e of ce){let St=Math.acos(Math.min(1,mt*_e.x+Et*_e.y+Ut*_e.z));tt+=_e.a*Math.exp(-(St*St)/(_e.w*_e.w))}De[st*512+_t]=tt,ae=Math.max(ae,Math.abs(tt))}let ye=[44,98,210],Pe=[236,234,226],he=[214,84,52];for(let st=0;st<512*256;st++){let _t=De[st]/ae,zt=_t<0?ye:he,Vt=Math.min(1,Math.abs(_t)*1.3);for(let Be=0;Be<3;Be++)G.data[4*st+Be]=Pe[Be]+(zt[Be]-Pe[Be])*Vt;G.data[4*st+3]=255}L.putImageData(G,0,0);let $e=new hi(P);return $e.colorSpace=on,$e})(),vt=new pn({uniforms:{surf:{value:null},mask:{value:Ye},grav:{value:ut},sun:{value:new T(1,0,0)},show:{value:0},wGrav:{value:0}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1}),He=new rt(new Zn(Ie.radius*1.004,128,64),vt);He.visible=!1,Ie.mesh.add(He);let pt=0,Xt=new T,Jt=new Ct;function qt(x){cn(x,Xt).sub(Ue),K.getWorldQuaternion(Jt).invert(),Xt.applyQuaternion(Jt).applyAxisAngle(va,-(Ie.phase+An*x)).normalize();let w=Math.acos(ue.clamp(Xt.y,-1,1)),P=Math.atan2(Xt.z,-Xt.x);return P<0&&(P+=Math.PI*2),[P/(Math.PI*2)*Ee,w/Math.PI*Ge]}function Tn(x){if(x<pt-1e-9&&(Ce.clearRect(0,0,Ee,Ge),pt=0),x-pt<1e-6)return;Ce.lineCap="round",Ce.strokeStyle="rgba(255, 255, 255, 0.9)",Ce.shadowColor="white",Ce.shadowBlur=6,Ce.lineWidth=10;let w=Math.max(1,Math.ceil((x-pt)*160)),[P,L]=qt(pt);for(let G=1;G<=w;G++){let[Y,re]=qt(pt+(x-pt)*G/w);Math.abs(Y-P)<Ee/2&&(Ce.beginPath(),Ce.moveTo(P,L),Ce.lineTo(Y,re),Ce.stroke()),P=Y,L=re}pt=x,Ye.needsUpdate=!0}function We(x,w,P){let L=new kt,G=new vn({color:P,transparent:!0,opacity:0,depthWrite:!1});for(let Y=0;Y<w;Y++){let re=Y/w*Math.PI*2;for(let ce of x){let De=Math.asin(Math.sqrt(1/ce)),ae=[];for(let ye=0;ye<=90;ye++){let Pe=De+(Math.PI-2*De)*ye/90,he=ce*Math.sin(Pe)**2;ae.push(new T(he*Math.sin(Pe)*Math.cos(re),he*Math.cos(Pe),he*Math.sin(Pe)*Math.sin(re)))}L.add(new Ln(new Pt().setFromPoints(ae),G))}}return L.userData.material=G,L}let hn=new kt,Dt=We([1.7,2.6,4],6,12375295),mi=We([1.35,1.9],4,6283468);hn.add(Dt,mi),hn.visible=!1,h.add(hn);function En(x){let w=$(x),P=et.gMap,L=w*Nt,G=Ie.radius*Ve();if(He.visible=P>.01,vt.uniforms.show.value=P,vt.uniforms.wGrav.value=et.gGrav,vt.uniforms.surf.value=Ie.mesh.material.map,vt.uniforms.sun.value.copy(it.center).sub(Ue).normalize(),P>.01&&(Ie.mesh.scale.x*=1+.018*P*Math.cos(2*Math.PI*L/wn)),hn.visible=et.gField>.01,hn.visible&&(hn.position.copy(Ue),hn.scale.setScalar(G),Dt.quaternion.setFromUnitVectors(va,Zt),mi.quaternion.setFromUnitVectors(va,lt),Dt.userData.material.opacity=.35*et.gField,mi.userData.material.opacity=.95*et.gField*Math.abs(Math.sin(2*Math.PI*L/10.53))**.7),W.material.opacity=.3*P,W.visible=P>.01,W.visible){let Y=W.geometry.attributes.position;W.position.copy(Ue);for(let re=0;re<=128;re++)cn(re/128,Xt).sub(Ue),Y.setXYZ(re,Xt.x,Xt.y,Xt.z);Y.needsUpdate=!0}(He.visible||w===0)&&Tn(w),c0(w,P)}Ot.juice=Ns,Ot.juiceDown=()=>le?Ot.juiceMap():Ns();function Ns(){let x=ft.clone().addScaledVector(Wt,-ft.dot(Wt)).normalize(),w=Wt.clone().multiplyScalar(-.75).addScaledVector(x,.65).addScaledVector(ht,.12).normalize();return{pos:ge.position.clone().addScaledVector(w,50*ln*ri),look:ge.position.clone()}}Ot.juiceRide=()=>{let x=it.center.clone().sub(ge.position).normalize(),P=new T().crossVectors(x,tn).normalize().multiplyScalar(.55).addScaledVector(x,.7).addScaledVector(tn,.35).normalize(),L=ge.position.clone().sub(us.mercury.pos).normalize().negate();P.copy(L.applyQuaternion(new Ct().slerp(new Ct().setFromUnitVectors(L.clone(),P.clone()),ue.smoothstep(Ht,0,.35))));let G=oo(ge.position),Y=new Ct().setFromUnitVectors(P,G);P.applyQuaternion(new Ct().slerp(Y,ue.smoothstep(Ht,.45,1)));let re=ge.position.clone().addScaledVector(P,50*ln*ri),ce=ge.position.clone().sub(re).normalize(),De=en.center.clone().sub(re),ae=De.length();De.normalize();let ye=0;if(ye<=0)return{pos:re,look:ge.position.clone()};let Pe=ce.clone().applyQuaternion(new Ct().slerp(new Ct().setFromUnitVectors(ce,De),ye));return{pos:re,look:re.clone().addScaledVector(Pe,ue.lerp(re.distanceTo(ge.position),ae,ye*2))}};function gi(){let x=new Vr(new Ys({map:Fm("rgba(225,238,255,0.9)","rgba(150,190,255,0.12)"),blending:Bn,depthWrite:!1,sizeAttenuation:!1,transparent:!0}));x.scale.setScalar(.012),h.add(x);let w=240,P=new Pt;P.setAttribute("position",new Qe(new Float32Array(w*3),3)),P.setAttribute("color",new Qe(new Float32Array(w*3),3));let L=new Ln(P,new vn({vertexColors:!0,transparent:!0,blending:Bn,depthWrite:!1}));L.frustumCulled=!1,h.add(L);let G=new Pt;G.setAttribute("position",P.attributes.position),G.setAttribute("aFade",new Qe(new Float32Array(w),1));let Y=new ws(G,new pn({uniforms:{uScale:{value:1}},vertexShader:`
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
        }`,transparent:!0,blending:Bn,depthWrite:!1}));Y.frustumCulled=!1,h.add(Y);let re=new T,ce=0,De=0;return{draw(ae,ye,Pe,he,$e,st,_t=1){let zt=u.position.distanceTo(ae),Vt=2*st/zt*(r.domElement.height/(2*Math.tan(ue.degToRad(u.fov/2))));x.position.copy(ae),x.material.opacity=$e*(1-ue.smoothstep(Vt,3,14)),x.visible=x.material.opacity>.01;let Be=performance.now(),ke=Math.min((Be-De)/1e3,.1);De=Be;let tt=1-ue.smoothstep(Vt,5,22);if(ce=i||tt<ce?tt:ce+(tt-ce)*(1-Math.exp(-ke*1.2)),Math.abs(tt-ce)<.001&&(ce=tt),he*=ce**1.5,$e*=Math.min(1,ce*3)*e,L.visible=Y.visible=$e>.01&&he>1e-4,!L.visible)return;L.position.copy(ae),Y.position.copy(ae),Y.material.uniforms.uScale.value=r.getPixelRatio();let mt=P.attributes.position,Et=P.attributes.color,Ut=G.attributes.aFade;for(let _e=0;_e<w;_e++){let St=(_e/(w-1))**1.8;ye(Pe-he*St,re).sub(ae),mt.setXYZ(_e,re.x,re.y,re.z);let jt=$e*(1-St)**1.6;Et.setXYZ(_e,.32*jt*_t,.42*jt*_t,.55*jt*_t),Ut.setX(_e,jt)}mt.needsUpdate=Et.needsUpdate=Ut.needsUpdate=!0}}}let Mt=Lm();Mt.group.scale.setScalar(ln*Ii),h.add(Mt.group);let Tt=gi(),gn=.78,Vn=it.center.clone().sub(Xi.home).normalize(),fn=new T().crossVectors(Vn,tn).normalize().clone().multiplyScalar(.7).addScaledVector(Vn,.55).addScaledVector(tn,.3).normalize(),_i=fn.clone().setY(0).normalize(),ao=new T().crossVectors(tn,_i).normalize(),_h=3030,xh=14079,Di={a:(_h+xh)/2*It,e:(xh-_h)/(xh+_h),turn:-.5,seconds:8};function sr(x,w){let P=x;for(let ce=0;ce<8;ce++)P-=(P-Di.e*Math.sin(P)-x)/(1-Di.e*Math.cos(P));let L=Di.a*(Math.cos(P)-Di.e),G=Di.a*Math.sqrt(1-Di.e*Di.e)*Math.sin(P),Y=Math.cos(Di.turn),re=Math.sin(Di.turn);return w.copy(Xi.home).addScaledVector(ao,L*Y-G*re).addScaledVector(tn,L*re+G*Y)}sr(Math.PI,new T).sub(Xi.home).dot(Vn)<0&&ao.negate();let vh=sr(Math.PI,new T);{let x=[];for(let w=0;w<=256;w++)x.push(sr(w/256*Math.PI*2,new T));var lo=new Ln(new Pt().setFromPoints(x),new vn({color:10867967,transparent:!0,opacity:0}));h.add(lo)}let Ds=(()=>{let x=mn.center.clone().sub(it.center);return{r:x.length(),angle:Math.atan2(x.z,x.x)+30/x.length()}})(),Us=new T(it.center.x+Ds.r*Math.cos(Ds.angle),0,it.center.z+Ds.r*Math.sin(Ds.angle)),rr=Us.clone().sub(mn.center).normalize(),Cd=mn.center.clone().addScaledVector(rr,mn.radius*1.01),Pd=vh.clone().sub(it.center),zm=Math.hypot(Pd.x,Pd.z);function km(x,w){let P=Ds.r*(zm/Ds.r)**x,L=Ds.angle+Math.PI*2*x;return w.set(it.center.x+P*Math.cos(L),0,it.center.z+P*Math.sin(L))}function Fs(x,w,P,L,G,Y){let re=G*G,ce=re*G;return Y.copy(x).multiplyScalar(2*ce-3*re+1).addScaledVector(w,ce-2*re+G).addScaledVector(P,-2*ce+3*re).addScaledVector(L,ce-re)}let Id=(x,w,P=1e-4)=>x(w+P,new T).sub(x(w-P,new T)).normalize(),kM=.8,Ea=.93,Ld=40,yh=Id(sr,Math.PI),Mh=vh.clone().addScaledVector(yh,-Ld),Nd=Id(km,1e-4).lerp(it.center.clone().sub(Us).normalize(),.5).normalize(),Dd=(()=>{let x=Us.distanceTo(Mh);return{d0:Nd.clone().multiplyScalar(x*.9),d1:yh.clone().multiplyScalar(x*.9)}})();function Sh(x,w){if(x<Ea)return Fs(Us,Dd.d0,Mh,Dd.d1,x/Ea,w);let P=(x-Ea)/(1-Ea);return w.copy(Mh).addScaledVector(yh,Ld*(1-(1-P)**2))}let Ud=(()=>{let x=Cd.distanceTo(Us);return{d0:rr.clone().multiplyScalar(x*.8),d1:Nd.clone().multiplyScalar(x*.8)}})(),Vm=new T;Ot.launch=(()=>{let x=us.core.pos.clone().sub(mn.center);x.addScaledVector(rr,-x.dot(rr)).normalize();let w=mn.center.clone().addScaledVector(rr,3.5);return{pos:mn.center.clone().addScaledVector(x,15).addScaledVector(rr,1.5).addScaledVector(tn,2),look:w}})();let Gm=new T(.3,.3,.9).normalize(),VM=fn.clone(),Ra=(()=>{let w=[],P=ce=>Sh(Math.min(ce+1e-4,1),new T).sub(Sh(Math.max(ce-1e-4,0),new T)).normalize(),L=P(0),G=it.center.clone().sub(Us).normalize();G.addScaledVector(L,-G.dot(L)).normalize();let Y=new Ct,re=new Rt;for(let ce=0;ce<=600;ce++){let De=P(ce/600);Y.setFromUnitVectors(L,De),G.applyQuaternion(Y).addScaledVector(De,-G.dot(De)).normalize(),L=De,w.push(new Ct().setFromRotationMatrix(re.makeBasis(new T().crossVectors(L,G),L,G)))}return w})();function Fd(x,w){let P=ue.clamp(x,0,1)*(Ra.length-1),L=Math.min(Math.floor(P),Ra.length-2);return w.copy(Ra[L]).slerp(Ra[L+1],P-L)}function bh(x,w,P){let L=w.clone().normalize(),G=it.center.clone().sub(x).normalize();return G.addScaledVector(L,-G.dot(L)).normalize(),P.setFromRotationMatrix(new Rt().makeBasis(new T().crossVectors(L,G),L,G))}let Od=(()=>{let x=or(2,new T),w=or(2.002,new T).sub(x);return bh(x,w,new Ct)})();function Hm(x,w,P){return P.copy(Gm).applyQuaternion(Mt.group.quaternion)}let Wm=tn.clone().applyQuaternion(Fd(0,new Ct).invert());Ot.bepiUp=()=>Wm.clone().applyQuaternion(Mt.group.quaternion);function or(x,w){return x<=1?Fs(Cd,Ud.d0,Us,Ud.d1,Math.max(x,0)**1.6,w):x<=2?Sh(x-1,w):sr(Math.PI+Math.PI*2*(x-2),w)}let co=new T,GM=new Rt,Ca=new T,Bd=new T;function wh(x,w){Ca.copy(us.mercury.pos).sub(V.center),Ca.addScaledVector(tn,-Ca.dot(tn)).normalize(),Bd.crossVectors(tn,Ca).normalize();let P=Math.PI*2*x,L=1.4*Xi.radius*Xh();return w.copy(V.center).addScaledVector(tn,L*Math.cos(P)).addScaledVector(Bd,L*Math.sin(P))}let Os=0,Bs=0;function zd(x,w){let P=Je.indexOf("launch"),L=Je.indexOf("bepi"),G=Je.indexOf("arrival");if(P<0||L<0||G<0){let ye=Je.indexOf("mercury");if(ye<0)return;let Pe=1-ue.smoothstep(Math.abs(x-ye),.12,.28);if(Mt.group.visible=Pe>.001,!Mt.group.visible){Bs=0;return}i||(Bs+=w);let he=Bs/9,$e=wh(he,Mt.group.position);Mt.group.quaternion.copy(Od);let st=$e.clone();t.push(()=>{Mt.group.scale.setScalar(ln*Ii),Tt.draw(st,wh,he,.3,Pe,to*ln*Ii),lo.visible=!1});return}let Y;if(x<L)Y=ue.clamp((x-(P-.6))/(L-P+.6),0,1),Os=0,Bs=0;else{let ye=ue.clamp((x-L)/gn,0,1);Os=ye*ye*(3-2*ye),Os>=1?i||(Bs+=w):Bs=0,Y=1+Os+Bs/Di.seconds}let re=or(Y,Mt.group.position);or(Y+.002,co).sub(re),co.lengthSq()<1e-14&&or(Y-.002,co).sub(re).negate(),Y>=1&&Y<=2?(Fd(Y-1,Mt.group.quaternion),Mt.group.quaternion.slerp(Od,ue.smoothstep(Y-1,.5,1))):co.lengthSq()>1e-14&&bh(re,co,Mt.group.quaternion);let ce=ue.smoothstep(x,P-.6,P-.45)*(1-ue.smoothstep(x,G+.2,G+.7));Mt.group.visible=ce>.001;let De=Y<=1?Math.min(Y,.35):Y<=2?.035:Math.min(.22,.02+(Y-2)),ae=re.clone();t.push(()=>{let ye=lf(ae);Mt.group.scale.setScalar(ln*Ii*ye),Tt.draw(ae,or,Y,De,ce,to*ln*Ii*ye);let Pe=ue.smoothstep(u.position.distanceTo(Ah),8,12);lo.material.opacity=.25*et.bOrbit*Pe,lo.visible=lo.material.opacity>.0025})}Ot.bepi=()=>({pos:Mt.group.position.clone().addScaledVector(Hm(Mt.group.position,Os,Vm),42*ln*Ii),look:Mt.group.position.clone()});let Ah=vh.clone().add(sr(0,new T)).multiplyScalar(.5);Ot.arrival={pos:Ah.clone().addScaledVector(fn,13),look:Ah};let ho=new kt;ho.position.copy(jn.center),ho.rotation.copy(Rd),h.add(ho);let Xm={uSunDir:{value:it.center.clone().sub(jn.center).normalize()},uRingNormal:{value:tn.clone().applyEuler(Rd)},uR:{value:jn.radius}},kd=(x,w)=>(x.onBeforeCompile=P=>{Object.assign(P.uniforms,Xm),P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRel;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRel = mat3(modelMatrix) * position;`),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
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
          }`).replace("#include <dithering_fragment>",w==="ring"?`#include <dithering_fragment>
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
            }`)},x),Vd=new rt(_(jn.radius),kd(new Ft({map:d("saturnmap.jpg"),shininess:6}),"planet"));ho.add(Vd),E.push([Vd,.05]);let Gd=d("saturnringcolortrans.png");Gd.repeat.set(.5,1);let Hd=new rt(new jo(jn.radius*1.1,jn.radius*2.3,160,1),kd(new Ft({map:Gd,transparent:!0,side:Mn,depthWrite:!1,shininess:0}),"ring"));Hd.rotation.x=-Math.PI/2,ho.add(Hd);let ar=xa({loader:f,textures:c,center:Li.center,radius:Li.radius,maps:{map:"enceladus.jpg",normal:"moonnormal2k.jpg#enceladus"},layers:ir,waves:[{inner:ir[0].top,outer:ir[1].top,omega:1,color:[.85,.95,1]},{inner:ir[0].top,outer:ir[1].top,omega:1,color:[1,.36,.06],speed:4,width:.04}],spinRate:.04});h.add(ar.root);let Pa=["europa","ganymede","callisto"].map(x=>{let w=Wi.find(L=>L.name===x),P=xa({loader:f,textures:c,center:new T,radius:w.radius,maps:{map:`${x}.jpg`,normal:`moonnormal2k.jpg#row-${x}`},layers:UM[x],spinRate:.03,axis:ht});return P.root.visible=!1,h.add(P.root),{name:x,radius:w.radius,planet:P,at:new T}}),qm=6800*It,Ym=27e3*It,Th=new T,uo=new T;function Eh(){uo.copy(Ot.juiceMap().pos).sub(Ue).normalize(),Th.crossVectors(ht,uo).normalize()}Ot.row=()=>(Eh(),{pos:Ue.clone().addScaledVector(uo,Ym),look:Ue.clone()}),Ot.probe=()=>(Eh(),{pos:Ue.clone().addScaledVector(uo,5.2*Wi[2].radius),look:Ue.clone()});let Ia=11,La=0,Wd=-1,fo=new kt;fo.visible=!1,h.add(fo);let Rh=9,Na=new Pt;Na.setAttribute("position",new Qe(new Float32Array(Rh*4*3),3));let Xd=new Hr(Na,new vn({color:13161184,transparent:!0,opacity:0,depthWrite:!1})),Da=We([1.3,1.75,2.4],4,6280432),qd=(x,w,P,L=3)=>{let G=P?new Qo({color:w,dashSize:.05,gapSize:.04,transparent:!0,opacity:0,depthWrite:!1}):new vn({color:w,transparent:!0,opacity:0,depthWrite:!1}),Y=new kt;for(let re=0;re<L;re++){let ce=new Pt;ce.setAttribute("position",new Qe(new Float32Array(x*3),3)),Y.add(new Ln(ce,G))}return Y.material=G,Y},Ch=(x,w)=>qd(129,x,w,w?1:3),Ph=Ch(8370431),Ih=Ch(10134445),lr=Ch(16777215,!0),Yd=(x,w)=>qd(41,x,w,w?1:3),Ua=Yd(8370431),zs=Yd(16777215,!0);fo.add(Xd,Da,Ph,Ih,lr,Ua,zs);let po={items:[...document.querySelectorAll("[data-probe]")],groups:[...document.querySelectorAll("[data-probe-chart]")],cursor:document.querySelector("[data-probe-cursor]")};{let x=L=>Array.from({length:121},(G,Y)=>`${(Y*2.5).toFixed(1)},${L(Y/120).toFixed(1)}`).join(" "),w=(L,G)=>{let Y=document.querySelector(L);Y&&Y.setAttribute("points",x(G))},P=(L,G=0)=>Math.sin(2*Math.PI*(2*L-G));w("[data-probe-line='ext']",L=>32-24*P(L)),w("[data-probe-line='ind']",L=>32+13*P(L,.06)),w("[data-probe-line='tideOcean']",L=>32-25*P(L+.125)),w("[data-probe-line='tideSolid']",L=>32-4*P(L+.125)),w("[data-probe-line='libOcean']",L=>32-25*P(L)),w("[data-probe-line='libSolid']",L=>32-7*P(L))}let Zd=0,Zm=new T,Jm=new T,$m=new T,Km=new T,Lh=new Ct,WM=new Rt;function jm(x){let w=Je.indexOf("ocean-probes"),P=et.gProbe;w>=0&&Math.abs(yt-w)<.5&&!i?La+=x:w>=0&&Math.abs(yt-w)>=.5&&(La=0),fo.visible=P>.01;let L=Math.floor(La/Ia)%3,G=La%Ia,Y=P*ue.smoothstep(G,0,.8)*(1-ue.smoothstep(G,Ia-.8,Ia)),re=[0,1,2].map(he=>he===L?Y:0);L!==Wd&&(Wd=L,po.items.forEach(he=>he.classList.toggle("active",+he.dataset.probe===L)),po.groups.forEach(he=>he.style.display=+he.dataset.probeChart===L?"":"none"));let ce=Wi[2].radius;fo.position.copy(Ue);let De=Zm.copy(u.position).sub(Ue).normalize(),ae=Jm.crossVectors(ht,De).normalize(),ye=$m.crossVectors(De,ae).normalize(),Pe=2*Math.PI*G/4.4;{let he=Km.copy(ye).multiplyScalar(-1).addScaledVector(ae,.55*Math.sin(Pe)).normalize(),$e=new T().crossVectors(he,De).normalize(),st=Na.attributes.position,_t=3.4*ce;for(let Vt=0;Vt<Rh;Vt++){let Be=(Vt-(Rh-1)/2)*.5*ce,ke=Math.sqrt(Math.max(0,(1.08*ce)**2-Be*Be)),tt=$e.clone().multiplyScalar(Be);[[-_t,-ke],[ke,_t]].forEach(([Et,Ut],_e)=>{let St=tt.clone().addScaledVector(he,Et),jt=tt.clone().addScaledVector(he,Ut);st.setXYZ(Vt*4+_e*2,St.x,St.y,St.z),st.setXYZ(Vt*4+_e*2+1,jt.x,jt.y,jt.z)})}st.needsUpdate=!0,Na.computeBoundingSphere(),Xd.material.opacity=.75*re[0];let zt=-Math.sin(Pe-.35);Da.quaternion.setFromUnitVectors(va,ae.clone().multiplyScalar(Math.sign(zt)||1)),Da.scale.setScalar(ce),Da.userData.material.opacity=.9*re[0]*Math.abs(zt)}{let he=ae.clone().multiplyScalar(Math.sign(lt.dot(ae))||1);Fa=he;let $e=new T().crossVectors(De,he).normalize(),st=2*Math.PI*G/5.5,_t=(zt,Vt)=>zt.children.forEach((Be,ke)=>{let tt=Be.geometry.attributes.position;for(let mt=0;mt<=128;mt++){let Et=mt/128*Math.PI*2,Ut=Math.cos(Et),_e=(1.06+.004*(ke-1))*ce*(1+Vt*(1.5*Ut*Ut-.5));tt.setXYZ(mt,_e*Ut*he.x+_e*Math.sin(Et)*$e.x,_e*Ut*he.y+_e*Math.sin(Et)*$e.y,_e*Ut*he.z+_e*Math.sin(Et)*$e.z)}tt.needsUpdate=!0,Be.geometry.computeBoundingSphere()});_t(Ph,.16+.09*Math.sin(st)),_t(Ih,.02+.012*Math.sin(st)),_t(lr,0),lr.children[0].computeLineDistances(),lr.material.dashSize=.06*ce,lr.material.gapSize=.05*ce,Ph.material.opacity=re[1],Ih.material.opacity=.9*re[1],lr.material.opacity=.45*re[1]}{let he=.3*Math.sin(2*Math.PI*G/5.5)*Math.min(1,re[2]/Math.max(P,.001)*1.2);Jd=he,Lh.setFromUnitVectors(va,ht);let $e=De.clone().applyQuaternion(Lh.clone().invert()),st=Math.atan2(-$e.z,$e.x),_t=(zt,Vt)=>zt.children.forEach((Be,ke)=>{let tt=Be.geometry.attributes.position;for(let mt=0;mt<=40;mt++){let Et=.12*Math.PI+.76*Math.PI*mt/40,Ut=st-1.05+Vt+.004*(ke-1),_e=new T(Math.sin(Et)*Math.cos(Ut),Math.cos(Et),-Math.sin(Et)*Math.sin(Ut)).multiplyScalar(1.006*ce).applyQuaternion(Lh);tt.setXYZ(mt,_e.x,_e.y,_e.z)}tt.needsUpdate=!0,Be.geometry.computeBoundingSphere()});_t(Ua,he),_t(zs,0),zs.children[0].computeLineDistances(),zs.material.dashSize=.05*ce,zs.material.gapSize=.04*ce,Ua.material.opacity=re[2],Ua.material.depthTest=zs.material.depthTest=!0,zs.material.opacity=.85*re[2],$d=re[2]}if(Qm(re[1]),po.cursor&&P>.01){let he=G%5.5/5.5*150+0;po.cursor.setAttribute("x1",he.toFixed(1)),po.cursor.setAttribute("x2",he.toFixed(1))}for(let he of Pa)he.name!=="ganymede"&&P>.9&&(he.planet.root.visible=!1)}let Jd=0,$d=0,Fa=null,cr=document.createElement("div");cr.style.cssText="position:fixed;left:0;top:0;pointer-events:none;color:#cbd5e1;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;opacity:0;z-index:2;transition:opacity 0.3s",document.body.append(cr);function Qm(x){if(!Fa||x<.02){cr.style.opacity="0";return}let w=Ue.clone().addScaledVector(Fa,1.55*Wi[2].radius).project(u),P=Math.sign(Fa.dot(new T(1,0,0).applyQuaternion(u.quaternion)))<0;cr.textContent=P?"\u2190 Jupiter":"Jupiter \u2192",cr.style.opacity=x.toFixed(2),cr.style.transform=`translate(${(w.x+1)/2*innerWidth}px, ${(1-w.y)/2*innerHeight}px) translate(${P?"-100%":"0"}, -50%)`}function e0(){let x=et.gRow,w=x>.001;for(let[P,L]of Pa.entries()){let G=ze.find(re=>re.name===L.name);if(L.planet.root.visible=w,G.mesh.visible=!(x>.3||w&&L.name!=="ganymede"),!w)continue;Eh();let Y=Ue.clone().addScaledVector(Th,(P-1)*qm);if(L.name==="ganymede")L.at.copy(Ue),L.fade=ue.smoothstep(x,0,.3);else{let re=Y.clone().addScaledVector(uo,-4e5*It).addScaledVector(Th,(P-1)*15e4*It);L.at.copy(re).lerp(Y,1-(1-ue.clamp(x,0,1))**3),L.fade=1}L.planet.setCenter(L.at)}}{let x=ar.surface.material.normalMap;x.wrapS=x.wrapT=qs,x.repeat.set(6,3),ar.surface.material.normalScale.set(.4,.4)}let Oa={low:new Xe(ir[1].low),high:new Xe(ir[1].high),hotLow:new Xe("#4a1d3a"),hotHigh:new Xe("#b4532a")},Kd=zM(Li.center,Li.radius);h.add(Kd.points);let jd=[[.2,1],[.47,.5],[.66,.8],[.85,.35]],Qd=x=>.06+.04*x+jd.reduce((w,[P,L])=>w+L/(1+((x-P)/.022)**2),0),Nh=[.06,.2,.33,.47,.56,.66,.76,.85,.95],t0=x=>{let w=Nh.length-1,P=Math.floor(x/2.4)%(2*w),[L,G]=P<w?[P,P+1]:[2*w-P,2*w-P-1];return ue.lerp(Nh[L],Nh[G],ue.smoothstep(x/2.4%1,.55,1))},mo={curve:document.querySelector("[data-response]"),sweep:document.querySelector("[data-sweep]")};if(mo.curve){let x=[];for(let w=0;w<=300;w++)x.push(`${w},${(88-80*Math.min(Qd(w/300),1.05)).toFixed(1)}`);mo.curve.setAttribute("points",x.join(" "))}let $i={date:document.querySelector(".journey-date"),passes:document.querySelector(".journey-passes"),labels:document.querySelector(".journey-labels"),chapters:[...document.querySelectorAll(".journey-chapters a")]},XM={launch:"bepi",bepi:"bepi",arrival:"bepi",mercury:"bepi","mercury-orbit":"bepi","juice-cruise":"juice",jupiter:"juice",juice:"juice","juice-map":"juice","juice-gravity":"juice","juice-field":"juice","ocean-worlds":"icy","ocean-depth":"icy",enceladus:"enceladus","enceladus-ocean":"enceladus","enceladus-resonance":"enceladus",sun:"sun",end:"sun"},n0={"bepi-pass":"mercury","juice-pass":"jupiter","juice-tour":"jupiter",mercury:"mercury",ganymede:"jupiter","ocean-worlds":"jupiter","ocean-depth":"jupiter","ocean-probes":"jupiter","enceladus-ocean":"enceladus","enceladus-resonance":"enceladus",sun:"sun",end:"sun"},i0={mercury:"mercury",jupiter:"jupiter",enceladus:"enceladus",sun:"sun"},s0=[...document.querySelectorAll(".journey-parts")],go=()=>et.xMap,r0=()=>et.jOrbits*(qe?1-qe.ramp*ue.smoothstep(qe.clock,.004,.025):1)*(1-ue.smoothstep(pi,.004,.025)),o0=x=>{let w=new T;return()=>ze.find(P=>P.name===x).mesh.getWorldPosition(w)},a0=[["Sun",()=>it.center,"-50%, 60%",go],["Mercury",()=>Ba,"-115%, -50%",go],["Earth",()=>mn.center,"15%, -50%",go],["Jupiter",()=>en.center,"-50%, -170%",go],["Saturn",()=>jn.center,"-50%, -170%",go],...["Io","Europa","Ganymede","Callisto"].map(x=>[x,o0(x.toLowerCase()),"-50%, -190%",r0,"moon"]),...Pa.map(x=>[x.name[0].toUpperCase()+x.name.slice(1),()=>x.at.clone().addScaledVector(ht,-x.radius*1.25),"-50%, 0%",()=>ue.smoothstep(et.gRow,.7,1)*(1-et.gProbe),"moon"])].map(([x,w,P,L,G])=>{let Y=document.createElement("span");return Y.textContent=x,G&&(Y.className=G),$i.labels?.append(Y),{el:Y,at:w,anchor:P,when:L}}),hr=new T,ef=null,tf="";function l0(x){if(!$i.date)return;let w=x>=0?et.jOrbits*(1-dr)*(qe?qe.ramp:1):0;if($i.date.style.opacity=w.toFixed(2),w<.01)return;let P=Ze(x);P!==tf&&($i.date.firstElementChild.textContent=tf=P)}let rn={panel:document.querySelector(".journey-tour"),range:document.querySelector(".journey-tour-range"),marks:document.querySelector(".journey-tour-marks"),open:document.querySelector(".journey-tour-open"),close:document.querySelector(".journey-tour-close"),milestones:[...document.querySelectorAll(".journey-tour-milestone")]},Dh=()=>{};if(rn.panel&&rn.range&&rn.open){let G=function(){P=(le.K-1)*le.step,rn.range.max=String(P);let ae=ye=>`${100*ye/P}%`;for(let ye of[2032,2033,2034]){let Pe=document.createElement("span");Pe.className="year",Pe.style.left=ae(x(`${ye}-01-01`)),Pe.textContent=ye,rn.marks.append(Pe)}for(let ye of rn.milestones){ye.day=x(ye.dataset.date);let Pe=document.createElement("span");Pe.className="dot",Pe.style.left=ae(ye.day),rn.marks.append(Pe),ye.dot=Pe}rn.open.hidden=!1,L=!0},re=function(){let ae=Number(rn.range.value);qe&&!qe.closing&&(qe.target=w(ae)),rn.range.setAttribute("aria-valuetext",Ze(ae/le.step)),Dh()},ce=function(){if(!L)return;let ae=Math.max(0,Aa(yt));qe={clock:qe?.clock??ae,target:ae,ramp:qe?.ramp??0,closing:!1,back:ae},document.documentElement.classList.add("journey-touring"),rn.panel.hidden=!1,rn.range.value=String(v(qe.back)*le.step),re(),rn.range.focus({preventScroll:!0})},De=function(){qe&&(qe.closing=!0,qe.target=qe.back,document.documentElement.classList.remove("journey-touring"),rn.panel.hidden=!0,rn.open.focus({preventScroll:!0}))},x=ae=>Date.parse(ae)/864e5+24405875e-1-le.jd0,w=ae=>{let ye=ue.clamp(ae/le.step,0,le.K-1),Pe=Math.min(Math.floor(ye),le.K-2);return ue.lerp(le.cum[Pe],le.cum[Pe+1],ye-Pe)},P=0,L=!1,Y=setInterval(()=>{le&&(clearInterval(Y),G())},300);Dh=()=>{if(!L)return;let ae=Number(rn.range.value),ye=rn.marks.clientWidth;for(let[Pe,he]of rn.milestones.entries()){let $e=Math.abs(ae-he.day);(Pe===0&&ae<he.day||Pe===rn.milestones.length-1&&ae>he.day)&&($e=0);let st=1-ue.smoothstep($e,25,70);he.style.opacity=st.toFixed(2),he.style.visibility=st>.01?"visible":"hidden",he.dot.classList.toggle("near",st>.5);let _t=he.offsetWidth/2,zt=he.day/P*ye;he.style.left=`${ue.clamp(zt,_t,ye-_t)}px`}},rn.range.addEventListener("input",re),addEventListener("resize",Dh),rn.open.addEventListener("click",ce),rn.close?.addEventListener("click",De),addEventListener("keydown",ae=>{ae.key==="Escape"&&qe&&!qe.closing&&De()}),addEventListener("wheel",ae=>{if(!qe||qe.closing)return;ae.preventDefault();let ye=(ae.deltaX+ae.deltaY)*(ae.deltaMode===1?16:1)*.12;rn.range.value=String(ue.clamp(Number(rn.range.value)+ye,0,P)),re()},{passive:!1})}let nf="";function c0(x,w){if(!$i.passes)return;let P=x>.02?w*(1-dr):0;if($i.passes.style.opacity=P.toFixed(2),P<.01)return;let L=Math.round(x*Nt),G=Math.floor(L/24),Y=`Pass ${Math.min(kn*B.length,Math.floor(x)+1)} \xB7 ${G?`${G} d `:""}${L%24} h`;Y!==nf&&($i.passes.firstElementChild.textContent=nf=Y)}function h0(x){let w=n0[Je[Math.round(x)]]??"earth",P=i0[w]??"earth";if(w!==ef){for(let G of $i.chapters)G.setAttribute("aria-current",String(G.dataset.chapter===P||G.dataset.part===w));for(let G of s0){let Y=G.dataset.act===P;G.classList.toggle("open",Y),G.inert=!Y}ef=w}let L=hs.getBoundingClientRect();for(let G of a0){let Y=G.when();if(Y<.01){G.el.style.opacity="0";continue}hr.copy(G.at()).project(u);let re=hr.z<1&&Math.abs(hr.x)<1.1&&Math.abs(hr.y)<1.1;G.el.style.opacity=re?Y.toFixed(2):"0",G.el.style.transform=`translate(${(hr.x+1)/2*L.width}px, ${(1-hr.y)/2*L.height}px) translate(${G.anchor})`}}let Je=uh.map(x=>x.dataset.stop),Gn=Je.map((x,w)=>({def:us[x]??us.earth,cardOnLeft:w%2===0,fx:Object.fromEntries(Ed.map(P=>[P,DM[x]?.[P]??0])),pos:new T,posNarrow:new T,lookWide:new T,lookNarrow:new T})),Ba=new T,sf=0,rf=new T,u0=new T;function d0(){for(let x of Gn){let w=x.def,P=w.pos,L=w.look;w.follow&&({pos:P,look:L}=w.follow()),x.pos.copy(P),(x.target??(x.target=new T)).copy(L),rf.copy(L).sub(P).normalize(),u0.crossVectors(rf,tn).normalize(),x.lookWide.copy(L),x.lookNarrow.copy(L),x.posNarrow.copy(L).lerp(P,w.narrowBack??1.15)}}let $n=innerWidth<768;function _o(){let x=scrollY+innerHeight/2,w=uh.map(P=>$n?P.offsetTop+innerHeight/2:P.offsetTop+P.offsetHeight/2);if(x<=w[0])return 0;for(let P=0;P<w.length-1;P++)if(x<w[P+1]){let L=(x-w[P])/(w[P+1]-w[P]);return P+($n?ue.smoothstep(L,.35,.95):ue.smoothstep(L,.15,.85))}return w.length-1}let et=Object.fromEntries(Ed.map(x=>[x,0]));function Uh(x){let w=Math.min(Math.floor(x),Gn.length-1),P=Math.min(w+1,Gn.length-1),L=x-w,G=ya()[Je[w]];G&&P!==w&&(L=Math.max(0,(L-G[0])/(1-G[0])));for(let Y of Ed){let re=Gn[w].fx[Y],ce=Gn[P].fx[Y],De=ce<re?ue.smoothstep(L,0,.5):ce>re?ue.smoothstep(L,.5,1):L;et[Y]=ue.lerp(re,ce,De)}}let _n=new T,xi=new T,oi=new T,ur=new T,vi=new Ct,yi=new Ct,dr=0,ds=0,Fh=!1,za=null,Oh=!1,ka=null,xo=0,Bh=-1,zh=-1,kh=!1,of=(x,w)=>Math.max(x,w)/Math.min(x,w)>3e3&&Math.min(x,w)<.02,af=!1,f0=(x,w)=>af&&of(x,w),fr=0,Va=1;function lf(x){if(fr<.001)return 1;let w=u.position.distanceTo(x);return 1+fr*(Math.max(1,w/Va)**.75-1)}let fs=new T;function cf(x){dr=0,ds=0,xo=0,kh=!1,fr=0,Fh=!1,za=null,et.gRow>.001&&(za=u.up.clone().lerp(ht,et.gRow).normalize()),Oh=!1,ka=null,d0();let w=Math.min(Math.floor(x),Gn.length-1),P=Math.min(w+1,Gn.length-1),L=x-w;ks[Je[w]]&&w>0&&P>w?(w-=1,L=(1+L)/2):ks[Je[P]]&&P+1<Gn.length&&(P+=1,L/=2);let G=ya()[Je[w]];if(G&&P!==w){let[Be,ke]=G;if(L<Be){_n.copy($n?Gn[w].posNarrow:Gn[w].pos),xi.copy($n?Gn[w].lookNarrow:Gn[w].lookWide),ke?dr=ue.smoothstep(L,0,.06)*(1-ue.smoothstep(L,Be-.04,Be)):Oh=!0,Fh=ke,za=Je[w]==="bepi"?Ot.bepiUp():null;return}L=(L-Be)/(1-Be)}let Y=Gn[w],re=Gn[P],ce=$n?Y.posNarrow:Y.pos,De=$n?re.posNarrow:re.pos,ae=$n?Y.lookNarrow:Y.lookWide,ye=$n?re.lookNarrow:re.lookWide,Pe=ce.distanceTo(Y.target),he=De.distanceTo(re.target),$e=ce.distanceTo(De);if(le&&!qe&&Je[w]==="jupiter"&&Je[P]==="juice"){let Be=Ue,ke=ce.clone().sub(Be),tt=De.clone().sub(Be),mt=Math.exp(ue.lerp(Math.log(ke.length()),Math.log(tt.length()),C(L)));ke.normalize().applyQuaternion(new Ct().slerp(new Ct().setFromUnitVectors(ke.clone().normalize(),tt.normalize()),C(L))),_n.copy(Be).addScaledVector(ke,mt),xi.copy(ae).lerp(Be,ue.smoothstep(L,0,.3)),ka={d0:ce.distanceTo(Be),d1:De.distanceTo(Be)};return}if(Je[w]==="mercury"&&Je[P]==="juice-cruise"){if(fs.copy(ye).sub(ce).normalize(),fr=1,Va=he,L<.22){let Et=C(L/.22);_n.copy(ce),oi.copy(ae).sub(ce);let Ut=Math.exp(ue.lerp(Math.log(oi.length()),Math.log(ye.distanceTo(ce)),Et));vi.setFromUnitVectors(oi.normalize(),fs),yi.identity().slerp(vi,Et),xi.copy(oi.applyQuaternion(yi)).multiplyScalar(Ut).add(ce);return}let ke=(L-.22)/(1-.22),tt=ce.distanceTo(De),mt=ke<.5?Pe*((tt/(2*Pe)+1)**(ke/.5)-1):tt-he*((tt/(2*he)+1)**((1-ke)/.5)-1);_n.copy(ce).addScaledVector(fs,mt),xi.copy(ye),ds=ue.smoothstep(ke,.12,.3)*(1-ue.smoothstep(ke,.7,.88)),dr=ds;return}let st=!1;if(st){let Be=Pe<he,ke=Be?L:1-L;fr=1-ue.smoothstep(ke,.5,.9),Va=Math.min(Pe,he);let tt=L<.5?Pe*(($e/(2*Pe)+1)**(L/.5)-1):$e-he*(($e/(2*he)+1)**((1-L)/.5)-1),mt=Be?ye:ae,Et=Be?ce:De,Ut=Be?De:ce,_e=mt.clone().sub(Et).normalize().multiplyScalar($e*.7),St=mt.clone().sub(Ut).normalize().multiplyScalar($e*.7);Be?Fs(ce,_e,De,St,tt/$e,_n):Fs(ce,St.negate(),De,_e.negate(),tt/$e,_n);let jt=(Be?Y:re).target,yn=Be?ye:ae,ai=jt.clone().sub(_n),Ke=yn.clone().sub(_n),Qt=ue.smoothstep(ke,.04,.4),Hn=Math.exp(ue.lerp(Math.log(ai.length()),Math.log(Ke.length()),Qt));vi.setFromUnitVectors(ai.normalize(),Ke.normalize()),yi.identity().slerp(vi,Qt),xi.copy(ai.applyQuaternion(yi)).multiplyScalar(Hn).add(_n);return}if(of(Pe,he)&&!af&&!st){let Be=Pe<he,ke=Be?L:1-L,tt=(Be?Y:re).target,mt=Be?ce:De,Et=Be?De:ce,Ut=Be?ye:ae;oi.copy(mt).sub(tt),ur.copy(Et).sub(tt);let _e=oi.length(),St=ur.length();vi.setFromUnitVectors(oi.normalize(),ur.normalize()),yi.identity().slerp(vi,ue.smoothstep(ke,.05,.95));let jt=Math.exp(ue.lerp(Math.log(_e),Math.log(St),C(ke)));_n.copy(tt).addScaledVector(oi.applyQuaternion(yi),jt);let yn=tt.clone().sub(_n),ai=Ut.clone().sub(_n),Ke=ue.smoothstep(ke,.62,1),Qt=ue.lerp(yn.length(),ai.length(),Ke);vi.setFromUnitVectors(yn.normalize(),ai.normalize()),yi.identity().slerp(vi,Ke),xi.copy(yn.applyQuaternion(yi)).multiplyScalar(Qt).add(_n),fr=1-ue.smoothstep(ke,.8,1),Va=Math.min(Pe,he);return}if(f0(Pe,he)){let Be=L>=.5;_n.copy(Be?De:ce),xi.copy(Be?ye:ae),xo=ue.smoothstep(L,.25,.45)*(1-ue.smoothstep(L,.55,.75)),Bh=Be?P:w,kh=!0;return}oi.copy(ae).sub(ce),ur.copy(ye).sub(De);let _t=oi.length(),zt=ur.length();vi.setFromUnitVectors(oi.normalize(),ur.normalize());let Vt=Be=>{yi.identity().slerp(vi,Be),xi.copy(oi).applyQuaternion(yi).multiplyScalar(Math.exp(ue.lerp(Math.log(_t+1e-9),Math.log(zt+1e-9),Be))).add(_n)};if($e<4*Math.min(Pe,he))_n.lerpVectors(ce,De,L),vi.angleTo(yi.identity())<.6?xi.lerpVectors(ae,ye,L):Vt(ue.smoothstep(L,0,1));else{let Be=L,ke=Be<.5?Pe*(($e/(2*Pe)+1)**(Be/.5)-1):$e-he*(($e/(2*he)+1)**((1-Be)/.5)-1);dr=ue.smoothstep(L,.12,.3)*(1-ue.smoothstep(L,.7,.88)),_n.lerpVectors(ce,De,ke/$e),$e>5e3&&(ds=ue.smoothstep(L,.2,.36)*(1-ue.smoothstep(L,.64,.8)),fs.copy(De).sub(ce).normalize()),Vt(ue.smoothstep(L,.04,.96))}}let ks={"bepi-pass":{name:"BepiColombo",note:"ESA \xB7 JAXA, on its way to Mercury"},"juice-pass":{name:"JUICE",note:"ESA, on its way to Jupiter"}},ps=document.createElement("div");ps.className="journey-flyby",ps.style.cssText="position:fixed;left:0;top:0;pointer-events:none;color:#e5e7eb;font-size:0.8rem;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;opacity:0;z-index:2;text-shadow:0 0 6px #000",document.body.append(ps);let Ga=1/0,ms=new T,hf=new T,uf=new T,Vh=new T;function p0(x){Ga=1/0;let w=Math.floor(x),P=x-w,L=ks[Je[w]]?Je[w]:ks[Je[w+1]]?Je[w+1]:null,G=L===Je[w]?P:P-1,Y=ks[L];if(!Y||Math.abs(G)>=.6){ps.style.opacity="0";return}let re=L==="bepi-pass",ce=re?Mt.group:ge,De=re?to*ln*Ii:eo*ln*ri;t.push(()=>{u.updateMatrixWorld(),hf.set(0,0,-1).applyQuaternion(u.quaternion),uf.set(1,0,0).applyQuaternion(u.quaternion),Vh.set(0,1,0).applyQuaternion(u.quaternion);let ae=C(Math.min(Math.abs(G)/.6,1)),ye=De*(G<0?ue.lerp(5.5,30,ae):ue.lerp(5.5,-10,ae)),Pe=De*ue.lerp($n?.3:.95,2.6,ae),he=i?0:.06*De*Math.sin(performance.now()/1600);if(ms.copy(u.position).addScaledVector(hf,ye).addScaledVector(uf,Pe).addScaledVector(Vh,-.3*De+he),ce.position.copy(ms),ce.visible=!0,re)bh(ms,fs,Mt.group.quaternion),Mt.group.scale.setScalar(ln*Ii),Tt.draw(ms,wh,0,0,0,De);else{let _t=it.center.clone().sub(ms).normalize(),zt=new T().crossVectors(ht,_t).normalize(),Vt=new T().crossVectors(_t,zt);ge.quaternion.setFromRotationMatrix(Bt.makeBasis(zt,Vt,_t)),ge.scale.setScalar(ln*ri),wt.draw(ms,fi,0,0,0,De)}Ga=Math.max(u.position.distanceTo(ms)-De,.2*De);let $e=ms.clone().addScaledVector(Vh,-.8*De).project(u),st=1-ue.smoothstep(Math.abs(G),.3,.45);ps.innerHTML=`${Y.name} <span style="opacity:.6;text-transform:none;letter-spacing:0">\xB7 ${Y.note}</span>`,ps.style.opacity=ye>0&&!$n?st.toFixed(3):"0",ps.style.transform=`translate(${($e.x+1)/2*innerWidth}px, ${(1-$e.y)/2*innerHeight}px) translate(-50%, 0)`})}let Gh=new T;function m0(){return[[mn.center,mn.radius],[V.center,Xi.radius*Xh()*1.5],[it.center,it.radius],[en.center,en.radius],[jn.center,jn.radius*2.3],[Li.center,Li.radius],[Ue,Ie.radius*Ve()],[ge.position,ge.visible?eo*ln*ri:0],[Sa.center,Sa.radius],[Mt.group.position,Mt.group.visible?to*ln*Ii:0]]}function df(x){let w=1/0;for(let[P,L]of m0())Gh.copy(x).sub(P),Gh.length()<1.12*L&&x.copy(P).addScaledVector(Gh.normalize(),1.12*L),w=Math.min(w,Math.max(x.distanceTo(P)-L,.02*L));return w}let g0=.7,_0=Math.log(10),Vs=.01,Hh=1.1,x0=3.5,v0=.2,y0=.12,Ki=null,Ha=!0;function M0(){Ha=!1;let x=Math.round((Gn.length-1)/Vs)+1,w=[],P=[],L=[],G=qe;qe=null;for(let ae=0;ae<x;ae++){let ye=ae*Vs;Uh(ye),Ta(ye),zd(ye,0),cf(ye);let Pe=_n.clone(),he=df(Pe);Mt.group.visible&&(he=Math.min(he,Pe.distanceTo(Mt.group.position))),ge.visible&&(he=Math.min(he,Pe.distanceTo(ge.position))),w.push(xi.clone().sub(Pe).normalize()),L.push(kh),P.push(Math.log(Math.max(he,1e-9)))}qe=G,t.length=0;let Y=new Float32Array(x);for(let ae=0;ae<x;ae++){let ye=Math.max(0,ae-1),Pe=Math.min(x-1,ae+1),he=(Pe-ye)*Vs,$e=Math.max(w[ye].angleTo(w[Pe])/he/g0,Math.abs(P[Pe]-P[ye])/he/_0);Y[ae]=ue.clamp($e,1/Hh,40),L[ae]&&(Y[ae]=1/.45)}Ki=new Float32Array(x);let re=new Float32Array(x);for(let ae=0;ae<x;ae++){let ye=0,Pe=0;for(let he=Math.max(0,ae-3);he<=Math.min(x-1,ae+3);he++)ye+=Y[he],Pe++;re[ae]=ye/Pe}let ce=1/Vs;for(let ae=0;ae<x-1;ae+=ce){let ye=0;for(let he=ae;he<Math.min(ae+ce,x);he++)ye+=re[he]*Vs;let Pe=Math.max(1,ye/x0);for(let he=ae;he<Math.min(ae+ce,x);he++)Ki[he]=Math.min(Hh,Pe/re[he])}Ki[x-1]=Ki[x-2];let De=ya();for(let ae=0;ae<x;ae++){let ye=ae*Vs,Pe=Math.floor(ye),he=De[Je[Pe]];he&&ye-Pe<he[0]+.05&&(Ki[ae]=Math.min(Ki[ae],he[1]?v0:y0))}}let ff=x=>Math.min(Ki?Ki[ue.clamp(Math.round(x/Vs),0,Ki.length-1)]:Hh,S0(x));function S0(x){let w=Math.floor(x),P=x-w;return ks[Je[w]]&&P<.6||ks[Je[w+1]]&&P>.4?.26:1/0}function Wh(){$n!==innerWidth<768&&(Ha=!0),$n=innerWidth<768;let x=hs.clientWidth||innerWidth,w=hs.clientHeight||innerHeight;r.setSize(x,w,!1),u.aspect=x/w,u.fov=u.aspect<1?52:45,u.updateProjectionMatrix()}new ResizeObserver(Wh).observe(hs),Wh();let Xh=()=>1+(Xi.enlarge-1)*et.mOrbit,qh=0,Wa=0;function pf(x,w){let P=et.mOrbit;P<.001?qh=0:i||(qh+=x*Math.PI*2*P/Qn.secondsPerOrbit);let L=qh*ue.smoothstep(P,0,1);Dm(L,Ba),i||(Wa=(Wa+x*.05*(1-P))%(Math.PI*2));let G=i?0:.35*et.mLibration*Math.sin(w/1e3*(Math.PI*2/3)),Y=LM-Wa;return Y=Math.atan2(Math.sin(Y),Math.cos(Y)),sf=Wa+Y*ue.smoothstep(P,0,1)+1.5*L+G,L}let mf=()=>hs.classList.add("ready");l.load("earth",1).then(()=>(mf(),l.load("earth",2))),setTimeout(mf,3e3);let b0={mercury:Je.indexOf("bepi-pass"),sun:Je.indexOf("sun"),jupiter:Je.indexOf("juice-pass"),saturn:Je.indexOf("enceladus-ocean")};function Yh(x){for(let[w,P]of Object.entries(b0))P<0||(x>P-3&&l.load(w,1),x>P-1.5&&l.load(w,2))}let gf=!0;new IntersectionObserver(([x])=>gf=x.isIntersecting).observe(document.querySelector(".journey"));let w0=performance.now(),Zh=0,Xa=0;function A0(x){if(performance.now()-w0<1e4||(Xa++,Zh+=x,Xa<120))return;let w=Zh/Xa;Xa=0,Zh=0;let P=w>1/24?Math.max(1.25,a-.25):w<1/55?Math.min(o,a+.25):a;P!==a&&(a=P,r.setPixelRatio(a),Wh())}let yt=_o(),Ui=0,_f=uh.map(x=>x.querySelector(".journey-card")),qa=_f.map(()=>-1);function T0(x){let w=Math.floor(x),P=ya()[Je[w]];P&&x-w<P[0]?x=w:P&&(x=w+(x-w-P[0])/(1-P[0]));for(let[L,G]of _f.entries()){if(!G)continue;if($n){qa[L]!==1&&(G.style.opacity="",G.style.visibility="",G.style.transform="",qa[L]=1);continue}let Y=x-L,re=1-ue.smoothstep(Math.abs(Y),.38,.5);Math.abs(re-qa[L])<.005||(qa[L]=re,G.style.opacity=re.toFixed(3),G.style.visibility=re>.01?"visible":"hidden",G.style.pointerEvents=re>.5?"":"none",G.style.transform=`translateY(calc(-50% + ${((Y>=0?-1:1)*14*(1-re)).toFixed(1)}px))`)}}let E0=2.4,Ya=document.createElement("div");Ya.className="journey-dissolve",Ya.setAttribute("aria-hidden","true"),hs.after(Ya);let vo=document.createElement("div");vo.className="journey-veil",vo.setAttribute("aria-hidden","true"),document.body.append(vo);let yo=!1;for(let x of $i.chapters)x.addEventListener("click",w=>{let P=document.getElementById(x.getAttribute("href").slice(1));if(!P||yo)return;w.preventDefault(),vf(()=>{let G=$n?P.offsetTop:P.offsetTop+P.offsetHeight/2-innerHeight/2;scrollTo({top:G,behavior:"instant"}),yt=_o(),Ui=0,Mo=!0,history.replaceState(null,"",x.getAttribute("href")),Yh(yt)})});let R0=.5,Fi=null,pr=0;addEventListener("wheel",x=>{if(qe||x.ctrlKey||i)return;x.preventDefault();let w=x.deltaMode===1?40:x.deltaMode===2?innerHeight:1,P=document.documentElement.scrollHeight-innerHeight;Fi=ue.clamp((Fi??scrollY)+x.deltaY*w*R0,0,P),pr||(pr=performance.now(),requestAnimationFrame(xf))},{passive:!1});function xf(x){if(Fi===null){pr=0;return}let w=Math.min((x-pr)/1e3,.1);pr=x;let P=scrollY+(Fi-scrollY)*(1-Math.exp(-w*7));if(scrollTo({top:Math.abs(Fi-P)<.5?Fi:P,behavior:"instant"}),Math.abs(Fi-scrollY)<.5){Fi=null,pr=0;return}requestAnimationFrame(xf)}addEventListener("keydown",()=>{Fi=null}),addEventListener("pointerdown",()=>{Fi=null});function vf(x){if(yo=!0,i){x(),yo=!1;return}vo.classList.add("on"),setTimeout(()=>{x(),requestAnimationFrame(()=>requestAnimationFrame(()=>{vo.classList.remove("on"),yo=!1}))},320)}function C0(){vf(()=>{yt=_o(),Ui=0,Mo=!0,Yh(yt)})}Uh(yt),pf(0,performance.now()),window.__probe=()=>({fly:[Mt.group.visible,+u.position.distanceTo(Mt.group.position).toFixed(3),+u.near.toExponential(2),ps.style.opacity],bepi:[Mt.group.visible,...Mt.group.position.toArray().map(x=>+x.toFixed(2))],merc:V.center.toArray().map(x=>+x.toFixed(2)),cam:u.position.toArray().map(x=>+x.toFixed(2)),shown:yt,goal:_o(),at:Je[Math.floor(yt)],pace:ff(yt)});let yf=new Rt,Za=new Ct,Mo=!0,Mf=performance.now();function Jh(x){let w=Math.min(x-Mf,100)/1e3;if(Mf=x,!gf){requestAnimationFrame(Jh);return}A0(w);let P=i?0:x/1e3,L=i?1:1-Math.exp(-w*3);Ha&&M0();let G=qe?Je.indexOf("jupiter"):_o();!yo&&!qe&&Math.abs(G-yt)>2.5&&C0();let Y=ff(yt),re=yt;if(i)yt+=(G-yt)*L,Ui=0;else{let Ke=E0;Ui+=(Ke*Ke*(G-yt)-2*Ke*Ui)*w,Ui=ue.clamp(Ui,-Y,Y),yt+=Ui*w,Math.abs(G-yt)<1e-4&&Math.abs(Ui)<.001&&(yt=G,Ui=0)}let ce=w>0?Math.abs(yt-re)/w/Y:0,De=Oh?1:1-ue.smoothstep(ce,.05,.2);e=De<e?De:e+(De-e)*(1-Math.exp(-w*1.5)),qe&&(qe.clock+=(qe.target-qe.clock)*(i?1:1-Math.exp(-w*(qe.closing?5:2.2))),qe.ramp=ue.clamp(qe.ramp+(qe.closing?-w:w)/.8,0,1),qe.closing&&qe.ramp===0&&Math.abs(qe.clock-qe.back)<.002&&(qe=null)),Uh(yt),Ls=et.gMap>.01?Math.min(Ls+(i?0:w*.8*et.gMap),200):0,Yh(yt),T0(yt);let ae=pf(w,x);V.setCenter(Ba);let ye=Je.indexOf("jupiter"),Pe=Je.indexOf("juice"),he=ro(),$e=ye>=0&&yt>ye-.02&&yt<he+.6,st=gh(yt),_t=qe?-1:Aa(yt),zt=Je.indexOf("juice-tour"),Vt=Math.max(Je.indexOf("ganymede"),Je.indexOf("ocean-depth"),Je.indexOf("ocean-probes"));le&&zt>=0&&(yt<zt-.6?(pi=0,Ji=0):i?(pi=1,Ji=te):Math.abs(yt-zt)<.5&&(pi=Math.min(1,pi+w/te),Ji+=w));let Be=le&&zt>=0&&yt>zt-.6&&yt<Vt+.7;Re=Be;let ke=Be?v(pi):le&&qe?v(st):_t>=0?v(_t):-1;if(ke<0)de=null;else if(!qe)de={s0:0,phase:[0,0,0,0],story:!0};else if(!de||de.story){let Ke=Qt=>Qt-Math.PI*2*Math.round(Qt/(Math.PI*2));de={s0:st,phase:ze.map((Qt,Hn)=>Ke(Qt.phase-H(Hn,ke)))}}l0(ke);let tt=Je.indexOf("ganymede"),mt=Math.max(Je.indexOf("ocean-depth"),Je.indexOf("ocean-probes")),Et=le&&$e&&!qe||tt>=0&&yt>tt-.7&&yt<Math.max(tt,mt)+.7;if(!$e||ke>=0||Et)pe=null;else if(!pe){let Ke=((xt-Ie.phase)%(Math.PI*2)+Math.PI*2)%(Math.PI*2);pe={start:ze.map(Qt=>Qt.phase),advance:Ke+Math.PI*2}}let Ut=$e?C(st):0;for(let Ke of ze){if(ke>=0?Ke.phase=we(ze.indexOf(Ke),ke,qe?st:0):pe?Ke.phase=pe.start[ze.indexOf(Ke)]+pe.advance*(Wi[2].period/Ke.period)*Ut:!i&&!Et&&(Ke.phase+=w*Math.PI*2*(Wi[0].period/Ke.period)/IM),ke<0&&!pe&&ye>=0){let Hn=ue.clamp(yt-ye,-.4,Zi);Ke.phase+=Math.PI*2*(Wi[2].period/Ke.period)*(Hn-(Ke.scrollTurn??Hn)),Ke.scrollTurn=Hn}if(Ke.mesh.scale.setScalar(Ve()),Ke===Ie&&ka){let{d0:Hn,d1:Ja}=ka,P0=ue.clamp(u.position.distanceTo(Ue),Ja,Hn),I0=Math.log(Hn/P0)/Math.log(Hn/Ja);Ke.mesh.scale.setScalar(Nm**(1-I0))}let Qt=Ke.phase;Ke.shown=Qt,Ke.mesh.position.set(Math.cos(Qt)*Ke.orbit,0,-Math.sin(Qt)*Ke.orbit),Ke.mesh.rotation.y=Qt,Ke===Ie&&(Ke.mesh.rotation.y+=An*$(yt)),Ke.line.material.opacity=.35*et.jOrbits,Ke.line.visible=et.jOrbits>.001}Ta(yt),En(yt),zd(yt,w),p0(yt);let _e=Math.max(0,(Os-.52)/.3);Mt.update({thrust:1-ue.smoothstep(Os,.42,.5),separation:_e,time:P}),t.push(()=>{if(n=!1,_e>0){Mt.group.updateMatrixWorld(!0),Mt.mtm.getWorldPosition(s),u.updateMatrixWorld();let Ke=to*ln*Ii*1.2/u.position.distanceTo(s)*r.domElement.height/Math.tan(ue.degToRad(u.fov/2));s.applyMatrix4(u.matrixWorldInverse);let Qt=Math.tan(ue.degToRad(u.fov/2)),Hn=-s.z,Ja=Hn<=0||Math.abs(s.x/Hn)>1.15*Qt*u.aspect||Math.abs(s.y/Hn)>1.15*Qt;(Ke<3||Ja)&&(n=!0)}Mt.mtm.visible=!n}),cf(yt);let St=df(_n);if(u.position.copy(_n),yf.lookAt(u.position,xi,za??u.up),Za.setFromRotationMatrix(yf),xo>0&&Bh!==zh&&zh!==-1&&(Mo=!0),zh=xo>0?Bh:-1,Ya.style.opacity=xo.toFixed(3),i||Mo||Fh)u.quaternion.copy(Za);else{let Ke=u.quaternion.angleTo(Za);u.quaternion.rotateTowards(Za,Math.min(Ke*(1-Math.exp(-w*6)),w*.8))}Mo=!1,u.near=ue.clamp(.05*St,1e-7,5e3),u.updateProjectionMatrix();for(let Ke of t)Ke();if(t.length=0,Ga<1/0&&(u.near=Math.min(u.near,.05*Ga),u.updateProjectionMatrix()),u.updateMatrixWorld(),R.position.copy(u.position),R.scale.setScalar(u.near*.25),b(),A.update({dt:w,time:P,camera:u,wobble:et.eWobble,cut:et.eCut,waves:et.eWaves,field:et.eField,core:et.eCore,animate:!i}),V.update({dt:w,time:P,camera:u,cut:et.mCut,waves:et.mWaves,field:et.mField,animate:!i,spinAngle:sf,scale:Xh(),stretch:1+.45*et.mOrbit}),Z.orbits&&et.mOrbit>.5){let Ke=ae/(Math.PI*2);Z.orbits.textContent=Ke.toFixed(1),Z.spins.textContent=(1.5*Ke).toFixed(1)}let jt=i?jd[0][0]:t0(x/1e3),yn=ue.clamp((Qd(jt)-.1)/.8,0,1);e0();for(let Ke of Pa){if(!Ke.planet.root.visible)continue;let Qt=Ke.name==="ganymede";Qt&&!i&&(Zd+=w*.03),Ke.planet.update({dt:w,time:P,camera:u,cut:et.gDepth*(Qt?1-.55*$d:1),cutTurn:35*Math.PI/180,animate:!i,scale:Qt?1.003:1,spinAngle:Qt?Zd+Jd:void 0}),Ke.planet.surface.material.opacity=Ke.fade??1}jm(w),ar.update({dt:w,time:P,camera:u,cut:et.nCut,cutTurn:35*Math.PI/180,animate:!i,waves:[et.nWaves*(1-.6*yn*et.nHeat),et.nHeat*yn]}),Kd.update(P,et.nPlume);let ai=yn*et.nHeat;ar.layerColors.uLow.value[1].set(Oa.low).lerp(Oa.hotLow,ai),ar.layerColors.uHigh.value[1].set(Oa.high).lerp(Oa.hotHigh,ai),mo.sweep&&et.nHeat>.5&&(mo.sweep.setAttribute("x1",(jt*300).toFixed(1)),mo.sweep.setAttribute("x2",(jt*300).toFixed(1)));for(let Ke of ot)Ke.material.opacity=.35*et.xMap,Ke.visible=et.xMap>.001;if(D.material.opacity=Math.max(.6*et.mOrbit,.35*et.xMap),Me.visible=et.xMap>.001,Me.material.opacity=et.xMap,me.forEach(([Ke],Qt)=>Me.geometry.attributes.position.setXYZ(Qt,...(Ke??Ba).toArray())),Me.geometry.attributes.position.needsUpdate=!0,h0(yt),k.scale.setScalar(Math.max(it.radius*4.2,u.position.distanceTo(it.center)*.05)),O.uniforms.uOpacity.value=1-Math.max(et.eCut,et.eCore,et.eField*.6),U.visible=O.uniforms.uOpacity.value>.01,O.uniforms.uSun.value.copy(fh).transformDirection(u.matrixWorldInverse),!i)for(let[Ke,Qt]of E)Ke.rotation.y+=w*Qt;r.render(h,u),requestAnimationFrame(Jh)}requestAnimationFrame(Jh)}function zM(i,e,t=700){let n=[],s=[],r=[];for(let l=0;l<t;l++){let d=l%4-1.5,f=(Math.random()-.5)*.9,h=f*.5,u=d*.13+f*.08,g=new T(h,-Math.sqrt(Math.max(0,1-h*h-u*u)),u).multiplyScalar(e),y=new T((Math.random()-.5)*.5+h*.6,-1,(Math.random()-.5)*.5+u*.6).normalize();r.push(g.x,g.y,g.z),s.push(y.x,y.y,y.z),n.push(Math.random())}let o=new Pt;o.setAttribute("position",new Qe(r,3)),o.setAttribute("aDir",new Qe(s,3)),o.setAttribute("aSeed",new Qe(n,1));let a=new pn({uniforms:{uTime:{value:0},uOpacity:{value:0},uLength:{value:e*2.2},uScale:{value:innerHeight*.5},uSize:{value:e/.6}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1,blending:Bn}),c=new ws(o,a);return c.position.copy(i),c.frustumCulled=!1,{points:c,update(l,d){c.visible=d>.001,a.uniforms.uTime.value=l,a.uniforms.uOpacity.value=d,a.uniforms.uScale.value=innerHeight*.5}}}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
