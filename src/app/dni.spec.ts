import { Dni } from './dni';

describe('Dni', () => {
  it('Error cuando se ingresa más de 9 caracteres.', () => {
    let code = "123456789S";
    let dni = new Dni(code);
    expect(dni).toBeGreaterThan(9)
    /*
    //Assert
    let code = "123456789S";
    //Act
    try{
      let dni = new Dni(code);
    }catch(error){
      console.log(error)
      expect(error).toEqual(new Error("Max 9 caracteres."))
    }*/

  });
  it('Error cuando se ingresa menos de 9 caracteres.', () => {
    let code = "1234567S";
    let dni = new Dni(code);
    expect(dni).toBeLessThan(9)
    /*//Assert
    let code = "1234567S";
    //Act
    try{
      let dni = new Dni(code);
    }catch(error){
      console.log(error)
      expect(error).toEqual(new Error("Min 9 caracteres."))
    }*/
  });
  it('Error cuando el ultimo caracter no es una letra'), () => {
    let code = "123456789";
    let dni = new Dni(code);
    expect(dni).toBeFalsy()
  }
});
