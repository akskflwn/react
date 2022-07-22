/**
 *  화살표 함수
 */

//map과 ()=>{}  한 세트




const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

let newArr = materials.map((e,idx)=>{
  return e.length;
});

console.log(newArr);

//회문 

let palindromes = [
  '스위스',
  '팥콩밭',
  '별똥별',
  '기러기',
  '토마토',
  '역삼역',
  '인도인',
  '필리핀',
  '다시합시다',
  '피카추',
  '여보안경안보여',
];

const contents = palindromes.filter((str)=>{
  if(str===str.split('').reverse('').join('')){
    return str;    
}});
console.log(contents);

