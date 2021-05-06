const { render } = require("@testing-library/react");
import HomeComponent from '../home/HomeComponent'

describe("Testing", ()=>
{
  it('it is ',()=>{
    const div=document.createElement("div");
    render(<HomeComponent></HomeComponent>)
  })
})