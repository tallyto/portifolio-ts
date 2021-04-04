function soma(a:number, b:number):number {
  return a + b
}
describe("suite te testes typescript", () => {
  it("deve testar se 1 + 1 e igual a 2", () => {
   
    const result = soma(1,1)
    expect(result).toEqual(2)
  })
})