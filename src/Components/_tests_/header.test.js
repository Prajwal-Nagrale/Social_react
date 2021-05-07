const { render } = require("@testing-library/react");
import HeaderComponent from '../headers/HeaderComponent'

describe("Testing", ()=>
{
  it('it is ',()=>{
    const div=document.createElement("div");
    render(<HeaderComponent></HeaderComponent>,div)
  })
})