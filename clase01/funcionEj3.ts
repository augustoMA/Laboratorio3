function mostrarB(numero:number, cadena?:string):void
{
  if(cadena!=null)
  {
    for(let i=0; i<numero; i++)
    {
      console.log(cadena);
    }
  }
  else
  {
    console.log("-"+numero);
  }
}
