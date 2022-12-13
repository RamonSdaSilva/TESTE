function procurar(x,final,y,n)
{
if (x == final)
{
    let comparar = new Array(n);
    for(let i=0;i<n;i++)
        comparar[i]=0;
    comparar[0] = 1;
    comparar[1] = y[x];
    return comparar;
}
  
let comparar1 = procurar(x,
                            Math.floor((x + final) /
                                2), y, n);
  
let comparar2 = procurar(Math.floor((x + final) /
                                2 )+ 1,
                                final, y, n);
  
if (comparar1[1] > comparar2[1])
{
    let k = comparar1[0] + 1;

    comparar1[0] = k;
  
    comparar1[k] = comparar2[1];
  
    return comparar1;
}
else
{
    let k = comparar2[0] + 1;
  
    comparar2[0] = k;
  
    comparar2[k] = comparar1[1];
  
    return comparar2;
}
}
 
function procurar2(final,y)
{
    let comparar1 = procurar(0, final - 1,
                                y, final);
  
    let comparar2 = procurar(2, comparar1[0] + 2,
                                comparar1,
                                comparar1[0]);
  
    document.write(comparar2[1]);
}
 
let N = 10;
let y=[1, 2, 3, 4, 5, 6];
procurar2(N, y);