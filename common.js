import{initializeApp}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import{getFirestore}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import{getAuth}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
export*from"https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
export*from"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
const app=initializeApp({apiKey:"AIzaSyA7PiReo_5OZi6V9T0YIBFAL5e33bEmYlM",authDomain:"once-home.firebaseapp.com",projectId:"once-home",appId:"1:533333066502:web:56fe4e4b22aa090678d487"});
export const db=getFirestore(app),auth=getAuth(app);
export const day=()=>new Date().toLocaleDateString("sv-SE");
export const SAUCES=["นม","สังขยา","ช็อคโกแล็ต","นมข้น","น้ำตาล"];
const M=(id,n,p,c,pick=0)=>({id,n,p,c,pick});
const T="ขนมปังปิ้งเนยซอส",S="เซ็ตพิเศษ",D="เครื่องดื่ม";
export const MENU=[
M("a1","ขนมปังปิ้งเนยซอสนม",25,T),M("a2","ขนมปังปิ้งเนยซอสสังขยา",25,T),M("a3","ขนมปังปิ้งเนยซอสช็อคโกแล็ต",25,T),M("a4","ขนมปังปิ้งเนยนมข้นหวาน",25,T),M("a5","ขนมปังปิ้งเนยน้ำตาล",25,T),
M("s1","ขนมปังปิ้งสามสหาย",30,S),M("s2","ขนมปังปิ้งทูโทน",30,S,2),
M("d1","ชาไทย",25,D),M("d2","ชาเขียวนม",25,D),M("d3","ชาดำเย็น",25,D),M("d4","ชามะนาว",25,D),M("d5","ชามะลิ",25,D),M("d6","ชาผลไม้",25,D),M("d7","โกโก้",25,D),M("d8","นมสด",25,D),M("d9","นมชมพู",25,D),M("d10","เวรี่ โกโก้",40,D)
];
