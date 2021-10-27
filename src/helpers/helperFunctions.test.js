//LANGKAH UNIT TEST WITH JEST
//1. import nama fungsi apa yg ingin di testing, cth import fungsi multiply
import {multiply} from './helperFunctions';

//2. pakai function test, kasih nama testnya(param1), buat arrow (param2)
test("testing function multiply", () => {
  //3. pakai fungsi expect(ini fungsi yg dites),//4. pakai fungsi toBe utk result yg diharapkan

  expect(multiply(1,2)).toBe(2)
})