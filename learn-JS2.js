var orderCount = 0;
function getSubTotal(itemCount) {
  return(itemCount * 7.5)
}

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping ); 
  orderCount = orderCount + 1;
}

takeOrder('bacon','thin');
takeOrder('cheese','thin');
takeOrder('bacon','thick');

console.log(getSubTotal(orderCount));
