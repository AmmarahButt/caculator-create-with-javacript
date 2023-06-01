

  function calc()
  {
    var no1 = parseInt(document.getElementById('no1').value);
    var no2 = parseInt(document.getElementById('no2').value);
    var oper = document.getElementById('operators').value;
    
    if (oper === '+')
{
    document.getElementById('result').value = no1 + no2;
}

if (oper === '-')
{
    document.getElementById('result').value = no1- no2;
}
if (oper === '/')
{
    document.getElementById('result').value = no1 /  no2;
}
if (oper === 'x')
{
    document.getElementById('result').value = no1 * no2;
}

  }
  