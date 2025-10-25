const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let total=0;
  const price=document.querySelectorAll('.prices');
  prices.forEach(p=>total+=Number(p.textcontent));
  const newrow=document.createElement('tr');
  newrow.innerHtml=`<td colspan="2"><strong>Total price: Rs ${total}</strong></td>`
  document.querySelector('table').appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

