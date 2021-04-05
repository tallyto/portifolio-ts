export function handlerValidationError(erro){
  const { details } = erro
  const erros: string[] = []
  details.forEach(erro => {
    erros.push(erro.message)
  });

  return erros.join('\n')
}